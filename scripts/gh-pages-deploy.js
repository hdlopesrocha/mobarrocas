/* eslint-disable no-console */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(cmd, options = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...options });
}

(async () => {
  try {
    const root = path.resolve(__dirname, "..");
    const folderName = "dist";
    const folder = path.join(root, folderName);

    console.log("Building for production...");
    run("npm run build", { cwd: root });

    if (!fs.existsSync(folder)) {
      throw new Error(`Build folder "${folderName}" not found after build`);
    }

    // SPA fallback on GitHub Pages: serve index.html for unknown routes
    fs.copyFileSync(path.join(folder, "index.html"), path.join(folder, "404.html"));
    // Prevent Jekyll processing (allows files/dirs starting with _)
    fs.writeFileSync(path.join(folder, ".nojekyll"), "");

    const branch = "gh-pages";
    const remoteUrl = execSync("git config --get remote.origin.url", { cwd: root })
      .toString()
      .trim();
    console.log(`Pushing ${folderName}/ to ${branch}...`);
    // Publish dist contents to gh-pages without touching the current branch
    run(`git init`, { cwd: folder });
    run(`git remote add origin ${remoteUrl}`, { cwd: folder });
    run(`git checkout -b ${branch}`, { cwd: folder });
    run(`git add --all`, { cwd: folder });
    run(`git -c user.name="gh-pages-deploy" -c user.email="gh-pages-deploy@github.com" commit -m "Deploy to ${branch}"`, { cwd: folder });
    run(`git push origin ${branch} --force`, { cwd: folder });

    console.log("Successfully deployed, check your GitHub Pages settings");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();

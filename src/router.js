import { createRouter , createWebHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProductsPage from './components/ProductsPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    }, {
        path: '/products',
        name: 'products',
        component: ProductsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
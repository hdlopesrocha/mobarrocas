<template>
    <div class="card">
        <div class="card-header">
            {{ header }}
        </div>
        <div class="card-body">
            <div v-html="body"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        header: String,
        body: String
    }
}
</script>

<style scoped>

</style>
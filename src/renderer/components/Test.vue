<template>
    <div>
        <h1>Test Component</h1>
        <h2>{{ count }}</h2>
        <button v-on:click="count++">Click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count : 0
        }
    }
}
</script>

<style scoped>
button {
    color: black
}
</style>

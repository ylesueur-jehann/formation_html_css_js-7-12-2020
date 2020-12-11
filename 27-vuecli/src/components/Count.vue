<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="increment()">
            Incrementer
        </button>
        <!-- <button @click="increment">Incrementer</button> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++;
            }
        },
    }
</script>

<style scoped>

</style>
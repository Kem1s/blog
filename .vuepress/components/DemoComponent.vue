<template>
    <div class="demo-component">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
        <button @click="onClick">Click me!</button>
    </div>
</template>

<script>
export default {
    name: "DemoComponent",
    data() {
        return {
            title: "Demo Component",
            message: "Hello from Vue!",
        }
    },
    methods: {
        onClick() {
            this.message = "Button clicked!"
        },
    },
}
</script>

<style>
.demo-component {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 10px 0;
}
</style>

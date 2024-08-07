<script>
    export default {
        name: "SomeComponent",

        data(){
            return {
            }
        },

        mounted() {
        },

        methods: {
        },

        props: [
            'obj'
        ]
    }
</script>


<template>
    <div>
        Some component
        <br><br>
        <div>color: {{ obj.color }}</div>
        <div>number: {{ obj.number }}</div>
        <div>isPublished: {{ obj.isPublished ? 'published' : 'not published'}}</div>
        <br><br>
    </div>
</template>


<style scoped>

</style>

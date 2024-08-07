<script>
    import CreateComponent from "@/components/CreateComponent.vue";
    import IndexComponent from "@/components/IndexComponent.vue";

    export default {
        name: "PostComponent",

        data(){
            return {
            }
        },

        mounted() {
        },

        methods: {
        },

        components: {
            CreateComponent,
            IndexComponent
        }
    }
</script>


<template>
    <div>
        Post component:
        <br><br>
        <CreateComponent ref="create"></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>


<style scoped>

</style>

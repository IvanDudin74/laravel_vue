<script setup>
    import SinglePostComponent from "@/components/SinglePostComponent.vue";
    import {onMounted} from "vue";

    function getPosts() {
        axios.get('/persons')
            .then(res => {
                this.persons = res.data;
            })
    }

    onMounted(function() {
        getPosts();
    })
</script>



<template>
    <div>
        Post component:
        <div class="q">
        </div>
        <br><br>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Weight</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.weight }}</td>
            </tr>
            </tbody>
        </table>
        <SinglePostComponent></SinglePostComponent>
    </div>
</template>

<style scoped>

</style>

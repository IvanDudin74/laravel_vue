<script>
    import SinglePostComponent from "@/components/SinglePostComponent.vue";
    //import {onMounted} from "vue";
    //import { ref } from 'vue'

    export default {
        name: "PostComponent",

        data(){
            return {
                persons: null
            }
        },

        mounted() {
            this.getPersons()
        },

        methods: {
            getPersons() {
                axios.get('/persons')
                    .then(res => {
                        this.persons = res.data;
                        console.log(this.persons);
                        })
                    .catch(error => {})
                    .finally({})
            }
        }
    }
</script>


<template>
    <div>
        Post component:
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

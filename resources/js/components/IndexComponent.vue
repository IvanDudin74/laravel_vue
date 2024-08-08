<script>
import EditComponent from "@/components/EditComponent.vue";
    export default {
        name: "IndexComponent",

        data(){
            return {
                people: null,
                editPersonId: null,
                name: null,
                age: null,
                weight: null,
            }
        },

        mounted() {
            this.getPeople()
        },

        methods: {
            getPeople() {
                axios.get('/api/people/')
                    .then(res => {
                        this.people = res.data
                    })
            },

            changeEditPersonId(id, name, age, weight) {
                this.editPersonId = id
                let editName = `edit_${id}`
                let fullEditName = this.$refs[editName][0]
                fullEditName.name = name
                fullEditName.age = age
                fullEditName.weight = weight
            },

            isEdit(id) {
                return id === this.editPersonId
            },

            deletePerson(id) {
                axios.delete(`/api/people/${id}`)
                    .then(res => {
                        this.getPeople()
                    })
            },
        },

        components: {
            EditComponent
        }
    }
</script>


<template>
    <div>
        Index component:
        <br><br>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">weight</th>
                <th scope="col" colspan="2" class="text-center">actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr :class="isEdit(person.id) ? 'd-none' : ''">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.weight }}</td>
                    <td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.weight)" class="btn btn-secondary">Edit</a></td>
                    <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-secondary">Delete</a></td>
                </tr>
                <Edit-component :person="person" :ref="`edit_${person.id}`"></Edit-component>
            </template>
            </tbody>
        </table>
    </div>
</template>


<style scoped>

</style>

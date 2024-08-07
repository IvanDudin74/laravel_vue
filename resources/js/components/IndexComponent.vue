<script>
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
                this.name = name
                this.age = age
                this.weight = weight
            },

            isEdit(id) {
                return id === this.editPersonId
            },

            updatePerson(id) {
                this.editPersonId = null
                axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, weight: this.weight})
                    .then(res => {
                        this.getPeople()
                    })
            }
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
                <th scope="col">action</th>
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
                </tr>
                <tr :class="isEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">
                    </th>
                    <td>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="name">
                    </td>
                    <td>
                        <input type="number" class="form-control" id="age" v-model="age" placeholder="age">
                    </td>
                    <td>
                        <input type="number" class="form-control" id="weight" v-model="weight" placeholder="weight">
                    </td>
                    <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-secondary">Update</a></td>
                </tr>
            </template>

            </tbody>
        </table>
    </div>
</template>


<style scoped>

</style>

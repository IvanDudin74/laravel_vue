<script>
    export default {
        name: "ShowComponent",

        data(){
            return {
            }
        },

        mounted() {
        },

        methods: {
            changeEditPersonId(id, name, age, weight) {
                this.$parent.editPersonId = id
                let editName = `edit_${id}`
                let fullEditName = this.$parent.$refs[editName][0]
                fullEditName.name = name
                fullEditName.age = age
                fullEditName.weight = weight
            },

            deletePerson(id) {
                axios.delete(`/api/people/${id}`)
                    .then(res => {
                        this.$parent.getPeople()
                    })
            },
        },

        props: [
            'person'
        ]
    }
</script>


<template>
    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.weight }}</td>
        <td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.weight)" class="btn btn-secondary">Edit</a></td>
        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-secondary">Delete</a></td>
    </tr>
</template>


<style scoped>

</style>

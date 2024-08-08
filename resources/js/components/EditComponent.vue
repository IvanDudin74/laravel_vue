<script>
    export default {
        name: "EditComponent",

        mounted() {
        },

        methods: {
            updatePerson(id) {
                this.$parent.editPersonId = null
                axios.patch(`/api/people/${id}`,
                    {name: this.$parent.name, age: this.$parent.age, weight: this.$parent.weight})
                    .then(res => {
                        this.$parent.getPeople()
                    })
            },

            props: [
                'person'
            ]
        }
    }
</script>


<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
        <th scope="row">
        </th>
        <td>
            <input type="text" class="form-control" id="name" v-model="person.name" placeholder="name">
        </td>
        <td>
            <input type="number" class="form-control" id="age" v-model="person.age" placeholder="age">
        </td>
        <td>
            <input type="number" class="form-control" id="weight" v-model="person.weight" placeholder="weight">
        </td>
        <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-secondary">Update</a></td>
    </tr>
</template>


<style scoped>

</style>

<script>
    export default {
        name: "EditComponent",

        data() {
            return{
                name: null,
                age: null,
                weight: null,
            }
        },

        mounted() {
        },

        methods: {

            updatePerson(id) {
                this.$parent.editPersonId = null
                axios.patch(`/api/people/${id}`,
                    {name: this.name,
                           age: this.age,
                        weight: this.weight,
                    })
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
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
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


<style scoped>

</style>

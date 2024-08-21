<script>
    import person from "../../store/modules/person";

    export default {
        name: "Show",

        computed: {
            person() {
                return this.$store.getters.person
            }
        },

        mounted() {
            this.$store.dispatch('getPerson', this.$route.params.id)
        },
    }
</script>

<template>
    This is Person/Show component
    <br>
    <div class="w-50" v-if="person">

        <table class="table table-dark table-stripe">
            <tbody>
            <tr>
                <th scope="col">Name:</th>
                <td scope="col">{{ person.name }}</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>{{ person.age }}</td>
            </tr>
            <tr>
                <th>Weight:</th>
                <td>{{ person.weight }}</td>
            </tr>
            </tbody>
        </table>
        <router-link :to="{name: 'person.edit', params: {id: person.id}}">
            Edit
        </router-link>
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: "Show",

        data() {
            return {
                person: null,
            }
        },

        methods: {
            getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                    .then(res => {
                        this.person = res.data.data
                        console.log(res);
                    })
            }
        },

        mounted() {
            this.getPerson()
        }
    }
</script>

<template>
    <div class="w-50" v-if="this.person">
        This is Person/Show component
        <table class="table table-dark table-stripe">
            <tbody>
            <tr>
                <th scope="col">Name:</th>
                <td scope="col">{{ this.person.name }}</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>{{ this.person.age }}</td>
            </tr>
            <tr>
                <th>Weight:</th>
                <td>{{ this.person.weight }}</td>
            </tr>
            </tbody>
        </table>
        <router-link :to="{name: 'person.edit', params: {id: this.person.id}}">
            Edit
        </router-link>
    </div>
</template>

<style scoped>

</style>

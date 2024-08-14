<script>
    export default {
        name: "Show",

        data() {
            /*return {
                person: null,
            }*/
        },

        methods: {
            /*getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                    .then(res => {
                        this.person = res.data.data
                    })
            },*/
        },

        computed: {
            person() {
                this.person = this.$store.state.person
            }
        },

        mounted() {
            //this.$store.dispatch('getPerson', this.$route.params.id)
            console.log(this.$store);
        },
    }
</script>

<template>
    <div class="w-50" v-if="this.person">
        This is Person/Show component
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
        <router-link :to="{name: 'person.edit', params: {id: this.person.id}}">
            Edit
        </router-link>
    </div>
</template>

<style scoped>

</style>

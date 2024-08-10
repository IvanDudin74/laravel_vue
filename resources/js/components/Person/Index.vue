<script>

    export default {

        name: "Index",

        data() {
            return {
                people: null,
            }
        },

        methods: {
            getPeople() {
                axios.get('/api/people/')
                    .then(res => {
                        this.people = res.data
                    })
            }
        },

        mounted() {
            this.getPeople();
        },
    }


</script>

<template>
    <div>
        <div>
            This is Person/Index component
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">weight</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.weight }}</td>
                    <td>
                        <router-link :to="{name: 'person.edit', params: {id: person.id}}">
                            Edit
                        </router-link>
                    </td>
                </tr>
                <!--<Show :person="person"></Show>-->
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>

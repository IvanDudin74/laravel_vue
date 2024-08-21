<script>

    export default {

        name: "Index",

        mounted() {
            this.$store.dispatch('getPeople')
        },

        computed: {
            people() {
                return this.$store.getters.people
            }
        }
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
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th scope="row">
                        <router-link :to="{name: 'person.show', params: {id: person.id}}">
                            {{ person.id }}
                        </router-link>
                    </th>
                    <td>
                        <router-link :to="{name: 'person.show', params: {id: person.id}}">
                            {{ person.name }}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{name: 'person.show', params: {id: person.id}}">
                            {{ person.age }}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{name: 'person.show', params: {id: person.id}}">
                            {{ person.weight }}
                        </router-link></td>
                    <td>
                        <router-link :to="{name: 'person.edit', params: {id: person.id}}">
                            Edit
                        </router-link>
                    </td>
                    <td>
                        <a href="#" @click.prevent="$store.dispatch('deletePerson', person.id)">
                            Delete
                        </a>
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

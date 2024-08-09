<script>
import EditComponent from "@/components/EditComponent.vue";
import ShowComponent from "@/components/ShowComponent.vue";
    export default {
        name: "IndexComponent",

        data(){
            return {
                people: null,
                editPersonId: null,
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

            isEdit(id) {
                return id === this.editPersonId
            },
        },

        components: {
            ShowComponent,
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
                <ShowComponent :person="person"></ShowComponent>
                <Edit-component :person="person" :ref="`edit_${person.id}`"></Edit-component>
            </template>
            </tbody>
        </table>
    </div>
</template>


<style scoped>

</style>

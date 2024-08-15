<script>
    export default {
        name: "Edit",

        data() {
            /*return {
                name: null,
                age: null,
                weight: null,
            }*/
        },

        methods: {
            /*updatePerson() {
                axios.patch(`/api/people/${this.$route.params.id}`,
                    {name: this.name, age: this.age, weight: this.weight})
                    .then(res => {
                        this.$router.push({name: 'person.show', params: {id: this.$route.params.id}});
                    })
            },*/

            /*getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                    .then(res => {
                        this.name = res.data.data.name
                        this.age = res.data.data.age
                        this.weight = res.data.data.weight
                    })
            },*/
        },

        computed: {
            isDisabled() {
                return !(this.$store.getters.person.name && this.$store.getters.person.age && this.$store.getters.person.weight)
            },

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
    <div v-if="person">
        <div>
            This is Person/Edit component
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="name" v-model="person.name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="age" v-model="person.age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="weight" v-model="person.weight" placeholder="weight">
        </div>
        <input :disabled="isDisabled" @click.prevent="$store.dispatch('updatePerson', {id: person.id, name: person.name, age: person.age, weight: person.weight})" class="btn btn-secondary" value="Update">
    </div>
</template>

<style scoped>

</style>

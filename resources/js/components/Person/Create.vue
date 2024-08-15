<script>
    export default {
        name: "Create",

        /*data() {
            return {
                name: null,
                age: null,
                weight: null,
            }
        },*/

        methods: {
            /*store() {
                axios.post('/api/people', {name: this.name, age: this.age, weight: this.weight})
                    .then(res => {
                        this.$router.push({name: 'person.index'});
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
        }
    }
</script>

<template>
    <div class="w-25">
        This is Person/Create component
        <br><br>
        <div class="mb-3">
            <input type="text" class="form-control" id="name" v-model="person" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="age" v-model="person" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="weight" v-model="person" placeholder="weight">
        </div>
        <input :disabled="isDisabled" @click.prevent="this.$store.dispatch('store')" class="btn btn-secondary" value="Add" id="send">
    </div>
</template>

<style scoped>

</style>

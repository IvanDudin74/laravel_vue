<script>
    export default {
        name: "Create",

        computed: {

            isDisabled() {
                return this.$store.getters.isDisabled
            },

            person() {
                return this.$store.getters.person
            }
        },

        mounted() {
            this.$store.commit('setPerson', {name: null, age: null, weight: null})
        }
    }
</script>

<template>
    <div class="w-25" v-if="person">
        This is Person/Create component
        <br><br>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="person.name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="person.age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="person.weight" placeholder="weight">
        </div>
        <input :disabled="isDisabled" @click.prevent="$store.dispatch('store', {name: person.name, age: person.age, weight: person.weight})" class="btn btn-secondary" value="Add" id="send">
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: "Create",

        data() {
            return {
                name: null,
                age: null,
                weight: null,
            }
        },

        methods: {
            store() {
                axios.post('/api/people', {name: this.name, age: this.age, weight: this.weight})
                    .then(res =>{
                        this.$router.push({name: 'person.index'});
                    })
            },
        }
    }
</script>

<template>
    <div class="w-25">
        This is Person/Create component
        <br><br>
        <div class="mb-3">
            <input type="text" class="form-control" id="name" v-model="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="age" v-model="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="weight" v-model="weight" placeholder="weight">
        </div>
        <a @click.prevent="store()" href="#" class="btn btn-secondary">Add</a>
    </div>
</template>

<style scoped>

</style>

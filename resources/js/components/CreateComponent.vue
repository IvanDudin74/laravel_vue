<script>
    export default {
        name: "CreateComponent",

        data(){
            return {
                name: null,
                age: null,
                weight: null,
            }
        },

        mounted() {

        },

        methods: {
            addPerson() {
                axios.post('/api/people', {name: this.name, age: this.age, weight: this.weight})
                    .then(res => {
                        this.name = null
                        this.age = null
                        this.weight = null
                    })
            }
        },
    }
</script>


<template>
    <div class="w-25">
        Create component:
        <br><br>
        <div class="mb-3">
            <label for="name" class="form-label">name</label>
            <input type="text" class="form-control" id="name" v-model="name" placeholder="name" >
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">age</label>
            <input type="text" class="form-control" id="age" v-model="age" placeholder="age">
        </div>
        <div class="mb-3">
            <label for="weight" class="form-label">weight</label>
            <input type="text" class="form-control" id="weight" v-model="weight" placeholder="weight">
        </div>
        <div  class="mb-3">
            <button @click.prevent="addPerson" class="form-control">Add</button>
        </div>
    </div>
</template>


<style scoped>

</style>

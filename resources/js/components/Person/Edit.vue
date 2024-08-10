<script>
    export default {
        name: "Edit",

        data() {
            return {
                name: null,
                age: null,
                weight: null,
            }
        },

        methods: {
            update() {
                axios.patch('/api/people/' + this.$route.params.id,
                    {name: this.name, age: this.age, weight: this.weight})
                    .then(res => {
                        this.$router.push({name: 'person.show'});
                    })
            },

            getPerson() {
                axios.get('/api/people/' + this.$route.params.id)
                    .then(res => {
                        this.name = res.data.name
                        this.age = res.data.age
                        this.weight = res.data.weight
                    })
            }
        },

        mounted() {
            this.getPerson()
        }

    }
</script>

<template>
    <div>
        <div>
            This is Person/Edit component
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="name" v-model="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="age" v-model="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="weight" v-model="weight" placeholder="weight">
        </div>
        <a @click.prevent="update()" href="#" class="btn btn-secondary">Update</a>
    </div>
</template>

<style scoped>

</style>

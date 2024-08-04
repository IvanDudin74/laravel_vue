<script setup>
    import SinglePostComponent from "@/components/SinglePostComponent.vue";

    let persons = [
        {
            id: 1,
            name: 'Yury',
            age: 44,
            weight: 80,
        },
        {
            id: 2,
            name: 'Denis',
            age: 48,
            weight: 83,
        },
        {
            id: 3,
            name: 'Sergey',
            age: 50,
            weight: 95,
        },
        {
            id: 4,
            name: 'Yulya',
            age: 25,
            weight: 57,
        },
        {
            id: 5,
            name: 'Arkady',
            age: 46,
            weight: 80,
        },
    ]

    function personsAgeLessThrity(){
        return this.persons.filter(function (person){
            return person.age < 30
        })
    }
</script>



<template>
    <div>
        Post component:
        <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in personsAgeLessThrity" >
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.weight }}</td>
                </tr>
            </tbody>
        </table>
        <SinglePostComponent></SinglePostComponent>
    </div>
</template>

<style scoped>

</style>

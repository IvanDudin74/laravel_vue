<script>
    export default {
        name: "IndexComponent"
    }
</script>

<template>
    <div>
        This is Main IndexComponent
        <br><br>
        <router-link :to="{ name: 'person.index' }">People</router-link><br>
        <router-link :to="{ name: 'person.create' }">Create person</router-link><br>
        <br><br>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>

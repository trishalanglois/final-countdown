<template>
    <div id="app">
        <navbar-component></navbar-component>
        <div class="container">
            <listings-header-component></listings-header-component>
            <listings-container-component 
                v-for="listing in listings" 
                v-bind:title="listing.title" 
                v-bind:url="listing.url"
                v-bind:date="listing.date" 
                v-bind:explanation="listing.explanation"
            ></listings-container-component>
        </div>
    </div>
</template>

<script>
    import ListingsContainerComponent from './components/ListingsContainerComponent'
    import ListingsHeaderComponent from './components/ListingsHeaderComponent.vue'
    import NavbarComponent from './components/NavbarComponent.vue'

    export default {
        name: 'app',
        components: {
            NavbarComponent, 
            ListingsHeaderComponent, 
            ListingsContainerComponent
        },
        data() {
            return {
                listings: []
            }
        }
    }
</script>

<style scoped>
</style>
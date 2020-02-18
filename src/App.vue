<template>
    <div id="app">
        <navbar-component></navbar-component>
        <div class="listings-main">
            <listings-header-component></listings-header-component>
            <listings-container-component :listings='this.listings'
            ></listings-container-component>
        </div>
    </div>
</template>

<script>
    import ListingsContainerComponent from './components/ListingsContainerComponent'
    import ListingsHeaderComponent from './components/ListingsHeaderComponent.vue'
    import NavbarComponent from './components/NavbarComponent.vue'
    import { getListings } from '../util.js'

    export default {
        name: 'app',
        components: {
            NavbarComponent, 
            ListingsHeaderComponent, 
            ListingsContainerComponent
        },
        data: function() {
            return {
                listings: []
            }
        },
        methods: {

        },
        mounted () {
            this.listings = getListings()
                .then(response => this.listings = response.reverse())
        }
    }
</script>

<style scoped>
.listings-main {
    background-color: #F8F7F2;
}
</style>
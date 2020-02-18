<template>
    <div id="app">
        <navbar-component></navbar-component>
        <div class="container">
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
            //GET request
        },
        mounted() {
            //calling GET request and setting data to response 
            this.listings = [
                { date: "2020-02-01",
                  explanation: "When leaving lunar orbit in February 1971, the crew of Apollo 14 watched this Earthrise from their command module Kittyhawk. With Earth's sunlit crescent just peeking over the lunar horizon, the cratered terrain in the foreground is along the lunar farside. Of course, while orbiting the Moon, the crew could watch Earth rise and set, but the Earth hung stationary in the sky over Fra Mauro Base, their landing site on the lunar surface. Rock samples brought back by the Apollo 14 mission included a 20 pound rock nicknamed Big Bertha, later determined to contain a likely fragment of a meteorite from planet Earth.",
                  hdurl: "https://apod.nasa.gov/apod/image/2002/AS14-71-9845v2wmktwtr4Jerry.jpg",
                  media_type: "image",
                  service_version: "v1",
                  title: "Apollo 14 Heads for Home",
                  url: "https://apod.nasa.gov/apod/image/2002/AS14-71-9845v2wmktwtr4Jerry1024.jpg"}
            ]
        }
    }
</script>

<style scoped>
</style>
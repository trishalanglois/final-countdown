//main header component
Vue.component('navbar-component', {
  template: "<header> <h1 class="main-title">Alien Zillow</h1> <h2 class='main-subtitle'>We'll help you find an outerspace you'll love.</h2> </header>'
})

//subtitle component
Vue.component('listings-header-component', {
  template:" <h3 class='month-listings'>This Month's Listings</h3>"
})

//all listings component 
Vue.component('listings-container-component', {
  template: "<h4 class='listing-title'>{{ listing.title }}</h4><img class='listing-image' :src=listing.url alt='image of outerspace'><p class='listing-date'>Listing Date: {{ listing.date }}</p><p class='listing-explanation'>{{ listing.explanation }}</p>",
  date: function() {
    return {
      listings: [
        {
          date: "2020-02-01",
          explanation: "When leaving lunar orbit in February 1971, the crew of Apollo 14 watched this Earthrise from their command module Kittyhawk. With Earth's sunlit crescent just peeking over the lunar horizon, the cratered terrain in the foreground is along the lunar farside. Of course, while orbiting the Moon, the crew could watch Earth rise and set, but the Earth hung stationary in the sky over Fra Mauro Base, their landing site on the lunar surface. Rock samples brought back by the Apollo 14 mission included a 20 pound rock nicknamed Big Bertha, later determined to contain a likely fragment of a meteorite from planet Earth.",
          hdurl: "https://apod.nasa.gov/apod/image/2002/AS14-71-9845v2wmktwtr4Jerry.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Apollo 14 Heads for Home",
          url: "https://apod.nasa.gov/apod/image/2002/AS14-71-9845v2wmktwtr4Jerry1024.jpg"
      }]
    }
  }
})

//Root Instance
new Vue({
  el: '#app',
  data: {},
})
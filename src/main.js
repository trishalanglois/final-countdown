Vue.component 


<h3 class="month-listings">This Month's Listings</h3>
      <h4 class="listing-title">{{ listings[0].title }}</h4>
      <img class="listing-image" :src=listings[0].url alt="image of outerspace">
      <p class="listing-explanation">{{ listings[0].explanation }}</p>



      
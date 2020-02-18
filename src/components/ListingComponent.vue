<template>
  <article class="listing-card">
    <h4 class='listing-title'>{{ listing.title }}</h4>
    <div class='card-content'>
      <img class='listing-image' :src=listing.url alt='image of outerspace'>
      <div class="card-words">
        <p class='listing-date'>Listing Date: {{ listing.date }}</p>
        <p class='listing-explanation'>{{ listing.explanation }}</p>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'ListingComponent',
  props: ['listing']
}
</script>

<style scoped>
  .listing-card {
    width: 90%;
    background-color: #847253;
    border: 1px solid black;
    margin: 2em auto;
    text-align: center;
    color: #F8F7F2;
  }

  .listing-title {
    font-family: 'Barlow Semi Condensed', sans-serif;        
    font-size: 3em;
    padding: 1em 1em .25em 1em;
  }

  .card-content {
    display: flex;
    justify-content: space-between;
  }

  .listing-image {
    padding: .25em;
  }

  .card-words {
    margin: auto 2em;
    text-align: right;
  }

  .listing-date {
    font-weight: bold;
    font-family: 'Barlow Semi Condensed', sans-serif;        
    font-size: 2em;
    padding-right: 1em;
  }

  .listing-explanation {
    text-align: left;
    font-size: 1.1em;
  }


</style>


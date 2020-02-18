<template>
  <article class="listing-card">
    <h4 class='listing-title'>{{ listing.title }}</h4>
    <img class='listing-image' :src=listing.url alt='image of outerspace'>
    <p class='listing-date'>Listing Date: {{ listing.date }}</p>
    <p class='listing-explanation'>{{ listing.explanation }}</p>
  </article>
</template>

<script>

export default {
  name: 'ListingComponent',
  props: ['listing']
}
</script>

<style scoped>

</style>


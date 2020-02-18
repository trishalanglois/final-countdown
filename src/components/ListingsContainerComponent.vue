<template>
  <div>
    <ListingComponent 
      class="listing-card"
      v-bind:key="listing.date"
      v-for="(listing, i) in this.listings"
      v-bind:listing="listing"
    ></ListingComponent>
  </div>
</template>

<script>
  import ListingComponent from './ListingComponent';

  export default {
    name: "ListingsContainerComponent",
    components: {
      ListingComponent
    },
    props: ['listings']
  }
</script>

<style scoped>
</style>
<template>
  <div>
    <h3 class="month-listings">This Month's Listings</h3>
  </div>
</template>

<script>
import { getListings } from './main.js';

export default {
  name: 'ListingsContainer',
  data() {
    return {
      listings: []
    }
  },
  methods: {
    async setListings() {
      try {
        this.listings = await getListings()
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.setListings();
  }
}
</script>

<style>

</style>

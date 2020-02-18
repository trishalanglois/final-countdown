<template>
  <h3 class='month-listings'>Recent Listings</h3>
</template>

<script>
    module.exports= {
        name:"ListingsHeaderComponent",
        data (){
            return {
                title:"This Month's Listings"
            }
        }
    }

</script>


<style scoped>

.month-listings {
    width: 100%;
    margin: 0vh 5vh;
    padding-top: 2vh;
    font-family: 'Barlow Semi Condensed', sans-serif;  
    font-size: 2.5em;  
    font-weight: bold;  
    text-decoration: underline;
    color: #252526
}
</style>
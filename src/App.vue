<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne"
import ProductListTwo from "./components/ProductListTwo"
export default {
  name: 'app',
  data () {
    return {
      // products: [
      //   {name: "马云", price:200},
      //   {name: "马化腾", price:100},
      //   {name: "马冬梅", price:50},
      //   {name: "马荣", price:20},
      // ]
    }
  },
  components: {
    ProductListOne,
    ProductListTwo
  }
}
</script>

<style>

</style>

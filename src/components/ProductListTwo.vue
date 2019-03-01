<template>
    <div id="product-list-two">
      <h2>Product List Two</h2>
      <ul>
        <li v-for="(product,index) in saleProducts" :key="index">
          <span class="name">{{product.name}}</span>
          <span class="price">{{product.price}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  computed:{
    products(){
      return this.$store.state.products
    },
    saleProducts(){
      return this.$store.getters.saleProducts
    }
  }
}
</script>

<style scoped>
#product-list-two{
  margin-bottom: 30px;
  padding: 10px 20px;
  background: #D1E4ff;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}
#product-list-two ul{
  padding: 0px;
  list-style-type: none;
}
#product-list-two li{
  margin-right: 10px;
  margin-top: 20px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
.price{
  display: block;
  color: #860ce8;
  font-weight: bold;
}
</style>

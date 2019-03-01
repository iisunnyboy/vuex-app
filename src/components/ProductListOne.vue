<template>
    <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
        <li v-for="(product,index) in saleProducts" :key="index">
          <span class="name">{{product.name}}</span>
          <span class="price">{{product.price}}</span>
        </li>
      </ul>
      <button @click="reduceProductTiger(2)">降价</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
export default {
  computed: {
    // products(){
    //   return this.$store.state.products
    // },
    // saleProducts(){
    //   return this.$store.getters.saleProducts
    // }
    ...mapState(['products']),
    ...mapGetters(['saleProducts'])
  },
  methods: {
    // reducdeProduct(value){
    //   // //严格模式下，报错
    // //   this.$store.state.products.forEach(product => {
    // //     product.price -= 1
    // //   });
    //   // this.$store.commit('reduceProduct')  //mutations 方式，不建议使用
    //   this.$store.dispatch('reduceProduct', value)   //actions 方式，建议使用，便于调试
    // }
    // ...mapActions(['reduceProduct']),

    //重点：mapAction传参数的情况第一种案例   https://www.daozhao.com/8326.html
    // ...mapActions(
    //   {
    //     reduceProductTiger(dispatch, value){
    //       dispatch('reduceProduct', value);
    //     }
    //   }
    // ),

    //重点：mapAction传参数的情况第二种案例   https://segmentfault.com/q/1010000009563211
    ...mapActions(['reduceProduct']),
    reduceProductTiger(value){
      this.reduceProduct(value)
   }
  }
}
</script>

<style scoped>
#product-list-one{
  margin-bottom: 30px;
  padding: 10px 20px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  background: #FFF8B1;
}
#product-list-one ul{
  padding: 0px;
  list-style-type: none;
}
#product-list-one li{
  display: inline-block;

  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;

  background: rgba(255, 255, 255, 0.7)
}
.price{
  color: #E8800c;
  font-weight: bold;
}
</style>

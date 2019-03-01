import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: "马云", price:200},
            {name: "马化腾", price:100},
            {name: "马冬梅", price:50},
            {name: "马荣", price:20},
        ]
    },
    getters: {
      saleProducts: (state)  => {
        return state.products.map( product => {
          return {
            name: '**' + product.name + '**',
            price: product.price/2
          }
        })
      }
    },
    mutations: {
      // reduceProduct: (state) => {
      //   setTimeout(()=>{
      //     return state.products.forEach(product => {
      //       return product.price -= 1 
      //     })
      //   },2000)
      // },
      reduceProduct: (state, payLoad) => 
        state.products.forEach(product => 
          product.price -= 1 
        )
    },
    actions: {
      // //同步方式
      // reduceProduct: (context) => {
      //   context.commit('reduceProduct')
      // },
      //异步方式
      reduceProduct: (context, payLoad) => {
        setTimeout(() => context.commit('reduceProduct', payLoad), 2000)
      }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,products:[],cart:[],counter:0,TotalPrice:0,product:'',res:false
  },
  getters: {
  },
  mutations: {
    setcart(state,cart){
      console.log(cart[0]);
      state.cart=cart[0];
      state.count=cart[1];
      state.TotalPrice=cart[2];
      state.counter=cart[3];
    },
    setproducts(state,prod){
      state.products=prod;
    },
    setproduct(state,prod){
      state.product=prod;
    }
    ,
    addtocart(state,prod){
      let i=state.cart.findIndex(item=>item.name===prod.name);
      if(i!=-1)
      state.cart[i].quantity++;
    else
    state.cart.push(prod),state.count++;
      state.counter++;
      state.TotalPrice+=prod.price;
    },
    remove(state,i){
      state.counter-=state.cart[i].quantity;
      state.count--;
      state.TotalPrice-=state.cart[i].quantity*state.cart[i].price;
      state.cart.splice(i,1);
    },
    PostUser(state,user){
      axios.post('/api/user',user,{header:{'Content-Type':'appliacation/json'}}).then(response => {state.res=response.data});
    },
    postcart(state){
      axios.post('/api/cart',[state.cart,state.count,state.TotalPrice,state.counter],{headers:{'Content-Type':'application/json'}});
    },
    postproduct(state,prod){
      axios.post('/api/product',prod,{header:{'Content-Type':'application/json'}});
    }
  },
  actions: {
    get({commit}){
      axios.get('/api/products').then(response =>{
      commit('setproducts',response.data.products);
      commit('setcart',response.data.basket);
      })

    },
    getproduct({commit}){
      axios.get('/api/getproduct').then(response =>{
        commit('setproduct',response.data.product);
        console.log(response.data);

      })
    }
  },
  modules: {
  }
})

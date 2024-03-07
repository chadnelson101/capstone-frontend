import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://capstone-backend-2-ywt9.onrender.com'

export default createStore({
  state: {
    products:[],
    users:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    async getProducts (context){
      try{
        const response = await axios.get(baseUrl+'/products')
        context.commit('setProducts', response.data)
        console.log(getProducts.data);
      }catch(error){
        console.error('Error getting products');
      }
    },
    async getUsers (context){
      try{
        const response = await axios.get(baseUrl+'/users')
        context.commit('setUsers', response.data)
        console.log(getUsers.data);
      }catch(error){
        console.error('Error getting users');
      }
    },
    async deleteUser(userid){
      try{
        await axios.delete(baseUrl+'/users/' +userid)
      }catch(error){
        console.error('Error deleting user');
      }
      // window.location.reload()
    }
    // async deleteProduct(productid){
    //   try{
    //     await axios.delete(baseUrl+'/products/' +productid)
    //   }catch(error){
    //     console.error('Error deleting product');
    //   }
    // }

  },
  modules: {
  }
})

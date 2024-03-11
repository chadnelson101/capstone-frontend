import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://capstone-backend-2-ywt9.onrender.com'

export default createStore({
  state: {
    products:[],
    users:[]
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
      }catch(error){
        console.error('Error getting products');
      }
    },
    async getUsers (context){
      try{
        const response = await axios.get(baseUrl+'/users')
        context.commit('setUsers', response.data)
      }catch(error){
        console.error('Error getting users');
      }
    },
    async addUser({commit},newuser){
      let {data} = await axios.post(baseUrl+'/users',newuser)
      alert(data.msg)
      window.location.reload()
    },
    async addProduct({commit},newproduct){
       await axios.post(baseUrl+'/products',newproduct)
      alert(data.msg)
      window.location.reload()
    },
    async editUser({commit},userid){
      let {data} = await axios.put(baseUrl+'/users/'+userid)
      alert(data.msg)
      window.location.reload()
    },
    async deleteUser(context, userid){
      try{
        await axios.delete(baseUrl+'/users/' +userid)
        await context.dispatch('getUsers');
      }catch(error){
        console.error('Error deleting user');
      }
    },
    async deleteProduct(context, productid){
      try{
        await axios.delete(baseUrl+'/products/' +productid)
        await context.dispatch('getProducts');
      }catch(error){
        console.error('Error deleting product');
      }
    },
  },
  modules: {
  }
})

import { createStore } from 'vuex'
import axios from 'axios'


const baseUrl = 'https://capstone-backend-3.onrender.com'

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
    async getSinlgeUser (context){
      try{
        const response = await axios.get(baseUrl+'/users/id')
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
      console.log(newproduct);
      let {data} =  await axios.post(baseUrl+'/products',newproduct)
      alert('Product added successfully')
      window.location.reload()
    },
    async deleteUser(context, userid){
      try{
        await axios.delete(baseUrl+'/users/' +userid)
        await context.dispatch('getUsers');
        alert('User deleted successfully')
      }catch(error){
        console.error('Error deleting user');
      }
    },
    async deleteProduct(context, productid){
      try{
        await axios.delete(baseUrl+'/products/' +productid)
        await context.dispatch('getProducts');
        alert('Product deleted successfully')
      }catch(error){
        console.error('Error deleting product');
      }
    },
    async updateProduct(context, product){
      await axios.patch(baseUrl+'/products/' +product.id)
      await context.dispatch('getProducts');
      alert('product updated successfully')
      window.location.reload()
      console.log(product);
    }
    // async login ({commit},logged){
    //   let data = await axios.post(baseUrl+'/login',logged)
    //   $cookies.set('jwt',data.token)
    //   alert(data.msg)
    //   await router.push('/users')
    //   window.location.reload()
    // },
    // async logout ({context}){
    //   let cookies = $cookies.keys()
    //   $cookies.remove('jwt')
    //   console.log(cookies);
    //   window.location.reload()
    // }
  },
  modules: {
  }
})

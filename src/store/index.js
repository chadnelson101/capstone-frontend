import { createStore } from 'vuex'
import axios from 'axios'
import {$Cookies} from 'vue-cookies'

const baseUrl = 'https://cap-backend-1.onrender.com'

export default createStore({
  state: {
    products:[],
    users:[],
    socials:[],
    cart:[],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setUsers(state, users) {
      state.users = users
    },
    setSocials(state, socials) {
      state.socials = socials
    },
    setCart(state, cart) {
      state.cart = cart
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
    async getCart (context){
      try{
        const response = await axios.get(baseUrl+'/cart')
        console.log(response.data);
        context.commit('setCart', response.data)
      }catch(error){
        console.error('Error getting cart');
      }
    },
    async getPosts (context){
      try{
        const response = await axios.get(baseUrl+'/post')
        context.commit('setSocials', response.data)
      }catch(error){
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
    async addPost ({commit},newpost){
      console.log(newpost);
      try{
        let {data} = await axios.post(baseUrl+'/post',newpost)
        alert(data.msg)
      }catch(error){
        console.error('Error adding post');
        window.location.reload()
      }
    },
    async addToCart({ commit }, product_id) {
      try {
          const userid = await $cookies.get('userid');
          console.log('userid', userid);
          if (!userid) {
              console.error('User ID not found');
              return;
          }
          console.log('userid:'+userid, 'product_id'+product_id);
          const response = await axios.post(baseUrl + `/cart/${product_id}/${userid}`, { product_id, userid,token:localStorage.getItem('jwt') });
          console.log('Response:', response.data);
          // Handle the response data as needed
      } catch (error) {
          console.error('Error adding to cart:', error);
          alert('Error adding item to cart.');
      }
  },  
    async deletePost(context,postid){
      try{
        await axios.delete(baseUrl+'/post/' +postid)
        await context.dispatch('getPosts');
        alert(data.msg)
      }catch(error){
        console.error('Error deleting post');
      }
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
      }
    },
    async deleteCart(context, cartId) { // Change the action name to "deleteCart"
      try {
        await axios.delete(baseUrl + '/cart/' + cartId);
        await context.dispatch('getCart');
        alert('item deleted successfully');
      } catch (error) {
        console.error('Error deleting cart item:', error);
      }
      window.location.reload();
    },
    saveChanges({ commit }, updateProduct) {
      console.log(updateProduct);
      return axios.patch(`${baseUrl}/products/${updateProduct.prodid}`, updateProduct)
        .then(response => {
          // Handle successful update if needed
          return response.data; // Return the updated product data
        })
        .catch(error => {
          console.error('Error updating product:', error);
          throw error; // Propagate the error to the caller
        });
    },
    editUser({ commit }, updateUser) {
      console.log(updateUser);
      return axios.patch(`${baseUrl}/users/${updateUser.userid}`, updateUser)
        .then(response => {
          // Handle successful update if needed
          return response.data; // Return the updated product data
        })
        .catch(error => {
          console.error('Error updating user:', error);
          throw error; // Propagate the error to the caller
        });
    },
    async editPost ({commit},postid){
      try{
        let {data} = await axios.get(baseUrl+'/post/' +postid)
        alert()
      }catch(error){
        console.error('Error editing post');
      }
    }, 
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(baseUrl + '/login', credentials);
    
        if (response.status === 200 && response.data.token) {
          // Store the JWT token in session storage
          localStorage.setItem('jwt', response.data.token);
    
          alert(response.data.msg);

          const [{ userid }] = response.data;
// Adjust this based on your response structure

          await $cookies.set('userid', userid);
          console.log('userId set in cookies:', user);
          
          if (response.data.user.role === 'admin') {
            await router.push('/admin');
          } else {
            await router.push('/users');
          }
        } else {
          alert('Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    },    
    async logout ({context}){
      let $Cookies = $Cookies.keys()
      $Cookies.remove('jwt')
      console.log($Cookies);
      window.location.reload()
    }
  },
  modules: {
  }
})

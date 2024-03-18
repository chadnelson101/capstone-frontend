<template>
    <div class="body">
        <div class="adminpage">
      <table>
        <thead>
          <tr>
            <th class="ding">Product Name</th>
            <th class="ding">Model</th>
            <th class="ding">Image</th>
            <th class="ding">Quantity</th>
            <th class="ding">Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="cart in carts" :key="cart.cart_id">
          <tr>
            <td class="word">{{ cart.productname }}</td>
            <td class="word">{{ cart.models }}</td>
            <td><img :src="cart.producturl" alt=""></td>
            <td>{{ cart.quantity }}</td>
            <td class="word">R{{ cart.amount }}</td>
            <td><button @click="deleteFromCart(cart.cart_id)" class="btn btn-primary">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  </template>
  
  <script>
  export default {
    computed: {
      carts() {
        return this.$store.state.cart;
      }
    },
    methods: {
        deleteFromCart(cartId) {
            this.$store.dispatch("deleteCart", cartId);
}

    },
    mounted() {
      this.$store.dispatch('getCart'); // Dispatch the getCart action when the component is mounted
    }
  }
  </script>
  
  <style scoped>
  .body {
    height: 100vh;
    background-color: rgb(72, 73, 73);
  }
  .adminpage {
    padding: 100px;
  }

  .header{
    color: aqua;
    font-size: 50px;
  }

  .ding{
    color: black;
  }
  .word{
    color: aliceblue;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    border: 1px solid rgb(244, 240, 240);
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  td{
    color: white;
  }
  
  img {
    width: 100px;
  }
  .add-btn{
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  </style>
  
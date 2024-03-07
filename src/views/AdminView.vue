<template>
    <div class="adminpage">
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
          <tr>
            <td>{{ product.prodid }}</td>
            <td>{{ product.productname }}</td>
            <td>R{{ product.amount }}</td>
            <td>{{ product.models }}</td>
            <td><img :src="product.producturl" alt=""></td>
            <td><button @click="deleteProduct(product.prodid)">delete</button></td>
            <td><button>edit</button></td>
          </tr>
        </tbody>
      </table>
      <br><br><br><br><br>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>user ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>age</th>
            <th>gender</th>
            <th>email</th>
            <th>role</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="users in user" :key="users.id">
          <tr>
            <td>{{ users.userid }}</td>
            <td>{{ users.firstname }}</td>
            <td>{{ users.lastname }}</td>
            <td>{{ users.age }}</td>
            <td>{{ users.gender }}</td>
            <td>{{ users.email}}</td>
            <td>{{ users.role }}</td>
            <td><button @click="deleteUser(users.userid)">delete</button></td>
            <td><button>edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
      user(){
        return this.$store.state.users
      }
    },
    mounted() {
      this.$store.dispatch('getProducts');
      this.$store.dispatch('getUsers');
    },
    methods: {
        deleteProduct(prodid) {
          this.$store.dispatch('deleteProduct',prodid);
        },
        deleteUser(userid) {
          this.$store.dispatch('deleteUser',userid);
        },
    }
  };
  </script>
  
  <style scoped>
  .adminpage {
    padding: 100px;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  img {
    width: 100px;
  }
  </style>
  
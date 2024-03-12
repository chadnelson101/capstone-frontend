<template>
    <div class="adminpage">
      <h3 class="header">Products</h3>
      <table>
        <thead>
          <tr>
            <th class="ding">Product ID</th>
            <th class="ding">Product Name</th>
            <th class="ding">Amount</th>
            <th class="ding">Model</th>
            <th class="ding">Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
          <tr>
            <td class="word">{{ product.prodid }}</td>
            <td class="word">{{ product.productname }}</td>
            <td class="word">R{{ product.amount }}</td>
            <td class="word">{{ product.models }}</td>
            <td><img :src="product.producturl" alt=""></td>
            <td><button @click="deleteProduct(product.prodid)" class="btn btn-primary">Delete</button></td>
            <td><button class="btn btn-primary"><editProductView/></button></td>
          </tr>
        </tbody>
      </table>
      <br><br>
      <ProductView/>
      <br><br><br><br><br>
      <h3 class="header">Users</h3>
      <table>
        <thead>
          <tr>
            <th class="ding">User ID</th>
            <th class="ding">First Name</th>
            <th class="ding">Last Name</th>
            <th class="ding">Age</th>
            <th class="ding">Gender</th>
            <th class="ding">Email</th>
            <th class="ding">Role</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="users in user" :key="users.id">
          <tr>
            <td class="word">{{ users.userid }}</td>
            <td class="word">{{ users.firstname }}</td>
            <td class="word">{{ users.lastname }}</td>
            <td class="word">{{ users.age }}</td>
            <td class="word">{{ users.gender }}</td>
            <td class="word">{{ users.email}}</td>
            <td class="word">{{ users.role }}</td>
            <td><button @click="deleteUser(users.userid)" class="btn btn-primary">Delete</button></td>
            <td><button class="btn btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </table>
      <br><br>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add User
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
        <input type="text" placeholder="firstname" data-name name="item name" id="item name" v-model="firstname">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="lastname"  data-description name="item name" id="item name" v-model="lastname">
      </div>
      <div class="mb-3">
        <input type="number" placeholder="age"  data-amount name="item name" id="item name" v-model="age">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="gender"  data-category name="item name" id="item name" v-model="gender">
      </div>
        <div class="mb-3">
        <input type="text" placeholder="email"  data-details name="item name" id="item name" v-model="email">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="role" data-url name="item name" id="item name" v-model="role">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="password"  data-url name="item name" id="item name" v-model="password">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addUser">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
  
  <script>
  import ProductView from '../components/ProductView.vue';
  import editProductView from '../components/editProductView.vue';
export default {
  components:{
    ProductView,
    editProductView
  },
  data() {
    return {
      firstname:null,
      lastname:null,
      age:null,
      gender:null,
      email:null,
      role:null,
      password:null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.users;
    },
    addUser(){
      this.$store.dispatch('addUser',this.$data);
    },
    editUser() {
      this.$store.dispatch('editUser',this.$data);
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
  }
</script>
  
  <style scoped>
  .adminpage {
    padding: 100px;
    background-color: rgb(72, 73, 73);
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
  
  img {
    width: 100px;
  }
  .add-btn{
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  </style>

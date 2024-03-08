<template>
    <div class="adminpage">
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Model</th>
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
      <br><br>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  add Product
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
        <input type="text" placeholder="productname" class="form-control" data-description name="item name" id="item name" v-model="productname">
      </div>
        <div class="mb-3">
        <input type="number" placeholder="amount" class="form-control" data-description name="item name" id="item name" v-model="amount">
      </div>
        <div class="mb-3">
        <input type="text" placeholder="model" class="form-control" data-description name="item name" id="item name" v-model="model">
      </div>
        <div class="mb-3">
        <input type="text" placeholder="producturl" class="form-control" data-description name="item name" id="item name" v-model="producturl">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addProduct">Save chnages</button>
      </div>
    </div>
  </div>
</div>



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
        <input type="text" placeholder="firstname" class="form-control" data-name name="item name" id="item name" v-model="firstname">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="lastname" class="form-control" data-description name="item name" id="item name" v-model="lastname">
      </div>
      <div class="mb-3">
        <input type="number" placeholder="age" class="form-control" data-amount name="item name" id="item name" v-model="age">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="gender" class="form-control" data-category name="item name" id="item name" v-model="gender">
      </div>
        <div class="mb-3">
        <input type="text" placeholder="email" class="form-control" data-details name="item name" id="item name" v-model="email">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="role" class="form-control" data-url name="item name" id="item name" v-model="role">
      </div>
      <div class="mb-3">
        <input type="text" placeholder="password" class="form-control" data-url name="item name" id="item name" v-model="password">
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
export default {
  data() {
    return {
      firstname:null,
      lastname:null,
      age:null,
      gender:null,
      email:null,
      role:null,
      password:null,
      productname:null,
      amount:null,
      model:null,
      producturl:null
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
    addProduct() {
      this.$store.dispatch('addProduct',this.$data);
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
  .add-btn{
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  </style>

<template>
  <div class="adminpage">
    <h3 class="header">Products</h3>
    <div class="table-responsive">
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
            <td><editProductView/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <ProductView/>
    <br><br><br><br><br>
    <h3 class="header">Users</h3>
    <div class="table-responsive">
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
        <tbody v-for="user in users" :key="user.id">
          <tr>
            <td class="word">{{ user.userid }}</td>
            <td class="word">{{ user.firstname }}</td>
            <td class="word">{{ user.lastname }}</td>
            <td class="word">{{ user.age }}</td>
            <td class="word">{{ user.gender }}</td>
            <td class="word">{{ user.email}}</td>
            <td class="word">{{ user.role }}</td>
            <td><button @click="deleteUser(user.userid)" class="btn btn-primary">Delete</button></td>
            <td><editUserView/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <div class="add-btn">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
    </div>
    <!-- Modal -->
    <!-- Your Modal Content -->
  </div>
</template>

<script>
import ProductView from '../components/ProductView.vue';
import editProductView from '../components/editProductView.vue';
import editUserView from '../components/editUserView.vue';

export default {
  components: {
    ProductView,
    editProductView,
    editUserView
  },
  data() {
    return {
      // Your data properties
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch('getProducts');
    this.$store.dispatch('getUsers');
  },
  methods: {
    deleteProduct(prodid) {
      this.$store.dispatch('deleteProduct', prodid);
    },
    deleteUser(userid) {
      this.$store.dispatch('deleteUser', userid);
    }
  }
}
</script>

<style scoped>
.adminpage {
  padding: 20px;
  background-color: rgb(72, 73, 73);
}

.header {
  color: aqua;
  font-size: 24px;
}

.ding {
  color: black;
}

.word {
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
  max-width: 100px;
}

.table-responsive {
  overflow-x: auto;
}

.add-btn {
  text-align: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .adminpage {
    padding: 10px;
  }
  .header {
    font-size: 20px;
  }
  .table-responsive{
    width: 50%;
  }
}
</style>

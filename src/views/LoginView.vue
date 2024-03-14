<template>
    <div class="body">
      <div class="card">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <button @click="login(user.email,userSetter.password)">login</button>
      </div>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div class="card">
        <input type="text" placeholder="firstname" v-model="firstname">
        <input type="text" placeholder="lastname" v-model="lastname">
        <input type="text" placeholder="age" v-model="age">
        <input type="text" placeholder="gender" v-model="gender">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="role" v-model="role">
        <input type="text" placeholder="password" v-model="password">
        <button @click="signup">sign up</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        email: '',
        role: '',
        password: '',
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        console.log(this.email, this.password);
        // Call your login action here
        this.$store.dispatch('login', { email: this.email, password: this.password });
      },
      signup() {
        console.log(this.$data);
        // Call your signup action here
        this.$store.dispatch('addUser', { firstname: this.firstname, lastname: this.lastname, age: this.age, gender: this.gender, email: this.email, role: this.role, password: this.password });
      }
    }
  }
  </script>
  
  <style scoped>
  .body {
    height: 100vh;
  }
  img {
    width: 100%;
  }
  .card {
    background: aqua;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 28%;
  }
  </style>
  
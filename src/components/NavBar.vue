<template>
    <nav class="navmenu">
      <ul>
        <router-link to="/" class="nav-link">Home</router-link>  
        <router-link to="/about" class="nav-link">About</router-link>  
        <router-link to="/models" class="nav-link">Models</router-link>  
        <router-link to="/cart" class="nav-link">Cart</router-link>  
        <router-link to="/admin" class="nav-link">Admin</router-link>  
        <router-link to="/socials" class="nav-link">Socials</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  .navmenu ul {
    display: flex;
    justify-content: center;
    gap: 100px;
  }
  .navmenu {
    color: #fff;
    background: black;
    height: 100px;
    padding: 30px;
  }
  .nav-link {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease; /* Add transition effect */
  }
  
  .nav-link:hover {
    color: #0bb8f1e7; /* Change color on hover */
  }
  
  @media (max-width: 750px) {
    .nav a {
      font-size: 100px;
      text-align: center;
    }
  }
  </style>
  
<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>  
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>  
          </li>
          <li class="nav-item">
            <router-link to="/socials" class="nav-link">Socials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/models" class="nav-link">Models</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>  
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  </template>
  
  <script>
  import 'bootstrap/dist/js/bootstrap.bundle';

  export default {
    
  }
  </script>
  
  <style scoped>
  
  </style>
  
<template>
  <div>
    <div class="body">
      <h1 class="header"> Product Page</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.producturl" alt="Product Image">
        <h3>{{ product.productName }}</h3>
        <p class="price">R{{ product.amount }}</p>
        <div class="details">
        <button class="buton" @click="addToCart(product.id)">Add to Cart</button>
        <button class="buton" @click="view(product.id)">view details</button>
        </div>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        computed: {
      products() { []
        return this.$store.state.products;
      }
    },
    mounted() {
      this.$store.dispatch('getProducts');
    },
    methods: {
        addToCart(id) {
          this.$store.dispatch('addToCart', id);
        },
        view(id) {
          this.$store.dispatch('viewDetails', id);
        }
    }
    }
</script>

<style scoped>
.body{
  height:auto;
  width:100%;
  background-color: rgb(35, 26, 26);
}
.header{
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color:rgb(58, 89, 122);
  margin-top: 75px;
}
.product-grid {
    display: flex;
    flex-direction: column;
  }
  .product-item {
    padding: 111px;
    margin: auto;
    border: 5px solid #435256; 
        border-radius: 10px; 
        pointer-events: none;
        animation: neon-animation 1.5s infinite alternate;
    }

    @keyframes neon-animation {
        from {
            border-color: #2b353e;
            box-shadow: 0 0 10px #2c363f, 0 0 20px #4a4e52, 0 0 30px #49525b, 0 0 40px #565d64; /* Neon glow effect */
        }
        to {
            border-color: #526c75; 
            box-shadow: 0 0 20px #475052, 0 0 30px #506367, 0 0 40px #5a727b, 0 0 50px #748e93; /* Neon glow effect */
        }
    }

    .price{
      font-size: 20px;
      font-weight: bold;
      color:rgb(0, 123, 255, 1);
      margin-top: 10px;
      margin-bottom: 10px;
    }
  

  .details{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
 
  }

  .buton{
    background-color: rgb(0, 123, 255, 1);
    color: rgb(35, 26, 26);
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
  .buton:hover {
    background-color: #0080FF; 
    color: white; 
  }

img {
    width: 50%;
    height: auto;
  }
</style>
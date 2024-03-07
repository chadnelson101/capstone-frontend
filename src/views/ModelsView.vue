<template>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.producturl" alt="Product Image">
        <h3>{{ product.productName }}</h3>
        <p>R{{ product.amount }}</p>
        <button @click="addToCart(product.id)">Add to Cart</button>
        <button @click="view(product.id)">view details</button>
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
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px; 
  }
  .product-item {
    border: 1px solid #ddd;
    padding: 10px;
    position: relative;
    top: 20%;
  } 
img {
    width: 50%;
    height: auto;
  }
</style>
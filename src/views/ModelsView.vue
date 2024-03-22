<template>
  <div class="body">
    <h1 class="header">Product Page</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="card">
          <div class="content">
            <div class="title">{{ product.productname }}</div>
            <img :src="product.producturl" alt="Product Image">
            <div class="price">R{{ product.amount }}</div>
            <div class="description">{{ product.description }}</div>
          </div>
          <div class="button-container">
            <button class="button" @click.prevent="addCart(product.prodid)">Cart</button>
            <button class="button" @click="view(product.prodid)">Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
  methods: {
    addCart(prodid) {
      const userid = $cookies.get('userid');
      this.$store.dispatch('addToCart', prodid, userid);
    },
    view(prodid) {
      // Implement your view method
    },
  },
};
</script>

<style scoped>
.body {
  background-color: grey;
  margin-top: -1.4%;
}

.header {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: rgb(58, 89, 122);
  margin-top: 75px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.product-item {
  flex: 0 0 calc(50% - 20px); /* Adjust width of each column for mobile */
  margin-bottom: 20px; /* Add margin between items */
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 1px;
  text-align: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(61, 155, 232, 0.4), 0 4px 6px -4px rgba(33, 150, 243, 0.4);
  border-radius: 10px;
  background-color: #6B6ECC;
  background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
}

.content {
  padding: 20px;
}

.content .price {
  color: white;
  font-weight: 800;
  font-size: 10px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
}

.content .description {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  font-size: 14px;
}

.content .title {
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.64);
  margin-top: 10px;
  font-size: 10px;
  letter-spacing: 1px;
}

.button {
  border: none;
  outline: none;
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
  width: 100%; /* Make buttons take full width */
  margin-top: 10px; /* Add margin between buttons */
}

img {
  width: 100%; /* Ensure images take full width */
  max-width: 300px; /* Limit maximum width for larger screens */
  height: auto; /* Maintain aspect ratio */
}
</style>


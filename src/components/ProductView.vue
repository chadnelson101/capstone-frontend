<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add Product
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
        <input type="text" placeholder="model" class="form-control" data-description name="item name" id="item name" v-model="models">
      </div>
        <div class="mb-3">
        <input type="text" placeholder="producturl" class="form-control" data-description name="item name" id="item name" v-model="producturl">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="newProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            productname:null,
            amount:null,
            models:null,
            producturl:null,
          }
        },
        computed: {
    products() {
      return this.$store.state.products;
    },
    newProduct() {
      this.$store.dispatch('addProduct',this.$data);
  },
  },
        
        mounted() {
    this.$store.dispatch('getProducts');
  },
    }
</script>

<style scoped>

</style>
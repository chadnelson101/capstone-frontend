<template>
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Edit
      </button>
      <div v-for="product in products" :key="product.id">
        <div class="modal fade" :id="'why-' + product.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'staticBackdropLabel-' + product.id" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <input type="text" placeholder="productname" class="form-control" v-model="productname.product">
                </div>
                <div class="mb-3">
                  <input type="number" placeholder="amount" class="form-control" v-model="amount.product">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="model" class="form-control" v-model="models.product">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="producturl" class="form-control" v-model="producturl.product">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="editProduct(product.prodi)">Save changes</button>
              </div>
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
        productname:null,
        amount:null,
        models:null,
        producturl:null,
        products:null
      };
    },
    methods: {
        editProduct(){
            this.$store.dispatch('updateProduct',prodid)
        }
    }
  };
  </script>
  
  <style scoped>
  /* Your scoped styles */
  </style>
  
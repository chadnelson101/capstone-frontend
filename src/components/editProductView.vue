<template>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit">
      Edit
    </button>
    <div>
      <div class="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <input type="text" placeholder="id" id="editProdid" class="form-control" v-model="prodid">
              </div>
              <div class="mb-3">
                <input type="text" placeholder="productname" id="editProductname" class="form-control" v-model="productname">
              </div>
              <div class="mb-3">
                <input type="number" placeholder="amount" id="editedProductamount" class="form-control" v-model="amount">
              </div>
              <div class="mb-3">
                <input type="text" placeholder="model" id="editedProductmodel" class="form-control" v-model="models">
              </div>
              <div class="mb-3">
                <input type="text" placeholder="producturl" id="editedProducturl" class="form-control" v-model="producturl">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
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
      prodid:null,
        productname: null,
        amount: null,
        models: null,
        producturl: null,
      }
  },
  methods: {
  saveChanges() {
      this.$store.dispatch('saveChanges', this.$data)
        .then(updatedProduct => {
          console.log('Product updated successfully', updatedProduct);
          // Close the modal
          // const editModal = new bootstrap.Modal(document.getElementById('editModal'));
          editModal.hide();
          // Optionally, refresh products list
          return getProducts();
        })
        .catch(error => {
          console.error('Error saving changes:', error);
        });
    }
  }
};
</script>

<style scoped>
</style>

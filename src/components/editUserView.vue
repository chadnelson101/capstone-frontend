<template>
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropUser">
        Edit
      </button>
      <div>
        <div class="modal fade" id="staticBackdropUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <input type="text" placeholder="id"  id="editProdid" class="form-control" v-model="prodid">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="firstname"  id="editProdid" class="form-control" v-model="firstname">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="lastname" id="editProductname" class="form-control" v-model="lastname">
                </div>
                <div class="mb-3">
                  <input type="number" placeholder="age" id="editedProductamount" class="form-control" v-model="age">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="gender" id="editedProductmodel" class="form-control" v-model="gender">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="email" id="editedProducturl" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="role" id="editedProducturl" class="form-control" v-model="role">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="password" id="editedpassword" class="form-control" v-model="password">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="editUser">Save changes</button>
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
        prodid:'',
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        email: '',
        role: '',
        password: ''
        }
    },
    methods: {
    editUser() {
        this.$store.dispatch('editUser', this.$data)
          .then(updatedUser => {
            console.log('User updated successfully', updatedUser);
            // Close the modal
            // const editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.hide();
            // Optionally, refresh products list
            return getUsers();
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
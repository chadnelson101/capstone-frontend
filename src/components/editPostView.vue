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
                  <input type="text" placeholder="Text"  id="editText" class="form-control" v-model="text">
                </div>
                <div class="mb-3">
                  <input type="text" placeholder="URL" id="editPostimg" class="form-control" v-model="postimg">
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="editPost">Save changes</button>
              </div>
            </div>
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
                text:'',
                postimg:'',
            }
        },
        computed: {
    editPost() {
      this.$store.dispatch('editPost',this.$data);
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>
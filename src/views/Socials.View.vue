<template>
  <div id="app">
    <div class="container">
      <h1 class="mb-4">Social Media Admin</h1>
      <div class="mb-4 post-form">
        <textarea class="form-control mb-2" v-model="text" placeholder="Write your post..."></textarea>
        <input type="text" class="form-control mb-2" v-model="postimg" placeholder="Enter image URL">
        <button class="btn btn-primary" @click="addPost">Add Post</button>
      </div>
      <div class="card mb-3" v-for="social in socials" :key="social.id">
        <div class="card-body">
          <p>{{ social.text }}</p>
          <box-icon name='trash' @click="deletePost(social.postid)"></box-icon>
          <!-- Button to open the modal -->
          <box-icon name='edit-alt' type="button" data-bs-toggle="modal" :data-bs-target="'#editModal' + social.id"></box-icon>
          <!-- Edit Post Modal -->
          <div class="modal fade" :id="'editModal' + social.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <input type="text" placeholder="Text" id="editText" class="form-control" v-model="editText">
                  </div>
                  <div class="mb-3">
                    <input type="text" placeholder="URL" id="editPostimg" class="form-control" v-model="editPostimg">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <!-- Button to trigger the updatePost method -->
                  <button type="button" class="btn btn-primary" @click="editPost(social.postid)">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <img v-if="social.postimg" :src="social.postimg" alt="Post Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      text: '',
      postimg: '',
      editText: '',
      editPostimg: ''
    }
  },
  computed: {
    socials() {
      return this.$store.state.socials;
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', { text: this.text, postimg: this.postimg });
      // Reset the form after adding the post
      this.text = '';
      this.postimg = '';
    },
    deletePost(postid) {
      this.$store.dispatch('deletePost', postid);
    },
    // Method to open the modal and set the editing values
    editPost(postid) {
      const post = this.socials.find(post => post.id === postid);
      if (post) {
        this.editText = post.text;
        this.editPostimg = post.postimg;
      }
    },
    // Method to update the post
    updatePost(postid) {
      this.$store.dispatch('editPost', { id: postid, text: this.editText, postimg: this.editPostimg });
      // Reset editing variables
      this.editText = '';
      this.editPostimg = '';
    }
  },
  mounted() {
    this.$store.dispatch('getPosts');
  },
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #4e4747;
}
.post-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #231c1c;
  border-radius: 10px;
  resize: vertical;
}
img{
  width: 700px;
}
</style>

type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editModal' + social.id"
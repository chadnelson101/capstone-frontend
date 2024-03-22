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
          <img class="why" src="http://upload.wikimedia.org/wikipedia/commons/1/19/Lamborghini_Aventador.jpg" alt="">
          <p class="time">{{ social.created_at }}</p>
          <p>{{ social.text }}</p>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <box-icon name='ellipsis-horizontal'></box-icon>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" @click="deletePost(social.postid)">
                  <box-icon name='trash'></box-icon> Delete
                </a>
              </li>
            </ul>
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
      this.text = '';
      this.postimg = '';
    },
    deletePost(postid) {
      this.$store.dispatch('deletePost', postid);
    },
    updatePost(postid) {
      this.$store.dispatch('editPost', { id: postid, text: this.editText, postimg: this.editPostimg });
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
  background-color: #f8f9fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.post-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 10px;
  resize: vertical;
}

.card {
  margin-bottom: 20px;
}
.card p{
  margin-top: 5%;
}

.card-body {
  position: relative;
  padding: 20px;
}

.card-body p {
  margin-bottom: 5px;
}

.card img {
  width: 100%;
  margin-top: 10px;
}

.modal-dialog {
  max-width: 500px;
}
.dropdown{
  position: relative;
  left: 48%;
  bottom: 10vh;
}
.card .why {
  width: 10%;
  margin-top: 10px;
  border-radius: 100%; /* Make the image round */
  position: relative;
  right: 40%;
}
.card .time{
  position: relative;
  right: 30%;
  bottom: 5vh;
}
@media (max-width: 767px) {
  .card img {
    width: 100%;
  }
}
</style>

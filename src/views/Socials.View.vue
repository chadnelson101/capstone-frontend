<template>
    <div id="app">
  <div class="container">
    <h1 class="mb-4">Social Media Admin</h1>
    <div class="mb-4">
      <textarea class="form-control mb-2" v-model="postText" placeholder="Write your post..."></textarea>
      <input type="file" class="form-control mb-2" @change="handleFileChange" accept="image/*">
      <button class="btn btn-primary" @click="addPost">Add Post</button>
    </div>
    <div v-for="(post, index) in posts" :key="index" class="card mb-3">
      <div class="card-body">
        <p>{{ post.text }}</p>
        <img v-if="post.image" :src="post.image" alt="Post Image" class="img-fluid">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
  }
  .post-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
  }
</style>
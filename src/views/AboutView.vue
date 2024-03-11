<template>
  <div class="body">
    <h1 class="header">About us</h1>
    <div class="content">
      <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quasi eius quos impedit voluptas accusantium exercitationem neque adipisci laboriosam necessitatibus temporibus unde, illo cumque quas ipsum officia eligendi laudantium nihil, sed facilis perspiciatis dolor quae obcaecati deserunt! Aspernatur, rem voluptate!</p>
    </div>
    <div class="card-container">
  <div class="card">
    <h2>Stuff</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo at libero varius vehicula.</p>
  </div>
  <div class="card">
    <h2>2</h2>
    <p>Integer sed lectus id justo semper tincidunt. Fusce euismod neque id nulla ullamcorper, et tempus libero lacinia.</p>
  </div>
  <div class="card">
    <h2>Say</h2>
    <p>Nullam at est vel est malesuada ullamcorper. Phasellus finibus turpis sed nisi venenatis, vel convallis nulla fermentum.</p>
  </div>
</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.body{
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: rgb(35, 26, 26);
}
.content{
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 46%;

}
.para{
  color: aliceblue;
}
.header{
  color:aqua;
  position: absolute;
  top:10%;
  left: 8%;
}

.card-container {
    display: flex;
    justify-content: space-between;
    margin: 42px;
    position: absolute;
    top: 50%;
  }

  .card {
    width: calc(33.33% - 20px);
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    border: 5px solid #00BFFF; 
        border-radius: 10px; 
        pointer-events: none;
        animation: neon-animation 1.5s infinite alternate;
    }

    @keyframes neon-animation {
        from {
            border-color: #0080FF;
            box-shadow: 0 0 10px #0080FF, 0 0 20px #0080FF, 0 0 30px #0080FF, 0 0 40px #0080FF; /* Neon glow effect */
        }
        to {
            border-color: #00BFFF; 
            box-shadow: 0 0 20px #00BFFF, 0 0 30px #00BFFF, 0 0 40px #00BFFF, 0 0 50px #00BFFF; /* Neon glow effect */
        }
    }
  

  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

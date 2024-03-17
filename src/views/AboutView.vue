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
  height: 100vh;
  background-image: url(https://gta5mod.net/wp-content/uploads/2022/02/BMW-M4-GTS-Liberty-Walk3-scaled.webp);
  background-size: 100% auto; /* Set the background image width to 100% */
  background-repeat: no-repeat;
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
  position: relative;
  top: 20%;
  left: -20%;
}
.header{
  color:aqua;
  position: absolute;
  top:10%;
  left: 16%;
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
    border: 5px solid #7a98a2; 
        border-radius: 10px; 
        pointer-events: none;
        animation: neon-animation 1.5s infinite alternate;
    }

    @keyframes neon-animation {
        from {
            border-color: #a8b4c1;
            box-shadow: 0 0 10px #6d8296, 0 0 20px #8b99a7, 0 0 30px #475059, 0 0 40px #8698a9; /* Neon glow effect */
        }
        to {
            border-color: #777b7b; 
            box-shadow: 0 0 20px #6e838a, 0 0 30px #748c94, 0 0 40px #768c94, 0 0 50px #738991; /* Neon glow effect */
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

<template>
  <div>
  <div class="animated-text">
         <span></span>
    </div>
  <div>
    <img class="Wick" src="https://wallpapercave.com/wp/wp4289728.jpg" alt="">
  </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  background-color: black;
}
.animated-text span{
    position: relative;
}

.animated-text span::before{
    content: "";
    color: aqua;
    animation: words 20s infinite;
}

.animated-text span::after{
    content: "";
    position: absolute;
    width: calc(100% + 8px);
    height: 100%;
    background-color: black;
    right: -8px;
    animation: cursor .8s infinite, typing 20s steps(14) infinite;
}

@keyframes cursor {
    to{
        border-left: 2px solid #ff7f5000;
    }
}

@keyframes words {
    0%,20%{
        content: "CARZONE";
    }
    21%,40%{
        content: "BMW";
    }
    41%,60%{
        content: "FERRARI";
    }
    61%,80%{
        content: "	Mercedes-Benz";
    }
}

@keyframes typing {
    10%,15%,30%,35%,50%,55%,70%,75%,90%,95%{
        width: 0;
    }
    5%,20%,25%,40%,45%,60%,65%,80%,85%{
        width: calc(100% + 8px);
    }
}
.animated-text{
  color: transparent; /* Set text color to transparent */
  position: relative;
  top: 130px;
  font-size: 4rem;
  z-index: 1000;
  text-transform: uppercase;
}
h1::before {
  content: attr(data-text); /* Set content to data-text attribute */
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow */
  width: 0; /* Initially set width to 0 */
  color: lightblue;
  -webkit-text-stroke: 0.3vw #fff;
  border-right: 2px solid #fff;
  animation: animate 6s linear infinite; /* Apply animation */
}
.Wick {
  width: 100%;
  position: relative;
  top: -160px;
}

@keyframes animate {
  0% {
    width: 0;
  }
  70% {
    width: 100%;
  }
  100% {
    width: 0; /* Ensure the border disappears completely at the end of the animation */
  }
}
</style>
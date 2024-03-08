<template>
    <footer>
        <div class="1">
            <p>Customer Care</p>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Return</p>
        </div>
        <div class="2">
            <p>Partners</p>
            <p>Sneak Peak</p>
            <p>Rebel Gaming</p>
        </div>
        <div class="3">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Work with us</p>
        </div>
    </footer>
    <div class="footerbottom">
    <p>Copyright &copy;2024; designed by <span class="designer">Chad</span></p>
  </div>
</template>

<style scoped>
footer {
    background-color: rgb(64, 53, 53);
    display: flex;
    flex-wrap: wrap;
}

footer div {
    flex: 1;
    padding: 10px;
}

p {
    color: white;
    margin: 0;
}
.footerbottom{
  background-color: #000;
  padding: 20px;
  text-align: center;
}
.footerbottom p{
  color: white;
}
</style>

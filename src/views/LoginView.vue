<template>
	<div>
	<img src="http://performancedrive.com.au/wp-content/uploads/2015/01/BMW-M4-Concept-Iconic-Lights-laser-headlights.jpg" alt="">
</div>
	<div>
		<div class="wrapper">
			<div class="card-switch">
				<label class="switch">
				   <input type="checkbox" class="toggle">
				   <span class="slider"></span>
				   <span class="card-side"></span>
				   <div class="flip-card__inner">
					  <div class="flip-card__front">
						 <div class="title">Log in</div>
						 <form @submit.prevent='' class="flip-card__form" action="">
							<input class="flip-card__input" name="email" placeholder="email" type="email" v-model="email">
							<input class="flip-card__input" name="password" placeholder="Password" type="password" v-model="password">
						   <p></p>
							<button @click="log" class="flip-card__btn">Login</button>
						 </form>
					  </div>
					  <div class="flip-card__back">
						 <div class="title">Sign up</div>
						 <form @submit.prevent='' class="flip-card__form" action="">
							<SignupView/>
						 </form>
					  </div>
				   </div>
				</label>
			</div>   
	   </div>
	</div>
	</template>

	<script>
	import SignupView from '../components/SignupView.vue'

	export default {
		components:{
			SignupView
		},
		data() {
			return{
				email:null,
				password:null,
			}
		},
		computed:{
		  log(){
			console.log(this.$data);
			this.$store.dispatch('login',this.$data)
		  },
		}
	}
	</script>
	
	<style scoped>
	*{
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	/* .body{
		height: 100vh;
	} */
	img{
		width: 100%;
		min-height:100vh;
		
	}
	.flip-card_inner{
		position: relative;
		 top: -1000%;
	}
	.wrapper {
	  --input-focus: #2d8cf0;
	  --font-color: #323232;
	  --font-color-sub: #666;
	  --bg-color: #fff;
	  --bg-color-alt: #666;
	  --main-color: #323232;
		display: flex; 
		flex-direction: column;
		 align-items: center;
		 margin-top: 300px;
	}
	/* switch card */
	.switch {
	  transform: translateY(-200px);
	  position: relative;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  gap: 30px;
	  width: 50px;
	  height: 20px;
	}
	
	.card-side::before {
	  position: absolute;
	  content: 'Log in';
	  left: -100px;
	  top: 0;
	  width: 100px;
	  text-decoration: underline;
	  color: white;
	  font-weight: 600;
	  top:-3300%;
	}
	
	.card-side::after {
	  position: absolute;
	  content: 'Sign up';
	  left: 70px;
	  top: 0;
	  width: 100px;
	  text-decoration: none;
	  color:white;
	  font-weight: 600;
	  top:-3300%;
	}
	
	.toggle {
	  opacity: 0;
	  width: 0;
	  height: 0;
	}
	
	.toggle:checked + .slider {
	  background-color: var(--input-focus);
	}
	
	.toggle:checked + .slider:before {
	  transform: translateX(30px);
	}
	
	.toggle:checked ~ .card-side:before {
	  text-decoration: none;
	}
	
	.toggle:checked ~ .card-side:after {
	  text-decoration: underline;
	}
	
	/* card */ 
	
	.flip-card__inner {
	  width: 300px;
	  height: 350px;
	  position: relative;
	  background-color: transparent;
	  perspective: 1000px;
	  text-align: center;
	  transition: transform 0.8s;
	  transform-style: preserve-3d;
	  top:-3300%;
	}
	
	.toggle:checked ~ .flip-card__inner {
	  transform: rotateY(180deg);
	}
	
	.toggle:checked ~ .flip-card__front {
	  box-shadow: none;
	}
	
	.flip-card__front, .flip-card__back {
	  padding: 20px;
	  position: absolute;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  -webkit-backface-visibility: hidden;
	  backface-visibility: hidden;
	  background: lightgrey;
	  gap: 20px;
	  border-radius: 5px;
	  border: 2px solid var(--main-color);
	  box-shadow: 4px 4px var(--main-color);
	}
	
	.flip-card__back {
	  width: 100%;
	  transform: rotateY(180deg);
	}
	
	.flip-card__form {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 20px;
	}
	
	.title {
	  margin: 20px 0 20px 0;
	  font-size: 25px;
	  font-weight: 900;
	  text-align: center;
	  color: var(--main-color);
	}
	
	.flip-card__input {
	  width: 250px;
	  height: 40px;
	  border-radius: 5px;
	  border: 2px solid var(--main-color);
	  background-color: var(--bg-color);
	  box-shadow: 4px 4px var(--main-color);
	  font-size: 15px;
	  font-weight: 600;
	  color: var(--font-color);
	  padding: 5px 10px;
	  outline: none;
	}
	
	.flip-card__input::placeholder {
	  color: var(--font-color-sub);
	  opacity: 0.8;
	}
	
	.flip-card__input:focus {
	  border: 2px solid var(--input-focus);
	}
	
	.flip-card__btn:active, .button-confirm:active {
	  box-shadow: 0px 0px var(--main-color);
	  transform: translate(3px, 3px);
	}
	
	.flip-card__btn {
	  margin: 20px 0 20px 0;
	  width: 120px;
	  height: 40px;
	  border-radius: 5px;
	  border: 2px solid var(--main-color);
	  background-color: var(--bg-color);
	  box-shadow: 4px 4px var(--main-color);
	  font-size: 17px;
	  font-weight: 600;
	  color: var(--font-color);
	  cursor: pointer;
	} 
	</style>
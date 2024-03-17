<template>
    <input class="flip-card__input" placeholder="Firstname" type="username" v-model="firstname"><input class="flip-card__input" name="lastname" placeholder="lastname"  v-model="lastname">
	<input class="flip-card__input" placeholder="age" type="number" v-model="age">
    <select class="flip-card__input" name="gender" v-model="gender">
  <option value="" disabled selected>Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
	<input class="flip-card__input" name="email" placeholder="email"  v-model="email">
    <select class="flip-card__input" name="role" v-model="role">
  <option value="" disabled selected>Role</option>
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>

	<input class="flip-card__input" name="password" placeholder="Password" type="password" v-model="password">
	<button  @click="addUser" class="flip-card__btn" >Sign up</button>
</template>

<script>
    export default {
        data(){
            return{
                firstname:null,
				lastname:null,
				age:null,
				gender:null,
				email:null,
				role:null,
				password:null,
            }
        },
        computed:{
		  addUser(){
			this.$store.dispatch('addUser', this.$data)
		  }
		}
    }
</script>

<style scoped>
*{
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	img{
		width: 100%
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
	  color: var(--font-color);
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
	  color: var(--font-color);
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
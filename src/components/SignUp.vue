<template>
<div class="container">
	<div class="row">
		<div class="signup col-md">
			<h3>Sign Up</h3>
			<input type="email" v-model="email" placeholder="Email"><br>
			<input type="password" v-model="password" placeholder="Password"><br>
			<button @click="signUp">Register</button>
			<p>Already have an account? <router-link to='Login'>Login</router-link></p>
		</div>
	</div>
</div>
</template>

<script>
import firebase from 'firebase'

export default{
	name: 'signup',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then(user => this.$router.replace('/hello'))
			.catch(error => alert(error))
		}
	}
}
</script>

<style scoped>
.signup{
	margin-top: 40px;
}
input {
	margin: 10px 0;
	width: 30%;
	padding: 15px;
}
button {
	margin-top: 20px;
	padding: 7px;
	width: auto;
	cursor: pointer;
}
p {
	margin-top: 40px;
	font-size: 13px;
}
p a {
	text-decoration: underline;
	cursor: pointer;
}
</style>

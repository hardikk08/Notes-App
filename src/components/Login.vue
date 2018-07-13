<template>
<div class="container">
	<div class="row">
		<div class="login col-md">
			<h3>Sign In</h3>
			<input type="email" v-model="email" placeholder="Email"><br>
			<input type="password" v-model="password" placeholder="Password"><br>
			<button @click='signIn'>Connection</button>
			<p>Don't have an account? You can get one, <router-link to='SignUp'>here!</router-link></p>
		</div>
	</div>
</div>
</template>

<script>
import firebase from 'firebase'

export default{
	name: 'login',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signIn () {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.then(user => this.$router.replace('/hello'))
			.catch(error => alert('Failed: ', error))
		}
	}
}
</script>

<style scoped>
.login{
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

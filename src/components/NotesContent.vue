<template>
	<div class="col-sm-8 right-col">
		<h4 class="h4">Notes Content</h4>
		<hr>
		<hr>
		<div v-if="inputFields">
			<input class="title" type="text" placeholder="Title">
			<input class="content" type="text" placeholder="Content">
		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
import EventBus from '../helper/EventBus'

export default {
	name: 'NotesContent',
	data() {
		return{
			inputFields: false
		}
	},
	mounted() {
		EventBus.$on('NEW_NOTE', this.showContent)
	},
	methods: {
		showContent() {
			this.inputFields ? this.inputFields : !this.inputFields
		}
	}
}
</script>

<style scoped>
.right-col {
  background-color: #d2d2d2;
  height: 100vh;
  margin-top: -60px;
  padding-top: 10px;
}
.title {
	margin: 5px;
	width: 700px;
	border: none;
}
.content {
	margin: 5px;
	width: 700px;
}
</style>

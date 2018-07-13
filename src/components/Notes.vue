<template>
  <div class="col-sm-4 left-col">
      <h4 class="h4">Notes</h4>
    <hr>
    <div class="row">
      <div class="col">
        <button><img src="../assets/list.svg" height="22" width="22"></button>
      </div>
      <div class="col">
        <button><img src="../assets/star.svg" height="22" width="22"></button>
      </div>
      <div class="col">
        <button @click='newNote()'><img src="../assets/add.svg" height="22" width="22"></button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import firebase from 'firebase'
import EventBus from '../helper/EventBus'

export default {
  name: 'Notes',
  data () {
    return {}
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      .then(() => this.$router.replace('login'))
    },
    newNote() {
      const userId = this.$store.state.userAuthData.uid
      EventBus.$emit('NEW_NOTE', userId)
      // firebase.database().ref('usersNotes/' + userId).set({
      //   title: 'Hardik'
      // })
    }
  }
}
</script>

<style scoped>
.left-col {
  background-color: #a3a3a3;
  height: 100vh;
  margin-top: -60px;
  padding-top: 10px;
}
button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>


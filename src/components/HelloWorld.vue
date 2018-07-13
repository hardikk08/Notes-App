<template>
  <div class="container-fluid">
      <div class="row">
        <notes></notes>
        <notes-content></notes-content>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Notes from './Notes'
import NotesContent from './NotesContent'

export default {
  name: 'HelloWorld',
  components: {
    Notes,
    NotesContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

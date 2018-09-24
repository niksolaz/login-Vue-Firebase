<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome Kid!</h2>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Hello page clicked by button Connection'
    }
  },
  methods: {
      logout: function(){
          firebase.auth().signOut().then( () => {
              this.$router.replace('login')
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
button{
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
}
</style>
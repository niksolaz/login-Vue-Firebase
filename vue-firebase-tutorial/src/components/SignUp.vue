<template>
    <div class="sign-up">
        <h3>Create new Account!</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="login">login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name:'signUp',
    data: function(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                (user) => {
                    alert('hello')
                },
                (err) => {
                    alert('Oooops. '+err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p{
        margin-top: 40px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }
</style>

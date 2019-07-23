<template>
  <div class="welcome-container">
    welcome
    <button @click="toHome">to home</button>
    <input type="text" id="inputname" ref="userInput"><button @click="welcomeUser">欢迎使用</button><br>
    
  </div>
</template>

<script>
  export default {
    methods: {
      toHome() {
        this.$router.push('/home/Bill')
      },
      welcomeUser() {
        let name = this.$refs.userInput.value;
        console.log(name);
        this.$router.push('/home/'+name);
      }
    },
  }
</script>

<style>
.welcome-container {
  border: 1px solid black;
  width: 200px;
  height: 100px;
}
</style>
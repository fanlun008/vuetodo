<template>
  <div class="welcome-container">
    welcome
    <a-button @click="toHome">to home</a-button>
    <a-input v-model="userInput"/><a-button type="primary" @click="welcomeUser">欢迎使用</a-button><br>
    
  </div>
</template>

<script>

import {Button} from 'ant-design-vue/lib/button'
import {Input} from 'ant-design-vue/lib/input'
import "ant-design-vue/dist/antd.css";

export default {
  components: {
    Button,
  },
  data() {
    return {
      userInput: ''
    }
  },
  methods: {
    toHome() {
      this.$router.push('/home/Bill')
    },
    welcomeUser() {
      // let name = this.$refs.userInput.value;
      let name = this.userInput;
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
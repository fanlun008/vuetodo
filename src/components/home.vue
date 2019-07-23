<template>
  <div class="home-container">
    <div class="container-header">
      <div class="header-name">home---{{userName}}</div>
    </div>
    <div class="left-nav">
      <div>
        <router-link to="/todoList">todoList</router-link>
      </div>
      <div>
        <router-link :to="{path: `/myInfo/${this.userName}`}">myInfo</router-link>
      </div>
    </div>
    <div class="right-nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$route.params.id
    }
  },
};
</script>

<style>
.home-container {
  border: 1px solid black;
  width: 100%;
  height: 800px;
}

.container-header .header-name {
}

.home-container .left-nav {
  position: relative;
  width: 15%;
  height: 85%;
  padding-top: 100px;
  border: 1px solid black;
  display: inline-block;
}

.home-container .right-nav {
  height: 780px;
  width: 84%;
  border: 1px solid black;
  display: inline-block;
  position: relative;
  float: right;
}
</style>
<template>
  <div class="todo-container">

    <div class="routerlink">
      <router-link :to="{path:'/welcome'}">welcome</router-link>
      <router-link to="/home">home</router-link>
      <router-link to="/home/Bill">home-Bill</router-link>
    </div>

    <div class="routercontent">
      <router-view></router-view>
    </div>

    <!-- <h1>todos</h1>
    <div class="todo-wrap">
      <todo-header />
      <todo-list />
      <todo-footer v-show="this.$store.state.todos.length" />
    </div> -->
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import axios from 'axios'


import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {

  computed: {
    ...mapGetters(['filteredTodos']),
 
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },

  mounted () {
    this.$store.dispatch('loadAllTodos')
  },
};
</script>

<style>

.header-nav {
  position: relative;
  top: 10px;
  border: 1px solid;
  padding: 2px;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 1050px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

.todo-container h1 {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.todo-wrap {
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>

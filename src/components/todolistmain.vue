<template>
  <div>
    <h1>todos</h1>
    <div class="todo-wrap">
      <todo-header />
      <todo-list />
      <todo-footer v-show="this.$store.state.todos.length" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";
import axios from 'axios'
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {

  computed: {
    ...mapGetters(['filteredTodos']),
 
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },

  mounted () {
    this.$store.dispatch('loadAllTodos')
  },
};
</script>

<style>
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
<template>
  <div class="todo-container">
    <h1>todos</h1>
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo" />
      <todo-list :todos="todos" :deleteTodo="deleteTodo" :selectAll="selectAll" />
      <todo-footer v-show="this.todos.length" :todos="todos" :visibility="visibility" :setvisibility="setvisibility" :deleteComplete="deleteComplete" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.complete;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.complete;
    });
  }
};
export default {
  data() {
    return {
      todos: [],
      visibility: 'all'
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    deleteComplete() {
      this.todos = this.todos.filter(todo => !todo.complete);
    },
    selectAll(check) {
      this.todos.forEach(todo => (todo.complete = check));
    },
    setvisibility(type) {
      this.visibility = type;
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
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

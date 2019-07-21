<template>
  <div>
    <input
      type="checkbox"
      id="toggle"
      v-model="isAllCheck"
      :class="{alllabeltoggle: isAllCheckOrNone}"
    />
    <label for="toggle"></label>
    <ul class="todo-list">
      <todo-item
        v-for="(todo, index) in todos"
        :key="index"
        :index="index"
        :todo="todo"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  props: {
    todos: Array,
    deleteTodo: Function,
    selectAll: Function,
  },
  components: {
    TodoItem
  },
  computed: {
    isAllCheckOrNone() {
      return this.completeSize === this.todos.length && this.todos.length;
    },
    isAllCheck: {
      get() {
        return this.completeSize === this.todos.length;
      },
      set(value) {
        this.selectAll(value);
      }
    },
    completeSize() {
      return this.todos.reduce(
        (total, todo) => total + (todo.complete ? 1 : 0),
        0
      );
    }
  }
};
</script>

<style>
#toggle {
  visibility: hidden;
  text-align: center;
  border: none;
  opacity: 0;
  position: absolute;
}

#toggle + label {
  cursor: pointer;
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: 15px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

#toggle + label:before {
  content: "❯";
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

#toggle.alllabeltoggle + label::before {
  color: #a24e4e;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
  border-bottom: none;
}
</style>
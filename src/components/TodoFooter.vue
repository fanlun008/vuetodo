<template>
  <div class="footer">
    <span class="todo-count">
      <strong>{{completeSize}} items left</strong>
    </span>
    <ul class="filters">
      <li>
        <a
          href="#/all"
          :class="{selected: visibility=='all'}"
          @click="selectedFilterType('all')"
        >All</a>
      </li>
      <li>
        <a
          href="#/active"
          :class="{selected: visibility=='active'}"
          @click="selectedFilterType('active')"
        >Active</a>
      </li>
      <li>
        <a
          href="#/completed"
          :class="{selected: visibility=='completed'}"
          @click="selectedFilterType('completed')"
        >Completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-show="completeSize" @click="deleteComplete">Clear completed</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    deleteComplete: Function,
    visibility: String,
    setvisibility: Function
  },
  computed: {
    completeSize() {
      return this.todos.reduce(
        (total, todo) => total + (todo.complete ? 1 : 0),
        0
      );
    }
  },
  methods: {
    selectedFilterType(type) {
      this.setvisibility(type);
    }
  }
};
</script>

<style>
.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  border: none;
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

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.filters li {
  display: inline;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border: 1px solid rgba(224, 213, 213);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer .todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}
</style>
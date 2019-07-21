<template>
  <li
    class="todo"
    :class="{completed: todo.complete}"
  >
    <div class="view">
      <input :id="index" type="checkbox" v-model="todo.complete" />
      <label :for="index"></label>
      <span class="title">{{todo.title}}</span>
      <span class="deleteBtn" v-show="isShow" @click="deleteItem">x</span>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  methods: {
    
    deleteItem() {
      const { todo, index, deleteTodo } = this;
      deleteTodo(index);
    }
  }
};
</script>

<style>
li.completed span.title {
  color: #d9d9d9;
  text-decoration: line-through;
}

li .view {
  margin: 10px 10px;
}

.view input {
  width: 30px;
  height: 30px;
  visibility: hidden;
  margin-left: 5px;
}

.view label {
  width: 30px;
  height: 30px;
  border: 1px solid #d9d9d9;
  position: absolute;
  left: 10px;
  cursor: pointer;
  border-radius: 50%;
  background-position: -8px -5px;
}

.view input:checked + label {
  background-image: url(../img/gou.svg);
}

.view span {
  font-size: 35px;
  line-height: 35px;
  vertical-align: super;
  position: relative;
  left: 10px;
}

.view .deleteBtn {
  position: relative;
  float: right;
  margin-right: 30px;
  color: #d9d9d9;
  cursor: pointer;
}
</style>
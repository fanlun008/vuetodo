<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    class="todo"
    :class="{completed: todo.complete, editing: isEdit}"
  >
    <div class="view">
      <input :id="index" type="checkbox" v-model="todo.complete" />
      <label :for="index"></label>
      <span class="title" @dblclick="enterEdit()">{{todo.title}}</span>
      <span class="deleteBtn" v-show="isShow" @click="deleteItem">x</span>
    </div>
    <input type="text" class="edit" v-model="todo.title" @blur="completeEdit" @keyup.enter="completeEdit">
  </li>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isEdit: false,
    };
  },
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    enterEdit: function() {
      this.isEdit = true;
    },
    completeEdit() {
      this.isEdit = false;
    },
    handleEnter(isEnter) {
      if (isEnter) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    deleteItem() {
      const { todo, index, deleteTodo } = this;
      this.$store.commit('deleteTodo', index)
    }
  }
};
</script>

<style>
li .edit {
  display: none;
}

li.editing .edit {
  display: block;
  position: absolute;
  width: 470px;
  padding: 4px 16px;
  margin: 0 0 0 43px;
  font-size: 35px;
  line-height: 35px;
  height: 50px;
  top: -10px;
}

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
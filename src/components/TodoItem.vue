<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    class="todo"
    :class="{completed: todo.complete, editing: isEdit}"
  >
    <div class="view">
      <input :id="index" type="checkbox" v-model="todo.complete" @click="changeItemStatus"/>
      <label :for="index"></label>
      <input type="hidden" name="" :value="todo.id">
      <span class="title" @dblclick="enterEdit()">{{todo.title}}</span>
      <span class="deleteBtn" v-show="isShow" @click="deleteItem(todo.id)"><a-icon type="delete" /></span>
      <a-popconfirm title="Are you sure delete this task?" @confirm="confirm" @cancel="cancel" okText="Yes" cancelText="No">
        <span class="deleteBtn" style="display:block"><a-icon type="delete" />x</span>
      </a-popconfirm>
      

    </div>
    <input type="text" class="edit" v-model="todo.title" @blur="completeEdit" @keyup.enter="completeEdit">
  </li>
</template>

<script>
import {Button} from 'ant-design-vue/lib/button'
import "ant-design-vue/dist/antd.css";

export default {
  components: {
    Button,
  },
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
    confirm (e) {
      this.$store.dispatch('deleteTodo', this.todo.id)
      this.$message.success('Click on Yes')
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Click on No')
    },
    changeItemStatus() {
      this.todo.complete = !this.todo.complete
      this.$store.dispatch('changeItemStatus', this.todo)
    },

    enterEdit: function() {
      this.isEdit = true;
    },
    completeEdit() {
      this.isEdit = false;
      this.$store.dispatch('changeItemStatus', this.todo);
    },
    handleEnter(isEnter) {
      if (isEnter) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    deleteItem(id) {
      const { todo, index, deleteTodo } = this;
      console.log("deleteById", id);
      // this.$store.commit('deleteTodo', index)
      this.$store.dispatch('deleteTodo', id)
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
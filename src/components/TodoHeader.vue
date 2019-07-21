<template>
  <div class="todo-header">
    <input v-model="title" @keyup.enter="addItem" type="text" class="new-todo" placeholder="What needs to be done" />
  </div>
</template>

<script>
export default {

};
</script>

<style>
.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
}

.todo-header .edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input {
  width: 86%;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 11px system-ui;

  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input::-webkit-input-placeholder {
  padding-left: 30px;
  opacity: 0.5;
}
</style>
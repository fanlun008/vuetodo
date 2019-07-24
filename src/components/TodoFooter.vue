<template>
  <div class="footer">
    <span class="todo-count">
      <strong>{{completeSize}} items left</strong>
    </span>
    <ul class="filters">
      <li>
        <a-button
          :class="{selected: visibility=='all'}"
          @click="selectedFilterType('all')"
        >All</a-button>
      </li>
      <li>
        <a-button
          :class="{selected: visibility=='active'}"
          @click="selectedFilterType('active')"
        >Active</a-button>
      </li>
      <li>
        <a-button
          :class="{selected: visibility=='completed'}"
          @click="selectedFilterType('completed')"
        >Completed</a-button>
      </li>
    </ul>
    <a-button class="clear-completed" v-show="completeSize" @click="deleteComplete">Clear completed</a-button>
    <div style="clear:both"></div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import { mapGetters } from 'vuex';

export default {

  
  computed: {
    ...mapState(['todos', 'visibility']),
    ...mapGetters(['completeSize']),

  },
  methods: {
    ...mapMutations(['deleteComplete']),
    selectedFilterType(type) {
      this.$store.commit('setvisibility', type)
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

.filters li button.selected {
  border-color: rgba(175, 47, 47, 0.2);
  background: rgb(196, 196, 250);
  color: white;
}

.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  overflow: hidden;
}

.footer .todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}
</style>
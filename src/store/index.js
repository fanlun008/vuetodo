import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
  todos: [],
  visibility: 'all'
}

const actions = {
  loadAllTodos({commit}) {
    axios.get('http://localhost:8089/todos').then((response) => {
      commit('loadAllTodos', response.data)
    })
  },

  addTodo({commit, dispatch}, todo) {
    axios.post("http://localhost:8089/todos", todo).then((response) => {
      console.log(response);
      dispatch('loadAllTodos');
    });
  },

  deleteTodo({commit, dispatch}, id) {
    axios.delete("http://localhost:8089/todos/" + id).then((response) => {
      console.log(response);
      dispatch('loadAllTodos');
    })
  },

  changeItemStatus({commit, dispatch}, todo) {
    axios.put("http://localhost:8089/todos/" + todo.id, todo).then((response)=> {
      // console.log("actions put todo: " + todo.id, response);s
      dispatch('loadAllTodos');
    })
  },
}

const mutations = {
  loadAllTodos(state, allTodo) {
    state.todos = allTodo;
    console.log("mutations...",state.todos)
  },

  // addTodo(state, todo) {
  //   state.todos.splice(0, 0, todo);
  //   console.log("mutations...addtodos...", state.todos)
  // },
  // deleteTodo(state, {index}) {
  //   state.todos.splice(index, 1);
  // },
  deleteComplete(state) {
    state.todos = state.todos.filter(todo => !todo.complete);
  },
  selectAll(state, check) {
    state.todos.forEach(todo => (todo.complete = check));
  },
  setvisibility(state, type) {
    state.visibility = type;
    console.log('mutation...setvisibility', type)
  }
}

const filters = {
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

const getters = {
  completeSize(state) {
    return state.todos.reduce(
      (total, todo) => total + (todo.complete ? 1 : 0),
      0
    );
  },
  isAllCheckOrNone(state) {
    let completeSize = state.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0),0);
    return completeSize === state.todos.length && state.todos.length;
  },

  filteredTodos(state) {
    if(state.visibility == 'all') {
      return state.todos;
    } 
    if (state.visibility == 'active') {
      return state.todos.filter(function(todo) {
        return !todo.complete;
      })
    } 
    if (state.visibility == 'completed') {
      return state.todos.filter(function(todo) {
        return todo.complete;
      });
    }
  }
}



export default new Vuex.Store({
  state, //状态对象
  mutations, //包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters //包含多个getter计算属性的对象
})

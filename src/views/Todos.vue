<template>
  <div id="todos">
    <h1>Todos</h1>
    <router-link to="/">To main</router-link>
    <hr />
    <Form @add-item="addTodo" />
    <select v-model="filter" name="status" id="">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not">not completed</option>
    </select>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="displayItems.length"
      v-bind:todos="displayItems"
      @removeTodo="removeTodo"
    />
    <div v-else>No todos</div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import Form from '@/components/Form';
import Loader from '@/components/Loader';

export default {
  name: 'Todos',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all',
    };
  },
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
  computed: {
    displayItems() {
      if (this.filter === 'all') return this.todos;
      else if (this.filter === 'not') return this.todos.filter((item) => !item.completed);
      return this.todos.filter((item) => item.completed);
    },
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=3')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });

    // fetch('http://localhost:1337/points')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    const url = 'https://api.allorigins.win/get?url=https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.contents);
      })
  },
  components: {
    TodoList,
    Form,
    Loader,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    addTodo(newItem) {
      this.todos.push(newItem);
    }
  }
}
</script>

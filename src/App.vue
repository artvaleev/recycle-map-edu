<template>
  <div id="app">
    Hello
    <Form />
    <TodoList
      v-bind:todos="todos"
      @removeTodo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import Form from '@/components/Form';
export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, title: 'раз', completed: false},
        { id: 2, title: 'два', completed: true},
        { id: 3, title: 'три', completed: false},
      ],
    };
  },
  components: {
    TodoList,
    Form,
  },
  methods: {
    removeTodo(id) {
      console.log(
        'remove', id
      );
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

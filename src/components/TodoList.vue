<template>
  <ul>
    <TodoItem
      v-for="(todoItem, index) of todos"
      v-bind:key="todoItem.id"
      v-bind:todo="todoItem"
      v-bind:index="index"
      v-on:removeTodo="removeTodo"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id)
    },
  }
}
</script>

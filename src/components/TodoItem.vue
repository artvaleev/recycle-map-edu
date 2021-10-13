<template>
  <li>
    <span
      v-bind:class="{done: todo.completed}">
      <input type="checkbox" name="" id="" v-on:change="todo.completed = !todo.completed">
      <span>{{index + 1}}{{todo.title | uppercase}}</span>
    </span>
    
    <button v-on:click="$emit('removeTodo', todo.id)">&times;</button>
  </li>
</template>

<style scoped>
li {
  margin-bottom: 15px;
  border: 1px solid gray;
  padding: 10px;
}
button {
}

.done {
  text-decoration: line-through;
}
</style>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  filters: {
    uppercase(value) {
      return value.toLocaleUpperCase();
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
  </form>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      title: '',
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (this.title.trim().length) {
        // call adding
        const newItem = {
          id: Date.now(),
          title: this.title.trim(),
          completed: false,
        };

        this.$emit('add-item', newItem);
        this.title = '';
      }
    }
  },
}
</script>

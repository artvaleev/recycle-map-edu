<template>
  <div id="app">    
    <div id="map">
      <map-with-points :items="store.filteredItems" />
      <filters-block />
    </div>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { MapWithPoints, FiltersBlock } from './components';
import { store } from './store';

export default observer({
  name: 'App',
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.store.loadData(this);
  },
  components: { MapWithPoints, FiltersBlock  },
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#map {
  width: 100%;
  height: 100vh;
  background: grey;
}

#map > .ymap-container {
  height: inherit;
}
</style>

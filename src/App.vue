<template>
  <div id="app">    
    <div id="map" :class="{ onLine }">
      <filters-block />
      <map-with-points v-if="onLine" :items="store.filteredItems" />
      <offline-list v-else :items="store.filteredItems" />
    </div>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { MapWithPoints, FiltersBlock, OfflineList } from './components';
import { store } from './store';

export default observer({
  name: 'App',
  data() {
    return {
      store,
      onLine: navigator.onLine,
    };
  },
  mounted() {
    this.store.loadData(this);

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  },
  beforeDestroy() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  },
  components: { MapWithPoints, FiltersBlock, OfflineList },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === 'online';
    }
  }
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #F0F0F0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#map {
  height: 100vh;
}

#map:not(.onLine) {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

@media screen and (min-width: 768px ) {
  #map.onLine {
    height: 100vh;
  }

  #map:not(.onLine) {
    flex-direction: row;
  }
}

#map > .ymap-container {
  height: inherit;
}
</style>

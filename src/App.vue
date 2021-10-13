<template>
  <div id="app">    
    <div id="map">
      <yandex-map :settings="settings" :coords="coords" :zoom="12" :controls="['zoomControl' ,'trafficControl']">
        <ymap-marker 
          :coords="coords" 
          marker-id="123" 
          hint-content="some hint"
          @click="onMarkerClick"
          :balloon="{ text: 'hi'}"
        />
      </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { settings } from './maps_settings';
export default {
  name: 'App',
  data() {
    return { settings, coords: [
      55.779563, 49.132241
    ] };
  },
  mounted() {
    console.log(process.env.VUE_APP_YMAPS_API_KEY);
    console.log(process.env);
  },
  components: { yandexMap, ymapMarker },
  methods: {
    onMarkerClick(e) {
      console.log(e.get('target'));
    },
  },
}
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
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#map {
  width: 100%;
  height: 100vh;
  background: grey;
}

#map > * {
  height: inherit;
}
</style>

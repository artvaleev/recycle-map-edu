<template>
  <yandex-map :settings="settings" :coords="center" :zoom="12" :controls="['zoomControl' ,'trafficControl']" class="map">
    <ymap-marker
      v-for="item in items"
      v-bind:key="item.title"
      :coords="item.coords" 
      :marker-id="item.title"
      :hint-content="item.title"
      @click="onMarkerClick"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { settings } from '@/maps_settings';
export default {
  name: 'MapWithPoints',
  components: { yandexMap, ymapMarker },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      settings,
      center: [55.779563, 49.132241],
    };
  },
  methods: {
    onMarkerClick(e) {
      console.log(e.get('target'));
    },
  },
}
</script>

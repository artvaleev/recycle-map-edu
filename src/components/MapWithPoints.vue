<template>
  <yandex-map :settings="settings" :coords="center" :zoom="12" :controls="['zoomControl' ,'trafficControl']" class="map">
    <ymap-marker
      v-for="item in items"
      v-bind:key="item.id"
      :coords="item.coords" 
      :marker-id="item.id"
      :hint-content="item.title"
      :balloon="item | prepareBalloonConfig"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { settings } from '@/maps_settings';
import { formBalloonContent } from '@/tools';

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
  filters: {
    prepareBalloonConfig: (item) => {
      return { body: formBalloonContent(item) };
    },
  }
}
</script>

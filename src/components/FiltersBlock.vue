<template>
  <div class="filters">
    <div class="section">
      <div class="section__title">Тип места</div>
      <div class="section__content">
        <label v-for="item in Object.entries(placeTypes)" v-bind:key="item[0]"><input type="checkbox" name="placeType" :value="item[0]" @change="onFilterCheck"> <span>{{item[1]}}</span></label>
      </div>
    </div>
    <div class="section">
      <div class="section__title">Тип отходов</div>
      <div class="section__content">
        <label v-for="item in Object.entries(trashTypes)" v-bind:key="item[0]"><input type="checkbox" name="trashType" :value="item[0]" @change="onFilterCheck"> <span>{{item[1]}}</span></label>
      </div>
    </div>
    <div class="section">
      <div class="section__content">
        <div class="section__title">График работы</div>
        <label><input type="checkbox" name="isOpen" value="isOpen" @change="onFilterCheck"> <span>Открыто?</span></label>
      </div>
    </div>
  </div>
</template>

<script>
import { trashTypes, placeTypes } from '@/constants';
import { store } from '@/store';

export default ({
  name: 'FiltersBlock',
  created() {
    this.trashTypes = trashTypes;
    this.placeTypes = placeTypes;
  },
  methods: {
    onFilterCheck(e) {
      const [filterGroup, filterName, checked] = [e.target.name, e.target.value, e.target.checked];
      store.setFilter(filterGroup, filterName, checked);
    }
  },
})
</script>

<style>
#map:not(.onLine) .filters {
  position: static;
  margin: 15px;
}
</style>

<style scoped>
.filters {
  position: fixed;
  z-index: 2;
  bottom: 40px;
  left: 15px;
  background-color: #fff;
  padding: 15px;
  order: 2;
  width: auto;
  right: 15px;
}

@media screen and (min-width: 768px ) {
  .filters {
    order: unset;
    width: 300px;
    right: unset;
  }
}

label {
  display: block;
}

.section:not(:first-child) {
  margin-top: 10px;
}

.section__title {
  font-weight: bold;
}
</style>
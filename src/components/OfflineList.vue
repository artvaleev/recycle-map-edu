<template>
  <div class="offlineData">
    <strong>К сожалению, без интернета невозможно отобразить карту.</strong> Но список мест утилизации доступен:
    <ul>
      <li v-for="item in items" v-bind:key="item.id"><strong>{{item.title}}</strong> / {{item.address}} <span v-if="item.description" class="muted">({{item.description}})</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OfflineList',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.offlineData {
  margin: 15px;
  padding: 15px;
  background: #fff;
  flex: 1;
  overflow-y: scroll;
}
@media screen and (min-width: 768px ) {
  .offlineData { 
    max-height: calc(100vh - 60px);
  }
}
ul {
  padding-left: 15px;
}
li:not(:first-child) {
  margin-top: 10px;
}
.muted {
  color: #999;
}
</style>
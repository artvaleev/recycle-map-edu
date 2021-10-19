import { action, computed, observable, makeObservable } from "mobx";
import { loadItems } from './tools';

const isOpen = ({ nowDayName, nowHours }) => (item) => {
  const { worktime } = item;
  
  if (!worktime || Object.keys(worktime).length < 1 || !worktime[nowDayName]) return true;

  return worktime[nowDayName][0] <= nowHours && nowHours < worktime[nowDayName][1];
};

// for maps
const injectCoords = (item) => ({ ...item, coords: [item.lon, item.lat] });

class ViewModel {
  items = [];

  filters = {
    placeType: [],
    trashType: [],
    isOpen: [],
  };

  constructor() {
    makeObservable(this, {
      filters: observable,
      items: observable,
      setItems: action,
      setFilter: action,
      filteredItems: computed,
      openItems: computed,
    })
  }

  setItems = (items) => {
    this.items = items;
  }

  setFilter = (group, name, checked = false) => {
    if (checked) {
      this.filters[group].push(name);
    } else {
      this.filters[group] = this.filters[group].filter((item) => item !== name);
    }
  }

  loadData = (vueComponentInstance) => {
    loadItems(vueComponentInstance).then(this.setItems);
  }

  get openItems(){
    const now = new Date();
    const nowHours = now.getHours();
    const nowDayName = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(now).toLocaleLowerCase();

    return this.items.filter(isOpen({ nowHours, nowDayName }));
  }

  get filteredItems() {
    let result = this.filters.isOpen.length ? this.openItems : this.items;

    if (this.filters.placeType.length) {
      result = result.filter((item) => this.filters.placeType.some((placeType) => item[placeType]));
    }
    if (this.filters.trashType.length) {
      result = result.filter((item) => this.filters.trashType.some((trashType) => item[trashType]));
    }

    return result.map(injectCoords);
  }
}

export const store = new ViewModel();
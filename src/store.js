import { action, computed, observable, makeObservable } from "mobx";
import { loadItems } from './tools/loadItems';
import { fakeItems } from './constants';

class ViewModel {
  items = fakeItems;

  filters = {
    placeType: [],
    trashType: [],
    isOpen: [],
  };

  constructor() {
    makeObservable(this, {
      items: observable,
      setItems: action,
      setFilter: action,
      filteredItems: computed,
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

  get filteredItems() {
    return this.items.map((item) => ({ ...item, coords: [item.lon, item.lat] }));
  }
}

export const store = new ViewModel();
import uuid from 'uuid/v1';

export default class RoutineList {
  constructor({
    items
  }) {
    this.id = uuid();
    this.items = items || [];
  }

  getItem(id) {
    const filteredItems = this.items.filter((item) => {
      return item.id === id;
    });

    if (filteredItems.length > 0) {
      return filteredItems[0];
    }
    return null;
  }

  addItem(item) {
    this.items = this.items.concat(item);
    return routineItem;
  }

  toggleDone(id, date) {
    const item = this.getItem(id);
    item.toggleDone(date);
  }

  removeItem(id) {
    const targetItem = this.getItem(id);

    this.items = this.items.filter((item) => {
      return item.id !== id;
    });

    return targetItem;
  }
}

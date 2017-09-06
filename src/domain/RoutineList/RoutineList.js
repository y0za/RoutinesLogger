import uuid from 'uuid/v1';

export default class RoutineList {
  constructor({
    items
  }) {
    this.id = uuid();
    this.items = items || [];
  }
}

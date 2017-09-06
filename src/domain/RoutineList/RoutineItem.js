import uuid from 'uuid/v1';

export default class RoutineItem {
  constructor({
    id,
    title,
    doneDates,
    addedDate
  }) {
    this.id = id || uuid();
    this.title = title;
    this.doneDates = doneDates;
    this.addedDate = addedDate;
  }
}

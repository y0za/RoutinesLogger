import uuid from 'uuid/v1';

export default class RoutineItem {
  constructor({
    id,
    title,
    doneDates,
    sinceDate
  }) {
    this.id = id || uuid();
    this.title = title;
    this.doneDates = doneDates;
    this.sinceDate = sinceDate;
  }
}

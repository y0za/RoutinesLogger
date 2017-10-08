import uuid from 'uuid/v1';

export default class RoutineItem {
  constructor({ id, title, doneDates, sinceDate }) {
    this.id = id || uuid();
    this.title = title;
    this.doneDates = doneDates;
    this.sinceDate = sinceDate;
  }

  isDone(targetDate) {
    return this.doneDates.some(date => {
      return date.equals(targetDate);
    });
  }

  toggleDone(targetDate) {
    if (this.isDone(targetDate)) {
      this.doneDates = this.doneDates.filter(date => {
        return !date.equals(targetDate);
      });
    } else {
      this.doneDates = this.doneDates.concat(targetDate);
    }
  }
}

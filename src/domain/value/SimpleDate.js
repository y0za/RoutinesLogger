export default class SimpleDate {
  constructor({
    year,
    month,
    day
  }) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  equals(date) {
    return (this.year === date.year)
        && (this.month === date.month)
        && (this.day === date.day);
  }

  toString() {
    const month = this.month.toString().padStart(2, '0');
    const day = this.day.toString().padStart(2, '0');
    return `${this.year}-${month}-${day}`;
  }
}

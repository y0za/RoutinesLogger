import RoutineList from '../domain/RoutineList';

export class RoutineRepository {
  constructor(dataSet = new Map()) {
    this.dataSet = dataSet;
  }

  findById(routineID) {
    return this.dataSet.get(routineID);
  }

  findAll() {
    const items = [];
    for (const [id, item] of this.dataSet) {
      items.push(item);
    }
    return new RoutineList(items);
  }

  store(item) {
    this.dataSet.set(item.id, item):
  }
}

export default new RoutineRepository();

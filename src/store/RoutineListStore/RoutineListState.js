export default class RoutineListState {
  constructor({ routineItems, date } = {}) {
    this.routineItems = routineItems;
    this.date = date;
  }

  get routines() {
    if (this.routineItems == null) {
      return [];
    }

    return this.routineItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        done: item.isDone(this.date)
      };
    });
  }

  reduce(payload) {
    switch (payload.type) {
      case 'InitializeDateUseCase':
      case 'SwitchDateUseCase':
        return new RoutineListState({
          routineItems: this.routineItems,
          date: payload.date
        });
      default:
        return this;
    }
  }

  update({ routineItems }) {
    return new RoutineListState({
      routineItems,
      date: this.date
    });
  }
}

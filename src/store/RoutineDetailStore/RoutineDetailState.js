export default class RoutineDetailState {
  constructor({ routineId, dates } = {}) {
    this.routineId = routineId;
    this.dates = dates;
  }

  reduce(payload) {
    switch (payload.type) {
      case 'ShowDetailUseCase':
        return new RoutineDetailState(
          Object.assign({}, this, {
            routineId: payload.routineId
          })
        );
      default:
        return this;
    }
  }

  update({ dates }) {
    return new RoutineDetailState(
      Object.assign({}, this, { dates })
    );
  }
}

import { Store } from 'almin';
import routineRepository from '../../infra/RoutineRepository';
import RoutineDetailState from './RoutineDetailState';

export default class RoutineDetailStore extends Store {
  static create() {
    return new RoutineDetailStore({ routineRepository });
  }

  constructor({ routineRepository }) {
    super();
    this.routineRepository = routineRepository;
    this.state = new RoutineDetailState();
  }

  receivePayload(payload) {
    let newState = this.state.reduce(payload);
    if (newState.routineId != null) {
      const routineItem = this.routineRepository.findById(newState.routineId);
      newState = newState.update({
        dates: routineItem.doneDates.map(date => date.toString())
      });
    }
    this.setState(newState);
  }

  getState() {
    return this.state;
  }
}

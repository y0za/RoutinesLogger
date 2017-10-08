import { Store } from 'almin';
import RoutineListState from './RoutineListState';

export default class RoutineListStore extends Store {
  constructor({ routineRepository }) {
    super();
    this.routineRepository = routineRepository;
    this.state = new RoutineListState();
  }

  receivePayload(payload) {
    this.state = this.state.reduce(payload);
    this.state = this.state.update({
      routineItems: this.routineRepository.findAll()
    });
  }

  getState() {
    return this.state;
  }
}

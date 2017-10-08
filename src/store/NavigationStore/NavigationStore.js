import { Store } from 'almin';
import NavigationState from './NavigationState';

export default class NavigationStore extends Store {
  constructor() {
    super();
    this.state = new NavigationState();
  }

  receivePayload(payload) {
    this.state = this.state.reduce(payload);
  }

  getState() {
    return this.state;
  }
}

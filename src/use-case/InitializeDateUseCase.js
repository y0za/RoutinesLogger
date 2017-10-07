import { UseCase } from 'almin';

export default class InitializeDateUseCase extends UseCase {
  execute(date) {
    this.dispatch({
      type: this.name,
      date
    });
  }
}

import { UseCase } from 'almin';

export class InitializeDateUseCase extends UseCase {
  execute(date) {
    this.dispatch({
      type: this.name,
      date
    });
  }
}

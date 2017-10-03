import { UseCase } from 'almin';

export class InitializeDateUseCase extends UseCase {
  static create() {
    return new InitializeDateUseCase();
  }

  execute(date) {
    this.dispatch({
      type: this.name,
      date
    });
  }
}

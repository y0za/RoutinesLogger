import { UseCase } from 'almin';

export class ShowDetailUseCase extends UseCase {
  static create() {
    return new ShowDetailUseCase();
  }

  execute(routineId) {
    this.dispatch({
      type: this.name,
      routineId
    });
  }
}

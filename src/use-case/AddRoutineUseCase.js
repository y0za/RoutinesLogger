import { UseCase } from 'almin';
import RoutineItem from '../domain/RoutineItem';
import routineRepository from '../infra/RoutineRepository';

export class AddRoutineUseCase extends UseCase {
  static create() {
    return new AddRoutineUseCase({ routineRepository });
  }

  constructor({ routineRepository }) {
    super();
    this.routineRepository = routineRepository;
  }

  execute(title, sinceDate) {
    const routineItem = new RoutineItem({
      title,
      doneDates: [],
      sinceDate
    });

    this.routineRepository.store(routineItem);
  }
}

import { UseCase } from 'almin';
import RoutineItem from '../domain/RoutineItem';
import routineRepository from '../infra/RoutineRepository';
import SimpleDate from '../domain/value/SimpleDate';

export default class AddRoutineUseCase extends UseCase {
  static create() {
    return new AddRoutineUseCase({ routineRepository });
  }

  constructor({ routineRepository }) {
    super();
    this.routineRepository = routineRepository;
  }

  execute(title, sinceDate = SimpleDate.fromDate()) {
    const routineItem = new RoutineItem({
      title,
      doneDates: [],
      sinceDate
    });

    this.routineRepository.store(routineItem);
  }
}

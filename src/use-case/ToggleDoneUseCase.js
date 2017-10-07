import { UseCase } from 'almin';
import RoutineItem from '../domain/RoutineItem';
import routineRepository from '../infra/RoutineRepository';

export default class ToggleDoneUseCase extends UseCase {
  static create() {
    return new ToggleDoneUseCase({ routineRepository });
  }

  constructor({ routineRepository }) {
    this.routineRepository = routineRepository;
  }

  execute(routineId, date) {
    const routineItem = this.routineRepository.findById(routineId);
    routineItem.toggleDone(date);
    this.routineRepository.store(routineItem);
  }
}

import { UseCase } from 'almin';
import { NavigationActions } from 'react-navigation';
import RoutineItem from '../domain/RoutineItem';
import routineRepository from '../infra/RoutineRepository';
import SimpleDate from '../domain/value/SimpleDate';
import ChangeNavigationUseCase from './ChangeNavigationUseCase';

export default class AddRoutineUseCase extends UseCase {
  static create() {
    return new AddRoutineUseCase({
      routineRepository,
      navigationActions: NavigationActions
    });
  }

  constructor({ routineRepository, navigationActions }) {
    super();
    this.routineRepository = routineRepository;
    this.navigationActions = navigationActions;
  }

  execute(title, sinceDate = SimpleDate.fromDate()) {
    const routineItem = new RoutineItem({
      title,
      doneDates: [],
      sinceDate
    });

    this.routineRepository.store(routineItem);

    const backAction = this.navigationActions.back();
    this.context.useCase(new ChangeNavigationUseCase()).execute(backAction);
  }
}

import { UseCase } from 'almin';
import { NavigationActions } from 'react-navigation';
import routineRepository from '../infra/RoutineRepository';
import ChangeNavigationUseCase from './ChangeNavigationUseCase';

export default class ShowDetailUseCase extends UseCase {
  static create() {
    return new ShowDetailUseCase({ routineRepository });
  }

  constructor({ routineRepository }) {
    super();
    this.routineRepository = routineRepository;
  }

  execute(routineId) {
    this.dispatch({
      type: this.name,
      routineId
    });

    const routineItem = this.routineRepository.findById(routineId);

    this.context.useCase(
      new ChangeNavigationUseCase()
    ).execute(
      NavigationActions.navigate({
        routeName: 'Detail',
        params: { title: routineItem.title }
      })
    );
  }
}

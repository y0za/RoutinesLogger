import { UseCase } from 'almin';
import { NavigationActions } from 'react-navigation';
import ChangeNavigationUseCase from './ChangeNavigationUseCase';

export default class ShowAddRoutineUseCase extends UseCase {
  execute() {
    const action = NavigationActions.navigate({
      routeName: 'AddRoutine'
    });
    this.context.useCase(new ChangeNavigationUseCase()).execute(action);
  }
}

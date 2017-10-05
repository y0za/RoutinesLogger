import { UseCase } from 'almin';

export default class ChangeNavigationUseCase extends UseCase {
  execute(navigationAction) {
    this.dispatch({
      type: this.name,
      navigationAction
    });
  }
}

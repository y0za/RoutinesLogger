import appNavigator from '../../AppNavigator';

const initialAction = appNavigator.router.getActionForPathAndParams('List');
const initialState = appNavigator.router.getStateForAction(initialAction);

export default class NavigationState {
  constructor({ index, routes } = initialState) {
    this.index = index;
    this.routes = routes;
  }

  reduce(payload) {
    switch (payload.type) {
      case 'ChangeNavigationUseCase':
        const nextState = appNavigator.router.getStateForAction(
          payload.navigationAction,
          this
        );
        return new NavigationState(nextState);
      default:
        return this;
    }
  }
}

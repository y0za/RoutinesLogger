import React from 'react';
import { Context, Dispatcher } from 'almin';
import AlminReactContainer from 'almin-react-container';
import { addNavigationHelpers } from 'react-navigation';

import appLocator from './AppLocator';
import AppNavigator from './AppNavigator';
import AppStore from './store/AppStore';
import SimpleDate from './domain/value/SimpleDate';
import ChangeNavigationUseCase from './use-case/ChangeNavigationUseCase';
import InitializeDateUseCase from './use-case/InitializeDateUseCase';

const dispatcher = new Dispatcher();
const context = new Context({
  dispatcher,
  store: AppStore.create()
});
appLocator.context = context;

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: action =>
            context.useCase(new ChangeNavigationUseCase()).execute(action),
          state: this.props.navigationState
        })}
        screenProps={{
          routineListState: this.props.routineListState,
          routineDetailState: this.props.routineDetailState
        }}
      />
    );
  }
}

context.useCase(new InitializeDateUseCase()).execute(SimpleDate.fromDate());

export default AlminReactContainer.create(
  AppWithNavigationState,
  appLocator.context
);

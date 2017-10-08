import React from 'react';
import { View, Text, Button } from 'react-native';
import AlminReactContainer from 'almin-react-container';
import RoutineList from './RoutineList';
import appLocator from '../AppLocator';
import ShowDetailUseCase from '../use-case/ShowDetailUseCase';
import ToggleDoneUseCase from '../use-case/ToggleDoneUseCase';
import ShowAddRoutineUseCase from '../use-case/ShowAddRoutineUseCase';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Routines',
    headerRight: (
      <Button
        title="Add"
        onPress={() =>
          appLocator.context.useCase(new ShowAddRoutineUseCase()).execute()}
      />
    )
  };

  showDetail(routineId) {
    appLocator.context.useCase(ShowDetailUseCase.create()).execute(routineId);
  }

  toggleDone(routineId) {
    const date = this.props.screenProps.routineListState.date;
    appLocator.context
      .useCase(ToggleDoneUseCase.create())
      .execute(routineId, date);
  }

  render() {
    return (
      <View>
        <RoutineList
          routines={this.props.screenProps.routineListState.routines}
          showDetail={this.showDetail}
          toggleDone={this.toggleDone.bind(this)}
        />
      </View>
    );
  }
}

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import appLocator from '../AppLocator';
import AddRoutineUseCase from '../use-case/AddRoutineUseCase';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'New Routine'
  };

  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  addRoutine() {
    appLocator.context
      .useCase(AddRoutineUseCase.create())
      .execute(this.state.title);
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
        />
        <Button title="Add Routine" onPress={this.addRoutine.bind(this)} />
      </View>
    );
  }
}

import React from 'react';
import { View, Text } from 'react-native';
import RoutineList from './RoutineList';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Routines',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <RoutineList navigate={navigate} />
      </View>
    );
  }
}

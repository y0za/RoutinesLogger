import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const checkboxColor = '#5fba7d';
const checkboxSize = 40;

export default class RoutineItem extends React.Component {
  render() {
    const routine = this.props.routine;
    const checkbox = routine.done ? (
      <Icon name="check-square-o" size={checkboxSize} color={checkboxColor} />
    ) : (
      <Icon name="square-o" size={checkboxSize} color={checkboxColor} />
    );

    return (
      <TouchableOpacity onPress={() => this.props.showDetail(routine.id)}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.toggleDone(routine.id)}>
            <View style={styles.checkbox}>{checkbox}</View>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{routine.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  checkbox: {
    padding: 6,
    width: 54
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  }
});

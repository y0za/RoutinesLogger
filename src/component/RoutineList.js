import React from 'react';
import { FlatList } from 'react-native';
import RoutineItem from './RoutineItem';

const defaultRoutines = [
  { id: 1, title: 'Walking', done: true },
  { id: 2, title: 'Reading', done: false },
  { id: 3, title: 'Cleaning', done: false }
];

export default class RoutineList extends React.Component {
  render() {
    const onPressItem = (title) => {
      this.props.navigate('Detail', { title: title });
    };

    return (
      <FlatList
        data={defaultRoutines}
        renderItem={({item}) => <RoutineItem routine={item} onPressItem={onPressItem.bind(this)} />}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

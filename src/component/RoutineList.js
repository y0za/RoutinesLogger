import React from 'react';
import { FlatList } from 'react-native';
import RoutineItem from './RoutineItem';

export default class RoutineList extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.routines}
        renderItem={({item}) => {
          return (
            <RoutineItem
              routine={item}
              showDetail={this.props.showDetail}
              toggleDone={this.props.toggleDone}
            />
          );
        }}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

import React from 'react';
import { View } from 'react-native';
import LogCalendar from './LogCalendar';
import { Calendar } from 'react-native-calendars';

const doneDates = [
  '2017-09-01',
  '2017-09-02',
  '2017-09-11',
  '2017-09-12'
];

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.title }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <LogCalendar doneDates={doneDates} />
      </View>
    );
  }
}

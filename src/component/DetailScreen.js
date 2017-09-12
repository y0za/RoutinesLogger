import React from 'react';
import { Text } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.title }
  };


  render() {
    return (
      <Text>Detail</Text>
    );
  }
}

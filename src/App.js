import { StackNavigator } from 'react-navigation';
import ListScreen from './component/ListScreen';
import DetailScreen from './component/DetailScreen';

const App = StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen }
});

export default App;

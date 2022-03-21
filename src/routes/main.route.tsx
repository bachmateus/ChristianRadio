import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import ProfileConect from '../screens/Profile';

const{ Navigator, Screen } = createDrawerNavigator();

export default function MainRoute() {
  return (
    <Navigator>
      <Screen name="Playing" component={Home} />
      <Screen name="Profile" component={ProfileConect} />
    </Navigator>
  );
}

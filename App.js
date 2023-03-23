import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {COLORS} from './constant/theme'

import Slider from './components/Slider'

import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  },
});

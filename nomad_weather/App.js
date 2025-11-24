import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heldo! I made a RN App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


// StyleSheet.create :: object를 생성하는데 사용함..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: 'blue',
  }
});

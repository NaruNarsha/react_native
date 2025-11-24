import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "tomato"}}></View>
      <View style={{ flex: 5, backgroundColor: "teal"}}></View>
      <View style={{ flex: 1, backgroundColor: "orange"}}></View>
    </View>
  );
}



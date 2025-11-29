import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        
        <Pressable>
          <Text style={styles.btnText}>Trable</Text>
        </Pressable>
      </View>
    </View>
  );``
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
    backgroundColor: "#5c071cff"
  },
  btnText: {
    color: "white",
    fontSize: 44,
    fontWeight:600,
  }
})
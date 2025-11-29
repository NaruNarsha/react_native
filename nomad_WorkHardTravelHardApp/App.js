import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { theme } from './colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "@toDos";

export default function App() {

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({}); // {} = 오브젝트 할당..

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  
  /**
   * 앱이 처음 렌더링 될 때 AsyncStorage에서 데이터 불러오기
   */
  useEffect(() => {
    loadToDos();
  }, []);

  /**
   * AsyncStorage에서 데이터 불러오기
   */
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    console.log('loadToDos AsyncStorage.getItem(STORAGE_KEY) : ', JSON.parse(s));
    setToDos(JSON.parse(s) || {});
  }

  /**
   * 
   * AsyncStorage에 데이터 저장하기
   */
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }


  const addToDo =  async () => {
    if(text === ""){
      return;
    }

    const newToDos = {...toDos, [Date.now()]: {text, work: working}};
  
    console.log('newToDos : ', newToDos);

    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  console.log(toDos);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work} >
          <Text style={{...styles.btnText, color : working ? "white": theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color : !working ? "white": theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        returnKeyType='done'
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        value = {text}
        // placeholderTextColor= "red"
        placeholder={working ? "Add a To Do" : "Where do you want to go?"} 
        style={styles.input} 
      />
      <ScrollView>
        {Object.keys(toDos).map((key) => 
          toDos[key].work === working ? (
          <View style = {styles.toDo} key = {key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
          </View>
          ) : null 
        )}
      </ScrollView>
    </View>
  ); 
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
    fontSize: 38,
    fontWeight: "600",
  },
  input:{
    backgroundColor: "white",
    paddingVertical : 20, 
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 30,
    fontSize: 18,
    
  },
  toDo:{
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  toDoText:{
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  }
})
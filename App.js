import React, {useState}  from 'react';
import { StyleSheet, Text, View , } from 'react-native';
import Quiz from "./components/quiz"
import Quiz2 from "./components/quiz2"
import Quiz3 from "./components/quiz3"
import Start from "./components/start"

export default function App() {
  const [screen, setScreen] = useState('Start')

  const Change = () => {
    setScreen('NotStart')
  }
  return (
    <View style={styles.container}>
      {screen == 'Start' ? <Start onPress = {Change} /> : <Quiz2/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

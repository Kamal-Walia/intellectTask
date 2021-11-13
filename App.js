import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CircularSlider from './src/Components/CircularSlider'
import Levels from './src/Components/Levels'

const App = () => {
  const [currentLevel, setLevel] = useState(-1);
  const [currentSliderValue, setSliderValue] = useState(0);

  const levels = [1, 2, 3, 4, 5];

  const handleReset = () => {
    setSliderValue(0)
    setLevel(-1)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Levels
          currentLevel={currentLevel}
          setLevel={setLevel}
          levels={levels}
        />
        <CircularSlider
          currentSliderValue={currentSliderValue}
          setSliderValue={setSliderValue}
        />
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}>
          <Text>Reset Levels</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resetButton: {
    marginTop: 20,
  }
});

export default App;

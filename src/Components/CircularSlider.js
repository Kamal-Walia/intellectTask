import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import CircularProgressBar from './CircularProgressBar';

const CircularSlider = ({currentSliderValue, setSliderValue}) => {
    return (
      <>
        <View style={styles.circularProgressContainer}>
          <CircularProgressBar
            radius={100}
            percent={currentSliderValue * 10}
            width={30}
            activeColor={'#4169E1'}
            passiveColor={'white'}
            baseColor={'#00BFFF'}
            children={
              <View style={styles.innerCircleOne}>
                <View style={styles.innerCircleTwo}>
                  <Text>{Math.round(currentSliderValue)}</Text>
                </View>
              </View>
            }
          />
        </View>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#white"
          onSlidingComplete={currentSliderValue =>
            setSliderValue(currentSliderValue)
          }
        />
      </>
    );
  };

  const styles = StyleSheet.create({
    circularProgressContainer: {
      borderWidth: 2,
      height: 100,
      width: 100,
      borderStyle: 'dashed',
      borderRadius: 250 / 2,
      padding: 110,
    },
    innerCircleOne: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    innerCircleTwo: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6495ED',
    },
  });

  export default CircularSlider
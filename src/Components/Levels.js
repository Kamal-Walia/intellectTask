import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const Levels = ({levels, setLevel, currentLevel}) => {
  return (
    <View style={styles.levelsContainer}>
      {levels.map((item, index) => {
        return (
          <TouchableOpacity
            style={[
              styles.level,
              {backgroundColor: index <= currentLevel ? 'grey' : 'white'},
            ]}
            onPress={() => setLevel(index)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    levelsContainer: {
      transform: [{rotateX: '180deg'}],
    },
    level: {
      padding: 20,
      paddingHorizontal: 50,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
    },
  });

export default Levels
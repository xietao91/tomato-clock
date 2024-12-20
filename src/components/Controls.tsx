import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface ControlsProps {
  isActive: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isActive,
  onStart,
  onPause,
  onReset,
}) => {
  return (
    <View style={styles.container}>
      {!isActive ? (
        <Button mode="contained" onPress={onStart} style={styles.button}>
          开始
        </Button>
      ) : (
        <Button mode="contained" onPress={onPause} style={styles.button}>
          暂停
        </Button>
      )}
      <Button mode="outlined" onPress={onReset} style={styles.button}>
        重置
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default Controls; 
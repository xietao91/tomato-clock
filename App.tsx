import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Timer from './src/components/Timer';
import Controls from './src/components/Controls';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25分钟的秒数

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Timer time={time} />
        <Controls 
          isActive={isActive}
          onStart={() => setIsActive(true)}
          onPause={() => setIsActive(false)}
          onReset={() => {
            setIsActive(false);
            setTime(25 * 60);
          }}
        />
      </View>
    </PaperProvider>
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
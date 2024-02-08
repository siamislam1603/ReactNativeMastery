import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    // for notch
    <SafeAreaView>
      <View>
        <Text>Clicked: {counter}</Text>
        <Button
          onPress={() => {
            setCounter(counter + 1);
          }}
          title="Press me"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

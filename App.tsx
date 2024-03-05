import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    // for notch
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

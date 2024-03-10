import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    // for notch
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

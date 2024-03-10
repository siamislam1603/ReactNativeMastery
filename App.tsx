import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ActionCard from './components/ActionCard';
import ContactsList from './components/ContactsList';
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
        <ContactsList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

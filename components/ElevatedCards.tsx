import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Elevated Cards</Text>
      <ScrollView horizontal>
        {[...new Array(10)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.card,
              (i + 1) % 2 === 0 ? styles.cardEven : styles.cardOdd,
            ]}>
            <Text>{i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    marginVertical: 8,
  },
  cardOdd: {
    backgroundColor: 'tomato',
  },
  cardEven: {
    backgroundColor: 'purple',
  },
});

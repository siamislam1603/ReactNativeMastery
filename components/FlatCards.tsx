import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.textHeading}>FlatCards</Text>
      <View style={styles.container}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    padding: 8,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOdd: {
    backgroundColor: 'tomato',
  },
  cardEven: {
    backgroundColor: 'purple',
  },
});
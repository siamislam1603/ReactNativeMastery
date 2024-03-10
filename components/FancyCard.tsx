import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Basic Styling</Text>
          <Text style={styles.cardLabel}>#fancy card, #flex, #image</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            laudantium sed, soluta rem pariatur illo tenetur dolores ipsam
            fugiat, reiciendis molestias quam esse vero? Similique blanditiis
            culpa hic velit perspiciatis.
          </Text>
          <View style={styles.cardFooter}>
            <Button title="Details" color="#2c3e50" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 8,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  cardElevated: {
    elevation: 3,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#7f8c8d',
    fontSize: 16,
    marginBottom: 8,
  },
  cardDescription: {
    color: 'black',
    fontSize: 14,
  },
  cardFooter: {
    color: 'black',
    alignSelf: 'flex-end',
    paddingTop: 16,
  },
});

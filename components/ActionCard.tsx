import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ActionCard(): JSX.Element {
  const handleActionClick = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.cardHeader}>What's new in Javascript!</Text>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nulla accusantium corrupti distinctio obcaecati. Qui rem, molestias
            quos mollitia, aperiam tenetur placeat officia quas error labore
            maxime fugit praesentium atque.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              handleActionClick(
                'https://blog.logrocket.com/react-native-component-libraries/',
              )
            }
            style={styles.cardAction}>
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleActionClick('https://github.com/siamislam1603')
            }
            style={[styles.cardAction, styles.followButton]}>
            <Text>Follow Me</Text>
          </TouchableOpacity>
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
    backgroundColor: '#fdcb6e',
    borderRadius: 6,
  },
  cardElevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#bdbdbd',
    shadowOpacity: 0.3,
  },
  cardHeader: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  cardBody: {
    padding: 16,
  },
  cardImage: {
    height: 150,
  },
  cardDescription: {
    color: 'black',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardAction: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  followButton: {
    backgroundColor: '#0984e3',
  },
});

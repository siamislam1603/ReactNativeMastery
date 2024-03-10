import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const contact = {
  name: 'User',
  status:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quaerat. Quaerat dolore qui modi exercitationem vitae voluptatem maxime, commodi similique laboriosam? Quam, molestias fugit odit veniam sunt perferendis pariatur aliquid?',
  image:
    'https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg',
};

export default function ContactsList(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>ContactsList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {[...new Array(5)].map((_, i) => (
          <View key={`user-${i + 1}`} style={styles.card}>
            <Image source={{uri: contact.image}} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.userName}>
                {contact.name + ' ' + (i + 1)}
              </Text>
              <Text style={styles.userStatus} numberOfLines={2}>
                {contact.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    marginBottom: 16,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  cardBody: {
    paddingHorizontal: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  userStatus: {
    color: '#eee',
    fontSize: 14,
  },
});

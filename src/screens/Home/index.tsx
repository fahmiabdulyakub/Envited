import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {GradientText} from 'components';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.titleDark}>Imagine if</Text>
        <GradientText style={[styles.title, styles.bottom]}>
          Snapchat
        </GradientText>
        <Text style={[styles.titleDark, styles.bottom20]}>had events.</Text>
        <Text style={styles.description}>
          Easily host and share events with your friends across any social
          media.
        </Text>
      </View>
    </View>
  );
};

export default Home;

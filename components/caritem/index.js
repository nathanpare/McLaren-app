import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/p1.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>McLaren P1</Text>
        <Text style={styles.subtitle}>starting at $1,150,000</Text>
      </View>
    </View>
  )
}

export default CarItem;
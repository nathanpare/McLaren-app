import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import StyledButton from '../StyledButton';
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

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed")
          }}
        />

        <StyledButton
          type="Secondary"
          content={"Details"}
          onPress={() => {
            console.warn("Details was pressed")
          }}
        />

      </View>
    </View>
  )
}

export default CarItem;
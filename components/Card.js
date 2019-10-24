import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Card = ({id, c, width, height }) => {
  return (
    <View>
      <Image
        style={{
          minWidth: width,
          minHeight: height,
          opacity: c.id === id ? 1 : 0.7,
          transform: [{ scale: c.id === id ? 1 : 0.7}],
        }}
        source={{ uri: c.image }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});

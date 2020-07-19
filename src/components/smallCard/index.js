import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import { smallCard } from './styles';

const SmallCard = () => {
  return (
        <View style={styles.container}>
          <Text>Card</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container:{
    ...smallCard
  }
});

export default SmallCard;
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from './style';
import SmallCard from '../../components/smallCard';

const Home = () => {
  const state = useSelector(state => state.GetTopHundredReducer.place);
  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <SmallCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Container,
  },
});
export default Home;

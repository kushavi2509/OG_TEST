import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import { Container } from './style';
import SmallCard from '../../components/smallCard';

const Home = () => {
  return (
        <View style={styles.container}>
            <Text>Home22</Text>
            <SmallCard/>
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        ...Container
    }
});
export default Home;

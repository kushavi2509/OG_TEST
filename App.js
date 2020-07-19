import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Colors from './src/config/Colors';
import Home from './src/screen/home';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourite from './src/screen/favourite';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.cover}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.LightBlue,
  },
  motherContainer: {
    backgroundColor: Colors.Primary,
  },
});

export default App;

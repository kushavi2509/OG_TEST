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

const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.cover}>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={(styles.cover, styles.scrollView)}> */}
        <View style={[styles.cover, styles.motherContainer]}>
          <Home />
        </View>
        {/* </ScrollView> */}
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

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {getHundred} from './../../redux/action/GetTopHundredAction';
import {smallCard, cover} from './styles';

const SmallCard = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.GetTopHundredReducer.place);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(getHundred(state))}>
        <View>
          <Text>Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...smallCard,
  },
  cover: {
    ...cover,
  },
});

export default SmallCard;

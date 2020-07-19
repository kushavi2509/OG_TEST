import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import Colors from '../../config/Colors';

export const SearchHeader = ({value, searchHandle}) => {
  const onChangeText = e => {
    searchHandle(e);
  };

  return (
    <>
      <View style={styles.HeaderView}>
        <View style={styles.HeaderSearchView}>
          <View style={{...styles.HeaderSearchBackground}} />
          <TextInput
            style={{...styles.HeaderSearch}}
            value={value}
            onChangeText={onChangeText}
            placeholder={'Search'}
            placeholderTextColor="#8e8e92"
            value={value}
          />
          <TouchableOpacity
            onPress={() => onChangeText('')}
            style={{...styles.HeaderCancelIcon}}>
            <Text style={{fontSize: 18}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    backgroundColor: Colors.Black,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderSearchView: {
    backgroundColor: Colors.Black,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 45,
    padding: 10,
    flexGrow: 1,
  },
  HeaderSearchIcon: {
    // height:25,
    // width:25,
    // position: 'absolute',
    // left: 25,
  },
  HeaderCancelIcon: {
    position: 'absolute',
    right: 20,
  },
  HeaderSearch: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 17,
    padding: 10,
    paddingLeft: 10,
    borderRadius: 6,
    flexGrow: 1,
  },
  HeaderSearchBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 10,
    borderRadius: 7,
    backgroundColor: '#262626',
  },
  HeaderRightIconView: {
    width: 20,
    display: 'flex',
    marginRight: 20,
    marginLeft: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchHeader;

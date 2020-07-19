import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../config/Colors';
import {handleFavourite} from './../../redux/action/GetTopHundredAction';
const fav = './../../assets/icon/fav.png';
const SmallCard = ({detail, index, favFunc}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => (favFunc ? dispatch(handleFavourite(index)) : null)}>
      <View
        style={[
          styles.container,
          {backgroundColor: detail.isFav ? Colors.Secondary : Colors.Primary},
        ]}>
        <View style={styles.imageViewContainer}>
          <Image
            style={styles.imageView}
            source={{uri: detail['im:image'][0].label}}></Image>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailTitle} numberOfLines={1}>
            {detail.title.label}
          </Text>
          <Text numberOfLines={1}>{detail['im:artist'].label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: 55,
    width: 55,
  },
  imageViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  detail: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
  },
  detailTitle: {
    fontSize: 18,
  },
});

export default SmallCard;

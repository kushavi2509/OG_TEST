import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {handleFavourite} from './../../redux/action/GetTopHundredAction';
import {
  container,
  containerFav,
  imageView,
  imageViewFav,
  favIcon,
  imageViewContainer,
  imageViewContainerFav,
  detail,
  detailFav,
  detailTitle,
  detailTitleFav,
} from './style';
const fav = './../../assets/icon/fav.png';
const SmallCard = ({type, detail}) => {
  let selector = type ? 'Fav' : '';
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => (dispatch(handleFavourite(detail.id.attributes["im:id"])))}>
      <View style={styles[`container${selector}`]}>
        <View style={styles[`imageViewContainer${selector}`]}>
          <Image
            style={styles[`imageView${selector}`]}
            source={{uri: detail['im:image'][0].label}}></Image>
          {detail.isFav ? (
            type ? null : (
              <Image
                style={styles[`favIcon${selector}`]}
                source={require('../../assets/icon/fav.png')}
              />
            )
          ) : null}
        </View>
        {type ? null : (
          <View style={styles[`detail${selector}`]}>
            <Text style={styles[`detailTitle${selector}`]} numberOfLines={1}>
              {detail.title.label}
            </Text>
            <Text numberOfLines={1}>{detail['im:artist'].label}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  containerFav: {
    ...containerFav,
  },
  imageView: {
    ...imageView,
  },
  imageViewFav: {
    ...imageViewFav,
  },
  favIcon: {
    ...favIcon,
  },
  imageViewContainer: {
    ...imageViewContainer,
  },
  imageViewContainerFav: {
    ...imageViewContainerFav,
  },
  detail: {
    ...detail,
  },
  detailFav: {
    ...detailFav,
  },
  detailTitle: {
    ...detailTitle,
  },
  detailTitleFav: {
    ...detailTitleFav,
  },
});

export default SmallCard;

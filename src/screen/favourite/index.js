import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, KeyboardAvoidingView} from 'react-native';
import SmallCard from '../../components/smallCard/SmallCard';
import {getHundred} from '../../redux/action/GetTopHundredAction';
import Search from '../../components/Search/Search';
import Colors from '../../config/Colors';

const Favourite = () => {
  const topSong = useSelector(state =>
    state.GetTopHundredReducer.topSong.filter(item => item.isFav),
  );
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const search = key => {
    setValue(key);
    let list = topSong.filter(item =>
      item.title.label.toLowerCase().includes(key.toLowerCase()),
    );
    setSearchList(list);
  };
  useEffect(() => {
    dispatch(getHundred());
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Search value={value} searchHandle={key => search(key)} />
      <View style={styles.container}>
        <FlatList
          data={value !== '' ? searchList : topSong}
          style={{flexDirection: 'row'}}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SmallCard
              type={true}
              detail={item}
              index={index}
              favFunc={value !== '' ? false : true}
            />
          )}
          keyExtractor={item => item.id.attributes['im:id']}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Grey,
    justifyContent:"space-around",
    alignContent:"space-around"
  },
});
export default React.memo(Favourite);

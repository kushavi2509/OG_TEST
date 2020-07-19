import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {Container} from './style';
import SmallCard from '../../components/smallCard/SmallCard';
import {getHundred} from '../../redux/action/GetTopHundredAction';
import Search from '../../components/Search/Search';

const Home = () => {
  const topSong = useSelector(state => state.GetTopHundredReducer.topSong);
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
          renderItem={({item, index}) => (
            <SmallCard
              detail={item}
              index={index}
              favFunc={value !== '' ? false : true}
            />
          )}
          keyExtractor={({item, index}) => index}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Container,
  },
});
export default React.memo(Home);

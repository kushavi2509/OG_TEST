import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, KeyboardAvoidingView} from 'react-native';
import SmallCard from '../../components/smallCard/SmallCard';
import {getHundred} from '../../redux/action/GetTopHundredAction';
import Search from '../../components/Search/Search';
import Colors from '../../config/Colors';
import CardLoader from '../../components/Loader/CardLoader';

const Home = ({navigation}) => {
  const topSong = useSelector(state => state.GetTopHundredReducer.topSong);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [Loader, SetLoader] = useState(true);
  const search = key => {
    setValue(key);
    let list = topSong.filter(item =>
      item.title.label.toLowerCase().includes(key.toLowerCase()),
    );
    setSearchList(list);
  };
  useEffect(() => {
    if (topSong.length <= 0) {
      dispatch(getHundred());
    }
    setTimeout(() => {
      SetLoader(false);
    }, 2000);
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Search value={value} searchHandle={key => search(key)} />
      <View style={styles.container}>
        {Loader ? (
          <CardLoader type="home" count={2} />
        ) : (
          <FlatList
            data={value !== '' ? searchList : topSong}
            renderItem={({item, index}) => (
              <SmallCard
                detail={item}
                index={index}
                favFunc={value !== '' ? false : true}
              />
            )}
            keyExtractor={item => item.id.attributes['im:id']}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Grey,
  },
});
export default React.memo(Home);

import React, {useEffect} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Colors from '../../config/Colors';

const CardLoader = ({type, count}) => {
  const {width} = Dimensions.get('window');

  let animatedValue = new Animated.Value(0);
  let val1 = Number(`-${width * 0.3}`);
  let val2 = Number(`${width * 0.6}`);

  let translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [val1, val2],
  });

  c1 = 'rgba(9, 32, 63, 0.9)';
  c2 = 'rgba(83, 120, 149, 0.8)';

  let height = 0;
  switch (type) {
    case 'home':
      height = 120;
      break;
    default:
      height = 250;
      break;
  }

  useEffect(() => {
    animate();
  });

  const animate = () => {
    a1 = Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    Animated.loop(a1).start();
  };

  const AnimationComponent = () => {
    return (
      <Animated.View
        style={{
          ...styles.AnimateBlock,
          transform: [{translateX}],
        }}
      />
    );
  };

  const CardLoader = () => {
    return (
        <View style={{ height}}>
            <View style={{...styles.CoverCard}}>
              <AnimationComponent />
            </View>
      </View>
    );
  };

  const keepCount = () => {
    var rows = [];
    for (let i = 0; i < count; i++) {
      rows.push({id: String(i)});
    }
    return rows;
  };

  return (
    <FlatList
      data={keepCount()}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <CardLoader id={item.id} />}
    />
  );
};

const styles = StyleSheet.create({
  AnimateBlock: {
    width: '60%',
    height: '100%',
    backgroundColor: Colors.Primary,
    opacity: .6,
  },
  CoverCard: {
    width: '100%',
    height: '80%',
    overflow:"hidden",
    opacity: 0.4,
    
  },
});

export default CardLoader;

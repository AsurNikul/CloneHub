import {StyleSheet, Text, View} from 'react-native';
import React, {createRef, useEffect, useRef} from 'react';
import {colors, commonSty} from '../../../theme';
import Header from '../../../components/Header';
import {Images} from '../../../constants';
import TouchableImg from '../../../components/TouchImg';
import {AppsSheet} from '../../../components/All';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Overlay from './Overlay';
import Drawer from './Drawer';
import {useNavigation} from '@react-navigation/native';
import {GetDeviceToken} from '../../../utils/Func';
import {useDispatch, useSelector} from 'react-redux';
import {saveToken} from '../../../redux/MainSlice';
import {FlashList} from '@shopify/flash-list';
import {MiniApp} from '../../../components/Sheets/AppsSheet';
import {rootReducerType} from '../../../redux/store';
import {WIDTH} from '../../../theme/commSty';
import {ActionSheetRef} from 'react-native-actions-sheet';
import SCREENS from '../../../navigators/route';

type Props = {};

const Home = (props: Props) => {
  const sheetRef = useRef<ActionSheetRef>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const AppData = useSelector((state: rootReducerType) => state.main.apps);

  useEffect(() => {
    global.navigation = navigation;
    GetDeviceToken().then(res => {
      dispatch(saveToken(res));
    });
  }, []);

  const active = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return withTiming(active.value ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -40],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        {perspective: 1000},
        {
          scale: active.value ? withTiming(0.8) : withTiming(1),
        },
        {
          translateX: active.value ? withTiming(240) : withTiming(0),
        },
        {
          rotateY: `${rotateY}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(20) : withTiming(0),
    };
  }, []);

  const handleRight = () => {
    console.log('handleRight');
  };
  const handleLeft = () => {
    active.value = true;
  };

  return (
    <>
      <Drawer />
      <Animated.View style={[commonSty.main, animatedStyle]}>
        <Header
          title="Home"
          rightImg={Images.edit}
          onRightPress={handleRight}
          leftImg={Images.drawer}
          active={active}
          onLeftPress={handleLeft}
        />
        <View
          style={[commonSty.flashContainer, commonSty.ml15, commonSty.mt15]}>
          <FlashList
            data={AppData}
            estimatedItemSize={100}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <MiniApp
                  item={item}
                  onPress={() => {
                    global.navigation.navigate(SCREENS.WEBAPPS, {item});
                  }}
                />
              );
            }}
          />
        </View>
        <AppsSheet ref={sheetRef} />
        <TouchableImg
          onPress={() => sheetRef.current.show()}
          ImgSource={Images.plus}
          size={55}
          style={styles.plus}
        />
        <Overlay active={active} />
      </Animated.View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  plus: {
    position: 'absolute',
    bottom: '7%',
    right: '10%',
  },
});

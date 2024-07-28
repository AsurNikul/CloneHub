import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, memo} from 'react';
import Typography from '../Typo';

import styles from './styles';
import {colors, commonSty} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Images} from '../../constants';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface headerProp {
  mainContainer?: ViewStyle;
  leftSty?: ViewStyle;
  onLeftPress?: () => void;
  leftImgSrc?: ImageSourcePropType;
  rightImgSrc?: ImageSourcePropType;
  title?: string;
  txtSty?: TextStyle;
  imgSty?: ImageStyle;
  left?: boolean;
  tintColor?: string;
  renderLeft?: ReactNode;
  bgClr?: string;
  leftImg?: ImageSourcePropType;
  rightImg?: ImageSourcePropType;
  onRightPress?: () => void;
  active?: any;
}

const Header: React.FC<headerProp> = ({
  mainContainer,
  leftSty,
  onLeftPress,
  rightImgSrc,
  leftImgSrc,
  txtSty,
  imgSty,
  title,
  left,
  tintColor,
  renderLeft,
  bgClr,
  rightImg,
  onRightPress,
  leftImg,
  active,
}) => {
  // const navigation = useNavigation();
  const handleLeft = () => {
    global.navigation.goBack();
  };
  //  navigation.goBack();
  const animStyle = useAnimatedStyle(() => {
    return {
      borderTopLeftRadius: active?.value ? withTiming(20) : withTiming(0),
      borderTopRightRadius: active?.value ? withTiming(20) : withTiming(0),
    };
  });
  const inset = useSafeAreaInsets();
  return (
    <>
      <Animated.View
        style={[
          styles.mainContainer,
          mainContainer,
          {
            paddingTop: inset.top + moderateScale(2),
            backgroundColor: bgClr ? bgClr : colors.primary,
          },
          animStyle,
        ]}>
        <TouchableOpacity
          style={[styles.smallContainer, leftSty]}
          onPress={onLeftPress || handleLeft}
          hitSlop={20}>
          <Image
            source={leftImg ? leftImg : Images.back}
            style={[styles.img, imgSty]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.bigContainer}>
          <Typography
            title={title}
            txtStyle={[styles.txt, txtSty ? txtSty : {}]}
          />
        </View>
        {!!renderLeft && renderLeft}
        {!renderLeft && !!rightImg && (
          <TouchableOpacity
            style={[styles.smallContainer]}
            activeOpacity={0.6}
            onPress={onRightPress}>
            <Image
              resizeMode="contain"
              source={rightImg}
              style={[styles.img]}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
      <View style={[commonSty.lightShadow, commonSty.borderBottom]} />
    </>
  );
};

export default memo(Header);

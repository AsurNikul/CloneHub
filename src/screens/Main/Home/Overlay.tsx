import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {colors} from '../../../theme';
import Drawer from './Drawer';

type Props = {
  active: any;
};

const Overlay = (props: Props) => {
  const {active} = props;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      display: active.value ? 'flex' : 'none',
    };
  });
  const handleMainPress = () => {
    active.value = false;
  };
  return (
    <Animated.View style={[styles.main, animatedStyle]}>
      <Pressable style={[styles.main]} onPress={handleMainPress} />
    </Animated.View>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
  },
});

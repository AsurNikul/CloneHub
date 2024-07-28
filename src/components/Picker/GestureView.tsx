import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

type Props = {
  // translateY: Animated.Value<number>;
  translateY: any;
};

const GestureView = (props: Props) => {
  return (
    <View>
      <Text>GestureView</Text>
    </View>
  );
};

export default GestureView;

const styles = StyleSheet.create({});

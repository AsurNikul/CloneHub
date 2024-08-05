import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonSty} from '../../../theme';
import {WebView} from 'react-native-webview';
import {RouteProp, useRoute} from '@react-navigation/native';
import flex from '../../../theme/flex';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {};
type routePrp = {
  params: {
    item: any;
  };
};

const WebApps = (props: Props) => {
  const route = useRoute<RouteProp<routePrp>>().params;
  const inset = useSafeAreaInsets();
  console.log('🚀 ~ WebApps ~ route:', route.item?.url);

  return (
    <View style={[commonSty.flex]}>
      <WebView
        style={[commonSty.flex, {marginTop: inset.top}]}
        originWhitelist={['*']}
        source={{uri: route?.item?.url}}
        scalesPageToFit={true}
      />
    </View>
  );
};

export default WebApps;

const styles = StyleSheet.create({});

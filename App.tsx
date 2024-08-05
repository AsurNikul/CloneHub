import 'react-native-gesture-handler';
import {LogBox, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {colors, commonSty} from './src/theme';
import {Provider} from 'react-redux';
import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/screens/Main/Home';
import MainStack from './src/navigators/MainStack';
import {NotifyFunc} from './src/utils/Func';

const App = () => {
  useEffect(() => {
    NotifyFunc();
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <SafeAreaProvider style={[commonSty.flex]}>
          <MainStack />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

import messaging, {firebase} from '@react-native-firebase/messaging';
import {Alert, Platform} from 'react-native';
import InAppReview from 'react-native-in-app-review';

import notifee, {AndroidImportance} from '@notifee/react-native';
// import Geolocation from 'react-native-geolocation-service';

// import ImageCropPicker from 'react-native-image-crop-picker';
import {Linking} from 'react-native';
import store from '../redux/store';

// Check App Platform
const isIOS: boolean = Platform.OS === 'ios';

// Show Popup Alert
const showPopupWithOk = (
  title: string | undefined,
  message: string | undefined,
  okClicked?: () => void,
): void => {
  Alert.alert(!!title ? title : 'health_e', !!message ? message : '', [
    {text: 'OK', onPress: () => okClicked && okClicked()},
  ]);
};

// Show Popup with ok and cancel
const showPopupWithOkAndCancel = (
  title: string | undefined,
  message: string | undefined,
  okClicked?: () => void,
  cancelClicked?: () => void,
): void => {
  Alert.alert(!!title ? title : 'health_e', !!message ? message : '', [
    {
      text: 'Cancel',
      onPress: () => cancelClicked && cancelClicked(),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

const showReviewPopup = () => {
  let res = InAppReview.isAvailable();
  if (res) {
    InAppReview.RequestInAppReview().then(res => {
      console.log('==================================>');
      console.log('Review Popup opened => ', res);
      console.log('==================================>');
    });
  } else {
    console.log('=========================>');
    console.log('No Review store available');
    console.log('=========================>');
  }
};

const showPopupWithExit = (
  message: string | undefined,
  okClicked?: () => void,
): void => {
  Alert.alert('health_e', !!message ? message : '', [
    {
      text: 'OK',
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

export const GetDeviceToken = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const token = await firebase.messaging().getToken();
    console.log('🚀 ~ GetDeviceToken ~ token:', token);

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('token os enable for ios', token);
    }
    return token;
  } catch (error) {
    console.log('🚀 ~ file: func.ts:82 ~ GetDeviceToken ~ error:', error);
  }
};

// export const handleCam = async () => {
//   try {
//     await ImageCropPicker.openCamera({
//       mediaType: 'photo',
//       showCropGuidelines: true,
//       showCropFrame: true,
//     })
//       .then((image: any) => {
//         const res = image;
//         return res;
//       })
//       .catch((err: any) => {
//         if (err == 'Error: User did not grant camera permission.') {
//           Linking.openSettings();
//         }
//       });
//   } catch (error) {
//     console.log(error, 'error from try catch');
//   }
// };

// export const handlePhoto = async () => {
//   try {
//     await ImageCropPicker.openPicker({
//       mediaType: 'photo',
//       showCropGuidelines: true,
//       showCropFrame: true,
//       multiple: false,
//     })
//       .then((image: any) => {
//         const res = image;
//         return res;
//       })
//       .catch(err => {
//         if (err == 'Error: User did not grant library permission.') {
//           Linking.openSettings();
//         }
//       });
//   } catch (error) {
//     console.log(error, 'catche error');
//   }
// };

export const PermissionFromSetting = (err: any) => {
  if (err == 'Error: User did not grant camera permission.') {
    Linking.openSettings();
  }
};

export const NotifyFunc = async () => {
  const DisplayNotification = async (notification: any) => {
    try {
      await notifee.createChannel({
        id: 'clone_app',
        name: 'Clone_app',
      });

      await notifee.displayNotification({
        android: {
          channelId: 'default_app',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
        },
        ios: {},
        title: notification?.body,
        body: notification?.title,
      });
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  };
  messaging().onMessage(async remoteMessage => {
    console.log(
      '🚀 ~ file: func.ts:220 ~ notifi1 ~ when msg comes:',
      remoteMessage?.data,
    );
    await DisplayNotification(remoteMessage.notification);
  });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log('🚀 ~ messaging ~ remoteMessage:', remoteMessage);
    await DisplayNotification(remoteMessage.notification);
  });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      '🚀 ~ file: func.ts:225 ~ NotifyFunc ~ remoteMessage:',
      remoteMessage,
    );
    await DisplayNotification(remoteMessage.notification);
  });
};

export {showReviewPopup};

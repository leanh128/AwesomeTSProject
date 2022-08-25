import React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import {appConst} from './constants/Constants';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        onMessage={event => {
          console.log(
            'leon',
            'App.tsx [20] saysome: event.nativeEvent.data = ',
            event,
          );
        }}
        onError={e => {
          console.log('leon', 'App.tsx [18] onError: e = ', e);
        }}
        onHttpError={e => {
          console.log('leon', 'App.tsx [19] onHttpError: ', e);
        }}
        originWhitelist={['*']}
        androidHardwareAccelerationDisabled={true}
        allowsFullscreenVideo={true}
        cacheEnabled={false}
        scrollEnabled={false}
        mediaPlaybackRequiresUserAction={false}
        source={{
          // uri: 'https://survey.breeze.com.sg/survey.html',
          html: appConst.htmlStr,
        }}
      />
    </SafeAreaView>
  );
};

export default App;

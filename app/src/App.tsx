import React from 'react'
import { AppState, Dimensions, SafeAreaView, View } from 'react-native'
import WebView from 'react-native-webview'
import { appConst } from './constants/Constants'

const App = () => {
  const deviceWidth = Dimensions.get('window').width
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ height: (deviceWidth / 424) * 148, flex: 0, marginBottom: 24 }}> */}
      <WebView
        onMessage={event => {
          console.log('leon', 'App.tsx [20] saysome: event.nativeEvent.data = ', event.nativeEvent.data)
        }}
        onError={e => {
          console.log('leon', 'App.tsx [18] onError: e = ', e)
        }}
        onHttpError={e => {
          console.log('leon', 'App.tsx [19] onHttpError: ', e)
        }}
        originWhitelist={['*']}
        androidHardwareAccelerationDisabled={true}
        allowsFullscreenVideo={true}
        injectedJavaScript={appConst.jsScript}
        // injectedJavaScriptForMainFrameOnly={false}
        cacheEnabled={false}
        scrollEnabled={false}
        mediaPlaybackRequiresUserAction={false}
        source={{
          // uri: 'https://survey.breeze.com.sg/survey.html',
          html: appConst.htmlStr,
        }}
      />
      {/* </View> */}
    </SafeAreaView>
  )
}

export default App

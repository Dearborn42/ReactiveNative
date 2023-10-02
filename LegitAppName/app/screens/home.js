import { WebView } from 'react-native-webview';
import { View } from 'react-native';
const test = require("../../html/test.html");


export default function Home() {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={test}
      />
    </View>
  );
}
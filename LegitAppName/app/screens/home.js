import { WebView } from 'react-native-webview';
import { View } from 'react-native';
const home = require("../../html/home.html");


export default function Home() {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={home}
      />
    </View>
  );
}
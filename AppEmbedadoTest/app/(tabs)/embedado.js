import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function EmbedadoScreen() {
  return (
    <WebView
      source={{ uri: 'https://nestle-micro-uppo.vercel.app/?usuario=Gabriel' }}
      style={styles.webview}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1
  }
});

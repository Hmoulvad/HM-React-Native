import * as React from "react";
import WebView from "react-native-webview";
import {
    ViewStyle,
    StyleSheet,
    Alert,
    NativeEventEmitter,
    NativeSyntheticEvent
} from "react-native";
import { AppContext } from "../../context/appContext";
import { WebViewEvent } from "react-native-webview/lib/WebViewTypes";

interface IWebviewComponentProps {}

interface IStylesWebView {
    webView: ViewStyle;
}

const WebviewComponent: React.FC<IWebviewComponentProps> = () => {
    const webViewRef = React.useRef<any>(null);
    const { currentUrl } = React.useContext(AppContext);
    const prefixUrl = "http://10.158.121.115:3000/";
    const app = "?app=true";

    const sendMessageToWebview = () => {
        webViewRef!.current!.postMessage("");
    };

    return (
        <WebView
            ref={webViewRef}
            style={WebViewStyles.webView}
            onNavigationStateChange={sendMessageToWebview}
            onMessage={event => {
                console.warn(event.nativeEvent.data);
                let msg;
                try {
                    msg = JSON.parse(event.nativeEvent.data);
                } catch (err) {
                    console.warn(err);
                    return;
                }
                console.log(msg);
            }}
            source={{
                uri: prefixUrl + currentUrl + app
            }}
        />
    );
};

export default WebviewComponent;

const WebViewStyles: IStylesWebView = StyleSheet.create({
    webView: {
        zIndex: 0
    }
});

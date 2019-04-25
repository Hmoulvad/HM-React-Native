import * as React from "react";
import WebView from "react-native-webview";
import { ViewStyle, StyleSheet } from "react-native";
import { AppContext } from "../../context/appContext";

interface IWebviewComponentProps {}

interface IStylesWebView {
    webView: ViewStyle;
}

const WebviewComponent: React.FC<IWebviewComponentProps> = () => {
    const webViewRef = React.useRef<any>(null);
    const { currentUrl } = React.useContext(AppContext);
    const prefixUrl = "http://10.158.121.115:3000/";
    const app = "?app=true";

    const sendMessage = () => {
        webViewRef!.current!.postMessage("hello bro");
    };

    return (
        <WebView
            ref={webViewRef}
            style={WebViewStyles.webView}
            onNavigationStateChange={sendMessage}
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

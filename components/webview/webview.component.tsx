import * as React from "react";
import WebView from "react-native-webview";
import { ViewStyle, StyleSheet, Platform, Alert, View } from "react-native";
import { AppContext } from "../../context/appContext";

interface IWebviewComponentProps {}

interface IStylesWebView {
    webView: ViewStyle;
}

const WebviewComponent: React.FC<IWebviewComponentProps> = () => {
    const webViewRef = React.useRef<any>(null);
    const { currentUrl, token } = React.useContext(AppContext);
    const prefixUrl = "http://10.158.121.115:3000";
    const app = "?app=true";
    const tokenParam = token ? `&token=${token}` : "";
    const route = prefixUrl + currentUrl + app + tokenParam;

    return (
        <WebView
            ref={webViewRef}
            style={WebViewStyles.webView}
            useWebKit={true}
            source={{
                uri: route
            }}
        />
    );
};

export default WebviewComponent;

const WebViewStyles: IStylesWebView = StyleSheet.create({
    webView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

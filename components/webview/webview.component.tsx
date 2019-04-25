import * as React from "react";
import WebView from "react-native-webview";
import { ViewStyle, StyleSheet } from "react-native";
import { AppContext } from "../../context/appContext";

interface IWebviewComponentProps {}

interface IStylesWebView {
    webView: ViewStyle;
}

const WebviewComponent: React.FC<IWebviewComponentProps> = () => {
    const { currentUrl } = React.useContext(AppContext);
    const prefixUrl = "http://10.158.121.115:3000/";
    const app = "?app=true";
    return (
        <WebView
            style={WebViewStyles.webView}
            source={{
                uri: prefixUrl + currentUrl + app
            }}
        />
    );
};

export default WebviewComponent;

const WebViewStyles: IStylesWebView = StyleSheet.create({
    webView: {
        zIndex: 5
    }
});

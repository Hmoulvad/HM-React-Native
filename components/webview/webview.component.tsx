import * as React from "react";
import WebView from "react-native-webview";
import { ViewStyle, StyleSheet } from "react-native";

interface IWebviewComponentProps {
    userIsAuthenticated: boolean;
    url: string;
}

interface IWebviewComponentState {}

interface IStylesWebView {
    webView: ViewStyle;
}

class WebviewComponent extends React.PureComponent<
    IWebviewComponentProps,
    IWebviewComponentState
> {
    public render() {
        const { userIsAuthenticated, url } = this.props;
        const prefixUrl = "http://10.158.121.115:3000/";
        const app = "?app=true";
        return (
            <WebView
                style={WebViewStyles.webView}
                source={{
                    uri: prefixUrl + url + app
                }}
            />
        );
    }
}

export default WebviewComponent;

const WebViewStyles: IStylesWebView = StyleSheet.create({
    webView: {
        zIndex: 5
    }
});

import * as React from "react";
import WebView from "react-native-webview";

interface IWebviewComponentProps {}

interface IWebviewComponentState {}

class WebviewComponent extends React.PureComponent<
    IWebviewComponentProps,
    IWebviewComponentState
> {
    public render() {
        return <WebView source={{ uri: "http://192.168.1.10:3000/" }} />;
    }
}

export default WebviewComponent;

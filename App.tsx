import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Template from "./components/template";
import WebviewComponent from "./components/webview";
import { WebView } from "react-native-webview";

interface Props {}
class App extends Component<Props> {
    render() {
        return <WebView source={{ uri: "http://192.168.1.10:3000/" }} />;
    }
}

export default App;

const styles = StyleSheet.create({
    container: {}
});

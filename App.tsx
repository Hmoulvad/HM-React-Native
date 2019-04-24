import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";
import Template from "./components/template";
import WebviewComponent from "./components/webview";
import { WebView } from "react-native-webview";
import Navigation from "./components/navigation";

interface Props {}
class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Navigation />
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginTop: 20
            }
        })
    }
});

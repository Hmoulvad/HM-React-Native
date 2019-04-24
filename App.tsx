import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Platform,
    ImageBackground,
    ViewStyle,
    ImageStyle
} from "react-native";
import Template from "./components/template";
import WebviewComponent from "./components/webview";
import { WebView } from "react-native-webview";
import Navigation from "./components/navigation";

interface Props {}

interface IStylesApp {
    container: ViewStyle;
    background: ImageStyle;
}
class App extends Component<Props> {
    render() {
        return (
            <ImageBackground
                source={require("./assets/images/background.png")}
                style={appStyles.background}
            >
                <View style={appStyles.container}>
                    <Navigation />
                </View>
            </ImageBackground>
        );
    }
}

export default App;
const appStyles: IStylesApp = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        ...Platform.select({
            ios: {
                marginTop: 20
            }
        })
    },
    background: {
        height: "100%",
        width: "100%"
    }
});

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
import { IAppContext, AppContext } from "./context/appContext";

interface IAppProps {}

interface IStylesApp {
    container: ViewStyle;
    background: ImageStyle;
}
class App extends Component<IAppProps, IAppContext> {
    state: IAppContext = {
        userIsAuthenticated: false,
        isMenuOpen: false,
        setMenu: (open: boolean) => {
            this.setState({ isMenuOpen: open });
        },
        setAuth: (auth: boolean) => {
            this.setState({ userIsAuthenticated: auth });
        }
    };
    render() {
        const { isMenuOpen, setMenu } = this.state;
        return (
            <AppContext.Provider value={this.state}>
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    style={appStyles.background}
                >
                    <View style={appStyles.container}>
                        <Navigation isMenuOpen={isMenuOpen} setMenu={setMenu} />
                    </View>
                </ImageBackground>
            </AppContext.Provider>
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

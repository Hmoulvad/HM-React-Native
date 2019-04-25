import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Platform,
    ImageBackground,
    ViewStyle,
    ImageStyle
} from "react-native";
import WebviewComponent from "./components/webview";
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
        currentUrl: "*",
        setCurrentUrl: (url: string) => {
            this.setState({ currentUrl: url });
        },
        setMenu: (open: boolean) => {
            this.setState({ isMenuOpen: open });
        },
        setAuth: (auth: boolean) => {
            this.setState({ userIsAuthenticated: auth });
        }
    };
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    style={appStyles.background}
                >
                    <View style={appStyles.container}>
                        <Navigation />
                    </View>
                    <WebviewComponent />
                </ImageBackground>
            </AppContext.Provider>
        );
    }
}

export default App;
const appStyles: IStylesApp = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 10,
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

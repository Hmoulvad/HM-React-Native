import React, { Component } from "react";
import {
    StyleSheet,
    Platform,
    ImageBackground,
    ImageStyle
} from "react-native";
import WebviewComponent from "./components/webview";
import NavIOS from "./components/navigation/navigation-IOS";
import NavAndroid from "./components/navigation/navigation-android";
import { IAppContext, AppContext } from "./context/appContext";
import { ApolloProvider } from "react-apollo";
import Client from "./apolloClient";
import Login from "./components/login";

interface IAppProps {}

interface IStylesApp {
    background: ImageStyle;
}
class App extends Component<IAppProps, IAppContext> {
    state: IAppContext = {
        isAuth: false,
        isMenuOpen: false,
        currentUrl: "",
        showLogin: false,
        token: "",
        activeLink: "Home",
        setActiveLink: (link: string) => {
            this.setState({ activeLink: link });
        },
        setToken: (token: string) => {
            this.setState({ token });
        },
        setShowLogin: (show: boolean) => {
            this.setState({ showLogin: show });
        },
        setCurrentUrl: (url: string) => {
            this.setState({ currentUrl: url });
        },
        setMenu: (open: boolean) => {
            this.setState({ isMenuOpen: open });
        },
        setAuth: (auth: boolean) => {
            this.setState({ isAuth: auth });
        }
    };
    render() {
        return (
            <ApolloProvider client={Client}>
                <AppContext.Provider value={this.state}>
                    <ImageBackground
                        source={require("./assets/images/background.png")}
                        style={appStyles.background}
                    >
                        {Platform.select({
                            ios: <NavIOS />,
                            android: <NavAndroid />
                        })}
                        {!this.state.showLogin ? (
                            <WebviewComponent />
                        ) : (
                            <Login />
                        )}
                    </ImageBackground>
                </AppContext.Provider>
            </ApolloProvider>
        );
    }
}

export default App;
const appStyles: IStylesApp = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%"
    }
});

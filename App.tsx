import React, { Component } from "react";
import {
    StyleSheet,
    Platform,
    ImageBackground,
    ImageStyle,
    Alert
} from "react-native";
import WebviewComponent from "./components/webview";
import NavIOS from "./components/navigation/navigation-IOS";
import NavAndroid from "./components/navigation/navigation-android";
import { IAppContext, AppContext } from "./context/appContext";
import { ApolloProvider } from "react-apollo";
import Client from "./apolloClient";
import Login from "./components/login";
import { decodeToken } from "./apolloClient/helpers/token";
import { ITokenData } from "./components/login/login.component";

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
        role: undefined,
        token: undefined,
        activeLink: "Home",
        setRole: (role: string) => {
            this.setState({ role });
        },
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

    async componentDidUpdate() {
        if (this.state.token !== undefined && this.state.role === undefined) {
            const role = await decodeToken(this.state.token);
            this.setState({ role: role!.role });
        }
    }

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

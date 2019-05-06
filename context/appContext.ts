import * as React from "react";

export interface IAppContext {
    isAuth: boolean;
    isMenuOpen: boolean;
    currentUrl: string;
    showLogin: boolean;
    token: string;
    activeLink: string;
    setToken: (token: string) => void;
    setActiveLink: (link: string) => void;
    setShowLogin: (show: boolean) => void;
    setCurrentUrl: (url: string) => void;
    setMenu: (open: boolean) => void;
    setAuth: (auth: boolean) => void;
}

export const defaultContext: IAppContext = {
    isAuth: false,
    isMenuOpen: false,
    currentUrl: "",
    token: "",
    showLogin: false,
    activeLink: "Home",
    setActiveLink: (link: string) => {
        defaultContext.activeLink = link;
    },
    setToken: (token: string) => {
        defaultContext.token = token;
    },
    setShowLogin: (show: boolean) => {
        defaultContext.showLogin = show;
    },
    setCurrentUrl: (url: string) => {
        defaultContext.currentUrl = url;
    },
    setMenu: (open: boolean) => {
        defaultContext.isMenuOpen = open;
    },
    setAuth: (auth: boolean) => {
        defaultContext.isAuth = auth;
    }
};

export const AppContext = React.createContext(defaultContext);

import * as React from "react";

export interface IAppContext {
    isAuth: boolean;
    isMenuOpen: boolean;
    currentUrl: string;
    showLogin: boolean;
    token: string | undefined;
    role: string | undefined;
    activeLink: string;
    setRole: (role: string) => void;
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
    role: undefined,
    token: undefined,
    showLogin: false,
    activeLink: "Home",
    setRole: (role: string) => {
        defaultContext.role = role;
    },
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

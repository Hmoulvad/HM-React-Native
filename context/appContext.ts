import * as React from "react";

export interface IAppContext {
    userIsAuthenticated: boolean;
    isMenuOpen: boolean;
    setMenu: (open: boolean) => void;
    setAuth: (auth: boolean) => void;
}

export const defaultContext: IAppContext = {
    userIsAuthenticated: false,
    isMenuOpen: false,
    setMenu: (open: boolean) => {
        defaultContext.isMenuOpen = open;
    },
    setAuth: (auth: boolean) => {
        defaultContext.userIsAuthenticated = auth;
    }
};

export const AppContext = React.createContext(defaultContext);

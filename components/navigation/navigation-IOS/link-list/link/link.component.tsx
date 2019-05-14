import * as React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
    View,
    TouchableHighlight,
    Alert
} from "react-native";
import FontStyle from "../../../../../styles/font";
import { AppContext } from "../../../../../context/appContext";

interface ILinkProps {
    title: string;
    url: string;
    internalLink?: boolean;
}

interface ILinkStyles {
    link: TextStyle;
    linkWrapper: ViewStyle;
}

const Link: React.FC<ILinkProps> = ({ title, url, internalLink = false }) => {
    const {
        setCurrentUrl,
        setShowLogin,
        setMenu,
        setActiveLink,
        activeLink
    } = React.useContext(AppContext);

    const LinkStyles: ILinkStyles = StyleSheet.create({
        link: {
            color: "#fff",
            ...FontStyle.normal,
            height: 24,
            letterSpacing: 1.5
        },
        linkWrapper: {
            ...(activeLink === title && {
                borderBottomWidth: 2,
                borderBottomColor: "#4a90e2"
            }),
            position: "relative",
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10
        }
    });

    const toggleLink = () => {
        if (internalLink) {
            setShowLogin(true);
            setMenu(false);
            setActiveLink(title);
        } else {
            setActiveLink(title);
            setShowLogin(false);
            setCurrentUrl(url);
            setMenu(false);
        }
    };

    return (
        <View style={LinkStyles.linkWrapper}>
            <Text onPress={toggleLink} style={LinkStyles.link}>
                {title}
            </Text>
        </View>
    );
};

export default Link;

import * as React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
    View,
    TouchableHighlight
} from "react-native";
import FontStyle from "../../../../../styles/font";
import { AppContext } from "../../../../../context/appContext";

interface ILinkProps {
    title: string;
}

interface ILinkStyles {
    link: TextStyle;
    linkWrapper: ViewStyle;
}

const LogoutLink: React.FC<ILinkProps> = ({ title }) => {
    const { setAuth, setToken, setCurrentUrl } = React.useContext(AppContext);

    const toggleLogout = () => {
        setToken("");
        setAuth(false);
        setCurrentUrl("");
    };

    return (
        <View style={LinkStyles.linkWrapper}>
            <Text onPress={toggleLogout} style={LinkStyles.link}>
                {title}
            </Text>
        </View>
    );
};

const LinkStyles: ILinkStyles = StyleSheet.create({
    link: {
        color: "#fff",
        ...FontStyle.normal,
        height: 24,
        letterSpacing: 1.5
    },
    linkWrapper: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        position: "relative"
    }
});

export default LogoutLink;

import * as React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
    View,
    TouchableHighlight
} from "react-native";
import FontStyle from "../../../../styles/font";
import { AppContext } from "../../../../context/appContext";

interface ILinkProps {
    title: string;
    url: string;
}

interface ILinkStyles {
    link: TextStyle;
    linkWrapper: ViewStyle;
}

const Link: React.FC<ILinkProps> = ({ title, url }) => {
    const { setCurrentUrl } = React.useContext(AppContext);
    const toggleLink = () => {
        setCurrentUrl(url);
    };

    return (
        <View style={LinkStyles.linkWrapper}>
            <TouchableHighlight onPress={toggleLink}>
                <Text style={LinkStyles.link}>{title + url}</Text>
            </TouchableHighlight>
        </View>
    );
};

const LinkStyles: ILinkStyles = StyleSheet.create({
    link: {
        color: "#fff",
        ...FontStyle.normal,
        height: 24,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        letterSpacing: 1.5,
        borderBottomWidth: 2,
        borderBottomColor: "#feff00"
    },
    linkWrapper: {}
});

export default Link;

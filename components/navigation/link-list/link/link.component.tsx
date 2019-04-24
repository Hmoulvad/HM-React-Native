import * as React from "react";
import { StyleSheet, Text, TextStyle, ViewStyle, View } from "react-native";
import FontStyle from "../../../../styles/font";

interface ILinkProps {
    title: string;
    url: string;
}

interface ILinkState {}

interface ILinkStyles {
    link: TextStyle;
    linkWrapper: ViewStyle;
}

class Link extends React.Component<ILinkProps, ILinkState> {
    render() {
        const { title, url } = this.props;
        return (
            <View style={LinkStyles.linkWrapper}>
                <Text style={LinkStyles.link}>{title + url}</Text>
            </View>
        );
    }
}

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

import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface ILinkProps {
    title: string;
    url: string;
}

interface ILinkState {}

interface ILinkStyles {
    link: TextStyle;
}

class Link extends React.Component<ILinkProps, ILinkState> {
    render() {
        const { title, url } = this.props;
        return <Text style={LinkStyles.link}>{title + url}</Text>;
    }
}

const LinkStyles: ILinkStyles = StyleSheet.create({
    link: {
        color: "#fff"
    }
});

export default Link;

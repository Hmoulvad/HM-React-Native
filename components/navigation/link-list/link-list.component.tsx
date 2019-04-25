import {
    StyleSheet,
    ViewStyle,
    View,
    Text,
    TextStyle,
    TouchableHighlight
} from "react-native";
import * as React from "react";
import Link from "./link";
import FontStyle from "../../../styles/font";

interface IILinkListStyles {
    menu: ViewStyle;
    exit: ViewStyle & TextStyle;
    links: ViewStyle;
}

interface ILinkListProps {
    isMenuOpen: boolean;
    setMenu: (open: boolean) => void;
}

interface ILinkListState {}

class LinkList extends React.Component<ILinkListProps, ILinkListState> {
    toggleMenu = () => {
        this.props.setMenu(!this.props.isMenuOpen);
    };
    render() {
        const authorized = false;
        return (
            <View style={LinkListStyles.menu}>
                <TouchableHighlight onPress={this.toggleMenu}>
                    <Text style={LinkListStyles.exit}>Luk</Text>
                </TouchableHighlight>
                {!authorized ? (
                    <View style={LinkListStyles.links}>
                        <Link title={"Home"} url={""} />
                        <Link title={"Login"} url={""} />
                    </View>
                ) : (
                    <View style={LinkListStyles.links}>
                        <Link title={"Home"} url={""} />
                        <Link title={"Overview"} url={""} />
                        <Link title={"Holiday Request"} url={""} />
                        <Link title={"Logout"} url={""} />
                    </View>
                )}
            </View>
        );
    }
}

export default LinkList;

const LinkListStyles: IILinkListStyles = StyleSheet.create({
    menu: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "65%",
        maxWidth: 180,
        zIndex: 10,
        backgroundColor: "#000",
        marginLeft: "-5.5%"
    },
    exit: {
        padding: 10,
        color: "#fff",
        width: "100%",
        ...FontStyle.normal
    },
    links: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
});

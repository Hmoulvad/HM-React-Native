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
import { AppContext } from "../../../context/appContext";

interface IILinkListStyles {
    menu: ViewStyle;
    exit: ViewStyle & TextStyle;
    links: ViewStyle;
}

interface ILinkListProps {}

const LinkList: React.FC<ILinkListProps> = (props: ILinkListProps) => {
    const { setMenu, isMenuOpen, userIsAuthenticated } = React.useContext(
        AppContext
    );
    const toggleMenu = () => {
        setMenu(!isMenuOpen);
    };
    return (
        <View style={LinkListStyles.menu}>
            <TouchableHighlight onPress={toggleMenu}>
                <Text style={LinkListStyles.exit}>Luk</Text>
            </TouchableHighlight>
            {!userIsAuthenticated ? (
                <View style={LinkListStyles.links}>
                    <Link title={"Home"} url={""} />
                    <Link title={"Login"} url={"login"} />
                </View>
            ) : (
                <View style={LinkListStyles.links}>
                    <Link title={"Home"} url={""} />
                    <Link title={"Overview"} url={"login"} />
                    <Link title={"Holiday Request"} url={"holiday-request"} />
                    <Link title={"Logout"} url={""} />
                </View>
            )}
        </View>
    );
};

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

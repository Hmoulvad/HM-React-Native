import { StyleSheet, ViewStyle, View, Text, TextStyle } from "react-native";
import * as React from "react";
import Link from "./link";
import FontStyle from "../../../../styles/font";
import { AppContext } from "../../../../context/appContext";
import LogoutLink from "./logout";

interface IILinkListStyles {
    menu: ViewStyle;
    exit: ViewStyle & TextStyle;
    links: ViewStyle;
}

interface ILinkListProps {}

const LinkList: React.FC<ILinkListProps> = (props: ILinkListProps) => {
    const { setMenu, isMenuOpen, isAuth } = React.useContext(AppContext);
    const toggleMenu = () => {
        setMenu(!isMenuOpen);
    };
    return (
        <View style={LinkListStyles.menu}>
            <Text onPress={toggleMenu} style={LinkListStyles.exit}>
                Luk
            </Text>
            {!isAuth ? (
                <View style={LinkListStyles.links}>
                    <Link title={"Home"} url={"/"} />
                    <Link internalLink={true} title={"Login"} url={"/login"} />
                </View>
            ) : (
                <View style={LinkListStyles.links}>
                    <Link title={"Home"} url={"/"} />
                    <Link title={"Overview"} url={"/overview"} />
                    <Link title={"Holiday Request"} url={"/holidayrequest"} />
                    <LogoutLink title={"Logout"} />
                </View>
            )}
        </View>
    );
};

export default LinkList;

const LinkListStyles: IILinkListStyles = StyleSheet.create({
    menu: {
        padding: 10,
        position: "relative",
        width: "65%",
        maxWidth: 200,
        height: "auto",
        backgroundColor: "#000",
        borderRadius: 5
    },
    exit: {
        color: "#fff",
        width: "100%",
        height: 24,
        ...FontStyle.normal
    },
    links: {
        flexDirection: "row",
        alignItems: "flex-start"
    }
});

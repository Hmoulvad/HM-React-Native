import { StyleSheet, ViewStyle, View, Text, TextStyle } from "react-native";
import * as React from "react";
import Link from "./link";
import FontStyle from "../../../../styles/font";
import { AppContext } from "../../../../context/appContext";
import LogoutLink from "./logout";
import { Role } from "../../../login/login.component";

interface IILinkListStyles {
    menu: ViewStyle;
    exit: ViewStyle & TextStyle;
    links: ViewStyle;
}

interface ILinkListProps {}

const LinkList: React.FC<ILinkListProps> = (props: ILinkListProps) => {
    const { setMenu, isMenuOpen, isAuth, role } = React.useContext(AppContext);
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
                    <Link title={"My Requests"} url={"/holiday-request"} />
                    {role !== Role.developer && (
                        <Link title={"Pending Requests"} url={"/pending"} />
                    )}
                    <Link title={"Add Request"} url={"/add-request"} />
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
        flexWrap: "wrap",
        alignItems: "flex-start"
    }
});

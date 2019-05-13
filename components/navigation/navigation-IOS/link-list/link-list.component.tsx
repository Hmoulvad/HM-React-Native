import {
    StyleSheet,
    ViewStyle,
    View,
    Text,
    TextStyle,
    TouchableHighlight,
    Platform,
    Alert,
    Button
} from "react-native";
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
                    {role !== Role.developer && (
                        <Link title={"Pending Requests"} url={"/pending"} />
                    )}
                    <Link title={"My Requests"} url={"/holiday-request"} />
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
        position: "absolute",
        top: 0,
        left: 0,
        width: "65%",
        maxWidth: 200,
        backgroundColor: "#000",
        marginLeft: "-5.5%",
        borderRadius: 5,
        flex: 1
    },
    exit: {
        color: "#fff",
        width: "100%",
        ...FontStyle.normal
    },
    links: {
        display: "flex",
        width: "100%",
        flex: 1,
        position: "relative",
        flexDirection: "column",
        alignItems: "flex-start"
    }
});

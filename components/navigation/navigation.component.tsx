import * as React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ViewStyle,
    ImageStyle,
    TextStyle,
    Platform,
    TouchableHighlight,
    Button
} from "react-native";
import FontStyle from "../../styles/font";
import LinkList from "./link-list";
import { AppContext } from "../../context/appContext";

interface INavigationStyles {
    navigation: ViewStyle;
    icon: ImageStyle;
    title: TextStyle & ViewStyle;
}

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props: INavigationProps) => {
    const { setMenu, isMenuOpen } = React.useContext(AppContext);
    const toggleMenu = () => {
        setMenu(!isMenuOpen);
    };
    return (
        <View style={NavStyles.navigation}>
            <TouchableHighlight onPress={toggleMenu}>
                <Image
                    style={NavStyles.icon}
                    source={require("../../assets/images/menu.png")}
                />
            </TouchableHighlight>
            <Text style={NavStyles.title}>IMPACT</Text>
            {isMenuOpen && <LinkList />}
        </View>
    );
};
export default Navigation;

const NavStyles: INavigationStyles = StyleSheet.create({
    navigation: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 6,
        paddingBottom: 6,
        height: 50,
        width: "90%"
    },
    icon: {
        marginLeft: 5,
        height: 16,
        width: 28.8
    },
    title: {
        color: "#fff",
        padding: 5,
        ...Platform.select({
            ios: {
                ...FontStyle.normal
            },
            android: {
                ...FontStyle.logo
            }
        })
    }
});

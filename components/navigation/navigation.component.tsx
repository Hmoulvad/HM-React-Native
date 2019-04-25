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

interface INavigationStyles {
    navigation: ViewStyle;
    icon: ImageStyle;
    title: TextStyle & ViewStyle;
}

interface INavigationProps {
    isMenuOpen: boolean;
    setMenu: (open: boolean) => void;
}

class Navigation extends React.PureComponent<INavigationProps> {
    toggleMenu = () => {
        this.props.setMenu(!this.props.isMenuOpen);
    };
    render() {
        const { isMenuOpen } = this.props;
        return (
            <View style={NavStyles.navigation}>
                <TouchableHighlight onPress={this.toggleMenu}>
                    <Image
                        style={NavStyles.icon}
                        source={require("../../assets/images/menu.png")}
                    />
                </TouchableHighlight>
                <Text style={NavStyles.title}>IMPACT</Text>
                {isMenuOpen && <LinkList {...this.props} />}
            </View>
        );
    }
}
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

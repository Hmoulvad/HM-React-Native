import * as React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ViewStyle,
    ImageStyle,
    TextStyle
} from "react-native";
import FontStyle from "../../styles/font";

interface INavigationProps {}

interface INavigationState {}

class Navigation extends React.PureComponent<
    INavigationProps,
    INavigationState
> {
    state: INavigationState = {};

    public render() {
        return (
            <View style={styles.navigation}>
                <Image
                    style={styles.icon}
                    source={require("../../assets/images/menu.svg")}
                />
                <Text style={styles.title}>IMPACT</Text>
            </View>
        );
    }
}
export default Navigation;

interface IStyles {
    navigation: ViewStyle;
    icon: ImageStyle;
    title: TextStyle & ViewStyle;
}

const styles: IStyles = StyleSheet.create({
    navigation: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 6,
        paddingBottom: 6,
        height: 50,
        width: "100%",
        backgroundColor: "#000"
    },
    icon: {
        width: 20,
        height: 20
    },
    title: {
        color: "#fff",
        fontSize: 22,
        lineHeight: 30,
        padding: 5,
        ...FontStyle.normal
    }
});

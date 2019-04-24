import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

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
                <Image source={} />
                <Text>Hey</Text>
            </View>
        );
    }
}
export default Navigation;

const styles = StyleSheet.create({
    navigation: {}
});

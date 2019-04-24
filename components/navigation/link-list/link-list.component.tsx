import { StyleSheet, ViewStyle, View } from "react-native";
import * as React from "react";
import Link from "./link";

interface IILinkListStyles {
    menu: ViewStyle;
    links: ViewStyle;
}

interface ILinkListProps {}

interface ILinkListState {}

class LinkList extends React.Component<ILinkListProps, ILinkListState> {
    public render() {
        const authorized = false;
        return (
            <View style={LinkListStyles.menu}>
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

// const authorizedLinks = () => {
//     return (

//     );
// };

// const unauthorizedLinks = () => {
//     return (
//         <View style={LinkListStyles.links}>
//             <Link title={"Home"} url={""} />
//             <Link title={"Overview"} url={""} />
//             <Link title={"Holiday Request"} url={""} />
//             <Link title={"Logout"} url={""} />
//         </View>
//     );
// };

const LinkListStyles: IILinkListStyles = StyleSheet.create({
    menu: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "65%",
        maxWidth: 180,
        zIndex: 10,
        backgroundColor: "#000",
        marginLeft: "-6%"
    },
    links: {
        marginTop: 20
    }
});

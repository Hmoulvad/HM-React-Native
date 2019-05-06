import * as React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TextStyle,
    ViewStyle,
    Text,
    Button,
    Alert
} from "react-native";
import { DocumentNode } from "apollo-link";
import gql from "graphql-tag";
import FontStyle from "../../styles/font";
import { Mutation } from "react-apollo";
import { AppContext } from "../../context/appContext";

const LOGIN: DocumentNode = gql`
    mutation LogIn($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
`;

interface ILoginProps {}

const Login: React.FC<ILoginProps> = props => {
    const [username, setUsername] = React.useState<string>("hbm@impact.dk");
    const [password, setPassword] = React.useState<string>("1234");
    const { setToken, setShowLogin, setAuth } = React.useContext(AppContext);

    return (
        <Mutation mutation={LOGIN}>
            {(login: any, { error, data }: any) => (
                <View style={LoginStyles.login}>
                    <View style={LoginStyles.innerContainer}>
                        <Text style={LoginStyles.header}>
                            Sign in to IMPACT HM
                        </Text>
                        <View style={LoginStyles.formContainer}>
                            <TextInput
                                style={LoginStyles.inputFields}
                                value="hbm@impact.dk"
                                placeholder={"E-mail address"}
                                onChangeText={text => setUsername(text)}
                            />
                            <TextInput
                                style={LoginStyles.inputFields}
                                value="1234"
                                placeholder={"Password"}
                                onChangeText={text => setPassword(text)}
                            />
                            <Button
                                title={"Login"}
                                onPress={() => {
                                    login({
                                        variables: {
                                            username,
                                            password
                                        }
                                    })
                                        .then((res: any) => {
                                            if (res != null) {
                                                setToken(res.data.login);
                                                setAuth(true);
                                                setShowLogin(false);
                                            }
                                        })
                                        .catch((e: any) => {
                                            Alert.alert(e.message);
                                        });
                                }}
                            />
                        </View>
                    </View>
                </View>
            )}
        </Mutation>
    );
};

interface ILoginStyle {
    login: ViewStyle;
    innerContainer: ViewStyle;
    inputFields: TextStyle;
    header: TextStyle;
    formContainer: ViewStyle;
}

const LoginStyles: ILoginStyle = StyleSheet.create({
    login: {
        position: "relative",
        marginTop: 50,
        marginBottom: 0,
        marginRight: "auto",
        marginLeft: "auto",
        height: "auto",
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 5
    },
    innerContainer: {
        position: "relative",
        padding: 15
    },
    inputFields: {
        ...FontStyle.normal,
        color: "#000",
        width: "100%",
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    header: {
        textAlign: "center",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        ...FontStyle.normal
    },
    formContainer: {
        padding: 10,
        position: "relative"
    }
});

export default Login;

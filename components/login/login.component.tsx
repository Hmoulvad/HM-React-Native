import * as React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TextStyle,
    ViewStyle,
    Text,
    Button,
    Alert,
    TouchableHighlight
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
export enum Role {
    unitManager = "Unit Manager",
    projectManager = "Project Manager",
    developer = "Developer"
}

export interface ITokenData {
    id: string;
    role: Role;
    objectRefId: string;
}

export interface IToken {
    data: ITokenData;
    exp: number;
}

const Login: React.FC<any> = props => {
    const [username, setUsername] = React.useState<string>("jtn@impact.dk");
    const [password, setPassword] = React.useState<string>("1234");
    const { setToken, setShowLogin, setAuth, setRole, role } = React.useContext(
        AppContext
    );

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
                                placeholder={"E-mail address"}
                                value={"jtn@impact.dk"}
                                onChangeText={text => setUsername(text)}
                            />
                            <TextInput
                                style={LoginStyles.inputFields}
                                placeholder={"Password"}
                                value={"1234"}
                                onChangeText={text => setPassword(text)}
                            />
                            <TouchableHighlight
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
                            >
                                <View style={LoginStyles.button}>
                                    <Text style={LoginStyles.buttonText}>
                                        Login
                                    </Text>
                                </View>
                            </TouchableHighlight>
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
    button: ViewStyle;
    buttonText: TextStyle;
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
    },
    button: {
        width: "100%",
        backgroundColor: "#4a90e2",
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonText: {
        color: "white",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    }
});

export default Login;

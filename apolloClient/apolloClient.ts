import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://172.20.10.4:4000"
});

export default client;

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://impact-hm-server.herokuapp.com/"
});

export default client;

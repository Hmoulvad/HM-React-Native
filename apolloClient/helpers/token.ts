import { IToken, ITokenData } from "../../components/login/login.component";
import client from "../apolloClient";
import { DocumentNode } from "apollo-link";
import gql from "graphql-tag";

const query: DocumentNode = gql`
    query decodeToken($token: String!) {
        decodeToken(token: $token) {
            role
        }
    }
`;

export async function decodeToken(token: string): Promise<ITokenData | null> {
    const results = await client
        .query({
            query,
            variables: { token }
        })
        .catch(e => {
            console.warn(e.message);
        });
    if (results) {
        return results.data.decodeToken as ITokenData;
    }
    return null;
}

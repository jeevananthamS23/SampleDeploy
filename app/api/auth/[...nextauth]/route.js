import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler=NextAuth({
        providers:[
            GithubProvider({
                clientId:process.env.CLIENTID,
                clientSecret:process.env.CLIENTSECRET
            }),
    ],
    });
export {handler as GET ,handler as POST};
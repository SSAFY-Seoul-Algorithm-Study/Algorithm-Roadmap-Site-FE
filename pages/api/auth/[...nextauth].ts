import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                
                id: {  
                    label: "ID",
                    type: "text",
                    placeholder: "아이디를 입력하세요.",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "비밀번호를 입력하세요.",
                },
            },

            async authorize(credentials, req) {

                if (!credentials)
                    throw new Error("잘못된 입력입니다.");

                const { id, password } = credentials;

                const test_user = {
                    id: "test",
                    password: "test",
                }

                return test_user;
            }
        }),
    ],
    callbacks: {

        async jwt({ token }) {
            return token;
        },
        async session({ session }) {

            const user_detail = {
                idx: 1,
                id: "test",
                name: "테스트",
                email: "test@naver.com",
                image: "",
            };
            
            session.user = user_detail;
            console.log("Provider's Res : ", session)
            
            return session;
        }
    }
}

export default NextAuth(authOptions);
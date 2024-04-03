import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: 'credentials',
            name: "Credentials",
            credentials: {
                username: { label: "Username *", type: "text", placeholder: '输入用户名' },
                password: { label: "Password *", type: "password", placeholder: '输入密码' },
                email: { label: "Email", type: "email", placeholder: '输入邮箱' }
            },
            async authorize(credentials, req) {
                try{
                    const res=await axios.post(process.env.BANCKEND_API + '/api/login', {
                        username: credentials?.username,
                        password: credentials?.password,
                    });
                    const user = res.data;

                    // 假设后端在验证成功时返回用户信息，包括JWT token
                    if (user && user.token) {
                        // 返回用户对象以用于JWT回调和会话回调
                        return { ...user, token: user.token };
                    } else {
                        // 返回null表示验证失败
                        return null;
                    }
                } catch (error) {
                    // 处理请求失败的情况
                    return null;
                }
            },
        }),
        GitHubProvider({
            profile(profile): any {
                console.log("Profile GitHub: ", profile);

                let userRole = "User";
                //// Check if email is in admin list
                // if (profile?.email === "abyan@abydyl.net") {
                //   userRole = "admin";
                // }
                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Profile Google: ", profile);

                let userRole = "User";
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (session?.user) session.user.role = token.role;
            return session;
        },
        async signIn({ user, account }: { user: any; account: any }) {
            let typeAccount = account.provider;
            const { name, email } = user;

            try {
                // register user
            } catch (error) {
                console.log(error);
            }
            return user;
        },

    },
    // 如果使用自定义页面登录可以添加以下配置
    // pages: {
    //     signIn: '/sign-in',
    //     // signOut: '/auth/signout',
    //     // error: '/auth/error', // Error code passed in query string as ?error=
    //     // verifyRequest: '/auth/verify-request', // (used for check email message)
    //     // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // }
};
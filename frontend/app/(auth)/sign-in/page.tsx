// 'use client'
// import {signIn} from "next-auth/react"
// import React from "react";
//
// function LoginPage ()  {
//
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const target = new FormData(event.currentTarget);
//         try {
//             const payload = Object.fromEntries(target);
//             const res = await signIn('credentials', {
//                 ...payload,
//                 redirect: true,
//                 callbackUrl: '/'
//             })
//         } catch (error) {
//             console.error('Error signing in:', error);
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 用户名:
//                 <input type="text" name="username" required />
//             </label>
//             <label>
//                 密码:
//                 <input type="password" name="password" required />
//             </label>
//             <button type="submit">登录</button>
//         </form>
//     );
// }
//
// export default LoginPage;

import React from "react";

export default function Page(){
    return (
        <>
            <h1>Register</h1>
        </>
    )
}
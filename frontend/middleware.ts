import { NextRequest, NextResponse  } from 'next/server';
import { getToken } from 'next-auth/jwt';

// 这是你的密钥，与 next-auth 配置中的密钥相同
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req:NextRequest) {
    const token = await getToken({ req, secret });
    const { pathname } = req.nextUrl;
    // console.log(pathname,token)

    // 如果请求登录，则判断是否已登录，不重定向/api
    if (pathname.includes('/api') || pathname.includes('/_next')) {
        if(pathname.includes('/api/auth/signin') && token){
            return NextResponse.redirect(new URL('/', req.url));
        }
        return NextResponse.next();
    }

    // 如果请求受保护的路由且用户未登录，则重定向到登录页
    if (pathname.startsWith('/') && !token) {
        return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }

    return NextResponse.next();
}
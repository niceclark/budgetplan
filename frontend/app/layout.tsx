import { Metadata } from 'next'
import { Link, Theme, ThemePanel } from '@radix-ui/themes'
import './globals.css'
import '@radix-ui/themes/styles.css'

export const metadata: Metadata = {
    title: {
        // template 可以用于添加前缀或后缀在title子路由中，当前路由用不了
        template: '%s | BudgetPlan',
        default: 'BudgetPlan',
    },
    description: 'This is a budget plan!',
    applicationName: 'BudgetPlan',
    referrer: 'origin-when-cross-origin',
    keywords: ['BudgetPlan', 'finances'],
    authors: [{ name: 'Clark' }, { name: 'Clarkke', url: 'https://clarkke.com' }],
    creator: 'Clark',
    publisher: 'Clark',
    // 格式检测配置对象：
    //   - email: false，表示不自动检测和转换文本中的电子邮件地址
    //   - address: false，表示不自动检测和转换文本中的物理地址
    //   - telephone: false，表示不自动检测和转换文本中的电话号码
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    category: 'technology',
}

type RootLayoutProperties = { children: React.ReactNode };


export default function RootLayout({ children }: RootLayoutProperties) {
    return (
        <html lang="en">
            <body>
                {/* <Theme radius="large" appearance="dark"> */}
                {/* <ThemePanel /> */}
                <main>{children}</main>
                <footer>
                    <p>Footer - app layout</p>
                    <Link href="/">Home</Link><br />
                    <Link href="/dash-finances">dash-finances</Link><br />
                    <Link href="/configuration">configuration</Link><br />
                    <Link href="/api/auth/signin">sign-in</Link><br />
                    <Link href="/sign-up">sign-up</Link><br />
                    <Link href="/api/auth/session">session</Link><br />
                    <Link href="/api/auth/signout">signOut</Link><br />
                </footer>
                {/* </Theme> */}
            </body>
        </html>
    );
}
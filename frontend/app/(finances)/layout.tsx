import FinancesNavbar from "@/components/layout/Finances-navbar";
import FinancesBreadcrumbs from "@/components/layout/Finances-breadcrumbs";

export default function FinancesLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
<>
    <FinancesNavbar />
    <FinancesBreadcrumbs />
        <main>{children}</main>
        <footer>
            -------------------------------
            <p>Footer - finances layout</p>
        </footer>
</>
    )
}

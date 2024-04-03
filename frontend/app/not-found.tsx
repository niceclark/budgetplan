'use client'

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Error from "next/error";

/**
 * ### NotFound Page Component
 *
 * Purpose:
 * - This component renders the built-in Next.js 404 page.
 *
 * Behavior:
 * - Triggered when a user navigates to a route that doesn't
 *   have a corresponding locale set by the middleware.
 *
 * Output:
 * - Renders a page with a 404 error message.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */

export default function NotFound() {
  return (
    <html>
      <body>
              <Error statusCode={404} title="宇宙很大，不要总在这里转，多出去逛逛" withDarkMode={true} />
      </body>
    </html>
  );
}

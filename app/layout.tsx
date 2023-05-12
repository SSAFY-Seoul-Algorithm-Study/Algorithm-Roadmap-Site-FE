import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from './AuthContext';

export const metadata = {
  title: "Algorithm Rating Site | ARS",
  description:
    "알고리즘 레이팅 사이트",
  metadataBase: new URL("https://algorithm-rating-site.vercel.app/"),
  themeColor: "#FFF",
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          <AuthContext session={session}>
            {children}
          </AuthContext>
        </main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}

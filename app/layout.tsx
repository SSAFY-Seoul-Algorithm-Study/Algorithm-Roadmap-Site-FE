import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import NavBar from "@/components/layout/navbar";
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Algorithm Rating Site | ARS",
  description:
    "알고리즘 레이팅 사이트",
  metadataBase: new URL("https://algorithm-rating-site.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <NavBar session={session} />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
        </main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}

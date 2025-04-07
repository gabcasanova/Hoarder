import "./globals.css"

import DesktopNavbar from "../components/navbar/DesktopNavbar";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className="max-w-[1510px] min-h-screen m-auto flex flex-col bg-hoarder-dark ">
        <NextIntlClientProvider>
          <header>
            <div className="hidden xl:block">
              <DesktopNavbar />
            </div>
          </header>

          <main className="p-3 flex-grow bg-hoarder-base text-white">
            {children}
          </main>

          <footer>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
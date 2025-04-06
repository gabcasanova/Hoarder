import "./globals.css"

import DesktopNavbar from "../components/DesktopNavbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body className="max-w-[1510px] min-h-screen m-auto flex flex-col bg-hoarder-dark ">
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
      </body>
    </html>
  );
}
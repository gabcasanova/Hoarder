export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <header>
        </header>

        <main>
          {children}
        </main>

        <footer>
        </footer>
      </body>
    </html>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}

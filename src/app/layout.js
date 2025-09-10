"USE CLIENT";
import Footer from "@/components/footer/footer";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <main className="flex-grow">
          {children}
        </main>


        <Footer />
      </body>
    </html>
  );
}

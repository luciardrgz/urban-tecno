import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#161616] max-w-full mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

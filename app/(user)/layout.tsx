import Navbar from "../../components/Navbar";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#161616] max-w-full mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

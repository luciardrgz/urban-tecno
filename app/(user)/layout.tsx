import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#202020]">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}

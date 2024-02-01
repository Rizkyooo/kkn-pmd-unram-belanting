
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KKN PMD UNRAM 2023 DESA BELANTING",
  description: "dokumentasi kegiatan KKN PMD UNRAM 2023-2024 di desa belanting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}

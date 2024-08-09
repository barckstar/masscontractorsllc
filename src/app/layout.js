import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SocialMediaBar } from "@/components/socialMedia";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mas Contractors LLC",
  description: "General Contractor in Richmond, VA.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SocialMediaBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}

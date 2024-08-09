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
      <header>
          <meta
            httpEquiv="Content-Security-Policy"
            content="
              default-src 'none';
              script-src 'self' 'nonce-random123' https://trusted.cdn.com;
              style-src 'self' 'unsafe-inline';
              font-src 'self' https://fonts.example.com; // Permitir fuentes
              img-src 'self' data: https://images.example.com;
              connect-src 'self' https://api.example.com;
              media-src 'self' https://media.example.com; // Permitir medios
              frame-src https://www.example.com; // Permitir enmarcar ciertos sitios
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
            "
          />
        </header>
      <body className={inter.className}>
        <Navbar />
        <SocialMediaBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}

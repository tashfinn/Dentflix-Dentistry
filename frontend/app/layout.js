import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dentflix Dentistry | Premium Dental Care",
  description: "Modern, professional dental clinic and patient portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

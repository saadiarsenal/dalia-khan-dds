import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dalia Khan, DDS - Professional Dental Care in Bayonne, New Jersey",
  description: "Welcome to the professional portfolio website for Dalia Khan, a graduate of NYU Dental School. Working as an associate dentist in Bayonne, New Jersey, offering world-class patient care and specializing in advanced dental procedures, with a particular interest in Orthodontics.",
  keywords: ["dentist", "dental care", "orthodontics", "Bayonne", "New Jersey", "NYU Dental School"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


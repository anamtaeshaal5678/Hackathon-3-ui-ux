// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";



export const metadata: Metadata = {
  title: "create next app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
      <Header/>
        {children}
        <Footer/>
        </Providers>
        </body>
      </html>
    // </ClerkProvider>
  );
}
 
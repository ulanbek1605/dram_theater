import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header/Header";
import MainScreen from "@/components/Main/mainScreen/MainScreen";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        <MainScreen />
        {children}
        <Footer />
      </body>
    </html>
  );
}

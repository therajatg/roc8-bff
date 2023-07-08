import "./globals.css";
import { Inter } from "next/font/google";
import { MainLayout } from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogs App",
  description: "Blog app made with app-router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

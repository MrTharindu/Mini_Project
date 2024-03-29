import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToastContainerBar from "@/provider/ToastContainerBar";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Booking Reservation App",
  description: "Generated by create next app",
  icons: "https://dl.dropboxusercontent.com/s/ywn0n6m41kep83t/image.png"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <ToastContainerBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

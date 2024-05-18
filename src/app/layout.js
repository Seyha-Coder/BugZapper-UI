import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BugZapper",
  description: "Provided by KSHRD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-screen font-poppins">
          
              <Sidebar/>
          
          <div className="flex-col w-full h-full">
            <Navbar/>
            <div className="w-full">
            {children}
            </div>
          </div>
        </div>
        
        </body>
    </html>
  );
}

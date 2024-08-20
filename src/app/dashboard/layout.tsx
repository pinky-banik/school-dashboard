import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="flex h-screen" >
        {/* left */}
        <div className="w-[14%] md:w-[8%] lg:w-[14%]  p-3">
          <Link href="/"  className="flex items-center justify-center gap-2 lg:justify-start">
            <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
            <span className="hidden lg:block font-bold">SchoolDev</span>
          </Link>
          <Menu/>
        </div>




        {/* right */}
        <div className="w-[86%] md:w-[92%] lg-w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar />
          {children}
        </div>
          </div>
    </html>
  );
}

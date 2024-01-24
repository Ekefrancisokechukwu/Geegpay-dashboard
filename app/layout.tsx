import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/dashboard/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { PlusJakartaSans } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden max-w-[1600px] mx-auto">
            <div className="flex-none md:block hidden">
              <Sidebar />
            </div>
            <div className="flex-grow md:overflow-y-auto bg-primary-foreground  dark:bg-neutral-950">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

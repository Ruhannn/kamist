import type { Metadata } from "next";
import { JetBrains_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/provider/tanstack-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "react-hot-toast";
import { ModeToggle } from "@/components/theme-Button";
const geistSans = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

const codeFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kamist",
  description: "view your gist is a pretty way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${codeFont.variable} antialiased bg-[#dce0e8] text-[#4c4f69] dark:bg-[#11111b] dark:text-[#cdd6f4]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <Toaster
            position="bottom-left"
            toastOptions={{
              className:
                "bg-[#cbd3e2] dark:bg-[#4c4c75] text-[#4c4f69] dark:text-[#cdd6f4]",
            }}
          />
          <ModeToggle className="absolute right-10 top-10" />
          <TanstackProvider>{children}</TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { ModeToggle } from "@/components/theme-Button";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { JetBrains_Mono, Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

const codeFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
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
        className={`${ubuntu.variable} ${codeFont.variable} antialiased bg-[#dce0e8] text-[#4c4f69] dark:bg-[#11111b] dark:text-[#cdd6f4]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <Toaster
            position="bottom-left"
            toastOptions={{
              style: { background: "#cbd3e2", color: "#4c4f69" },
              className: "dark:bg-[#4c4c75] dark:text-[#cdd6f4]",
            }}
          />
          {/* todo fix todo */}
          <ModeToggle className="absolute right-10 top-10" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

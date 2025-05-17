import type { Metadata } from "next";
import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";

export const metadata: Metadata = {
  title: "Xpress",
  description: "A test application for frontend developer role at Wema.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Xpress",
    description: "A test application for frontend developer role at Wema.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpress",
    description: "A test application for frontend developer role at Wema.",
  },
};

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${playfair.variable}`}
    >
      <body>
        <QueryProvider>
          {/* removed enableSystem */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

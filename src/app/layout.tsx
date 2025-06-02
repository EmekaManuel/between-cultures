import type { Metadata } from "next";
import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SocialWrapper from "@/layouts/app-layout";

// import { I18nextProvider } from "react-i18next";
// import i18n from "@/providers/i18n";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "betweencultures",
  description: "A test application for frontend developer role at Wema.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "betweencultures",
    description: "A test application for frontend developer role at Wema.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "betweencultures",
    description: "A test application for frontend developer role at Wema.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body>
        <SpeedInsights />
        <QueryProvider>
          {/* removed enableSystem */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <AuthProvider>
              <SocialWrapper>{children}</SocialWrapper>
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

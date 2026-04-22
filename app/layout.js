import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Bold Core LLC | Digital Product Development",
  description: "Bold Core LLC builds mobile apps, backend systems, and product interfaces for the Mongolian market.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "X9q7ksHwluAjoh1Ct-eHugBF7Kklt4s1_0DbMe-vfVI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Bold Core LLC | Дижитал бүтээгдэхүүн хөгжүүлэлт",
  description: "Bold Core LLC нь Монгол зах зээлд зориулсан мобайл апп, backend систем, бүтээгдэхүүний интерфэйс хөгжүүлдэг студи юм.",
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
    <html lang="mn" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}

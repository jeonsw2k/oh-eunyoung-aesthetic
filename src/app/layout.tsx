import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "오은영에스테틱 | 1:1 맞춤 케어",
  description: "내 피부의 주치의, 오은영에스테틱입니다. 1:1 프라이빗 맞춤 관리로 피부 본연의 건강함을 되찾아드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${playfair.variable} ${notoSansKr.variable}`}>
        {children}
      </body>
    </html>
  );
}

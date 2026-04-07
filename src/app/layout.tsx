import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة أمراك للاستشارات الهندسية",
  description:
    "تمتد جذور شركة أمراك للاستشارات الهندسية لأكثر من 10 اعواما من الخبرة المتراكمة في السوق الهندسي، حيث ساهمت خلال هذه الفترة في تصميم والإشراف على عدد من أبرز المشاريع المعمارية في مختلف أنحاء المملكة.",
  keywords: [
    "شركة أمراك للاستشارات الهندسية",
    "شركة أمراك للاستشارات الهندسية بالرياض",
    "شركة أمراك للاستشارات الهندسية بالمملكة العربية السعودية",
    "شركة أمراك للاستشارات الهندسية بالمملكة العربية السعودية للاستشارات الهندسية",
    "شركة أمراك للاستشارات الهندسية للاستشارات الهندسية",
    "شركة أمراك للاستشارات الهندسية للاستشارات الهندسية بالمملكة العربية السعودية",
    "شركة أمراك للاستشارات الهندسية للاستشارات الهندسية بالرياض",
    "شركة أمراك للاستشارات الهندسية للاستشارات الهندسية بالمملكة العربية السعودية للاستشارات الهندسية",
  ],
  icons: {
    icon: "https://amrac.netlify.app/favicon.png",
    shortcut: "https://amrac.netlify.app/favicon.png",
    apple: [{ url: "https://amrac.netlify.app/favicon.png" }],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://amrac.netlify.app/favicon.png",
    },
  },
  authors: [
    { name: "شركة أمراك للاستشارات الهندسية", url: "https://artex.sa/" },
  ],
  creator: "شركة أمراك للاستشارات الهندسية",
  publisher: "شركة أمراك للاستشارات الهندسية",
  openGraph: {
    title: "شركة أمراك للاستشارات الهندسية",
    description:
      "تمتد جذور شركة أمراك للاستشارات الهندسية لأكثر من10عامًا من الخبرة المتراكمة في السوق الهندسي، حيث ساهمت خلال هذه الفترة في تصميم والإشراف على عدد من أبرز المشاريع المعمارية في مختلف أنحاء المملكة.",
    images: [
      {
        url: "https://amrac.netlify.app/favicon.png",
        width: 800,
        height: 600,
        alt: "شركة أمراك للاستشارات الهندسية",
      },
    ],
    url: "https://amrac.netlify.app",
    siteName: "شركة أمراك للاستشارات الهندسية",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة أمراك للاستشارات الهندسية",
    description: "شركة أمراك للاستشارات الهندسية",
    siteId: "@artx_sa",
    images: "https://amrac.netlify.app/favicon.png",
  },
  applicationName: "شركة أمراك للاستشارات الهندسية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} {font-sans}  antialiased`}>
        <NextAuthSessionProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" richColors />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

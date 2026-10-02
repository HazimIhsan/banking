import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400","700"],
});


export const metadata: Metadata = {
  title: "Horizon",
  description: "horizon is a moderm banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}

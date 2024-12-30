import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "HATS Software",
  description: "Crafting innovative gaming experiences from the heart of Liberec, Czech Republic. Indie game development studio focused on unique multiplayer experiences.",
  keywords: ["game development", "indie games", "Czech Republic", "HATS Software", "gaming studio"],
  authors: [{ name: "HATS Software Team" }],
  openGraph: {
    title: "HATS Software | Innovative Game Development Studio",
    description: "Crafting innovative gaming experiences from the heart of Liberec",
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    site: "@hatssoftware",
    creator: "@hatssoftware",
    title: "HATS Software",
    description: "Crafting innovative gaming experiences from the heart of Liberec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#c084fc" />
      </head>
      <body className="antialiased font-sans selection:bg-purple-500/30 selection:text-white">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,255,0.3),rgba(255,255,255,0))]" />
        <div className="fixed inset-0 -z-10 bg-black/90" />
        {children}
      </body>
    </html>
  );
}

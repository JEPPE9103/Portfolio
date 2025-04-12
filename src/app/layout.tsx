import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Developer Portfolio",
  description: "Electrical engineer turned software developer, specialized in building high-performance, interactive 3D visualization systems.",
  openGraph: {
    title: "Developer Portfolio",
    description: "Electrical engineer turned software developer, specialized in building high-performance, interactive 3D visualization systems.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow bg-white dark:bg-gray-900">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-gray-700 dark:text-gray-300">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

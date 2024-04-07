
import { useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
import { Metadata } from 'next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CoBoard',
  description: 'Collaborative whiteboard for remote teams',  
};
export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
 
}>) {


 return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/logo1.svg" sizes="any" />
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
 );
}
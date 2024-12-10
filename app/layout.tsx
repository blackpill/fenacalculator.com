import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { BASE_URL } from './config'
import 'katex/dist/katex.min.css'; // 引入 KaTeX 样式
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: 'FENa Calculator | Fractional Excretion of Sodium Calculator',
  description: 'Online FENa (Fractional Excretion of Sodium) calculator to assess acute kidney injury and differentiate prerenal from intrinsic renal failure.',
  alternates: {
    canonical: `${BASE_URL}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-QZHJ676425" />
    </html>
  )
}

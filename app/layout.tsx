import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradingEdge - AI-Powered Market Open/Close Trading Education',
  description: 'Learn to trade effectively during the first and last 30 minutes of market hours using AI-powered insights and sentiment analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 
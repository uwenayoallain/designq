import './globals.css'
import { Nunito } from "@next/font/google";
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ ` ${nunito.variable} font-sans ` }>
      <head />
      <body>{ children }</body>
    </html>
  )
}

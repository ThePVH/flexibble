import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import "./global.css"

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}

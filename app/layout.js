import './globals.css'

export const metadata = {
  title: 'Discord Bot Legal',
  description: 'Terms of Service and Privacy Policy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

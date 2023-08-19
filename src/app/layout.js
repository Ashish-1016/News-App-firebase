import './globals.css'


export const metadata = {
  title: 'Firebase news app',
  description: 'Created by Ashish - ajeswani80@gmail.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

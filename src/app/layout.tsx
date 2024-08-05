import './styles/global.scss';
import Header from '@/components/layout/Header/header';
import Footer from '@/components/layout/Footer/footer';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}

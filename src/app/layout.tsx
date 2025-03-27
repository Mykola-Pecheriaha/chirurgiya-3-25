import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/global.css';
import ContactsBar from './components/ContactsBar/ContactsBar';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
// import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const etadata: Metadata = {
  title: 'chirurgiya-3-25',
  description: 'Хірургічне відділення ЦМКЛ м. Чернівці',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased layout`}
      >
        {/* Фіксована верхня панель */}
        <div className="fixed-header">
          <div className="contacts-bar">
            <ContactsBar />
          </div>
          <div className="header-menu">
            <HeaderMenu />
          </div>
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
        </div>

        {/* Основний контент */}
        <main className="main">{children}</main>

        {/* Футер */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

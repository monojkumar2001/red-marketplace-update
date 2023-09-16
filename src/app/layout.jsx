"use client"

import './globals.css';
import '../styles/Layout/Header.css'
import '../styles/style.css';
import '../styles/MakeOffer.css';
import '../styles/NftModelCongratulation.css';
import '../styles/WalletConnet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/responsive.css';
import '../styles/dashboard-responsive.css'
import { Urbanist } from 'next/font/google'
import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/footer';
const  urbanist =  Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body suppressContentEditableWarning className={urbanist.className}>
        <Header/>
        {children}
        {/* <Footer/> */}
        <Footer/>
        </body>
    </html>
  )
}

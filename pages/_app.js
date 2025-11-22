import React, { useEffect, useState} from 'react';
import { Layout, Footer } from '@/components';
import 'tailwindcss/tailwind.css'; 
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
  <Layout> 
  <Component {...pageProps} />
  <Analytics />
  <Footer />
  </Layout>
  )
}

export default MyApp

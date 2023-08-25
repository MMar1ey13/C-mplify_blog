import React, { useEffect, useState} from 'react';
import { Layout } from '@/components';
import 'tailwindcss/tailwind.css'; 
import '@/styles/globals.scss'
// Import the package at the top of your file
import analytics from '@vercel/analytics'

// Initialize the package
analytics.init({ 
  // Add your project ID here (You'll get this from your Vercel dashboard)
  projectID: 'prj_huZVbvl2dw46xkkZJf0dMMZKS261'
})

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

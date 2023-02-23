import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  },[]);

  return ( 
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
};

export default MyApp;
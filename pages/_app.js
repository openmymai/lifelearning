import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  },[]);
  
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </SSRProvider>
  )
};

export default MyApp;
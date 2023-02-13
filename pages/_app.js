import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
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
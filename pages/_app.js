import React, { useEffect } from 'react';
import Script from 'next/script';
import Layout from '../components/Layout';
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
  <Script src="/js/main.js" />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default MyApp;
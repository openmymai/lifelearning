import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const [ scroll, setScroll ] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 100);
      });
    }
  },[]);

  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />   

      {/* Back to Top */}
      <a href="#" className={`back-to-top d-flex align-items-center justify-content-center${scroll ? ' active' : ''}`}>
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
}

export default Layout;
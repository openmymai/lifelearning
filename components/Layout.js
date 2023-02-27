import React, { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return windowSize;
}

const Layout = (props) => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  const [ scroll, setScroll ] = useState(false);

  const size = useWindowSize();
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  },[]);

  return (
    <div>
      {!navbarOpen ? (
          <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={() => setNavbarOpen((prev) => !prev)}></i>
        ) : (
          <i className="bi bi-x mobile-nav-toggle d-xl-none" onClick={() => setNavbarOpen((prev) => !prev)}></i>
        )}
      <header id="header">
        <div className="container d-flex align-items-center">
          <nav id="navbar" ref={ref} className={`${navbarOpen && size.width < 992 ? 'navbar navbar-mobile' : 'navbar'}`}>
            <ul>
              <li><a onClick={() => setNavbarOpen((prev) => !prev)} className="nav-link" href="/#hero">หน้าแรก</a></li>
              <li><a onClick={() => setNavbarOpen((prev) => !prev)} className="nav-link" href="/#about">บทวิปัสสนาภาวนา</a></li>
              <li><a onClick={() => setNavbarOpen((prev) => !prev)} className="nav-link" href="/#services">หลักสูตรอนาคามีผล</a></li>
              <li><a onClick={() => setNavbarOpen((prev) => !prev)} className="nav-link" href="/#portfolio">บทวิปัสสนาภาวนาเพิ่มเติม</a></li>
              <li><a onClick={() => setNavbarOpen((prev) => !prev)} className="nav-link" href="/#team">บทนำไปใช้ในชีวิตประจำวัน</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        {props.children}
      </div>
      <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <h3>พระพุทธเจ้าสอนอะไร?</h3>
              <h5>
                ปัญญา ศีล สมาธิ<br />
                เป็นคำสอนของพระพุทธเจ้า<br />
                นำไปปฏิบัติอย่างไร?<br /><br />

                เชียงใหม่, Chiang Mai<br />
                ประเทศไทย, Thailand<br /><br />
              </h5>
            </div>

            <div className="col-lg-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#hero">หน้าแรก</a></li>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#about">บทวิปัสสนาภาวนา</a></li>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#services">หลักสูตรอนาคามีผล</a></li>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#portfolio">บทวิปัสสนาภาวนาเพิ่มเติม</a></li>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#team">บทนำไปใช้ในชีวิตประจำวัน</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> &nbsp;
          Implement using NextJS by <a href="https://openmymai.github.io">Sirisak Chantanate (Mai)</a>
        </div>
      </div>
    </footer>

    
    <a href="#" className={`back-to-top d-flex align-items-center justify-content-center${scroll ? ' active' : ''}`}>
      <i className="bi bi-arrow-up-short" />
    </a>

    </div>
  );
}

export default Layout;
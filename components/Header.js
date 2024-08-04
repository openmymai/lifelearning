import React, { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const size = useWindowSize();
  const ref = useRef();
  return (
    <div>
      {!navbarOpen ? (
        <i
          className='bi bi-list mobile-nav-toggle d-xl-none'
          onClick={() => setNavbarOpen((prev) => !prev)}
        ></i>
      ) : (
        <i
          className='bi bi-x mobile-nav-toggle d-xl-none'
          onClick={() => setNavbarOpen((prev) => !prev)}
        ></i>
      )}
      <header id='header'>
        <div className='container d-flex align-items-center'>
          <nav
            ref={ref}
            className={`${
              navbarOpen && size.width < 992 ? 'navbar navbar-mobile' : 'navbar'
            }`}
          >
            <ul>
              <li>
                <a
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  className='nav-link'
                  href='/#hero'
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  className='nav-link'
                  href='/#primary'
                >
                  บทวิปัสสนาภาวนา
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  className='nav-link'
                  href='/#services'
                >
                  หลักสูตรอนาคามีผล
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  className='nav-link'
                  href='/#additional'
                >
                  บทวิปัสสนาภาวนาเพิ่มเติม
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavbarOpen((prev) => !prev)}
                  className='nav-link'
                  href='/#team'
                >
                  บทนำไปใช้ในชีวิตประจำวัน
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'ตัวเราเป็นใคร?',
        'เกิดมาทำไม?',
        'เป้าหมายชีวิตของเราอยู่ที่ไหน?',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <section
      id='hero'
      className='d-flex align-items-center'
    >
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <h1>พระพุทธเจ้าสอนอะไร?</h1>
            <h2>
              <span
                style={{ whiteSpace: 'pre' }}
                ref={el}
              />
            </h2>
            <h2>
              <a href='introduction'>บทสรรเสริญคุณพระรัตนตรัย</a>
            </h2>
            <a href='/buddhateaching/life01'>
              <h2>
                <span>ปัญญา ศีล สมาธิ</span>
                <br />
                <span>เป็นคำสอนของพระพุทธเจ้า</span>
                <br />
                <span>นำไปปฏิบัติอย่างไร?</span>
              </h2>
            </a>
          </div>
          <div
            className='col-lg-6 order-1 order-lg-2 hero-img'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            <Image
              src='/img/lotuspng.png'
              alt='lotus'
              width={300}
              height={412}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

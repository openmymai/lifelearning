import React from 'react';
import Image from 'next/image';

const IndexPage = () => {

  return (
  <div>
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>พระพุทธเจ้าสอนอะไร?</h1>
            <h2>ตัวเราเป็นใคร? เกิดมาทำไม? เป้าหมายชีวิตของเราอยู่ที่ไหน?</h2>
            <div className="center">
              <h3>พระพุทธเจ้าสอนอะไร?</h3>
              <iframe
                src="https://youtube.com/embed/Axtd5bY0iCw"
                title="Embed vdo"
                allowFullScreen
              />
              <h3>วิธีแก้ปัญหาชีวิต</h3>
              <iframe
                src="https://youtube.com/embed/Al7cfmeV1Sk"
                title="Embed vdo"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/img/lotuspng.png"
              alt="lotus"
              width={500}
              height={298}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default IndexPage;
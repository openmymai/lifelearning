import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

const IndexPage = () => {
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
    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy();
    }
  },[]);

  return (
  <div>
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>พระพุทธเจ้าสอนอะไร?</h1>
            <h2><span style={{ whiteSpace: 'pre' }} ref={el} /></h2>
            <a href="/life01">
              <h2>
              <span>ปัญญา ศีล สมาธิ</span><br />
              <span>เป็นคำสอนของพระพุทธเจ้า</span><br />
              <span>นำไปปฏิบัติอย่างไร?</span>
              </h2>
            </a>
            <h2><a href="introduction">บทสรรเสริญคุณพระรัตนตรัย</a></h2>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/img/lotuspng.png"
              alt="lotus"
              width={300}
              height={412}
            />
          </div>
        </div>
      </div>
    </section>

    <main id="main">
      <section id="clients" className="clients section-bg">
        <div className="container">

          <div className="row" data-aos="zoom-in">
            <div className="section-title">
              <h2>พระพุทธเจ้าสอนอะไร?</h2>
            </div>
            <div><h2><a href="https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1">Subscribe <i className="bi bi-youtube" /></a></h2></div>
            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/Axtd5bY0iCw"
                title="Embed vdo"
                allowFullScreen
              />
            </div>

            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/Al7cfmeV1Sk"
                title="Embed vdo"
                allowFullScreen
              />
            </div>

            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/ZqfL0o_51YM"
                title="Embed vdo"
                allowFullScreen
              />
            </div>

            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/m9YsNEQNXgs"
                title="Embed vdo"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>บทวิปัสสนาภาวนา</h2>
        </div>

        <div className="row content">
            <p>
              โอปะนะยิโกคือท่องจำ เอากฎธรรมชาติ 2 กฎหรือไม่เที่ยงเกิดดับไว้ในใจ โดยเริ่มต้นที่การท่องจำ วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6
            </p>
          <div className="col-lg-6">

            <ul>
              <li><a href="lesson0101"><i className="bi bi-check-all"></i>วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="lesson0102"><i className="bi bi-check-all"></i>บทตามทันตัวเรา</a></li>
              <li><a href="lesson0103"><i className="bi bi-check-all"></i>บทฝึกเห็นตามจริง</a></li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><a href="lesson0104"><i className="bi bi-check-all"></i>การพิจารณา อินทรีย์ 6</a></li>
              <li><a href="lesson0105"><i className="bi bi-check-all"></i>การพิจารณา อินทรีย์ 6 และขันธ์ 5</a></li>
              <li><a href="lesson0106"><i className="bi bi-check-all"></i>ฝึกเอาความจริงไปใช้</a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row content">
          <div className="section-title">
            <h2>หลักสูตรอนาคามีผล</h2>
          </div>
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <Image 
              src="/img/lotus.png" 
              className="img-fluid" 
              alt=""
              width={300}
              height={600}
            />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="100">
            <ul>
              <li><a href="lesson0201"><i className="bi bi-check-all"></i>วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="lesson0202"><i className="bi bi-check-all"></i>การพิจารณาอินทรีย์ 6</a></li>
              <li><a href="lesson0203"><i className="bi bi-check-all"></i>กำหนดรู้โลกและชีวิต</a></li>
              <li><a href="lesson0204"><i className="bi bi-check-all"></i>กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง</a></li>
              <li><a href="lesson0205"><i className="bi bi-check-all"></i>วิปัสสนาภาวนาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="lesson0206"><i className="bi bi-check-all"></i>ฝึกตามทันกายกรรม</a></li>
              <li><a href="lesson0207"><i className="bi bi-check-all"></i>องค์ประกอบของโลกและชีวิต</a></li>
              <li><a href="lesson0208"><i className="bi bi-check-all"></i>วิปัสสนากำหนดรู้ส่วน 2 อย่าง</a></li>
              <li><a href="lesson0209"><i className="bi bi-check-all"></i>กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6</a></li>
              <li><a href="lesson0210"><i className="bi bi-check-all"></i>พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="lesson0211"><i className="bi bi-check-all"></i>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน</a></li>
              <li><a href="lesson0212"><i className="bi bi-check-all"></i>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>บทวิปัสสนาภาวนาเพิ่มเติม</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">

            <ul>
              <li><a href="lesson0301"><i className="bi bi-check-all"></i>ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา</a></li>
              <li><a href="lesson0401"><i className="bi bi-check-all"></i>ว่าด้วยอดีต ปัจจุบัน อนาคต</a></li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><a href="lesson0501"><i className="bi bi-check-all"></i>ว่าด้วยปฏิจจสมุปบาท</a></li>
              <li><a href="lesson0601"><i className="bi bi-check-all"></i>พระสุตตันตปิฎก เล่มที่ 9</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>

    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>บทนำไปใช้ในชีวิตประจำวัน</h2>
        </div>
        <div className="row content">

          <div className="col-lg-3 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <ul>
              <li><a href="learning01"><i className="bi bi-check-all"></i>บทที่ 1</a></li>
              <li><a href="learning02"><i className="bi bi-check-all"></i>บทที่ 2</a></li>
              <li><a href="learning03"><i className="bi bi-check-all"></i>บทที่ 3</a></li>
              <li><a href="learning04"><i className="bi bi-check-all"></i>บทที่ 4</a></li>
              <li><a href="learning05"><i className="bi bi-check-all"></i>บทที่ 5</a></li>
              <li><a href="learning06"><i className="bi bi-check-all"></i>บทที่ 6</a></li>
              <li><a href="learning07"><i className="bi bi-check-all"></i>บทที่ 7</a></li>
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <ul>
              <li><a href="learning08"><i className="bi bi-check-all"></i>บทที่ 8</a></li>
              <li><a href="learning09"><i className="bi bi-check-all"></i>บทที่ 9</a></li>
              <li><a href="learning10"><i className="bi bi-check-all"></i>บทที่ 10</a></li>
              <li><a href="learning11"><i className="bi bi-check-all"></i>บทที่ 11</a></li>
              <li><a href="learning12"><i className="bi bi-check-all"></i>บทที่ 12</a></li>
              <li><a href="learning13"><i className="bi bi-check-all"></i>บทที่ 13</a></li>
              <li><a href="learning14"><i className="bi bi-check-all"></i>บทที่ 14</a></li>
            </ul>
          </div>
          <div className="col-lg-3 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="100">
            <Image 
              src="/img/lotus.png" 
              className="img-fluid" 
              alt=""
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
    </main>
  </div>
  )
}

export default IndexPage;
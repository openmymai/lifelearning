import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
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
              <li><a href="/secondary/lesson0201"><i className="bi bi-check-all"></i>วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="/secondary/lesson0202"><i className="bi bi-check-all"></i>การพิจารณาอินทรีย์ 6</a></li>
              <li><a href="/secondary/lesson0203"><i className="bi bi-check-all"></i>กำหนดรู้โลกและชีวิต</a></li>
              <li><a href="/secondary/lesson0204"><i className="bi bi-check-all"></i>กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง</a></li>
              <li><a href="/secondary/lesson0205"><i className="bi bi-check-all"></i>วิปัสสนาภาวนาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="/secondary/lesson0206"><i className="bi bi-check-all"></i>ฝึกตามทันกายกรรม</a></li>
              <li><a href="/secondary/lesson0207"><i className="bi bi-check-all"></i>องค์ประกอบของโลกและชีวิต</a></li>
              <li><a href="/secondary/lesson0208"><i className="bi bi-check-all"></i>วิปัสสนากำหนดรู้ส่วน 2 อย่าง</a></li>
              <li><a href="/secondary/lesson0209"><i className="bi bi-check-all"></i>กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6</a></li>
              <li><a href="/secondary/lesson0210"><i className="bi bi-check-all"></i>พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="/secondary/lesson0211"><i className="bi bi-check-all"></i>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน</a></li>
              <li><a href="/secondary/lesson0212"><i className="bi bi-check-all"></i>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
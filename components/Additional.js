import React from 'react';

const Additional = () => {
  return (
    <section id="additional" className="additional">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>บทวิปัสสนาภาวนาเพิ่มเติม</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">

            <ul>
              <li><a href="/third/lesson0301"><i className="bi bi-check-all"></i>ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา</a></li>
              <li><a href="/forth/lesson0401"><i className="bi bi-check-all"></i>ว่าด้วยอดีต ปัจจุบัน อนาคต</a></li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><a href="/fifth/lesson0501"><i className="bi bi-check-all"></i>ว่าด้วยปฏิจจสมุปบาท</a></li>
              <li><a href="/sixth/lesson0601"><i className="bi bi-check-all"></i>พระสุตตันตปิฎก เล่มที่ 9</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Additional;
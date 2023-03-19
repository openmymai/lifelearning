import React from 'react';

const Primary = () => {

  return (
    <section id="primary" className="primary">
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
  )
}

export default Primary;
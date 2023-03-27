import React from 'react';

const Primary = () => {

  return (
    <section id="primary" className="primary">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>บทวิปัสสนาภาวนา</h2>
        </div>

        <div className="row content">
            <h4>
              โอปะนะยิโกคือท่องจำ เอากฎธรรมชาติ 2 กฎหรือไม่เที่ยงเกิดดับไว้ในใจ<br />
              โดยเริ่มต้นที่การท่องจำ วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6
            </h4>
          <div className="col-lg-6">

            <ul>
              <li><a href="/primary/lesson0101"><i className="bi bi-check-all"></i>วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</a></li>
              <li><a href="/primary/lesson0102"><i className="bi bi-check-all"></i>บทตามทันตัวเรา</a></li>
              <li><a href="/primary/lesson0103"><i className="bi bi-check-all"></i>บทฝึกเห็นตามจริง</a></li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><a href="/primary/lesson0104"><i className="bi bi-check-all"></i>การพิจารณา อินทรีย์ 6</a></li>
              <li><a href="/primary/lesson0105"><i className="bi bi-check-all"></i>การพิจารณา อินทรีย์ 6 และขันธ์ 5</a></li>
              <li><a href="/primary/lesson0106"><i className="bi bi-check-all"></i>ฝึกเอาความจริงไปใช้</a></li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="section-title">
            <h2><a href="https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1">Subscribe <i className="bi bi-youtube" /></a></h2>
          </div>
          <div className="col-sm">
            <iframe
              src="https://youtube.com/embed/LsG1PZPvc58"
              title="Embed vdo"
              allowFullScreen
            />
          </div>

          <div className="col-sm">
            <iframe
              src="https://youtube.com/embed/7dkxl-u8I3w"
              title="Embed vdo"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Primary;
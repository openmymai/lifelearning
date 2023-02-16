import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0205 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'หูได้ยินเสียง โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'จมูกได้กลิ่น โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'ลิ้นได้รส โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'กายสัมผัส โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'ใจคิดนึก โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nตัวฉัน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nเวทนา สัญญา สังขาร วิญญาณ\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน'
      ],
      typeSpeed: 60,
      fadeOut: true,
      fadeOutDelay: 0,
      loop: true,
    };

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])
  return (
    <div>
      <section id="hero2" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div>
            <button type="button" className="btn btn-primary me-2" onClick={() => typed.current.toggle()}>
              <i className="bi bi-pause-fill" />
            </button>
            {/*
            <button type="button" className="btn btn-primary me-2" onClick={() => typed.current.start()}>Start</button>
            <button type="button" className="btn btn-primary me-2" onClick={() => typed.current.stop()}>Stop</button>
            */}
            <button type="button" className="btn btn-primary me-5" onClick={() => typed.current.reset()}>
              <i className="bi bi-x-lg" />
            </button>
            <h2 style={{display: 'inline-block'}}>วิปัสสนาภาวนาขันธ์ 5 อินทรีย์ 6</h2>
          </div>
          <div className="praise_container">
            <h2>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lesson0205;
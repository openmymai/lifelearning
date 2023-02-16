import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0210 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูปโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'หูได้ยินเสียงโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'จมูกได้กลิ่นโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'ลิ้นได้รสโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'กายสัมผัสโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'ใจคิดนึกโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nตัวฉันโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตไม่ว่า\nเป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน'
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
            <a href="/lesson0211">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>พิจารณาขันธ์ 5 อินทรีย์ 6 (ยถาภูตญาณทัสสนะ + ดับไม่เหลือ)</h2>
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

export default Lesson0210;
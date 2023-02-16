import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning04 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ไม่เที่ยงเกิดดับ\nตัวฉันผลต่อเนื่องของโลกและชีวิต\nเกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nทุกสิ่งทุกอย่าง\nเป็นธรรมชาติ\nและกฎธรรมชาติ 2 กฎ\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nสิ่งทั้งปวงโลกและชีวิตผลต่อเนื่อง\nเกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nมโนกรรมความคิด\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nวจีกรรมคำพูด\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nกายกรรมการเคลื่อนไหว\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ'
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
            <h2 style={{display: 'inline-block'}}></h2>
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

export default Learning04;
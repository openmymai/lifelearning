import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0309 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ถ้ามีคนพึงถามอย่างนี้ว่า\nธรรมทั้งปวงมีอะไรเป็นมูล^500\nธรรมทั้งปวงมีอะไรเป็นแดนเกิด^500\nธรรมทั้งปวงมีอะไรเป็นสมุทัย^500\nธรรมทั้งปวงมีอะไรเป็นที่ประชุมลง^500\nธรรมทั้งปวงมีอะไรเป็นประมุข^500\nธรรมทั้งปวงมีอะไรเป็นใหญ่^500\nธรรมทั้งปวงมีอะไรเป็นยิ่งกว่า^500\nธรรมทั้งปวงมีอะไรเป็นแก่นสาร^500\nให้ตอบอย่างนี้ว่า\nธรรมทั้งปวงมีอะไรเป็นมูล^500\nมีฉันทะเป็นมูล^500\nธรรมทั้งปวงมีอะไรเป็นแดนเกิด^500\nมีมนสิการเป็นแดนเกิด^500\nธรรมทั้งปวงมีอะไรเป็นสมุทัย^500\nมีผัสสะเป็นสมุทัย^500\nธรรมทั้งปวงมีอะไรเป็นที่ประชุมลง^500\nมีเวทนาเป็นที่ประชุมลง^500\nธรรมทั้งปวงมีอะไรเป็นประมุข^500\nมีสมาธิเป็นประมุข^500\nธรรมทั้งปวงมีอะไรเป็นใหญ่^500\nมีสติเป็นใหญ่^500\nธรรมทั้งปวงมีอะไรเป็นยิ่งกว่า^500\nมีปัญญาเป็นยิ่ง^500\nธรรมทั้งปวงมีอะไรเป็นแก่นสาร^500\nมีวิมุติเป็นแก่นสาร',
        'พระพุทธเจ้าตรัสไว้ว่า\nธรรมเป็นที่สิ้นอาสวะ 10 ประการ^500\nธรรม 10 ประการนี้\nอันบุคคลเจริญแล้วทำให้มากแล้ว^500\nย่อมเป็นไปเพื่อความสิ้นไป\nแห่งอาสวะทั้งหลาย^500\nธรรม 10 ประการเป็นไฉน^500\nคือสัมมาทิฏฐิ\nสัมมาสังกัปปะ\nสัมมาวาจา^500\nสัมมากัมมันตะ\nสัมมาอาชีวะ\nสัมมาวายามะ^500\nสัมมาสติ\nสัมมาสมาธิ\nสัมมาญาณะ\nสัมมาวิมุติ^500\nธรรม 10 ประการนี้\nอันบุคคลเจริญแล้วทำให้มากแล้ว^500\nย่อมเป็นไปเพื่อความสิ้นไป^500\nแห่งอาสวะทั้งหลาย',
        'พระพุทธเจ้าตรัสไว้ว่า\nการจักแสดงสิ่งที่ดี\nและสิ่งที่ไม่ดีแก่เธอทั้งหลาย^500\nสิ่งที่ไม่ดีเป็นไฉน^500\nคือมิจฉาทิฏฐิ ความเห็นผิด^500\nมิจฉาสังกัปปะ ความดำริผิด^500\nมิจฉาวาจา เจรจาผิด^500\nมิจฉากัมมันตะ การงานผิด^500\nมิจฉาอาชีวะ เลี้ยงชีพผิด^500\nมิจฉาวายามะ ความพยายามผิด^500\nมิจฉาสติ ความระลึกผิด^500\nมิจฉาสมาธิ ตั้งใจผิด^500\nมิจฉาญาณะ รู้ผิด^500\nมิจฉาวิมุติ หลุดพ้นผิด^500\nนี้เรียกว่าสิ่งที่ไม่ดี',
        'ก็สิ่งที่ดีเป็นไฉน^500\nคือสัมมาทิฏฐิ ความเห็นชอบ^500\nสัมมาสังกัปปะ ความดำริชอบ^500\nสัมมาวาจา เจรจาชอบ^500\nสัมมากัมมันตะ การงานชอบ^500\nสัมมาอาชีวะ เลี้ยงชีพชอบ^500\nสัมมาวายามะ ความเพียรชอบ^500\nสัมมาสติ ระลึกชอบ^500\nสัมมาสมาธิ ตั้งใจชอบ^500\nสัมมาญาณะ ความรู้ชอบ^500\nสัมมาวิมุติ ความหลุดพ้นชอบ^500\nนี้เรียกว่าสิ่งที่ดี'      
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
      <section id="hero2" className="d-flex">
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
            <a href="/lesson0310">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ถ้ามีคนพึงถามอย่างนี้ว่า</h2>
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

export default Lesson0309;
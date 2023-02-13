import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0404 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'สัมโพธสูตรที่ 1\nดูกรภิกษุทั้งหลาย\nก่อนการตรัสรู้\nเมื่อเรายังเป็นโพธิสัตว์\nยังไม่ได้ตรัสรู้\nได้มีความคิดดังนี้ว่า\nอะไรเป็นคุณอะไรเป็นโทษ\nอะไรเป็นความสลัดออกแห่งจักษุ ฯลฯ\nแห่ง​หู ฯลฯ\nแห่งจมูก ฯลฯ\nแห่งลิ้น ฯลฯ\nแห่งกาย ฯลฯ\nอะไรเป็นคุณอะไรเป็นโทษ\nอะไรเป็นความสลัดออกแห่งใจ\nดูกรภิกษุทั้งหลาย\nเราได้มีความคิดดังนี้ว่า\nสุขโสมนัสเกิดขึ้นเพราะอาศัยจักษุ\nนี้เป็นคุณของจักษุ\nจักษุเป็นของไม่เที่ยงเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา\nนี้เป็นโทษของจักษุ\nการกำจัดการละฉันทราคะในจักษุ\nนี้เป็นความสลัดออกแห่งจักษุ ฯลฯ\nสุขโสมนัสที่เกิดขึ้นเพราะอาศัยใจ\nนี้เป็นคุณแห่งใจ\nใจมีสภาพไม่เที่ยงเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา\nนี้เป็นโทษแห่งใจ\nการกำจัดฉันทราคะในใจ\nนี้เป็นความสลัดออกแห่งใจ\nดูกรภิกษุทั้งหลาย\nเรายังไม่รู้ตามความเป็นจริง\nซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้\nโดยเป็นคุณ\nซึ่งโทษโดยความเป็นโทษ\nและซึ่งความสลัดออก\nโดยเป็นความสลัดออกอย่างนี้เพียงใด\nเราก็ยังไม่ปฏิญาณว่าได้ตรัสรู้\nซึ่งอนุตรสัมมาสัมโพธิญาณในโลก\nพร้อมเทวโลก มารโลก พรหมโลก\nในหมู่สัตว์\nพร้อมทั้งสมณพราหมณ์เทวดา\nและมนุษย์เพียงนั้น\nเมื่อใดเราได้รู้ตามความเป็นจริง\nซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้\nโดยเป็นคุณ\nซึ่งโทษโดยความเป็นโทษ\nและซึ่งความสลัดออก\nโดยเป็นความสลัดออกอย่างนี้\nเมื่อนั้นเราจึงปฏิญาณว่าได้ตรัสรู้\nซึ่งอนุตตรสัมมาสัมโพธิญาณในโลก\nพร้อมเทวโลก มารโลก พรหมโลก\nในหมู่สัตว์\nพร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์\nก็ญาณทัสนะเกิดขึ้นแล้วแก่เราว่า\nความหลุดพ้นของเราไม่กำเริบ\nชาตินี้มีในที่สุดบัดนี้ภพใหม่ไม่มี'
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
              <i class="bi bi-x-lg" />
            </button>
            <h2 style={{display: 'inline-block'}}>สัมโพธสูตรที่ 1</h2>
          </div>
          <div>
            <h2>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lesson0404;
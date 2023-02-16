import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0404 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'สัมโพธสูตรที่ 1^500\nดูกรภิกษุทั้งหลาย^500\nก่อนการตรัสรู้^500\nเมื่อเรายังเป็นโพธิสัตว์^500\nยังไม่ได้ตรัสรู้^500\nได้มีความคิดดังนี้ว่า^500\nอะไรเป็นคุณอะไรเป็นโทษ^500\nอะไรเป็นความสลัดออกแห่งจักษุ ฯลฯ^500\nแห่ง​หู ฯลฯ^500\nแห่งจมูก ฯลฯ^500\nแห่งลิ้น ฯลฯ^500\nแห่งกาย ฯลฯ^500\nอะไรเป็นคุณอะไรเป็นโทษ^500\nอะไรเป็นความสลัดออกแห่งใจ^500\nดูกรภิกษุทั้งหลาย^500\nเราได้มีความคิดดังนี้ว่า^500\nสุขโสมนัสเกิดขึ้นเพราะอาศัยจักษุ^500\nนี้เป็นคุณของจักษุ^500\nจักษุเป็นของไม่เที่ยงเป็นทุกข์^500\nมีความแปรปรวนเป็นธรรมดา^500\nนี้เป็นโทษของจักษุ^500\nการกำจัดการละฉันทราคะในจักษุ^500\nนี้เป็นความสลัดออกแห่งจักษุ ฯลฯ^500\nสุขโสมนัสที่เกิดขึ้นเพราะอาศัยใจ^500\nนี้เป็นคุณแห่งใจ^500\nใจมีสภาพไม่เที่ยงเป็นทุกข์^500\nมีความแปรปรวนเป็นธรรมดา^500\nนี้เป็นโทษแห่งใจ^500\nการกำจัดฉันทราคะในใจ^500\nนี้เป็นความสลัดออกแห่งใจ^500\nดูกรภิกษุทั้งหลาย^500\nเรายังไม่รู้ตามความเป็นจริง^500\nซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้^500\nโดยเป็นคุณ^500\nซึ่งโทษโดยความเป็นโทษ^500\nและซึ่งความสลัดออก^500\nโดยเป็นความสลัดออกอย่างนี้เพียงใด^500\nเราก็ยังไม่ปฏิญาณว่าได้ตรัสรู้^500\nซึ่งอนุตรสัมมาสัมโพธิญาณในโลก^500\nพร้อมเทวโลก มารโลก พรหมโลก^500\nในหมู่สัตว์^500\nพร้อมทั้งสมณพราหมณ์เทวดา^500\nและมนุษย์เพียงนั้น^500\nเมื่อใดเราได้รู้ตามความเป็นจริง^500\nซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้^500\nโดยเป็นคุณ^500\nซึ่งโทษโดยความเป็นโทษ^500\nและซึ่งความสลัดออก^500\nโดยเป็นความสลัดออกอย่างนี้^500\nเมื่อนั้นเราจึงปฏิญาณว่าได้ตรัสรู้^500\nซึ่งอนุตตรสัมมาสัมโพธิญาณในโลก^500\nพร้อมเทวโลก มารโลก พรหมโลก^500\nในหมู่สัตว์^500\nพร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์^500\nก็ญาณทัสนะเกิดขึ้นแล้วแก่เราว่า^500\nความหลุดพ้นของเราไม่กำเริบ^500\nชาตินี้มีในที่สุดบัดนี้ภพใหม่ไม่มี'
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
            <h2 style={{display: 'inline-block'}}>สัมโพธสูตรที่ 1</h2>
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

export default Lesson0404;
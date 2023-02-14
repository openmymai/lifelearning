import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0405 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'โนอัสสาสูตรที่ 2^500\nดูกรภิกษุทั้งหลาย^500\nถ้าคุณแห่งรูปจักไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nก็จะไม่พึงกำหนัดในรูป^500\nแต่เพราะคุณของรูปมีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nจึงกำหนัดในรูป^500\nถ้าโทษแห่งรูปไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nก็จะไม่พึงเบื่อหน่ายในรูป^500\nแต่เพราะโทษแห่งรูปมีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nจึงเบื่อหน่ายในรูป^500\nถ้าความสลัดออกแห่งรูป^500\nจักไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nก็จะไม่พึงสลัดออกจากรูป^500\nแต่เพราะความสลัดออกแห่งรูปมีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nจึงสลัดออกแห่งรูป ฯลฯ^500\nแห่งเสียง ฯลฯ^500\nแห่งกลิ่น ฯลฯ^500\nแห่งรส ฯลฯ^500\nแห่งโผฏฐัพพะ ฯลฯ',
        'ถ้าคุณแห่งธรรมารมณ์^500\nจักไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nไม่พึงกำหนัดในธรรมารมณ์^500\nแต่เพราะคุณแห่งธรรมารมณ์มีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nพึงกำหนัดในธรรมารมณ์^500\nถ้าโทษแห่งธรรมารมณ์^500\nจักไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nก็ไม่พึงเบื่อหน่ายในธรรมารมณ์^500\nแต่เพราะโทษแห่งธรรมารมณ์มีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nจึงเบื่อหน่ายในธรรมารมณ์^500\nถ้าความสลัดออก^500\nจากธรรมารมณ์จักไม่มีแล้วไซร้^500\nสัตว์ทั้งหลาย^500\nก็จะไม่พึงสลัดออกจากธรรมารมณ์^500\nแต่เพราะความสลัดออก^500\nจากธรรมารมณ์มีอยู่^500\nฉะนั้นสัตว์ทั้งหลาย^500\nจึงสลัดออกจากธรรมารมณ์',
        'ดูกรภิกษุทั้งหลาย^500\nสัตว์ทั้งหลาย^500\nยังไม่รู้ตามความเป็นจริง^500\nซึ่งคุณแห่งอายตนะภายนอก 6 เหล่านี้^500\nโดยเป็นคุณ^500\nซึ่งโทษโดยความเป็นโทษ^500\nซึ่งความสลัดออก^500\nโดยเป็นความสลัดออกเพียงใด^500\nสัตว์ทั้งหลายก็ยังเป็นผู้ไม่ออกไป^500\nพรากไป^500\nหลุดพ้นจากโลก^500\nพร้อมเทวโลก มารโลก พรหมโลก^500\nจากหมู่สัตว์^500\nพร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์^500\nมีใจหาเขตแดนไม่ได้อยู่เพียงนั้น^500\nแต่เมื่อใดสัตว์ทั้งหลายได้รู้ตามความเป็นจริง^500\nซึ่งคุณแห่งอายตนะ 6 เหล่านี้^500\nโดยเป็นคุณ^500\nซึ่งโทษโดยความเป็นโทษ^500\nซึ่งความสลัดออก^500\nโดยเป็นความสลัดออก^500\nเมื่อนั้นสัตว์ทั้งหลายก็เป็นผู้ออกไป^500\nหลุดพ้นไปจากโลก^500\nพร้อมทั้งเทวโลก มารโลก พรหมโลก^500\nจากหมู่สัตว์^500\nพร้อมทั้งสมณพราหมณ์^500\nเทวดาและมนุษย์^500\nมีใจอันหาเขตแดนมิได้อยู่'
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
            <h2 style={{display: 'inline-block'}}>โนอัสสาสูตรที่ 2</h2>
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

export default Lesson0405;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0310 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระพุทธเจ้าตรัสไว้ว่า\nเมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว\nทำให้มากแล้ว^500\nทำให้เป็นดุจญาณ^500\nทำให้เป็นที่ตั้งให้ตั้งมั่นโดยลำดับ^500\nสั่งสมดีแล้ว\nปรารถนาดีแล้ว^500\nพึงหวังอานิสงส์ 11 ประการ^500\n11 ประการเป็นไฉน^500\nคือย่อมหลับเป็นสุข^500\nย่อมตื่นเป็นสุข^500\nย่อมไม่ฝันลามก^500\nย่อมเป็นที่รักของมนุษย์ทั้งหลาย^500\nย่อมเป็นที่รักของอมนุษย์ทั้งหลาย^500\nเทวดาทั้งหลายย่อมรักษา^500\nไฟ ยาพิษ\nหรือศาสตราย่อมไม่กล้ำกลายได้^500\nจิตย่อมตั้งมั่นได้เร็ว^500\nสีหน้าผ่องใส^500\nเป็นผู้ไม่หลงไหลทำกาละ^500\nเมื่อไม่แทงตลอด^500\nคุณยิ่งย่อมเป็นผู้เข้าถึงพรหมโลก',
        'เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว^500\nเจริญแล้วทำให้มากแล้ว^500\nทำให้เจริญดุจญาณ^500\nทำให้ตั้งมั่นโดยลำดับ^500\nสั่งสมดีแล้ว\nปรารถนาดีแล้ว^500\nพึงหวังอานิสงส์ 11 ประการฉะนี้แล'
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
            <a href="/lesson0311">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>อานิสงส์ของเมตตา</h2>
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

export default Lesson0310;
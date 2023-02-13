import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0310 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระพุทธเจ้าตรัสไว้ว่า\nเมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว\nทำให้มากแล้ว\nทำให้เป็นดุจญาณ\nทำให้เป็นที่ตั้งให้ตั้งมั่นโดยลำดับ\nสั่งสมดีแล้ว\nปรารถนาดีแล้ว\nพึงหวังอานิสงส์ 11 ประการ\n11 ประการเป็นไฉน\nคือย่อมหลับเป็นสุข\nย่อมตื่นเป็นสุข\nย่อมไม่ฝันลามก\nย่อมเป็นที่รักของมนุษย์ทั้งหลาย\nย่อมเป็นที่รักของอมนุษย์ทั้งหลาย\nเทวดาทั้งหลายย่อมรักษา\nไฟ ยาพิษ\nหรือศาสตราย่อมไม่กล้ำกลายได้\nจิตย่อมตั้งมั่นได้เร็ว\nสีหน้าผ่องใส\nเป็นผู้ไม่หลงไหลทำกาละ\nเมื่อไม่แทงตลอด\nคุณยิ่งย่อมเป็นผู้เข้าถึงพรหมโลก',
        'เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว\nเจริญแล้วทำให้มากแล้ว\nทำให้เจริญดุจญาณ\nทำให้ตั้งมั่นโดยลำดับ\nสั่งสมดีแล้ว\nปรารถนาดีแล้ว\nพึงหวังอานิสงส์ 11 ประการฉะนี้แล'
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
            <h2 style={{display: 'inline-block'}}>อานิสงส์ของเมตตา</h2>
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

export default Lesson0310;
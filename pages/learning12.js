import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning12 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ไม่เที่ยงเกิดดับ\nตัวฉันเกิดขึ้นตั้งอยู่ดับไป\nไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nตัวฉันไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nตัวฉันว่างเปล่าจากตนและของของตน\nไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nไม่ควรไปยึดมั่นถือมั่นว่า\nตัวฉันเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ'
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
            <h2 style={{display: 'inline-block'}}></h2>
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

export default Learning12;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning11 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        '(เอาไปทำซ้ำ และฝึกกำหนดรู้)\nไม่เที่ยงเกิดดับ\nชีวิตไม่เที่ยงเกิดดับ\n(กำหนดรู้ชีวิตคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nชีวิตไม่เที่ยงเกิดดับ\n(กำหนดรู้ชีวิตคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nชีวิตไม่เที่ยงเกิดดับ\n(กำหนดรู้ชีวิตคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nชีวิตไม่เที่ยงเกิดดับ\n(กำหนดรู้ชีวิตคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nชีวิตไม่เที่ยงเกิดดับ\n(กำหนดรู้ชีวิตคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)^500\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\n(กำหนดรู้ตัวฉันคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\n(กำหนดรู้ตัวฉันคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\n(กำหนดรู้ตัวฉันคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\n(กำหนดรู้ตัวฉันคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\n(กำหนดรู้ตัวฉันคือโลกและชีวิต\nไม่เที่ยงเกิดดับ)'
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
            <a href="/learning12">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
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

export default Learning11;
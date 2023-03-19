import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning13 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'เดิน\nไม่เที่ยงเกิดดับ\nเดินเป็นธรรมชาติ\nเดินเสร็จเป็นกฎธรรมชาติ 2 กฎ\nไม่เที่ยงเกิดดับ^500\nนั่ง\nไม่เที่ยงเกิดดับ\nนั่งเป็นธรรมชาติ\nนั่งเสร็จเป็นกฎธรรมชาติ 2 กฎ\nไม่เที่ยงเกิดดับ^500\nยืน\nไม่เที่ยงเกิดดับ\nยืนเป็นธรรมชาติ\nยืนเสร็จเป็นกฎธรรมชาติ 2 กฎ\nไม่เที่ยงเกิดดับ^500\nนอน\nไม่เที่ยงเกิดดับ\nนอนเป็นธรรมชาติ\nนอนเสร็จเป็นกฎธรรมชาติ 2 กฎ\nไม่เที่ยงเกิดดับ'
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
            <a href="/learning14">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>บทที่ 13</h2>
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

export default Learning13;
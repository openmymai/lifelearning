import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0401 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป^500\nรูปไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nหูได้ยินเสียง^500\nเสียงไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nจมูกได้กลิ่น^500\nกลิ่นไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nลิ้นได้รส^500\nรสไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nกายสัมผัส^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nใจคิดนึก^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ'
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
            <h2 style={{display: 'inline-block'}}>พิจารณาขันธ์ 5 อินทรีย์ 6</h2>
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

export default Lesson0401;
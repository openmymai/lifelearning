import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0313 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ว่าด้วยเวทนา 3 เกิดแต่ผัสสะ^500\nมีผัสสะเป็นมูล^500\nพระพุทธเจ้าตรัสไว้ว่า^500\nเวทนา 3 นี้เกิดแต่ผัสสะ^500\nมีภาษาเป็นมูลมีผัสสะเป็นเหตุ^500\nมีผัสสะเป็นปัจจัย^500\nเวทนา 3 เป็นไฉน^500\nเวทนา 3 คือ^500\nสุขเวทนา^500\nทุกขเวทนา^500\nไม่ทุกข์ไม่สุขเวทนา',
        'สุขเวทนาย่อมเกิดขึ้น^500\nเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งสุขเวทนา^500\nความเสวยอารมณ์^500\nอันเกิดแต่ผัสสะนั้นชื่อว่าสุขเวทนา^500\nเกิดขึ้นเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งสุขเวทนานั้น^500\nย่อมดับไปสงบไป^500\nเพราะผัสสะอันเป็นที่ตั้ง^500\nแห่งสุขเวทนานั้นแลดับไป',
        'ทุกขเวทนาย่อมเกิดขึ้น^500\nเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งทุกขเวทนา^500\nความเสวยอารมณ์^500\nอันเกิดแต่ผัสสะนั้นชื่อว่าทุกขเวทนา^500\nเกิดขึ้นเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งทุกขเวทนา^500\nนั้นย่อมดับไปสงบไป^500\nเพราะผัสสะอันเป็นที่ตั้ง^500\nแห่งทุกขเวทนานั้นแลดับไป',
        'ไม่ทุกข์ไม่สุขเวทนา^500\nย่อมเกิดขึ้นเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา^500\nความเสวยอารมณ์^500\nอันเกิดแต่ผัสสะนั้นชื่อว่า^500\nไม่ทุกข์ไม่สุขเวทนา^500\nเกิดขึ้นเพราะอาศัยผัสสะ^500\nอันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา^500\nนั้นย่อมดับไปสงบไป^500\nเพราะผัสสะอันเป็นที่ตั้ง^500\nแห่งไม่ทุกข์ไม่สุขเวทนานั้นแลดับไป^500\nเพราะไม้สองอันเสียดสีกัน^500\nเพราะการเสียดสีกัน^500\nเกิดไออุ่นจึงเกิดไฟ^500\nเพราะแยกไม้สองอันนั้น^500\nแลออกจากกัน^500\nไออุ่นที่เกิดขึ้นเพราะการเสียดสีนั้น^500\nย่อมดับไป สงบไปฉันใด^500\nเวทนา 3 นี้ก็ฉันนั้นเหมือนกันแล^500\nเกิดแต่ผัสสะ^500\nมีผัสสะเป็นเหตุ^500\nมีผัสสะเป็นปัจจัย^500\nเวทนาอันเกิดแต่ผัสสะเกิดขึ้น^500\nเพราะอาศัยผัสสะที่เกิดแต่ปัจจัยนั้น^500\nย่อมดับไปเพราะผัสสะที่เกิดปัจจัยนั้นดับไป'
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
            <h2 style={{display: 'inline-block'}}>ว่าด้วยควรว่าด้วยเวทนา 3</h2>
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

export default Lesson0313;
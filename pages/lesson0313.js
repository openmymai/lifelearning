import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0313 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ว่าด้วยเวทนา 3 เกิดแต่ผัสสะ\nมีผัสสะเป็นมูล\nพระพุทธเจ้าตรัสไว้ว่า\nเวทนา 3 นี้เกิดแต่ผัสสะ\nมีภาษาเป็นมูลมีผัสสะเป็นเหตุ\nมีผัสสะเป็นปัจจัย\nเวทนา 3 เป็นไฉน\nเวทนา 3 คือ\nสุขเวทนา\nทุกขเวทนา\nไม่ทุกข์ไม่สุขเวทนา',
        'สุขเวทนาย่อมเกิดขึ้น\nเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งสุขเวทนา\nความเสวยอารมณ์\nอันเกิดแต่ผัสสะนั้นชื่อว่าสุขเวทนา\nเกิดขึ้นเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งสุขเวทนานั้น\nย่อมดับไปสงบไป\nเพราะผัสสะอันเป็นที่ตั้ง\nแห่งสุขเวทนานั้นแลดับไป',
        'ทุกขเวทนาย่อมเกิดขึ้น\nเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งทุกขเวทนา\nความเสวยอารมณ์\nอันเกิดแต่ผัสสะนั้นชื่อว่าทุกขเวทนา\nเกิดขึ้นเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งทุกขเวทนา\nนั้นย่อมดับไปสงบไป\nเพราะผัสสะอันเป็นที่ตั้ง\nแห่งทุกขเวทนานั้นแลดับไป',
        'ไม่ทุกข์ไม่สุขเวทนา\nย่อมเกิดขึ้นเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา\nความเสวยอารมณ์\nอันเกิดแต่ผัสสะนั้นชื่อว่า\nไม่ทุกข์ไม่สุขเวทนา\nเกิดขึ้นเพราะอาศัยผัสสะ\nอันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา\nนั้นย่อมดับไปสงบไป\nเพราะผัสสะอันเป็นที่ตั้ง\nแห่งไม่ทุกข์ไม่สุขเวทนานั้นแลดับไป\nเพราะไม้สองอันเสียดสีกัน\nเพราะการเสียดสีกัน\nเกิดไออุ่นจึงเกิดไฟ\nเพราะแยกไม้สองอันนั้น\nแลออกจากกัน\nไออุ่นที่เกิดขึ้นเพราะการเสียดสีนั้น\nย่อมดับไป สงบไปฉันใด\nเวทนา 3 นี้ก็ฉันนั้นเหมือนกันแล\nเกิดแต่ผัสสะ\nมีผัสสะเป็นเหตุ\nมีผัสสะเป็นปัจจัย\nเวทนาอันเกิดแต่ผัสสะเกิดขึ้น\nเพราะอาศัยผัสสะที่เกิดแต่ปัจจัยนั้น\nย่อมดับไปเพราะผัสสะที่เกิดปัจจัยนั้นดับไป'
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
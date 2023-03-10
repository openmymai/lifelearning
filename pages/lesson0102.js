import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0102 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nกายสัมผัส\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nใจคิดนึก\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ',
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nรูปเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nเสียงเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nกลิ่นเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nรสเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nกายสัมผัส\nสัมผัสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสัมผัสเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nใจคิดนึก\nความคิดไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nความคิดเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย',
        'ใบหน้าไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nใบหน้าเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nคอไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nคอเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nอกไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nอกเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nท้องไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nท้องเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nแขนไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nแขนเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nขาไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nขาเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย',
        'เสื้อไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nเสื้อเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nกระดุมไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nกระดุมเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nกางเกงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nกางเกงเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nซิปไม่เที่ยงเกิดตับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nซิปเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตะขอไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nตะขอเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nถุงเท้าไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nถุงเท้าเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย'
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
            <a href="/lesson0103">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ตามทันตัวเรา</h2>
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

export default Lesson0102;
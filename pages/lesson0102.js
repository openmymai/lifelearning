import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0102 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกายสัมผัส\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nใจคิดนึก\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ',
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nรูปเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nเสียงเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกลิ่นเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nรสเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nกายสัมผัส\nสัมผัสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสัมผัสเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nใจคิดนึก\nความคิดไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nความคิดเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย',
        'ใบหน้าไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nใบหน้าเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nคอไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nคอเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nอกไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nอกเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nท้องไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nท้องเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nแขนไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nแขนเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nขาไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nขาเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย',
        'เสื้อไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nเสื้อเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nกระดุมไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกระดุมเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nกางเกงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกางเกงเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nซิปไม่เที่ยงเกิดตับ\nตัวฉันไม่เที่ยงเกิดดับ\nซิปเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตะขอไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตะขอเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nถุงเท้าไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nถุงเท้าเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย'
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
            <h2 style={{display: 'inline-block'}}>ตามทันตัวเรา</h2>
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

export default Lesson0102;
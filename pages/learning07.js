import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning07 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ไม่เที่ยงเกิดดับ\nตาเห็นรูปเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ หูได้ยินเสียง จมูกได้กลิ่น\nลิ้นได้รส กายสัมผัส ใจคิดนึก\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nหูได้ยินเสียงเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ ตาเห็นรูป จมูกได้กลิ่น\nลิ้นได้รส กายสัมผัส ใจคิดนึก\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nจมูกได้กลิ่นเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ ตาเห็นรูป หูได้ยินเสียง\nลิ้นได้รส กายสัมผัส ใจคิดนึก\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nลิ้นได้รสเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ ตาเห็นรูป หูได้ยินเสียง\nจมูกได้กลิ่น กายสัมผัส ใจคิดนึก\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nกายสัมผัสเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ ตาเห็นรูป หูได้ยินเสียง\nจมูกได้กลิ่น ลิ้นได้รส ใจคิดนึก\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nใจคิดนึกเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลายไม่เที่ยงเกิดดับ\nกำหนดรู้ ตาเห็นรูป หูได้ยินเสียง\nจมูกได้กลิ่น ลิ้นได้รส กายสัมผัส\nเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้นตั้งอยู่ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับเหมือนกัน\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ'
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

export default Learning07;
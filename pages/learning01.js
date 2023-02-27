import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning01 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'กำหนดรู้ รู้ทันสิ่งที่มากระทบสัมผัส',
        'ไม่เที่ยงเกิดดับ\nตัวฉันเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ตัวฉันคือ\nรูป เวทนา สัญญา สังขาร วิญญาณ\nเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nรูป เวทนา สัญญา สังขาร วิญญาณ\nคือกาย เวทนา จิต ธรรม\nเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nกาย เวทนา จิต ธรรม\nคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nผลต่อเนื่องของโลกและชีวิต\nคือวัตถุ สิ่งของ สัตว์ บุคคล\nเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ผลต่อเนื่องของ\nวัตถุ สิ่งของ สัตว์ บุคคล\nคือรูป เสียง กลิ่น รส โผฏฐัพพะ\nธรรมารมณ์ เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nผลต่อเนื่องของรูป เสียง\nกลิ่น รส โผฏฐัพพะ ธรรมารมณ์\nคือความพอใจ ไม่พอใจ\nเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ความพอใจ ไม่พอใจ\nคือความไม่รู้ เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ความไม่รู้\nคืออวิชชา เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nผลต่อเนื่องของอวิชชา\nคือชีวิต เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ชีวิต\nคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ ตัวฉัน\nคือรูป เวทนา สัญญา สังขาร\nวิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nรูป เวทนา สัญญา สังขาร วิญญาณ\nคือกาย เวทนา จิต ธรรม\nเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nกาย เวทนา จิต ธรรม\nคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับโลกและชีวิต\nคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ',
        'ไม่เที่ยงเกิดดับ โลกและชีวิต\nเคลื่อนไหวเกิดขึ้น ตั้งอยู่ ดับไป\nเกิดจากเหตุปัจจัยมาประชุมชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nว่างเปล่าจากตนและของของตน^500\nไม่ควรไปยึดมั่นถือมั่นถือมั่นว่า\nโลกและชีวิตเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'ไม่เที่ยงเกิดดับ\nเหตุปัจจัยของตาเห็นรูปไม่เที่ยงเกิดดับ\nตาเห็นรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของตาเห็นรูปไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของหูได้ยินเสียง\nไม่เที่ยงเกิดดับ\nหูได้ยินเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของหูได้ยินเสียง\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของจมูกได้กลิ่น\nไม่เที่ยงเกิดดับ\nจมูกได้กลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของจมูกได้กลิ่น\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของลิ้นได้รส\nไม่เที่ยงเกิดดับ\nลิ้นได้รสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของลิ้นได้รส\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของกายสัมผัส\nไม่เที่ยงเกิดดับ\nกายสัมผัสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของกายสัมผัส\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของใจคิดนึก\nไม่เที่ยงเกิดดับ\nใจคิดนึกไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของใจคิดนึก\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของมโนกรรม\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของมโนกรรม\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของวจีกรรม\nไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของวจีกรรม\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nเหตุปัจจัยของกายกรรม\nไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nผลต่อเนื่องของกายกรรม\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ'
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
            <a href="/learning02">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>บทที่ 1</h2>
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

export default Learning01;
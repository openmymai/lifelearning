import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0506 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'เทศนาสูตร^500\nว่าด้วยปฏิจจสมุปบาท^500\nข้าพเจ้าได้สดับมาอย่างนี้^500\nสมัยหนึ่งพระผู้มีพระภาค^500\nประทับอยู่ณพระเชตวัน^500\nอารามของท่านอนาถบิณฑิกเศรษฐี^500\nเขตพระนครสาวัตถี^500\nณ ที่นั้นพระผู้มีพระภาค^500\nตรัสเรียกภิกษุทั้งหลายว่า^500\nดูกรภิกษุทั้งหลาย^500\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า^500\nพระพุทธเจ้าข้า^500\nพระผู้มีพระภาคได้ตรัสพระพุทธดำรัสนี้ว่า^500\nดูกรภิกษุทั้งหลาย^500\nเราจักแสดงปฏิจจสมุปบาทแก่พวกเธอ^500\nพวกเธอจงฟังปฏิจจสมุปบาทนั้น^500\nจงใส่ใจให้ดีเถิดเราจักกล่าว^500\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว',
        'พระผู้มีพระภาคได้ตรัสว่า^500\nดูกรภิกษุทั้งหลาย^500\nก็ปฏิจจสมุปบาทเป็นไฉน^500\nดูกรภิกษุทั้งหลาย^500\nเพราะอวิชชาเป็นปัจจัยจึงมีสังขาร^500\nเพราะสังขารเป็นปัจจัยจึงมีวิญญาณ^500\nเพราะวิญญาณเป็นปัจจัยจึงมีนามรูป^500\nเพราะนามรูปเป็นปัจจัยจึงมีสฬายตนะ^500\nเพราะสฬายตนะเป็นปัจจัยจึงมีผัสสะ^500\nเพราะผัสสะเป็นปัจจัยจึงมีเวทนา^500\nเพราะเวทนาเป็นปัจจัยจึงมีตัณหา^500\nเพราะตัณหาเป็นปัจจัยจึงมีอุปาทาน^500\nเพราะอุปาทานเป็นปัจจัยจึงมีภพ^500\nเพราะภพเป็นปัจจัยจึงมีชาติ^500\nเพราะชาติเป็นปัจจัยจึงมีชรา^500\nและมรณะโสกะปริเทวะ^500\nทุกขโทมนัสและอุปายาส ^500\nความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้^500\nนี้เราเรียกว่าปฏิจจสมุปบาท',
        'ก็เพราะอวิชชานั่นแหละ^500\nดับด้วยการสำรอกโดยไม่เหลือ^500\nสังขารจึงดับ^500\nเพราะสังขารดับวิญญาณจึงดับ^500\nเพราะวิญญาณดับนามรูปจึงดับ^500\nเพราะนามรูปดับสฬายตนะจึงดับ^500\nเพราะสฬายตนะดับผัสสะจึงดับ^500\nเพราะผัสสะดับเวทนาจึงดับ^500\nเพราะเวทนาดับตัณหาจึงดับ^500\nเพราะตัณหาดับอุปาทานจึงดับ^500\nเพราะอุปาทานดับภพจึงดับ^500\nเพราะภพดับชาติจึงดับ^500\nเพราะชาติดับชราและมรณะ^500\nโสกะปริเทวะทุกขโทมนัส^500\nและอุปายาสจึงดับ^500\nความดับแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้^500\nพระผู้มีพระภาค^500\nได้ตรัสพระพุทธภาษิตนี้แล้ว^500\nภิกษุเหล่านั้นมีใจยินดีชื่นชมภาษิต^500\nของพระผู้มีพระภาคแล้ว'
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
            <a href="/lesson0507">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>เทศนาสูตร</h2>
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

export default Lesson0506;
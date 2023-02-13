import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0506 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'เทศนาสูตร\nว่าด้วยปฏิจจสมุปบาท\nข้าพเจ้าได้สดับมาอย่างนี้\nสมัยหนึ่งพระผู้มีพระภาค\nประทับอยู่ณพระเชตวัน\nอารามของท่านอนาถบิณฑิกเศรษฐี\nเขตพระนครสาวัตถี\nณ ที่นั้นพระผู้มีพระภาค\nตรัสเรียกภิกษุทั้งหลายว่า\nดูกรภิกษุทั้งหลาย\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า\nพระพุทธเจ้าข้า\nพระผู้มีพระภาคได้ตรัสพระพุทธดำรัสนี้ว่า\nดูกรภิกษุทั้งหลาย\nเราจักแสดงปฏิจจสมุปบาทแก่พวกเธอ\nพวกเธอจงฟังปฏิจจสมุปบาทนั้น\nจงใส่ใจให้ดีเถิดเราจักกล่าว\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว',
        'พระผู้มีพระภาคได้ตรัสว่า\nดูกรภิกษุทั้งหลาย\nก็ปฏิจจสมุปบาทเป็นไฉน\nดูกรภิกษุทั้งหลาย\nเพราะอวิชชาเป็นปัจจัยจึงมีสังขาร\nเพราะสังขารเป็นปัจจัยจึงมีวิญญาณ\nเพราะวิญญาณเป็นปัจจัยจึงมีนามรูป\nเพราะนามรูปเป็นปัจจัยจึงมีสฬายตนะ\nเพราะสฬายตนะเป็นปัจจัยจึงมีผัสสะ\nเพราะผัสสะเป็นปัจจัยจึงมีเวทนา\nเพราะเวทนาเป็นปัจจัยจึงมีตัณหา\nเพราะตัณหาเป็นปัจจัยจึงมีอุปาทาน\nเพราะอุปาทานเป็นปัจจัยจึงมีภพ\nเพราะภพเป็นปัจจัยจึงมีชาติ\nเพราะชาติเป็นปัจจัยจึงมีชรา\nและมรณะโสกะปริเทวะ\nทุกขโทมนัสและอุปายาส \nความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้\nย่อมมีด้วยประการอย่างนี้\nนี้เราเรียกว่าปฏิจจสมุปบาท',
        'ก็เพราะอวิชชานั่นแหละ\nดับด้วยการสำรอกโดยไม่เหลือ\nสังขารจึงดับ\nเพราะสังขารดับวิญญาณจึงดับ\nเพราะวิญญาณดับนามรูปจึงดับ\nเพราะนามรูปดับสฬายตนะจึงดับ\nเพราะสฬายตนะดับผัสสะจึงดับ\nเพราะผัสสะดับเวทนาจึงดับ\nเพราะเวทนาดับตัณหาจึงดับ\nเพราะตัณหาดับอุปาทานจึงดับ\nเพราะอุปาทานดับภพจึงดับ\nเพราะภพดับชาติจึงดับ\nเพราะชาติดับชราและมรณะ\nโสกะปริเทวะทุกขโทมนัส\nและอุปายาสจึงดับ\nความดับแห่งกองทุกข์ทั้งมวลนี้\nย่อมมีด้วยประการอย่างนี้\nพระผู้มีพระภาค\nได้ตรัสพระพุทธภาษิตนี้แล้ว\nภิกษุเหล่านั้นมีใจยินดีชื่นชมภาษิต\nของพระผู้มีพระภาคแล้ว'
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
            <h2 style={{display: 'inline-block'}}>เทศนาสูตร</h2>
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

export default Lesson0506;
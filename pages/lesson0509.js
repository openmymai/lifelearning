import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0509 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ติมพรุกขสูตร^500\nว่าด้วยสุขและทุกข์^500\nพระผู้มีพระภาค^500\nประทับอยู่ ณ พระเชตวัน^500\nอารามของท่านอนาถบิณฑิกเศรษฐี^500\nเขตพระนครสาวัตถี^500\nครั้งนั้นแลปริพาชกชื่อว่าติมพรุกขะ^500\nเข้าไปเฝ้าพระผู้มีพระภาคถึงที่ประทับ^500\nครั้นแล้วได้ปราศรัยกับพระผู้มีพระภาค^500\nครั้นผ่านการปราศรัย^500\nพอให้ระลึกถึงกันไปแล้ว^500\nจึงนั่งณที่ควรส่วนข้างหนึ่ง^500\nครั้นแล้วติมพรุกขปริพาชก^500\nได้ทูลถามพระผู้มีพระภาคว่า^500\nติมพรุกขะทูลถามพระผู้มีพระภาคว่า^500\nข้าแต่ท่านพระโคดม^500\nสุขและพวกตนกระทำเองหรือ^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nติมพรุกขะทูลถามพระผู้มีพระภาคต่อไปว่า^500\nสุขและทุกข์ผู้อื่นกระทำให้หรือท่านพระโคดม^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nติมพรุกขะทูลถามพระผู้มีพระภาคต่อไปว่า^500\nสุขและทุกข์ตนกระทำเองด้วย^500\nผู้อื่นกระทำให้ด้วยหรือท่านพระโคดม^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nติมพรุกขะทูลถามพระผู้มีพระภาคต่อไปว่า^500\nสุขและทุกข์บังเกิดขึ้น^500\nเพราะอาศัยการที่มิใช่ตนเองกระทำ^500\nมิใช่ผู้อื่นกระทำให้หรือท่านพระโคดม^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nติมพรุกขะทูลถามพระผู้มีพระภาคต่อไปว่า^500\nสุขและทุกข์ไม่มีหรือท่านพระโคดม^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nสุขและทุกข์ไม่มีหาไม่ได้^500\nสุขและทุกข์มีอยู่ติมพรุกขะ^500\nติมพรุกขะทูลถามพระผู้มีพระภาคต่อไปว่า^500\nถ้าอย่างนั้นท่านพระโคดม^500\nย่อมไม่รู้ไม่เห็นสุขและทุกข์^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nเราย่อมไม่รู้ไม่เห็นสุขและทุกข์หาไม่ได้^500\nเรารู้เห็นสุขและทุกข์อยู่ติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่า^500\nข้าแต่ท่านพระโคดมสุขและทุกข์^500\nตนกระทำเองหรือ^500\nท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่า^500\nสุขและทุกข์ผู้อื่นกระทำให้หรือ^500\nท่านพระโคดม^500\nท่านตรัสว่า^500\nอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่า^500\nสุขและทุกข์ตนกระทำเองด้วย^500\nผู้อื่นกระทำให้ด้วยหรือท่านพระโคดม^500\nท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่าสุขและทุกข์บังเกิดขึ้น^500\nเพราะอาศัยการที่ไม่ใช่ตนเองกระทำ^500\nไม่ใช่ผู้อื่นกระทำให้หรือท่านพระโคดม^500\nท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่าสุขและทุกข์ไม่มีหรือ^500\nท่านตรัสว่าสุขและทุกข์ไม่มีหาไม่ได้^500\nสุขและทุกข์มีอยู่ติมพรุกขะ^500\nเมื่อข้าพเจ้าถามว่า^500\nถ้าอย่างนั้นท่านพระโคดม^500\nย่อมไม่รู้ไม่เห็นสุขและทุกข์^500\nท่านตรัสว่า^500\nเราย่อมไม่รู้ไม่เห็นสุขและทุกข์หาไม่ได้^500\nเราเห็นสุขและทุกข์อยู่ติมพรุกขะ^500\nท่านพระโคดมจงตรัสบอกสุขและทุกข์^500\nแก่ข้าพเจ้าขอท่านพระโคดม^500\nจงทรงแสดงสุขและทุกข์แก่ข้าพเจ้า',
        'พระผู้มีพระภาคตรัสว่า^500\nดูกรติมพรุกขะ^500\nเมื่อบุคคลถืออยู่ว่านั่นเวทนา^500\nนั่นผู้เสวยดังนี้^500\nแต่เราไม่กล่าวอย่างนี้ว่า^500\nสุขและทุกข์ตนกระทำเอง^500\nเมื่อบุคคลถูกเวทนาทิ่มแทงอยู่ว่า^500\nเวทนาอย่างหนึ่งผู้เสวยเป็นอีกคนหนึ่งดังนี้^500\nแต่เราไม่กล่าวอย่างนี้ว่า^500\nสุขและทุกข์ผู้อื่นกระทำให้^500\nดูกรติมพรุกขะตถาคตแสดงธรรม^500\nโดยสายกลาง^500\nไม่เข้าไปใกล้ส่วนสุดทั้งสองนั้นว่า^500\nเพราะอวิชชาเป็นปัจจัยจึงมีสังขาร^500\nเพราะสังขารเป็นปัจจัยจึงมีวิญญาณ^500\nความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้^500\nเพราะอวิชชานั่นแหละดับ^500\nด้วยสำรอกโดยไม่เหลือ^500\nสังขารจึงดับ^500\nเพราะสังขารดับวิญญาณจึงดับ^500\nความดับแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้^500\nพระผู้มีพระภาคตรัสอย่างนี้แล้ว^500\nติมพรุกขะปริพาชก^500\nได้กราบทูลพระผู้มีพระภาคว่า^500\nข้าแต่ท่านพระโคดม^500\nภาษิตของพระองค์แจ่มแจ้งนัก^500\nข้าแต่ท่านพระโคดม^500\nภาษิตของพระองค์แจ่มแจ้งนัก^500\nพระผู้มีพระภาค^500\nทรงประกาศธรรมโดยอเนกปริยาย^500\nเปรียบเหมือนบุคคล^500\nหงายของที่คว่ำเปิดของที่ปิด^500\nบอกทางแก่คนหลงทาง^500\nหรือตามประทีปในที่มืด^500\nด้วยประสงค์ว่าผู้มีจักษุ^500\nจักเห็นรูปฉะนั้น^500\nข้าพระองค์ขอถึงท่านพระโคดม^500\nกับทั้งพระธรรมและพระภิกษุสงฆ์^500\nเป็นสรณะ^500\nขอท่านพระโคดม^500\nจงทรงจำข้าพระองค์^500\nว่าเป็นอุบาสกถึงผู้ถึงสรณะ^500\nจนตลอดชีวิตจำเดิมแต่วันนี้เป็นต้นไป'
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
            <a href="/lesson0510">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ติมพรุกขสูตร</h2>
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

export default Lesson0509;
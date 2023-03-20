import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0511 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'สัมมสนสูตรที่ 2^500\nว่าด้วยปัจจัยให้ชราและมรณะ^500\nสมัยหนึ่งท่านพระสารีบุตร^500\nและท่านพระมหาโกฏฐิตะ^500\nอยู่ ณ ป่าอิสิปตนมฤคทายวัน^500\nเขตพระนครพาราณสี^500\nครั้งนั้นแลเป็นเวลาเย็น^500\nท่านพระมหาโกฏฐิตะ^500\nออกจากที่พักผ่อน^500\nเข้าไปหาพระสารีบุตรถึงที่อยู่^500\nได้ปราศรัยกับท่านพระสารีบุตร^500\nครั้นผ่านการปราศรัย^500\nพอให้ระลึกถึงกันไปแล้ว^500\nจึงนั่งณที่ควรส่วนข้างหนึ่ง^500\nท่านพระมหาโกฏฐิตะ^500\nนั่งเรียบร้อยแล้ว^500\nได้กล่าวคำนี้กะท่านพระสารีบุตรว่า^500\nท่านพระมหาโกฏฐิตะถามพระสารีบุตรว่า^500\nชราและมรณะตนทำเอง^500\nผู้อื่นทำให้ ^500\nทั้งตนทำเองทั้งผู้อื่นทำให้^500\nหรือว่าชราและมรณะบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้^500\nท่านพระสารีบุตรกล่าวตอบว่า^500\nท่านโกลิตะชราและมรณะ^500\nตนทำเองก็ไม่ใช่^500\nผู้อื่นทำให้ก็ไม่ใช่^500\nทั้งต้นทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่^500\nบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่ว่าเพราะชาติเป็นปัจจัย^500\nจึงมีชราและมรณะ^500\nท่านพระมหาโกฏฐิตะถามพระสารีบุตรว่า^500\nท่านสารีบุตรชาติตนทำเอง^500\nผู้อื่นทำให้^500\nทั้งต้นทำเองทั้งผู้อื่นทำให้^500\nหรือว่าชาติบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้^500\nท่านพระสารีบุตรกล่าวตอบว่า^500\nท่านโกลิตะชาติตนทำเองก็ไม่ใช่^500\nผู้อื่นทำให้ก็ไม่ใช่^500\nทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่^500\nชาติบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่เพราะภพเป็นปัจจัยจึงมีชาติ^500\nท่านพระมหาโกฏฐิตะถามพระสารีบุตรว่า^500\nท่านสารีบุตรภพตนทำเอง^500\nอุปทานตนทำเอง^500\nตัณหาตนทำเอง^500\nเวทนาตนทำเอง^500\nผัสสะตนทำเองทำเอง^500\nนามรูปตนทำเอง^500\nผู้อื่นทำให้^500\nทั้งตนทำเองทั้งผู้อื่นทำให้^500\nหรือว่านามรูปบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้^500\nท่านพระสารีบุตรกล่าวตอบว่าท่านโกฏฐิตะ^500\nนามรูปตนทำเองก็ไม่ใช่^500\nผู้อื่นทำให้ก็ไม่ใช่^500\nทั้งต้นทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่^500\nนามรูปบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป^500\nท่านพระมหาโกฏฐิตะถามพระสารีบุตรว่า^500\nท่านสารีบุตรวิญญาณตนทำเอง^500\nผู้อื่นทำให้^500\nทั้งตนทำเอง^500\nทั้งผู้อื่นทำให้^500\nหรือว่าวิญญาณบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้^500\nท่านพระสารีบุตรกล่าวตอบว่าท่านโกฏฐิตะ^500\nวิญญาณตนทำเองก็ไม่ใช่^500\nผู้อื่นทำให้ก็ไม่ใช่^500\nทั้งตนเองและผู้อื่นทำให้ก็ไม่ใช่^500\nวิญญาณบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่เพราะนามรูปเป็นปัจจัยจึงมีวิญญาณ^500\nเราทั้งหลายเพิ่งรู้ชัดภาษิต^500\nของท่านสารีบุตรในบัดนี้เอง^500\nอย่างนี้ว่าท่านโกฏฐิตะ^500\nนามรูปตนทำเองก็ไม่ใช่^500\nผู้อื่นทำให้ก็ไม่ใช่^500\nทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่^500\nบังเกิดขึ้น^500\nเพราะอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป^500\nอนึ่งเราทั้งหลายรู้ชัดภาษิต^500\nของท่านพระสารีบุตรในบัดนี้เอง^500\nอย่างนี้ว่าท่านโกฏฐิตะ^500\nวิญญาณตนทำเองก็ไม่ใช่^500\nผู้อื่นก็ทำให้ก็ไม่ใช่^500\nบังเกิดขึ้นเพราะ^500\nอาศัยตนไม่ได้ทำเอง^500\nผู้อื่นไม่ได้ทำให้ก็ไม่ใช่^500\nแต่เพราะนามรูปเป็นปัจจัย^500\nจึงมีวิญญาณ',
        'ท่านสารีบุตรก็เนื้อความของภาษิตนี้^500\nเราทั้งหลายจะพึงเห็นได้อย่างไร^500\nดูกรอาวุโสถ้าเช่นนั้น^500\nผมจะเปรียบให้ท่านฟัง^500\nในโลกนี้บุรุษผู้ฉลาดบางพวก^500\nย่อมรู้ชัดเนื้อความของภาษิต^500\nได้แม้ด้วยอุปมา^500\nอาวุโสไม้อ้อ 2 กำพึงตั้งอยู่ได้^500\nเพราะต่างอาศัยซึ่งกันและกันฉันใด^500\nเพราะนามรูปเป็นปัจจัยจึงมีวิญญาณ^500\nเพราะวิญญาณเป็นปัจจัยจึงมีนามรูป^500\nท่อนามรูปเป็นปัจจัยจึงมีสฬายตนะ^500\nสฬายตนะเป็นปัจจัยจึงมีผัสสะ^500\nความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้ฉันนั้นแล',
        'ถ้าไม้อ้อ 2 กำนั้นพึงเอาออกเสียกำหนึ่ง^500\nอีกคำหนึ่งก็ล้มไป^500\nถ้าดึงอีกกำหนึ่งออก^500\nอีกคำหนึ่งก็ล้มไปฉันใด^500\nเพราะนามรูปดับวิญญาณจึงดับ^500\nเพราะวิญญาณดับนามรูปจึงดับ^500\nเพราะนามรูปดับสฬายตนะจึงดับ^500\nเพราะสฬายตนะดับผัสสะจึงดับ^500\nความดับแห่งกองทุกข์ทั้งมวลนี้^500\nย่อมมีด้วยประการอย่างนี้ฉันนั้นแล^500\nน่าอัศจรรย์ท่านสารีบุตรไม่เคยมีมา^500\nท่านสารีบุตรเท่าที่ท่านสารีบุตรกล่าวนี้^500\nเป็นอันกล่าวดีแล้ว^500\nก็แลเราทั้งหลายพลอยยินดีสุภาษิตนี้^500\nของท่านสารีบุตร^500\nด้วยเรื่อง 36 เรื่องเหล่านี้^500\nถ้าภิกษุแสดงธรรมเพื่อความหน่าย^500\nเพื่อคลายกำหนัด^500\nเพื่อดับชราและมรณะ^500\nควรจะกล่าวว่าภิกษุธรรมกถึก^500\nถ้าภิกษุปฏิบัติเพื่อความหน่าย^500\nเพื่อคลายกำหนัด^500\nเพื่อดับชราและมรณะ^500\nควรจะกล่าวว่า^500\nภิกษุปฏิบัติธรรมสมควรแก่ธรรม^500\nถ้าภิกษุหลุดพ้นเพราะความหน่าย^500\nเพราะคลายกำหนัด^500\nเพราะความดับ^500\nเพราะไม่ถือมั่นชราและมรณะ^500\nควรจะกล่าวว่า^500\nภิกษุบรรลุนิพพานในปัจจุบัน',
        'ถ้าภิกษุแสดงธรรมเพื่อความหน่าย^500\nเพื่อคลายกำหนัด^500\nเพื่อดับชาติ ภพ อุปาทาน^500\nตัณหา เวทนา ผัสสะ ^500\nสฬายตนะ นามรูป^500\nวิญญาณ สังขารทั้งหลาย อวิชชา^500\nควรจะกลับว่าภิกษุธรรมกถึก^500\nถ้าภิกษุปฏิบัติเพื่อความหน่าย^500\nเพื่อคลายกำหนัด^500\nเพื่อดับอวิชชา^500\nควรจะกล่าวว่า^500\nภิกษุปฏิบัติธรรมสมควรแก่ธรรม^500\nถ้าภิกษุหลุดพ้น เพราะความหน่าย^500\nเพราะคลายกำหนัด^500\nเพราะความดับ^500\nเพราะความไม่ถือมั่นในอวิชชา^500\nควรจะกล่าวว่าภิกษุบรรลุนิพพานในปัจจุบัน'
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
            <a href="/lesson0512">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>สัมมสนสูตรที่ 2</h2>
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

export default Lesson0511;
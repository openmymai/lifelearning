import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0312 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระพุทธเจ้าตรัสไว้\nว่าย่อมเป็นผู้มีสติอย่างไร^500\nย่อมเป็นผู้มีปกติ^500\nเห็นกายในกายอยู่^500\nมีความเพียรมีสัมปชัญญะมีสติ^500\nกำจัดอภิชฌา\nและโทมนัสในโลกเสีย^500\nย่อมเป็นผู้มีปกติ\nเห็นเวทนาในเวทนาอยู่^500\nมีความเพียรมีสัมปชัญญะมีสติ^500\nกำจัดอภิชฌา\nและโทมนัสในโลกเสีย^500\nย่อมเป็นผู้มีปกติ\nเห็นจิตในจิตอยู่^500\nมีความเพียร\nมีสัมปชัญญะมีสติ^500\nกำจัดอภิชฌา\nและโทมนัสในโลกเสีย^500\nย่อมเป็นผู้มีปกติเห็นธรรมในธรรม^500\nมีความเพียรมีสัมปชัญญะมีสติ^500\nกำจัดอภิชฌา\nและโทมนัสในโลกเสีย^500\nย่อมเป็นผู้มีสติอย่างนี้แล',
        'ย่อมเป็นผู้มีสัมปชัญญะอย่างไร^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว^500\nในก้าวไปในการถอยกลับ^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nในการแลในการเหลียว^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nในการคู้เข้าเหยียดออก^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nทรงผ้าสังฆาฏิบาตรและจีวร^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nในการกิน ดื่ม เคี้ยว ลิ้ม^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nในการถ่ายอุจจาระปัสสาวะ^500\nย่อมเป็นผู้มีปกติทำความรู้สึกตัว\nในการเดินในการ\nยืน นั่ง หลับ ตื่น พูด นิ่ง^500\nย่อมเป็นผู้มีสติสัมปชัญญะอย่างนี้แล',
        'ถ้าเมื่อนั้นมีสติสัมปชัญญะ\nเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยว\nอยู่อย่างนี้^500\nสุขเวทนาย่อมบังเกิดขึ้น^500\nเธอย่อมรู้ชัดอย่างนี้\nว่าสุขเวทนานี้\nบังเกิดขึ้นแล้วแก่เราแล^500\nก็แต่ว่าสุขเวทนานั้น\nอาศัยจึงเกิดขึ้น^500\nไม่อาศัยไม่เกิดขึ้น^500\nอาศัยอะไรอาศัยกายนี้เอง^500\nก็กายนี้แลไม่เที่ยง^500\nอันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nก็สุขเวทนาอันอาศัยกายอันไม่เที่ยง^500\nปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nแล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน^500\nดังนี้เธอย่อมพิจารณา\nเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืน\nในกายและในสุขเวทนาอยู่^500\nเมื่อเธอพิจารณา\nเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืน\nในกายและในสุขเวทนาอยู่^500\nย่อมละราคานุสัยในกาย\nและในสุขเวทนาเสียได้',
        'ถ้าเมื่อนั้นมีสติสัมปชัญญะ\nเป็นผู้ไม่ประมาท^500\nมีความเพียร\nมีใจเด็ดเดี่ยวอยู่อย่างนี้^500\nทุกขเวทนาย่อมบังเกิดขึ้น^500\nเธอย่อมรู้ชัดอย่างนี้ว่า\nทุกขเวทนานี้\nบังเกิดขึ้นแล้วแก่เราแล^500\nก็แต่ว่าทุกขเวทนานั้น\nอาศัยจึงเกิดขึ้น^500\nไม่อาศัยไม่เกิดขึ้น^500\nอาศัยอะไรอาศัยกายนี้เอง^500\nก็กายนี้แลไม่เที่ยง^500\nอันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nก็ทุกขเวทนา\nอันอาศัยกายอันไม่เที่ยง^500\nปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nแล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน^500\nดังนี้เธอย่อมพิจารณา\nเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืนในกาย\nและในทุกขเวทนาอยู่^500\nเมื่อเธอพิจารณา\nเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืนในกาย\nและในทุกขเวทนาอยู่^500\nย่อมละปฏิฆานุสัยในกาย\nและในทุกขเวทนาเสียได้',
        'ถ้าเมื่อนั้นมีสติสัมปชัญญะเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยวอยู่อย่างนี้^500\nไม่ทุกข์ไม่สุขเวทนา ย่อมบังเกิดขึ้น^500\nเธอย่อมรู้ชัดอย่างนี้ว่า\nไม่ทุกข์ไม่สุขเวทนานี้\nบังเกิดขึ้นแล้วแก่เราแล^500\nก็แต่ว่าไม่ทุกข์ไม่สุขเวทนา^500\nนั้นอาศัยจึงเกิดขึ้น^500\nไม่อาศัยไม่เกิดขึ้น^500\nอาศัยอะไรอาศัยกายนี้เอง^500\nก็กลายนี้แหละไม่เที่ยง^500\nอันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nอาศัยอะไรอาศัยกายนี้เอง^500\nก็กายนี้แลไม่เที่ยง^500\nอันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nก็ไม่ทุกข์ไม่สุขเวทนา\nอาศัยกายอันไม่เที่ยง^500\nปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น^500\nแล้วจึงบังเกิดขึ้นจักเที่ยงแต่ที่ไหน^500\nดังนี้เธอย่อมพิจารณา\nเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืน\nในกายและในไม่ทุกข์ไม่สุขเวทนาอยู่^500\nเมื่อเธอพิจารณาเห็นความไม่เที่ยง\nความเสื่อมไป\nความคลายไป^500\nความดับความสละคืน\nในกายและในไม่ทุกข์ไม่สุขเวทนาอยู่^500\nความดับ ความสละคืนในกาย\nและในไม่ทุกข์ไม่สุขเวทนาอยู่^500\nย่อมละอวิชชานุสัยในกาย\nและในไม่ทุกข์ไม่สุขเวทนาเสียได้',
        'ถ้าเมื่อนั้นเสวยสุขเวทนา\nก็รู้ชัดว่า\nสุขเวทนาไม่เที่ยง^500\nไม่น่าหมกมุ่น\nไม่น่าเพลิดเพลิน^500\nถ้าเสวยทุกขเวทนาก็รู้ชัดว่า^500\nทุกขเวทนาไม่เที่ยง\nไม่น่าหมกมุ่น\nไม่น่าเพลิดเพลิน^500\nถ้าเสวยไม่ทุกข์ไม่สุขเวทนา\nก็รู้ชัดว่า\nไม่ทุกข์ไม่สุขเวทนา\nไม่เที่ยงไม่น่าหมกมุ่น\nไม่น่าเพลิดเพลิน',
        'ถ้าเธอเสวยสุขเวทนา\nย่อมเป็นผู้ปราศจากกิเลส\nเสวยสุขเวทนานั้น^500\nถ้าเธอเสวยทุกขเวทนา\nย่อมเป็นผู้ปราศจากกิเลส\nเสวยทุกขเวทนานั้น^500\nถ้าเธอเสวยไม่ทุกข์ไม่สุขเวทนา\nย่อมเป็นผู้ปราศจากกิเลส\nเสวยไม่ทุกข์ไม่สุขเวทนานั้น^500\nเมื่อเสวยเวทนามีกายเป็นที่สุด^500\nก็รู้ชัดว่า\nเราเสวยเวทนามีกายเป็นที่สุด^500\nเมื่อเสวยเวทนามีชีวิตเป็นที่สุด^500\nก็รู้ชัดว่า\nเราเสวยเวทนามีชีวิตเป็นที่สุด^500\nย่อมรู้ชัดว่าเมื่อตายไป^500\nเวทนาทั้งปวงอัน\nไม่น่าเพลิดเพลิน^500\nจักเป็นความเย็นในโลกนี้ทีเดียว',
        'เปรียบเหมือนประทีปน้ำมัน^500\nอาศัยน้ำมัน\nและไส้จึงลูกโพลงอยู่ได้^500\nเพราะสิ้นน้ำมันและไส้ประทีปนั้น^500\nไม่มีเชื้อพึงดับไป^500\nฉันใดก็ฉันนั้นเหมือนกัน^500\nเมื่อเสวยเวทนามีกายเป็นที่สุด^500\nย่อมรู้ชัดว่า\nเราเสวยเวทนามีกายเป็นที่สุด^500\nเมื่อเสวยเวทนามีชีวิตเป็นที่สุด^500\nย่อมรู้ชัดว่า\nเราเสวยเวทนามีชีวิตเป็นที่สุด^500\nย่อมรู้ชัดว่าเมื่อตายไป^500\nเวทนาทั้งปวง\nอันไม่น่าเพลิดเพลิน\nจักเป็นความเย็นในโลกนี้ทีเดียว'
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
            <a href="/lesson0313">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ</h2>
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

export default Lesson0312;
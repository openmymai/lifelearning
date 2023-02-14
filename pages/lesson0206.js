import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0206 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'เท้าเดิน โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าเท้าเดิน\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิต\nมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nความรู้สึกว่าสิ่งนี้มี\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'เหลียวซ้าย โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าเหลียวซ้าย\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิต\nมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nความรู้สึกว่าสิ่งนี้มี\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'เหลียวขวา โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าเหลียวขวา\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิต\nมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nความรู้สึกว่าสิ่งนี้มี\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'เงยหน้า โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าเงยหน้า\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิต\nมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nความรู้สึกว่าสิ่งนี้มี\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'ก้มหน้า โลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าก้มหน้า\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิต\nมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nความรู้สึกว่าสิ่งนี้มี\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'การเคลื่อนไหว คือโลกและชีวิต\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าการเคลื่อนไหว\nคือโลกและชีวิตมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nเพราะเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที',
        'รูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์\nคือโลกเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่า\nรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์\nคือโลกมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'ตา หู จมูก ลิ้่น กาย ใจ\nคือชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าตา หู จมูก ลิ้น กาย ใจ\nคือชีวิตมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน',
        'โลกและชีวิตกระทบสัมผัส\nผลต่อเนื่องที่เกิดขึ้นเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nความรู้สึกว่าโลกและชีวิตกระทบสัมผัส\nผลต่อเนื่องที่เกิดขึ้นมีตัวตนเป็นของตนเอง\nเป็นความเห็นผิด^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดับไม่เหลือเหมือนกัน^500\nกำหนดรู้สุขถาวรเกิดขึ้นแล้ว\nเก็บสุขถาวรไว้ทันที'
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
            <h2 style={{display: 'inline-block'}}>ฝึกตามทันกายกรรม</h2>
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

export default Lesson0206;
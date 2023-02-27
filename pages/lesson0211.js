import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0211 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ความคิด โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเท้าเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nมือจับ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเหลียวซ้าย โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเหลียวขวา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ก้มหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเงยหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nยืน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนั่ง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ตื่นนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nลืมตา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nที่นอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nผ้าห่ม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nล้างหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nแปรงฟัน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nใส่เสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nใส่กางเกง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nหวีผม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nแต่งหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ไปทานข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nจาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nช้อน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกับข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดื่มน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดื่มกาแฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ไปทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nขับรถ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nที่ทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเพื่อนร่วมงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนั่งเก้าอี้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nจับปากกา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเขียนหนังสือ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้าห้องน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเลิกงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกลับบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ซื้อของ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้าบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nให้อาหารสัตว์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nรดน้ำต้นไม้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกวาดบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nถูพื้น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nซักผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nไม้แขวนเสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nตากผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'กินข้าวเย็น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเปิดพัดลม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเปิดแอร์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดูทีวี โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nฟังเพลง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nโทรศัพท์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nปิดไฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้านอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nการเคลื่อนไหว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนี่คือผลต่อเนื่องของโลกและชีวิต\nกำหนดรู้ว่าทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ'
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
            <a href="/lesson0212">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน</h2>
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

export default Lesson0211;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Learning03 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ไม่เที่ยงเกิดดับ\nตาฉันเห็นรูปคือตัวฉันเห็นรูป\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nหูฉันได้ยินเสียงคือตัวฉันได้ยินเสียง\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nจมูกฉันได้กลิ่นคือตัวฉันได้กลิ่น\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nลิ้นฉันได้รสคือตัวฉันได้รส\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nกายฉันสัมผัสคือตัวฉันสัมผัส\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nใจฉันคิดนึกคือตัวฉันคิดนึก\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ',
        'ไม่เที่ยงเกิดดับ\nมโนกรรมฉันคิดคือตัวฉันคิด\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nวจีกรรมฉันพูดคือตัวฉันพูด\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nกายกรรมฉันทำคือตัวฉันทำ\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nมือฉันจับไม้กวาดคือตัวฉันจับไม้กวาด\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nมือฉันกวาดคือตัวฉันกวาด\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ^500\nไม่เที่ยงเกิดดับ\nมือฉันเคลื่อนไหวคือตัวฉันเคลื่อนไหว\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ\nไม่เที่ยงเกิดดับ\nเท้าฉันเดินคือตัวฉันเดิน\nทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า\nอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดขึ้น ตั้งอยู่ ดับไป\nไม่เที่ยงเกิดดับ\nมโนกรรมไม่เที่ยงเกิดดับ\nวจีกรรมไม่เที่ยงเกิดดับ\nกายกรรมไม่เที่ยงเกิดดับ'
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
            <a href="/learning04">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>บทที่ 3</h2>
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

export default Learning03;
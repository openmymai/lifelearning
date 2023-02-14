import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0208 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'วิญญาณเกิดขึ้นอย่างไร\nวิญญาณเกิดขึ้น\nเพราะอาศัยส่วนสอง^500\nวิญญาณเกิดขึ้น\nเพราะอาศัยส่วนสองเป็นอย่างไร^500\nจักษุวิญญาณย่อมเกิดขึ้น\nเพราะอาศัยจักษุและรูป^500\nจักษุไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nรูปไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nจักษุวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งจักษุวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็จักษุวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่าจักษุสัมผัส^500\nแม้จักษุสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งจักษุสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็จักษุสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'โสตะวิญญาณ\nย่อมเกิดขึ้น\nเพราะอาศัยหูและเสียง^500\nหูไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nเสียงไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nโสตวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งโสตวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็โสตวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่าโสตสัมผัส^500\nแม้โสตสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งโสตสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็โสตสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ฆานะวิญญาณ\nย่อมเกิดขึ้น\nเพราะอาศัยจมูกและกลิ่น^500\nจมูกไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nกลิ่นไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nฆานวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งฆานวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็ฆานวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่าฆานสัมผัส^500\nแม้ฆานสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งฆานสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็ฆานสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ชิวหาวิญญาณ\nย่อมเกิดขึ้น\nเพราะอาศัยลิ้นและรส^500\nลิ้นไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nรสไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nชิวหาวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งชิวหาวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็ชิวหาวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่าชิวหาสัมผัส^500\nแม้ชิวหาสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งชิวหาสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็ชิวหาสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหนv\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'กายวิญญาณ\nย่อมเกิดขึ้น\nเพราะอาศัยกายและสัมผัส^500\nกายไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nสัมผัสไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nกายวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งกายวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็กายวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่ากายสัมผัส^500\nแม้กายสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งกายสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็กายสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'มโนวิญญาณ\nย่อมเกิดขึ้น\nเพราะอาศัยใจและธรรมารมณ์^500\nใจไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nธรรมทั้งหลายก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nมโนวิญญาณไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งมโนวิญญาณก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็มโนวิญญาณที่เกิดขึ้นแล้ว\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ\nความประชุม\nความพร้อมกันแห่งธรรมทั้งสามนี้แล\nเรียกว่ามโนสัมผัส^500\nแม้มโนสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น\nแห่งมโนสัมผัสก็ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nก็มโนสัมผัสที่เกิดขึ้นแล้ว\nเพราะอาศัยปัจจัยอันไม่เที่ยง\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก\nอันผัสสะกระทบแล้วย่อมคิด\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว\nและอาพาธ ไม่เที่ยง\nมีความแปรปรวน\nมีความเป็นอย่างอื่น^500\nมโนวิญญาณย่อมเกิดขึ้น\nเพราะอาศัยส่วนสองอย่างด้วยประการฉะนี้แล'
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
            <h2 style={{display: 'inline-block'}}>วิปัสสนากำหนดรู้ส่วน 2 อย่าง</h2>
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

export default Lesson0208;
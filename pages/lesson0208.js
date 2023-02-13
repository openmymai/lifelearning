import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0208 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'วิญญาณเกิดขึ้นอย่างไร^500\nวิญญาณเกิดขึ้น^500\nเพราะอาศัยส่วนสอง^500\nวิญญาณเกิดขึ้น^500\nเพราะอาศัยส่วนสองเป็นอย่างไร^500\nจักษุวิญญาณย่อมเกิดขึ้น^500\nเพราะอาศัยจักษุและรูป^500\nจักษุไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nรูปไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nจักษุวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งจักษุวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็จักษุวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่าจักษุสัมผัส^500\nแม้จักษุสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งจักษุสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็จักษุสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'โสตะวิญญาณ^500\nย่อมเกิดขึ้น^500\nเพราะอาศัยหูและเสียง^500\nหูไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nเสียงไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nโสตวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งโสตวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็โสตวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่าโสตสัมผัส',
        'แม้โสตสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งโสตสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็โสตสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ฆานะวิญญาณ^500\nย่อมเกิดขึ้น^500\nเพราะอาศัยจมูกและกลิ่น^500\nจมูกไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nกลิ่นไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nฆานวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งฆานวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็ฆานวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่าฆานสัมผัส^500\nแม้ฆานสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งฆานสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็ฆานสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ชิวหาวิญญาณ^500\nย่อมเกิดขึ้น^500\nเพราะอาศัยลิ้นและรส^500\nลิ้นไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nรสไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nชิวหาวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งชิวหาวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็ชิวหาวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่าชิวหาสัมผัส^500\nแม้ชิวหาสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งชิวหาสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็ชิวหาสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'กายวิญญาณ^500\nย่อมเกิดขึ้น^500\nเพราะอาศัยกายและสัมผัส^500\nกายไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nสัมผัสไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nกายวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งกายวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็กายวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่ากายสัมผัส^500\nแม้กายสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งกายสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็กายสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'มโนวิญญาณ^500\nย่อมเกิดขึ้น^500\nเพราะอาศัยใจและธรรมารมณ์^500\nใจไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nธรรมทั้งหลายก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nส่วนสองอย่างนี้หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nมโนวิญญาณไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งมโนวิญญาณก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็มโนวิญญาณที่เกิดขึ้นแล้ว^500\nเพราะอาศัยเหตุปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nความประจวบ^500\nความประชุม^500\nความพร้อมกันแห่งธรรมทั้งสามนี้แล^500\nเรียกว่ามโนสัมผัส^500\nแม้มโนสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nแม้เหตุปัจจัยเพื่อความเกิดขึ้น^500\nแห่งมโนสัมผัสก็ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nก็มโนสัมผัสที่เกิดขึ้นแล้ว^500\nเพราะอาศัยปัจจัยอันไม่เที่ยง^500\nจักเป็นของเที่ยงได้แต่ไหน^500\nบุคคลอันผัสสะกระทบแล้วย่อมรู้สึก^500\nอันผัสสะกระทบแล้วย่อมคิด^500\nอันผัสสะกระทบแล้วย่อมจำ^500\nแม้ธรรมเหล่านี้ก็หวั่นไหว^500\nและอาพาธ ไม่เที่ยง^500\nมีความแปรปรวน^500\nมีความเป็นอย่างอื่น^500\nมโนวิญญาณย่อมเกิดขึ้น^500\nเพราะอาศัยส่วนสองอย่างด้วยประการฉะนี้แล'
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

export default Lesson0208;
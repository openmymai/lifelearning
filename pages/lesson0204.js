import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0204 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป รูปเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในรูปที่เห็น^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ',
        'หูได้ยินเสียง เสียงเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในเสียงที่ได้ยิน^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ',
        'จมูกได้กลิ่น กลิ่นเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในกลิ่นที่ได้กลิ่น^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ',
        'ลิ้นได้รส รสเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในรสที่ได้รส^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ',
        'กายสัมผัส สัมผัสเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในสัมผัสที่สัมผัส^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ',
        'ใจคิดนึก ความคิดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nดับไม่เหลือ^500\nไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในใจคิดนึกที่คิดนึก^500\nความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ'
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
            <h2 style={{display: 'inline-block'}}>กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง</h2>
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

export default Lesson0204;
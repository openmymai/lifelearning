import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0101 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกายสัมผัส\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nใจคิดนึก\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ',
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nรูปเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'หูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nเสียงเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'จมูกได้กลิ่น \nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nกลิ่นเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'ลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nรสเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'กายสัมผัส\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสัมผัสเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'ใจคิดนึก\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nความคิดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'รูป ร่างกาย\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'เวทนา ความพอใจไม่พอใจ\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'สัญญา ความจำ\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'สังขาร ความคิด\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'วิญญาณ ความรู้\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'อุปทานขันธ์ 5 เป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'รูป ร่างกาย\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nกำลังจะแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ'
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
            <h2 style={{display: 'inline-block'}}>วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6</h2>
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

export default Lesson0101;
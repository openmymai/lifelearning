import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0103 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางตา\nเป็นเพียงแค่รูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางหู\nเป็นเพียงแค่เสียง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางจมูก\nเป็นเพียงแค่กลิ่น\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางลิ้น\nเป็นเพียงแค่รส\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nกายสัมผัส\nสัมผัสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางกาย\nเป็นเพียงแค่สัมผัส\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nใจคิดนึก\nความคิดไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มาปรากฏทางใจ\nเป็นเพียงแค่ความคิด\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง^500\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nจริงไหม—-จริง',
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางตา\nเป็นเพียงแค่รูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10\nหูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางหู\nเป็นเพียงแค่เสียง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10\nจมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางจมูก\nเป็นเพียงแค่กลิ่น\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10\nลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางลิ้น\nเป็นเพียงแค่รส\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10\nกายสัมผัส\nสัมผัสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางกาย\nเป็นเพียงแค่สัมผัส\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10500\nใจคิดนึก\nความคิดไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nสิ่งที่มาปรากฏทางใจ\nเป็นเพียงแค่ความคิด\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ\nตัวฉันเป็นเพียงรูป\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย\nไม่เที่ยงเกิดดับ\n1…2…3…4…5…6…7…8…9…10',
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nรูปเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'หูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nเสียงเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'จมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nกลิ่นเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'ลิ้นได้รส\nรสไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nรสเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'กายสัมผัส\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nสัมผัสเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'ใจคิดนึก\nไม่เที่ยงเกิดดับ\nตัวฉันไม่เที่ยงเกิดดับ^500\nความคิดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่า\nสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'รูป ร่างกาย\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ^500\nเวทนา ความพอใจ ไม่พอใจ\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ^500\nสัญญา ความจำ\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ^500\nสังขาร ความคิด\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ^500\nวิญญาณ ความรู้\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ',
        'รูป ร่างกาย\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'เวทนา ความพอใจไม่พอใจ\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'สัญญา ความจำ\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'สังขาร ความคิด\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'วิญญาณ ความรู้\nอย่างใดอย่างหนึ่ง\nที่เป็นอดีต อนาคต และปัจจุบัน^500\nภายในหรือภายนอก\nหยาบหรือละเอียด\nเลวหรือประณีต\nไกลหรือใกล้^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
        'อุปทานขันธ์ 5 เป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่น\nว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ',
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
            <a href="/lesson0104">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ฝึกเห็นตามจริง</h2>
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

export default Lesson0103;
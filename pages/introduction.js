import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Introduction = () => {
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'นะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nนะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nนะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น^500\nซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น^500\nซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น^500\nซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง',
        'อะระหัง สัมมาสัมพุทโธ ภะคะวา^500\nพุทธัง ภะคะวันตัง อะภิวาเทมิ^500\nสวากขาโต ภะคะวะตา ธัมโม^500\nธัมมังนะมัสสามิ^500\nสุปะติปันโน ภะคะวะโต\nสาวะกะสังโฆ^500\nสังฆัง นะมามิ',
        'อิติปิโส ภะคะวา\nเพราะเหตุอย่างนี้\nพระผู้มีพระภาคเจ้านั้น^500\nอะระหัง สัมมา\nเป็นผู้ไกลจากกิเลส^500\nสัมพุทโธ\nเป็นผู้ตรัสรู้ชอบโดยพระองค์เอง^500\nวิชชาจะระณะสัมปันโน\nเป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ^500\nสุคะโต\nเป็นผู้ไปแล้วด้วยดี^500\nโลกะวิทู\nเป็นผู้รู้โลกอย่างแจ่มแจ้ง^500\nอะนุตตะโร ปุริสะธัมมะสาระถิ\nเป็นผู้สามารถฝึกคนที่สมควรฝึกได้\nอย่างไม่มีใครยิ่งกว่า^500\nสัตถาเทวะมะนุสสานัง\nเป็นครูผู้สอนของเทวดา\nและมนุษย์ทั้งหลาย^500\nพุทโธ\nเป็นผู้รู้ ผู้ตื่น\nผู้เบิกบานด้วยธรรม^500\nภะคะวาติ\nเป็นผู้มีความเจริญจำแนกธรรม\nสั่งสอนสัตว์ ดังนี้',
        'สวากขาโต ภะคะวาตา ธัมโม\nพระธรรม\nเป็นสิ่งที่พระผู้มีพระภาคเจ้า\nตรัสไว้ดีแล้ว^500\nสันทิฏฐิโก\nเป็นสิ่งที่ผู้ศึกษาและปฏิบัติ\nพึงเห็นได้ด้วยตนเอง^500\nอะกาลิโก\nเป็นสิ่งที่ปฏิบัติได้\nและให้ผลได้ไม่จำกัดกาล^500\nเอหิปัสสิโก\nเป็นสิ่งที่ควรกล่าวกับผู้อื่นว่า\nท่านจงมาดูเถิด^500\nโอปะนะยิโก\nเป็นสิ่งที่ควรน้อมเข้ามาใส่ตัว^500\nปัจจัตตัง เวทิตัพโพ วิญญูหีติ\nเป็นสิ่งที่ผู้รู้\nพึงรู้ได้เฉพาะตน ดังนี้',
        'สุปะฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ^500\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติดีแล้ว^500\nอุชุปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ^500\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติตรงแล้ว^500\nญายะปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ^500\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติเพื่อรู้ธรรม\nเป็นเครื่องออกจากทุกข์แล้ว^500\nสามีจิปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ^500\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติสมควรแล้ว^500\nยะทิทัง\nได้แก่บุคคลเหล่านี้คือ^500\nจัตตาริ ปุริสสะ ยุคานิ\nอัฏฐะ ปุริสะปุคคะลา^500\nคู่แห่งบุรุษสี่คู่\nนับเรียงตัวได้แปดบุรุษ^500\nเอสะ ภะคะวะโต\nสาวะกะสังโฆ^500\nนั่นแหละ สงฆ์สาวก\nของพระผู้มีพระภาคเจ้า^500\nอาหุเนยโย\nเป็นผู้ควรแก่สักการะที่เขานำมาบูชา^500\nปาหุเนยโย\nเป็นผู้ควรแก่สักการะที่จัดไว้ต้อนรับ^500\nทักขิเนยโย\nเป็นผู้ควรรับทักษิณาทาน^500\nอัญชะลีกะระนีโย\nเป็นผู้ที่บุคคลทั่วไปควรทำอัญชลี^500\nอะนุตตะรัง ปุญญะเขตตัง\nโลกัสสาติ^500\nเป็นเนื้อนาบุญของโลก\nไม่มีนาบุญอื่นยิ่งกว่า ดังนี้'
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
              <i className="bi bi-x-lg" />
            </button>
            <h2 style={{display: 'inline-block'}}>บทสรรเสริญคุณพระรัตนตรัย</h2>
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

export default Introduction;
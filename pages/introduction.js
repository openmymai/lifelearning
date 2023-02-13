import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Introduction = () => {
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'นะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ\nนะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ\nนะโม ตัสสะ ภะคะวะโต\nอะระหะโต สัมมา สัมพุทธัสสะ\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส\nตรัสรู้ชอบได้โดยพระองค์เอง\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส\nตรัสรู้ชอบได้โดยพระองค์เอง\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส\nตรัสรู้ชอบได้โดยพระองค์เอง',
        'อะระหัง สัมมาสัมพุทโธ ภะคะวา\nพุทธัง ภะคะวันตัง อะภิวาเทมิ\nสวากขาโต ภะคะวะตา ธัมโม\nธัมมังนะมัสสามิ\nสุปะติปันโน ภะคะวะโต\nสาวะกะสังโฆ สังฆัง นะมามิ',
        'อิติปิโส ภะคะวา\nเพราะเหตุอย่างนี้\nพระผู้มีพระภาคเจ้านั้น\nอะระหัง สัมมา\nเป็นผู้ไกลจากกิเลส\nสัมพุทโธ\nเป็นผู้ตรัสรู้ชอบโดยพระองค์เอง\nวิชชาจะระณะสัมปันโน\nเป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ\nสุคะโต\nเป็นผู้ไปแล้วด้วยดี',
        'โลกะวิทู\nเป็นผู้รู้โลกอย่างแจ่มแจ้ง\nอะนุตตะโร ปุริสะธัมมะสาระถิ\nเป็นผู้สามารถฝึกคนที่สมควรฝึกได้\nอย่างไม่มีใครยิ่งกว่า\nสัตถาเทวะมะนุสสานัง\nเป็นครูผู้สอนของเทวดา\nและมนุษย์ทั้งหลาย\nพุทโธ\nเป็นผู้รู้ ผู้ตื่น\nผู้เบิกบานด้วยธรรม\nภะคะวาติ\nเป็นผู้มีความเจริญจำแนกธรรม\nสั่งสอนสัตว์ ดังนี้',
        'สวากขาโต ภะคะวาตา ธัมโม\nพระธรรม\nเป็นสิ่งที่พระผู้มีพระภาคเจ้า\nตรัสไว้ดีแล้ว\nสันทิฏฐิโก\nเป็นสิ่งที่ผู้ศึกษาและปฏิบัติ\nพึงเห็นได้ด้วยตนเอง\nอะกาลิโก\nเป็นสิ่งที่ปฏิบัติได้\nและให้ผลได้ไม่จำกัดกาล\nเอหิปัสสิโก\nเป็นสิ่งที่ควรกล่าวกับผู้อื่นว่า\nท่านจงมาดูเถิด',
        'โอปะนะยิโก\nเป็นสิ่งที่ควรน้อมเข้ามาใส่ตัว\nปัจจัตตัง เวทิตัพโพ วิญญูหีติ\nเป็นสิ่งที่ผู้รู้\nพึงรู้ได้เฉพาะตน ดังนี้',
        'สุปะฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติดีแล้ว\nอุชุปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติตรงแล้ว',
        'ญายะปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติเพื่อรู้ธรรม\nเป็นเครื่องออกจากทุกข์แล้ว\nสามีจิปฏิปันโน ภะคะวะโต\nสาวะกะสังโฆ\nสงฆ์สาวก\nของพระผู้มีพระภาคเจ้าหมู่ใด\nปฏิบัติสมควรแล้ว',
        'ยะทิทัง\nได้แก่บุคคลเหล่านี้คือ\nจัตตาริ ปุริสสะ ยุคานิ\nอัฏฐะ ปุริสะปุคคะลา\nคู่แห่งบุรุษสี่คู่\nนับเรียงตัวได้แปดบุรุษ\nเอสะ ภะคะวะโต\nสาวะกะสังโฆ\nนั่นแหละ สงฆ์สาวก\nของพระผู้มีพระภาคเจ้า',
        'อาหุเนยโย\nเป็นผู้ควรแก่สักการะที่เขานำมาบูชา\nปาหุเนยโย\nเป็นผู้ควรแก่สักการะที่จัดไว้ต้อนรับ\nทักขิเนยโย\nเป็นผู้ควรรับทักษิณาทาน\nอัญชะลีกะระนีโย\nเป็นผู้ที่บุคคลทั่วไปควรทำอัญชลี\nอะนุตตะรัง ปุญญะเขตตัง\nโลกัสสาติ\nเป็นเนื้อนาบุญของโลก\nไม่มีนาบุญอื่นยิ่งกว่า ดังนี้'
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
            <h2 style={{display: 'inline-block'}}>บทสรรเสริญคุณพระรัตนตรัย</h2>
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

export default Introduction;
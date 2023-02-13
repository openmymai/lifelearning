import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Introduction = () => {
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'นะโม ตัสสะ ภะคะวะโต^500\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nนะโม ตัสสะ ภะคะวะโต^500\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nนะโม ตัสสะ ภะคะวะโต^500\nอะระหะโต สัมมา สัมพุทธัสสะ^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า^500\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า^500\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง^500\nขอนอบน้อมแด่พระผู้มีพระภาคเจ้า^500\nพระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส^500\nตรัสรู้ชอบได้โดยพระองค์เอง',
        'อะระหัง สัมมาสัมพุทโธ ภะคะวา^500\nพุทธัง ภะคะวันตัง อะภิวาเทมิ^500\nสวากขาโต ภะคะวะตา ธัมโม^500\nธัมมังนะมัสสามิ^500\nสุปะติปันโน ภะคะวะโต^500\nสาวะกะสังโฆ สังฆัง นะมามิ',
        'อิติปิโส ภะคะวา^500\nเพราะเหตุอย่างนี้^500\nพระผู้มีพระภาคเจ้านั้น^500\nอะระหัง สัมมา^500\nเป็นผู้ไกลจากกิเลส^500\nสัมพุทโธ^500\nเป็นผู้ตรัสรู้ชอบโดยพระองค์เอง^500\nวิชชาจะระณะสัมปันโน^500\nเป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ^500\nสุคะโต^500\nเป็นผู้ไปแล้วด้วยดี',
        'โลกะวิทู^500\nเป็นผู้รู้โลกอย่างแจ่มแจ้ง^500\nอะนุตตะโร ปุริสะธัมมะสาระถิ^500\nเป็นผู้สามารถฝึกคนที่สมควรฝึกได้^500\nอย่างไม่มีใครยิ่งกว่า^500\nสัตถาเทวะมะนุสสานัง^500\nเป็นครูผู้สอนของเทวดา^500\nและมนุษย์ทั้งหลาย^500\nพุทโธ^500\nเป็นผู้รู้ ผู้ตื่น^500\nผู้เบิกบานด้วยธรรม^500\nภะคะวาติ^500\nเป็นผู้มีความเจริญจำแนกธรรม^500\nสั่งสอนสัตว์ ดังนี้',
        'สวากขาโต ภะคะวาตา ธัมโม^500\nพระธรรม^500\nเป็นสิ่งที่พระผู้มีพระภาคเจ้า^500\nตรัสไว้ดีแล้ว^500\nสันทิฏฐิโก^500\nเป็นสิ่งที่ผู้ศึกษาและปฏิบัติ^500\nพึงเห็นได้ด้วยตนเอง^500\nอะกาลิโก^500\nเป็นสิ่งที่ปฏิบัติได้^500\nและให้ผลได้ไม่จำกัดกาล^500\nเอหิปัสสิโก^500\nเป็นสิ่งที่ควรกล่าวกับผู้อื่นว่า^500\nท่านจงมาดูเถิด',
        'โอปะนะยิโก^500\nเป็นสิ่งที่ควรน้อมเข้ามาใส่ตัว^500\nปัจจัตตัง เวทิตัพโพ วิญญูหีติ^500\nเป็นสิ่งที่ผู้รู้^500\nพึงรู้ได้เฉพาะตน ดังนี้',
        'สุปะฏิปันโน ภะคะวะโต^500\nสาวะกะสังโฆ^500\nสงฆ์สาวก^500\nของพระผู้มีพระภาคเจ้าหมู่ใด^500\nปฏิบัติดีแล้ว^500\nอุชุปฏิปันโน ภะคะวะโต^500\nสาวะกะสังโฆ^500\nสงฆ์สาวก^500\nของพระผู้มีพระภาคเจ้าหมู่ใด^500\nปฏิบัติตรงแล้ว',
        'ญายะปฏิปันโน ภะคะวะโต^500\nสาวะกะสังโฆ^500\nสงฆ์สาวก^500\nของพระผู้มีพระภาคเจ้าหมู่ใด^500\nปฏิบัติเพื่อรู้ธรรม^500\nเป็นเครื่องออกจากทุกข์แล้ว^500\nสามีจิปฏิปันโน ภะคะวะโต^500\nสาวะกะสังโฆ^500\nสงฆ์สาวก^500\nของพระผู้มีพระภาคเจ้าหมู่ใด^500\nปฏิบัติสมควรแล้ว',
        'ยะทิทัง^500\nได้แก่บุคคลเหล่านี้คือ^500\nจัตตาริ ปุริสสะ ยุคานิ^500\nอัฏฐะ ปุริสะปุคคะลา^500\nคู่แห่งบุรุษสี่คู่^500\nนับเรียงตัวได้แปดบุรุษ^500\nเอสะ ภะคะวะโต^500\nสาวะกะสังโฆ^500\nนั่นแหละ สงฆ์สาวก^500\nของพระผู้มีพระภาคเจ้า',
        'อาหุเนยโย^500\nเป็นผู้ควรแก่สักการะที่เขานำมาบูชา^500\nปาหุเนยโย^500\nเป็นผู้ควรแก่สักการะที่จัดไว้ต้อนรับ^500\nทักขิเนยโย^500\nเป็นผู้ควรรับทักษิณาทาน^500\nอัญชะลีกะระนีโย^500\nเป็นผู้ที่บุคคลทั่วไปควรทำอัญชลี^500\nอะนุตตะรัง ปุญญะเขตตัง^500\nโลกัสสาติ^500\nเป็นเนื้อนาบุญของโลก^500\nไม่มีนาบุญอื่นยิ่งกว่า ดังนี้'
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
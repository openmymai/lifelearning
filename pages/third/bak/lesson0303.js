import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0303 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระพุทธเจ้าตรัสไว้ว่า\nจักษุเป็นอนัตตา^500\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'หูเป็นอนัตตา\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\^500nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'จมูกเป็นอนัตตา\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'ลิ้นเป็นอนัตตา\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'กายเป็นอนัตตา\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'ใจเป็นอนัตตา\nสิ่งใดเป็นอนัตตา\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา\nอันชอบตามความเป็นจริง\nอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งกันชั่วคราว\nแล้วแตกสลาย\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรเห็นว่าสิ่งนั้นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ^500\nว่างเปล่าจากตนหรือจากของๆตน',
        'อริยสาวก\nผู้ได้สดับแล้วเห็นอยู่อย่างนี้^500\nย่อมเบื่อหน่ายแม้ในจักษุ\nย่อมเบื่อหน่ายแม้ในหู\nย่อมเบื่อหน่ายแม้ในจมูก\nย่อมเบื่อหน่ายแม้ในลิ้น\nย่อมเบื่อหน่ายแม้ในกาย\nย่อมเบื่อหน่ายแม้ในใจ^500\nเมื่อเบื่อหน่ายย่อมคลายกำหนัด^500\nเพราะคลายกำหนัดย่อมหลุดพ้น^500\nเมื่อหลุดพ้นแล้ว\nย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว^500\nรู้ชัดว่าชาติสิ้นแล้ว\nพรหมจรรย์อยู่จบแล้ว^500\nกิจที่ควรทำ ทำเสร็จแล้ว^500\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี'
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
            <a href="/lesson0304">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ว่าด้วยความเป็นอนัตตาแห่งอายตนะภายใน</h2>
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

export default Lesson0303;
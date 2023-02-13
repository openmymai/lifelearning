import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0305 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระพุทธเจ้าตรัสไว้ว่า^500\nรูปเป็นทุกข์^500\nสิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา^500\nสิ่งใดเป็นอนัตตาสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา^500\nอันชอบตามความเป็นจริง^500\nอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา^500\nนั่นไม่เป็นเรา^500\nนั่นไม่ใช่ตัวตนของเรา^500\nเสียง กลิ่น รส^500\nโผฏฐัพพะ ธรรมารมณ์เป็นทุกข์^500\nสิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา^500\nสิ่งใดเป็นอนัตตา^500\nสิ่งนั้นท่านทั้งหลาย^500\nพึงเห็นด้วยปัญญา^500\nอันชอบตามความเป็นจริง^500\nอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา^500\nนั่นไม่เป็นเรา^500\nนั่นไม่ใช่ตัวตนของเรา',
        'เมื่ออริยสาวก^500\nผู้ได้สดับแล้วเห็นอยู่อย่างนี้^500\nย่อมเบื่อหน่ายแม้ในรูป^500\nย่อมเบื่อหน่ายแม้ในเสียง^500\nย่อมเบื่อหน่ายแม้ในกลิ่น^500\nย่อมเบื่อหน่ายแม้ในรส^500\nย่อมเบื่อหน่ายแม้ในโผฏฐัพพะ^500\nย่อมเบื่อหน่ายแม้ในธรรมารมณ์^500\nเมื่อเบื่อหน่ายย่อมคลายกําหนัด^500\nเพราะคลายกําหนัดย่อมหลุดพ้น^500\nเมื่อหลุดพ้นแล้ว^500\nย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว^500\nรู้ชัดว่าชาติสิ้นแล้ว^500\nพรหม จรรย์อยู่จบแล้ว^500\nกิจที่ควรทํา..ทําเสร็จแล้ว^500\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี'
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
            <h2 style={{display: 'inline-block'}}>ว่าด้วยความเป็นทุกข์แห่งอายตนะภายนอก</h2>
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

export default Lesson0305;
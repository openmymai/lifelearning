import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0314 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ว่าด้วยการกระทำที่สุดทุกข์^500\nพระพุทธเจ้าตรัสกะท่านพระราหุลว่า',
        'ปฐวีธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี^500\nปฐวีธาตุนั้นก็เป็น\nแต่สักว่าปฐวีธาตุเท่านั้น^500\nพึงเห็นปฐวีธาตุนั้นด้วยปัญญาอันชอบ^500\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น^500\nจิตย่อมเบื่อหน่ายในปฐวีธาตุ^500\nย่อมคลายกำหนัดในปฐวีธาตุ',
        'อาโปธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี^500\nอาโปธาตุนั้นก็เป็น\nแต่สักว่าอาโปธาตุเท่านั้น^500\nพึงเห็นอาโปธาตุนั้นด้วยปัญญาอันชอบ^500\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น^500\nจิตย่อมเบื่อหน่ายในอาโปธาตุ^500\nย่อมคลายกำหนัดในอาโปธาตุ',
        'เตโชธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี^500\nเตโชธาตุนั้นก็เป็น\nแต่สักว่าเตโชธาตุเท่านั้น^500\nพึงเห็นเตโชธาตุนั้นด้วยปัญญาอันชอบ^500\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น^500\nจิตย่อมเบื่อหน่ายในเตโชธาตุ^500\nย่อมคลายกำหนัดในเตโชธาตุ',
        'วาโยธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี^500\nวาโยธาตุนั้นก็เป็น\nแต่สักว่าวาโยธาตุเท่านั้น^500\nพึงเห็นวาโยธาตุนั้นด้วยปัญญาอันชอบ^500\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น^500\nจิตย่อมเบื่อหน่ายในวาโยธาตุ^500\nย่อมคลายกำหนัดในวาโยธาตุ^500\nเพราะเหตุที่พิจารณาเห็นว่า^500\nไม่ใช่ตัวตนไม่เนื่องในตนในธาตุ 4 นี้^500\nพระพุทธเจ้ากล่าวว่าตัดตัณหาได้แล้ว^500\nรื้อถอนสังโยชน์เสียได้^500\nการกระทำที่สุดแห่งทุกข์ได้แล้ว^500\nเพราะละมานะได้โดยชอบ'
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
            <a href="/lesson0315">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ว่าด้วยการกระทำที่สุดทุกข์</h2>
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

export default Lesson0314;
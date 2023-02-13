import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0314 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ว่าด้วยการกระทำที่สุดทุกข์\nพระพุทธเจ้าตรัสกะท่านพระราหุลว่า',
        'ปฐวีธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี\nปฐวีธาตุนั้นก็เป็น\nแต่สักว่าปฐวีธาตุเท่านั้น\nพึงเห็นปฐวีธาตุนั้นด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น\nจิตย่อมเบื่อหน่ายในปฐวีธาตุ\nย่อมคลายกำหนัดในปฐวีธาตุ',
        'อาโปธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี\nอาโปธาตุนั้นก็เป็น\nแต่สักว่าอาโปธาตุเท่านั้น\nพึงเห็นอาโปธาตุนั้นด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น\nจิตย่อมเบื่อหน่ายในอาโปธาตุ\nย่อมคลายกำหนัดในอาโปธาตุ',
        'เตโชธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี\nเตโชธาตุนั้นก็เป็น\nแต่สักว่าเตโชธาตุเท่านั้น\nพึงเห็นเตโชธาตุนั้นด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น\nจิตย่อมเบื่อหน่ายในเตโชธาตุ\nย่อมคลายกำหนัดในเตโชธาตุ',
        'วาโยธาตุที่เป็นภายในก็ดี\nเป็นภายนอกก็ดี\nวาโยธาตุนั้นก็เป็น\nแต่สักว่าวาโยธาตุเท่านั้น\nพึงเห็นวาโยธาตุนั้นด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nเพราะเห็นด้วยปัญญา\nอันชอบตามความเป็นจริงอย่างนั้น\nจิตย่อมเบื่อหน่ายในวาโยธาตุ\nย่อมคลายกำหนัดในวาโยธาตุ\nเพราะเหตุที่พิจารณาเห็นว่า\nไม่ใช่ตัวตนไม่เนื่องในตนในธาตุ 4 นี้\nพระพุทธเจ้ากล่าวว่าตัดตัณหาได้แล้ว\nรื้อถอนสังโยชน์เสียได้\nการกระทำที่สุดแห่งทุกข์ได้แล้ว\nเพราะละมานะได้โดยชอบ'
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
            <h2 style={{display: 'inline-block'}}>ว่าด้วยการกระทำที่สุดทุกข์</h2>
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

export default Lesson0314;
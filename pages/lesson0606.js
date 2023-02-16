import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0606 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'พระนครสาวัตถี^500\nครั้งนั้นแล\nภิกษุรูปหนึ่ง^500\nเข้าไปเฝ้าพระผู้มีพระภาค\nถึงที่ประทับ ฯลฯ^500\nครั้นแล้ว^500\nได้ทูลถามพระผู้มีพระภาคว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nที่เรียกว่า อวิชชา\nอวิชชา ดังนี้^500\nอวิชชาเป็นไฉนหนอแล^500\nและบุคคลเป็นผู้ประกอบ\nด้วยอวิชชาด้วยเหตุเพียงเท่าไร?^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nดูกรภิกษุ^500\nปุถุชนผู้ไม่ได้สดับแล้วในโลกนี้\nย่อมไม่รู้ชัด\nตามความเป็นจริง^500\nซึ่งรูปอันมีความเกิดขึ้น\nเป็นธรรมดาว่า\nรูปมีความเกิดขึ้นเป็นธรรมดา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งรูปอันมีความเสื่อมไป\nเป็นธรรมดาว่า^500\nรูปมีความเสื่อมไปเป็นธรรมดา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งรูปอันมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดาว่า^500\nรูปมีความเกิดขึ้น\nและความเสื่อมไปเป็นธรรมดา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งเวทนา^500\nย่อมไม่รู้ชัดตาม\nความเป็นจริง\nซึ่งสัญญา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งสังขาร^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งวิญญาณ\nอันมีความเกิดขึ้น\nเป็นธรรมดาว่า^500\nวิญญาณมีความเกิดขึ้น\nเป็นธรรมดา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งวิญญาณ^500\nอันมีความเสื่อมไป\nเป็นธรรมดาว่า^500\nวิญญาณมีความเสื่อมไป\nเป็นธรรมดา^500\nย่อมไม่รู้ชัด\nตามความเป็นจริง\nซึ่งวิญญาณ^500\nอันมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดาว่า^500\nวิญญาณมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดา^500\nดูกรภิกษุ นี้เรียกว่า\nอวิชชา และบุคคล\nเป็นผู้ประกอบด้วยอวิชชา^500\nด้วยเหตุเพียงเท่านี้',
        'เมื่อพระผู้มีพระภาค\nตรัสอย่างนี้แล้ว^500\nภิกษุนั้นทูลถามว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nที่เรียกว่า วิชชา\nวิชชา ดังนี้^500\nวิชชาเป็นไฉนหนอแล^500\nและบุคคล\nเป็นผู้ประกอบด้วยวิชชา^500\nด้วยเหตุเพียงเท่าไร?^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nดูกรภิกษุ^500\nอริยสาวกผู้ได้สดับแล้ว\nในธรรมวินัยนี้^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งรูป อันมีความเกิดขึ้น\nเป็นธรรมดาว่า^500\nรูปมีความเกิดขึ้น\nเป็นธรรมดา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งรูป อันมีความเสื่อมไป\nเป็นธรรมดาว่า^500\nรูปมีความเสื่อมไป\nเป็นธรรมดา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งรูป อันมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดาว่า^500\nรูปมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งเวทนา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งสัญญา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งสังขาร^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งวิญญาณ^500\nอันมีความเกิดขึ้น\nเป็นธรรมดาว่า^500\nวิญญาณมีความเกิดขึ้น\nเป็นธรรมดา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งวิญญาณ^500\nอันมีความเสื่อมไป\nเป็นธรรมดาว่า^500\nวิญญาณมีความเสื่อมไป\nเป็นธรรมดา^500\nย่อมรู้ชัดตามความเป็นจริง\nซึ่งวิญญาณ^500\nอันมีความเกิดขึ้น\nและความเสื่อมไป\nเป็นธรรมดาว่า^500\nวิญญาณมีความ\nเกิดขึ้นและเสื่อมไป\nเป็นธรรมดา^500\nดูกรภิกษุ นี้เรียกว่า วิชชา^500\nและบุคคลเป็นผู้ประกอบด้วยวิชชา^500\nด้วยเหตุเพียงเท่านี้แล'
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
            <h2 style={{display: 'inline-block'}}>สมุทยธัมมสูตรที่ ๑</h2>
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

export default Lesson0606;
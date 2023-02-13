import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0315 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'สมัยหนึ่งพระผู้มีพระภาค\nประทับอยู่ ณ กูฎาคารศาลา\nในป่ามหาวันใกล้พระนครเวสาลี\nครั้งนั้นแล\nอุคค คฤหบดีชาวเมืองเวสาลี\nได้เข้าไปเฝ้าพระผู้มีพระภาค\nถึงที่ประทับ\nครั้นแล้วได้ทูลถามพระผู้มีพระภาค\nว่าข้าแต่พระองค์ผู้เจริญ\nเหตุปัจจัยอะไรหนอแล\nเป็นเครื่องให้สัตว์บางพวก\nในโลกนี้ไม่ปรินิพพานในปัจจุบัน\nอนึ่ง เหตุปัจจัยอะไร\nเป็นเครื่องให้สัตว์บางพวก\nในโลกนี้ปรินิพพานในปัจจุบัน',
        'พระผู้มีพระภาคตรัสว่า\nมีอยู่แลคฤหบดี\nรูปทั้งหลายอันบุคคลพึงรู้แจ้ง\nด้วยจักษุอันน่าปรารถนาน่าใคร่น่าพอใจ\nน่ารัก ชักให้ใคร่\nชวนให้กำหนัด \nหากว่าภิกษุเพลิน\nหมกมุ่น พัวพันรูปนั้น\nเมื่อภิกษุนั้นเพลิน\nหมกมุ่น พัวพันรูปนั้นอยู่\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี\nอุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมมี\nภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน\nเสียง กลิ่น รส\nโผฏฐัพพะ และธรรมารมณ์\nอันบุคคลพึงรู้แจ้งด้วยใจ\nอันน่าปรารถนาน่าใคร่ น่าพอใจ\nน่ารักชักให้ใคร่\nชวนให้กำหนัด\nหากว่าภิกษุ เพลิดเพลิน\nหมกมุ่นพัวพันธรรมารมณ์นั้น\nเมื่อภิกษุนั้นเพลิดเพลิน\nหมกมุ่น พัวพันธรรมารมณ์นั้นอยู่\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี\nอุปาทานอาศัยซึ่งปัญหานั้นก็ย่อมมี\nภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน\nดูกรคฤหบดีเหตุปัจจัยนี้แล\nเป็นเครื่องให้สัตว์บางพวก\nในโลกนี้ไม่ปรินิพพานในปัจจุบัน',
        'ดูกรและคฤหบดี\nรูปอันบุคคลพึงรู้แจ้งด้วยจักษุ\nอันน่าปรารถนาน่าใคร่น่าพอใจ\nน่ารัก ชักให้ใคร่\nชวนให้กำหนัด\nหากว่าภิกษุไม่เพลิดเพลิน\nไม่หมกมุ่นไม่พัวพันรูปนั้น\nเมื่อภิกษุนั้นไม่เพลิดเพลิน\nไม่หมกมุ่นไม่พัวพันรูปนั้นอยู่\nวิญญาณอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี\nอุปาทานอันอาศัยซึ่งตัณหา\nนั้นก็ย่อมไม่มี\nภิกษุผู้ไม่มีอุปทานย่อมปรินิพพาน\nเสียง กลิ่น รส\nโผฏฐัพพะ และธรรมารมณ์ \nอันบุคคลพึงรู้แจ้งด้วยใจ\nอันน่าปรารถนาน่าใคร่ น่าพอใจ\nน่ารัก ชักให้ใคร่ ชวนให้กำหนัด\nหากภิกษุไม่เพลิดเพลิน\nไม่หมกมุ่น ไม่พัวพันธรรมารมณ์นั้น\nเมื่อภิกษุนั้นไม่เพลินไม่หมกมุ่น\nไม่พัวพันในธรรมารมณ์นั้นอยู่\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี\nอุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี\nภิกษุผู้ไม่มีอุปาทานย่อมปรินิพพาน'
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
            <h2 style={{display: 'inline-block'}}>ว่าด้วยเหตุปัจจัยเป็นเครื่องให้สัตว์ไม่ปรินิพพานและปรินิพพาน</h2>
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

export default Lesson0315;
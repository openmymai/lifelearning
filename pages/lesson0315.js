import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0315 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'สมัยหนึ่งพระผู้มีพระภาค^500\nประทับอยู่ ณ กูฎาคารศาลา^500\nในป่ามหาวันใกล้พระนครเวสาลี^500\nครั้งนั้นแล^500\nอุคค คฤหบดีชาวเมืองเวสาลี^500\nได้เข้าไปเฝ้าพระผู้มีพระภาค^500\nถึงที่ประทับ^500\nครั้นแล้วได้ทูลถามพระผู้มีพระภาค^500\nว่าข้าแต่พระองค์ผู้เจริญ^500\nเหตุปัจจัยอะไรหนอแล^500\nเป็นเครื่องให้สัตว์บางพวก^500\nในโลกนี้ไม่ปรินิพพานในปัจจุบัน^500\nอนึ่ง เหตุปัจจัยอะไร^500\nเป็นเครื่องให้สัตว์บางพวก^500\nในโลกนี้ปรินิพพานในปัจจุบัน',
        'พระผู้มีพระภาคตรัสว่า^500\nมีอยู่แลคฤหบดี^500\nรูปทั้งหลายอันบุคคลพึงรู้แจ้ง^500\nด้วยจักษุอันน่าปรารถนาน่าใคร่น่าพอใจ^500\nน่ารัก ชักให้ใคร่^500\nชวนให้กำหนัด ^500\nหากว่าภิกษุเพลิน^500\nหมกมุ่น พัวพันรูปนั้น^500\nเมื่อภิกษุนั้นเพลิน^500\nหมกมุ่น พัวพันรูปนั้นอยู่^500\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี^500\nอุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมมี^500\nภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน^500\nเสียง กลิ่น รส^500\nโผฏฐัพพะ และธรรมารมณ์^500\nอันบุคคลพึงรู้แจ้งด้วยใจ^500\nอันน่าปรารถนาน่าใคร่ น่าพอใจ^500\nน่ารักชักให้ใคร่^500\nชวนให้กำหนัด^500\nหากว่าภิกษุ เพลิดเพลิน^500\nหมกมุ่นพัวพันธรรมารมณ์นั้น^500\nเมื่อภิกษุนั้นเพลิดเพลิน^500\nหมกมุ่น พัวพันธรรมารมณ์นั้นอยู่^500\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี^500\nอุปาทานอาศัยซึ่งปัญหานั้นก็ย่อมมี^500\nภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน^500\nดูกรคฤหบดีเหตุปัจจัยนี้แล^500\nเป็นเครื่องให้สัตว์บางพวก^500\nในโลกนี้ไม่ปรินิพพานในปัจจุบัน',
        'ดูกรและคฤหบดี^500\nรูปอันบุคคลพึงรู้แจ้งด้วยจักษุ^500\nอันน่าปรารถนาน่าใคร่น่าพอใจ^500\nน่ารัก ชักให้ใคร่^500\nชวนให้กำหนัด^500\nหากว่าภิกษุไม่เพลิดเพลิน^500\nไม่หมกมุ่นไม่พัวพันรูปนั้น^500\nเมื่อภิกษุนั้นไม่เพลิดเพลิน^500\nไม่หมกมุ่นไม่พัวพันรูปนั้นอยู่^500\nวิญญาณอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี^500\nอุปาทานอันอาศัยซึ่งตัณหา^500\nนั้นก็ย่อมไม่มี^500\nภิกษุผู้ไม่มีอุปทานย่อมปรินิพพาน^500\nเสียง กลิ่น รส^500\nโผฏฐัพพะ และธรรมารมณ์ ^500\nอันบุคคลพึงรู้แจ้งด้วยใจ^500\nอันน่าปรารถนาน่าใคร่ น่าพอใจ^500\nน่ารัก ชักให้ใคร่ ชวนให้กำหนัด^500\nหากภิกษุไม่เพลิดเพลิน^500\nไม่หมกมุ่น ไม่พัวพันธรรมารมณ์นั้น^500\nเมื่อภิกษุนั้นไม่เพลินไม่หมกมุ่น^500\nไม่พัวพันในธรรมารมณ์นั้นอยู่^500\nวิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี^500\nอุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี^500\nภิกษุผู้ไม่มีอุปาทานย่อมปรินิพพาน'
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
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0512 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'อนาคตสูตรที่ 2^500\nว่าด้วยภัยในอนาคต 5 ประการ^500\nดูกรภิกษุทั้งหลาย^500\nภิกษุผู้เห็นภัย^500\nในอนาคต 5 ประการนี้^500\nก็ควรเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยว^500\nเพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ^500\nเพื่อทำให้แจ้งธรรม^500\nที่ยังไม่ได้ทำให้แจ้ง^500\nภัย 5 ประการเป็นไฉนคือ^500\nภิกษุในธรรมวินัยนี้^500\nย่อมพิจารณาเห็นดังนี้ว่า^500\nบัดนี้เรายังเป็นหนุ่มแน่น^500\nมีผมดำสนิท^500\nประกอบด้วยความเป็นหนุ่ม^500\nอันเจริญตั้งอยู่ในปฐมวัย^500\nถึงกระนั้นก็มีสมัยที่ชรา^500\nย่อมจะถูกต้องกายนี้ได้^500\nก็ผู้ที่แก่แล้วถูกชราครอบงำแล้ว^500\nจะมนสิการคำสั่งสอนของพระพุทธเจ้า^500\nไม่ใช่ทำได้ง่าย^500\nจะเสพเสนาสนะอันสงัด^500\nคือป่า และป่าชัฏก็ไม่ใช่ทำได้ง่าย^500\nก่อนที่ธรรมอันไม่น่าปรารถนา^500\nไม่น่าใคร่ไม่น่าพอใจนั้นจะมาถึงเรา^500\nเราจะรีบปรารภความเพียร^500\nเพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อทำให้แจ้งธรรม^500\nที่ยังไม่ได้ทำให้แจ้งเสียก่อนทีเดียว^500\nซึ่งเราประกอบแล้วแม้แก่ก็จักอยู่สบาย^500\nดูกรภิกษุทั้งหลาย^500\nภิกษุผู้เห็นภัยในอนาคตข้อที่ 1 นี้^500\nควรเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยวอยู่^500\nเพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ^500\nเพื่อทำให้แจ้งทำที่ยังไม่ได้ทำให้แจ้ง',
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า^500\nบัตนี้เรามีอาพาธน้อยมีโรคเบาบาง^500\nประกอบด้วยไฟธาตุ^500\nสำหรับย่อยอาหารสม่ำเสมอ^500\nไม่เย็นนะไม่ร้อนนักขนาดกลาง^500\nควรแก่การบำเพ็ญเพียร^500\nแต่ย่อมมีสมัยที่พยาธิจะถูกต้องกายนี้^500\nก็ผู้ที่ป่วยไข้อันความป่วยไข้ครอบงำแล้ว^500\nจะมนสิการคำสั่งสอนของพระพุทธเจ้า^500\nไม่ใช่ทำได้ง่าย^500\nซึ่งเราประกอบแล้วแม้ป่วยไข้^500\nก็จะอยู่สบาย^500\nภิกษุเห็นภัยในอนาคตข้อที่ 2 นี้^500\nควรเป็นผู้ไม่ประมาท',
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า^500\nบัดนี้แลข้าวกล้าดีบิณฑบาตก็หาได้ง่าย^500\nสะดวกแก่การแสวงหาเลี้ยงชีพ^500\nแต่ก็ย่อมมีสมัยที่มีข้าวแพง^500\nข้าวกล้าไม่ดีบิณฑบาตหาได้ยาก^500\nไม่สะดวกแก่การแสวงหาเลี้ยงชีพ^500\nอนึ่งในสมัยข้าวแพง^500\nพวกมนุษย์ย่อมหลั่งไหลไปในที่ที่มีอาหารดี^500\nในที่นั้นย่อมมีการอยู่คลุกคลีด้วยหมู่คณะ^500\nมีการอยู่พลุกพล่านกัน^500\nเมื่อมีการอยู่คลุกคลีด้วยหมู่คณะ^500\nอยู่พลุกพล่านกัน^500\nจะมนสิการคำสั่งสอนของพระพุทธเจ้า^500\nไม่ใช่ทำได้ง่าย^500\nซึ่งเราประกอบแล้วก็จักอยู่สบาย^500\nแม้ในเวลาทุพภิกขภัย^500\nภิกษุผู้เห็นภัยในอนาคตข้อที่ 3 นี้^500\nควรเป็นผู้ไม่ประมาท',
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า^500\nบัดนี้แลมนุษย์ทั้งหลายย่อมเป็นผู้พร้อมเพรียงกัน^500\nชื่นชมต่อกันไม่วิวาทกัน^500\nเป็นดังน้ำนมกับน้ำ ^500\nมองดูกันด้วยนัยน์ตาแสดงความรักอยู่^500\nแต่ย่อมมีสมัยที่มีภัยมีความปั่นป่วน^500\nในดงประชาชนวุ่นวาย^500\nและเมื่อมีภัยพวกมนุษย์ย่อมหลั่งไหล^500\nไปในที่ที่ปลอดภัย^500\nในที่นั้นย่อมมีการอยู่คลุกคลีด้วยหมู่คณะ^500\nมีการอยู่พลุกพล่านกัน^500\nเมื่อมีการอยู่คลุกคลีด้วยหมู่คณะ^500\nอยู่พลุกพล่าน^500\nจะมนสิการคำสั่งสอนของพระพุทธเจ้า^500\nไม่ใช่ทำได้ง่าย^500\nซึ่งเราประกอบแล้วก็จักอยู่สบาย^500\nแม้ในสมัยที่มีภัย^500\nภิกษุผู้เห็นภัยในอนาคตข้อที่ 4 นี้^500\nควรเป็นผู้ไม่ประมาท',
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า^500\nบัดนี้แลสงฆ์เป็นผู้พร้อมเพรียงกัน^500\nชื่นชมต่อกันไม่วิวาทกัน^500\nมีอุเทศร่วมกันอยู่ผาสุข^500\nแต่ก็ย่อมมีสมัยที่สงฆ์แตกกัน^500\nก็เมื่อสงฆ์แตกกันแล้ว^500\nจะมมสิการคำสั่งสอนของพระพุทธเจ้า^500\nไม่ใช่ทำได้ง่าย^500\nจะเสพเสนาสนะอันสงัดคือป่า^500\nและป่าชัฏก็ไม่ใช่ทำได้ง่าย^500\nก่อนที่ธรรมอันไม่น่าปรารถนา^500\nไม่น่าใคร่ไม่น่าพอใจนั้นจะมาถึงเรา^500\nเราจะรีบปรารภความเพียร^500\nเพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ^500\nเพื่อทำให้แจ้งธรรมที่ยังไม่ได้ทำให้แจ้ง^500\nซึ่งเราประกอบแล้วก็จะอยู่สบาย^500\nแม้ในเมื่อสงฆ์แตกกัน^500\nดูกรภิกษุทั้งหลาย^500\nภิกษุผู้เห็นภัยในอนาคตข้อที่ 5 นี้แล^500\nควรเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยว^500\nอยู่เพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ^500\nเพื่อทำให้แจ้งทำที่ยังไม่ได้ทำให้แจ้ง^500\nดูกรภิกษุทั้งหลาย^500\nภิกษุผู้เห็นภัยในอนาคต 5 ประการนี้^500\nควรเป็นผู้ไม่ประมาท^500\nมีความเพียรมีใจเด็ดเดี่ยว^500\nอยู่เพื่อถึงธรรมที่ยังไม่ถึง^500\nเพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ^500\nเพื่อทำให้แจ้งทำที่ยังไม่ได้ทำให้แจ้ง'
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
            <a href="/lesson0601">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>อนาคตสูตรที่ 2</h2>
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

export default Lesson0512;
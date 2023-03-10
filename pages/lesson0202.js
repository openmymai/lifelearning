import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0202 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป\nรูปไม่เที่ยงเกิดดับ\nจักขุไม่เที่ยงเกิดดับ\nรูปไม่เที่ยงเกิดดับ\nจักขุวิญญาณไม่เที่ยงเกิดดับ\nจักขุสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของตาเห็นรูป\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากจักขุสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของตาเห็นรูป\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'หูได้ยินเสียง\nเสียงไม่เที่ยงเกิดดับ\nโสตะไม่เที่ยงเกิดดับ\nเสียงไม่เที่ยงเกิดดับ\nโสตะวิญญาณไม่เที่ยงเกิดดับ\nโสตะสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของหูได้ยินเสียง\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากโสตะสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของหูได้ยินเสียง\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'จมูกได้กลิ่น\nกลิ่นไม่เที่ยงเกิดดับ\nฆานะไม่เที่ยงเกิดดับ\nกลิ่นไม่เที่ยงเกิดดับ\nฆานะวิญญาณไม่เที่ยงเกิดดับ\nฆานะสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของจมูกได้กลิ่น\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากฆานะสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของจมูกได้กลิ่น\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ลิ้นได้รส รสไม่เที่ยงเกิดดับ\nชิวหาไม่เที่ยงเกิดดับ\nรสไม่เที่ยงเกิดดับ\nชิวหาวิญญาณไม่เที่ยงเกิดดับ\nชิวหาสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของลิ้นได้รส\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากชิวหาสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของลิ้นได้รส\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'กายสัมผัส\nสัมผัสไม่เที่ยงเกิดดับ\nกายไม่เที่ยงเกิดดับ\nสัมผัสไม่เที่ยงเกิดดับ\nกายวิญญาณไม่เที่ยงเกิดดับ\nกายสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของกายสัมผัส\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากกายสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของกายสัมผัส\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ใจคิดนึก\nความคิดไม่เที่ยงเกิดดับ\nมโนไม่เที่ยงเกิดดับ\nธรรมารมณ์ไม่เที่ยงเกิดดับ\nมโนวิญญาณไม่เที่ยงเกิดดับ\nมโนสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของใจคิดนึก\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข\nที่เกิดจากมโนสัมผัสเป็นปัจจัย\nคือผลต่อเนื่องของ\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของใจคิดนึก\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nทุกสิ่งทุกอย่างที่มากระทบสัมผัส\nมีองค์ประกอบและผลต่อเนื่องเหมือนกัน\nมันเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ'
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
            <a href="/lesson0203">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>การพิจารณาอินทรีย์ 6</h2>
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

export default Lesson0202;
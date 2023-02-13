import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0505 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'อานาปานสติภาวนา\nดูกรราหุล\nเธอจงเจริญอานาปานสติภาวนาเถิด\nเพราะอานาปานสติ\nที่บุคคลเจริญแล้วทำให้มากแล้ว\nย่อมมีผลมีอานิสงส์ใหญ่\nก็อานาปานสติอันบุคคลเจริญอย่างไร\nทำให้มากอย่างไร\nจึงมีผลใหญ่มีอานิสงส์ใหญ่\nดูกรราหุล\nภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดี อยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างก็ดี\nนั่งคู้บัลลังก์ตั้งกายตรง\nดำรงสติไว้เฉพาะหน้า\nเธอมีสติหายใจออก\nมีสติหายใจเข้า\nเมื่อหายใจออกยาว\nก็รู้ชัดว่าหายใจออกยาว\nเมื่อหายใจเข้ายาว\nก็รู้ชัดว่าหายใจเข้ายาว\nเมื่อหายใจออกสั้น\nก็รู้ชัดว่าหายใจออกสั้น\nเมื่อหายใจเข้าสั้น\nก็รู้ชัดว่าหายใจเข้าสั้น\nย่อมสำเหนียกว่า\nจักกำหนดรู้กองลมทั้งปวงหายใจออก\nย่อมสำเหนียกว่า\nจักกำหนดรู้กองลมทั้งปวงหายใจเข้า\nย่อมสำเหนียกว่า\nจักระงับกายสังขารหายใจออก\nย่อมสำเหนียกว่า\nจักระงับกายสังขารหายใจเข้า\nย่อมสำเหนียกว่า\nจักกำหนดรู้ปิติหายใจออก\nย่อมสำเหนียกว่า\nจักกำหนดรู้ปิติหายใจเข้า\nย่อมสำเหนียกว่า\nจักกำหนดรู้สึกหายใจออก\nย่อมสำเหนียกว่า\nจักกำหนดรู้สึกหายใจเข้า\nย่อมสำเหนียกว่า\nจักกำหนดรู้จิตสังขารหายใจออก\nย่อมสำเหนียกว่า\nจักกำหนดรู้จิตสังขารหายใจเข้า\nย่อมสำเหนียกว่า\nจักระงับจิตสังขารหายใจออก\nย่อมสำเหนียกว่า\nจักระงับจิตสังขารหายใจเข้า\nย่อมสำเหนียกว่า\nจักกำหนดรู้จิตหายใจออก\nย่อมสำเหนียกว่า\nจักกำหนดรู้จิตหายใจเข้า\nย่อมสำเหนียกว่า\nจักทำจิตให้ร่าเริงหายใจออก\nย่อมสำเหนียกว่า\nจักทำจิตให้ร่าเริงหายใจเข้า\nย่อมสำเหนียกว่า\nจักดำรงจิตมั่นหายใจออก\nย่อมสำเหนียกว่า\nจักดำรงจิตมั่นหายใจเข้า\nย่อมสำเหนียกว่า\nจักเปลื้องจิตหายใจออก\nย่อมสำเหนียกว่า\nจักเปลื้องจิตหายใจเข้า\nย่อมสำเหนียกว่าจักพิจารณา\nโดยความเป็นของไม่เที่ยงหายใจออก\nย่อมสำเหนียกว่าจักพิจารณา\nโดยความเป็นของไม่เที่ยงหายใจเข้า\nย่อมสำเหนียกว่าจักพิจารณา\nธรรมอันปราศจากราคะหายใจออก\nย่อมสำเหนียกว่าจักพิจารณา\nธรรมอันปราศจากราคะหายใจเข้า\nย่อมสำเหนียกว่าจักพิจารณา\nธรรมเป็นที่ดับสนิทหายใจออก \nย่อมสำเหนียกว่าจักพิจารณา\nธรรมเป็นที่ดับสนิทหายใจเข้า\nย่อมสำเหนียกว่าจักพิจารณา\nธรรมเป็นที่สละคืนหายใจออก\nย่อมสำเหนียกว่าจักพิจารณา\nธรรมเป็นที่สละคืนหายใจเข้า',
        'ดูกรราหุล\nอานาปานสติที่บุคคลเจริญแล้วอย่างนี้\nทำให้มากแล้วอย่างนี้\nย่อมมีผลใหญ่มีอานิสงส์ใหญ่\nดูกรราหุล\nเมื่ออานาปานสติอันบุคคลเจริญแล้วอย่างนี้\nทำให้มากแล้วอย่างนี้\nลมอัสสาสะปัสสาสะอันมีในภายหลัง\nอันบุคคลผู้เจริญอานาปานสติ\nทราบชัดแล้วย่อมดับไป\nหาเป็นอันบุคคลผู้เจริญอานาปานสติ\nไม่ทราบชัดแล้วดับไปไม่ได้ดังนี้\nพระผู้มีพระภาคได้ตรัสพระพุทธพจน์นี้แล้ว\nท่านพระราหุลมีใจยินดี\nชื่นชมพระภาษิตของพระผู้มีพระภาคดังนี้แล'
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
            <h2 style={{display: 'inline-block'}}>อานาปานสติภาวนา</h2>
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

export default Lesson0505;
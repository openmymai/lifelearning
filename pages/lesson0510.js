import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0510 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ปริวีมังสนสูตร\nว่าด้วยการพิจารณา\nเพื่อความสิ้นทุกข์โดยชอบ\nข้าพเจ้าสดับมาแล้วอย่างนี้\nสมัยหนึ่งพระผู้มีพระภาค\nประทับอยู่ ณ พระเชตวัน\nอารามของท่านอนาถบิณฑิกเศรษฐี\nเขตพระนครสาวัตถี\nณ ที่นั้นแลพระผู้มีพระภาค\nตรัสเรียกภิกษุทั้งหลายว่า\nดูกรภิกษุทั้งหลาย\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า\nพระพุทธเจ้าข้า\nพระผู้มีพระภาคได้ตรัสว่า\nดูกรภิกษุทั้งหลายด้วยเหตุเท่าไรหนอแล\nภิกษุเมื่อพิจารณาพึงพิจารณา\nเพื่อความสิ้นทุกข์โดยชอบ\nโดยประการทั้งปวง\nภิกษุเหล่านั้นทูลว่าพระพุทธเจ้าข้า\nธรรมทั้งหลายของพวกข้าพระองค์\nมีพระผู้มีพระภาคเป็นที่ตั้ง\nมีพระผู้มีพระภาคเป็นผู้นำ\nมีพระผู้มีพระภาคเป็นที่พึ่ง\nได้โปรดเถิดพระพุทธเจ้าข้า\nขอเนื้อความแห่งภาษิตนี้จงแจ่มแจ้ง\nกะพระผู้มีพระภาคเถิด\nภิกษุทั้งหลายได้ฟัง\nต่อพระผู้มีพระภาคแล้ว\nจะทรงจำไว้\nพระผู้มีพระภาคตรัสว่า\nดูกรภิกษุทั้งหลายถ้าเช่นนั้น\nเธอทั้งหลายจงฟังจงใส่ใจให้ดี\nเราจักกล่าว\nภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว\nพระผู้มีพระภาคได้ตรัสว่า\nดูกรภิกษุทั้งหลายภิกษุในธรรมวินัยนี้\nเมื่อพิจารณาย่อมพิจารณาว่า\nทุกข์คือชราและมรณะ\nมีประการต่างๆมากมายเกิดขึ้นในโลก\nทุกข์นี้มีอะไรเป็นเหตุ\nมีอะไรเป็นสมุทัย\nมีอะไรเป็นกรรม\nมีอะไรเป็นแดนเกิดหนอแล\nเมื่ออะไรมีชราและมรณะจึงมี\nเมื่ออะไรไม่มีชราและมรณะจึงไม่มี\nภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า\nทุกข์คือชราและมรณะ\nมีประการต่างๆมากมายเกิดขึ้นในโลก\nทุกข์นี้แลมีชาติเป็นเหตุ\nมีชาติเป็นสมุทัย\nมีชาติเป็นกำเนิด\nมีชาติเป็นแดนเกิด\nเมื่อชาติมีชราและมรณะจึงมี\nเมื่อชาติไม่มีชราและมรณะจึงไม่มี\nภิกษุนั้นย่อมรู้ประจักษ์ชราและมรณะ\nย่อมรู้ประจักษ์เหตุเกิดชราและมรณะ\nย่อมรู้ประจักษ์ความดับแห่งชราและมรณะ\nย่อมรู้ประจักษ์ปฏิปทาอันสมควร\nที่ให้ถึงความดับแห่งชราและมรณะ\nและย่อมเป็นผู้ปฏิบัติอย่างนั้น\nเป็นผู้ประพฤติธรรมอันสมควร\nดูกรภิกษุทั้งหลาย\nภิกษุนี้เราเรียกว่า\nเป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ\nโดยประการทั้งปวง\nเพื่อความดับแห่งชราและมรณะ\nอีกประการหนึ่ง\nภิกษุเมื่อพิจารณาย่อมพิจารณาว่า\nก็ชาตินี้มีอะไรเป็นเหตุ\nมีอะไรเป็นสมุทัย\nมีอะไรเป็นกำเนิด\nมีอะไรเป็นแดนเกิด\nเมื่ออะไรมี ชาติจึงมี\nเมื่ออะไรไม่มี ชาติจึงไม่มี\nภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า\nชาติมีภพเป็นเหตุ\nมีภพเป็นสมุทัย\nมีภพเป็นกำเนิด\nมีภพเป็นแดนเกิด\nเมื่อภพมีชาติจึงมี\nเมื่อภพไม่มีชาติจึงไม่มี\nภิกษุนั้นย่อมรู้ประจักษ์ชาติ\nย่อมรู้ประจักษ์เหตุเกิดแห่งชาติ\nย่อมรู้ประจักษ์ความดับแห่งชาติ\nย่อมรู้ประจักษ์ปฏิปทาอันสมควร\nที่ให้ถึงความดับแห่งชาติ\nและย่อมเป็นผู้ปฏิบัติอย่างนั้น\nเป็นผู้ประพฤติธรรมอันสมควร\nภิกษุนี้เราเรียกว่า\nเป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ\nโดยประการทั้งปวง\nเพื่อความดับแห่งชาติ',
        'อีกประการหนึ่งภิกษุเมื่อพิจารณา\nย่อมพิจารณาว่า\nก็ภพนี้มีอะไรเป็นเหตุ ฯลฯ\nก็อุปาทานนี้มีอะไรเป็นเหตุ ฯลฯ\nก็ตัณหานี้มีอะไรเป็นเหตุ ฯลฯ\nก็เวทนานี้มีอะไรเป็นเหตุ​ ฯลฯ\nก็ผัสสะนี้มีอะไรเป็นเหตุ ฯลฯ\nก็สฬายตนะนี้มีอะไรเป็นเหตุ ฯลฯ\nก็นามรูปนี้มีอะไรเป็นเหตุ ฯลฯ\nก็วิญญาณนี้มีอะไรเป็นเหตุ ฯลฯ\nก็สังขารนี้มีอะไรเป็นเหตุ\nมีอะไรเป็นสมุทัย\nมีอะไรเป็นกำเนิด\nมีอะไรเป็นแดนเกิด\nเมื่ออะไรมีสังขารจึงมี\nเมื่ออะไรไม่มีสังขารจึงไม่มี\nภิกษุนั้นเมื่อพิจารณาย่อมรู้ประจักษ์ว่า\nสังขารมีอวิชชาเป็นเหตุ\nมีอวิชชาเป็นสมุทัยมีอวิชชาเป็นกำเนิด\nมีอวิชชาเป็นแดนเกิด\nเมื่ออวิชามีสังขารจึงมี\nเมื่ออวิชชาไม่มีสังขารจึงไม่มี\nภิกษุนั้นย่อมรู้ประจักษ์สังขาร\nย่อมรู้ประจักษ์เหตุเกิดแห่งสังขาร\nย่อมรู้ประจักษ์ความดับแห่งสังขาร\nย่อมรู้ประจักษ์ปฏิปทาอันสมควร\nที่ให้ถึงความดับแห่งสังขาร\nและย่อมเป็นผู้ปฏิบัติอย่างนั้น\nเป็นผู้ประพฤติธรรมอันสมควร\nภิกษุนี้เราเรียกว่า\nเป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ\nโดยประการทั้งปวง\nเพื่อความดับแห่งสังขาร\nดูกรภิกษุทั้งหลาย\nบุคคลตกอยู่ในอวิชชา\nสังขารที่เป็นบุญปรุงแต่ง\nวิญญาณก็เข้าถึงบุญ\nถ้าสังขารที่เป็นบาปปรุงแต่ง\nวิญญาณก็เข้าถึงบาป\nถ้าสังขารที่เป็นอเนญชาปรุงแต่ง\nวิญญาณก็เข้าถึงอเนญชา\nดูกรภิกษุทั้งหลาย\nในกาลใดแลภิกษุละอวิชชาได้แล้ว\nวิชชาเกิดขึ้นแล้วในกาลนั้น\nภิกษุนั้นก็ไม่ทำกรรมเป็นบุญ\nไม่ทำกรรมเป็นบาป\nไม่ทำการเป็นอเนญชา\nเพราะสำรอกอวิชชาเสีย\nเพราะมีวิชชาเกิดขึ้น\nเมื่อไม่ทำเมื่อไม่คิด\nก็ไม่ถือมั่นอะไรๆในโลก\nเมื่อไม่ถือมั่นก็ไม่สะดุ้งกลัว\nเมื่อไม่สะดุ้งกลัวก็ปรินิพพาน\nย่อมรู้ชัดว่าชาติสิ้นแล้ว\nพรหมจรรย์อยู่จบแล้ว\nกิจที่ควรทำ ทำเสร็จแล้ว\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี\nภิกษุนั้นถ้าเสวยสุขเวทนา\nก็รู้ชัดว่าสุขเวทนานั้นไม่เที่ยง\nอันตนไม่ยึดถือแล้วด้วยตัณหา\nอันตนไม่เพลิดเพลินแล้วด้วยตัณหา\nถ้าเสวยทุกขเวทนาก็รู้ชัดว่า\nทุกขเวทนานั้นไม่เที่ยง\nอันตนไม่ยึดถือแล้วด้วยตัณหา\nอันตนไม่เพลิดเพลินแล้วด้วยตัณหา\nถ้าเสวยไม่ทุกข์ไม่สุขเวทนา\nก็รู้ชัดว่าไม่ทุกข์ไม่สุขเวทนานั้นไม่เที่ยง\nอันตนไม่ยึดถือแล้วด้วยตัณหา\nอันตนไม่เพลิดเพลินแล้วด้วยตัณหา\nภิกษุนั้นถ้าเสวยสุขเวทนา\nก็วางใจเฉยเสวยไป\nถ้าเสวยทุกขเวทนา\nก็วางใจเฉยเสวยไป\nถ้าเสวยไม่ทุกข์ไม่สุขเวทนา\nก็วางใจเฉยเสวยไป\nภิกษุนั้นเมื่อเสวยเวทนา\nที่ปรากฏทางกาย\nก็รู้ชัดว่าเราเสวยเวทนา\nที่ปรากฏทางกาย\nเมื่อเสวยเวทนา\nที่ปรากฏทางชีวิต\nก็รู้ชัดว่าเราเสวยเวทนา\nที่ปรากฏทางชีวิต\nก็รู้ชัดว่าเวทนาทั้งปวง\nอันตัณหาไม่เพลิดเพลินแล้ว\nจักเป็นของเย็น\nสรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น\nเบื้องหน้าตั้งแต่สิ้นชีวิต\nเพราะความแตกแห่งกาย',
        'ดูกรภิกษุทั้งหลาย\nบุรุษยกหม้อที่ยังร้อนออกจากเตาเผา\nเมื่อวางไว้ที่พื้นดินอันเรียบ\nไออุ่นที่หม้อนั้นพึงหายไป\nกระเบื้องหม้อยังเหลืออยู่ที่พื้นดินนั้นนั่นแหละ\nแม้ฉันใดภิกษุทั้งหลาย\nภิกษุเมื่อเสวยเวทนาที่ปรากฏทางกาย\nก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางกาย\nเมื่อเสวยเวทนาที่ปรากฏทางชีวิต\nก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางชีวิต\nก็รู้ชัดว่าเวทนาทั้งปวง\nอันตัณหาไม่เพลิดเพลินแล้ว\nจะเป็นของเย็น\nสรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น\nเบื้องหน้าตั้งแต่สิ้นชีวิต\nเพราะความแตกแห่งกายฉันนั้นเหมือนกัน',
        'ดูกรภิกษุทั้งหลาย\nพวกเธอจะสำคัญความข้อนั้นเป็นไฉน\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายว่า\nภิกษุผู้ขีณาสพพึงทำกรรมเป็นบุญบ้าง\nทำกรรมเป็นบาปบ้าง\nทำกรรมเป็นเนญชาบ้างหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อสังขารไม่มี\nโดยประการทั้งปวง\nเพราะสังขารดับวิญญาณพึงปรากฎหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อวิญญาณไม่มี\nโดยประการทั้งปวง\nเพราะวิญญาณดับนามรูปพึงปรากฎหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อนามรูปไม่มี\nโดยประการทั้งปวง\nเพราะนามรูปดับสฬายตนะพึงปรากฎหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อสฬายตนะไม่มี\nโดยประการทั้งปวง\nเพราะสฬายตนะดับผัสสะพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อผัสสะไม่มี\nโดยประการทั้งปวง\nเพราะผัสสะดับเวทนาพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี\nโดยประการทั้งปวง\nเพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี\nโดยประการทั้งปวง\nเพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อตัณหาไม่มี\nโดยประการทั้งปวง\nเพราะตัณหาดับอุปาทานพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่ออุปาทานไม่มี\nโดยประการทั้งปวง\nเพราะอุปาทานดับภพพึงปรากฏหรือหนอ\nภิกษุทั้งหลายทูลตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อภพไม่มี\nโดยประการทั้งปวง\nเพราะภพดับชาติพึงปรากฏหรือหนอ\nภิกษุทั้งหลายควรตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nพระพุทธเจ้า\nทรงตรัสถามภิกษุทั้งหลายต่อไปว่า\nก็อีกอย่างหนึ่งเมื่อชาติไม่มี\nโดยประการทั้งปวง\nเพราะชาติดับชราและมรณะพึงปรากฏหรือหนอ\nภิกษุทั้งหลายควรตอบว่า\nไม่เป็นอย่างนั้นพระเจ้าข้า\nดีละๆภิกษุทั้งหลาย\nพวกเธอจงสำคัญ\nจงเชื่อซึ่งข้อนั้นไว้อย่างนั้นเถิด\nพวกเธอจงน้อมใจไปสู่ข้อนั้นอย่างนั้นเถิด\nจงหมดความเคลือบแคลงสงสัยในข้อนั้นเถิด\nนั่นเป็นที่สุดทุกข์'
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
            <h2 style={{display: 'inline-block'}}>ปริวีมังสนสูตร</h2>
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

export default Lesson0510;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0408 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'อาพาธสูตร\nว่าด้วยหายอาพาธ\nด้วยสัญญา 10 ประการ\nสมัยหนึ่งพระผู้มีพระภาค\nประทับอยู่ ณ พระวิหารเชตวัน\nอารามของท่านอนาถบิณฑิกเศรษฐี\nใกล้พระนครสาวัตถี\nก็สมัยนั้นแล\nท่านพระคิริมานนท์อาพาธ\nได้รับทุกข์เป็นไข้หนัก\nครั้งนั้นแลท่านพระอานนท์\nเข้าไปเฝ้าพระผู้มีพระภาค\nถึงที่ประทับ\nถวายบังคมพระผู้มีพระภาค\nแล้วนั่ง ณ ที่ควรส่วนข้างหนึ่ง\nครั้นแล้ว\nได้กราบทูลพระผู้มีพระภาคว่า\nข้าแต่พระองค์ผู้เจริญ\nท่านพระคิริมานนท์อาพาธ\nได้รับทุกข์เป็นไข้หนัก\nขอประทานพระวโรกาส\nขอพระผู้มีพระภาค\nได้โปรดอนุเคราะห์\nเสด็จเยี่ยมท่านพระคิริมานนท์\nยังที่อยู่เถิดพระเจ้าข้า\nพระผู้มีพระภาคตรัสว่า',
        'ดูกรอานนท์ถ้าเธอพึงเข้าไปหา\nแล้วกล่าวสัญญา 10 ประการ\nแก่คิริมานนท์ภิกษุไซร้\nข้อที่อาพาธของคิริมานนท์ภิกษุ\nจะพึงสงบระงับโดยพลัน\nเพราะได้ฟังสัญญา 10 ประการนั้น\nเป็นฐานะที่จะมีได้\nสัญญา 10 ประการเป็นไฉน\nคืออนิจจสัญญา 1\nอนัตตสัญญา 1\nอสุภสัญญา 1\nอาทีนวสัญญา 1\nปหานสัญญา 1\nวิราคสัญญา 1 \nนิโรธสัญญา 1\nสัพพโลเกอนภิรตสัญญา 1\nสัพพสังขาเรสุอนิจจสัญญา 1\nอานาปานสติ 1',
        'ก็อนิจจสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดี\nอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nย่อมพิจารณาเห็นดังนี้ว่า\nรูปไม่เที่ยง\nเวทนาไม่เที่ยง\nสัญญาไม่เที่ยง\nสังขารทั้งหลายไม่เที่ยง\nวิญญาณไม่เที่ยง\nย่อมพิจารณา\nเห็นโดยความเป็นของไม่เที่ยง\nในอุปาทานขันธ์ 5 เหล่านี้\nด้วยประการอย่างนี้\nดูกรอานนท์นี้เรียกว่าอนิจจสัญญา',
        'ดูกรอานนท์ก็อนัตตสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดี\nอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nย่อมพิจารณาเห็นดังนี้ว่า\nจักษุเป็นอนัตตา\nรูปเป็นอนัตตา\nหูเป็นอนัตตา\nเสียงเป็นอนัตตา\nจมูกเป็นอนัตตา\nกลิ่นเป็นอนัตตา\nลิ้นเป็นอนัตตา\nรสเป็นอนัตตา\nกายเป็นอนัตตา\nโผฏฐัพพะเป็นอนัตตา\nใจเป็นอนัตตา\nธรรมารมณ์เป็นอนัตตา\nย่อมพิจารณาเห็นโดยความเป็นอนัตตา\nในอายตนะทั้งหลาย\nทั้งภายในและภายนอก \n6 ประการเหล่านี้ด้วยประการอย่างนี้\nดูกรอานนท์นี้เรียกว่าอนัตตสัญญา',
        'ดูกรอานนท์ก็อสุภสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nย่อมพิจารณาเห็นกายนี้นั่นแล\nเบื้องบนแต่พื้นเท้าขึ้นไป\nเบื้องต่ำแต่ปลายผมลงมา\nมีหนังหุ้มอยู่โดยรอบ\nเต็มด้วยของไม่สะอาด\nมีประการต่างๆว่า\nในกายนี้มีผม ขน เล็บ ฟัน หนัง\nเนื้อ เอ็น กระดูก เยื่อในกระดูก \nม้าม เนื้อหัวใจ ตับ พังผืด\nไต ปอด ไส้ใหญ่ ไส้น้อย\nอาหารใหม่ อาหารเก่า\nดี เสลด หนอง เลือด เหงื่อ\nมันข้น น้ำตา เปลวมัน น้ำลาย\nน้ำมูก ไขข้อ มูตร\nย่อมพิจารณาเห็นโดย\nความเป็นของไม่งามในกายนี้\nด้วยประการดังนี้\nดูกรอานนท์นี้เรียกว่าอสุภสัญญา',
        'ดูกรอานนท์ก็อาทีนวสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดีอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nย่อมพิจารณาเห็นดังนี้ว่า\nกายนี้มีทุกข์มาก มีโทษมาก\nเพราะฉะนั้นอาพาธต่างๆ\nจึงเกิดขึ้นในกายนี้\nคือโรคตา โรคหู โรคจมูก\nโรคลิ้น โรคกาย โรคศีรษะ\nโรคที่ใบหู โรคปาก โรคฟัน\nโรคไต โรคหืด โรคไข้หวัด\nโรคไข้พิษ โรคไข้เซื่องซึม โรคในท้อง\nโรคลมสลบ โลกบิด โรคจุกเสียด\nโลกลงราก โลกเรื้อน โลกฝี\nโรคมองคล่อ โรคลมบ้าหมู\nโรคหิดเปื่อย โรคหิดด้าน\nโรคคุดทะราด โรคละอองบวม\nโรคอาเจียนโลหิต โรคดีเดือด\nโรคเบาหวาน โรคเริม\nโรคพุพอง โรคริดสีดวง\nอาพาธมีดีเป็นสมุฏฐาน\nอาพาธมีเสมหะเป็นสมุฏฐาน\nอาพาธมีลมเป็นสมุฏฐาน\nอาพาธมีไข้สันนิบาต\nอาพาธอันเกิดแต่ฤดูแปรปรวน\nอาพาธอันเกิดแต่การบริหารไม่สม่ำเสมอ\nอาพาธอันเกิดแต่ความเพียรเกินกำลัง\nอาพาธอันเกิดแต่วิบากของกรรม\nความหนาว ความร้อน\nความหิว ความกระหาย\nปวดอุจจาระ ปวดปัสสาวะ\nย่อมพิจารณาเห็นโดยความเป็นโทษ\nในกายนี้ด้วยประการดังนี้\nดูกรอานนท์นี้เรียกว่าอาทีนวสัญญา',
        'ดูกรอานนท์ก็ปหานสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nย่อมไม่ยินดี ย่อมละ ย่อมบรรเทา\nย่อมทำให้หมดสิ้นไป \nย่อมทำให้ถึงความไม่มี\nซึ่งพยาบาทวิตกอันเกิดขึ้นแล้ว\nย่อมไม่ยินดี ย่อมละ ย่อมบรรเทา\nย่อมทำให้หมดสิ้นไป\nย่อมทำให้ถึงความไม่มี\nซึ่งพยาบาทวิตกอันเกิดขึ้นแล้ว\nย่อมไม่ยินดี ย่อมละ ย่อมบรรเทา\nย่อมทำให้หมดสิ้นไป\nย่อมทำให้ถึงความไม่มี\nซึ่งวิหิงสาวิตกอันเกิดขึ้นแล้ว\nย่อมไม่ยินดี ย่อมละ ย่อมบรรเทา\nย่อมทำให้หมดสิ้นไป\nย่อมทำให้ถึงความไม่มี\nซึ่งอกุศลธรรมทั้งหลาย\nอันชั่วช้าอันเกิดขึ้นแล้วเกิดขึ้นแล้ว\nดูกรอานนท์นี้เรียกว่าปหานสัญญา',
        'ดูกรอานนท์ก็วิราคสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดีอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nย่อมพิจารณาเห็นดังนี้ว่า\nธรรมชาตินั่นสงบ\nธรรมชาตินั่นประณีต\nคือธรรมเป็นที่ระงับสังขารทั้งปวง\nธรรมเป็นที่สละคืนอุปธิทั้งปวง\nธรรมเป็นที่สิ้นไปแห่งตัณหา\nธรรมเป็นที่สำรอกกิเลส\nธรรมชาติเป็นที่ดับกิเลสและกองทุกข์\nดูกรอานนท์นี้เรียกว่าริราคสัญญา',
        'ดูกรอานนท์นิโรธสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดี\nอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nย่อมพิจารณาเห็นดังนี้ว่า\nธรรมชาตินั่นสงบ\nธรรมชาตินั่นประณีต\nคือธรรมเป็นที่ระงับสังขารทั้งปวง\nธรรมเป็นที่สละคืนอุปธิทั้งปวง\nธรรมเป็นที่สิ้นไปแห่งตัณหา\nธรรมเป็นที่ดับโดยไม่เหลือ\nธรรมชาติเป็นที่ดับกิเลสและกองทุกข์\nดูกรอานนท์นี้เรียกว่านิโรธสัญญา',
        'ดูกรอานนท์\nสัพพโลเกอนภิรตสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nละอุบายและอุปาทานในโลก\nอันเป็นเหตุตั้งมั่นถือมั่น\nและเป็นอนุสัยแห่งจิต\nย่อมงดเว้น ไม่ถือมั่น\nดูกรอานนท์นี้เรียกว่า\nสัพพโลเกอนภิรตสัญญา',
        'ดูกรอานนท์\nสัพพสังขาเรสุอนิจจสัญญาเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nย่อมอึดอัด ย่อมระอา\nย่อมเกลียดชังแต่สังขารทั้งปวง\nดูกรอานนท์นี้เรียกว่า\nสัพพสังขาเรสุอนิจจสัญญา',
        'ดูกรอานนท์อานาปานสติเป็นไฉน\nดูกรอานนท์ภิกษุในธรรมวินัยนี้\nอยู่ในป่าก็ดี\nอยู่ที่โคนไม้ก็ดี\nอยู่ในเรือนว่างเปล่าก็ดี\nนั่งคู้บัลลังก์ตั้งกายให้ตรง\nดำรงสติไว้เฉพาะหน้า\nเธอเป็นผู้มีสติหายใจออก\nเป็นผู้มีสติหายใจเข้า\nเมื่อหายใจออกยาว\nก็รู้ชัดว่าหายใจออกยาว\nหรือเมื่อหายใจเข้ายาว\nก็รู้ชัดว่าหายใจเข้ายาว\nเมื่อหายใจออกสั้น\nก็รู้ชัดว่าหายใจออกสั้น\nหรือเมื่อหายใจเข้าสั้น\nก็รู้ชัดว่าหายใจเข้าสั้น\nย่อมศึกษาว่าจักเป็นผู้กำหนดรู้\nกายทั้งปวงหายใจออก\nย่อมศึกษาว่าจักเป็นผู้กำหนดรู้\nกายทั้งปวงหายใจเข้า\nย่อมศึกษาว่าจักระงับ\nกายสังขารหายใจออก\nย่อมศึกษาว่าจักระงับ\nกายสังขารหายใจเข้า\nย่อมศึกษาว่าจักกำหนดรู้\nปิติหายใจออก\nย่อมศึกษาว่าจักกำหนดรู้\nปิติหายใจเข้า\nย่อมศึกษาว่าจักกำหนดรู้\nสุขหายใจออก\nย่อมศึกษาว่าจักกำหนดรู้\nสุขหายใจเข้า\nย่อมศึกษาว่าจักกำหนดรู้\nจิตตสังขารหายใจออก\nย่อมศึกษาว่าจักกำหนดรู้\nจิตตสังขารหายใจเข้า\nย่อมศึกษาว่าจักระงับจิตตสังขาร\nหายใจออก\nย่อมศึกษาว่าจักระงับจิตตสังขาร\nหายใจเข้า\nย่อมศึกษาว่าจักกำหนดรู้\nจิตหายใจออก\nย่อมศึกษาว่าจักกำหนดรู้\nจิตหายใจเข้า\nย่อมศึกษาว่าจักยังจิต\nให้บันเทิงหายใจออก\nย่อมศึกษาว่าจักยังจิต\nให้บันเทิงหายใจเข้า\nย่อมศึกษาว่าจักตั้งจิต\nให้มั่นหายใจออก\nย่อมศึกษาว่าจักตั้งจิต\nให้มั่นหายใจเข้า\nย่อมศึกษาว่าจักเปลื้องจิต\nหายใจออก\nย่อมศึกษาว่าจักเปลื้องจิต\nหายใจเข้า\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความเป็นของไม่เที่ยง\nหายใจออก\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความเป็นของไม่เที่ยง\nหายใจเข้า\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความคลายกำหนัดหายใจออก\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nโดยความคลายกำหนัดหายใจเข้า\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความดับสนิทหายใจออก\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความดับสนิทหายใจเข้า\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความสละคืนหายใจออก\nย่อมศึกษาว่าจักเป็นผู้พิจารณา\nเห็นโดยความสละคืนหายใจเข้า\nดูกรอานนท์นี้เรียกว่าอานาปานสติ',
        'ดูกรอานนท์ถ้าเธอพึงเข้าไปหา\nแล้วกล่าวสัญญา 10 ประการนี้\nแก่คิริมานนท์ภิกษุไซร้\nข้อที่อาพาธของคิริมานนท์ภิกษุ\nจะพึงสงบระงับโดยพลัน\nเพราะได้ฟังสัญญา 10 ประการนี้\nเป็นฐานะที่จะมีได้',
        'ลำดับนั้นแลท่านพระอานนท์\nได้เรียนสัญญา 10 ประการนี้\nในสำนักของพระผู้มีพระภาคแล้ว\nได้เข้าไปหาท่านพระคิริมานนท์ยังที่อยู่\nครั้นแล้วได้กล่าวสัญญา 10 ประการ\nแก่ท่านพระคิริมานนท์\nครั้งนั้นแลอาพาธนั้น\nของท่านพระคิริมานนท์สงบระงับโดยพลัน\nเพราะได้ฟังสัญญา 10 ประการนี้\nท่านพระคิริมานนท์\nหายจากอาพาธนั้นก็แล\nอาพาธนั้น\nเป็นโรคอันพระคิริมานนท์ละได้แล้ว\nด้วยประการนั้นแล'
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
            <h2 style={{display: 'inline-block'}}>อาพาธสูตร</h2>
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

export default Lesson0408;
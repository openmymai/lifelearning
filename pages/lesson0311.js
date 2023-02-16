import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0311 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ราหุลสูตร^500\nว่าด้วยสิ่งใดไม่เที่ยงสิ่งนั้นก็เป็นทุกข์^500\nสมัยหนึ่งพระผู้มีพระภาค\nประทับอยู่ ณ พระวิหารเชตวัน^500\nอารามของท่านอนาถบิณฑิกเศรษฐี^500\nใกล้พระนครสาวัตถี^500\nครั้งนั้นพระผู้มีพระภาค\nทรงหลีกเร้นอยู่ในที่สงัด^500\nทรงเกิดปริวิตก\nแห่งพระหฤทัยอย่างนี้ว่า^500\nธรรมที่เป็นเครื่องบ่มวิมุติ\nของราหุลแก่กล้าแล้ว^500\nถ้ากระไรเราควรแนะนำราหุล\nในธรรมเป็นที่สิ้นไป\nแห่งอาสวะยิ่งขึ้นไปเถิด^500\nครั้นทรงพระดำริฉะนี้แล้ว^500\nในเวลาเช้าพระผู้มีพระภาค^500\nทรงครองอันตรวาสก\nทรงถือบาตรและจีวร\nเสด็จเข้าไปบิณฑบาต^500\nยังพระนครสาวัตถี^500\nครั้นเวลาภายหลัง^500\nเสด็จกลับจากบิณฑบาตแล้ว^500\nตรัสเรียกท่านพระราหุลมาตรัสว่า^500\nราหุลเธอจงถือผ้านิสีทนะ\nไปสู่ป่าอันธวันด้วยกัน^500\nเพื่อพักผ่อนในเวลากลางวัน',
        'ท่านพระราหุลทูลรับพระดำรัส\nพระผู้มีพระภาค^500\nแล้วได้ถือผ้านิสีทนะ\nตามเสด็จพระผู้มีพระภาคไปข้างหลัง^500\nก็สมัยนั้นพวกเทวดาหลายพัน\nติดตามพระผู้มีพระภาคไปด้วยกัน^500\nคิดว่าวันนี้พระผู้มีพระภาค\nจักทรงแนะนำท่านพระราหุล^500\nในธรรมเป็นที่สิ้นอาสวะยิ่งขึ้นไป^500\nครั้งนั้นพระผู้มีพระภาค\nเสด็จเข้าไปสู่ป่าอันธวัน^500\nประทับ ณ พุทธอาสน์\nที่พระราหุลปูลาดถวาย\nที่ควงตันไม้แห่งหนึ่ง^500\nฝ่ายท่านพระราหุล\nถวายอภิวาทพระผู้มีพระภาคแล้ว^500\nนั่ง ณ ที่ควรส่วนข้างหนึ่ง',
        '1. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nจักษุเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n2. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n3. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n4. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nรูปเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n5. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n6. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n7. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nจักษุวิญญาณ\nจักษุสัมผัส^500\nเวทนา สัญญา สังขาร วิญญาณ^500\nที่เกิดขึ้นเพราะจักษุสัมผัส\nเป็นปัจจัยเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n8. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง^500\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า',
        '9. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n10. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nใจเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n11. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n12. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n13. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nธรรมารมณ์เที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n14. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n15. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n16. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nมโนวิญญาณเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า',
        '17. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n18. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n19. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nมโนสัมผัสเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n20. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n21. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า^500\n22. พระพุทธเจ้า\nทรงตรัสถามพระราหุลว่า^500\nเวทนา สัญญา สังขาร วิญญาณ^500\nที่เกิดขึ้นเพราะมโนสัมผัส^500\nเป็นปัจจัยเที่ยงหรือไม่เที่ยง^500\nพระราหุลตอบว่า^500\nไม่เที่ยงพระเจ้าข้า^500\n23. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า^500\nพระราหุลตอบว่า^500\nเป็นทุกข์พระเจ้าข้า^500\n24. พระพุทธเจ้า\nทรงตรัสถามพระราหุลต่อไปว่า^500\nก็สิ่งใดไม่เที่ยง\nเป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ\nที่จะตามเห็นสิ่งนั้น\nว่านั่นเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nพระราหุลตอบว่า^500\nไม่ควรเห็นอย่างนั้นพระเจ้าข้า',
        'อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้^500\nย่อมเบื่อหน่ายทั้งในจักษุ^500\nทั้งในรูป^500\nทั้งในจักษุวิญญาณ^500\nทั้งในจักษุสัมผัส^500\nทั้งในเวทนา สัญญา สังขาร วิญญาณ^500\nที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย^500\nย่อมเบื่อหน่ายทั้งในใจ^500\nทั้งในธรรมารมณ์^500\nทั้งในมโนวิญญาณ^500\nทั้งในมโนสัมผัส^500\nทั้งในเวทนา สัญญา สังขาร วิญญาณ^500\nที่เกิดขึ้นเพราะมโนสัมผัสเป็นปัจจัย^500\nเมื่อเบื่อหน่ายย่อมคลายกำหนัด^500\nเพราะคลายกำหนัดจิตย่อมหลุดพ้น^500\nเมื่อจิตหลุดพ้นแล้ว^500\nย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว^500\nรู้ชัดว่าชาติสิ้นแล้ว^500\nพรหมจรรย์อยู่จบแล้ว^500\nกิจที่ควรทำ ทำเสร็จแล้ว^500\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี^500\nพระผู้มีพระภาคเจ้า^500\nตรัสพระสูตรนี้จบลงแล้ว^500\nท่านพระราหุลชื่นชมยินดี\nพระภาษิตของพระผู้มีพระภาคเจ้า^500\nอนึ่งเมื่อพระผู้มีพระภาคเจ้า\nตรัสไวยากรณ์ภาษิตนี้อยู่^500\nจิตของท่านพระราหุลหลุดพ้นแล้ว^500\nจากอาสวะไม่ถือมั่นด้วยอุปาทาน^500\nฝ่ายเทวดาหลานพัน\nก็เกิดธรรมจักษุ^500\nอันปราศจากธุลีปราศจากมลทิน^500\nว่าสิ่งใดสิ่งหนึ่ง\nมีความเกิดขึ้นเป็นธรรมดา^500\nสิ่งนั้นทั้งมวลล้วนมีความดับไปเป็นธรรมดา'
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
            <h2 style={{display: 'inline-block'}}>ราหุลสูตร</h2>
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

export default Lesson0311;
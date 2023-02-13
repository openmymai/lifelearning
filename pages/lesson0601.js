import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0601 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ข้าพเจ้าได้สดับมาแล้วอย่างนี้\nสมัยหนึ่ง\nพระผู้มีพระภาคประทับอยู่\nณ เภสกฬาวัน\nอันเป็นสถานที่ให้อภัยแก่หมู่มฤค\nใกล้เมืองสุงสุมารคิระ\nในภัคคชนบท ฯลฯ\nครั้งนั้นแล\nคฤหบดีชื่อนกุลบิดา\nเข้าไปเฝ้าพระผู้มีพระภาค\nถวายอภิวาทแล้ว นั่ง ณ ที่ควร\nส่วนข้างหนึ่งแล้ว',
        'ได้กราบทูลพระผู้มีพระภาคว่า\nพระพุทธเจ้าข้า\nข้าพระองค์เป็นผู้แก่เฒ่า\nเป็นผู้ใหญ่\nล่วงกาลผ่านวัยแล้วโดยลำดับ\nมีกายกระสับกระส่าย\nเจ็บป่วยเนืองๆ\nพระพุทธเจ้าข้า\nก็ข้าพระองค์มิได้เห็น\nพระผู้มีพระภาคและภิกษุทั้งหลาย\nผู้ให้เจริญใจอยู่เป็นนิตย์\nขอพระผู้มีพระภาค\nโปรดสั่งสอนข้าพระองค์\nขอพระผู้มีพระภาค\nโปรดพร่ำสอนข้าพระองค์\nด้วยธรรมที่เป็นไปเพื่อประโยชน์\nเพื่อความสุขแก่ข้าพระองค์\nตลอดกาลนานเถิด',
        'พระผู้มีพระภาคตรัสว่า\nนั่นถูกแล้วๆ คฤหบดี\nอันที่จริง กายนี้กระสับกระส่าย\nเป็นดังว่าฟองไข่\nอันผิวหนังหุ้มไว้\nดูกรคฤหบดี\nก็บุคคลผู้บริหารกายนี้อยู่\nพึงรับรองความเป็นผู้ไม่มีโรคได้\nแม้เพียงครู่เดียว\nจะมีอะไรเล่า\nนอกจากความเป็นคนเขลา\nดูกรคฤหบดี เพราะเหตุนั้นแหละ\nท่านพึงศึกษาอย่างนี้ว่า\nเมื่อเรามีกายกระสับกระส่ายอยู่\nจิตของเราจักไม่กระสับกระส่าย\nดูกรคฤหบดี\nท่านพึงศึกษาอย่างนี้แล\nครั้งนั้นแล\nคฤหบดีชื่อนกุลบิดา\nชื่นชมยินดีพระภาษิต\nของพระผู้มีพระภาค\nลุกจากอาสนะ\nถวายอภิวาทพระผู้มีพระภาค\nทำประทักษิณแล้ว',
        'เข้าไปหาท่านพระสารีบุตร\nอภิวาทแล้ว\nนั่งอยู่ ณ ที่ควรส่วนข้างหนึ่ง\nท่านพระสารีบุตร\nได้กล่าวกะนกุลปิตคฤหบดีว่า\nคฤหบดี อินทรีย์ของท่านผ่องใสนัก\nสีหน้าของท่านบริสุทธิ์ เปล่งปลั่ง\nวันนี้ ท่านได้ฟังธรรมีกถา\nในที่เฉพาะพระพักตร์\nพระผู้มีพระภาคหรือ?\nนกุลปิตคฤหบดีตอบว่า\nข้าแต่ท่านผู้เจริญ\nไฉนจะไม่เป็นอย่างนี้เล่า\nพระผู้มีพระภาค\nทรงหลั่งอมฤตธรรม\nรดข้าพเจ้าด้วยธรรมีกถา.\nส. ดูกรคฤหบดี\nพระผู้มีพระภาคทรงหลั่งอมฤตธรรม\nรดท่านด้วยธรรมีกถาอย่างไรเล่า?\nน. ข้าแต่ท่านผู้เจริญ\nข้าพเจ้าเข้าไปเฝ้าพระผู้มีพระภาค\nถวายอภิวาทแล้ว\nนั่งอยู่ ณ ที่ควรส่วนข้างหนึ่งแล้ว\nได้กราบทูลพระผู้มีพระภาคว่า\nพระพุทธเจ้าข้า\nข้าพระองค์เป็นผู้แก่เฒ่า\nเป็นผู้ใหญ่\nล่วงกาลผ่านวัยแล้วโดยลำดับ\nมีกายกระสับกระส่ายเจ็บป่วยเนืองๆ\nพระพุทธเจ้าข้า ก็ข้าพระองค์\nมิได้เห็นพระผู้มีพระภาค\nและภิกษุทั้งหลาย\nผู้ให้เจริญใจอยู่เป็นนิตย์\nขอพระผู้มีพระภาค\nโปรดสั่งสอนข้าพระองค์\nขอพระผู้มีพระภาค\nโปรดพร่ำสอนข้าพระองค์\nด้วยธรรมที่เป็นไปเพื่อประโยชน์\nเพื่อความสุขแก่ข้าพระองค์\nตลอดกาลนานเถิด\nเมื่อข้าพเจ้ากราบทูลอย่างนี้แล้ว\nพระผู้มีพระภาคตรัสว่า นั่นถูกแล้วๆ คฤหบดี\nอันที่จริงกายนี้กระสับกระส่าย\nเป็นดังว่าฟองไข่ อันผิวหนังหุ้มไว้\nดูกรคฤหบดี ก็บุคคลผู้บริหารกายนี้อยู่\nพึงรับรองความเป็นผู้ไม่มีโรค\nได้แม้เพียงครู่เดียว\nจะมีอะไรเล่า นอกจากความเป็นคนเขลา\nดูกรคฤหบดี เพราะเหตุนั้นแหละ\nท่านพึงศึกษาอย่างนี้ว่า\nเมื่อเรามีกายกระสับกระส่ายอยู่\nจิตของเราจักไม่กระสับกระส่าย\nดูกรคฤหบดี ท่านพึงศึกษาอย่างนี้แล\nข้าแต่พระองค์ผู้เจริญ\nพระผู้มีพระภาคทรงหลั่งอมฤตธรรม\nรดข้าพเจ้าด้วยธรรมีกถาอย่างนี้แล.\nส. ดูกรคฤหบดี\nก็ท่านมิได้ทูลสอบถาม\nพระผู้มีพระภาคต่อไปว่า\nพระพุทธเจ้าข้า\nด้วยเหตุเท่าไรหนอ?\nบุคคลจึงชื่อว่า\nเป็นผู้มีกายกระสับกระส่าย\nและเป็นผู้มีจิตกระสับกระส่าย\nและก็ด้วยเหตุเท่าไรหนอ?\nบุคคลแม้เป็นผู้มีกายกระสับกระส่าย\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่\nน. ข้าแต่ท่านผู้เจริญ\nข้าพเจ้ามาแม้แต่ที่ไกล\nเพื่อจะทราบเนื้อความแห่งภาษิตนั้น\nในสำนักท่านพระสารีบุตร ดีละหนอ\nขอเนื้อความแห่งภาษิตนั้นจงแจ่มแจ้ง\nกะท่านพระสารีบุตรเถิด.\nส. ดูกรคฤหบดี ถ้าเช่นนั้น\nท่านจงฟัง\nจงใส่ใจให้ดี\nเราจักกล่าว.\nนกุลปิตคฤหบดี\nรับคำท่านพระสารีบุตรแล้ว\nท่านพระสารีบุตรจึงได้กล่าวว่า\nสักกายทิฏฐิ ๒๐\nดูกรคฤหบดี ก็อย่างไรเล่า?\nบุคคลจึงชื่อว่า\nเป็นผู้มีกายกระสับกระส่ายด้วย\nจึงชื่อว่าเป็นผู้มีจิตกระสับกระส่ายด้วย\nดูกรคฤหบดี\nคือปุถุชนผู้มิได้สดับแล้วในโลกนี้\nมิได้เห็นพระอริยะทั้งหลาย\nไม่ฉลาดในธรรมของพระอริยะ\nมิได้รับแนะนำในอริยธรรม\nมิได้เห็นสัตบุรุษทั้งหลาย\nไม่ฉลาดในธรรมของสัตบุรุษ\nมิได้รับแนะนำในสัปปุริสธรรม\nย่อมเห็นรูปโดย\nความเป็นตน ๑\nย่อมเห็นตนมีรูป ๑\nย่อมเห็นรูปในตน ๑\nย่อมเห็นตนในรูป ๑\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นรูป รูปของเรา\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นรูป รูปของเรา\nรูปนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะรูปแปรปรวนเป็นอย่างอื่นไป \nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงเกิดขึ้น\nย่อมเห็นเวทนาโดยความเป็นตน ๑\nย่อมเห็นตนมีเวทนา ๑\nย่อมเห็นเวทนาในตน ๑\nย่อมเห็นตนในเวทนา ๑\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นเวทนา เวทนาของเรา\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นเวทนา เวทนาของเรา\nเวทนานั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะเวทนาแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์โทมนัส\nและอุปายาสจึงเกิดขึ้น\nย่อมเห็นสัญญาโดยความเป็นตน ๑\nย่อมเห็นตนมีสัญญา ๑\nย่อมเห็นสัญญาในตน ๑\nย่อมเห็นตนในสัญญา ๑\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสัญญา สัญญาของเรา\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสัญญา สัญญาของเรา\nสัญญานั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะสัญญาแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงเกิดขึ้น.\nย่อมเห็นสังขารโดยความเป็นตน ๑\nย่อมเห็นตนมีสังขาร ๑\nย่อมเห็นสังขารในตน ๑\nย่อมเห็นตนในสังขาร ๑\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสังขาร สังขารของเรา\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสังขาร สังขารของเรา\nสังขารนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะสังขารแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงเกิดขึ้น\nย่อมเห็นวิญญาณโดยความเป็นตน ๑\nย่อมเห็นตนมีวิญญาณ ๑\nย่อมเห็นวิญญาณในตน ๑\nย่อมเห็นตนในวิญญาณ ๑\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นวิญญาณ วิญญาณของเรา\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นวิญญาณ วิญญาณของเรา\nวิญญาณนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะวิญญาณแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงเกิดขึ้น\nดูกรคฤหบดี  ด้วยเหตุอย่างนี้แล\nบุคคลจึงชื่อว่าเป็นผู้มีกายกระสับกระส่าย\nและเป็นผู้มีจิตกระสับกระส่าย\nดูกรคฤหบดี ก็อย่างไรเล่า?\nบุคคลแม้เป็นผู้มีกายกระสับกระส่าย\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่\nดูกรคฤหบดี คือ อริยสาวกผู้ได้สดับแล้ว\nในธรรมวินัยนี้ ผู้เห็นพระอริยะทั้งหลาย\nผู้ฉลาดในธรรมของพระอริยะ\nผู้ได้รับแนะนำดีแล้วในอริยธรรม\nผู้เห็นสัตบุรุษทั้งหลาย\nผู้ฉลาดในธรรมของสัตบุรุษ\nผู้ได้รับแนะนำดีแล้วในสัปปุริสธรรม\nย่อมไม่เห็นรูปโดยความเป็นตน ๑\nย่อมไม่เห็นตนมีรูป ๑\nย่อมไม่เห็นรูปในตน ๑\nย่อมไม่เห็นตนในรูป ๑\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นรูป รูปของเรา\nเมื่ออริยสาวกนั้น\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นรูป รูปของเรา\nรูปนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะรูปแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงไม่เกิดขึ้น\nย่อมไม่เห็นเวทนาโดยความเป็นตน ๑\nย่อมไม่เห็นตนมีเวทนา ๑\nย่อมไม่เห็นเวทนาในตน ๑\nย่อมไม่เห็นตนในเวทนา ๑\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นเวทนา เวทนาของเรา\nเมื่ออริยสาวกนั้น\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นเวทนา เวทนาของเรา\nเวทนานั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะเวทนาแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงไม่เกิดขึ้น\nย่อมไม่เห็นสัญญาโดยความเป็นตน ๑\nย่อมไม่เห็นตนมีสัญญา ๑\nย่อมไม่เห็นสัญญาในตน ๑\nย่อมไม่เห็นตนในสัญญา ๑\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสัญญา สัญญาของเรา\nเมื่ออริยสาวกนั้น\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสัญญา สัญญาของเรา\nสัญญานั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะสัญญาแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงไม่เกิดขึ้น\nย่อมไม่เห็นสังขารโดยความเป็นตน ๑\nย่อมไม่เห็นตนมีสังขาร ๑\nย่อมไม่เห็นสังขารในตน ๑\nย่อมไม่เห็นตนในสังขาร ๑\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสังขารสังขารของเรา\nเมื่ออริยสาวกนั้น\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นสังขาร สังขารของเรา\nสังขารนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะสังขารแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์ โทมนัส\nและอุปายาสจึงไม่เกิดขึ้น\nย่อมไม่เห็นวิญญาณโดยความเป็นตน ๑\nย่อมไม่เห็นตนมีวิญญาณ ๑\nย่อมไม่เห็นวิญญาณในตน ๑\nย่อมไม่เห็นตนในวิญญาณ ๑\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นวิญญาณ วิญญาณของเรา\nเมื่ออริยสาวกนั้น\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า\nเราเป็นวิญญาณ วิญญาณของเรา\nวิญญาณนั้นย่อมแปรปรวนเป็นอย่างอื่นไป\nเพราะวิญญาณแปรปรวนเป็นอย่างอื่นไป\nโสกะ ปริเทวะ ทุกข์  โทมนัส\nและอุปายาสจึงไม่เกิดขึ้น\nดูกรคฤหบดี อย่างนี้แล\nบุคคลแม้มีกายกระสับกระส่าย\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่\nท่านพระสารีบุตรได้กล่าวคำเช่นนี้แล้ว\nนกุลปิตคฤหบดี ชื่นชมยินดีภาษิตของท่าน\nพระสารีบุตร ฉะนี้แล'
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
            <h2 style={{display: 'inline-block'}}>นกุลปิตาสูตร</h2>
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

export default Lesson0601;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0601 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ข้าพเจ้าได้สดับมาแล้วอย่างนี้^500\nสมัยหนึ่ง^500\nพระผู้มีพระภาคประทับอยู่^500\nณ เภสกฬาวัน^500\nอันเป็นสถานที่ให้อภัยแก่หมู่มฤค^500\nใกล้เมืองสุงสุมารคิระ^500\nในภัคคชนบท ฯลฯ^500\nครั้งนั้นแล^500\nคฤหบดีชื่อนกุลบิดา^500\nเข้าไปเฝ้าพระผู้มีพระภาค^500\nถวายอภิวาทแล้ว นั่ง ณ ที่ควร^500\nส่วนข้างหนึ่งแล้ว',
        'ได้กราบทูลพระผู้มีพระภาคว่า^500\nพระพุทธเจ้าข้า^500\nข้าพระองค์เป็นผู้แก่เฒ่า^500\nเป็นผู้ใหญ่^500\nล่วงกาลผ่านวัยแล้วโดยลำดับ^500\nมีกายกระสับกระส่าย^500\nเจ็บป่วยเนืองๆ^500\nพระพุทธเจ้าข้า^500\nก็ข้าพระองค์มิได้เห็น^500\nพระผู้มีพระภาคและภิกษุทั้งหลาย^500\nผู้ให้เจริญใจอยู่เป็นนิตย์^500\nขอพระผู้มีพระภาค^500\nโปรดสั่งสอนข้าพระองค์^500\nขอพระผู้มีพระภาค^500\nโปรดพร่ำสอนข้าพระองค์^500\nด้วยธรรมที่เป็นไปเพื่อประโยชน์^500\nเพื่อความสุขแก่ข้าพระองค์^500\nตลอดกาลนานเถิด',
        'พระผู้มีพระภาคตรัสว่า^500\nนั่นถูกแล้วๆ คฤหบดี^500\nอันที่จริง กายนี้กระสับกระส่าย^500\nเป็นดังว่าฟองไข่^500\nอันผิวหนังหุ้มไว้^500\nดูกรคฤหบดี^500\nก็บุคคลผู้บริหารกายนี้อยู่^500\nพึงรับรองความเป็นผู้ไม่มีโรคได้^500\nแม้เพียงครู่เดียว^500\nจะมีอะไรเล่า^500\nนอกจากความเป็นคนเขลา^500\nดูกรคฤหบดี เพราะเหตุนั้นแหละ^500\nท่านพึงศึกษาอย่างนี้ว่า^500\nเมื่อเรามีกายกระสับกระส่ายอยู่^500\nจิตของเราจักไม่กระสับกระส่าย^500\nดูกรคฤหบดี^500\nท่านพึงศึกษาอย่างนี้แล^500\nครั้งนั้นแล^500\nคฤหบดีชื่อนกุลบิดา^500\nชื่นชมยินดีพระภาษิต^500\nของพระผู้มีพระภาค^500\nลุกจากอาสนะ^500\nถวายอภิวาทพระผู้มีพระภาค^500\nทำประทักษิณแล้ว',
        'เข้าไปหาท่านพระสารีบุตร^500\nอภิวาทแล้ว^500\nนั่งอยู่ ณ ที่ควรส่วนข้างหนึ่ง^500\nท่านพระสารีบุตร^500\nได้กล่าวกะนกุลปิตคฤหบดีว่า^500\nคฤหบดี อินทรีย์ของท่านผ่องใสนัก^500\nสีหน้าของท่านบริสุทธิ์ เปล่งปลั่ง^500\nวันนี้ ท่านได้ฟังธรรมีกถา^500\nในที่เฉพาะพระพักตร์^500\nพระผู้มีพระภาคหรือ?^500\nนกุลปิตคฤหบดีตอบว่า^500\nข้าแต่ท่านผู้เจริญ^500\nไฉนจะไม่เป็นอย่างนี้เล่า^500\nพระผู้มีพระภาค^500\nทรงหลั่งอมฤตธรรม^500\nรดข้าพเจ้าด้วยธรรมีกถา.^500\nส. ดูกรคฤหบดี^500\nพระผู้มีพระภาคทรงหลั่งอมฤตธรรม^500\nรดท่านด้วยธรรมีกถาอย่างไรเล่า?^500\nน. ข้าแต่ท่านผู้เจริญ^500\nข้าพเจ้าเข้าไปเฝ้าพระผู้มีพระภาค^500\nถวายอภิวาทแล้ว^500\nนั่งอยู่ ณ ที่ควรส่วนข้างหนึ่งแล้ว^500\nได้กราบทูลพระผู้มีพระภาคว่า^500\nพระพุทธเจ้าข้า^500\nข้าพระองค์เป็นผู้แก่เฒ่า^500\nเป็นผู้ใหญ่^500\nล่วงกาลผ่านวัยแล้วโดยลำดับ^500\nมีกายกระสับกระส่ายเจ็บป่วยเนืองๆ^500\nพระพุทธเจ้าข้า ก็ข้าพระองค์^500\nมิได้เห็นพระผู้มีพระภาค^500\nและภิกษุทั้งหลาย^500\nผู้ให้เจริญใจอยู่เป็นนิตย์^500\nขอพระผู้มีพระภาค^500\nโปรดสั่งสอนข้าพระองค์^500\nขอพระผู้มีพระภาค^500\nโปรดพร่ำสอนข้าพระองค์^500\nด้วยธรรมที่เป็นไปเพื่อประโยชน์^500\nเพื่อความสุขแก่ข้าพระองค์^500\nตลอดกาลนานเถิด^500\nเมื่อข้าพเจ้ากราบทูลอย่างนี้แล้ว^500\nพระผู้มีพระภาคตรัสว่า นั่นถูกแล้วๆ คฤหบดี^500\nอันที่จริงกายนี้กระสับกระส่าย^500\nเป็นดังว่าฟองไข่ อันผิวหนังหุ้มไว้^500\nดูกรคฤหบดี ก็บุคคลผู้บริหารกายนี้อยู่^500\nพึงรับรองความเป็นผู้ไม่มีโรค^500\nได้แม้เพียงครู่เดียว^500\nจะมีอะไรเล่า นอกจากความเป็นคนเขลา^500\nดูกรคฤหบดี เพราะเหตุนั้นแหละ^500\nท่านพึงศึกษาอย่างนี้ว่า^500\nเมื่อเรามีกายกระสับกระส่ายอยู่^500\nจิตของเราจักไม่กระสับกระส่าย^500\nดูกรคฤหบดี ท่านพึงศึกษาอย่างนี้แล^500\nข้าแต่พระองค์ผู้เจริญ^500\nพระผู้มีพระภาคทรงหลั่งอมฤตธรรม^500\nรดข้าพเจ้าด้วยธรรมีกถาอย่างนี้แล.^500\nส. ดูกรคฤหบดี^500\nก็ท่านมิได้ทูลสอบถาม^500\nพระผู้มีพระภาคต่อไปว่า^500\nพระพุทธเจ้าข้า^500\nด้วยเหตุเท่าไรหนอ?^500\nบุคคลจึงชื่อว่า^500\nเป็นผู้มีกายกระสับกระส่าย^500\nและเป็นผู้มีจิตกระสับกระส่าย^500\nและก็ด้วยเหตุเท่าไรหนอ?^500\nบุคคลแม้เป็นผู้มีกายกระสับกระส่าย^500\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่^500\nน. ข้าแต่ท่านผู้เจริญ^500\nข้าพเจ้ามาแม้แต่ที่ไกล^500\nเพื่อจะทราบเนื้อความแห่งภาษิตนั้น^500\nในสำนักท่านพระสารีบุตร ดีละหนอ^500\nขอเนื้อความแห่งภาษิตนั้นจงแจ่มแจ้ง^500\nกะท่านพระสารีบุตรเถิด.^500\nส. ดูกรคฤหบดี ถ้าเช่นนั้น^500\nท่านจงฟัง^500\nจงใส่ใจให้ดี^500\nเราจักกล่าว.^500\nนกุลปิตคฤหบดี^500\nรับคำท่านพระสารีบุตรแล้ว^500\nท่านพระสารีบุตรจึงได้กล่าวว่า^500\nสักกายทิฏฐิ ๒๐^500\nดูกรคฤหบดี ก็อย่างไรเล่า?^500\nบุคคลจึงชื่อว่า^500\nเป็นผู้มีกายกระสับกระส่ายด้วย^500\nจึงชื่อว่าเป็นผู้มีจิตกระสับกระส่ายด้วย^500\nดูกรคฤหบดี^500\nคือปุถุชนผู้มิได้สดับแล้วในโลกนี้^500\nมิได้เห็นพระอริยะทั้งหลาย^500\nไม่ฉลาดในธรรมของพระอริยะ^500\nมิได้รับแนะนำในอริยธรรม^500\nมิได้เห็นสัตบุรุษทั้งหลาย^500\nไม่ฉลาดในธรรมของสัตบุรุษ^500\nมิได้รับแนะนำในสัปปุริสธรรม^500\nย่อมเห็นรูปโดย^500\nความเป็นตน ๑^500\nย่อมเห็นตนมีรูป ๑^500\nย่อมเห็นรูปในตน ๑^500\nย่อมเห็นตนในรูป ๑^500\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นรูป รูปของเรา^500\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นรูป รูปของเรา^500\nรูปนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะรูปแปรปรวนเป็นอย่างอื่นไป ^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงเกิดขึ้น^500\nย่อมเห็นเวทนาโดยความเป็นตน ๑^500\nย่อมเห็นตนมีเวทนา ๑^500\nย่อมเห็นเวทนาในตน ๑^500\nย่อมเห็นตนในเวทนา ๑^500\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นเวทนา เวทนาของเรา^500\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นเวทนา เวทนาของเรา^500\nเวทนานั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะเวทนาแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์โทมนัส^500\nและอุปายาสจึงเกิดขึ้น^500\nย่อมเห็นสัญญาโดยความเป็นตน ๑^500\nย่อมเห็นตนมีสัญญา ๑^500\nย่อมเห็นสัญญาในตน ๑^500\nย่อมเห็นตนในสัญญา ๑^500\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสัญญา สัญญาของเรา^500\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสัญญา สัญญาของเรา^500\nสัญญานั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะสัญญาแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงเกิดขึ้น.^500\nย่อมเห็นสังขารโดยความเป็นตน ๑^500\nย่อมเห็นตนมีสังขาร ๑^500\nย่อมเห็นสังขารในตน ๑^500\nย่อมเห็นตนในสังขาร ๑^500\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสังขาร สังขารของเรา^500\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสังขาร สังขารของเรา^500\nสังขารนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะสังขารแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงเกิดขึ้น^500\nย่อมเห็นวิญญาณโดยความเป็นตน ๑^500\nย่อมเห็นตนมีวิญญาณ ๑^500\nย่อมเห็นวิญญาณในตน ๑^500\nย่อมเห็นตนในวิญญาณ ๑^500\nเป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นวิญญาณ วิญญาณของเรา^500\nเมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นวิญญาณ วิญญาณของเรา^500\nวิญญาณนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะวิญญาณแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงเกิดขึ้น^500\nดูกรคฤหบดี  ด้วยเหตุอย่างนี้แล^500\nบุคคลจึงชื่อว่าเป็นผู้มีกายกระสับกระส่าย^500\nและเป็นผู้มีจิตกระสับกระส่าย^500\nดูกรคฤหบดี ก็อย่างไรเล่า?^500\nบุคคลแม้เป็นผู้มีกายกระสับกระส่าย^500\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่^500\nดูกรคฤหบดี คือ อริยสาวกผู้ได้สดับแล้ว^500\nในธรรมวินัยนี้ ผู้เห็นพระอริยะทั้งหลาย^500\nผู้ฉลาดในธรรมของพระอริยะ^500\nผู้ได้รับแนะนำดีแล้วในอริยธรรม^500\nผู้เห็นสัตบุรุษทั้งหลาย^500\nผู้ฉลาดในธรรมของสัตบุรุษ^500\nผู้ได้รับแนะนำดีแล้วในสัปปุริสธรรม^500\nย่อมไม่เห็นรูปโดยความเป็นตน ๑^500\nย่อมไม่เห็นตนมีรูป ๑^500\nย่อมไม่เห็นรูปในตน ๑^500\nย่อมไม่เห็นตนในรูป ๑^500\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นรูป รูปของเรา^500\nเมื่ออริยสาวกนั้น^500\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นรูป รูปของเรา^500\nรูปนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะรูปแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงไม่เกิดขึ้น^500\nย่อมไม่เห็นเวทนาโดยความเป็นตน ๑^500\nย่อมไม่เห็นตนมีเวทนา ๑^500\nย่อมไม่เห็นเวทนาในตน ๑^500\nย่อมไม่เห็นตนในเวทนา ๑^500\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นเวทนา เวทนาของเรา^500\nเมื่ออริยสาวกนั้น^500\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นเวทนา เวทนาของเรา^500\nเวทนานั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะเวทนาแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงไม่เกิดขึ้น^500\nย่อมไม่เห็นสัญญาโดยความเป็นตน ๑^500\nย่อมไม่เห็นตนมีสัญญา ๑^500\nย่อมไม่เห็นสัญญาในตน ๑^500\nย่อมไม่เห็นตนในสัญญา ๑^500\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสัญญา สัญญาของเรา^500\nเมื่ออริยสาวกนั้น^500\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสัญญา สัญญาของเรา^500\nสัญญานั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะสัญญาแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงไม่เกิดขึ้น^500\nย่อมไม่เห็นสังขารโดยความเป็นตน ๑^500\nย่อมไม่เห็นตนมีสังขาร ๑^500\nย่อมไม่เห็นสังขารในตน ๑^500\nย่อมไม่เห็นตนในสังขาร ๑^500\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสังขารสังขารของเรา^500\nเมื่ออริยสาวกนั้น^500\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นสังขาร สังขารของเรา^500\nสังขารนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะสังขารแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์ โทมนัส^500\nและอุปายาสจึงไม่เกิดขึ้น^500\nย่อมไม่เห็นวิญญาณโดยความเป็นตน ๑^500\nย่อมไม่เห็นตนมีวิญญาณ ๑^500\nย่อมไม่เห็นวิญญาณในตน ๑^500\nย่อมไม่เห็นตนในวิญญาณ ๑^500\nไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นวิญญาณ วิญญาณของเรา^500\nเมื่ออริยสาวกนั้น^500\nไม่ตั้งอยู่ด้วยความยึดมั่นว่า^500\nเราเป็นวิญญาณ วิญญาณของเรา^500\nวิญญาณนั้นย่อมแปรปรวนเป็นอย่างอื่นไป^500\nเพราะวิญญาณแปรปรวนเป็นอย่างอื่นไป^500\nโสกะ ปริเทวะ ทุกข์  โทมนัส^500\nและอุปายาสจึงไม่เกิดขึ้น^500\nดูกรคฤหบดี อย่างนี้แล^500\nบุคคลแม้มีกายกระสับกระส่าย^500\nแต่หาเป็นผู้มีจิตกระสับกระส่ายไม่^500\nท่านพระสารีบุตรได้กล่าวคำเช่นนี้แล้ว^500\nนกุลปิตคฤหบดี ชื่นชมยินดีภาษิตของท่าน^500\nพระสารีบุตร ฉะนี้แล'
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
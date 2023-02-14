import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0207 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'โลกและองค์ประกอบของโลก\nคือดิน น้ำ ลม ไฟ\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ผลต่อเนื่องของโลกคือวัตถุสิ่งของ\nแผ่นดิน แผ่นน้ำ ลมฟ้าอากาศ\nต้นไม้ ใบหญ้า สัตว์ บุคคล^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nประกอบด้วยดิน น้ำ ลม ไฟ^500\nเป็นเหตุเป็นปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ชีวิตและองค์ประกอบของโลก\nคือดิน น้ำ ลม ไฟ กรรมและวิญญาณ^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ผลต่อเนื่องของชีวิตคือรูปร่าง หน้าตา\nลักษณะท่าทาง นิสัยใจคอ^500\nความคิดความเห็น คำพูดการกระทำ\nดีใจเสียใจ ไปไหนมาไหน^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nประกอบด้วยดิน น้ำ ลม ไฟ^500\nเป็นเหตุเป็นปัจจัย\nมาประชุมปรุงแต่งชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น\nเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา\nไม่เที่ยงเกิดดับ ดับไม่เหลือ',
        'ปฐวีธาตุ (ธาตุดิน)\nก็ปฐวีธาตุเป็นไฉน\nคือปฐวีธาตุภายในก็มีภายนอกก็มี^500\nก็ปฐวีธาตุภายในเป็นไฉน^500\nได้แก่สิ่งที่แค่นแข็ง\nกำหนดได้มีในตนอาศัยตน^500\nคือผม ขน เล็บ ฟัน หนัง\nเนื้อ เอ็น กระดูก^500\nเยื่อในกระดูก ม้าม หัวใจ ตับ พังผืด\nไต ปอด ไส้ใหญ่ ไส้น้อย\nอาหารเก่า อาหารใหม่^500\nหรือแม้สิ่งอื่นไม่ว่าชนิดไรๆ\nที่แข้นแข็ง\nกำหนดได้มีในตนอาศัยตน^500\nนี้เรียกว่าปฐวีธาตุภายใน\nก็ปฐวีธาตุทั้งภายในและภายนอกนี้แล\nเป็นปฐวีธาตุทั้งนั้น^500\nพึงเห็นปฐวีธาตุนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรเห็นสิ่งนั้น\nว่าเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nครั้นเห็นแล้วจะเบื่อหน่ายปฐวีธาตุ\nและให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น\nปฐวีธาตุได้ไม่เที่ยงเกิดดับ',
        'อาโปธาตุ (ธาตุน้ำ)\nก็อาโปธาตุเป็นไฉน\nคืออาโปธาตุภายในก็มีภายนอกก็มี^500\nก็อาโปธาตุภายในเป็นไฉน^500\nได้แก่สิ่งที่เอิบอาบซึมซาบไป\nกำหนดได้มีในตนอาศัยตน^500\nคือ ดี เสลด น้ำเหลือง\nเลือด เหงื่อ^500\nมันข้น น้ำตา เปลวมัน\nน้ำลาย น้ำมูก ไขข้อ มูตร^500\nหรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ\nที่เอิบอาบซึมซาบไป\nกำหนดได้มีในตนอาศัยตน^500\nนี้เรียกว่าอาโปธาตุภายใน\nก็อาโปธาตุทั้งภายในและภายนอกนี้แล\nเป็นอาโปธาตุทั้งนั้น^500\nพึงเห็นอาโปธาตุนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรเห็นสิ่งนั้น\nว่าเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nครั้นเห็นแล้วจะเบื่อหน่ายอาโปธาตุ\nและให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น\nอาโปธาตุได้ไม่เที่ยงเกิดดับ',
        'วาโยธาตุ (ธาตุลม)\nก็วาโยธาตุเป็นไฉน\nคือวาโยธาตุภายในก็มีภายนอกก็มี^500\nก็วาโยธาตุภายในเป็นไฉน^500\nได้แก่สิ่งที่พัดผันไป\nกำหนดได้มีในตนอาศัยตน^500\nคือ ลมพัดขึ้นเบื้องบน\nลมพัดลงเบื้องต่ำ^500\nลมในท้อง ลมในลำไส้\nลมแล่นไปตามอวัยวะน้อยใหญ่\nลมหายใจออก ลมหายใจเข้า^500\nหรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆที่พัดผันไป\nกำหนดได้มีในตนอาศัยตน^500\nนี้เรียกว่าวาโยธาตุภายใน\nก็วาโยธาตุทั้งภายในและภายนอกนี้แล\nเป็นวาโยธาตุทั้งนั้น^500\nพึงเห็นวาโยธาตุนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรเห็นสิ่งนั้นว่าเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nครั้นเห็นแล้วจะเบื่อหน่ายวาโยธาตุ\nและให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น\nวาโยธาตุได้ไม่เที่ยงเกิดดับ',
        'เตโชธาตุ (ธาตุไฟ)\nก็เตโชธาตุเป็นไฉน\nคือเตโชธาตุภายในก็มีภายนอกก็มี^500\nก็เตโชธาตุภายในเป็นไฉน^500\nได้แก่สิ่งที่อบอุ่นถึงความเร่าร้อน\nกำหนดได้มีในตนอาศัยตน^500\nคือ ธาตุที่เป็นเครื่องยังกายให้อบอุ่น\nยังกายให้ทรุดโทรม^500\nยังกายให้กระวนกระวาย\nและธาตุที่เป็นเหตุให้ของกิน\nที่กิน ที่ดื่ม ที่เคี้ยว\nที่ลิ้มแล้วถึงความย่อยไปด้วยดี^500\nหรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ\nที่อบอุ่นถึงความเร่าร้อน\nกำหนดได้มีในตนอาศัยตน^500\nนี้เรียกว่าเตโชธาตุภายใน\nก็เตโชธาตุทั้งภายในและภายนอกนี้แล\nเป็นเตโชธาตุทั้งนั้น^500\nพึงเห็นเตโชธาตุนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรเห็นสิ่งนั้น\nว่าเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nครั้นเห็นแล้วจะเบื่อหน่ายเตโชธาตุ\nและให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น\nเตโชธาตุได้ไม่เที่ยงเกิดดับ',
        'อากาศธาตุ (ความว่าง)\nก็อากาศธาตุเป็นไฉน\nคืออากาศธาตุภายในก็มีภายนอกก็มี^500\nก็อากาศธาตุภายในเป็นไฉน^500\nได้แก่สิ่งที่ว่างปรุโปร่ง\nกำหนดได้มีในตนอาศัยตน^500\nคือ ช่องหู ช่องจมูก ช่องปาก\nซึ่งเป็นทางให้กลืนของกิน\nที่ดื่ม ที่เคี้ยว ที่ลิ้ม^500\nและเป็นทางระบายของ\nที่กิน ที่เคี้ยว ที่ดื่ม\nแล้วออกมาทางเบื้องล่าง^500\nหรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ\nที่ว่างปรุโปร่ง\nกำหนดได้มีในตนอาศัยตน^500\nนี้เรียกว่าอากาศธาตุภายใน\nก็อากาศธาตุทั้งภายในและภายนอกนี้แล\nเป็นอากาศธาตุทั้งนั้น^500\nพึงเห็นอากาศธาตุนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nเกิดจากเหตุปัจจัย\nมาประชุมกันชั่วคราว\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง\nไม่ควรเห็นสิ่งนั้น\nว่าเป็นของเรา\nเป็นเรา\nเป็นตัวตนของเรา^500\nครั้นเห็นแล้วจะเบื่อหน่ายอากาศธาตุ\nและให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น\nอากาศธาตุได้ไม่เที่ยงเกิดดับ',
        'วิญญาณธาตุ (ความรู้)\nต่อจากนั้นสิ่งที่เหลืออยู่\nก็คือวิญญาณธาตุอันบริสุทธิ์ผุดผ่อง^500\nบุคคลย่อมรู้อะไรได้ด้วยวิญญาณนั้น^500\nคือรู้ชัดว่าสุขบ้าง ทุกข์บ้าง\nไม่ทุกข์ไม่สุขบ้าง^500\nเพราะอาศัยผัสสะเป็นที่ตั้งแห่งสุขเวทนา\nย่อมเกิดสุขเวทนา^500\nบุคคลนั้นเมื่อเสวยสุขเวทนา\nย่อมรู้สึกว่ากำลังเสวยสุขเวทนาอยู่^500\nเพราะผัสสะเป็นที่ตั้ง\nแห่งสุขเวทนานั้นแลดับไป^500\nย่อมรู้สึกว่าความเสวยอารมณ์\nที่เกิดแก่ผัสสะนั้นคือตัวสุขเวทนา^500\nอันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง\nแห่งสุขเวทนาย่อมดับไปย่อมเข้าไปสงบ^500\nเพราะอาศัยผัสสะ\nเป็นที่ตั้งแห่งทุกขเวทนา\nย่อมเกิดทุกขเวทนา^500\nบุคคลนั้นเมื่อเสวยทุกขเวทนา\nย่อมรู้สึกว่ากำลังเสวยทุกขเวทนาอยู่^500\nเพราะผัสสะเป็นที่ตั้งแห่งทุกขเวทนานั้นแลดับไป\nย่อมรู้สึกว่าความเสวยอารมณ์ที่เกิดแก่ผัสสะนั้น\nคือตัวทุกขเวทนา^500\nอันเกิดเพราะอาศัยผัสสะ\nเป็นที่ตั้งแห่งทุกขเวทนาย่อมดับไป\nย่อมเข้าไปสงบ^500\nเพราะอาศัยผัสสะเป็นที่ตั้ง\nแห่งไม่ทุกข์ ไม่สุขเวทนา\nย่อมเกิดไม่ทุกข์ ไม่สุขเวทนา^500\nบุคคลนั้นเมื่อเสวย\nไม่ทุกข์ ไม่สุขเวทนา\nย่อมรู้สึกว่ากำลังเสวย\nไม่ทุกข์ ไม่สุขเวทนาอยู่^500\nเพราะผัสสะเป็นที่ตั้ง\nแห่งไม่ทุกข์ ไม่สุขเวทนานั้นแลดับไป^500\nย่อมรู้สึกว่าความเสวยอารมณ์\nที่เกิดแก่ผัสสะนั้น\nคือตัวไม่ทุกข์ ไม่สุขเวทนา^500\nอันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง\nแห่งไม่ทุกข์ ไม่สุขเวทนาย่อมดับไป\nย่อมเข้าไปสงบ^500\nเปรียบเหมือนประทีปน้ำมัน\nอาศัยน้ำมันและไส้จึงลุกโพลงอยู่ได้^500\nเพราะสิ้นน้ำมันและไส้นั้น\nและไม่เติมน้ำมันและไส้อื่น\nย่อมเป็นประทีปหมดเชื้อดับไป\nฉันใดฉันนั้นเหมือนกันแล^500\nบุคคลนั้นเมื่อเสวยเวทนามีกายเป็นที่สุด\nย่อมรู้สึกว่ากำลังเสวยเวทนามีกายเป็นที่สุด^500\nเมื่อเสวยเวทนามีชีวิตเป็นที่สุด\nย่อมรู้สึกว่ากำลังเสวยเวทนามีชีวิตเป็นที่สุด^500\nและรู้สึกว่า เบื้องหน้าแต่สิ้นชีวิตเพราะตายไปแล้ว\nความยินดีกันในโลกนี้แลจักเป็นของสงบ'
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
            <h2 style={{display: 'inline-block'}}>องค์ประกอบของโลกและชีวิต + กำหนดรู้ธาตุ 6</h2>
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

export default Lesson0207;
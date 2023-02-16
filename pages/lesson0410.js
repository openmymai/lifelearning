import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0410 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ฐานสูตร^500\nว่าด้วยฐานะ^500\nที่ควรพิจารณาเนืองๆ 5 ประการ^500\nดูกรภิกษุทั้งหลายฐานะ 5 ประการนี้^500\nอันสตรี บุรุษ คฤหัสถ์หรือบรรพชิต^500\nควรพิจารณาเนืองๆ 5 ประการเป็นไฉน^500\nคือ สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความแก่เป็นธรรมดา^500\nไม่ล่วงพ้นความแก่ไปได้ 1 ^500\nเรามีความเจ็บไข้เป็นธรรมดา^500\nไม่ล่วงพ้นความเจ็บไข้ไปได้ 1 ^500\nเรามีความตายเป็นธรรมดา^500\nไม่ล่วงพ้นความตายไปได้ 1^500\nเราต้องพลัดพรากจากของรัก^500\nของชอบใจทั้งสิ้น 1 ^500\nเรามีกรรมเป็นของตน^500\nเป็นทายาทแห่งกรรม^500\nมีกรรมเป็นกำเนิด^500\nมีกรรมเป็นเผ่าพันธุ์^500\nมีกรรมเป็นที่พึ่ง ^500\nจะทำกรรมใดไว้ดีก็ตาม^500\nชั่วก็ตาม^500\nเราจะเป็นผู้รับผลของกรรมนั้น 1',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์อะไร^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความแก่เป็นธรรมดา^500\nไม่ล่วงพ้นความแก่ไปได้^500\nดูกรภิกษุทั้งหลาย^500\nความมัวเมาในความเป็นหนุ่มสาว^500\nมีอยู่แก่สัตว์ทั้งหลาย^500\nซึ่งเป็นเหตุให้สัตว์ทั้งหลาย^500\nประพฤติทุจริตด้วยกายวาจาใจ^500\nเมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ^500\nย่อมละความมัวเมา^500\nในความเป็นหนุ่มสาวนั้นได้^500\nโดยสิ้นเชิง^500\nหรือทำให้เบาบางลงได้',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์นี้แล^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความแก่เป็นธรรมดา^500\nไม่ล่วงพ้นความแก่ไปได้^500\nดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์อะไร^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความเจ็บไข้เป็นธรรมดา^500\nไม่ล่วงพ้นความเจ็บไข้ไปได้^500\nดูกรภิกษุทั้งหลาย^500\nความมัวเมาในความไม่มีโรค^500\nมีอยู่แก่สัตว์ทั้งหลาย^500\nซึ่งเป็นเหตุให้สัตว์ทั้งหลาย^500\nประพฤติทุจริตด้วยกายวาจาใจ^500\nเมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ^500\nย่อมละความมัวเมา^500\nในความไม่มีโรคนั้นได้^500\nโดยสิ้นเชิง^500\nหรือทำให้เบาบางลงได้',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์นี้แล^500\nสตรี บุรุษ คฤหัสถ์หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความเจ็บไข้เป็นธรรมดา^500\nไม่ล่วงพ้นความเจ็บไข้ไปได้^500\nดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์อะไร^500\nสตรี บุรุษ คฤหัสถ์หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความตายเป็นธรรมดา^500\nไม่ล่วงพ้นความตายไปได้^500\nดูกรภิกษุทั้งหลาย^500\nความเมาในชีวิตมีอยู่แก่สัตว์ทั้งหลาย^500\nซึ่งเป็นเหตุให้สัตว์ทั้งหลาย^500\nประพฤติทุจริตด้วยกายวาจาใจ^500\nเมื่อเข้าพิจารณาฐานะนั้นอยู่เนืองๆ^500\nย่อมละความมัวเมาในชีวิตนั้นได้^500\nโดยสิ้นเชิง^500\nหรือทำให้เบาบางลงได้',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์นี้แล^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีความตายเป็นธรรมดา^500\nไม่ล่วงพ้นความตายไปได้^500\nดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์อะไร^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nจึงควรพิจารณาเนืองๆว่า^500\nเราจะต้องพลัดพรากจากของรัก^500\nของชอบใจทั้งสิ้น^500\nดูกรภิกษุทั้งหลาย^500\nความพอใจ ความรักใคร่^500\nในของรักมีอยู่แก่สัตว์ทั้งหลาย^500\nซึ่งเป็นเหตุให้สัตว์ทั้งหลาย^500\nประพฤติทุจริตด้วยกายวาจาใจ^500\nเมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ^500\nย่อมละความพอใจความรักใคร่นั้นได้^500\nโดยสิ้นเชิง^500\nหรือทำให้เบาบางลงได้',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์นี้แล^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเราจะต้องพลัดพรากจากของรัก^500\nของชอบใจทั้งสิ้น^500\nดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์อะไร^500\nสตรี บุรุษ คฤหัสถ์ หรือบรรพชิต^500\nควรพิจารณาเนืองๆว่า^500\nเรามีกรรมเป็นของตน^500\nเป็นทายาทแห่งกรรม^500\nมีกรรมเป็นกำเนิด^500\nมีกรรมเป็นเผ่าพันธุ์^500\nมีกรรมเป็นที่พึ่ง^500\nจะทำกรรมใดดีก็ตามชั่วก็ตาม^500\nเราจะเป็นผู้รับผลของกรรมนั้น^500\nดูกรภิกษุทั้งหลาย^500\nกายทุจริตวจีทุจริตมโนทุจริต^500\nมีอยู่แก่สัตว์ทั้งหลาย^500\nเมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ^500\nย่อมละทุจริตได้โดยสิ้นเชิง^500\nหรือทำให้เบาบางลงได้',
        'ดูกรภิกษุทั้งหลาย^500\nเพราะอาศัยอำนาจประโยชน์นี้แล^500\nสตรี บุรุษ คฤหัสถ์หรือบรรพชิต^500\nจึงควรพิจารณาเนืองๆว่า^500\nเรามีกรรมเป็นของตน^500\nเป็นทายาทแห่งกรรม^500\nมีกรรมเป็นกำเนิด^500\nมีกรรมเป็นเผ่าพันธุ์^500\nมีกรรมเป็นที่พึ่ง^500\nจะทำกรรมใดดีก็ตามชั่วก็ตาม^500\nเราจะเป็นผู้รับผลของกรรมนั้น^500\n^500\nว่าด้วยผลแห่งการพิจารณาฐานะ 5^500\nดูกรภิกษุทั้งหลาย^500\nอริยสาวกนั้นย่อมพิจารณา^500\nเห็นดังนี้ว่าไม่ใช่เราแต่ผู้เดียวเท่านั้น^500\nที่มีความแก่เป็นธรรมดา^500\nไม่ล่วงพ้นความแก่ไปได้^500\nโดยที่แท้สัตว์ทั้งปวงบรรดา^500\nที่มีการมาการไปการจุติการอุปบัติ^500\nล้วนมีความแก่เป็นธรรมดา^500\nไม่ล่วงพ้นความแก่ไปได้',
        'เมื่ออริยสาวกนั้น^500\nพิจารณาฐานะนั้นอยู่เนืองๆ^500\nมรรคย่อมเกิดขึ้น^500\nอริยสาวกนั้นย่อมเสพอบรม^500\nทำให้มากซึ่งมรรคนั้น^500\nเมื่อเสพอบรมทำให้มากซึ่งมรรคนั้นอยู่^500\nย่อมละสังโยชน์ได้^500\nอนุสัยย่อมสิ้นไป^500\nอริยสาวกนั้นย่อมพิจารณา^500\nเห็นดังนี้ว่าไม่ใช่เราแต่ผู้เดียวเท่านั้น^500\nที่มีความเจ็บไข้เป็นธรรมดา^500\nไม่ล่วงพ้นความเจ็บไข้ไปได้^500\nโดยที่แท้สัตว์ทั้งปวง^500\nบรรดาที่มีการมาการไปการจุติการอุปบัติ^500\nล้วนมีความเจ็บไข้เป็นธรรมดา^500\nไม่ล่วงพ้นความเจ็บไข้ไปได้^500\nเมื่ออริยสาวกนั้นพิจารณาฐานะ^500\nนั้นอยู่เนืองๆมรรคย่อมเกิดขึ้น^500\nอริยสาวกนั้นย่อมเสพอบรม^500\nทำให้มากซึ่งมรรคนั้น^500\nเมื่อเสพอบรมทำให้มากซึ่งมรรคนั้นอยู่^500\nย่อมละสังโยชน์ได้อนุสัยย่อมสิ้นไป',
        'อริยสาวกนั้นย่อมพิจารณา^500\nเห็นดังนี้ว่าไม่ใช่เราแต่ผู้เดียวเท่านั้น^500\nที่มีความตายเป็นธรรมดา^500\nไม่ล่วงพ้นความตายไปได้^500\nโดยที่แท้สัตว์ทั้งปวง^500\nบรรดาที่มีการมาการไปการจุติการอุปบัติ^500\nล้วนมีความตายเป็นธรรมดา^500\nไม่ล่วงพ้นความตายไปได้เมื่อ^500\nอริยสาวกนั้นพิจารณาฐานะ^500\nนั้นอยู่เนืองๆมรรคย่อมเกิดขึ้น^500\nอริยสาวกนั้นย่อมเสพอบรม^500\nทำให้มากซึ่งมรรคนั้น^500\nเมื่อเสพอบรมทำให้มากซึ่งมรรคนั้นอยู่^500\nย่อมละสังโยชน์ได้อนุสัยย่อมสิ้นไป^500\nอริยสาวกนั้นย่อมพิจารณาเห็นดังนี้ว่า^500\nไม่ใช่เราแต่ผู้เดียวเท่านั้นที่จะต้อง^500\nพลัดพรากจากของรักของชอบใจทั้งสิ้น^500\nโดยที่แท้สัตว์ทั้งปวง^500\nบรรดาที่มีการมาการไปการจุติการอุปบัติ^500\nล้วนจะต้องพลัดพรากจากของรัก^500\nของชอบใจทั้งสิ้น',
        'เมื่ออริยสาวกนั้นพิจารณาฐานะ^500\nนั้นอยู่เนืองๆมรรคย่อมเกิดขึ้น^500\nอริยสาวกนั้นย่อมเสพอบรม^500\nทำให้มากซึ่งมรรคนั้น^500\nเมื่อเสพอบรมทำให้มากซึ่งมรรคนั้นอยู่^500\nย่อมละสังโยชน์ได้^500\nอนุสัยย่อมสิ้นไป^500\nอริยสาวกนั้นย่อมพิจารณาเห็นดังนี้ว่า^500\nไม่ใช่เราแต่ผู้เดียวเท่านั้น^500\nที่มีกรรมเป็นของตน^500\nเป็นทายาทแห่งกรรม^500\nมีกรรมเป็นกำเนิด^500\nมีกรรมเป็นเผ่าพันธุ์^500\nมีกรรมเป็นที่พึ่ง^500\nจักทำกรรมใดดีก็ตามชั่วก็ตาม^500\nเราจะเป็นผู้รับผลของกรรมนั้น^500\nโดยที่แท้สัตว์ทั้งปวง^500\nบรรดาที่มีการมาการไปการจุติการอุปบัติ^500\nล้วนมีกรรมเป็นของตน^500\nเป็นทายาทแห่งกรรม^500\nมีกรรมเป็นกำเนิด^500\nมีกรรมเป็นเผ่าพันธุ์^500\nมีกรรมเป็นที่พึ่ง^500\nจะทำกรรมใดดีก็ตามชั่วก็ตาม^500\nจะเป็นผู้รับผลของกรรมนั้น',
        'เมื่ออริยสาวกนั้นพิจารณาฐานะ^500\nนั้นอยู่เนืองๆมรรคย่อมเกิดขึ้น^500\nอริยสาวกนั้นย่อมเสพอบรม^500\nทำให้มากซึ่งมรรคนั้นอยู่^500\nย่อมละสังโยชน์ได้^500\nอนุสัยย่อมสิ้นไป^500\nสัตว์ทั้งหลายย่อม^500\nมีความแก่เป็นธรรมดา^500\nมีความเจ็บไข้เป็นธรรมดา^500\nมีความตายเป็นธรรมดา^500\nสัตว์ทั้งหลายย่อมเป็นไปตามธรรมดา^500\nพวกปุถุชนย่อมเกลียด^500\nถ้าเราพึงเกลียดธรรมนั้น^500\nในพวกสัตว์ผู้มีอย่างนั้นเป็นธรรมดา^500\nข้อนั้นไม่สมควรแก่เราผู้เป็นอยู่อย่างนี้^500\nเรานั้นเป็นอยู่อย่างนี้^500\nทราบธรรมที่หาอุปธิมิได้^500\nเห็นการออกบวช^500\nโดยเป็นธรรมเกษม^500\nครอบงำความมัวเมาทั้งปวง^500\nในความไม่มีโรค^500\nในความเป็นหนุ่มสาว^500\nและในชีวิตความอุตสาหะได้มีแล้วแก่เรา^500\nผู้เห็นเฉพาะซึ่งนิพพาน^500\nบัดนี้เราไม่ควรเพื่อเสพกามทั้งหลาย^500\nจะเป็นผู้ประพฤติไม่ถอยหลัง^500\nตั้งหน้าประพฤติพรหมจรรย์'
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
            <h2 style={{display: 'inline-block'}}>ฐานสูตร</h2>
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

export default Lesson0410;
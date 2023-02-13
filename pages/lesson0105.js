import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0105 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ตาเห็นรูป^500\nรูปไม่เที่ยงเกิดดับ^500\nจักขุไม่เที่ยงเกิดดับ^500\nรูปไม่เที่ยงเกิดดับ^500\nจักขุวิญญาณไม่เที่ยงเกิดดับ^500\nจักขุสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของตาเห็นรูป^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากจักขุสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของตาเห็นรูป^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'หูได้ยินเสียง^500\nเสียงไม่เที่ยงเกิดดับ^500\nโสตะไม่เที่ยงเกิดดับ^500\nเสียงไม่เที่ยงเกิดดับ^500\nโสตะวิญญาณไม่เที่ยงเกิดดับ^500\nโสตะสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของหูได้ยินเสียง^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากโสตะสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของหูได้ยินเสียง^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'จมูกได้กลิ่น^500\nกลิ่นไม่เที่ยงเกิดดับ^500\nฆานะไม่เที่ยงเกิดดับ^500\nกลิ่นไม่เที่ยงเกิดดับ^500\nฆานะวิญญาณไม่เที่ยงเกิดดับ^500\nฆานะสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของจมูกได้กลิ่น^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากฆานะสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของจมูกได้กลิ่น^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'ลิ้นได้รส รสไม่เที่ยงเกิดดับ^500\nชิวหาไม่เที่ยงเกิดดับ^500\nรสไม่เที่ยงเกิดดับ^500\nชิวหาวิญญาณไม่เที่ยงเกิดดับ^500\nชิวหาสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของลิ้นได้รส^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากชิวหาสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของลิ้นได้รส^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'กายสัมผัส^500\nสัมผัสไม่เที่ยงเกิดดับ^500\nกายไม่เที่ยงเกิดดับ^500\nสัมผัสไม่เที่ยงเกิดดับ^500\nกายวิญญาณไม่เที่ยงเกิดดับ^500\nกายสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของกายสัมผัส^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากกายสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของกายสัมผัส^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'ใจคิดนึก^500\nความคิดไม่เที่ยงเกิดดับ^500\nมโนไม่เที่ยงเกิดดับ^500\nธรรมารมณ์ไม่เที่ยงเกิดดับ^500\nมโนวิญญาณไม่เที่ยงเกิดดับ^500\nมโนสัมผัสไม่เที่ยงเกิดดับ^500\nกำหนดรู้องค์ประกอบของใจคิดนึก^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nทุกข์สุข ไม่ทุกข์ไม่สุข^500\nที่เกิดจากมโนสัมผัสเป็นปัจจัย^500\nคือผลต่อเนื่องของ^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น^500\nเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nกำหนดรู้ผลต่อเนื่องของใจคิดนึก^500\nโลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง^500\nไม่เที่ยงเกิดดับ',
        'ตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันคือ^500\nรูป เวทนา สัญญา สังขาร วิญญาณ^500\nไม่เที่ยง เป็นทุกข์ เป็นอนัตตา^500\nรูปร่างกายไม่เที่ยง^500\nเป็นเหตุเป็นปัจจัย^500\nให้เกิดเวทนาความพอใจไม่พอใจ^500\nเมื่อเหตุปัจจัยไม่เที่ยง^500\nเวทนาความพอใจไม่พอใจจะเที่ยงได้อย่างไร^500\nเวทนาความพอใจไม่พอใจไม่เที่ยง^500\nเป็นเหตุเป็นปัจจัย^500\nให้เกิดสัญญาความจำ^500\nเมื่อเหตุปัจจัยไม่เที่ยง^500\nสัญญาความจำจะเที่ยงได้อย่างไร^500\nสัญญาความจำไม่เที่ยง^500\nเป็นเหตุเป็นปัจจัยให้เกิดสังขารความคิด^500\nเมื่อเหตุปัจจัยไม่เที่ยง^500\nสังขารความคิดจะเที่ยงได้อย่างไร^500\nสังขารความคิดไม่เที่ยง^500\nเป็นเหตุเป็นปัจจัยให้เกิดวิญญาณความรู้^500\nเมื่อเหตุปัจจัยไม่เที่ยง^500\nวิญญาณความรู้จะเที่ยงได้อย่างไร',
        'อวัยวะภายใน ภายนอก^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่น^500\nว่าสิ่งนั้นเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nอายตนะภายใน^500\nตา หู จมูก ลิ้น กาย ใจ^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่น^500\nว่าสิ่งนั้นเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nอายตนะภายนอก^500\nรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่น^500\nว่าสิ่งนั้นเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\nดิน น้ำ ลม ไฟ^500\nภายใน ภายนอก ตัวเรา^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่น^500\nว่าสิ่งนั้นเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ^500\n',
        'ตาเห็นรูป^500\nรูปไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางตา^500\nเป็นเพียงรูปธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'หูได้ยินเสียง^500\nเสียงไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางหู^500\nเป็นเพียงรูปธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'จมูกได้กลิ่น^500\nกลิ่นไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางจมูก^500\nเป็นเพียงรูปธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ลิ้นได้ยินรส^500\nรสไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางลิ้น^500\nเป็นเพียงรูปธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'กายสัมผัส^500\nสัมผัสไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางกาย^500\nเป็นเพียงรูปธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ใจคิดนึก^500\nความคิดไม่เที่่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nสิ่งที่มากระทบสัมผัสทางใจ^500\nเป็นเพียงนามธรรมชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'สิ่งทั้งปวงที่มากระทบสัมผัส^500\nทั้งหมดเป็นธรรมชาติชนิดหนึ่ง^500\nเกิดจากเหตุปัจจัย^500\nมาประชุมปรุงแต่งชั่วคราว^500\nแล้วแตกสลาย^500\nไม่มีตัวตนเป็นของตนเอง^500\nไม่ควรไปยึดมั่นถือมั่น^500\nว่าสิ่งนั้นเป็นของเรา^500\nเป็นเรา^500\nเป็นตัวตนของเรา^500\nไม่เที่ยงเกิดดับ',
        'มโนกรรมไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nมโนกรรมไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ตัวกู ของกูไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวกู ของกูไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ความอวดดีไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nความอวดดีไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ความอิจฉาริษยาไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nความอิจฉาริษยาไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'ปากพูดไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nปากพูดไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'เท้าเดินไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nเท้าเดินไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'มือจับไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nมือจับไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ',
        'มโนกรรมไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nมโนกรรมไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'ตัวกู ของกูไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวกู ของกูไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'ความอวดดีไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nความอวดดีไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'ความอิจฉาริษยาไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nความอิจฉาริษยาไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'ปากพูดไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nปากพูดไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'เท้าเดินไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nเท้าเดินไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง',
        'มือจับไม่เที่ยงเกิดดับ^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nมือจับไม่มีตัวตนเป็นของตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง^500\nตัวฉันไม่เที่ยงเกิดดับ^500\nตัวฉันไม่มีตัวตนเป็นอขงตนเอง^500\nกำลังจะแตกสลาย^500\nไม่เที่ยงเกิดดับ^500\nจริงไหม...จริง'
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
            <h2 style={{display: 'inline-block'}}>การพิจารณาอินทรีย์ 6 และขันธ์ 5</h2>
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

export default Lesson0105;
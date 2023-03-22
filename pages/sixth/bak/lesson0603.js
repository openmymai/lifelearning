import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0603 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ข้าพเจ้าได้สดับมาแล้วอย่างนี้^500\nสมัยหนึ่ง\nพระผู้มีพระภาคประทับอยู่\nณ พระวิหารเชตวัน^500\nอารามของท่านอนาถบิณฑิกเศรษฐี^500\nใกล้พระนครสาวัตถี^500\nครั้งนั้นแล\nภิกษุรูปหนึ่ง^500\nเข้าไปเฝ้าพระผู้มีพระภาค\nถึงที่ประทับ^500\nถวายอภิวาท\nแล้วนั่ง ณ ที่ควรส่วนข้างหนึ่ง^500\nครั้นแล้ว\nได้กราบทูลว่า\nข้าแต่พระองค์ผู้เจริญ^500\nขอพระผู้มีพระภาค\nโปรดประทานพระวโรกาส^500\nแสดงพระธรรมเทศนา\nโดยสังเขป แก่ข้าพระองค์^500\nที่ข้าพระองค์ได้สดับแล้ว\nเป็นผู้ๆเดียว^500\nหลีกออกจากหมู่\nไม่ประมาท^500\nมีความเพียร\nมีใจมั่นคงอยู่เถิด^500\nพระผู้มีพระภาคตรัสว่า^500\nดูกรภิกษุ\nเมื่อบุคคลยังยึดมั่น\nก็ต้องถูกมารมัดไว้^500\nเมื่อไม่ยึดมั่น จึงหลุดพ้นจากมาร^500\nภิ. ข้าแต่พระผู้มีพระภาค\nข้าพระองค์ทราบแล้ว^500\nข้าแต่พระสุคต\nข้าพระองค์ทราบแล้ว.^500\nพ. ดูกรภิกษุ^500\nก็เธอรู้ซึ้งถึงอรรถแห่งคำ\nที่กล่าวแล้วอย่างย่อ^500\nโดยพิสดารได้อย่างไรเล่า?^500\nภิ. ข้าแต่พระองค์ผู้เจริญ^500\nเมื่อบุคคลยังยึด\nรูป เวทนา สัญญา\nสังขาร และวิญญาณมั่นอยู่^500\nก็ต้องถูกมารมัดไว้^500\nเมื่อไม่ยึดมั่นจึงหลุดพ้นจากมาร^500\nข้าแต่พระองค์ผู้เจริญ^500\nข้าพระองค์รู้ซึ้งถึงอรรถ\nแห่งพระดำรัส^500\nที่พระผู้มีพระภาคตรัสแล้วอย่างย่อ^500\nโดยพิสดารอย่างนี้แล^500\nพ. ดีแล้วๆ ภิกษุ^500\nเธอรู้ซึ้งถึงอรรถแห่งคำ\nที่เรากล่าวแล้วอย่างย่อ^500\nโดยพิสดารอย่างดีแล้ว^500\nดูกรภิกษุ^500\nบุคคลยังยึด\nรูป เวทนา สัญญา\nสังขาร และวิญญาณมั่นอยู่^500\nก็ต้องถูกมารมัดไว้^500\nเมื่อไม่ยึดมั่น\nจึงหลุดพ้นจากมาร^500\nเธอพึงทราบอรรถแห่งคำนี้^500\nที่เรากล่าวแล้วอย่างย่อ^500\nโดยพิสดารอย่างนี้เถิด^500\nครั้งนั้นแล^500\nภิกษุรูปนั้นเพลิดเพลิน\nอนุโมทนาพระภาษิต\nของพระผู้มีพระภาค^500\nลุกจากอาสนะ\nถวายบังคม^500\nกระทำประทักษิณแล้วหลีกไป^500\nครั้งนั้นแล^500\nเธอเป็นผู้ๆเดียว\nหลีกออกจากหมู่\nไม่ประมาท^500\nมีความเพียร\nมีใจมั่นคงอยู่^500\nไม่นานเท่าไร\nก็ทำให้แจ้งซึ่งที่สุด\nแห่งพรหมจรรย์อันยอดเยี่ยม^500\nที่กุลบุตรทั้งหลาย\nออกบวชเป็นบรรพชิต^500\nโดยชอบต้องการนั้น^500\nด้วยปัญญาอันยิ่งด้วยตนเอง^500\nในปัจจุบันเข้าถึงอยู่^500\nรู้ชัดว่าชาติสิ้นแล้ว\nพรหมจรรย์อยู่จบแล้ว^500\nกิจที่ควรทำ ทำเสร็จแล้ว^500\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี^500\nก็ภิกษุรูปนั้น\nได้เป็นพระอรหันต์องค์หนึ่ง^500\nในจำนวนพระอรหันต์ทั้งหลาย',
        'สมัยหนึ่ง\nพระผู้มีพระภาค\nประทับอยู่ ณ มิคารมาตุปราสาท^500\nในพระวิหารบุพพาราม^500\nใกล้พระนครสาวัตถี^500\nพร้อมด้วยพระภิกษุสงฆ์\nเป็นอันมาก^500\nก็ในสมัยนั้นแล^500\nในคืนวันอุโบสถขึ้น ๑๕ ค่ำ^500\nเป็นวันเพ็ญ\nมีพระจันทร์เต็มดวง^500\nพระผู้มีพระภาค\nอันภิกษุสงฆ์ห้อมล้อมแล้ว^500\nประทับนั่งอยู่ในที่แจ้ง^500\nครั้งนั้น^500\nภิกษุรูปหนึ่งลุกจากอาสนะ^500\nทำผ้าอุตตราสงฆ์\nเฉวียงบ่าข้างหนึ่งแล้ว^500\nประนมมือ\nไปทางพระผู้มีพระภาคเจ้า^500\nได้กราบทูลพระผู้มีพระภาคว่า^500\nข้าแต่พระองค์ผู้เจริญ\nข้าพระองค์จะพึงทูลถาม\nเหตุประการหนึ่ง\nกะพระผู้มีพระภาค^500\nถ้าพระผู้มีพระภาค\nทรงประทานโอกาส^500\nที่จะพยากรณ์ปัญหา\nแก่ข้าพระองค์^500\nพระผู้มีพระภาคตรัสตอบว่า^500\nดูกรภิกษุ^500\nถ้าเช่นนั้นเธอจงนั่ง\nณ อาสนะของตน^500\nแล้วถามปัญหา\nที่เธอมุ่งจำนงเถิด^500\nภิกษุนั้น\nรับพระดำรัส\nของพระผู้มีพระภาค^500\nแล้วนั่ง ณ อาสนะของตน^500\nทูลถามปัญหาพระผู้มีพระภาคว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nอุปาทานขันธ์ ๕^500\nได้แก่อุปาทานขันธ์คือรูป^500\nอุปาทานขันธ์คือเวทนา^500\nอุปาทานขันธ์คือสัญญา^500\nอุปาทานขันธ์คือสังขาร^500\nอุปาทานขันธ์คือวิญญาณ^500\nเหล่านี้ ใช่ไหม พระเจ้าข้า?^500\nพ. ดูกรภิกษุ^500\nอุปาทานขันธ์ ๕\nได้แก่อุปาทานขันธ์^500\nคือ รูป เวทนา สัญญา\nสังขาร วิญญาณ\nเหล่านี้แหละภิกษุ',
        '(ว่าด้วยมูลแห่งอุปาทานขันธ์ ๕)^500\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nอุปาทานขันธ์ ๕ เหล่านี้แล^500\nมีอะไรเป็นมูลเหตุ พระเจ้าข้า?^500\nพ. ดูกรภิกษุ^500\nอุปาทานขันธ์ ๕ เหล่านี้แล^500\nมีฉันทะเป็นมูลเหตุ ฯลฯ^500\nภิ. อุปาทานก็อันนั้น\nและอุปาทานขันธ์ ๕ ก็อันนั้น^500\nหรือว่าอุปาทานอื่น\nจากอุปาทานขันธ์ ๕ พระเจ้าข้า?^500\nพ. ดูกรภิกษุ^500\nอุปาทานก็อันนั้น\nและอุปาทานขันธ์ ๕ ก็อันนั้น\nหามิได้^500\nและอุปาทานอื่นจากอุปาทานขันธ์ ๕\nก็หามิได้^500\nแต่ฉันทราคะ\nในอุปาทานขันธ์ ๕ เหล่านั้น\nเป็นตัวอุปาทาน^500\nว่าด้วยฉันทราคะในอุปาทานขันธ์ ๕^500\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nก็ฉันทราคะในอุปาทานขันธ์ ๕\nแตกต่างกันหรือ?^500\nพระผู้มีพระภาคตรัสตอบว่า\nต่างกันภิกษุ^500\nดังนี้แล้ว\nได้ตรัสต่อไปว่า^500\nดูกรภิกษุ บุคคลบางคนในโลกนี้^500\nมีความปรารถนาอย่างนี้ว่า^500\nในอนาคตกาล^500\nขอเราพึงมีรูปเช่นนี้^500\nพึงมีเวทนาเช่นนี้^500\nพึงมีสัญญาเช่นนี้^500\nพึงมีสังขารเช่นนี้^500\nพึงมีวิญญาณเช่นนี้^500\nดูกรภิกษุ ฉันทราคะ\nในอุปาทานขันธ์ ๕^500\nต่างกันด้วยประการฉะนี้แล',
        '(ว่าด้วยเหตุที่เรียกว่าขันธ์)^500\nภิกษุนั้น^500\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nด้วยเหตุเพียงเท่าไรหนอ^500\nขันธ์ จึงชื่อว่าขันธ์?^500\nพ. ดูกรภิกษุ^500\nรูปอย่างใดอย่างหนึ่ง^500\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน^500\nเป็นภายในก็ดี\nภายนอกก็ดี^500\nหยาบก็ดี\nละเอียดก็ดี^500\nเลวก็ดี\nประณีตก็ดี^500\nมีในที่ไกลก็ดี\nในที่ใกล้ก็ดี^500\nนี้เรียกว่ารูปขันธ์^500\nเวทนาอย่างใดอย่างหนึ่ง ฯลฯ^500\nนี้เรียกว่าเวทนาขันธ์^500\nสัญญาอย่างใดอย่างหนึ่ง ฯลฯ^500\nนี้เรียกว่าสัญญาขันธ์^500\nสังขารอย่างใดอย่างหนึ่ง ฯลฯ^500\nนี้เรียกว่าสังขารขันธ์^500\nวิญญาณอย่างใดอย่างหนึ่ง^500\nทั้งที่เป็นอดีต อนาคต และปัจจุบัน^500\nเป็นภายในก็ดี\nภายนอกก็ดี^500\nหยาบก็ดี\nละเอียดก็ดี^500\nเลวก็ดี\nประณีตก็ดี^500\nมีในที่ไกลก็ดี\nในที่ใกล้ก็ดี^500\nนี้เรียกว่าวิญญาณขันธ์^500\nดูกรภิกษุ^500\nด้วยเหตุมีประมาณเท่านี้แล^500\nขันธ์จึงชื่อว่าขันธ์.',
        '(ว่าด้วยเหตุปัจจัยแห่งขันธ์ ๕)^500\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nอะไรหนอ\nเป็นเหตุเป็นปัจจัย^500\nทำให้รูปขันธ์\nเวทนาขันธ์\nสัญญาขันธ์\nสังขารขันธ์\nวิญญาณขันธ์\nปรากฏ?^500\nพ. ดูกรภิกษุ^500\nมหาภูตรูป ๔ แล\nเป็นเหตุเป็นปัจจัย\nทำให้รูปขันธ์ปรากฏ^500\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้เวทนาขันธ์ปรากฏ^500\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้สัญญาขันธ์ปรากฏ^500\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้สังขารขันธ์ปรากฏ^500\nนามรูป เป็นเหตุเป็นปัจจัย\nทำให้วิญญาณขันธ์ปรากฏ',
        '(ว่าด้วยเหตุเกิดสักกายทิฏฐิ)^500\nภิกษุนั้น^500\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nสักกายทิฏฐิมีได้อย่างใดหนอ?^500\nพ. ดูกรภิกษุ\nปุถุชนในโลกนี้^500\nผู้ยังมิได้สดับ^500\nเป็นผู้ไม่ได้เห็นพระอริยเจ้า^500\nไม่ฉลาดในอริยธรรม^500\nไม่ได้รับแนะนำในอริยธรรม^500\nเป็นผู้ไม่ได้เห็นสัตบุรุษ^500\nไม่ฉลาดในสัปปุริสธรรม^500\nไม่ได้รับแนะนำในสัปปุริสธรรม^500\nย่อมเห็นรูป โดยความเป็นตน\nย่อมเห็นตนมีรูป\nย่อมเห็นรูปในตน\nย่อมเห็นตนในรูป^500\nย่อมเห็นเวทนา โดยความเป็นตน\nย่อมเห็นตนมีเวทนา\nย่อมเห็นเวทนาในตน\nย่อมเห็นตนในเวทนา^500\nย่อมเห็นสัญญา โดยความเป็นตน\nย่อมเห็นตนมีสัญญา\nย่อมเห็นสัญญาในตน\nย่อมเห็นตนในสัญญา^500\nย่อมเห็นสังขาร โดยความเป็นตน\nย่อมเห็นตนมีสังขาร\nย่อมเห็นสังขารในตน\nย่อมเห็นตนในสังขาร^500\nย่อมเห็นวิญญาณ โดยความเป็นตน\nย่อมเห็นตนมีวิญญาณ\nย่อมเห็นวิญญาณในตน\nย่อมเห็นตนในวิญญาณ.^500\nดูกรภิกษุ^500\nสักกายทิฏฐิมีได้ด้วยอาการเช่นนี้แล',
        '(ว่าด้วยเหตุจะไม่มีสักกายทิฏฐิ)^500\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nสักกายทิฏฐิย่อมไม่มีได้อย่างไร?^500\nพ. ดูกรภิกษุ^500\nอริยสาวกในธรรมวินัยนี้^500\nผู้ได้สดับแล้ว^500\nเป็นผู้ได้เห็นพระอริยเจ้า^500\nฉลาดในอริยธรรม^500\nได้รับแนะนำแล้วเป็นอย่างดี\nในอริยธรรม^500\nเป็นผู้ได้เห็นสัตบุรุษ^500\nฉลาดในสัปปุริสธรรม^500\nได้รับแนะนำแล้ว\nเป็นอย่างดีในสัปปุริสธรรม^500\nย่อมไม่เห็นรูป โดยความเป็นตน\nไม่เห็นตนมีรูป\nไม่เห็นรูปในตน\nหรือไม่เห็นตนในรูป^500\nย่อมไม่เห็นเวทนา โดยความเป็นตน\nไม่เห็นตนมีเวทนา\nไม่เห็นเวทนาในตน\nหรือไม่เห็นตนในเวทนา^500\nย่อมไม่เห็นสัญญา โดยความเป็นตน\nไม่เห็นตนมีสัญญา\nไม่เห็นสัญญาในตน\nหรือไม่เห็นตนในสัญญา^500\nย่อมไม่เห็นสังขาร โดยความเป็นตน\nไม่เห็นตนมีสังขาร\nไม่เห็นสังขารมีในตน\nหรือไม่เห็นตนในสังขาร^500\nย่อมไม่เห็นวิญญาณ โดยความเป็นตน\nไม่เห็นตนมีวิญญาณ\nไม่เห็นวิญญาณในตน\nหรือไม่เห็นตนในวิญญาณ^500\nดูกรภิกษุ^500\nสักกายทิฏฐิ\nย่อมไม่มีด้วยอาการเช่นนี้แล',
        '(ว่าด้วยคุณโทษและอุบาย\nสลัดออกแห่งอุปาทานขันธ์)^500\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nอะไรหนอ เป็นคุณ เป็นโทษ^500\nเป็นเครื่องสลัดออก\nแห่งรูป\nแห่งเวทนา\nแห่งสัญญา\nแห่งสังขาร\nแห่งวิญญาณ?^500\nพ. ดูกรภิกษุ^500\nสุขโสมนัส\nอาศัยรูปเกิดขึ้น^500\nนี้เป็นคุณแห่งรูป^500\nรูปไม่เที่ยง เป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nนี้เป็นโทษแห่งรูป^500\nการกำจัดฉันทราคะ^500\nการละฉันทราคะในรูปเสียได้^500\nนี้เป็นเครื่องสลัดออกแห่งรูป^500\nสุขโสมนัส\nอาศัยเวทนาเกิดขึ้น ฯลฯ^500\nอาศัยสัญญาเกิดขึ้น ฯลฯ^500\nอาศัยสังขารเกิดขึ้น^500\nอาศัยวิญญาณเกิดขึ้น^500\nนี้เป็นคุณแห่งวิญญาณ^500\nวิญญาณไม่เที่ยง เป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา^500\nนี้เป็นโทษแห่งวิญญาณ^500\nการกำจัดฉันทราคะ^500\nการละฉันทราคะในวิญญาณเสียได้^500\nนี้เป็นเครื่องสลัดออกแห่งวิญญาณ.',
        '(ว่าด้วยการไม่มีอหังการ\nมมังการและมานานุสัย)^500\nภิกษุนั้น ชื่นชมอนุโมทนาภาษิต^500\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า^500\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปอีกว่า^500\nข้าแต่พระองค์ผู้เจริญ^500\nเมื่อบุคคลรู้อยู่อย่างไร^500\nเห็นอยู่อย่างไร^500\nจึงจะไม่มีอหังการ\nมมังการ\nและมานานุสัย^500\nในกายที่มีวิญญาณนี้^500\nและในสรรพนิมิตภายนอก?^500\nพ. ดูกรภิกษุ^500\nรูปอย่างใดอย่างหนึ่ง\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน^500\nเป็นภายในก็ดี ภายนอกก็ดี^500\nหยาบก็ดี ละเอียดก็ดี^500\nเลวก็ดี ประณีตก็ดี^500\nมีในที่ไกลก็ดี ในที่ใกล้ก็ดี^500\nอริยสาวกย่อมพิจารณา\nเห็นรูปทั้งหมดนั้น^500\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nเวทนาอย่างใดอย่างหนึ่ง^500\nสัญญาอย่างใดอย่างหนึ่ง^500\nสังขารอย่างใดอย่างหนึ่ง^500\nวิญญาณอย่างใดอย่างหนึ่ง^500\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน^500\nเป็นภายในก็ดี ภายนอกก็ดี^500\nหยาบก็ดี ละเอียดก็ดี^500\nเลวก็ดี ประณีตก็ดี^500\nมีในที่ไกลก็ดี ในที่ใกล้ก็ดี^500\nอริยสาวกย่อมพิจารณา\nเห็นวิญญาณทั้งหมดนั้น^500\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า^500\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา^500\nดูกรภิกษุ^500\nเมื่อบุคคลรู้อยู่อย่างนี้^500\nเห็นอยู่อย่างนี้แล^500\nจึงจะไม่มีอหังการ\nมมังการ\nและมานานุสัย^500\nในกายที่มีวิญญาณนี้^500\nและสรรพนิมิตภายนอก',
        '(ว่าด้วยกรรมที่อนัตตากระทำจะถูกต้องอัตตา)^500\nก็โดยสมัยนั้นแล^500\nภิกษุรูปหนึ่ง^500\nได้เกิดความปริวิตกแห่งใจขึ้นว่า^500\nท่านผู้เจริญทั้งหลาย\nได้ยินว่า^500\nด้วยประการดังนี้แล^500\nรูปเป็นอนัตตา เวทนา สัญญา\nสังขาร วิญญาณ เป็นอนัตตา^500\nกรรมที่อนัตตากระทำ^500\nจักถูกต้องอัตตา^500\nคือกรรมได้อย่างไร?^500\nครั้งนั้นแล พระผู้มีพระภาค\nทรงทราบความปริวิตกแห่งใจ^500\nของภิกษุนั้นด้วยพระทัยแล้ว^500\nได้ตรัสเรียกภิกษุทั้งหลาย\nมาตรัสว่า^500\nดูกรภิกษุทั้งหลาย^500\nข้อที่โมฆบุรุษบางคน\nในธรรมวินัยนี้^500\nเป็นผู้ตกอยู่ในอำนาจอวิชชา^500\nมีใจถูกตัณหาครอบงำ^500\nจะพึงสำคัญสัตถุศาสน์^500\nว่าเป็นคำสอนที่ควรคิด^500\nให้ตระหนักว่า ท่านผู้เจริญทั้งหลาย^500\nได้ยินว่า\nด้วยประการดังนี้แล^500\nรูปเป็นอนัตตา เวทนา สัญญา\nสังขาร วิญญาณ เป็นอนัตตา^500\nกรรมที่อนัตตากระทำ^500\nจักถูกต้องอัตตา^500\nคือกรรมได้อย่างไร?^500\nนี้เป็นฐานะที่จะมีได้^500\nดูกรภิกษุทั้งหลาย^500\nเธอทั้งหลาย\nอันเราได้แนะนำไว้แล้ว^500\nด้วยการทวนถามในธรรมนั้นๆ^500\nในบาลีประเทศนั้นๆ^500\nจะสำคัญความข้อนั้นเป็นไฉน^500\nรูปเที่ยงหรือไม่เที่ยง?^500\nภิกษุเหล่านั้นกราบทูลว่า^500\nไม่เที่ยงพระเจ้าข้า^500\nพ. เวทนา สัญญา สังขาร\nวิญญาณ เที่ยงหรือไม่เที่ยง?^500\nภิ. ไม่เที่ยง พระเจ้าข้า.^500\nพ. ก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า?^500\nภิ. เป็นทุกข์ พระเจ้าข้า.^500\nพ. ก็สิ่งใดไม่เที่ยง เป็นทุกข์^500\nมีความแปรปรวนเป็นธรรมดา^500\nควรหรือหนอ ที่จะตาม\nเห็นสิ่งนั้นว่า นั่นของเรา\nนั่นเป็นเรา\nนั่นเป็นตัวตนของเรา?^500\nภิ. ไม่ควรเห็นอย่างนั้น พระเจ้าข้า.^500\nพ. เพราะเหตุนั้นแล ฯลฯ^500\nอริยสาวกผู้ได้สดับแล้ว\nเห็นอยู่อย่างนี้ ฯลฯ^500\nย่อมทราบชัดว่า ฯลฯ^500\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี^500\nฉะนี้แล.'
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
            <a href="/lesson0604">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>

            <h2 style={{display: 'inline-block'}}>อุปาทิยสูตร ปุณณมสูตร</h2>
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

export default Lesson0603;
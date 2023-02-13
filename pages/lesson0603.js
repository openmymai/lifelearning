import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0603 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ข้าพเจ้าได้สดับมาแล้วอย่างนี้\nสมัยหนึ่ง\nพระผู้มีพระภาคประทับอยู่\nณ พระวิหารเชตวัน\nอารามของท่านอนาถบิณฑิกเศรษฐี\nใกล้พระนครสาวัตถี\nครั้งนั้นแล\nภิกษุรูปหนึ่ง\nเข้าไปเฝ้าพระผู้มีพระภาค\nถึงที่ประทับ\nถวายอภิวาท\nแล้วนั่ง ณ ที่ควรส่วนข้างหนึ่ง\nครั้นแล้ว\nได้กราบทูลว่า\nข้าแต่พระองค์ผู้เจริญ\nขอพระผู้มีพระภาค\nโปรดประทานพระวโรกาส\nแสดงพระธรรมเทศนา\nโดยสังเขป แก่ข้าพระองค์\nที่ข้าพระองค์ได้สดับแล้ว\nเป็นผู้ๆเดียว\nหลีกออกจากหมู่\nไม่ประมาท\nมีความเพียร\nมีใจมั่นคงอยู่เถิด\nพระผู้มีพระภาคตรัสว่า\nดูกรภิกษุ\nเมื่อบุคคลยังยึดมั่น\nก็ต้องถูกมารมัดไว้\nเมื่อไม่ยึดมั่น จึงหลุดพ้นจากมาร\nภิ. ข้าแต่พระผู้มีพระภาค\nข้าพระองค์ทราบแล้ว\nข้าแต่พระสุคต\nข้าพระองค์ทราบแล้ว.\nพ. ดูกรภิกษุ\nก็เธอรู้ซึ้งถึงอรรถแห่งคำ\nที่กล่าวแล้วอย่างย่อ\nโดยพิสดารได้อย่างไรเล่า?\nภิ. ข้าแต่พระองค์ผู้เจริญ\nเมื่อบุคคลยังยึด\nรูป เวทนา สัญญา\nสังขาร และวิญญาณมั่นอยู่\nก็ต้องถูกมารมัดไว้\nเมื่อไม่ยึดมั่นจึงหลุดพ้นจากมาร\nข้าแต่พระองค์ผู้เจริญ\nข้าพระองค์รู้ซึ้งถึงอรรถ\nแห่งพระดำรัส\nที่พระผู้มีพระภาคตรัสแล้วอย่างย่อ\nโดยพิสดารอย่างนี้แล\nพ. ดีแล้วๆ ภิกษุ\nเธอรู้ซึ้งถึงอรรถแห่งคำ\nที่เรากล่าวแล้วอย่างย่อ\nโดยพิสดารอย่างดีแล้ว\nดูกรภิกษุ\nบุคคลยังยึด\nรูป เวทนา สัญญา\nสังขาร และวิญญาณมั่นอยู่\nก็ต้องถูกมารมัดไว้\nเมื่อไม่ยึดมั่น\nจึงหลุดพ้นจากมาร\nเธอพึงทราบอรรถแห่งคำนี้\nที่เรากล่าวแล้วอย่างย่อ\nโดยพิสดารอย่างนี้เถิด\nครั้งนั้นแล\nภิกษุรูปนั้นเพลิดเพลิน\nอนุโมทนาพระภาษิต\nของพระผู้มีพระภาค\nลุกจากอาสนะ\nถวายบังคม\nกระทำประทักษิณแล้วหลีกไป\nครั้งนั้นแล\nเธอเป็นผู้ๆเดียว\nหลีกออกจากหมู่\nไม่ประมาท\nมีความเพียร\nมีใจมั่นคงอยู่\nไม่นานเท่าไร\nก็ทำให้แจ้งซึ่งที่สุด\nแห่งพรหมจรรย์อันยอดเยี่ยม\nที่กุลบุตรทั้งหลาย\nออกบวชเป็นบรรพชิต\nโดยชอบต้องการนั้น\nด้วยปัญญาอันยิ่งด้วยตนเอง\nในปัจจุบันเข้าถึงอยู่\nรู้ชัดว่าชาติสิ้นแล้ว\nพรหมจรรย์อยู่จบแล้ว\nกิจที่ควรทำ ทำเสร็จแล้ว\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี\nก็ภิกษุรูปนั้น\nได้เป็นพระอรหันต์องค์หนึ่ง\nในจำนวนพระอรหันต์ทั้งหลาย',
        'สมัยหนึ่ง\nพระผู้มีพระภาค\nประทับอยู่ ณ มิคารมาตุปราสาท\nในพระวิหารบุพพาราม\nใกล้พระนครสาวัตถี\nพร้อมด้วยพระภิกษุสงฆ์\nเป็นอันมาก\nก็ในสมัยนั้นแล\nในคืนวันอุโบสถขึ้น ๑๕ ค่ำ\nเป็นวันเพ็ญ\nมีพระจันทร์เต็มดวง\nพระผู้มีพระภาค\nอันภิกษุสงฆ์ห้อมล้อมแล้ว\nประทับนั่งอยู่ในที่แจ้ง\nครั้งนั้น\nภิกษุรูปหนึ่งลุกจากอาสนะ\nทำผ้าอุตตราสงฆ์\nเฉวียงบ่าข้างหนึ่งแล้ว\nประนมมือ\nไปทางพระผู้มีพระภาคเจ้า\nได้กราบทูลพระผู้มีพระภาคว่า\nข้าแต่พระองค์ผู้เจริญ\nข้าพระองค์จะพึงทูลถาม\nเหตุประการหนึ่ง\nกะพระผู้มีพระภาค\nถ้าพระผู้มีพระภาค\nทรงประทานโอกาส\nที่จะพยากรณ์ปัญหา\nแก่ข้าพระองค์\nพระผู้มีพระภาคตรัสตอบว่า\nดูกรภิกษุ\nถ้าเช่นนั้นเธอจงนั่ง\nณ อาสนะของตน\nแล้วถามปัญหา\nที่เธอมุ่งจำนงเถิด\nภิกษุนั้น\nรับพระดำรัส\nของพระผู้มีพระภาค\nแล้วนั่ง ณ อาสนะของตน\nทูลถามปัญหาพระผู้มีพระภาคว่า\nข้าแต่พระองค์ผู้เจริญ\nอุปาทานขันธ์ ๕\nได้แก่อุปาทานขันธ์คือรูป\nอุปาทานขันธ์คือเวทนา\nอุปาทานขันธ์คือสัญญา\nอุปาทานขันธ์คือสังขาร\nอุปาทานขันธ์คือวิญญาณ\nเหล่านี้ ใช่ไหม พระเจ้าข้า?\nพ. ดูกรภิกษุ\nอุปาทานขันธ์ ๕\nได้แก่อุปาทานขันธ์\nคือ รูป เวทนา สัญญา\nสังขาร วิญญาณ\nเหล่านี้แหละภิกษุ\nว่าด้วยมูลแห่งอุปาทานขันธ์ ๕\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nอุปาทานขันธ์ ๕ เหล่านี้แล\nมีอะไรเป็นมูลเหตุ พระเจ้าข้า?\nพ. ดูกรภิกษุ\nอุปาทานขันธ์ ๕ เหล่านี้แล\nมีฉันทะเป็นมูลเหตุ ฯลฯ\nภิ. อุปาทานก็อันนั้น\nและอุปาทานขันธ์ ๕ ก็อันนั้น\nหรือว่าอุปาทานอื่น\nจากอุปาทานขันธ์ ๕ พระเจ้าข้า?\nพ. ดูกรภิกษุ\nอุปาทานก็อันนั้น\nและอุปาทานขันธ์ ๕ ก็อันนั้น\nหามิได้\nและอุปาทานอื่นจากอุปาทานขันธ์ ๕\nก็หามิได้\nแต่ฉันทราคะ\nในอุปาทานขันธ์ ๕ เหล่านั้น\nเป็นตัวอุปาทาน\nว่าด้วยฉันทราคะในอุปาทานขันธ์ ๕\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nก็ฉันทราคะในอุปาทานขันธ์ ๕\nแตกต่างกันหรือ?\nพระผู้มีพระภาคตรัสตอบว่า\nต่างกันภิกษุ\nดังนี้แล้ว\nได้ตรัสต่อไปว่า\nดูกรภิกษุ บุคคลบางคนในโลกนี้\nมีความปรารถนาอย่างนี้ว่า\nในอนาคตกาล\nขอเราพึงมีรูปเช่นนี้\nพึงมีเวทนาเช่นนี้\nพึงมีสัญญาเช่นนี้\nพึงมีสังขารเช่นนี้\nพึงมีวิญญาณเช่นนี้\nดูกรภิกษุ ฉันทราคะ\nในอุปาทานขันธ์ ๕\nต่างกันด้วยประการฉะนี้แล\nว่าด้วยเหตุที่เรียกว่าขันธ์\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nด้วยเหตุเพียงเท่าไรหนอ\nขันธ์ จึงชื่อว่าขันธ์?\nพ. ดูกรภิกษุ\nรูปอย่างใดอย่างหนึ่ง\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน\nเป็นภายในก็ดี\nภายนอกก็ดี\nหยาบก็ดี\nละเอียดก็ดี\nเลวก็ดี\nประณีตก็ดี\nมีในที่ไกลก็ดี\nในที่ใกล้ก็ดี\nนี้เรียกว่ารูปขันธ์\nเวทนาอย่างใดอย่างหนึ่ง ฯลฯ\nนี้เรียกว่าเวทนาขันธ์\nสัญญาอย่างใดอย่างหนึ่ง ฯลฯ\nนี้เรียกว่าสัญญาขันธ์\nสังขารอย่างใดอย่างหนึ่ง ฯลฯ\nนี้เรียกว่าสังขารขันธ์\nวิญญาณอย่างใดอย่างหนึ่ง\nทั้งที่เป็นอดีต อนาคต และปัจจุบัน\nเป็นภายในก็ดี\nภายนอกก็ดี\nหยาบก็ดี\nละเอียดก็ดี\nเลวก็ดี\nประณีตก็ดี\nมีในที่ไกลก็ดี\nในที่ใกล้ก็ดี\nนี้เรียกว่าวิญญาณขันธ์\nดูกรภิกษุ\nด้วยเหตุมีประมาณเท่านี้แล\nขันธ์จึงชื่อว่าขันธ์.\n\nว่าด้วยเหตุปัจจัยแห่งขันธ์ ๕\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nอะไรหนอ\nเป็นเหตุเป็นปัจจัย\nทำให้รูปขันธ์\nเวทนาขันธ์\nสัญญาขันธ์\nสังขารขันธ์\nวิญญาณขันธ์\nปรากฏ?\nพ. ดูกรภิกษุ\nมหาภูตรูป ๔ แล\nเป็นเหตุเป็นปัจจัย\nทำให้รูปขันธ์ปรากฏ\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้เวทนาขันธ์ปรากฏ\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้สัญญาขันธ์ปรากฏ\nผัสสะ เป็นเหตุเป็นปัจจัย\nทำให้สังขารขันธ์ปรากฏ\nนามรูปเป็นเหตุเป็นปัจจัย\nทำให้วิญญาณขันธ์ปรากฏ\n\nว่าด้วยเหตุเกิดสักกายทิฏฐิ\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า แล้ว\nได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nสักกายทิฏฐิมีได้อย่างใดหนอ?\nพ. ดูกรภิกษุ\nปุถุชนในโลกนี้\nผู้ยังมิได้สดับ\nเป็นผู้ไม่ได้เห็นพระอริยเจ้า\nไม่ฉลาดในอริยธรรม\nไม่ได้รับแนะนำในอริยธรรม\nเป็นผู้ไม่ได้เห็นสัตบุรุษ\nไม่ฉลาดในสัปปุริสธรรม\nไม่ได้รับแนะนำในสัปปุริสธรรม\nย่อมเห็นรูป โดยความเป็นตน\nย่อมเห็นตนมีรูป\nย่อมเห็นรูปในตน\nย่อมเห็นตนในรูป\nย่อมเห็นเวทนา โดยความเป็นตน\nย่อมเห็นตนมีเวทนา\nย่อมเห็นเวทนาในตน\nย่อมเห็นตนในเวทนา\nย่อมเห็นสัญญา โดยความเป็นตน\nย่อมเห็นตนมีสัญญา\nย่อมเห็นสัญญาในตน\nย่อมเห็นตนในสัญญา\nย่อมเห็นสังขาร โดยความเป็นตน\nย่อมเห็นตนมีสังขาร\nย่อมเห็นสังขารในตน\nย่อมเห็นตนในสังขาร\nย่อมเห็นวิญญาณ โดยความเป็นตน\nย่อมเห็นตนมีวิญญาณ\nย่อมเห็นวิญญาณในตน\nย่อมเห็นตนในวิญญาณ.\nดูกรภิกษุ\nสักกายทิฏฐิมีได้ด้วยอาการเช่นนี้แล\n\nว่าด้วยเหตุจะไม่มีสักกายทิฏฐิ\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nสักกายทิฏฐิย่อมไม่มีได้อย่างไร?\nพ. ดูกรภิกษุ\nอริยสาวกในธรรมวินัยนี้\nผู้ได้สดับแล้ว\nเป็นผู้ได้เห็นพระอริยเจ้า\nฉลาดในอริยธรรม\nได้รับแนะนำแล้วเป็นอย่างดี\nในอริยธรรม\nเป็นผู้ได้เห็นสัตบุรุษ\nฉลาดในสัปปุริสธรรม\nได้รับแนะนำแล้ว\nเป็นอย่างดีในสัปปุริสธรรม\nย่อมไม่เห็นรูป โดยความเป็นตน\nไม่เห็นตนมีรูป\nไม่เห็นรูปในตน\nหรือไม่เห็นตนในรูป\nย่อมไม่เห็นเวทนา โดยความเป็นตน\nไม่เห็นตนมีเวทนา\nไม่เห็นเวทนาในตน\nหรือไม่เห็นตนในเวทนา\nย่อมไม่เห็นสัญญา โดยความเป็นตน\nไม่เห็นตนมีสัญญา\nไม่เห็นสัญญาในตน\nหรือไม่เห็นตนในสัญญา\nย่อมไม่เห็นสังขาร โดยความเป็นตน\nไม่เห็นตนมีสังขาร\nไม่เห็นสังขารมีในตน\nหรือไม่เห็นตนในสังขาร\nย่อมไม่เห็นวิญญาณ โดยความเป็นตน\nไม่เห็นตนมีวิญญาณ\nไม่เห็นวิญญาณในตน\nหรือไม่เห็นตนในวิญญาณ\nดูกรภิกษุ\nสักกายทิฏฐิ\nย่อมไม่มีด้วยอาการเช่นนี้แล\n\nว่าด้วยคุณโทษและอุบาย\nสลัดออกแห่งอุปาทานขันธ์\nภิกษุนั้น\nชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปว่า\nข้าแต่พระองค์ผู้เจริญ\nอะไรหนอ เป็นคุณ เป็นโทษ\nเป็นเครื่องสลัดออก\nแห่งรูป\nแห่งเวทนา\nแห่งสัญญา\nแห่งสังขาร\nแห่งวิญญาณ?\nพ. ดูกรภิกษุ\nสุขโสมนัส\nอาศัยรูปเกิดขึ้น\nนี้เป็นคุณแห่งรูป\nรูปไม่เที่ยง เป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา\nนี้เป็นโทษแห่งรูป\nการกำจัดฉันทราคะ\nการละฉันทราคะในรูปเสียได้\nนี้เป็นเครื่องสลัดออกแห่งรูป\nสุขโสมนัส\nอาศัยเวทนาเกิดขึ้น ฯลฯ\nอาศัยสัญญาเกิดขึ้น ฯลฯ\nอาศัยสังขารเกิดขึ้น\nอาศัยวิญญาณเกิดขึ้น\nนี้เป็นคุณแห่งวิญญาณ\nวิญญาณไม่เที่ยง เป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา\nนี้เป็นโทษแห่งวิญญาณ\nการกำจัดฉันทราคะ\nการละฉันทราคะในวิญญาณเสียได้\nนี้เป็นเครื่องสลัดออกแห่งวิญญาณ.\n\nว่าด้วยการไม่มีอหังการ\nมมังการและมานานุสัย\nภิกษุนั้น ชื่นชมอนุโมทนาภาษิต\nของพระผู้มีพระภาคว่า\nดีแล้วพระเจ้าข้า\nแล้วได้ทูลถามปัญหาที่ยิ่งขึ้นไปอีกว่า\nข้าแต่พระองค์ผู้เจริญ\nเมื่อบุคคลรู้อยู่อย่างไร\nเห็นอยู่อย่างไร\nจึงจะไม่มีอหังการ\nมมังการ\nและมานานุสัย\nในกายที่มีวิญญาณนี้\nและในสรรพนิมิตภายนอก?\nพ. ดูกรภิกษุ\nรูปอย่างใดอย่างหนึ่ง\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน\nเป็นภายในก็ดี ภายนอกก็ดี\nหยาบก็ดี ละเอียดก็ดี\nเลวก็ดี ประณีตก็ดี\nมีในที่ไกลก็ดี ในที่ใกล้ก็ดี\nอริยสาวกย่อมพิจารณา\nเห็นรูปทั้งหมดนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nเวทนาอย่างใดอย่างหนึ่ง\nสัญญาอย่างใดอย่างหนึ่ง\nสังขารอย่างใดอย่างหนึ่ง\nวิญญาณอย่างใดอย่างหนึ่ง\nทั้งที่เป็นอดีต อนาคต\nและปัจจุบัน\nเป็นภายในก็ดี ภายนอกก็ดี\nหยาบก็ดี ละเอียดก็ดี\nเลวก็ดี ประณีตก็ดี\nมีในที่ไกลก็ดี ในที่ใกล้ก็ดี\nอริยสาวกย่อมพิจารณา\nเห็นวิญญาณทั้งหมดนั้น\nด้วยปัญญาอันชอบ\nตามความเป็นจริงอย่างนี้ว่า\nนั่นไม่ใช่ของเรา\nนั่นไม่เป็นเรา\nนั่นไม่ใช่ตัวตนของเรา\nดูกรภิกษุ\nเมื่อบุคคลรู้อยู่อย่างนี้\nเห็นอยู่อย่างนี้แล\nจึงจะไม่มีอหังการ\nมมังการ\nและมานานุสัย\nในกายที่มีวิญญาณนี้\nและสรรพนิมิตภายนอก\n\nว่าด้วยกรรม\nที่อนัตตากระทำ\nจะถูกต้องอัตตา\nก็โดยสมัยนั้นแล\nภิกษุรูปหนึ่ง\nได้เกิดความปริวิตกแห่งใจขึ้นว่า\nท่านผู้เจริญทั้งหลาย\nได้ยินว่า\nด้วยประการดังนี้แล\nรูปเป็นอนัตตา เวทนา สัญญา\nสังขาร วิญญาณ เป็นอนัตตา\nกรรมที่อนัตตากระทำ\nจักถูกต้องอัตตา\nคือกรรมได้อย่างไร?\nครั้งนั้นแล พระผู้มีพระภาค\nทรงทราบความปริวิตกแห่งใจ\nของภิกษุนั้นด้วยพระทัยแล้ว\nได้ตรัสเรียกภิกษุทั้งหลาย\nมาตรัสว่า\nดูกรภิกษุทั้งหลาย\nข้อที่โมฆบุรุษบางคน\nในธรรมวินัยนี้\nเป็นผู้ตกอยู่ในอำนาจอวิชชา\nมีใจถูกตัณหาครอบงำ\nจะพึงสำคัญสัตถุศาสน์\nว่าเป็นคำสอนที่ควรคิด\nให้ตระหนักว่า ท่านผู้เจริญทั้งหลาย\nได้ยินว่า\nด้วยประการดังนี้แล\nรูปเป็นอนัตตา เวทนา สัญญา\nสังขาร วิญญาณ เป็นอนัตตา\nกรรมที่อนัตตากระทำ\nจักถูกต้องอัตตา\nคือกรรมได้อย่างไร?\nนี้เป็นฐานะที่จะมีได้\nดูกรภิกษุทั้งหลาย\nเธอทั้งหลาย\nอันเราได้แนะนำไว้แล้ว\nด้วยการทวนถามในธรรมนั้นๆ\nในบาลีประเทศนั้นๆ\nจะสำคัญความข้อนั้นเป็นไฉน\nรูปเที่ยงหรือไม่เที่ยง?\nภิกษุเหล่านั้นกราบทูลว่า\nไม่เที่ยงพระเจ้าข้า\nพ. เวทนา สัญญา สังขาร\nวิญญาณ เที่ยงหรือไม่เที่ยง?\nภิ. ไม่เที่ยง พระเจ้าข้า.\nพ. ก็สิ่งใดไม่เที่ยง\nสิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า?\nภิ. เป็นทุกข์ พระเจ้าข้า.\nพ. ก็สิ่งใดไม่เที่ยง เป็นทุกข์\nมีความแปรปรวนเป็นธรรมดา\nควรหรือหนอ ที่จะตาม\nเห็นสิ่งนั้นว่า นั่นของเรา\nนั่นเป็นเรา\nนั่นเป็นตัวตนของเรา?\nภิ. ไม่ควรเห็นอย่างนั้น พระเจ้าข้า.\nพ. เพราะเหตุนั้นแล ฯลฯ\nอริยสาวกผู้ได้สดับแล้ว\nเห็นอยู่อย่างนี้ ฯลฯ\nย่อมทราบชัดว่า ฯลฯ\nกิจอื่นเพื่อความเป็นอย่างนี้มิได้มี\nฉะนี้แล.'
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
            <h2 style={{display: 'inline-block'}}>อุปาทิยสูตร ปุณณมสูตร</h2>
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

export default Lesson0603;
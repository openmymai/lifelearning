import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0409 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ยมกวรรคที่ 2^500\nอวิชชาสูตร^500\nว่าด้วยอวิชชา^500\nมีนิวรณ์ 5 เป็นอาหาร^500\nดูกรภิกษุทั้งหลาย^500\nเงื่อนต้นแห่งอวิชชาย่อมไม่ปรากฏ^500\nในกาลก่อนแต่นี้อวิชชาไม่มี^500\nแต่ภายหลังจึงมี^500\nเพราะเหตุนั้นเราจึงกล่าวคำนี้^500\nอย่างนี้ว่าก็เมื่อเป็นเช่นนั้น^500\nอวิชชามีข้อนี้เป็นปัจจัยจึงปรากฏ^500\nดูกรภิกษุทั้งหลาย^500\nเราย่อมกล่าว่าอวิชชาว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของอวิชชา^500\nควรจะกล่าวว่านิวรณ์ 5^500\nแม้นิวรณ์ 5 เราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของนิวรณ์ 5^500\nควรกล่าวว่าทุจริต 3^500\nแม้ทุจริต 3 เราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของทุจริต 3^500\nควรกล่าวว่าการไม่สำรวมอินทรีย์^500\nแม้การไม่สำรวมอินทรีย์^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารแห่งการไม่สำรวมอินทรีย์^500\nควรกล่าวว่าความไม่มีสติสัมปชัญญะ^500\nแม้ความไม่มีสติสัมปชัญญะ^500\nเราก็กล่าวว่ามีอาหาร^500\nแม้ความไม่มีสติสัมปชัญญะ^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหาร^500\nของความไม่มีสติสัมปชัญญะ^500\nควรกล่าวว่าการกระทำไว้ในใจ^500\nโดยไม่แยบคาย^500\nแม้การทำไว้ในใจโดยไม่แยบคาย^500\nเราก็กะว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของการทำไว้ในใจ^500\nโดยไม่แยบคาย^500\nควรกล่าวว่าความไม่มีศรัทธา^500\nแม้ความไม่มีศรัทธา^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของความไม่มีศรัทธา^500\nควรกล่าวว่าการไม่ฟังสัทธรรม^500\nแม้การไม่ฟังสัทธรรม^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของการไม่ฟังสัทธรรม^500\nควรกล่าวว่าการไม่คบสัปบุรุษ^500\nดูกรภิกษุทั้งหลายด้วยประการดังนี้^500\nการไม่คบสัปบุรุษที่บริบูรณ์^500\nย่อมยังการไม่ฟังสัทธรรมให้บริบูรณ์^500\nการไม่ฟังสัทธรรมที่บริบูรณ์^500\nย่อมยังความไม่มีศรัทธาให้บริบูรณ์^500\nความไม่มีสถานที่บริบูรณ์^500\nย่อมยังการทำไว้ในใจ^500\nโดยไม่แยบคายให้บริบูรณ์^500\nการทำไว้ในใจ^500\nโดยไม่แยบคายที่บริบูรณ์^500\nย่อมยังความไม่มี^500\nสติสัมปชัญญะให้บริบูรณ์^500\nความไม่มีสติสัมปชัญญะที่บริบูรณ์^500\nย่อมยังการไม่สำรวมอินทรีย์ให้บริบูรณ์^500\nการไม่สำรวมอินทรีย์ที่บริบูรณ์^500\nย่อมยังทุจริต 3 ให้บริบูรณ์^500\nทุจริต 3 ที่บริบูรณ์^500\nย่อมยังนิวรณ์ 5 ให้บริบูรณ์^500\nนิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิชชาให้บริบูรณ์^500\nอวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้',
        'ดูกรภิกษุทั้งหลาย^500\nเปรียบเหมือนเมื่อฝนเม็ดหยาบ^500\nตกลงเบื้องบนภูเขา^500\nเมื่อฝนตกหนักอยู่^500\nน้ำนั้นไหลไปตามที่ลุ่ม^500\nย่อมยังซอกเขาลำธารและห้วยให้เต็ม^500\nซอกเขาลำธารและห้วยที่เต็ม^500\nย่อมยังหนองให้เต็ม^500\nหนองที่เต็มย่อมยังบึงให้เต็ม^500\nบึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม^500\nแม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม^500\nแม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม^500\nมหาสมุทรสาครนั้นมีอาหารอย่างนี้^500\nและเต็มเปี่ยมอย่างนี้แม้ฉันใด^500\nดูกรภิกษุทั้งหลายการไม่คบสัปบุรุษที่บริบูรณ์^500\nย่อมยังการไม่ฟัสัทธรรมให้บริบูรณ์^500\nนิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิขชาให้บริบูรณ์^500\nอวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้^500\nฉันนั้นเหมือนกันแล',
        'ว่าด้วยวิชชาและวิมุตติ^500\nมีโพชฌงค์ 7 เป็นอาหาร^500\nดูกรภิกษุทั้งหลาย^500\nเรากล่าววิชาและวิมุตติว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของวิชาและวิมุต^500\nควรกล่าวว่าโพชฌงค์ 7 ^500\nแม้โพชฌงค์ 7 เราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของโพชฌงค์ 7 ^500\nควรกล่าวว่าสติปัฏฐาน 4 ^500\nแม้สติปัฏฐาน 4 ^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของสติปัฏฐาน 4 ^500\nควรกล่าวว่าสุจริต 3 ^500\nแม้สุจริต 3 เราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของสุจริต 3 ^500\nควรกล่าวว่าการสำรวมอินทรีย์^500\nแม้การสำรวมอินทรีย์เราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nอะไรเป็นอาหารของการสำรวมอินทรีย์^500\nควรกล่าวว่าสติสัมปชัญญะ^500\nแม้สติสัมปชัญญะเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nอะไรเป็นอาหารของสติสัมปชัญญะ^500\nควรกล่าวว่าการทำไว้ในใจโดยแยบคาย^500\nแม้การทำไว้ในใจโดยแยบคาย^500\nเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของการกระทำ^500\nไว้ในใจโดยแยบคาย^500\nควรกล่าวว่าศรัทธา^500\nแม้ศรัทธาเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของศรัทธา^500\nควรกล่าวว่าการฟังสัทธรรม^500\nแม้การฟังสัทธรรมเราก็กล่าวว่ามีอาหาร^500\nมิได้กล่าวว่าไม่มีอาหาร^500\nก็อะไรเป็นอาหารของการฟังสัทธรรม^500\nควรกล่าวว่าการคบสัปบุรุษ^500\nดูกรภิกษุทั้งหลายด้วยประการดังนี้^500\nการคบสัปบุรุษที่บริบูรณ์^500\nย่อมยังการฟังการสัทธรรมให้บริบูรณ์^500\nการฟังสัทธรรมที่บริบูรณ์^500\nย่อมยังศรัทธาให้บริบูรณ์^500\nศรัทธาที่บริบูรณ์^500\nย่อมยังการทำไว้ในใจ^500\nโดยแยบคายให้บริบูรณ์^500\nการทำไว้ในใจ^500\nโดยแยบคายที่บริบูรณ์^500\nย่อมยังสติสัมปชัญญะ^500\nให้บริบูรณ์^500\nสติสัมปชัญญะที่บริบูรณ์^500\nย่อมยังการสำรวมอินทรีย์^500\nให้บริบูรณ์^500\nการสำรวมอินทรีย์ที่บริบูรณ์^500\nย่อมยังสุจริต 3 ให้บริบูรณ์^500\nสุจริต 3 ที่บริบูรณ์ย่อมยังสติปัฏฐาน 4^500\nให้บริบูรณ์^500\nสติปัฏฐาน 4 ที่บริบูรณ์^500\nย่อมยังโพชฌงค์ 7 ให้บริบูรณ์^500\nโพชฌงค์ 7 ที่บริบูรณ์^500\nย่อมยังวิชชาและวิมุตติให้บริบูรณ์^500\nวิชชาและวิมุตนี้มีอาหารอย่างนี้^500\nและบริบูรณ์อย่างนี้^500\nดูกรภิกษุทั้งหลาย^500\nเปรียบเหมือนเมื่อฝนเม็ดหยาบ^500\nตกลงเบื้องบนภูเขา^500\nเมื่อฝนตกหนักอยู่^500\nน้ำนั้นไหลไปตามที่ลุ่ม^500\nยังซอกเขาลำธารและห้วยให้เต็ม^500\nซอกเขาลำธารและห้วยที่เต็ม^500\nย่อมยังหนองให้เต็ม^500\nหนองที่เต็มย่อมยังบึงให้เต็ม^500\nบึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม^500\nแม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม^500\nแม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม^500\nมหาสมุทรสาครนั้นมีอาหารอย่างนี้^500\nและเต็มเปี่ยมอย่างนี้แม้ฉันใด^500\nดูกรภิกษุทั้งหลาย^500\nการคบสัปบุรุษที่บริบูรณ์^500\nย่อมยังการฟังสัทธรรมให้บริบูรณ์^500\nโพชฌงค์ 7 ที่บริบูรณ์^500\nย่อมยังวิชชาและวิมุตติให้บริบูรณ์^500\nวิชชาและวิมุตนี้มีอาหารอย่างนี้^500\nและบริบูรณ์อย่างนี้ฉันนั้นเหมือนกันแล'
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
            <a href="/lesson0410">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>ยมกวรรคที่ 2</h2>
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

export default Lesson0409;
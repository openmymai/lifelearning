import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>บทนำไปใช้ในชีวิตประจำวัน</h2>
        </div>
        <div className="row content">

          <div className="col-lg-3 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <ul>
              <li><a href="learning01"><i className="bi bi-check-all"></i>บทที่ 1</a></li>
              <li><a href="learning02"><i className="bi bi-check-all"></i>บทที่ 2</a></li>
              <li><a href="learning03"><i className="bi bi-check-all"></i>บทที่ 3</a></li>
              <li><a href="learning04"><i className="bi bi-check-all"></i>บทที่ 4</a></li>
              <li><a href="learning05"><i className="bi bi-check-all"></i>บทที่ 5</a></li>
              <li><a href="learning06"><i className="bi bi-check-all"></i>บทที่ 6</a></li>
              <li><a href="learning07"><i className="bi bi-check-all"></i>บทที่ 7</a></li>
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <ul>
              <li><a href="learning08"><i className="bi bi-check-all"></i>บทที่ 8</a></li>
              <li><a href="learning09"><i className="bi bi-check-all"></i>บทที่ 9</a></li>
              <li><a href="learning10"><i className="bi bi-check-all"></i>บทที่ 10</a></li>
              <li><a href="learning11"><i className="bi bi-check-all"></i>บทที่ 11</a></li>
              <li><a href="learning12"><i className="bi bi-check-all"></i>บทที่ 12</a></li>
              <li><a href="learning13"><i className="bi bi-check-all"></i>บทที่ 13</a></li>
              <li><a href="learning14"><i className="bi bi-check-all"></i>บทที่ 14</a></li>
            </ul>
          </div>
          <div className="col-lg-3 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="100">
            <Image 
              src="/img/lotus.png" 
              className="img-fluid" 
              alt=""
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;
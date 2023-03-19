import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>บทนำไปใช้ในชีวิตประจำวัน</h2>
        </div>
          <h4>
            เมื่อท่องจนมีความรู้อยู่ในใจก็นำความจริงไปใช้กำกับการเคลื่อนไหว
          </h4>
          <h5>
            <a href="/daily/learning"><i className="bi bi-check-all"></i>บทนำไปใช้ในชีวิตประจำวัน</a>
          </h5>
      </div>
    </section>
  )
}

export default Team;
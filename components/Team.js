import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="section-title">
            <h2>บทนำไปใช้ในชีวิตประจำวัน</h2>
          </div>
            <h4>
              เมื่อท่องจนมีความรู้อยู่ในใจก็นำความจริงไปใช้กำกับการเคลื่อนไหว
            </h4>
            <h5>
              <a href="/daily/learning"><i className="bi bi-check-all"></i>บทนำไปใช้ในชีวิตประจำวัน</a>
            </h5>
            <div className="section-title">
              <h2><a href="https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1">Subscribe <i className="bi bi-youtube" /></a></h2>
            </div>
            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/OXAYj3Zcfak"
                title="Embed vdo"
                allowFullScreen
              />
            </div>

            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/EBGFzJgmSqs"
                title="Embed vdo"
                allowFullScreen
              />
            </div>

            <div className="col-sm align-items-center justify-content-center">
              <iframe
                src="https://youtube.com/embed/oMuqXmx0-VA"
                title="Embed vdo"
                allowFullScreen
              />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Team;
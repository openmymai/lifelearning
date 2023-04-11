import React from 'react';

const Client = () => {
      
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row" data-aos="zoom-in">
          <div className="section-title">
            <h2>พระพุทธเจ้าสอนอะไร?</h2>
          </div>
          <div><h2><a href="https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1">Subscribe <i className="bi bi-youtube" /></a></h2></div>
          <div className="col-sm align-items-center justify-content-center">
            <iframe
              src="https://youtube.com/embed/23dJ_aJ06rA"
              title="Embed vdo"
              allowFullScreen
            />
          </div>
        {/*
          <div className="col-sm align-items-center justify-content-center">
            <iframe
              src="https://youtube.com/embed/IVCo0yodpjk"
              title="Embed vdo"
              allowFullScreen
            />
          </div>

          <div className="col-sm align-items-center justify-content-center">
            <iframe
              src="https://youtube.com/embed/h1f05GKNRow"
              title="Embed vdo"
              allowFullScreen
            />
          </div>

          <div className="col-sm align-items-center justify-content-center">
            <iframe
              src="https://youtube.com/embed/XS-KvxMiEWY"
              title="Embed vdo"
              allowFullScreen
            />
          </div>
        */}
        </div>

      </div>
    </section>
  )
}

export default Client;
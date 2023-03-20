import React, { useState } from 'react';

const AutoScroll = () => {
  const [ scrollState, setScrollState ] = useState(false);

  let myInterval;  
  const scrollToBottom = (speed) => {
    if (typeof window !== 'undefined') {
      window.scrollBy({
        top: speed,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const autoScrollClick = () => {
    myInterval = setInterval(() => scrollToBottom(4), 100)
  }
  const stopAutoScroll = () => {
    clearInterval(myInterval);
  }

  return (
    <div>
      {!scrollState ? (
          <div className="click-to-bottom d-flex align-items-center justify-content-center active" onClick={() => {autoScrollClick(); setScrollState(true) }}>
            <i className="bi bi-play" />
          </div>
        ) : (
          <div className="click-to-bottom d-flex align-items-center justify-content-center active" onClick={() => {stopAutoScroll(); setScrollState(false) }}>
            <i className="bi bi-pause" />
          </div>
        )
      }
    </div>
  );
}

export default AutoScroll;
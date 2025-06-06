import React from 'react'

function Timeline() {
  return (
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline-start timeline-box">
          First Macintosh computer
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end timeline-box">iMac</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box">iPod</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end timeline-box">iPhone</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box">Apple Watch</div>
      </li>
    </ul>
  );
}

export default Timeline
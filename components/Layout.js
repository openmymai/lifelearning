import React from "react";

const Layout = (props) => {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h2 className="logo me-auto"><a href="/">ชีวิตคือการศึกษาเรียนรู้</a></h2>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="/">หน้าแรก</a></li>
              <li><a className="nav-link scrollto" href="/introduction">บทนำ</a></li>
              <li><a className="nav-link scrollto" href="/lesson0101">เริ่มต้นท่องจำ</a></li>
              <li className="dropdown"><a href="#"><span></span>หลักสูตรอนาคามีผล<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/lesson0201">เล่ม 2 บทที่ 1</a></li>
                  <li><a href="/lesson0202">เล่ม 2 บทที่ 2</a></li>
                  <li><a href="/lesson0203">เล่ม 2 บทที่ 3</a></li>
                  <li><a href="/lesson0204">เล่ม 2 บทที่ 4</a></li>
                  <li><a href="/lesson0205">เล่ม 2 บทที่ 5</a></li>
                  <li><a href="/lesson0206">เล่ม 2 บทที่ 6</a></li>
                  <li><a href="/lesson0207">เล่ม 2 บทที่ 7</a></li>
                  <li><a href="/lesson0208">เล่ม 2 บทที่ 8</a></li>
                  <li><a href="/lesson0209">เล่ม 2 บทที่ 9</a></li>
                  <li><a href="/lesson0210">เล่ม 2 บทที่ 10</a></li>
                  <li><a href="/lesson0211">เล่ม 2 บทที่ 11</a></li>
                  <li><a href="/lesson0212">เล่ม 2 บทที่ 12</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span></span>เล่มที่ 3<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/lesson0301">เล่ม 3 บทที่ 1</a></li>
                  <li><a href="/lesson0302">เล่ม 3 บทที่ 2</a></li>
                  <li><a href="/lesson0303">เล่ม 3 บทที่ 3</a></li>
                  <li><a href="/lesson0304">เล่ม 3 บทที่ 4</a></li>
                  <li><a href="/lesson0305">เล่ม 3 บทที่ 5</a></li>
                  <li><a href="/lesson0306">เล่ม 3 บทที่ 6</a></li>
                  <li><a href="/lesson0307">เล่ม 3 บทที่ 7</a></li>
                  <li><a href="/lesson0308">เล่ม 3 บทที่ 8</a></li>
                  <li><a href="/lesson0309">เล่ม 3 บทที่ 9</a></li>
                  <li><a href="/lesson0310">เล่ม 3 บทที่ 10</a></li>
                  <li><a href="/lesson0311">เล่ม 3 บทที่ 11</a></li>
                  <li><a href="/lesson0312">เล่ม 3 บทที่ 12</a></li>
                  <li><a href="/lesson0313">เล่ม 3 บทที่ 13</a></li>
                  <li><a href="/lesson0314">เล่ม 3 บทที่ 14</a></li>
                  <li><a href="/lesson0315">เล่ม 3 บทที่ 15</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span></span>เล่มที่ 4<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/lesson0401">เล่ม 4 บทที่ 1</a></li>
                  <li><a href="/lesson0402">เล่ม 4 บทที่ 2</a></li>
                  <li><a href="/lesson0403">เล่ม 4 บทที่ 3</a></li>
                  <li><a href="/lesson0404">เล่ม 4 บทที่ 4</a></li>
                  <li><a href="/lesson0405">เล่ม 4 บทที่ 5</a></li>
                  <li><a href="/lesson0406">เล่ม 4 บทที่ 6</a></li>
                  <li><a href="/lesson0407">เล่ม 4 บทที่ 7</a></li>
                  <li><a href="/lesson0408">เล่ม 4 บทที่ 8</a></li>
                  <li><a href="/lesson0409">เล่ม 4 บทที่ 9</a></li>
                  <li><a href="/lesson0410">เล่ม 4 บทที่ 10</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span></span>เล่มที่ 5<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/lesson0501">เล่ม 5 บทที่ 1</a></li>
                  <li><a href="/lesson0502">เล่ม 5 บทที่ 2</a></li>
                  <li><a href="/lesson0503">เล่ม 5 บทที่ 3</a></li>
                  <li><a href="/lesson0504">เล่ม 5 บทที่ 4</a></li>
                  <li><a href="/lesson0505">เล่ม 5 บทที่ 5</a></li>
                  <li><a href="/lesson0506">เล่ม 5 บทที่ 6</a></li>
                  <li><a href="/lesson0507">เล่ม 5 บทที่ 7</a></li>
                  <li><a href="/lesson0508">เล่ม 5 บทที่ 8</a></li>
                  <li><a href="/lesson0509">เล่ม 5 บทที่ 9</a></li>
                  <li><a href="/lesson0510">เล่ม 5 บทที่ 10</a></li>
                  <li><a href="/lesson0511">เล่ม 5 บทที่ 11</a></li>
                  <li><a href="/lesson0512">เล่ม 5 บทที่ 12</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span></span>เล่มที่ 6<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/lesson0601">เล่ม 6 บทที่ 1</a></li>
                  <li><a href="/lesson0602">เล่ม 6 บทที่ 2</a></li>
                  <li><a href="/lesson0603">เล่ม 6 บทที่ 3</a></li>
                  <li><a href="/lesson0604">เล่ม 6 บทที่ 4</a></li>
                  <li><a href="/lesson0605">เล่ม 6 บทที่ 5</a></li>
                  <li><a href="/lesson0606">เล่ม 6 บทที่ 6</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span></span>ชีวิตประจำวัน<i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/learning01">บทที่ 1</a></li>
                  <li><a href="/learning02">บทที่ 2</a></li>
                  <li><a href="/learning03">บทที่ 3</a></li>
                  <li><a href="/learning04">บทที่ 4</a></li>
                  <li><a href="/learning05">บทที่ 5</a></li>
                  <li><a href="/learning06">บทที่ 6</a></li>
                  <li><a href="/learning07">บทที่ 7</a></li>
                  <li><a href="/learning08">บทที่ 8</a></li>
                  <li><a href="/learning09">บทที่ 9</a></li>
                  <li><a href="/learning10">บทที่ 10</a></li>
                  <li><a href="/learning11">บทที่ 11</a></li>
                  <li><a href="/learning12">บทที่ 12</a></li>
                  <li><a href="/learning13">บทที่ 13</a></li>
                  <li><a href="/learning14">บทที่ 14</a></li>
                </ul>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
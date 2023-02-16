import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Layout = (props) => {
  return (
    <div>
      <header id="header" className="fixed-top ">
          <Navbar id="navbar" expand="lg">
            <Container fluid>
              <Navbar.Brand className="mx-2" href="/">LifeLearning</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">หน้าแรก</Nav.Link>
                  <Nav.Link href="/introduction">บทนำ</Nav.Link>
                  <NavDropdown className="dropdown" title="บทวิปัสสนาภาวนา" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/lesson0101">เล่ม 1 บทที่ 1</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0102">เล่ม 1 บทที่ 2</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0103">เล่ม 1 บทที่ 3</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0104">เล่ม 1 บทที่ 4</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0105">เล่ม 1 บทที่ 5</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0106">เล่ม 1 บทที่ 6</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="หลักสูตรอนาคามีผล" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/lesson0201">เล่ม 2 บทที่ 1</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0202">เล่ม 2 บทที่ 2</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0203">เล่ม 2 บทที่ 3</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0204">เล่ม 2 บทที่ 4</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0205">เล่ม 2 บทที่ 5</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0206">เล่ม 2 บทที่ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0207">เล่ม 2 บทที่ 7</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0208">เล่ม 2 บทที่ 8</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0209">เล่ม 2 บทที่ 9</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0210">เล่ม 2 บทที่ 10</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0211">เล่ม 2 บทที่ 11</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0212">เล่ม 2 บทที่ 12</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="บทวิปัสสนาเพิ่มเติม" id="navbarScrollingDropdown">
                    <NavDropdown title="ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0301">เล่ม 3 บทที่ 1</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0302">เล่ม 3 บทที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0303">เล่ม 3 บทที่ 3</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0304">เล่ม 3 บทที่ 4</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0305">เล่ม 3 บทที่ 5</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0306">เล่ม 3 บทที่ 6</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0307">เล่ม 3 บทที่ 7</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0308">เล่ม 3 บทที่ 8</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0309">เล่ม 3 บทที่ 9</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0310">เล่ม 3 บทที่ 10</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0311">เล่ม 3 บทที่ 11</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0312">เล่ม 3 บทที่ 12</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0313">เล่ม 3 บทที่ 13</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0314">เล่ม 3 บทที่ 14</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0315">เล่ม 3 บทที่ 15</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ว่าด้วยอดีต ปัจจุบัน อนาคต" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0401">เล่ม 4 บทที่ 1</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0402">เล่ม 4 บทที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0403">เล่ม 4 บทที่ 3</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0404">เล่ม 4 บทที่ 4</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0405">เล่ม 4 บทที่ 5</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0406">เล่ม 4 บทที่ 6</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0407">เล่ม 4 บทที่ 7</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0408">เล่ม 4 บทที่ 8</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0409">เล่ม 4 บทที่ 9</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0410">เล่ม 4 บทที่ 10</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ว่าด้วยปฏิจจสมุปบาท" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0501">เล่ม 5 บทที่ 1</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0502">เล่ม 5 บทที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0503">เล่ม 5 บทที่ 3</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0504">เล่ม 5 บทที่ 4</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0505">เล่ม 5 บทที่ 5</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0506">เล่ม 5 บทที่ 6</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0507">เล่ม 5 บทที่ 7</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0508">เล่ม 5 บทที่ 8</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0509">เล่ม 5 บทที่ 9</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0510">เล่ม 5 บทที่ 10</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0511">เล่ม 5 บทที่ 11</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0512">เล่ม 5 บทที่ 12</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="พระสุตตันตปิฎก เล่ม 9" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0601">เล่ม 6 บทที่ 1</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0602">เล่ม 6 บทที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0603">เล่ม 6 บทที่ 3</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0604">เล่ม 6 บทที่ 4</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0605">เล่ม 6 บทที่ 5</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0606">เล่ม 6 บทที่ 6</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  <NavDropdown title="นำไปใช้ในชีวิตประจำวัน" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/learning01">เล่ม 2 บทที่ 1</NavDropdown.Item>
                    <NavDropdown.Item href="/learning02">เล่ม 2 บทที่ 2</NavDropdown.Item>
                    <NavDropdown.Item href="/learning03">เล่ม 2 บทที่ 3</NavDropdown.Item>
                    <NavDropdown.Item href="/learning04">เล่ม 2 บทที่ 4</NavDropdown.Item>
                    <NavDropdown.Item href="/learning05">เล่ม 2 บทที่ 5</NavDropdown.Item>
                    <NavDropdown.Item href="/learning06">เล่ม 2 บทที่ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/learning07">เล่ม 2 บทที่ 7</NavDropdown.Item>
                    <NavDropdown.Item href="/learning08">เล่ม 2 บทที่ 8</NavDropdown.Item>
                    <NavDropdown.Item href="/learning09">เล่ม 2 บทที่ 9</NavDropdown.Item>
                    <NavDropdown.Item href="/learning10">เล่ม 2 บทที่ 10</NavDropdown.Item>
                    <NavDropdown.Item href="/learning11">เล่ม 2 บทที่ 11</NavDropdown.Item>
                    <NavDropdown.Item href="/learning12">เล่ม 2 บทที่ 12</NavDropdown.Item>
                    <NavDropdown.Item href="/learning13">เล่ม 2 บทที่ 13</NavDropdown.Item>
                    <NavDropdown.Item href="/learning14">เล่ม 2 บทที่ 14</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
      </header>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Layout = (props) => {
  return (
    <div>
      <header className="fixed-top">
          <Navbar bg="white" expand="lg">
            <Container fluid>
              <Navbar.Brand className="mx-2" href="/">LifeLearning</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mx-2">
                  <Nav.Link href="/">หน้าแรก</Nav.Link>
                  <NavDropdown className="dropdown" title="ปัญญา ศีล สมาธิ" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/life01">ปฏิบัติธรรมด้วยความไม่ประมาทปฏิบัติอย่างไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life02">วิธีเจริญหรือสร้างปัญญา ปฏิบัติอย่างไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life03">ปฏิบัติธรรมอย่างไรจึงจะถูกทาง?</NavDropdown.Item>
                    <NavDropdown.Item href="/life04">ชีวิตของท่านต้องการดับทุกข์หรือหลบทุกข์?</NavDropdown.Item>
                    <NavDropdown.Item href="/life05">ความพอดีของคนเราอยู่ตรงไหน?</NavDropdown.Item>
                    <NavDropdown.Item href="/life06">การเจริญสติปัญญาที่ถูกต้องทำอย่างไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life07">การรู้เท่าทันความพอใจและไม่พอใจแก้ปัญหาหรือดับทุกข์ได้</NavDropdown.Item>
                    <NavDropdown.Item href="/life08">ไตรสิกขาในพระไตรปิฎกเข้าใจถูกต้องแล้วหรือ?</NavDropdown.Item>
                    <NavDropdown.Item href="/life09">วิธีการวิปัสสนาแบบง่ายๆ แต่ได้ผล</NavDropdown.Item>
                    <NavDropdown.Item href="/life10">ความคิดเห็นของคนเราคืออะไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life11">วิปัสสนาดับทุกข์และสร้างสุขถาวรได้อย่างไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life12">เราจะให้รางวัลชีวิตของเราได้อย่างไร?</NavDropdown.Item>
                    <NavDropdown.Item href="/life13">วิปัสสนาภาวนา มีปัญญา รู้จริง รู้แจ้ง อริยสัจ 4 ได้อย่างไร?</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/introduction">บทนำ</Nav.Link>
                  <NavDropdown className="dropdown" title="บทวิปัสสนาภาวนา" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/lesson0101">พิจารณาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0102">ตามทันตัวเรา</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0103">ฝึกเห็นตามจริง</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0104">การพิจารณาอินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0105">การพิจารณาอินทรีย์ 6 และขันธ์ 5</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0106">ฝึกเอาความจริงไปใช้</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="หลักสูตรอนาคามีผล" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/lesson0201">พิจารณาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0202">การพิจารณาอินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0203">กำหนดรู้โลกและชีวิต</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0204">กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0205">วิปัสสนาภาวนาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0206">ฝึกตามทันกายกรรม</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0207">องค์ประกอบของโลกและชีวิต</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0208">วิปัสสนากำหนดรู้ส่วน 2 อย่าง</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0209">กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0210">พิจารณาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0211">โลกและชีวิตความรู้สึกเป็นอันเดียวกัน</NavDropdown.Item>
                    <NavDropdown.Item href="/lesson0212">โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="บทวิปัสสนาเพิ่มเติม" id="navbarScrollingDropdown">
                    <NavDropdown title="ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0301">ว่าด้วยความเป็นอนิจจังแห่งอายตนะภายใน</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0302">ว่าด้วยความเป็นทุกข์แห่งอายตนะภายใน</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0303">ว่าด้วยความเป็นอนัตตาแห่งอายตนะภายใน</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0304">ว่าด้วยความเป็นอนิจจังแห่งอายตนะภายนอก</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0305">ว่าด้วยความเป็นทุกข์แห่งอายตนะภายนอก</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0306">ว่าด้วยความเป็นอนัตตาแห่งอายตนะภายนอก</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0307">ว่าด้วยความเป็นอนัตตาแห่งอายตนะภายนอก</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0308">ว่าด้วยทรงแสดงธรรมเพื่อความเป็นผู้อยู่ผู้เดียว</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0309">ถ้ามีคนพึงถามอย่างนี้ว่า</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0310">อานิสงส์ของเมตตา</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0311">ราหุลสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0312">ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0313">ว่าด้วยควรว่าด้วยเวทนา 3</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0314">ว่าด้วยการกระทำที่สุดทุกข์</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0315">ว่าด้วยเหตุปัจจัยเป็นเครื่องให้สัตว์ไม่ปรินิพพานและปรินิพพาน</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ว่าด้วยอดีต ปัจจุบัน อนาคต" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0401">พิจารณาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0402">อดีต อนาคต ปัจจุบัน อนิจจสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0403">พาหิรอนิจจาสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0404">สัมโพธสูตรที่ 1</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0405">โนอัสสาสูตรที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0406">อาฬวกสูตรที่ 12</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0407">ขัตติยาธิปปายสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0408">อาพาธสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0409">ยมกวรรคที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0410">ฐานสูตร</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ว่าด้วยปฏิจจสมุปบาท" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0501">พิจารณาขันธ์ 5 อินทรีย์ 6</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0502">ภิกขุวรรค</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0503">มหาราหุโลวาทสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0504">ภาวนาเสมอด้วยธาตุ 5</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0505">อานาปานสติภาวนา</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0506">เทศนาสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0507">วิภังคสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0508">อาหารสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0509">ติมพรุกขสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0510">ปริวีมังสนสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0511">สัมมสนสูตรที่ 2</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0512">อนาคตสูตรที่ 2</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="พระสุตตันตปิฎก เล่ม 9" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/lesson0601">นกุลปิตาสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0602">เทวทหสูตร ภารสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0603">อุปาทิยสูตร ปุณณมสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0604">ยมกสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0605">อนุราธสูตร</NavDropdown.Item>
                      <NavDropdown.Item href="/lesson0606">สมุทยธัมมสูตรที่ 1</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  <NavDropdown title="นำไปใช้ในชีวิตประจำวัน" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/learning01">บทที่ 1</NavDropdown.Item>
                    <NavDropdown.Item href="/learning02">บทที่ 2</NavDropdown.Item>
                    <NavDropdown.Item href="/learning03">บทที่ 3</NavDropdown.Item>
                    <NavDropdown.Item href="/learning04">บทที่ 4</NavDropdown.Item>
                    <NavDropdown.Item href="/learning05">บทที่ 5</NavDropdown.Item>
                    <NavDropdown.Item href="/learning06">บทที่ 6</NavDropdown.Item>
                    <NavDropdown.Item href="/learning07">บทที่ 7</NavDropdown.Item>
                    <NavDropdown.Item href="/learning08">บทที่ 8</NavDropdown.Item>
                    <NavDropdown.Item href="/learning09">บทที่ 9</NavDropdown.Item>
                    <NavDropdown.Item href="/learning10">บทที่ 10</NavDropdown.Item>
                    <NavDropdown.Item href="/learning11">บทที่ 11</NavDropdown.Item>
                    <NavDropdown.Item href="/learning12">บทที่ 12</NavDropdown.Item>
                    <NavDropdown.Item href="/learning13">บทที่ 13</NavDropdown.Item>
                    <NavDropdown.Item href="/learning14">บทที่ 14</NavDropdown.Item>
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
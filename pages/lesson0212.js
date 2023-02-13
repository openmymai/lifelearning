import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0212 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ความคิด โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อความคิด โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเท้าเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเท้าเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nมือจับ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อมือจับ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเหลียวซ้าย โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเหลียวซ้าย โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเหลียวขวา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเหลียวขวา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nก้มหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อก้มหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเงยหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเงยหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nยืน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อยืน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nนั่ง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อนั่ง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nตื่นนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อตื่นนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nลืมตา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อลืมตา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nที่นอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อที่นอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nผ้าห่ม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อผ้าห่ม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nล้างหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อล้างหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nแปรงฟัน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อแปรงฟัน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่ออาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nใส่เสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อใส่เสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nใส่กางเกง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อใส่กางเกง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nหวีผม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อหวีผม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nแต่งหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อแต่งหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nไปทานข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อไปทานข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nจาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อจาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nช้อน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อช้อน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nกับข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อกับข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดื่มน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อดื่มน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดื่มกาแฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อดื่มกาแฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nไปทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อไปทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nขับรถ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อขับรถ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nที่ทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อที่ทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเพื่อนร่วมงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเพื่อนร่วมงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nนั่งเก้าอี้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อนั่งเก้าอี้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nจับปากกา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อจับปากกา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเขียนหนังสือ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเขียนหนังสือ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเข้าห้องน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเข้าห้องน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเลิกงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเลิกงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nกลับบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อกลับบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nซื้อของ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อซื้อของ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเข้าบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเข้าบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nให้อาหารสัตว์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อให้อาหารสัตว์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nรดน้ำต้นไม้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อรดน้ำต้นไม้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nกวาดบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อกวาดบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nถูพื้น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อถูพื้น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nซักผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อซักผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nไม้แขวนเสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อไม้แขวนเสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nตากผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อตากผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nกินข้าวเย็น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อกินข้าวเย็น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่ออาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเปิดพัดลม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเปิดพัดลม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเปิดแอร์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเปิดแอร์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nดูทีวี โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อดูทีวี โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nฟังเพลง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อฟังเพลง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nโทรศัพท์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อโทรศัพท์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nปิดไฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อปิดไฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nเข้านอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อเข้านอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nการเคลื่อนไหว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nชื่อการเคลื่อนไหว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ\nนี่คือผลต่อเนื่องของโลกและชีวิต\nกำหนดรู้ว่าทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ'
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
              <i class="bi bi-x-lg" />
            </button>
            <h2 style={{display: 'inline-block'}}>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ</h2>
          </div>
          <div>
            <h2>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lesson0212;
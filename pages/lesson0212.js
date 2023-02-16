import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Lesson0212 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'ความคิด โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อความคิด โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเท้าเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเท้าเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nมือจับ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อมือจับ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเหลียวซ้าย โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเหลียวซ้าย โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเหลียวขวา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเหลียวขวา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ก้มหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อก้มหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเงยหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเงยหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nยืน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อยืน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเดิน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนั่ง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อนั่ง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ตื่นนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อตื่นนอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nลืมตา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อลืมตา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nที่นอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อที่นอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nผ้าห่ม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อผ้าห่ม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nล้างหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อล้างหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nแปรงฟัน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อแปรงฟัน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่ออาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nใส่เสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อใส่เสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nใส่กางเกง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อใส่กางเกง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nหวีผม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อหวีผม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nแต่งหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อแต่งหน้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ไปทานข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อไปทานข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nจาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อจาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nช้อน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อช้อน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกับข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อกับข้าว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดื่มน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อดื่มน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดื่มกาแฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อดื่มกาแฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ไปทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อไปทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nขับรถ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อขับรถ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nที่ทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อที่ทำงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเพื่อนร่วมงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเพื่อนร่วมงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนั่งเก้าอี้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อนั่งเก้าอี้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nจับปากกา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อจับปากกา โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเขียนหนังสือ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเขียนหนังสือ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้าห้องน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเข้าห้องน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเลิกงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเลิกงาน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกลับบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อกลับบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'ซื้อของ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อซื้อของ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้าบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเข้าบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nให้อาหารสัตว์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อให้อาหารสัตว์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nรดน้ำต้นไม้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อรดน้ำต้นไม้ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nกวาดบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อกวาดบ้าน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nถูพื้น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อถูพื้น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nซักผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อซักผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nไม้แขวนเสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อไม้แขวนเสื้อ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nตากผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อตากผ้า โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ',
        'กินข้าวเย็น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อกินข้าวเย็น โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nอาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่ออาบน้ำ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเปิดพัดลม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเปิดพัดลม โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเปิดแอร์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเปิดแอร์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nดูทีวี โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อดูทีวี โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nฟังเพลง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อฟังเพลง โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nโทรศัพท์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อโทรศัพท์ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nปิดไฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อปิดไฟ โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nเข้านอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อเข้านอน โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nการเคลื่อนไหว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nชื่อการเคลื่อนไหว โลกและชีวิตความรู้สึก\nเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ^500\nนี่คือผลต่อเนื่องของโลกและชีวิต\nกำหนดรู้ว่าทั้งหมดเป็นธรรมชาติชนิดหนึ่ง\nไม่เที่ยงเกิดดับ'
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
              <i className="bi bi-x-lg" />
            </button>
            <a href="/lesson0301">
              <button type="button" className="btn btn-primary me-5">
                <i className="bi bi-arrow-right-square" />
              </button>
            </a>
            <h2 style={{display: 'inline-block'}}>โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ</h2>
          </div>
          <div className="praise_container">
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
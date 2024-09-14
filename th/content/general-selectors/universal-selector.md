---
prev:
  text: 'Intro to CSS Selectors'
  link: '/content'
next:
  text: 'Type Selector'
  link: '/content/general-selectors/type-selector'
---

# Universal Selector

Universal Selector เป็น selector ใน CSS ที่เลือกทุก element ภายในขอบเขตที่กำหนด เรียกว่า "Universal" เพราะสามารถใช้กับทุก element ในหน้าเว็บ

## ตัวอย่าง

```css
* {
  /* CSS properties */
}
```

## การใช้งานพื้นฐาน

Universal Selector มักใช้ในการกำหนด style ที่ควรจะเหมือนกันสำหรับทุก element เช่น การตั้งค่าระยะห่างขอบและระยะห่างภายใน

```css
* {
  margin: 0;
  padding: 0;
}
```

การใช้งานแบบนี้พบได้ทั่วไปใน CSS resets เพื่อ reset style เริ่มต้นที่แตกต่างกันของเบราว์เซอร์

## ขอบเขตของ Universal Selector

Universal Selector ถูกออกแบบมาให้ส่งผลกับทุก element ใน HTML แต่เมื่อนำไปใช้ภายในกฎ CSS ที่ซับซ้อน เช่น `.container *  {color: blue; }` ผลของ Universal Selector จะถูกจำกัดให้ทำงานเฉพาะภายใน element ที่มี class container `(.container)` เท่านั้น ทำให้เราสามารถกำหนดรูปแบบให้กับองค์ประกอบทั้งหมดภายในส่วนนั้นได้โดยง่าย

```css
.container * {
  color: blue;
}
```

## ข้อดีและข้อเสีย

### ข้อดี

Universal Selector ใช้งานง่ายและมีประสิทธิภาพสำหรับการตั้งค่า style ระดับ global หรือการ reset

### ข้อเสีย

การใช้มากเกินไปอาจทำให้เกิดปัญหาด้านประสิทธิภาพ โดยเฉพาะในเอกสารที่มีขนาดใหญ่ เพราะอาจเลือก element หลายพันรายการ

## ความสำคัญของ CSS (CSS Specificity)

Universal Selector มีความสำคัญต่ำที่สุดในบรรดา selector CSS ทั้งหมด ซึ่งหมายความว่าจะถูกเขียนทับโดย selector ที่เฉพาะเจาะจงมากกว่า เช่น selector class `(.class)` หรือ selector ID `(#id)`

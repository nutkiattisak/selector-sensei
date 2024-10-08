# Type Selector

Type Selector (หรือที่เรียกว่า Element Selector) คือ selector ที่เลือก Element HTML ตามชื่อแท็กของพวกมัน ตัวอย่างเช่น หากต้องการเลือก Tag `<p>` ทั้งหมด จะใช้ Selector ประเภท `p`

ไวยากรณ์ของ Type Selector นั้นง่ายมาก เพียงแค่เขียนชื่อของ Element โดยไม่ต้องมีสัญลักษณ์เพิ่มเติม

## ตัวอย่าง

```css
p {
  /* CSS properties */
}

```

## การใช้งานพื้นฐาน

Type Selectors มักถูกใช้เพื่อกำหนด style ให้กับประเภทขององค์ประกอบเฉพาะ

```css
h1 {
  color: blue;
  font-size: 2em;
}

a {
  text-decoration: none;
}
```

ในตัวอย่างนี้ selector `h1` จะกำหนด style ให้กับ `<h1>` ทั้งหมด และ selector `a` จะกำหนด style ให้กับ `<a>` ทั้งหมด

## การรวมกับ Selector อื่น ๆ

Type Selectors สามารถรวมกับ selector อื่น ๆ เพื่อสร้าง selector ที่มีความเฉพาะเจาะจงมากขึ้น

- การรวมกันระหว่าง Class และ Type

```css
p.intro {
  font-weight: bold;
}
```

ตัวอย่างนี้จะเลือกเฉพาะ `<p>` ที่มี class `intro`

- Descendant Combinator

```css
div p {
  color: green;
}
```

ตัวอย่างนี้จะเลือกเฉพาะ `<p>` ที่เป็นลูกหลานของ `<div>`

## ความสำคัญของ Type Selectors

Type Selectors มีความสำคัญต่ำเมื่อเทียบกับ selector class `(.class)` และ ID `(#id)` ดังนั้นจึงอาจถูกเขียนทับได้โดย selector ที่มีความสำคัญมากกว่า

## ข้อควรพิจารณาด้านประสิทธิภาพ

Type Selectors มักทำงานได้เร็วเพราะเบราว์เซอร์สามารถจับคู่กับ element โดยดูจากชื่อแท็กได้ง่าย อย่างไรก็ตาม การใช้มากเกินไปหรือการซ้อนกันลึก ๆ อาจมีผลต่อประสิทธิภาพในเอกสารที่มีขนาดใหญ่

## ข้อผิดพลาดและการใช้งานที่ไม่ถูกต้องที่พบบ่อย

- การใช้ Type Selectors มากเกินไปอาจทำให้โค้ดดูแลรักษายาก โดยเฉพาะเมื่อใช้แทน selector class `(.class)` หรือ ID `(#id)`  ที่เฉพาะเจาะจงกว่า

- การกำหนด style ให้ element โดยตรงโดยไม่พิจารณาการใช้งานซ้ำหรือความสามารถในการขยายขนาดอาจสร้างความท้าทายในโปรเจกต์ที่มีขนาดใหญ่

## แนวทางที่ควรปฏิบัติ

- ใช้ Type Selectors สำหรับ style ทั่วไปที่ใช้กับทุก instance ของ element
- รวม Type Selectors กับ class `(.class)` หรือ ID `(#id)` เพื่อการกำหนด style ที่เฉพาะเจาะจงมากขึ้น
- หลีกเลี่ยงการพึ่งพา Type Selectors เพียงอย่างเดียวสำหรับกฎการกำหนด style ที่ซับซ้อน

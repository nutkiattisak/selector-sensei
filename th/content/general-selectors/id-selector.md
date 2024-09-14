# ID Selector

ID Selector ใช้เพื่อเลือก Element เฉพาะบนเว็บเพจที่มีแอตทริบิวต์ id ที่ไม่ซ้ำกัน ต่างจาก Class Selector ที่สามารถใช้กับหลาย Element ได้ ID Selector ถูกออกแบบมาให้ใช้ได้กับ Element เพียงหนึ่งเดียวบนหน้าเว็บเท่านั้น

## ไวยากรณ์

ไวยากรณ์สำหรับตัวเลือก ID ประกอบด้วยสัญลักษณ์แฮช (#) ตามด้วยชื่อ ID

```css
#idname {
  /* CSS properties */
}
```

โค้ดนี้จะนำ style ที่กำหนดไปใช้กับ Element ที่มี id ที่ระบุ

## การใช้งานพื้นฐาน

ID Selectors มักใช้กับ Element ที่ต้องการการกำหนด Style เฉพาะที่ไม่ซ้ำกัน

```css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}
```

ในตัวอย่างนี้ Element ใด ๆ ที่มี `id` เป็น `header` จะถูกกำหนดสไตล์ตามที่ระบุ

## การกำหนด ID ให้กับ Element

แอตทริบิวต์ `id` จะถูกเพิ่มไปยัง HTML Element โดยตรง

```html
<div id="header">Welcome to My Website</div>
```

สไตล์ที่กำหนดไว้สำหรับ `#header` ใน CSS จะถูกนำไปใช้กับ `<div>` นี้

## การรวม ID Selectors กับ Selector อื่น ๆ

ID Selectors สามารถรวมกับ selector อื่น ๆ เพื่อการกำหนด style ที่เฉพาะเจาะจงมากขึ้น

- การรวมกันระหว่าง ID และ Type

```css
div#header {
  font-size: 24px;
}
```

โค้ดนี้จะเลือกองค์ประกอบ `<div>` ที่มี id ว่า `header`

- Descendant Combinator

```css

#menu ul {
  list-style: none;
  padding: 0;
}
```

โค้ดนี้จะเลือก Element `<ul>` ทั้งหมดที่เป็นลูกหลานของ Element ที่มี id ว่า `menu`

## ความสำคัญของ ID Selectors

ID Selectors มีความสำคัญสูงกว่า Class Selectors และ Type Selectors นั่นหมายความว่า เมื่อมีการกำหนด style ที่ขัดแย้งกัน style ที่กำหนดโดย ID Selector จะถูกนำมาใช้ก่อน

## ข้อดีของการใช้ ID Selectors

- มีความเฉพาะเจาะจงสูง มีประโยชน์ในการเขียนทับ Style อื่น ๆ
- มีความเฉพาะตัว ช่วยให้มั่นใจได้ว่าเลือกเฉพาะ Element เดียวเท่านั้น ซึ่งมีประโยชน์ต่อการใช้งาน JavaScript และการจัดรูปแบบ CSS

## ข้อผิดพลาดและการใช้งานที่ไม่ถูกต้องที่พบบ่อย

- การใช้ ID Selectors มากเกินไป เนื่องจากมีความเฉพาะเจาะจงสูง การใช้บ่อยเกินไปอาจทำให้ CSS ยากต่อการดูแลรักษา
- การใช้ ID ซ้ำ แต่ละ ID ต้องไม่ซ้ำกันภายในหน้าเว็บ การใช้ ID ซ้ำสำหรับหลาย Element ไม่ใช่ HTML ที่ถูกต้องและอาจทำให้เกิดพฤติกรรมที่ไม่คาดคิด

## แนวทางปฏิบัติที่ดีที่สุด

- ใช้ ID Selectors เท่าที่จำเป็นและอย่างระมัดระวัง
- ควรใช้ Class Selectors สำหรับ Style ที่ต้องการนำกลับมาใช้ซ้ำ
- ตั้งชื่อ ID ให้สื่อความหมายและบ่งบอกถึงการใช้งาน (เช่น `#main-nav`, `#footer-content`)

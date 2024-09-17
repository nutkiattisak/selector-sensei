# Class Selector

Class Selector ใช้เพื่อเลือก element ตาม attribute class ที่กำหนดใน HTML โดยจะใช้จุด `(.)` ตามด้วยชื่อ class ไม่เหมือนกับ Type Selector ที่เลือกทุก instante ของแท็ก HTML ที่เฉพาะเจาะจง Class Selector จะให้ความยืดหยุ่นมากขึ้นโดยสามารถเลือก element ใด ๆ ที่มี class ที่กำหนดได้

## ตัวอย่าง

```css
.classname {
  /* CSS properties */
}
```

## การใช้งานพื้นฐาน

Class Selectors ถูกใช้อย่างแพร่หลายสำหรับการกำหนดสไตล์ให้กับหลาย ๆ องค์ประกอบที่มีสไตล์ร่วมกัน:

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

ในตัวอย่างนี้ องค์ประกอบใด ๆ ที่มีคลาส button จะมีสไตล์ตามที่กำหนด

## การใช้หลาย Class ใน Element เดียว

Element สามารถมีหลาย class `(.)` ได้ และแต่ละ class สามารถนำ style ของตัวเองไปใช้

```html
<div class="card primary"></div>
```

```css
.card {
  border: 1px solid #ddd;
  padding: 20px;
}
.primary {
  background-color: #f8f9fa;
}
```

ในที่นี้ `<div>` จะมีสไตล์ของทั้ง `card` และ `primary` ถูกนำไปใช้

## การรวม Class Selectors กับ Selector อื่น ๆ

Class Selectors สามารถรวมกับ selector อื่น ๆ เพื่อการกำหนด style ที่มีความเฉพาะเจาะจงมากขึ้น

- การรวมกันระหว่าง Class และ Type

```css
p.intro {
  font-size: 18px;
}
```

ตัวอย่างนี้จะเลือก `<p>` ทั้งหมดที่มีคลาส `intro`

- Descendant Combinator

```css
.container .item {
  margin-bottom: 10px;
}
```

ตัวอย่างนี้จะเลือกองค์ประกอบทั้งหมดที่มีคลาส `item` ที่เป็นลูกหลานขององค์ประกอบที่มี `.container`

## ความสำคัญของ Class Selectors

Class Selectors มีความสำคัญสูงกว่า Type Selectors แต่ต่ำกว่า ID Selector `(#id)` ซึ่งมักใช้เพื่อเขียนทับ style ทั่วไปแต่ยังคงความยืดหยุ่น

## ข้อดีของการใช้ Class Selectors

- ใช้ซ้ำได้: Style ของ class สามารถนำไปใช้กับหลาย element ได้
- มีความยืดหยุ่น: สามารถเลือก element ต่าง ๆ ได้ด้วย class เดียวกัน
- ดูแลรักษาง่าย: ง่ายต่อการจัดการและอัปเดตเมื่อเทียบกับ inline styles หรือ Type Selectors

## ข้อผิดพลาดและการใช้งานที่ไม่ถูกต้องที่พบบ่อย

- การใช้ Class Selectors มากเกินไป: การมี class มากเกินไปอาจทำให้ HTML หนาและ CSS ซับซ้อน
- การใช้ Class Selectors โดยไม่จำเป็นเมื่อมี selector ที่เฉพาะเจาะจงมากกว่า (เช่น `ID`) หรือน้อยกว่า (เช่น `Type Selectors`)

## แนวทางที่ควรปฏิบัติ

- ใช้ชื่อคลาสที่บรรยายถึงจุดประสงค์หรือบทบาท ไม่ใช่ลักษณะที่ปรากฏ (เช่น `.btn-primary` แทนที่จะเป็น `.blue-button`)
- รวม Class Selectors กับ selector อื่นเพื่อการกำหนด style ที่เฉพาะเจาะจงมากขึ้น
- หลีกเลี่ยงการใช้ Class Selectors มากเกินไปใน element เดียว ควรพิจารณาสร้าง Class utility สำหรับ style ทั่วไป

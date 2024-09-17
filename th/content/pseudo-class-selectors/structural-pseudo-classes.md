# Structural Pseudo-classes

Structural Pseudo-classes เป็นกลุ่มของ Selector ที่ช่วยให้สามารถจัดการ Style ของ Element ตามตำแหน่งในโครงสร้างเอกสาร HTML หรือความสัมพันธ์กับ Element อื่น ๆ ได้ เช่น การเลือก Element ที่เป็น Child ตัวแรกหรือ Child ตัวสุดท้าย รวมถึงรูปแบบที่ซับซ้อนมากขึ้น

## Structural Pseudo-classes ที่ใช้บ่อย

### 1. `:first-child`

- เลือก Element ที่เป็น Child ตัวแรกของ Parent

ตัวอย่าง

```css
p:first-child {
  color: blue;
}
```

โค้ดนี้จะเปลี่ยนสีข้อความของ `<p>` ที่เป็น Child ตัวแรกของ Parent เป็นสีฟ้า

### 2. `:last-child`

- เลือก Element ที่เป็น Child ตัวสุดท้ายของ Parent

ตัวอย่าง

```css
li:last-child {
  font-weight: bold;
}
```

โค้ดนี้จะทำให้ `<li>` ตัวสุดท้ายมีตัวหนา

### 3. `:nth-child(n)`

- เลือกองค์ประกอบตามตำแหน่งที่อยู่ใน Parent โดย `n` เป็นหมายเลขหรือ Selector

ตัวอย่าง

```css
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
```

โค้ดนี้จะเปลี่ยนสีพื้นหลังของแถวตารางเป็นสีเทา

### 4. `:nth-last-child(n)`

- คล้ายกับ :nth-child() แต่จะนับจากตัวสุดท้าย

ตัวอย่าง

```css
div:nth-last-child(2) {
  border: 1px solid black;
}
```

โค้ดนี้จะเลือก `<div>` ตัวที่สองจากท้าย

### 5. `:first-of-type`

- เลือก Element ที่เป็นประเภทแรก (เช่น `<h1>`, `<p>`) ในกลุ่มพี่น้อง

ตัวอย่าง

```css
h2:first-of-type {
  text-decoration: underline;
}
```

โค้ดนี้จะทำให้ `<h2>` ตัวแรกของ Parent มีขีดเส้นใต้

### 6. `:last-of-type`

- เลือก Element ที่เป็นประเภทสุดท้ายในกลุ่มพี่น้อง

ตัวอย่าง

```css
p:last-of-type {
  margin-bottom: 0;
}
```

โค้ดนี้จะลบระยะห่างล่างของ `<p>` ตัวสุดท้าย

### 7. `:nth-of-type(n)`

- เลือก Element ประเภทใดประเภทหนึ่งตามตำแหน่งของมันในกลุ่มพี่น้อง

ตัวอย่าง

```css
li:nth-of-type(3) {
  color: red;
}
```

โค้ดนี้จะทำให้ `<li>` ตัวที่สามมีสีแดง

### 8. `:nth-last-of-type(n)`

- เลือก Element ประเภทหนึ่งจากท้ายในกลุ่มพี่น้อง

ตัวอย่าง

```css
p:nth-last-of-type(1) {
  font-size: larger;
}
```

โค้ดนี้จะขยายขนาดตัวอักษรของ `<p>` ตัวสุดท้าย

### 9. `:only-child`

- เลือก Element ที่เป็นลูกตัวเดียวของ Parent

ตัวอย่าง

```css
div:only-child {
  padding: 10px;
}
```

โค้ดนี้จะเพิ่มระยะห่างให้ `<div>` ที่เป็น Child ตัวเดียว

### 10. `:only-of-type`

- เลือก Element ที่เป็นประเภทเดียวของมันในกลุ่มพี่น้อง

ตัวอย่าง

```css
h1:only-of-type {
  color: green;
}
```

โค้ดนี้จะทำให้ `<h1>` ที่เป็นตัวเดียวในกลุ่มมีสีเขียว

## ตัวอย่างการใช้งาน

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>
```

```css
li:first-child {
  color: blue;
}

li:last-child {
  color: red;
}

li:nth-child(odd) {
  background-color: lightgray;
}
```

ในตัวอย่างนี้

- `<li>`ตัวแรกจะมีสีฟ้า
- `<li>` ตัวสุดท้ายจะมีสีแดง
- `<li>` ที่มีเลขลำดับเป็นคี่จะมีพื้นหลังสีเทาอ่อน

## การใช้สูตรใน `:nth-child()`

ตัวเลือก `:nth-child()` สามารถใช้สูตร an + b เพื่อเลือก Element ตามรูปแบบที่ยืดหยุ่นได้

- `:nth-child(2n)` จะเลือกองค์ประกอบทุกๆ ลำดับคู่
- `:nth-child(3n+1)` จะเลือก Element ทุกๆ ตัวที่สามโดยเริ่มจากตัวแรก

```css
li:nth-child(3n+1) {
  background-color: yellow;
}
```

โค้ดนี้จะเลือกองค์ประกอบ `<li>` ตัวที่ 1, 4, 7, และอื่น ๆ และเปลี่ยนพื้นหลังให้เป็นสีเหลือง

## แนวทางที่ควรปฏิบัติ

- ใช้ Structural Pseudo-classes เพื่อทำให้โค้ด CSS ของคุณ Clean และลดการใช้ Class หรือ ID ที่มากเกินไป
- หลีกเลี่ยงการใช้ `:nth-child()` และ `:nth-of-type()` ที่ซับซ้อนเกินไป เพื่อให้ง่ายต่อการดูแลและแก้ไข
- ใช้โครงสร้าง HTML ที่เหมาะสมเพื่อให้การใช้งาน Structural Pseudo-classes มีความชัดเจนและง่ายต่อการจัดการ

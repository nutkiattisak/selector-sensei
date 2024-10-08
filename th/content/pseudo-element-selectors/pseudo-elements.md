# Pseudo-elements

Pseudo-elements เป็น Selector พิเศษที่ช่วยให้คุณสามารถจัดการ Style เฉพาะส่วนของ Element ได้ โดยไม่จำเป็นต้องแก้ไขโครงสร้าง HTML โดยตรง ตัวเลือกนี้มีประโยชน์สำหรับการเพิ่มเนื้อหาหรือปรับแต่ง Element แบบละเอียด เช่น การทำให้ตัวอักษรตัวแรกใหญ่ขึ้น หรือการแทรกเนื้อหาเพิ่มเติมก่อนหรือหลัง Element

## ตัวเลือก Pseudo-elements ที่พบบ่อย

### 1. `::before`

- แทรกเนื้อหาก่อนเนื้อหาขององค์ประกอบ

ตัวอย่าง

```css
p::before {
  content: "Note: ";
  font-weight: bold;
}
```

จะเพิ่มคำว่า "Note: " ก่อนเนื้อหาของทุกย่อหน้า (`<p>`)

### 2. `::after`

- แทรกเนื้อหาหลังเนื้อหาขององค์ประกอบ

ตัวอย่าง

```css
p::after {
  content: " (Read more...)";
  color: gray;
}
```

จะเพิ่มคำว่า " (Read more...)" หลังเนื้อหาของทุกย่อหน้า

### 3. `::first-letter`

- ใช้จัดการรูปแบบตัวอักษรตัวแรกของ Element ที่เป็นบล็อก เช่น ย่อหน้าหรือหัวเรื่อง

ตัวอย่าง

```css
p::first-letter {
  font-size: 2em;
  color: red;
}
```

จะทำให้ตัวอักษรตัวแรกของทุกย่อหน้ามีขนาดใหญ่ขึ้นและเป็นสีแดง

### 4. `::first-line`

- ใช้จัดการ Style บรรทัดแรกของ Element ที่เป็นบล็อก

ตัวอย่าง

```css
p::first-line {
  font-weight: bold;
}
```

จะทำให้บรรทัดแรกของทุกย่อหน้าตัวหนา

### 5. `::selection`

- ใช้จัดการรูปแบบส่วนของข้อความที่ถูกเลือกโดยผู้ใช้

ตัวอย่าง

```css
::selection {
  background-color: yellow;
  color: black;
}
```

จะเปลี่ยนพื้นหลังของข้อความที่ถูกเลือกเป็นสีเหลืองและตัวอักษรเป็นสีดำ

## ไวยากรณ์

Pseudo-elements ใช้เครื่องหมายสองจุด (`::`) ตามด้วยชื่อของ pseudo-element ดังนี้

```css
element::pseudo-element {
  /* styles */
}
```

ใน CSS รุ่นเก่าอาจใช้เพียงเครื่องหมายจุดเดียว (`:`) แต่ใน CSS3 ได้ใช้สองจุดเพื่อแยก Pseudo-elements ออกจาก Pseudo-classes อย่างไรก็ตาม `:before` และ `:after` ยังคงรองรับเพื่อความเข้ากันได้กับเวอร์ชันเก่า

## ตัวอย่างการใช้งาน

ตัวอย่างการใช้งาน Pseudo-elements หลายตัวพร้อมกัน

```html
<p>This is an example paragraph.</p>
```

```css
p::before {
  content: "Start: ";
  color: blue;
}

p::after {
  content: " [End]";
  color: red;
}

p::first-letter {
  font-size: 2em;
  color: green;
}
```

- `::before` เพิ่ม "Start: " ก่อนย่อหน้าและทำให้เป็นสีน้ำเงิน
- `::after` เพิ่ม "[End]" หลังย่อหน้าและทำให้เป็นสีแดง
- `::first-letter` ทำให้ตัวอักษรตัวแรกของย่อหน้ามีขนาดใหญ่ขึ้นและเป็นสีเขียว

## ข้อสำคัญ

- `::before` และ `::after` มักใช้ในการแทรกเนื้อหาโดยไม่ต้องแก้ไขโครงสร้าง HTML
- `::first-letter` และ `::first-line` ช่วยให้คุณสามารถรูปแบบส่วนเฉพาะของ Element ได้ เช่น การปรับแต่งตัวอักษรหรือตัวอักษรตัวแรกของย่อหน้า
- `::selection` ช่วยเพิ่มประสบการณ์ผู้ใช้ โดยการปรับแต่งรูปแบบของข้อความที่ถูกเลือก
- **Pseudo-elements** ทำให้คุณสามารถควบคุมการจัดรูปแบบ Element ได้อย่างละเอียด ช่วยให้การออกแบบเว็บเพจมีความสวยงามและเป็นระเบียบมากยิ่งขึ้น

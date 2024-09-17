# Dynamic Pseudo-classes

Dynamic Pseudo-classes คือ Selector พิเศษที่ใช้กำหนด Style ให้ Element ตามสถานะหรือการโต้ตอบ เช่น เมื่อผู้ใช้วางเมาส์ทับ คลิก หรือโฟกัสที่ Element นั้น ๆ

## Dynamic Pseudo-classes ที่พบบ่อย

### 1. `:hover`

- Pseudo-class `:hover` จะถูกใช้เมื่อผู้ใช้เลื่อนเคอร์เซอร์ไปบน Element

ตัวอย่าง

```css
a:hover {
  color: red;
}
```

โค้ดนี้จะเปลี่ยนสีของ Link เป็นสีแดงเมื่อผู้ใช้เลื่อนเมาส์ไปบน Link นั้น

### 2. `:active`

- Pseudo-class `:active` จะถูกใช้เมื่อ Element ถูกกดหรือคลิก

Example

```css
button:active {
  background-color: green;
}
```

โค้ดนี้จะเปลี่ยนสีพื้นหลังของปุ่มเป็นสีเขียวขณะที่ปุ่มถูกกด

### :focus

- Pseudo-class `:focus` จะถูกใช้เมื่อ Element เช่น ช่องกรอกข้อมูล (input) ถูกโฟกัส (เช่น คลิกหรือใช้คีย์บอร์ดเลื่อนมาที่องค์ประกอบนั้น)

ตัวอย่าง

```css
input:focus {
  border-color: blue;
}
```

โค้ดนี้จะเปลี่ยนสีขอบของช่องกรอกข้อมูลเป็นสีน้ำเงินเมื่อถูก Focus

### :visited

- Pseudo-class `:visited` ใช้สำหรับกำหนด Style ให้กับ Link ที่ถูกคลิกแล้ว

ตัวอย่าง

```css
a:visited {
  color: purple;
}
```

Link ที่ถูกคลิกแล้วจะเปลี่ยนเป็นสีม่วง

### :link

- Pseudo-class :link ใช้สำหรับกำหนด Style ให้กับ link  ที่ยังไม่ได้ถูกคลิก

ตัวอย่าง

```css
a:link {
  color: blue;
}
```

Link ที่ยังไม่ได้ถูกคลิกจะมีสีฟ้าเป็นค่าเริ่มต้น

## ตัวอย่างการใช้งานพื้นฐาน

```css
button {
  background-color: gray;
}

button:hover {
  background-color: orange;
}

button:active {
  background-color: red;
}

input:focus {
  outline: 2px solid blue;
}
```

## ลำดับของ Dynamic Pseudo-classes

เมื่อต้องกำหนดสไตล์ให้กับลิงก์ (`<a>`), Dynamic Pseudo-classes ควรถูกกำหนดตามลำดับที่เรียกว่า **LVHA**

- `:link` — Style สำหรับ link ที่ยังไม่ได้ถูกคลิก
- `:visited` — Style สำหรับ link ที่ถูกคลิกแล้ว
- `:hover` — Style เมื่อเมาส์เลื่อนไปบน link
- `:active` — Style เมื่อมีการคลิก link

หากลำดับนี้ไม่ถูกต้อง อาจเกิดพฤติกรรมที่ไม่คาดคิดได้

## ข้อดีของการใช้ Dynamic Pseudo-classes

- การโต้ตอบ: ช่วยปรับปรุงประสบการณ์การใช้งานโดยการเปลี่ยนลักษณะของ Element ตามการกระทำของผู้ใช้
- การเข้าถึง: ช่วยให้ผู้ใช้สามารถนำทางและโต้ตอบกับเว็บเพจได้ง่ายขึ้น เช่น การเน้นช่องกรอกข้อมูลเมื่อถูก Focus

## แนวทางที่ควรปฏิบัติ

- ใช้ Dynamic Pseudo-classes เพื่อให้การตอบสนองทางภาพเมื่อผู้ใช้โต้ตอบ
- ใช้ Style สำหรับ `:hover` และ `:focus` อย่างพอดีเพื่อไม่ให้ผู้ใช้รู้สึกสับสน
- ระวังการใช้ Style กับ `:visited` มากเกินไป เนื่องจาก Style ที่เด่นชัดเกินไปอาจกระทบต่อความเป็นส่วนตัวของผู้ใช้

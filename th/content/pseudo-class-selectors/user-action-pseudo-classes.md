# User Action Pseudo-classes

User Action Pseudo-classes เป็น Selector พิเศษที่ใช้กำหนด Style ให้ Element ตามการกระทำของผู้ใช้ เช่น การคลิก การลาก หรือการเลือกข้อความ Pseudo-classes เหล่านี้ช่วยให้สามารถสร้างประสบการณ์ที่โต้ตอบได้และให้ข้อมูลป้อนกลับทางภาพแก่ผู้ใช้

## User Action Pseudo-classes ที่พบบ่อย

### 1. `:focus-within`

- Pseudo-class `:focus-within` จะถูกใช้เมื่อ Element หรือ Element ลูกหลานใด ๆ ภายในได้รับโฟกัส

ตัวอย่าง

```css
form:focus-within {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
```

โค้ดนี้จะเปลี่ยนสีขอบและเพิ่มเงาให้กับ Form เมื่อมีช่องกรอกข้อมูลใด ๆ ภายในถูก Focus

### 2. `:focus-visible`

- Pseudo-class `:focus-visible` ใช้สำหรับกำหนด Style ให้กับ Element ที่ได้รับโฟกัสผ่านการใช้คีย์บอร์ด แต่ไม่ใช่การคลิกเมาส์

ตัวอย่าง

```css
button:focus-visible {
  outline: 2px solid orange;
  outline-offset: 2px;
}
```

โค้ดนี้จะแสดง Outline สีส้มเมื่อปุ่มได้รับโฟกัสผ่าน Tab หรือคีย์บอร์ด แต่ไม่แสดงเมื่อคลิกด้วยเมาส์

### 3. `:enabled`

- Pseudo-class `:enabled` เลือก Element ที่สามารถใช้งานได้ (ไม่ถูก Disabled)

ตัวอย่าง

```css
input:enabled {
  background-color: white;
  cursor: text;
}
```

โค้ดนี้จะกำหนดพื้นหลังสีขาวให้กับช่องกรอกข้อมูลที่ใช้งานได้

### 4. `:disabled`

- Pseudo-class `:disabled` เลือก Element ที่ถูกปิดใช้งาน

ตัวอย่าง

```css
button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  opacity: 0.6;
}
```

โค้ดนี้จะทำให้ปุ่มที่ถูก Disabled มีสีเทาและเปลี่ยน Cursor เป็น not-allowed

### 5. `:checked`

- Pseudo-class `:checked` เลือก Element ที่ถูกเลือกหรือถูกติ๊ก เช่น Checkbox หรือ Radio Button

ตัวอย่าง

```css
input[type="checkbox"]:checked {
  accent-color: green;
}

input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: green;
}
```

โค้ดนี้จะเปลี่ยนสี Checkbox เป็นสีเขียวและทำให้ Label ที่อยู่ถัดไปเป็นตัวหนาสีเขียวเมื่อถูกเลือก

### 6. `:indeterminate`

- Pseudo-class `:indeterminate` เลือก Element ที่อยู่ในสถานะกึ่งกลาง เช่น Checkbox ที่ไม่ได้ Checked หรือ Unchecked อย่างชัดเจน

ตัวอย่าง

```css
input[type="checkbox"]:indeterminate {
  accent-color: orange;
}
```

โค้ดนี้จะเปลี่ยนสี Checkbox เป็นสีส้มเมื่ออยู่ในสถานะ Indeterminate

### 7. `:valid` และ `:invalid`

- Pseudo-class `:valid` เลือก Element ที่มีข้อมูลที่ถูกต้องตามกฎการตรวจสอบ
- Pseudo-class `:invalid` เลือก Element ที่มีข้อมูลที่ไม่ถูกต้อง

ตัวอย่าง

```css
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}
```

โค้ดนี้จะเปลี่ยนสีขอบเป็นสีเขียวเมื่อข้อมูลถูกต้อง และสีแดงเมื่อข้อมูลไม่ถูกต้อง

### 8. `:required` และ `:optional`

- Pseudo-class `:required` เลือก Element ที่มี Attribute `required`
- Pseudo-class `:optional` เลือก Element ที่ไม่มี Attribute `required`

ตัวอย่าง

```css
input:required {
  border-left: 3px solid red;
}

input:optional {
  border-left: 3px solid #cccccc;
}
```

โค้ดนี้จะแสดงเส้นขอบด้านซ้ายสีแดงสำหรับช่องที่จำเป็นต้องกรอก และสีเทาสำหรับช่องที่ไม่บังคับ

### 9. `:read-only` และ `:read-write`

- Pseudo-class `:read-only` เลือก Element ที่อ่านได้อย่างเดียว
- Pseudo-class `:read-write` เลือก Element ที่สามารถแก้ไขได้

ตัวอย่าง

```css
input:read-only {
  background-color: #f0f0f0;
  cursor: default;
}

input:read-write {
  background-color: white;
}
```

โค้ดนี้จะแสดงพื้นหลังสีเทาอ่อนสำหรับช่องที่อ่านได้อย่างเดียว

### 10. `:in-range` และ `:out-of-range`

- Pseudo-class `:in-range` เลือก Element ที่มีค่าอยู่ในช่วงที่กำหนด
- Pseudo-class `:out-of-range` เลือก Element ที่มีค่านอกช่วงที่กำหนด

ตัวอย่าง

```css
input[type="number"]:in-range {
  border-color: green;
}

input[type="number"]:out-of-range {
  border-color: red;
}
```

โค้ดนี้จะเปลี่ยนสีขอบตามค่าที่กรอกว่าอยู่ในช่วงที่กำหนดหรือไม่

## ตัวอย่างการใช้งานพื้นฐาน

```html
<form>
  <input type="email" required placeholder="อีเมล">
  <input type="number" min="1" max="10" placeholder="ตัวเลข 1-10">
  <input type="text" readonly value="อ่านได้อย่างเดียว">
  <button type="submit">ส่ง</button>
</form>
```

```css
form:focus-within {
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
}

input:required {
  border-left: 3px solid #ff6b6b;
}

input:valid {
  border-color: #51cf66;
}

input:invalid {
  border-color: #ff6b6b;
}

input:read-only {
  background-color: #e9ecef;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## ข้อดีของการใช้ User Action Pseudo-classes

- **การให้ข้อมูลป้อนกลับทันที**: ช่วยให้ผู้ใช้เห็นว่า Input ของตนถูกต้องหรือไม่ก่อนส่งฟอร์ม
- **ปรับปรุงการเข้าถึง**: ช่วยให้ผู้ใช้เข้าใจสถานะของ Element ได้ง่ายขึ้น
- **ประสบการณ์ผู้ใช้ที่ดีขึ้น**: สร้างการโต้ตอบที่ราบรื่นและเป็นธรรมชาติ
- **ลด JavaScript**: สามารถจัดการสถานะหลายอย่างด้วย CSS เพียงอย่างเดียว

## แนวทางที่ควรปฏิบัติ

- ใช้ `:focus-visible` แทน `:focus` เพื่อหลีกเลี่ยงการแสดง Outline เมื่อคลิกด้วยเมาส์
- รวม `:valid` และ `:invalid` เพื่อให้ข้อมูลป้อนกลับที่ชัดเจนในฟอร์ม
- ใช้สีที่แตกต่างอย่างชัดเจนสำหรับ `:enabled` และ `:disabled` เพื่อการเข้าถึงที่ดีขึ้น
- ตรวจสอบให้แน่ใจว่า Pseudo-classes เหล่านี้ไม่ขัดแย้งกับ Dynamic Pseudo-classes อื่น ๆ
- ใช้ `:focus-within` เพื่อสร้าง Context ที่ชัดเจนว่าฟอร์มหรือส่วนใดกำลังถูกโต้ตอบ

## ความแตกต่างระหว่าง `:focus` และ `:focus-visible`

| Pseudo-class | การทำงาน | ใช้เมื่อใด |
|--------------|----------|-----------|
| `:focus` | แสดงเมื่อ Element ได้รับโฟกัสไม่ว่าจะเป็นการคลิกหรือคีย์บอร์ด | ต้องการแสดง Style ทุกกรณี |
| `:focus-visible` | แสดงเฉพาะเมื่อได้รับโฟกัสจากคีย์บอร์ด | ต้องการแสดง Outline เฉพาะเมื่อใช้คีย์บอร์ด |

## สรุป

User Action Pseudo-classes เป็นเครื่องมือที่ทรงพลังในการสร้างฟอร์มและ UI ที่ตอบสนองต่อการกระทำของผู้ใช้ การใช้ Pseudo-classes เหล่านี้อย่างเหมาะสมช่วยปรับปรุงทั้งความสามารถในการใช้งานและการเข้าถึงของเว็บไซต์

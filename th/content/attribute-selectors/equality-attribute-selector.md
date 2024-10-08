# Equality Attribute Selector

Equality Attribute Selector หรือ ตัวเลือกคุณลักษณะการเท่ากัน ใน CSS ใช้เพื่อเลือก Element ที่มีคุณลักษณะซึ่งมีค่าเฉพาะ Selector นี้มีประโยชน์เมื่อคุณต้องการกำหนดรูปแบบให้กับ Element ที่มีคุณลักษณะกำหนดค่าไว้ชัดเจน ทำให้สามารถจัดการรูปแบบตามค่าของคุณลักษณะได้อย่างแม่นยำ

## ไวยากรณ์

ไวยากรณ์ของ Equality Attribute Selector คือการระบุชื่อคุณลักษณะและค่าที่ต้องการในเครื่องหมายคำพูด แล้วใส่ไว้ใน Square Brackets (`[]`)

```css
element[attribute="value"] {
  /* CSS styles */
}
```

- `element` เป็นส่วนที่ไม่จำเป็น ใช้จำกัดการเลือกให้เป็น Element เฉพาะ (เช่น `div`, `input` เป็นต้น)
- `attribute` คือชื่อของคุณลักษณะที่คุณต้องการให้ตรงกับค่า
- `value` คือค่าที่คุณต้องการจับคู่กับคุณลักษณะนั้น

## ตัวอย่าง

ตัวอย่างนี้เลือก `<input>` ทุกตัวที่มีคุณลักษณะ `type` กำหนดค่าไว้เป็น `"text"`

```css
input[type="text"] {
  border: 2px solid green;
}
```

จะทำให้ฟิลด์อินพุตที่เป็นประเภทข้อความทั้งหมดมีเส้นขอบสีเขียว

## ตัวอย่างอื่นกับลิงก์

คุณสามารถใช้ Equality Attribute Selector เพื่อจัดสไตล์ให้กับลิงก์ที่มีค่า `href` เฉพาะ

```css
a[href="https://example.com"] {
  color: red;
}
```

ตัวอย่างนี้จะจัดรูปแบบลิงก์ที่ชี้ไปที่ `https://example.com` ให้มีตัวอักษรสีแดง

## การใช้งาน

- ใช้จัดรูปแบบฟอร์มอินพุตที่มีประเภทเฉพาะ เช่น `type="text"` หรือ `type="password"`
- ใช้เลือกภาพที่มีคุณลักษณะ `src` เฉพาะเพื่อจัดรูปแบบเพิ่มเติม
- ใช้เลือกและจัดรูปแบบลิงก์ที่มี `href` เฉพาะ เพื่อเน้นหรือสร้างเอกลักษณ์แบรนด์

## ข้อสำคัญ

- **Equality Attribute Selector** เลือก Element ที่มีคุณลักษณะที่มีค่าเท่ากับค่าที่กำหนดไว้
- Selector นี้คำนึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่หมายความว่า `type="text"` และ `type="TEXT"` เป็นค่าที่ต่างกัน
- สามารถใช้ร่วมกับ Selector อื่นเพื่อการรูปแบบที่เจาะจงขึ้น เช่น `div[class="container"]`

## สรุป

Equality Attribute Selector เป็นเครื่องมือที่ทรงพลังใน CSS ที่ช่วยให้นักพัฒนาสามารถจัดการรูปแบบของ Element ตามคู่คุณลักษณะ-ค่าเฉพาะได้ ช่วยให้การจัดการรูปแบบของ Element ที่มีค่าคุณลักษณะร่วมกันง่ายขึ้น

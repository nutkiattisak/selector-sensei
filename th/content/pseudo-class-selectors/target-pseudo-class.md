# Target Pseudo-class

Target Pseudo-class (`:target`) เป็น Pseudo-class ที่ใช้เลือก Element ที่ตรงกับ Fragment Identifier (ส่วนที่อยู่หลังเครื่องหมาย `#`) ใน URL ของหน้าเว็บ Pseudo-class นี้มีประโยชน์มากในการสร้างการนำทางภายในหน้าเดียว (Single Page Navigation), Tabs, Modals, และ Accordions โดยไม่ต้องใช้ JavaScript

## ไวยากรณ์

```css
:target {
  /* CSS styles */
}
```

หรือสามารถรวมกับ Selector อื่นได้

```css
element:target {
  /* CSS styles */
}
```

## การทำงานของ `:target`

เมื่อผู้ใช้คลิกลิงก์ที่มี Fragment Identifier (เช่น `#section1`) URL จะเปลี่ยนเป็น `https://example.com/page#section1` และ Element ที่มี `id="section1"` จะถูกเลือกโดย `:target` pseudo-class

## ตัวอย่างพื้นฐาน

```html
<nav>
  <a href="#section1">ไปยังส่วนที่ 1</a>
  <a href="#section2">ไปยังส่วนที่ 2</a>
  <a href="#section3">ไปยังส่วนที่ 3</a>
</nav>

<section id="section1">
  <h2>ส่วนที่ 1</h2>
  <p>เนื้อหาส่วนที่ 1</p>
</section>

<section id="section2">
  <h2>ส่วนที่ 2</h2>
  <p>เนื้อหาส่วนที่ 2</p>
</section>

<section id="section3">
  <h2>ส่วนที่ 3</h2>
  <p>เนื้อหาส่วนที่ 3</p>
</section>
```

```css
section {
  padding: 20px;
  margin: 10px 0;
  border: 2px solid #ccc;
  transition: all 0.3s ease;
}

section:target {
  border-color: #007bff;
  background-color: #e7f3ff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
}
```

เมื่อคลิกที่ลิงก์ ส่วนที่ถูกเลือกจะเปลี่ยนสีขอบและพื้นหลัง

## ตัวอย่างการใช้งาน

### 1. Tab Navigation (แท็บแบบไม่ใช้ JavaScript)

```html
<div class="tabs">
  <nav>
    <a href="#tab1">แท็บ 1</a>
    <a href="#tab2">แท็บ 2</a>
    <a href="#tab3">แท็บ 3</a>
  </nav>

  <div id="tab1" class="tab-content">
    <h3>เนื้อหาแท็บ 1</h3>
    <p>นี่คือเนื้อหาของแท็บ 1</p>
  </div>

  <div id="tab2" class="tab-content">
    <h3>เนื้อหาแท็บ 2</h3>
    <p>นี่คือเนื้อหาของแท็บ 2</p>
  </div>

  <div id="tab3" class="tab-content">
    <h3>เนื้อหาแท็บ 3</h3>
    <p>นี่คือเนื้อหาของแท็บ 3</p>
  </div>
</div>
```

```css
.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #ddd;
}

.tab-content:target {
  display: block;
}

/* แสดงแท็บแรกเป็นค่าเริ่มต้น */
.tab-content:first-of-type {
  display: block;
}
```

### 2. Modal/Popup (แบบไม่ใช้ JavaScript)

```html
<a href="#modal">เปิด Modal</a>

<div id="modal" class="modal">
  <div class="modal-content">
    <a href="#" class="close">×</a>
    <h2>Modal Title</h2>
    <p>เนื้อหาใน Modal</p>
  </div>
</div>
```

```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal:target {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 500px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  text-decoration: none;
  color: #333;
}
```

### 3. Accordion (แบบไม่ใช้ JavaScript)

```html
<div class="accordion">
  <div id="item1" class="accordion-item">
    <a href="#item1" class="accordion-header">หัวข้อ 1</a>
    <div class="accordion-content">
      <p>เนื้อหาของหัวข้อ 1</p>
    </div>
  </div>

  <div id="item2" class="accordion-item">
    <a href="#item2" class="accordion-header">หัวข้อ 2</a>
    <div class="accordion-content">
      <p>เนื้อหาของหัวข้อ 2</p>
    </div>
  </div>
</div>
```

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-item:target .accordion-content {
  max-height: 500px;
}

.accordion-header {
  display: block;
  padding: 15px;
  background-color: #f0f0f0;
  text-decoration: none;
  color: #333;
  border: 1px solid #ddd;
}

.accordion-item:target .accordion-header {
  background-color: #007bff;
  color: white;
}
```

### 4. Smooth Scroll Highlighting

```html
<nav class="table-of-contents">
  <a href="#intro">บทนำ</a>
  <a href="#features">ฟีเจอร์</a>
  <a href="#pricing">ราคา</a>
  <a href="#contact">ติดต่อ</a>
</nav>

<section id="intro">
  <h2>บทนำ</h2>
  <p>เนื้อหาบทนำ...</p>
</section>

<section id="features">
  <h2>ฟีเจอร์</h2>
  <p>รายการฟีเจอร์...</p>
</section>
```

```css
html {
  scroll-behavior: smooth;
}

section {
  min-height: 100vh;
  padding: 50px 20px;
  border-left: 5px solid transparent;
  transition: all 0.3s ease;
}

section:target {
  border-left-color: #007bff;
  background-color: #f8f9fa;
  animation: highlight 1s ease;
}

@keyframes highlight {
  0% {
    background-color: #fff3cd;
  }
  100% {
    background-color: #f8f9fa;
  }
}
```

## ข้อดีของการใช้ `:target`

- **ไม่ต้องใช้ JavaScript**: สร้าง UI ที่โต้ตอบได้โดยใช้ CSS เพียงอย่างเดียว
- **SEO Friendly**: URL มี Fragment Identifier ที่สามารถแชร์และบุ๊กมาร์กได้
- **ประสิทธิภาพ**: ลดการใช้ JavaScript ทำให้หน้าเว็บโหลดเร็วขึ้น
- **Accessibility**: ทำงานได้ดีกับ Screen Reader และการนำทางด้วยคีย์บอร์ด
- **Browser History**: รองรับปุ่ม Back/Forward ของเบราว์เซอร์

## ข้อจำกัด

- ไม่สามารถปิด Modal หรือ Accordion ได้โดยไม่มีลิงก์ไปยัง Fragment อื่น
- URL จะเปลี่ยนเสมอเมื่อใช้งาน ซึ่งอาจไม่เหมาะกับบางกรณี
- ไม่สามารถเปิดหลาย Element พร้อมกันได้ (เพราะ `:target` ทำงานกับ Fragment เดียวเท่านั้น)
- การควบคุมที่ซับซ้อนอาจต้องใช้ JavaScript เพิ่มเติม

## แนวทางที่ควรปฏิบัติ

- ใช้ร่วมกับ `scroll-behavior: smooth` เพื่อการเลื่อนหน้าที่ราบรื่น
- เพิ่ม Transition เพื่อให้การเปลี่ยนแปลง Style ดูนุ่มนวล
- มี Fallback สำหรับเบราว์เซอร์เก่าที่ไม่รองรับ
- ใช้ลิงก์ `href="#"` หรือ `href="#close"` เพื่อปิด Modal หรือ Element
- ระวังการใช้ `:target` กับ Element ที่มี Position Fixed เพราะอาจทำให้เกิดปัญหาการแสดงผล
- ทดสอบการทำงานกับคีย์บอร์ดและ Screen Reader

## ตัวอย่างการใช้งานขั้นสูง

### Lightbox Gallery

```html
<div class="gallery">
  <a href="#img1"><img src="thumb1.jpg" alt="Image 1"></a>
  <a href="#img2"><img src="thumb2.jpg" alt="Image 2"></a>
  <a href="#img3"><img src="thumb3.jpg" alt="Image 3"></a>
</div>

<div id="img1" class="lightbox">
  <a href="#" class="close">×</a>
  <img src="full1.jpg" alt="Image 1">
</div>

<div id="img2" class="lightbox">
  <a href="#" class="close">×</a>
  <img src="full2.jpg" alt="Image 2">
</div>
```

```css
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

.lightbox:target {
  display: flex;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.lightbox .close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 40px;
  text-decoration: none;
}
```

## สรุป

`:target` Pseudo-class เป็นเครื่องมือที่ทรงพลังสำหรับการสร้าง UI ที่โต้ตอบได้โดยไม่ต้องใช้ JavaScript เหมาะสำหรับการนำทางภายในหน้า, Tabs, Modals, Accordions และอื่น ๆ การใช้ `:target` อย่างเหมาะสมช่วยลดความซับซ้อนของโค้ด เพิ่มประสิทธิภาพ และปรับปรุงการเข้าถึงของเว็บไซต์

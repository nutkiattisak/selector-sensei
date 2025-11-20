# Target Pseudo-class

The Target Pseudo-class (`:target`) is a pseudo-class that selects an element matching the fragment identifier (the part after `#`) in the page URL. This pseudo-class is very useful for creating single-page navigation, tabs, modals, and accordions without using JavaScript.

## Syntax

```css
:target {
  /* CSS styles */
}
```

Or can be combined with other selectors

```css
element:target {
  /* CSS styles */
}
```

## How `:target` Works

When a user clicks a link with a fragment identifier (e.g., `#section1`), the URL changes to `https://example.com/page#section1`, and the element with `id="section1"` will be selected by the `:target` pseudo-class.

## Basic Example

```html
<nav>
  <a href="#section1">Go to Section 1</a>
  <a href="#section2">Go to Section 2</a>
  <a href="#section3">Go to Section 3</a>
</nav>

<section id="section1">
  <h2>Section 1</h2>
  <p>Content of section 1</p>
</section>

<section id="section2">
  <h2>Section 2</h2>
  <p>Content of section 2</p>
</section>

<section id="section3">
  <h2>Section 3</h2>
  <p>Content of section 3</p>
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

When clicking a link, the targeted section will change its border and background color.

## Use Cases

### 1. Tab Navigation (Without JavaScript)

```html
<div class="tabs">
  <nav>
    <a href="#tab1">Tab 1</a>
    <a href="#tab2">Tab 2</a>
    <a href="#tab3">Tab 3</a>
  </nav>

  <div id="tab1" class="tab-content">
    <h3>Tab 1 Content</h3>
    <p>This is the content of tab 1</p>
  </div>

  <div id="tab2" class="tab-content">
    <h3>Tab 2 Content</h3>
    <p>This is the content of tab 2</p>
  </div>

  <div id="tab3" class="tab-content">
    <h3>Tab 3 Content</h3>
    <p>This is the content of tab 3</p>
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

/* Show first tab by default */
.tab-content:first-of-type {
  display: block;
}
```

### 2. Modal/Popup (Without JavaScript)

```html
<a href="#modal">Open Modal</a>

<div id="modal" class="modal">
  <div class="modal-content">
    <a href="#" class="close">×</a>
    <h2>Modal Title</h2>
    <p>Modal content</p>
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

### 3. Accordion (Without JavaScript)

```html
<div class="accordion">
  <div id="item1" class="accordion-item">
    <a href="#item1" class="accordion-header">Item 1</a>
    <div class="accordion-content">
      <p>Content of item 1</p>
    </div>
  </div>

  <div id="item2" class="accordion-item">
    <a href="#item2" class="accordion-header">Item 2</a>
    <div class="accordion-content">
      <p>Content of item 2</p>
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
  <a href="#intro">Introduction</a>
  <a href="#features">Features</a>
  <a href="#pricing">Pricing</a>
  <a href="#contact">Contact</a>
</nav>

<section id="intro">
  <h2>Introduction</h2>
  <p>Introduction content...</p>
</section>

<section id="features">
  <h2>Features</h2>
  <p>Features list...</p>
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

## Advantages of Using `:target`

- **No JavaScript Required**: Create interactive UI using CSS only.
- **SEO Friendly**: URLs with fragment identifiers can be shared and bookmarked.
- **Performance**: Reduces JavaScript usage, making pages load faster.
- **Accessibility**: Works well with screen readers and keyboard navigation.
- **Browser History**: Supports browser Back/Forward buttons.

## Limitations

- Cannot close modals or accordions without a link to another fragment.
- URL always changes when used, which may not be suitable for some cases.
- Cannot open multiple elements simultaneously (`:target` works with only one fragment at a time).
- Complex controls may require additional JavaScript.

## Best Practices

- Use with `scroll-behavior: smooth` for smooth scrolling.
- Add transitions for smooth style changes.
- Provide fallbacks for older browsers that don't support it.
- Use `href="#"` or `href="#close"` links to close modals or elements.
- Be careful using `:target` with fixed position elements as it may cause display issues.
- Test functionality with keyboard and screen readers.

## Advanced Usage Example

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

## Conclusion

The `:target` pseudo-class is a powerful tool for creating interactive UI without JavaScript. It's ideal for in-page navigation, tabs, modals, accordions, and more. Proper use of `:target` reduces code complexity, improves performance, and enhances website accessibility.

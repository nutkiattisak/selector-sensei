# Universal Selector

The Universal Selector, represented by the asterisk `(*)`, is a selector in CSS that targets all elements within a specified scope. It is called "universal" because it applies to every element on a web page or within a parent element.

## Syntax

The syntax for the Universal Selector is simple and straightforward

```css
* {
  /* CSS properties */
}
```

This code will select all elements and apply the specified CSS properties to them.

## Basic Usage

Universal Selector มักใช้ในการกำหนด style ที่ควรจะเหมือนกันสำหรับทุก element เช่น การตั้งค่าระยะห่างขอบและระยะห่างภายใน

```css
* {
  margin: 0;
  padding: 0;
}
```

The Universal Selector is often used for applying styles that should be uniform across all elements, such as resetting margins and padding

## Scope of the Universal Selector

By default, the Universal Selector affects all elements in the entire document. However, when used in a more specific context, like within a class or an element, it only applies to that particular context

```css
.container * {
  color: blue;
}
```

In this example, all elements inside the `.container` class will have blue text color.

## Pros and Cons

### Pros

The Universal Selector is easy to use and effective for global styling or resets.

### Cons

Overusing it can lead to performance issues, especially in large documents, because it can potentially select thousands of elements.

## CSS Specificity

The Universal Selector has the lowest specificity of all CSS selectors. This means that it will be overridden by any more specific selectors (e.g., element selectors, class selectors, ID selectors).

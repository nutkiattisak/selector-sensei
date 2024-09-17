# Structural Pseudo-classes

Structural Pseudo-classes in CSS are a group of selectors that allow you to style elements based on their position in the document tree or their relationship to other elements. These pseudo-classes help target elements based on their structure, like the first or last child, or based on more complex patterns.

## Common Structural Pseudo-classes

### 1. `:first-child`

- This pseudo-class selects the first child element of its parent.

Example

```css
p:first-child {
  color: blue;
}
```

This will change the text color of the first `<p>` inside its parent to blue.

### 2. `:last-child`

- This pseudo-class selects the last child element of its parent.

Example

```css
li:last-child {
  font-weight: bold;
}
```

The last `<li>` in a list will be bold.

### 3. `:nth-child(n)`

- The `:nth-child()` pseudo-class selects elements based on their position in a parent element, where n can be a number, keyword, or formula.

Example

```css
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
```

This will apply alternating background colors to table rows, creating a striped effect.

### 4. `:nth-last-child(n)`

- Similar to `:nth-child()`, but counts from the end of the child list.

Example

```css
div:nth-last-child(2) {
  border: 1px solid black;
}
```

This targets the second-to-last `<div>` inside its parent.

### 5. `:first-of-type`

- This pseudo-class selects the first element of its type (e.g., the first `<h1>`, `<p>`, etc.) among its siblings.

Example

```css
h2:first-of-type {
  text-decoration: underline;
}
```

The first `<h2>` in its parent will be underlined.

### 6. `:last-of-type`

- This pseudo-class selects the last element of its type among its siblings.

Example

```css
p:last-of-type {
  margin-bottom: 0;
}
```

This will remove the bottom margin of the last `<p>` in its parent.

### 7. `:nth-of-type(n)`

- Selects elements of a specific type based on their position within their parent, just like `:nth-child()`, but only for elements of the same type.

Example

```css
li:nth-of-type(3) {
  color: red;
}
```

The third `<li>` in a list will have red text.

### 8. `:nth-last-of-type(n)`

- This pseudo-class selects elements of a specific type counting from the last one in the parent element.

Example

```css
p:nth-last-of-type(1) {
  font-size: larger;
}
```

This will increase the font size of the last `<p>` in its parent.

### 9. `:only-child`

- Selects an element that is the only child of its parent.

Example

```css
div:only-child {
  padding: 10px;
}
```

This will add padding to a `<div>` if it’s the only child of its parent element.

### 10. `:only-of-type`

- Selects an element if it is the only one of its type among its siblings.

Example

```css
h1:only-of-type {
  color: green;
}
```

The `<h1>` will be styled green if it's the only one in its parent.

## Practical Example

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

In this example

- The first `<li>` will have blue text.
- The last `<li>` will have red text.
- Odd-numbered `<li>` elements will have a light gray background.

## Advanced Use: Formula in `:nth-child()`

The `:nth-child()` pseudo-class can accept a formula like `an + b`, which allows for more flexible selections

- `:nth-child(2n)` selects every even element.
- `:nth-child(3n+1)` selects every third element starting from the first.

```css
li:nth-child(3n+1) {
  background-color: yellow;
}
```

This will apply a yellow background to the 1st, 4th, 7th, and so on.

## Best Practices

- Use structural pseudo-classes to reduce the need for excessive HTML classes or IDs.
- Avoid overusing `:nth-child()` and `:nth-of-type()` for overly complex selections, as they can become hard to maintain and understand.
- Pair pseudo-classes with meaningful HTML structures to ensure clarity and maintainability.

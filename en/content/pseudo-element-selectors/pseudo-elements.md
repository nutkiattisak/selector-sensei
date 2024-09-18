# Pseudo-elements

Pseudo-elements in CSS are special selectors that allow you to style specific parts of an element or inject additional content that doesn't exist in the HTML structure. They are useful for targeting and styling specific parts of elements without needing to alter the HTML directly. Pseudo-elements are often used to add visual effects or extra content before or after elements.

## Common Pseudo-elements

### 1. `::before`

- Inserts content before the content of an element.

Example

```css
p::before {
  content: "Note: ";
  font-weight: bold;
}
```

This adds "Note: " before the content of every paragraph (`<p>`).

### 2. `::after`

- Inserts content after the content of an element.

Example

```css
p::after {
  content: " (Read more...)";
  color: gray;
}
```

This adds " (Read more...)" after the content of every paragraph.

### 3. `::first-letter`

- Styles the first letter of a block-level element, such as a paragraph or heading.

Example

```css
p::first-letter {
  font-size: 2em;
  color: red;
}
```

This makes the first letter of every paragraph larger and red.

### 4. `::first-line`

- Styles the first line of a block-level element.

Example

```css
p::first-line {
  font-weight: bold;
}
```

This makes the first line of every paragraph bold.

### 5. `::selection`

- Styles the portion of text that is selected by the user.

Example

```css
::selection {
  background-color: yellow;
  color: black;
}
```

This changes the background color of selected text to yellow and the text color to black.

## Syntax

Pseudo-elements are denoted with two colons (`::`) followed by the name of the pseudo-element, like this

```css
element::pseudo-element {
  /* styles */
}
```

Earlier versions of CSS used a single colon (`:`), but the double colon is the standard in CSS3 to differentiate pseudo-elements from pseudo-classes. However, `:before` and `:after` are still supported for backward compatibility.

## Example Usage

Here’s an example using multiple pseudo-elements

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

- `::before` adds "Start: " at the beginning of the paragraph and makes it blue.
- `::after` adds "[End]" at the end of the paragraph and makes it red.
- `::first-letter` makes the first letter of the paragraph larger and green.

## Key Points

- `::before` and `::after` are often used to insert content without modifying the HTML structure.
- `::first-letter` and `::first-line` allow you to apply unique styles to parts of an element, adding flair to text-based content.
- `::selection` enhances the user experience by styling text selections.
- **Pseudo-elements** enable more granular control over content styling and are widely used for visual enhancements.

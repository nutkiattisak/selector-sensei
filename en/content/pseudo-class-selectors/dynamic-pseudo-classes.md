# Dynamic Pseudo-classes

Dynamic Pseudo-classes are special selectors in CSS that apply styles to elements based on their state or interaction, such as when they are being hovered over, clicked, or focused. These pseudo-classes allow you to dynamically change the appearance of elements in response to user actions.

## Common Dynamic Pseudo-classes

### 1. `:hover`

- The `:hover` pseudo-class is triggered when a user hovers their cursor over an element.

Example

```css
a:hover {
  color: red;
}
```

This will change the color of a link to red when the user hovers over it.

### 2. `:active`

- The `:active` pseudo-class applies to an element when it is being clicked or pressed.

Example

```css
button:active {
  background-color: green;
}
```

This will change the background color of the button to green while it is being clicked.

### :focus

- The `:focus` pseudo-class is applied when an element, like a form input, is focused (i.e., clicked or navigated to using the keyboard).

Example

```css
input:focus {
  border-color: blue;
}
```

This will change the border color of the input to blue when it is in focus.

### :visited

- The `:visited` pseudo-class is used to style links that have already been visited.

Example

```css
a:visited {
  color: purple;
}
```

Links will turn purple after the user has visited them.

### :link

- The :link pseudo-class applies to all unvisited links.

Example

```css
a:link {
  color: blue;
}
```

All unvisited links will be blue by default.

## Basic Usage Example

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

## Order of Dynamic Pseudo-classes

When styling link elements (`<a>`), dynamic pseudo-classes should follow a specific order known as **LVHA**

- `:link` — styles for unvisited links
- `:visited` — styles for visited links
- `:hover` — styles when the link is hovered over
- `:active` — styles when the link is being clicked

If these pseudo-classes are not in this order, unexpected behavior may occur.

## Advantages of Using Dynamic Pseudo-classes

- Interactivity: Enhances user experience by changing the appearance of elements during user interaction.
- Accessibility: Helps users navigate and interact with a webpage more easily, such as highlighting form fields when focused.

## Best Practices

- Use dynamic pseudo-classes to provide visual feedback during user interactions.
- Keep styles for `:hover` and `:focus` subtle to avoid overwhelming users.
- Be cautious with `:visited` styles, as overly distinct styles can compromise user privacy.

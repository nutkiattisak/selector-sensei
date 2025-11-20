# User Action Pseudo-classes

User Action Pseudo-classes are special selectors in CSS that apply styles to elements based on user actions, such as clicking, dragging, or selecting text. These pseudo-classes help create interactive experiences and provide visual feedback to users.

## Common User Action Pseudo-classes

### 1. `:focus-within`

- The `:focus-within` pseudo-class is triggered when an element or any of its descendants receives focus.

Example

```css
form:focus-within {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
```

This will change the border color and add a shadow to the form when any input field inside it is focused.

### 2. `:focus-visible`

- The `:focus-visible` pseudo-class applies styles to an element that receives focus via keyboard navigation, but not via mouse clicks.

Example

```css
button:focus-visible {
  outline: 2px solid orange;
  outline-offset: 2px;
}
```

This will display an orange outline when the button is focused via Tab or keyboard, but not when clicked with a mouse.

### 3. `:enabled`

- The `:enabled` pseudo-class selects elements that are enabled (not disabled).

Example

```css
input:enabled {
  background-color: white;
  cursor: text;
}
```

This will set a white background for enabled input fields.

### 4. `:disabled`

- The `:disabled` pseudo-class selects elements that are disabled.

Example

```css
button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  opacity: 0.6;
}
```

This will make disabled buttons appear gray and change the cursor to not-allowed.

### 5. `:checked`

- The `:checked` pseudo-class selects elements that are checked or selected, such as checkboxes or radio buttons.

Example

```css
input[type="checkbox"]:checked {
  accent-color: green;
}

input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: green;
}
```

This will change the checkbox color to green and make the adjacent label bold and green when checked.

### 6. `:indeterminate`

- The `:indeterminate` pseudo-class selects elements in an indeterminate state, such as a checkbox that is neither checked nor unchecked.

Example

```css
input[type="checkbox"]:indeterminate {
  accent-color: orange;
}
```

This will change the checkbox color to orange when in an indeterminate state.

### 7. `:valid` and `:invalid`

- The `:valid` pseudo-class selects elements with valid input according to validation rules.
- The `:invalid` pseudo-class selects elements with invalid input.

Example

```css
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}
```

This will change the border color to green when input is valid and red when invalid.

### 8. `:required` and `:optional`

- The `:required` pseudo-class selects elements with the `required` attribute.
- The `:optional` pseudo-class selects elements without the `required` attribute.

Example

```css
input:required {
  border-left: 3px solid red;
}

input:optional {
  border-left: 3px solid #cccccc;
}
```

This will display a red left border for required fields and a gray border for optional fields.

### 9. `:read-only` and `:read-write`

- The `:read-only` pseudo-class selects read-only elements.
- The `:read-write` pseudo-class selects elements that can be edited.

Example

```css
input:read-only {
  background-color: #f0f0f0;
  cursor: default;
}

input:read-write {
  background-color: white;
}
```

This will display a light gray background for read-only fields.

### 10. `:in-range` and `:out-of-range`

- The `:in-range` pseudo-class selects elements with values within the specified range.
- The `:out-of-range` pseudo-class selects elements with values outside the specified range.

Example

```css
input[type="number"]:in-range {
  border-color: green;
}

input[type="number"]:out-of-range {
  border-color: red;
}
```

This will change the border color based on whether the entered value is within the specified range.

## Basic Usage Example

```html
<form>
  <input type="email" required placeholder="Email">
  <input type="number" min="1" max="10" placeholder="Number 1-10">
  <input type="text" readonly value="Read-only">
  <button type="submit">Submit</button>
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

## Advantages of Using User Action Pseudo-classes

- **Immediate Feedback**: Helps users see whether their input is valid before submitting the form.
- **Improved Accessibility**: Makes it easier for users to understand the state of elements.
- **Better User Experience**: Creates smooth and natural interactions.
- **Reduced JavaScript**: Many states can be handled with CSS alone.

## Best Practices

- Use `:focus-visible` instead of `:focus` to avoid showing outlines when clicking with a mouse.
- Combine `:valid` and `:invalid` to provide clear feedback in forms.
- Use distinctly different colors for `:enabled` and `:disabled` for better accessibility.
- Ensure these pseudo-classes don't conflict with other dynamic pseudo-classes.
- Use `:focus-within` to create clear context about which form or section is being interacted with.

## Difference Between `:focus` and `:focus-visible`

| Pseudo-class | Behavior | When to Use |
|--------------|----------|-------------|
| `:focus` | Applies when element receives focus from click or keyboard | When you want to style all focus cases |
| `:focus-visible` | Applies only when focused via keyboard | When you want to show outline only for keyboard navigation |

## Conclusion

User Action Pseudo-classes are powerful tools for creating forms and UI that respond to user actions. Using these pseudo-classes appropriately improves both the usability and accessibility of websites.

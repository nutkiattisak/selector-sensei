# Equality Attribute Selector

The Equality Attribute Selector in CSS is used to select elements that have an attribute with a specific value. This selector is useful when you want to target elements that have a particular attribute set to a defined value, allowing for precise styling based on attribute values.

## Syntax

The syntax for the Equality Attribute Selector involves specifying the attribute name and the exact value in quotes, wrapped in square brackets

```css
element[attribute="value"] {
  /* CSS styles */
}
```

- `element` is optional. It limits the selection to specific elements (e.g., div, input, etc.).
- `attribute`  is the attribute name you want to match.
- `value` is the exact value of the attribute you are targeting.

## Example

Here’s an example that selects all `<input>` elements with the `type` attribute set to `"text"`

```css
input[type="text"] {
  border: 2px solid green;
}
```

This will apply a green border to all text input fields.

## Another Example with Links

You can use the Equality Attribute Selector to style specific links based on their `href` attribute

```css
a[href="https://example.com"] {
  color: red;
}
```

This would style only the links that point to `https://example.com` with red text.

## Use Cases

- Styling form inputs with specific types, like `type="text"` or `type="password"`.
- Targeting images with specific `src` attributes for additional styling.
- Selecting links with specific `href` values for branding or emphasis.

## Key Points

- The **Equality Attribute Selector** matches elements that have an attribute exactly equal to a specified value.
- It is case-sensitive, meaning `type="text"` and `type="TEXT"` are considered different values.
- You can combine it with other selectors to apply more specific styles, like `div[class="container"]`.

## Conclusion

The Equality Attribute Selector is a powerful tool in CSS that allows developers to style elements based on precise attribute-value pairs. This makes it easier to manage styles for specific elements that share common attribute values.

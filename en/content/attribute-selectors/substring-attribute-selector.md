# Substring Attribute Selector

The **Substring Attribute Selector** in CSS ([attribute*="value"]) is used to select elements whose attribute value contains a specific substring anywhere within the value. This selector is useful when you want to apply styles to elements that include a particular text in their attribute, regardless of its position.

## Syntax

```css
element[attribute*="value"] {
  /* CSS styles */
}
```

- `element` (optional) limits the selection to a specific HTML tag (e.g., div, a, etc.).
- `attribute` is the name of the attribute to check.
- `value` is the substring to search for within the attribute value.

## Example

Here's an example that targets all anchor (`<a>`) elements where the `href` attribute contains `"example"` anywhere in the value

```css
a[href*="example"] {
  color: orange;
}
```

## Example with Class

You can also target elements based on class names that contain a specific keyword

```css
div[class*="card"] {
  border: 1px solid #ccc;
  border-radius: 8px;
}
```

This will style any `div` element whose class contains `"card"`, such as `card-header`, `product-card`, `card-body`, etc.

## Example with Images

Select images that come from a specific source

```css
img[src*="cdn.example"] {
  border: 2px solid blue;
}
```

This will style all images whose `src` contains `"cdn.example"` in the path.

## Use Cases

- **URLs**: Style links that contain a specific domain or path segment in their URL.
- **Class names**: Apply styles to elements with class names that share a common keyword (e.g., `card`, `btn`, `nav`).
- **Data attributes**: Select elements with data attributes that contain specific values.
- **Form elements**: Select input fields with `name` attributes that contain specific words for form customization.

## Key Points

- The **Substring Attribute Selector** is case-sensitive.
- It matches elements where the attribute value **contains** the specified string anywhere (beginning, middle, or end).
- Can be combined with other selectors for more specific styling, like `a[href*="blog"]` or `input[name*="email"]`.

## Comparison with Other Attribute Selectors

| Selector | Syntax | Matching |
|---|---|---|
| Prefix | `[attr^="val"]` | Value starts with `val` |
| Suffix | `[attr$="val"]` | Value ends with `val` |
| **Substring** | `[attr*="val"]` | Value contains `val` anywhere |

## Conclusion

The Substring Attribute Selector is a highly flexible CSS tool for selecting elements based on a substring within an attribute value. It's especially useful for matching patterns that can appear anywhere in the value, not limited to the beginning or end.

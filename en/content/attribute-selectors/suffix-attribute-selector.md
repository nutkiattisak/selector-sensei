# Suffix Attribute Selector

The Suffix Attribute Selector in CSS (`[attribute$="value"]`) is used to select elements whose attribute value ends with a specific string or suffix. This selector is particularly useful for targeting elements with attribute values that end with a certain pattern, such as file extensions or URL parameters.

## Syntax

```css
element[attribute$="value"] {
  /* CSS styles */
}
```

- `element` (optional) limits the selection to a specific HTML tag (e.g., `div`, `a`, etc.).
- `attribute` is the name of the attribute to check.
- `value` is the string that the attribute value must end with.

## Example

Here’s an example that selects all images (`<img>`) where the `src` attribute ends with `.jpg`.

```css
img[src$=".jpg"] {
  border: 2px solid blue;
}
```

This will apply a blue border to all images with a `.jpg` file extension.

## Example with Links

You can target anchor (`<a>`) elements whose href ends with a particular value.

```css
a[href$=".pdf"] {
  color: red;
}
```

This will style all links pointing to `.pdf` files with red text.

## Use Cases

- **File extensions**: Apply styles to specific file types (e.g., images, PDFs).
- **URL parameters**: Target URLs that end with certain query parameters or fragments.
- **Class or ID names**: Select elements with class or ID names that end in a specific way.

## Key Points

- The **Suffix Attribute Selector** matches elements whose attribute value ends with the specified string.
- It is case-sensitive.
- It can be combined with other selectors for more specific styling, like `div[class$="footer"]`.

## Conclusion

The Suffix Attribute Selector is a useful tool in CSS when you need to style elements based on the ending of an attribute value. It’s particularly helpful for dealing with file types, URL structures, and class names that follow consistent patterns.

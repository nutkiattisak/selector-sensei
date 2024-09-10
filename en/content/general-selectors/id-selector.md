# ID Selector

An ID Selector is used to select a single element on a webpage with a unique `id` attribute. Unlike Class Selectors, which can be applied to multiple elements, an ID Selector is meant to be unique and should be used for only one element on a page.

## Syntax

The syntax for the ID Selector involves a hash symbol (#) followed by the ID name

```css
#idname {
  /* CSS properties */
}
```

This will apply the defined styles to the element with the specified `id`.

## Basic Usage

ID Selectors are often used for specific, one-off elements that require unique styling

```css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}
```

In this example, any element with the `id` of `header` will be styled with the given properties.

## Applying an ID to an Element

An `id` attribute is added directly to an HTML element

```html
<div id="header">Welcome to My Website</div>
```

The styles defined for `#header` in CSS will be applied to this `div`.

## Combining ID Selectors with Other Selectors

ID Selectors can be combined with other selectors for more specific styling

- ID and Type Combination

```css
div#header {
  font-size: 24px;
}
```

This selects the `<div>` element with the `id` of `header`.

- Descendant Combinator

```css

#menu ul {
  list-style: none;
  padding: 0;
}
```

This selects all `<ul>` elements that are descendants of the element with `id` `menu`.

## Specificity of ID Selectors

ID Selectors have a higher specificity than Class Selectors and Type Selectors. This means that when there are conflicting styles, the styles defined by an ID Selector will take precedence.

## Advantages of Using ID Selectors

- High Specificity: Useful for overriding other styles.
- Uniqueness: Ensures that only one element is targeted, which can be helpful for JavaScript and CSS styling.

## Common Mistakes and Misuse

- Overusing ID Selectors: Since they have high specificity, using them too often can make CSS harder to maintain.
- Reusing IDs: Each ID must be unique within a webpage. Reusing an ID for multiple elements is not valid HTML and will lead to unexpected behavior.

## Best Practices

- Use ID Selectors sparingly and only when necessary.
- Prefer using Class Selectors for styles that will be reused.
- Use descriptive and meaningful names for IDs (e.g., `#main-nav`, `#footer-content`).

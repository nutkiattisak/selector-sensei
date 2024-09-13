# Universal Selector

The Universal Selector (`*`) is used in CSS to select all elements on a page. It can be used to apply styles to every element, making it a very powerful selector for global styling or for resetting default browser styles.

## Syntax

The syntax for the Universal Selector is simple and straightforward

```css
* {
  /* CSS properties */
}
```

This code will select all elements and apply the specified CSS properties to them.

## Basic Usage

Universal Selectors are commonly used to apply global styles or to reset styles:

```css
* {
  margin: 0;
  padding: 0;
}
```

This example removes the default margin and padding from all elements on the page.

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

## Best Practices

- Use the Universal Selector sparingly and only when necessary.
- Combine it with other selectors to limit its scope and improve performance.
- Be mindful of specificity and inheritance when using the Universal Selector.

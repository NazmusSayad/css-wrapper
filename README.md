# The best CSS Wrapper

## What is this wrapper?

A web-based playground that generates responsive CSS wrapper components for different platforms. It creates consistent layout containers with customizable padding and max-width settings, supporting React, Vue, Angular, and vanilla CSS.

## Why even need this?

**The Problem with Casual Wrappers:**

When you write something like:

```css
.wrapper {
  max-width: 1440px;
  padding-inline: 1rem; /* or different values per breakpoint */
  margin-inline: auto;
}
```

**The Issue:** You're dependent on TWO different things:

- `max-width: 1440px` (what you want)
- `padding-inline` (what you need for spacing)

**The Result:** Even though you said `max-width: 1440px`, you're NOT getting 1440px of actual content width because the padding eats into it!

**Example:**

- Container: 1440px max-width
- Padding: 2rem (32px) on each side
- **Actual content width: 1376px** (1440px - 64px)

This creates inconsistent layouts and makes it impossible to achieve precise content widths across different screen sizes.

**Our Solution:** Generate wrappers that handle this math automatically, giving you the exact content width you want while maintaining proper spacing.

## Final Thoughts

This tool helps developers create consistent, scalable layouts without the hassle of writing repetitive wrapper code. Whether building new projects or refactoring existing ones, it establishes solid layout foundations that grow with your application's needs.

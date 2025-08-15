# The best CSS Wrapper

A web-based playground that generates responsive CSS wrapper components for different platforms. It creates consistent layout containers with customizable padding and max-width settings, supporting React, Vue, Angular, and vanilla CSS.

---

## Why this?

### The Problem with Traditional Wrappers

When you write something like:

```css
.wrapper {
  max-width: 1440px;
  padding-inline: 2rem; /* or different values per breakpoint */
  margin-inline: auto;
}
```

#### The Issue

You're dependent on **TWO different things**:

- `max-width: 1440px` (what you want)
- `padding-inline` (what you need for spacing)

#### The Result

Even though you said `max-width: 1440px`, you're **NOT getting 1440px** of actual content width because the padding eats into it!

**Example:**

- Container: 1440px max-width
- Padding: 2rem (32px) on each side
- **Actual content width: 1376px** (1440px - 64px)

### Another Problem - Nested Wrappers

When you try to use wrappers inside other containers (like two-column layouts), the fixed padding breaks because it's designed for full-screen width, not container-relative width.

```css
/* This breaks in nested layouts */
.wrapper {
  max-width: 1440px;
  padding-inline: 2rem; /* Fixed padding - wrong for nested use */
}
```

**The Solution:** Use percentage-based padding that's relative to the container width, not the viewport width.

This creates inconsistent layouts and makes it impossible to achieve precise content widths across different screen sizes.

---

## Final Thoughts

**Our Solution:** Generate wrappers that handle this math automatically, giving you the exact content width you want while maintaining proper spacing. No more math, no more surprises - just the exact layout you intended!

This tool helps developers create consistent, scalable layouts without the hassle of writing repetitive wrapper code. Whether building new projects or refactoring existing ones, it establishes solid layout foundations that grow with your application's needs.

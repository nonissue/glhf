## UI

- Use `.css` files and `@apply` to construct components rather than having crazy long `className` declartions
- Use custom fonts (`IBM Plex` Family, see Figma comps)
- Enable `jsx-a11y/recommended` for `eslint`, make sure we conform.
  - Means figuring out a different way to close mobile menu after a link is clicked, or wrapping `<Link>` child with `React.forwardRef` (see [this](https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag))
  - Kinda fixed by setting the `a` child href to `#`, but that's probably a bad thing.
  - Discussion [here](https://github.com/vercel/next.js/issues/7915)
  - Might be fixed by nesting `button` in `a`, not sure if there's an SEO impact
    - Inspecting `HTML` shows the `a` does get passed `href` still ¯\_(ツ)_/¯
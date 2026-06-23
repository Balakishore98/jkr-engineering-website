Primary action button for JKR surfaces — amber `primary`, outlined `secondary`, `ghost`, and a `dark` variant for dark sections.

```jsx
<Button variant="primary" size="lg">Request a quote</Button>
<Button variant="secondary" iconRight={<span>→</span>}>Our capabilities</Button>
<Button variant="dark">Contact us</Button>
```

- `variant`: primary | secondary | ghost | dark
- `size`: sm | md | lg
- `fullWidth`, `disabled`, `iconLeft`, `iconRight`
- Low corner radius (`--radius-sm`) and a subtle press-down translate — keep it mechanical, not bouncy.

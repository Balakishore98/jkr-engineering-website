/* @ds-bundle: {"format":3,"namespace":"JKREngineeringDesignSystem_a889f1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"69f6a8ade3b5","components/core/Button.jsx":"eeabbd2a30a3","components/core/Card.jsx":"ea9767b40c2c","components/core/SectionLabel.jsx":"c00f95b3e9b0","components/core/StatBlock.jsx":"b2ad43f26776","components/forms/Input.jsx":"d87ed58fd5e3","components/forms/Textarea.jsx":"39d0c4170231","ui_kits/website/About.jsx":"d44bc2c3bd07","ui_kits/website/Contact.jsx":"79e88b8406d1","ui_kits/website/Footer.jsx":"7b79875574ac","ui_kits/website/Header.jsx":"77bd5a6847e3","ui_kits/website/Hero.jsx":"596bf71ed9b3","ui_kits/website/Services.jsx":"7efb43d753b2","ui_kits/website/WhyUs.jsx":"27e91e3849ce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JKREngineeringDesignSystem_a889f1 = window.JKREngineeringDesignSystem_a889f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — Badge
 * Compact status/label chip. Mono text, square-ish corners.
 */
function Badge({
  children,
  variant = 'neutral',
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--steel-100)',
      color: 'var(--steel-700)',
      border: '1px solid var(--border)'
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--amber-700)',
      border: '1px solid var(--amber-200)'
    },
    success: {
      background: 'var(--green-100)',
      color: '#1f6e41',
      border: '1px solid #b8e3c9'
    },
    danger: {
      background: 'var(--red-100)',
      color: '#a5322a',
      border: '1px solid #f3c4bf'
    },
    dark: {
      background: 'var(--steel-800)',
      color: 'var(--text-on-dark-muted)',
      border: '1px solid var(--steel-700)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 9px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-xs)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — Button
 * Industrial, low-radius button. Amber primary, steel secondary, ghost, and a
 * dark variant for use on dark sections.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 14,
      gap: 7
    },
    md: {
      padding: '12px 20px',
      fontSize: 15,
      gap: 9
    },
    lg: {
      padding: '15px 28px',
      fontSize: 16,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--steel-800)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--steel-700)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)';
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)';
  };
  const onLeave = e => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — Card
 * White surface, hairline border, crisp low shadow. Optional hover lift and an
 * optional amber top accent rule (used for service / capability cards).
 */
function Card({
  children,
  hover = false,
  accent = false,
  padding = 'var(--space-6)',
  style = {},
  className = '',
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setLift(true),
    onMouseLeave: () => hover && setLift(false),
    className: hover ? `jkr-card-pop ${className}` : className,
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: lift ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--accent)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — SectionLabel
 * Mono, uppercase, letter-spaced eyebrow with an amber tick. Used above
 * section headings throughout the site for a precise, technical feel.
 */
function SectionLabel({
  children,
  tone = 'light',
  style = {},
  ...rest
}) {
  const color = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const tickColor = tone === 'dark' ? 'var(--accent-on-dark)' : 'var(--accent)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: tickColor,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — StatBlock
 * A large figure with a mono label. Used in proof bars (years in business,
 * parts shipped, on-time rate). Works on light or dark backgrounds.
 */
function StatBlock({
  value,
  label,
  tone = 'light',
  style = {},
  ...rest
}) {
  const valueColor = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const labelColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — Input
 * Labeled text field. Low radius, steel border, amber focus ring.
 */
function Input({
  label,
  hint,
  id,
  type = 'text',
  error = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--red-500)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JKR Engineering — Textarea
 * Multi-line field matching Input's styling. For enquiry / part-spec messages.
 */
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* JKR Engineering website — About (company + proprietor) */
const {
  SectionLabel: AboutLabel
} = window.JKREngineeringDesignSystem_a889f1;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--bg-base)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 32px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(AboutLabel, null, "About JKR"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, "A workshop built on precision and trust."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "JKR Engineering was established in May 2005. We manufacture CNC machine tools and precision parts, and we take on made-to-order work built to each client\u2019s drawings and specification. Our focus has never changed: deliver the part in the quality the job demands, and deliver it on time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 22px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderLeft: '3px solid var(--accent)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--steel-900)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "C"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Chidambararajan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Proprietor \xB7 JKR Engineering")))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* JKR Engineering website — Contact (details + enquiry form) */
const {
  Button: CtaButton,
  Input: CtaInput,
  Textarea: CtaTextarea,
  SectionLabel: CtaLabel
} = window.JKREngineeringDesignSystem_a889f1;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const detail = (label, value, href) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 18,
      color: 'var(--text-on-dark)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'var(--text-on-dark)',
      fontWeight: 500
    }
  }, value));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--bg-dark-2)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CtaLabel, {
    tone: "dark"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-on-dark)'
    }
  }, "Send us your drawing."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)',
      maxWidth: '42ch'
    }
  }, "Tell us the part, material and quantity. We\u2019ll come back with a quote and a realistic delivery date."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      marginTop: 36
    }
  }, detail('Proprietor', 'Chidambararajan'), detail('Phone', '90923 54314', 'tel:9092354314'), detail('Established', 'May 2005'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: 320,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--accent-soft)',
      color: 'var(--amber-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--text-strong)'
    }
  }, "Enquiry received"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      maxWidth: '34ch'
    }
  }, "Thank you. We\u2019ll reply within one business day. For anything urgent, call 90923\xA054314."), /*#__PURE__*/React.createElement(CtaButton, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CtaInput, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(CtaInput, {
    label: "Phone",
    type: "tel",
    placeholder: "90923 54314",
    required: true
  })), /*#__PURE__*/React.createElement(CtaInput, {
    label: "Company",
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(CtaTextarea, {
    label: "What do you need made?",
    rows: 4,
    placeholder: "Part, material, quantity, tolerances\u2026",
    required: true
  }), /*#__PURE__*/React.createElement(CtaButton, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: e => {
      e.preventDefault();
      setSent(true);
    }
  }, "Send enquiry")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* JKR Engineering website — Footer */
function Footer({
  onNav
}) {
  const links = [{
    id: 'services',
    label: 'What we do'
  }, {
    id: 'why',
    label: 'Why JKR'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-dark)',
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '40px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-dark.svg",
    alt: "JKR Engineering",
    height: "40"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-faint)'
    }
  }, "CNC machine tools and precision parts, manufactured to spec since 2005.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, "Site"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: '#' + l.id,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.id);
    },
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Chidambararajan"), /*#__PURE__*/React.createElement("a", {
    href: "tel:9092354314",
    style: {
      fontSize: 14,
      color: 'var(--accent)',
      textDecoration: 'none'
    }
  }, "90923 54314")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-faint)'
    }
  }, "\xA9 2005\u20132026 JKR Engineering"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-faint)',
      letterSpacing: '0.08em'
    }
  }, "EST. MAY 2005"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* JKR Engineering website — Header / top nav */
const {
  Button: JKRButton
} = window.JKREngineeringDesignSystem_a889f1;
function Header({
  onNav
}) {
  const links = [{
    id: 'services',
    label: 'What we do'
  }, {
    id: 'why',
    label: 'Why JKR'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const link = l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: '#' + l.id,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.id);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none',
      padding: '6px 2px',
      borderBottom: '2px solid transparent',
      transition: 'color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--text-strong)';
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-body)';
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, l.label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('top');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.svg",
    alt: "JKR Engineering",
    height: "38"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, links.map(link)), /*#__PURE__*/React.createElement(JKRButton, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav('contact')
  }, "Request a quote"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* JKR Engineering website — Hero */
const {
  Button: HeroButton,
  SectionLabel: HeroLabel,
  Badge: HeroBadge
} = window.JKREngineeringDesignSystem_a889f1;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--bg-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'linear-gradient(var(--steel-800) 1px, transparent 1px), linear-gradient(90deg, var(--steel-800) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(120% 90% at 70% 10%, #000 30%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(120% 90% at 70% 10%, #000 30%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(56px, 8vw, 104px) 32px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroLabel, {
    tone: "dark"
  }, "CNC Manufacturing \xB7 Est. 2005"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display)',
      lineHeight: 1.04,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-on-dark)'
    }
  }, "Machine tools & parts,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "made to exact spec.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: '46ch',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)'
    }
  }, "JKR Engineering manufactures CNC machine tools and precision components to your drawings \u2014 built for quality, delivered on time, since 2005."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(HeroButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('contact')
  }, "Request a quote"), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "dark",
    size: "lg",
    onClick: () => onNav && onNav('services'),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "What we do")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(HeroBadge, {
    variant: "dark"
  }, "\xB10.01 mm tolerance"), /*#__PURE__*/React.createElement(HeroBadge, {
    variant: "dark"
  }, "Made to order"), /*#__PURE__*/React.createElement(HeroBadge, {
    variant: "dark"
  }, "On-time delivery"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/machine-placeholder-4x3.svg",
    alt: "CNC machine",
    style: {
      width: '100%',
      height: 'auto',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-dark)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      left: -14,
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      padding: '10px 16px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      fontWeight: 600,
      boxShadow: 'var(--shadow-accent)'
    }
  }, "EST. MAY 2005"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* JKR Engineering website — What we do (services) */
const {
  Card: SvcCard,
  SectionLabel: SvcLabel
} = window.JKREngineeringDesignSystem_a889f1;
const SERVICES = [{
  no: '01',
  title: 'CNC Machine Tools',
  body: 'Design and manufacture of CNC machine tools built for repeatable, high-precision production.'
}, {
  no: '02',
  title: 'Precision Parts',
  body: 'Turned and milled components to tight tolerances, in the materials and finishes your job calls for.'
}, {
  no: '03',
  title: 'Made-to-Order',
  body: 'Custom parts produced to your drawings and specification — from one-off prototypes to production runs.'
}, {
  no: '04',
  title: 'Quality & Delivery',
  body: 'Every part checked against its drawing before dispatch, and shipped to your schedule.'
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--bg-base)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SvcLabel, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      maxWidth: '20ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, "Manufacturing capabilities, end to end."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18,
      marginTop: 40
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(SvcCard, {
    key: s.no,
    accent: true,
    hover: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)',
      letterSpacing: '0.1em'
    }
  }, s.no)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, s.body))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyUs.jsx
try { (() => {
/* JKR Engineering website — Why JKR (about + proof bar) */
const {
  SectionLabel: WhyLabel,
  StatBlock: WhyStat,
  Badge: WhyBadge
} = window.JKREngineeringDesignSystem_a889f1;
const POINTS = ['Built to your drawings and tolerances', 'Checked against spec before dispatch', 'On-time delivery you can plan around', 'One workshop, accountable end to end'];
function WhyUs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: 'var(--bg-dark)',
      padding: 'var(--section-y) 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WhyLabel, {
    tone: "dark"
  }, "Why JKR"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-on-dark)'
    }
  }, "Quality parts, delivered when we say."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)',
      maxWidth: '46ch'
    }
  }, "Since 2005 we have manufactured CNC machine tools and precision components for clients who need the part right and the date kept."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '24px 0 0',
      padding: 0,
      display: 'grid',
      gap: 12
    }
  }, POINTS.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      color: 'var(--text-on-dark)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, "\u25B8"), p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(WhyStat, {
    tone: "dark",
    value: "20+",
    label: "Years in operation"
  }), /*#__PURE__*/React.createElement(WhyStat, {
    tone: "dark",
    value: "On-time",
    label: "Delivery promise"
  }), /*#__PURE__*/React.createElement(WhyStat, {
    tone: "dark",
    value: "\xB10.01",
    label: "mm tolerance"
  }), /*#__PURE__*/React.createElement(WhyStat, {
    tone: "dark",
    value: "1:1",
    label: "Made to your spec"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      borderTop: '1px solid var(--border-dark)',
      paddingTop: 18,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WhyBadge, {
    variant: "accent"
  }, "Est. May 2005"), /*#__PURE__*/React.createElement(WhyBadge, {
    variant: "dark"
  }, "CNC machine tools"), /*#__PURE__*/React.createElement(WhyBadge, {
    variant: "dark"
  }, "Precision parts"))))));
}
window.WhyUs = WhyUs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyUs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();

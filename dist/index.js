// node_modules/preact/dist/preact.mjs
var l;
function S(n2) {
  return n2.children;
}
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Disclaimer.tsx
var Disclaimer = ({ cfg }) => {
  const text = "\u26A0\uFE0F Disclaimer: This is an independent technical reference wiki. innerrange.com is the official source for product specifications and documentation. While we strive for accuracy, always cross-reference critical specifications against official Inner Range documentation.";
  const parts = text.split("innerrange.com");
  return /* @__PURE__ */ u2("div", { class: "disclaimer-banner", children: /* @__PURE__ */ u2("p", { children: parts.length > 1 ? /* @__PURE__ */ u2(S, { children: [
    parts[0],
    /* @__PURE__ */ u2("a", { href: "https://innerrange.com", target: "_blank", rel: "noopener noreferrer", children: "innerrange.com" }),
    parts[1]
  ] }) : text }) });
};
Disclaimer.css = `
.disclaimer-banner {
  text-align: center;
  font-size: 0.85rem;
  padding: 1rem 1.5rem;
  margin: 2rem 0 0 0;
  border-top: 1px solid var(--lightgray);
  border-bottom: 1px solid var(--lightgray);
  color: var(--gray);
  background: var(--light);
}
.disclaimer-banner p { margin: 0; }
.disclaimer-banner a { color: var(--secondary); text-decoration: underline; }
`;
var Disclaimer_default = (() => Disclaimer);

export { Disclaimer_default as Disclaimer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
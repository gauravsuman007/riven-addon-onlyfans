var ss = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var as = (e, t, n) => t in e ? ss(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var we = (e, t, n) => as(e, typeof t != "symbol" ? t + "" : t, n), Gn = (e, t, n) => t.has(e) || Pr("Cannot " + n);
var o = (e, t, n) => (Gn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), S = (e, t, n, r) => (Gn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), P = (e, t, n) => (Gn(e, t, "access private method"), n);
const ie = Symbol("uninitialized"), ls = "http://www.w3.org/1999/xhtml", Qr = !1;
var $r = Array.isArray, os = Array.prototype.indexOf, An = Array.prototype.includes, Pn = Array.from, ei = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, fs = Object.getOwnPropertyDescriptors, us = Object.prototype, cs = Array.prototype, ti = Object.getPrototypeOf, Fr = Object.isExtensible;
const vs = () => {
};
function ds(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ni() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function hs(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ae = 2, jt = 4, Fn = 8, ri = 1 << 24, Pe = 16, Ie = 32, nt = 64, Qn = 128, hr = 256, Re = 512, se = 1024, ne = 2048, Ue = 4096, ce = 8192, ke = 16384, qt = 32768, $n = 1 << 25, zt = 65536, Cn = 1 << 17, _s = 1 << 18, Yt = 1 << 19, ps = 1 << 20, Ge = 1 << 25, xt = 65536, Mn = 1 << 21, Nt = 1 << 22, ut = 1 << 23, qn = Symbol("$state"), ii = Symbol("component"), gs = Symbol(""), xn = Symbol("attributes"), er = Symbol("class"), ms = Symbol("style"), Qt = Symbol("text"), _n = new class extends Error {
  constructor() {
    super(...arguments);
    we(this, "name", "StaleReactionError");
    we(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Zr;
const ws = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Zr = globalThis.document) != null && Zr.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ys() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function bs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function si(e) {
  return e === this.v;
}
function xs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ai(e) {
  return !xs(e, this.v);
}
function Es() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ks(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ss(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ts() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function As(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ms() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Is() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ns() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Os = !1, _e = null;
function Bt(e) {
  _e = e;
}
function Kt(e, t = !1, n) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      F
    ),
    l: null
  };
}
function Wt(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ti(r);
  }
  return t.i = !0, _e = t.p, li(e);
}
function li(e = {}) {
  return ei(e, ii, { value: !0 }), e;
}
function oi() {
  return !0;
}
let Rt = [];
function Ls() {
  var e = Rt;
  Rt = [], ds(e);
}
function Qe(e) {
  if (Rt.length === 0) {
    var t = Rt;
    queueMicrotask(() => {
      t === Rt && Ls();
    });
  }
  Rt.push(e);
}
const Ds = -7169;
function J(e, t) {
  e.f = e.f & Ds | t;
}
function _r(e) {
  (e.f & Re) !== 0 || e.deps === null ? J(e, se) : J(e, Ue);
}
function fi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & xt) === 0 || (t.f ^= xt, fi(
        /** @type {Derived} */
        t.deps
      ));
}
function ui(e, t, n) {
  (e.f & ne) !== 0 ? t.add(e) : (e.f & Ue) !== 0 && n.add(e), fi(e.deps), J(e, se);
}
function pn(e) {
  var t = L, n = F;
  Ne(null), Ke(null);
  try {
    return e();
  } finally {
    Ne(t), Ke(n);
  }
}
function Ps(e, t, n, r) {
  const i = pr;
  var s = e.filter((h) => !h.settled), a = t.map(i);
  if (n.length === 0 && s.length === 0) {
    r(a);
    return;
  }
  var f = (
    /** @type {Effect} */
    F
  ), l = Fs(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function d(h) {
    if ((f.f & ke) === 0) {
      l();
      try {
        r([...a, ...h]);
      } catch (g) {
        Ve(g, f);
      }
      Rn();
    }
  }
  var _ = ci();
  if (n.length === 0) {
    c.then(() => d([])).finally(_);
    return;
  }
  function v() {
    Promise.all(n.map((h) => /* @__PURE__ */ Us(h))).then(d).catch((h) => Ve(h, f)).finally(_);
  }
  c ? c.then(() => {
    l(), v(), Rn();
  }) : v();
}
function Fs() {
  var e = (
    /** @type {Effect} */
    F
  ), t = L, n = _e, r = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    Ke(e), Ne(t), Bt(n), s && (e.f & ke) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Rn(e = !0) {
  Ke(null), Ne(null), Bt(null), e && (T == null || T.deactivate());
}
function ci() {
  var e = (
    /** @type {Effect} */
    F
  ), t = e.b, n = (
    /** @type {Batch} */
    T
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  var t = ae | ne;
  return F !== null && (F.f |= Yt), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: si,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ie
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
const $t = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Us(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    F
  );
  r === null && Es();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = St(
    /** @type {V} */
    ie
  ), a = !L, f = /* @__PURE__ */ new Set();
  return ta(() => {
    var h, g;
    var l = (
      /** @type {Effect} */
      F
    ), c = ni();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (w) => {
        w !== _n && c.reject(w);
      }).finally(Rn);
    } catch (w) {
      c.reject(w), Rn();
    }
    var d = (
      /** @type {Batch} */
      T
    );
    if (a) {
      if ((l.f & qt) !== 0)
        var _ = ci();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (g = d.async_deriveds.get(l)) == null || g.reject($t);
      else
        for (const w of f.values())
          w.reject($t);
      f.add(c), d.async_deriveds.set(l, c);
    }
    const v = (w, p = void 0) => {
      _ == null || _(), f.delete(c), p !== $t && (d.activate(), p ? (s.f |= ut, Vt(s, p)) : ((s.f & ut) !== 0 && (s.f ^= ut), Vt(s, w)), d.deactivate());
    };
    c.promise.then(v, (w) => v(null, w || "unknown"));
  }), Si(() => {
    for (const l of f)
      l.reject($t);
  }), new Promise((l) => {
    function c(d) {
      function _() {
        d === i ? l(s) : c(i);
      }
      d.then(_, _);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ pr(e);
  return Ii(t), t;
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  const t = /* @__PURE__ */ pr(e);
  return t.equals = ai, t;
}
function js(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      pe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function gr(e) {
  var t, n = F, r = e.parent;
  if (!ct && r !== null && e.v !== ie && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (ke | ce)) !== 0)
    return ys(), e.v;
  Ke(r);
  try {
    e.f &= ~xt, js(e), t = Di(e);
  } finally {
    Ke(n);
  }
  return t;
}
function vi(e) {
  var t = gr(e);
  if (!e.equals(t) && (e.wv = Oi(), (!(T != null && T.is_fork) || e.deps === null) && (T !== null ? (T.capture(e, t, !0), an == null || an.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    J(e, se);
    return;
  }
  ct || (oe !== null ? (yr() || T != null && T.is_fork) && oe.set(e, t) : _r(e));
}
function zs(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && pn(() => {
        n.ac.abort(_n), n.ac = null;
      }), n.fn !== null && (n.teardown = vs), on(n, 0), xr(n));
}
function di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Gt(t);
}
let Yn = null, Ct = null, T = null, an = null, oe = null, tr = null, Kn = !1, It = null, En = null;
var Ur = 0;
let Bs = 1;
var Ot, lt, _t, Lt, Dt, Pt, Ze, Ft, de, un, Xe, Le, He, Ut, pt, B, nr, en, rr, hi, _i, Mt, Vs, tn;
const On = class On {
  constructor() {
    R(this, B);
    we(this, "id", Bs++);
    /** True as soon as `#process` was called */
    R(this, Ot, !1);
    we(this, "linked", !0);
    /** @type {Batch | null} */
    R(this, lt, null);
    /** @type {Batch | null} */
    R(this, _t, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    we(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    we(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    we(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Lt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Dt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, Pt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    R(this, Ze, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, Ft, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    R(this, de, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    R(this, un, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, Xe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, Le, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    R(this, He, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    R(this, Ut, /* @__PURE__ */ new Set());
    we(this, "is_fork", !1);
    R(this, pt, !1);
    Ct === null ? Yn = Ct = this : (S(Ct, _t, this), S(this, lt, Ct)), Ct = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, He).has(t) || o(this, He).set(t, { d: [], m: [] }), o(this, Ut).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = o(this, He).get(t);
    if (r) {
      o(this, He).delete(t);
      for (var i of r.d)
        J(i, ne), n(i);
      for (i of r.m)
        J(i, Ue), n(i);
    }
    o(this, Ut).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== ie && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ut) === 0 && (this.current.set(t, [n, r]), oe == null || oe.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, oe = null;
  }
  flush() {
    try {
      Kn = !0, T = this, P(this, B, en).call(this);
    } finally {
      Ur = 0, tr = null, It = null, En = null, Kn = !1, T = null, oe = null, qe.clear();
    }
  }
  discard() {
    var t;
    for (const n of o(this, Dt)) n(this);
    o(this, Dt).clear();
    for (const n of this.async_deriveds.values())
      n.reject($t);
    P(this, B, tn).call(this), (t = o(this, Ft)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, un).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (S(this, Pt, o(this, Pt) + 1), t) {
      let r = o(this, Ze).get(n) ?? 0;
      o(this, Ze).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (S(this, Pt, o(this, Pt) - 1), t) {
      let r = o(this, Ze).get(n) ?? 0;
      r === 1 ? o(this, Ze).delete(n) : o(this, Ze).set(n, r - 1);
    }
    o(this, pt) || (S(this, pt, !0), Qe(() => {
      S(this, pt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      o(this, Xe).add(r);
    for (const r of n)
      o(this, Le).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Lt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Dt).add(t);
  }
  settled() {
    return (o(this, Ft) ?? S(this, Ft, ni())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new On();
      Kn || Qe(() => {
        o(t, Ot) || t.flush();
      });
    }
    return T;
  }
  apply() {
    {
      oe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (tr = t, (i = t.b) != null && i.is_pending && (t.f & (jt | Fn | ri)) !== 0 && (t.f & qt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (It !== null && n === F && (L === null || (L.f & ae) === 0))
        return;
      if ((r & (nt | Ie)) !== 0) {
        if ((r & se) === 0)
          return;
        n.f ^= se;
      }
    }
    o(this, de).push(n);
  }
};
Ot = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), Lt = new WeakMap(), Dt = new WeakMap(), Pt = new WeakMap(), Ze = new WeakMap(), Ft = new WeakMap(), de = new WeakMap(), un = new WeakMap(), Xe = new WeakMap(), Le = new WeakMap(), He = new WeakMap(), Ut = new WeakMap(), pt = new WeakMap(), B = new WeakSet(), nr = function() {
  if (this.is_fork) return !0;
  for (const r of o(this, Ze).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (o(this, He).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, en = function() {
  var l, c, d, _;
  S(this, Ot, !0), Ur++ > 1e3 && (P(this, B, tn).call(this), Gs());
  for (const v of o(this, Xe))
    o(this, Le).delete(v), J(v, ne), this.schedule(v);
  for (const v of o(this, Le))
    J(v, Ue), this.schedule(v);
  const t = o(this, de);
  S(this, de, []), this.apply();
  var n = It = [], r = [], i = En = [];
  for (const v of t)
    try {
      P(this, B, rr).call(this, v, n, r);
    } catch (h) {
      throw mi(v), P(this, B, nr).call(this) || this.discard(), h;
    }
  if (T = null, i.length > 0) {
    var s = On.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (It = null, En = null, P(this, B, nr).call(this)) {
    P(this, B, Mt).call(this, r), P(this, B, Mt).call(this, n);
    for (const [v, h] of o(this, He))
      gi(v, h);
    i.length > 0 && /** @type {unknown} */
    P(l = T, B, en).call(l);
    return;
  }
  const a = P(this, B, hi).call(this);
  if (a) {
    P(this, B, Mt).call(this, r), P(this, B, Mt).call(this, n), P(c = a, B, _i).call(c, this);
    return;
  }
  o(this, Xe).clear(), o(this, Le).clear();
  for (const v of o(this, Lt)) v(this);
  o(this, Lt).clear(), an = this, Hr(r), Hr(n), an = null, (d = o(this, Ft)) == null || d.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (o(this, Pt) === 0 && (o(this, de).length === 0 || f !== null) && P(this, B, tn).call(this), o(this, de).length > 0)
    if (f !== null) {
      const v = f;
      o(v, de).push(...o(this, de).filter((h) => !o(v, de).includes(h)));
    } else
      f = this;
  f !== null && (qe.clear(), P(_ = f, B, en).call(_));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
rr = function(t, n, r) {
  t.f ^= se;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (Ie | nt)) !== 0, f = a && (s & se) !== 0, l = f || (s & ce) !== 0 || o(this, He).has(i);
    if (!l && i.fn !== null) {
      a ? i.f ^= se : (s & jt) !== 0 ? n.push(i) : mn(i) && ((s & Pe) !== 0 && o(this, Le).add(i), Gt(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, hi = function() {
  for (var t = o(this, lt); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = o(t, lt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
_i = function(t) {
  var r;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && s.promise.then(a.resolve).catch(a.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(o(t, Xe), o(t, Le));
  const n = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & ae) !== 0 && (i.f & (ne | Ue)) === 0))
      for (const l of s) {
        var a = l.f;
        if ((a & ae) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          a & (Nt | Pe) && !this.async_deriveds.has(f) && (o(this, Le).delete(f), J(f, ne), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), P(r = t, B, tn).call(r), T = this, P(this, B, en).call(this);
}, /**
 * @param {Effect[]} effects
 */
Mt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    ui(t[n], o(this, Xe), o(this, Le));
}, Vs = function() {
  var _;
  for (let v = Yn; v !== null; v = o(v, _t)) {
    var t = v.id < this.id, n = [];
    for (const [h, [g, w]] of this.current) {
      if (v.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && g !== r)
          v.current.set(h, [g, w]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, g] of this.async_deriveds) {
        const w = v.async_deriveds.get(h);
        w && g.promise.then(w.resolve).catch(w.reject);
      }
    var i = [...v.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      v.current.get(h)[1]
    );
    if (!(!o(v, Ot) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && v.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of o(this, Ut))
            v.unskip_effect(h, (g) => {
              var w;
              (g.f & (Pe | Nt)) !== 0 ? v.schedule(g) : P(w = v, B, Mt).call(w, [g]);
            });
        v.activate();
        var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          pi(l, s, a, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([h, g]) => {
          const w = this.current.get(h);
          return w ? w[0] !== g[0] || w[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of o(this, un))
            (h.f & (ke | ce | Cn)) === 0 && mr(h, c, f) && ((h.f & (Nt | Pe)) !== 0 ? (J(h, ne), v.schedule(h)) : o(v, Xe).add(h));
        if (o(v, de).length > 0 && !o(v, pt)) {
          v.apply();
          for (var d of o(v, de))
            P(_ = v, B, rr).call(_, d, [], []);
          S(v, de, []);
        }
        v.deactivate();
      }
    }
  }
}, tn = function() {
  if (this.linked) {
    var t = o(this, lt), n = o(this, _t);
    t === null ? Yn = n : S(t, _t, n), n === null ? Ct = t : S(n, lt, t), this.linked = !1;
  }
};
let kt = On;
function Gs() {
  try {
    Cs();
  } catch (e) {
    Ve(e, tr);
  }
}
let Oe = null;
function Hr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ke | ce)) === 0 && mn(r) && (Oe = /* @__PURE__ */ new Set(), Gt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ci(r), (Oe == null ? void 0 : Oe.size) > 0)) {
        qe.clear();
        for (const i of Oe) {
          if ((i.f & (ke | ce)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Oe.has(a) && (Oe.delete(a), s.push(a)), a = a.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (ke | ce)) === 0 && Gt(l);
          }
        }
        Oe.clear();
      }
    }
    Oe = null;
  }
}
function pi(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ae) !== 0 ? pi(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Nt | Pe)) !== 0 && (s & ne) === 0 && mr(i, t, r) && (J(i, ne), wr(
        /** @type {Effect} */
        i
      ));
    }
}
function mr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (An.call(t, i))
        return !0;
      if ((i.f & ae) !== 0 && mr(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function wr(e) {
  T.schedule(e);
}
function gi(e, t) {
  if (!((e.f & Ie) !== 0 && (e.f & se) !== 0)) {
    (e.f & ne) !== 0 ? t.d.push(e) : (e.f & Ue) !== 0 && t.m.push(e), J(e, se);
    for (var n = e.first; n !== null; )
      gi(n, t), n = n.next;
  }
}
function mi(e) {
  J(e, se);
  for (var t = e.first; t !== null; )
    mi(t), t = t.next;
}
let In = /* @__PURE__ */ new Set();
const qe = /* @__PURE__ */ new Map();
let wi = !1;
function St(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: si,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const n = St(e);
  return Ii(n), n;
}
// @__NO_SIDE_EFFECTS__
function qs(e, t = !1, n = !0) {
  const r = St(e);
  return t || (r.equals = ai), r;
}
function C(e, t, n = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || (L.f & Cn) !== 0) && oi() && (L.f & (ae | Pe | Nt | Cn)) !== 0 && (Ye === null || !Ye.has(e)) && Is();
  let r = n ? $e(t) : t;
  return Vt(e, r, En);
}
function Vt(e, t, n = null) {
  if (!e.equals(t)) {
    ct ? qe.set(e, t) : qe.has(e) || qe.set(e, e.v);
    var r = kt.ensure();
    if (r.capture(e, t), (e.f & ae) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ne) !== 0 && gr(i), oe === null && _r(i);
    }
    e.wv = Oi(), yi(e, ne, n), F !== null && (F.f & se) !== 0 && (F.f & (Ie | nt)) === 0 && (Se === null ? sa([e]) : Se.push(e)), !r.is_fork && In.size > 0 && !wi && Ys();
  }
  return t;
}
function Ys() {
  wi = !1;
  for (const e of In) {
    (e.f & se) !== 0 && J(e, Ue);
    let t;
    try {
      t = mn(e);
    } catch {
      t = !0;
    }
    t && Gt(e);
  }
  In.clear();
}
function ln(e) {
  C(e, e.v + 1);
}
function yi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var a = r[s], f = a.f, l = (f & ne) === 0;
      if (l && J(a, t), (f & Cn) !== 0)
        In.add(
          /** @type {Effect} */
          a
        );
      else if ((f & ae) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        oe == null || oe.delete(c), (f & xt) === 0 && (f & Re && (F === null || (F.f & Mn) === 0) && (a.f |= xt), yi(c, Ue, n));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          a
        );
        (f & Pe) !== 0 && Oe !== null && Oe.add(d), n !== null ? n.push(d) : wr(d);
      }
    }
}
function $e(e) {
  if (typeof e != "object" || e === null || qn in e || ii in e)
    return e;
  const t = ti(e);
  if (t !== us && t !== cs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = $r(e), i = /* @__PURE__ */ V(0), s = bt, a = (f) => {
    if (bt === s)
      return f();
    var l = L, c = bt;
    Ne(null), zr(s);
    var d = f();
    return Ne(l), zr(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ms();
        var d = n.get(l);
        return d === void 0 ? a(() => {
          var _ = /* @__PURE__ */ V(c.value);
          return n.set(l, _), _;
        }) : C(d, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const d = a(() => /* @__PURE__ */ V(ie));
            n.set(l, d), ln(i);
          }
        } else
          C(c, ie), ln(i);
        return !0;
      },
      get(f, l, c) {
        var h;
        if (l === qn)
          return e;
        var d = n.get(l), _ = l in f;
        if (d === void 0 && (!_ || (h = sn(f, l)) != null && h.writable) && (d = a(() => {
          var g = $e(_ ? f[l] : ie), w = /* @__PURE__ */ V(g);
          return w;
        }), n.set(l, d)), d !== void 0) {
          var v = u(d);
          return v === ie ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var _ = n.get(l), v = _ == null ? void 0 : _.v;
          if (_ !== void 0 && v !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(f, l) {
        var v;
        if (l === qn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== ie || Reflect.has(f, l);
        if (c !== void 0 || F !== null && (!d || (v = sn(f, l)) != null && v.writable)) {
          c === void 0 && (c = a(() => {
            var h = d ? $e(f[l]) : ie, g = /* @__PURE__ */ V(h);
            return g;
          }), n.set(l, c));
          var _ = u(c);
          if (_ === ie)
            return !1;
        }
        return d;
      },
      set(f, l, c, d) {
        var j;
        var _ = n.get(l), v = l in f;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? C(g, ie) : h in f && (g = a(() => /* @__PURE__ */ V(ie)), n.set(h + "", g));
          }
        if (_ === void 0)
          (!v || (j = sn(f, l)) != null && j.writable) && (_ = a(() => /* @__PURE__ */ V(void 0)), C(_, $e(c)), n.set(l, _));
        else {
          v = _.v !== ie;
          var w = a(() => $e(c));
          C(_, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, l);
        if (p != null && p.set && p.set.call(d, c), !v) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), Q = Number(l);
            Number.isInteger(Q) && Q >= b.v && C(b, Q + 1);
          }
          ln(i);
        }
        return !0;
      },
      ownKeys(f) {
        u(i);
        var l = Reflect.ownKeys(f).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== ie;
        });
        for (var [c, d] of n)
          d.v !== ie && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Rs();
      }
    }
  );
}
var ir, bi, xi, Ei;
function Ks() {
  if (ir === void 0) {
    ir = window, bi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xi = sn(t, "firstChild").get, Ei = sn(t, "nextSibling").get, Fr(e) && (e[er] = void 0, e[xn] = null, e[ms] = void 0, e.__e = void 0), Fr(n) && (n[Qt] = void 0);
  }
}
function tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return (
    /** @type {TemplateNode | null} */
    xi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ei.call(e)
  );
}
function X(e, t) {
  return /* @__PURE__ */ Tt(e);
}
function et(e, t = !1) {
  {
    var n = /* @__PURE__ */ Tt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ gn(n) : n;
  }
}
function te(e, t = !1) {
  return /* @__PURE__ */ Tt(e);
}
function I(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ gn(r);
  return r;
}
function Ws(e) {
  e.textContent = "";
}
function ki() {
  return !1;
}
function Zs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function Xs(e) {
  var t = F;
  if (t === null)
    return L.f |= ut, e;
  if ((t.f & qt) === 0 && (t.f & jt) === 0)
    throw e;
  Ve(e, t);
}
function Ve(e, t) {
  if (!(t !== null && (t.f & ke) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Qn) !== 0 && (t.f & (ke | $n)) === 0) {
        if ((t.f & qt) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Js(e) {
  F === null && (L === null && As(), Ts()), ct && Ss();
}
function Qs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function rt(e, t) {
  var n = F;
  n !== null && (n.f & ce) !== 0 && (e |= ce);
  var r = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | ne | Re,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  T == null || T.register_created_effect(r);
  var i = r;
  if ((e & jt) !== 0)
    It !== null ? It.push(r) : kt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Gt(r);
    } catch (a) {
      throw pe(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Yt) === 0 && (i = i.first, (e & Pe) !== 0 && (e & zt) !== 0 && i !== null && (i.f |= zt));
  }
  if (i !== null && (i.parent = n, n !== null && Qs(i, n), L !== null && (L.f & ae) !== 0 && (e & nt) === 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function yr() {
  return L !== null && !Fe;
}
function Si(e) {
  const t = rt(Fn, null);
  return J(t, se), t.teardown = e, t;
}
function br(e) {
  Js();
  var t = (
    /** @type {Effect} */
    F.f
  ), n = !L && (t & Ie) !== 0 && _e !== null && !_e.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      _e
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ti(e);
}
function Ti(e) {
  return rt(jt | ps, e);
}
function $s(e) {
  kt.ensure();
  const t = rt(nt | Yt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? yt(t, () => {
      pe(t), r(void 0);
    }) : (pe(t), r(void 0));
  });
}
function ea(e) {
  return rt(jt, e);
}
function ta(e) {
  return rt(Nt | Yt, e);
}
function na(e, t = 0) {
  return rt(Fn | t, e);
}
function Y(e, t = [], n = [], r = []) {
  Ps(r, t, n, (i) => {
    rt(Fn, () => {
      e(...i.map(u));
    });
  });
}
function Un(e, t = 0) {
  var n = rt(Pe | t, e);
  return n;
}
function Me(e) {
  return rt(Ie | Yt, e);
}
function Ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ct, r = L;
    jr(!0), Ne(null);
    try {
      t.call(null);
    } catch (i) {
      Ve(i, e.parent);
    } finally {
      jr(n), Ne(r);
    }
  }
}
function xr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && pn(() => {
      i.abort(_n);
    });
    var r = n.next;
    (n.f & nt) !== 0 ? n.parent = null : pe(n, t), n = r;
  }
}
function ra(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ie) === 0 && pe(t), t = n;
  }
}
function pe(e, t = !0) {
  var n = !1;
  (t || (e.f & _s) !== 0) && e.nodes !== null && e.nodes.end !== null && (ia(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= $n, xr(e, t && !n), on(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ai(e), e.f ^= $n, e.f |= ke;
  var i = e.parent;
  i !== null && i.first !== null && Ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ia(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ gn(e);
    e.remove(), e = n;
  }
}
function Ci(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function yt(e, t, n = !0) {
  var r = [];
  e.f |= hr, Mi(e, r, !0);
  var i = () => {
    n && pe(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var f of r)
      f.out(a);
  } else
    i();
}
function Mi(e, t, n) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & nt) === 0) {
        var a = (i.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ie) !== 0 && (e.f & Pe) !== 0;
        Mi(i, t, a ? n : !1);
      }
      i = s;
    }
  }
}
function Nn(e) {
  e.f &= ~hr, Ri(e, !0);
}
function Ri(e, t) {
  if ((e.f & hr) === 0 && (e.f & ce) !== 0) {
    e.f ^= ce, (e.f & se) === 0 && (J(e, ne), kt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & zt) !== 0 || (n.f & Ie) !== 0;
      Ri(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Er(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ gn(n);
      t.append(n), n = i;
    }
}
let kn = !1, ct = !1;
function jr(e) {
  ct = e;
}
let L = null, Fe = !1;
function Ne(e) {
  L = e;
}
let F = null;
function Ke(e) {
  F = e;
}
let Ye = null;
function Ii(e) {
  L !== null && (Ye ?? (Ye = /* @__PURE__ */ new Set())).add(e);
}
let he = null, Ee = 0, Se = null;
function sa(e) {
  Se = e;
}
let Ni = 1, dt = 0, bt = dt;
function zr(e) {
  bt = e;
}
function Oi() {
  return ++Ni;
}
function mn(e) {
  var t = e.f;
  if ((t & ne) !== 0)
    return !0;
  if (t & ae && (e.f &= ~xt), (t & Ue) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (mn(
        /** @type {Derived} */
        s
      ) && vi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Re) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    oe === null && J(e, se);
  }
  return !1;
}
function Li(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Ye !== null && Ye.has(e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & ae) !== 0 ? Li(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? J(s, ne) : (s.f & se) !== 0 && J(s, Ue), wr(
        /** @type {Effect} */
        s
      ));
    }
}
function Di(e) {
  var t = he, n = Ee, r = Se, i = L, s = Ye, a = _e, f = Fe, l = bt, c = e.f;
  he = /** @type {null | Value[]} */
  null, Ee = 0, Se = null, L = (c & (Ie | nt)) === 0 ? e : null, Ye = null, Bt(e.ctx), Fe = !1, bt = ++dt, e.ac !== null && (pn(() => {
    e.ac.abort(_n);
  }), e.ac = null);
  try {
    e.f |= Mn;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= qt;
    var v = Br(e);
    if (oi() && Se !== null && !Fe && v !== null && (e.f & (ae | Ue | ne)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Se.length; h++)
        Li(
          Se[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (dt++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = dt;
      if (t !== null)
        for (const g of t)
          g.rv = dt;
      Se !== null && (r === null ? r = Se : r.push(.../** @type {Source[]} */
      Se));
    }
    return (e.f & ut) !== 0 && (e.f ^= ut), _;
  } catch (g) {
    return Br(e), Xs(g);
  } finally {
    e.f ^= Mn, he = t, Ee = n, Se = r, L = i, Ye = s, Bt(a), Fe = f, bt = l;
  }
}
function Br(e) {
  var i;
  var t = e.deps, n = T == null ? void 0 : T.is_fork;
  if (he !== null) {
    var r;
    if (n || on(e, Ee), t !== null && Ee > 0)
      for (t.length = Ee + he.length, r = 0; r < he.length; r++)
        t[Ee + r] = he[r];
    else
      e.deps = t = he;
    if (yr() && (e.f & Re) !== 0)
      for (r = Ee; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Ee < t.length && (on(e, Ee), t.length = Ee);
  return t;
}
function aa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = os.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (he === null || !An.call(he, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Re) !== 0 && (s.f ^= Re, s.f &= ~xt), s.v !== ie && _r(s), s.ac !== null && pn(() => {
      s.ac.abort(_n), s.ac = null, J(s, ne);
    }), zs(s), on(s, 0);
  }
}
function on(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      aa(e, n[r]);
}
function Gt(e) {
  var t = e.f;
  if ((t & ke) === 0) {
    J(e, se);
    var n = F, r = kn;
    F = e, kn = (t & (Ie | nt)) === 0;
    try {
      (t & (Pe | ri)) !== 0 ? ra(e) : xr(e), Ai(e);
      var i = Di(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ni;
      var s;
      Qr && Os && (e.f & ne) !== 0 && e.deps;
    } finally {
      kn = r, F = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & ae) !== 0;
  if (L !== null && !Fe) {
    var r = F !== null && (F.f & ke) !== 0;
    if (!r && (Ye === null || !Ye.has(e))) {
      var i = L.deps;
      if ((L.f & Mn) !== 0)
        e.rv < dt && (e.rv = dt, he === null && i !== null && i[Ee] === e ? Ee++ : he === null ? he = [e] : he.push(e));
      else {
        L.deps ?? (L.deps = []), An.call(L.deps, e) || L.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : An.call(s, L) || s.push(L);
      }
    }
  }
  if (ct && qe.has(e))
    return qe.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (ct) {
      var f = a.v;
      return ((a.f & se) === 0 && a.reactions !== null || Fi(a)) && (f = gr(a)), qe.set(a, f), f;
    }
    var l = (a.f & Re) === 0 && !Fe && L !== null && (kn || (L.f & Re) !== 0), c = (a.f & qt) === 0;
    mn(a) && (l && (a.f |= Re), vi(a)), l && !c && (di(a), Pi(a));
  }
  if (oe != null && oe.has(e))
    return oe.get(e);
  if ((e.f & ut) !== 0)
    throw e.v;
  return e.v;
}
function Pi(e) {
  if (e.f |= Re, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & Re) === 0 && (di(
        /** @type {Derived} */
        t
      ), Pi(
        /** @type {Derived} */
        t
      ));
}
function Fi(e) {
  if (e.v === ie) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qe.has(t) || (t.f & ae) !== 0 && Fi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function kr(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const ht = Symbol("events"), Ui = /* @__PURE__ */ new Set(), sr = /* @__PURE__ */ new Set();
function la(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || ar.call(t, s), !s.cancelBubble)
      return pn(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Qe(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Hi(e, t, n, r, i) {
  var s = { capture: r, passive: i }, a = la(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, a, s);
  });
}
function Ce(e, t, n) {
  (t[ht] ?? (t[ht] = {}))[e] = n;
}
function Sr(e) {
  for (var t = 0; t < e.length; t++)
    Ui.add(e[t]);
  for (var n of sr)
    n(e);
}
let Wn = null, Zn = !1;
function ar(e) {
  var w, p;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Wn = e, Zn || (Zn = !0, setTimeout(() => {
    Zn = !1, Wn = null;
  }));
  var a = 0, f = Wn === e && e[ht];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ht] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = L, _ = F;
    Ne(null), Ke(null);
    try {
      for (var v, h = []; s !== null && s !== t; ) {
        try {
          var g = (p = s[ht]) == null ? void 0 : p[r];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && g.call(s, e);
        } catch (b) {
          v ? h.push(b) : v = b;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (v) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e[ht] = t, delete e.currentTarget, Ne(d), Ke(_);
    }
  }
}
var Xr;
const Xn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Xr = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Xr.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function oa(e) {
  return (
    /** @type {string} */
    (Xn == null ? void 0 : Xn.createHTML(e)) ?? e
  );
}
function ji(e) {
  var t = Zs("template");
  return t.innerHTML = oa(e.replaceAll("<!>", "<!---->")), t.content;
}
function fn(e, t) {
  var n = (
    /** @type {Effect} */
    F
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ji(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Tt(i)));
    var a = (
      /** @type {TemplateNode} */
      r || bi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      fn(f, l);
    } else
      fn(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function fa(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ji(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Tt(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Tt(f);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return fn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ua(e, t) {
  return /* @__PURE__ */ fa(e, t, "svg");
}
function Jn(e = "") {
  {
    var t = tt(e + "");
    return fn(t, t), t;
  }
}
function Hn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = tt();
  return e.append(t, n), fn(t, n), e;
}
function A(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ca = ["touchstart", "touchmove"];
function va(e) {
  return ca.includes(e);
}
function da(e) {
  let t = 0, n = St(0), r;
  return () => {
    yr() && (u(n), na(() => (t === 0 && (r = kr(() => e(() => ln(n)))), t += 1, () => {
      Qe(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, ln(n));
      });
    })));
  };
}
var ha = zt | Yt;
function _a(e, t, n, r) {
  new pa(e, t, n, r);
}
var Te, dr, Ae, gt, fe, ye, ue, be, je, mt, ot, Ht, cn, vn, Je, Ln, G, ga, ma, lr, wa, or, nn, Sn, fr, ur;
class pa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    R(this, G);
    /** @type {Boundary | null} */
    we(this, "parent");
    we(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    we(this, "transform_error");
    /** @type {TemplateNode} */
    R(this, Te);
    /** @type {TemplateNode | null} */
    R(this, dr, null);
    /** @type {BoundaryProps} */
    R(this, Ae);
    /** @type {((anchor: Node) => void)} */
    R(this, gt);
    /** @type {Effect} */
    R(this, fe);
    /** @type {Effect | null} */
    R(this, ye, null);
    /** @type {Effect | null} */
    R(this, ue, null);
    /** @type {Effect | null} */
    R(this, be, null);
    /** @type {DocumentFragment | null} */
    R(this, je, null);
    R(this, mt, 0);
    R(this, ot, 0);
    R(this, Ht, !1);
    /** @type {Set<Effect>} */
    R(this, cn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, vn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, Je, null);
    R(this, Ln, da(() => (S(this, Je, St(o(this, mt))), () => {
      S(this, Je, null);
    })));
    var s;
    S(this, Te, t), S(this, Ae, n), S(this, gt, (a) => {
      var f = (
        /** @type {Effect} */
        F
      );
      f.b = this, f.f |= Qn, r(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), S(this, fe, Un(() => {
      P(this, G, or).call(this);
    }, ha));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ui(t, o(this, cn), o(this, vn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, Ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    P(this, G, fr).call(this, t, n), S(this, mt, o(this, mt) + t), !(!o(this, Je) || o(this, Ht)) && (S(this, Ht, !0), Qe(() => {
      S(this, Ht, !1), o(this, Je) && Vt(o(this, Je), o(this, mt));
    }));
  }
  get_effect_pending() {
    return o(this, Ln).call(this), u(
      /** @type {Source<number>} */
      o(this, Je)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Ae).onerror && !o(this, Ae).failed)
      throw t;
    T != null && T.is_fork ? (o(this, ye) && T.skip_effect(o(this, ye)), o(this, ue) && T.skip_effect(o(this, ue)), o(this, be) && T.skip_effect(o(this, be)), T.oncommit(() => {
      P(this, G, ur).call(this, t);
    })) : P(this, G, ur).call(this, t);
  }
}
Te = new WeakMap(), dr = new WeakMap(), Ae = new WeakMap(), gt = new WeakMap(), fe = new WeakMap(), ye = new WeakMap(), ue = new WeakMap(), be = new WeakMap(), je = new WeakMap(), mt = new WeakMap(), ot = new WeakMap(), Ht = new WeakMap(), cn = new WeakMap(), vn = new WeakMap(), Je = new WeakMap(), Ln = new WeakMap(), G = new WeakSet(), ga = function() {
  try {
    S(this, ye, Me(() => o(this, gt).call(this, o(this, Te))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ma = function(t) {
  const n = o(this, Ae).failed, { reset: r, invoke_onerror: i } = P(this, G, lr).call(this, t);
  Qe(i), n && S(this, be, Me(() => {
    n(
      o(this, Te),
      () => t,
      () => r
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
lr = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      bs();
      return;
    }
    n = !0, r && Ns(), o(this, be) !== null && yt(o(this, be), () => {
      S(this, be, null);
    }), P(this, G, Sn).call(this, () => {
      P(this, G, or).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var a, f;
    try {
      r = !0, (f = (a = o(this, Ae)).onerror) == null || f.call(a, t, i), r = !1;
    } catch (l) {
      Ve(l, o(this, fe) && o(this, fe).parent);
    }
  } };
}, wa = function() {
  const t = o(this, Ae).pending;
  t && (this.is_pending = !0, S(this, ue, Me(() => t(o(this, Te)))), Qe(() => {
    var n = S(this, je, document.createDocumentFragment()), r = tt(), i = !1;
    if (n.append(r), S(this, ye, P(this, G, Sn).call(this, () => {
      try {
        return Me(() => o(this, gt).call(this, r));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (a) {
          Ve(a, o(this, fe).parent);
        }
        return null;
      }
    })), o(this, ye) === null) {
      S(this, je, null), i && P(this, G, nn).call(
        this,
        /** @type {Batch} */
        T
      );
      return;
    }
    o(this, ot) === 0 && (o(this, Te).before(n), S(this, je, null), yt(
      /** @type {Effect} */
      o(this, ue),
      () => {
        S(this, ue, null);
      }
    ), P(this, G, nn).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, or = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), S(this, ot, 0), S(this, mt, 0), S(this, ye, Me(() => {
      o(this, gt).call(this, o(this, Te));
    })), o(this, ot) > 0) {
      var t = S(this, je, document.createDocumentFragment());
      Er(o(this, ye), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        o(this, Ae).pending
      );
      S(this, ue, Me(() => n(o(this, Te))));
    } else
      P(this, G, nn).call(
        this,
        /** @type {Batch} */
        T
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
nn = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, cn), o(this, vn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Sn = function(t) {
  var n = F, r = L, i = _e;
  Ke(o(this, fe)), Ne(o(this, fe)), Bt(o(this, fe).ctx);
  try {
    return kt.ensure(), t();
  } finally {
    Ke(n), Ne(r), Bt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && P(r = this.parent, G, fr).call(r, t, n);
    return;
  }
  S(this, ot, o(this, ot) + t), o(this, ot) === 0 && (P(this, G, nn).call(this, n), o(this, ue) && yt(o(this, ue), () => {
    S(this, ue, null);
  }), o(this, je) && (o(this, Te).before(o(this, je)), S(this, je, null)));
}, /**
 * @param {unknown} error
 */
ur = function(t) {
  o(this, ye) && (pe(o(this, ye)), S(this, ye, null)), o(this, ue) && (pe(o(this, ue)), S(this, ue, null)), o(this, be) && (pe(o(this, be)), S(this, be, null));
  let n = o(this, Ae).failed;
  const r = (i) => {
    const { reset: s, invoke_onerror: a } = P(this, G, lr).call(this, i);
    a(), n && S(this, be, P(this, G, Sn).call(this, () => {
      try {
        return Me(() => {
          var f = (
            /** @type {Effect} */
            F
          );
          f.b = this, f.f |= Qn, n(
            o(this, Te),
            () => i,
            () => s
          );
        });
      } catch (f) {
        return Ve(
          f,
          /** @type {Effect} */
          o(this, fe).parent
        ), null;
      }
    }));
  };
  Qe(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (s) {
      Ve(s, o(this, fe) && o(this, fe).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (s) => Ve(s, o(this, fe) && o(this, fe).parent)
    ) : r(i);
  });
};
function q(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Qt] ?? (e[Qt] = e.nodeValue)) && (e[Qt] = n, e.nodeValue = `${n}`);
}
function ya(e, t) {
  return ba(e, t);
}
const yn = /* @__PURE__ */ new Map();
function ba(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0, transformError: f }) {
  Ks();
  var l = void 0, c = $s(() => {
    var d = n ?? t.appendChild(tt());
    _a(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Kt({});
        var g = (
          /** @type {ComponentContext} */
          _e
        );
        s && (g.c = s), i && (r.$$events = i), l = e(h, r) || li(), Wt();
      },
      f
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var g = 0; g < h.length; g++) {
        var w = h[g];
        if (!_.has(w)) {
          _.add(w);
          var p = va(w);
          for (const j of [t, document]) {
            var b = yn.get(j);
            b === void 0 && (b = /* @__PURE__ */ new Map(), yn.set(j, b));
            var Q = b.get(w);
            Q === void 0 ? (j.addEventListener(w, ar, { passive: p }), b.set(w, 1)) : b.set(w, Q + 1);
          }
        }
      }
    };
    return v(Pn(Ui)), sr.add(v), () => {
      var p;
      for (var h of _)
        for (const b of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            yn.get(b)
          ), w = (
            /** @type {number} */
            g.get(h)
          );
          --w == 0 ? (b.removeEventListener(h, ar), g.delete(h), g.size === 0 && yn.delete(b)) : g.set(h, w);
        }
      sr.delete(v), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return cr.set(l, c), l;
}
let cr = /* @__PURE__ */ new WeakMap();
function xa(e, t) {
  const n = cr.get(e);
  return n ? (cr.delete(e), n(t)) : Promise.resolve();
}
var De, ze, xe, wt, dn, hn, Dn;
class zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    we(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, De, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    R(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, xe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, wt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, dn, !0);
    /**
     * @param {Batch} batch
     */
    R(this, hn, (t) => {
      if (o(this, De).has(t)) {
        var n = (
          /** @type {Key} */
          o(this, De).get(t)
        ), r = o(this, ze).get(n);
        if (r)
          Nn(r), o(this, wt).delete(n);
        else {
          var i = o(this, xe).get(n);
          i && (Nn(i.effect), o(this, ze).set(n, i.effect), o(this, xe).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of o(this, De)) {
          if (o(this, De).delete(s), s === t)
            break;
          const f = o(this, xe).get(a);
          f && (pe(f.effect), o(this, xe).delete(a));
        }
        for (const [s, a] of o(this, ze)) {
          if (s === n || o(this, wt).has(s)) continue;
          const f = () => {
            if (Array.from(o(this, De).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Er(a, c), c.append(tt()), o(this, xe).set(s, { effect: a, fragment: c });
            } else
              pe(a);
            o(this, wt).delete(s), o(this, ze).delete(s);
          };
          o(this, dn) || !r ? (o(this, wt).add(s), yt(a, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, Dn, (t) => {
      o(this, De).delete(t);
      const n = Array.from(o(this, De).values());
      for (const [r, i] of o(this, xe))
        n.includes(r) || (pe(i.effect), o(this, xe).delete(r));
    });
    this.anchor = t, S(this, dn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      T
    ), i = ki();
    if (n && !o(this, ze).has(t) && !o(this, xe).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = tt();
        s.append(a), o(this, xe).set(t, {
          effect: Me(() => n(a)),
          fragment: s
        });
      } else
        o(this, ze).set(
          t,
          Me(() => n(this.anchor))
        );
    if (o(this, De).set(r, t), i) {
      for (const [f, l] of o(this, ze))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of o(this, xe))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(o(this, hn)), r.ondiscard(o(this, Dn));
    } else
      o(this, hn).call(this, r);
  }
}
De = new WeakMap(), ze = new WeakMap(), xe = new WeakMap(), wt = new WeakMap(), dn = new WeakMap(), hn = new WeakMap(), Dn = new WeakMap();
function K(e, t, n = !1) {
  var r = new zi(e), i = n ? zt : 0;
  function s(a, f) {
    r.ensure(a, f);
  }
  Un(() => {
    var a = !1;
    t((f, l = 0) => {
      a = !0, s(l, f);
    }), a || s(-1, null);
  }, i);
}
const Ea = Symbol("NaN");
function ka(e, t, n) {
  var r = new zi(e);
  Un(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Ea), r.ensure(i, n);
  });
}
function Bi(e, t) {
  return t;
}
function Sa(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, f = 0; f < i; f++) {
    let _ = t[f];
    yt(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vr(e, Pn(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Ws(d), d.append(c), e.items.clear();
    }
    vr(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vr(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const f of a)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r != null && r.has(s)) {
      s.f |= Ge;
      const a = document.createDocumentFragment();
      Er(s, a);
    } else
      pe(t[i], n);
  }
}
var Vr;
function ft(e, t, n, r, i, s = null) {
  var a = e, f = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = c.appendChild(tt());
  }
  var d = null, _ = /* @__PURE__ */ Hs(() => {
    var j = n();
    return (
      /** @type {V[]} */
      $r(j) ? j : j == null ? [] : Pn(j)
    );
  }), v, h = /* @__PURE__ */ new Map(), g = !0;
  function w(j) {
    (Q.effect.f & ke) === 0 && (Q.pending.delete(j), Q.fallback = d, Ta(Q, v, a, t, r), d !== null && (v.length === 0 ? (d.f & Ge) === 0 ? Nn(d) : (d.f ^= Ge, rn(d, null, a)) : yt(d, () => {
      d = null;
    })));
  }
  function p(j) {
    Q.pending.delete(j);
  }
  var b = Un(() => {
    v = /** @type {V[]} */
    u(_);
    for (var j = v.length, $ = /* @__PURE__ */ new Set(), M = (
      /** @type {Batch} */
      T
    ), N = ki(), U = 0; U < j; U += 1) {
      var le = v[U], m = r(le, U), x = g ? null : f.get(m);
      x ? (x.v && Vt(x.v, le), x.i && Vt(x.i, U), N && M.unskip_effect(x.e)) : (x = Aa(
        f,
        g ? a : Vr ?? (Vr = tt()),
        le,
        m,
        U,
        i,
        t,
        n
      ), g || (x.e.f |= Ge), f.set(m, x)), $.add(m);
    }
    if (j === 0 && s && !d && (g ? d = Me(() => s(a)) : (d = Me(() => s(Vr ?? (Vr = tt()))), d.f |= Ge)), j > $.size && ks(), !g)
      if (h.set(M, $), N) {
        for (const [W, re] of f)
          $.has(W) || M.skip_effect(re.e);
        M.oncommit(w), M.ondiscard(p);
      } else
        w(M);
    u(_);
  }), Q = { effect: b, items: f, pending: h, outrogroups: null, fallback: d };
  g = !1;
}
function Jt(e) {
  for (; e !== null && (e.f & Ie) === 0; )
    e = e.next;
  return e;
}
function Ta(e, t, n, r, i) {
  var x, W, re, ve, k, E, D, Z, ge;
  var s = (r & 8) !== 0, a = t.length, f = e.items, l = Jt(e.effect.first), c, d = null, _, v = [], h = [], g, w, p, b;
  if (s)
    for (b = 0; b < a; b += 1)
      g = t[b], w = i(g, b), p = /** @type {EachItem} */
      f.get(w).e, (p.f & Ge) === 0 && ((W = (x = p.nodes) == null ? void 0 : x.a) == null || W.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (b = 0; b < a; b += 1) {
    if (g = t[b], w = i(g, b), p = /** @type {EachItem} */
    f.get(w).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(p), ee.done.delete(p);
    if ((p.f & ce) !== 0 && (Nn(p), s && ((ve = (re = p.nodes) == null ? void 0 : re.a) == null || ve.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), (p.f & Ge) !== 0)
      if (p.f ^= Ge, p === l)
        rn(p, null, n);
      else {
        var Q = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), at(e, d, p), at(e, p, Q), rn(p, Q, n), d = p, v = [], h = [], l = Jt(d.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (v.length < h.length) {
          var j = h[0], $;
          d = j.prev;
          var M = v[0], N = v[v.length - 1];
          for ($ = 0; $ < v.length; $ += 1)
            rn(v[$], j, n);
          for ($ = 0; $ < h.length; $ += 1)
            c.delete(h[$]);
          at(e, M.prev, N.next), at(e, d, M), at(e, N, j), l = j, d = N, b -= 1, v = [], h = [];
        } else
          c.delete(p), rn(p, l, n), at(e, p.prev, p.next), at(e, p, d === null ? e.effect.first : d.next), at(e, d, p), d = p;
        continue;
      }
      for (v = [], h = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), h.push(l), l = Jt(l.next);
      if (l === null)
        continue;
    }
    (p.f & Ge) === 0 && v.push(p), d = p, l = Jt(p.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (vr(e, Pn(ee.done)), (k = e.outrogroups) == null || k.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var U = [];
    if (c !== void 0)
      for (p of c)
        (p.f & ce) === 0 && U.push(p);
    for (; l !== null; )
      (l.f & ce) === 0 && l !== e.fallback && U.push(l), l = Jt(l.next);
    var le = U.length;
    if (le > 0) {
      var m = (r & 4) !== 0 && a === 0 ? n : null;
      if (s) {
        for (b = 0; b < le; b += 1)
          (D = (E = U[b].nodes) == null ? void 0 : E.a) == null || D.measure();
        for (b = 0; b < le; b += 1)
          (ge = (Z = U[b].nodes) == null ? void 0 : Z.a) == null || ge.fix();
      }
      Sa(e, U, m);
    }
  }
  s && Qe(() => {
    var ee, vt;
    if (_ !== void 0)
      for (p of _)
        (vt = (ee = p.nodes) == null ? void 0 : ee.a) == null || vt.apply();
  });
}
function Aa(e, t, n, r, i, s, a, f) {
  var l = (a & 1) !== 0 ? (a & 16) === 0 ? /* @__PURE__ */ qs(n, !1, !1) : St(n) : null, c = (a & 2) !== 0 ? St(i) : null;
  return {
    v: l,
    i: c,
    e: Me(() => (s(t, l ?? n, c ?? i, f), () => {
      e.delete(r);
    }))
  };
}
function rn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ge) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gn(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function at(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ca(e, t, n) {
  ea(() => {
    var r = kr(() => t(e, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const Gr = [...` 	
\r\f \v\uFEFF`];
function Ma(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var f = a + s;
          (a === 0 || Gr.includes(r[a - 1])) && (f === r.length || Gr.includes(r[f])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(f + 1) : a = f;
        }
  }
  return r === "" ? null : r;
}
function bn(e, t, n, r, i, s) {
  var a = (
    /** @type {any} */
    e[er]
  );
  if (a !== n || a === void 0) {
    var f = Ma(n, r, s);
    f == null ? e.removeAttribute("class") : e.className = f, e[er] = n;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return s;
}
const Ra = Symbol("is custom element"), Ia = Symbol("is html"), Na = ws ? "progress" : "PROGRESS";
function Oa(e, t) {
  var n = Vi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Na) || (e.value = t ?? "");
}
function Be(e, t, n, r) {
  var i = Vi(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[gs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && La(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[xn] ?? (e[xn] = {
      [Ra]: e.nodeName.includes("-"),
      [Ia]: e.namespaceURI === ls
    })
  );
}
var qr = /* @__PURE__ */ new Map();
function La(e) {
  var t = e.getAttribute("is") || e.nodeName, n = qr.get(t);
  if (n) return n;
  qr.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = fs(i);
    for (var a in r)
      r[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && n.add(a);
    i = ti(i);
  }
  return n;
}
function Tn(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = a());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? a() : (s = !0, c);
  }, l;
}
const Da = "5";
var Jr;
typeof window < "u" && ((Jr = window.__svelte ?? (window.__svelte = {})).v ?? (Jr.v = /* @__PURE__ */ new Set())).add(Da);
let jn = "";
function Pa(e) {
  jn = e;
}
async function wn(e, t) {
  const n = new URL(`${jn}${e}`, window.location.origin);
  for (const [r, i] of Object.entries(t ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const Fa = (e) => wn("/accounts", e), Ua = (e) => wn(`/accounts/${encodeURIComponent(e)}`), Ha = (e, t, n) => wn(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), ja = (e, t, n) => wn(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), za = (e, t) => wn(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), Ba = (e, t, n) => `${jn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, Yr = (e, t, n = 0) => `${jn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var Va = /* @__PURE__ */ H('<img loading="lazy"/>'), Ga = /* @__PURE__ */ H('<span class="ofx-initials"> </span>');
function Tr(e, t) {
  Kt(t, !0);
  let n = Tn(t, "src", 3, null), r = Tn(t, "alt", 3, ""), i = Tn(t, "name", 3, ""), s = /* @__PURE__ */ V(!1);
  const a = /* @__PURE__ */ Et(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var v;
    return ((v = _[0]) == null ? void 0 : v.toUpperCase()) ?? "";
  }).join(""));
  var f = Hn(), l = et(f);
  {
    var c = (_) => {
      var v = Va();
      Y(() => {
        Be(v, "src", n()), Be(v, "alt", r());
      }), Hi("error", v, () => C(s, !0)), A(_, v);
    }, d = (_) => {
      var v = Ga(), h = te(v, !0);
      Y(() => q(h, u(a))), A(_, v);
    };
    K(l, (_) => {
      n() && !u(s) ? _(c) : _(d, -1);
    });
  }
  A(e, f), Wt();
}
var qa = /* @__PURE__ */ H(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Ya = /* @__PURE__ */ H('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>'), Ka = /* @__PURE__ */ H('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Wa = /* @__PURE__ */ H('<div class="ofx-sentinel"></div>'), Za = /* @__PURE__ */ H('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <div class="ofx-grid"><!> <!></div> <!>', 1);
function Xa(e, t) {
  Kt(t, !0);
  const n = 60;
  let r = /* @__PURE__ */ V($e([])), i = /* @__PURE__ */ V(0), s = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(!1), f = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(""), c;
  const d = /* @__PURE__ */ Et(() => u(r).length < u(i));
  async function _(k, E) {
    C(s, !0);
    const D = await Fa({ search: k, limit: n, offset: E });
    if (k !== u(f)) {
      C(s, !1);
      return;
    }
    D ? (C(r, E === 0 ? D.items : [...u(r), ...D.items], !0), C(i, D.total, !0), C(l, k, !0), C(a, !1)) : C(a, !0), C(s, !1);
  }
  br(() => {
    _("", 0);
  });
  function v(k) {
    C(f, k.currentTarget.value, !0), clearTimeout(c), c = setTimeout(() => _(u(f), 0), 250);
  }
  function h(k) {
    const E = new IntersectionObserver(
      (D) => {
        var Z;
        (Z = D[0]) != null && Z.isIntersecting && u(d) && !u(s) && _(u(l), u(r).length);
      },
      { rootMargin: "600px" }
    );
    return E.observe(k), { destroy: () => E.disconnect() };
  }
  var g = Za(), w = I(et(g), 2), p = X(w);
  {
    var b = (k) => {
      var E = Jn();
      Y(
        (D, Z) => q(E, `${D ?? ""} of ${Z ?? ""}
        ${u(l) ? `matching “${u(l)}”` : "accounts"}`),
        [
          () => u(r).length.toLocaleString(),
          () => u(i).toLocaleString()
        ]
      ), A(k, E);
    }, Q = (k) => {
      var E = Jn("loading…");
      A(k, E);
    }, j = (k) => {
      var E = Jn("no accounts indexed yet");
      A(k, E);
    };
    K(p, (k) => {
      u(i) ? k(b) : u(s) ? k(Q, 1) : k(j, -1);
    });
  }
  var $ = I(w, 2), M = I(X($), 2), N = I($, 2);
  {
    var U = (k) => {
      var E = qa();
      A(k, E);
    };
    K(N, (k) => {
      u(a) && k(U);
    });
  }
  var le = I(N, 2), m = X(le);
  ft(m, 17, () => u(r), (k) => k.handle, (k, E) => {
    var D = Ya(), Z = X(D), ge = X(Z);
    Tr(ge, {
      get src() {
        return u(E).avatar_url;
      },
      get alt() {
        return u(E).display_name;
      },
      get name() {
        return u(E).display_name;
      }
    });
    var ee = I(Z, 2), vt = te(ee, !0), zn = I(ee, 2), Bn = te(zn);
    Y(() => {
      Be(D, "href", `/x/onlyfans/${u(E).handle ?? ""}`), Be(ee, "title", u(E).display_name), q(vt, u(E).display_name), q(Bn, `${u(E).source_count ?? ""}
                ${u(E).source_count === 1 ? "site" : "sites"}`);
    }), Ce("click", D, (it) => {
      it.metaKey || it.ctrlKey || it.shiftKey || it.button !== 0 || (it.preventDefault(), t.navigate(`/x/onlyfans/${u(E).handle}`));
    }), A(k, D);
  });
  var x = I(m, 2);
  {
    var W = (k) => {
      var E = Hn(), D = et(E);
      ft(D, 16, () => Array(12), Bi, (Z, ge) => {
        var ee = Ka();
        A(Z, ee);
      }), A(k, E);
    };
    K(x, (k) => {
      u(s) && k(W);
    });
  }
  var re = I(le, 2);
  {
    var ve = (k) => {
      var E = Wa();
      Ca(E, (D) => h == null ? void 0 : h(D)), A(k, E);
    };
    K(re, (k) => {
      u(d) && k(ve);
    });
  }
  Y(() => Oa(M, u(f))), Ce("input", M, v), A(e, g), Wt();
}
Sr(["input", "click"]);
var Ja = /* @__PURE__ */ H('<p class="ofx-error"> </p>'), Qa = /* @__PURE__ */ H('<p class="ofx-note"> </p>'), Kr = /* @__PURE__ */ H('<span class="ofx-badge"> </span>'), $a = /* @__PURE__ */ H('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), el = /* @__PURE__ */ H('<div class="ofx-skeleton"></div>'), tl = /* @__PURE__ */ H('<button class="ofx-btn ofx-outline" type="button"> </button>'), nl = /* @__PURE__ */ H('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function rl(e, t) {
  Kt(t, !0);
  let n = /* @__PURE__ */ V($e([])), r = /* @__PURE__ */ V(0), i = /* @__PURE__ */ V(!1), s = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(!1);
  async function f() {
    if (u(i) || u(s)) return;
    C(i, !0);
    const M = u(r) + 1, U = await (t.mode === "images" ? ja : Ha)(t.handle, t.site, M);
    U === null ? C(a, !0) : (C(n, [...u(n), ...U], !0), C(r, M), U.length === 0 && C(s, !0)), C(i, !1);
  }
  br(() => {
    t.mode, t.handle, t.site, kr(() => {
      C(n, [], !0), C(r, 0), C(s, !1), C(a, !1), C(i, !1), f();
    });
  });
  function l(M) {
    return M ? `${Math.floor(M / 60)}:${String(M % 60).padStart(2, "0")}` : null;
  }
  var c = nl(), d = X(c), _ = te(d, !0), v = I(d, 2);
  {
    var h = (M) => {
      var N = Ja(), U = te(N);
      Y(() => q(U, `${t.site ?? ""} did not answer.`)), A(M, N);
    }, g = (M) => {
      var N = Qa(), U = te(N);
      Y(() => q(U, `Nothing here on ${t.site ?? ""}.`)), A(M, N);
    };
    K(v, (M) => {
      u(a) ? M(h) : !u(i) && u(n).length === 0 && M(g, 1);
    });
  }
  var w = I(v, 2), p = X(w);
  ft(p, 17, () => u(n), (M) => M.video_id ?? M.gallery_id, (M, N) => {
    var U = $a(), le = X(U), m = X(le);
    {
      let D = /* @__PURE__ */ Et(() => t.mode === "images" ? u(N).cover : u(N).thumbnail);
      Tr(m, {
        get src() {
          return u(D);
        },
        get alt() {
          return u(N).title;
        },
        get name() {
          return u(N).title;
        }
      });
    }
    var x = I(m, 2);
    {
      var W = (D) => {
        var Z = Kr(), ge = te(Z, !0);
        Y(() => q(ge, u(N).image_count)), A(D, Z);
      }, re = (D) => {
        var Z = Kr(), ge = te(Z, !0);
        Y((ee) => q(ge, ee), [() => l(u(N).duration)]), A(D, Z);
      }, ve = /* @__PURE__ */ Et(() => l(u(N).duration));
      K(x, (D) => {
        t.mode === "images" && u(N).image_count ? D(W) : u(ve) && D(re, 1);
      });
    }
    var k = I(le, 2), E = te(k, !0);
    Y(() => q(E, u(N).title)), Ce("click", U, () => t.mode === "images" ? t.ongallery(u(N)) : t.onplay(u(N))), A(M, U);
  });
  var b = I(p, 2);
  {
    var Q = (M) => {
      var N = Hn(), U = et(N);
      ft(U, 16, () => Array(4), Bi, (le, m) => {
        var x = el();
        A(le, x);
      }), A(M, N);
    };
    K(b, (M) => {
      u(i) && M(Q);
    });
  }
  var j = I(w, 2);
  {
    var $ = (M) => {
      var N = tl(), U = te(N, !0);
      Y(() => {
        N.disabled = u(i), q(U, u(i) ? "Loading…" : "Load more");
      }), Ce("click", N, f), A(M, N);
    };
    K(j, (M) => {
      !u(s) && !u(a) && u(n).length > 0 && M($);
    });
  }
  Y(() => q(_, t.site)), A(e, c), Wt();
}
Sr(["click"]);
var il = /* @__PURE__ */ H('<p class="ofx-error">That account could not be loaded.</p>'), sl = /* @__PURE__ */ H('<div class="ofx-banner"><img alt=""/></div>'), al = /* @__PURE__ */ ua('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), ll = /* @__PURE__ */ H('<p> </p> <button class="ofx-more" type="button"> </button>', 1), ol = /* @__PURE__ */ H("<span><b> </b> </span>"), fl = /* @__PURE__ */ H('<div class="ofx-stats"></div>'), ul = /* @__PURE__ */ H("<span> </span>"), Wr = /* @__PURE__ */ H('<a target="_blank" rel="noreferrer noopener"> </a>'), cl = /* @__PURE__ */ H('<button type="button"> </button>'), vl = /* @__PURE__ */ H('<span class="ofx-count"> </span>'), dl = /* @__PURE__ */ H('<button type="button"> <!></button>'), hl = /* @__PURE__ */ H('<p class="ofx-error"> </p>'), _l = /* @__PURE__ */ H(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), pl = /* @__PURE__ */ H('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!>', 1), gl = /* @__PURE__ */ H('<p class="ofx-note">Loading…</p>'), ml = /* @__PURE__ */ H('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), wl = /* @__PURE__ */ H('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), yl = /* @__PURE__ */ H('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), bl = /* @__PURE__ */ H("<!> <!> <!>", 1);
function xl(e, t) {
  Kt(t, !0);
  let n = /* @__PURE__ */ V(null), r = /* @__PURE__ */ V(!1), i = /* @__PURE__ */ V("videos"), s = /* @__PURE__ */ V($e(/* @__PURE__ */ new Set())), a = /* @__PURE__ */ V(!1), f = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V(null), c = /* @__PURE__ */ V(null);
  br(() => {
    Ua(t.handle).then((m) => {
      m ? C(n, m, !0) : C(r, !0);
    });
  });
  const d = /* @__PURE__ */ Et(() => {
    var m, x, W, re;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = u(n)) == null ? void 0 : m.posts_count],
      ["photos", (x = u(n)) == null ? void 0 : x.photos_count],
      ["videos", (W = u(n)) == null ? void 0 : W.videos_count],
      ["likes", (re = u(n)) == null ? void 0 : re.likes_count]
    ].filter(([, ve]) => ve != null);
  });
  function _(m) {
    const x = new Set(u(s));
    x.has(m) ? x.delete(m) : x.add(m), C(s, x, !0);
  }
  function v(m) {
    var x, W;
    if (!((x = t.host) != null && x.play)) {
      C(f, m, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: Yr(m.site, m.video_id),
      title: m.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: m.thumbnail ?? void 0,
      site: m.site,
      videoId: m.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((W = u(n)) == null ? void 0 : W.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  async function h(m) {
    C(c, null);
    const x = await za(m.site, m.gallery_id);
    if (!x) {
      C(c, "Could not open that gallery");
      return;
    }
    if (x.length === 0) {
      C(c, "That site served no images for this gallery");
      return;
    }
    C(l, { gallery: m, count: x.length, index: 0 }, !0);
  }
  function g(m) {
    u(l) && C(
      l,
      {
        ...u(l),
        index: (u(l).index + m + u(l).count) % u(l).count
      },
      !0
    );
  }
  function w(m) {
    if (m.key === "Escape") {
      C(f, null), C(l, null);
      return;
    }
    u(l) && (m.key === "ArrowRight" && g(1), m.key === "ArrowLeft" && g(-1));
  }
  var p = bl();
  Hi("keydown", ir, w);
  var b = et(p);
  {
    var Q = (m) => {
      var x = il();
      A(m, x);
    }, j = (m) => {
      var x = pl(), W = et(x), re = X(W);
      {
        var ve = (y) => {
          var O = sl(), z = te(O);
          Y(() => Be(z, "src", u(n).header_url)), A(y, O);
        };
        K(re, (y) => {
          u(n).header_url && y(ve);
        });
      }
      var k = I(re, 2), E = X(k);
      let D;
      var Z = X(E);
      Tr(Z, {
        get src() {
          return u(n).avatar_url;
        },
        get alt() {
          return u(n).display_name;
        },
        get name() {
          return u(n).display_name;
        }
      });
      var ge = I(E, 2), ee = X(ge), vt = X(ee), zn = I(vt);
      {
        var Bn = (y) => {
          var O = al();
          A(y, O);
        };
        K(zn, (y) => {
          u(n).is_verified && y(Bn);
        });
      }
      var it = I(ee, 2), Ar = X(it), Gi = I(Ar, 2), Cr = I(it, 2);
      {
        var qi = (y) => {
          var O = ll(), z = et(O);
          let me;
          var We = te(z, !0), At = I(z, 2), Zt = te(At, !0);
          Y(() => {
            me = bn(z, 1, "ofx-bio", null, me, { "ofx-clamped": !u(a) }), q(We, u(n).bio), q(Zt, u(a) ? "less" : "more");
          }), Ce("click", At, () => C(a, !u(a))), A(y, O);
        };
        K(Cr, (y) => {
          u(n).bio && y(qi);
        });
      }
      var Mr = I(Cr, 2);
      {
        var Yi = (y) => {
          var O = fl();
          ft(O, 21, () => u(d), ([z, me]) => z, (z, me) => {
            var We = /* @__PURE__ */ Et(() => hs(u(me), 2));
            let At = () => u(We)[0], Zt = () => u(We)[1];
            var st = ol(), Xt = X(st), Vn = te(Xt, !0), rs = I(Xt);
            Y(
              (is) => {
                q(Vn, is), q(rs, ` ${At() ?? ""}`);
              },
              [() => Zt().toLocaleString()]
            ), A(z, st);
          }), A(y, O);
        };
        K(Mr, (y) => {
          u(d).length && y(Yi);
        });
      }
      var Ki = I(Mr, 2), Rr = X(Ki);
      {
        var Wi = (y) => {
          var O = ul(), z = te(O, !0);
          Y(() => q(z, u(n).location)), A(y, O);
        };
        K(Rr, (y) => {
          u(n).location && y(Wi);
        });
      }
      var Ir = I(Rr, 2);
      {
        var Zi = (y) => {
          var O = Wr(), z = te(O, !0);
          Y(
            (me) => {
              Be(O, "href", u(n).website), q(z, me);
            },
            [() => u(n).website.replace(/^https?:\/\//, "")]
          ), A(y, O);
        };
        K(Ir, (y) => {
          u(n).website && y(Zi);
        });
      }
      var Xi = I(Ir, 2);
      {
        var Ji = (y) => {
          var O = Wr(), z = te(O);
          Y(() => {
            Be(O, "href", u(n).of_url), q(z, `onlyfans.com/${u(n).of_username ?? ""}`);
          }), A(y, O);
        };
        K(Xi, (y) => {
          u(n).of_url && y(Ji);
        });
      }
      var Qi = I(k, 2);
      ft(Qi, 20, () => ["videos", "images"], (y) => y, (y, O) => {
        var z = cl();
        let me;
        var We = te(z, !0);
        Y(() => {
          me = bn(z, 1, "ofx-tab", null, me, { "ofx-on": u(i) === O }), q(We, O);
        }), Ce("click", z, () => C(i, O, !0)), A(y, z);
      });
      var Nr = I(W, 2), Or = I(X(Nr), 2);
      ft(Or, 17, () => u(n).sources, (y) => y.site, (y, O) => {
        var z = dl();
        let me;
        var We = X(z), At = I(We);
        {
          var Zt = (st) => {
            var Xt = vl(), Vn = te(Xt, !0);
            Y(() => q(Vn, u(O).video_count)), A(st, Xt);
          };
          K(At, (st) => {
            u(O).video_count && st(Zt);
          });
        }
        Y(
          (st) => {
            me = bn(z, 1, "ofx-btn ofx-outline", null, me, { "ofx-on": st }), q(We, `${u(O).site ?? ""} `);
          },
          [() => u(s).has(u(O).site)]
        ), Ce("click", z, () => _(u(O).site)), A(y, z);
      });
      var $i = I(Or, 2), Lr = I(Nr, 2);
      {
        var es = (y) => {
          var O = hl(), z = te(O, !0);
          Y(() => q(z, u(c))), A(y, O);
        };
        K(Lr, (y) => {
          u(c) && y(es);
        });
      }
      var Dr = I(Lr, 2);
      {
        var ts = (y) => {
          var O = _l();
          A(y, O);
        };
        K(Dr, (y) => {
          u(s).size === 0 && y(ts);
        });
      }
      var ns = I(Dr, 2);
      ft(ns, 17, () => u(n).sources.filter((y) => u(s).has(y.site)), (y) => y.site, (y, O) => {
        rl(y, {
          get handle() {
            return u(n).handle;
          },
          get site() {
            return u(O).site;
          },
          get mode() {
            return u(i);
          },
          onplay: (z) => v(z),
          ongallery: h
        });
      }), Y(() => {
        D = bn(E, 1, "ofx-avatar", null, D, { "ofx-overlap": !!u(n).header_url }), q(vt, `${u(n).display_name ?? ""} `), q(Ar, `@${(u(n).of_username || u(n).handle) ?? ""} `), q(Gi, ` ${u(n).source_count ?? ""}
                    ${u(n).source_count === 1 ? "site" : "sites"}`);
      }), Ce("click", $i, () => t.navigate("/x/onlyfans")), A(m, x);
    }, $ = (m) => {
      var x = gl();
      A(m, x);
    };
    K(b, (m) => {
      u(r) ? m(Q) : u(n) ? m(j, 1) : m($, -1);
    });
  }
  var M = I(b, 2);
  {
    var N = (m) => {
      var x = ml(), W = X(x), re = I(W, 2);
      Y((ve) => Be(re, "src", ve), [
        () => Yr(u(f).site, u(f).video_id)
      ]), Ce("click", W, () => C(f, null)), A(m, x);
    };
    K(M, (m) => {
      u(f) && m(N);
    });
  }
  var U = I(M, 2);
  {
    var le = (m) => {
      var x = yl(), W = X(x), re = I(W, 2);
      {
        var ve = (E) => {
          var D = wl(), Z = et(D), ge = I(Z, 2);
          Ce("click", Z, () => g(-1)), Ce("click", ge, () => g(1)), A(E, D);
        };
        K(re, (E) => {
          u(l).count > 1 && E(ve);
        });
      }
      var k = I(re, 2);
      Y(
        (E) => {
          Be(k, "src", E), Be(k, "alt", `${u(l).gallery.title ?? ""} ${u(l).index + 1} of ${u(l).count ?? ""}`);
        },
        [
          () => Ba(u(l).gallery.site, u(l).gallery.gallery_id, u(l).index)
        ]
      ), Ce("click", W, () => C(l, null)), A(m, x);
    };
    K(U, (m) => {
      u(l) && m(le);
    });
  }
  A(e, p), Wt();
}
Sr(["click"]);
var El = /* @__PURE__ */ H('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function kl(e, t) {
  Kt(t, !0);
  let n = Tn(t, "path", 3, "");
  Pa(t.api);
  const r = /* @__PURE__ */ Et(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = El(), s = X(i), a = X(s);
  {
    var f = (c) => {
      var d = Hn(), _ = et(d);
      ka(_, () => u(r), (v) => {
        xl(v, {
          get handle() {
            return u(r);
          },
          get navigate() {
            return t.navigate;
          },
          get host() {
            return t.host;
          }
        });
      }), A(c, d);
    }, l = (c) => {
      Xa(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    K(a, (c) => {
      u(r) ? c(f) : c(l, -1);
    });
  }
  A(e, i), Wt();
}
function Al({ target: e, path: t, api: n, navigate: r, host: i }) {
  const s = $e({ path: t ?? "", api: n, navigate: r, host: i }), a = ya(kl, { target: e, props: s });
  return {
    update(f) {
      s.path = f ?? "";
    },
    destroy() {
      xa(a);
    }
  };
}
export {
  Al as default
};

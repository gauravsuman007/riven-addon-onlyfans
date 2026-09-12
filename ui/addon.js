var rs = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var is = (e, t, n) => t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => is(e, typeof t != "symbol" ? t + "" : t, n), Vn = (e, t, n) => t.has(e) || Pr("Cannot " + n);
var o = (e, t, n) => (Vn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n, r) => (Vn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), D = (e, t, n) => (Vn(e, t, "access private method"), n);
const ie = Symbol("uninitialized"), ss = "http://www.w3.org/1999/xhtml", Qr = !1;
var $r = Array.isArray, as = Array.prototype.indexOf, Sn = Array.prototype.includes, Ln = Array.from, ei = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, ls = Object.getOwnPropertyDescriptors, os = Object.prototype, fs = Array.prototype, ti = Object.getPrototypeOf, Fr = Object.isExtensible;
const us = () => {
};
function cs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ni() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function vs(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ae = 2, Ht = 4, Dn = 8, ri = 1 << 24, De = 16, Me = 32, et = 64, Qn = 128, hr = 256, Ce = 512, se = 1024, ne = 2048, Fe = 4096, ce = 8192, be = 16384, Gt = 32768, $n = 1 << 25, jt = 65536, Tn = 1 << 17, ds = 1 << 18, qt = 1 << 19, hs = 1 << 20, Ge = 1 << 25, bt = 65536, An = 1 << 21, It = 1 << 22, lt = 1 << 23, Gn = Symbol("$state"), ii = Symbol("component"), _s = Symbol(""), yn = Symbol("attributes"), er = Symbol("class"), ps = Symbol("style"), Xt = Symbol("text"), dn = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Zr;
const gs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Zr = globalThis.document) != null && Zr.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ms() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ws() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function si(e) {
  return e === this.v;
}
function ys(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ai(e) {
  return !ys(e, this.v);
}
function bs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function xs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Es(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ks() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ss(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ts() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function As() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ms() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Is = !1, he = null;
function zt(e) {
  he = e;
}
function Yt(e, t = !1, n) {
  he = {
    p: he,
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
function Kt(e) {
  var t = (
    /** @type {ComponentContext} */
    he
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ti(r);
  }
  return t.i = !0, he = t.p, li(e);
}
function li(e = {}) {
  return ei(e, ii, { value: !0 }), e;
}
function oi() {
  return !0;
}
let Mt = [];
function Ns() {
  var e = Mt;
  Mt = [], cs(e);
}
function Je(e) {
  if (Mt.length === 0) {
    var t = Mt;
    queueMicrotask(() => {
      t === Mt && Ns();
    });
  }
  Mt.push(e);
}
const Os = -7169;
function J(e, t) {
  e.f = e.f & Os | t;
}
function _r(e) {
  (e.f & Ce) !== 0 || e.deps === null ? J(e, se) : J(e, Fe);
}
function fi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & bt) === 0 || (t.f ^= bt, fi(
        /** @type {Derived} */
        t.deps
      ));
}
function ui(e, t, n) {
  (e.f & ne) !== 0 ? t.add(e) : (e.f & Fe) !== 0 && n.add(e), fi(e.deps), J(e, se);
}
function hn(e) {
  var t = L, n = F;
  Re(null), Ke(null);
  try {
    return e();
  } finally {
    Re(t), Ke(n);
  }
}
function Ls(e, t, n, r) {
  const i = pr;
  var s = e.filter((h) => !h.settled), a = t.map(i);
  if (n.length === 0 && s.length === 0) {
    r(a);
    return;
  }
  var l = (
    /** @type {Effect} */
    F
  ), f = Ds(), v = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function d(h) {
    if ((l.f & be) === 0) {
      f();
      try {
        r([...a, ...h]);
      } catch (g) {
        Ve(g, l);
      }
      Cn();
    }
  }
  var _ = ci();
  if (n.length === 0) {
    v.then(() => d([])).finally(_);
    return;
  }
  function c() {
    Promise.all(n.map((h) => /* @__PURE__ */ Ps(h))).then(d).catch((h) => Ve(h, l)).finally(_);
  }
  v ? v.then(() => {
    f(), c(), Cn();
  }) : c();
}
function Ds() {
  var e = (
    /** @type {Effect} */
    F
  ), t = L, n = he, r = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Ke(e), Re(t), zt(n), s && (e.f & be) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Cn(e = !0) {
  Ke(null), Re(null), zt(null), e && (k == null || k.deactivate());
}
function ci() {
  var e = (
    /** @type {Effect} */
    F
  ), t = e.b, n = (
    /** @type {Batch} */
    k
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  var t = ae | ne;
  return F !== null && (F.f |= qt), {
    ctx: he,
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
const Jt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ps(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    F
  );
  r === null && bs();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = kt(
    /** @type {V} */
    ie
  ), a = !L, l = /* @__PURE__ */ new Set();
  return $s(() => {
    var h, g;
    var f = (
      /** @type {Effect} */
      F
    ), v = ni();
    i = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, (w) => {
        w !== dn && v.reject(w);
      }).finally(Cn);
    } catch (w) {
      v.reject(w), Cn();
    }
    var d = (
      /** @type {Batch} */
      k
    );
    if (a) {
      if ((f.f & Gt) !== 0)
        var _ = ci();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (g = d.async_deriveds.get(f)) == null || g.reject(Jt);
      else
        for (const w of l.values())
          w.reject(Jt);
      l.add(v), d.async_deriveds.set(f, v);
    }
    const c = (w, p = void 0) => {
      _ == null || _(), l.delete(v), p !== Jt && (d.activate(), p ? (s.f |= lt, Bt(s, p)) : ((s.f & lt) !== 0 && (s.f ^= lt), Bt(s, w)), d.deactivate());
    };
    v.promise.then(c, (w) => c(null, w || "unknown"));
  }), Si(() => {
    for (const f of l)
      f.reject(Jt);
  }), new Promise((f) => {
    function v(d) {
      function _() {
        d === i ? f(s) : v(i);
      }
      d.then(_, _);
    }
    v(i);
  });
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = /* @__PURE__ */ pr(e);
  return Ii(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  const t = /* @__PURE__ */ pr(e);
  return t.equals = ai, t;
}
function Us(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _e(
        /** @type {Effect} */
        t[n]
      );
  }
}
function gr(e) {
  var t, n = F, r = e.parent;
  if (!ft && r !== null && e.v !== ie && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (be | ce)) !== 0)
    return ms(), e.v;
  Ke(r);
  try {
    e.f &= ~bt, Us(e), t = Di(e);
  } finally {
    Ke(n);
  }
  return t;
}
function vi(e) {
  var t = gr(e);
  if (!e.equals(t) && (e.wv = Oi(), (!(k != null && k.is_fork) || e.deps === null) && (k !== null ? (k.capture(e, t, !0), rn == null || rn.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    J(e, se);
    return;
  }
  ft || (le !== null ? (yr() || k != null && k.is_fork) && le.set(e, t) : _r(e));
}
function Hs(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && hn(() => {
        n.ac.abort(dn), n.ac = null;
      }), n.fn !== null && (n.teardown = us), an(n, 0), xr(n));
}
function di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Vt(t);
}
let qn = null, At = null, k = null, rn = null, le = null, tr = null, Yn = !1, Rt = null, bn = null;
var Ur = 0;
let js = 1;
var Nt, it, ht, Ot, Lt, Dt, We, Pt, ve, on, Ze, Ne, He, Ft, _t, B, nr, Qt, rr, hi, _i, Ct, zs, $t;
const In = class In {
  constructor() {
    R(this, B);
    pe(this, "id", js++);
    /** True as soon as `#process` was called */
    R(this, Nt, !1);
    pe(this, "linked", !0);
    /** @type {Batch | null} */
    R(this, it, null);
    /** @type {Batch | null} */
    R(this, ht, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    pe(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Ot, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Lt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, Dt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    R(this, We, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, Pt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    R(this, ve, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    R(this, on, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, Ze, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, Ne, /* @__PURE__ */ new Set());
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
    R(this, Ft, /* @__PURE__ */ new Set());
    pe(this, "is_fork", !1);
    R(this, _t, !1);
    At === null ? qn = At = this : (E(At, ht, this), E(this, it, At)), At = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, He).has(t) || o(this, He).set(t, { d: [], m: [] }), o(this, Ft).delete(t);
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
        J(i, Fe), n(i);
    }
    o(this, Ft).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== ie && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & lt) === 0 && (this.current.set(t, [n, r]), le == null || le.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, le = null;
  }
  flush() {
    try {
      Yn = !0, k = this, D(this, B, Qt).call(this);
    } finally {
      Ur = 0, tr = null, Rt = null, bn = null, Yn = !1, k = null, le = null, qe.clear();
    }
  }
  discard() {
    var t;
    for (const n of o(this, Lt)) n(this);
    o(this, Lt).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Jt);
    D(this, B, $t).call(this), (t = o(this, Pt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, on).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (E(this, Dt, o(this, Dt) + 1), t) {
      let r = o(this, We).get(n) ?? 0;
      o(this, We).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (E(this, Dt, o(this, Dt) - 1), t) {
      let r = o(this, We).get(n) ?? 0;
      r === 1 ? o(this, We).delete(n) : o(this, We).set(n, r - 1);
    }
    o(this, _t) || (E(this, _t, !0), Je(() => {
      E(this, _t, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      o(this, Ze).add(r);
    for (const r of n)
      o(this, Ne).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Ot).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Lt).add(t);
  }
  settled() {
    return (o(this, Pt) ?? E(this, Pt, ni())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new In();
      Yn || Je(() => {
        o(t, Nt) || t.flush();
      });
    }
    return k;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (tr = t, (i = t.b) != null && i.is_pending && (t.f & (Ht | Dn | ri)) !== 0 && (t.f & Gt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Rt !== null && n === F && (L === null || (L.f & ae) === 0))
        return;
      if ((r & (et | Me)) !== 0) {
        if ((r & se) === 0)
          return;
        n.f ^= se;
      }
    }
    o(this, ve).push(n);
  }
};
Nt = new WeakMap(), it = new WeakMap(), ht = new WeakMap(), Ot = new WeakMap(), Lt = new WeakMap(), Dt = new WeakMap(), We = new WeakMap(), Pt = new WeakMap(), ve = new WeakMap(), on = new WeakMap(), Ze = new WeakMap(), Ne = new WeakMap(), He = new WeakMap(), Ft = new WeakMap(), _t = new WeakMap(), B = new WeakSet(), nr = function() {
  if (this.is_fork) return !0;
  for (const r of o(this, We).keys()) {
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
}, Qt = function() {
  var f, v, d, _;
  E(this, Nt, !0), Ur++ > 1e3 && (D(this, B, $t).call(this), Bs());
  for (const c of o(this, Ze))
    o(this, Ne).delete(c), J(c, ne), this.schedule(c);
  for (const c of o(this, Ne))
    J(c, Fe), this.schedule(c);
  const t = o(this, ve);
  E(this, ve, []), this.apply();
  var n = Rt = [], r = [], i = bn = [];
  for (const c of t)
    try {
      D(this, B, rr).call(this, c, n, r);
    } catch (h) {
      throw mi(c), D(this, B, nr).call(this) || this.discard(), h;
    }
  if (k = null, i.length > 0) {
    var s = In.ensure();
    for (const c of i)
      s.schedule(c);
  }
  if (Rt = null, bn = null, D(this, B, nr).call(this)) {
    D(this, B, Ct).call(this, r), D(this, B, Ct).call(this, n);
    for (const [c, h] of o(this, He))
      gi(c, h);
    i.length > 0 && /** @type {unknown} */
    D(f = k, B, Qt).call(f);
    return;
  }
  const a = D(this, B, hi).call(this);
  if (a) {
    D(this, B, Ct).call(this, r), D(this, B, Ct).call(this, n), D(v = a, B, _i).call(v, this);
    return;
  }
  o(this, Ze).clear(), o(this, Ne).clear();
  for (const c of o(this, Ot)) c(this);
  o(this, Ot).clear(), rn = this, Hr(r), Hr(n), rn = null, (d = o(this, Pt)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (o(this, Dt) === 0 && (o(this, ve).length === 0 || l !== null) && D(this, B, $t).call(this), o(this, ve).length > 0)
    if (l !== null) {
      const c = l;
      o(c, ve).push(...o(this, ve).filter((h) => !o(c, ve).includes(h)));
    } else
      l = this;
  l !== null && (qe.clear(), D(_ = l, B, Qt).call(_));
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
    var s = i.f, a = (s & (Me | et)) !== 0, l = a && (s & se) !== 0, f = l || (s & ce) !== 0 || o(this, He).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= se : (s & Ht) !== 0 ? n.push(i) : pn(i) && ((s & De) !== 0 && o(this, Ne).add(i), Vt(i));
      var v = i.first;
      if (v !== null) {
        i = v;
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
  for (var t = o(this, it); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = o(t, it);
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
  t.async_deriveds.clear(), this.transfer_effects(o(t, Ze), o(t, Ne));
  const n = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & ae) !== 0 && (i.f & (ne | Fe)) === 0))
      for (const f of s) {
        var a = f.f;
        if ((a & ae) !== 0)
          n(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          a & (It | De) && !this.async_deriveds.has(l) && (o(this, Ne).delete(l), J(l, ne), this.schedule(l));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), D(r = t, B, $t).call(r), k = this, D(this, B, Qt).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ct = function(t) {
  for (var n = 0; n < t.length; n += 1)
    ui(t[n], o(this, Ze), o(this, Ne));
}, zs = function() {
  var _;
  for (let c = qn; c !== null; c = o(c, ht)) {
    var t = c.id < this.id, n = [];
    for (const [h, [g, w]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && g !== r)
          c.current.set(h, [g, w]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, g] of this.async_deriveds) {
        const w = c.async_deriveds.get(h);
        w && g.promise.then(w.resolve).catch(w.reject);
      }
    var i = [...c.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      c.current.get(h)[1]
    );
    if (!(!o(c, Nt) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && c.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of o(this, Ft))
            c.unskip_effect(h, (g) => {
              var w;
              (g.f & (De | It)) !== 0 ? c.schedule(g) : D(w = c, B, Ct).call(w, [g]);
            });
        c.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var f of n)
          pi(f, s, a, l);
        l = /* @__PURE__ */ new Map();
        var v = [...c.current].filter(([h, g]) => {
          const w = this.current.get(h);
          return w ? w[0] !== g[0] || w[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (v.length > 0)
          for (const h of o(this, on))
            (h.f & (be | ce | Tn)) === 0 && mr(h, v, l) && ((h.f & (It | De)) !== 0 ? (J(h, ne), c.schedule(h)) : o(c, Ze).add(h));
        if (o(c, ve).length > 0 && !o(c, _t)) {
          c.apply();
          for (var d of o(c, ve))
            D(_ = c, B, rr).call(_, d, [], []);
          E(c, ve, []);
        }
        c.deactivate();
      }
    }
  }
}, $t = function() {
  if (this.linked) {
    var t = o(this, it), n = o(this, ht);
    t === null ? qn = n : E(t, ht, n), n === null ? At = t : E(n, it, t), this.linked = !1;
  }
};
let Et = In;
function Bs() {
  try {
    Ts();
  } catch (e) {
    Ve(e, tr);
  }
}
let Ie = null;
function Hr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (be | ce)) === 0 && pn(r) && (Ie = /* @__PURE__ */ new Set(), Vt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ci(r), (Ie == null ? void 0 : Ie.size) > 0)) {
        qe.clear();
        for (const i of Ie) {
          if ((i.f & (be | ce)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Ie.has(a) && (Ie.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & (be | ce)) === 0 && Vt(f);
          }
        }
        Ie.clear();
      }
    }
    Ie = null;
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
      ) : (s & (It | De)) !== 0 && (s & ne) === 0 && mr(i, t, r) && (J(i, ne), wr(
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
      if (Sn.call(t, i))
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
  k.schedule(e);
}
function gi(e, t) {
  if (!((e.f & Me) !== 0 && (e.f & se) !== 0)) {
    (e.f & ne) !== 0 ? t.d.push(e) : (e.f & Fe) !== 0 && t.m.push(e), J(e, se);
    for (var n = e.first; n !== null; )
      gi(n, t), n = n.next;
  }
}
function mi(e) {
  J(e, se);
  for (var t = e.first; t !== null; )
    mi(t), t = t.next;
}
let Mn = /* @__PURE__ */ new Set();
const qe = /* @__PURE__ */ new Map();
let wi = !1;
function kt(e, t) {
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
function G(e, t) {
  const n = kt(e);
  return Ii(n), n;
}
// @__NO_SIDE_EFFECTS__
function Vs(e, t = !1, n = !0) {
  const r = kt(e);
  return t || (r.equals = ai), r;
}
function T(e, t, n = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pe || (L.f & Tn) !== 0) && oi() && (L.f & (ae | De | It | Tn)) !== 0 && (Ye === null || !Ye.has(e)) && Ms();
  let r = n ? Qe(t) : t;
  return Bt(e, r, bn);
}
function Bt(e, t, n = null) {
  if (!e.equals(t)) {
    ft ? qe.set(e, t) : qe.has(e) || qe.set(e, e.v);
    var r = Et.ensure();
    if (r.capture(e, t), (e.f & ae) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ne) !== 0 && gr(i), le === null && _r(i);
    }
    e.wv = Oi(), yi(e, ne, n), F !== null && (F.f & se) !== 0 && (F.f & (Me | et)) === 0 && (ke === null ? ra([e]) : ke.push(e)), !r.is_fork && Mn.size > 0 && !wi && Gs();
  }
  return t;
}
function Gs() {
  wi = !1;
  for (const e of Mn) {
    (e.f & se) !== 0 && J(e, Fe);
    let t;
    try {
      t = pn(e);
    } catch {
      t = !0;
    }
    t && Vt(e);
  }
  Mn.clear();
}
function sn(e) {
  T(e, e.v + 1);
}
function yi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var a = r[s], l = a.f, f = (l & ne) === 0;
      if (f && J(a, t), (l & Tn) !== 0)
        Mn.add(
          /** @type {Effect} */
          a
        );
      else if ((l & ae) !== 0) {
        var v = (
          /** @type {Derived} */
          a
        );
        le == null || le.delete(v), (l & bt) === 0 && (l & Ce && (F === null || (F.f & An) === 0) && (a.f |= bt), yi(v, Fe, n));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          a
        );
        (l & De) !== 0 && Ie !== null && Ie.add(d), n !== null ? n.push(d) : wr(d);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Gn in e || ii in e)
    return e;
  const t = ti(e);
  if (t !== os && t !== fs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = $r(e), i = /* @__PURE__ */ G(0), s = yt, a = (l) => {
    if (yt === s)
      return l();
    var f = L, v = yt;
    Re(null), zr(s);
    var d = l();
    return Re(f), zr(v), d;
  };
  return r && n.set("length", /* @__PURE__ */ G(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && As();
        var d = n.get(f);
        return d === void 0 ? a(() => {
          var _ = /* @__PURE__ */ G(v.value);
          return n.set(f, _), _;
        }) : T(d, v.value, !0), !0;
      },
      deleteProperty(l, f) {
        var v = n.get(f);
        if (v === void 0) {
          if (f in l) {
            const d = a(() => /* @__PURE__ */ G(ie));
            n.set(f, d), sn(i);
          }
        } else
          T(v, ie), sn(i);
        return !0;
      },
      get(l, f, v) {
        var h;
        if (f === Gn)
          return e;
        var d = n.get(f), _ = f in l;
        if (d === void 0 && (!_ || (h = nn(l, f)) != null && h.writable) && (d = a(() => {
          var g = Qe(_ ? l[f] : ie), w = /* @__PURE__ */ G(g);
          return w;
        }), n.set(f, d)), d !== void 0) {
          var c = u(d);
          return c === ie ? void 0 : c;
        }
        return Reflect.get(l, f, v);
      },
      getOwnPropertyDescriptor(l, f) {
        var v = Reflect.getOwnPropertyDescriptor(l, f);
        if (v && "value" in v) {
          var d = n.get(f);
          d && (v.value = u(d));
        } else if (v === void 0) {
          var _ = n.get(f), c = _ == null ? void 0 : _.v;
          if (_ !== void 0 && c !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return v;
      },
      has(l, f) {
        var c;
        if (f === Gn)
          return !0;
        var v = n.get(f), d = v !== void 0 && v.v !== ie || Reflect.has(l, f);
        if (v !== void 0 || F !== null && (!d || (c = nn(l, f)) != null && c.writable)) {
          v === void 0 && (v = a(() => {
            var h = d ? Qe(l[f]) : ie, g = /* @__PURE__ */ G(h);
            return g;
          }), n.set(f, v));
          var _ = u(v);
          if (_ === ie)
            return !1;
        }
        return d;
      },
      set(l, f, v, d) {
        var z;
        var _ = n.get(f), c = f in l;
        if (r && f === "length")
          for (var h = v; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? T(g, ie) : h in l && (g = a(() => /* @__PURE__ */ G(ie)), n.set(h + "", g));
          }
        if (_ === void 0)
          (!c || (z = nn(l, f)) != null && z.writable) && (_ = a(() => /* @__PURE__ */ G(void 0)), T(_, Qe(v)), n.set(f, _));
        else {
          c = _.v !== ie;
          var w = a(() => Qe(v));
          T(_, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(l, f);
        if (p != null && p.set && p.set.call(d, v), !c) {
          if (r && typeof f == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), Q = Number(f);
            Number.isInteger(Q) && Q >= x.v && T(x, Q + 1);
          }
          sn(i);
        }
        return !0;
      },
      ownKeys(l) {
        u(i);
        var f = Reflect.ownKeys(l).filter((_) => {
          var c = n.get(_);
          return c === void 0 || c.v !== ie;
        });
        for (var [v, d] of n)
          d.v !== ie && !(v in l) && f.push(v);
        return f;
      },
      setPrototypeOf() {
        Cs();
      }
    }
  );
}
var ir, bi, xi, Ei;
function qs() {
  if (ir === void 0) {
    ir = window, bi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xi = nn(t, "firstChild").get, Ei = nn(t, "nextSibling").get, Fr(e) && (e[er] = void 0, e[yn] = null, e[ps] = void 0, e.__e = void 0), Fr(n) && (n[Xt] = void 0);
  }
}
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return (
    /** @type {TemplateNode | null} */
    xi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return (
    /** @type {TemplateNode | null} */
    Ei.call(e)
  );
}
function X(e, t) {
  return /* @__PURE__ */ St(e);
}
function ot(e, t = !1) {
  {
    var n = /* @__PURE__ */ St(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _n(n) : n;
  }
}
function te(e, t = !1) {
  return /* @__PURE__ */ St(e);
}
function O(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ _n(r);
  return r;
}
function Ys(e) {
  e.textContent = "";
}
function ki() {
  return !1;
}
function Ks(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function Ws(e) {
  var t = F;
  if (t === null)
    return L.f |= lt, e;
  if ((t.f & Gt) === 0 && (t.f & Ht) === 0)
    throw e;
  Ve(e, t);
}
function Ve(e, t) {
  if (!(t !== null && (t.f & be) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Qn) !== 0 && (t.f & (be | $n)) === 0) {
        if ((t.f & Gt) === 0)
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
function Zs(e) {
  F === null && (L === null && Ss(), ks()), ft && Es();
}
function Xs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function tt(e, t) {
  var n = F;
  n !== null && (n.f & ce) !== 0 && (e |= ce);
  var r = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | ne | Ce,
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
  k == null || k.register_created_effect(r);
  var i = r;
  if ((e & Ht) !== 0)
    Rt !== null ? Rt.push(r) : Et.ensure().schedule(r);
  else if (t !== null) {
    try {
      Vt(r);
    } catch (a) {
      throw _e(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & qt) === 0 && (i = i.first, (e & De) !== 0 && (e & jt) !== 0 && i !== null && (i.f |= jt));
  }
  if (i !== null && (i.parent = n, n !== null && Xs(i, n), L !== null && (L.f & ae) !== 0 && (e & et) === 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function yr() {
  return L !== null && !Pe;
}
function Si(e) {
  const t = tt(Dn, null);
  return J(t, se), t.teardown = e, t;
}
function br(e) {
  Zs();
  var t = (
    /** @type {Effect} */
    F.f
  ), n = !L && (t & Me) !== 0 && he !== null && !he.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      he
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ti(e);
}
function Ti(e) {
  return tt(Ht | hs, e);
}
function Js(e) {
  Et.ensure();
  const t = tt(et | qt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? wt(t, () => {
      _e(t), r(void 0);
    }) : (_e(t), r(void 0));
  });
}
function Qs(e) {
  return tt(Ht, e);
}
function $s(e) {
  return tt(It | qt, e);
}
function ea(e, t = 0) {
  return tt(Dn | t, e);
}
function Y(e, t = [], n = [], r = []) {
  Ls(r, t, n, (i) => {
    tt(Dn, () => {
      e(...i.map(u));
    });
  });
}
function Pn(e, t = 0) {
  var n = tt(De | t, e);
  return n;
}
function Ae(e) {
  return tt(Me | qt, e);
}
function Ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ft, r = L;
    jr(!0), Re(null);
    try {
      t.call(null);
    } catch (i) {
      Ve(i, e.parent);
    } finally {
      jr(n), Re(r);
    }
  }
}
function xr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && hn(() => {
      i.abort(dn);
    });
    var r = n.next;
    (n.f & et) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function ta(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Me) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & ds) !== 0) && e.nodes !== null && e.nodes.end !== null && (na(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= $n, xr(e, t && !n), an(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ai(e), e.f ^= $n, e.f |= be;
  var i = e.parent;
  i !== null && i.first !== null && Ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function na(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ _n(e);
    e.remove(), e = n;
  }
}
function Ci(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function wt(e, t, n = !0) {
  var r = [];
  e.f |= hr, Mi(e, r, !0);
  var i = () => {
    n && _e(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of r)
      l.out(a);
  } else
    i();
}
function Mi(e, t, n) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & et) === 0) {
        var a = (i.f & jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Me) !== 0 && (e.f & De) !== 0;
        Mi(i, t, a ? n : !1);
      }
      i = s;
    }
  }
}
function Rn(e) {
  e.f &= ~hr, Ri(e, !0);
}
function Ri(e, t) {
  if ((e.f & hr) === 0 && (e.f & ce) !== 0) {
    e.f ^= ce, (e.f & se) === 0 && (J(e, ne), Et.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & jt) !== 0 || (n.f & Me) !== 0;
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
      var i = n === r ? null : /* @__PURE__ */ _n(n);
      t.append(n), n = i;
    }
}
let xn = !1, ft = !1;
function jr(e) {
  ft = e;
}
let L = null, Pe = !1;
function Re(e) {
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
let de = null, ye = 0, ke = null;
function ra(e) {
  ke = e;
}
let Ni = 1, vt = 0, yt = vt;
function zr(e) {
  yt = e;
}
function Oi() {
  return ++Ni;
}
function pn(e) {
  var t = e.f;
  if ((t & ne) !== 0)
    return !0;
  if (t & ae && (e.f &= ~bt), (t & Fe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (pn(
        /** @type {Derived} */
        s
      ) && vi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && J(e, se);
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
      ) : t === s && (n ? J(s, ne) : (s.f & se) !== 0 && J(s, Fe), wr(
        /** @type {Effect} */
        s
      ));
    }
}
function Di(e) {
  var t = de, n = ye, r = ke, i = L, s = Ye, a = he, l = Pe, f = yt, v = e.f;
  de = /** @type {null | Value[]} */
  null, ye = 0, ke = null, L = (v & (Me | et)) === 0 ? e : null, Ye = null, zt(e.ctx), Pe = !1, yt = ++vt, e.ac !== null && (hn(() => {
    e.ac.abort(dn);
  }), e.ac = null);
  try {
    e.f |= An;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= Gt;
    var c = Br(e);
    if (oi() && ke !== null && !Pe && c !== null && (e.f & (ae | Fe | ne)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      ke.length; h++)
        Li(
          ke[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (vt++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = vt;
      if (t !== null)
        for (const g of t)
          g.rv = vt;
      ke !== null && (r === null ? r = ke : r.push(.../** @type {Source[]} */
      ke));
    }
    return (e.f & lt) !== 0 && (e.f ^= lt), _;
  } catch (g) {
    return Br(e), Ws(g);
  } finally {
    e.f ^= An, de = t, ye = n, ke = r, L = i, Ye = s, zt(a), Pe = l, yt = f;
  }
}
function Br(e) {
  var i;
  var t = e.deps, n = k == null ? void 0 : k.is_fork;
  if (de !== null) {
    var r;
    if (n || an(e, ye), t !== null && ye > 0)
      for (t.length = ye + de.length, r = 0; r < de.length; r++)
        t[ye + r] = de[r];
    else
      e.deps = t = de;
    if (yr() && (e.f & Ce) !== 0)
      for (r = ye; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && ye < t.length && (an(e, ye), t.length = ye);
  return t;
}
function ia(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = as.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (de === null || !Sn.call(de, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ce) !== 0 && (s.f ^= Ce, s.f &= ~bt), s.v !== ie && _r(s), s.ac !== null && hn(() => {
      s.ac.abort(dn), s.ac = null, J(s, ne);
    }), Hs(s), an(s, 0);
  }
}
function an(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ia(e, n[r]);
}
function Vt(e) {
  var t = e.f;
  if ((t & be) === 0) {
    J(e, se);
    var n = F, r = xn;
    F = e, xn = (t & (Me | et)) === 0;
    try {
      (t & (De | ri)) !== 0 ? ta(e) : xr(e), Ai(e);
      var i = Di(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ni;
      var s;
      Qr && Is && (e.f & ne) !== 0 && e.deps;
    } finally {
      xn = r, F = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & ae) !== 0;
  if (L !== null && !Pe) {
    var r = F !== null && (F.f & be) !== 0;
    if (!r && (Ye === null || !Ye.has(e))) {
      var i = L.deps;
      if ((L.f & An) !== 0)
        e.rv < vt && (e.rv = vt, de === null && i !== null && i[ye] === e ? ye++ : de === null ? de = [e] : de.push(e));
      else {
        L.deps ?? (L.deps = []), Sn.call(L.deps, e) || L.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : Sn.call(s, L) || s.push(L);
      }
    }
  }
  if (ft && qe.has(e))
    return qe.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (ft) {
      var l = a.v;
      return ((a.f & se) === 0 && a.reactions !== null || Fi(a)) && (l = gr(a)), qe.set(a, l), l;
    }
    var f = (a.f & Ce) === 0 && !Pe && L !== null && (xn || (L.f & Ce) !== 0), v = (a.f & Gt) === 0;
    pn(a) && (f && (a.f |= Ce), vi(a)), f && !v && (di(a), Pi(a));
  }
  if (le != null && le.has(e))
    return le.get(e);
  if ((e.f & lt) !== 0)
    throw e.v;
  return e.v;
}
function Pi(e) {
  if (e.f |= Ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & Ce) === 0 && (di(
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
  var t = Pe;
  try {
    return Pe = !0, e();
  } finally {
    Pe = t;
  }
}
const dt = Symbol("events"), Ui = /* @__PURE__ */ new Set(), sr = /* @__PURE__ */ new Set();
function sa(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || ar.call(t, s), !s.cancelBubble)
      return hn(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Je(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Hi(e, t, n, r, i) {
  var s = { capture: r, passive: i }, a = sa(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, a, s);
  });
}
function Le(e, t, n) {
  (t[dt] ?? (t[dt] = {}))[e] = n;
}
function Sr(e) {
  for (var t = 0; t < e.length; t++)
    Ui.add(e[t]);
  for (var n of sr)
    n(e);
}
let Kn = null, Wn = !1;
function ar(e) {
  var w, p;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Kn = e, Wn || (Wn = !0, setTimeout(() => {
    Wn = !1, Kn = null;
  }));
  var a = 0, l = Kn === e && e[dt];
  if (l) {
    var f = i.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[dt] = t;
      return;
    }
    var v = i.indexOf(t);
    if (v === -1)
      return;
    f <= v && (a = f);
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
    Re(null), Ke(null);
    try {
      for (var c, h = []; s !== null && s !== t; ) {
        try {
          var g = (p = s[dt]) == null ? void 0 : p[r];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && g.call(s, e);
        } catch (x) {
          c ? h.push(x) : c = x;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (c) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw c;
      }
    } finally {
      e[dt] = t, delete e.currentTarget, Re(d), Ke(_);
    }
  }
}
var Xr;
const Zn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Xr = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Xr.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function aa(e) {
  return (
    /** @type {string} */
    (Zn == null ? void 0 : Zn.createHTML(e)) ?? e
  );
}
function ji(e) {
  var t = Ks("template");
  return t.innerHTML = aa(e.replaceAll("<!>", "<!---->")), t.content;
}
function ln(e, t) {
  var n = (
    /** @type {Effect} */
    F
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ji(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ St(i)));
    var a = (
      /** @type {TemplateNode} */
      r || bi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ St(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ln(l, f);
    } else
      ln(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function la(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ji(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ St(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ St(l);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return ln(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
  return /* @__PURE__ */ la(e, t, "svg");
}
function Xn(e = "") {
  {
    var t = $e(e + "");
    return ln(t, t), t;
  }
}
function Fn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = $e();
  return e.append(t, n), ln(t, n), e;
}
function S(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const fa = ["touchstart", "touchmove"];
function ua(e) {
  return fa.includes(e);
}
function ca(e) {
  let t = 0, n = kt(0), r;
  return () => {
    yr() && (u(n), ea(() => (t === 0 && (r = kr(() => e(() => sn(n)))), t += 1, () => {
      Je(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, sn(n));
      });
    })));
  };
}
var va = jt | qt;
function da(e, t, n, r) {
  new ha(e, t, n, r);
}
var Se, dr, Te, pt, fe, ge, ue, me, je, gt, st, Ut, fn, un, Xe, Nn, q, _a, pa, lr, ga, or, en, En, fr, ur;
class ha {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    R(this, q);
    /** @type {Boundary | null} */
    pe(this, "parent");
    pe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    pe(this, "transform_error");
    /** @type {TemplateNode} */
    R(this, Se);
    /** @type {TemplateNode | null} */
    R(this, dr, null);
    /** @type {BoundaryProps} */
    R(this, Te);
    /** @type {((anchor: Node) => void)} */
    R(this, pt);
    /** @type {Effect} */
    R(this, fe);
    /** @type {Effect | null} */
    R(this, ge, null);
    /** @type {Effect | null} */
    R(this, ue, null);
    /** @type {Effect | null} */
    R(this, me, null);
    /** @type {DocumentFragment | null} */
    R(this, je, null);
    R(this, gt, 0);
    R(this, st, 0);
    R(this, Ut, !1);
    /** @type {Set<Effect>} */
    R(this, fn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, un, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, Xe, null);
    R(this, Nn, ca(() => (E(this, Xe, kt(o(this, gt))), () => {
      E(this, Xe, null);
    })));
    var s;
    E(this, Se, t), E(this, Te, n), E(this, pt, (a) => {
      var l = (
        /** @type {Effect} */
        F
      );
      l.b = this, l.f |= Qn, r(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), E(this, fe, Pn(() => {
      D(this, q, or).call(this);
    }, va));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ui(t, o(this, fn), o(this, un));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, Te).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    D(this, q, fr).call(this, t, n), E(this, gt, o(this, gt) + t), !(!o(this, Xe) || o(this, Ut)) && (E(this, Ut, !0), Je(() => {
      E(this, Ut, !1), o(this, Xe) && Bt(o(this, Xe), o(this, gt));
    }));
  }
  get_effect_pending() {
    return o(this, Nn).call(this), u(
      /** @type {Source<number>} */
      o(this, Xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Te).onerror && !o(this, Te).failed)
      throw t;
    k != null && k.is_fork ? (o(this, ge) && k.skip_effect(o(this, ge)), o(this, ue) && k.skip_effect(o(this, ue)), o(this, me) && k.skip_effect(o(this, me)), k.oncommit(() => {
      D(this, q, ur).call(this, t);
    })) : D(this, q, ur).call(this, t);
  }
}
Se = new WeakMap(), dr = new WeakMap(), Te = new WeakMap(), pt = new WeakMap(), fe = new WeakMap(), ge = new WeakMap(), ue = new WeakMap(), me = new WeakMap(), je = new WeakMap(), gt = new WeakMap(), st = new WeakMap(), Ut = new WeakMap(), fn = new WeakMap(), un = new WeakMap(), Xe = new WeakMap(), Nn = new WeakMap(), q = new WeakSet(), _a = function() {
  try {
    E(this, ge, Ae(() => o(this, pt).call(this, o(this, Se))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
pa = function(t) {
  const n = o(this, Te).failed, { reset: r, invoke_onerror: i } = D(this, q, lr).call(this, t);
  Je(i), n && E(this, me, Ae(() => {
    n(
      o(this, Se),
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
      ws();
      return;
    }
    n = !0, r && Rs(), o(this, me) !== null && wt(o(this, me), () => {
      E(this, me, null);
    }), D(this, q, En).call(this, () => {
      D(this, q, or).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var a, l;
    try {
      r = !0, (l = (a = o(this, Te)).onerror) == null || l.call(a, t, i), r = !1;
    } catch (f) {
      Ve(f, o(this, fe) && o(this, fe).parent);
    }
  } };
}, ga = function() {
  const t = o(this, Te).pending;
  t && (this.is_pending = !0, E(this, ue, Ae(() => t(o(this, Se)))), Je(() => {
    var n = E(this, je, document.createDocumentFragment()), r = $e(), i = !1;
    if (n.append(r), E(this, ge, D(this, q, En).call(this, () => {
      try {
        return Ae(() => o(this, pt).call(this, r));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (a) {
          Ve(a, o(this, fe).parent);
        }
        return null;
      }
    })), o(this, ge) === null) {
      E(this, je, null), i && D(this, q, en).call(
        this,
        /** @type {Batch} */
        k
      );
      return;
    }
    o(this, st) === 0 && (o(this, Se).before(n), E(this, je, null), wt(
      /** @type {Effect} */
      o(this, ue),
      () => {
        E(this, ue, null);
      }
    ), D(this, q, en).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, or = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, st, 0), E(this, gt, 0), E(this, ge, Ae(() => {
      o(this, pt).call(this, o(this, Se));
    })), o(this, st) > 0) {
      var t = E(this, je, document.createDocumentFragment());
      Er(o(this, ge), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        o(this, Te).pending
      );
      E(this, ue, Ae(() => n(o(this, Se))));
    } else
      D(this, q, en).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
en = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, fn), o(this, un));
}, /**
 * @template T
 * @param {() => T} fn
 */
En = function(t) {
  var n = F, r = L, i = he;
  Ke(o(this, fe)), Re(o(this, fe)), zt(o(this, fe).ctx);
  try {
    return Et.ensure(), t();
  } finally {
    Ke(n), Re(r), zt(i);
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
    this.parent && D(r = this.parent, q, fr).call(r, t, n);
    return;
  }
  E(this, st, o(this, st) + t), o(this, st) === 0 && (D(this, q, en).call(this, n), o(this, ue) && wt(o(this, ue), () => {
    E(this, ue, null);
  }), o(this, je) && (o(this, Se).before(o(this, je)), E(this, je, null)));
}, /**
 * @param {unknown} error
 */
ur = function(t) {
  o(this, ge) && (_e(o(this, ge)), E(this, ge, null)), o(this, ue) && (_e(o(this, ue)), E(this, ue, null)), o(this, me) && (_e(o(this, me)), E(this, me, null));
  let n = o(this, Te).failed;
  const r = (i) => {
    const { reset: s, invoke_onerror: a } = D(this, q, lr).call(this, i);
    a(), n && E(this, me, D(this, q, En).call(this, () => {
      try {
        return Ae(() => {
          var l = (
            /** @type {Effect} */
            F
          );
          l.b = this, l.f |= Qn, n(
            o(this, Se),
            () => i,
            () => s
          );
        });
      } catch (l) {
        return Ve(
          l,
          /** @type {Effect} */
          o(this, fe).parent
        ), null;
      }
    }));
  };
  Je(() => {
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
function W(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Xt] ?? (e[Xt] = e.nodeValue)) && (e[Xt] = n, e.nodeValue = `${n}`);
}
function ma(e, t) {
  return wa(e, t);
}
const wn = /* @__PURE__ */ new Map();
function wa(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  qs();
  var f = void 0, v = Js(() => {
    var d = n ?? t.appendChild($e());
    da(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Yt({});
        var g = (
          /** @type {ComponentContext} */
          he
        );
        s && (g.c = s), i && (r.$$events = i), f = e(h, r) || li(), Kt();
      },
      l
    );
    var _ = /* @__PURE__ */ new Set(), c = (h) => {
      for (var g = 0; g < h.length; g++) {
        var w = h[g];
        if (!_.has(w)) {
          _.add(w);
          var p = ua(w);
          for (const z of [t, document]) {
            var x = wn.get(z);
            x === void 0 && (x = /* @__PURE__ */ new Map(), wn.set(z, x));
            var Q = x.get(w);
            Q === void 0 ? (z.addEventListener(w, ar, { passive: p }), x.set(w, 1)) : x.set(w, Q + 1);
          }
        }
      }
    };
    return c(Ln(Ui)), sr.add(c), () => {
      var p;
      for (var h of _)
        for (const x of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            wn.get(x)
          ), w = (
            /** @type {number} */
            g.get(h)
          );
          --w == 0 ? (x.removeEventListener(h, ar), g.delete(h), g.size === 0 && wn.delete(x)) : g.set(h, w);
        }
      sr.delete(c), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return cr.set(f, v), f;
}
let cr = /* @__PURE__ */ new WeakMap();
function ya(e, t) {
  const n = cr.get(e);
  return n ? (cr.delete(e), n(t)) : Promise.resolve();
}
var Oe, ze, we, mt, cn, vn, On;
class zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, Oe, /* @__PURE__ */ new Map());
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
    R(this, we, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, mt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, cn, !0);
    /**
     * @param {Batch} batch
     */
    R(this, vn, (t) => {
      if (o(this, Oe).has(t)) {
        var n = (
          /** @type {Key} */
          o(this, Oe).get(t)
        ), r = o(this, ze).get(n);
        if (r)
          Rn(r), o(this, mt).delete(n);
        else {
          var i = o(this, we).get(n);
          i && (Rn(i.effect), o(this, ze).set(n, i.effect), o(this, we).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of o(this, Oe)) {
          if (o(this, Oe).delete(s), s === t)
            break;
          const l = o(this, we).get(a);
          l && (_e(l.effect), o(this, we).delete(a));
        }
        for (const [s, a] of o(this, ze)) {
          if (s === n || o(this, mt).has(s)) continue;
          const l = () => {
            if (Array.from(o(this, Oe).values()).includes(s)) {
              var v = document.createDocumentFragment();
              Er(a, v), v.append($e()), o(this, we).set(s, { effect: a, fragment: v });
            } else
              _e(a);
            o(this, mt).delete(s), o(this, ze).delete(s);
          };
          o(this, cn) || !r ? (o(this, mt).add(s), wt(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, On, (t) => {
      o(this, Oe).delete(t);
      const n = Array.from(o(this, Oe).values());
      for (const [r, i] of o(this, we))
        n.includes(r) || (_e(i.effect), o(this, we).delete(r));
    });
    this.anchor = t, E(this, cn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      k
    ), i = ki();
    if (n && !o(this, ze).has(t) && !o(this, we).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = $e();
        s.append(a), o(this, we).set(t, {
          effect: Ae(() => n(a)),
          fragment: s
        });
      } else
        o(this, ze).set(
          t,
          Ae(() => n(this.anchor))
        );
    if (o(this, Oe).set(r, t), i) {
      for (const [l, f] of o(this, ze))
        l === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [l, f] of o(this, we))
        l === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(o(this, vn)), r.ondiscard(o(this, On));
    } else
      o(this, vn).call(this, r);
  }
}
Oe = new WeakMap(), ze = new WeakMap(), we = new WeakMap(), mt = new WeakMap(), cn = new WeakMap(), vn = new WeakMap(), On = new WeakMap();
function K(e, t, n = !1) {
  var r = new zi(e), i = n ? jt : 0;
  function s(a, l) {
    r.ensure(a, l);
  }
  Pn(() => {
    var a = !1;
    t((l, f = 0) => {
      a = !0, s(f, l);
    }), a || s(-1, null);
  }, i);
}
const ba = Symbol("NaN");
function xa(e, t, n) {
  var r = new zi(e);
  Pn(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    ba), r.ensure(i, n);
  });
}
function Bi(e, t) {
  return t;
}
function Ea(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let _ = t[l];
    wt(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vr(e, Ln(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var f = r.length === 0 && n !== null && e.pending.size === 0;
    if (f) {
      var v = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        v.parentNode
      );
      Ys(d), d.append(v), e.items.clear();
    }
    vr(e, t, !f);
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
      for (const l of a)
        r.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r != null && r.has(s)) {
      s.f |= Ge;
      const a = document.createDocumentFragment();
      Er(s, a);
    } else
      _e(t[i], n);
  }
}
var Vr;
function at(e, t, n, r, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map(), f = (t & 4) !== 0;
  if (f) {
    var v = (
      /** @type {Element} */
      e
    );
    a = v.appendChild($e());
  }
  var d = null, _ = /* @__PURE__ */ Fs(() => {
    var z = n();
    return (
      /** @type {V[]} */
      $r(z) ? z : z == null ? [] : Ln(z)
    );
  }), c, h = /* @__PURE__ */ new Map(), g = !0;
  function w(z) {
    (Q.effect.f & be) === 0 && (Q.pending.delete(z), Q.fallback = d, ka(Q, c, a, t, r), d !== null && (c.length === 0 ? (d.f & Ge) === 0 ? Rn(d) : (d.f ^= Ge, tn(d, null, a)) : wt(d, () => {
      d = null;
    })));
  }
  function p(z) {
    Q.pending.delete(z);
  }
  var x = Pn(() => {
    c = /** @type {V[]} */
    u(_);
    for (var z = c.length, $ = /* @__PURE__ */ new Set(), A = (
      /** @type {Batch} */
      k
    ), I = ki(), U = 0; U < z; U += 1) {
      var m = c[U], C = r(m, U), H = g ? null : l.get(C);
      H ? (H.v && Bt(H.v, m), H.i && Bt(H.i, U), I && A.unskip_effect(H.e)) : (H = Sa(
        l,
        g ? a : Vr ?? (Vr = $e()),
        m,
        C,
        U,
        i,
        t,
        n
      ), g || (H.e.f |= Ge), l.set(C, H)), $.add(C);
    }
    if (z === 0 && s && !d && (g ? d = Ae(() => s(a)) : (d = Ae(() => s(Vr ?? (Vr = $e()))), d.f |= Ge)), z > $.size && xs(), !g)
      if (h.set(A, $), I) {
        for (const [re, oe] of l)
          $.has(re) || A.skip_effect(oe.e);
        A.oncommit(w), A.ondiscard(p);
      } else
        w(A);
    u(_);
  }), Q = { effect: x, items: l, pending: h, outrogroups: null, fallback: d };
  g = !1;
}
function Zt(e) {
  for (; e !== null && (e.f & Me) === 0; )
    e = e.next;
  return e;
}
function ka(e, t, n, r, i) {
  var H, re, oe, xe, b, M, P, Z, Ee;
  var s = (r & 8) !== 0, a = t.length, l = e.items, f = Zt(e.effect.first), v, d = null, _, c = [], h = [], g, w, p, x;
  if (s)
    for (x = 0; x < a; x += 1)
      g = t[x], w = i(g, x), p = /** @type {EachItem} */
      l.get(w).e, (p.f & Ge) === 0 && ((re = (H = p.nodes) == null ? void 0 : H.a) == null || re.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (x = 0; x < a; x += 1) {
    if (g = t[x], w = i(g, x), p = /** @type {EachItem} */
    l.get(w).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(p), ee.done.delete(p);
    if ((p.f & ce) !== 0 && (Rn(p), s && ((xe = (oe = p.nodes) == null ? void 0 : oe.a) == null || xe.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), (p.f & Ge) !== 0)
      if (p.f ^= Ge, p === f)
        tn(p, null, n);
      else {
        var Q = d ? d.next : f;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), rt(e, d, p), rt(e, p, Q), tn(p, Q, n), d = p, c = [], h = [], f = Zt(d.next);
        continue;
      }
    if (p !== f) {
      if (v !== void 0 && v.has(p)) {
        if (c.length < h.length) {
          var z = h[0], $;
          d = z.prev;
          var A = c[0], I = c[c.length - 1];
          for ($ = 0; $ < c.length; $ += 1)
            tn(c[$], z, n);
          for ($ = 0; $ < h.length; $ += 1)
            v.delete(h[$]);
          rt(e, A.prev, I.next), rt(e, d, A), rt(e, I, z), f = z, d = I, x -= 1, c = [], h = [];
        } else
          v.delete(p), tn(p, f, n), rt(e, p.prev, p.next), rt(e, p, d === null ? e.effect.first : d.next), rt(e, d, p), d = p;
        continue;
      }
      for (c = [], h = []; f !== null && f !== p; )
        (v ?? (v = /* @__PURE__ */ new Set())).add(f), h.push(f), f = Zt(f.next);
      if (f === null)
        continue;
    }
    (p.f & Ge) === 0 && c.push(p), d = p, f = Zt(p.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (vr(e, Ln(ee.done)), (b = e.outrogroups) == null || b.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || v !== void 0) {
    var U = [];
    if (v !== void 0)
      for (p of v)
        (p.f & ce) === 0 && U.push(p);
    for (; f !== null; )
      (f.f & ce) === 0 && f !== e.fallback && U.push(f), f = Zt(f.next);
    var m = U.length;
    if (m > 0) {
      var C = (r & 4) !== 0 && a === 0 ? n : null;
      if (s) {
        for (x = 0; x < m; x += 1)
          (P = (M = U[x].nodes) == null ? void 0 : M.a) == null || P.measure();
        for (x = 0; x < m; x += 1)
          (Ee = (Z = U[x].nodes) == null ? void 0 : Z.a) == null || Ee.fix();
      }
      Ea(e, U, C);
    }
  }
  s && Je(() => {
    var ee, Tt;
    if (_ !== void 0)
      for (p of _)
        (Tt = (ee = p.nodes) == null ? void 0 : ee.a) == null || Tt.apply();
  });
}
function Sa(e, t, n, r, i, s, a, l) {
  var f = (a & 1) !== 0 ? (a & 16) === 0 ? /* @__PURE__ */ Vs(n, !1, !1) : kt(n) : null, v = (a & 2) !== 0 ? kt(i) : null;
  return {
    v: f,
    i: v,
    e: Ae(() => (s(t, f ?? n, v ?? i, l), () => {
      e.delete(r);
    }))
  };
}
function tn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ge) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _n(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function rt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ta(e, t, n) {
  Qs(() => {
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
function Aa(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || Gr.includes(r[a - 1])) && (l === r.length || Gr.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
        }
  }
  return r === "" ? null : r;
}
function Jn(e, t, n, r, i, s) {
  var a = (
    /** @type {any} */
    e[er]
  );
  if (a !== n || a === void 0) {
    var l = Aa(n, r, s);
    l == null ? e.removeAttribute("class") : e.className = l, e[er] = n;
  } else if (s && i !== s)
    for (var f in s) {
      var v = !!s[f];
      (i == null || v !== !!i[f]) && e.classList.toggle(f, v);
    }
  return s;
}
const Ca = Symbol("is custom element"), Ma = Symbol("is html"), Ra = gs ? "progress" : "PROGRESS";
function Ia(e, t) {
  var n = Vi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ra) || (e.value = t ?? "");
}
function Be(e, t, n, r) {
  var i = Vi(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[_s] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Na(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[yn] ?? (e[yn] = {
      [Ca]: e.nodeName.includes("-"),
      [Ma]: e.namespaceURI === ss
    })
  );
}
var qr = /* @__PURE__ */ new Map();
function Na(e) {
  var t = e.getAttribute("is") || e.nodeName, n = qr.get(t);
  if (n) return n;
  qr.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = ls(i);
    for (var a in r)
      r[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && n.add(a);
    i = ti(i);
  }
  return n;
}
function kn(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  r), i), l;
  l = /** @type {V} */
  e[t], l === void 0 && r !== void 0 && (l = a());
  var f;
  return f = () => {
    var v = (
      /** @type {V} */
      e[t]
    );
    return v === void 0 ? a() : (s = !0, v);
  }, f;
}
const Oa = "5";
var Jr;
typeof window < "u" && ((Jr = window.__svelte ?? (window.__svelte = {})).v ?? (Jr.v = /* @__PURE__ */ new Set())).add(Oa);
let Un = "";
function La(e) {
  Un = e;
}
async function gn(e, t) {
  const n = new URL(`${Un}${e}`, window.location.origin);
  for (const [r, i] of Object.entries(t ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const Da = (e) => gn("/accounts", e), Pa = (e) => gn(`/accounts/${encodeURIComponent(e)}`), Fa = (e, t, n) => gn(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), Ua = (e, t, n) => gn(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), Ha = (e, t) => gn(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), ja = (e, t, n) => `${Un}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, Yr = (e, t, n = 0) => `${Un}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var za = /* @__PURE__ */ j('<img loading="lazy"/>'), Ba = /* @__PURE__ */ j('<span class="ofx-initials"> </span>');
function Tr(e, t) {
  Yt(t, !0);
  let n = kn(t, "src", 3, null), r = kn(t, "alt", 3, ""), i = kn(t, "name", 3, ""), s = /* @__PURE__ */ G(!1);
  const a = /* @__PURE__ */ xt(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var c;
    return ((c = _[0]) == null ? void 0 : c.toUpperCase()) ?? "";
  }).join(""));
  var l = Fn(), f = ot(l);
  {
    var v = (_) => {
      var c = za();
      Y(() => {
        Be(c, "src", n()), Be(c, "alt", r());
      }), Hi("error", c, () => T(s, !0)), S(_, c);
    }, d = (_) => {
      var c = Ba(), h = te(c, !0);
      Y(() => W(h, u(a))), S(_, c);
    };
    K(f, (_) => {
      n() && !u(s) ? _(v) : _(d, -1);
    });
  }
  S(e, l), Kt();
}
var Va = /* @__PURE__ */ j(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Ga = /* @__PURE__ */ j('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>'), qa = /* @__PURE__ */ j('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Ya = /* @__PURE__ */ j('<div class="ofx-sentinel"></div>'), Ka = /* @__PURE__ */ j('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <div class="ofx-grid"><!> <!></div> <!>', 1);
function Wa(e, t) {
  Yt(t, !0);
  const n = 60;
  let r = /* @__PURE__ */ G(Qe([])), i = /* @__PURE__ */ G(0), s = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1), l = /* @__PURE__ */ G(""), f = /* @__PURE__ */ G(""), v;
  const d = /* @__PURE__ */ xt(() => u(r).length < u(i));
  async function _(b, M) {
    T(s, !0);
    const P = await Da({ search: b, limit: n, offset: M });
    if (b !== u(l)) {
      T(s, !1);
      return;
    }
    P ? (T(r, M === 0 ? P.items : [...u(r), ...P.items], !0), T(i, P.total, !0), T(f, b, !0), T(a, !1)) : T(a, !0), T(s, !1);
  }
  br(() => {
    _("", 0);
  });
  function c(b) {
    T(l, b.currentTarget.value, !0), clearTimeout(v), v = setTimeout(() => _(u(l), 0), 250);
  }
  function h(b) {
    const M = new IntersectionObserver(
      (P) => {
        var Z;
        (Z = P[0]) != null && Z.isIntersecting && u(d) && !u(s) && _(u(f), u(r).length);
      },
      { rootMargin: "600px" }
    );
    return M.observe(b), { destroy: () => M.disconnect() };
  }
  var g = Ka(), w = O(ot(g), 2), p = X(w);
  {
    var x = (b) => {
      var M = Xn();
      Y(
        (P, Z) => W(M, `${P ?? ""} of ${Z ?? ""}
        ${u(f) ? `matching “${u(f)}”` : "accounts"}`),
        [
          () => u(r).length.toLocaleString(),
          () => u(i).toLocaleString()
        ]
      ), S(b, M);
    }, Q = (b) => {
      var M = Xn("loading…");
      S(b, M);
    }, z = (b) => {
      var M = Xn("no accounts indexed yet");
      S(b, M);
    };
    K(p, (b) => {
      u(i) ? b(x) : u(s) ? b(Q, 1) : b(z, -1);
    });
  }
  var $ = O(w, 2), A = O(X($), 2), I = O($, 2);
  {
    var U = (b) => {
      var M = Va();
      S(b, M);
    };
    K(I, (b) => {
      u(a) && b(U);
    });
  }
  var m = O(I, 2), C = X(m);
  at(C, 17, () => u(r), (b) => b.handle, (b, M) => {
    var P = Ga(), Z = X(P), Ee = X(Z);
    Tr(Ee, {
      get src() {
        return u(M).avatar_url;
      },
      get alt() {
        return u(M).display_name;
      },
      get name() {
        return u(M).display_name;
      }
    });
    var ee = O(Z, 2), Tt = te(ee, !0), Hn = O(ee, 2), mn = te(Hn);
    Y(() => {
      Be(P, "href", `/x/onlyfans/${u(M).handle ?? ""}`), Be(ee, "title", u(M).display_name), W(Tt, u(M).display_name), W(mn, `${u(M).source_count ?? ""}
                ${u(M).source_count === 1 ? "site" : "sites"}`);
    }), Le("click", P, (ut) => {
      ut.metaKey || ut.ctrlKey || ut.shiftKey || ut.button !== 0 || (ut.preventDefault(), t.navigate(`/x/onlyfans/${u(M).handle}`));
    }), S(b, P);
  });
  var H = O(C, 2);
  {
    var re = (b) => {
      var M = Fn(), P = ot(M);
      at(P, 16, () => Array(12), Bi, (Z, Ee) => {
        var ee = qa();
        S(Z, ee);
      }), S(b, M);
    };
    K(H, (b) => {
      u(s) && b(re);
    });
  }
  var oe = O(m, 2);
  {
    var xe = (b) => {
      var M = Ya();
      Ta(M, (P) => h == null ? void 0 : h(P)), S(b, M);
    };
    K(oe, (b) => {
      u(d) && b(xe);
    });
  }
  Y(() => Ia(A, u(l))), Le("input", A, c), S(e, g), Kt();
}
Sr(["input", "click"]);
var Za = /* @__PURE__ */ j('<p class="ofx-error"> </p>'), Xa = /* @__PURE__ */ j('<p class="ofx-note"> </p>'), Kr = /* @__PURE__ */ j('<span class="ofx-badge"> </span>'), Ja = /* @__PURE__ */ j('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), Qa = /* @__PURE__ */ j('<div class="ofx-skeleton"></div>'), $a = /* @__PURE__ */ j('<button class="ofx-btn ofx-outline" type="button"> </button>'), el = /* @__PURE__ */ j('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function tl(e, t) {
  Yt(t, !0);
  let n = /* @__PURE__ */ G(Qe([])), r = /* @__PURE__ */ G(0), i = /* @__PURE__ */ G(!1), s = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1);
  async function l() {
    if (u(i) || u(s)) return;
    T(i, !0);
    const A = u(r) + 1, U = await (t.mode === "images" ? Ua : Fa)(t.handle, t.site, A);
    U === null ? T(a, !0) : (T(n, [...u(n), ...U], !0), T(r, A), U.length === 0 && T(s, !0)), T(i, !1);
  }
  br(() => {
    t.mode, t.handle, t.site, kr(() => {
      T(n, [], !0), T(r, 0), T(s, !1), T(a, !1), T(i, !1), l();
    });
  });
  function f(A) {
    return A ? `${Math.floor(A / 60)}:${String(A % 60).padStart(2, "0")}` : null;
  }
  var v = el(), d = X(v), _ = te(d, !0), c = O(d, 2);
  {
    var h = (A) => {
      var I = Za(), U = te(I);
      Y(() => W(U, `${t.site ?? ""} did not answer.`)), S(A, I);
    }, g = (A) => {
      var I = Xa(), U = te(I);
      Y(() => W(U, `Nothing here on ${t.site ?? ""}.`)), S(A, I);
    };
    K(c, (A) => {
      u(a) ? A(h) : !u(i) && u(n).length === 0 && A(g, 1);
    });
  }
  var w = O(c, 2), p = X(w);
  at(p, 17, () => u(n), (A) => A.video_id ?? A.gallery_id, (A, I) => {
    var U = Ja(), m = X(U), C = X(m);
    {
      let P = /* @__PURE__ */ xt(() => t.mode === "images" ? u(I).cover : u(I).thumbnail);
      Tr(C, {
        get src() {
          return u(P);
        },
        get alt() {
          return u(I).title;
        },
        get name() {
          return u(I).title;
        }
      });
    }
    var H = O(C, 2);
    {
      var re = (P) => {
        var Z = Kr(), Ee = te(Z, !0);
        Y(() => W(Ee, u(I).image_count)), S(P, Z);
      }, oe = (P) => {
        var Z = Kr(), Ee = te(Z, !0);
        Y((ee) => W(Ee, ee), [() => f(u(I).duration)]), S(P, Z);
      }, xe = /* @__PURE__ */ xt(() => f(u(I).duration));
      K(H, (P) => {
        t.mode === "images" && u(I).image_count ? P(re) : u(xe) && P(oe, 1);
      });
    }
    var b = O(m, 2), M = te(b, !0);
    Y(() => W(M, u(I).title)), Le("click", U, () => t.mode === "images" ? t.ongallery(u(I)) : t.onplay(u(I))), S(A, U);
  });
  var x = O(p, 2);
  {
    var Q = (A) => {
      var I = Fn(), U = ot(I);
      at(U, 16, () => Array(4), Bi, (m, C) => {
        var H = Qa();
        S(m, H);
      }), S(A, I);
    };
    K(x, (A) => {
      u(i) && A(Q);
    });
  }
  var z = O(w, 2);
  {
    var $ = (A) => {
      var I = $a(), U = te(I, !0);
      Y(() => {
        I.disabled = u(i), W(U, u(i) ? "Loading…" : "Load more");
      }), Le("click", I, l), S(A, I);
    };
    K(z, (A) => {
      !u(s) && !u(a) && u(n).length > 0 && A($);
    });
  }
  Y(() => W(_, t.site)), S(e, v), Kt();
}
Sr(["click"]);
var nl = /* @__PURE__ */ j('<p class="ofx-error">That account could not be loaded.</p>'), rl = /* @__PURE__ */ j('<div class="ofx-banner"><img alt=""/></div>'), il = /* @__PURE__ */ oa('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), sl = /* @__PURE__ */ j('<p class="ofx-bio"> </p>'), al = /* @__PURE__ */ j("<span><b> </b> </span>"), ll = /* @__PURE__ */ j('<div class="ofx-stats"></div>'), ol = /* @__PURE__ */ j("<span> </span>"), Wr = /* @__PURE__ */ j('<a target="_blank" rel="noreferrer noopener"> </a>'), fl = /* @__PURE__ */ j('<button type="button"> </button>'), ul = /* @__PURE__ */ j('<span class="ofx-count"> </span>'), cl = /* @__PURE__ */ j('<button type="button"> <!></button>'), vl = /* @__PURE__ */ j('<p class="ofx-error"> </p>'), dl = /* @__PURE__ */ j(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), hl = /* @__PURE__ */ j('<header class="ofx-header"><!> <div><div class="ofx-avatar"><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div></header> <div class="ofx-controls"><div class="ofx-toggle"></div> <span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!>', 1), _l = /* @__PURE__ */ j('<p class="ofx-note">Loading…</p>'), pl = /* @__PURE__ */ j('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), gl = /* @__PURE__ */ j('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), ml = /* @__PURE__ */ j('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), wl = /* @__PURE__ */ j("<!> <!> <!>", 1);
function yl(e, t) {
  Yt(t, !0);
  let n = /* @__PURE__ */ G(null), r = /* @__PURE__ */ G(!1), i = /* @__PURE__ */ G("videos"), s = /* @__PURE__ */ G(Qe(/* @__PURE__ */ new Set())), a = /* @__PURE__ */ G(null), l = /* @__PURE__ */ G(null), f = /* @__PURE__ */ G(null);
  br(() => {
    Pa(t.handle).then((m) => {
      m ? T(n, m, !0) : T(r, !0);
    });
  });
  const v = /* @__PURE__ */ xt(() => {
    var m, C, H, re;
    return [
      ["photos", (m = u(n)) == null ? void 0 : m.photos_count],
      ["videos", (C = u(n)) == null ? void 0 : C.videos_count],
      ["posts", (H = u(n)) == null ? void 0 : H.posts_count],
      ["likes", (re = u(n)) == null ? void 0 : re.likes_count]
    ].filter(([, oe]) => oe != null);
  });
  function d(m) {
    const C = new Set(u(s));
    C.has(m) ? C.delete(m) : C.add(m), T(s, C, !0);
  }
  function _(m) {
    var C, H;
    if (!((C = t.host) != null && C.play)) {
      T(a, m, !0);
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
      contextTitle: ((H = u(n)) == null ? void 0 : H.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  async function c(m) {
    T(f, null);
    const C = await Ha(m.site, m.gallery_id);
    if (!C) {
      T(f, "Could not open that gallery");
      return;
    }
    if (C.length === 0) {
      T(f, "That site served no images for this gallery");
      return;
    }
    T(l, { gallery: m, count: C.length, index: 0 }, !0);
  }
  function h(m) {
    u(l) && T(
      l,
      {
        ...u(l),
        index: (u(l).index + m + u(l).count) % u(l).count
      },
      !0
    );
  }
  function g(m) {
    if (m.key === "Escape") {
      T(a, null), T(l, null);
      return;
    }
    u(l) && (m.key === "ArrowRight" && h(1), m.key === "ArrowLeft" && h(-1));
  }
  var w = wl();
  Hi("keydown", ir, g);
  var p = ot(w);
  {
    var x = (m) => {
      var C = nl();
      S(m, C);
    }, Q = (m) => {
      var C = hl(), H = ot(C), re = X(H);
      {
        var oe = (y) => {
          var N = rl(), V = te(N);
          Y(() => Be(V, "src", u(n).header_url)), S(y, N);
        };
        K(re, (y) => {
          u(n).header_url && y(oe);
        });
      }
      var xe = O(re, 2);
      let b;
      var M = X(xe), P = X(M);
      Tr(P, {
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
      var Z = O(M, 2), Ee = X(Z), ee = X(Ee), Tt = O(ee);
      {
        var Hn = (y) => {
          var N = il();
          S(y, N);
        };
        K(Tt, (y) => {
          u(n).is_verified && y(Hn);
        });
      }
      var mn = O(Ee, 2), ut = te(mn), Ar = O(mn, 2);
      {
        var Gi = (y) => {
          var N = sl(), V = te(N, !0);
          Y(() => W(V, u(n).bio)), S(y, N);
        };
        K(Ar, (y) => {
          u(n).bio && y(Gi);
        });
      }
      var Cr = O(Ar, 2);
      {
        var qi = (y) => {
          var N = ll();
          at(N, 21, () => u(v), ([V, Ue]) => V, (V, Ue) => {
            var ct = /* @__PURE__ */ xt(() => vs(u(Ue), 2));
            let jn = () => u(ct)[0], zn = () => u(ct)[1];
            var nt = al(), Wt = X(nt), Bn = te(Wt, !0), ts = O(Wt);
            Y(
              (ns) => {
                W(Bn, ns), W(ts, ` ${jn() ?? ""}`);
              },
              [() => zn().toLocaleString()]
            ), S(V, nt);
          }), S(y, N);
        };
        K(Cr, (y) => {
          u(v).length && y(qi);
        });
      }
      var Yi = O(Cr, 2), Mr = X(Yi);
      {
        var Ki = (y) => {
          var N = ol(), V = te(N, !0);
          Y(() => W(V, u(n).location)), S(y, N);
        };
        K(Mr, (y) => {
          u(n).location && y(Ki);
        });
      }
      var Rr = O(Mr, 2);
      {
        var Wi = (y) => {
          var N = Wr(), V = te(N, !0);
          Y(
            (Ue) => {
              Be(N, "href", u(n).website), W(V, Ue);
            },
            [() => u(n).website.replace(/^https?:\/\//, "")]
          ), S(y, N);
        };
        K(Rr, (y) => {
          u(n).website && y(Wi);
        });
      }
      var Zi = O(Rr, 2);
      {
        var Xi = (y) => {
          var N = Wr(), V = te(N);
          Y(() => {
            Be(N, "href", u(n).of_url), W(V, `onlyfans.com/${u(n).of_username ?? ""}`);
          }), S(y, N);
        };
        K(Zi, (y) => {
          u(n).of_url && y(Xi);
        });
      }
      var Ir = O(H, 2), Nr = X(Ir);
      at(Nr, 20, () => ["videos", "images"], (y) => y, (y, N) => {
        var V = fl();
        let Ue;
        var ct = te(V, !0);
        Y(() => {
          Ue = Jn(V, 1, "ofx-btn", null, Ue, { "ofx-on": u(i) === N }), W(ct, N);
        }), Le("click", V, () => T(i, N, !0)), S(y, V);
      });
      var Or = O(Nr, 4);
      at(Or, 17, () => u(n).sources, (y) => y.site, (y, N) => {
        var V = cl();
        let Ue;
        var ct = X(V), jn = O(ct);
        {
          var zn = (nt) => {
            var Wt = ul(), Bn = te(Wt, !0);
            Y(() => W(Bn, u(N).video_count)), S(nt, Wt);
          };
          K(jn, (nt) => {
            u(N).video_count && nt(zn);
          });
        }
        Y(
          (nt) => {
            Ue = Jn(V, 1, "ofx-btn ofx-outline", null, Ue, { "ofx-on": nt }), W(ct, `${u(N).site ?? ""} `);
          },
          [() => u(s).has(u(N).site)]
        ), Le("click", V, () => d(u(N).site)), S(y, V);
      });
      var Ji = O(Or, 2), Lr = O(Ir, 2);
      {
        var Qi = (y) => {
          var N = vl(), V = te(N, !0);
          Y(() => W(V, u(f))), S(y, N);
        };
        K(Lr, (y) => {
          u(f) && y(Qi);
        });
      }
      var Dr = O(Lr, 2);
      {
        var $i = (y) => {
          var N = dl();
          S(y, N);
        };
        K(Dr, (y) => {
          u(s).size === 0 && y($i);
        });
      }
      var es = O(Dr, 2);
      at(es, 17, () => u(n).sources.filter((y) => u(s).has(y.site)), (y) => y.site, (y, N) => {
        tl(y, {
          get handle() {
            return u(n).handle;
          },
          get site() {
            return u(N).site;
          },
          get mode() {
            return u(i);
          },
          onplay: (V) => _(V),
          ongallery: c
        });
      }), Y(() => {
        b = Jn(xe, 1, "ofx-identity", null, b, { "ofx-overlap": !!u(n).header_url }), W(ee, `${u(n).display_name ?? ""} `), W(ut, `${u(n).source_count ?? ""}
                    ${u(n).source_count === 1 ? "site" : "sites"} · ${u(n).handle ?? ""}`);
      }), Le("click", Ji, () => t.navigate("/x/onlyfans")), S(m, C);
    }, z = (m) => {
      var C = _l();
      S(m, C);
    };
    K(p, (m) => {
      u(r) ? m(x) : u(n) ? m(Q, 1) : m(z, -1);
    });
  }
  var $ = O(p, 2);
  {
    var A = (m) => {
      var C = pl(), H = X(C), re = O(H, 2);
      Y((oe) => Be(re, "src", oe), [
        () => Yr(u(a).site, u(a).video_id)
      ]), Le("click", H, () => T(a, null)), S(m, C);
    };
    K($, (m) => {
      u(a) && m(A);
    });
  }
  var I = O($, 2);
  {
    var U = (m) => {
      var C = ml(), H = X(C), re = O(H, 2);
      {
        var oe = (b) => {
          var M = gl(), P = ot(M), Z = O(P, 2);
          Le("click", P, () => h(-1)), Le("click", Z, () => h(1)), S(b, M);
        };
        K(re, (b) => {
          u(l).count > 1 && b(oe);
        });
      }
      var xe = O(re, 2);
      Y(
        (b) => {
          Be(xe, "src", b), Be(xe, "alt", `${u(l).gallery.title ?? ""} ${u(l).index + 1} of ${u(l).count ?? ""}`);
        },
        [
          () => ja(u(l).gallery.site, u(l).gallery.gallery_id, u(l).index)
        ]
      ), Le("click", H, () => T(l, null)), S(m, C);
    };
    K(I, (m) => {
      u(l) && m(U);
    });
  }
  S(e, w), Kt();
}
Sr(["click"]);
var bl = /* @__PURE__ */ j('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function xl(e, t) {
  Yt(t, !0);
  let n = kn(t, "path", 3, "");
  La(t.api);
  const r = /* @__PURE__ */ xt(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = bl(), s = X(i), a = X(s);
  {
    var l = (v) => {
      var d = Fn(), _ = ot(d);
      xa(_, () => u(r), (c) => {
        yl(c, {
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
      }), S(v, d);
    }, f = (v) => {
      Wa(v, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    K(a, (v) => {
      u(r) ? v(l) : v(f, -1);
    });
  }
  S(e, i), Kt();
}
function Sl({ target: e, path: t, api: n, navigate: r, host: i }) {
  const s = Qe({ path: t ?? "", api: n, navigate: r, host: i }), a = ma(xl, { target: e, props: s });
  return {
    update(l) {
      s.path = l ?? "";
    },
    destroy() {
      ya(a);
    }
  };
}
export {
  Sl as default
};

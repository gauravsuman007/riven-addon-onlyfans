var ts = Object.defineProperty;
var Ln = (e) => {
  throw TypeError(e);
};
var rs = (e, t, r) => t in e ? ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ge = (e, t, r) => rs(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || Ln("Cannot " + r);
var o = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), A = (e, t, r) => t.has(e) ? Ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (zr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), D = (e, t, r) => (zr(e, t, "access private method"), r);
const ne = Symbol("uninitialized"), ns = "http://www.w3.org/1999/xhtml", Wn = !1;
var Zn = Array.isArray, is = Array.prototype.indexOf, kr = Array.prototype.includes, Or = Array.from, Xn = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, ss = Object.getOwnPropertyDescriptors, as = Object.prototype, ls = Array.prototype, Jn = Object.getPrototypeOf, Dn = Object.isExtensible;
const os = () => {
};
function fs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Qn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function us(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const se = 2, Ht = 4, Lr = 8, ei = 1 << 24, De = 16, Me = 32, et = 64, Xr = 128, hn = 256, Ce = 512, ie = 1024, te = 2048, Fe = 4096, ce = 8192, xe = 16384, Gt = 32768, Jr = 1 << 25, jt = 65536, Sr = 1 << 17, cs = 1 << 18, qt = 1 << 19, vs = 1 << 20, Ge = 1 << 25, bt = 65536, Tr = 1 << 21, It = 1 << 22, ot = 1 << 23, Vr = Symbol("$state"), ti = Symbol("component"), ds = Symbol(""), wr = Symbol("attributes"), Qr = Symbol("class"), hs = Symbol("style"), Zt = Symbol("text"), vr = new class extends Error {
  constructor() {
    super(...arguments);
    ge(this, "name", "StaleReactionError");
    ge(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Yn;
const _s = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Yn = globalThis.document) != null && Yn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ps() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function gs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ri(e) {
  return e === this.v;
}
function ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ni(e) {
  return !ms(e, this.v);
}
function ws() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ys(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function bs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Es(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ks() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ss() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ts() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function As() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Cs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Ms = !1, _e = null;
function Bt(e) {
  _e = e;
}
function Yt(e, t = !1, r) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      P
    ),
    l: null
  };
}
function Kt(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ei(n);
  }
  return t.i = !0, _e = t.p, ii(e);
}
function ii(e = {}) {
  return Xn(e, ti, { value: !0 }), e;
}
function si() {
  return !0;
}
let Mt = [];
function Rs() {
  var e = Mt;
  Mt = [], fs(e);
}
function Xe(e) {
  if (Mt.length === 0) {
    var t = Mt;
    queueMicrotask(() => {
      t === Mt && Rs();
    });
  }
  Mt.push(e);
}
const Is = -7169;
function Z(e, t) {
  e.f = e.f & Is | t;
}
function _n(e) {
  (e.f & Ce) !== 0 || e.deps === null ? Z(e, ie) : Z(e, Fe);
}
function ai(e) {
  if (e !== null)
    for (const t of e)
      (t.f & se) === 0 || (t.f & bt) === 0 || (t.f ^= bt, ai(
        /** @type {Derived} */
        t.deps
      ));
}
function li(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & Fe) !== 0 && r.add(e), ai(e.deps), Z(e, ie);
}
function dr(e) {
  var t = L, r = P;
  Re(null), Ke(null);
  try {
    return e();
  } finally {
    Re(t), Ke(r);
  }
}
function Ns(e, t, r, n) {
  const i = pn;
  var s = e.filter((h) => !h.settled), a = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(a);
    return;
  }
  var l = (
    /** @type {Effect} */
    P
  ), f = Os(), v = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function d(h) {
    if ((l.f & xe) === 0) {
      f();
      try {
        n([...a, ...h]);
      } catch (m) {
        Ve(m, l);
      }
      Ar();
    }
  }
  var _ = oi();
  if (r.length === 0) {
    v.then(() => d([])).finally(_);
    return;
  }
  function c() {
    Promise.all(r.map((h) => /* @__PURE__ */ Ls(h))).then(d).catch((h) => Ve(h, l)).finally(_);
  }
  v ? v.then(() => {
    f(), c(), Ar();
  }) : c();
}
function Os() {
  var e = (
    /** @type {Effect} */
    P
  ), t = L, r = _e, n = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Ke(e), Re(t), Bt(r), s && (e.f & xe) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Ar(e = !0) {
  Ke(null), Re(null), Bt(null), e && (k == null || k.deactivate());
}
function oi() {
  var e = (
    /** @type {Effect} */
    P
  ), t = e.b, r = (
    /** @type {Batch} */
    k
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  var t = se | te;
  return P !== null && (P.f |= qt), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: ri,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ne
    ),
    wv: 0,
    parent: P,
    ac: null
  };
}
const Xt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ls(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && ws();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = kt(
    /** @type {V} */
    ne
  ), a = !L, l = /* @__PURE__ */ new Set();
  return Xs(() => {
    var h, m;
    var f = (
      /** @type {Effect} */
      P
    ), v = Qn();
    i = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, (w) => {
        w !== vr && v.reject(w);
      }).finally(Ar);
    } catch (w) {
      v.reject(w), Ar();
    }
    var d = (
      /** @type {Batch} */
      k
    );
    if (a) {
      if ((f.f & Gt) !== 0)
        var _ = oi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = n.b) != null && h.is_rendered()
      )
        (m = d.async_deriveds.get(f)) == null || m.reject(Xt);
      else
        for (const w of l.values())
          w.reject(Xt);
      l.add(v), d.async_deriveds.set(f, v);
    }
    const c = (w, p = void 0) => {
      _ == null || _(), l.delete(v), p !== Xt && (d.activate(), p ? (s.f |= ot, zt(s, p)) : ((s.f & ot) !== 0 && (s.f ^= ot), zt(s, w)), d.deactivate());
    };
    v.promise.then(c, (w) => c(null, w || "unknown"));
  }), xi(() => {
    for (const f of l)
      f.reject(Xt);
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
  const t = /* @__PURE__ */ pn(e);
  return Ci(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  const t = /* @__PURE__ */ pn(e);
  return t.equals = ni, t;
}
function Ps(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function gn(e) {
  var t, r = P, n = e.parent;
  if (!ut && n !== null && e.v !== ne && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (xe | ce)) !== 0)
    return ps(), e.v;
  Ke(n);
  try {
    e.f &= ~bt, Ps(e), t = Ni(e);
  } finally {
    Ke(r);
  }
  return t;
}
function fi(e) {
  var t = gn(e);
  if (!e.equals(t) && (e.wv = Ri(), (!(k != null && k.is_fork) || e.deps === null) && (k !== null ? (k.capture(e, t, !0), nr == null || nr.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    Z(e, ie);
    return;
  }
  ut || (ae !== null ? (yn() || k != null && k.is_fork) && ae.set(e, t) : _n(e));
}
function Fs(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && dr(() => {
        r.ac.abort(vr), r.ac = null;
      }), r.fn !== null && (r.teardown = os), sr(r, 0), xn(r));
}
function ui(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Vt(t);
}
let Gr = null, At = null, k = null, nr = null, ae = null, en = null, qr = !1, Rt = null, yr = null;
var Pn = 0;
let Us = 1;
var Nt, st, ht, Ot, Lt, Dt, $e, Pt, de, lr, We, Ne, He, Ft, _t, B, tn, Jt, rn, ci, vi, Ct, Hs, Qt;
const Rr = class Rr {
  constructor() {
    A(this, B);
    ge(this, "id", Us++);
    /** True as soon as `#process` was called */
    A(this, Nt, !1);
    ge(this, "linked", !0);
    /** @type {Batch | null} */
    A(this, st, null);
    /** @type {Batch | null} */
    A(this, ht, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ge(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ge(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ge(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Ot, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Lt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    A(this, Dt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    A(this, $e, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, Pt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    A(this, de, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    A(this, lr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, We, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, Ne, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    A(this, He, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    A(this, Ft, /* @__PURE__ */ new Set());
    ge(this, "is_fork", !1);
    A(this, _t, !1);
    At === null ? Gr = At = this : (E(At, ht, this), E(this, st, At)), At = this;
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
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, He).get(t);
    if (n) {
      o(this, He).delete(t);
      for (var i of n.d)
        Z(i, te), r(i);
      for (i of n.m)
        Z(i, Fe), r(i);
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
  capture(t, r, n = !1) {
    t.v !== ne && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ot) === 0 && (this.current.set(t, [r, n]), ae == null || ae.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, ae = null;
  }
  flush() {
    try {
      qr = !0, k = this, D(this, B, Jt).call(this);
    } finally {
      Pn = 0, en = null, Rt = null, yr = null, qr = !1, k = null, ae = null, qe.clear();
    }
  }
  discard() {
    var t;
    for (const r of o(this, Lt)) r(this);
    o(this, Lt).clear();
    for (const r of this.async_deriveds.values())
      r.reject(Xt);
    D(this, B, Qt).call(this), (t = o(this, Pt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, lr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (E(this, Dt, o(this, Dt) + 1), t) {
      let n = o(this, $e).get(r) ?? 0;
      o(this, $e).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (E(this, Dt, o(this, Dt) - 1), t) {
      let n = o(this, $e).get(r) ?? 0;
      n === 1 ? o(this, $e).delete(r) : o(this, $e).set(r, n - 1);
    }
    o(this, _t) || (E(this, _t, !0), Xe(() => {
      E(this, _t, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, We).add(n);
    for (const n of r)
      o(this, Ne).add(n);
    t.clear(), r.clear();
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
    return (o(this, Pt) ?? E(this, Pt, Qn())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new Rr();
      qr || Xe(() => {
        o(t, Nt) || t.flush();
      });
    }
    return k;
  }
  apply() {
    {
      ae = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (en = t, (i = t.b) != null && i.is_pending && (t.f & (Ht | Lr | ei)) !== 0 && (t.f & Gt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Rt !== null && r === P && (L === null || (L.f & se) === 0))
        return;
      if ((n & (et | Me)) !== 0) {
        if ((n & ie) === 0)
          return;
        r.f ^= ie;
      }
    }
    o(this, de).push(r);
  }
};
Nt = new WeakMap(), st = new WeakMap(), ht = new WeakMap(), Ot = new WeakMap(), Lt = new WeakMap(), Dt = new WeakMap(), $e = new WeakMap(), Pt = new WeakMap(), de = new WeakMap(), lr = new WeakMap(), We = new WeakMap(), Ne = new WeakMap(), He = new WeakMap(), Ft = new WeakMap(), _t = new WeakMap(), B = new WeakSet(), tn = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, $e).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (o(this, He).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Jt = function() {
  var f, v, d, _;
  E(this, Nt, !0), Pn++ > 1e3 && (D(this, B, Qt).call(this), js());
  for (const c of o(this, We))
    o(this, Ne).delete(c), Z(c, te), this.schedule(c);
  for (const c of o(this, Ne))
    Z(c, Fe), this.schedule(c);
  const t = o(this, de);
  E(this, de, []), this.apply();
  var r = Rt = [], n = [], i = yr = [];
  for (const c of t)
    try {
      D(this, B, rn).call(this, c, r, n);
    } catch (h) {
      throw _i(c), D(this, B, tn).call(this) || this.discard(), h;
    }
  if (k = null, i.length > 0) {
    var s = Rr.ensure();
    for (const c of i)
      s.schedule(c);
  }
  if (Rt = null, yr = null, D(this, B, tn).call(this)) {
    D(this, B, Ct).call(this, n), D(this, B, Ct).call(this, r);
    for (const [c, h] of o(this, He))
      hi(c, h);
    i.length > 0 && /** @type {unknown} */
    D(f = k, B, Jt).call(f);
    return;
  }
  const a = D(this, B, ci).call(this);
  if (a) {
    D(this, B, Ct).call(this, n), D(this, B, Ct).call(this, r), D(v = a, B, vi).call(v, this);
    return;
  }
  o(this, We).clear(), o(this, Ne).clear();
  for (const c of o(this, Ot)) c(this);
  o(this, Ot).clear(), nr = this, Fn(n), Fn(r), nr = null, (d = o(this, Pt)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (o(this, Dt) === 0 && (o(this, de).length === 0 || l !== null) && D(this, B, Qt).call(this), o(this, de).length > 0)
    if (l !== null) {
      const c = l;
      o(c, de).push(...o(this, de).filter((h) => !o(c, de).includes(h)));
    } else
      l = this;
  l !== null && (qe.clear(), D(_ = l, B, Jt).call(_));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
rn = function(t, r, n) {
  t.f ^= ie;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (Me | et)) !== 0, l = a && (s & ie) !== 0, f = l || (s & ce) !== 0 || o(this, He).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= ie : (s & Ht) !== 0 ? r.push(i) : _r(i) && ((s & De) !== 0 && o(this, Ne).add(i), Vt(i));
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
}, ci = function() {
  for (var t = o(this, st); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, st);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
vi = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && s.promise.then(a.resolve).catch(a.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(o(t, We), o(t, Ne));
  const r = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & se) !== 0 && (i.f & (te | Fe)) === 0))
      for (const f of s) {
        var a = f.f;
        if ((a & se) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          a & (It | De) && !this.async_deriveds.has(l) && (o(this, Ne).delete(l), Z(l, te), this.schedule(l));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), D(n = t, B, Qt).call(n), k = this, D(this, B, Jt).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ct = function(t) {
  for (var r = 0; r < t.length; r += 1)
    li(t[r], o(this, We), o(this, Ne));
}, Hs = function() {
  var _;
  for (let c = Gr; c !== null; c = o(c, ht)) {
    var t = c.id < this.id, r = [];
    for (const [h, [m, w]] of this.current) {
      if (c.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && m !== n)
          c.current.set(h, [m, w]);
        else
          continue;
      }
      r.push(h);
    }
    if (t)
      for (const [h, m] of this.async_deriveds) {
        const w = c.async_deriveds.get(h);
        w && m.promise.then(w.resolve).catch(w.reject);
      }
    var i = [...c.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      c.current.get(h)[1]
    );
    if (!(!o(c, Nt) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const h of o(this, Ft))
            c.unskip_effect(h, (m) => {
              var w;
              (m.f & (De | It)) !== 0 ? c.schedule(m) : D(w = c, B, Ct).call(w, [m]);
            });
        c.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var f of r)
          di(f, s, a, l);
        l = /* @__PURE__ */ new Map();
        var v = [...c.current].filter(([h, m]) => {
          const w = this.current.get(h);
          return w ? w[0] !== m[0] || w[1] !== m[1] : !0;
        }).map(([h]) => h);
        if (v.length > 0)
          for (const h of o(this, lr))
            (h.f & (xe | ce | Sr)) === 0 && mn(h, v, l) && ((h.f & (It | De)) !== 0 ? (Z(h, te), c.schedule(h)) : o(c, We).add(h));
        if (o(c, de).length > 0 && !o(c, _t)) {
          c.apply();
          for (var d of o(c, de))
            D(_ = c, B, rn).call(_, d, [], []);
          E(c, de, []);
        }
        c.deactivate();
      }
    }
  }
}, Qt = function() {
  if (this.linked) {
    var t = o(this, st), r = o(this, ht);
    t === null ? Gr = r : E(t, ht, r), r === null ? At = t : E(r, st, t), this.linked = !1;
  }
};
let Et = Rr;
function js() {
  try {
    ks();
  } catch (e) {
    Ve(e, en);
  }
}
let Ie = null;
function Fn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (xe | ce)) === 0 && _r(n) && (Ie = /* @__PURE__ */ new Set(), Vt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Si(n), (Ie == null ? void 0 : Ie.size) > 0)) {
        qe.clear();
        for (const i of Ie) {
          if ((i.f & (xe | ce)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Ie.has(a) && (Ie.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & (xe | ce)) === 0 && Vt(f);
          }
        }
        Ie.clear();
      }
    }
    Ie = null;
  }
}
function di(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & se) !== 0 ? di(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (It | De)) !== 0 && (s & te) === 0 && mn(i, t, n) && (Z(i, te), wn(
        /** @type {Effect} */
        i
      ));
    }
}
function mn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (kr.call(t, i))
        return !0;
      if ((i.f & se) !== 0 && mn(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function wn(e) {
  k.schedule(e);
}
function hi(e, t) {
  if (!((e.f & Me) !== 0 && (e.f & ie) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & Fe) !== 0 && t.m.push(e), Z(e, ie);
    for (var r = e.first; r !== null; )
      hi(r, t), r = r.next;
  }
}
function _i(e) {
  Z(e, ie);
  for (var t = e.first; t !== null; )
    _i(t), t = t.next;
}
let Cr = /* @__PURE__ */ new Set();
const qe = /* @__PURE__ */ new Map();
let pi = !1;
function kt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ri,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = kt(e);
  return Ci(r), r;
}
// @__NO_SIDE_EFFECTS__
function Bs(e, t = !1, r = !0) {
  const n = kt(e);
  return t || (n.equals = ni), n;
}
function C(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pe || (L.f & Sr) !== 0) && si() && (L.f & (se | De | It | Sr)) !== 0 && (Ye === null || !Ye.has(e)) && As();
  let n = r ? Je(t) : t;
  return zt(e, n, yr);
}
function zt(e, t, r = null) {
  if (!e.equals(t)) {
    ut ? qe.set(e, t) : qe.has(e) || qe.set(e, e.v);
    var n = Et.ensure();
    if (n.capture(e, t), (e.f & se) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && gn(i), ae === null && _n(i);
    }
    e.wv = Ri(), gi(e, te, r), P !== null && (P.f & ie) !== 0 && (P.f & (Me | et)) === 0 && (ke === null ? ta([e]) : ke.push(e)), !n.is_fork && Cr.size > 0 && !pi && zs();
  }
  return t;
}
function zs() {
  pi = !1;
  for (const e of Cr) {
    (e.f & ie) !== 0 && Z(e, Fe);
    let t;
    try {
      t = _r(e);
    } catch {
      t = !0;
    }
    t && Vt(e);
  }
  Cr.clear();
}
function ir(e) {
  C(e, e.v + 1);
}
function gi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], l = a.f, f = (l & te) === 0;
      if (f && Z(a, t), (l & Sr) !== 0)
        Cr.add(
          /** @type {Effect} */
          a
        );
      else if ((l & se) !== 0) {
        var v = (
          /** @type {Derived} */
          a
        );
        ae == null || ae.delete(v), (l & bt) === 0 && (l & Ce && (P === null || (P.f & Tr) === 0) && (a.f |= bt), gi(v, Fe, r));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          a
        );
        (l & De) !== 0 && Ie !== null && Ie.add(d), r !== null ? r.push(d) : wn(d);
      }
    }
}
function Je(e) {
  if (typeof e != "object" || e === null || Vr in e || ti in e)
    return e;
  const t = Jn(e);
  if (t !== as && t !== ls)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Zn(e), i = /* @__PURE__ */ V(0), s = yt, a = (l) => {
    if (yt === s)
      return l();
    var f = L, v = yt;
    Re(null), Hn(s);
    var d = l();
    return Re(f), Hn(v), d;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Ss();
        var d = r.get(f);
        return d === void 0 ? a(() => {
          var _ = /* @__PURE__ */ V(v.value);
          return r.set(f, _), _;
        }) : C(d, v.value, !0), !0;
      },
      deleteProperty(l, f) {
        var v = r.get(f);
        if (v === void 0) {
          if (f in l) {
            const d = a(() => /* @__PURE__ */ V(ne));
            r.set(f, d), ir(i);
          }
        } else
          C(v, ne), ir(i);
        return !0;
      },
      get(l, f, v) {
        var h;
        if (f === Vr)
          return e;
        var d = r.get(f), _ = f in l;
        if (d === void 0 && (!_ || (h = rr(l, f)) != null && h.writable) && (d = a(() => {
          var m = Je(_ ? l[f] : ne), w = /* @__PURE__ */ V(m);
          return w;
        }), r.set(f, d)), d !== void 0) {
          var c = u(d);
          return c === ne ? void 0 : c;
        }
        return Reflect.get(l, f, v);
      },
      getOwnPropertyDescriptor(l, f) {
        var v = Reflect.getOwnPropertyDescriptor(l, f);
        if (v && "value" in v) {
          var d = r.get(f);
          d && (v.value = u(d));
        } else if (v === void 0) {
          var _ = r.get(f), c = _ == null ? void 0 : _.v;
          if (_ !== void 0 && c !== ne)
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
        if (f === Vr)
          return !0;
        var v = r.get(f), d = v !== void 0 && v.v !== ne || Reflect.has(l, f);
        if (v !== void 0 || P !== null && (!d || (c = rr(l, f)) != null && c.writable)) {
          v === void 0 && (v = a(() => {
            var h = d ? Je(l[f]) : ne, m = /* @__PURE__ */ V(h);
            return m;
          }), r.set(f, v));
          var _ = u(v);
          if (_ === ne)
            return !1;
        }
        return d;
      },
      set(l, f, v, d) {
        var H;
        var _ = r.get(f), c = f in l;
        if (n && f === "length")
          for (var h = v; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var m = r.get(h + "");
            m !== void 0 ? C(m, ne) : h in l && (m = a(() => /* @__PURE__ */ V(ne)), r.set(h + "", m));
          }
        if (_ === void 0)
          (!c || (H = rr(l, f)) != null && H.writable) && (_ = a(() => /* @__PURE__ */ V(void 0)), C(_, Je(v)), r.set(f, _));
        else {
          c = _.v !== ne;
          var w = a(() => Je(v));
          C(_, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(l, f);
        if (p != null && p.set && p.set.call(d, v), !c) {
          if (n && typeof f == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), X = Number(f);
            Number.isInteger(X) && X >= b.v && C(b, X + 1);
          }
          ir(i);
        }
        return !0;
      },
      ownKeys(l) {
        u(i);
        var f = Reflect.ownKeys(l).filter((_) => {
          var c = r.get(_);
          return c === void 0 || c.v !== ne;
        });
        for (var [v, d] of r)
          d.v !== ne && !(v in l) && f.push(v);
        return f;
      },
      setPrototypeOf() {
        Ts();
      }
    }
  );
}
var nn, mi, wi, yi;
function Vs() {
  if (nn === void 0) {
    nn = window, mi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    wi = rr(t, "firstChild").get, yi = rr(t, "nextSibling").get, Dn(e) && (e[Qr] = void 0, e[wr] = null, e[hs] = void 0, e.__e = void 0), Dn(r) && (r[Zt] = void 0);
  }
}
function Qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return (
    /** @type {TemplateNode | null} */
    wi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  return (
    /** @type {TemplateNode | null} */
    yi.call(e)
  );
}
function W(e, t) {
  return /* @__PURE__ */ St(e);
}
function ft(e, t = !1) {
  {
    var r = /* @__PURE__ */ St(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ hr(r) : r;
  }
}
function ee(e, t = !1) {
  return /* @__PURE__ */ St(e);
}
function O(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ hr(n);
  return n;
}
function Gs(e) {
  e.textContent = "";
}
function bi() {
  return !1;
}
function qs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function Ys(e) {
  var t = P;
  if (t === null)
    return L.f |= ot, e;
  if ((t.f & Gt) === 0 && (t.f & Ht) === 0)
    throw e;
  Ve(e, t);
}
function Ve(e, t) {
  if (!(t !== null && (t.f & xe) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Xr) !== 0 && (t.f & (xe | Jr)) === 0) {
        if ((t.f & Gt) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (r) {
          e = r;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Ks(e) {
  P === null && (L === null && Es(), xs()), ut && bs();
}
function $s(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function tt(e, t) {
  var r = P;
  r !== null && (r.f & ce) !== 0 && (e |= ce);
  var n = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | te | Ce,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  k == null || k.register_created_effect(n);
  var i = n;
  if ((e & Ht) !== 0)
    Rt !== null ? Rt.push(n) : Et.ensure().schedule(n);
  else if (t !== null) {
    try {
      Vt(n);
    } catch (a) {
      throw pe(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & qt) === 0 && (i = i.first, (e & De) !== 0 && (e & jt) !== 0 && i !== null && (i.f |= jt));
  }
  if (i !== null && (i.parent = r, r !== null && $s(i, r), L !== null && (L.f & se) !== 0 && (e & et) === 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function yn() {
  return L !== null && !Pe;
}
function xi(e) {
  const t = tt(Lr, null);
  return Z(t, ie), t.teardown = e, t;
}
function bn(e) {
  Ks();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !L && (t & Me) !== 0 && _e !== null && !_e.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      _e
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ei(e);
}
function Ei(e) {
  return tt(Ht | vs, e);
}
function Ws(e) {
  Et.ensure();
  const t = tt(et | qt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? wt(t, () => {
      pe(t), n(void 0);
    }) : (pe(t), n(void 0));
  });
}
function Zs(e) {
  return tt(Ht, e);
}
function Xs(e) {
  return tt(It | qt, e);
}
function Js(e, t = 0) {
  return tt(Lr | t, e);
}
function Y(e, t = [], r = [], n = []) {
  Ns(n, t, r, (i) => {
    tt(Lr, () => {
      e(...i.map(u));
    });
  });
}
function Dr(e, t = 0) {
  var r = tt(De | t, e);
  return r;
}
function Ae(e) {
  return tt(Me | qt, e);
}
function ki(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ut, n = L;
    Un(!0), Re(null);
    try {
      t.call(null);
    } catch (i) {
      Ve(i, e.parent);
    } finally {
      Un(r), Re(n);
    }
  }
}
function xn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && dr(() => {
      i.abort(vr);
    });
    var n = r.next;
    (r.f & et) !== 0 ? r.parent = null : pe(r, t), r = n;
  }
}
function Qs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Me) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  (t || (e.f & cs) !== 0) && e.nodes !== null && e.nodes.end !== null && (ea(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Jr, xn(e, t && !r), sr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ki(e), e.f ^= Jr, e.f |= xe;
  var i = e.parent;
  i !== null && i.first !== null && Si(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ea(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ hr(e);
    e.remove(), e = r;
  }
}
function Si(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function wt(e, t, r = !0) {
  var n = [];
  e.f |= hn, Ti(e, n, !0);
  var i = () => {
    r && pe(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of n)
      l.out(a);
  } else
    i();
}
function Ti(e, t, r) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & et) === 0) {
        var a = (i.f & jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Me) !== 0 && (e.f & De) !== 0;
        Ti(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Mr(e) {
  e.f &= ~hn, Ai(e, !0);
}
function Ai(e, t) {
  if ((e.f & hn) === 0 && (e.f & ce) !== 0) {
    e.f ^= ce, (e.f & ie) === 0 && (Z(e, te), Et.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & jt) !== 0 || (r.f & Me) !== 0;
      Ai(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function En(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ hr(r);
      t.append(r), r = i;
    }
}
let br = !1, ut = !1;
function Un(e) {
  ut = e;
}
let L = null, Pe = !1;
function Re(e) {
  L = e;
}
let P = null;
function Ke(e) {
  P = e;
}
let Ye = null;
function Ci(e) {
  L !== null && (Ye ?? (Ye = /* @__PURE__ */ new Set())).add(e);
}
let he = null, be = 0, ke = null;
function ta(e) {
  ke = e;
}
let Mi = 1, vt = 0, yt = vt;
function Hn(e) {
  yt = e;
}
function Ri() {
  return ++Mi;
}
function _r(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & se && (e.f &= ~bt), (t & Fe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (_r(
        /** @type {Derived} */
        s
      ) && fi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ae === null && Z(e, ie);
  }
  return !1;
}
function Ii(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ye !== null && Ye.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & se) !== 0 ? Ii(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? Z(s, te) : (s.f & ie) !== 0 && Z(s, Fe), wn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ni(e) {
  var t = he, r = be, n = ke, i = L, s = Ye, a = _e, l = Pe, f = yt, v = e.f;
  he = /** @type {null | Value[]} */
  null, be = 0, ke = null, L = (v & (Me | et)) === 0 ? e : null, Ye = null, Bt(e.ctx), Pe = !1, yt = ++vt, e.ac !== null && (dr(() => {
    e.ac.abort(vr);
  }), e.ac = null);
  try {
    e.f |= Tr;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= Gt;
    var c = jn(e);
    if (si() && ke !== null && !Pe && c !== null && (e.f & (se | Fe | te)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      ke.length; h++)
        Ii(
          ke[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (vt++, i.deps !== null)
        for (let m = 0; m < r; m += 1)
          i.deps[m].rv = vt;
      if (t !== null)
        for (const m of t)
          m.rv = vt;
      ke !== null && (n === null ? n = ke : n.push(.../** @type {Source[]} */
      ke));
    }
    return (e.f & ot) !== 0 && (e.f ^= ot), _;
  } catch (m) {
    return jn(e), Ys(m);
  } finally {
    e.f ^= Tr, he = t, be = r, ke = n, L = i, Ye = s, Bt(a), Pe = l, yt = f;
  }
}
function jn(e) {
  var i;
  var t = e.deps, r = k == null ? void 0 : k.is_fork;
  if (he !== null) {
    var n;
    if (r || sr(e, be), t !== null && be > 0)
      for (t.length = be + he.length, n = 0; n < he.length; n++)
        t[be + n] = he[n];
    else
      e.deps = t = he;
    if (yn() && (e.f & Ce) !== 0)
      for (n = be; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && be < t.length && (sr(e, be), t.length = be);
  return t;
}
function ra(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = is.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (he === null || !kr.call(he, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ce) !== 0 && (s.f ^= Ce, s.f &= ~bt), s.v !== ne && _n(s), s.ac !== null && dr(() => {
      s.ac.abort(vr), s.ac = null, Z(s, te);
    }), Fs(s), sr(s, 0);
  }
}
function sr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ra(e, r[n]);
}
function Vt(e) {
  var t = e.f;
  if ((t & xe) === 0) {
    Z(e, ie);
    var r = P, n = br;
    P = e, br = (t & (Me | et)) === 0;
    try {
      (t & (De | ei)) !== 0 ? Qs(e) : xn(e), ki(e);
      var i = Ni(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Mi;
      var s;
      Wn && Ms && (e.f & te) !== 0 && e.deps;
    } finally {
      br = n, P = r;
    }
  }
}
function u(e) {
  var t = e.f, r = (t & se) !== 0;
  if (L !== null && !Pe) {
    var n = P !== null && (P.f & xe) !== 0;
    if (!n && (Ye === null || !Ye.has(e))) {
      var i = L.deps;
      if ((L.f & Tr) !== 0)
        e.rv < vt && (e.rv = vt, he === null && i !== null && i[be] === e ? be++ : he === null ? he = [e] : he.push(e));
      else {
        L.deps ?? (L.deps = []), kr.call(L.deps, e) || L.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : kr.call(s, L) || s.push(L);
      }
    }
  }
  if (ut && qe.has(e))
    return qe.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (ut) {
      var l = a.v;
      return ((a.f & ie) === 0 && a.reactions !== null || Li(a)) && (l = gn(a)), qe.set(a, l), l;
    }
    var f = (a.f & Ce) === 0 && !Pe && L !== null && (br || (L.f & Ce) !== 0), v = (a.f & Gt) === 0;
    _r(a) && (f && (a.f |= Ce), fi(a)), f && !v && (ui(a), Oi(a));
  }
  if (ae != null && ae.has(e))
    return ae.get(e);
  if ((e.f & ot) !== 0)
    throw e.v;
  return e.v;
}
function Oi(e) {
  if (e.f |= Ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & se) !== 0 && (t.f & Ce) === 0 && (ui(
        /** @type {Derived} */
        t
      ), Oi(
        /** @type {Derived} */
        t
      ));
}
function Li(e) {
  if (e.v === ne) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qe.has(t) || (t.f & se) !== 0 && Li(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Di(e) {
  var t = Pe;
  try {
    return Pe = !0, e();
  } finally {
    Pe = t;
  }
}
const dt = Symbol("events"), Pi = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Set();
function na(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || an.call(t, s), !s.cancelBubble)
      return dr(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xe(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Fi(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = na(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && xi(() => {
    t.removeEventListener(e, a, s);
  });
}
function Le(e, t, r) {
  (t[dt] ?? (t[dt] = {}))[e] = r;
}
function kn(e) {
  for (var t = 0; t < e.length; t++)
    Pi.add(e[t]);
  for (var r of sn)
    r(e);
}
let Yr = null, Kr = !1;
function an(e) {
  var w, p;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Yr = e, Kr || (Kr = !0, setTimeout(() => {
    Kr = !1, Yr = null;
  }));
  var a = 0, l = Yr === e && e[dt];
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
    Xn(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = L, _ = P;
    Re(null), Ke(null);
    try {
      for (var c, h = []; s !== null && s !== t; ) {
        try {
          var m = (p = s[dt]) == null ? void 0 : p[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (b) {
          c ? h.push(b) : c = b;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (c) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      e[dt] = t, delete e.currentTarget, Re(d), Ke(_);
    }
  }
}
var Kn;
const $r = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Kn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Kn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ia(e) {
  return (
    /** @type {string} */
    ($r == null ? void 0 : $r.createHTML(e)) ?? e
  );
}
function Ui(e) {
  var t = qs("template");
  return t.innerHTML = ia(e.replaceAll("<!>", "<!---->")), t.content;
}
function ar(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ui(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ St(i)));
    var a = (
      /** @type {TemplateNode} */
      n || mi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ St(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ar(l, f);
    } else
      ar(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function sa(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ui(i)
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
    return ar(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function aa(e, t) {
  return /* @__PURE__ */ sa(e, t, "svg");
}
function Wr(e = "") {
  {
    var t = Qe(e + "");
    return ar(t, t), t;
  }
}
function Pr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qe();
  return e.append(t, r), ar(t, r), e;
}
function S(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const la = ["touchstart", "touchmove"];
function oa(e) {
  return la.includes(e);
}
function fa(e) {
  let t = 0, r = kt(0), n;
  return () => {
    yn() && (u(r), Js(() => (t === 0 && (n = Di(() => e(() => ir(r)))), t += 1, () => {
      Xe(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, ir(r));
      });
    })));
  };
}
var ua = jt | qt;
function ca(e, t, r, n) {
  new va(e, t, r, n);
}
var Se, dn, Te, pt, fe, me, ue, we, je, gt, at, Ut, or, fr, Ze, Ir, G, da, ha, ln, _a, on, er, xr, fn, un;
class va {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    A(this, G);
    /** @type {Boundary | null} */
    ge(this, "parent");
    ge(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ge(this, "transform_error");
    /** @type {TemplateNode} */
    A(this, Se);
    /** @type {TemplateNode | null} */
    A(this, dn, null);
    /** @type {BoundaryProps} */
    A(this, Te);
    /** @type {((anchor: Node) => void)} */
    A(this, pt);
    /** @type {Effect} */
    A(this, fe);
    /** @type {Effect | null} */
    A(this, me, null);
    /** @type {Effect | null} */
    A(this, ue, null);
    /** @type {Effect | null} */
    A(this, we, null);
    /** @type {DocumentFragment | null} */
    A(this, je, null);
    A(this, gt, 0);
    A(this, at, 0);
    A(this, Ut, !1);
    /** @type {Set<Effect>} */
    A(this, or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    A(this, fr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, Ze, null);
    A(this, Ir, fa(() => (E(this, Ze, kt(o(this, gt))), () => {
      E(this, Ze, null);
    })));
    var s;
    E(this, Se, t), E(this, Te, r), E(this, pt, (a) => {
      var l = (
        /** @type {Effect} */
        P
      );
      l.b = this, l.f |= Xr, n(a);
    }), this.parent = /** @type {Effect} */
    P.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), E(this, fe, Dr(() => {
      D(this, G, on).call(this);
    }, ua));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    li(t, o(this, or), o(this, fr));
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
  update_pending_count(t, r) {
    D(this, G, fn).call(this, t, r), E(this, gt, o(this, gt) + t), !(!o(this, Ze) || o(this, Ut)) && (E(this, Ut, !0), Xe(() => {
      E(this, Ut, !1), o(this, Ze) && zt(o(this, Ze), o(this, gt));
    }));
  }
  get_effect_pending() {
    return o(this, Ir).call(this), u(
      /** @type {Source<number>} */
      o(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Te).onerror && !o(this, Te).failed)
      throw t;
    k != null && k.is_fork ? (o(this, me) && k.skip_effect(o(this, me)), o(this, ue) && k.skip_effect(o(this, ue)), o(this, we) && k.skip_effect(o(this, we)), k.oncommit(() => {
      D(this, G, un).call(this, t);
    })) : D(this, G, un).call(this, t);
  }
}
Se = new WeakMap(), dn = new WeakMap(), Te = new WeakMap(), pt = new WeakMap(), fe = new WeakMap(), me = new WeakMap(), ue = new WeakMap(), we = new WeakMap(), je = new WeakMap(), gt = new WeakMap(), at = new WeakMap(), Ut = new WeakMap(), or = new WeakMap(), fr = new WeakMap(), Ze = new WeakMap(), Ir = new WeakMap(), G = new WeakSet(), da = function() {
  try {
    E(this, me, Ae(() => o(this, pt).call(this, o(this, Se))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ha = function(t) {
  const r = o(this, Te).failed, { reset: n, invoke_onerror: i } = D(this, G, ln).call(this, t);
  Xe(i), r && E(this, we, Ae(() => {
    r(
      o(this, Se),
      () => t,
      () => n
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
ln = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (r) {
      gs();
      return;
    }
    r = !0, n && Cs(), o(this, we) !== null && wt(o(this, we), () => {
      E(this, we, null);
    }), D(this, G, xr).call(this, () => {
      D(this, G, on).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var a, l;
    try {
      n = !0, (l = (a = o(this, Te)).onerror) == null || l.call(a, t, i), n = !1;
    } catch (f) {
      Ve(f, o(this, fe) && o(this, fe).parent);
    }
  } };
}, _a = function() {
  const t = o(this, Te).pending;
  t && (this.is_pending = !0, E(this, ue, Ae(() => t(o(this, Se)))), Xe(() => {
    var r = E(this, je, document.createDocumentFragment()), n = Qe(), i = !1;
    if (r.append(n), E(this, me, D(this, G, xr).call(this, () => {
      try {
        return Ae(() => o(this, pt).call(this, n));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (a) {
          Ve(a, o(this, fe).parent);
        }
        return null;
      }
    })), o(this, me) === null) {
      E(this, je, null), i && D(this, G, er).call(
        this,
        /** @type {Batch} */
        k
      );
      return;
    }
    o(this, at) === 0 && (o(this, Se).before(r), E(this, je, null), wt(
      /** @type {Effect} */
      o(this, ue),
      () => {
        E(this, ue, null);
      }
    ), D(this, G, er).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, at, 0), E(this, gt, 0), E(this, me, Ae(() => {
      o(this, pt).call(this, o(this, Se));
    })), o(this, at) > 0) {
      var t = E(this, je, document.createDocumentFragment());
      En(o(this, me), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, Te).pending
      );
      E(this, ue, Ae(() => r(o(this, Se))));
    } else
      D(this, G, er).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
er = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, or), o(this, fr));
}, /**
 * @template T
 * @param {() => T} fn
 */
xr = function(t) {
  var r = P, n = L, i = _e;
  Ke(o(this, fe)), Re(o(this, fe)), Bt(o(this, fe).ctx);
  try {
    return Et.ensure(), t();
  } finally {
    Ke(r), Re(n), Bt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && D(n = this.parent, G, fn).call(n, t, r);
    return;
  }
  E(this, at, o(this, at) + t), o(this, at) === 0 && (D(this, G, er).call(this, r), o(this, ue) && wt(o(this, ue), () => {
    E(this, ue, null);
  }), o(this, je) && (o(this, Se).before(o(this, je)), E(this, je, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  o(this, me) && (pe(o(this, me)), E(this, me, null)), o(this, ue) && (pe(o(this, ue)), E(this, ue, null)), o(this, we) && (pe(o(this, we)), E(this, we, null));
  let r = o(this, Te).failed;
  const n = (i) => {
    const { reset: s, invoke_onerror: a } = D(this, G, ln).call(this, i);
    a(), r && E(this, we, D(this, G, xr).call(this, () => {
      try {
        return Ae(() => {
          var l = (
            /** @type {Effect} */
            P
          );
          l.b = this, l.f |= Xr, r(
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
  Xe(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (s) {
      Ve(s, o(this, fe) && o(this, fe).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      n,
      /** @param {unknown} e */
      (s) => Ve(s, o(this, fe) && o(this, fe).parent)
    ) : n(i);
  });
};
function $(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Zt] ?? (e[Zt] = e.nodeValue)) && (e[Zt] = r, e.nodeValue = `${r}`);
}
function pa(e, t) {
  return ga(e, t);
}
const mr = /* @__PURE__ */ new Map();
function ga(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  Vs();
  var f = void 0, v = Ws(() => {
    var d = r ?? t.appendChild(Qe());
    ca(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Yt({});
        var m = (
          /** @type {ComponentContext} */
          _e
        );
        s && (m.c = s), i && (n.$$events = i), f = e(h, n) || ii(), Kt();
      },
      l
    );
    var _ = /* @__PURE__ */ new Set(), c = (h) => {
      for (var m = 0; m < h.length; m++) {
        var w = h[m];
        if (!_.has(w)) {
          _.add(w);
          var p = oa(w);
          for (const H of [t, document]) {
            var b = mr.get(H);
            b === void 0 && (b = /* @__PURE__ */ new Map(), mr.set(H, b));
            var X = b.get(w);
            X === void 0 ? (H.addEventListener(w, an, { passive: p }), b.set(w, 1)) : b.set(w, X + 1);
          }
        }
      }
    };
    return c(Or(Pi)), sn.add(c), () => {
      var p;
      for (var h of _)
        for (const b of [t, document]) {
          var m = (
            /** @type {Map<string, number>} */
            mr.get(b)
          ), w = (
            /** @type {number} */
            m.get(h)
          );
          --w == 0 ? (b.removeEventListener(h, an), m.delete(h), m.size === 0 && mr.delete(b)) : m.set(h, w);
        }
      sn.delete(c), d !== r && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return cn.set(f, v), f;
}
let cn = /* @__PURE__ */ new WeakMap();
function ma(e, t) {
  const r = cn.get(e);
  return r ? (cn.delete(e), r(t)) : Promise.resolve();
}
var Oe, Be, ye, mt, ur, cr, Nr;
class Hi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ge(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Oe, /* @__PURE__ */ new Map());
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
    A(this, Be, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, ye, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, mt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, ur, !0);
    /**
     * @param {Batch} batch
     */
    A(this, cr, (t) => {
      if (o(this, Oe).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, Oe).get(t)
        ), n = o(this, Be).get(r);
        if (n)
          Mr(n), o(this, mt).delete(r);
        else {
          var i = o(this, ye).get(r);
          i && (Mr(i.effect), o(this, Be).set(r, i.effect), o(this, ye).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of o(this, Oe)) {
          if (o(this, Oe).delete(s), s === t)
            break;
          const l = o(this, ye).get(a);
          l && (pe(l.effect), o(this, ye).delete(a));
        }
        for (const [s, a] of o(this, Be)) {
          if (s === r || o(this, mt).has(s)) continue;
          const l = () => {
            if (Array.from(o(this, Oe).values()).includes(s)) {
              var v = document.createDocumentFragment();
              En(a, v), v.append(Qe()), o(this, ye).set(s, { effect: a, fragment: v });
            } else
              pe(a);
            o(this, mt).delete(s), o(this, Be).delete(s);
          };
          o(this, ur) || !n ? (o(this, mt).add(s), wt(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, Nr, (t) => {
      o(this, Oe).delete(t);
      const r = Array.from(o(this, Oe).values());
      for (const [n, i] of o(this, ye))
        r.includes(n) || (pe(i.effect), o(this, ye).delete(n));
    });
    this.anchor = t, E(this, ur, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      k
    ), i = bi();
    if (r && !o(this, Be).has(t) && !o(this, ye).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = Qe();
        s.append(a), o(this, ye).set(t, {
          effect: Ae(() => r(a)),
          fragment: s
        });
      } else
        o(this, Be).set(
          t,
          Ae(() => r(this.anchor))
        );
    if (o(this, Oe).set(n, t), i) {
      for (const [l, f] of o(this, Be))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of o(this, ye))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, cr)), n.ondiscard(o(this, Nr));
    } else
      o(this, cr).call(this, n);
  }
}
Oe = new WeakMap(), Be = new WeakMap(), ye = new WeakMap(), mt = new WeakMap(), ur = new WeakMap(), cr = new WeakMap(), Nr = new WeakMap();
function K(e, t, r = !1) {
  var n = new Hi(e), i = r ? jt : 0;
  function s(a, l) {
    n.ensure(a, l);
  }
  Dr(() => {
    var a = !1;
    t((l, f = 0) => {
      a = !0, s(f, l);
    }), a || s(-1, null);
  }, i);
}
const wa = Symbol("NaN");
function ya(e, t, r) {
  var n = new Hi(e);
  Dr(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    wa), n.ensure(i, r);
  });
}
function ji(e, t) {
  return t;
}
function ba(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
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
            vn(e, Or(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var f = n.length === 0 && r !== null && e.pending.size === 0;
    if (f) {
      var v = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        v.parentNode
      );
      Gs(d), d.append(v), e.items.clear();
    }
    vn(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const l of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n != null && n.has(s)) {
      s.f |= Ge;
      const a = document.createDocumentFragment();
      En(s, a);
    } else
      pe(t[i], r);
  }
}
var Bn;
function lt(e, t, r, n, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map(), f = (t & 4) !== 0;
  if (f) {
    var v = (
      /** @type {Element} */
      e
    );
    a = v.appendChild(Qe());
  }
  var d = null, _ = /* @__PURE__ */ Ds(() => {
    var H = r();
    return (
      /** @type {V[]} */
      Zn(H) ? H : H == null ? [] : Or(H)
    );
  }), c, h = /* @__PURE__ */ new Map(), m = !0;
  function w(H) {
    (X.effect.f & xe) === 0 && (X.pending.delete(H), X.fallback = d, xa(X, c, a, t, n), d !== null && (c.length === 0 ? (d.f & Ge) === 0 ? Mr(d) : (d.f ^= Ge, tr(d, null, a)) : wt(d, () => {
      d = null;
    })));
  }
  function p(H) {
    X.pending.delete(H);
  }
  var b = Dr(() => {
    c = /** @type {V[]} */
    u(_);
    for (var H = c.length, Q = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      k
    ), I = bi(), g = 0; g < H; g += 1) {
      var M = c[g], q = n(M, g), j = m ? null : l.get(q);
      j ? (j.v && zt(j.v, M), j.i && zt(j.i, g), I && T.unskip_effect(j.e)) : (j = Ea(
        l,
        m ? a : Bn ?? (Bn = Qe()),
        M,
        q,
        g,
        i,
        t,
        r
      ), m || (j.e.f |= Ge), l.set(q, j)), Q.add(q);
    }
    if (H === 0 && s && !d && (m ? d = Ae(() => s(a)) : (d = Ae(() => s(Bn ?? (Bn = Qe()))), d.f |= Ge)), H > Q.size && ys(), !m)
      if (h.set(T, Q), I) {
        for (const [le, ve] of l)
          Q.has(le) || T.skip_effect(ve.e);
        T.oncommit(w), T.ondiscard(p);
      } else
        w(T);
    u(_);
  }), X = { effect: b, items: l, pending: h, outrogroups: null, fallback: d };
  m = !1;
}
function Wt(e) {
  for (; e !== null && (e.f & Me) === 0; )
    e = e.next;
  return e;
}
function xa(e, t, r, n, i) {
  var j, le, ve, oe, x, R, F, J, Ee;
  var s = (n & 8) !== 0, a = t.length, l = e.items, f = Wt(e.effect.first), v, d = null, _, c = [], h = [], m, w, p, b;
  if (s)
    for (b = 0; b < a; b += 1)
      m = t[b], w = i(m, b), p = /** @type {EachItem} */
      l.get(w).e, (p.f & Ge) === 0 && ((le = (j = p.nodes) == null ? void 0 : j.a) == null || le.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (b = 0; b < a; b += 1) {
    if (m = t[b], w = i(m, b), p = /** @type {EachItem} */
    l.get(w).e, e.outrogroups !== null)
      for (const re of e.outrogroups)
        re.pending.delete(p), re.done.delete(p);
    if ((p.f & ce) !== 0 && (Mr(p), s && ((oe = (ve = p.nodes) == null ? void 0 : ve.a) == null || oe.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), (p.f & Ge) !== 0)
      if (p.f ^= Ge, p === f)
        tr(p, null, r);
      else {
        var X = d ? d.next : f;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), it(e, d, p), it(e, p, X), tr(p, X, r), d = p, c = [], h = [], f = Wt(d.next);
        continue;
      }
    if (p !== f) {
      if (v !== void 0 && v.has(p)) {
        if (c.length < h.length) {
          var H = h[0], Q;
          d = H.prev;
          var T = c[0], I = c[c.length - 1];
          for (Q = 0; Q < c.length; Q += 1)
            tr(c[Q], H, r);
          for (Q = 0; Q < h.length; Q += 1)
            v.delete(h[Q]);
          it(e, T.prev, I.next), it(e, d, T), it(e, I, H), f = H, d = I, b -= 1, c = [], h = [];
        } else
          v.delete(p), tr(p, f, r), it(e, p.prev, p.next), it(e, p, d === null ? e.effect.first : d.next), it(e, d, p), d = p;
        continue;
      }
      for (c = [], h = []; f !== null && f !== p; )
        (v ?? (v = /* @__PURE__ */ new Set())).add(f), h.push(f), f = Wt(f.next);
      if (f === null)
        continue;
    }
    (p.f & Ge) === 0 && c.push(p), d = p, f = Wt(p.next);
  }
  if (e.outrogroups !== null) {
    for (const re of e.outrogroups)
      re.pending.size === 0 && (vn(e, Or(re.done)), (x = e.outrogroups) == null || x.delete(re));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || v !== void 0) {
    var g = [];
    if (v !== void 0)
      for (p of v)
        (p.f & ce) === 0 && g.push(p);
    for (; f !== null; )
      (f.f & ce) === 0 && f !== e.fallback && g.push(f), f = Wt(f.next);
    var M = g.length;
    if (M > 0) {
      var q = (n & 4) !== 0 && a === 0 ? r : null;
      if (s) {
        for (b = 0; b < M; b += 1)
          (F = (R = g[b].nodes) == null ? void 0 : R.a) == null || F.measure();
        for (b = 0; b < M; b += 1)
          (Ee = (J = g[b].nodes) == null ? void 0 : J.a) == null || Ee.fix();
      }
      ba(e, g, q);
    }
  }
  s && Xe(() => {
    var re, Tt;
    if (_ !== void 0)
      for (p of _)
        (Tt = (re = p.nodes) == null ? void 0 : re.a) == null || Tt.apply();
  });
}
function Ea(e, t, r, n, i, s, a, l) {
  var f = (a & 1) !== 0 ? (a & 16) === 0 ? /* @__PURE__ */ Bs(r, !1, !1) : kt(r) : null, v = (a & 2) !== 0 ? kt(i) : null;
  return {
    v: f,
    i: v,
    e: Ae(() => (s(t, f ?? r, v ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function tr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ge) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ hr(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function it(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ka(e, t, r) {
  Zs(() => {
    var n = Di(() => t(e, r == null ? void 0 : r()) || {});
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
const zn = [...` 	
\r\f \v\uFEFF`];
function Sa(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || zn.includes(n[a - 1])) && (l === n.length || zn.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
        }
  }
  return n === "" ? null : n;
}
function Zr(e, t, r, n, i, s) {
  var a = (
    /** @type {any} */
    e[Qr]
  );
  if (a !== r || a === void 0) {
    var l = Sa(r, n, s);
    l == null ? e.removeAttribute("class") : e.className = l, e[Qr] = r;
  } else if (s && i !== s)
    for (var f in s) {
      var v = !!s[f];
      (i == null || v !== !!i[f]) && e.classList.toggle(f, v);
    }
  return s;
}
const Ta = Symbol("is custom element"), Aa = Symbol("is html"), Ca = _s ? "progress" : "PROGRESS";
function Ma(e, t) {
  var r = Bi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ca) || (e.value = t ?? "");
}
function ze(e, t, r, n) {
  var i = Bi(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[ds] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ra(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[wr] ?? (e[wr] = {
      [Ta]: e.nodeName.includes("-"),
      [Aa]: e.namespaceURI === ns
    })
  );
}
var Vn = /* @__PURE__ */ new Map();
function Ra(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Vn.get(t);
  if (r) return r;
  Vn.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = ss(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = Jn(i);
  }
  return r;
}
function Er(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i), l;
  l = /** @type {V} */
  e[t], l === void 0 && n !== void 0 && (l = a());
  var f;
  return f = () => {
    var v = (
      /** @type {V} */
      e[t]
    );
    return v === void 0 ? a() : (s = !0, v);
  }, f;
}
const Ia = "5";
var $n;
typeof window < "u" && (($n = window.__svelte ?? (window.__svelte = {})).v ?? ($n.v = /* @__PURE__ */ new Set())).add(Ia);
let Fr = "";
function Na(e) {
  Fr = e;
}
async function pr(e, t) {
  const r = new URL(`${Fr}${e}`, window.location.origin);
  for (const [n, i] of Object.entries(t ?? {}))
    i != null && i !== "" && r.searchParams.set(n, String(i));
  try {
    const n = await fetch(r);
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
const Oa = (e) => pr("/accounts", e), La = (e) => pr(`/accounts/${encodeURIComponent(e)}`), Da = (e, t, r) => pr(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: r }), Pa = (e, t, r) => pr(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: r }), Fa = (e, t) => pr(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), Ua = (e, t, r) => `${Fr}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${r}`, Ha = (e, t, r = 0) => `${Fr}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${r}`;
var ja = /* @__PURE__ */ U('<img loading="lazy"/>'), Ba = /* @__PURE__ */ U('<span class="ofx-initials"> </span>');
function Sn(e, t) {
  Yt(t, !0);
  let r = Er(t, "src", 3, null), n = Er(t, "alt", 3, ""), i = Er(t, "name", 3, ""), s = /* @__PURE__ */ V(!1);
  const a = /* @__PURE__ */ xt(() => (i() || n() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var c;
    return ((c = _[0]) == null ? void 0 : c.toUpperCase()) ?? "";
  }).join(""));
  var l = Pr(), f = ft(l);
  {
    var v = (_) => {
      var c = ja();
      Y(() => {
        ze(c, "src", r()), ze(c, "alt", n());
      }), Fi("error", c, () => C(s, !0)), S(_, c);
    }, d = (_) => {
      var c = Ba(), h = ee(c, !0);
      Y(() => $(h, u(a))), S(_, c);
    };
    K(f, (_) => {
      r() && !u(s) ? _(v) : _(d, -1);
    });
  }
  S(e, l), Kt();
}
var za = /* @__PURE__ */ U(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Va = /* @__PURE__ */ U('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>'), Ga = /* @__PURE__ */ U('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), qa = /* @__PURE__ */ U('<div class="ofx-sentinel"></div>'), Ya = /* @__PURE__ */ U('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <div class="ofx-grid"><!> <!></div> <!>', 1);
function Ka(e, t) {
  Yt(t, !0);
  const r = 60;
  let n = /* @__PURE__ */ V(Je([])), i = /* @__PURE__ */ V(0), s = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V(""), f = /* @__PURE__ */ V(""), v;
  const d = /* @__PURE__ */ xt(() => u(n).length < u(i));
  async function _(x, R) {
    C(s, !0);
    const F = await Oa({ search: x, limit: r, offset: R });
    if (x !== u(l)) {
      C(s, !1);
      return;
    }
    F ? (C(n, R === 0 ? F.items : [...u(n), ...F.items], !0), C(i, F.total, !0), C(f, x, !0), C(a, !1)) : C(a, !0), C(s, !1);
  }
  bn(() => {
    _("", 0);
  });
  function c(x) {
    C(l, x.currentTarget.value, !0), clearTimeout(v), v = setTimeout(() => _(u(l), 0), 250);
  }
  function h(x) {
    const R = new IntersectionObserver(
      (F) => {
        var J;
        (J = F[0]) != null && J.isIntersecting && u(d) && !u(s) && _(u(f), u(n).length);
      },
      { rootMargin: "600px" }
    );
    return R.observe(x), { destroy: () => R.disconnect() };
  }
  var m = Ya(), w = O(ft(m), 2), p = W(w);
  {
    var b = (x) => {
      var R = Wr();
      Y(
        (F, J) => $(R, `${F ?? ""} of ${J ?? ""}
        ${u(f) ? `matching “${u(f)}”` : "accounts"}`),
        [
          () => u(n).length.toLocaleString(),
          () => u(i).toLocaleString()
        ]
      ), S(x, R);
    }, X = (x) => {
      var R = Wr("loading…");
      S(x, R);
    }, H = (x) => {
      var R = Wr("no accounts indexed yet");
      S(x, R);
    };
    K(p, (x) => {
      u(i) ? x(b) : u(s) ? x(X, 1) : x(H, -1);
    });
  }
  var Q = O(w, 2), T = O(W(Q), 2), I = O(Q, 2);
  {
    var g = (x) => {
      var R = za();
      S(x, R);
    };
    K(I, (x) => {
      u(a) && x(g);
    });
  }
  var M = O(I, 2), q = W(M);
  lt(q, 17, () => u(n), (x) => x.handle, (x, R) => {
    var F = Va(), J = W(F), Ee = W(J);
    Sn(Ee, {
      get src() {
        return u(R).avatar_url;
      },
      get alt() {
        return u(R).display_name;
      },
      get name() {
        return u(R).display_name;
      }
    });
    var re = O(J, 2), Tt = ee(re, !0), gr = O(re, 2), Ur = ee(gr);
    Y(() => {
      ze(F, "href", `/x/onlyfans/${u(R).handle ?? ""}`), ze(re, "title", u(R).display_name), $(Tt, u(R).display_name), $(Ur, `${u(R).source_count ?? ""}
                ${u(R).source_count === 1 ? "site" : "sites"}`);
    }), Le("click", F, (rt) => {
      rt.metaKey || rt.ctrlKey || rt.shiftKey || rt.button !== 0 || (rt.preventDefault(), t.navigate(`/x/onlyfans/${u(R).handle}`));
    }), S(x, F);
  });
  var j = O(q, 2);
  {
    var le = (x) => {
      var R = Pr(), F = ft(R);
      lt(F, 16, () => Array(12), ji, (J, Ee) => {
        var re = Ga();
        S(J, re);
      }), S(x, R);
    };
    K(j, (x) => {
      u(s) && x(le);
    });
  }
  var ve = O(M, 2);
  {
    var oe = (x) => {
      var R = qa();
      ka(R, (F) => h == null ? void 0 : h(F)), S(x, R);
    };
    K(ve, (x) => {
      u(d) && x(oe);
    });
  }
  Y(() => Ma(T, u(l))), Le("input", T, c), S(e, m), Kt();
}
kn(["input", "click"]);
var $a = /* @__PURE__ */ U('<p class="ofx-error"> </p>'), Wa = /* @__PURE__ */ U('<p class="ofx-note"> </p>'), Gn = /* @__PURE__ */ U('<span class="ofx-badge"> </span>'), Za = /* @__PURE__ */ U('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), Xa = /* @__PURE__ */ U('<div class="ofx-skeleton"></div>'), Ja = /* @__PURE__ */ U('<button class="ofx-btn ofx-outline" type="button"> </button>'), Qa = /* @__PURE__ */ U('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function el(e, t) {
  Yt(t, !0);
  let r = /* @__PURE__ */ V(Je([])), n = /* @__PURE__ */ V(0), i = /* @__PURE__ */ V(!1), s = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(!1);
  async function l() {
    if (u(i) || u(s)) return;
    C(i, !0);
    const T = u(n) + 1, g = await (t.mode === "images" ? Pa : Da)(t.handle, t.site, T);
    g === null ? C(a, !0) : (C(r, [...u(r), ...g], !0), C(n, T), g.length === 0 && C(s, !0)), C(i, !1);
  }
  bn(() => {
    t.mode, C(r, [], !0), C(n, 0), C(s, !1), C(a, !1), l();
  });
  function f(T) {
    return T ? `${Math.floor(T / 60)}:${String(T % 60).padStart(2, "0")}` : null;
  }
  var v = Qa(), d = W(v), _ = ee(d, !0), c = O(d, 2);
  {
    var h = (T) => {
      var I = $a(), g = ee(I);
      Y(() => $(g, `${t.site ?? ""} did not answer.`)), S(T, I);
    }, m = (T) => {
      var I = Wa(), g = ee(I);
      Y(() => $(g, `Nothing here on ${t.site ?? ""}.`)), S(T, I);
    };
    K(c, (T) => {
      u(a) ? T(h) : !u(i) && u(r).length === 0 && T(m, 1);
    });
  }
  var w = O(c, 2), p = W(w);
  lt(p, 17, () => u(r), (T) => T.video_id ?? T.gallery_id, (T, I) => {
    var g = Za(), M = W(g), q = W(M);
    {
      let F = /* @__PURE__ */ xt(() => t.mode === "images" ? u(I).cover : u(I).thumbnail);
      Sn(q, {
        get src() {
          return u(F);
        },
        get alt() {
          return u(I).title;
        },
        get name() {
          return u(I).title;
        }
      });
    }
    var j = O(q, 2);
    {
      var le = (F) => {
        var J = Gn(), Ee = ee(J, !0);
        Y(() => $(Ee, u(I).image_count)), S(F, J);
      }, ve = (F) => {
        var J = Gn(), Ee = ee(J, !0);
        Y((re) => $(Ee, re), [() => f(u(I).duration)]), S(F, J);
      }, oe = /* @__PURE__ */ xt(() => f(u(I).duration));
      K(j, (F) => {
        t.mode === "images" && u(I).image_count ? F(le) : u(oe) && F(ve, 1);
      });
    }
    var x = O(M, 2), R = ee(x, !0);
    Y(() => $(R, u(I).title)), Le("click", g, () => t.mode === "images" ? t.ongallery(u(I)) : t.onplay(u(I))), S(T, g);
  });
  var b = O(p, 2);
  {
    var X = (T) => {
      var I = Pr(), g = ft(I);
      lt(g, 16, () => Array(4), ji, (M, q) => {
        var j = Xa();
        S(M, j);
      }), S(T, I);
    };
    K(b, (T) => {
      u(i) && T(X);
    });
  }
  var H = O(w, 2);
  {
    var Q = (T) => {
      var I = Ja(), g = ee(I, !0);
      Y(() => {
        I.disabled = u(i), $(g, u(i) ? "Loading…" : "Load more");
      }), Le("click", I, l), S(T, I);
    };
    K(H, (T) => {
      !u(s) && !u(a) && u(r).length > 0 && T(Q);
    });
  }
  Y(() => $(_, t.site)), S(e, v), Kt();
}
kn(["click"]);
var tl = /* @__PURE__ */ U('<p class="ofx-error">That account could not be loaded.</p>'), rl = /* @__PURE__ */ U('<div class="ofx-banner"><img alt=""/></div>'), nl = /* @__PURE__ */ aa('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), il = /* @__PURE__ */ U('<p class="ofx-bio"> </p>'), sl = /* @__PURE__ */ U("<span><b> </b> </span>"), al = /* @__PURE__ */ U('<div class="ofx-stats"></div>'), ll = /* @__PURE__ */ U("<span> </span>"), qn = /* @__PURE__ */ U('<a target="_blank" rel="noreferrer noopener"> </a>'), ol = /* @__PURE__ */ U('<button type="button"> </button>'), fl = /* @__PURE__ */ U('<span class="ofx-count"> </span>'), ul = /* @__PURE__ */ U('<button type="button"> <!></button>'), cl = /* @__PURE__ */ U('<p class="ofx-error"> </p>'), vl = /* @__PURE__ */ U(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), dl = /* @__PURE__ */ U('<header class="ofx-header"><!> <div><div class="ofx-avatar"><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div></header> <div class="ofx-controls"><div class="ofx-toggle"></div> <span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!>', 1), hl = /* @__PURE__ */ U('<p class="ofx-note">Loading…</p>'), _l = /* @__PURE__ */ U('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), pl = /* @__PURE__ */ U('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), gl = /* @__PURE__ */ U('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), ml = /* @__PURE__ */ U("<!> <!> <!>", 1);
function wl(e, t) {
  Yt(t, !0);
  let r = /* @__PURE__ */ V(null), n = /* @__PURE__ */ V(!1), i = /* @__PURE__ */ V("videos"), s = /* @__PURE__ */ V(Je(/* @__PURE__ */ new Set())), a = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V(null), f = /* @__PURE__ */ V(null);
  bn(() => {
    La(t.handle).then((g) => {
      g ? C(r, g, !0) : C(n, !0);
    });
  });
  const v = /* @__PURE__ */ xt(() => {
    var g, M, q, j;
    return [
      ["photos", (g = u(r)) == null ? void 0 : g.photos_count],
      ["videos", (M = u(r)) == null ? void 0 : M.videos_count],
      ["posts", (q = u(r)) == null ? void 0 : q.posts_count],
      ["likes", (j = u(r)) == null ? void 0 : j.likes_count]
    ].filter(([, le]) => le != null);
  });
  function d(g) {
    const M = new Set(u(s));
    M.has(g) ? M.delete(g) : M.add(g), C(s, M, !0);
  }
  async function _(g) {
    C(f, null);
    const M = await Fa(g.site, g.gallery_id);
    if (!M) {
      C(f, "Could not open that gallery");
      return;
    }
    if (M.length === 0) {
      C(f, "That site served no images for this gallery");
      return;
    }
    C(l, { gallery: g, count: M.length, index: 0 }, !0);
  }
  function c(g) {
    u(l) && C(
      l,
      {
        ...u(l),
        index: (u(l).index + g + u(l).count) % u(l).count
      },
      !0
    );
  }
  function h(g) {
    if (g.key === "Escape") {
      C(a, null), C(l, null);
      return;
    }
    u(l) && (g.key === "ArrowRight" && c(1), g.key === "ArrowLeft" && c(-1));
  }
  var m = ml();
  Fi("keydown", nn, h);
  var w = ft(m);
  {
    var p = (g) => {
      var M = tl();
      S(g, M);
    }, b = (g) => {
      var M = dl(), q = ft(M), j = W(q);
      {
        var le = (y) => {
          var N = rl(), z = ee(N);
          Y(() => ze(z, "src", u(r).header_url)), S(y, N);
        };
        K(j, (y) => {
          u(r).header_url && y(le);
        });
      }
      var ve = O(j, 2);
      let oe;
      var x = W(ve), R = W(x);
      Sn(R, {
        get src() {
          return u(r).avatar_url;
        },
        get alt() {
          return u(r).display_name;
        },
        get name() {
          return u(r).display_name;
        }
      });
      var F = O(x, 2), J = W(F), Ee = W(J), re = O(Ee);
      {
        var Tt = (y) => {
          var N = nl();
          S(y, N);
        };
        K(re, (y) => {
          u(r).is_verified && y(Tt);
        });
      }
      var gr = O(J, 2), Ur = ee(gr), rt = O(gr, 2);
      {
        var zi = (y) => {
          var N = il(), z = ee(N, !0);
          Y(() => $(z, u(r).bio)), S(y, N);
        };
        K(rt, (y) => {
          u(r).bio && y(zi);
        });
      }
      var Tn = O(rt, 2);
      {
        var Vi = (y) => {
          var N = al();
          lt(N, 21, () => u(v), ([z, Ue]) => z, (z, Ue) => {
            var ct = /* @__PURE__ */ xt(() => us(u(Ue), 2));
            let Hr = () => u(ct)[0], jr = () => u(ct)[1];
            var nt = sl(), $t = W(nt), Br = ee($t, !0), Qi = O($t);
            Y(
              (es) => {
                $(Br, es), $(Qi, ` ${Hr() ?? ""}`);
              },
              [() => jr().toLocaleString()]
            ), S(z, nt);
          }), S(y, N);
        };
        K(Tn, (y) => {
          u(v).length && y(Vi);
        });
      }
      var Gi = O(Tn, 2), An = W(Gi);
      {
        var qi = (y) => {
          var N = ll(), z = ee(N, !0);
          Y(() => $(z, u(r).location)), S(y, N);
        };
        K(An, (y) => {
          u(r).location && y(qi);
        });
      }
      var Cn = O(An, 2);
      {
        var Yi = (y) => {
          var N = qn(), z = ee(N, !0);
          Y(
            (Ue) => {
              ze(N, "href", u(r).website), $(z, Ue);
            },
            [() => u(r).website.replace(/^https?:\/\//, "")]
          ), S(y, N);
        };
        K(Cn, (y) => {
          u(r).website && y(Yi);
        });
      }
      var Ki = O(Cn, 2);
      {
        var $i = (y) => {
          var N = qn(), z = ee(N);
          Y(() => {
            ze(N, "href", u(r).of_url), $(z, `onlyfans.com/${u(r).of_username ?? ""}`);
          }), S(y, N);
        };
        K(Ki, (y) => {
          u(r).of_url && y($i);
        });
      }
      var Mn = O(q, 2), Rn = W(Mn);
      lt(Rn, 20, () => ["videos", "images"], (y) => y, (y, N) => {
        var z = ol();
        let Ue;
        var ct = ee(z, !0);
        Y(() => {
          Ue = Zr(z, 1, "ofx-btn", null, Ue, { "ofx-on": u(i) === N }), $(ct, N);
        }), Le("click", z, () => C(i, N, !0)), S(y, z);
      });
      var In = O(Rn, 4);
      lt(In, 17, () => u(r).sources, (y) => y.site, (y, N) => {
        var z = ul();
        let Ue;
        var ct = W(z), Hr = O(ct);
        {
          var jr = (nt) => {
            var $t = fl(), Br = ee($t, !0);
            Y(() => $(Br, u(N).video_count)), S(nt, $t);
          };
          K(Hr, (nt) => {
            u(N).video_count && nt(jr);
          });
        }
        Y(
          (nt) => {
            Ue = Zr(z, 1, "ofx-btn ofx-outline", null, Ue, { "ofx-on": nt }), $(ct, `${u(N).site ?? ""} `);
          },
          [() => u(s).has(u(N).site)]
        ), Le("click", z, () => d(u(N).site)), S(y, z);
      });
      var Wi = O(In, 2), Nn = O(Mn, 2);
      {
        var Zi = (y) => {
          var N = cl(), z = ee(N, !0);
          Y(() => $(z, u(f))), S(y, N);
        };
        K(Nn, (y) => {
          u(f) && y(Zi);
        });
      }
      var On = O(Nn, 2);
      {
        var Xi = (y) => {
          var N = vl();
          S(y, N);
        };
        K(On, (y) => {
          u(s).size === 0 && y(Xi);
        });
      }
      var Ji = O(On, 2);
      lt(Ji, 17, () => u(r).sources.filter((y) => u(s).has(y.site)), (y) => y.site, (y, N) => {
        el(y, {
          get handle() {
            return u(r).handle;
          },
          get site() {
            return u(N).site;
          },
          get mode() {
            return u(i);
          },
          onplay: (z) => C(a, z, !0),
          ongallery: _
        });
      }), Y(() => {
        oe = Zr(ve, 1, "ofx-identity", null, oe, { "ofx-overlap": !!u(r).header_url }), $(Ee, `${u(r).display_name ?? ""} `), $(Ur, `${u(r).source_count ?? ""}
                    ${u(r).source_count === 1 ? "site" : "sites"} · ${u(r).handle ?? ""}`);
      }), Le("click", Wi, () => t.navigate("/x/onlyfans")), S(g, M);
    }, X = (g) => {
      var M = hl();
      S(g, M);
    };
    K(w, (g) => {
      u(n) ? g(p) : u(r) ? g(b, 1) : g(X, -1);
    });
  }
  var H = O(w, 2);
  {
    var Q = (g) => {
      var M = _l(), q = W(M), j = O(q, 2);
      Y((le) => ze(j, "src", le), [
        () => Ha(u(a).site, u(a).video_id)
      ]), Le("click", q, () => C(a, null)), S(g, M);
    };
    K(H, (g) => {
      u(a) && g(Q);
    });
  }
  var T = O(H, 2);
  {
    var I = (g) => {
      var M = gl(), q = W(M), j = O(q, 2);
      {
        var le = (oe) => {
          var x = pl(), R = ft(x), F = O(R, 2);
          Le("click", R, () => c(-1)), Le("click", F, () => c(1)), S(oe, x);
        };
        K(j, (oe) => {
          u(l).count > 1 && oe(le);
        });
      }
      var ve = O(j, 2);
      Y(
        (oe) => {
          ze(ve, "src", oe), ze(ve, "alt", `${u(l).gallery.title ?? ""} ${u(l).index + 1} of ${u(l).count ?? ""}`);
        },
        [
          () => Ua(u(l).gallery.site, u(l).gallery.gallery_id, u(l).index)
        ]
      ), Le("click", q, () => C(l, null)), S(g, M);
    };
    K(T, (g) => {
      u(l) && g(I);
    });
  }
  S(e, m), Kt();
}
kn(["click"]);
var yl = /* @__PURE__ */ U('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function bl(e, t) {
  Yt(t, !0);
  let r = Er(t, "path", 3, "");
  Na(t.api);
  const n = /* @__PURE__ */ xt(() => (r() || "").split("/").filter(Boolean)[0] ?? "");
  var i = yl(), s = W(i), a = W(s);
  {
    var l = (v) => {
      var d = Pr(), _ = ft(d);
      ya(_, () => u(n), (c) => {
        wl(c, {
          get handle() {
            return u(n);
          },
          get navigate() {
            return t.navigate;
          }
        });
      }), S(v, d);
    }, f = (v) => {
      Ka(v, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    K(a, (v) => {
      u(n) ? v(l) : v(f, -1);
    });
  }
  S(e, i), Kt();
}
function kl({ target: e, path: t, api: r, navigate: n }) {
  const i = Je({ path: t ?? "", api: r, navigate: n }), s = pa(bl, { target: e, props: i });
  return {
    update(a) {
      i.path = a ?? "";
    },
    destroy() {
      ma(s);
    }
  };
}
export {
  kl as default
};

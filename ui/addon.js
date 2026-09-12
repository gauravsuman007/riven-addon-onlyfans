var da = Object.defineProperty;
var Wr = (e) => {
  throw TypeError(e);
};
var ha = (e, t, n) => t in e ? da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ee = (e, t, n) => ha(e, typeof t != "symbol" ? t + "" : t, n), or = (e, t, n) => t.has(e) || Wr("Cannot " + n);
var f = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), N = (e, t, n) => t.has(e) ? Wr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), C = (e, t, n, r) => (or(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), F = (e, t, n) => (or(e, t, "access private method"), n);
const re = Symbol("uninitialized"), _a = "http://www.w3.org/1999/xhtml", ui = !1;
var ci = Array.isArray, pa = Array.prototype.indexOf, qn = Array.prototype.includes, $n = Array.from, vi = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, ga = Object.getOwnPropertyDescriptors, ma = Object.prototype, wa = Array.prototype, di = Object.getPrototypeOf, Zr = Object.isExtensible;
const ya = () => {
};
function ba(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hi() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function xa(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const se = 2, tn = 4, er = 8, _i = 1 << 24, Be = 16, Pe = 32, ut = 64, hr = 128, Mr = 256, De = 512, ie = 1024, te = 2048, Ve = 4096, pe = 8192, Me = 16384, sn = 32768, Vn = 1 << 25, Lt = 65536, Gn = 1 << 17, Ea = 1 << 18, on = 1 << 19, ka = 1 << 20, Je = 1 << 25, Dt = 65536, Yn = 1 << 21, Kt = 1 << 22, yt = 1 << 23, Un = Symbol("$state"), pi = Symbol("component"), Sa = Symbol(""), Hn = Symbol("attributes"), _r = Symbol("class"), Aa = Symbol("style"), vn = Symbol("text"), Cn = new class extends Error {
  constructor() {
    super(...arguments);
    Ee(this, "name", "StaleReactionError");
    Ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var oi;
const Ta = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((oi = globalThis.document) != null && oi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ca() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ma() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function gi(e) {
  return e === this.v;
}
function Ra(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function mi(e) {
  return !Ra(e, this.v);
}
function Ia() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Na(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Oa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Da(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ha() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function za() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ja = !1, ge = null;
function nn(e) {
  ge = e;
}
function xt(e, t = !1, n) {
  ge = {
    p: ge,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      U
    ),
    l: null
  };
}
function Et(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Fi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ge = t.p, Rr(e);
}
function Rr(e = {}) {
  return vi(e, pi, { value: !0 }), e;
}
function wi() {
  return !0;
}
let Gt = [];
function Ba() {
  var e = Gt;
  Gt = [], ba(e);
}
function ot(e) {
  if (Gt.length === 0) {
    var t = Gt;
    queueMicrotask(() => {
      t === Gt && Ba();
    });
  }
  Gt.push(e);
}
const qa = -7169;
function $(e, t) {
  e.f = e.f & qa | t;
}
function Ir(e) {
  (e.f & De) !== 0 || e.deps === null ? $(e, ie) : $(e, Ve);
}
function yi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & se) === 0 || (t.f & Dt) === 0 || (t.f ^= Dt, yi(
        /** @type {Derived} */
        t.deps
      ));
}
function bi(e, t, n) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & Ve) !== 0 && n.add(e), yi(e.deps), $(e, ie);
}
function Mn(e) {
  var t = L, n = U;
  Fe(null), nt(null);
  try {
    return e();
  } finally {
    Fe(t), nt(n);
  }
}
function Va(e, t, n, r) {
  const i = Nr;
  var a = e.filter((h) => !h.settled), s = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(s);
    return;
  }
  var l = (
    /** @type {Effect} */
    U
  ), o = Ga(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function d(h) {
    if ((l.f & Me) === 0) {
      o();
      try {
        r([...s, ...h]);
      } catch (g) {
        Xe(g, l);
      }
      Kn();
    }
  }
  var p = xi();
  if (n.length === 0) {
    c.then(() => d([])).finally(p);
    return;
  }
  function v() {
    Promise.all(n.map((h) => /* @__PURE__ */ Ya(h))).then(d).catch((h) => Xe(h, l)).finally(p);
  }
  c ? c.then(() => {
    o(), v(), Kn();
  }) : v();
}
function Ga() {
  var e = (
    /** @type {Effect} */
    U
  ), t = L, n = ge, r = (
    /** @type {Batch} */
    M
  );
  return function(a = !0) {
    nt(e), Fe(t), nn(n), a && (e.f & Me) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Kn(e = !0) {
  nt(null), Fe(null), nn(null), e && (M == null || M.deactivate());
}
function xi() {
  var e = (
    /** @type {Effect} */
    U
  ), t = e.b, n = (
    /** @type {Batch} */
    M
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Nr(e) {
  var t = se | te;
  return U !== null && (U.f |= on), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: gi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      re
    ),
    wv: 0,
    parent: U,
    ac: null
  };
}
const dn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ya(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    U
  );
  r === null && Ia();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ft(
    /** @type {V} */
    re
  ), s = !L, l = /* @__PURE__ */ new Set();
  return ls(() => {
    var h, g;
    var o = (
      /** @type {Effect} */
      U
    ), c = hi();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (w) => {
        w !== Cn && c.reject(w);
      }).finally(Kn);
    } catch (w) {
      c.reject(w), Kn();
    }
    var d = (
      /** @type {Batch} */
      M
    );
    if (s) {
      if ((o.f & sn) !== 0)
        var p = xi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (g = d.async_deriveds.get(o)) == null || g.reject(dn);
      else
        for (const w of l.values())
          w.reject(dn);
      l.add(c), d.async_deriveds.set(o, c);
    }
    const v = (w, _ = void 0) => {
      p == null || p(), l.delete(c), _ !== dn && (d.activate(), _ ? (a.f |= yt, rn(a, _)) : ((a.f & yt) !== 0 && (a.f ^= yt), rn(a, w)), d.deactivate());
    };
    c.promise.then(v, (w) => v(null, w || "unknown"));
  }), Pi(() => {
    for (const o of l)
      o.reject(dn);
  }), new Promise((o) => {
    function c(d) {
      function p() {
        d === i ? o(a) : c(i);
      }
      d.then(p, p);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  const t = /* @__PURE__ */ Nr(e);
  return Vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  const t = /* @__PURE__ */ Nr(e);
  return t.equals = mi, t;
}
function Wa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ye(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Or(e) {
  var t, n = U, r = e.parent;
  if (!bt && r !== null && e.v !== re && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Me | pe)) !== 0)
    return Ca(), e.v;
  nt(r);
  try {
    e.f &= ~Dt, Wa(e), t = Wi(e);
  } finally {
    nt(n);
  }
  return t;
}
function Ei(e) {
  var t = Or(e);
  if (!e.equals(t) && (e.wv = Yi(), (!(M != null && M.is_fork) || e.deps === null) && (M !== null ? (M.capture(e, t, !0), wn == null || wn.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    $(e, ie);
    return;
  }
  bt || (oe !== null ? (Pr() || M != null && M.is_fork) && oe.set(e, t) : Ir(e));
}
function Za(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && Mn(() => {
        n.ac.abort(Cn), n.ac = null;
      }), n.fn !== null && (n.teardown = ya), bn(n, 0), Ur(n));
}
function ki(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && an(t);
}
let lr = null, qt = null, M = null, wn = null, oe = null, pr = null, fr = !1, Yt = null, zn = null;
var Xr = 0;
let Xa = 1;
var Wt, gt, Tt, Zt, Xt, Jt, it, Qt, me, En, at, ze, Ye, $t, Ct, G, gr, hn, mr, Si, Ai, Vt, Ja, _n;
const Xn = class Xn {
  constructor() {
    N(this, G);
    Ee(this, "id", Xa++);
    /** True as soon as `#process` was called */
    N(this, Wt, !1);
    Ee(this, "linked", !0);
    /** @type {Batch | null} */
    N(this, gt, null);
    /** @type {Batch | null} */
    N(this, Tt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ee(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Zt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    N(this, Jt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    N(this, it, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, Qt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, me, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    N(this, En, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, at, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    N(this, $t, /* @__PURE__ */ new Set());
    Ee(this, "is_fork", !1);
    N(this, Ct, !1);
    qt === null ? lr = qt = this : (C(qt, Tt, this), C(this, gt, qt)), qt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Ye).has(t) || f(this, Ye).set(t, { d: [], m: [] }), f(this, $t).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = f(this, Ye).get(t);
    if (r) {
      f(this, Ye).delete(t);
      for (var i of r.d)
        $(i, te), n(i);
      for (i of r.m)
        $(i, Ve), n(i);
    }
    f(this, $t).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== re && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & yt) === 0 && (this.current.set(t, [n, r]), oe == null || oe.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    M = this;
  }
  deactivate() {
    M = null, oe = null;
  }
  flush() {
    try {
      fr = !0, M = this, F(this, G, hn).call(this);
    } finally {
      Xr = 0, pr = null, Yt = null, zn = null, fr = !1, M = null, oe = null, et.clear();
    }
  }
  discard() {
    var t;
    for (const n of f(this, Xt)) n(this);
    f(this, Xt).clear();
    for (const n of this.async_deriveds.values())
      n.reject(dn);
    F(this, G, _n).call(this), (t = f(this, Qt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    f(this, En).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (C(this, Jt, f(this, Jt) + 1), t) {
      let r = f(this, it).get(n) ?? 0;
      f(this, it).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (C(this, Jt, f(this, Jt) - 1), t) {
      let r = f(this, it).get(n) ?? 0;
      r === 1 ? f(this, it).delete(n) : f(this, it).set(n, r - 1);
    }
    f(this, Ct) || (C(this, Ct, !0), ot(() => {
      C(this, Ct, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      f(this, at).add(r);
    for (const r of n)
      f(this, ze).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, Zt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Xt).add(t);
  }
  settled() {
    return (f(this, Qt) ?? C(this, Qt, hi())).promise;
  }
  static ensure() {
    if (M === null) {
      const t = M = new Xn();
      fr || ot(() => {
        f(t, Wt) || t.flush();
      });
    }
    return M;
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
    if (pr = t, (i = t.b) != null && i.is_pending && (t.f & (tn | er | _i)) !== 0 && (t.f & sn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Yt !== null && n === U && (L === null || (L.f & se) === 0))
        return;
      if ((r & (ut | Pe)) !== 0) {
        if ((r & ie) === 0)
          return;
        n.f ^= ie;
      }
    }
    f(this, me).push(n);
  }
};
Wt = new WeakMap(), gt = new WeakMap(), Tt = new WeakMap(), Zt = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), it = new WeakMap(), Qt = new WeakMap(), me = new WeakMap(), En = new WeakMap(), at = new WeakMap(), ze = new WeakMap(), Ye = new WeakMap(), $t = new WeakMap(), Ct = new WeakMap(), G = new WeakSet(), gr = function() {
  if (this.is_fork) return !0;
  for (const r of f(this, it).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (f(this, Ye).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, hn = function() {
  var o, c, d, p;
  C(this, Wt, !0), Xr++ > 1e3 && (F(this, G, _n).call(this), Qa());
  for (const v of f(this, at))
    f(this, ze).delete(v), $(v, te), this.schedule(v);
  for (const v of f(this, ze))
    $(v, Ve), this.schedule(v);
  const t = f(this, me);
  C(this, me, []), this.apply();
  var n = Yt = [], r = [], i = zn = [];
  for (const v of t)
    try {
      F(this, G, mr).call(this, v, n, r);
    } catch (h) {
      throw Mi(v), F(this, G, gr).call(this) || this.discard(), h;
    }
  if (M = null, i.length > 0) {
    var a = Xn.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Yt = null, zn = null, F(this, G, gr).call(this)) {
    F(this, G, Vt).call(this, r), F(this, G, Vt).call(this, n);
    for (const [v, h] of f(this, Ye))
      Ci(v, h);
    i.length > 0 && /** @type {unknown} */
    F(o = M, G, hn).call(o);
    return;
  }
  const s = F(this, G, Si).call(this);
  if (s) {
    F(this, G, Vt).call(this, r), F(this, G, Vt).call(this, n), F(c = s, G, Ai).call(c, this);
    return;
  }
  f(this, at).clear(), f(this, ze).clear();
  for (const v of f(this, Zt)) v(this);
  f(this, Zt).clear(), wn = this, Jr(r), Jr(n), wn = null, (d = f(this, Qt)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    M
  );
  if (f(this, Jt) === 0 && (f(this, me).length === 0 || l !== null) && F(this, G, _n).call(this), f(this, me).length > 0)
    if (l !== null) {
      const v = l;
      f(v, me).push(...f(this, me).filter((h) => !f(v, me).includes(h)));
    } else
      l = this;
  l !== null && (et.clear(), F(p = l, G, hn).call(p));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mr = function(t, n, r) {
  t.f ^= ie;
  for (var i = t.first; i !== null; ) {
    var a = i.f, s = (a & (Pe | ut)) !== 0, l = s && (a & ie) !== 0, o = l || (a & pe) !== 0 || f(this, Ye).has(i);
    if (!o && i.fn !== null) {
      s ? i.f ^= ie : (a & tn) !== 0 ? n.push(i) : Nn(i) && ((a & Be) !== 0 && f(this, ze).add(i), an(i));
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
}, Si = function() {
  for (var t = f(this, gt); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = f(t, gt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ai = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && a.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(f(t, at), f(t, ze));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & se) !== 0 && (i.f & (te | Ve)) === 0))
      for (const o of a) {
        var s = o.f;
        if ((s & se) !== 0)
          n(
            /** @type {Derived} */
            o
          );
        else {
          var l = (
            /** @type {Effect} */
            o
          );
          s & (Kt | Be) && !this.async_deriveds.has(l) && (f(this, ze).delete(l), $(l, te), this.schedule(l));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), F(r = t, G, _n).call(r), M = this, F(this, G, hn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Vt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    bi(t[n], f(this, at), f(this, ze));
}, Ja = function() {
  var p;
  for (let v = lr; v !== null; v = f(v, Tt)) {
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
    if (!(!f(v, Wt) || i.length === 0)) {
      var a = i.filter((h) => !this.current.has(h));
      if (a.length === 0)
        t && v.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of f(this, $t))
            v.unskip_effect(h, (g) => {
              var w;
              (g.f & (Be | Kt)) !== 0 ? v.schedule(g) : F(w = v, G, Vt).call(w, [g]);
            });
        v.activate();
        var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n)
          Ti(o, a, s, l);
        l = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([h, g]) => {
          const w = this.current.get(h);
          return w ? w[0] !== g[0] || w[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of f(this, En))
            (h.f & (Me | pe | Gn)) === 0 && Lr(h, c, l) && ((h.f & (Kt | Be)) !== 0 ? ($(h, te), v.schedule(h)) : f(v, at).add(h));
        if (f(v, me).length > 0 && !f(v, Ct)) {
          v.apply();
          for (var d of f(v, me))
            F(p = v, G, mr).call(p, d, [], []);
          C(v, me, []);
        }
        v.deactivate();
      }
    }
  }
}, _n = function() {
  if (this.linked) {
    var t = f(this, gt), n = f(this, Tt);
    t === null ? lr = n : C(t, Tt, n), n === null ? qt = t : C(n, gt, t), this.linked = !1;
  }
};
let Pt = Xn;
function Qa() {
  try {
    Pa();
  } catch (e) {
    Xe(e, pr);
  }
}
let He = null;
function Jr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Me | pe)) === 0 && Nn(r) && (He = /* @__PURE__ */ new Set(), an(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ji(r), (He == null ? void 0 : He.size) > 0)) {
        et.clear();
        for (const i of He) {
          if ((i.f & (Me | pe)) !== 0) continue;
          const a = [i];
          let s = i.parent;
          for (; s !== null; )
            He.has(s) && (He.delete(s), a.push(s)), s = s.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const o = a[l];
            (o.f & (Me | pe)) === 0 && an(o);
          }
        }
        He.clear();
      }
    }
    He = null;
  }
}
function Ti(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & se) !== 0 ? Ti(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Kt | Be)) !== 0 && (a & te) === 0 && Lr(i, t, r) && ($(i, te), Dr(
        /** @type {Effect} */
        i
      ));
    }
}
function Lr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (qn.call(t, i))
        return !0;
      if ((i.f & se) !== 0 && Lr(
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
function Dr(e) {
  M.schedule(e);
}
function Ci(e, t) {
  if (!((e.f & Pe) !== 0 && (e.f & ie) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & Ve) !== 0 && t.m.push(e), $(e, ie);
    for (var n = e.first; n !== null; )
      Ci(n, t), n = n.next;
  }
}
function Mi(e) {
  $(e, ie);
  for (var t = e.first; t !== null; )
    Mi(t), t = t.next;
}
let Wn = /* @__PURE__ */ new Set();
const et = /* @__PURE__ */ new Map();
let Ri = !1;
function Ft(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: gi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const n = Ft(e);
  return Vi(n), n;
}
// @__NO_SIDE_EFFECTS__
function $a(e, t = !1, n = !0) {
  const r = Ft(e);
  return t || (r.equals = mi), r;
}
function E(e, t, n = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!qe || (L.f & Gn) !== 0) && wi() && (L.f & (se | Be | Kt | Gn)) !== 0 && (tt === null || !tt.has(e)) && Ha();
  let r = n ? Qe(t) : t;
  return rn(e, r, zn);
}
function rn(e, t, n = null) {
  if (!e.equals(t)) {
    bt ? et.set(e, t) : et.has(e) || et.set(e, e.v);
    var r = Pt.ensure();
    if (r.capture(e, t), (e.f & se) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && Or(i), oe === null && Ir(i);
    }
    e.wv = Yi(), Ii(e, te, n), U !== null && (U.f & ie) !== 0 && (U.f & (Pe | ut)) === 0 && (Ie === null ? cs([e]) : Ie.push(e)), !r.is_fork && Wn.size > 0 && !Ri && es();
  }
  return t;
}
function es() {
  Ri = !1;
  for (const e of Wn) {
    (e.f & ie) !== 0 && $(e, Ve);
    let t;
    try {
      t = Nn(e);
    } catch {
      t = !0;
    }
    t && an(e);
  }
  Wn.clear();
}
function yn(e) {
  E(e, e.v + 1);
}
function Ii(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var s = r[a], l = s.f, o = (l & te) === 0;
      if (o && $(s, t), (l & Gn) !== 0)
        Wn.add(
          /** @type {Effect} */
          s
        );
      else if ((l & se) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        oe == null || oe.delete(c), (l & Dt) === 0 && (l & De && (U === null || (U.f & Yn) === 0) && (s.f |= Dt), Ii(c, Ve, n));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          s
        );
        (l & Be) !== 0 && He !== null && He.add(d), n !== null ? n.push(d) : Dr(d);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Un in e || pi in e)
    return e;
  const t = di(e);
  if (t !== ma && t !== wa)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ci(e), i = /* @__PURE__ */ H(0), a = Ot, s = (l) => {
    if (Ot === a)
      return l();
    var o = L, c = Ot;
    Fe(null), $r(a);
    var d = l();
    return Fe(o), $r(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Fa();
        var d = n.get(o);
        return d === void 0 ? s(() => {
          var p = /* @__PURE__ */ H(c.value);
          return n.set(o, p), p;
        }) : E(d, c.value, !0), !0;
      },
      deleteProperty(l, o) {
        var c = n.get(o);
        if (c === void 0) {
          if (o in l) {
            const d = s(() => /* @__PURE__ */ H(re));
            n.set(o, d), yn(i);
          }
        } else
          E(c, re), yn(i);
        return !0;
      },
      get(l, o, c) {
        var h;
        if (o === Un)
          return e;
        var d = n.get(o), p = o in l;
        if (d === void 0 && (!p || (h = mn(l, o)) != null && h.writable) && (d = s(() => {
          var g = Qe(p ? l[o] : re), w = /* @__PURE__ */ H(g);
          return w;
        }), n.set(o, d)), d !== void 0) {
          var v = u(d);
          return v === re ? void 0 : v;
        }
        return Reflect.get(l, o, c);
      },
      getOwnPropertyDescriptor(l, o) {
        var c = Reflect.getOwnPropertyDescriptor(l, o);
        if (c && "value" in c) {
          var d = n.get(o);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var p = n.get(o), v = p == null ? void 0 : p.v;
          if (p !== void 0 && v !== re)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, o) {
        var v;
        if (o === Un)
          return !0;
        var c = n.get(o), d = c !== void 0 && c.v !== re || Reflect.has(l, o);
        if (c !== void 0 || U !== null && (!d || (v = mn(l, o)) != null && v.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? Qe(l[o]) : re, g = /* @__PURE__ */ H(h);
            return g;
          }), n.set(o, c));
          var p = u(c);
          if (p === re)
            return !1;
        }
        return d;
      },
      set(l, o, c, d) {
        var D;
        var p = n.get(o), v = o in l;
        if (r && o === "length")
          for (var h = c; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? E(g, re) : h in l && (g = s(() => /* @__PURE__ */ H(re)), n.set(h + "", g));
          }
        if (p === void 0)
          (!v || (D = mn(l, o)) != null && D.writable) && (p = s(() => /* @__PURE__ */ H(void 0)), E(p, Qe(c)), n.set(o, p));
        else {
          v = p.v !== re;
          var w = s(() => Qe(c));
          E(p, w);
        }
        var _ = Reflect.getOwnPropertyDescriptor(l, o);
        if (_ != null && _.set && _.set.call(d, c), !v) {
          if (r && typeof o == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), B = Number(o);
            Number.isInteger(B) && B >= y.v && E(y, B + 1);
          }
          yn(i);
        }
        return !0;
      },
      ownKeys(l) {
        u(i);
        var o = Reflect.ownKeys(l).filter((p) => {
          var v = n.get(p);
          return v === void 0 || v.v !== re;
        });
        for (var [c, d] of n)
          d.v !== re && !(c in l) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        Ua();
      }
    }
  );
}
var wr, Ni, Oi, Li;
function ts() {
  if (wr === void 0) {
    wr = window, Ni = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Oi = mn(t, "firstChild").get, Li = mn(t, "nextSibling").get, Zr(e) && (e[_r] = void 0, e[Hn] = null, e[Aa] = void 0, e.__e = void 0), Zr(n) && (n[vn] = void 0);
  }
}
function ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Oi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return (
    /** @type {TemplateNode | null} */
    Li.call(e)
  );
}
function Z(e, t) {
  return /* @__PURE__ */ Ut(e);
}
function Ce(e, t = !1) {
  {
    var n = /* @__PURE__ */ Ut(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Rn(n) : n;
  }
}
function J(e, t = !1) {
  return /* @__PURE__ */ Ut(e);
}
function k(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(r);
  return r;
}
function ns(e) {
  e.textContent = "";
}
function Di() {
  return !1;
}
function rs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function is(e) {
  var t = U;
  if (t === null)
    return L.f |= yt, e;
  if ((t.f & sn) === 0 && (t.f & tn) === 0)
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  if (!(t !== null && (t.f & Me) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & hr) !== 0 && (t.f & (Me | Vn)) === 0) {
        if ((t.f & sn) === 0)
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
function as(e) {
  U === null && (L === null && Da(), La()), bt && Oa();
}
function ss(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ct(e, t) {
  var n = U;
  n !== null && (n.f & pe) !== 0 && (e |= pe);
  var r = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | te | De,
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
  M == null || M.register_created_effect(r);
  var i = r;
  if ((e & tn) !== 0)
    Yt !== null ? Yt.push(r) : Pt.ensure().schedule(r);
  else if (t !== null) {
    try {
      an(r);
    } catch (s) {
      throw ye(r), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & on) === 0 && (i = i.first, (e & Be) !== 0 && (e & Lt) !== 0 && i !== null && (i.f |= Lt));
  }
  if (i !== null && (i.parent = n, n !== null && ss(i, n), L !== null && (L.f & se) !== 0 && (e & ut) === 0)) {
    var a = (
      /** @type {Derived} */
      L
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Pr() {
  return L !== null && !qe;
}
function Pi(e) {
  const t = ct(er, null);
  return $(t, ie), t.teardown = e, t;
}
function Fr(e) {
  as();
  var t = (
    /** @type {Effect} */
    U.f
  ), n = !L && (t & Pe) !== 0 && ge !== null && !ge.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ge
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Fi(e);
}
function Fi(e) {
  return ct(tn | ka, e);
}
function os(e) {
  Pt.ensure();
  const t = ct(ut | on, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nt(t, () => {
      ye(t), r(void 0);
    }) : (ye(t), r(void 0));
  });
}
function Ui(e) {
  return ct(tn, e);
}
function ls(e) {
  return ct(Kt | on, e);
}
function Hi(e, t = 0) {
  return ct(er | t, e);
}
function W(e, t = [], n = [], r = []) {
  Va(r, t, n, (i) => {
    ct(er, () => {
      e(...i.map(u));
    });
  });
}
function In(e, t = 0) {
  var n = ct(Be | t, e);
  return n;
}
function Le(e) {
  return ct(Pe | on, e);
}
function zi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = bt, r = L;
    Qr(!0), Fe(null);
    try {
      t.call(null);
    } catch (i) {
      Xe(i, e.parent);
    } finally {
      Qr(n), Fe(r);
    }
  }
}
function Ur(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Mn(() => {
      i.abort(Cn);
    });
    var r = n.next;
    (n.f & ut) !== 0 ? n.parent = null : ye(n, t), n = r;
  }
}
function fs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Pe) === 0 && ye(t), t = n;
  }
}
function ye(e, t = !0) {
  var n = !1;
  (t || (e.f & Ea) !== 0) && e.nodes !== null && e.nodes.end !== null && (us(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Vn, Ur(e, t && !n), bn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  zi(e), e.f ^= Vn, e.f |= Me;
  var i = e.parent;
  i !== null && i.first !== null && ji(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function us(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Rn(e);
    e.remove(), e = n;
  }
}
function ji(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nt(e, t, n = !0) {
  var r = [];
  e.f |= Mr, Bi(e, r, !0);
  var i = () => {
    n && ye(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var s = () => --a || i();
    for (var l of r)
      l.out(s);
  } else
    i();
}
function Bi(e, t, n) {
  if ((e.f & pe) === 0) {
    e.f ^= pe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & ut) === 0) {
        var s = (i.f & Lt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Pe) !== 0 && (e.f & Be) !== 0;
        Bi(i, t, s ? n : !1);
      }
      i = a;
    }
  }
}
function Zn(e) {
  e.f &= ~Mr, qi(e, !0);
}
function qi(e, t) {
  if ((e.f & Mr) === 0 && (e.f & pe) !== 0) {
    e.f ^= pe, (e.f & ie) === 0 && ($(e, te), Pt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Lt) !== 0 || (n.f & Pe) !== 0;
      qi(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || t) && s.in();
  }
}
function Hr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Rn(n);
      t.append(n), n = i;
    }
}
let jn = !1, bt = !1;
function Qr(e) {
  bt = e;
}
let L = null, qe = !1;
function Fe(e) {
  L = e;
}
let U = null;
function nt(e) {
  U = e;
}
let tt = null;
function Vi(e) {
  L !== null && (tt ?? (tt = /* @__PURE__ */ new Set())).add(e);
}
let we = null, Te = 0, Ie = null;
function cs(e) {
  Ie = e;
}
let Gi = 1, St = 0, Ot = St;
function $r(e) {
  Ot = e;
}
function Yi() {
  return ++Gi;
}
function Nn(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & se && (e.f &= ~Dt), (t & Ve) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Nn(
        /** @type {Derived} */
        a
      ) && Ei(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & De) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    oe === null && $(e, ie);
  }
  return !1;
}
function Ki(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(tt !== null && tt.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & se) !== 0 ? Ki(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? $(a, te) : (a.f & ie) !== 0 && $(a, Ve), Dr(
        /** @type {Effect} */
        a
      ));
    }
}
function Wi(e) {
  var t = we, n = Te, r = Ie, i = L, a = tt, s = ge, l = qe, o = Ot, c = e.f;
  we = /** @type {null | Value[]} */
  null, Te = 0, Ie = null, L = (c & (Pe | ut)) === 0 ? e : null, tt = null, nn(e.ctx), qe = !1, Ot = ++St, e.ac !== null && (Mn(() => {
    e.ac.abort(Cn);
  }), e.ac = null);
  try {
    e.f |= Yn;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d();
    e.f |= sn;
    var v = ei(e);
    if (wi() && Ie !== null && !qe && v !== null && (e.f & (se | Ve | te)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Ie.length; h++)
        Ki(
          Ie[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (St++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = St;
      if (t !== null)
        for (const g of t)
          g.rv = St;
      Ie !== null && (r === null ? r = Ie : r.push(.../** @type {Source[]} */
      Ie));
    }
    return (e.f & yt) !== 0 && (e.f ^= yt), p;
  } catch (g) {
    return ei(e), is(g);
  } finally {
    e.f ^= Yn, we = t, Te = n, Ie = r, L = i, tt = a, nn(s), qe = l, Ot = o;
  }
}
function ei(e) {
  var i;
  var t = e.deps, n = M == null ? void 0 : M.is_fork;
  if (we !== null) {
    var r;
    if (n || bn(e, Te), t !== null && Te > 0)
      for (t.length = Te + we.length, r = 0; r < we.length; r++)
        t[Te + r] = we[r];
    else
      e.deps = t = we;
    if (Pr() && (e.f & De) !== 0)
      for (r = Te; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Te < t.length && (bn(e, Te), t.length = Te);
  return t;
}
function vs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = pa.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !qn.call(we, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & De) !== 0 && (a.f ^= De, a.f &= ~Dt), a.v !== re && Ir(a), a.ac !== null && Mn(() => {
      a.ac.abort(Cn), a.ac = null, $(a, te);
    }), Za(a), bn(a, 0);
  }
}
function bn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      vs(e, n[r]);
}
function an(e) {
  var t = e.f;
  if ((t & Me) === 0) {
    $(e, ie);
    var n = U, r = jn;
    U = e, jn = (t & (Pe | ut)) === 0;
    try {
      (t & (Be | _i)) !== 0 ? fs(e) : Ur(e), zi(e);
      var i = Wi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Gi;
      var a;
      ui && ja && (e.f & te) !== 0 && e.deps;
    } finally {
      jn = r, U = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & se) !== 0;
  if (L !== null && !qe) {
    var r = U !== null && (U.f & Me) !== 0;
    if (!r && (tt === null || !tt.has(e))) {
      var i = L.deps;
      if ((L.f & Yn) !== 0)
        e.rv < St && (e.rv = St, we === null && i !== null && i[Te] === e ? Te++ : we === null ? we = [e] : we.push(e));
      else {
        L.deps ?? (L.deps = []), qn.call(L.deps, e) || L.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [L] : qn.call(a, L) || a.push(L);
      }
    }
  }
  if (bt && et.has(e))
    return et.get(e);
  if (n) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (bt) {
      var l = s.v;
      return ((s.f & ie) === 0 && s.reactions !== null || Xi(s)) && (l = Or(s)), et.set(s, l), l;
    }
    var o = (s.f & De) === 0 && !qe && L !== null && (jn || (L.f & De) !== 0), c = (s.f & sn) === 0;
    Nn(s) && (o && (s.f |= De), Ei(s)), o && !c && (ki(s), Zi(s));
  }
  if (oe != null && oe.has(e))
    return oe.get(e);
  if ((e.f & yt) !== 0)
    throw e.v;
  return e.v;
}
function Zi(e) {
  if (e.f |= De, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & se) !== 0 && (t.f & De) === 0 && (ki(
        /** @type {Derived} */
        t
      ), Zi(
        /** @type {Derived} */
        t
      ));
}
function Xi(e) {
  if (e.v === re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (et.has(t) || (t.f & se) !== 0 && Xi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function tr(e) {
  var t = qe;
  try {
    return qe = !0, e();
  } finally {
    qe = t;
  }
}
const At = Symbol("events"), Ji = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Set();
function ds(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || br.call(t, a), !a.cancelBubble)
      return Mn(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ot(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Qi(e, t, n, r, i) {
  var a = { capture: r, passive: i }, s = ds(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Pi(() => {
    t.removeEventListener(e, s, a);
  });
}
function _e(e, t, n) {
  (t[At] ?? (t[At] = {}))[e] = n;
}
function nr(e) {
  for (var t = 0; t < e.length; t++)
    Ji.add(e[t]);
  for (var n of yr)
    n(e);
}
let ur = null, cr = !1;
function br(e) {
  var w, _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ur = e, cr || (cr = !0, setTimeout(() => {
    cr = !1, ur = null;
  }));
  var s = 0, l = ur === e && e[At];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[At] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    o <= c && (s = o);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    vi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = L, p = U;
    Fe(null), nt(null);
    try {
      for (var v, h = []; a !== null && a !== t; ) {
        try {
          var g = (_ = a[At]) == null ? void 0 : _[r];
          g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && g.call(a, e);
        } catch (y) {
          v ? h.push(y) : v = y;
        }
        if (e.cancelBubble) break;
        s++, a = s < i.length ? (
          /** @type {Element} */
          i[s]
        ) : null;
      }
      if (v) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[At] = t, delete e.currentTarget, Fe(d), nt(p);
    }
  }
}
var li;
const vr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((li = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : li.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function hs(e) {
  return (
    /** @type {string} */
    (vr == null ? void 0 : vr.createHTML(e)) ?? e
  );
}
function $i(e) {
  var t = rs("template");
  return t.innerHTML = hs(e.replaceAll("<!>", "<!---->")), t.content;
}
function xn(e, t) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = $i(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Ni ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ut(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      xn(l, o);
    } else
      xn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function _s(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        $i(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ut(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ut(l);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return xn(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function ps(e, t) {
  return /* @__PURE__ */ _s(e, t, "svg");
}
function Dn(e = "") {
  {
    var t = ft(e + "");
    return xn(t, t), t;
  }
}
function On() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ft();
  return e.append(t, n), xn(t, n), e;
}
function b(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const gs = ["touchstart", "touchmove"];
function ms(e) {
  return gs.includes(e);
}
function ws(e) {
  let t = 0, n = Ft(0), r;
  return () => {
    Pr() && (u(n), Hi(() => (t === 0 && (r = tr(() => e(() => yn(n)))), t += 1, () => {
      ot(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, yn(n));
      });
    })));
  };
}
var ys = Lt | on;
function bs(e, t, n, r) {
  new xs(e, t, n, r);
}
var Ne, Cr, Oe, Mt, de, ke, he, Se, Ke, Rt, mt, en, kn, Sn, st, Jn, X, Es, ks, xr, Ss, Er, pn, Bn, kr, Sr;
class xs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    N(this, X);
    /** @type {Boundary | null} */
    Ee(this, "parent");
    Ee(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ee(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, Ne);
    /** @type {TemplateNode | null} */
    N(this, Cr, null);
    /** @type {BoundaryProps} */
    N(this, Oe);
    /** @type {((anchor: Node) => void)} */
    N(this, Mt);
    /** @type {Effect} */
    N(this, de);
    /** @type {Effect | null} */
    N(this, ke, null);
    /** @type {Effect | null} */
    N(this, he, null);
    /** @type {Effect | null} */
    N(this, Se, null);
    /** @type {DocumentFragment | null} */
    N(this, Ke, null);
    N(this, Rt, 0);
    N(this, mt, 0);
    N(this, en, !1);
    /** @type {Set<Effect>} */
    N(this, kn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, Sn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, st, null);
    N(this, Jn, ws(() => (C(this, st, Ft(f(this, Rt))), () => {
      C(this, st, null);
    })));
    var a;
    C(this, Ne, t), C(this, Oe, n), C(this, Mt, (s) => {
      var l = (
        /** @type {Effect} */
        U
      );
      l.b = this, l.f |= hr, r(s);
    }), this.parent = /** @type {Effect} */
    U.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), C(this, de, In(() => {
      F(this, X, Er).call(this);
    }, ys));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    bi(t, f(this, kn), f(this, Sn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, Oe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    F(this, X, kr).call(this, t, n), C(this, Rt, f(this, Rt) + t), !(!f(this, st) || f(this, en)) && (C(this, en, !0), ot(() => {
      C(this, en, !1), f(this, st) && rn(f(this, st), f(this, Rt));
    }));
  }
  get_effect_pending() {
    return f(this, Jn).call(this), u(
      /** @type {Source<number>} */
      f(this, st)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!f(this, Oe).onerror && !f(this, Oe).failed)
      throw t;
    M != null && M.is_fork ? (f(this, ke) && M.skip_effect(f(this, ke)), f(this, he) && M.skip_effect(f(this, he)), f(this, Se) && M.skip_effect(f(this, Se)), M.oncommit(() => {
      F(this, X, Sr).call(this, t);
    })) : F(this, X, Sr).call(this, t);
  }
}
Ne = new WeakMap(), Cr = new WeakMap(), Oe = new WeakMap(), Mt = new WeakMap(), de = new WeakMap(), ke = new WeakMap(), he = new WeakMap(), Se = new WeakMap(), Ke = new WeakMap(), Rt = new WeakMap(), mt = new WeakMap(), en = new WeakMap(), kn = new WeakMap(), Sn = new WeakMap(), st = new WeakMap(), Jn = new WeakMap(), X = new WeakSet(), Es = function() {
  try {
    C(this, ke, Le(() => f(this, Mt).call(this, f(this, Ne))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ks = function(t) {
  const n = f(this, Oe).failed, { reset: r, invoke_onerror: i } = F(this, X, xr).call(this, t);
  ot(i), n && C(this, Se, Le(() => {
    n(
      f(this, Ne),
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
xr = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ma();
      return;
    }
    n = !0, r && za(), f(this, Se) !== null && Nt(f(this, Se), () => {
      C(this, Se, null);
    }), F(this, X, Bn).call(this, () => {
      F(this, X, Er).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var s, l;
    try {
      r = !0, (l = (s = f(this, Oe)).onerror) == null || l.call(s, t, i), r = !1;
    } catch (o) {
      Xe(o, f(this, de) && f(this, de).parent);
    }
  } };
}, Ss = function() {
  const t = f(this, Oe).pending;
  t && (this.is_pending = !0, C(this, he, Le(() => t(f(this, Ne)))), ot(() => {
    var n = C(this, Ke, document.createDocumentFragment()), r = ft(), i = !1;
    if (n.append(r), C(this, ke, F(this, X, Bn).call(this, () => {
      try {
        return Le(() => f(this, Mt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (s) {
          Xe(s, f(this, de).parent);
        }
        return null;
      }
    })), f(this, ke) === null) {
      C(this, Ke, null), i && F(this, X, pn).call(
        this,
        /** @type {Batch} */
        M
      );
      return;
    }
    f(this, mt) === 0 && (f(this, Ne).before(n), C(this, Ke, null), Nt(
      /** @type {Effect} */
      f(this, he),
      () => {
        C(this, he, null);
      }
    ), F(this, X, pn).call(
      this,
      /** @type {Batch} */
      M
    ));
  }));
}, Er = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, mt, 0), C(this, Rt, 0), C(this, ke, Le(() => {
      f(this, Mt).call(this, f(this, Ne));
    })), f(this, mt) > 0) {
      var t = C(this, Ke, document.createDocumentFragment());
      Hr(f(this, ke), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        f(this, Oe).pending
      );
      C(this, he, Le(() => n(f(this, Ne))));
    } else
      F(this, X, pn).call(
        this,
        /** @type {Batch} */
        M
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
pn = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, kn), f(this, Sn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Bn = function(t) {
  var n = U, r = L, i = ge;
  nt(f(this, de)), Fe(f(this, de)), nn(f(this, de).ctx);
  try {
    return Pt.ensure(), t();
  } finally {
    nt(n), Fe(r), nn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
kr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && F(r = this.parent, X, kr).call(r, t, n);
    return;
  }
  C(this, mt, f(this, mt) + t), f(this, mt) === 0 && (F(this, X, pn).call(this, n), f(this, he) && Nt(f(this, he), () => {
    C(this, he, null);
  }), f(this, Ke) && (f(this, Ne).before(f(this, Ke)), C(this, Ke, null)));
}, /**
 * @param {unknown} error
 */
Sr = function(t) {
  f(this, ke) && (ye(f(this, ke)), C(this, ke, null)), f(this, he) && (ye(f(this, he)), C(this, he, null)), f(this, Se) && (ye(f(this, Se)), C(this, Se, null));
  let n = f(this, Oe).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: s } = F(this, X, xr).call(this, i);
    s(), n && C(this, Se, F(this, X, Bn).call(this, () => {
      try {
        return Le(() => {
          var l = (
            /** @type {Effect} */
            U
          );
          l.b = this, l.f |= hr, n(
            f(this, Ne),
            () => i,
            () => a
          );
        });
      } catch (l) {
        return Xe(
          l,
          /** @type {Effect} */
          f(this, de).parent
        ), null;
      }
    }));
  };
  ot(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (a) {
      Xe(a, f(this, de) && f(this, de).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => Xe(a, f(this, de) && f(this, de).parent)
    ) : r(i);
  });
};
function K(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[vn] ?? (e[vn] = e.nodeValue)) && (e[vn] = n, e.nodeValue = `${n}`);
}
function As(e, t) {
  return Ts(e, t);
}
const Pn = /* @__PURE__ */ new Map();
function Ts(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: l }) {
  ts();
  var o = void 0, c = os(() => {
    var d = n ?? t.appendChild(ft());
    bs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        xt({});
        var g = (
          /** @type {ComponentContext} */
          ge
        );
        a && (g.c = a), i && (r.$$events = i), o = e(h, r) || Rr(), Et();
      },
      l
    );
    var p = /* @__PURE__ */ new Set(), v = (h) => {
      for (var g = 0; g < h.length; g++) {
        var w = h[g];
        if (!p.has(w)) {
          p.add(w);
          var _ = ms(w);
          for (const D of [t, document]) {
            var y = Pn.get(D);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Pn.set(D, y));
            var B = y.get(w);
            B === void 0 ? (D.addEventListener(w, br, { passive: _ }), y.set(w, 1)) : y.set(w, B + 1);
          }
        }
      }
    };
    return v($n(Ji)), yr.add(v), () => {
      var _;
      for (var h of p)
        for (const y of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Pn.get(y)
          ), w = (
            /** @type {number} */
            g.get(h)
          );
          --w == 0 ? (y.removeEventListener(h, br), g.delete(h), g.size === 0 && Pn.delete(y)) : g.set(h, w);
        }
      yr.delete(v), d !== n && ((_ = d.parentNode) == null || _.removeChild(d));
    };
  });
  return Ar.set(o, c), o;
}
let Ar = /* @__PURE__ */ new WeakMap();
function Cs(e, t) {
  const n = Ar.get(e);
  return n ? (Ar.delete(e), n(t)) : Promise.resolve();
}
var je, We, Ae, It, An, Tn, Qn;
class zr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    N(this, je, /* @__PURE__ */ new Map());
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
    N(this, We, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    N(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    N(this, It, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    N(this, An, !0);
    /**
     * @param {Batch} batch
     */
    N(this, Tn, (t) => {
      if (f(this, je).has(t)) {
        var n = (
          /** @type {Key} */
          f(this, je).get(t)
        ), r = f(this, We).get(n);
        if (r)
          Zn(r), f(this, It).delete(n);
        else {
          var i = f(this, Ae).get(n);
          i && (Zn(i.effect), f(this, We).set(n, i.effect), f(this, Ae).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, s] of f(this, je)) {
          if (f(this, je).delete(a), a === t)
            break;
          const l = f(this, Ae).get(s);
          l && (ye(l.effect), f(this, Ae).delete(s));
        }
        for (const [a, s] of f(this, We)) {
          if (a === n || f(this, It).has(a)) continue;
          const l = () => {
            if (Array.from(f(this, je).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Hr(s, c), c.append(ft()), f(this, Ae).set(a, { effect: s, fragment: c });
            } else
              ye(s);
            f(this, It).delete(a), f(this, We).delete(a);
          };
          f(this, An) || !r ? (f(this, It).add(a), Nt(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    N(this, Qn, (t) => {
      f(this, je).delete(t);
      const n = Array.from(f(this, je).values());
      for (const [r, i] of f(this, Ae))
        n.includes(r) || (ye(i.effect), f(this, Ae).delete(r));
    });
    this.anchor = t, C(this, An, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      M
    ), i = Di();
    if (n && !f(this, We).has(t) && !f(this, Ae).has(t))
      if (i) {
        var a = document.createDocumentFragment(), s = ft();
        a.append(s), f(this, Ae).set(t, {
          effect: Le(() => n(s)),
          fragment: a
        });
      } else
        f(this, We).set(
          t,
          Le(() => n(this.anchor))
        );
    if (f(this, je).set(r, t), i) {
      for (const [l, o] of f(this, We))
        l === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [l, o] of f(this, Ae))
        l === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(f(this, Tn)), r.ondiscard(f(this, Qn));
    } else
      f(this, Tn).call(this, r);
  }
}
je = new WeakMap(), We = new WeakMap(), Ae = new WeakMap(), It = new WeakMap(), An = new WeakMap(), Tn = new WeakMap(), Qn = new WeakMap();
function Ms(e, t, ...n) {
  var r = new zr(e);
  In(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Lt);
}
function V(e, t, n = !1) {
  var r = new zr(e), i = n ? Lt : 0;
  function a(s, l) {
    r.ensure(s, l);
  }
  In(() => {
    var s = !1;
    t((l, o = 0) => {
      s = !0, a(o, l);
    }), s || a(-1, null);
  }, i);
}
const Rs = Symbol("NaN");
function ea(e, t, n) {
  var r = new zr(e);
  In(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Rs), r.ensure(i, n);
  });
}
function jr(e, t) {
  return t;
}
function Is(e, t, n) {
  for (var r = [], i = t.length, a, s = t.length, l = 0; l < i; l++) {
    let p = t[l];
    Nt(
      p,
      () => {
        if (a) {
          if (a.pending.delete(p), a.done.add(p), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Tr(e, $n(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var o = r.length === 0 && n !== null && e.pending.size === 0;
    if (o) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      ns(d), d.append(c), e.items.clear();
    }
    Tr(e, t, !o);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Tr(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const s of e.pending.values())
      for (const l of s)
        r.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (r != null && r.has(a)) {
      a.f |= Je;
      const s = document.createDocumentFragment();
      Hr(a, s);
    } else
      ye(t[i], n);
  }
}
var ti;
function $e(e, t, n, r, i, a = null) {
  var s = e, l = /* @__PURE__ */ new Map(), o = (t & 4) !== 0;
  if (o) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(ft());
  }
  var d = null, p = /* @__PURE__ */ Ka(() => {
    var D = n();
    return (
      /** @type {V[]} */
      ci(D) ? D : D == null ? [] : $n(D)
    );
  }), v, h = /* @__PURE__ */ new Map(), g = !0;
  function w(D) {
    (B.effect.f & Me) === 0 && (B.pending.delete(D), B.fallback = d, Ns(B, v, s, t, r), d !== null && (v.length === 0 ? (d.f & Je) === 0 ? Zn(d) : (d.f ^= Je, gn(d, null, s)) : Nt(d, () => {
      d = null;
    })));
  }
  function _(D) {
    B.pending.delete(D);
  }
  var y = In(() => {
    v = /** @type {V[]} */
    u(p);
    for (var D = v.length, z = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      M
    ), R = Di(), P = 0; P < D; P += 1) {
      var ae = v[P], m = r(ae, P), x = g ? null : l.get(m);
      x ? (x.v && rn(x.v, ae), x.i && rn(x.i, P), R && T.unskip_effect(x.e)) : (x = Os(
        l,
        g ? s : ti ?? (ti = ft()),
        ae,
        m,
        P,
        i,
        t,
        n
      ), g || (x.e.f |= Je), l.set(m, x)), z.add(m);
    }
    if (D === 0 && a && !d && (g ? d = Le(() => a(s)) : (d = Le(() => a(ti ?? (ti = ft()))), d.f |= Je)), D > z.size && Na(), !g)
      if (h.set(T, z), R) {
        for (const [j, Q] of l)
          z.has(j) || T.skip_effect(Q.e);
        T.oncommit(w), T.ondiscard(_);
      } else
        w(T);
    u(p);
  }), B = { effect: y, items: l, pending: h, outrogroups: null, fallback: d };
  g = !1;
}
function cn(e) {
  for (; e !== null && (e.f & Pe) === 0; )
    e = e.next;
  return e;
}
function Ns(e, t, n, r, i) {
  var x, j, Q, ue, be, le, ne, ce, Re;
  var a = (r & 8) !== 0, s = t.length, l = e.items, o = cn(e.effect.first), c, d = null, p, v = [], h = [], g, w, _, y;
  if (a)
    for (y = 0; y < s; y += 1)
      g = t[y], w = i(g, y), _ = /** @type {EachItem} */
      l.get(w).e, (_.f & Je) === 0 && ((j = (x = _.nodes) == null ? void 0 : x.a) == null || j.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(_));
  for (y = 0; y < s; y += 1) {
    if (g = t[y], w = i(g, y), _ = /** @type {EachItem} */
    l.get(w).e, e.outrogroups !== null)
      for (const A of e.outrogroups)
        A.pending.delete(_), A.done.delete(_);
    if ((_.f & pe) !== 0 && (Zn(_), a && ((ue = (Q = _.nodes) == null ? void 0 : Q.a) == null || ue.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(_))), (_.f & Je) !== 0)
      if (_.f ^= Je, _ === o)
        gn(_, null, n);
      else {
        var B = d ? d.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), pt(e, d, _), pt(e, _, B), gn(_, B, n), d = _, v = [], h = [], o = cn(d.next);
        continue;
      }
    if (_ !== o) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < h.length) {
          var D = h[0], z;
          d = D.prev;
          var T = v[0], R = v[v.length - 1];
          for (z = 0; z < v.length; z += 1)
            gn(v[z], D, n);
          for (z = 0; z < h.length; z += 1)
            c.delete(h[z]);
          pt(e, T.prev, R.next), pt(e, d, T), pt(e, R, D), o = D, d = R, y -= 1, v = [], h = [];
        } else
          c.delete(_), gn(_, o, n), pt(e, _.prev, _.next), pt(e, _, d === null ? e.effect.first : d.next), pt(e, d, _), d = _;
        continue;
      }
      for (v = [], h = []; o !== null && o !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(o), h.push(o), o = cn(o.next);
      if (o === null)
        continue;
    }
    (_.f & Je) === 0 && v.push(_), d = _, o = cn(_.next);
  }
  if (e.outrogroups !== null) {
    for (const A of e.outrogroups)
      A.pending.size === 0 && (Tr(e, $n(A.done)), (be = e.outrogroups) == null || be.delete(A));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || c !== void 0) {
    var P = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & pe) === 0 && P.push(_);
    for (; o !== null; )
      (o.f & pe) === 0 && o !== e.fallback && P.push(o), o = cn(o.next);
    var ae = P.length;
    if (ae > 0) {
      var m = (r & 4) !== 0 && s === 0 ? n : null;
      if (a) {
        for (y = 0; y < ae; y += 1)
          (ne = (le = P[y].nodes) == null ? void 0 : le.a) == null || ne.measure();
        for (y = 0; y < ae; y += 1)
          (Re = (ce = P[y].nodes) == null ? void 0 : ce.a) == null || Re.fix();
      }
      Is(e, P, m);
    }
  }
  a && ot(() => {
    var A, Y;
    if (p !== void 0)
      for (_ of p)
        (Y = (A = _.nodes) == null ? void 0 : A.a) == null || Y.apply();
  });
}
function Os(e, t, n, r, i, a, s, l) {
  var o = (s & 1) !== 0 ? (s & 16) === 0 ? /* @__PURE__ */ $a(n, !1, !1) : Ft(n) : null, c = (s & 2) !== 0 ? Ft(i) : null;
  return {
    v: o,
    i: c,
    e: Le(() => (a(t, o ?? n, c ?? i, l), () => {
      e.delete(r);
    }))
  };
}
function gn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & Je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rn(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function pt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ls(e, t, n) {
  Ui(() => {
    var r = tr(() => t(e, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const ni = [...` 	
\r\f \v\uFEFF`];
function Ds(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var l = s + a;
          (s === 0 || ni.includes(r[s - 1])) && (l === r.length || ni.includes(r[l])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(l + 1) : s = l;
        }
  }
  return r === "" ? null : r;
}
function Fn(e, t, n, r, i, a) {
  var s = (
    /** @type {any} */
    e[_r]
  );
  if (s !== n || s === void 0) {
    var l = Ds(n, r, a);
    l == null ? e.removeAttribute("class") : e.className = l, e[_r] = n;
  } else if (a && i !== a)
    for (var o in a) {
      var c = !!a[o];
      (i == null || c !== !!i[o]) && e.classList.toggle(o, c);
    }
  return a;
}
const Ps = Symbol("is custom element"), Fs = Symbol("is html"), Us = Ta ? "progress" : "PROGRESS";
function Hs(e, t) {
  var n = ta(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Us) || (e.value = t ?? "");
}
function Ze(e, t, n, r) {
  var i = ta(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Sa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && zs(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function ta(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Hn] ?? (e[Hn] = {
      [Ps]: e.nodeName.includes("-"),
      [Fs]: e.namespaceURI === _a
    })
  );
}
var ri = /* @__PURE__ */ new Map();
function zs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ri.get(t);
  if (n) return n;
  ri.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = ga(i);
    for (var s in r)
      r[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    i = di(i);
  }
  return n;
}
function dr(e, t) {
  return e === t || (e == null ? void 0 : e[Un]) === t;
}
function js(e = Rr(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    ge.r
  ), a = (
    /** @type {Effect} */
    U
  );
  return Ui(() => {
    var s, l;
    return Hi(() => {
      s = l, l = [], tr(() => {
        dr(n(...l), e) || (t(e, ...l), s && dr(n(...s), e) && t(null, ...s));
      });
    }), () => {
      let o = a;
      for (; o !== i && o.parent !== null && o.parent.f & Vn; )
        o = o.parent;
      const c = () => {
        l && dr(n(...l), e) && t(null, ...l);
      }, d = o.teardown;
      o.teardown = () => {
        c(), d == null || d();
      };
    };
  }), e;
}
function wt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), a = !0, s = () => (a && (a = !1, i = /** @type {V} */
  r), i), l;
  l = /** @type {V} */
  e[t], l === void 0 && r !== void 0 && (l = s());
  var o;
  return o = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? s() : (a = !0, c);
  }, o;
}
const Bs = "5";
var fi;
typeof window < "u" && ((fi = window.__svelte ?? (window.__svelte = {})).v ?? (fi.v = /* @__PURE__ */ new Set())).add(Bs);
let rr = "";
function qs(e) {
  rr = e;
}
async function ln(e, t) {
  const n = new URL(`${rr}${e}`, window.location.origin);
  for (const [r, i] of Object.entries(t ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const na = (e) => ln("/accounts", e), Vs = (e) => ln(`/accounts/${encodeURIComponent(e)}`), Gs = (e) => ln(`/accounts/${encodeURIComponent(e)}/similar`), Ys = (e, t, n) => ln(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), Ks = (e, t, n) => ln(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), Ws = (e, t) => ln(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), Zs = (e, t, n) => `${rr}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, ii = (e, t, n = 0) => `${rr}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var Xs = /* @__PURE__ */ I('<img loading="lazy"/>'), Js = /* @__PURE__ */ I('<span class="ofx-initials"> </span>');
function Br(e, t) {
  xt(t, !0);
  let n = wt(t, "src", 3, null), r = wt(t, "alt", 3, ""), i = wt(t, "name", 3, ""), a = /* @__PURE__ */ H(!1);
  const s = /* @__PURE__ */ lt(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((p) => {
    var v;
    return ((v = p[0]) == null ? void 0 : v.toUpperCase()) ?? "";
  }).join(""));
  var l = On(), o = Ce(l);
  {
    var c = (p) => {
      var v = Xs();
      W(() => {
        Ze(v, "src", n()), Ze(v, "alt", r());
      }), Qi("error", v, () => E(a, !0)), b(p, v);
    }, d = (p) => {
      var v = Js(), h = J(v, !0);
      W(() => K(h, u(s))), b(p, v);
    };
    V(o, (p) => {
      n() && !u(a) ? p(c) : p(d, -1);
    });
  }
  b(e, l), Et();
}
var Qs = /* @__PURE__ */ I('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ra(e, t) {
  xt(t, !0);
  var n = Qs(), r = Z(n), i = Z(r);
  Br(i, {
    get src() {
      return t.account.avatar_url;
    },
    get alt() {
      return t.account.display_name;
    },
    get name() {
      return t.account.display_name;
    }
  });
  var a = k(r, 2), s = J(a, !0), l = k(a, 2), o = J(l);
  W(() => {
    Ze(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), Ze(a, "title", t.account.display_name), K(s, t.account.display_name), K(o, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), _e("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), b(e, n), Et();
}
nr(["click"]);
var $s = /* @__PURE__ */ I('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), eo = /* @__PURE__ */ I('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), to = /* @__PURE__ */ I('<span class="ofx-note"> </span>'), no = /* @__PURE__ */ I('<div class="ofx-rail-actions"><!></div>'), ro = /* @__PURE__ */ I('<div class="ofx-rail-item"><!></div>'), io = /* @__PURE__ */ I('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function kt(e, t) {
  xt(t, !0);
  let n = wt(t, "note", 3, ""), r = wt(t, "order", 3, null), i = wt(t, "fetcher", 3, null), a = wt(t, "size", 3, 20), s = /* @__PURE__ */ H(Qe([])), l = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(0);
  function c() {
    E(o, u(o) + 1);
  }
  Fr(() => {
    const w = r(), _ = i(), y = a();
    u(o);
    let B = !1;
    E(l, !0);
    const D = _ ? _() : na({ order: w, limit: y, offset: 0 });
    return Promise.resolve(D).then((z) => {
      B || (E(s, Array.isArray(z) ? z : (z == null ? void 0 : z.items) ?? [], !0), E(l, !1));
    }), () => {
      B = !0;
    };
  });
  var d = { reload: c }, p = On(), v = Ce(p);
  {
    var h = (w) => {
      var _ = eo(), y = Z(_), B = J(y, !0), D = k(y, 2);
      $e(D, 20, () => Array(8), jr, (z, T) => {
        var R = $s();
        b(z, R);
      }), W(() => K(B, t.title)), b(w, _);
    }, g = (w) => {
      var _ = io(), y = Z(_), B = Z(y), D = J(B, !0), z = k(B, 2);
      {
        var T = (m) => {
          var x = to(), j = J(x, !0);
          W(() => K(j, n())), b(m, x);
        };
        V(z, (m) => {
          n() && m(T);
        });
      }
      var R = k(z, 2);
      {
        var P = (m) => {
          var x = no(), j = Z(x);
          Ms(j, () => t.actions), b(m, x);
        };
        V(R, (m) => {
          t.actions && m(P);
        });
      }
      var ae = k(y, 2);
      $e(ae, 21, () => u(s), (m) => m.handle, (m, x) => {
        var j = ro(), Q = Z(j);
        ra(Q, {
          get account() {
            return u(x);
          },
          get navigate() {
            return t.navigate;
          }
        }), b(m, j);
      }), W(() => K(D, t.title)), b(w, _);
    };
    V(v, (w) => {
      u(l) ? w(h) : u(s).length && w(g, 1);
    });
  }
  return b(e, p), Et(d);
}
var ao = /* @__PURE__ */ I(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), so = /* @__PURE__ */ I('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), oo = /* @__PURE__ */ I('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), lo = /* @__PURE__ */ I('<div class="ofx-sentinel"></div>'), fo = /* @__PURE__ */ I('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), uo = /* @__PURE__ */ I('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), co = /* @__PURE__ */ I("<!> <!> <!> <!> <!> <!>", 1), vo = /* @__PURE__ */ I('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function ho(e, t) {
  xt(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ H(Qe([])), a = /* @__PURE__ */ H(0), s = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(""), c = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(""), p, v = /* @__PURE__ */ H(null);
  const h = /* @__PURE__ */ lt(() => u(o).trim()), g = /* @__PURE__ */ lt(() => u(h) !== "" || u(c)), w = /* @__PURE__ */ lt(() => u(i).length < u(a));
  async function _(A, Y) {
    E(s, !0);
    const fe = await na({ search: A, limit: n, offset: Y });
    if (A !== u(o).trim()) {
      E(s, !1);
      return;
    }
    fe ? (E(i, Y === 0 ? fe.items : [...u(i), ...fe.items], !0), E(a, fe.total, !0), E(d, A, !0), E(l, !1)) : E(l, !0), E(s, !1);
  }
  function y(A) {
    E(o, A.currentTarget.value, !0), clearTimeout(p), p = setTimeout(() => _(u(o).trim(), 0), 250);
  }
  function B() {
    E(c, !0), _("", 0);
  }
  function D() {
    E(c, !1), E(o, ""), E(i, [], !0), E(a, 0), E(d, "");
  }
  function z(A) {
    const Y = new IntersectionObserver(
      (fe) => {
        var Ue;
        (Ue = fe[0]) != null && Ue.isIntersecting && u(w) && !u(s) && _(u(d), u(i).length);
      },
      { rootMargin: "600px" }
    );
    return Y.observe(A), { destroy: () => Y.disconnect() };
  }
  var T = vo(), R = k(Ce(T), 2), P = Z(R);
  {
    var ae = (A) => {
      var Y = Dn();
      W(
        (fe, Ue) => K(Y, `${fe ?? ""} of ${Ue ?? ""}
        ${u(d) ? `matching “${u(d)}”` : "accounts"}`),
        [
          () => u(i).length.toLocaleString(),
          () => u(a).toLocaleString()
        ]
      ), b(A, Y);
    }, m = (A) => {
      var Y = Dn("loading…");
      b(A, Y);
    }, x = (A) => {
      var Y = Dn("nothing found");
      b(A, Y);
    }, j = (A) => {
      var Y = Dn("performers, gathered from the archive sites");
      b(A, Y);
    };
    V(P, (A) => {
      u(g) && u(a) ? A(ae) : u(g) && u(s) ? A(m, 1) : u(g) ? A(x, 2) : A(j, -1);
    });
  }
  var Q = k(R, 2), ue = k(Z(Q), 2), be = k(Q, 2);
  {
    var le = (A) => {
      var Y = ao();
      b(A, Y);
    };
    V(be, (A) => {
      u(l) && A(le);
    });
  }
  var ne = k(be, 2);
  {
    var ce = (A) => {
      var Y = fo(), fe = Ce(Y);
      {
        var Ue = (ee) => {
          var ve = so(), Ge = J(ve);
          _e("click", Ge, D), b(ee, ve);
        };
        V(fe, (ee) => {
          u(c) && !u(h) && ee(Ue);
        });
      }
      var vt = k(fe, 2), dt = Z(vt);
      $e(dt, 17, () => u(i), (ee) => ee.handle, (ee, ve) => {
        ra(ee, {
          get account() {
            return u(ve);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ht = k(dt, 2);
      {
        var zt = (ee) => {
          var ve = On(), Ge = Ce(ve);
          $e(Ge, 16, () => Array(12), jr, (jt, ir) => {
            var ar = oo();
            b(jt, ar);
          }), b(ee, ve);
        };
        V(Ht, (ee) => {
          u(s) && ee(zt);
        });
      }
      var Ln = k(vt, 2);
      {
        var ht = (ee) => {
          var ve = lo();
          Ls(ve, (Ge) => z == null ? void 0 : z(Ge)), b(ee, ve);
        };
        V(Ln, (ee) => {
          u(w) && ee(ht);
        });
      }
      b(A, Y);
    }, Re = (A) => {
      var Y = co(), fe = Ce(Y);
      kt(fe, {
        title: "Trending",
        note: "fastest growing this week",
        order: "trending",
        get navigate() {
          return t.navigate;
        }
      });
      var Ue = k(fe, 2);
      kt(Ue, {
        title: "Rising",
        note: "growing fast from a small base",
        order: "rising",
        get navigate() {
          return t.navigate;
        }
      });
      var vt = k(Ue, 2);
      kt(vt, {
        title: "Most popular",
        note: "most watched across the archive sites",
        order: "popular",
        get navigate() {
          return t.navigate;
        }
      });
      var dt = k(vt, 2);
      kt(dt, {
        title: "New to the index",
        order: "new",
        get navigate() {
          return t.navigate;
        }
      });
      var Ht = k(dt, 2);
      kt(Ht, {
        title: "Carried by the most sites",
        order: "carried",
        get navigate() {
          return t.navigate;
        }
      });
      var zt = k(Ht, 2);
      js(
        kt(zt, {
          title: "Something else",
          order: "random",
          size: r,
          get navigate() {
            return t.navigate;
          },
          actions: (ht) => {
            var ee = uo(), ve = Ce(ee), Ge = k(ve, 2);
            _e("click", ve, () => {
              var jt;
              return (jt = u(v)) == null ? void 0 : jt.reload();
            }), _e("click", Ge, B), b(ht, ee);
          },
          $$slots: { actions: !0 }
        }),
        (ht) => E(v, ht, !0),
        () => u(v)
      ), b(A, Y);
    };
    V(ne, (A) => {
      u(g) ? A(ce) : A(Re, -1);
    });
  }
  W(() => Hs(ue, u(o))), _e("input", ue, y), b(e, T), Et();
}
nr(["input", "click"]);
var _o = /* @__PURE__ */ I('<p class="ofx-error"> </p>'), po = /* @__PURE__ */ I('<p class="ofx-note"> </p>'), ai = /* @__PURE__ */ I('<span class="ofx-badge"> </span>'), go = /* @__PURE__ */ I('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), mo = /* @__PURE__ */ I('<div class="ofx-skeleton"></div>'), wo = /* @__PURE__ */ I('<button class="ofx-btn ofx-outline" type="button"> </button>'), yo = /* @__PURE__ */ I('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function bo(e, t) {
  xt(t, !0);
  let n = /* @__PURE__ */ H(Qe([])), r = /* @__PURE__ */ H(0), i = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1);
  async function l() {
    if (u(i) || u(a)) return;
    E(i, !0);
    const T = u(r) + 1, P = await (t.mode === "images" ? Ks : Ys)(t.handle, t.site, T);
    P === null ? E(s, !0) : (E(n, [...u(n), ...P], !0), E(r, T), P.length === 0 && E(a, !0)), E(i, !1);
  }
  Fr(() => {
    t.mode, t.handle, t.site, tr(() => {
      E(n, [], !0), E(r, 0), E(a, !1), E(s, !1), E(i, !1), l();
    });
  });
  function o(T) {
    return T ? `${Math.floor(T / 60)}:${String(T % 60).padStart(2, "0")}` : null;
  }
  var c = yo(), d = Z(c), p = J(d, !0), v = k(d, 2);
  {
    var h = (T) => {
      var R = _o(), P = J(R);
      W(() => K(P, `${t.site ?? ""} did not answer.`)), b(T, R);
    }, g = (T) => {
      var R = po(), P = J(R);
      W(() => K(P, `Nothing here on ${t.site ?? ""}.`)), b(T, R);
    };
    V(v, (T) => {
      u(s) ? T(h) : !u(i) && u(n).length === 0 && T(g, 1);
    });
  }
  var w = k(v, 2), _ = Z(w);
  $e(_, 17, () => u(n), (T) => T.video_id ?? T.gallery_id, (T, R) => {
    var P = go(), ae = Z(P), m = Z(ae);
    {
      let ne = /* @__PURE__ */ lt(() => t.mode === "images" ? u(R).cover : u(R).thumbnail);
      Br(m, {
        get src() {
          return u(ne);
        },
        get alt() {
          return u(R).title;
        },
        get name() {
          return u(R).title;
        }
      });
    }
    var x = k(m, 2);
    {
      var j = (ne) => {
        var ce = ai(), Re = J(ce, !0);
        W(() => K(Re, u(R).image_count)), b(ne, ce);
      }, Q = (ne) => {
        var ce = ai(), Re = J(ce, !0);
        W((A) => K(Re, A), [() => o(u(R).duration)]), b(ne, ce);
      }, ue = /* @__PURE__ */ lt(() => o(u(R).duration));
      V(x, (ne) => {
        t.mode === "images" && u(R).image_count ? ne(j) : u(ue) && ne(Q, 1);
      });
    }
    var be = k(ae, 2), le = J(be, !0);
    W(() => K(le, u(R).title)), _e("click", P, () => t.mode === "images" ? t.ongallery(u(R)) : t.onplay(u(R))), b(T, P);
  });
  var y = k(_, 2);
  {
    var B = (T) => {
      var R = On(), P = Ce(R);
      $e(P, 16, () => Array(4), jr, (ae, m) => {
        var x = mo();
        b(ae, x);
      }), b(T, R);
    };
    V(y, (T) => {
      u(i) && T(B);
    });
  }
  var D = k(w, 2);
  {
    var z = (T) => {
      var R = wo(), P = J(R, !0);
      W(() => {
        R.disabled = u(i), K(P, u(i) ? "Loading…" : "Load more");
      }), _e("click", R, l), b(T, R);
    };
    V(D, (T) => {
      !u(a) && !u(s) && u(n).length > 0 && T(z);
    });
  }
  W(() => K(p, t.site)), b(e, c), Et();
}
nr(["click"]);
var xo = /* @__PURE__ */ I('<p class="ofx-error">That account could not be loaded.</p>'), Eo = /* @__PURE__ */ I('<div class="ofx-banner"><img alt=""/></div>'), ko = /* @__PURE__ */ ps('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), So = /* @__PURE__ */ I('<p> </p> <button class="ofx-more" type="button"> </button>', 1), Ao = /* @__PURE__ */ I("<span><b> </b> </span>"), To = /* @__PURE__ */ I('<div class="ofx-stats"></div>'), Co = /* @__PURE__ */ I("<span> </span>"), si = /* @__PURE__ */ I('<a target="_blank" rel="noreferrer noopener"> </a>'), Mo = /* @__PURE__ */ I('<button type="button"> </button>'), Ro = /* @__PURE__ */ I('<span class="ofx-count"> </span>'), Io = /* @__PURE__ */ I('<button type="button"> <!></button>'), No = /* @__PURE__ */ I('<p class="ofx-error"> </p>'), Oo = /* @__PURE__ */ I(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Lo = /* @__PURE__ */ I('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Do = /* @__PURE__ */ I('<p class="ofx-note">Loading…</p>'), Po = /* @__PURE__ */ I('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Fo = /* @__PURE__ */ I('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Uo = /* @__PURE__ */ I('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Ho = /* @__PURE__ */ I("<!> <!> <!>", 1);
function zo(e, t) {
  xt(t, !0);
  let n = /* @__PURE__ */ H(null), r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H("videos"), a = /* @__PURE__ */ H(Qe(/* @__PURE__ */ new Set())), s = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(null);
  Fr(() => {
    Vs(t.handle).then((m) => {
      m ? E(n, m, !0) : E(r, !0);
    });
  });
  const d = /* @__PURE__ */ lt(() => {
    var m, x, j, Q;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = u(n)) == null ? void 0 : m.posts_count],
      ["photos", (x = u(n)) == null ? void 0 : x.photos_count],
      ["videos", (j = u(n)) == null ? void 0 : j.videos_count],
      ["likes", (Q = u(n)) == null ? void 0 : Q.likes_count]
    ].filter(([, ue]) => ue != null);
  });
  function p(m) {
    const x = new Set(u(a));
    x.has(m) ? x.delete(m) : x.add(m), E(a, x, !0);
  }
  function v(m) {
    var x, j;
    if (!((x = t.host) != null && x.play)) {
      E(l, m, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: ii(m.site, m.video_id),
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
      contextTitle: ((j = u(n)) == null ? void 0 : j.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  async function h(m) {
    E(c, null);
    const x = await Ws(m.site, m.gallery_id);
    if (!x) {
      E(c, "Could not open that gallery");
      return;
    }
    if (x.length === 0) {
      E(c, "That site served no images for this gallery");
      return;
    }
    E(o, { gallery: m, count: x.length, index: 0 }, !0);
  }
  function g(m) {
    u(o) && E(
      o,
      {
        ...u(o),
        index: (u(o).index + m + u(o).count) % u(o).count
      },
      !0
    );
  }
  function w(m) {
    if (m.key === "Escape") {
      E(l, null), E(o, null);
      return;
    }
    u(o) && (m.key === "ArrowRight" && g(1), m.key === "ArrowLeft" && g(-1));
  }
  var _ = Ho();
  Qi("keydown", wr, w);
  var y = Ce(_);
  {
    var B = (m) => {
      var x = xo();
      b(m, x);
    }, D = (m) => {
      var x = Lo(), j = Ce(x), Q = Z(j);
      {
        var ue = (S) => {
          var O = Eo(), q = J(O);
          W(() => Ze(q, "src", u(n).header_url)), b(S, O);
        };
        V(Q, (S) => {
          u(n).header_url && S(ue);
        });
      }
      var be = k(Q, 2), le = Z(be);
      let ne;
      var ce = Z(le);
      Br(ce, {
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
      var Re = k(le, 2), A = Z(Re), Y = Z(A), fe = k(Y);
      {
        var Ue = (S) => {
          var O = ko();
          b(S, O);
        };
        V(fe, (S) => {
          u(n).is_verified && S(Ue);
        });
      }
      var vt = k(A, 2), dt = Z(vt), Ht = k(dt, 2), zt = k(vt, 2);
      {
        var Ln = (S) => {
          var O = So(), q = Ce(O);
          let xe;
          var rt = J(q, !0), Bt = k(q, 2), fn = J(Bt, !0);
          W(() => {
            xe = Fn(q, 1, "ofx-bio", null, xe, { "ofx-clamped": !u(s) }), K(rt, u(n).bio), K(fn, u(s) ? "less" : "more");
          }), _e("click", Bt, () => E(s, !u(s))), b(S, O);
        };
        V(zt, (S) => {
          u(n).bio && S(Ln);
        });
      }
      var ht = k(zt, 2);
      {
        var ee = (S) => {
          var O = To();
          $e(O, 21, () => u(d), ([q, xe]) => q, (q, xe) => {
            var rt = /* @__PURE__ */ lt(() => xa(u(xe), 2));
            let Bt = () => u(rt)[0], fn = () => u(rt)[1];
            var _t = Ao(), un = Z(_t), sr = J(un, !0), ca = k(un);
            W(
              (va) => {
                K(sr, va), K(ca, ` ${Bt() ?? ""}`);
              },
              [() => fn().toLocaleString()]
            ), b(q, _t);
          }), b(S, O);
        };
        V(ht, (S) => {
          u(d).length && S(ee);
        });
      }
      var ve = k(ht, 2), Ge = Z(ve);
      {
        var jt = (S) => {
          var O = Co(), q = J(O, !0);
          W(() => K(q, u(n).location)), b(S, O);
        };
        V(Ge, (S) => {
          u(n).location && S(jt);
        });
      }
      var ir = k(Ge, 2);
      {
        var ar = (S) => {
          var O = si(), q = J(O, !0);
          W(
            (xe) => {
              Ze(O, "href", u(n).website), K(q, xe);
            },
            [() => u(n).website.replace(/^https?:\/\//, "")]
          ), b(S, O);
        };
        V(ir, (S) => {
          u(n).website && S(ar);
        });
      }
      var ia = k(ir, 2);
      {
        var aa = (S) => {
          var O = si(), q = J(O);
          W(() => {
            Ze(O, "href", u(n).of_url), K(q, `onlyfans.com/${u(n).of_username ?? ""}`);
          }), b(S, O);
        };
        V(ia, (S) => {
          u(n).of_url && S(aa);
        });
      }
      var sa = k(be, 2);
      $e(sa, 20, () => ["videos", "images"], (S) => S, (S, O) => {
        var q = Mo();
        let xe;
        var rt = J(q, !0);
        W(() => {
          xe = Fn(q, 1, "ofx-tab", null, xe, { "ofx-on": u(i) === O }), K(rt, O);
        }), _e("click", q, () => E(i, O, !0)), b(S, q);
      });
      var qr = k(j, 2), Vr = k(Z(qr), 2);
      $e(Vr, 17, () => u(n).sources, (S) => S.site, (S, O) => {
        var q = Io();
        let xe;
        var rt = Z(q), Bt = k(rt);
        {
          var fn = (_t) => {
            var un = Ro(), sr = J(un, !0);
            W(() => K(sr, u(O).video_count)), b(_t, un);
          };
          V(Bt, (_t) => {
            u(O).video_count && _t(fn);
          });
        }
        W(
          (_t) => {
            xe = Fn(q, 1, "ofx-btn ofx-outline", null, xe, { "ofx-on": _t }), K(rt, `${u(O).site ?? ""} `);
          },
          [() => u(a).has(u(O).site)]
        ), _e("click", q, () => p(u(O).site)), b(S, q);
      });
      var oa = k(Vr, 2), Gr = k(qr, 2);
      {
        var la = (S) => {
          var O = No(), q = J(O, !0);
          W(() => K(q, u(c))), b(S, O);
        };
        V(Gr, (S) => {
          u(c) && S(la);
        });
      }
      var Yr = k(Gr, 2);
      {
        var fa = (S) => {
          var O = Oo();
          b(S, O);
        };
        V(Yr, (S) => {
          u(a).size === 0 && S(fa);
        });
      }
      var Kr = k(Yr, 2);
      $e(Kr, 17, () => u(n).sources.filter((S) => u(a).has(S.site)), (S) => S.site, (S, O) => {
        bo(S, {
          get handle() {
            return u(n).handle;
          },
          get site() {
            return u(O).site;
          },
          get mode() {
            return u(i);
          },
          onplay: (q) => v(q),
          ongallery: h
        });
      });
      var ua = k(Kr, 2);
      ea(ua, () => u(n).handle, (S) => {
        kt(S, {
          get title() {
            return `More like ${u(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => Gs(u(n).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), W(() => {
        ne = Fn(le, 1, "ofx-avatar", null, ne, { "ofx-overlap": !!u(n).header_url }), K(Y, `${u(n).display_name ?? ""} `), K(dt, `@${(u(n).of_username || u(n).handle) ?? ""} `), K(Ht, ` ${u(n).source_count ?? ""}
                    ${u(n).source_count === 1 ? "site" : "sites"}`);
      }), _e("click", oa, () => t.navigate("/x/onlyfans")), b(m, x);
    }, z = (m) => {
      var x = Do();
      b(m, x);
    };
    V(y, (m) => {
      u(r) ? m(B) : u(n) ? m(D, 1) : m(z, -1);
    });
  }
  var T = k(y, 2);
  {
    var R = (m) => {
      var x = Po(), j = Z(x), Q = k(j, 2);
      W((ue) => Ze(Q, "src", ue), [
        () => ii(u(l).site, u(l).video_id)
      ]), _e("click", j, () => E(l, null)), b(m, x);
    };
    V(T, (m) => {
      u(l) && m(R);
    });
  }
  var P = k(T, 2);
  {
    var ae = (m) => {
      var x = Uo(), j = Z(x), Q = k(j, 2);
      {
        var ue = (le) => {
          var ne = Fo(), ce = Ce(ne), Re = k(ce, 2);
          _e("click", ce, () => g(-1)), _e("click", Re, () => g(1)), b(le, ne);
        };
        V(Q, (le) => {
          u(o).count > 1 && le(ue);
        });
      }
      var be = k(Q, 2);
      W(
        (le) => {
          Ze(be, "src", le), Ze(be, "alt", `${u(o).gallery.title ?? ""} ${u(o).index + 1} of ${u(o).count ?? ""}`);
        },
        [
          () => Zs(u(o).gallery.site, u(o).gallery.gallery_id, u(o).index)
        ]
      ), _e("click", j, () => E(o, null)), b(m, x);
    };
    V(P, (m) => {
      u(o) && m(ae);
    });
  }
  b(e, _), Et();
}
nr(["click"]);
var jo = /* @__PURE__ */ I('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Bo(e, t) {
  xt(t, !0);
  let n = wt(t, "path", 3, "");
  qs(t.api);
  const r = /* @__PURE__ */ lt(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = jo(), a = Z(i), s = Z(a);
  {
    var l = (c) => {
      var d = On(), p = Ce(d);
      ea(p, () => u(r), (v) => {
        zo(v, {
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
      }), b(c, d);
    }, o = (c) => {
      ho(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    V(s, (c) => {
      u(r) ? c(l) : c(o, -1);
    });
  }
  b(e, i), Et();
}
function Go({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = Qe({ path: t ?? "", api: n, navigate: r, host: i }), s = As(Bo, { target: e, props: a });
  return {
    update(l) {
      a.path = l ?? "";
    },
    destroy() {
      Cs(s);
    }
  };
}
export {
  Go as default
};

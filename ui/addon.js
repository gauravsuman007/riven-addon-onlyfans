var ds = Object.defineProperty;
var Zn = (e) => {
  throw TypeError(e);
};
var hs = (e, t, r) => t in e ? ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Se = (e, t, r) => hs(e, typeof t != "symbol" ? t + "" : t, r), ln = (e, t, r) => t.has(e) || Zn("Cannot " + r);
var f = (e, t, r) => (ln(e, t, "read from private field"), r ? r.call(e) : t.get(e)), I = (e, t, r) => t.has(e) ? Zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (ln(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), F = (e, t, r) => (ln(e, t, "access private method"), r);
const ne = Symbol("uninitialized"), _s = "http://www.w3.org/1999/xhtml", ci = !1;
var vi = Array.isArray, ps = Array.prototype.indexOf, Br = Array.prototype.includes, Qr = Array.from, di = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, gs = Object.getOwnPropertyDescriptors, ms = Object.prototype, ws = Array.prototype, hi = Object.getPrototypeOf, Xn = Object.isExtensible;
const ys = () => {
};
function bs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function _i() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function xs(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ae = 2, tr = 4, $r = 8, pi = 1 << 24, Ge = 16, Ue = 32, dt = 64, hn = 128, Mn = 256, Fe = 512, ie = 1024, te = 2048, Ze = 4096, pe = 8192, Ie = 16384, sr = 32768, qr = 1 << 25, Pt = 65536, Vr = 1 << 17, Es = 1 << 18, ar = 1 << 19, ks = 1 << 20, rt = 1 << 25, Ft = 65536, Gr = 1 << 21, Kt = 1 << 22, bt = 1 << 23, Fr = Symbol("$state"), gi = Symbol("component"), Ss = Symbol(""), Ur = Symbol("attributes"), _n = Symbol("class"), As = Symbol("style"), cr = Symbol("text"), Tr = new class extends Error {
  constructor() {
    super(...arguments);
    Se(this, "name", "StaleReactionError");
    Se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var oi;
const Ts = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((oi = globalThis.document) != null && oi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Cs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Rs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function mi(e) {
  return e === this.v;
}
function Ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wi(e) {
  return !Ms(e, this.v);
}
function Is() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ns(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Os(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ds(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ps() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Us() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let js = !1, ge = null;
function rr(e) {
  ge = e;
}
function Et(e, t = !1, r) {
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
function kt(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ui(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ge = t.p, In(e);
}
function In(e = {}) {
  return di(e, gi, { value: !0 }), e;
}
function yi() {
  return !0;
}
let Gt = [];
function Bs() {
  var e = Gt;
  Gt = [], bs(e);
}
function ct(e) {
  if (Gt.length === 0) {
    var t = Gt;
    queueMicrotask(() => {
      t === Gt && Bs();
    });
  }
  Gt.push(e);
}
const qs = -7169;
function Q(e, t) {
  e.f = e.f & qs | t;
}
function Nn(e) {
  (e.f & Fe) !== 0 || e.deps === null ? Q(e, ie) : Q(e, Ze);
}
function bi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & Ft) === 0 || (t.f ^= Ft, bi(
        /** @type {Derived} */
        t.deps
      ));
}
function xi(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & Ze) !== 0 && r.add(e), bi(e.deps), Q(e, ie);
}
function Cr(e) {
  var t = L, r = U;
  He(null), at(null);
  try {
    return e();
  } finally {
    He(t), at(r);
  }
}
function Vs(e, t, r, n) {
  const i = On;
  var s = e.filter((h) => !h.settled), a = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(a);
    return;
  }
  var o = (
    /** @type {Effect} */
    U
  ), l = Gs(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function d(h) {
    if ((o.f & Ie) === 0) {
      l();
      try {
        n([...a, ...h]);
      } catch (m) {
        tt(m, o);
      }
      Yr();
    }
  }
  var p = Ei();
  if (r.length === 0) {
    c.then(() => d([])).finally(p);
    return;
  }
  function v() {
    Promise.all(r.map((h) => /* @__PURE__ */ Ys(h))).then(d).catch((h) => tt(h, o)).finally(p);
  }
  c ? c.then(() => {
    l(), v(), Yr();
  }) : v();
}
function Gs() {
  var e = (
    /** @type {Effect} */
    U
  ), t = L, r = ge, n = (
    /** @type {Batch} */
    C
  );
  return function(s = !0) {
    at(e), He(t), rr(r), s && (e.f & Ie) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Yr(e = !0) {
  at(null), He(null), rr(null), e && (C == null || C.deactivate());
}
function Ei() {
  var e = (
    /** @type {Effect} */
    U
  ), t = e.b, r = (
    /** @type {Batch} */
    C
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  var t = ae | te;
  return U !== null && (U.f |= ar), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: mi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ne
    ),
    wv: 0,
    parent: U,
    ac: null
  };
}
const vr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ys(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    U
  );
  n === null && Is();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ht(
    /** @type {V} */
    ne
  ), a = !L, o = /* @__PURE__ */ new Set();
  return oa(() => {
    var h, m;
    var l = (
      /** @type {Effect} */
      U
    ), c = _i();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (w) => {
        w !== Tr && c.reject(w);
      }).finally(Yr);
    } catch (w) {
      c.reject(w), Yr();
    }
    var d = (
      /** @type {Batch} */
      C
    );
    if (a) {
      if ((l.f & sr) !== 0)
        var p = Ei();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = n.b) != null && h.is_rendered()
      )
        (m = d.async_deriveds.get(l)) == null || m.reject(vr);
      else
        for (const w of o.values())
          w.reject(vr);
      o.add(c), d.async_deriveds.set(l, c);
    }
    const v = (w, _ = void 0) => {
      p == null || p(), o.delete(c), _ !== vr && (d.activate(), _ ? (s.f |= bt, nr(s, _)) : ((s.f & bt) !== 0 && (s.f ^= bt), nr(s, w)), d.deactivate());
    };
    c.promise.then(v, (w) => v(null, w || "unknown"));
  }), Fi(() => {
    for (const l of o)
      l.reject(vr);
  }), new Promise((l) => {
    function c(d) {
      function p() {
        d === i ? l(s) : c(i);
      }
      d.then(p, p);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ On(e);
  return Gi(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ On(e);
  return t.equals = wi, t;
}
function Ws(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ye(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ln(e) {
  var t, r = U, n = e.parent;
  if (!xt && n !== null && e.v !== ne && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Ie | pe)) !== 0)
    return Cs(), e.v;
  at(n);
  try {
    e.f &= ~Ft, Ws(e), t = Zi(e);
  } finally {
    at(r);
  }
  return t;
}
function ki(e) {
  var t = Ln(e);
  if (!e.equals(t) && (e.wv = Ki(), (!(C != null && C.is_fork) || e.deps === null) && (C !== null ? (C.capture(e, t, !0), mr == null || mr.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    Q(e, ie);
    return;
  }
  xt || (oe !== null ? (Fn() || C != null && C.is_fork) && oe.set(e, t) : Nn(e));
}
function Zs(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && Cr(() => {
        r.ac.abort(Tr), r.ac = null;
      }), r.fn !== null && (r.teardown = ys), yr(r, 0), Un(r));
}
function Si(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ir(t);
}
let on = null, qt = null, C = null, mr = null, oe = null, pn = null, fn = !1, Yt = null, Hr = null;
var Jn = 0;
let Xs = 1;
var Wt, mt, Rt, Zt, Xt, Jt, ot, Qt, me, xr, ft, qe, Je, $t, Mt, G, gn, dr, mn, Ai, Ti, Vt, Js, hr;
const Zr = class Zr {
  constructor() {
    I(this, G);
    Se(this, "id", Xs++);
    /** True as soon as `#process` was called */
    I(this, Wt, !1);
    Se(this, "linked", !0);
    /** @type {Batch | null} */
    I(this, mt, null);
    /** @type {Batch | null} */
    I(this, Rt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Se(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, Zt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, Xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, Jt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    I(this, ot, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, Qt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    I(this, me, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    I(this, xr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, ft, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, qe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    I(this, Je, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    I(this, $t, /* @__PURE__ */ new Set());
    Se(this, "is_fork", !1);
    I(this, Mt, !1);
    qt === null ? on = qt = this : (T(qt, Rt, this), T(this, mt, qt)), qt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Je).has(t) || f(this, Je).set(t, { d: [], m: [] }), f(this, $t).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = f(this, Je).get(t);
    if (n) {
      f(this, Je).delete(t);
      for (var i of n.d)
        Q(i, te), r(i);
      for (i of n.m)
        Q(i, Ze), r(i);
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
  capture(t, r, n = !1) {
    t.v !== ne && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & bt) === 0 && (this.current.set(t, [r, n]), oe == null || oe.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, oe = null;
  }
  flush() {
    try {
      fn = !0, C = this, F(this, G, dr).call(this);
    } finally {
      Jn = 0, pn = null, Yt = null, Hr = null, fn = !1, C = null, oe = null, it.clear();
    }
  }
  discard() {
    var t;
    for (const r of f(this, Xt)) r(this);
    f(this, Xt).clear();
    for (const r of this.async_deriveds.values())
      r.reject(vr);
    F(this, G, hr).call(this), (t = f(this, Qt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    f(this, xr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (T(this, Jt, f(this, Jt) + 1), t) {
      let n = f(this, ot).get(r) ?? 0;
      f(this, ot).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (T(this, Jt, f(this, Jt) - 1), t) {
      let n = f(this, ot).get(r) ?? 0;
      n === 1 ? f(this, ot).delete(r) : f(this, ot).set(r, n - 1);
    }
    f(this, Mt) || (T(this, Mt, !0), ct(() => {
      T(this, Mt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, ft).add(n);
    for (const n of r)
      f(this, qe).add(n);
    t.clear(), r.clear();
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
    return (f(this, Qt) ?? T(this, Qt, _i())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new Zr();
      fn || ct(() => {
        f(t, Wt) || t.flush();
      });
    }
    return C;
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
    if (pn = t, (i = t.b) != null && i.is_pending && (t.f & (tr | $r | pi)) !== 0 && (t.f & sr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Yt !== null && r === U && (L === null || (L.f & ae) === 0))
        return;
      if ((n & (dt | Ue)) !== 0) {
        if ((n & ie) === 0)
          return;
        r.f ^= ie;
      }
    }
    f(this, me).push(r);
  }
};
Wt = new WeakMap(), mt = new WeakMap(), Rt = new WeakMap(), Zt = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), ot = new WeakMap(), Qt = new WeakMap(), me = new WeakMap(), xr = new WeakMap(), ft = new WeakMap(), qe = new WeakMap(), Je = new WeakMap(), $t = new WeakMap(), Mt = new WeakMap(), G = new WeakSet(), gn = function() {
  if (this.is_fork) return !0;
  for (const n of f(this, ot).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (f(this, Je).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, dr = function() {
  var l, c, d, p;
  T(this, Wt, !0), Jn++ > 1e3 && (F(this, G, hr).call(this), Qs());
  for (const v of f(this, ft))
    f(this, qe).delete(v), Q(v, te), this.schedule(v);
  for (const v of f(this, qe))
    Q(v, Ze), this.schedule(v);
  const t = f(this, me);
  T(this, me, []), this.apply();
  var r = Yt = [], n = [], i = Hr = [];
  for (const v of t)
    try {
      F(this, G, mn).call(this, v, r, n);
    } catch (h) {
      throw Mi(v), F(this, G, gn).call(this) || this.discard(), h;
    }
  if (C = null, i.length > 0) {
    var s = Zr.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (Yt = null, Hr = null, F(this, G, gn).call(this)) {
    F(this, G, Vt).call(this, n), F(this, G, Vt).call(this, r);
    for (const [v, h] of f(this, Je))
      Ri(v, h);
    i.length > 0 && /** @type {unknown} */
    F(l = C, G, dr).call(l);
    return;
  }
  const a = F(this, G, Ai).call(this);
  if (a) {
    F(this, G, Vt).call(this, n), F(this, G, Vt).call(this, r), F(c = a, G, Ti).call(c, this);
    return;
  }
  f(this, ft).clear(), f(this, qe).clear();
  for (const v of f(this, Zt)) v(this);
  f(this, Zt).clear(), mr = this, Qn(n), Qn(r), mr = null, (d = f(this, Qt)) == null || d.resolve();
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (f(this, Jt) === 0 && (f(this, me).length === 0 || o !== null) && F(this, G, hr).call(this), f(this, me).length > 0)
    if (o !== null) {
      const v = o;
      f(v, me).push(...f(this, me).filter((h) => !f(v, me).includes(h)));
    } else
      o = this;
  o !== null && (it.clear(), F(p = o, G, dr).call(p));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= ie;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (Ue | dt)) !== 0, o = a && (s & ie) !== 0, l = o || (s & pe) !== 0 || f(this, Je).has(i);
    if (!l && i.fn !== null) {
      a ? i.f ^= ie : (s & tr) !== 0 ? r.push(i) : Ir(i) && ((s & Ge) !== 0 && f(this, qe).add(i), ir(i));
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
}, Ai = function() {
  for (var t = f(this, mt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = f(t, mt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ti = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && s.promise.then(a.resolve).catch(a.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(f(t, ft), f(t, qe));
  const r = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & ae) !== 0 && (i.f & (te | Ze)) === 0))
      for (const l of s) {
        var a = l.f;
        if ((a & ae) !== 0)
          r(
            /** @type {Derived} */
            l
          );
        else {
          var o = (
            /** @type {Effect} */
            l
          );
          a & (Kt | Ge) && !this.async_deriveds.has(o) && (f(this, qe).delete(o), Q(o, te), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), F(n = t, G, hr).call(n), C = this, F(this, G, dr).call(this);
}, /**
 * @param {Effect[]} effects
 */
Vt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    xi(t[r], f(this, ft), f(this, qe));
}, Js = function() {
  var p;
  for (let v = on; v !== null; v = f(v, Rt)) {
    var t = v.id < this.id, r = [];
    for (const [h, [m, w]] of this.current) {
      if (v.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && m !== n)
          v.current.set(h, [m, w]);
        else
          continue;
      }
      r.push(h);
    }
    if (t)
      for (const [h, m] of this.async_deriveds) {
        const w = v.async_deriveds.get(h);
        w && m.promise.then(w.resolve).catch(w.reject);
      }
    var i = [...v.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      v.current.get(h)[1]
    );
    if (!(!f(v, Wt) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && v.discard();
      else if (r.length > 0) {
        if (t)
          for (const h of f(this, $t))
            v.unskip_effect(h, (m) => {
              var w;
              (m.f & (Ge | Kt)) !== 0 ? v.schedule(m) : F(w = v, G, Vt).call(w, [m]);
            });
        v.activate();
        var a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var l of r)
          Ci(l, s, a, o);
        o = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([h, m]) => {
          const w = this.current.get(h);
          return w ? w[0] !== m[0] || w[1] !== m[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of f(this, xr))
            (h.f & (Ie | pe | Vr)) === 0 && Dn(h, c, o) && ((h.f & (Kt | Ge)) !== 0 ? (Q(h, te), v.schedule(h)) : f(v, ft).add(h));
        if (f(v, me).length > 0 && !f(v, Mt)) {
          v.apply();
          for (var d of f(v, me))
            F(p = v, G, mn).call(p, d, [], []);
          T(v, me, []);
        }
        v.deactivate();
      }
    }
  }
}, hr = function() {
  if (this.linked) {
    var t = f(this, mt), r = f(this, Rt);
    t === null ? on = r : T(t, Rt, r), r === null ? qt = t : T(r, mt, t), this.linked = !1;
  }
};
let Ut = Zr;
function Qs() {
  try {
    Ps();
  } catch (e) {
    tt(e, pn);
  }
}
let Be = null;
function Qn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ie | pe)) === 0 && Ir(n) && (Be = /* @__PURE__ */ new Set(), ir(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bi(n), (Be == null ? void 0 : Be.size) > 0)) {
        it.clear();
        for (const i of Be) {
          if ((i.f & (Ie | pe)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Be.has(a) && (Be.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Ie | pe)) === 0 && ir(l);
          }
        }
        Be.clear();
      }
    }
    Be = null;
  }
}
function Ci(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ae) !== 0 ? Ci(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Kt | Ge)) !== 0 && (s & te) === 0 && Dn(i, t, n) && (Q(i, te), Pn(
        /** @type {Effect} */
        i
      ));
    }
}
function Dn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Br.call(t, i))
        return !0;
      if ((i.f & ae) !== 0 && Dn(
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
function Pn(e) {
  C.schedule(e);
}
function Ri(e, t) {
  if (!((e.f & Ue) !== 0 && (e.f & ie) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & Ze) !== 0 && t.m.push(e), Q(e, ie);
    for (var r = e.first; r !== null; )
      Ri(r, t), r = r.next;
  }
}
function Mi(e) {
  Q(e, ie);
  for (var t = e.first; t !== null; )
    Mi(t), t = t.next;
}
let Kr = /* @__PURE__ */ new Set();
const it = /* @__PURE__ */ new Map();
let Ii = !1;
function Ht(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const r = Ht(e);
  return Gi(r), r;
}
// @__NO_SIDE_EFFECTS__
function $s(e, t = !1, r = !0) {
  const n = Ht(e);
  return t || (n.equals = wi), n;
}
function x(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (L.f & Vr) !== 0) && yi() && (L.f & (ae | Ge | Kt | Vr)) !== 0 && (st === null || !st.has(e)) && Hs();
  let n = r ? Ye(t) : t;
  return nr(e, n, Hr);
}
function nr(e, t, r = null) {
  if (!e.equals(t)) {
    xt ? it.set(e, t) : it.has(e) || it.set(e, e.v);
    var n = Ut.ensure();
    if (n.capture(e, t), (e.f & ae) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && Ln(i), oe === null && Nn(i);
    }
    e.wv = Ki(), Ni(e, te, r), U !== null && (U.f & ie) !== 0 && (U.f & (Ue | dt)) === 0 && (Oe === null ? ca([e]) : Oe.push(e)), !n.is_fork && Kr.size > 0 && !Ii && ea();
  }
  return t;
}
function ea() {
  Ii = !1;
  for (const e of Kr) {
    (e.f & ie) !== 0 && Q(e, Ze);
    let t;
    try {
      t = Ir(e);
    } catch {
      t = !0;
    }
    t && ir(e);
  }
  Kr.clear();
}
function wr(e) {
  x(e, e.v + 1);
}
function Ni(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, l = (o & te) === 0;
      if (l && Q(a, t), (o & Vr) !== 0)
        Kr.add(
          /** @type {Effect} */
          a
        );
      else if ((o & ae) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        oe == null || oe.delete(c), (o & Ft) === 0 && (o & Fe && (U === null || (U.f & Gr) === 0) && (a.f |= Ft), Ni(c, Ze, r));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          a
        );
        (o & Ge) !== 0 && Be !== null && Be.add(d), r !== null ? r.push(d) : Pn(d);
      }
    }
}
function Ye(e) {
  if (typeof e != "object" || e === null || Fr in e || gi in e)
    return e;
  const t = hi(e);
  if (t !== ms && t !== ws)
    return e;
  var r = /* @__PURE__ */ new Map(), n = vi(e), i = /* @__PURE__ */ H(0), s = Dt, a = (o) => {
    if (Dt === s)
      return o();
    var l = L, c = Dt;
    He(null), ei(s);
    var d = o();
    return He(l), ei(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Fs();
        var d = r.get(l);
        return d === void 0 ? a(() => {
          var p = /* @__PURE__ */ H(c.value);
          return r.set(l, p), p;
        }) : x(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ H(ne));
            r.set(l, d), wr(i);
          }
        } else
          x(c, ne), wr(i);
        return !0;
      },
      get(o, l, c) {
        var h;
        if (l === Fr)
          return e;
        var d = r.get(l), p = l in o;
        if (d === void 0 && (!p || (h = gr(o, l)) != null && h.writable) && (d = a(() => {
          var m = Ye(p ? o[l] : ne), w = /* @__PURE__ */ H(m);
          return w;
        }), r.set(l, d)), d !== void 0) {
          var v = u(d);
          return v === ne ? void 0 : v;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = r.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var p = r.get(l), v = p == null ? void 0 : p.v;
          if (p !== void 0 && v !== ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var v;
        if (l === Fr)
          return !0;
        var c = r.get(l), d = c !== void 0 && c.v !== ne || Reflect.has(o, l);
        if (c !== void 0 || U !== null && (!d || (v = gr(o, l)) != null && v.writable)) {
          c === void 0 && (c = a(() => {
            var h = d ? Ye(o[l]) : ne, m = /* @__PURE__ */ H(h);
            return m;
          }), r.set(l, c));
          var p = u(c);
          if (p === ne)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var D;
        var p = r.get(l), v = l in o;
        if (n && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var m = r.get(h + "");
            m !== void 0 ? x(m, ne) : h in o && (m = a(() => /* @__PURE__ */ H(ne)), r.set(h + "", m));
          }
        if (p === void 0)
          (!v || (D = gr(o, l)) != null && D.writable) && (p = a(() => /* @__PURE__ */ H(void 0)), x(p, Ye(c)), r.set(l, p));
        else {
          v = p.v !== ne;
          var w = a(() => Ye(c));
          x(p, w);
        }
        var _ = Reflect.getOwnPropertyDescriptor(o, l);
        if (_ != null && _.set && _.set.call(d, c), !v) {
          if (n && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(l);
            Number.isInteger(B) && B >= y.v && x(y, B + 1);
          }
          wr(i);
        }
        return !0;
      },
      ownKeys(o) {
        u(i);
        var l = Reflect.ownKeys(o).filter((p) => {
          var v = r.get(p);
          return v === void 0 || v.v !== ne;
        });
        for (var [c, d] of r)
          d.v !== ne && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Us();
      }
    }
  );
}
var wn, Oi, Li, Di;
function ta() {
  if (wn === void 0) {
    wn = window, Oi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Li = gr(t, "firstChild").get, Di = gr(t, "nextSibling").get, Xn(e) && (e[_n] = void 0, e[Ur] = null, e[As] = void 0, e.__e = void 0), Xn(r) && (r[cr] = void 0);
  }
}
function vt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return (
    /** @type {TemplateNode | null} */
    Li.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return (
    /** @type {TemplateNode | null} */
    Di.call(e)
  );
}
function W(e, t) {
  return /* @__PURE__ */ zt(e);
}
function Me(e, t = !1) {
  {
    var r = /* @__PURE__ */ zt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Rr(r) : r;
  }
}
function J(e, t = !1) {
  return /* @__PURE__ */ zt(e);
}
function S(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Rr(n);
  return n;
}
function ra(e) {
  e.textContent = "";
}
function Pi() {
  return !1;
}
function na(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function ia(e) {
  var t = U;
  if (t === null)
    return L.f |= bt, e;
  if ((t.f & sr) === 0 && (t.f & tr) === 0)
    throw e;
  tt(e, t);
}
function tt(e, t) {
  if (!(t !== null && (t.f & Ie) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & hn) !== 0 && (t.f & (Ie | qr)) === 0) {
        if ((t.f & sr) === 0)
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
function sa(e) {
  U === null && (L === null && Ds(), Ls()), xt && Os();
}
function aa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ht(e, t) {
  var r = U;
  r !== null && (r.f & pe) !== 0 && (e |= pe);
  var n = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | te | Fe,
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
  C == null || C.register_created_effect(n);
  var i = n;
  if ((e & tr) !== 0)
    Yt !== null ? Yt.push(n) : Ut.ensure().schedule(n);
  else if (t !== null) {
    try {
      ir(n);
    } catch (a) {
      throw ye(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ar) === 0 && (i = i.first, (e & Ge) !== 0 && (e & Pt) !== 0 && i !== null && (i.f |= Pt));
  }
  if (i !== null && (i.parent = r, r !== null && aa(i, r), L !== null && (L.f & ae) !== 0 && (e & dt) === 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Fn() {
  return L !== null && !Ke;
}
function Fi(e) {
  const t = ht($r, null);
  return Q(t, ie), t.teardown = e, t;
}
function en(e) {
  sa();
  var t = (
    /** @type {Effect} */
    U.f
  ), r = !L && (t & Ue) !== 0 && ge !== null && !ge.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ge
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ui(e);
}
function Ui(e) {
  return ht(tr | ks, e);
}
function la(e) {
  Ut.ensure();
  const t = ht(dt | ar, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Lt(t, () => {
      ye(t), n(void 0);
    }) : (ye(t), n(void 0));
  });
}
function Hi(e) {
  return ht(tr, e);
}
function oa(e) {
  return ht(Kt | ar, e);
}
function zi(e, t = 0) {
  return ht($r | t, e);
}
function K(e, t = [], r = [], n = []) {
  Vs(n, t, r, (i) => {
    ht($r, () => {
      e(...i.map(u));
    });
  });
}
function Mr(e, t = 0) {
  var r = ht(Ge | t, e);
  return r;
}
function Pe(e) {
  return ht(Ue | ar, e);
}
function ji(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = xt, n = L;
    $n(!0), He(null);
    try {
      t.call(null);
    } catch (i) {
      tt(i, e.parent);
    } finally {
      $n(r), He(n);
    }
  }
}
function Un(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Cr(() => {
      i.abort(Tr);
    });
    var n = r.next;
    (r.f & dt) !== 0 ? r.parent = null : ye(r, t), r = n;
  }
}
function fa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ue) === 0 && ye(t), t = r;
  }
}
function ye(e, t = !0) {
  var r = !1;
  (t || (e.f & Es) !== 0) && e.nodes !== null && e.nodes.end !== null && (ua(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= qr, Un(e, t && !r), yr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ji(e), e.f ^= qr, e.f |= Ie;
  var i = e.parent;
  i !== null && i.first !== null && Bi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ua(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Rr(e);
    e.remove(), e = r;
  }
}
function Bi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Lt(e, t, r = !0) {
  var n = [];
  e.f |= Mn, qi(e, n, !0);
  var i = () => {
    r && ye(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function qi(e, t, r) {
  if ((e.f & pe) === 0) {
    e.f ^= pe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & dt) === 0) {
        var a = (i.f & Pt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ue) !== 0 && (e.f & Ge) !== 0;
        qi(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Wr(e) {
  e.f &= ~Mn, Vi(e, !0);
}
function Vi(e, t) {
  if ((e.f & Mn) === 0 && (e.f & pe) !== 0) {
    e.f ^= pe, (e.f & ie) === 0 && (Q(e, te), Ut.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Pt) !== 0 || (r.f & Ue) !== 0;
      Vi(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Hn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Rr(r);
      t.append(r), r = i;
    }
}
let zr = !1, xt = !1;
function $n(e) {
  xt = e;
}
let L = null, Ke = !1;
function He(e) {
  L = e;
}
let U = null;
function at(e) {
  U = e;
}
let st = null;
function Gi(e) {
  L !== null && (st ?? (st = /* @__PURE__ */ new Set())).add(e);
}
let we = null, Re = 0, Oe = null;
function ca(e) {
  Oe = e;
}
let Yi = 1, Tt = 0, Dt = Tt;
function ei(e) {
  Dt = e;
}
function Ki() {
  return ++Yi;
}
function Ir(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & ae && (e.f &= ~Ft), (t & Ze) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Ir(
        /** @type {Derived} */
        s
      ) && ki(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    oe === null && Q(e, ie);
  }
  return !1;
}
function Wi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(st !== null && st.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ae) !== 0 ? Wi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? Q(s, te) : (s.f & ie) !== 0 && Q(s, Ze), Pn(
        /** @type {Effect} */
        s
      ));
    }
}
function Zi(e) {
  var t = we, r = Re, n = Oe, i = L, s = st, a = ge, o = Ke, l = Dt, c = e.f;
  we = /** @type {null | Value[]} */
  null, Re = 0, Oe = null, L = (c & (Ue | dt)) === 0 ? e : null, st = null, rr(e.ctx), Ke = !1, Dt = ++Tt, e.ac !== null && (Cr(() => {
    e.ac.abort(Tr);
  }), e.ac = null);
  try {
    e.f |= Gr;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d();
    e.f |= sr;
    var v = ti(e);
    if (yi() && Oe !== null && !Ke && v !== null && (e.f & (ae | Ze | te)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Oe.length; h++)
        Wi(
          Oe[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Tt++, i.deps !== null)
        for (let m = 0; m < r; m += 1)
          i.deps[m].rv = Tt;
      if (t !== null)
        for (const m of t)
          m.rv = Tt;
      Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & bt) !== 0 && (e.f ^= bt), p;
  } catch (m) {
    return ti(e), ia(m);
  } finally {
    e.f ^= Gr, we = t, Re = r, Oe = n, L = i, st = s, rr(a), Ke = o, Dt = l;
  }
}
function ti(e) {
  var i;
  var t = e.deps, r = C == null ? void 0 : C.is_fork;
  if (we !== null) {
    var n;
    if (r || yr(e, Re), t !== null && Re > 0)
      for (t.length = Re + we.length, n = 0; n < we.length; n++)
        t[Re + n] = we[n];
    else
      e.deps = t = we;
    if (Fn() && (e.f & Fe) !== 0)
      for (n = Re; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && Re < t.length && (yr(e, Re), t.length = Re);
  return t;
}
function va(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ps.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !Br.call(we, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Fe) !== 0 && (s.f ^= Fe, s.f &= ~Ft), s.v !== ne && Nn(s), s.ac !== null && Cr(() => {
      s.ac.abort(Tr), s.ac = null, Q(s, te);
    }), Zs(s), yr(s, 0);
  }
}
function yr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      va(e, r[n]);
}
function ir(e) {
  var t = e.f;
  if ((t & Ie) === 0) {
    Q(e, ie);
    var r = U, n = zr;
    U = e, zr = (t & (Ue | dt)) === 0;
    try {
      (t & (Ge | pi)) !== 0 ? fa(e) : Un(e), ji(e);
      var i = Zi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Yi;
      var s;
      ci && js && (e.f & te) !== 0 && e.deps;
    } finally {
      zr = n, U = r;
    }
  }
}
function u(e) {
  var t = e.f, r = (t & ae) !== 0;
  if (L !== null && !Ke) {
    var n = U !== null && (U.f & Ie) !== 0;
    if (!n && (st === null || !st.has(e))) {
      var i = L.deps;
      if ((L.f & Gr) !== 0)
        e.rv < Tt && (e.rv = Tt, we === null && i !== null && i[Re] === e ? Re++ : we === null ? we = [e] : we.push(e));
      else {
        L.deps ?? (L.deps = []), Br.call(L.deps, e) || L.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : Br.call(s, L) || s.push(L);
      }
    }
  }
  if (xt && it.has(e))
    return it.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (xt) {
      var o = a.v;
      return ((a.f & ie) === 0 && a.reactions !== null || Ji(a)) && (o = Ln(a)), it.set(a, o), o;
    }
    var l = (a.f & Fe) === 0 && !Ke && L !== null && (zr || (L.f & Fe) !== 0), c = (a.f & sr) === 0;
    Ir(a) && (l && (a.f |= Fe), ki(a)), l && !c && (Si(a), Xi(a));
  }
  if (oe != null && oe.has(e))
    return oe.get(e);
  if ((e.f & bt) !== 0)
    throw e.v;
  return e.v;
}
function Xi(e) {
  if (e.f |= Fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & Fe) === 0 && (Si(
        /** @type {Derived} */
        t
      ), Xi(
        /** @type {Derived} */
        t
      ));
}
function Ji(e) {
  if (e.v === ne) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || (t.f & ae) !== 0 && Ji(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function tn(e) {
  var t = Ke;
  try {
    return Ke = !0, e();
  } finally {
    Ke = t;
  }
}
const Ct = Symbol("events"), Qi = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Set();
function da(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || bn.call(t, s), !s.cancelBubble)
      return Cr(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ct(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function $i(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = da(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Fi(() => {
    t.removeEventListener(e, a, s);
  });
}
function _e(e, t, r) {
  (t[Ct] ?? (t[Ct] = {}))[e] = r;
}
function rn(e) {
  for (var t = 0; t < e.length; t++)
    Qi.add(e[t]);
  for (var r of yn)
    r(e);
}
let un = null, cn = !1;
function bn(e) {
  var w, _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  un = e, cn || (cn = !0, setTimeout(() => {
    cn = !1, un = null;
  }));
  var a = 0, o = un === e && e[Ct];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ct] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    di(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = L, p = U;
    He(null), at(null);
    try {
      for (var v, h = []; s !== null && s !== t; ) {
        try {
          var m = (_ = s[Ct]) == null ? void 0 : _[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (y) {
          v ? h.push(y) : v = y;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
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
      e[Ct] = t, delete e.currentTarget, He(d), at(p);
    }
  }
}
var fi;
const vn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((fi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : fi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ha(e) {
  return (
    /** @type {string} */
    (vn == null ? void 0 : vn.createHTML(e)) ?? e
  );
}
function es(e) {
  var t = na("template");
  return t.innerHTML = ha(e.replaceAll("<!>", "<!---->")), t.content;
}
function br(e, t) {
  var r = (
    /** @type {Effect} */
    U
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = es(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ zt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Oi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      br(o, l);
    } else
      br(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function _a(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        es(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ zt(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ zt(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return br(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function pa(e, t) {
  return /* @__PURE__ */ _a(e, t, "svg");
}
function Lr(e = "") {
  {
    var t = vt(e + "");
    return br(t, t), t;
  }
}
function Nr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vt();
  return e.append(t, r), br(t, r), e;
}
function b(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ga = ["touchstart", "touchmove"];
function ma(e) {
  return ga.includes(e);
}
function wa(e) {
  let t = 0, r = Ht(0), n;
  return () => {
    Fn() && (u(r), zi(() => (t === 0 && (n = tn(() => e(() => wr(r)))), t += 1, () => {
      ct(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, wr(r));
      });
    })));
  };
}
var ya = Pt | ar;
function ba(e, t, r, n) {
  new xa(e, t, r, n);
}
var Le, Rn, De, It, de, Ae, he, Te, Qe, Nt, wt, er, Er, kr, ut, Xr, Z, Ea, ka, xn, Sa, En, _r, jr, kn, Sn;
class xa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    I(this, Z);
    /** @type {Boundary | null} */
    Se(this, "parent");
    Se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Se(this, "transform_error");
    /** @type {TemplateNode} */
    I(this, Le);
    /** @type {TemplateNode | null} */
    I(this, Rn, null);
    /** @type {BoundaryProps} */
    I(this, De);
    /** @type {((anchor: Node) => void)} */
    I(this, It);
    /** @type {Effect} */
    I(this, de);
    /** @type {Effect | null} */
    I(this, Ae, null);
    /** @type {Effect | null} */
    I(this, he, null);
    /** @type {Effect | null} */
    I(this, Te, null);
    /** @type {DocumentFragment | null} */
    I(this, Qe, null);
    I(this, Nt, 0);
    I(this, wt, 0);
    I(this, er, !1);
    /** @type {Set<Effect>} */
    I(this, Er, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    I(this, kr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, ut, null);
    I(this, Xr, wa(() => (T(this, ut, Ht(f(this, Nt))), () => {
      T(this, ut, null);
    })));
    var s;
    T(this, Le, t), T(this, De, r), T(this, It, (a) => {
      var o = (
        /** @type {Effect} */
        U
      );
      o.b = this, o.f |= hn, n(a);
    }), this.parent = /** @type {Effect} */
    U.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), T(this, de, Mr(() => {
      F(this, Z, En).call(this);
    }, ya));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    xi(t, f(this, Er), f(this, kr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, De).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    F(this, Z, kn).call(this, t, r), T(this, Nt, f(this, Nt) + t), !(!f(this, ut) || f(this, er)) && (T(this, er, !0), ct(() => {
      T(this, er, !1), f(this, ut) && nr(f(this, ut), f(this, Nt));
    }));
  }
  get_effect_pending() {
    return f(this, Xr).call(this), u(
      /** @type {Source<number>} */
      f(this, ut)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!f(this, De).onerror && !f(this, De).failed)
      throw t;
    C != null && C.is_fork ? (f(this, Ae) && C.skip_effect(f(this, Ae)), f(this, he) && C.skip_effect(f(this, he)), f(this, Te) && C.skip_effect(f(this, Te)), C.oncommit(() => {
      F(this, Z, Sn).call(this, t);
    })) : F(this, Z, Sn).call(this, t);
  }
}
Le = new WeakMap(), Rn = new WeakMap(), De = new WeakMap(), It = new WeakMap(), de = new WeakMap(), Ae = new WeakMap(), he = new WeakMap(), Te = new WeakMap(), Qe = new WeakMap(), Nt = new WeakMap(), wt = new WeakMap(), er = new WeakMap(), Er = new WeakMap(), kr = new WeakMap(), ut = new WeakMap(), Xr = new WeakMap(), Z = new WeakSet(), Ea = function() {
  try {
    T(this, Ae, Pe(() => f(this, It).call(this, f(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ka = function(t) {
  const r = f(this, De).failed, { reset: n, invoke_onerror: i } = F(this, Z, xn).call(this, t);
  ct(i), r && T(this, Te, Pe(() => {
    r(
      f(this, Le),
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
xn = function(t) {
  var r = !1, n = !1;
  const i = () => {
    if (r) {
      Rs();
      return;
    }
    r = !0, n && zs(), f(this, Te) !== null && Lt(f(this, Te), () => {
      T(this, Te, null);
    }), F(this, Z, jr).call(this, () => {
      F(this, Z, En).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var a, o;
    try {
      n = !0, (o = (a = f(this, De)).onerror) == null || o.call(a, t, i), n = !1;
    } catch (l) {
      tt(l, f(this, de) && f(this, de).parent);
    }
  } };
}, Sa = function() {
  const t = f(this, De).pending;
  t && (this.is_pending = !0, T(this, he, Pe(() => t(f(this, Le)))), ct(() => {
    var r = T(this, Qe, document.createDocumentFragment()), n = vt(), i = !1;
    if (r.append(n), T(this, Ae, F(this, Z, jr).call(this, () => {
      try {
        return Pe(() => f(this, It).call(this, n));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (a) {
          tt(a, f(this, de).parent);
        }
        return null;
      }
    })), f(this, Ae) === null) {
      T(this, Qe, null), i && F(this, Z, _r).call(
        this,
        /** @type {Batch} */
        C
      );
      return;
    }
    f(this, wt) === 0 && (f(this, Le).before(r), T(this, Qe, null), Lt(
      /** @type {Effect} */
      f(this, he),
      () => {
        T(this, he, null);
      }
    ), F(this, Z, _r).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, En = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, wt, 0), T(this, Nt, 0), T(this, Ae, Pe(() => {
      f(this, It).call(this, f(this, Le));
    })), f(this, wt) > 0) {
      var t = T(this, Qe, document.createDocumentFragment());
      Hn(f(this, Ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, De).pending
      );
      T(this, he, Pe(() => r(f(this, Le))));
    } else
      F(this, Z, _r).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
_r = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, Er), f(this, kr));
}, /**
 * @template T
 * @param {() => T} fn
 */
jr = function(t) {
  var r = U, n = L, i = ge;
  at(f(this, de)), He(f(this, de)), rr(f(this, de).ctx);
  try {
    return Ut.ensure(), t();
  } finally {
    at(r), He(n), rr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
kn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && F(n = this.parent, Z, kn).call(n, t, r);
    return;
  }
  T(this, wt, f(this, wt) + t), f(this, wt) === 0 && (F(this, Z, _r).call(this, r), f(this, he) && Lt(f(this, he), () => {
    T(this, he, null);
  }), f(this, Qe) && (f(this, Le).before(f(this, Qe)), T(this, Qe, null)));
}, /**
 * @param {unknown} error
 */
Sn = function(t) {
  f(this, Ae) && (ye(f(this, Ae)), T(this, Ae, null)), f(this, he) && (ye(f(this, he)), T(this, he, null)), f(this, Te) && (ye(f(this, Te)), T(this, Te, null));
  let r = f(this, De).failed;
  const n = (i) => {
    const { reset: s, invoke_onerror: a } = F(this, Z, xn).call(this, i);
    a(), r && T(this, Te, F(this, Z, jr).call(this, () => {
      try {
        return Pe(() => {
          var o = (
            /** @type {Effect} */
            U
          );
          o.b = this, o.f |= hn, r(
            f(this, Le),
            () => i,
            () => s
          );
        });
      } catch (o) {
        return tt(
          o,
          /** @type {Effect} */
          f(this, de).parent
        ), null;
      }
    }));
  };
  ct(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (s) {
      tt(s, f(this, de) && f(this, de).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      n,
      /** @param {unknown} e */
      (s) => tt(s, f(this, de) && f(this, de).parent)
    ) : n(i);
  });
};
function Y(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[cr] ?? (e[cr] = e.nodeValue)) && (e[cr] = r, e.nodeValue = `${r}`);
}
function Aa(e, t) {
  return Ta(e, t);
}
const Dr = /* @__PURE__ */ new Map();
function Ta(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  ta();
  var l = void 0, c = la(() => {
    var d = r ?? t.appendChild(vt());
    ba(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Et({});
        var m = (
          /** @type {ComponentContext} */
          ge
        );
        s && (m.c = s), i && (n.$$events = i), l = e(h, n) || In(), kt();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), v = (h) => {
      for (var m = 0; m < h.length; m++) {
        var w = h[m];
        if (!p.has(w)) {
          p.add(w);
          var _ = ma(w);
          for (const D of [t, document]) {
            var y = Dr.get(D);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Dr.set(D, y));
            var B = y.get(w);
            B === void 0 ? (D.addEventListener(w, bn, { passive: _ }), y.set(w, 1)) : y.set(w, B + 1);
          }
        }
      }
    };
    return v(Qr(Qi)), yn.add(v), () => {
      var _;
      for (var h of p)
        for (const y of [t, document]) {
          var m = (
            /** @type {Map<string, number>} */
            Dr.get(y)
          ), w = (
            /** @type {number} */
            m.get(h)
          );
          --w == 0 ? (y.removeEventListener(h, bn), m.delete(h), m.size === 0 && Dr.delete(y)) : m.set(h, w);
        }
      yn.delete(v), d !== r && ((_ = d.parentNode) == null || _.removeChild(d));
    };
  });
  return An.set(l, c), l;
}
let An = /* @__PURE__ */ new WeakMap();
function Ca(e, t) {
  const r = An.get(e);
  return r ? (An.delete(e), r(t)) : Promise.resolve();
}
var Ve, $e, Ce, Ot, Sr, Ar, Jr;
class zn {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, Ve, /* @__PURE__ */ new Map());
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
    I(this, $e, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Sr, !0);
    /**
     * @param {Batch} batch
     */
    I(this, Ar, (t) => {
      if (f(this, Ve).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, Ve).get(t)
        ), n = f(this, $e).get(r);
        if (n)
          Wr(n), f(this, Ot).delete(r);
        else {
          var i = f(this, Ce).get(r);
          i && (Wr(i.effect), f(this, $e).set(r, i.effect), f(this, Ce).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of f(this, Ve)) {
          if (f(this, Ve).delete(s), s === t)
            break;
          const o = f(this, Ce).get(a);
          o && (ye(o.effect), f(this, Ce).delete(a));
        }
        for (const [s, a] of f(this, $e)) {
          if (s === r || f(this, Ot).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, Ve).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Hn(a, c), c.append(vt()), f(this, Ce).set(s, { effect: a, fragment: c });
            } else
              ye(a);
            f(this, Ot).delete(s), f(this, $e).delete(s);
          };
          f(this, Sr) || !n ? (f(this, Ot).add(s), Lt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Jr, (t) => {
      f(this, Ve).delete(t);
      const r = Array.from(f(this, Ve).values());
      for (const [n, i] of f(this, Ce))
        r.includes(n) || (ye(i.effect), f(this, Ce).delete(n));
    });
    this.anchor = t, T(this, Sr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), i = Pi();
    if (r && !f(this, $e).has(t) && !f(this, Ce).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = vt();
        s.append(a), f(this, Ce).set(t, {
          effect: Pe(() => r(a)),
          fragment: s
        });
      } else
        f(this, $e).set(
          t,
          Pe(() => r(this.anchor))
        );
    if (f(this, Ve).set(n, t), i) {
      for (const [o, l] of f(this, $e))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of f(this, Ce))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(f(this, Ar)), n.ondiscard(f(this, Jr));
    } else
      f(this, Ar).call(this, n);
  }
}
Ve = new WeakMap(), $e = new WeakMap(), Ce = new WeakMap(), Ot = new WeakMap(), Sr = new WeakMap(), Ar = new WeakMap(), Jr = new WeakMap();
function Ra(e, t, ...r) {
  var n = new zn(e);
  Mr(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, Pt);
}
function V(e, t, r = !1) {
  var n = new zn(e), i = r ? Pt : 0;
  function s(a, o) {
    n.ensure(a, o);
  }
  Mr(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(-1, null);
  }, i);
}
const Ma = Symbol("NaN");
function ts(e, t, r) {
  var n = new zn(e);
  Mr(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Ma), n.ensure(i, r);
  });
}
function jn(e, t) {
  return t;
}
function Ia(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let p = t[o];
    Lt(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Tn(e, Qr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = n.length === 0 && r !== null && e.pending.size === 0;
    if (l) {
      var c = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      ra(d), d.append(c), e.items.clear();
    }
    Tn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Tn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const o of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n != null && n.has(s)) {
      s.f |= rt;
      const a = document.createDocumentFragment();
      Hn(s, a);
    } else
      ye(t[i], r);
  }
}
var ri;
function We(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = c.appendChild(vt());
  }
  var d = null, p = /* @__PURE__ */ Ks(() => {
    var D = r();
    return (
      /** @type {V[]} */
      vi(D) ? D : D == null ? [] : Qr(D)
    );
  }), v, h = /* @__PURE__ */ new Map(), m = !0;
  function w(D) {
    (B.effect.f & Ie) === 0 && (B.pending.delete(D), B.fallback = d, Na(B, v, a, t, n), d !== null && (v.length === 0 ? (d.f & rt) === 0 ? Wr(d) : (d.f ^= rt, pr(d, null, a)) : Lt(d, () => {
      d = null;
    })));
  }
  function _(D) {
    B.pending.delete(D);
  }
  var y = Mr(() => {
    v = /** @type {V[]} */
    u(p);
    for (var D = v.length, z = /* @__PURE__ */ new Set(), A = (
      /** @type {Batch} */
      C
    ), R = Pi(), P = 0; P < D; P += 1) {
      var se = v[P], g = n(se, P), E = m ? null : o.get(g);
      E ? (E.v && nr(E.v, se), E.i && nr(E.i, P), R && A.unskip_effect(E.e)) : (E = Oa(
        o,
        m ? a : ri ?? (ri = vt()),
        se,
        g,
        P,
        i,
        t,
        r
      ), m || (E.e.f |= rt), o.set(g, E)), z.add(g);
    }
    if (D === 0 && s && !d && (m ? d = Pe(() => s(a)) : (d = Pe(() => s(ri ?? (ri = vt()))), d.f |= rt)), D > z.size && Ns(), !m)
      if (h.set(A, z), R) {
        for (const [j, $] of o)
          z.has(j) || A.skip_effect($.e);
        A.oncommit(w), A.ondiscard(_);
      } else
        w(A);
    u(p);
  }), B = { effect: y, items: o, pending: h, outrogroups: null, fallback: d };
  m = !1;
}
function ur(e) {
  for (; e !== null && (e.f & Ue) === 0; )
    e = e.next;
  return e;
}
function Na(e, t, r, n, i) {
  var E, j, $, ce, be, le, re, ve, Ne;
  var s = (n & 8) !== 0, a = t.length, o = e.items, l = ur(e.effect.first), c, d = null, p, v = [], h = [], m, w, _, y;
  if (s)
    for (y = 0; y < a; y += 1)
      m = t[y], w = i(m, y), _ = /** @type {EachItem} */
      o.get(w).e, (_.f & rt) === 0 && ((j = (E = _.nodes) == null ? void 0 : E.a) == null || j.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(_));
  for (y = 0; y < a; y += 1) {
    if (m = t[y], w = i(m, y), _ = /** @type {EachItem} */
    o.get(w).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(_), fe.done.delete(_);
    if ((_.f & pe) !== 0 && (Wr(_), s && ((ce = ($ = _.nodes) == null ? void 0 : $.a) == null || ce.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(_))), (_.f & rt) !== 0)
      if (_.f ^= rt, _ === l)
        pr(_, null, r);
      else {
        var B = d ? d.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), gt(e, d, _), gt(e, _, B), pr(_, B, r), d = _, v = [], h = [], l = ur(d.next);
        continue;
      }
    if (_ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < h.length) {
          var D = h[0], z;
          d = D.prev;
          var A = v[0], R = v[v.length - 1];
          for (z = 0; z < v.length; z += 1)
            pr(v[z], D, r);
          for (z = 0; z < h.length; z += 1)
            c.delete(h[z]);
          gt(e, A.prev, R.next), gt(e, d, A), gt(e, R, D), l = D, d = R, y -= 1, v = [], h = [];
        } else
          c.delete(_), pr(_, l, r), gt(e, _.prev, _.next), gt(e, _, d === null ? e.effect.first : d.next), gt(e, d, _), d = _;
        continue;
      }
      for (v = [], h = []; l !== null && l !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), h.push(l), l = ur(l.next);
      if (l === null)
        continue;
    }
    (_.f & rt) === 0 && v.push(_), d = _, l = ur(_.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (Tn(e, Qr(fe.done)), (be = e.outrogroups) == null || be.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var P = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & pe) === 0 && P.push(_);
    for (; l !== null; )
      (l.f & pe) === 0 && l !== e.fallback && P.push(l), l = ur(l.next);
    var se = P.length;
    if (se > 0) {
      var g = (n & 4) !== 0 && a === 0 ? r : null;
      if (s) {
        for (y = 0; y < se; y += 1)
          (re = (le = P[y].nodes) == null ? void 0 : le.a) == null || re.measure();
        for (y = 0; y < se; y += 1)
          (Ne = (ve = P[y].nodes) == null ? void 0 : ve.a) == null || Ne.fix();
      }
      Ia(e, P, g);
    }
  }
  s && ct(() => {
    var fe, N;
    if (p !== void 0)
      for (_ of p)
        (N = (fe = _.nodes) == null ? void 0 : fe.a) == null || N.apply();
  });
}
function Oa(e, t, r, n, i, s, a, o) {
  var l = (a & 1) !== 0 ? (a & 16) === 0 ? /* @__PURE__ */ $s(r, !1, !1) : Ht(r) : null, c = (a & 2) !== 0 ? Ht(i) : null;
  return {
    v: l,
    i: c,
    e: Pe(() => (s(t, l ?? r, c ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function pr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & rt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rr(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function gt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function La(e, t, r) {
  Hi(() => {
    var n = tn(() => t(e, r == null ? void 0 : r()) || {});
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
const ni = [...` 	
\r\f \v\uFEFF`];
function Da(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ni.includes(n[a - 1])) && (o === n.length || ni.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function Pr(e, t, r, n, i, s) {
  var a = (
    /** @type {any} */
    e[_n]
  );
  if (a !== r || a === void 0) {
    var o = Da(r, n, s);
    o == null ? e.removeAttribute("class") : e.className = o, e[_n] = r;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return s;
}
const Pa = Symbol("is custom element"), Fa = Symbol("is html"), Ua = Ts ? "progress" : "PROGRESS";
function Ha(e, t) {
  var r = rs(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ua) || (e.value = t ?? "");
}
function et(e, t, r, n) {
  var i = rs(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[Ss] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && za(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function rs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Ur] ?? (e[Ur] = {
      [Pa]: e.nodeName.includes("-"),
      [Fa]: e.namespaceURI === _s
    })
  );
}
var ii = /* @__PURE__ */ new Map();
function za(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ii.get(t);
  if (r) return r;
  ii.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = gs(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = hi(i);
  }
  return r;
}
function dn(e, t) {
  return e === t || (e == null ? void 0 : e[Fr]) === t;
}
function ja(e = In(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ge.r
  ), s = (
    /** @type {Effect} */
    U
  );
  return Hi(() => {
    var a, o;
    return zi(() => {
      a = o, o = [], tn(() => {
        dn(r(...o), e) || (t(e, ...o), a && dn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let l = s;
      for (; l !== i && l.parent !== null && l.parent.f & qr; )
        l = l.parent;
      const c = () => {
        o && dn(r(...o), e) && t(null, ...o);
      }, d = l.teardown;
      l.teardown = () => {
        c(), d == null || d();
      };
    };
  }), e;
}
function yt(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = a());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? a() : (s = !0, c);
  }, l;
}
const Ba = "5";
var ui;
typeof window < "u" && ((ui = window.__svelte ?? (window.__svelte = {})).v ?? (ui.v = /* @__PURE__ */ new Set())).add(Ba);
let nn = "";
function qa(e) {
  nn = e;
}
async function jt(e, t) {
  const r = new URL(`${nn}${e}`, window.location.origin);
  for (const [n, i] of Object.entries(t ?? {}))
    i != null && i !== "" && r.searchParams.set(n, String(i));
  try {
    const n = await fetch(r);
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
const ns = (e) => jt("/accounts", e), Va = () => jt("/rails"), Ga = (e) => jt(`/accounts/${encodeURIComponent(e)}`), Ya = (e) => jt(`/accounts/${encodeURIComponent(e)}/similar`), Ka = (e, t, r) => jt(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: r }), Wa = (e, t, r) => jt(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: r }), Za = (e, t) => jt(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), Xa = (e, t, r) => `${nn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${r}`, si = (e, t, r = 0) => `${nn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${r}`;
var Ja = /* @__PURE__ */ M('<img loading="lazy"/>'), Qa = /* @__PURE__ */ M('<span class="ofx-initials"> </span>');
function Bn(e, t) {
  Et(t, !0);
  let r = yt(t, "src", 3, null), n = yt(t, "alt", 3, ""), i = yt(t, "name", 3, ""), s = /* @__PURE__ */ H(!1);
  const a = /* @__PURE__ */ nt(() => (i() || n() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((p) => {
    var v;
    return ((v = p[0]) == null ? void 0 : v.toUpperCase()) ?? "";
  }).join(""));
  var o = Nr(), l = Me(o);
  {
    var c = (p) => {
      var v = Ja();
      K(() => {
        et(v, "src", r()), et(v, "alt", n());
      }), $i("error", v, () => x(s, !0)), b(p, v);
    }, d = (p) => {
      var v = Qa(), h = J(v, !0);
      K(() => Y(h, u(a))), b(p, v);
    };
    V(l, (p) => {
      r() && !u(s) ? p(c) : p(d, -1);
    });
  }
  b(e, o), kt();
}
var $a = /* @__PURE__ */ M('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function is(e, t) {
  Et(t, !0);
  var r = $a(), n = W(r), i = W(n);
  Bn(i, {
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
  var s = S(n, 2), a = J(s, !0), o = S(s, 2), l = J(o);
  K(() => {
    et(r, "href", `/x/onlyfans/${t.account.handle ?? ""}`), et(s, "title", t.account.display_name), Y(a, t.account.display_name), Y(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), _e("click", r, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), b(e, r), kt();
}
rn(["click"]);
var el = /* @__PURE__ */ M('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), tl = /* @__PURE__ */ M('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), rl = /* @__PURE__ */ M('<span class="ofx-note"> </span>'), nl = /* @__PURE__ */ M('<div class="ofx-rail-actions"><!></div>'), il = /* @__PURE__ */ M('<div class="ofx-rail-item"><!></div>'), sl = /* @__PURE__ */ M('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Cn(e, t) {
  Et(t, !0);
  let r = yt(t, "note", 3, ""), n = yt(t, "order", 3, null), i = yt(t, "fetcher", 3, null), s = yt(t, "size", 3, 20), a = /* @__PURE__ */ H(Ye([])), o = /* @__PURE__ */ H(!0), l = /* @__PURE__ */ H(0);
  function c() {
    x(l, u(l) + 1);
  }
  en(() => {
    const w = n(), _ = i(), y = s();
    u(l);
    let B = !1;
    x(o, !0);
    const D = _ ? _() : ns({ order: w, limit: y, offset: 0 });
    return Promise.resolve(D).then((z) => {
      B || (x(a, Array.isArray(z) ? z : (z == null ? void 0 : z.items) ?? [], !0), x(o, !1));
    }), () => {
      B = !0;
    };
  });
  var d = { reload: c }, p = Nr(), v = Me(p);
  {
    var h = (w) => {
      var _ = tl(), y = W(_), B = J(y, !0), D = S(y, 2);
      We(D, 20, () => Array(8), jn, (z, A) => {
        var R = el();
        b(z, R);
      }), K(() => Y(B, t.title)), b(w, _);
    }, m = (w) => {
      var _ = sl(), y = W(_), B = W(y), D = J(B, !0), z = S(B, 2);
      {
        var A = (g) => {
          var E = rl(), j = J(E, !0);
          K(() => Y(j, r())), b(g, E);
        };
        V(z, (g) => {
          r() && g(A);
        });
      }
      var R = S(z, 2);
      {
        var P = (g) => {
          var E = nl(), j = W(E);
          Ra(j, () => t.actions), b(g, E);
        };
        V(R, (g) => {
          t.actions && g(P);
        });
      }
      var se = S(y, 2);
      We(se, 21, () => u(a), (g) => g.handle, (g, E) => {
        var j = il(), $ = W(j);
        is($, {
          get account() {
            return u(E);
          },
          get navigate() {
            return t.navigate;
          }
        }), b(g, j);
      }), K(() => Y(D, t.title)), b(w, _);
    };
    V(v, (w) => {
      u(o) ? w(h) : u(a).length && w(m, 1);
    });
  }
  return b(e, p), kt(d);
}
var al = /* @__PURE__ */ M(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), ll = /* @__PURE__ */ M('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), ol = /* @__PURE__ */ M('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), fl = /* @__PURE__ */ M('<div class="ofx-sentinel"></div>'), ul = /* @__PURE__ */ M('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), cl = /* @__PURE__ */ M('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), vl = /* @__PURE__ */ M("<!> <!>", 1), dl = /* @__PURE__ */ M('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function hl(e, t) {
  Et(t, !0);
  const r = 60, n = 20;
  let i = /* @__PURE__ */ H(Ye([])), s = /* @__PURE__ */ H(0), a = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), c = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(""), p, v = /* @__PURE__ */ H(null), h = /* @__PURE__ */ H(Ye([]));
  en(() => {
    Va().then((N) => {
      x(h, Array.isArray(N) ? N : [], !0);
    });
  });
  const m = /* @__PURE__ */ nt(() => u(l).trim()), w = /* @__PURE__ */ nt(() => u(m) !== "" || u(c)), _ = /* @__PURE__ */ nt(() => u(i).length < u(s));
  async function y(N, X) {
    x(a, !0);
    const ue = await ns({ search: N, limit: r, offset: X });
    if (N !== u(l).trim()) {
      x(a, !1);
      return;
    }
    ue ? (x(i, X === 0 ? ue.items : [...u(i), ...ue.items], !0), x(s, ue.total, !0), x(d, N, !0), x(o, !1)) : x(o, !0), x(a, !1);
  }
  function B(N) {
    x(l, N.currentTarget.value, !0), clearTimeout(p), p = setTimeout(() => y(u(l).trim(), 0), 250);
  }
  function D() {
    x(c, !0), y("", 0);
  }
  function z() {
    x(c, !1), x(l, ""), x(i, [], !0), x(s, 0), x(d, "");
  }
  function A(N) {
    const X = new IntersectionObserver(
      (ue) => {
        var ze;
        (ze = ue[0]) != null && ze.isIntersecting && u(_) && !u(a) && y(u(d), u(i).length);
      },
      { rootMargin: "600px" }
    );
    return X.observe(N), { destroy: () => X.disconnect() };
  }
  var R = dl(), P = S(Me(R), 2), se = W(P);
  {
    var g = (N) => {
      var X = Lr();
      K(
        (ue, ze) => Y(X, `${ue ?? ""} of ${ze ?? ""}
        ${u(d) ? `matching “${u(d)}”` : "accounts"}`),
        [
          () => u(i).length.toLocaleString(),
          () => u(s).toLocaleString()
        ]
      ), b(N, X);
    }, E = (N) => {
      var X = Lr("loading…");
      b(N, X);
    }, j = (N) => {
      var X = Lr("nothing found");
      b(N, X);
    }, $ = (N) => {
      var X = Lr("performers, gathered from the archive sites");
      b(N, X);
    };
    V(se, (N) => {
      u(w) && u(s) ? N(g) : u(w) && u(a) ? N(E, 1) : u(w) ? N(j, 2) : N($, -1);
    });
  }
  var ce = S(P, 2), be = S(W(ce), 2), le = S(ce, 2);
  {
    var re = (N) => {
      var X = al();
      b(N, X);
    };
    V(le, (N) => {
      u(o) && N(re);
    });
  }
  var ve = S(le, 2);
  {
    var Ne = (N) => {
      var X = ul(), ue = Me(X);
      {
        var ze = (ee) => {
          var Ee = ll(), At = J(Ee);
          _e("click", At, z), b(ee, Ee);
        };
        V(ue, (ee) => {
          u(c) && !u(m) && ee(ze);
        });
      }
      var xe = S(ue, 2), Xe = W(xe);
      We(Xe, 17, () => u(i), (ee) => ee.handle, (ee, Ee) => {
        is(ee, {
          get account() {
            return u(Ee);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var je = S(Xe, 2);
      {
        var _t = (ee) => {
          var Ee = Nr(), At = Me(Ee);
          We(At, 16, () => Array(12), jn, (Or, qn) => {
            var sn = ol();
            b(Or, sn);
          }), b(ee, Ee);
        };
        V(je, (ee) => {
          u(a) && ee(_t);
        });
      }
      var St = S(xe, 2);
      {
        var lr = (ee) => {
          var Ee = fl();
          La(Ee, (At) => A == null ? void 0 : A(At)), b(ee, Ee);
        };
        V(St, (ee) => {
          u(_) && ee(lr);
        });
      }
      b(N, X);
    }, fe = (N) => {
      var X = vl(), ue = Me(X);
      We(ue, 17, () => u(h).filter((xe) => xe.order !== "random"), (xe) => xe.order, (xe, Xe) => {
        Cn(xe, {
          get title() {
            return u(Xe).title;
          },
          get note() {
            return u(Xe).note;
          },
          get order() {
            return u(Xe).order;
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var ze = S(ue, 2);
      {
        const xe = (je) => {
          var _t = cl(), St = Me(_t), lr = S(St, 2);
          _e("click", St, () => {
            var ee;
            return (ee = u(v)) == null ? void 0 : ee.reload();
          }), _e("click", lr, D), b(je, _t);
        };
        let Xe = /* @__PURE__ */ nt(() => {
          var je;
          return ((je = u(h).find((_t) => _t.order === "random")) == null ? void 0 : je.title) ?? "Something else";
        });
        ja(
          Cn(ze, {
            get title() {
              return u(Xe);
            },
            order: "random",
            size: n,
            get navigate() {
              return t.navigate;
            },
            actions: xe,
            $$slots: { actions: !0 }
          }),
          (je) => x(v, je, !0),
          () => u(v)
        );
      }
      b(N, X);
    };
    V(ve, (N) => {
      u(w) ? N(Ne) : N(fe, -1);
    });
  }
  K(() => Ha(be, u(l))), _e("input", be, B), b(e, R), kt();
}
rn(["input", "click"]);
var _l = /* @__PURE__ */ M('<p class="ofx-error"> </p>'), pl = /* @__PURE__ */ M('<p class="ofx-note"> </p>'), ai = /* @__PURE__ */ M('<span class="ofx-badge"> </span>'), gl = /* @__PURE__ */ M('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), ml = /* @__PURE__ */ M('<div class="ofx-skeleton"></div>'), wl = /* @__PURE__ */ M('<button class="ofx-btn ofx-outline" type="button"> </button>'), yl = /* @__PURE__ */ M('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function bl(e, t) {
  Et(t, !0);
  let r = /* @__PURE__ */ H(Ye([])), n = /* @__PURE__ */ H(0), i = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(!1);
  async function o() {
    if (u(i) || u(s)) return;
    x(i, !0);
    const A = u(n) + 1, P = await (t.mode === "images" ? Wa : Ka)(t.handle, t.site, A);
    P === null ? x(a, !0) : (x(r, [...u(r), ...P], !0), x(n, A), P.length === 0 && x(s, !0)), x(i, !1);
  }
  en(() => {
    t.mode, t.handle, t.site, tn(() => {
      x(r, [], !0), x(n, 0), x(s, !1), x(a, !1), x(i, !1), o();
    });
  });
  function l(A) {
    return A ? `${Math.floor(A / 60)}:${String(A % 60).padStart(2, "0")}` : null;
  }
  var c = yl(), d = W(c), p = J(d, !0), v = S(d, 2);
  {
    var h = (A) => {
      var R = _l(), P = J(R);
      K(() => Y(P, `${t.site ?? ""} did not answer.`)), b(A, R);
    }, m = (A) => {
      var R = pl(), P = J(R);
      K(() => Y(P, `Nothing here on ${t.site ?? ""}.`)), b(A, R);
    };
    V(v, (A) => {
      u(a) ? A(h) : !u(i) && u(r).length === 0 && A(m, 1);
    });
  }
  var w = S(v, 2), _ = W(w);
  We(_, 17, () => u(r), (A) => A.video_id ?? A.gallery_id, (A, R) => {
    var P = gl(), se = W(P), g = W(se);
    {
      let re = /* @__PURE__ */ nt(() => t.mode === "images" ? u(R).cover : u(R).thumbnail);
      Bn(g, {
        get src() {
          return u(re);
        },
        get alt() {
          return u(R).title;
        },
        get name() {
          return u(R).title;
        }
      });
    }
    var E = S(g, 2);
    {
      var j = (re) => {
        var ve = ai(), Ne = J(ve, !0);
        K(() => Y(Ne, u(R).image_count)), b(re, ve);
      }, $ = (re) => {
        var ve = ai(), Ne = J(ve, !0);
        K((fe) => Y(Ne, fe), [() => l(u(R).duration)]), b(re, ve);
      }, ce = /* @__PURE__ */ nt(() => l(u(R).duration));
      V(E, (re) => {
        t.mode === "images" && u(R).image_count ? re(j) : u(ce) && re($, 1);
      });
    }
    var be = S(se, 2), le = J(be, !0);
    K(() => Y(le, u(R).title)), _e("click", P, () => t.mode === "images" ? t.ongallery(u(R)) : t.onplay(u(R))), b(A, P);
  });
  var y = S(_, 2);
  {
    var B = (A) => {
      var R = Nr(), P = Me(R);
      We(P, 16, () => Array(4), jn, (se, g) => {
        var E = ml();
        b(se, E);
      }), b(A, R);
    };
    V(y, (A) => {
      u(i) && A(B);
    });
  }
  var D = S(w, 2);
  {
    var z = (A) => {
      var R = wl(), P = J(R, !0);
      K(() => {
        R.disabled = u(i), Y(P, u(i) ? "Loading…" : "Load more");
      }), _e("click", R, o), b(A, R);
    };
    V(D, (A) => {
      !u(s) && !u(a) && u(r).length > 0 && A(z);
    });
  }
  K(() => Y(p, t.site)), b(e, c), kt();
}
rn(["click"]);
var xl = /* @__PURE__ */ M('<p class="ofx-error">That account could not be loaded.</p>'), El = /* @__PURE__ */ M('<div class="ofx-banner"><img alt=""/></div>'), kl = /* @__PURE__ */ pa('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Sl = /* @__PURE__ */ M('<p> </p> <button class="ofx-more" type="button"> </button>', 1), Al = /* @__PURE__ */ M("<span><b> </b> </span>"), Tl = /* @__PURE__ */ M('<div class="ofx-stats"></div>'), Cl = /* @__PURE__ */ M("<span> </span>"), li = /* @__PURE__ */ M('<a target="_blank" rel="noreferrer noopener"> </a>'), Rl = /* @__PURE__ */ M('<button type="button"> </button>'), Ml = /* @__PURE__ */ M('<span class="ofx-count"> </span>'), Il = /* @__PURE__ */ M('<button type="button"> <!></button>'), Nl = /* @__PURE__ */ M('<p class="ofx-error"> </p>'), Ol = /* @__PURE__ */ M(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Ll = /* @__PURE__ */ M('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Dl = /* @__PURE__ */ M('<p class="ofx-note">Loading…</p>'), Pl = /* @__PURE__ */ M('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Fl = /* @__PURE__ */ M('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Ul = /* @__PURE__ */ M('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Hl = /* @__PURE__ */ M("<!> <!> <!>", 1);
function zl(e, t) {
  Et(t, !0);
  let r = /* @__PURE__ */ H(null), n = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H("videos"), s = /* @__PURE__ */ H(Ye(/* @__PURE__ */ new Set())), a = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(null), l = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(null);
  en(() => {
    Ga(t.handle).then((g) => {
      g ? x(r, g, !0) : x(n, !0);
    });
  });
  const d = /* @__PURE__ */ nt(() => {
    var g, E, j, $;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (g = u(r)) == null ? void 0 : g.posts_count],
      ["photos", (E = u(r)) == null ? void 0 : E.photos_count],
      ["videos", (j = u(r)) == null ? void 0 : j.videos_count],
      ["likes", ($ = u(r)) == null ? void 0 : $.likes_count]
    ].filter(([, ce]) => ce != null);
  });
  function p(g) {
    const E = new Set(u(s));
    E.has(g) ? E.delete(g) : E.add(g), x(s, E, !0);
  }
  function v(g) {
    var E, j;
    if (!((E = t.host) != null && E.play)) {
      x(o, g, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: si(g.site, g.video_id),
      title: g.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: g.thumbnail ?? void 0,
      site: g.site,
      videoId: g.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((j = u(r)) == null ? void 0 : j.display_name) || t.handle,
      duration: g.duration,
      resolution: g.resolution,
      size: g.size
    });
  }
  async function h(g) {
    x(c, null);
    const E = await Za(g.site, g.gallery_id);
    if (!E) {
      x(c, "Could not open that gallery");
      return;
    }
    if (E.length === 0) {
      x(c, "That site served no images for this gallery");
      return;
    }
    x(l, { gallery: g, count: E.length, index: 0 }, !0);
  }
  function m(g) {
    u(l) && x(
      l,
      {
        ...u(l),
        index: (u(l).index + g + u(l).count) % u(l).count
      },
      !0
    );
  }
  function w(g) {
    if (g.key === "Escape") {
      x(o, null), x(l, null);
      return;
    }
    u(l) && (g.key === "ArrowRight" && m(1), g.key === "ArrowLeft" && m(-1));
  }
  var _ = Hl();
  $i("keydown", wn, w);
  var y = Me(_);
  {
    var B = (g) => {
      var E = xl();
      b(g, E);
    }, D = (g) => {
      var E = Ll(), j = Me(E), $ = W(j);
      {
        var ce = (k) => {
          var O = El(), q = J(O);
          K(() => et(q, "src", u(r).header_url)), b(k, O);
        };
        V($, (k) => {
          u(r).header_url && k(ce);
        });
      }
      var be = S($, 2), le = W(be);
      let re;
      var ve = W(le);
      Bn(ve, {
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
      var Ne = S(le, 2), fe = W(Ne), N = W(fe), X = S(N);
      {
        var ue = (k) => {
          var O = kl();
          b(k, O);
        };
        V(X, (k) => {
          u(r).is_verified && k(ue);
        });
      }
      var ze = S(fe, 2), xe = W(ze), Xe = S(xe, 2), je = S(ze, 2);
      {
        var _t = (k) => {
          var O = Sl(), q = Me(O);
          let ke;
          var lt = J(q, !0), Bt = S(q, 2), or = J(Bt, !0);
          K(() => {
            ke = Pr(q, 1, "ofx-bio", null, ke, { "ofx-clamped": !u(a) }), Y(lt, u(r).bio), Y(or, u(a) ? "less" : "more");
          }), _e("click", Bt, () => x(a, !u(a))), b(k, O);
        };
        V(je, (k) => {
          u(r).bio && k(_t);
        });
      }
      var St = S(je, 2);
      {
        var lr = (k) => {
          var O = Tl();
          We(O, 21, () => u(d), ([q, ke]) => q, (q, ke) => {
            var lt = /* @__PURE__ */ nt(() => xs(u(ke), 2));
            let Bt = () => u(lt)[0], or = () => u(lt)[1];
            var pt = Al(), fr = W(pt), an = J(fr, !0), cs = S(fr);
            K(
              (vs) => {
                Y(an, vs), Y(cs, ` ${Bt() ?? ""}`);
              },
              [() => or().toLocaleString()]
            ), b(q, pt);
          }), b(k, O);
        };
        V(St, (k) => {
          u(d).length && k(lr);
        });
      }
      var ee = S(St, 2), Ee = W(ee);
      {
        var At = (k) => {
          var O = Cl(), q = J(O, !0);
          K(() => Y(q, u(r).location)), b(k, O);
        };
        V(Ee, (k) => {
          u(r).location && k(At);
        });
      }
      var Or = S(Ee, 2);
      {
        var qn = (k) => {
          var O = li(), q = J(O, !0);
          K(
            (ke) => {
              et(O, "href", u(r).website), Y(q, ke);
            },
            [() => u(r).website.replace(/^https?:\/\//, "")]
          ), b(k, O);
        };
        V(Or, (k) => {
          u(r).website && k(qn);
        });
      }
      var sn = S(Or, 2);
      {
        var ss = (k) => {
          var O = li(), q = J(O);
          K(() => {
            et(O, "href", u(r).of_url), Y(q, `onlyfans.com/${u(r).of_username ?? ""}`);
          }), b(k, O);
        };
        V(sn, (k) => {
          u(r).of_url && k(ss);
        });
      }
      var as = S(be, 2);
      We(as, 20, () => ["videos", "images"], (k) => k, (k, O) => {
        var q = Rl();
        let ke;
        var lt = J(q, !0);
        K(() => {
          ke = Pr(q, 1, "ofx-tab", null, ke, { "ofx-on": u(i) === O }), Y(lt, O);
        }), _e("click", q, () => x(i, O, !0)), b(k, q);
      });
      var Vn = S(j, 2), Gn = S(W(Vn), 2);
      We(Gn, 17, () => u(r).sources, (k) => k.site, (k, O) => {
        var q = Il();
        let ke;
        var lt = W(q), Bt = S(lt);
        {
          var or = (pt) => {
            var fr = Ml(), an = J(fr, !0);
            K(() => Y(an, u(O).video_count)), b(pt, fr);
          };
          V(Bt, (pt) => {
            u(O).video_count && pt(or);
          });
        }
        K(
          (pt) => {
            ke = Pr(q, 1, "ofx-btn ofx-outline", null, ke, { "ofx-on": pt }), Y(lt, `${u(O).site ?? ""} `);
          },
          [() => u(s).has(u(O).site)]
        ), _e("click", q, () => p(u(O).site)), b(k, q);
      });
      var ls = S(Gn, 2), Yn = S(Vn, 2);
      {
        var os = (k) => {
          var O = Nl(), q = J(O, !0);
          K(() => Y(q, u(c))), b(k, O);
        };
        V(Yn, (k) => {
          u(c) && k(os);
        });
      }
      var Kn = S(Yn, 2);
      {
        var fs = (k) => {
          var O = Ol();
          b(k, O);
        };
        V(Kn, (k) => {
          u(s).size === 0 && k(fs);
        });
      }
      var Wn = S(Kn, 2);
      We(Wn, 17, () => u(r).sources.filter((k) => u(s).has(k.site)), (k) => k.site, (k, O) => {
        bl(k, {
          get handle() {
            return u(r).handle;
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
      var us = S(Wn, 2);
      ts(us, () => u(r).handle, (k) => {
        Cn(k, {
          get title() {
            return `More like ${u(r).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => Ya(u(r).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), K(() => {
        re = Pr(le, 1, "ofx-avatar", null, re, { "ofx-overlap": !!u(r).header_url }), Y(N, `${u(r).display_name ?? ""} `), Y(xe, `@${(u(r).of_username || u(r).handle) ?? ""} `), Y(Xe, ` ${u(r).source_count ?? ""}
                    ${u(r).source_count === 1 ? "site" : "sites"}`);
      }), _e("click", ls, () => t.navigate("/x/onlyfans")), b(g, E);
    }, z = (g) => {
      var E = Dl();
      b(g, E);
    };
    V(y, (g) => {
      u(n) ? g(B) : u(r) ? g(D, 1) : g(z, -1);
    });
  }
  var A = S(y, 2);
  {
    var R = (g) => {
      var E = Pl(), j = W(E), $ = S(j, 2);
      K((ce) => et($, "src", ce), [
        () => si(u(o).site, u(o).video_id)
      ]), _e("click", j, () => x(o, null)), b(g, E);
    };
    V(A, (g) => {
      u(o) && g(R);
    });
  }
  var P = S(A, 2);
  {
    var se = (g) => {
      var E = Ul(), j = W(E), $ = S(j, 2);
      {
        var ce = (le) => {
          var re = Fl(), ve = Me(re), Ne = S(ve, 2);
          _e("click", ve, () => m(-1)), _e("click", Ne, () => m(1)), b(le, re);
        };
        V($, (le) => {
          u(l).count > 1 && le(ce);
        });
      }
      var be = S($, 2);
      K(
        (le) => {
          et(be, "src", le), et(be, "alt", `${u(l).gallery.title ?? ""} ${u(l).index + 1} of ${u(l).count ?? ""}`);
        },
        [
          () => Xa(u(l).gallery.site, u(l).gallery.gallery_id, u(l).index)
        ]
      ), _e("click", j, () => x(l, null)), b(g, E);
    };
    V(P, (g) => {
      u(l) && g(se);
    });
  }
  b(e, _), kt();
}
rn(["click"]);
var jl = /* @__PURE__ */ M('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Bl(e, t) {
  Et(t, !0);
  let r = yt(t, "path", 3, "");
  qa(t.api);
  const n = /* @__PURE__ */ nt(() => (r() || "").split("/").filter(Boolean)[0] ?? "");
  var i = jl(), s = W(i), a = W(s);
  {
    var o = (c) => {
      var d = Nr(), p = Me(d);
      ts(p, () => u(n), (v) => {
        zl(v, {
          get handle() {
            return u(n);
          },
          get navigate() {
            return t.navigate;
          },
          get host() {
            return t.host;
          }
        });
      }), b(c, d);
    }, l = (c) => {
      hl(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    V(a, (c) => {
      u(n) ? c(o) : c(l, -1);
    });
  }
  b(e, i), kt();
}
function Gl({ target: e, path: t, api: r, navigate: n, host: i }) {
  const s = Ye({ path: t ?? "", api: r, navigate: n, host: i }), a = Aa(Bl, { target: e, props: s });
  return {
    update(o) {
      s.path = o ?? "";
    },
    destroy() {
      Ca(a);
    }
  };
}
export {
  Gl as default
};

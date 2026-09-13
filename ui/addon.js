var Aa = Object.defineProperty;
var ai = (e) => {
  throw TypeError(e);
};
var Ca = (e, t, n) => t in e ? Aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Le = (e, t, n) => Ca(e, typeof t != "symbol" ? t + "" : t, n), lr = (e, t, n) => t.has(e) || ai("Cannot " + n);
var u = (e, t, n) => (lr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? ai("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), P = (e, t, n, r) => (lr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), W = (e, t, n) => (lr(e, t, "access private method"), n);
const pe = Symbol("uninitialized"), Ra = "http://www.w3.org/1999/xhtml", yi = !1;
var ki = Array.isArray, Ma = Array.prototype.indexOf, Kn = Array.prototype.includes, rr = Array.from, Ei = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyDescriptors, Ia = Object.prototype, Na = Array.prototype, Pr = Object.getPrototypeOf, si = Object.isExtensible;
const Oa = () => {
};
function La(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ti() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function _r(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const me = 2, on = 4, ir = 8, Ai = 1 << 24, nt = 16, Ze = 32, kt = 64, pr = 128, Dr = 256, We = 512, be = 1024, _e = 2048, it = 4096, Ee = 8192, je = 16384, cn = 32768, Wn = 1 << 25, zt = 65536, Zn = 1 << 17, Pa = 1 << 18, vn = 1 << 19, Da = 1 << 20, ut = 1 << 25, Vt = 65536, Jn = 1 << 21, Xt = 1 << 22, Mt = 1 << 23, Qt = Symbol("$state"), Ci = Symbol("component"), Fa = Symbol(""), Bn = Symbol("attributes"), gr = Symbol("class"), br = Symbol("style"), gn = Symbol("text"), On = new class extends Error {
  constructor() {
    super(...arguments);
    Le(this, "name", "StaleReactionError");
    Le(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var mi;
const Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((mi = globalThis.document) != null && mi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ja() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ha() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ri(e) {
  return e === this.v;
}
function Mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ii(e) {
  return !Mi(e, this.v);
}
function za() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Va(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ba(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ga(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ya() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ka() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Za() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ja() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Xa = !1, Se = null;
function ln(e) {
  Se = e;
}
function ht(e, t = !1, n) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      Z
    ),
    l: null
  };
}
function _t(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ji(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Se = t.p, Fr(e);
}
function Fr(e = {}) {
  return Ei(e, Ci, { value: !0 }), e;
}
function Ni() {
  return !0;
}
let Wt = [];
function Qa() {
  var e = Wt;
  Wt = [], La(e);
}
function xt(e) {
  if (Wt.length === 0) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Qa();
    });
  }
  Wt.push(e);
}
const $a = -7169;
function ve(e, t) {
  e.f = e.f & $a | t;
}
function Ur(e) {
  (e.f & We) !== 0 || e.deps === null ? ve(e, be) : ve(e, it);
}
function Oi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Vt) === 0 || (t.f ^= Vt, Oi(
        /** @type {Derived} */
        t.deps
      ));
}
function Li(e, t, n) {
  (e.f & _e) !== 0 ? t.add(e) : (e.f & it) !== 0 && n.add(e), Oi(e.deps), ve(e, be);
}
function Ln(e) {
  var t = Y, n = Z;
  Je(null), dt(null);
  try {
    return e();
  } finally {
    Je(t), dt(n);
  }
}
function es(e, t, n, r) {
  const i = jr;
  var a = e.filter((d) => !d.settled), o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var f = (
    /** @type {Effect} */
    Z
  ), l = ts(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function h(d) {
    if ((f.f & je) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (p) {
        ft(p, f);
      }
      Xn();
    }
  }
  var m = Pi();
  if (n.length === 0) {
    c.then(() => h([])).finally(m);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ ns(d))).then(h).catch((d) => ft(d, f)).finally(m);
  }
  c ? c.then(() => {
    l(), v(), Xn();
  }) : v();
}
function ts() {
  var e = (
    /** @type {Effect} */
    Z
  ), t = Y, n = Se, r = (
    /** @type {Batch} */
    D
  );
  return function(a = !0) {
    dt(e), Je(t), ln(n), a && (e.f & je) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Xn(e = !0) {
  dt(null), Je(null), ln(null), e && (D == null || D.deactivate());
}
function Pi() {
  var e = (
    /** @type {Effect} */
    Z
  ), t = e.b, n = (
    /** @type {Batch} */
    D
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  var t = me | _e;
  return Z !== null && (Z.f |= vn), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: Ri,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      pe
    ),
    wv: 0,
    parent: Z,
    ac: null
  };
}
const bn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ns(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    Z
  );
  r === null && za();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = qt(
    /** @type {V} */
    pe
  ), o = !Y, f = /* @__PURE__ */ new Set();
  return bs(() => {
    var d, p;
    var l = (
      /** @type {Effect} */
      Z
    ), c = Ti();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (T) => {
        T !== On && c.reject(T);
      }).finally(Xn);
    } catch (T) {
      c.reject(T), Xn();
    }
    var h = (
      /** @type {Batch} */
      D
    );
    if (o) {
      if ((l.f & cn) !== 0)
        var m = Pi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (p = h.async_deriveds.get(l)) == null || p.reject(bn);
      else
        for (const T of f.values())
          T.reject(bn);
      f.add(c), h.async_deriveds.set(l, c);
    }
    const v = (T, _ = void 0) => {
      m == null || m(), f.delete(c), _ !== bn && (h.activate(), _ ? (a.f |= Mt, fn(a, _)) : ((a.f & Mt) !== 0 && (a.f ^= Mt), fn(a, T)), h.deactivate());
    };
    c.promise.then(v, (T) => v(null, T || "unknown"));
  }), Zi(() => {
    for (const l of f)
      l.reject(bn);
  }), new Promise((l) => {
    function c(h) {
      function m() {
        h === i ? l(a) : c(i);
      }
      h.then(m, m);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ jr(e);
  return na(t), t;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const t = /* @__PURE__ */ jr(e);
  return t.equals = Ii, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ie(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hr(e) {
  var t, n = Z, r = e.parent;
  if (!It && r !== null && e.v !== pe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (je | Ee)) !== 0)
    return ja(), e.v;
  dt(r);
  try {
    e.f &= ~Vt, is(e), t = sa(e);
  } finally {
    dt(n);
  }
  return t;
}
function Di(e) {
  var t = Hr(e);
  if (!e.equals(t) && (e.wv = ia(), (!(D != null && D.is_fork) || e.deps === null) && (D !== null ? (D.capture(e, t, !0), En == null || En.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ve(e, be);
    return;
  }
  It || (xe !== null ? (Br() || D != null && D.is_fork) && xe.set(e, t) : Ur(e));
}
function as(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && Ln(() => {
        n.ac.abort(On), n.ac = null;
      }), n.fn !== null && (n.teardown = Oa), Tn(n, 0), Gr(n));
}
function Fi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && un(t);
}
let fr = null, Yt = null, D = null, En = null, xe = null, mr = null, ur = !1, Zt = null, qn = null;
var oi = 0;
let ss = 1;
var $t, Ct, Lt, en, tn, nn, gt, rn, Ce, Cn, bt, et, st, an, Pt, ne, xr, mn, wr, Ui, ji, Kt, os, xn;
const er = class er {
  constructor() {
    H(this, ne);
    Le(this, "id", ss++);
    /** True as soon as `#process` was called */
    H(this, $t, !1);
    Le(this, "linked", !0);
    /** @type {Batch | null} */
    H(this, Ct, null);
    /** @type {Batch | null} */
    H(this, Lt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Le(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Le(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Le(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, en, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, tn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    H(this, nn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    H(this, gt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, rn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    H(this, Ce, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    H(this, Cn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, bt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, et, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    H(this, st, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    H(this, an, /* @__PURE__ */ new Set());
    Le(this, "is_fork", !1);
    H(this, Pt, !1);
    Yt === null ? fr = Yt = this : (P(Yt, Lt, this), P(this, Ct, Yt)), Yt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, st).has(t) || u(this, st).set(t, { d: [], m: [] }), u(this, an).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = u(this, st).get(t);
    if (r) {
      u(this, st).delete(t);
      for (var i of r.d)
        ve(i, _e), n(i);
      for (i of r.m)
        ve(i, it), n(i);
    }
    u(this, an).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== pe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Mt) === 0 && (this.current.set(t, [n, r]), xe == null || xe.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    D = this;
  }
  deactivate() {
    D = null, xe = null;
  }
  flush() {
    try {
      ur = !0, D = this, W(this, ne, mn).call(this);
    } finally {
      oi = 0, mr = null, Zt = null, qn = null, ur = !1, D = null, xe = null, ct.clear();
    }
  }
  discard() {
    var t;
    for (const n of u(this, tn)) n(this);
    u(this, tn).clear();
    for (const n of this.async_deriveds.values())
      n.reject(bn);
    W(this, ne, xn).call(this), (t = u(this, rn)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    u(this, Cn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (P(this, nn, u(this, nn) + 1), t) {
      let r = u(this, gt).get(n) ?? 0;
      u(this, gt).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (P(this, nn, u(this, nn) - 1), t) {
      let r = u(this, gt).get(n) ?? 0;
      r === 1 ? u(this, gt).delete(n) : u(this, gt).set(n, r - 1);
    }
    u(this, Pt) || (P(this, Pt, !0), xt(() => {
      P(this, Pt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      u(this, bt).add(r);
    for (const r of n)
      u(this, et).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    u(this, en).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, tn).add(t);
  }
  settled() {
    return (u(this, rn) ?? P(this, rn, Ti())).promise;
  }
  static ensure() {
    if (D === null) {
      const t = D = new er();
      ur || xt(() => {
        u(t, $t) || t.flush();
      });
    }
    return D;
  }
  apply() {
    {
      xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (mr = t, (i = t.b) != null && i.is_pending && (t.f & (on | ir | Ai)) !== 0 && (t.f & cn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Zt !== null && n === Z && (Y === null || (Y.f & me) === 0))
        return;
      if ((r & (kt | Ze)) !== 0) {
        if ((r & be) === 0)
          return;
        n.f ^= be;
      }
    }
    u(this, Ce).push(n);
  }
};
$t = new WeakMap(), Ct = new WeakMap(), Lt = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), gt = new WeakMap(), rn = new WeakMap(), Ce = new WeakMap(), Cn = new WeakMap(), bt = new WeakMap(), et = new WeakMap(), st = new WeakMap(), an = new WeakMap(), Pt = new WeakMap(), ne = new WeakSet(), xr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, gt).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (u(this, st).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, mn = function() {
  var l, c, h, m;
  P(this, $t, !0), oi++ > 1e3 && (W(this, ne, xn).call(this), ls());
  for (const v of u(this, bt))
    u(this, et).delete(v), ve(v, _e), this.schedule(v);
  for (const v of u(this, et))
    ve(v, it), this.schedule(v);
  const t = u(this, Ce);
  P(this, Ce, []), this.apply();
  var n = Zt = [], r = [], i = qn = [];
  for (const v of t)
    try {
      W(this, ne, wr).call(this, v, n, r);
    } catch (d) {
      throw Vi(v), W(this, ne, xr).call(this) || this.discard(), d;
    }
  if (D = null, i.length > 0) {
    var a = er.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Zt = null, qn = null, W(this, ne, xr).call(this)) {
    W(this, ne, Kt).call(this, r), W(this, ne, Kt).call(this, n);
    for (const [v, d] of u(this, st))
      zi(v, d);
    i.length > 0 && /** @type {unknown} */
    W(l = D, ne, mn).call(l);
    return;
  }
  const o = W(this, ne, Ui).call(this);
  if (o) {
    W(this, ne, Kt).call(this, r), W(this, ne, Kt).call(this, n), W(c = o, ne, ji).call(c, this);
    return;
  }
  u(this, bt).clear(), u(this, et).clear();
  for (const v of u(this, en)) v(this);
  u(this, en).clear(), En = this, li(r), li(n), En = null, (h = u(this, rn)) == null || h.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    D
  );
  if (u(this, nn) === 0 && (u(this, Ce).length === 0 || f !== null) && W(this, ne, xn).call(this), u(this, Ce).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Ce).push(...u(this, Ce).filter((d) => !u(v, Ce).includes(d)));
    } else
      f = this;
  f !== null && (ct.clear(), W(m = f, ne, mn).call(m));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wr = function(t, n, r) {
  t.f ^= be;
  for (var i = t.first; i !== null; ) {
    var a = i.f, o = (a & (Ze | kt)) !== 0, f = o && (a & be) !== 0, l = f || (a & Ee) !== 0 || u(this, st).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= be : (a & on) !== 0 ? n.push(i) : Un(i) && ((a & nt) !== 0 && u(this, et).add(i), un(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, Ui = function() {
  for (var t = u(this, Ct); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = u(t, Ct);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ji = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && a.promise.then(o.resolve).catch(o.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(u(t, bt), u(t, et));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & me) !== 0 && (i.f & (_e | it)) === 0))
      for (const l of a) {
        var o = l.f;
        if ((o & me) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          o & (Xt | nt) && !this.async_deriveds.has(f) && (u(this, et).delete(f), ve(f, _e), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), W(r = t, ne, xn).call(r), D = this, W(this, ne, mn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Kt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Li(t[n], u(this, bt), u(this, et));
}, os = function() {
  var m;
  for (let v = fr; v !== null; v = u(v, Lt)) {
    var t = v.id < this.id, n = [];
    for (const [d, [p, T]] of this.current) {
      if (v.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (t && p !== r)
          v.current.set(d, [p, T]);
        else
          continue;
      }
      n.push(d);
    }
    if (t)
      for (const [d, p] of this.async_deriveds) {
        const T = v.async_deriveds.get(d);
        T && p.promise.then(T.resolve).catch(T.reject);
      }
    var i = [...v.current.keys()].filter(
      (d) => !/** @type {[any, boolean]} */
      v.current.get(d)[1]
    );
    if (!(!u(v, $t) || i.length === 0)) {
      var a = i.filter((d) => !this.current.has(d));
      if (a.length === 0)
        t && v.discard();
      else if (n.length > 0) {
        if (t)
          for (const d of u(this, an))
            v.unskip_effect(d, (p) => {
              var T;
              (p.f & (nt | Xt)) !== 0 ? v.schedule(p) : W(T = v, ne, Kt).call(T, [p]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          Hi(l, a, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, p]) => {
          const T = this.current.get(d);
          return T ? T[0] !== p[0] || T[1] !== p[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, Cn))
            (d.f & (je | Ee | Zn)) === 0 && zr(d, c, f) && ((d.f & (Xt | nt)) !== 0 ? (ve(d, _e), v.schedule(d)) : u(v, bt).add(d));
        if (u(v, Ce).length > 0 && !u(v, Pt)) {
          v.apply();
          for (var h of u(v, Ce))
            W(m = v, ne, wr).call(m, h, [], []);
          P(v, Ce, []);
        }
        v.deactivate();
      }
    }
  }
}, xn = function() {
  if (this.linked) {
    var t = u(this, Ct), n = u(this, Lt);
    t === null ? fr = n : P(t, Lt, n), n === null ? Yt = t : P(n, Ct, t), this.linked = !1;
  }
};
let Bt = er;
function ls() {
  try {
    Ya();
  } catch (e) {
    ft(e, mr);
  }
}
let $e = null;
function li(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (je | Ee)) === 0 && Un(r) && ($e = /* @__PURE__ */ new Set(), un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $i(r), ($e == null ? void 0 : $e.size) > 0)) {
        ct.clear();
        for (const i of $e) {
          if ((i.f & (je | Ee)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            $e.has(o) && ($e.delete(o), a.push(o)), o = o.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const l = a[f];
            (l.f & (je | Ee)) === 0 && un(l);
          }
        }
        $e.clear();
      }
    }
    $e = null;
  }
}
function Hi(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & me) !== 0 ? Hi(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Xt | nt)) !== 0 && (a & _e) === 0 && zr(i, t, r) && (ve(i, _e), Vr(
        /** @type {Effect} */
        i
      ));
    }
}
function zr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Kn.call(t, i))
        return !0;
      if ((i.f & me) !== 0 && zr(
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
function Vr(e) {
  D.schedule(e);
}
function zi(e, t) {
  if (!((e.f & Ze) !== 0 && (e.f & be) !== 0)) {
    (e.f & _e) !== 0 ? t.d.push(e) : (e.f & it) !== 0 && t.m.push(e), ve(e, be);
    for (var n = e.first; n !== null; )
      zi(n, t), n = n.next;
  }
}
function Vi(e) {
  ve(e, be);
  for (var t = e.first; t !== null; )
    Vi(t), t = t.next;
}
let Qn = /* @__PURE__ */ new Set();
const ct = /* @__PURE__ */ new Map();
let Bi = !1;
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ri,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = qt(e);
  return na(n), n;
}
// @__NO_SIDE_EFFECTS__
function fs(e, t = !1, n = !0) {
  const r = qt(e);
  return t || (r.equals = Ii), r;
}
function g(e, t, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rt || (Y.f & Zn) !== 0) && Ni() && (Y.f & (me | nt | Xt | Zn)) !== 0 && (vt === null || !vt.has(e)) && Za();
  let r = n ? Ke(t) : t;
  return fn(e, r, qn);
}
function fn(e, t, n = null) {
  if (!e.equals(t)) {
    It ? ct.set(e, t) : ct.has(e) || ct.set(e, e.v);
    var r = Bt.ensure();
    if (r.capture(e, t), (e.f & me) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & _e) !== 0 && Hr(i), xe === null && Ur(i);
    }
    e.wv = ia(), qi(e, _e, n), Z !== null && (Z.f & be) !== 0 && (Z.f & (Ze | kt)) === 0 && (Ve === null ? ws([e]) : Ve.push(e)), !r.is_fork && Qn.size > 0 && !Bi && us();
  }
  return t;
}
function us() {
  Bi = !1;
  for (const e of Qn) {
    (e.f & be) !== 0 && ve(e, it);
    let t;
    try {
      t = Un(e);
    } catch {
      t = !0;
    }
    t && un(e);
  }
  Qn.clear();
}
function Sn(e) {
  g(e, e.v + 1);
}
function qi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], f = o.f, l = (f & _e) === 0;
      if (l && ve(o, t), (f & Zn) !== 0)
        Qn.add(
          /** @type {Effect} */
          o
        );
      else if ((f & me) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        xe == null || xe.delete(c), (f & Vt) === 0 && (f & We && (Z === null || (Z.f & Jn) === 0) && (o.f |= Vt), qi(c, it, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & nt) !== 0 && $e !== null && $e.add(h), n !== null ? n.push(h) : Vr(h);
      }
    }
}
function Ke(e) {
  if (typeof e != "object" || e === null || Qt in e || Ci in e)
    return e;
  const t = Pr(e);
  if (t !== Ia && t !== Na)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ki(e), i = /* @__PURE__ */ j(0), a = Ht, o = (f) => {
    if (Ht === a)
      return f();
    var l = Y, c = Ht;
    Je(null), ui(a);
    var h = f();
    return Je(l), ui(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ka();
        var h = n.get(l);
        return h === void 0 ? o(() => {
          var m = /* @__PURE__ */ j(c.value);
          return n.set(l, m), m;
        }) : g(h, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ j(pe));
            n.set(l, h), Sn(i);
          }
        } else
          g(c, pe), Sn(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === Qt)
          return e;
        var h = n.get(l), m = l in f;
        if (h === void 0 && (!m || (d = kn(f, l)) != null && d.writable) && (h = o(() => {
          var p = Ke(m ? f[l] : pe), T = /* @__PURE__ */ j(p);
          return T;
        }), n.set(l, h)), h !== void 0) {
          var v = s(h);
          return v === pe ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = s(h));
        } else if (c === void 0) {
          var m = n.get(l), v = m == null ? void 0 : m.v;
          if (m !== void 0 && v !== pe)
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
        if (l === Qt)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== pe || Reflect.has(f, l);
        if (c !== void 0 || Z !== null && (!h || (v = kn(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = h ? Ke(f[l]) : pe, p = /* @__PURE__ */ j(d);
            return p;
          }), n.set(l, c));
          var m = s(c);
          if (m === pe)
            return !1;
        }
        return h;
      },
      set(f, l, c, h) {
        var R;
        var m = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          m.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? g(p, pe) : d in f && (p = o(() => /* @__PURE__ */ j(pe)), n.set(d + "", p));
          }
        if (m === void 0)
          (!v || (R = kn(f, l)) != null && R.writable) && (m = o(() => /* @__PURE__ */ j(void 0)), g(m, Ke(c)), n.set(l, m));
        else {
          v = m.v !== pe;
          var T = o(() => Ke(c));
          g(m, T);
        }
        var _ = Reflect.getOwnPropertyDescriptor(f, l);
        if (_ != null && _.set && _.set.call(h, c), !v) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= y.v && g(y, O + 1);
          }
          Sn(i);
        }
        return !0;
      },
      ownKeys(f) {
        s(i);
        var l = Reflect.ownKeys(f).filter((m) => {
          var v = n.get(m);
          return v === void 0 || v.v !== pe;
        });
        for (var [c, h] of n)
          h.v !== pe && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Wa();
      }
    }
  );
}
var yr, Gi, Yi, Ki;
function cs() {
  if (yr === void 0) {
    yr = window, Gi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yi = kn(t, "firstChild").get, Ki = kn(t, "nextSibling").get, si(e) && (e[gr] = void 0, e[Bn] = null, e[br] = void 0, e.__e = void 0), si(n) && (n[gn] = void 0);
  }
}
function yt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(e)
  );
}
function U(e, t) {
  return /* @__PURE__ */ Gt(e);
}
function we(e, t = !1) {
  {
    var n = /* @__PURE__ */ Gt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Pn(n) : n;
  }
}
function X(e, t = !1) {
  return /* @__PURE__ */ Gt(e);
}
function E(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Pn(r);
  return r;
}
function vs(e) {
  e.textContent = "";
}
function Wi() {
  return !1;
}
function ds(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function hs(e) {
  var t = Z;
  if (t === null)
    return Y.f |= Mt, e;
  if ((t.f & cn) === 0 && (t.f & on) === 0)
    throw e;
  ft(e, t);
}
function ft(e, t) {
  if (!(t !== null && (t.f & je) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & pr) !== 0 && (t.f & (je | Wn)) === 0) {
        if ((t.f & cn) === 0)
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
function _s(e) {
  Z === null && (Y === null && Ga(), qa()), It && Ba();
}
function ps(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Et(e, t) {
  var n = Z;
  n !== null && (n.f & Ee) !== 0 && (e |= Ee);
  var r = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | _e | We,
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
  D == null || D.register_created_effect(r);
  var i = r;
  if ((e & on) !== 0)
    Zt !== null ? Zt.push(r) : Bt.ensure().schedule(r);
  else if (t !== null) {
    try {
      un(r);
    } catch (o) {
      throw Ie(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & vn) === 0 && (i = i.first, (e & nt) !== 0 && (e & zt) !== 0 && i !== null && (i.f |= zt));
  }
  if (i !== null && (i.parent = n, n !== null && ps(i, n), Y !== null && (Y.f & me) !== 0 && (e & kt) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Br() {
  return Y !== null && !rt;
}
function Zi(e) {
  const t = Et(ir, null);
  return ve(t, be), t.teardown = e, t;
}
function Dn(e) {
  _s();
  var t = (
    /** @type {Effect} */
    Z.f
  ), n = !Y && (t & Ze) !== 0 && Se !== null && !Se.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Se
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ji(e);
}
function Ji(e) {
  return Et(on | Da, e);
}
function gs(e) {
  Bt.ensure();
  const t = Et(kt | vn, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Ie(t), r(void 0);
    }) : (Ie(t), r(void 0));
  });
}
function Xi(e) {
  return Et(on, e);
}
function bs(e) {
  return Et(Xt | vn, e);
}
function qr(e, t = 0) {
  return Et(ir | t, e);
}
function z(e, t = [], n = [], r = []) {
  es(r, t, n, (i) => {
    Et(ir, () => {
      e(...i.map(s));
    });
  });
}
function Fn(e, t = 0) {
  var n = Et(nt | t, e);
  return n;
}
function Ge(e) {
  return Et(Ze | vn, e);
}
function Qi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = It, r = Y;
    fi(!0), Je(null);
    try {
      t.call(null);
    } catch (i) {
      ft(i, e.parent);
    } finally {
      fi(n), Je(r);
    }
  }
}
function Gr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ln(() => {
      i.abort(On);
    });
    var r = n.next;
    (n.f & kt) !== 0 ? n.parent = null : Ie(n, t), n = r;
  }
}
function ms(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ze) === 0 && Ie(t), t = n;
  }
}
function Ie(e, t = !0) {
  var n = !1;
  (t || (e.f & Pa) !== 0) && e.nodes !== null && e.nodes.end !== null && (xs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Wn, Gr(e, t && !n), Tn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Qi(e), e.f ^= Wn, e.f |= je;
  var i = e.parent;
  i !== null && i.first !== null && $i(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Pn(e);
    e.remove(), e = n;
  }
}
function $i(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = !0) {
  var r = [];
  e.f |= Dr, ea(e, r, !0);
  var i = () => {
    n && Ie(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function ea(e, t, n) {
  if ((e.f & Ee) === 0) {
    e.f ^= Ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & kt) === 0) {
        var o = (i.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ze) !== 0 && (e.f & nt) !== 0;
        ea(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function $n(e) {
  e.f &= ~Dr, ta(e, !0);
}
function ta(e, t) {
  if ((e.f & Dr) === 0 && (e.f & Ee) !== 0) {
    e.f ^= Ee, (e.f & be) === 0 && (ve(e, _e), Bt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & zt) !== 0 || (n.f & Ze) !== 0;
      ta(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function Yr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Pn(n);
      t.append(n), n = i;
    }
}
let Gn = !1, It = !1;
function fi(e) {
  It = e;
}
let Y = null, rt = !1;
function Je(e) {
  Y = e;
}
let Z = null;
function dt(e) {
  Z = e;
}
let vt = null;
function na(e) {
  Y !== null && (vt ?? (vt = /* @__PURE__ */ new Set())).add(e);
}
let Re = null, Ue = 0, Ve = null;
function ws(e) {
  Ve = e;
}
let ra = 1, Nt = 0, Ht = Nt;
function ui(e) {
  Ht = e;
}
function ia() {
  return ++ra;
}
function Un(e) {
  var t = e.f;
  if ((t & _e) !== 0)
    return !0;
  if (t & me && (e.f &= ~Vt), (t & it) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Un(
        /** @type {Derived} */
        a
      ) && Di(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & We) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xe === null && ve(e, be);
  }
  return !1;
}
function aa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(vt !== null && vt.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & me) !== 0 ? aa(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ve(a, _e) : (a.f & be) !== 0 && ve(a, it), Vr(
        /** @type {Effect} */
        a
      ));
    }
}
function sa(e) {
  var t = Re, n = Ue, r = Ve, i = Y, a = vt, o = Se, f = rt, l = Ht, c = e.f;
  Re = /** @type {null | Value[]} */
  null, Ue = 0, Ve = null, Y = (c & (Ze | kt)) === 0 ? e : null, vt = null, ln(e.ctx), rt = !1, Ht = ++Nt, e.ac !== null && (Ln(() => {
    e.ac.abort(On);
  }), e.ac = null);
  try {
    e.f |= Jn;
    var h = (
      /** @type {Function} */
      e.fn
    ), m = h();
    e.f |= cn;
    var v = ci(e);
    if (Ni() && Ve !== null && !rt && v !== null && (e.f & (me | it | _e)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      Ve.length; d++)
        aa(
          Ve[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Nt++, i.deps !== null)
        for (let p = 0; p < n; p += 1)
          i.deps[p].rv = Nt;
      if (t !== null)
        for (const p of t)
          p.rv = Nt;
      Ve !== null && (r === null ? r = Ve : r.push(.../** @type {Source[]} */
      Ve));
    }
    return (e.f & Mt) !== 0 && (e.f ^= Mt), m;
  } catch (p) {
    return ci(e), hs(p);
  } finally {
    e.f ^= Jn, Re = t, Ue = n, Ve = r, Y = i, vt = a, ln(o), rt = f, Ht = l;
  }
}
function ci(e) {
  var i;
  var t = e.deps, n = D == null ? void 0 : D.is_fork;
  if (Re !== null) {
    var r;
    if (n || Tn(e, Ue), t !== null && Ue > 0)
      for (t.length = Ue + Re.length, r = 0; r < Re.length; r++)
        t[Ue + r] = Re[r];
    else
      e.deps = t = Re;
    if (Br() && (e.f & We) !== 0)
      for (r = Ue; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Ue < t.length && (Tn(e, Ue), t.length = Ue);
  return t;
}
function ys(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ma.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Re === null || !Kn.call(Re, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & We) !== 0 && (a.f ^= We, a.f &= ~Vt), a.v !== pe && Ur(a), a.ac !== null && Ln(() => {
      a.ac.abort(On), a.ac = null, ve(a, _e);
    }), as(a), Tn(a, 0);
  }
}
function Tn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ys(e, n[r]);
}
function un(e) {
  var t = e.f;
  if ((t & je) === 0) {
    ve(e, be);
    var n = Z, r = Gn;
    Z = e, Gn = (t & (Ze | kt)) === 0;
    try {
      (t & (nt | Ai)) !== 0 ? ms(e) : Gr(e), Qi(e);
      var i = sa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ra;
      var a;
      yi && Xa && (e.f & _e) !== 0 && e.deps;
    } finally {
      Gn = r, Z = n;
    }
  }
}
function s(e) {
  var t = e.f, n = (t & me) !== 0;
  if (Y !== null && !rt) {
    var r = Z !== null && (Z.f & je) !== 0;
    if (!r && (vt === null || !vt.has(e))) {
      var i = Y.deps;
      if ((Y.f & Jn) !== 0)
        e.rv < Nt && (e.rv = Nt, Re === null && i !== null && i[Ue] === e ? Ue++ : Re === null ? Re = [e] : Re.push(e));
      else {
        Y.deps ?? (Y.deps = []), Kn.call(Y.deps, e) || Y.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [Y] : Kn.call(a, Y) || a.push(Y);
      }
    }
  }
  if (It && ct.has(e))
    return ct.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (It) {
      var f = o.v;
      return ((o.f & be) === 0 && o.reactions !== null || la(o)) && (f = Hr(o)), ct.set(o, f), f;
    }
    var l = (o.f & We) === 0 && !rt && Y !== null && (Gn || (Y.f & We) !== 0), c = (o.f & cn) === 0;
    Un(o) && (l && (o.f |= We), Di(o)), l && !c && (Fi(o), oa(o));
  }
  if (xe != null && xe.has(e))
    return xe.get(e);
  if ((e.f & Mt) !== 0)
    throw e.v;
  return e.v;
}
function oa(e) {
  if (e.f |= We, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & me) !== 0 && (t.f & We) === 0 && (Fi(
        /** @type {Derived} */
        t
      ), oa(
        /** @type {Derived} */
        t
      ));
}
function la(e) {
  if (e.v === pe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ct.has(t) || (t.f & me) !== 0 && la(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ar(e) {
  var t = rt;
  try {
    return rt = !0, e();
  } finally {
    rt = t;
  }
}
function ks(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Qt in e)
      kr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Qt in n && kr(n);
      }
  }
}
function kr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        kr(e[r], t);
      } catch {
      }
    const n = Pr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Si(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
const Ot = Symbol("events"), fa = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function Es(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || Tr.call(t, a), !a.cancelBubble)
      return Ln(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Sr(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = Es(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Zi(() => {
    t.removeEventListener(e, o, a);
  });
}
function re(e, t, n) {
  (t[Ot] ?? (t[Ot] = {}))[e] = n;
}
function dn(e) {
  for (var t = 0; t < e.length; t++)
    fa.add(e[t]);
  for (var n of Er)
    n(e);
}
let cr = null, vr = !1;
function Tr(e) {
  var T, _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((T = e.composedPath) == null ? void 0 : T.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  cr = e, vr || (vr = !0, setTimeout(() => {
    vr = !1, cr = null;
  }));
  var o = 0, f = cr === e && e[Ot];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ot] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    Ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var h = Y, m = Z;
    Je(null), dt(null);
    try {
      for (var v, d = []; a !== null && a !== t; ) {
        try {
          var p = (_ = a[Ot]) == null ? void 0 : _[r];
          p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && p.call(a, e);
        } catch (y) {
          v ? d.push(y) : v = y;
        }
        if (e.cancelBubble) break;
        o++, a = o < i.length ? (
          /** @type {Element} */
          i[o]
        ) : null;
      }
      if (v) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[Ot] = t, delete e.currentTarget, Je(h), dt(m);
    }
  }
}
var xi;
const dr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((xi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : xi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ss(e) {
  return (
    /** @type {string} */
    (dr == null ? void 0 : dr.createHTML(e)) ?? e
  );
}
function ua(e) {
  var t = ds("template");
  return t.innerHTML = Ss(e.replaceAll("<!>", "<!---->")), t.content;
}
function An(e, t) {
  var n = (
    /** @type {Effect} */
    Z
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ua(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Gi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      An(f, l);
    } else
      An(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ts(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ua(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Gt(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Gt(f);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return An(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function As(e, t) {
  return /* @__PURE__ */ Ts(e, t, "svg");
}
function zn(e = "") {
  {
    var t = yt(e + "");
    return An(t, t), t;
  }
}
function hn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = yt();
  return e.append(t, n), An(t, n), e;
}
function S(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Cs = ["touchstart", "touchmove"];
function Rs(e) {
  return Cs.includes(e);
}
function Ms(e) {
  let t = 0, n = qt(0), r;
  return () => {
    Br() && (s(n), qr(() => (t === 0 && (r = ar(() => e(() => Sn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Sn(n));
      });
    })));
  };
}
var Is = zt | vn;
function Ns(e, t, n, r) {
  new Os(e, t, n, r);
}
var Be, Lr, qe, Dt, ye, Pe, ke, De, ot, Ft, Rt, sn, Rn, Mn, mt, tr, oe, Ls, Ps, Ar, Ds, Cr, wn, Yn, Rr, Mr;
class Os {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    H(this, oe);
    /** @type {Boundary | null} */
    Le(this, "parent");
    Le(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Le(this, "transform_error");
    /** @type {TemplateNode} */
    H(this, Be);
    /** @type {TemplateNode | null} */
    H(this, Lr, null);
    /** @type {BoundaryProps} */
    H(this, qe);
    /** @type {((anchor: Node) => void)} */
    H(this, Dt);
    /** @type {Effect} */
    H(this, ye);
    /** @type {Effect | null} */
    H(this, Pe, null);
    /** @type {Effect | null} */
    H(this, ke, null);
    /** @type {Effect | null} */
    H(this, De, null);
    /** @type {DocumentFragment | null} */
    H(this, ot, null);
    H(this, Ft, 0);
    H(this, Rt, 0);
    H(this, sn, !1);
    /** @type {Set<Effect>} */
    H(this, Rn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, Mn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, mt, null);
    H(this, tr, Ms(() => (P(this, mt, qt(u(this, Ft))), () => {
      P(this, mt, null);
    })));
    var a;
    P(this, Be, t), P(this, qe, n), P(this, Dt, (o) => {
      var f = (
        /** @type {Effect} */
        Z
      );
      f.b = this, f.f |= pr, r(o);
    }), this.parent = /** @type {Effect} */
    Z.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((o) => o), P(this, ye, Fn(() => {
      W(this, oe, Cr).call(this);
    }, Is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Li(t, u(this, Rn), u(this, Mn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, qe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    W(this, oe, Rr).call(this, t, n), P(this, Ft, u(this, Ft) + t), !(!u(this, mt) || u(this, sn)) && (P(this, sn, !0), xt(() => {
      P(this, sn, !1), u(this, mt) && fn(u(this, mt), u(this, Ft));
    }));
  }
  get_effect_pending() {
    return u(this, tr).call(this), s(
      /** @type {Source<number>} */
      u(this, mt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!u(this, qe).onerror && !u(this, qe).failed)
      throw t;
    D != null && D.is_fork ? (u(this, Pe) && D.skip_effect(u(this, Pe)), u(this, ke) && D.skip_effect(u(this, ke)), u(this, De) && D.skip_effect(u(this, De)), D.oncommit(() => {
      W(this, oe, Mr).call(this, t);
    })) : W(this, oe, Mr).call(this, t);
  }
}
Be = new WeakMap(), Lr = new WeakMap(), qe = new WeakMap(), Dt = new WeakMap(), ye = new WeakMap(), Pe = new WeakMap(), ke = new WeakMap(), De = new WeakMap(), ot = new WeakMap(), Ft = new WeakMap(), Rt = new WeakMap(), sn = new WeakMap(), Rn = new WeakMap(), Mn = new WeakMap(), mt = new WeakMap(), tr = new WeakMap(), oe = new WeakSet(), Ls = function() {
  try {
    P(this, Pe, Ge(() => u(this, Dt).call(this, u(this, Be))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ps = function(t) {
  const n = u(this, qe).failed, { reset: r, invoke_onerror: i } = W(this, oe, Ar).call(this, t);
  xt(i), n && P(this, De, Ge(() => {
    n(
      u(this, Be),
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
Ar = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ha();
      return;
    }
    n = !0, r && Ja(), u(this, De) !== null && jt(u(this, De), () => {
      P(this, De, null);
    }), W(this, oe, Yn).call(this, () => {
      W(this, oe, Cr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, qe)).onerror) == null || f.call(o, t, i), r = !1;
    } catch (l) {
      ft(l, u(this, ye) && u(this, ye).parent);
    }
  } };
}, Ds = function() {
  const t = u(this, qe).pending;
  t && (this.is_pending = !0, P(this, ke, Ge(() => t(u(this, Be)))), xt(() => {
    var n = P(this, ot, document.createDocumentFragment()), r = yt(), i = !1;
    if (n.append(r), P(this, Pe, W(this, oe, Yn).call(this, () => {
      try {
        return Ge(() => u(this, Dt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (o) {
          ft(o, u(this, ye).parent);
        }
        return null;
      }
    })), u(this, Pe) === null) {
      P(this, ot, null), i && W(this, oe, wn).call(
        this,
        /** @type {Batch} */
        D
      );
      return;
    }
    u(this, Rt) === 0 && (u(this, Be).before(n), P(this, ot, null), jt(
      /** @type {Effect} */
      u(this, ke),
      () => {
        P(this, ke, null);
      }
    ), W(this, oe, wn).call(
      this,
      /** @type {Batch} */
      D
    ));
  }));
}, Cr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(this, Rt, 0), P(this, Ft, 0), P(this, Pe, Ge(() => {
      u(this, Dt).call(this, u(this, Be));
    })), u(this, Rt) > 0) {
      var t = P(this, ot, document.createDocumentFragment());
      Yr(u(this, Pe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, qe).pending
      );
      P(this, ke, Ge(() => n(u(this, Be))));
    } else
      W(this, oe, wn).call(
        this,
        /** @type {Batch} */
        D
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
wn = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, Rn), u(this, Mn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Yn = function(t) {
  var n = Z, r = Y, i = Se;
  dt(u(this, ye)), Je(u(this, ye)), ln(u(this, ye).ctx);
  try {
    return Bt.ensure(), t();
  } finally {
    dt(n), Je(r), ln(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Rr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && W(r = this.parent, oe, Rr).call(r, t, n);
    return;
  }
  P(this, Rt, u(this, Rt) + t), u(this, Rt) === 0 && (W(this, oe, wn).call(this, n), u(this, ke) && jt(u(this, ke), () => {
    P(this, ke, null);
  }), u(this, ot) && (u(this, Be).before(u(this, ot)), P(this, ot, null)));
}, /**
 * @param {unknown} error
 */
Mr = function(t) {
  u(this, Pe) && (Ie(u(this, Pe)), P(this, Pe, null)), u(this, ke) && (Ie(u(this, ke)), P(this, ke, null)), u(this, De) && (Ie(u(this, De)), P(this, De, null));
  let n = u(this, qe).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: o } = W(this, oe, Ar).call(this, i);
    o(), n && P(this, De, W(this, oe, Yn).call(this, () => {
      try {
        return Ge(() => {
          var f = (
            /** @type {Effect} */
            Z
          );
          f.b = this, f.f |= pr, n(
            u(this, Be),
            () => i,
            () => a
          );
        });
      } catch (f) {
        return ft(
          f,
          /** @type {Effect} */
          u(this, ye).parent
        ), null;
      }
    }));
  };
  xt(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (a) {
      ft(a, u(this, ye) && u(this, ye).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => ft(a, u(this, ye) && u(this, ye).parent)
    ) : r(i);
  });
};
function q(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[gn] ?? (e[gn] = e.nodeValue)) && (e[gn] = n, e.nodeValue = `${n}`);
}
function Fs(e, t) {
  return Us(e, t);
}
const Vn = /* @__PURE__ */ new Map();
function Us(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: f }) {
  cs();
  var l = void 0, c = gs(() => {
    var h = n ?? t.appendChild(yt());
    Ns(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        ht({});
        var p = (
          /** @type {ComponentContext} */
          Se
        );
        a && (p.c = a), i && (r.$$events = i), l = e(d, r) || Fr(), _t();
      },
      f
    );
    var m = /* @__PURE__ */ new Set(), v = (d) => {
      for (var p = 0; p < d.length; p++) {
        var T = d[p];
        if (!m.has(T)) {
          m.add(T);
          var _ = Rs(T);
          for (const R of [t, document]) {
            var y = Vn.get(R);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Vn.set(R, y));
            var O = y.get(T);
            O === void 0 ? (R.addEventListener(T, Tr, { passive: _ }), y.set(T, 1)) : y.set(T, O + 1);
          }
        }
      }
    };
    return v(rr(fa)), Er.add(v), () => {
      var _;
      for (var d of m)
        for (const y of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Vn.get(y)
          ), T = (
            /** @type {number} */
            p.get(d)
          );
          --T == 0 ? (y.removeEventListener(d, Tr), p.delete(d), p.size === 0 && Vn.delete(y)) : p.set(d, T);
        }
      Er.delete(v), h !== n && ((_ = h.parentNode) == null || _.removeChild(h));
    };
  });
  return Ir.set(l, c), l;
}
let Ir = /* @__PURE__ */ new WeakMap();
function js(e, t) {
  const n = Ir.get(e);
  return n ? (Ir.delete(e), n(t)) : Promise.resolve();
}
var tt, lt, Fe, Ut, In, Nn, nr;
class Kr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Le(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, tt, /* @__PURE__ */ new Map());
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
    H(this, lt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, In, !0);
    /**
     * @param {Batch} batch
     */
    H(this, Nn, (t) => {
      if (u(this, tt).has(t)) {
        var n = (
          /** @type {Key} */
          u(this, tt).get(t)
        ), r = u(this, lt).get(n);
        if (r)
          $n(r), u(this, Ut).delete(n);
        else {
          var i = u(this, Fe).get(n);
          i && ($n(i.effect), u(this, lt).set(n, i.effect), u(this, Fe).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, o] of u(this, tt)) {
          if (u(this, tt).delete(a), a === t)
            break;
          const f = u(this, Fe).get(o);
          f && (Ie(f.effect), u(this, Fe).delete(o));
        }
        for (const [a, o] of u(this, lt)) {
          if (a === n || u(this, Ut).has(a)) continue;
          const f = () => {
            if (Array.from(u(this, tt).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Yr(o, c), c.append(yt()), u(this, Fe).set(a, { effect: o, fragment: c });
            } else
              Ie(o);
            u(this, Ut).delete(a), u(this, lt).delete(a);
          };
          u(this, In) || !r ? (u(this, Ut).add(a), jt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, nr, (t) => {
      u(this, tt).delete(t);
      const n = Array.from(u(this, tt).values());
      for (const [r, i] of u(this, Fe))
        n.includes(r) || (Ie(i.effect), u(this, Fe).delete(r));
    });
    this.anchor = t, P(this, In, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      D
    ), i = Wi();
    if (n && !u(this, lt).has(t) && !u(this, Fe).has(t))
      if (i) {
        var a = document.createDocumentFragment(), o = yt();
        a.append(o), u(this, Fe).set(t, {
          effect: Ge(() => n(o)),
          fragment: a
        });
      } else
        u(this, lt).set(
          t,
          Ge(() => n(this.anchor))
        );
    if (u(this, tt).set(r, t), i) {
      for (const [f, l] of u(this, lt))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, Fe))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Nn)), r.ondiscard(u(this, nr));
    } else
      u(this, Nn).call(this, r);
  }
}
tt = new WeakMap(), lt = new WeakMap(), Fe = new WeakMap(), Ut = new WeakMap(), In = new WeakMap(), Nn = new WeakMap(), nr = new WeakMap();
function Hs(e, t, ...n) {
  var r = new Kr(e);
  Fn(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, zt);
}
function F(e, t, n = !1) {
  var r = new Kr(e), i = n ? zt : 0;
  function a(o, f) {
    r.ensure(o, f);
  }
  Fn(() => {
    var o = !1;
    t((f, l = 0) => {
      o = !0, a(l, f);
    }), o || a(-1, null);
  }, i);
}
const zs = Symbol("NaN");
function ca(e, t, n) {
  var r = new Kr(e);
  Fn(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    zs), r.ensure(i, n);
  });
}
function Wr(e, t) {
  return t;
}
function Vs(e, t, n) {
  for (var r = [], i = t.length, a, o = t.length, f = 0; f < i; f++) {
    let m = t[f];
    jt(
      m,
      () => {
        if (a) {
          if (a.pending.delete(m), a.done.add(m), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Nr(e, rr(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), h = (
        /** @type {Element} */
        c.parentNode
      );
      vs(h), h.append(c), e.items.clear();
    }
    Nr(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Nr(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (r != null && r.has(a)) {
      a.f |= ut;
      const o = document.createDocumentFragment();
      Yr(a, o);
    } else
      Ie(t[i], n);
  }
}
var vi;
function Me(e, t, n, r, i, a = null) {
  var o = e, f = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(yt());
  }
  var h = null, m = /* @__PURE__ */ rs(() => {
    var R = n();
    return (
      /** @type {V[]} */
      ki(R) ? R : R == null ? [] : rr(R)
    );
  }), v, d = /* @__PURE__ */ new Map(), p = !0;
  function T(R) {
    (O.effect.f & je) === 0 && (O.pending.delete(R), O.fallback = h, Bs(O, v, o, t, r), h !== null && (v.length === 0 ? (h.f & ut) === 0 ? $n(h) : (h.f ^= ut, yn(h, null, o)) : jt(h, () => {
      h = null;
    })));
  }
  function _(R) {
    O.pending.delete(R);
  }
  var y = Fn(() => {
    v = /** @type {V[]} */
    s(m);
    for (var R = v.length, L = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      D
    ), K = Wi(), B = 0; B < R; B += 1) {
      var J = v[B], $ = r(J, B), x = p ? null : f.get($);
      x ? (x.v && fn(x.v, J), x.i && fn(x.i, B), K && le.unskip_effect(x.e)) : (x = qs(
        f,
        p ? o : vi ?? (vi = yt()),
        J,
        $,
        B,
        i,
        t,
        n
      ), p || (x.e.f |= ut), f.set($, x)), L.add($);
    }
    if (R === 0 && a && !h && (p ? h = Ge(() => a(o)) : (h = Ge(() => a(vi ?? (vi = yt()))), h.f |= ut)), R > L.size && Va(), !p)
      if (d.set(le, L), K) {
        for (const [k, C] of f)
          L.has(k) || le.skip_effect(C.e);
        le.oncommit(T), le.ondiscard(_);
      } else
        T(le);
    s(m);
  }), O = { effect: y, items: f, pending: d, outrogroups: null, fallback: h };
  p = !1;
}
function pn(e) {
  for (; e !== null && (e.f & Ze) === 0; )
    e = e.next;
  return e;
}
function Bs(e, t, n, r, i) {
  var x, k, C, G, b, w, ee, se, fe;
  var a = (r & 8) !== 0, o = t.length, f = e.items, l = pn(e.effect.first), c, h = null, m, v = [], d = [], p, T, _, y;
  if (a)
    for (y = 0; y < o; y += 1)
      p = t[y], T = i(p, y), _ = /** @type {EachItem} */
      f.get(T).e, (_.f & ut) === 0 && ((k = (x = _.nodes) == null ? void 0 : x.a) == null || k.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(_));
  for (y = 0; y < o; y += 1) {
    if (p = t[y], T = i(p, y), _ = /** @type {EachItem} */
    f.get(T).e, e.outrogroups !== null)
      for (const ie of e.outrogroups)
        ie.pending.delete(_), ie.done.delete(_);
    if ((_.f & Ee) !== 0 && ($n(_), a && ((G = (C = _.nodes) == null ? void 0 : C.a) == null || G.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(_))), (_.f & ut) !== 0)
      if (_.f ^= ut, _ === l)
        yn(_, null, n);
      else {
        var O = h ? h.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), At(e, h, _), At(e, _, O), yn(_, O, n), h = _, v = [], d = [], l = pn(h.next);
        continue;
      }
    if (_ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < d.length) {
          var R = d[0], L;
          h = R.prev;
          var le = v[0], K = v[v.length - 1];
          for (L = 0; L < v.length; L += 1)
            yn(v[L], R, n);
          for (L = 0; L < d.length; L += 1)
            c.delete(d[L]);
          At(e, le.prev, K.next), At(e, h, le), At(e, K, R), l = R, h = K, y -= 1, v = [], d = [];
        } else
          c.delete(_), yn(_, l, n), At(e, _.prev, _.next), At(e, _, h === null ? e.effect.first : h.next), At(e, h, _), h = _;
        continue;
      }
      for (v = [], d = []; l !== null && l !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = pn(l.next);
      if (l === null)
        continue;
    }
    (_.f & ut) === 0 && v.push(_), h = _, l = pn(_.next);
  }
  if (e.outrogroups !== null) {
    for (const ie of e.outrogroups)
      ie.pending.size === 0 && (Nr(e, rr(ie.done)), (b = e.outrogroups) == null || b.delete(ie));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var B = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & Ee) === 0 && B.push(_);
    for (; l !== null; )
      (l.f & Ee) === 0 && l !== e.fallback && B.push(l), l = pn(l.next);
    var J = B.length;
    if (J > 0) {
      var $ = (r & 4) !== 0 && o === 0 ? n : null;
      if (a) {
        for (y = 0; y < J; y += 1)
          (ee = (w = B[y].nodes) == null ? void 0 : w.a) == null || ee.measure();
        for (y = 0; y < J; y += 1)
          (fe = (se = B[y].nodes) == null ? void 0 : se.a) == null || fe.fix();
      }
      Vs(e, B, $);
    }
  }
  a && xt(() => {
    var ie, ue;
    if (m !== void 0)
      for (_ of m)
        (ue = (ie = _.nodes) == null ? void 0 : ie.a) == null || ue.apply();
  });
}
function qs(e, t, n, r, i, a, o, f) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ fs(n, !1, !1) : qt(n) : null, c = (o & 2) !== 0 ? qt(i) : null;
  return {
    v: l,
    i: c,
    e: Ge(() => (a(t, l ?? n, c ?? i, f), () => {
      e.delete(r);
    }))
  };
}
function yn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & ut) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pn(r)
      );
      if (a.before(r), r === i)
        return;
      r = o;
    }
}
function At(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function va(e, t, n) {
  Xi(() => {
    var r = ar(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var o = n();
        ks(o), i && Mi(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const di = [...` 	
\r\f \v\uFEFF`];
function Gs(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || di.includes(r[o - 1])) && (f === r.length || di.includes(r[f])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(f + 1) : o = f;
        }
  }
  return r === "" ? null : r;
}
function Ys(e, t) {
  return e == null ? null : String(e);
}
function Jt(e, t, n, r, i, a) {
  var o = (
    /** @type {any} */
    e[gr]
  );
  if (o !== n || o === void 0) {
    var f = Gs(n, r, a);
    f == null ? e.removeAttribute("class") : e.className = f, e[gr] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return a;
}
function Ks(e, t, n, r) {
  var i = (
    /** @type {any} */
    e[br]
  );
  if (i !== t) {
    var a = Ys(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e[br] = t;
  }
  return r;
}
const Ws = Symbol("is custom element"), Zs = Symbol("is html"), Js = Ua ? "progress" : "PROGRESS";
function Xs(e, t) {
  var n = da(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Js) || (e.value = t ?? "");
}
function ge(e, t, n, r) {
  var i = da(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Fa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Qs(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function da(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Bn] ?? (e[Bn] = {
      [Ws]: e.nodeName.includes("-"),
      [Zs]: e.namespaceURI === Ra
    })
  );
}
var hi = /* @__PURE__ */ new Map();
function Qs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = hi.get(t);
  if (n) return n;
  hi.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Si(i);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    i = Pr(i);
  }
  return n;
}
function hr(e, t) {
  return e === t || (e == null ? void 0 : e[Qt]) === t;
}
function $s(e = Fr(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Se.r
  ), a = (
    /** @type {Effect} */
    Z
  );
  return Xi(() => {
    var o, f;
    return qr(() => {
      o = f, f = [], ar(() => {
        hr(n(...f), e) || (t(e, ...f), o && hr(n(...o), e) && t(null, ...o));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & Wn; )
        l = l.parent;
      const c = () => {
        f && hr(n(...f), e) && t(null, ...f);
      }, h = l.teardown;
      l.teardown = () => {
        c(), h == null || h();
      };
    };
  }), e;
}
function wt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), a = !0, o = () => (a && (a = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = o());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? o() : (a = !0, c);
  }, l;
}
const eo = "5";
var wi;
typeof window < "u" && ((wi = window.__svelte ?? (window.__svelte = {})).v ?? (wi.v = /* @__PURE__ */ new Set())).add(eo);
let jn = "";
function to(e) {
  jn = e;
}
async function St(e, t) {
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
const ha = (e) => St("/accounts", e), no = () => St("/rails"), ro = (e) => St(`/accounts/${encodeURIComponent(e)}`), io = (e) => St(`/accounts/${encodeURIComponent(e)}/similar`), ao = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), so = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), oo = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/images`, { site: t, page: n }), lo = (e, t) => St("/videoinfo", { site: e, video_id: t }), fo = (e, t) => St(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), uo = (e, t, n) => `${jn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, _i = (e, t, n, r, i = !1) => `${jn}/photo?site=${encodeURIComponent(e)}&handle=${encodeURIComponent(t)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, pi = (e, t, n = 0) => `${jn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`, Zr = "/api/v1/rails/x/onlyfans";
async function co() {
  try {
    const e = await fetch(Zr);
    return e.ok ? (await e.json()).rails ?? [] : [];
  } catch {
    return [];
  }
}
async function vo() {
  try {
    return (await fetch(Zr, { method: "DELETE" })).ok;
  } catch {
    return !1;
  }
}
async function ho(e) {
  try {
    return (await fetch(Zr, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(e)
    })).ok;
  } catch {
    return !1;
  }
}
var _o = /* @__PURE__ */ A('<img loading="lazy"/>'), po = /* @__PURE__ */ A('<span class="ofx-initials"> </span>');
function Jr(e, t) {
  ht(t, !0);
  let n = wt(t, "src", 3, null), r = wt(t, "alt", 3, ""), i = wt(t, "name", 3, ""), a = wt(t, "onmeasure", 3, null), o = /* @__PURE__ */ j(!1);
  const f = /* @__PURE__ */ Ye(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((d) => {
    var p;
    return ((p = d[0]) == null ? void 0 : p.toUpperCase()) ?? "";
  }).join(""));
  function l(d) {
    const p = d.currentTarget;
    a() && p.naturalWidth && p.naturalHeight && a()(p.naturalWidth / p.naturalHeight);
  }
  var c = hn(), h = we(c);
  {
    var m = (d) => {
      var p = _o();
      z(() => {
        ge(p, "src", n()), ge(p, "alt", r());
      }), Sr("load", p, l), Sr("error", p, () => g(o, !0)), S(d, p);
    }, v = (d) => {
      var p = po(), T = X(p, !0);
      z(() => q(T, s(f))), S(d, p);
    };
    F(h, (d) => {
      n() && !s(o) ? d(m) : d(v, -1);
    });
  }
  S(e, c), _t();
}
var go = /* @__PURE__ */ A('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function _a(e, t) {
  ht(t, !0);
  var n = go(), r = U(n), i = U(r);
  Jr(i, {
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
  var a = E(r, 2), o = X(a, !0), f = E(a, 2), l = X(f);
  z(() => {
    ge(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), ge(a, "title", t.account.display_name), q(o, t.account.display_name), q(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), re("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), S(e, n), _t();
}
dn(["click"]);
var bo = /* @__PURE__ */ A('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), mo = /* @__PURE__ */ A('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), xo = /* @__PURE__ */ A('<span class="ofx-note"> </span>'), wo = /* @__PURE__ */ A('<div class="ofx-rail-actions"><!></div>'), yo = /* @__PURE__ */ A('<div class="ofx-rail-item"><!></div>'), ko = /* @__PURE__ */ A('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Or(e, t) {
  ht(t, !0);
  let n = wt(t, "note", 3, ""), r = wt(t, "order", 3, null), i = wt(t, "fetcher", 3, null), a = wt(t, "size", 3, 20), o = /* @__PURE__ */ j(Ke([])), f = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(0);
  function c() {
    g(l, s(l) + 1);
  }
  Dn(() => {
    const T = r(), _ = i(), y = a();
    s(l);
    let O = !1;
    g(f, !0);
    const R = _ ? _() : ha({ order: T, limit: y, offset: 0 });
    return Promise.resolve(R).then((L) => {
      O || (g(o, Array.isArray(L) ? L : (L == null ? void 0 : L.items) ?? [], !0), g(f, !1));
    }), () => {
      O = !0;
    };
  });
  var h = { reload: c }, m = hn(), v = we(m);
  {
    var d = (T) => {
      var _ = mo(), y = U(_), O = X(y, !0), R = E(y, 2);
      Me(R, 20, () => Array(8), Wr, (L, le) => {
        var K = bo();
        S(L, K);
      }), z(() => q(O, t.title)), S(T, _);
    }, p = (T) => {
      var _ = ko(), y = U(_), O = U(y), R = X(O, !0), L = E(O, 2);
      {
        var le = ($) => {
          var x = xo(), k = X(x, !0);
          z(() => q(k, n())), S($, x);
        };
        F(L, ($) => {
          n() && $(le);
        });
      }
      var K = E(L, 2);
      {
        var B = ($) => {
          var x = wo(), k = U(x);
          Hs(k, () => t.actions), S($, x);
        };
        F(K, ($) => {
          t.actions && $(B);
        });
      }
      var J = E(y, 2);
      Me(J, 21, () => s(o), ($) => $.handle, ($, x) => {
        var k = yo(), C = U(k);
        _a(C, {
          get account() {
            return s(x);
          },
          get navigate() {
            return t.navigate;
          }
        }), S($, k);
      }), z(() => q(R, t.title)), S(T, _);
    };
    F(v, (T) => {
      s(f) ? T(d) : s(o).length && T(p, 1);
    });
  }
  return S(e, m), _t(h);
}
var Eo = /* @__PURE__ */ A('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), So = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), To = /* @__PURE__ */ A(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Ao = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function Co(e, t) {
  ht(t, !0);
  let n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(null), a = /* @__PURE__ */ j(Ke([]));
  async function o() {
    const _ = await co(), y = new Map(t.rails.map((L) => [L.key, L])), O = /* @__PURE__ */ new Set(), R = [];
    for (const L of _)
      O.add(L.key), y.has(L.key) && R.push({ ...L });
    for (const L of t.rails)
      O.has(L.key) || R.push({ key: L.key, enabled: !0 });
    g(a, R, !0), g(i, null), g(n, !0);
  }
  function f(_, y) {
    const O = _ + y;
    if (O < 0 || O >= s(a).length) return;
    const R = [...s(a)];
    [R[_], R[O]] = [R[O], R[_]], g(a, R, !0);
  }
  function l(_) {
    g(a, s(a).map((y, O) => O === _ ? { ...y, enabled: !y.enabled } : y), !0);
  }
  function c(_) {
    var y;
    return ((y = t.rails.find((O) => O.key === _)) == null ? void 0 : y.title) ?? _;
  }
  async function h() {
    var _;
    g(r, !0), g(i, null), await vo() ? (await ((_ = t.onsaved) == null ? void 0 : _.call(t)), g(n, !1)) : g(i, "Could not reset."), g(r, !1);
  }
  async function m() {
    var _;
    g(r, !0), g(i, null), await ho(s(a)) ? (await ((_ = t.onsaved) == null ? void 0 : _.call(t)), g(n, !1)) : g(i, "Could not save. Your changes are still here."), g(r, !1);
  }
  var v = Ao(), d = we(v), p = E(d, 2);
  {
    var T = (_) => {
      var y = To(), O = U(y), R = E(U(O), 2), L = E(O, 4);
      Me(L, 23, () => s(a), (C) => C.key, (C, G, b) => {
        var w = Eo();
        let ee;
        var se = U(w), fe = X(se, !0), ie = E(se, 2), ue = X(ie, !0), I = E(ie, 2), N = E(I, 2);
        z(
          (Q, ce, Te, Xe) => {
            ee = Jt(w, 1, "", null, ee, { "ofx-off": !s(G).enabled }), q(fe, Q), ge(ie, "aria-label", ce), q(ue, s(G).enabled ? "Shown" : "Hidden"), I.disabled = s(b) === 0, ge(I, "aria-label", Te), N.disabled = s(b) === s(a).length - 1, ge(N, "aria-label", Xe);
          },
          [
            () => c(s(G).key),
            () => s(G).enabled ? `Hide ${c(s(G).key)}` : `Show ${c(s(G).key)}`,
            () => `Move ${c(s(G).key)} up`,
            () => `Move ${c(s(G).key)} down`
          ]
        ), re("click", ie, () => l(s(b))), re("click", I, () => f(s(b), -1)), re("click", N, () => f(s(b), 1)), S(C, w);
      });
      var le = E(L, 2);
      {
        var K = (C) => {
          var G = So(), b = X(G, !0);
          z(() => q(b, s(i))), S(C, G);
        };
        F(le, (C) => {
          s(i) && C(K);
        });
      }
      var B = E(le, 2), J = U(B), $ = E(J, 2), x = E($, 2), k = X(x, !0);
      z(() => {
        J.disabled = s(r), x.disabled = s(r), q(k, s(r) ? "Saving…" : "Save");
      }), re("click", R, () => g(n, !1)), re("click", J, h), re("click", $, () => g(n, !1)), re("click", x, m), S(_, y);
    };
    F(p, (_) => {
      s(n) && _(T);
    });
  }
  re("click", d, o), S(e, v), _t();
}
dn(["click"]);
var Ro = /* @__PURE__ */ A(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Mo = /* @__PURE__ */ A('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Io = /* @__PURE__ */ A('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), No = /* @__PURE__ */ A('<div class="ofx-sentinel"></div>'), Oo = /* @__PURE__ */ A('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Lo = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Po = /* @__PURE__ */ A('<div class="ofx-controls"><!></div> <!> <!>', 1), Do = /* @__PURE__ */ A('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Fo(e, t) {
  ht(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ j(Ke([])), a = /* @__PURE__ */ j(0), o = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(!1), h = /* @__PURE__ */ j(""), m, v = /* @__PURE__ */ j(null), d = /* @__PURE__ */ j(Ke([]));
  async function p() {
    const I = await no();
    g(d, Array.isArray(I) ? I : [], !0);
  }
  Dn(() => {
    p();
  });
  const T = /* @__PURE__ */ Ye(() => s(l).trim()), _ = /* @__PURE__ */ Ye(() => s(T) !== "" || s(c)), y = /* @__PURE__ */ Ye(() => s(i).length < s(a));
  async function O(I, N) {
    g(o, !0);
    const Q = await ha({ search: I, limit: n, offset: N });
    if (I !== s(l).trim()) {
      g(o, !1);
      return;
    }
    Q ? (g(i, N === 0 ? Q.items : [...s(i), ...Q.items], !0), g(a, Q.total, !0), g(h, I, !0), g(f, !1)) : g(f, !0), g(o, !1);
  }
  function R(I) {
    g(l, I.currentTarget.value, !0), clearTimeout(m), m = setTimeout(() => O(s(l).trim(), 0), 250);
  }
  function L() {
    g(c, !0), O("", 0);
  }
  function le() {
    g(c, !1), g(l, ""), g(i, [], !0), g(a, 0), g(h, "");
  }
  function K(I) {
    const N = new IntersectionObserver(
      (Q) => {
        var ce;
        (ce = Q[0]) != null && ce.isIntersecting && s(y) && !s(o) && O(s(h), s(i).length);
      },
      { rootMargin: "600px" }
    );
    return N.observe(I), { destroy: () => N.disconnect() };
  }
  var B = Do(), J = E(we(B), 2), $ = U(J);
  {
    var x = (I) => {
      var N = zn();
      z(
        (Q, ce) => q(N, `${Q ?? ""} of ${ce ?? ""}
        ${s(h) ? `matching “${s(h)}”` : "accounts"}`),
        [
          () => s(i).length.toLocaleString(),
          () => s(a).toLocaleString()
        ]
      ), S(I, N);
    }, k = (I) => {
      var N = zn("loading…");
      S(I, N);
    }, C = (I) => {
      var N = zn("nothing found");
      S(I, N);
    }, G = (I) => {
      var N = zn("performers, gathered from the archive sites");
      S(I, N);
    };
    F($, (I) => {
      s(_) && s(a) ? I(x) : s(_) && s(o) ? I(k, 1) : s(_) ? I(C, 2) : I(G, -1);
    });
  }
  var b = E(J, 2), w = E(U(b), 2), ee = E(b, 2);
  {
    var se = (I) => {
      var N = Ro();
      S(I, N);
    };
    F(ee, (I) => {
      s(f) && I(se);
    });
  }
  var fe = E(ee, 2);
  {
    var ie = (I) => {
      var N = Oo(), Q = we(N);
      {
        var ce = (te) => {
          var he = Mo(), Qe = X(he);
          re("click", Qe, le), S(te, he);
        };
        F(Q, (te) => {
          s(c) && !s(T) && te(ce);
        });
      }
      var Te = E(Q, 2), Xe = U(Te);
      Me(Xe, 17, () => s(i), (te) => te.handle, (te, he) => {
        _a(te, {
          get account() {
            return s(he);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ne = E(Xe, 2);
      {
        var He = (te) => {
          var he = hn(), Qe = we(he);
          Me(Qe, 16, () => Array(12), Wr, (sr, Xr) => {
            var Hn = Io();
            S(sr, Hn);
          }), S(te, he);
        };
        F(Ne, (te) => {
          s(o) && te(He);
        });
      }
      var Oe = E(Te, 2);
      {
        var de = (te) => {
          var he = No();
          va(he, (Qe) => K == null ? void 0 : K(Qe)), S(te, he);
        };
        F(Oe, (te) => {
          s(y) && te(de);
        });
      }
      S(I, N);
    }, ue = (I) => {
      var N = Po(), Q = we(N), ce = U(Q);
      Co(ce, {
        get rails() {
          return s(d);
        },
        onsaved: p
      });
      var Te = E(Q, 2);
      Me(Te, 17, () => s(d).filter((Ne) => Ne.order !== "random"), (Ne) => Ne.order, (Ne, He) => {
        Or(Ne, {
          get title() {
            return s(He).title;
          },
          get note() {
            return s(He).note;
          },
          get order() {
            return s(He).order;
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Xe = E(Te, 2);
      {
        const Ne = (Oe) => {
          var de = Lo(), te = we(de), he = E(te, 2);
          re("click", te, () => {
            var Qe;
            return (Qe = s(v)) == null ? void 0 : Qe.reload();
          }), re("click", he, L), S(Oe, de);
        };
        let He = /* @__PURE__ */ Ye(() => {
          var Oe;
          return ((Oe = s(d).find((de) => de.order === "random")) == null ? void 0 : Oe.title) ?? "Something else";
        });
        $s(
          Or(Xe, {
            get title() {
              return s(He);
            },
            order: "random",
            size: r,
            get navigate() {
              return t.navigate;
            },
            actions: Ne,
            $$slots: { actions: !0 }
          }),
          (Oe) => g(v, Oe, !0),
          () => s(v)
        );
      }
      S(I, N);
    };
    F(fe, (I) => {
      s(_) ? I(ie) : I(ue, -1);
    });
  }
  z(() => Xs(w, s(l))), re("input", w, R), S(e, B), _t();
}
dn(["input", "click"]);
var Uo = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), gi = /* @__PURE__ */ A('<p class="ofx-note"> </p>'), jo = /* @__PURE__ */ A('<span class="ofx-badge"> </span>'), Ho = /* @__PURE__ */ A('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), zo = /* @__PURE__ */ A('<p class="ofx-caption-title"> </p>'), Vo = /* @__PURE__ */ A('<p class="ofx-caption-text"> </p>'), Bo = /* @__PURE__ */ A('<p class="ofx-caption-when"> </p>'), qo = /* @__PURE__ */ A('<div class="ofx-caption"><!> <!> <!></div>'), Go = /* @__PURE__ */ A('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Yo = /* @__PURE__ */ A('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Ko = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button"> </button>'), Wo = /* @__PURE__ */ A('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function Zo(e, t) {
  ht(t, !0);
  let n = /* @__PURE__ */ j(Ke([])), r = /* @__PURE__ */ j(0), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1);
  async function f() {
    if (s(i) || s(a)) return;
    g(i, !0);
    const x = s(r) + 1, [k, C, G] = await Promise.all([
      ao(t.handle, t.site, x),
      so(t.handle, t.site, x),
      oo(t.handle, t.site, x)
    ]);
    if (k === null && C === null && G === null)
      g(o, !0);
    else {
      const b = [
        ...(k ?? []).map((w) => ({
          kind: "video",
          key: `v:${w.video_id}`,
          title: w.title,
          thumbnail: w.thumbnail,
          badge: v(w.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: w.posted_at,
          text: w.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: w.has_text,
          item: w
        })),
        ...(C ?? []).map((w) => ({
          kind: "image",
          key: `g:${w.gallery_id}`,
          title: w.title,
          thumbnail: w.cover,
          badge: w.image_count ? `${w.image_count}` : null,
          aspect: 0.75,
          posted: w.posted,
          item: w
        })),
        ...(G ?? []).map((w) => ({
          kind: "image",
          key: `p:${w.image_id ?? `${x}:${w.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: _i(t.site, t.handle, x, w.index, !0),
          full: _i(t.site, t.handle, x, w.index),
          badge: null,
          aspect: 0.75,
          posted: w.posted_at,
          item: w
        }))
      ];
      g(n, [...s(n), ...b], !0), g(r, x), b.length === 0 && g(a, !0);
    }
    g(i, !1);
  }
  const l = /* @__PURE__ */ Ye(() => s(n).filter((x) => t.kinds.has(x.kind)));
  Dn(() => {
    t.handle, t.site, ar(() => {
      g(n, [], !0), g(r, 0), g(a, !1), g(o, !1), g(i, !1), f();
    });
  });
  function c(x, k) {
    !k || !Number.isFinite(k) || g(n, s(n).map((C) => C.key === x ? { ...C, aspect: k } : C), !0);
  }
  function h(x, k) {
    if (!k.hasText || k.text) return;
    const C = new IntersectionObserver((G) => {
      G.some((b) => b.isIntersecting) && (C.disconnect(), lo(t.site, k.item.video_id).then((b) => {
        b && g(
          n,
          s(n).map((w) => w.key === k.key ? {
            ...w,
            text: b.description,
            posted: w.posted ?? b.posted_at
          } : w),
          !0
        );
      }));
    });
    return C.observe(x), { destroy: () => C.disconnect() };
  }
  function m(x) {
    x.kind === "video" ? t.onplay(x.item) : x.full ? t.onphoto(x) : t.ongallery(x.item);
  }
  function v(x) {
    return x ? `${Math.floor(x / 60)}:${String(x % 60).padStart(2, "0")}` : null;
  }
  var d = Wo(), p = U(d), T = X(p, !0), _ = E(p, 2);
  {
    var y = (x) => {
      var k = Uo(), C = X(k);
      z(() => q(C, `${t.site ?? ""} did not answer.`)), S(x, k);
    }, O = (x) => {
      var k = gi(), C = X(k);
      z(() => q(C, `Nothing here on ${t.site ?? ""}.`)), S(x, k);
    }, R = (x) => {
      var k = gi(), C = X(k);
      z((G) => q(C, `${t.site ?? ""} has no ${G ?? ""} for this performer.`), [() => [...t.kinds].join(" or ")]), S(x, k);
    };
    F(_, (x) => {
      s(o) ? x(y) : !s(i) && s(n).length === 0 ? x(O, 1) : !s(i) && s(l).length === 0 && x(R, 2);
    });
  }
  var L = E(_, 2), le = U(L);
  Me(le, 17, () => s(l), (x) => x.key, (x, k) => {
    var C = Go(), G = U(C), b = U(G), w = U(b);
    Jr(w, {
      get src() {
        return s(k).thumbnail;
      },
      get alt() {
        return s(k).title;
      },
      get name() {
        return s(k).title;
      },
      onmeasure: (N) => c(s(k).key, N)
    });
    var ee = E(w, 2);
    {
      var se = (N) => {
        var Q = jo(), ce = X(Q, !0);
        z(() => q(ce, s(k).badge)), S(N, Q);
      };
      F(ee, (N) => {
        s(k).badge && N(se);
      });
    }
    var fe = E(ee, 2);
    {
      var ie = (N) => {
        var Q = Ho();
        S(N, Q);
      };
      F(fe, (N) => {
        s(k).kind === "video" && N(ie);
      });
    }
    var ue = E(G, 2);
    {
      var I = (N) => {
        var Q = qo(), ce = U(Q);
        {
          var Te = (de) => {
            var te = zo(), he = X(te, !0);
            z(() => q(he, s(k).title)), S(de, te);
          };
          F(ce, (de) => {
            s(k).title && de(Te);
          });
        }
        var Xe = E(ce, 2);
        {
          var Ne = (de) => {
            var te = Vo(), he = X(te, !0);
            z(() => q(he, s(k).text)), S(de, te);
          };
          F(Xe, (de) => {
            s(k).text && de(Ne);
          });
        }
        var He = E(Xe, 2);
        {
          var Oe = (de) => {
            var te = Bo(), he = X(te, !0);
            z(() => q(he, s(k).posted)), S(de, te);
          };
          F(He, (de) => {
            s(k).posted && de(Oe);
          });
        }
        S(N, Q);
      };
      F(ue, (N) => {
        (s(k).title || s(k).text || s(k).posted) && N(I);
      });
    }
    va(C, (N, Q) => h == null ? void 0 : h(N, Q), () => s(k)), z(() => Ks(C, `--ofx-ar: ${s(k).aspect ?? ""}; flex-grow: ${s(k).aspect ?? ""}; flex-basis: ${s(k).aspect * 220}px`)), re("click", G, () => m(s(k))), S(x, C);
  });
  var K = E(le, 2);
  {
    var B = (x) => {
      var k = hn(), C = we(k);
      Me(C, 16, () => Array(4), Wr, (G, b) => {
        var w = Yo();
        S(G, w);
      }), S(x, k);
    };
    F(K, (x) => {
      s(i) && x(B);
    });
  }
  var J = E(L, 2);
  {
    var $ = (x) => {
      var k = Ko(), C = X(k, !0);
      z(() => {
        k.disabled = s(i), q(C, s(i) ? "Loading…" : "Load more");
      }), re("click", k, f), S(x, k);
    };
    F(J, (x) => {
      !s(a) && !s(o) && s(n).length > 0 && x($);
    });
  }
  z(() => q(T, t.site)), S(e, d), _t();
}
dn(["click"]);
async function Jo() {
  try {
    const e = await fetch("/api/v1/vpn/status");
    return e.ok ? await e.json() : null;
  } catch {
    return null;
  }
}
async function Xo(e, t) {
  const n = e === "scraping" ? "vpn.route_scraping" : "vpn.route_streaming";
  try {
    return (await fetch(`/api/v1/settings/set/${n}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ [n]: t })
    })).ok;
  } catch {
    return !1;
  }
}
async function Qo(e) {
  try {
    const t = await fetch("/api/v1/vpn/exit-node", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ node_id: e })
    });
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
var $o = /* @__PURE__ */ A('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), el = /* @__PURE__ */ A('<span class="tbx-dim">offline</span>'), tl = /* @__PURE__ */ A('<li><button type="button" role="option"> <!></button></li>'), nl = /* @__PURE__ */ A('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), rl = /* @__PURE__ */ A('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), il = /* @__PURE__ */ A('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), al = /* @__PURE__ */ A('<p class="tbx-vpn-note"> </p>'), sl = /* @__PURE__ */ A('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function ol(e, t) {
  ht(t, !0);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(null);
  async function o() {
    g(n, await Jo(), !0);
  }
  Dn(() => {
    o();
  });
  async function f(v) {
    var p;
    const d = v === "scraping" ? !s(n).route_scraping : !s(n).route_streaming;
    g(r, v, !0), g(a, null), await Xo(v, d) && (await o(), await ((p = t.onchange) == null ? void 0 : p.call(t))), g(r, null);
  }
  async function l(v) {
    var p;
    g(r, "exit"), g(i, !1);
    const d = await Qo(v);
    d && (g(n, d, !0), g(a, d.detail ?? null, !0), await ((p = t.onchange) == null ? void 0 : p.call(t))), g(r, null);
  }
  var c = hn(), h = we(c);
  {
    var m = (v) => {
      var d = sl(), p = we(d), T = E(U(p), 2);
      Me(
        T,
        17,
        () => [
          ["scraping", "Scraping", s(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            s(n).route_streaming
          ]
        ],
        ([K, B, J]) => K,
        (K, B) => {
          var J = /* @__PURE__ */ Ye(() => _r(s(B), 3));
          let $ = () => s(J)[0], x = () => s(J)[1], k = () => s(J)[2];
          var C = $o();
          let G;
          var b = E(U(C), 2), w = X(b, !0);
          z(() => {
            G = Jt(C, 1, "tbx-toggle", null, G, { "tbx-toggle-on": k() }), ge(C, "aria-checked", k()), C.disabled = s(r) !== null, q(w, x());
          }), re("click", C, () => f($())), S(K, C);
        }
      );
      var _ = E(T, 2);
      {
        var y = (K) => {
          var B = rl(), J = U(B), $ = U(J), x = E(J, 2);
          {
            var k = (C) => {
              var G = nl(), b = U(G), w = X(b), ee = E(b, 2);
              Me(ee, 17, () => s(n).exit_nodes, (se) => se.id, (se, fe) => {
                var ie = tl(), ue = U(ie), I = U(ue), N = E(I);
                {
                  var Q = (ce) => {
                    var Te = el();
                    S(ce, Te);
                  };
                  F(N, (ce) => {
                    s(fe).online || ce(Q);
                  });
                }
                z(() => {
                  ge(ue, "aria-selected", s(fe).active), ue.disabled = !s(fe).online, q(I, `${s(fe).name ?? ""}${s(fe).country ? ` · ${s(fe).country}` : ""} `);
                }), re("click", ue, () => l(s(fe).id)), S(se, ie);
              }), z(() => ge(w, "aria-selected", !s(n).exit_node)), re("click", w, () => l(null)), S(C, G);
            };
            F(x, (C) => {
              s(i) && C(k);
            });
          }
          z(() => {
            ge(J, "aria-expanded", s(i)), J.disabled = s(r) !== null, q($, `${s(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), re("click", J, () => g(i, !s(i))), S(K, B);
        };
        F(_, (K) => {
          var B;
          (B = s(n).exit_nodes) != null && B.length && K(y);
        });
      }
      var O = E(_, 2);
      {
        var R = (K) => {
          var B = il();
          S(K, B);
        };
        F(O, (K) => {
          !s(n).connected && (s(n).route_scraping || s(n).route_streaming) && K(R);
        });
      }
      var L = E(p, 2);
      {
        var le = (K) => {
          var B = al(), J = X(B, !0);
          z(() => q(J, s(a))), S(K, B);
        };
        F(L, (K) => {
          s(a) && K(le);
        });
      }
      S(v, d);
    };
    F(h, (v) => {
      var d;
      (d = s(n)) != null && d.enabled && v(m);
    });
  }
  S(e, c), _t();
}
dn(["click"]);
var ll = /* @__PURE__ */ A('<p class="ofx-error">That account could not be loaded.</p>'), fl = /* @__PURE__ */ A('<div class="ofx-banner"><img alt=""/></div>'), ul = /* @__PURE__ */ As('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), cl = /* @__PURE__ */ A('<p> </p> <button class="ofx-more" type="button"> </button>', 1), vl = /* @__PURE__ */ A("<span><b> </b> </span>"), dl = /* @__PURE__ */ A('<div class="ofx-stats"></div>'), hl = /* @__PURE__ */ A("<span> </span>"), bi = /* @__PURE__ */ A('<a target="_blank" rel="noreferrer noopener"> </a>'), _l = /* @__PURE__ */ A('<button type="button" role="tab"> </button>'), pl = /* @__PURE__ */ A('<span class="ofx-count"> </span>'), gl = /* @__PURE__ */ A('<button type="button"> <!></button>'), bl = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), ml = /* @__PURE__ */ A(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), xl = /* @__PURE__ */ A('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), wl = /* @__PURE__ */ A('<p class="ofx-note">Loading…</p>'), yl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), kl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), El = /* @__PURE__ */ A('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Sl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Tl = /* @__PURE__ */ A("<!> <!> <!> <!>", 1);
function Al(e, t) {
  ht(t, !0);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j("all");
  const a = /* @__PURE__ */ Ye(() => s(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([s(i)]));
  let o = /* @__PURE__ */ j(Ke(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(null), c = /* @__PURE__ */ j(null), h = /* @__PURE__ */ j(null), m = /* @__PURE__ */ j(null);
  Dn(() => {
    ro(t.handle).then((b) => {
      b ? g(n, b, !0) : g(r, !0);
    });
  });
  const v = /* @__PURE__ */ Ye(() => {
    var b, w, ee, se;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (b = s(n)) == null ? void 0 : b.posts_count],
      ["photos", (w = s(n)) == null ? void 0 : w.photos_count],
      ["videos", (ee = s(n)) == null ? void 0 : ee.videos_count],
      ["likes", (se = s(n)) == null ? void 0 : se.likes_count]
    ].filter(([, fe]) => fe != null);
  });
  function d(b) {
    const w = new Set(s(o));
    w.has(b) ? w.delete(b) : w.add(b), g(o, w, !0);
  }
  function p(b) {
    var w, ee;
    if (!((w = t.host) != null && w.play)) {
      g(l, b, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: pi(b.site, b.video_id),
      title: b.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: b.thumbnail ?? void 0,
      site: b.site,
      videoId: b.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((ee = s(n)) == null ? void 0 : ee.display_name) || t.handle,
      duration: b.duration,
      resolution: b.resolution,
      size: b.size
    });
  }
  function T(b) {
    g(m, null), g(h, b, !0);
  }
  async function _(b) {
    g(m, null);
    const w = await fo(b.site, b.gallery_id);
    if (!w) {
      g(m, "Could not open that gallery");
      return;
    }
    if (w.length === 0) {
      g(m, "That site served no images for this gallery");
      return;
    }
    g(c, { gallery: b, count: w.length, index: 0 }, !0);
  }
  function y(b) {
    s(c) && g(
      c,
      {
        ...s(c),
        index: (s(c).index + b + s(c).count) % s(c).count
      },
      !0
    );
  }
  function O(b) {
    if (b.key === "Escape") {
      g(l, null), g(c, null), g(h, null);
      return;
    }
    s(c) && (b.key === "ArrowRight" && y(1), b.key === "ArrowLeft" && y(-1));
  }
  var R = Tl();
  Sr("keydown", yr, O);
  var L = we(R);
  {
    var le = (b) => {
      var w = ll();
      S(b, w);
    }, K = (b) => {
      var w = xl(), ee = we(w), se = U(ee);
      {
        var fe = (M) => {
          var V = fl(), ae = X(V);
          z(() => ge(ae, "src", s(n).header_url)), S(M, V);
        };
        F(se, (M) => {
          s(n).header_url && M(fe);
        });
      }
      var ie = E(se, 2), ue = U(ie);
      let I;
      var N = U(ue);
      Jr(N, {
        get src() {
          return s(n).avatar_url;
        },
        get alt() {
          return s(n).display_name;
        },
        get name() {
          return s(n).display_name;
        }
      });
      var Q = E(ue, 2), ce = U(Q), Te = U(ce), Xe = E(Te);
      {
        var Ne = (M) => {
          var V = ul();
          S(M, V);
        };
        F(Xe, (M) => {
          s(n).is_verified && M(Ne);
        });
      }
      var He = E(ce, 2), Oe = U(He), de = E(Oe, 2), te = E(He, 2);
      {
        var he = (M) => {
          var V = cl(), ae = we(V);
          let Ae;
          var pt = X(ae, !0), ze = E(ae, 2), Tt = X(ze, !0);
          z(() => {
            Ae = Jt(ae, 1, "ofx-bio", null, Ae, { "ofx-clamped": !s(f) }), q(pt, s(n).bio), q(Tt, s(f) ? "less" : "more");
          }), re("click", ze, () => g(f, !s(f))), S(M, V);
        };
        F(te, (M) => {
          s(n).bio && M(he);
        });
      }
      var Qe = E(te, 2);
      {
        var sr = (M) => {
          var V = dl();
          Me(V, 21, () => s(v), ([ae, Ae]) => ae, (ae, Ae) => {
            var pt = /* @__PURE__ */ Ye(() => _r(s(Ae), 2));
            let ze = () => s(pt)[0], Tt = () => s(pt)[1];
            var at = vl(), _n = U(at), or = X(_n, !0), Sa = E(_n);
            z(
              (Ta) => {
                q(or, Ta), q(Sa, ` ${ze() ?? ""}`);
              },
              [() => Tt().toLocaleString()]
            ), S(ae, at);
          }), S(M, V);
        };
        F(Qe, (M) => {
          s(v).length && M(sr);
        });
      }
      var Xr = E(Qe, 2), Hn = U(Xr);
      {
        var pa = (M) => {
          var V = hl(), ae = X(V, !0);
          z(() => q(ae, s(n).location)), S(M, V);
        };
        F(Hn, (M) => {
          s(n).location && M(pa);
        });
      }
      var Qr = E(Hn, 2);
      {
        var ga = (M) => {
          var V = bi(), ae = X(V, !0);
          z(
            (Ae) => {
              ge(V, "href", s(n).website), q(ae, Ae);
            },
            [() => s(n).website.replace(/^https?:\/\//, "")]
          ), S(M, V);
        };
        F(Qr, (M) => {
          s(n).website && M(ga);
        });
      }
      var ba = E(Qr, 2);
      {
        var ma = (M) => {
          var V = bi(), ae = X(V);
          z(() => {
            ge(V, "href", s(n).of_url), q(ae, `onlyfans.com/${s(n).of_username ?? ""}`);
          }), S(M, V);
        };
        F(ba, (M) => {
          s(n).of_url && M(ma);
        });
      }
      var xa = E(ie, 2);
      Me(xa, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([M, V]) => M, (M, V) => {
        var ae = /* @__PURE__ */ Ye(() => _r(V, 2));
        let Ae = () => s(ae)[0], pt = () => s(ae)[1];
        var ze = _l();
        let Tt;
        var at = X(ze, !0);
        z(() => {
          Tt = Jt(ze, 1, "ofx-tab", null, Tt, { "ofx-on": s(i) === Ae() }), ge(ze, "aria-selected", s(i) === Ae()), q(at, pt());
        }), re("click", ze, () => g(i, Ae(), !0)), S(M, ze);
      });
      var $r = E(ee, 2);
      ol($r, {});
      var ei = E($r, 2), ti = E(U(ei), 2);
      Me(ti, 17, () => s(n).sources, (M) => M.site, (M, V) => {
        var ae = gl();
        let Ae;
        var pt = U(ae), ze = E(pt);
        {
          var Tt = (at) => {
            var _n = pl(), or = X(_n, !0);
            z(() => q(or, (s(V).video_count ?? 0) + (s(V).image_count ?? 0))), S(at, _n);
          };
          F(ze, (at) => {
            (s(V).video_count != null || s(V).image_count != null) && at(Tt);
          });
        }
        z(
          (at) => {
            Ae = Jt(ae, 1, "ofx-btn ofx-outline", null, Ae, { "ofx-on": at }), q(pt, `${s(V).site ?? ""} `);
          },
          [() => s(o).has(s(V).site)]
        ), re("click", ae, () => d(s(V).site)), S(M, ae);
      });
      var wa = E(ti, 2), ni = E(ei, 2);
      {
        var ya = (M) => {
          var V = bl(), ae = X(V, !0);
          z(() => q(ae, s(m))), S(M, V);
        };
        F(ni, (M) => {
          s(m) && M(ya);
        });
      }
      var ri = E(ni, 2);
      {
        var ka = (M) => {
          var V = ml();
          S(M, V);
        };
        F(ri, (M) => {
          s(o).size === 0 && M(ka);
        });
      }
      var ii = E(ri, 2);
      Me(ii, 17, () => s(n).sources.filter((M) => s(o).has(M.site)), (M) => M.site, (M, V) => {
        Zo(M, {
          get handle() {
            return s(n).handle;
          },
          get site() {
            return s(V).site;
          },
          get kinds() {
            return s(a);
          },
          onplay: (ae) => p(ae),
          ongallery: _,
          onphoto: T
        });
      });
      var Ea = E(ii, 2);
      ca(Ea, () => s(n).handle, (M) => {
        Or(M, {
          get title() {
            return `More like ${s(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => io(s(n).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), z(() => {
        I = Jt(ue, 1, "ofx-avatar", null, I, { "ofx-overlap": !!s(n).header_url }), q(Te, `${s(n).display_name ?? ""} `), q(Oe, `@${(s(n).of_username || s(n).handle) ?? ""} `), q(de, ` ${s(n).source_count ?? ""}
                    ${s(n).source_count === 1 ? "site" : "sites"}`);
      }), re("click", wa, () => t.navigate("/x/onlyfans")), S(b, w);
    }, B = (b) => {
      var w = wl();
      S(b, w);
    };
    F(L, (b) => {
      s(r) ? b(le) : s(n) ? b(K, 1) : b(B, -1);
    });
  }
  var J = E(L, 2);
  {
    var $ = (b) => {
      var w = yl(), ee = U(w), se = E(ee, 2);
      z(() => ge(se, "src", s(h).full)), re("click", ee, () => g(h, null)), S(b, w);
    };
    F(J, (b) => {
      s(h) && b($);
    });
  }
  var x = E(J, 2);
  {
    var k = (b) => {
      var w = kl(), ee = U(w), se = E(ee, 2);
      z((fe) => ge(se, "src", fe), [
        () => pi(s(l).site, s(l).video_id)
      ]), re("click", ee, () => g(l, null)), S(b, w);
    };
    F(x, (b) => {
      s(l) && b(k);
    });
  }
  var C = E(x, 2);
  {
    var G = (b) => {
      var w = Sl(), ee = U(w), se = E(ee, 2);
      {
        var fe = (ue) => {
          var I = El(), N = we(I), Q = E(N, 2);
          re("click", N, () => y(-1)), re("click", Q, () => y(1)), S(ue, I);
        };
        F(se, (ue) => {
          s(c).count > 1 && ue(fe);
        });
      }
      var ie = E(se, 2);
      z(
        (ue) => {
          ge(ie, "src", ue), ge(ie, "alt", `${s(c).gallery.title ?? ""} ${s(c).index + 1} of ${s(c).count ?? ""}`);
        },
        [
          () => uo(s(c).gallery.site, s(c).gallery.gallery_id, s(c).index)
        ]
      ), re("click", ee, () => g(c, null)), S(b, w);
    };
    F(C, (b) => {
      s(c) && b(G);
    });
  }
  S(e, R), _t();
}
dn(["click"]);
var Cl = /* @__PURE__ */ A('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Rl(e, t) {
  ht(t, !0);
  let n = wt(t, "path", 3, "");
  to(t.api);
  const r = /* @__PURE__ */ Ye(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Cl(), a = U(i), o = U(a);
  {
    var f = (c) => {
      var h = hn(), m = we(h);
      ca(m, () => s(r), (v) => {
        Al(v, {
          get handle() {
            return s(r);
          },
          get navigate() {
            return t.navigate;
          },
          get host() {
            return t.host;
          }
        });
      }), S(c, h);
    }, l = (c) => {
      Fo(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    F(o, (c) => {
      s(r) ? c(f) : c(l, -1);
    });
  }
  S(e, i), _t();
}
function Nl({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = Ke({ path: t ?? "", api: n, navigate: r, host: i }), o = Fs(Rl, { target: e, props: a });
  return {
    update(f) {
      a.path = f ?? "";
    },
    destroy() {
      js(o);
    }
  };
}
export {
  Nl as default
};

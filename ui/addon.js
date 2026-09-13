var Ea = Object.defineProperty;
var ti = (e) => {
  throw TypeError(e);
};
var ka = (e, t, n) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ae = (e, t, n) => ka(e, typeof t != "symbol" ? t + "" : t, n), cr = (e, t, n) => t.has(e) || ti("Cannot " + n);
var u = (e, t, n) => (cr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => t.has(e) ? ti("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), R = (e, t, n, r) => (cr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), F = (e, t, n) => (cr(e, t, "access private method"), n);
const oe = Symbol("uninitialized"), Sa = "http://www.w3.org/1999/xhtml", wi = !1;
var bi = Array.isArray, Aa = Array.prototype.indexOf, Yn = Array.prototype.includes, nr = Array.from, xi = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Ta = Object.getOwnPropertyDescriptors, Ca = Object.prototype, Ra = Array.prototype, yi = Object.getPrototypeOf, ni = Object.isExtensible;
const Ma = () => {
};
function Ia(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ei() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function ri(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ue = 2, an = 4, rr = 8, ki = 1 << 24, Ze = 16, je = 32, _t = 64, mr = 128, Lr = 256, Be = 512, fe = 1024, ae = 2048, $e = 4096, me = 8192, Ne = 16384, fn = 32768, Kn = 1 << 25, Ht = 65536, Wn = 1 << 17, Na = 1 << 18, un = 1 << 19, Oa = 1 << 20, at = 1 << 25, Bt = 65536, Zn = 1 << 21, Xt = 1 << 22, Et = 1 << 23, Bn = Symbol("$state"), Si = Symbol("component"), La = Symbol(""), jn = Symbol("attributes"), wr = Symbol("class"), Pa = Symbol("style"), hn = Symbol("text"), Mn = new class extends Error {
  constructor() {
    super(...arguments);
    Ae(this, "name", "StaleReactionError");
    Ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var pi;
const Da = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((pi = globalThis.document) != null && pi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Fa() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ua() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ai(e) {
  return e === this.v;
}
function za(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ti(e) {
  return !za(e, this.v);
}
function Ha() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ba(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ja(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Va() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ga() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ka() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Za() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Xa = !1, we = null;
function sn(e) {
  we = e;
}
function St(e, t = !1, n) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      z
    ),
    l: null
  };
}
function At(e) {
  var t = (
    /** @type {ComponentContext} */
    we
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Yi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, we = t.p, Pr(e);
}
function Pr(e = {}) {
  return xi(e, Si, { value: !0 }), e;
}
function Ci() {
  return !0;
}
let Wt = [];
function Ja() {
  var e = Wt;
  Wt = [], Ia(e);
}
function dt(e) {
  if (Wt.length === 0) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Ja();
    });
  }
  Wt.push(e);
}
const Qa = -7169;
function ne(e, t) {
  e.f = e.f & Qa | t;
}
function Dr(e) {
  (e.f & Be) !== 0 || e.deps === null ? ne(e, fe) : ne(e, $e);
}
function Ri(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ue) === 0 || (t.f & Bt) === 0 || (t.f ^= Bt, Ri(
        /** @type {Derived} */
        t.deps
      ));
}
function Mi(e, t, n) {
  (e.f & ae) !== 0 ? t.add(e) : (e.f & $e) !== 0 && n.add(e), Ri(e.deps), ne(e, fe);
}
function In(e) {
  var t = D, n = z;
  Ve(null), ot(null);
  try {
    return e();
  } finally {
    Ve(t), ot(n);
  }
}
function $a(e, t, n, r) {
  const i = Fr;
  var a = e.filter((h) => !h.settled), s = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(s);
    return;
  }
  var o = (
    /** @type {Effect} */
    z
  ), l = es(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function d(h) {
    if ((o.f & Ne) === 0) {
      l();
      try {
        r([...s, ...h]);
      } catch (g) {
        it(g, o);
      }
      Xn();
    }
  }
  var _ = Ii();
  if (n.length === 0) {
    c.then(() => d([])).finally(_);
    return;
  }
  function v() {
    Promise.all(n.map((h) => /* @__PURE__ */ ts(h))).then(d).catch((h) => it(h, o)).finally(_);
  }
  c ? c.then(() => {
    l(), v(), Xn();
  }) : v();
}
function es() {
  var e = (
    /** @type {Effect} */
    z
  ), t = D, n = we, r = (
    /** @type {Batch} */
    M
  );
  return function(a = !0) {
    ot(e), Ve(t), sn(n), a && (e.f & Ne) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Xn(e = !0) {
  ot(null), Ve(null), sn(null), e && (M == null || M.deactivate());
}
function Ii() {
  var e = (
    /** @type {Effect} */
    z
  ), t = e.b, n = (
    /** @type {Batch} */
    M
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  var t = ue | ae;
  return z !== null && (z.f |= un), {
    ctx: we,
    deps: null,
    effects: null,
    equals: Ai,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      oe
    ),
    wv: 0,
    parent: z,
    ac: null
  };
}
const _n = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ts(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    z
  );
  r === null && Ha();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Vt(
    /** @type {V} */
    oe
  ), s = !D, o = /* @__PURE__ */ new Set();
  return gs(() => {
    var h, g;
    var l = (
      /** @type {Effect} */
      z
    ), c = Ei();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (m) => {
        m !== Mn && c.reject(m);
      }).finally(Xn);
    } catch (m) {
      c.reject(m), Xn();
    }
    var d = (
      /** @type {Batch} */
      M
    );
    if (s) {
      if ((l.f & fn) !== 0)
        var _ = Ii();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (g = d.async_deriveds.get(l)) == null || g.reject(_n);
      else
        for (const m of o.values())
          m.reject(_n);
      o.add(c), d.async_deriveds.set(l, c);
    }
    const v = (m, p = void 0) => {
      _ == null || _(), o.delete(c), p !== _n && (d.activate(), p ? (a.f |= Et, ln(a, p)) : ((a.f & Et) !== 0 && (a.f ^= Et), ln(a, m)), d.deactivate());
    };
    c.promise.then(v, (m) => v(null, m || "unknown"));
  }), Gi(() => {
    for (const l of o)
      l.reject(_n);
  }), new Promise((l) => {
    function c(d) {
      function _() {
        d === i ? l(a) : c(i);
      }
      d.then(_, _);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Fr(e);
  return $i(t), t;
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ Fr(e);
  return t.equals = Ti, t;
}
function rs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ee(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ur(e) {
  var t, n = z, r = e.parent;
  if (!kt && r !== null && e.v !== oe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Ne | me)) !== 0)
    return Fa(), e.v;
  ot(r);
  try {
    e.f &= ~Bt, rs(e), t = ra(e);
  } finally {
    ot(n);
  }
  return t;
}
function Ni(e) {
  var t = Ur(e);
  if (!e.equals(t) && (e.wv = ta(), (!(M != null && M.is_fork) || e.deps === null) && (M !== null ? (M.capture(e, t, !0), xn == null || xn.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ne(e, fe);
    return;
  }
  kt || (de !== null ? (Br() || M != null && M.is_fork) && de.set(e, t) : Dr(e));
}
function is(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && In(() => {
        n.ac.abort(Mn), n.ac = null;
      }), n.fn !== null && (n.teardown = Ma), En(n, 0), jr(n));
}
function Oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && on(t);
}
let vr = null, Yt = null, M = null, xn = null, de = null, br = null, dr = !1, Zt = null, Vn = null;
var ii = 0;
let as = 1;
var Jt, bt, Ot, Qt, $t, en, ut, tn, xe, Sn, ct, Ke, tt, nn, Lt, W, xr, pn, yr, Li, Pi, Kt, ss, gn;
const $n = class $n {
  constructor() {
    O(this, W);
    Ae(this, "id", as++);
    /** True as soon as `#process` was called */
    O(this, Jt, !1);
    Ae(this, "linked", !0);
    /** @type {Batch | null} */
    O(this, bt, null);
    /** @type {Batch | null} */
    O(this, Ot, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ae(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ae(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ae(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, Qt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, $t, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    O(this, en, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    O(this, ut, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    O(this, tn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    O(this, xe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    O(this, Sn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    O(this, ct, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    O(this, Ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    O(this, tt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    O(this, nn, /* @__PURE__ */ new Set());
    Ae(this, "is_fork", !1);
    O(this, Lt, !1);
    Yt === null ? vr = Yt = this : (R(Yt, Ot, this), R(this, bt, Yt)), Yt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, tt).has(t) || u(this, tt).set(t, { d: [], m: [] }), u(this, nn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = u(this, tt).get(t);
    if (r) {
      u(this, tt).delete(t);
      for (var i of r.d)
        ne(i, ae), n(i);
      for (i of r.m)
        ne(i, $e), n(i);
    }
    u(this, nn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== oe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Et) === 0 && (this.current.set(t, [n, r]), de == null || de.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    M = this;
  }
  deactivate() {
    M = null, de = null;
  }
  flush() {
    try {
      dr = !0, M = this, F(this, W, pn).call(this);
    } finally {
      ii = 0, br = null, Zt = null, Vn = null, dr = !1, M = null, de = null, st.clear();
    }
  }
  discard() {
    var t;
    for (const n of u(this, $t)) n(this);
    u(this, $t).clear();
    for (const n of this.async_deriveds.values())
      n.reject(_n);
    F(this, W, gn).call(this), (t = u(this, tn)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    u(this, Sn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (R(this, en, u(this, en) + 1), t) {
      let r = u(this, ut).get(n) ?? 0;
      u(this, ut).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (R(this, en, u(this, en) - 1), t) {
      let r = u(this, ut).get(n) ?? 0;
      r === 1 ? u(this, ut).delete(n) : u(this, ut).set(n, r - 1);
    }
    u(this, Lt) || (R(this, Lt, !0), dt(() => {
      R(this, Lt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      u(this, ct).add(r);
    for (const r of n)
      u(this, Ke).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    u(this, Qt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    u(this, $t).add(t);
  }
  settled() {
    return (u(this, tn) ?? R(this, tn, Ei())).promise;
  }
  static ensure() {
    if (M === null) {
      const t = M = new $n();
      dr || dt(() => {
        u(t, Jt) || t.flush();
      });
    }
    return M;
  }
  apply() {
    {
      de = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (br = t, (i = t.b) != null && i.is_pending && (t.f & (an | rr | ki)) !== 0 && (t.f & fn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Zt !== null && n === z && (D === null || (D.f & ue) === 0))
        return;
      if ((r & (_t | je)) !== 0) {
        if ((r & fe) === 0)
          return;
        n.f ^= fe;
      }
    }
    u(this, xe).push(n);
  }
};
Jt = new WeakMap(), bt = new WeakMap(), Ot = new WeakMap(), Qt = new WeakMap(), $t = new WeakMap(), en = new WeakMap(), ut = new WeakMap(), tn = new WeakMap(), xe = new WeakMap(), Sn = new WeakMap(), ct = new WeakMap(), Ke = new WeakMap(), tt = new WeakMap(), nn = new WeakMap(), Lt = new WeakMap(), W = new WeakSet(), xr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, ut).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (u(this, tt).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, pn = function() {
  var l, c, d, _;
  R(this, Jt, !0), ii++ > 1e3 && (F(this, W, gn).call(this), ls());
  for (const v of u(this, ct))
    u(this, Ke).delete(v), ne(v, ae), this.schedule(v);
  for (const v of u(this, Ke))
    ne(v, $e), this.schedule(v);
  const t = u(this, xe);
  R(this, xe, []), this.apply();
  var n = Zt = [], r = [], i = Vn = [];
  for (const v of t)
    try {
      F(this, W, yr).call(this, v, n, r);
    } catch (h) {
      throw Ui(v), F(this, W, xr).call(this) || this.discard(), h;
    }
  if (M = null, i.length > 0) {
    var a = $n.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Zt = null, Vn = null, F(this, W, xr).call(this)) {
    F(this, W, Kt).call(this, r), F(this, W, Kt).call(this, n);
    for (const [v, h] of u(this, tt))
      Fi(v, h);
    i.length > 0 && /** @type {unknown} */
    F(l = M, W, pn).call(l);
    return;
  }
  const s = F(this, W, Li).call(this);
  if (s) {
    F(this, W, Kt).call(this, r), F(this, W, Kt).call(this, n), F(c = s, W, Pi).call(c, this);
    return;
  }
  u(this, ct).clear(), u(this, Ke).clear();
  for (const v of u(this, Qt)) v(this);
  u(this, Qt).clear(), xn = this, ai(r), ai(n), xn = null, (d = u(this, tn)) == null || d.resolve();
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    M
  );
  if (u(this, en) === 0 && (u(this, xe).length === 0 || o !== null) && F(this, W, gn).call(this), u(this, xe).length > 0)
    if (o !== null) {
      const v = o;
      u(v, xe).push(...u(this, xe).filter((h) => !u(v, xe).includes(h)));
    } else
      o = this;
  o !== null && (st.clear(), F(_ = o, W, pn).call(_));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
yr = function(t, n, r) {
  t.f ^= fe;
  for (var i = t.first; i !== null; ) {
    var a = i.f, s = (a & (je | _t)) !== 0, o = s && (a & fe) !== 0, l = o || (a & me) !== 0 || u(this, tt).has(i);
    if (!l && i.fn !== null) {
      s ? i.f ^= fe : (a & an) !== 0 ? n.push(i) : Ln(i) && ((a & Ze) !== 0 && u(this, Ke).add(i), on(i));
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
}, Li = function() {
  for (var t = u(this, bt); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = u(t, bt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Pi = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && a.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(u(t, ct), u(t, Ke));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & ue) !== 0 && (i.f & (ae | $e)) === 0))
      for (const l of a) {
        var s = l.f;
        if ((s & ue) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var o = (
            /** @type {Effect} */
            l
          );
          s & (Xt | Ze) && !this.async_deriveds.has(o) && (u(this, Ke).delete(o), ne(o, ae), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), F(r = t, W, gn).call(r), M = this, F(this, W, pn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Kt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Mi(t[n], u(this, ct), u(this, Ke));
}, ss = function() {
  var _;
  for (let v = vr; v !== null; v = u(v, Ot)) {
    var t = v.id < this.id, n = [];
    for (const [h, [g, m]] of this.current) {
      if (v.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && g !== r)
          v.current.set(h, [g, m]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, g] of this.async_deriveds) {
        const m = v.async_deriveds.get(h);
        m && g.promise.then(m.resolve).catch(m.reject);
      }
    var i = [...v.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      v.current.get(h)[1]
    );
    if (!(!u(v, Jt) || i.length === 0)) {
      var a = i.filter((h) => !this.current.has(h));
      if (a.length === 0)
        t && v.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of u(this, nn))
            v.unskip_effect(h, (g) => {
              var m;
              (g.f & (Ze | Xt)) !== 0 ? v.schedule(g) : F(m = v, W, Kt).call(m, [g]);
            });
        v.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var l of n)
          Di(l, a, s, o);
        o = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([h, g]) => {
          const m = this.current.get(h);
          return m ? m[0] !== g[0] || m[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of u(this, Sn))
            (h.f & (Ne | me | Wn)) === 0 && zr(h, c, o) && ((h.f & (Xt | Ze)) !== 0 ? (ne(h, ae), v.schedule(h)) : u(v, ct).add(h));
        if (u(v, xe).length > 0 && !u(v, Lt)) {
          v.apply();
          for (var d of u(v, xe))
            F(_ = v, W, yr).call(_, d, [], []);
          R(v, xe, []);
        }
        v.deactivate();
      }
    }
  }
}, gn = function() {
  if (this.linked) {
    var t = u(this, bt), n = u(this, Ot);
    t === null ? vr = n : R(t, Ot, n), n === null ? Yt = t : R(n, bt, t), this.linked = !1;
  }
};
let jt = $n;
function ls() {
  try {
    Ga();
  } catch (e) {
    it(e, br);
  }
}
let Ye = null;
function ai(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ne | me)) === 0 && Ln(r) && (Ye = /* @__PURE__ */ new Set(), on(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Xi(r), (Ye == null ? void 0 : Ye.size) > 0)) {
        st.clear();
        for (const i of Ye) {
          if ((i.f & (Ne | me)) !== 0) continue;
          const a = [i];
          let s = i.parent;
          for (; s !== null; )
            Ye.has(s) && (Ye.delete(s), a.push(s)), s = s.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (Ne | me)) === 0 && on(l);
          }
        }
        Ye.clear();
      }
    }
    Ye = null;
  }
}
function Di(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & ue) !== 0 ? Di(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Xt | Ze)) !== 0 && (a & ae) === 0 && zr(i, t, r) && (ne(i, ae), Hr(
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
      if (Yn.call(t, i))
        return !0;
      if ((i.f & ue) !== 0 && zr(
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
function Hr(e) {
  M.schedule(e);
}
function Fi(e, t) {
  if (!((e.f & je) !== 0 && (e.f & fe) !== 0)) {
    (e.f & ae) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), ne(e, fe);
    for (var n = e.first; n !== null; )
      Fi(n, t), n = n.next;
  }
}
function Ui(e) {
  ne(e, fe);
  for (var t = e.first; t !== null; )
    Ui(t), t = t.next;
}
let Jn = /* @__PURE__ */ new Set();
const st = /* @__PURE__ */ new Map();
let zi = !1;
function Vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ai,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const n = Vt(e);
  return $i(n), n;
}
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, n = !0) {
  const r = Vt(e);
  return t || (r.equals = Ti), r;
}
function y(e, t, n = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Je || (D.f & Wn) !== 0) && Ci() && (D.f & (ue | Ze | Xt | Wn)) !== 0 && (lt === null || !lt.has(e)) && Wa();
  let r = n ? He(t) : t;
  return ln(e, r, Vn);
}
function ln(e, t, n = null) {
  if (!e.equals(t)) {
    kt ? st.set(e, t) : st.has(e) || st.set(e, e.v);
    var r = jt.ensure();
    if (r.capture(e, t), (e.f & ue) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ae) !== 0 && Ur(i), de === null && Dr(i);
    }
    e.wv = ta(), Hi(e, ae, n), z !== null && (z.f & fe) !== 0 && (z.f & (je | _t)) === 0 && (Pe === null ? bs([e]) : Pe.push(e)), !r.is_fork && Jn.size > 0 && !zi && fs();
  }
  return t;
}
function fs() {
  zi = !1;
  for (const e of Jn) {
    (e.f & fe) !== 0 && ne(e, $e);
    let t;
    try {
      t = Ln(e);
    } catch {
      t = !0;
    }
    t && on(e);
  }
  Jn.clear();
}
function yn(e) {
  y(e, e.v + 1);
}
function Hi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var s = r[a], o = s.f, l = (o & ae) === 0;
      if (l && ne(s, t), (o & Wn) !== 0)
        Jn.add(
          /** @type {Effect} */
          s
        );
      else if ((o & ue) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        de == null || de.delete(c), (o & Bt) === 0 && (o & Be && (z === null || (z.f & Zn) === 0) && (s.f |= Bt), Hi(c, $e, n));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          s
        );
        (o & Ze) !== 0 && Ye !== null && Ye.add(d), n !== null ? n.push(d) : Hr(d);
      }
    }
}
function He(e) {
  if (typeof e != "object" || e === null || Bn in e || Si in e)
    return e;
  const t = yi(e);
  if (t !== Ca && t !== Ra)
    return e;
  var n = /* @__PURE__ */ new Map(), r = bi(e), i = /* @__PURE__ */ U(0), a = zt, s = (o) => {
    if (zt === a)
      return o();
    var l = D, c = zt;
    Ve(null), li(a);
    var d = o();
    return Ve(l), li(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ya();
        var d = n.get(l);
        return d === void 0 ? s(() => {
          var _ = /* @__PURE__ */ U(c.value);
          return n.set(l, _), _;
        }) : y(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = s(() => /* @__PURE__ */ U(oe));
            n.set(l, d), yn(i);
          }
        } else
          y(c, oe), yn(i);
        return !0;
      },
      get(o, l, c) {
        var h;
        if (l === Bn)
          return e;
        var d = n.get(l), _ = l in o;
        if (d === void 0 && (!_ || (h = bn(o, l)) != null && h.writable) && (d = s(() => {
          var g = He(_ ? o[l] : oe), m = /* @__PURE__ */ U(g);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var v = f(d);
          return v === oe ? void 0 : v;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = f(d));
        } else if (c === void 0) {
          var _ = n.get(l), v = _ == null ? void 0 : _.v;
          if (_ !== void 0 && v !== oe)
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
        if (l === Bn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== oe || Reflect.has(o, l);
        if (c !== void 0 || z !== null && (!d || (v = bn(o, l)) != null && v.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? He(o[l]) : oe, g = /* @__PURE__ */ U(h);
            return g;
          }), n.set(l, c));
          var _ = f(c);
          if (_ === oe)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var L;
        var _ = n.get(l), v = l in o;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? y(g, oe) : h in o && (g = s(() => /* @__PURE__ */ U(oe)), n.set(h + "", g));
          }
        if (_ === void 0)
          (!v || (L = bn(o, l)) != null && L.writable) && (_ = s(() => /* @__PURE__ */ U(void 0)), y(_, He(c)), n.set(l, _));
        else {
          v = _.v !== oe;
          var m = s(() => He(c));
          y(_, m);
        }
        var p = Reflect.getOwnPropertyDescriptor(o, l);
        if (p != null && p.set && p.set.call(d, c), !v) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), G = Number(l);
            Number.isInteger(G) && G >= b.v && y(b, G + 1);
          }
          yn(i);
        }
        return !0;
      },
      ownKeys(o) {
        f(i);
        var l = Reflect.ownKeys(o).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== oe;
        });
        for (var [c, d] of n)
          d.v !== oe && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ka();
      }
    }
  );
}
var Er, Bi, ji, Vi;
function us() {
  if (Er === void 0) {
    Er = window, Bi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ji = bn(t, "firstChild").get, Vi = bn(t, "nextSibling").get, ni(e) && (e[wr] = void 0, e[jn] = null, e[Pa] = void 0, e.__e = void 0), ni(n) && (n[hn] = void 0);
  }
}
function ht(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return (
    /** @type {TemplateNode | null} */
    ji.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return (
    /** @type {TemplateNode | null} */
    Vi.call(e)
  );
}
function q(e, t) {
  return /* @__PURE__ */ qt(e);
}
function Ie(e, t = !1) {
  {
    var n = /* @__PURE__ */ qt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Nn(n) : n;
  }
}
function ee(e, t = !1) {
  return /* @__PURE__ */ qt(e);
}
function A(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Nn(r);
  return r;
}
function cs(e) {
  e.textContent = "";
}
function qi() {
  return !1;
}
function vs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function ds(e) {
  var t = z;
  if (t === null)
    return D.f |= Et, e;
  if ((t.f & fn) === 0 && (t.f & an) === 0)
    throw e;
  it(e, t);
}
function it(e, t) {
  if (!(t !== null && (t.f & Ne) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & mr) !== 0 && (t.f & (Ne | Kn)) === 0) {
        if ((t.f & fn) === 0)
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
function hs(e) {
  z === null && (D === null && qa(), Va()), kt && ja();
}
function _s(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pt(e, t) {
  var n = z;
  n !== null && (n.f & me) !== 0 && (e |= me);
  var r = {
    ctx: we,
    deps: null,
    nodes: null,
    f: e | ae | Be,
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
  if ((e & an) !== 0)
    Zt !== null ? Zt.push(r) : jt.ensure().schedule(r);
  else if (t !== null) {
    try {
      on(r);
    } catch (s) {
      throw Ee(r), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & un) === 0 && (i = i.first, (e & Ze) !== 0 && (e & Ht) !== 0 && i !== null && (i.f |= Ht));
  }
  if (i !== null && (i.parent = n, n !== null && _s(i, n), D !== null && (D.f & ue) !== 0 && (e & _t) === 0)) {
    var a = (
      /** @type {Derived} */
      D
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Br() {
  return D !== null && !Je;
}
function Gi(e) {
  const t = pt(rr, null);
  return ne(t, fe), t.teardown = e, t;
}
function ir(e) {
  hs();
  var t = (
    /** @type {Effect} */
    z.f
  ), n = !D && (t & je) !== 0 && we !== null && !we.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      we
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Yi(e);
}
function Yi(e) {
  return pt(an | Oa, e);
}
function ps(e) {
  jt.ensure();
  const t = pt(_t | un, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ut(t, () => {
      Ee(t), r(void 0);
    }) : (Ee(t), r(void 0));
  });
}
function Ki(e) {
  return pt(an, e);
}
function gs(e) {
  return pt(Xt | un, e);
}
function Wi(e, t = 0) {
  return pt(rr | t, e);
}
function K(e, t = [], n = [], r = []) {
  $a(r, t, n, (i) => {
    pt(rr, () => {
      e(...i.map(f));
    });
  });
}
function On(e, t = 0) {
  var n = pt(Ze | t, e);
  return n;
}
function ze(e) {
  return pt(je | un, e);
}
function Zi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = kt, r = D;
    si(!0), Ve(null);
    try {
      t.call(null);
    } catch (i) {
      it(i, e.parent);
    } finally {
      si(n), Ve(r);
    }
  }
}
function jr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && In(() => {
      i.abort(Mn);
    });
    var r = n.next;
    (n.f & _t) !== 0 ? n.parent = null : Ee(n, t), n = r;
  }
}
function ms(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & je) === 0 && Ee(t), t = n;
  }
}
function Ee(e, t = !0) {
  var n = !1;
  (t || (e.f & Na) !== 0) && e.nodes !== null && e.nodes.end !== null && (ws(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Kn, jr(e, t && !n), En(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Zi(e), e.f ^= Kn, e.f |= Ne;
  var i = e.parent;
  i !== null && i.first !== null && Xi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ws(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Nn(e);
    e.remove(), e = n;
  }
}
function Xi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ut(e, t, n = !0) {
  var r = [];
  e.f |= Lr, Ji(e, r, !0);
  var i = () => {
    n && Ee(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var s = () => --a || i();
    for (var o of r)
      o.out(s);
  } else
    i();
}
function Ji(e, t, n) {
  if ((e.f & me) === 0) {
    e.f ^= me;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & _t) === 0) {
        var s = (i.f & Ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & je) !== 0 && (e.f & Ze) !== 0;
        Ji(i, t, s ? n : !1);
      }
      i = a;
    }
  }
}
function Qn(e) {
  e.f &= ~Lr, Qi(e, !0);
}
function Qi(e, t) {
  if ((e.f & Lr) === 0 && (e.f & me) !== 0) {
    e.f ^= me, (e.f & fe) === 0 && (ne(e, ae), jt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ht) !== 0 || (n.f & je) !== 0;
      Qi(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || t) && s.in();
  }
}
function Vr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Nn(n);
      t.append(n), n = i;
    }
}
let qn = !1, kt = !1;
function si(e) {
  kt = e;
}
let D = null, Je = !1;
function Ve(e) {
  D = e;
}
let z = null;
function ot(e) {
  z = e;
}
let lt = null;
function $i(e) {
  D !== null && (lt ?? (lt = /* @__PURE__ */ new Set())).add(e);
}
let ye = null, Me = 0, Pe = null;
function bs(e) {
  Pe = e;
}
let ea = 1, It = 0, zt = It;
function li(e) {
  zt = e;
}
function ta() {
  return ++ea;
}
function Ln(e) {
  var t = e.f;
  if ((t & ae) !== 0)
    return !0;
  if (t & ue && (e.f &= ~Bt), (t & $e) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Ln(
        /** @type {Derived} */
        a
      ) && Ni(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Be) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    de === null && ne(e, fe);
  }
  return !1;
}
function na(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(lt !== null && lt.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & ue) !== 0 ? na(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ne(a, ae) : (a.f & fe) !== 0 && ne(a, $e), Hr(
        /** @type {Effect} */
        a
      ));
    }
}
function ra(e) {
  var t = ye, n = Me, r = Pe, i = D, a = lt, s = we, o = Je, l = zt, c = e.f;
  ye = /** @type {null | Value[]} */
  null, Me = 0, Pe = null, D = (c & (je | _t)) === 0 ? e : null, lt = null, sn(e.ctx), Je = !1, zt = ++It, e.ac !== null && (In(() => {
    e.ac.abort(Mn);
  }), e.ac = null);
  try {
    e.f |= Zn;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= fn;
    var v = oi(e);
    if (Ci() && Pe !== null && !Je && v !== null && (e.f & (ue | $e | ae)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Pe.length; h++)
        na(
          Pe[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (It++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = It;
      if (t !== null)
        for (const g of t)
          g.rv = It;
      Pe !== null && (r === null ? r = Pe : r.push(.../** @type {Source[]} */
      Pe));
    }
    return (e.f & Et) !== 0 && (e.f ^= Et), _;
  } catch (g) {
    return oi(e), ds(g);
  } finally {
    e.f ^= Zn, ye = t, Me = n, Pe = r, D = i, lt = a, sn(s), Je = o, zt = l;
  }
}
function oi(e) {
  var i;
  var t = e.deps, n = M == null ? void 0 : M.is_fork;
  if (ye !== null) {
    var r;
    if (n || En(e, Me), t !== null && Me > 0)
      for (t.length = Me + ye.length, r = 0; r < ye.length; r++)
        t[Me + r] = ye[r];
    else
      e.deps = t = ye;
    if (Br() && (e.f & Be) !== 0)
      for (r = Me; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Me < t.length && (En(e, Me), t.length = Me);
  return t;
}
function xs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Aa.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ue) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ye === null || !Yn.call(ye, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Be) !== 0 && (a.f ^= Be, a.f &= ~Bt), a.v !== oe && Dr(a), a.ac !== null && In(() => {
      a.ac.abort(Mn), a.ac = null, ne(a, ae);
    }), is(a), En(a, 0);
  }
}
function En(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      xs(e, n[r]);
}
function on(e) {
  var t = e.f;
  if ((t & Ne) === 0) {
    ne(e, fe);
    var n = z, r = qn;
    z = e, qn = (t & (je | _t)) === 0;
    try {
      (t & (Ze | ki)) !== 0 ? ms(e) : jr(e), Zi(e);
      var i = ra(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ea;
      var a;
      wi && Xa && (e.f & ae) !== 0 && e.deps;
    } finally {
      qn = r, z = n;
    }
  }
}
function f(e) {
  var t = e.f, n = (t & ue) !== 0;
  if (D !== null && !Je) {
    var r = z !== null && (z.f & Ne) !== 0;
    if (!r && (lt === null || !lt.has(e))) {
      var i = D.deps;
      if ((D.f & Zn) !== 0)
        e.rv < It && (e.rv = It, ye === null && i !== null && i[Me] === e ? Me++ : ye === null ? ye = [e] : ye.push(e));
      else {
        D.deps ?? (D.deps = []), Yn.call(D.deps, e) || D.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [D] : Yn.call(a, D) || a.push(D);
      }
    }
  }
  if (kt && st.has(e))
    return st.get(e);
  if (n) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (kt) {
      var o = s.v;
      return ((s.f & fe) === 0 && s.reactions !== null || aa(s)) && (o = Ur(s)), st.set(s, o), o;
    }
    var l = (s.f & Be) === 0 && !Je && D !== null && (qn || (D.f & Be) !== 0), c = (s.f & fn) === 0;
    Ln(s) && (l && (s.f |= Be), Ni(s)), l && !c && (Oi(s), ia(s));
  }
  if (de != null && de.has(e))
    return de.get(e);
  if ((e.f & Et) !== 0)
    throw e.v;
  return e.v;
}
function ia(e) {
  if (e.f |= Be, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ue) !== 0 && (t.f & Be) === 0 && (Oi(
        /** @type {Derived} */
        t
      ), ia(
        /** @type {Derived} */
        t
      ));
}
function aa(e) {
  if (e.v === oe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (st.has(t) || (t.f & ue) !== 0 && aa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ar(e) {
  var t = Je;
  try {
    return Je = !0, e();
  } finally {
    Je = t;
  }
}
const Nt = Symbol("events"), sa = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function ys(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || Sr.call(t, a), !a.cancelBubble)
      return In(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? dt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function la(e, t, n, r, i) {
  var a = { capture: r, passive: i }, s = ys(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Gi(() => {
    t.removeEventListener(e, s, a);
  });
}
function he(e, t, n) {
  (t[Nt] ?? (t[Nt] = {}))[e] = n;
}
function sr(e) {
  for (var t = 0; t < e.length; t++)
    sa.add(e[t]);
  for (var n of kr)
    n(e);
}
let hr = null, _r = !1;
function Sr(e) {
  var m, p;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  hr = e, _r || (_r = !0, setTimeout(() => {
    _r = !1, hr = null;
  }));
  var s = 0, o = hr === e && e[Nt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Nt] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    xi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = D, _ = z;
    Ve(null), ot(null);
    try {
      for (var v, h = []; a !== null && a !== t; ) {
        try {
          var g = (p = a[Nt]) == null ? void 0 : p[r];
          g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && g.call(a, e);
        } catch (b) {
          v ? h.push(b) : v = b;
        }
        if (e.cancelBubble) break;
        s++, a = s < i.length ? (
          /** @type {Element} */
          i[s]
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
      e[Nt] = t, delete e.currentTarget, Ve(d), ot(_);
    }
  }
}
var gi;
const pr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((gi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : gi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Es(e) {
  return (
    /** @type {string} */
    (pr == null ? void 0 : pr.createHTML(e)) ?? e
  );
}
function oa(e) {
  var t = vs("template");
  return t.innerHTML = Es(e.replaceAll("<!>", "<!---->")), t.content;
}
function kn(e, t) {
  var n = (
    /** @type {Effect} */
    z
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = oa(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Bi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      kn(o, l);
    } else
      kn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ks(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        oa(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ qt(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qt(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return kn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function fa(e, t) {
  return /* @__PURE__ */ ks(e, t, "svg");
}
function Un(e = "") {
  {
    var t = ht(e + "");
    return kn(t, t), t;
  }
}
function Pn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ht();
  return e.append(t, n), kn(t, n), e;
}
function x(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ss = ["touchstart", "touchmove"];
function As(e) {
  return Ss.includes(e);
}
function Ts(e) {
  let t = 0, n = Vt(0), r;
  return () => {
    Br() && (f(n), Wi(() => (t === 0 && (r = ar(() => e(() => yn(n)))), t += 1, () => {
      dt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, yn(n));
      });
    })));
  };
}
var Cs = Ht | un;
function Rs(e, t, n, r) {
  new Ms(e, t, n, r);
}
var De, Or, Fe, Pt, pe, Te, ge, Ce, nt, Dt, xt, rn, An, Tn, vt, er, J, Is, Ns, Ar, Os, Tr, mn, Gn, Cr, Rr;
class Ms {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    O(this, J);
    /** @type {Boundary | null} */
    Ae(this, "parent");
    Ae(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ae(this, "transform_error");
    /** @type {TemplateNode} */
    O(this, De);
    /** @type {TemplateNode | null} */
    O(this, Or, null);
    /** @type {BoundaryProps} */
    O(this, Fe);
    /** @type {((anchor: Node) => void)} */
    O(this, Pt);
    /** @type {Effect} */
    O(this, pe);
    /** @type {Effect | null} */
    O(this, Te, null);
    /** @type {Effect | null} */
    O(this, ge, null);
    /** @type {Effect | null} */
    O(this, Ce, null);
    /** @type {DocumentFragment | null} */
    O(this, nt, null);
    O(this, Dt, 0);
    O(this, xt, 0);
    O(this, rn, !1);
    /** @type {Set<Effect>} */
    O(this, An, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    O(this, Tn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    O(this, vt, null);
    O(this, er, Ts(() => (R(this, vt, Vt(u(this, Dt))), () => {
      R(this, vt, null);
    })));
    var a;
    R(this, De, t), R(this, Fe, n), R(this, Pt, (s) => {
      var o = (
        /** @type {Effect} */
        z
      );
      o.b = this, o.f |= mr, r(s);
    }), this.parent = /** @type {Effect} */
    z.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), R(this, pe, On(() => {
      F(this, J, Tr).call(this);
    }, Cs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Mi(t, u(this, An), u(this, Tn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, Fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    F(this, J, Cr).call(this, t, n), R(this, Dt, u(this, Dt) + t), !(!u(this, vt) || u(this, rn)) && (R(this, rn, !0), dt(() => {
      R(this, rn, !1), u(this, vt) && ln(u(this, vt), u(this, Dt));
    }));
  }
  get_effect_pending() {
    return u(this, er).call(this), f(
      /** @type {Source<number>} */
      u(this, vt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!u(this, Fe).onerror && !u(this, Fe).failed)
      throw t;
    M != null && M.is_fork ? (u(this, Te) && M.skip_effect(u(this, Te)), u(this, ge) && M.skip_effect(u(this, ge)), u(this, Ce) && M.skip_effect(u(this, Ce)), M.oncommit(() => {
      F(this, J, Rr).call(this, t);
    })) : F(this, J, Rr).call(this, t);
  }
}
De = new WeakMap(), Or = new WeakMap(), Fe = new WeakMap(), Pt = new WeakMap(), pe = new WeakMap(), Te = new WeakMap(), ge = new WeakMap(), Ce = new WeakMap(), nt = new WeakMap(), Dt = new WeakMap(), xt = new WeakMap(), rn = new WeakMap(), An = new WeakMap(), Tn = new WeakMap(), vt = new WeakMap(), er = new WeakMap(), J = new WeakSet(), Is = function() {
  try {
    R(this, Te, ze(() => u(this, Pt).call(this, u(this, De))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ns = function(t) {
  const n = u(this, Fe).failed, { reset: r, invoke_onerror: i } = F(this, J, Ar).call(this, t);
  dt(i), n && R(this, Ce, ze(() => {
    n(
      u(this, De),
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
      Ua();
      return;
    }
    n = !0, r && Za(), u(this, Ce) !== null && Ut(u(this, Ce), () => {
      R(this, Ce, null);
    }), F(this, J, Gn).call(this, () => {
      F(this, J, Tr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var s, o;
    try {
      r = !0, (o = (s = u(this, Fe)).onerror) == null || o.call(s, t, i), r = !1;
    } catch (l) {
      it(l, u(this, pe) && u(this, pe).parent);
    }
  } };
}, Os = function() {
  const t = u(this, Fe).pending;
  t && (this.is_pending = !0, R(this, ge, ze(() => t(u(this, De)))), dt(() => {
    var n = R(this, nt, document.createDocumentFragment()), r = ht(), i = !1;
    if (n.append(r), R(this, Te, F(this, J, Gn).call(this, () => {
      try {
        return ze(() => u(this, Pt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (s) {
          it(s, u(this, pe).parent);
        }
        return null;
      }
    })), u(this, Te) === null) {
      R(this, nt, null), i && F(this, J, mn).call(
        this,
        /** @type {Batch} */
        M
      );
      return;
    }
    u(this, xt) === 0 && (u(this, De).before(n), R(this, nt, null), Ut(
      /** @type {Effect} */
      u(this, ge),
      () => {
        R(this, ge, null);
      }
    ), F(this, J, mn).call(
      this,
      /** @type {Batch} */
      M
    ));
  }));
}, Tr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), R(this, xt, 0), R(this, Dt, 0), R(this, Te, ze(() => {
      u(this, Pt).call(this, u(this, De));
    })), u(this, xt) > 0) {
      var t = R(this, nt, document.createDocumentFragment());
      Vr(u(this, Te), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, Fe).pending
      );
      R(this, ge, ze(() => n(u(this, De))));
    } else
      F(this, J, mn).call(
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
mn = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, An), u(this, Tn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Gn = function(t) {
  var n = z, r = D, i = we;
  ot(u(this, pe)), Ve(u(this, pe)), sn(u(this, pe).ctx);
  try {
    return jt.ensure(), t();
  } finally {
    ot(n), Ve(r), sn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Cr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && F(r = this.parent, J, Cr).call(r, t, n);
    return;
  }
  R(this, xt, u(this, xt) + t), u(this, xt) === 0 && (F(this, J, mn).call(this, n), u(this, ge) && Ut(u(this, ge), () => {
    R(this, ge, null);
  }), u(this, nt) && (u(this, De).before(u(this, nt)), R(this, nt, null)));
}, /**
 * @param {unknown} error
 */
Rr = function(t) {
  u(this, Te) && (Ee(u(this, Te)), R(this, Te, null)), u(this, ge) && (Ee(u(this, ge)), R(this, ge, null)), u(this, Ce) && (Ee(u(this, Ce)), R(this, Ce, null));
  let n = u(this, Fe).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: s } = F(this, J, Ar).call(this, i);
    s(), n && R(this, Ce, F(this, J, Gn).call(this, () => {
      try {
        return ze(() => {
          var o = (
            /** @type {Effect} */
            z
          );
          o.b = this, o.f |= mr, n(
            u(this, De),
            () => i,
            () => a
          );
        });
      } catch (o) {
        return it(
          o,
          /** @type {Effect} */
          u(this, pe).parent
        ), null;
      }
    }));
  };
  dt(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (a) {
      it(a, u(this, pe) && u(this, pe).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => it(a, u(this, pe) && u(this, pe).parent)
    ) : r(i);
  });
};
function Z(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[hn] ?? (e[hn] = e.nodeValue)) && (e[hn] = n, e.nodeValue = `${n}`);
}
function Ls(e, t) {
  return Ps(e, t);
}
const zn = /* @__PURE__ */ new Map();
function Ps(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: o }) {
  us();
  var l = void 0, c = ps(() => {
    var d = n ?? t.appendChild(ht());
    Rs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        St({});
        var g = (
          /** @type {ComponentContext} */
          we
        );
        a && (g.c = a), i && (r.$$events = i), l = e(h, r) || Pr(), At();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var g = 0; g < h.length; g++) {
        var m = h[g];
        if (!_.has(m)) {
          _.add(m);
          var p = As(m);
          for (const L of [t, document]) {
            var b = zn.get(L);
            b === void 0 && (b = /* @__PURE__ */ new Map(), zn.set(L, b));
            var G = b.get(m);
            G === void 0 ? (L.addEventListener(m, Sr, { passive: p }), b.set(m, 1)) : b.set(m, G + 1);
          }
        }
      }
    };
    return v(nr(sa)), kr.add(v), () => {
      var p;
      for (var h of _)
        for (const b of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            zn.get(b)
          ), m = (
            /** @type {number} */
            g.get(h)
          );
          --m == 0 ? (b.removeEventListener(h, Sr), g.delete(h), g.size === 0 && zn.delete(b)) : g.set(h, m);
        }
      kr.delete(v), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return Mr.set(l, c), l;
}
let Mr = /* @__PURE__ */ new WeakMap();
function Ds(e, t) {
  const n = Mr.get(e);
  return n ? (Mr.delete(e), n(t)) : Promise.resolve();
}
var We, rt, Re, Ft, Cn, Rn, tr;
class qr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Ae(this, "anchor");
    /** @type {Map<Batch, Key>} */
    O(this, We, /* @__PURE__ */ new Map());
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
    O(this, rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    O(this, Re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    O(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    O(this, Cn, !0);
    /**
     * @param {Batch} batch
     */
    O(this, Rn, (t) => {
      if (u(this, We).has(t)) {
        var n = (
          /** @type {Key} */
          u(this, We).get(t)
        ), r = u(this, rt).get(n);
        if (r)
          Qn(r), u(this, Ft).delete(n);
        else {
          var i = u(this, Re).get(n);
          i && (Qn(i.effect), u(this, rt).set(n, i.effect), u(this, Re).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, s] of u(this, We)) {
          if (u(this, We).delete(a), a === t)
            break;
          const o = u(this, Re).get(s);
          o && (Ee(o.effect), u(this, Re).delete(s));
        }
        for (const [a, s] of u(this, rt)) {
          if (a === n || u(this, Ft).has(a)) continue;
          const o = () => {
            if (Array.from(u(this, We).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Vr(s, c), c.append(ht()), u(this, Re).set(a, { effect: s, fragment: c });
            } else
              Ee(s);
            u(this, Ft).delete(a), u(this, rt).delete(a);
          };
          u(this, Cn) || !r ? (u(this, Ft).add(a), Ut(s, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    O(this, tr, (t) => {
      u(this, We).delete(t);
      const n = Array.from(u(this, We).values());
      for (const [r, i] of u(this, Re))
        n.includes(r) || (Ee(i.effect), u(this, Re).delete(r));
    });
    this.anchor = t, R(this, Cn, n);
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
    ), i = qi();
    if (n && !u(this, rt).has(t) && !u(this, Re).has(t))
      if (i) {
        var a = document.createDocumentFragment(), s = ht();
        a.append(s), u(this, Re).set(t, {
          effect: ze(() => n(s)),
          fragment: a
        });
      } else
        u(this, rt).set(
          t,
          ze(() => n(this.anchor))
        );
    if (u(this, We).set(r, t), i) {
      for (const [o, l] of u(this, rt))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of u(this, Re))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Rn)), r.ondiscard(u(this, tr));
    } else
      u(this, Rn).call(this, r);
  }
}
We = new WeakMap(), rt = new WeakMap(), Re = new WeakMap(), Ft = new WeakMap(), Cn = new WeakMap(), Rn = new WeakMap(), tr = new WeakMap();
function Fs(e, t, ...n) {
  var r = new qr(e);
  On(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Ht);
}
function H(e, t, n = !1) {
  var r = new qr(e), i = n ? Ht : 0;
  function a(s, o) {
    r.ensure(s, o);
  }
  On(() => {
    var s = !1;
    t((o, l = 0) => {
      s = !0, a(l, o);
    }), s || a(-1, null);
  }, i);
}
const Us = Symbol("NaN");
function ua(e, t, n) {
  var r = new qr(e);
  On(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Us), r.ensure(i, n);
  });
}
function Gr(e, t) {
  return t;
}
function zs(e, t, n) {
  for (var r = [], i = t.length, a, s = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    Ut(
      _,
      () => {
        if (a) {
          if (a.pending.delete(_), a.done.add(_), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ir(e, nr(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      cs(d), d.append(c), e.items.clear();
    }
    Ir(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Ir(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const s of e.pending.values())
      for (const o of s)
        r.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (r != null && r.has(a)) {
      a.f |= at;
      const s = document.createDocumentFragment();
      Vr(a, s);
    } else
      Ee(t[i], n);
  }
}
var fi;
function Qe(e, t, n, r, i, a = null) {
  var s = e, o = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(ht());
  }
  var d = null, _ = /* @__PURE__ */ ns(() => {
    var L = n();
    return (
      /** @type {V[]} */
      bi(L) ? L : L == null ? [] : nr(L)
    );
  }), v, h = /* @__PURE__ */ new Map(), g = !0;
  function m(L) {
    (G.effect.f & Ne) === 0 && (G.pending.delete(L), G.fallback = d, Hs(G, v, s, t, r), d !== null && (v.length === 0 ? (d.f & at) === 0 ? Qn(d) : (d.f ^= at, wn(d, null, s)) : Ut(d, () => {
      d = null;
    })));
  }
  function p(L) {
    G.pending.delete(L);
  }
  var b = On(() => {
    v = /** @type {V[]} */
    f(_);
    for (var L = v.length, j = /* @__PURE__ */ new Set(), re = (
      /** @type {Batch} */
      M
    ), ce = qi(), te = 0; te < L; te += 1) {
      var E = v[te], S = r(E, te), N = g ? null : o.get(S);
      N ? (N.v && ln(N.v, E), N.i && ln(N.i, te), ce && re.unskip_effect(N.e)) : (N = Bs(
        o,
        g ? s : fi ?? (fi = ht()),
        E,
        S,
        te,
        i,
        t,
        n
      ), g || (N.e.f |= at), o.set(S, N)), j.add(S);
    }
    if (L === 0 && a && !d && (g ? d = ze(() => a(s)) : (d = ze(() => a(fi ?? (fi = ht()))), d.f |= at)), L > j.size && Ba(), !g)
      if (h.set(re, j), ce) {
        for (const [Q, ve] of o)
          j.has(Q) || re.skip_effect(ve.e);
        re.oncommit(m), re.ondiscard(p);
      } else
        m(re);
    f(_);
  }), G = { effect: b, items: o, pending: h, outrogroups: null, fallback: d };
  g = !1;
}
function dn(e) {
  for (; e !== null && (e.f & je) === 0; )
    e = e.next;
  return e;
}
function Hs(e, t, n, r, i) {
  var N, Q, ve, V, w, I, $, se, be;
  var a = (r & 8) !== 0, s = t.length, o = e.items, l = dn(e.effect.first), c, d = null, _, v = [], h = [], g, m, p, b;
  if (a)
    for (b = 0; b < s; b += 1)
      g = t[b], m = i(g, b), p = /** @type {EachItem} */
      o.get(m).e, (p.f & at) === 0 && ((Q = (N = p.nodes) == null ? void 0 : N.a) == null || Q.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (b = 0; b < s; b += 1) {
    if (g = t[b], m = i(g, b), p = /** @type {EachItem} */
    o.get(m).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(p), Y.done.delete(p);
    if ((p.f & me) !== 0 && (Qn(p), a && ((V = (ve = p.nodes) == null ? void 0 : ve.a) == null || V.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), (p.f & at) !== 0)
      if (p.f ^= at, p === l)
        wn(p, null, n);
      else {
        var G = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), wt(e, d, p), wt(e, p, G), wn(p, G, n), d = p, v = [], h = [], l = dn(d.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (v.length < h.length) {
          var L = h[0], j;
          d = L.prev;
          var re = v[0], ce = v[v.length - 1];
          for (j = 0; j < v.length; j += 1)
            wn(v[j], L, n);
          for (j = 0; j < h.length; j += 1)
            c.delete(h[j]);
          wt(e, re.prev, ce.next), wt(e, d, re), wt(e, ce, L), l = L, d = ce, b -= 1, v = [], h = [];
        } else
          c.delete(p), wn(p, l, n), wt(e, p.prev, p.next), wt(e, p, d === null ? e.effect.first : d.next), wt(e, d, p), d = p;
        continue;
      }
      for (v = [], h = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), h.push(l), l = dn(l.next);
      if (l === null)
        continue;
    }
    (p.f & at) === 0 && v.push(p), d = p, l = dn(p.next);
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (Ir(e, nr(Y.done)), (w = e.outrogroups) == null || w.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var te = [];
    if (c !== void 0)
      for (p of c)
        (p.f & me) === 0 && te.push(p);
    for (; l !== null; )
      (l.f & me) === 0 && l !== e.fallback && te.push(l), l = dn(l.next);
    var E = te.length;
    if (E > 0) {
      var S = (r & 4) !== 0 && s === 0 ? n : null;
      if (a) {
        for (b = 0; b < E; b += 1)
          ($ = (I = te[b].nodes) == null ? void 0 : I.a) == null || $.measure();
        for (b = 0; b < E; b += 1)
          (be = (se = te[b].nodes) == null ? void 0 : se.a) == null || be.fix();
      }
      zs(e, te, S);
    }
  }
  a && dt(() => {
    var Y, k;
    if (_ !== void 0)
      for (p of _)
        (k = (Y = p.nodes) == null ? void 0 : Y.a) == null || k.apply();
  });
}
function Bs(e, t, n, r, i, a, s, o) {
  var l = (s & 1) !== 0 ? (s & 16) === 0 ? /* @__PURE__ */ os(n, !1, !1) : Vt(n) : null, c = (s & 2) !== 0 ? Vt(i) : null;
  return {
    v: l,
    i: c,
    e: ze(() => (a(t, l ?? n, c ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function wn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & at) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nn(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function wt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function js(e, t, n) {
  Ki(() => {
    var r = ar(() => t(e, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const ui = [...` 	
\r\f \v\uFEFF`];
function Vs(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var o = s + a;
          (s === 0 || ui.includes(r[s - 1])) && (o === r.length || ui.includes(r[o])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(o + 1) : s = o;
        }
  }
  return r === "" ? null : r;
}
function Hn(e, t, n, r, i, a) {
  var s = (
    /** @type {any} */
    e[wr]
  );
  if (s !== n || s === void 0) {
    var o = Vs(n, r, a);
    o == null ? e.removeAttribute("class") : e.className = o, e[wr] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return a;
}
const qs = Symbol("is custom element"), Gs = Symbol("is html"), Ys = Da ? "progress" : "PROGRESS";
function Ks(e, t) {
  var n = ca(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ys) || (e.value = t ?? "");
}
function Ue(e, t, n, r) {
  var i = ca(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[La] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ws(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function ca(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[jn] ?? (e[jn] = {
      [qs]: e.nodeName.includes("-"),
      [Gs]: e.namespaceURI === Sa
    })
  );
}
var ci = /* @__PURE__ */ new Map();
function Ws(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ci.get(t);
  if (n) return n;
  ci.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Ta(i);
    for (var s in r)
      r[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    i = yi(i);
  }
  return n;
}
function gr(e, t) {
  return e === t || (e == null ? void 0 : e[Bn]) === t;
}
function Zs(e = Pr(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    we.r
  ), a = (
    /** @type {Effect} */
    z
  );
  return Ki(() => {
    var s, o;
    return Wi(() => {
      s = o, o = [], ar(() => {
        gr(n(...o), e) || (t(e, ...o), s && gr(n(...s), e) && t(null, ...s));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & Kn; )
        l = l.parent;
      const c = () => {
        o && gr(n(...o), e) && t(null, ...o);
      }, d = l.teardown;
      l.teardown = () => {
        c(), d == null || d();
      };
    };
  }), e;
}
function yt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), a = !0, s = () => (a && (a = !1, i = /** @type {V} */
  r), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = s());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? s() : (a = !0, c);
  }, l;
}
const Xs = "5";
var mi;
typeof window < "u" && ((mi = window.__svelte ?? (window.__svelte = {})).v ?? (mi.v = /* @__PURE__ */ new Set())).add(Xs);
let Dn = "";
function Js(e) {
  Dn = e;
}
async function Tt(e, t) {
  const n = new URL(`${Dn}${e}`, window.location.origin);
  for (const [r, i] of Object.entries(t ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const va = (e) => Tt("/accounts", e), Qs = () => Tt("/rails"), $s = (e) => Tt(`/accounts/${encodeURIComponent(e)}`), el = (e) => Tt(`/accounts/${encodeURIComponent(e)}/similar`), tl = (e, t, n) => Tt(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), nl = (e, t, n) => Tt(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), rl = (e, t, n) => Tt(`/accounts/${encodeURIComponent(e)}/images`, { site: t, page: n }), il = (e, t) => Tt(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), al = (e, t, n) => `${Dn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, vi = (e, t, n, r, i = !1) => `${Dn}/photo?site=${encodeURIComponent(e)}&handle=${encodeURIComponent(t)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, di = (e, t, n = 0) => `${Dn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var sl = /* @__PURE__ */ C('<img loading="lazy"/>'), ll = /* @__PURE__ */ C('<span class="ofx-initials"> </span>');
function Yr(e, t) {
  St(t, !0);
  let n = yt(t, "src", 3, null), r = yt(t, "alt", 3, ""), i = yt(t, "name", 3, ""), a = /* @__PURE__ */ U(!1);
  const s = /* @__PURE__ */ Xe(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var v;
    return ((v = _[0]) == null ? void 0 : v.toUpperCase()) ?? "";
  }).join(""));
  var o = Pn(), l = Ie(o);
  {
    var c = (_) => {
      var v = sl();
      K(() => {
        Ue(v, "src", n()), Ue(v, "alt", r());
      }), la("error", v, () => y(a, !0)), x(_, v);
    }, d = (_) => {
      var v = ll(), h = ee(v, !0);
      K(() => Z(h, f(s))), x(_, v);
    };
    H(l, (_) => {
      n() && !f(a) ? _(c) : _(d, -1);
    });
  }
  x(e, o), At();
}
var ol = /* @__PURE__ */ C('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function da(e, t) {
  St(t, !0);
  var n = ol(), r = q(n), i = q(r);
  Yr(i, {
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
  var a = A(r, 2), s = ee(a, !0), o = A(a, 2), l = ee(o);
  K(() => {
    Ue(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), Ue(a, "title", t.account.display_name), Z(s, t.account.display_name), Z(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), he("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), x(e, n), At();
}
sr(["click"]);
var fl = /* @__PURE__ */ C('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), ul = /* @__PURE__ */ C('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), cl = /* @__PURE__ */ C('<span class="ofx-note"> </span>'), vl = /* @__PURE__ */ C('<div class="ofx-rail-actions"><!></div>'), dl = /* @__PURE__ */ C('<div class="ofx-rail-item"><!></div>'), hl = /* @__PURE__ */ C('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Nr(e, t) {
  St(t, !0);
  let n = yt(t, "note", 3, ""), r = yt(t, "order", 3, null), i = yt(t, "fetcher", 3, null), a = yt(t, "size", 3, 20), s = /* @__PURE__ */ U(He([])), o = /* @__PURE__ */ U(!0), l = /* @__PURE__ */ U(0);
  function c() {
    y(l, f(l) + 1);
  }
  ir(() => {
    const m = r(), p = i(), b = a();
    f(l);
    let G = !1;
    y(o, !0);
    const L = p ? p() : va({ order: m, limit: b, offset: 0 });
    return Promise.resolve(L).then((j) => {
      G || (y(s, Array.isArray(j) ? j : (j == null ? void 0 : j.items) ?? [], !0), y(o, !1));
    }), () => {
      G = !0;
    };
  });
  var d = { reload: c }, _ = Pn(), v = Ie(_);
  {
    var h = (m) => {
      var p = ul(), b = q(p), G = ee(b, !0), L = A(b, 2);
      Qe(L, 20, () => Array(8), Gr, (j, re) => {
        var ce = fl();
        x(j, ce);
      }), K(() => Z(G, t.title)), x(m, p);
    }, g = (m) => {
      var p = hl(), b = q(p), G = q(b), L = ee(G, !0), j = A(G, 2);
      {
        var re = (S) => {
          var N = cl(), Q = ee(N, !0);
          K(() => Z(Q, n())), x(S, N);
        };
        H(j, (S) => {
          n() && S(re);
        });
      }
      var ce = A(j, 2);
      {
        var te = (S) => {
          var N = vl(), Q = q(N);
          Fs(Q, () => t.actions), x(S, N);
        };
        H(ce, (S) => {
          t.actions && S(te);
        });
      }
      var E = A(b, 2);
      Qe(E, 21, () => f(s), (S) => S.handle, (S, N) => {
        var Q = dl(), ve = q(Q);
        da(ve, {
          get account() {
            return f(N);
          },
          get navigate() {
            return t.navigate;
          }
        }), x(S, Q);
      }), K(() => Z(L, t.title)), x(m, p);
    };
    H(v, (m) => {
      f(o) ? m(h) : f(s).length && m(g, 1);
    });
  }
  return x(e, _), At(d);
}
var _l = /* @__PURE__ */ C(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), pl = /* @__PURE__ */ C('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), gl = /* @__PURE__ */ C('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), ml = /* @__PURE__ */ C('<div class="ofx-sentinel"></div>'), wl = /* @__PURE__ */ C('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), bl = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), xl = /* @__PURE__ */ C("<!> <!>", 1), yl = /* @__PURE__ */ C('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function El(e, t) {
  St(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ U(He([])), a = /* @__PURE__ */ U(0), s = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(""), _, v = /* @__PURE__ */ U(null), h = /* @__PURE__ */ U(He([]));
  ir(() => {
    Qs().then((k) => {
      y(h, Array.isArray(k) ? k : [], !0);
    });
  });
  const g = /* @__PURE__ */ Xe(() => f(l).trim()), m = /* @__PURE__ */ Xe(() => f(g) !== "" || f(c)), p = /* @__PURE__ */ Xe(() => f(i).length < f(a));
  async function b(k, B) {
    y(s, !0);
    const le = await va({ search: k, limit: n, offset: B });
    if (k !== f(l).trim()) {
      y(s, !1);
      return;
    }
    le ? (y(i, B === 0 ? le.items : [...f(i), ...le.items], !0), y(a, le.total, !0), y(d, k, !0), y(o, !1)) : y(o, !0), y(s, !1);
  }
  function G(k) {
    y(l, k.currentTarget.value, !0), clearTimeout(_), _ = setTimeout(() => b(f(l).trim(), 0), 250);
  }
  function L() {
    y(c, !0), b("", 0);
  }
  function j() {
    y(c, !1), y(l, ""), y(i, [], !0), y(a, 0), y(d, "");
  }
  function re(k) {
    const B = new IntersectionObserver(
      (le) => {
        var Oe;
        (Oe = le[0]) != null && Oe.isIntersecting && f(p) && !f(s) && b(f(d), f(i).length);
      },
      { rootMargin: "600px" }
    );
    return B.observe(k), { destroy: () => B.disconnect() };
  }
  var ce = yl(), te = A(Ie(ce), 2), E = q(te);
  {
    var S = (k) => {
      var B = Un();
      K(
        (le, Oe) => Z(B, `${le ?? ""} of ${Oe ?? ""}
        ${f(d) ? `matching “${f(d)}”` : "accounts"}`),
        [
          () => f(i).length.toLocaleString(),
          () => f(a).toLocaleString()
        ]
      ), x(k, B);
    }, N = (k) => {
      var B = Un("loading…");
      x(k, B);
    }, Q = (k) => {
      var B = Un("nothing found");
      x(k, B);
    }, ve = (k) => {
      var B = Un("performers, gathered from the archive sites");
      x(k, B);
    };
    H(E, (k) => {
      f(m) && f(a) ? k(S) : f(m) && f(s) ? k(N, 1) : f(m) ? k(Q, 2) : k(ve, -1);
    });
  }
  var V = A(te, 2), w = A(q(V), 2), I = A(V, 2);
  {
    var $ = (k) => {
      var B = _l();
      x(k, B);
    };
    H(I, (k) => {
      f(o) && k($);
    });
  }
  var se = A(I, 2);
  {
    var be = (k) => {
      var B = wl(), le = Ie(B);
      {
        var Oe = (ie) => {
          var Se = pl(), Rt = ee(Se);
          he("click", Rt, j), x(ie, Se);
        };
        H(le, (ie) => {
          f(c) && !f(g) && ie(Oe);
        });
      }
      var ke = A(le, 2), qe = q(ke);
      Qe(qe, 17, () => f(i), (ie) => ie.handle, (ie, Se) => {
        da(ie, {
          get account() {
            return f(Se);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var et = A(qe, 2);
      {
        var gt = (ie) => {
          var Se = Pn(), Rt = Ie(Se);
          Qe(Rt, 16, () => Array(12), Gr, (Fn, Kr) => {
            var lr = gl();
            x(Fn, lr);
          }), x(ie, Se);
        };
        H(et, (ie) => {
          f(s) && ie(gt);
        });
      }
      var Ct = A(ke, 2);
      {
        var Gt = (ie) => {
          var Se = ml();
          js(Se, (Rt) => re == null ? void 0 : re(Rt)), x(ie, Se);
        };
        H(Ct, (ie) => {
          f(p) && ie(Gt);
        });
      }
      x(k, B);
    }, Y = (k) => {
      var B = xl(), le = Ie(B);
      Qe(le, 17, () => f(h).filter((ke) => ke.order !== "random"), (ke) => ke.order, (ke, qe) => {
        Nr(ke, {
          get title() {
            return f(qe).title;
          },
          get note() {
            return f(qe).note;
          },
          get order() {
            return f(qe).order;
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Oe = A(le, 2);
      {
        const ke = (et) => {
          var gt = bl(), Ct = Ie(gt), Gt = A(Ct, 2);
          he("click", Ct, () => {
            var ie;
            return (ie = f(v)) == null ? void 0 : ie.reload();
          }), he("click", Gt, L), x(et, gt);
        };
        let qe = /* @__PURE__ */ Xe(() => {
          var et;
          return ((et = f(h).find((gt) => gt.order === "random")) == null ? void 0 : et.title) ?? "Something else";
        });
        Zs(
          Nr(Oe, {
            get title() {
              return f(qe);
            },
            order: "random",
            size: r,
            get navigate() {
              return t.navigate;
            },
            actions: ke,
            $$slots: { actions: !0 }
          }),
          (et) => y(v, et, !0),
          () => f(v)
        );
      }
      x(k, B);
    };
    H(se, (k) => {
      f(m) ? k(be) : k(Y, -1);
    });
  }
  K(() => Ks(w, f(l))), he("input", w, G), x(e, ce), At();
}
sr(["input", "click"]);
var kl = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), hi = /* @__PURE__ */ C('<p class="ofx-note"> </p>'), Sl = /* @__PURE__ */ C('<span class="ofx-badge"> </span>'), Al = /* @__PURE__ */ C('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Tl = /* @__PURE__ */ C("<p> </p>"), Cl = /* @__PURE__ */ C('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!> <!></div> <!></button>'), Rl = /* @__PURE__ */ C('<div class="ofx-skeleton"></div>'), Ml = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button"> </button>'), Il = /* @__PURE__ */ C('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function Nl(e, t) {
  St(t, !0);
  let n = /* @__PURE__ */ U(He([])), r = /* @__PURE__ */ U(0), i = /* @__PURE__ */ U(!1), a = /* @__PURE__ */ U(!1), s = /* @__PURE__ */ U(!1);
  async function o() {
    if (f(i) || f(a)) return;
    y(i, !0);
    const E = f(r) + 1, [S, N, Q] = await Promise.all([
      tl(t.handle, t.site, E),
      nl(t.handle, t.site, E),
      rl(t.handle, t.site, E)
    ]);
    if (S === null && N === null && Q === null)
      y(s, !0);
    else {
      const ve = [
        ...(S ?? []).map((V) => ({
          kind: "video",
          key: `v:${V.video_id}`,
          title: V.title,
          thumbnail: V.thumbnail,
          badge: d(V.duration),
          item: V
        })),
        ...(N ?? []).map((V) => ({
          kind: "image",
          key: `g:${V.gallery_id}`,
          title: V.title,
          thumbnail: V.cover,
          badge: V.image_count ? `${V.image_count}` : null,
          item: V
        })),
        ...(Q ?? []).map((V) => ({
          kind: "image",
          key: `p:${V.image_id ?? `${E}:${V.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: vi(t.site, t.handle, E, V.index, !0),
          full: vi(t.site, t.handle, E, V.index),
          badge: null,
          item: V
        }))
      ];
      y(n, [...f(n), ...ve], !0), y(r, E), ve.length === 0 && y(a, !0);
    }
    y(i, !1);
  }
  const l = /* @__PURE__ */ Xe(() => f(n).filter((E) => t.kinds.has(E.kind)));
  ir(() => {
    t.handle, t.site, ar(() => {
      y(n, [], !0), y(r, 0), y(a, !1), y(s, !1), y(i, !1), o();
    });
  });
  function c(E) {
    E.kind === "video" ? t.onplay(E.item) : E.full ? t.onphoto(E) : t.ongallery(E.item);
  }
  function d(E) {
    return E ? `${Math.floor(E / 60)}:${String(E % 60).padStart(2, "0")}` : null;
  }
  var _ = Il(), v = q(_), h = ee(v, !0), g = A(v, 2);
  {
    var m = (E) => {
      var S = kl(), N = ee(S);
      K(() => Z(N, `${t.site ?? ""} did not answer.`)), x(E, S);
    }, p = (E) => {
      var S = hi(), N = ee(S);
      K(() => Z(N, `Nothing here on ${t.site ?? ""}.`)), x(E, S);
    }, b = (E) => {
      var S = hi(), N = ee(S);
      K((Q) => Z(N, `${t.site ?? ""} has no ${Q ?? ""} for this performer.`), [() => [...t.kinds].join(" or ")]), x(E, S);
    };
    H(g, (E) => {
      f(s) ? E(m) : !f(i) && f(n).length === 0 ? E(p, 1) : !f(i) && f(l).length === 0 && E(b, 2);
    });
  }
  var G = A(g, 2), L = q(G);
  Qe(L, 17, () => f(l), (E) => E.key, (E, S) => {
    var N = Cl(), Q = q(N), ve = q(Q);
    Yr(ve, {
      get src() {
        return f(S).thumbnail;
      },
      get alt() {
        return f(S).title;
      },
      get name() {
        return f(S).title;
      }
    });
    var V = A(ve, 2);
    {
      var w = (Y) => {
        var k = Sl(), B = ee(k, !0);
        K(() => Z(B, f(S).badge)), x(Y, k);
      };
      H(V, (Y) => {
        f(S).badge && Y(w);
      });
    }
    var I = A(V, 2);
    {
      var $ = (Y) => {
        var k = Al();
        x(Y, k);
      };
      H(I, (Y) => {
        f(S).kind === "video" && Y($);
      });
    }
    var se = A(Q, 2);
    {
      var be = (Y) => {
        var k = Tl(), B = ee(k, !0);
        K(() => Z(B, f(S).title)), x(Y, k);
      };
      H(se, (Y) => {
        f(S).title && Y(be);
      });
    }
    he("click", N, () => c(f(S))), x(E, N);
  });
  var j = A(L, 2);
  {
    var re = (E) => {
      var S = Pn(), N = Ie(S);
      Qe(N, 16, () => Array(4), Gr, (Q, ve) => {
        var V = Rl();
        x(Q, V);
      }), x(E, S);
    };
    H(j, (E) => {
      f(i) && E(re);
    });
  }
  var ce = A(G, 2);
  {
    var te = (E) => {
      var S = Ml(), N = ee(S, !0);
      K(() => {
        S.disabled = f(i), Z(N, f(i) ? "Loading…" : "Load more");
      }), he("click", S, o), x(E, S);
    };
    H(ce, (E) => {
      !f(a) && !f(s) && f(n).length > 0 && E(te);
    });
  }
  K(() => Z(h, t.site)), x(e, _), At();
}
sr(["click"]);
var Ol = /* @__PURE__ */ C('<p class="ofx-error">That account could not be loaded.</p>'), Ll = /* @__PURE__ */ C('<div class="ofx-banner"><img alt=""/></div>'), Pl = /* @__PURE__ */ fa('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Dl = /* @__PURE__ */ C('<p> </p> <button class="ofx-more" type="button"> </button>', 1), Fl = /* @__PURE__ */ C("<span><b> </b> </span>"), Ul = /* @__PURE__ */ C('<div class="ofx-stats"></div>'), zl = /* @__PURE__ */ C("<span> </span>"), _i = /* @__PURE__ */ C('<a target="_blank" rel="noreferrer noopener"> </a>'), Hl = /* @__PURE__ */ fa('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 12 5 5L20 7"></path></svg>'), Bl = /* @__PURE__ */ C('<button type="button"><span class="ofx-check" aria-hidden="true"><!></span> </button>'), jl = /* @__PURE__ */ C('<span class="ofx-count"> </span>'), Vl = /* @__PURE__ */ C('<button type="button"> <!></button>'), ql = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), Gl = /* @__PURE__ */ C(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Yl = /* @__PURE__ */ C('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="group" aria-label="Show"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Kl = /* @__PURE__ */ C('<p class="ofx-note">Loading…</p>'), Wl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), Zl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Xl = /* @__PURE__ */ C('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Jl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Ql = /* @__PURE__ */ C("<!> <!> <!> <!>", 1);
function $l(e, t) {
  St(t, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U(He(/* @__PURE__ */ new Set(["video", "image"]))), a = /* @__PURE__ */ U(He(/* @__PURE__ */ new Set())), s = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ U(null), l = /* @__PURE__ */ U(null), c = /* @__PURE__ */ U(null), d = /* @__PURE__ */ U(null);
  ir(() => {
    $s(t.handle).then((w) => {
      w ? y(n, w, !0) : y(r, !0);
    });
  });
  const _ = /* @__PURE__ */ Xe(() => {
    var w, I, $, se;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (w = f(n)) == null ? void 0 : w.posts_count],
      ["photos", (I = f(n)) == null ? void 0 : I.photos_count],
      ["videos", ($ = f(n)) == null ? void 0 : $.videos_count],
      ["likes", (se = f(n)) == null ? void 0 : se.likes_count]
    ].filter(([, be]) => be != null);
  });
  function v(w) {
    const I = new Set(f(i));
    I.has(w) ? I.delete(w) : I.add(w), y(i, I, !0);
  }
  function h(w) {
    const I = new Set(f(a));
    I.has(w) ? I.delete(w) : I.add(w), y(a, I, !0);
  }
  function g(w) {
    var I, $;
    if (!((I = t.host) != null && I.play)) {
      y(o, w, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: di(w.site, w.video_id),
      title: w.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: w.thumbnail ?? void 0,
      site: w.site,
      videoId: w.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: (($ = f(n)) == null ? void 0 : $.display_name) || t.handle,
      duration: w.duration,
      resolution: w.resolution,
      size: w.size
    });
  }
  function m(w) {
    y(d, null), y(c, w, !0);
  }
  async function p(w) {
    y(d, null);
    const I = await il(w.site, w.gallery_id);
    if (!I) {
      y(d, "Could not open that gallery");
      return;
    }
    if (I.length === 0) {
      y(d, "That site served no images for this gallery");
      return;
    }
    y(l, { gallery: w, count: I.length, index: 0 }, !0);
  }
  function b(w) {
    f(l) && y(
      l,
      {
        ...f(l),
        index: (f(l).index + w + f(l).count) % f(l).count
      },
      !0
    );
  }
  function G(w) {
    if (w.key === "Escape") {
      y(o, null), y(l, null), y(c, null);
      return;
    }
    f(l) && (w.key === "ArrowRight" && b(1), w.key === "ArrowLeft" && b(-1));
  }
  var L = Ql();
  la("keydown", Er, G);
  var j = Ie(L);
  {
    var re = (w) => {
      var I = Ol();
      x(w, I);
    }, ce = (w) => {
      var I = Yl(), $ = Ie(I), se = q($);
      {
        var be = (T) => {
          var P = Ll(), X = ee(P);
          K(() => Ue(X, "src", f(n).header_url)), x(T, P);
        };
        H(se, (T) => {
          f(n).header_url && T(be);
        });
      }
      var Y = A(se, 2), k = q(Y);
      let B;
      var le = q(k);
      Yr(le, {
        get src() {
          return f(n).avatar_url;
        },
        get alt() {
          return f(n).display_name;
        },
        get name() {
          return f(n).display_name;
        }
      });
      var Oe = A(k, 2), ke = q(Oe), qe = q(ke), et = A(qe);
      {
        var gt = (T) => {
          var P = Pl();
          x(T, P);
        };
        H(et, (T) => {
          f(n).is_verified && T(gt);
        });
      }
      var Ct = A(ke, 2), Gt = q(Ct), ie = A(Gt, 2), Se = A(Ct, 2);
      {
        var Rt = (T) => {
          var P = Dl(), X = Ie(P);
          let _e;
          var ft = ee(X, !0), Le = A(X, 2), mt = ee(Le, !0);
          K(() => {
            _e = Hn(X, 1, "ofx-bio", null, _e, { "ofx-clamped": !f(s) }), Z(ft, f(n).bio), Z(mt, f(s) ? "less" : "more");
          }), he("click", Le, () => y(s, !f(s))), x(T, P);
        };
        H(Se, (T) => {
          f(n).bio && T(Rt);
        });
      }
      var Fn = A(Se, 2);
      {
        var Kr = (T) => {
          var P = Ul();
          Qe(P, 21, () => f(_), ([X, _e]) => X, (X, _e) => {
            var ft = /* @__PURE__ */ Xe(() => ri(f(_e), 2));
            let Le = () => f(ft)[0], mt = () => f(ft)[1];
            var Ge = Fl(), Mt = q(Ge), cn = ee(Mt, !0), or = A(Mt);
            K(
              (fr) => {
                Z(cn, fr), Z(or, ` ${Le() ?? ""}`);
              },
              [() => mt().toLocaleString()]
            ), x(X, Ge);
          }), x(T, P);
        };
        H(Fn, (T) => {
          f(_).length && T(Kr);
        });
      }
      var lr = A(Fn, 2), Wr = q(lr);
      {
        var ha = (T) => {
          var P = zl(), X = ee(P, !0);
          K(() => Z(X, f(n).location)), x(T, P);
        };
        H(Wr, (T) => {
          f(n).location && T(ha);
        });
      }
      var Zr = A(Wr, 2);
      {
        var _a = (T) => {
          var P = _i(), X = ee(P, !0);
          K(
            (_e) => {
              Ue(P, "href", f(n).website), Z(X, _e);
            },
            [() => f(n).website.replace(/^https?:\/\//, "")]
          ), x(T, P);
        };
        H(Zr, (T) => {
          f(n).website && T(_a);
        });
      }
      var pa = A(Zr, 2);
      {
        var ga = (T) => {
          var P = _i(), X = ee(P);
          K(() => {
            Ue(P, "href", f(n).of_url), Z(X, `onlyfans.com/${f(n).of_username ?? ""}`);
          }), x(T, P);
        };
        H(pa, (T) => {
          f(n).of_url && T(ga);
        });
      }
      var ma = A(Y, 2);
      Qe(ma, 20, () => [["video", "Videos"], ["image", "Photos"]], ([T, P]) => T, (T, P) => {
        var X = /* @__PURE__ */ Xe(() => ri(P, 2));
        let _e = () => f(X)[0], ft = () => f(X)[1];
        var Le = Bl();
        let mt;
        var Ge = q(Le), Mt = q(Ge);
        {
          var cn = (vn) => {
            var ur = Hl();
            x(vn, ur);
          }, or = /* @__PURE__ */ Xe(() => f(i).has(_e()));
          H(Mt, (vn) => {
            f(or) && vn(cn);
          });
        }
        var fr = A(Ge);
        K(
          (vn, ur) => {
            mt = Hn(Le, 1, "ofx-tab", null, mt, { "ofx-on": vn }), Ue(Le, "aria-pressed", ur), Z(fr, ` ${ft() ?? ""}`);
          },
          [
            () => f(i).has(_e()),
            () => f(i).has(_e())
          ]
        ), he("click", Le, () => v(_e())), x(T, Le);
      });
      var Xr = A($, 2), Jr = A(q(Xr), 2);
      Qe(Jr, 17, () => f(n).sources, (T) => T.site, (T, P) => {
        var X = Vl();
        let _e;
        var ft = q(X), Le = A(ft);
        {
          var mt = (Ge) => {
            var Mt = jl(), cn = ee(Mt, !0);
            K(() => Z(cn, f(P).video_count)), x(Ge, Mt);
          };
          H(Le, (Ge) => {
            f(P).video_count && Ge(mt);
          });
        }
        K(
          (Ge) => {
            _e = Hn(X, 1, "ofx-btn ofx-outline", null, _e, { "ofx-on": Ge }), Z(ft, `${f(P).site ?? ""} `);
          },
          [() => f(a).has(f(P).site)]
        ), he("click", X, () => h(f(P).site)), x(T, X);
      });
      var wa = A(Jr, 2), Qr = A(Xr, 2);
      {
        var ba = (T) => {
          var P = ql(), X = ee(P, !0);
          K(() => Z(X, f(d))), x(T, P);
        };
        H(Qr, (T) => {
          f(d) && T(ba);
        });
      }
      var $r = A(Qr, 2);
      {
        var xa = (T) => {
          var P = Gl();
          x(T, P);
        };
        H($r, (T) => {
          f(a).size === 0 && T(xa);
        });
      }
      var ei = A($r, 2);
      Qe(ei, 17, () => f(n).sources.filter((T) => f(a).has(T.site)), (T) => T.site, (T, P) => {
        Nl(T, {
          get handle() {
            return f(n).handle;
          },
          get site() {
            return f(P).site;
          },
          get kinds() {
            return f(i);
          },
          onplay: (X) => g(X),
          ongallery: p,
          onphoto: m
        });
      });
      var ya = A(ei, 2);
      ua(ya, () => f(n).handle, (T) => {
        Nr(T, {
          get title() {
            return `More like ${f(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => el(f(n).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), K(() => {
        B = Hn(k, 1, "ofx-avatar", null, B, { "ofx-overlap": !!f(n).header_url }), Z(qe, `${f(n).display_name ?? ""} `), Z(Gt, `@${(f(n).of_username || f(n).handle) ?? ""} `), Z(ie, ` ${f(n).source_count ?? ""}
                    ${f(n).source_count === 1 ? "site" : "sites"}`);
      }), he("click", wa, () => t.navigate("/x/onlyfans")), x(w, I);
    }, te = (w) => {
      var I = Kl();
      x(w, I);
    };
    H(j, (w) => {
      f(r) ? w(re) : f(n) ? w(ce, 1) : w(te, -1);
    });
  }
  var E = A(j, 2);
  {
    var S = (w) => {
      var I = Wl(), $ = q(I), se = A($, 2);
      K(() => Ue(se, "src", f(c).full)), he("click", $, () => y(c, null)), x(w, I);
    };
    H(E, (w) => {
      f(c) && w(S);
    });
  }
  var N = A(E, 2);
  {
    var Q = (w) => {
      var I = Zl(), $ = q(I), se = A($, 2);
      K((be) => Ue(se, "src", be), [
        () => di(f(o).site, f(o).video_id)
      ]), he("click", $, () => y(o, null)), x(w, I);
    };
    H(N, (w) => {
      f(o) && w(Q);
    });
  }
  var ve = A(N, 2);
  {
    var V = (w) => {
      var I = Jl(), $ = q(I), se = A($, 2);
      {
        var be = (k) => {
          var B = Xl(), le = Ie(B), Oe = A(le, 2);
          he("click", le, () => b(-1)), he("click", Oe, () => b(1)), x(k, B);
        };
        H(se, (k) => {
          f(l).count > 1 && k(be);
        });
      }
      var Y = A(se, 2);
      K(
        (k) => {
          Ue(Y, "src", k), Ue(Y, "alt", `${f(l).gallery.title ?? ""} ${f(l).index + 1} of ${f(l).count ?? ""}`);
        },
        [
          () => al(f(l).gallery.site, f(l).gallery.gallery_id, f(l).index)
        ]
      ), he("click", $, () => y(l, null)), x(w, I);
    };
    H(ve, (w) => {
      f(l) && w(V);
    });
  }
  x(e, L), At();
}
sr(["click"]);
var eo = /* @__PURE__ */ C('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function to(e, t) {
  St(t, !0);
  let n = yt(t, "path", 3, "");
  Js(t.api);
  const r = /* @__PURE__ */ Xe(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = eo(), a = q(i), s = q(a);
  {
    var o = (c) => {
      var d = Pn(), _ = Ie(d);
      ua(_, () => f(r), (v) => {
        $l(v, {
          get handle() {
            return f(r);
          },
          get navigate() {
            return t.navigate;
          },
          get host() {
            return t.host;
          }
        });
      }), x(c, d);
    }, l = (c) => {
      El(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    H(s, (c) => {
      f(r) ? c(o) : c(l, -1);
    });
  }
  x(e, i), At();
}
function io({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = He({ path: t ?? "", api: n, navigate: r, host: i }), s = Ls(to, { target: e, props: a });
  return {
    update(o) {
      a.path = o ?? "";
    },
    destroy() {
      Ds(s);
    }
  };
}
export {
  io as default
};

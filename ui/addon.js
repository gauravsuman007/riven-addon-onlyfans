var Sa = Object.defineProperty;
var ni = (e) => {
  throw TypeError(e);
};
var Aa = (e, t, n) => t in e ? Sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ie = (e, t, n) => Aa(e, typeof t != "symbol" ? t + "" : t, n), or = (e, t, n) => t.has(e) || ni("Cannot " + n);
var u = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), N = (e, t, n) => t.has(e) ? ni("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), I = (e, t, n, r) => (or(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), U = (e, t, n) => (or(e, t, "access private method"), n);
const ue = Symbol("uninitialized"), Ta = "http://www.w3.org/1999/xhtml", wi = !1;
var xi = Array.isArray, Ca = Array.prototype.indexOf, qn = Array.prototype.includes, er = Array.from, yi = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyDescriptors, Ra = Object.prototype, Ia = Array.prototype, Or = Object.getPrototypeOf, ri = Object.isExtensible;
const Ma = () => {
};
function Na(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ki() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function ii(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const de = 2, an = 4, tr = 8, Si = 1 << 24, Ze = 16, qe = 32, bt = 64, hr = 128, Lr = 256, Ve = 512, ce = 1024, oe = 2048, et = 4096, we = 8192, De = 16384, fn = 32768, Gn = 1 << 25, Ht = 65536, Yn = 1 << 17, Oa = 1 << 18, un = 1 << 19, La = 1 << 20, ot = 1 << 25, zt = 65536, Kn = 1 << 21, Zt = 1 << 22, Tt = 1 << 23, Xt = Symbol("$state"), Ai = Symbol("component"), Pa = Symbol(""), Hn = Symbol("attributes"), _r = Symbol("class"), pr = Symbol("style"), dn = Symbol("text"), Rn = new class extends Error {
  constructor() {
    super(...arguments);
    Ie(this, "name", "StaleReactionError");
    Ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var gi;
const Da = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((gi = globalThis.document) != null && gi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Fa() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ua() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ti(e) {
  return e === this.v;
}
function Ci(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ri(e) {
  return !Ci(e, this.v);
}
function ja() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ha(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function za(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ba() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ga() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ka() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Za = !1, xe = null;
function sn(e) {
  xe = e;
}
function Rt(e, t = !1, n) {
  xe = {
    p: xe,
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
function It(e) {
  var t = (
    /** @type {ComponentContext} */
    xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Wi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, xe = t.p, Pr(e);
}
function Pr(e = {}) {
  return yi(e, Ai, { value: !0 }), e;
}
function Ii() {
  return !0;
}
let Kt = [];
function Xa() {
  var e = Kt;
  Kt = [], Na(e);
}
function pt(e) {
  if (Kt.length === 0) {
    var t = Kt;
    queueMicrotask(() => {
      t === Kt && Xa();
    });
  }
  Kt.push(e);
}
const Ja = -7169;
function ie(e, t) {
  e.f = e.f & Ja | t;
}
function Dr(e) {
  (e.f & Ve) !== 0 || e.deps === null ? ie(e, ce) : ie(e, et);
}
function Mi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & de) === 0 || (t.f & zt) === 0 || (t.f ^= zt, Mi(
        /** @type {Derived} */
        t.deps
      ));
}
function Ni(e, t, n) {
  (e.f & oe) !== 0 ? t.add(e) : (e.f & et) !== 0 && n.add(e), Mi(e.deps), ie(e, ce);
}
function In(e) {
  var t = P, n = z;
  Ge(null), ut(null);
  try {
    return e();
  } finally {
    Ge(t), ut(n);
  }
}
function Qa(e, t, n, r) {
  const i = Fr;
  var a = e.filter((h) => !h.settled), s = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(s);
    return;
  }
  var f = (
    /** @type {Effect} */
    z
  ), l = $a(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function v(h) {
    if ((f.f & De) === 0) {
      l();
      try {
        r([...s, ...h]);
      } catch (_) {
        st(_, f);
      }
      Wn();
    }
  }
  var g = Oi();
  if (n.length === 0) {
    c.then(() => v([])).finally(g);
    return;
  }
  function d() {
    Promise.all(n.map((h) => /* @__PURE__ */ es(h))).then(v).catch((h) => st(h, f)).finally(g);
  }
  c ? c.then(() => {
    l(), d(), Wn();
  }) : d();
}
function $a() {
  var e = (
    /** @type {Effect} */
    z
  ), t = P, n = xe, r = (
    /** @type {Batch} */
    M
  );
  return function(a = !0) {
    ut(e), Ge(t), sn(n), a && (e.f & De) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Wn(e = !0) {
  ut(null), Ge(null), sn(null), e && (M == null || M.deactivate());
}
function Oi() {
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
  var t = de | oe;
  return z !== null && (z.f |= un), {
    ctx: xe,
    deps: null,
    effects: null,
    equals: Ti,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: z,
    ac: null
  };
}
const hn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function es(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    z
  );
  r === null && ja();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Vt(
    /** @type {V} */
    ue
  ), s = !P, f = /* @__PURE__ */ new Set();
  return ps(() => {
    var h, _;
    var l = (
      /** @type {Effect} */
      z
    ), c = ki();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (x) => {
        x !== Rn && c.reject(x);
      }).finally(Wn);
    } catch (x) {
      c.reject(x), Wn();
    }
    var v = (
      /** @type {Batch} */
      M
    );
    if (s) {
      if ((l.f & fn) !== 0)
        var g = Oi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (_ = v.async_deriveds.get(l)) == null || _.reject(hn);
      else
        for (const x of f.values())
          x.reject(hn);
      f.add(c), v.async_deriveds.set(l, c);
    }
    const d = (x, p = void 0) => {
      g == null || g(), f.delete(c), p !== hn && (v.activate(), p ? (a.f |= Tt, on(a, p)) : ((a.f & Tt) !== 0 && (a.f ^= Tt), on(a, x)), v.deactivate());
    };
    c.promise.then(d, (x) => d(null, x || "unknown"));
  }), Ki(() => {
    for (const l of f)
      l.reject(hn);
  }), new Promise((l) => {
    function c(v) {
      function g() {
        v === i ? l(a) : c(i);
      }
      v.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Fr(e);
  return ea(t), t;
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ Fr(e);
  return t.equals = Ri, t;
}
function ns(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ae(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ur(e) {
  var t, n = z, r = e.parent;
  if (!Ct && r !== null && e.v !== ue && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (De | we)) !== 0)
    return Fa(), e.v;
  ut(r);
  try {
    e.f &= ~zt, ns(e), t = ia(e);
  } finally {
    ut(n);
  }
  return t;
}
function Li(e) {
  var t = Ur(e);
  if (!e.equals(t) && (e.wv = na(), (!(M != null && M.is_fork) || e.deps === null) && (M !== null ? (M.capture(e, t, !0), wn == null || wn.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ie(e, ce);
    return;
  }
  Ct || (_e !== null ? (zr() || M != null && M.is_fork) && _e.set(e, t) : Dr(e));
}
function rs(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && In(() => {
        n.ac.abort(Rn), n.ac = null;
      }), n.fn !== null && (n.teardown = Ma), yn(n, 0), Vr(n));
}
function Pi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ln(t);
}
let lr = null, Gt = null, M = null, wn = null, _e = null, gr = null, fr = !1, Wt = null, zn = null;
var ai = 0;
let is = 1;
var Jt, St, Ot, Qt, $t, en, dt, tn, ke, kn, ht, Ke, rt, nn, Lt, Z, mr, _n, br, Di, Fi, Yt, as, pn;
const Jn = class Jn {
  constructor() {
    N(this, Z);
    Ie(this, "id", is++);
    /** True as soon as `#process` was called */
    N(this, Jt, !1);
    Ie(this, "linked", !0);
    /** @type {Batch | null} */
    N(this, St, null);
    /** @type {Batch | null} */
    N(this, Ot, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ie(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Qt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, $t, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    N(this, en, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    N(this, dt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, tn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, ke, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    N(this, kn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, ht, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, Ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, rt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    N(this, nn, /* @__PURE__ */ new Set());
    Ie(this, "is_fork", !1);
    N(this, Lt, !1);
    Gt === null ? lr = Gt = this : (I(Gt, Ot, this), I(this, St, Gt)), Gt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, rt).has(t) || u(this, rt).set(t, { d: [], m: [] }), u(this, nn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = u(this, rt).get(t);
    if (r) {
      u(this, rt).delete(t);
      for (var i of r.d)
        ie(i, oe), n(i);
      for (i of r.m)
        ie(i, et), n(i);
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
    t.v !== ue && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Tt) === 0 && (this.current.set(t, [n, r]), _e == null || _e.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    M = this;
  }
  deactivate() {
    M = null, _e = null;
  }
  flush() {
    try {
      fr = !0, M = this, U(this, Z, _n).call(this);
    } finally {
      ai = 0, gr = null, Wt = null, zn = null, fr = !1, M = null, _e = null, lt.clear();
    }
  }
  discard() {
    var t;
    for (const n of u(this, $t)) n(this);
    u(this, $t).clear();
    for (const n of this.async_deriveds.values())
      n.reject(hn);
    U(this, Z, pn).call(this), (t = u(this, tn)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    u(this, kn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (I(this, en, u(this, en) + 1), t) {
      let r = u(this, dt).get(n) ?? 0;
      u(this, dt).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (I(this, en, u(this, en) - 1), t) {
      let r = u(this, dt).get(n) ?? 0;
      r === 1 ? u(this, dt).delete(n) : u(this, dt).set(n, r - 1);
    }
    u(this, Lt) || (I(this, Lt, !0), pt(() => {
      I(this, Lt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      u(this, ht).add(r);
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
    return (u(this, tn) ?? I(this, tn, ki())).promise;
  }
  static ensure() {
    if (M === null) {
      const t = M = new Jn();
      fr || pt(() => {
        u(t, Jt) || t.flush();
      });
    }
    return M;
  }
  apply() {
    {
      _e = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (gr = t, (i = t.b) != null && i.is_pending && (t.f & (an | tr | Si)) !== 0 && (t.f & fn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Wt !== null && n === z && (P === null || (P.f & de) === 0))
        return;
      if ((r & (bt | qe)) !== 0) {
        if ((r & ce) === 0)
          return;
        n.f ^= ce;
      }
    }
    u(this, ke).push(n);
  }
};
Jt = new WeakMap(), St = new WeakMap(), Ot = new WeakMap(), Qt = new WeakMap(), $t = new WeakMap(), en = new WeakMap(), dt = new WeakMap(), tn = new WeakMap(), ke = new WeakMap(), kn = new WeakMap(), ht = new WeakMap(), Ke = new WeakMap(), rt = new WeakMap(), nn = new WeakMap(), Lt = new WeakMap(), Z = new WeakSet(), mr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, dt).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (u(this, rt).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, _n = function() {
  var l, c, v, g;
  I(this, Jt, !0), ai++ > 1e3 && (U(this, Z, pn).call(this), ss());
  for (const d of u(this, ht))
    u(this, Ke).delete(d), ie(d, oe), this.schedule(d);
  for (const d of u(this, Ke))
    ie(d, et), this.schedule(d);
  const t = u(this, ke);
  I(this, ke, []), this.apply();
  var n = Wt = [], r = [], i = zn = [];
  for (const d of t)
    try {
      U(this, Z, br).call(this, d, n, r);
    } catch (h) {
      throw Hi(d), U(this, Z, mr).call(this) || this.discard(), h;
    }
  if (M = null, i.length > 0) {
    var a = Jn.ensure();
    for (const d of i)
      a.schedule(d);
  }
  if (Wt = null, zn = null, U(this, Z, mr).call(this)) {
    U(this, Z, Yt).call(this, r), U(this, Z, Yt).call(this, n);
    for (const [d, h] of u(this, rt))
      ji(d, h);
    i.length > 0 && /** @type {unknown} */
    U(l = M, Z, _n).call(l);
    return;
  }
  const s = U(this, Z, Di).call(this);
  if (s) {
    U(this, Z, Yt).call(this, r), U(this, Z, Yt).call(this, n), U(c = s, Z, Fi).call(c, this);
    return;
  }
  u(this, ht).clear(), u(this, Ke).clear();
  for (const d of u(this, Qt)) d(this);
  u(this, Qt).clear(), wn = this, si(r), si(n), wn = null, (v = u(this, tn)) == null || v.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    M
  );
  if (u(this, en) === 0 && (u(this, ke).length === 0 || f !== null) && U(this, Z, pn).call(this), u(this, ke).length > 0)
    if (f !== null) {
      const d = f;
      u(d, ke).push(...u(this, ke).filter((h) => !u(d, ke).includes(h)));
    } else
      f = this;
  f !== null && (lt.clear(), U(g = f, Z, _n).call(g));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
br = function(t, n, r) {
  t.f ^= ce;
  for (var i = t.first; i !== null; ) {
    var a = i.f, s = (a & (qe | bt)) !== 0, f = s && (a & ce) !== 0, l = f || (a & we) !== 0 || u(this, rt).has(i);
    if (!l && i.fn !== null) {
      s ? i.f ^= ce : (a & an) !== 0 ? n.push(i) : On(i) && ((a & Ze) !== 0 && u(this, Ke).add(i), ln(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var v = i.next;
      if (v !== null) {
        i = v;
        break;
      }
      i = i.parent;
    }
  }
}, Di = function() {
  for (var t = u(this, St); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = u(t, St);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Fi = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && a.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(u(t, ht), u(t, Ke));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & de) !== 0 && (i.f & (oe | et)) === 0))
      for (const l of a) {
        var s = l.f;
        if ((s & de) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          s & (Zt | Ze) && !this.async_deriveds.has(f) && (u(this, Ke).delete(f), ie(f, oe), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), U(r = t, Z, pn).call(r), M = this, U(this, Z, _n).call(this);
}, /**
 * @param {Effect[]} effects
 */
Yt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ni(t[n], u(this, ht), u(this, Ke));
}, as = function() {
  var g;
  for (let d = lr; d !== null; d = u(d, Ot)) {
    var t = d.id < this.id, n = [];
    for (const [h, [_, x]] of this.current) {
      if (d.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(h)[0]
        );
        if (t && _ !== r)
          d.current.set(h, [_, x]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, _] of this.async_deriveds) {
        const x = d.async_deriveds.get(h);
        x && _.promise.then(x.resolve).catch(x.reject);
      }
    var i = [...d.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      d.current.get(h)[1]
    );
    if (!(!u(d, Jt) || i.length === 0)) {
      var a = i.filter((h) => !this.current.has(h));
      if (a.length === 0)
        t && d.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of u(this, nn))
            d.unskip_effect(h, (_) => {
              var x;
              (_.f & (Ze | Zt)) !== 0 ? d.schedule(_) : U(x = d, Z, Yt).call(x, [_]);
            });
        d.activate();
        var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          Ui(l, a, s, f);
        f = /* @__PURE__ */ new Map();
        var c = [...d.current].filter(([h, _]) => {
          const x = this.current.get(h);
          return x ? x[0] !== _[0] || x[1] !== _[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of u(this, kn))
            (h.f & (De | we | Yn)) === 0 && jr(h, c, f) && ((h.f & (Zt | Ze)) !== 0 ? (ie(h, oe), d.schedule(h)) : u(d, ht).add(h));
        if (u(d, ke).length > 0 && !u(d, Lt)) {
          d.apply();
          for (var v of u(d, ke))
            U(g = d, Z, br).call(g, v, [], []);
          I(d, ke, []);
        }
        d.deactivate();
      }
    }
  }
}, pn = function() {
  if (this.linked) {
    var t = u(this, St), n = u(this, Ot);
    t === null ? lr = n : I(t, Ot, n), n === null ? Gt = t : I(n, St, t), this.linked = !1;
  }
};
let Bt = Jn;
function ss() {
  try {
    qa();
  } catch (e) {
    st(e, gr);
  }
}
let Ye = null;
function si(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (De | we)) === 0 && On(r) && (Ye = /* @__PURE__ */ new Set(), ln(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ji(r), (Ye == null ? void 0 : Ye.size) > 0)) {
        lt.clear();
        for (const i of Ye) {
          if ((i.f & (De | we)) !== 0) continue;
          const a = [i];
          let s = i.parent;
          for (; s !== null; )
            Ye.has(s) && (Ye.delete(s), a.push(s)), s = s.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const l = a[f];
            (l.f & (De | we)) === 0 && ln(l);
          }
        }
        Ye.clear();
      }
    }
    Ye = null;
  }
}
function Ui(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & de) !== 0 ? Ui(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Zt | Ze)) !== 0 && (a & oe) === 0 && jr(i, t, r) && (ie(i, oe), Hr(
        /** @type {Effect} */
        i
      ));
    }
}
function jr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (qn.call(t, i))
        return !0;
      if ((i.f & de) !== 0 && jr(
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
function ji(e, t) {
  if (!((e.f & qe) !== 0 && (e.f & ce) !== 0)) {
    (e.f & oe) !== 0 ? t.d.push(e) : (e.f & et) !== 0 && t.m.push(e), ie(e, ce);
    for (var n = e.first; n !== null; )
      ji(n, t), n = n.next;
  }
}
function Hi(e) {
  ie(e, ce);
  for (var t = e.first; t !== null; )
    Hi(t), t = t.next;
}
let Zn = /* @__PURE__ */ new Set();
const lt = /* @__PURE__ */ new Map();
let zi = !1;
function Vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ti,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const n = Vt(e);
  return ea(n), n;
}
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, n = !0) {
  const r = Vt(e);
  return t || (r.equals = Ri), r;
}
function k(e, t, n = !1) {
  P !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Qe || (P.f & Yn) !== 0) && Ii() && (P.f & (de | Ze | Zt | Yn)) !== 0 && (ft === null || !ft.has(e)) && Ka();
  let r = n ? Je(t) : t;
  return on(e, r, zn);
}
function on(e, t, n = null) {
  if (!e.equals(t)) {
    Ct ? lt.set(e, t) : lt.has(e) || lt.set(e, e.v);
    var r = Bt.ensure();
    if (r.capture(e, t), (e.f & de) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & oe) !== 0 && Ur(i), _e === null && Dr(i);
    }
    e.wv = na(), Bi(e, oe, n), z !== null && (z.f & ce) !== 0 && (z.f & (qe | bt)) === 0 && (Ue === null ? bs([e]) : Ue.push(e)), !r.is_fork && Zn.size > 0 && !zi && ls();
  }
  return t;
}
function ls() {
  zi = !1;
  for (const e of Zn) {
    (e.f & ce) !== 0 && ie(e, et);
    let t;
    try {
      t = On(e);
    } catch {
      t = !0;
    }
    t && ln(e);
  }
  Zn.clear();
}
function xn(e) {
  k(e, e.v + 1);
}
function Bi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var s = r[a], f = s.f, l = (f & oe) === 0;
      if (l && ie(s, t), (f & Yn) !== 0)
        Zn.add(
          /** @type {Effect} */
          s
        );
      else if ((f & de) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        _e == null || _e.delete(c), (f & zt) === 0 && (f & Ve && (z === null || (z.f & Kn) === 0) && (s.f |= zt), Bi(c, et, n));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          s
        );
        (f & Ze) !== 0 && Ye !== null && Ye.add(v), n !== null ? n.push(v) : Hr(v);
      }
    }
}
function Je(e) {
  if (typeof e != "object" || e === null || Xt in e || Ai in e)
    return e;
  const t = Or(e);
  if (t !== Ra && t !== Ia)
    return e;
  var n = /* @__PURE__ */ new Map(), r = xi(e), i = /* @__PURE__ */ H(0), a = jt, s = (f) => {
    if (jt === a)
      return f();
    var l = P, c = jt;
    Ge(null), li(a);
    var v = f();
    return Ge(l), li(c), v;
  };
  return r && n.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ga();
        var v = n.get(l);
        return v === void 0 ? s(() => {
          var g = /* @__PURE__ */ H(c.value);
          return n.set(l, g), g;
        }) : k(v, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const v = s(() => /* @__PURE__ */ H(ue));
            n.set(l, v), xn(i);
          }
        } else
          k(c, ue), xn(i);
        return !0;
      },
      get(f, l, c) {
        var h;
        if (l === Xt)
          return e;
        var v = n.get(l), g = l in f;
        if (v === void 0 && (!g || (h = bn(f, l)) != null && h.writable) && (v = s(() => {
          var _ = Je(g ? f[l] : ue), x = /* @__PURE__ */ H(_);
          return x;
        }), n.set(l, v)), v !== void 0) {
          var d = o(v);
          return d === ue ? void 0 : d;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var v = n.get(l);
          v && (c.value = o(v));
        } else if (c === void 0) {
          var g = n.get(l), d = g == null ? void 0 : g.v;
          if (g !== void 0 && d !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return c;
      },
      has(f, l) {
        var d;
        if (l === Xt)
          return !0;
        var c = n.get(l), v = c !== void 0 && c.v !== ue || Reflect.has(f, l);
        if (c !== void 0 || z !== null && (!v || (d = bn(f, l)) != null && d.writable)) {
          c === void 0 && (c = s(() => {
            var h = v ? Je(f[l]) : ue, _ = /* @__PURE__ */ H(h);
            return _;
          }), n.set(l, c));
          var g = o(c);
          if (g === ue)
            return !1;
        }
        return v;
      },
      set(f, l, c, v) {
        var L;
        var g = n.get(l), d = l in f;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var _ = n.get(h + "");
            _ !== void 0 ? k(_, ue) : h in f && (_ = s(() => /* @__PURE__ */ H(ue)), n.set(h + "", _));
          }
        if (g === void 0)
          (!d || (L = bn(f, l)) != null && L.writable) && (g = s(() => /* @__PURE__ */ H(void 0)), k(g, Je(c)), n.set(l, g));
        else {
          d = g.v !== ue;
          var x = s(() => Je(c));
          k(g, x);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, l);
        if (p != null && p.set && p.set.call(v, c), !d) {
          if (r && typeof l == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), W = Number(l);
            Number.isInteger(W) && W >= S.v && k(S, W + 1);
          }
          xn(i);
        }
        return !0;
      },
      ownKeys(f) {
        o(i);
        var l = Reflect.ownKeys(f).filter((g) => {
          var d = n.get(g);
          return d === void 0 || d.v !== ue;
        });
        for (var [c, v] of n)
          v.v !== ue && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ya();
      }
    }
  );
}
var wr, Vi, qi, Gi;
function fs() {
  if (wr === void 0) {
    wr = window, Vi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qi = bn(t, "firstChild").get, Gi = bn(t, "nextSibling").get, ri(e) && (e[_r] = void 0, e[Hn] = null, e[pr] = void 0, e.__e = void 0), ri(n) && (n[dn] = void 0);
  }
}
function mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return (
    /** @type {TemplateNode | null} */
    qi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return (
    /** @type {TemplateNode | null} */
    Gi.call(e)
  );
}
function G(e, t) {
  return /* @__PURE__ */ qt(e);
}
function Pe(e, t = !1) {
  {
    var n = /* @__PURE__ */ qt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Mn(n) : n;
  }
}
function J(e, t = !1) {
  return /* @__PURE__ */ qt(e);
}
function A(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Mn(r);
  return r;
}
function us(e) {
  e.textContent = "";
}
function Yi() {
  return !1;
}
function cs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function vs(e) {
  var t = z;
  if (t === null)
    return P.f |= Tt, e;
  if ((t.f & fn) === 0 && (t.f & an) === 0)
    throw e;
  st(e, t);
}
function st(e, t) {
  if (!(t !== null && (t.f & De) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & hr) !== 0 && (t.f & (De | Gn)) === 0) {
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
function ds(e) {
  z === null && (P === null && Va(), Ba()), Ct && za();
}
function hs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function wt(e, t) {
  var n = z;
  n !== null && (n.f & we) !== 0 && (e |= we);
  var r = {
    ctx: xe,
    deps: null,
    nodes: null,
    f: e | oe | Ve,
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
    Wt !== null ? Wt.push(r) : Bt.ensure().schedule(r);
  else if (t !== null) {
    try {
      ln(r);
    } catch (s) {
      throw Ae(r), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & un) === 0 && (i = i.first, (e & Ze) !== 0 && (e & Ht) !== 0 && i !== null && (i.f |= Ht));
  }
  if (i !== null && (i.parent = n, n !== null && hs(i, n), P !== null && (P.f & de) !== 0 && (e & bt) === 0)) {
    var a = (
      /** @type {Derived} */
      P
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function zr() {
  return P !== null && !Qe;
}
function Ki(e) {
  const t = wt(tr, null);
  return ie(t, ce), t.teardown = e, t;
}
function nr(e) {
  ds();
  var t = (
    /** @type {Effect} */
    z.f
  ), n = !P && (t & qe) !== 0 && xe !== null && !xe.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      xe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Wi(e);
}
function Wi(e) {
  return wt(an | La, e);
}
function _s(e) {
  Bt.ensure();
  const t = wt(bt | un, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ut(t, () => {
      Ae(t), r(void 0);
    }) : (Ae(t), r(void 0));
  });
}
function Zi(e) {
  return wt(an, e);
}
function ps(e) {
  return wt(Zt | un, e);
}
function Br(e, t = 0) {
  return wt(tr | t, e);
}
function q(e, t = [], n = [], r = []) {
  Qa(r, t, n, (i) => {
    wt(tr, () => {
      e(...i.map(o));
    });
  });
}
function Nn(e, t = 0) {
  var n = wt(Ze | t, e);
  return n;
}
function Be(e) {
  return wt(qe | un, e);
}
function Xi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ct, r = P;
    oi(!0), Ge(null);
    try {
      t.call(null);
    } catch (i) {
      st(i, e.parent);
    } finally {
      oi(n), Ge(r);
    }
  }
}
function Vr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && In(() => {
      i.abort(Rn);
    });
    var r = n.next;
    (n.f & bt) !== 0 ? n.parent = null : Ae(n, t), n = r;
  }
}
function gs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & qe) === 0 && Ae(t), t = n;
  }
}
function Ae(e, t = !0) {
  var n = !1;
  (t || (e.f & Oa) !== 0) && e.nodes !== null && e.nodes.end !== null && (ms(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Gn, Vr(e, t && !n), yn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Xi(e), e.f ^= Gn, e.f |= De;
  var i = e.parent;
  i !== null && i.first !== null && Ji(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ms(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Mn(e);
    e.remove(), e = n;
  }
}
function Ji(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ut(e, t, n = !0) {
  var r = [];
  e.f |= Lr, Qi(e, r, !0);
  var i = () => {
    n && Ae(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var s = () => --a || i();
    for (var f of r)
      f.out(s);
  } else
    i();
}
function Qi(e, t, n) {
  if ((e.f & we) === 0) {
    e.f ^= we;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & bt) === 0) {
        var s = (i.f & Ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & qe) !== 0 && (e.f & Ze) !== 0;
        Qi(i, t, s ? n : !1);
      }
      i = a;
    }
  }
}
function Xn(e) {
  e.f &= ~Lr, $i(e, !0);
}
function $i(e, t) {
  if ((e.f & Lr) === 0 && (e.f & we) !== 0) {
    e.f ^= we, (e.f & ce) === 0 && (ie(e, oe), Bt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ht) !== 0 || (n.f & qe) !== 0;
      $i(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || t) && s.in();
  }
}
function qr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Mn(n);
      t.append(n), n = i;
    }
}
let Bn = !1, Ct = !1;
function oi(e) {
  Ct = e;
}
let P = null, Qe = !1;
function Ge(e) {
  P = e;
}
let z = null;
function ut(e) {
  z = e;
}
let ft = null;
function ea(e) {
  P !== null && (ft ?? (ft = /* @__PURE__ */ new Set())).add(e);
}
let Se = null, Le = 0, Ue = null;
function bs(e) {
  Ue = e;
}
let ta = 1, Mt = 0, jt = Mt;
function li(e) {
  jt = e;
}
function na() {
  return ++ta;
}
function On(e) {
  var t = e.f;
  if ((t & oe) !== 0)
    return !0;
  if (t & de && (e.f &= ~zt), (t & et) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (On(
        /** @type {Derived} */
        a
      ) && Li(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    _e === null && ie(e, ce);
  }
  return !1;
}
function ra(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ft !== null && ft.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & de) !== 0 ? ra(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ie(a, oe) : (a.f & ce) !== 0 && ie(a, et), Hr(
        /** @type {Effect} */
        a
      ));
    }
}
function ia(e) {
  var t = Se, n = Le, r = Ue, i = P, a = ft, s = xe, f = Qe, l = jt, c = e.f;
  Se = /** @type {null | Value[]} */
  null, Le = 0, Ue = null, P = (c & (qe | bt)) === 0 ? e : null, ft = null, sn(e.ctx), Qe = !1, jt = ++Mt, e.ac !== null && (In(() => {
    e.ac.abort(Rn);
  }), e.ac = null);
  try {
    e.f |= Kn;
    var v = (
      /** @type {Function} */
      e.fn
    ), g = v();
    e.f |= fn;
    var d = fi(e);
    if (Ii() && Ue !== null && !Qe && d !== null && (e.f & (de | et | oe)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Ue.length; h++)
        ra(
          Ue[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Mt++, i.deps !== null)
        for (let _ = 0; _ < n; _ += 1)
          i.deps[_].rv = Mt;
      if (t !== null)
        for (const _ of t)
          _.rv = Mt;
      Ue !== null && (r === null ? r = Ue : r.push(.../** @type {Source[]} */
      Ue));
    }
    return (e.f & Tt) !== 0 && (e.f ^= Tt), g;
  } catch (_) {
    return fi(e), vs(_);
  } finally {
    e.f ^= Kn, Se = t, Le = n, Ue = r, P = i, ft = a, sn(s), Qe = f, jt = l;
  }
}
function fi(e) {
  var i;
  var t = e.deps, n = M == null ? void 0 : M.is_fork;
  if (Se !== null) {
    var r;
    if (n || yn(e, Le), t !== null && Le > 0)
      for (t.length = Le + Se.length, r = 0; r < Se.length; r++)
        t[Le + r] = Se[r];
    else
      e.deps = t = Se;
    if (zr() && (e.f & Ve) !== 0)
      for (r = Le; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Le < t.length && (yn(e, Le), t.length = Le);
  return t;
}
function ws(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ca.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & de) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !qn.call(Se, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Ve) !== 0 && (a.f ^= Ve, a.f &= ~zt), a.v !== ue && Dr(a), a.ac !== null && In(() => {
      a.ac.abort(Rn), a.ac = null, ie(a, oe);
    }), rs(a), yn(a, 0);
  }
}
function yn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ws(e, n[r]);
}
function ln(e) {
  var t = e.f;
  if ((t & De) === 0) {
    ie(e, ce);
    var n = z, r = Bn;
    z = e, Bn = (t & (qe | bt)) === 0;
    try {
      (t & (Ze | Si)) !== 0 ? gs(e) : Vr(e), Xi(e);
      var i = ia(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ta;
      var a;
      wi && Za && (e.f & oe) !== 0 && e.deps;
    } finally {
      Bn = r, z = n;
    }
  }
}
function o(e) {
  var t = e.f, n = (t & de) !== 0;
  if (P !== null && !Qe) {
    var r = z !== null && (z.f & De) !== 0;
    if (!r && (ft === null || !ft.has(e))) {
      var i = P.deps;
      if ((P.f & Kn) !== 0)
        e.rv < Mt && (e.rv = Mt, Se === null && i !== null && i[Le] === e ? Le++ : Se === null ? Se = [e] : Se.push(e));
      else {
        P.deps ?? (P.deps = []), qn.call(P.deps, e) || P.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [P] : qn.call(a, P) || a.push(P);
      }
    }
  }
  if (Ct && lt.has(e))
    return lt.get(e);
  if (n) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (Ct) {
      var f = s.v;
      return ((s.f & ce) === 0 && s.reactions !== null || sa(s)) && (f = Ur(s)), lt.set(s, f), f;
    }
    var l = (s.f & Ve) === 0 && !Qe && P !== null && (Bn || (P.f & Ve) !== 0), c = (s.f & fn) === 0;
    On(s) && (l && (s.f |= Ve), Li(s)), l && !c && (Pi(s), aa(s));
  }
  if (_e != null && _e.has(e))
    return _e.get(e);
  if ((e.f & Tt) !== 0)
    throw e.v;
  return e.v;
}
function aa(e) {
  if (e.f |= Ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & de) !== 0 && (t.f & Ve) === 0 && (Pi(
        /** @type {Derived} */
        t
      ), aa(
        /** @type {Derived} */
        t
      ));
}
function sa(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || (t.f & de) !== 0 && sa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function rr(e) {
  var t = Qe;
  try {
    return Qe = !0, e();
  } finally {
    Qe = t;
  }
}
function xs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xt in e)
      xr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Xt in n && xr(n);
      }
  }
}
function xr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        xr(e[r], t);
      } catch {
      }
    const n = Or(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ei(n);
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
const Nt = Symbol("events"), oa = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Set();
function ys(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || kr.call(t, a), !a.cancelBubble)
      return In(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Er(e, t, n, r, i) {
  var a = { capture: r, passive: i }, s = ys(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ki(() => {
    t.removeEventListener(e, s, a);
  });
}
function ge(e, t, n) {
  (t[Nt] ?? (t[Nt] = {}))[e] = n;
}
function ir(e) {
  for (var t = 0; t < e.length; t++)
    oa.add(e[t]);
  for (var n of yr)
    n(e);
}
let ur = null, cr = !1;
function kr(e) {
  var x, p;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((x = e.composedPath) == null ? void 0 : x.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ur = e, cr || (cr = !0, setTimeout(() => {
    cr = !1, ur = null;
  }));
  var s = 0, f = ur === e && e[Nt];
  if (f) {
    var l = i.indexOf(f);
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
    yi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var v = P, g = z;
    Ge(null), ut(null);
    try {
      for (var d, h = []; a !== null && a !== t; ) {
        try {
          var _ = (p = a[Nt]) == null ? void 0 : p[r];
          _ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && _.call(a, e);
        } catch (S) {
          d ? h.push(S) : d = S;
        }
        if (e.cancelBubble) break;
        s++, a = s < i.length ? (
          /** @type {Element} */
          i[s]
        ) : null;
      }
      if (d) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw d;
      }
    } finally {
      e[Nt] = t, delete e.currentTarget, Ge(v), ut(g);
    }
  }
}
var mi;
const vr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((mi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : mi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Es(e) {
  return (
    /** @type {string} */
    (vr == null ? void 0 : vr.createHTML(e)) ?? e
  );
}
function la(e) {
  var t = cs("template");
  return t.innerHTML = Es(e.replaceAll("<!>", "<!---->")), t.content;
}
function En(e, t) {
  var n = (
    /** @type {Effect} */
    z
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = la(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Vi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      En(f, l);
    } else
      En(s, s);
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
        la(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ qt(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qt(f);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return En(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ss(e, t) {
  return /* @__PURE__ */ ks(e, t, "svg");
}
function Fn(e = "") {
  {
    var t = mt(e + "");
    return En(t, t), t;
  }
}
function Ln() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mt();
  return e.append(t, n), En(t, n), e;
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const As = ["touchstart", "touchmove"];
function Ts(e) {
  return As.includes(e);
}
function Cs(e) {
  let t = 0, n = Vt(0), r;
  return () => {
    zr() && (o(n), Br(() => (t === 0 && (r = rr(() => e(() => xn(n)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, xn(n));
      });
    })));
  };
}
var Rs = Ht | un;
function Is(e, t, n, r) {
  new Ms(e, t, n, r);
}
var je, Nr, He, Pt, me, Me, be, Ne, it, Dt, At, rn, Sn, An, _t, Qn, Q, Ns, Os, Sr, Ls, Ar, gn, Vn, Tr, Cr;
class Ms {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    N(this, Q);
    /** @type {Boundary | null} */
    Ie(this, "parent");
    Ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ie(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, je);
    /** @type {TemplateNode | null} */
    N(this, Nr, null);
    /** @type {BoundaryProps} */
    N(this, He);
    /** @type {((anchor: Node) => void)} */
    N(this, Pt);
    /** @type {Effect} */
    N(this, me);
    /** @type {Effect | null} */
    N(this, Me, null);
    /** @type {Effect | null} */
    N(this, be, null);
    /** @type {Effect | null} */
    N(this, Ne, null);
    /** @type {DocumentFragment | null} */
    N(this, it, null);
    N(this, Dt, 0);
    N(this, At, 0);
    N(this, rn, !1);
    /** @type {Set<Effect>} */
    N(this, Sn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, An, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, _t, null);
    N(this, Qn, Cs(() => (I(this, _t, Vt(u(this, Dt))), () => {
      I(this, _t, null);
    })));
    var a;
    I(this, je, t), I(this, He, n), I(this, Pt, (s) => {
      var f = (
        /** @type {Effect} */
        z
      );
      f.b = this, f.f |= hr, r(s);
    }), this.parent = /** @type {Effect} */
    z.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), I(this, me, Nn(() => {
      U(this, Q, Ar).call(this);
    }, Rs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ni(t, u(this, Sn), u(this, An));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, He).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    U(this, Q, Tr).call(this, t, n), I(this, Dt, u(this, Dt) + t), !(!u(this, _t) || u(this, rn)) && (I(this, rn, !0), pt(() => {
      I(this, rn, !1), u(this, _t) && on(u(this, _t), u(this, Dt));
    }));
  }
  get_effect_pending() {
    return u(this, Qn).call(this), o(
      /** @type {Source<number>} */
      u(this, _t)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!u(this, He).onerror && !u(this, He).failed)
      throw t;
    M != null && M.is_fork ? (u(this, Me) && M.skip_effect(u(this, Me)), u(this, be) && M.skip_effect(u(this, be)), u(this, Ne) && M.skip_effect(u(this, Ne)), M.oncommit(() => {
      U(this, Q, Cr).call(this, t);
    })) : U(this, Q, Cr).call(this, t);
  }
}
je = new WeakMap(), Nr = new WeakMap(), He = new WeakMap(), Pt = new WeakMap(), me = new WeakMap(), Me = new WeakMap(), be = new WeakMap(), Ne = new WeakMap(), it = new WeakMap(), Dt = new WeakMap(), At = new WeakMap(), rn = new WeakMap(), Sn = new WeakMap(), An = new WeakMap(), _t = new WeakMap(), Qn = new WeakMap(), Q = new WeakSet(), Ns = function() {
  try {
    I(this, Me, Be(() => u(this, Pt).call(this, u(this, je))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Os = function(t) {
  const n = u(this, He).failed, { reset: r, invoke_onerror: i } = U(this, Q, Sr).call(this, t);
  pt(i), n && I(this, Ne, Be(() => {
    n(
      u(this, je),
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
Sr = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ua();
      return;
    }
    n = !0, r && Wa(), u(this, Ne) !== null && Ut(u(this, Ne), () => {
      I(this, Ne, null);
    }), U(this, Q, Vn).call(this, () => {
      U(this, Q, Ar).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var s, f;
    try {
      r = !0, (f = (s = u(this, He)).onerror) == null || f.call(s, t, i), r = !1;
    } catch (l) {
      st(l, u(this, me) && u(this, me).parent);
    }
  } };
}, Ls = function() {
  const t = u(this, He).pending;
  t && (this.is_pending = !0, I(this, be, Be(() => t(u(this, je)))), pt(() => {
    var n = I(this, it, document.createDocumentFragment()), r = mt(), i = !1;
    if (n.append(r), I(this, Me, U(this, Q, Vn).call(this, () => {
      try {
        return Be(() => u(this, Pt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (s) {
          st(s, u(this, me).parent);
        }
        return null;
      }
    })), u(this, Me) === null) {
      I(this, it, null), i && U(this, Q, gn).call(
        this,
        /** @type {Batch} */
        M
      );
      return;
    }
    u(this, At) === 0 && (u(this, je).before(n), I(this, it, null), Ut(
      /** @type {Effect} */
      u(this, be),
      () => {
        I(this, be, null);
      }
    ), U(this, Q, gn).call(
      this,
      /** @type {Batch} */
      M
    ));
  }));
}, Ar = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), I(this, At, 0), I(this, Dt, 0), I(this, Me, Be(() => {
      u(this, Pt).call(this, u(this, je));
    })), u(this, At) > 0) {
      var t = I(this, it, document.createDocumentFragment());
      qr(u(this, Me), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, He).pending
      );
      I(this, be, Be(() => n(u(this, je))));
    } else
      U(this, Q, gn).call(
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
gn = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, Sn), u(this, An));
}, /**
 * @template T
 * @param {() => T} fn
 */
Vn = function(t) {
  var n = z, r = P, i = xe;
  ut(u(this, me)), Ge(u(this, me)), sn(u(this, me).ctx);
  try {
    return Bt.ensure(), t();
  } finally {
    ut(n), Ge(r), sn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Tr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && U(r = this.parent, Q, Tr).call(r, t, n);
    return;
  }
  I(this, At, u(this, At) + t), u(this, At) === 0 && (U(this, Q, gn).call(this, n), u(this, be) && Ut(u(this, be), () => {
    I(this, be, null);
  }), u(this, it) && (u(this, je).before(u(this, it)), I(this, it, null)));
}, /**
 * @param {unknown} error
 */
Cr = function(t) {
  u(this, Me) && (Ae(u(this, Me)), I(this, Me, null)), u(this, be) && (Ae(u(this, be)), I(this, be, null)), u(this, Ne) && (Ae(u(this, Ne)), I(this, Ne, null));
  let n = u(this, He).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: s } = U(this, Q, Sr).call(this, i);
    s(), n && I(this, Ne, U(this, Q, Vn).call(this, () => {
      try {
        return Be(() => {
          var f = (
            /** @type {Effect} */
            z
          );
          f.b = this, f.f |= hr, n(
            u(this, je),
            () => i,
            () => a
          );
        });
      } catch (f) {
        return st(
          f,
          /** @type {Effect} */
          u(this, me).parent
        ), null;
      }
    }));
  };
  pt(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (a) {
      st(a, u(this, me) && u(this, me).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => st(a, u(this, me) && u(this, me).parent)
    ) : r(i);
  });
};
function K(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[dn] ?? (e[dn] = e.nodeValue)) && (e[dn] = n, e.nodeValue = `${n}`);
}
function Ps(e, t) {
  return Ds(e, t);
}
const Un = /* @__PURE__ */ new Map();
function Ds(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: f }) {
  fs();
  var l = void 0, c = _s(() => {
    var v = n ?? t.appendChild(mt());
    Is(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (h) => {
        Rt({});
        var _ = (
          /** @type {ComponentContext} */
          xe
        );
        a && (_.c = a), i && (r.$$events = i), l = e(h, r) || Pr(), It();
      },
      f
    );
    var g = /* @__PURE__ */ new Set(), d = (h) => {
      for (var _ = 0; _ < h.length; _++) {
        var x = h[_];
        if (!g.has(x)) {
          g.add(x);
          var p = Ts(x);
          for (const L of [t, document]) {
            var S = Un.get(L);
            S === void 0 && (S = /* @__PURE__ */ new Map(), Un.set(L, S));
            var W = S.get(x);
            W === void 0 ? (L.addEventListener(x, kr, { passive: p }), S.set(x, 1)) : S.set(x, W + 1);
          }
        }
      }
    };
    return d(er(oa)), yr.add(d), () => {
      var p;
      for (var h of g)
        for (const S of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Un.get(S)
          ), x = (
            /** @type {number} */
            _.get(h)
          );
          --x == 0 ? (S.removeEventListener(h, kr), _.delete(h), _.size === 0 && Un.delete(S)) : _.set(h, x);
        }
      yr.delete(d), v !== n && ((p = v.parentNode) == null || p.removeChild(v));
    };
  });
  return Rr.set(l, c), l;
}
let Rr = /* @__PURE__ */ new WeakMap();
function Fs(e, t) {
  const n = Rr.get(e);
  return n ? (Rr.delete(e), n(t)) : Promise.resolve();
}
var We, at, Oe, Ft, Tn, Cn, $n;
class Gr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    N(this, We, /* @__PURE__ */ new Map());
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
    N(this, at, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    N(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    N(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    N(this, Tn, !0);
    /**
     * @param {Batch} batch
     */
    N(this, Cn, (t) => {
      if (u(this, We).has(t)) {
        var n = (
          /** @type {Key} */
          u(this, We).get(t)
        ), r = u(this, at).get(n);
        if (r)
          Xn(r), u(this, Ft).delete(n);
        else {
          var i = u(this, Oe).get(n);
          i && (Xn(i.effect), u(this, at).set(n, i.effect), u(this, Oe).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, s] of u(this, We)) {
          if (u(this, We).delete(a), a === t)
            break;
          const f = u(this, Oe).get(s);
          f && (Ae(f.effect), u(this, Oe).delete(s));
        }
        for (const [a, s] of u(this, at)) {
          if (a === n || u(this, Ft).has(a)) continue;
          const f = () => {
            if (Array.from(u(this, We).values()).includes(a)) {
              var c = document.createDocumentFragment();
              qr(s, c), c.append(mt()), u(this, Oe).set(a, { effect: s, fragment: c });
            } else
              Ae(s);
            u(this, Ft).delete(a), u(this, at).delete(a);
          };
          u(this, Tn) || !r ? (u(this, Ft).add(a), Ut(s, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    N(this, $n, (t) => {
      u(this, We).delete(t);
      const n = Array.from(u(this, We).values());
      for (const [r, i] of u(this, Oe))
        n.includes(r) || (Ae(i.effect), u(this, Oe).delete(r));
    });
    this.anchor = t, I(this, Tn, n);
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
    ), i = Yi();
    if (n && !u(this, at).has(t) && !u(this, Oe).has(t))
      if (i) {
        var a = document.createDocumentFragment(), s = mt();
        a.append(s), u(this, Oe).set(t, {
          effect: Be(() => n(s)),
          fragment: a
        });
      } else
        u(this, at).set(
          t,
          Be(() => n(this.anchor))
        );
    if (u(this, We).set(r, t), i) {
      for (const [f, l] of u(this, at))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, Oe))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Cn)), r.ondiscard(u(this, $n));
    } else
      u(this, Cn).call(this, r);
  }
}
We = new WeakMap(), at = new WeakMap(), Oe = new WeakMap(), Ft = new WeakMap(), Tn = new WeakMap(), Cn = new WeakMap(), $n = new WeakMap();
function Us(e, t, ...n) {
  var r = new Gr(e);
  Nn(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Ht);
}
function j(e, t, n = !1) {
  var r = new Gr(e), i = n ? Ht : 0;
  function a(s, f) {
    r.ensure(s, f);
  }
  Nn(() => {
    var s = !1;
    t((f, l = 0) => {
      s = !0, a(l, f);
    }), s || a(-1, null);
  }, i);
}
const js = Symbol("NaN");
function fa(e, t, n) {
  var r = new Gr(e);
  Nn(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    js), r.ensure(i, n);
  });
}
function Yr(e, t) {
  return t;
}
function Hs(e, t, n) {
  for (var r = [], i = t.length, a, s = t.length, f = 0; f < i; f++) {
    let g = t[f];
    Ut(
      g,
      () => {
        if (a) {
          if (a.pending.delete(g), a.done.add(g), a.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ir(e, er(a.done)), d.delete(a), d.size === 0 && (e.outrogroups = null);
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
      ), v = (
        /** @type {Element} */
        c.parentNode
      );
      us(v), v.append(c), e.items.clear();
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
      for (const f of s)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (r != null && r.has(a)) {
      a.f |= ot;
      const s = document.createDocumentFragment();
      qr(a, s);
    } else
      Ae(t[i], n);
  }
}
var ui;
function $e(e, t, n, r, i, a = null) {
  var s = e, f = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(mt());
  }
  var v = null, g = /* @__PURE__ */ ts(() => {
    var L = n();
    return (
      /** @type {V[]} */
      xi(L) ? L : L == null ? [] : er(L)
    );
  }), d, h = /* @__PURE__ */ new Map(), _ = !0;
  function x(L) {
    (W.effect.f & De) === 0 && (W.pending.delete(L), W.fallback = v, zs(W, d, s, t, r), v !== null && (d.length === 0 ? (v.f & ot) === 0 ? Xn(v) : (v.f ^= ot, mn(v, null, s)) : Ut(v, () => {
      v = null;
    })));
  }
  function p(L) {
    W.pending.delete(L);
  }
  var S = Nn(() => {
    d = /** @type {V[]} */
    o(g);
    for (var L = d.length, B = /* @__PURE__ */ new Set(), ae = (
      /** @type {Batch} */
      M
    ), he = Yi(), te = 0; te < L; te += 1) {
      var pe = d[te], ee = r(pe, te), b = _ ? null : f.get(ee);
      b ? (b.v && on(b.v, pe), b.i && on(b.i, te), he && ae.unskip_effect(b.e)) : (b = Bs(
        f,
        _ ? s : ui ?? (ui = mt()),
        pe,
        ee,
        te,
        i,
        t,
        n
      ), _ || (b.e.f |= ot), f.set(ee, b)), B.add(ee);
    }
    if (L === 0 && a && !v && (_ ? v = Be(() => a(s)) : (v = Be(() => a(ui ?? (ui = mt()))), v.f |= ot)), L > B.size && Ha(), !_)
      if (h.set(ae, B), he) {
        for (const [y, D] of f)
          B.has(y) || ae.skip_effect(D.e);
        ae.oncommit(x), ae.ondiscard(p);
      } else
        x(ae);
    o(g);
  }), W = { effect: S, items: f, pending: h, outrogroups: null, fallback: v };
  _ = !1;
}
function vn(e) {
  for (; e !== null && (e.f & qe) === 0; )
    e = e.next;
  return e;
}
function zs(e, t, n, r, i) {
  var b, y, D, se, m, w, $, le, ye;
  var a = (r & 8) !== 0, s = t.length, f = e.items, l = vn(e.effect.first), c, v = null, g, d = [], h = [], _, x, p, S;
  if (a)
    for (S = 0; S < s; S += 1)
      _ = t[S], x = i(_, S), p = /** @type {EachItem} */
      f.get(x).e, (p.f & ot) === 0 && ((y = (b = p.nodes) == null ? void 0 : b.a) == null || y.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(p));
  for (S = 0; S < s; S += 1) {
    if (_ = t[S], x = i(_, S), p = /** @type {EachItem} */
    f.get(x).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(p), fe.done.delete(p);
    if ((p.f & we) !== 0 && (Xn(p), a && ((se = (D = p.nodes) == null ? void 0 : D.a) == null || se.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(p))), (p.f & ot) !== 0)
      if (p.f ^= ot, p === l)
        mn(p, null, n);
      else {
        var W = v ? v.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), kt(e, v, p), kt(e, p, W), mn(p, W, n), v = p, d = [], h = [], l = vn(v.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (d.length < h.length) {
          var L = h[0], B;
          v = L.prev;
          var ae = d[0], he = d[d.length - 1];
          for (B = 0; B < d.length; B += 1)
            mn(d[B], L, n);
          for (B = 0; B < h.length; B += 1)
            c.delete(h[B]);
          kt(e, ae.prev, he.next), kt(e, v, ae), kt(e, he, L), l = L, v = he, S -= 1, d = [], h = [];
        } else
          c.delete(p), mn(p, l, n), kt(e, p.prev, p.next), kt(e, p, v === null ? e.effect.first : v.next), kt(e, v, p), v = p;
        continue;
      }
      for (d = [], h = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), h.push(l), l = vn(l.next);
      if (l === null)
        continue;
    }
    (p.f & ot) === 0 && d.push(p), v = p, l = vn(p.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (Ir(e, er(fe.done)), (m = e.outrogroups) == null || m.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var te = [];
    if (c !== void 0)
      for (p of c)
        (p.f & we) === 0 && te.push(p);
    for (; l !== null; )
      (l.f & we) === 0 && l !== e.fallback && te.push(l), l = vn(l.next);
    var pe = te.length;
    if (pe > 0) {
      var ee = (r & 4) !== 0 && s === 0 ? n : null;
      if (a) {
        for (S = 0; S < pe; S += 1)
          ($ = (w = te[S].nodes) == null ? void 0 : w.a) == null || $.measure();
        for (S = 0; S < pe; S += 1)
          (ye = (le = te[S].nodes) == null ? void 0 : le.a) == null || ye.fix();
      }
      Hs(e, te, ee);
    }
  }
  a && pt(() => {
    var fe, C;
    if (g !== void 0)
      for (p of g)
        (C = (fe = p.nodes) == null ? void 0 : fe.a) == null || C.apply();
  });
}
function Bs(e, t, n, r, i, a, s, f) {
  var l = (s & 1) !== 0 ? (s & 16) === 0 ? /* @__PURE__ */ os(n, !1, !1) : Vt(n) : null, c = (s & 2) !== 0 ? Vt(i) : null;
  return {
    v: l,
    i: c,
    e: Be(() => (a(t, l ?? n, c ?? i, f), () => {
      e.delete(r);
    }))
  };
}
function mn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & ot) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mn(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function kt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ua(e, t, n) {
  Zi(() => {
    var r = rr(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Br(() => {
        var s = n();
        xs(s), i && Ci(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const ci = [...` 	
\r\f \v\uFEFF`];
function Vs(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || ci.includes(r[s - 1])) && (f === r.length || ci.includes(r[f])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(f + 1) : s = f;
        }
  }
  return r === "" ? null : r;
}
function qs(e, t) {
  return e == null ? null : String(e);
}
function jn(e, t, n, r, i, a) {
  var s = (
    /** @type {any} */
    e[_r]
  );
  if (s !== n || s === void 0) {
    var f = Vs(n, r, a);
    f == null ? e.removeAttribute("class") : e.className = f, e[_r] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return a;
}
function Gs(e, t, n, r) {
  var i = (
    /** @type {any} */
    e[pr]
  );
  if (i !== t) {
    var a = qs(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e[pr] = t;
  }
  return r;
}
const Ys = Symbol("is custom element"), Ks = Symbol("is html"), Ws = Da ? "progress" : "PROGRESS";
function Zs(e, t) {
  var n = ca(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ws) || (e.value = t ?? "");
}
function ze(e, t, n, r) {
  var i = ca(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Pa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xs(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function ca(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Hn] ?? (e[Hn] = {
      [Ys]: e.nodeName.includes("-"),
      [Ks]: e.namespaceURI === Ta
    })
  );
}
var vi = /* @__PURE__ */ new Map();
function Xs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = vi.get(t);
  if (n) return n;
  vi.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Ei(i);
    for (var s in r)
      r[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    i = Or(i);
  }
  return n;
}
function dr(e, t) {
  return e === t || (e == null ? void 0 : e[Xt]) === t;
}
function Js(e = Pr(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    xe.r
  ), a = (
    /** @type {Effect} */
    z
  );
  return Zi(() => {
    var s, f;
    return Br(() => {
      s = f, f = [], rr(() => {
        dr(n(...f), e) || (t(e, ...f), s && dr(n(...s), e) && t(null, ...s));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & Gn; )
        l = l.parent;
      const c = () => {
        f && dr(n(...f), e) && t(null, ...f);
      }, v = l.teardown;
      l.teardown = () => {
        c(), v == null || v();
      };
    };
  }), e;
}
function gt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), a = !0, s = () => (a && (a = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = s());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? s() : (a = !0, c);
  }, l;
}
const Qs = "5";
var bi;
typeof window < "u" && ((bi = window.__svelte ?? (window.__svelte = {})).v ?? (bi.v = /* @__PURE__ */ new Set())).add(Qs);
let Pn = "";
function $s(e) {
  Pn = e;
}
async function xt(e, t) {
  const n = new URL(`${Pn}${e}`, window.location.origin);
  for (const [r, i] of Object.entries(t ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const va = (e) => xt("/accounts", e), eo = () => xt("/rails"), to = (e) => xt(`/accounts/${encodeURIComponent(e)}`), no = (e) => xt(`/accounts/${encodeURIComponent(e)}/similar`), ro = (e, t, n) => xt(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), io = (e, t, n) => xt(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), ao = (e, t, n) => xt(`/accounts/${encodeURIComponent(e)}/images`, { site: t, page: n }), so = (e, t) => xt("/videoinfo", { site: e, video_id: t }), oo = (e, t) => xt(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), lo = (e, t, n) => `${Pn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, di = (e, t, n, r, i = !1) => `${Pn}/photo?site=${encodeURIComponent(e)}&handle=${encodeURIComponent(t)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, hi = (e, t, n = 0) => `${Pn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var fo = /* @__PURE__ */ R('<img loading="lazy"/>'), uo = /* @__PURE__ */ R('<span class="ofx-initials"> </span>');
function Kr(e, t) {
  Rt(t, !0);
  let n = gt(t, "src", 3, null), r = gt(t, "alt", 3, ""), i = gt(t, "name", 3, ""), a = gt(t, "onmeasure", 3, null), s = /* @__PURE__ */ H(!1);
  const f = /* @__PURE__ */ Xe(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((h) => {
    var _;
    return ((_ = h[0]) == null ? void 0 : _.toUpperCase()) ?? "";
  }).join(""));
  function l(h) {
    const _ = h.currentTarget;
    a() && _.naturalWidth && _.naturalHeight && a()(_.naturalWidth / _.naturalHeight);
  }
  var c = Ln(), v = Pe(c);
  {
    var g = (h) => {
      var _ = fo();
      q(() => {
        ze(_, "src", n()), ze(_, "alt", r());
      }), Er("load", _, l), Er("error", _, () => k(s, !0)), E(h, _);
    }, d = (h) => {
      var _ = uo(), x = J(_, !0);
      q(() => K(x, o(f))), E(h, _);
    };
    j(v, (h) => {
      n() && !o(s) ? h(g) : h(d, -1);
    });
  }
  E(e, c), It();
}
var co = /* @__PURE__ */ R('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function da(e, t) {
  Rt(t, !0);
  var n = co(), r = G(n), i = G(r);
  Kr(i, {
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
  var a = A(r, 2), s = J(a, !0), f = A(a, 2), l = J(f);
  q(() => {
    ze(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), ze(a, "title", t.account.display_name), K(s, t.account.display_name), K(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), ge("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), E(e, n), It();
}
ir(["click"]);
var vo = /* @__PURE__ */ R('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), ho = /* @__PURE__ */ R('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), _o = /* @__PURE__ */ R('<span class="ofx-note"> </span>'), po = /* @__PURE__ */ R('<div class="ofx-rail-actions"><!></div>'), go = /* @__PURE__ */ R('<div class="ofx-rail-item"><!></div>'), mo = /* @__PURE__ */ R('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Mr(e, t) {
  Rt(t, !0);
  let n = gt(t, "note", 3, ""), r = gt(t, "order", 3, null), i = gt(t, "fetcher", 3, null), a = gt(t, "size", 3, 20), s = /* @__PURE__ */ H(Je([])), f = /* @__PURE__ */ H(!0), l = /* @__PURE__ */ H(0);
  function c() {
    k(l, o(l) + 1);
  }
  nr(() => {
    const x = r(), p = i(), S = a();
    o(l);
    let W = !1;
    k(f, !0);
    const L = p ? p() : va({ order: x, limit: S, offset: 0 });
    return Promise.resolve(L).then((B) => {
      W || (k(s, Array.isArray(B) ? B : (B == null ? void 0 : B.items) ?? [], !0), k(f, !1));
    }), () => {
      W = !0;
    };
  });
  var v = { reload: c }, g = Ln(), d = Pe(g);
  {
    var h = (x) => {
      var p = ho(), S = G(p), W = J(S, !0), L = A(S, 2);
      $e(L, 20, () => Array(8), Yr, (B, ae) => {
        var he = vo();
        E(B, he);
      }), q(() => K(W, t.title)), E(x, p);
    }, _ = (x) => {
      var p = mo(), S = G(p), W = G(S), L = J(W, !0), B = A(W, 2);
      {
        var ae = (ee) => {
          var b = _o(), y = J(b, !0);
          q(() => K(y, n())), E(ee, b);
        };
        j(B, (ee) => {
          n() && ee(ae);
        });
      }
      var he = A(B, 2);
      {
        var te = (ee) => {
          var b = po(), y = G(b);
          Us(y, () => t.actions), E(ee, b);
        };
        j(he, (ee) => {
          t.actions && ee(te);
        });
      }
      var pe = A(S, 2);
      $e(pe, 21, () => o(s), (ee) => ee.handle, (ee, b) => {
        var y = go(), D = G(y);
        da(D, {
          get account() {
            return o(b);
          },
          get navigate() {
            return t.navigate;
          }
        }), E(ee, y);
      }), q(() => K(L, t.title)), E(x, p);
    };
    j(d, (x) => {
      o(f) ? x(h) : o(s).length && x(_, 1);
    });
  }
  return E(e, g), It(v);
}
var bo = /* @__PURE__ */ R(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), wo = /* @__PURE__ */ R('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), xo = /* @__PURE__ */ R('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), yo = /* @__PURE__ */ R('<div class="ofx-sentinel"></div>'), Eo = /* @__PURE__ */ R('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), ko = /* @__PURE__ */ R('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), So = /* @__PURE__ */ R("<!> <!>", 1), Ao = /* @__PURE__ */ R('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function To(e, t) {
  Rt(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ H(Je([])), a = /* @__PURE__ */ H(0), s = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), c = /* @__PURE__ */ H(!1), v = /* @__PURE__ */ H(""), g, d = /* @__PURE__ */ H(null), h = /* @__PURE__ */ H(Je([]));
  nr(() => {
    eo().then((C) => {
      k(h, Array.isArray(C) ? C : [], !0);
    });
  });
  const _ = /* @__PURE__ */ Xe(() => o(l).trim()), x = /* @__PURE__ */ Xe(() => o(_) !== "" || o(c)), p = /* @__PURE__ */ Xe(() => o(i).length < o(a));
  async function S(C, Y) {
    k(s, !0);
    const F = await va({ search: C, limit: n, offset: Y });
    if (C !== o(l).trim()) {
      k(s, !1);
      return;
    }
    F ? (k(i, Y === 0 ? F.items : [...o(i), ...F.items], !0), k(a, F.total, !0), k(v, C, !0), k(f, !1)) : k(f, !0), k(s, !1);
  }
  function W(C) {
    k(l, C.currentTarget.value, !0), clearTimeout(g), g = setTimeout(() => S(o(l).trim(), 0), 250);
  }
  function L() {
    k(c, !0), S("", 0);
  }
  function B() {
    k(c, !1), k(l, ""), k(i, [], !0), k(a, 0), k(v, "");
  }
  function ae(C) {
    const Y = new IntersectionObserver(
      (F) => {
        var ne;
        (ne = F[0]) != null && ne.isIntersecting && o(p) && !o(s) && S(o(v), o(i).length);
      },
      { rootMargin: "600px" }
    );
    return Y.observe(C), { destroy: () => Y.disconnect() };
  }
  var he = Ao(), te = A(Pe(he), 2), pe = G(te);
  {
    var ee = (C) => {
      var Y = Fn();
      q(
        (F, ne) => K(Y, `${F ?? ""} of ${ne ?? ""}
        ${o(v) ? `matching “${o(v)}”` : "accounts"}`),
        [
          () => o(i).length.toLocaleString(),
          () => o(a).toLocaleString()
        ]
      ), E(C, Y);
    }, b = (C) => {
      var Y = Fn("loading…");
      E(C, Y);
    }, y = (C) => {
      var Y = Fn("nothing found");
      E(C, Y);
    }, D = (C) => {
      var Y = Fn("performers, gathered from the archive sites");
      E(C, Y);
    };
    j(pe, (C) => {
      o(x) && o(a) ? C(ee) : o(x) && o(s) ? C(b, 1) : o(x) ? C(y, 2) : C(D, -1);
    });
  }
  var se = A(te, 2), m = A(G(se), 2), w = A(se, 2);
  {
    var $ = (C) => {
      var Y = bo();
      E(C, Y);
    };
    j(w, (C) => {
      o(f) && C($);
    });
  }
  var le = A(w, 2);
  {
    var ye = (C) => {
      var Y = Eo(), F = Pe(Y);
      {
        var ne = (V) => {
          var re = wo(), Re = J(re);
          ge("click", Re, B), E(V, re);
        };
        j(F, (V) => {
          o(c) && !o(_) && V(ne);
        });
      }
      var ve = A(F, 2), Te = G(ve);
      $e(Te, 17, () => o(i), (V) => V.handle, (V, re) => {
        da(V, {
          get account() {
            return o(re);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ce = A(Te, 2);
      {
        var tt = (V) => {
          var re = Ln(), Re = Pe(re);
          $e(Re, 16, () => Array(12), Yr, (Dn, Wr) => {
            var ar = xo();
            E(Dn, ar);
          }), E(V, re);
        };
        j(Ce, (V) => {
          o(s) && V(tt);
        });
      }
      var ct = A(ve, 2);
      {
        var yt = (V) => {
          var re = yo();
          ua(re, (Re) => ae == null ? void 0 : ae(Re)), E(V, re);
        };
        j(ct, (V) => {
          o(p) && V(yt);
        });
      }
      E(C, Y);
    }, fe = (C) => {
      var Y = So(), F = Pe(Y);
      $e(F, 17, () => o(h).filter((ve) => ve.order !== "random"), (ve) => ve.order, (ve, Te) => {
        Mr(ve, {
          get title() {
            return o(Te).title;
          },
          get note() {
            return o(Te).note;
          },
          get order() {
            return o(Te).order;
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var ne = A(F, 2);
      {
        const ve = (Ce) => {
          var tt = ko(), ct = Pe(tt), yt = A(ct, 2);
          ge("click", ct, () => {
            var V;
            return (V = o(d)) == null ? void 0 : V.reload();
          }), ge("click", yt, L), E(Ce, tt);
        };
        let Te = /* @__PURE__ */ Xe(() => {
          var Ce;
          return ((Ce = o(h).find((tt) => tt.order === "random")) == null ? void 0 : Ce.title) ?? "Something else";
        });
        Js(
          Mr(ne, {
            get title() {
              return o(Te);
            },
            order: "random",
            size: r,
            get navigate() {
              return t.navigate;
            },
            actions: ve,
            $$slots: { actions: !0 }
          }),
          (Ce) => k(d, Ce, !0),
          () => o(d)
        );
      }
      E(C, Y);
    };
    j(le, (C) => {
      o(x) ? C(ye) : C(fe, -1);
    });
  }
  q(() => Zs(m, o(l))), ge("input", m, W), E(e, he), It();
}
ir(["input", "click"]);
var Co = /* @__PURE__ */ R('<p class="ofx-error"> </p>'), _i = /* @__PURE__ */ R('<p class="ofx-note"> </p>'), Ro = /* @__PURE__ */ R('<span class="ofx-badge"> </span>'), Io = /* @__PURE__ */ R('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Mo = /* @__PURE__ */ R('<p class="ofx-caption-title"> </p>'), No = /* @__PURE__ */ R('<p class="ofx-caption-text"> </p>'), Oo = /* @__PURE__ */ R('<p class="ofx-caption-when"> </p>'), Lo = /* @__PURE__ */ R('<div class="ofx-caption"><!> <!> <!></div>'), Po = /* @__PURE__ */ R('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Do = /* @__PURE__ */ R('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Fo = /* @__PURE__ */ R('<button class="ofx-btn ofx-outline" type="button"> </button>'), Uo = /* @__PURE__ */ R('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function jo(e, t) {
  Rt(t, !0);
  let n = /* @__PURE__ */ H(Je([])), r = /* @__PURE__ */ H(0), i = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1);
  async function f() {
    if (o(i) || o(a)) return;
    k(i, !0);
    const b = o(r) + 1, [y, D, se] = await Promise.all([
      ro(t.handle, t.site, b),
      io(t.handle, t.site, b),
      ao(t.handle, t.site, b)
    ]);
    if (y === null && D === null && se === null)
      k(s, !0);
    else {
      const m = [
        ...(y ?? []).map((w) => ({
          kind: "video",
          key: `v:${w.video_id}`,
          title: w.title,
          thumbnail: w.thumbnail,
          badge: d(w.duration),
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
        ...(D ?? []).map((w) => ({
          kind: "image",
          key: `g:${w.gallery_id}`,
          title: w.title,
          thumbnail: w.cover,
          badge: w.image_count ? `${w.image_count}` : null,
          aspect: 0.75,
          posted: w.posted,
          item: w
        })),
        ...(se ?? []).map((w) => ({
          kind: "image",
          key: `p:${w.image_id ?? `${b}:${w.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: di(t.site, t.handle, b, w.index, !0),
          full: di(t.site, t.handle, b, w.index),
          badge: null,
          aspect: 0.75,
          posted: w.posted_at,
          item: w
        }))
      ];
      k(n, [...o(n), ...m], !0), k(r, b), m.length === 0 && k(a, !0);
    }
    k(i, !1);
  }
  const l = /* @__PURE__ */ Xe(() => o(n).filter((b) => t.kinds.has(b.kind)));
  nr(() => {
    t.handle, t.site, rr(() => {
      k(n, [], !0), k(r, 0), k(a, !1), k(s, !1), k(i, !1), f();
    });
  });
  function c(b, y) {
    !y || !Number.isFinite(y) || k(n, o(n).map((D) => D.key === b ? { ...D, aspect: y } : D), !0);
  }
  function v(b, y) {
    if (!y.hasText || y.text) return;
    const D = new IntersectionObserver((se) => {
      se.some((m) => m.isIntersecting) && (D.disconnect(), so(t.site, y.item.video_id).then((m) => {
        m && k(
          n,
          o(n).map((w) => w.key === y.key ? {
            ...w,
            text: m.description,
            posted: w.posted ?? m.posted_at
          } : w),
          !0
        );
      }));
    });
    return D.observe(b), { destroy: () => D.disconnect() };
  }
  function g(b) {
    b.kind === "video" ? t.onplay(b.item) : b.full ? t.onphoto(b) : t.ongallery(b.item);
  }
  function d(b) {
    return b ? `${Math.floor(b / 60)}:${String(b % 60).padStart(2, "0")}` : null;
  }
  var h = Uo(), _ = G(h), x = J(_, !0), p = A(_, 2);
  {
    var S = (b) => {
      var y = Co(), D = J(y);
      q(() => K(D, `${t.site ?? ""} did not answer.`)), E(b, y);
    }, W = (b) => {
      var y = _i(), D = J(y);
      q(() => K(D, `Nothing here on ${t.site ?? ""}.`)), E(b, y);
    }, L = (b) => {
      var y = _i(), D = J(y);
      q((se) => K(D, `${t.site ?? ""} has no ${se ?? ""} for this performer.`), [() => [...t.kinds].join(" or ")]), E(b, y);
    };
    j(p, (b) => {
      o(s) ? b(S) : !o(i) && o(n).length === 0 ? b(W, 1) : !o(i) && o(l).length === 0 && b(L, 2);
    });
  }
  var B = A(p, 2), ae = G(B);
  $e(ae, 17, () => o(l), (b) => b.key, (b, y) => {
    var D = Po(), se = G(D), m = G(se), w = G(m);
    Kr(w, {
      get src() {
        return o(y).thumbnail;
      },
      get alt() {
        return o(y).title;
      },
      get name() {
        return o(y).title;
      },
      onmeasure: (F) => c(o(y).key, F)
    });
    var $ = A(w, 2);
    {
      var le = (F) => {
        var ne = Ro(), ve = J(ne, !0);
        q(() => K(ve, o(y).badge)), E(F, ne);
      };
      j($, (F) => {
        o(y).badge && F(le);
      });
    }
    var ye = A($, 2);
    {
      var fe = (F) => {
        var ne = Io();
        E(F, ne);
      };
      j(ye, (F) => {
        o(y).kind === "video" && F(fe);
      });
    }
    var C = A(se, 2);
    {
      var Y = (F) => {
        var ne = Lo(), ve = G(ne);
        {
          var Te = (V) => {
            var re = Mo(), Re = J(re, !0);
            q(() => K(Re, o(y).title)), E(V, re);
          };
          j(ve, (V) => {
            o(y).title && V(Te);
          });
        }
        var Ce = A(ve, 2);
        {
          var tt = (V) => {
            var re = No(), Re = J(re, !0);
            q(() => K(Re, o(y).text)), E(V, re);
          };
          j(Ce, (V) => {
            o(y).text && V(tt);
          });
        }
        var ct = A(Ce, 2);
        {
          var yt = (V) => {
            var re = Oo(), Re = J(re, !0);
            q(() => K(Re, o(y).posted)), E(V, re);
          };
          j(ct, (V) => {
            o(y).posted && V(yt);
          });
        }
        E(F, ne);
      };
      j(C, (F) => {
        (o(y).title || o(y).text || o(y).posted) && F(Y);
      });
    }
    ua(D, (F, ne) => v == null ? void 0 : v(F, ne), () => o(y)), q(() => Gs(D, `--ofx-ar: ${o(y).aspect ?? ""}; flex-grow: ${o(y).aspect ?? ""}; flex-basis: ${o(y).aspect * 220}px`)), ge("click", se, () => g(o(y))), E(b, D);
  });
  var he = A(ae, 2);
  {
    var te = (b) => {
      var y = Ln(), D = Pe(y);
      $e(D, 16, () => Array(4), Yr, (se, m) => {
        var w = Do();
        E(se, w);
      }), E(b, y);
    };
    j(he, (b) => {
      o(i) && b(te);
    });
  }
  var pe = A(B, 2);
  {
    var ee = (b) => {
      var y = Fo(), D = J(y, !0);
      q(() => {
        y.disabled = o(i), K(D, o(i) ? "Loading…" : "Load more");
      }), ge("click", y, f), E(b, y);
    };
    j(pe, (b) => {
      !o(a) && !o(s) && o(n).length > 0 && b(ee);
    });
  }
  q(() => K(x, t.site)), E(e, h), It();
}
ir(["click"]);
var Ho = /* @__PURE__ */ R('<p class="ofx-error">That account could not be loaded.</p>'), zo = /* @__PURE__ */ R('<div class="ofx-banner"><img alt=""/></div>'), Bo = /* @__PURE__ */ Ss('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Vo = /* @__PURE__ */ R('<p> </p> <button class="ofx-more" type="button"> </button>', 1), qo = /* @__PURE__ */ R("<span><b> </b> </span>"), Go = /* @__PURE__ */ R('<div class="ofx-stats"></div>'), Yo = /* @__PURE__ */ R("<span> </span>"), pi = /* @__PURE__ */ R('<a target="_blank" rel="noreferrer noopener"> </a>'), Ko = /* @__PURE__ */ R('<button type="button" role="tab"> </button>'), Wo = /* @__PURE__ */ R('<span class="ofx-count"> </span>'), Zo = /* @__PURE__ */ R('<button type="button"> <!></button>'), Xo = /* @__PURE__ */ R('<p class="ofx-error"> </p>'), Jo = /* @__PURE__ */ R(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Qo = /* @__PURE__ */ R('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), $o = /* @__PURE__ */ R('<p class="ofx-note">Loading…</p>'), el = /* @__PURE__ */ R('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), tl = /* @__PURE__ */ R('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), nl = /* @__PURE__ */ R('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), rl = /* @__PURE__ */ R('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), il = /* @__PURE__ */ R("<!> <!> <!> <!>", 1);
function al(e, t) {
  Rt(t, !0);
  let n = /* @__PURE__ */ H(null), r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H("all");
  const a = /* @__PURE__ */ Xe(() => o(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([o(i)]));
  let s = /* @__PURE__ */ H(Je(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(null), v = /* @__PURE__ */ H(null), g = /* @__PURE__ */ H(null);
  nr(() => {
    to(t.handle).then((m) => {
      m ? k(n, m, !0) : k(r, !0);
    });
  });
  const d = /* @__PURE__ */ Xe(() => {
    var m, w, $, le;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = o(n)) == null ? void 0 : m.posts_count],
      ["photos", (w = o(n)) == null ? void 0 : w.photos_count],
      ["videos", ($ = o(n)) == null ? void 0 : $.videos_count],
      ["likes", (le = o(n)) == null ? void 0 : le.likes_count]
    ].filter(([, ye]) => ye != null);
  });
  function h(m) {
    const w = new Set(o(s));
    w.has(m) ? w.delete(m) : w.add(m), k(s, w, !0);
  }
  function _(m) {
    var w, $;
    if (!((w = t.host) != null && w.play)) {
      k(l, m, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: hi(m.site, m.video_id),
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
      contextTitle: (($ = o(n)) == null ? void 0 : $.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  function x(m) {
    k(g, null), k(v, m, !0);
  }
  async function p(m) {
    k(g, null);
    const w = await oo(m.site, m.gallery_id);
    if (!w) {
      k(g, "Could not open that gallery");
      return;
    }
    if (w.length === 0) {
      k(g, "That site served no images for this gallery");
      return;
    }
    k(c, { gallery: m, count: w.length, index: 0 }, !0);
  }
  function S(m) {
    o(c) && k(
      c,
      {
        ...o(c),
        index: (o(c).index + m + o(c).count) % o(c).count
      },
      !0
    );
  }
  function W(m) {
    if (m.key === "Escape") {
      k(l, null), k(c, null), k(v, null);
      return;
    }
    o(c) && (m.key === "ArrowRight" && S(1), m.key === "ArrowLeft" && S(-1));
  }
  var L = il();
  Er("keydown", wr, W);
  var B = Pe(L);
  {
    var ae = (m) => {
      var w = Ho();
      E(m, w);
    }, he = (m) => {
      var w = Qo(), $ = Pe(w), le = G($);
      {
        var ye = (T) => {
          var O = zo(), X = J(O);
          q(() => ze(X, "src", o(n).header_url)), E(T, O);
        };
        j(le, (T) => {
          o(n).header_url && T(ye);
        });
      }
      var fe = A(le, 2), C = G(fe);
      let Y;
      var F = G(C);
      Kr(F, {
        get src() {
          return o(n).avatar_url;
        },
        get alt() {
          return o(n).display_name;
        },
        get name() {
          return o(n).display_name;
        }
      });
      var ne = A(C, 2), ve = G(ne), Te = G(ve), Ce = A(Te);
      {
        var tt = (T) => {
          var O = Bo();
          E(T, O);
        };
        j(Ce, (T) => {
          o(n).is_verified && T(tt);
        });
      }
      var ct = A(ve, 2), yt = G(ct), V = A(yt, 2), re = A(ct, 2);
      {
        var Re = (T) => {
          var O = Vo(), X = Pe(O);
          let Ee;
          var vt = J(X, !0), Fe = A(X, 2), Et = J(Fe, !0);
          q(() => {
            Ee = jn(X, 1, "ofx-bio", null, Ee, { "ofx-clamped": !o(f) }), K(vt, o(n).bio), K(Et, o(f) ? "less" : "more");
          }), ge("click", Fe, () => k(f, !o(f))), E(T, O);
        };
        j(re, (T) => {
          o(n).bio && T(Re);
        });
      }
      var Dn = A(re, 2);
      {
        var Wr = (T) => {
          var O = Go();
          $e(O, 21, () => o(d), ([X, Ee]) => X, (X, Ee) => {
            var vt = /* @__PURE__ */ Xe(() => ii(o(Ee), 2));
            let Fe = () => o(vt)[0], Et = () => o(vt)[1];
            var nt = qo(), cn = G(nt), sr = J(cn, !0), Ea = A(cn);
            q(
              (ka) => {
                K(sr, ka), K(Ea, ` ${Fe() ?? ""}`);
              },
              [() => Et().toLocaleString()]
            ), E(X, nt);
          }), E(T, O);
        };
        j(Dn, (T) => {
          o(d).length && T(Wr);
        });
      }
      var ar = A(Dn, 2), Zr = G(ar);
      {
        var ha = (T) => {
          var O = Yo(), X = J(O, !0);
          q(() => K(X, o(n).location)), E(T, O);
        };
        j(Zr, (T) => {
          o(n).location && T(ha);
        });
      }
      var Xr = A(Zr, 2);
      {
        var _a = (T) => {
          var O = pi(), X = J(O, !0);
          q(
            (Ee) => {
              ze(O, "href", o(n).website), K(X, Ee);
            },
            [() => o(n).website.replace(/^https?:\/\//, "")]
          ), E(T, O);
        };
        j(Xr, (T) => {
          o(n).website && T(_a);
        });
      }
      var pa = A(Xr, 2);
      {
        var ga = (T) => {
          var O = pi(), X = J(O);
          q(() => {
            ze(O, "href", o(n).of_url), K(X, `onlyfans.com/${o(n).of_username ?? ""}`);
          }), E(T, O);
        };
        j(pa, (T) => {
          o(n).of_url && T(ga);
        });
      }
      var ma = A(fe, 2);
      $e(ma, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([T, O]) => T, (T, O) => {
        var X = /* @__PURE__ */ Xe(() => ii(O, 2));
        let Ee = () => o(X)[0], vt = () => o(X)[1];
        var Fe = Ko();
        let Et;
        var nt = J(Fe, !0);
        q(() => {
          Et = jn(Fe, 1, "ofx-tab", null, Et, { "ofx-on": o(i) === Ee() }), ze(Fe, "aria-selected", o(i) === Ee()), K(nt, vt());
        }), ge("click", Fe, () => k(i, Ee(), !0)), E(T, Fe);
      });
      var Jr = A($, 2), Qr = A(G(Jr), 2);
      $e(Qr, 17, () => o(n).sources, (T) => T.site, (T, O) => {
        var X = Zo();
        let Ee;
        var vt = G(X), Fe = A(vt);
        {
          var Et = (nt) => {
            var cn = Wo(), sr = J(cn, !0);
            q(() => K(sr, (o(O).video_count ?? 0) + (o(O).image_count ?? 0))), E(nt, cn);
          };
          j(Fe, (nt) => {
            (o(O).video_count != null || o(O).image_count != null) && nt(Et);
          });
        }
        q(
          (nt) => {
            Ee = jn(X, 1, "ofx-btn ofx-outline", null, Ee, { "ofx-on": nt }), K(vt, `${o(O).site ?? ""} `);
          },
          [() => o(s).has(o(O).site)]
        ), ge("click", X, () => h(o(O).site)), E(T, X);
      });
      var ba = A(Qr, 2), $r = A(Jr, 2);
      {
        var wa = (T) => {
          var O = Xo(), X = J(O, !0);
          q(() => K(X, o(g))), E(T, O);
        };
        j($r, (T) => {
          o(g) && T(wa);
        });
      }
      var ei = A($r, 2);
      {
        var xa = (T) => {
          var O = Jo();
          E(T, O);
        };
        j(ei, (T) => {
          o(s).size === 0 && T(xa);
        });
      }
      var ti = A(ei, 2);
      $e(ti, 17, () => o(n).sources.filter((T) => o(s).has(T.site)), (T) => T.site, (T, O) => {
        jo(T, {
          get handle() {
            return o(n).handle;
          },
          get site() {
            return o(O).site;
          },
          get kinds() {
            return o(a);
          },
          onplay: (X) => _(X),
          ongallery: p,
          onphoto: x
        });
      });
      var ya = A(ti, 2);
      fa(ya, () => o(n).handle, (T) => {
        Mr(T, {
          get title() {
            return `More like ${o(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => no(o(n).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), q(() => {
        Y = jn(C, 1, "ofx-avatar", null, Y, { "ofx-overlap": !!o(n).header_url }), K(Te, `${o(n).display_name ?? ""} `), K(yt, `@${(o(n).of_username || o(n).handle) ?? ""} `), K(V, ` ${o(n).source_count ?? ""}
                    ${o(n).source_count === 1 ? "site" : "sites"}`);
      }), ge("click", ba, () => t.navigate("/x/onlyfans")), E(m, w);
    }, te = (m) => {
      var w = $o();
      E(m, w);
    };
    j(B, (m) => {
      o(r) ? m(ae) : o(n) ? m(he, 1) : m(te, -1);
    });
  }
  var pe = A(B, 2);
  {
    var ee = (m) => {
      var w = el(), $ = G(w), le = A($, 2);
      q(() => ze(le, "src", o(v).full)), ge("click", $, () => k(v, null)), E(m, w);
    };
    j(pe, (m) => {
      o(v) && m(ee);
    });
  }
  var b = A(pe, 2);
  {
    var y = (m) => {
      var w = tl(), $ = G(w), le = A($, 2);
      q((ye) => ze(le, "src", ye), [
        () => hi(o(l).site, o(l).video_id)
      ]), ge("click", $, () => k(l, null)), E(m, w);
    };
    j(b, (m) => {
      o(l) && m(y);
    });
  }
  var D = A(b, 2);
  {
    var se = (m) => {
      var w = rl(), $ = G(w), le = A($, 2);
      {
        var ye = (C) => {
          var Y = nl(), F = Pe(Y), ne = A(F, 2);
          ge("click", F, () => S(-1)), ge("click", ne, () => S(1)), E(C, Y);
        };
        j(le, (C) => {
          o(c).count > 1 && C(ye);
        });
      }
      var fe = A(le, 2);
      q(
        (C) => {
          ze(fe, "src", C), ze(fe, "alt", `${o(c).gallery.title ?? ""} ${o(c).index + 1} of ${o(c).count ?? ""}`);
        },
        [
          () => lo(o(c).gallery.site, o(c).gallery.gallery_id, o(c).index)
        ]
      ), ge("click", $, () => k(c, null)), E(m, w);
    };
    j(D, (m) => {
      o(c) && m(se);
    });
  }
  E(e, L), It();
}
ir(["click"]);
var sl = /* @__PURE__ */ R('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function ol(e, t) {
  Rt(t, !0);
  let n = gt(t, "path", 3, "");
  $s(t.api);
  const r = /* @__PURE__ */ Xe(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = sl(), a = G(i), s = G(a);
  {
    var f = (c) => {
      var v = Ln(), g = Pe(v);
      fa(g, () => o(r), (d) => {
        al(d, {
          get handle() {
            return o(r);
          },
          get navigate() {
            return t.navigate;
          },
          get host() {
            return t.host;
          }
        });
      }), E(c, v);
    }, l = (c) => {
      To(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    j(s, (c) => {
      o(r) ? c(f) : c(l, -1);
    });
  }
  E(e, i), It();
}
function ul({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = Je({ path: t ?? "", api: n, navigate: r, host: i }), s = Ps(ol, { target: e, props: a });
  return {
    update(f) {
      a.path = f ?? "";
    },
    destroy() {
      Fs(s);
    }
  };
}
export {
  ul as default
};

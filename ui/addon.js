var Ta = Object.defineProperty;
var ii = (e) => {
  throw TypeError(e);
};
var Ca = (e, t, n) => t in e ? Ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Oe = (e, t, n) => Ca(e, typeof t != "symbol" ? t + "" : t, n), lr = (e, t, n) => t.has(e) || ii("Cannot " + n);
var u = (e, t, n) => (lr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => t.has(e) ? ii("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), L = (e, t, n, r) => (lr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), K = (e, t, n) => (lr(e, t, "access private method"), n);
const pe = Symbol("uninitialized"), Ra = "http://www.w3.org/1999/xhtml", wi = !1;
var yi = Array.isArray, Ma = Array.prototype.indexOf, Kn = Array.prototype.includes, rr = Array.from, ki = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyDescriptors, Ia = Object.prototype, Na = Array.prototype, Pr = Object.getPrototypeOf, ai = Object.isExtensible;
const Oa = () => {
};
function La(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Si() {
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
const me = 2, on = 4, ir = 8, Ai = 1 << 24, tt = 16, Ze = 32, kt = 64, pr = 128, Dr = 256, We = 512, be = 1024, _e = 2048, rt = 4096, Ee = 8192, Ue = 16384, cn = 32768, Wn = 1 << 25, zt = 65536, Zn = 1 << 17, Pa = 1 << 18, vn = 1 << 19, Da = 1 << 20, ft = 1 << 25, Vt = 65536, Jn = 1 << 21, Xt = 1 << 22, Mt = 1 << 23, Qt = Symbol("$state"), Ti = Symbol("component"), Fa = Symbol(""), Bn = Symbol("attributes"), gr = Symbol("class"), br = Symbol("style"), gn = Symbol("text"), On = new class extends Error {
  constructor() {
    super(...arguments);
    Oe(this, "name", "StaleReactionError");
    Oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var bi;
const Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((bi = globalThis.document) != null && bi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ja() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ha() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ci(e) {
  return e === this.v;
}
function Ri(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Mi(e) {
  return !Ri(e, this.v);
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
function dt(e, t = !1, n) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      W
    ),
    l: null
  };
}
function ht(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Zi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Se = t.p, Fr(e);
}
function Fr(e = {}) {
  return ki(e, Ti, { value: !0 }), e;
}
function Ii() {
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
  (e.f & We) !== 0 || e.deps === null ? ve(e, be) : ve(e, rt);
}
function Ni(e) {
  if (e !== null)
    for (const t of e)
      (t.f & me) === 0 || (t.f & Vt) === 0 || (t.f ^= Vt, Ni(
        /** @type {Derived} */
        t.deps
      ));
}
function Oi(e, t, n) {
  (e.f & _e) !== 0 ? t.add(e) : (e.f & rt) !== 0 && n.add(e), Ni(e.deps), ve(e, be);
}
function Ln(e) {
  var t = G, n = W;
  Je(null), vt(null);
  try {
    return e();
  } finally {
    Je(t), vt(n);
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
    W
  ), l = ts(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function h(d) {
    if ((f.f & Ue) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (p) {
        lt(p, f);
      }
      Xn();
    }
  }
  var w = Li();
  if (n.length === 0) {
    c.then(() => h([])).finally(w);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ ns(d))).then(h).catch((d) => lt(d, f)).finally(w);
  }
  c ? c.then(() => {
    l(), v(), Xn();
  }) : v();
}
function ts() {
  var e = (
    /** @type {Effect} */
    W
  ), t = G, n = Se, r = (
    /** @type {Batch} */
    P
  );
  return function(a = !0) {
    vt(e), Je(t), ln(n), a && (e.f & Ue) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Xn(e = !0) {
  vt(null), Je(null), ln(null), e && (P == null || P.deactivate());
}
function Li() {
  var e = (
    /** @type {Effect} */
    W
  ), t = e.b, n = (
    /** @type {Batch} */
    P
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  var t = me | _e;
  return W !== null && (W.f |= vn), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: Ci,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      pe
    ),
    wv: 0,
    parent: W,
    ac: null
  };
}
const bn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ns(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    W
  );
  r === null && za();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = qt(
    /** @type {V} */
    pe
  ), o = !G, f = /* @__PURE__ */ new Set();
  return bs(() => {
    var d, p;
    var l = (
      /** @type {Effect} */
      W
    ), c = Si();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (g) => {
        g !== On && c.reject(g);
      }).finally(Xn);
    } catch (g) {
      c.reject(g), Xn();
    }
    var h = (
      /** @type {Batch} */
      P
    );
    if (o) {
      if ((l.f & cn) !== 0)
        var w = Li();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (p = h.async_deriveds.get(l)) == null || p.reject(bn);
      else
        for (const g of f.values())
          g.reject(bn);
      f.add(c), h.async_deriveds.set(l, c);
    }
    const v = (g, _ = void 0) => {
      w == null || w(), f.delete(c), _ !== bn && (h.activate(), _ ? (a.f |= Mt, fn(a, _)) : ((a.f & Mt) !== 0 && (a.f ^= Mt), fn(a, g)), h.deactivate());
    };
    c.promise.then(v, (g) => v(null, g || "unknown"));
  }), Wi(() => {
    for (const l of f)
      l.reject(bn);
  }), new Promise((l) => {
    function c(h) {
      function w() {
        h === i ? l(a) : c(i);
      }
      h.then(w, w);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ jr(e);
  return ta(t), t;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const t = /* @__PURE__ */ jr(e);
  return t.equals = Mi, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Me(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hr(e) {
  var t, n = W, r = e.parent;
  if (!It && r !== null && e.v !== pe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Ue | Ee)) !== 0)
    return ja(), e.v;
  vt(r);
  try {
    e.f &= ~Vt, is(e), t = aa(e);
  } finally {
    vt(n);
  }
  return t;
}
function Pi(e) {
  var t = Hr(e);
  if (!e.equals(t) && (e.wv = ra(), (!(P != null && P.is_fork) || e.deps === null) && (P !== null ? (P.capture(e, t, !0), En == null || En.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ve(e, be);
    return;
  }
  It || (xe !== null ? (Br() || P != null && P.is_fork) && xe.set(e, t) : Ur(e));
}
function as(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && Ln(() => {
        n.ac.abort(On), n.ac = null;
      }), n.fn !== null && (n.teardown = Oa), An(n, 0), Gr(n));
}
function Di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && un(t);
}
let fr = null, Yt = null, P = null, En = null, xe = null, mr = null, ur = !1, Zt = null, qn = null;
var si = 0;
let ss = 1;
var $t, Ct, Lt, en, tn, nn, gt, rn, Te, Cn, bt, $e, at, an, Pt, ne, xr, mn, wr, Fi, Ui, Kt, os, xn;
const er = class er {
  constructor() {
    j(this, ne);
    Oe(this, "id", ss++);
    /** True as soon as `#process` was called */
    j(this, $t, !1);
    Oe(this, "linked", !0);
    /** @type {Batch | null} */
    j(this, Ct, null);
    /** @type {Batch | null} */
    j(this, Lt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Oe(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    j(this, en, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    j(this, tn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    j(this, nn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    j(this, gt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    j(this, rn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    j(this, Te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    j(this, Cn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    j(this, bt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    j(this, $e, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    j(this, at, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    j(this, an, /* @__PURE__ */ new Set());
    Oe(this, "is_fork", !1);
    j(this, Pt, !1);
    Yt === null ? fr = Yt = this : (L(Yt, Lt, this), L(this, Ct, Yt)), Yt = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    u(this, at).has(t) || u(this, at).set(t, { d: [], m: [] }), u(this, an).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = u(this, at).get(t);
    if (r) {
      u(this, at).delete(t);
      for (var i of r.d)
        ve(i, _e), n(i);
      for (i of r.m)
        ve(i, rt), n(i);
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
    P = this;
  }
  deactivate() {
    P = null, xe = null;
  }
  flush() {
    try {
      ur = !0, P = this, K(this, ne, mn).call(this);
    } finally {
      si = 0, mr = null, Zt = null, qn = null, ur = !1, P = null, xe = null, ut.clear();
    }
  }
  discard() {
    var t;
    for (const n of u(this, tn)) n(this);
    u(this, tn).clear();
    for (const n of this.async_deriveds.values())
      n.reject(bn);
    K(this, ne, xn).call(this), (t = u(this, rn)) == null || t.resolve();
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
    if (L(this, nn, u(this, nn) + 1), t) {
      let r = u(this, gt).get(n) ?? 0;
      u(this, gt).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (L(this, nn, u(this, nn) - 1), t) {
      let r = u(this, gt).get(n) ?? 0;
      r === 1 ? u(this, gt).delete(n) : u(this, gt).set(n, r - 1);
    }
    u(this, Pt) || (L(this, Pt, !0), xt(() => {
      L(this, Pt, !1), this.linked && this.flush();
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
      u(this, $e).add(r);
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
    return (u(this, rn) ?? L(this, rn, Si())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new er();
      ur || xt(() => {
        u(t, $t) || t.flush();
      });
    }
    return P;
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
      if (Zt !== null && n === W && (G === null || (G.f & me) === 0))
        return;
      if ((r & (kt | Ze)) !== 0) {
        if ((r & be) === 0)
          return;
        n.f ^= be;
      }
    }
    u(this, Te).push(n);
  }
};
$t = new WeakMap(), Ct = new WeakMap(), Lt = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), gt = new WeakMap(), rn = new WeakMap(), Te = new WeakMap(), Cn = new WeakMap(), bt = new WeakMap(), $e = new WeakMap(), at = new WeakMap(), an = new WeakMap(), Pt = new WeakMap(), ne = new WeakSet(), xr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, gt).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (u(this, at).has(t)) {
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
  var l, c, h, w;
  L(this, $t, !0), si++ > 1e3 && (K(this, ne, xn).call(this), ls());
  for (const v of u(this, bt))
    u(this, $e).delete(v), ve(v, _e), this.schedule(v);
  for (const v of u(this, $e))
    ve(v, rt), this.schedule(v);
  const t = u(this, Te);
  L(this, Te, []), this.apply();
  var n = Zt = [], r = [], i = qn = [];
  for (const v of t)
    try {
      K(this, ne, wr).call(this, v, n, r);
    } catch (d) {
      throw zi(v), K(this, ne, xr).call(this) || this.discard(), d;
    }
  if (P = null, i.length > 0) {
    var a = er.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Zt = null, qn = null, K(this, ne, xr).call(this)) {
    K(this, ne, Kt).call(this, r), K(this, ne, Kt).call(this, n);
    for (const [v, d] of u(this, at))
      Hi(v, d);
    i.length > 0 && /** @type {unknown} */
    K(l = P, ne, mn).call(l);
    return;
  }
  const o = K(this, ne, Fi).call(this);
  if (o) {
    K(this, ne, Kt).call(this, r), K(this, ne, Kt).call(this, n), K(c = o, ne, Ui).call(c, this);
    return;
  }
  u(this, bt).clear(), u(this, $e).clear();
  for (const v of u(this, en)) v(this);
  u(this, en).clear(), En = this, oi(r), oi(n), En = null, (h = u(this, rn)) == null || h.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    P
  );
  if (u(this, nn) === 0 && (u(this, Te).length === 0 || f !== null) && K(this, ne, xn).call(this), u(this, Te).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Te).push(...u(this, Te).filter((d) => !u(v, Te).includes(d)));
    } else
      f = this;
  f !== null && (ut.clear(), K(w = f, ne, mn).call(w));
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
    var a = i.f, o = (a & (Ze | kt)) !== 0, f = o && (a & be) !== 0, l = f || (a & Ee) !== 0 || u(this, at).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= be : (a & on) !== 0 ? n.push(i) : Un(i) && ((a & tt) !== 0 && u(this, $e).add(i), un(i));
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
}, Fi = function() {
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
Ui = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && a.promise.then(o.resolve).catch(o.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(u(t, bt), u(t, $e));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & me) !== 0 && (i.f & (_e | rt)) === 0))
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
          o & (Xt | tt) && !this.async_deriveds.has(f) && (u(this, $e).delete(f), ve(f, _e), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), K(r = t, ne, xn).call(r), P = this, K(this, ne, mn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Kt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Oi(t[n], u(this, bt), u(this, $e));
}, os = function() {
  var w;
  for (let v = fr; v !== null; v = u(v, Lt)) {
    var t = v.id < this.id, n = [];
    for (const [d, [p, g]] of this.current) {
      if (v.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (t && p !== r)
          v.current.set(d, [p, g]);
        else
          continue;
      }
      n.push(d);
    }
    if (t)
      for (const [d, p] of this.async_deriveds) {
        const g = v.async_deriveds.get(d);
        g && p.promise.then(g.resolve).catch(g.reject);
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
              var g;
              (p.f & (tt | Xt)) !== 0 ? v.schedule(p) : K(g = v, ne, Kt).call(g, [p]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          ji(l, a, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, p]) => {
          const g = this.current.get(d);
          return g ? g[0] !== p[0] || g[1] !== p[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, Cn))
            (d.f & (Ue | Ee | Zn)) === 0 && zr(d, c, f) && ((d.f & (Xt | tt)) !== 0 ? (ve(d, _e), v.schedule(d)) : u(v, bt).add(d));
        if (u(v, Te).length > 0 && !u(v, Pt)) {
          v.apply();
          for (var h of u(v, Te))
            K(w = v, ne, wr).call(w, h, [], []);
          L(v, Te, []);
        }
        v.deactivate();
      }
    }
  }
}, xn = function() {
  if (this.linked) {
    var t = u(this, Ct), n = u(this, Lt);
    t === null ? fr = n : L(t, Lt, n), n === null ? Yt = t : L(n, Ct, t), this.linked = !1;
  }
};
let Bt = er;
function ls() {
  try {
    Ya();
  } catch (e) {
    lt(e, mr);
  }
}
let Qe = null;
function oi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ue | Ee)) === 0 && Un(r) && (Qe = /* @__PURE__ */ new Set(), un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qi(r), (Qe == null ? void 0 : Qe.size) > 0)) {
        ut.clear();
        for (const i of Qe) {
          if ((i.f & (Ue | Ee)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            Qe.has(o) && (Qe.delete(o), a.push(o)), o = o.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const l = a[f];
            (l.f & (Ue | Ee)) === 0 && un(l);
          }
        }
        Qe.clear();
      }
    }
    Qe = null;
  }
}
function ji(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & me) !== 0 ? ji(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Xt | tt)) !== 0 && (a & _e) === 0 && zr(i, t, r) && (ve(i, _e), Vr(
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
  P.schedule(e);
}
function Hi(e, t) {
  if (!((e.f & Ze) !== 0 && (e.f & be) !== 0)) {
    (e.f & _e) !== 0 ? t.d.push(e) : (e.f & rt) !== 0 && t.m.push(e), ve(e, be);
    for (var n = e.first; n !== null; )
      Hi(n, t), n = n.next;
  }
}
function zi(e) {
  ve(e, be);
  for (var t = e.first; t !== null; )
    zi(t), t = t.next;
}
let Qn = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Vi = !1;
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ci,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const n = qt(e);
  return ta(n), n;
}
// @__NO_SIDE_EFFECTS__
function fs(e, t = !1, n = !0) {
  const r = qt(e);
  return t || (r.equals = Mi), r;
}
function x(e, t, n = !1) {
  G !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!nt || (G.f & Zn) !== 0) && Ii() && (G.f & (me | tt | Xt | Zn)) !== 0 && (ct === null || !ct.has(e)) && Za();
  let r = n ? Ke(t) : t;
  return fn(e, r, qn);
}
function fn(e, t, n = null) {
  if (!e.equals(t)) {
    It ? ut.set(e, t) : ut.has(e) || ut.set(e, e.v);
    var r = Bt.ensure();
    if (r.capture(e, t), (e.f & me) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & _e) !== 0 && Hr(i), xe === null && Ur(i);
    }
    e.wv = ra(), Bi(e, _e, n), W !== null && (W.f & be) !== 0 && (W.f & (Ze | kt)) === 0 && (Ve === null ? ws([e]) : Ve.push(e)), !r.is_fork && Qn.size > 0 && !Vi && us();
  }
  return t;
}
function us() {
  Vi = !1;
  for (const e of Qn) {
    (e.f & be) !== 0 && ve(e, rt);
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
  x(e, e.v + 1);
}
function Bi(e, t, n) {
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
        xe == null || xe.delete(c), (f & Vt) === 0 && (f & We && (W === null || (W.f & Jn) === 0) && (o.f |= Vt), Bi(c, rt, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & tt) !== 0 && Qe !== null && Qe.add(h), n !== null ? n.push(h) : Vr(h);
      }
    }
}
function Ke(e) {
  if (typeof e != "object" || e === null || Qt in e || Ti in e)
    return e;
  const t = Pr(e);
  if (t !== Ia && t !== Na)
    return e;
  var n = /* @__PURE__ */ new Map(), r = yi(e), i = /* @__PURE__ */ U(0), a = Ht, o = (f) => {
    if (Ht === a)
      return f();
    var l = G, c = Ht;
    Je(null), fi(a);
    var h = f();
    return Je(l), fi(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ U(
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
          var w = /* @__PURE__ */ U(c.value);
          return n.set(l, w), w;
        }) : x(h, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ U(pe));
            n.set(l, h), Sn(i);
          }
        } else
          x(c, pe), Sn(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === Qt)
          return e;
        var h = n.get(l), w = l in f;
        if (h === void 0 && (!w || (d = kn(f, l)) != null && d.writable) && (h = o(() => {
          var p = Ke(w ? f[l] : pe), g = /* @__PURE__ */ U(p);
          return g;
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
          var w = n.get(l), v = w == null ? void 0 : w.v;
          if (w !== void 0 && v !== pe)
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
        if (c !== void 0 || W !== null && (!h || (v = kn(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = h ? Ke(f[l]) : pe, p = /* @__PURE__ */ U(d);
            return p;
          }), n.set(l, c));
          var w = s(c);
          if (w === pe)
            return !1;
        }
        return h;
      },
      set(f, l, c, h) {
        var R;
        var w = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          w.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? x(p, pe) : d in f && (p = o(() => /* @__PURE__ */ U(pe)), n.set(d + "", p));
          }
        if (w === void 0)
          (!v || (R = kn(f, l)) != null && R.writable) && (w = o(() => /* @__PURE__ */ U(void 0)), x(w, Ke(c)), n.set(l, w));
        else {
          v = w.v !== pe;
          var g = o(() => Ke(c));
          x(w, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(f, l);
        if (_ != null && _.set && _.set.call(h, c), !v) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= E.v && x(E, O + 1);
          }
          Sn(i);
        }
        return !0;
      },
      ownKeys(f) {
        s(i);
        var l = Reflect.ownKeys(f).filter((w) => {
          var v = n.get(w);
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
var yr, qi, Gi, Yi;
function cs() {
  if (yr === void 0) {
    yr = window, qi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gi = kn(t, "firstChild").get, Yi = kn(t, "nextSibling").get, ai(e) && (e[gr] = void 0, e[Bn] = null, e[br] = void 0, e.__e = void 0), ai(n) && (n[gn] = void 0);
  }
}
function yt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return (
    /** @type {TemplateNode | null} */
    Gi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
function F(e, t) {
  return /* @__PURE__ */ Gt(e);
}
function we(e, t = !1) {
  {
    var n = /* @__PURE__ */ Gt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Pn(n) : n;
  }
}
function J(e, t = !1) {
  return /* @__PURE__ */ Gt(e);
}
function A(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Pn(r);
  return r;
}
function vs(e) {
  e.textContent = "";
}
function Ki() {
  return !1;
}
function ds(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function hs(e) {
  var t = W;
  if (t === null)
    return G.f |= Mt, e;
  if ((t.f & cn) === 0 && (t.f & on) === 0)
    throw e;
  lt(e, t);
}
function lt(e, t) {
  if (!(t !== null && (t.f & Ue) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & pr) !== 0 && (t.f & (Ue | Wn)) === 0) {
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
  W === null && (G === null && Ga(), qa()), It && Ba();
}
function ps(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Et(e, t) {
  var n = W;
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
  P == null || P.register_created_effect(r);
  var i = r;
  if ((e & on) !== 0)
    Zt !== null ? Zt.push(r) : Bt.ensure().schedule(r);
  else if (t !== null) {
    try {
      un(r);
    } catch (o) {
      throw Me(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & vn) === 0 && (i = i.first, (e & tt) !== 0 && (e & zt) !== 0 && i !== null && (i.f |= zt));
  }
  if (i !== null && (i.parent = n, n !== null && ps(i, n), G !== null && (G.f & me) !== 0 && (e & kt) === 0)) {
    var a = (
      /** @type {Derived} */
      G
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Br() {
  return G !== null && !nt;
}
function Wi(e) {
  const t = Et(ir, null);
  return ve(t, be), t.teardown = e, t;
}
function Dn(e) {
  _s();
  var t = (
    /** @type {Effect} */
    W.f
  ), n = !G && (t & Ze) !== 0 && Se !== null && !Se.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Se
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Zi(e);
}
function Zi(e) {
  return Et(on | Da, e);
}
function gs(e) {
  Bt.ensure();
  const t = Et(kt | vn, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Me(t), r(void 0);
    }) : (Me(t), r(void 0));
  });
}
function Ji(e) {
  return Et(on, e);
}
function bs(e) {
  return Et(Xt | vn, e);
}
function qr(e, t = 0) {
  return Et(ir | t, e);
}
function H(e, t = [], n = [], r = []) {
  es(r, t, n, (i) => {
    Et(ir, () => {
      e(...i.map(s));
    });
  });
}
function Fn(e, t = 0) {
  var n = Et(tt | t, e);
  return n;
}
function Ge(e) {
  return Et(Ze | vn, e);
}
function Xi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = It, r = G;
    li(!0), Je(null);
    try {
      t.call(null);
    } catch (i) {
      lt(i, e.parent);
    } finally {
      li(n), Je(r);
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
    (n.f & kt) !== 0 ? n.parent = null : Me(n, t), n = r;
  }
}
function ms(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ze) === 0 && Me(t), t = n;
  }
}
function Me(e, t = !0) {
  var n = !1;
  (t || (e.f & Pa) !== 0) && e.nodes !== null && e.nodes.end !== null && (xs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Wn, Gr(e, t && !n), An(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Xi(e), e.f ^= Wn, e.f |= Ue;
  var i = e.parent;
  i !== null && i.first !== null && Qi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Pn(e);
    e.remove(), e = n;
  }
}
function Qi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = !0) {
  var r = [];
  e.f |= Dr, $i(e, r, !0);
  var i = () => {
    n && Me(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function $i(e, t, n) {
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
        (i.f & Ze) !== 0 && (e.f & tt) !== 0;
        $i(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function $n(e) {
  e.f &= ~Dr, ea(e, !0);
}
function ea(e, t) {
  if ((e.f & Dr) === 0 && (e.f & Ee) !== 0) {
    e.f ^= Ee, (e.f & be) === 0 && (ve(e, _e), Bt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & zt) !== 0 || (n.f & Ze) !== 0;
      ea(n, i ? t : !1), n = r;
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
function li(e) {
  It = e;
}
let G = null, nt = !1;
function Je(e) {
  G = e;
}
let W = null;
function vt(e) {
  W = e;
}
let ct = null;
function ta(e) {
  G !== null && (ct ?? (ct = /* @__PURE__ */ new Set())).add(e);
}
let Ce = null, Fe = 0, Ve = null;
function ws(e) {
  Ve = e;
}
let na = 1, Nt = 0, Ht = Nt;
function fi(e) {
  Ht = e;
}
function ra() {
  return ++na;
}
function Un(e) {
  var t = e.f;
  if ((t & _e) !== 0)
    return !0;
  if (t & me && (e.f &= ~Vt), (t & rt) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Un(
        /** @type {Derived} */
        a
      ) && Pi(
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
function ia(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ct !== null && ct.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & me) !== 0 ? ia(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ve(a, _e) : (a.f & be) !== 0 && ve(a, rt), Vr(
        /** @type {Effect} */
        a
      ));
    }
}
function aa(e) {
  var t = Ce, n = Fe, r = Ve, i = G, a = ct, o = Se, f = nt, l = Ht, c = e.f;
  Ce = /** @type {null | Value[]} */
  null, Fe = 0, Ve = null, G = (c & (Ze | kt)) === 0 ? e : null, ct = null, ln(e.ctx), nt = !1, Ht = ++Nt, e.ac !== null && (Ln(() => {
    e.ac.abort(On);
  }), e.ac = null);
  try {
    e.f |= Jn;
    var h = (
      /** @type {Function} */
      e.fn
    ), w = h();
    e.f |= cn;
    var v = ui(e);
    if (Ii() && Ve !== null && !nt && v !== null && (e.f & (me | rt | _e)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      Ve.length; d++)
        ia(
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
    return (e.f & Mt) !== 0 && (e.f ^= Mt), w;
  } catch (p) {
    return ui(e), hs(p);
  } finally {
    e.f ^= Jn, Ce = t, Fe = n, Ve = r, G = i, ct = a, ln(o), nt = f, Ht = l;
  }
}
function ui(e) {
  var i;
  var t = e.deps, n = P == null ? void 0 : P.is_fork;
  if (Ce !== null) {
    var r;
    if (n || An(e, Fe), t !== null && Fe > 0)
      for (t.length = Fe + Ce.length, r = 0; r < Ce.length; r++)
        t[Fe + r] = Ce[r];
    else
      e.deps = t = Ce;
    if (Br() && (e.f & We) !== 0)
      for (r = Fe; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Fe < t.length && (An(e, Fe), t.length = Fe);
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
  (Ce === null || !Kn.call(Ce, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & We) !== 0 && (a.f ^= We, a.f &= ~Vt), a.v !== pe && Ur(a), a.ac !== null && Ln(() => {
      a.ac.abort(On), a.ac = null, ve(a, _e);
    }), as(a), An(a, 0);
  }
}
function An(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ys(e, n[r]);
}
function un(e) {
  var t = e.f;
  if ((t & Ue) === 0) {
    ve(e, be);
    var n = W, r = Gn;
    W = e, Gn = (t & (Ze | kt)) === 0;
    try {
      (t & (tt | Ai)) !== 0 ? ms(e) : Gr(e), Xi(e);
      var i = aa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = na;
      var a;
      wi && Xa && (e.f & _e) !== 0 && e.deps;
    } finally {
      Gn = r, W = n;
    }
  }
}
function s(e) {
  var t = e.f, n = (t & me) !== 0;
  if (G !== null && !nt) {
    var r = W !== null && (W.f & Ue) !== 0;
    if (!r && (ct === null || !ct.has(e))) {
      var i = G.deps;
      if ((G.f & Jn) !== 0)
        e.rv < Nt && (e.rv = Nt, Ce === null && i !== null && i[Fe] === e ? Fe++ : Ce === null ? Ce = [e] : Ce.push(e));
      else {
        G.deps ?? (G.deps = []), Kn.call(G.deps, e) || G.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [G] : Kn.call(a, G) || a.push(G);
      }
    }
  }
  if (It && ut.has(e))
    return ut.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (It) {
      var f = o.v;
      return ((o.f & be) === 0 && o.reactions !== null || oa(o)) && (f = Hr(o)), ut.set(o, f), f;
    }
    var l = (o.f & We) === 0 && !nt && G !== null && (Gn || (G.f & We) !== 0), c = (o.f & cn) === 0;
    Un(o) && (l && (o.f |= We), Pi(o)), l && !c && (Di(o), sa(o));
  }
  if (xe != null && xe.has(e))
    return xe.get(e);
  if ((e.f & Mt) !== 0)
    throw e.v;
  return e.v;
}
function sa(e) {
  if (e.f |= We, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & me) !== 0 && (t.f & We) === 0 && (Di(
        /** @type {Derived} */
        t
      ), sa(
        /** @type {Derived} */
        t
      ));
}
function oa(e) {
  if (e.v === pe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & me) !== 0 && oa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ar(e) {
  var t = nt;
  try {
    return nt = !0, e();
  } finally {
    nt = t;
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
const Ot = Symbol("events"), la = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function Es(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || Ar.call(t, a), !a.cancelBubble)
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
  t instanceof HTMLMediaElement) && Wi(() => {
    t.removeEventListener(e, o, a);
  });
}
function se(e, t, n) {
  (t[Ot] ?? (t[Ot] = {}))[e] = n;
}
function dn(e) {
  for (var t = 0; t < e.length; t++)
    la.add(e[t]);
  for (var n of Er)
    n(e);
}
let cr = null, vr = !1;
function Ar(e) {
  var g, _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], a = (
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
    ki(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var h = G, w = W;
    Je(null), vt(null);
    try {
      for (var v, d = []; a !== null && a !== t; ) {
        try {
          var p = (_ = a[Ot]) == null ? void 0 : _[r];
          p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && p.call(a, e);
        } catch (E) {
          v ? d.push(E) : v = E;
        }
        if (e.cancelBubble) break;
        o++, a = o < i.length ? (
          /** @type {Element} */
          i[o]
        ) : null;
      }
      if (v) {
        for (let E of d)
          queueMicrotask(() => {
            throw E;
          });
        throw v;
      }
    } finally {
      e[Ot] = t, delete e.currentTarget, Je(h), vt(w);
    }
  }
}
var mi;
const dr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((mi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : mi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
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
function fa(e) {
  var t = ds("template");
  return t.innerHTML = Ss(e.replaceAll("<!>", "<!---->")), t.content;
}
function Tn(e, t) {
  var n = (
    /** @type {Effect} */
    W
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function T(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = fa(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || qi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Tn(f, l);
    } else
      Tn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function As(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        fa(i)
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
    return Tn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ts(e, t) {
  return /* @__PURE__ */ As(e, t, "svg");
}
function zn(e = "") {
  {
    var t = yt(e + "");
    return Tn(t, t), t;
  }
}
function hn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = yt();
  return e.append(t, n), Tn(t, n), e;
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
var Be, Lr, qe, Dt, ye, Le, ke, Pe, st, Ft, Rt, sn, Rn, Mn, mt, tr, oe, Ls, Ps, Tr, Ds, Cr, wn, Yn, Rr, Mr;
class Os {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    j(this, oe);
    /** @type {Boundary | null} */
    Oe(this, "parent");
    Oe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Oe(this, "transform_error");
    /** @type {TemplateNode} */
    j(this, Be);
    /** @type {TemplateNode | null} */
    j(this, Lr, null);
    /** @type {BoundaryProps} */
    j(this, qe);
    /** @type {((anchor: Node) => void)} */
    j(this, Dt);
    /** @type {Effect} */
    j(this, ye);
    /** @type {Effect | null} */
    j(this, Le, null);
    /** @type {Effect | null} */
    j(this, ke, null);
    /** @type {Effect | null} */
    j(this, Pe, null);
    /** @type {DocumentFragment | null} */
    j(this, st, null);
    j(this, Ft, 0);
    j(this, Rt, 0);
    j(this, sn, !1);
    /** @type {Set<Effect>} */
    j(this, Rn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    j(this, Mn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    j(this, mt, null);
    j(this, tr, Ms(() => (L(this, mt, qt(u(this, Ft))), () => {
      L(this, mt, null);
    })));
    var a;
    L(this, Be, t), L(this, qe, n), L(this, Dt, (o) => {
      var f = (
        /** @type {Effect} */
        W
      );
      f.b = this, f.f |= pr, r(o);
    }), this.parent = /** @type {Effect} */
    W.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((o) => o), L(this, ye, Fn(() => {
      K(this, oe, Cr).call(this);
    }, Is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Oi(t, u(this, Rn), u(this, Mn));
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
    K(this, oe, Rr).call(this, t, n), L(this, Ft, u(this, Ft) + t), !(!u(this, mt) || u(this, sn)) && (L(this, sn, !0), xt(() => {
      L(this, sn, !1), u(this, mt) && fn(u(this, mt), u(this, Ft));
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
    P != null && P.is_fork ? (u(this, Le) && P.skip_effect(u(this, Le)), u(this, ke) && P.skip_effect(u(this, ke)), u(this, Pe) && P.skip_effect(u(this, Pe)), P.oncommit(() => {
      K(this, oe, Mr).call(this, t);
    })) : K(this, oe, Mr).call(this, t);
  }
}
Be = new WeakMap(), Lr = new WeakMap(), qe = new WeakMap(), Dt = new WeakMap(), ye = new WeakMap(), Le = new WeakMap(), ke = new WeakMap(), Pe = new WeakMap(), st = new WeakMap(), Ft = new WeakMap(), Rt = new WeakMap(), sn = new WeakMap(), Rn = new WeakMap(), Mn = new WeakMap(), mt = new WeakMap(), tr = new WeakMap(), oe = new WeakSet(), Ls = function() {
  try {
    L(this, Le, Ge(() => u(this, Dt).call(this, u(this, Be))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ps = function(t) {
  const n = u(this, qe).failed, { reset: r, invoke_onerror: i } = K(this, oe, Tr).call(this, t);
  xt(i), n && L(this, Pe, Ge(() => {
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
Tr = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ha();
      return;
    }
    n = !0, r && Ja(), u(this, Pe) !== null && jt(u(this, Pe), () => {
      L(this, Pe, null);
    }), K(this, oe, Yn).call(this, () => {
      K(this, oe, Cr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, qe)).onerror) == null || f.call(o, t, i), r = !1;
    } catch (l) {
      lt(l, u(this, ye) && u(this, ye).parent);
    }
  } };
}, Ds = function() {
  const t = u(this, qe).pending;
  t && (this.is_pending = !0, L(this, ke, Ge(() => t(u(this, Be)))), xt(() => {
    var n = L(this, st, document.createDocumentFragment()), r = yt(), i = !1;
    if (n.append(r), L(this, Le, K(this, oe, Yn).call(this, () => {
      try {
        return Ge(() => u(this, Dt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (o) {
          lt(o, u(this, ye).parent);
        }
        return null;
      }
    })), u(this, Le) === null) {
      L(this, st, null), i && K(this, oe, wn).call(
        this,
        /** @type {Batch} */
        P
      );
      return;
    }
    u(this, Rt) === 0 && (u(this, Be).before(n), L(this, st, null), jt(
      /** @type {Effect} */
      u(this, ke),
      () => {
        L(this, ke, null);
      }
    ), K(this, oe, wn).call(
      this,
      /** @type {Batch} */
      P
    ));
  }));
}, Cr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), L(this, Rt, 0), L(this, Ft, 0), L(this, Le, Ge(() => {
      u(this, Dt).call(this, u(this, Be));
    })), u(this, Rt) > 0) {
      var t = L(this, st, document.createDocumentFragment());
      Yr(u(this, Le), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, qe).pending
      );
      L(this, ke, Ge(() => n(u(this, Be))));
    } else
      K(this, oe, wn).call(
        this,
        /** @type {Batch} */
        P
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
  var n = W, r = G, i = Se;
  vt(u(this, ye)), Je(u(this, ye)), ln(u(this, ye).ctx);
  try {
    return Bt.ensure(), t();
  } finally {
    vt(n), Je(r), ln(i);
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
    this.parent && K(r = this.parent, oe, Rr).call(r, t, n);
    return;
  }
  L(this, Rt, u(this, Rt) + t), u(this, Rt) === 0 && (K(this, oe, wn).call(this, n), u(this, ke) && jt(u(this, ke), () => {
    L(this, ke, null);
  }), u(this, st) && (u(this, Be).before(u(this, st)), L(this, st, null)));
}, /**
 * @param {unknown} error
 */
Mr = function(t) {
  u(this, Le) && (Me(u(this, Le)), L(this, Le, null)), u(this, ke) && (Me(u(this, ke)), L(this, ke, null)), u(this, Pe) && (Me(u(this, Pe)), L(this, Pe, null));
  let n = u(this, qe).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: o } = K(this, oe, Tr).call(this, i);
    o(), n && L(this, Pe, K(this, oe, Yn).call(this, () => {
      try {
        return Ge(() => {
          var f = (
            /** @type {Effect} */
            W
          );
          f.b = this, f.f |= pr, n(
            u(this, Be),
            () => i,
            () => a
          );
        });
      } catch (f) {
        return lt(
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
      lt(a, u(this, ye) && u(this, ye).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => lt(a, u(this, ye) && u(this, ye).parent)
    ) : r(i);
  });
};
function B(e, t) {
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
        dt({});
        var p = (
          /** @type {ComponentContext} */
          Se
        );
        a && (p.c = a), i && (r.$$events = i), l = e(d, r) || Fr(), ht();
      },
      f
    );
    var w = /* @__PURE__ */ new Set(), v = (d) => {
      for (var p = 0; p < d.length; p++) {
        var g = d[p];
        if (!w.has(g)) {
          w.add(g);
          var _ = Rs(g);
          for (const R of [t, document]) {
            var E = Vn.get(R);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Vn.set(R, E));
            var O = E.get(g);
            O === void 0 ? (R.addEventListener(g, Ar, { passive: _ }), E.set(g, 1)) : E.set(g, O + 1);
          }
        }
      }
    };
    return v(rr(la)), Er.add(v), () => {
      var _;
      for (var d of w)
        for (const E of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Vn.get(E)
          ), g = (
            /** @type {number} */
            p.get(d)
          );
          --g == 0 ? (E.removeEventListener(d, Ar), p.delete(d), p.size === 0 && Vn.delete(E)) : p.set(d, g);
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
var et, ot, De, Ut, In, Nn, nr;
class Kr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    j(this, et, /* @__PURE__ */ new Map());
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
    j(this, ot, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    j(this, De, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    j(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    j(this, In, !0);
    /**
     * @param {Batch} batch
     */
    j(this, Nn, (t) => {
      if (u(this, et).has(t)) {
        var n = (
          /** @type {Key} */
          u(this, et).get(t)
        ), r = u(this, ot).get(n);
        if (r)
          $n(r), u(this, Ut).delete(n);
        else {
          var i = u(this, De).get(n);
          i && ($n(i.effect), u(this, ot).set(n, i.effect), u(this, De).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, o] of u(this, et)) {
          if (u(this, et).delete(a), a === t)
            break;
          const f = u(this, De).get(o);
          f && (Me(f.effect), u(this, De).delete(o));
        }
        for (const [a, o] of u(this, ot)) {
          if (a === n || u(this, Ut).has(a)) continue;
          const f = () => {
            if (Array.from(u(this, et).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Yr(o, c), c.append(yt()), u(this, De).set(a, { effect: o, fragment: c });
            } else
              Me(o);
            u(this, Ut).delete(a), u(this, ot).delete(a);
          };
          u(this, In) || !r ? (u(this, Ut).add(a), jt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    j(this, nr, (t) => {
      u(this, et).delete(t);
      const n = Array.from(u(this, et).values());
      for (const [r, i] of u(this, De))
        n.includes(r) || (Me(i.effect), u(this, De).delete(r));
    });
    this.anchor = t, L(this, In, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      P
    ), i = Ki();
    if (n && !u(this, ot).has(t) && !u(this, De).has(t))
      if (i) {
        var a = document.createDocumentFragment(), o = yt();
        a.append(o), u(this, De).set(t, {
          effect: Ge(() => n(o)),
          fragment: a
        });
      } else
        u(this, ot).set(
          t,
          Ge(() => n(this.anchor))
        );
    if (u(this, et).set(r, t), i) {
      for (const [f, l] of u(this, ot))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, De))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Nn)), r.ondiscard(u(this, nr));
    } else
      u(this, Nn).call(this, r);
  }
}
et = new WeakMap(), ot = new WeakMap(), De = new WeakMap(), Ut = new WeakMap(), In = new WeakMap(), Nn = new WeakMap(), nr = new WeakMap();
function Hs(e, t, ...n) {
  var r = new Kr(e);
  Fn(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, zt);
}
function D(e, t, n = !1) {
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
function ua(e, t, n) {
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
    let w = t[f];
    jt(
      w,
      () => {
        if (a) {
          if (a.pending.delete(w), a.done.add(w), a.pending.size === 0) {
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
      a.f |= ft;
      const o = document.createDocumentFragment();
      Yr(a, o);
    } else
      Me(t[i], n);
  }
}
var ci;
function Re(e, t, n, r, i, a = null) {
  var o = e, f = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(yt());
  }
  var h = null, w = /* @__PURE__ */ rs(() => {
    var R = n();
    return (
      /** @type {V[]} */
      yi(R) ? R : R == null ? [] : rr(R)
    );
  }), v, d = /* @__PURE__ */ new Map(), p = !0;
  function g(R) {
    (O.effect.f & Ue) === 0 && (O.pending.delete(R), O.fallback = h, Bs(O, v, o, t, r), h !== null && (v.length === 0 ? (h.f & ft) === 0 ? $n(h) : (h.f ^= ft, yn(h, null, o)) : jt(h, () => {
      h = null;
    })));
  }
  function _(R) {
    O.pending.delete(R);
  }
  var E = Fn(() => {
    v = /** @type {V[]} */
    s(w);
    for (var R = v.length, q = /* @__PURE__ */ new Set(), ue = (
      /** @type {Batch} */
      P
    ), Y = Ki(), z = 0; z < R; z += 1) {
      var Z = v[z], Q = r(Z, z), m = p ? null : f.get(Q);
      m ? (m.v && fn(m.v, Z), m.i && fn(m.i, z), Y && ue.unskip_effect(m.e)) : (m = qs(
        f,
        p ? o : ci ?? (ci = yt()),
        Z,
        Q,
        z,
        i,
        t,
        n
      ), p || (m.e.f |= ft), f.set(Q, m)), q.add(Q);
    }
    if (R === 0 && a && !h && (p ? h = Ge(() => a(o)) : (h = Ge(() => a(ci ?? (ci = yt()))), h.f |= ft)), R > q.size && Va(), !p)
      if (d.set(ue, q), Y) {
        for (const [b, C] of f)
          q.has(b) || ue.skip_effect(C.e);
        ue.oncommit(g), ue.ondiscard(_);
      } else
        g(ue);
    s(w);
  }), O = { effect: E, items: f, pending: d, outrogroups: null, fallback: h };
  p = !1;
}
function pn(e) {
  for (; e !== null && (e.f & Ze) === 0; )
    e = e.next;
  return e;
}
function Bs(e, t, n, r, i) {
  var m, b, C, te, y, k, $, re, fe;
  var a = (r & 8) !== 0, o = t.length, f = e.items, l = pn(e.effect.first), c, h = null, w, v = [], d = [], p, g, _, E;
  if (a)
    for (E = 0; E < o; E += 1)
      p = t[E], g = i(p, E), _ = /** @type {EachItem} */
      f.get(g).e, (_.f & ft) === 0 && ((b = (m = _.nodes) == null ? void 0 : m.a) == null || b.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(_));
  for (E = 0; E < o; E += 1) {
    if (p = t[E], g = i(p, E), _ = /** @type {EachItem} */
    f.get(g).e, e.outrogroups !== null)
      for (const ie of e.outrogroups)
        ie.pending.delete(_), ie.done.delete(_);
    if ((_.f & Ee) !== 0 && ($n(_), a && ((te = (C = _.nodes) == null ? void 0 : C.a) == null || te.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(_))), (_.f & ft) !== 0)
      if (_.f ^= ft, _ === l)
        yn(_, null, n);
      else {
        var O = h ? h.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Tt(e, h, _), Tt(e, _, O), yn(_, O, n), h = _, v = [], d = [], l = pn(h.next);
        continue;
      }
    if (_ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < d.length) {
          var R = d[0], q;
          h = R.prev;
          var ue = v[0], Y = v[v.length - 1];
          for (q = 0; q < v.length; q += 1)
            yn(v[q], R, n);
          for (q = 0; q < d.length; q += 1)
            c.delete(d[q]);
          Tt(e, ue.prev, Y.next), Tt(e, h, ue), Tt(e, Y, R), l = R, h = Y, E -= 1, v = [], d = [];
        } else
          c.delete(_), yn(_, l, n), Tt(e, _.prev, _.next), Tt(e, _, h === null ? e.effect.first : h.next), Tt(e, h, _), h = _;
        continue;
      }
      for (v = [], d = []; l !== null && l !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = pn(l.next);
      if (l === null)
        continue;
    }
    (_.f & ft) === 0 && v.push(_), h = _, l = pn(_.next);
  }
  if (e.outrogroups !== null) {
    for (const ie of e.outrogroups)
      ie.pending.size === 0 && (Nr(e, rr(ie.done)), (y = e.outrogroups) == null || y.delete(ie));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var z = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & Ee) === 0 && z.push(_);
    for (; l !== null; )
      (l.f & Ee) === 0 && l !== e.fallback && z.push(l), l = pn(l.next);
    var Z = z.length;
    if (Z > 0) {
      var Q = (r & 4) !== 0 && o === 0 ? n : null;
      if (a) {
        for (E = 0; E < Z; E += 1)
          ($ = (k = z[E].nodes) == null ? void 0 : k.a) == null || $.measure();
        for (E = 0; E < Z; E += 1)
          (fe = (re = z[E].nodes) == null ? void 0 : re.a) == null || fe.fix();
      }
      Vs(e, z, Q);
    }
  }
  a && xt(() => {
    var ie, le;
    if (w !== void 0)
      for (_ of w)
        (le = (ie = _.nodes) == null ? void 0 : ie.a) == null || le.apply();
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
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & ft) === 0 ? (
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
function Tt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ca(e, t, n) {
  Ji(() => {
    var r = ar(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var o = n();
        ks(o), i && Ri(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const vi = [...` 	
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
          (o === 0 || vi.includes(r[o - 1])) && (f === r.length || vi.includes(r[f])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(f + 1) : o = f;
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
  var n = va(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Js) || (e.value = t ?? "");
}
function ge(e, t, n, r) {
  var i = va(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Fa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Qs(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function va(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Bn] ?? (e[Bn] = {
      [Ws]: e.nodeName.includes("-"),
      [Zs]: e.namespaceURI === Ra
    })
  );
}
var di = /* @__PURE__ */ new Map();
function Qs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = di.get(t);
  if (n) return n;
  di.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Ei(i);
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
    W
  );
  return Ji(() => {
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
var xi;
typeof window < "u" && ((xi = window.__svelte ?? (window.__svelte = {})).v ?? (xi.v = /* @__PURE__ */ new Set())).add(eo);
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
const da = (e) => St("/accounts", e), no = () => St("/rails"), ro = (e) => St(`/accounts/${encodeURIComponent(e)}`), io = (e) => St(`/accounts/${encodeURIComponent(e)}/similar`), ao = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), so = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), oo = (e, t, n) => St(`/accounts/${encodeURIComponent(e)}/images`, { site: t, page: n }), lo = (e, t) => St("/videoinfo", { site: e, video_id: t }), fo = (e, t) => St(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), uo = (e, t, n) => `${jn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, hi = (e, t, n, r, i = !1) => `${jn}/photo?site=${encodeURIComponent(e)}&handle=${encodeURIComponent(t)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, _i = (e, t, n = 0) => `${jn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`, ha = "/api/v1/rails/x/onlyfans";
async function co() {
  try {
    const e = await fetch(ha);
    return e.ok ? (await e.json()).rails ?? [] : [];
  } catch {
    return [];
  }
}
async function vo(e) {
  try {
    return (await fetch(ha, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(e)
    })).ok;
  } catch {
    return !1;
  }
}
var ho = /* @__PURE__ */ T('<img loading="lazy"/>'), _o = /* @__PURE__ */ T('<span class="ofx-initials"> </span>');
function Zr(e, t) {
  dt(t, !0);
  let n = wt(t, "src", 3, null), r = wt(t, "alt", 3, ""), i = wt(t, "name", 3, ""), a = wt(t, "onmeasure", 3, null), o = /* @__PURE__ */ U(!1);
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
    var w = (d) => {
      var p = ho();
      H(() => {
        ge(p, "src", n()), ge(p, "alt", r());
      }), Sr("load", p, l), Sr("error", p, () => x(o, !0)), S(d, p);
    }, v = (d) => {
      var p = _o(), g = J(p, !0);
      H(() => B(g, s(f))), S(d, p);
    };
    D(h, (d) => {
      n() && !s(o) ? d(w) : d(v, -1);
    });
  }
  S(e, c), ht();
}
var po = /* @__PURE__ */ T('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function _a(e, t) {
  dt(t, !0);
  var n = po(), r = F(n), i = F(r);
  Zr(i, {
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
  var a = A(r, 2), o = J(a, !0), f = A(a, 2), l = J(f);
  H(() => {
    ge(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), ge(a, "title", t.account.display_name), B(o, t.account.display_name), B(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), se("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), S(e, n), ht();
}
dn(["click"]);
var go = /* @__PURE__ */ T('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), bo = /* @__PURE__ */ T('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), mo = /* @__PURE__ */ T('<span class="ofx-note"> </span>'), xo = /* @__PURE__ */ T('<div class="ofx-rail-actions"><!></div>'), wo = /* @__PURE__ */ T('<div class="ofx-rail-item"><!></div>'), yo = /* @__PURE__ */ T('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Or(e, t) {
  dt(t, !0);
  let n = wt(t, "note", 3, ""), r = wt(t, "order", 3, null), i = wt(t, "fetcher", 3, null), a = wt(t, "size", 3, 20), o = /* @__PURE__ */ U(Ke([])), f = /* @__PURE__ */ U(!0), l = /* @__PURE__ */ U(0);
  function c() {
    x(l, s(l) + 1);
  }
  Dn(() => {
    const g = r(), _ = i(), E = a();
    s(l);
    let O = !1;
    x(f, !0);
    const R = _ ? _() : da({ order: g, limit: E, offset: 0 });
    return Promise.resolve(R).then((q) => {
      O || (x(o, Array.isArray(q) ? q : (q == null ? void 0 : q.items) ?? [], !0), x(f, !1));
    }), () => {
      O = !0;
    };
  });
  var h = { reload: c }, w = hn(), v = we(w);
  {
    var d = (g) => {
      var _ = bo(), E = F(_), O = J(E, !0), R = A(E, 2);
      Re(R, 20, () => Array(8), Wr, (q, ue) => {
        var Y = go();
        S(q, Y);
      }), H(() => B(O, t.title)), S(g, _);
    }, p = (g) => {
      var _ = yo(), E = F(_), O = F(E), R = J(O, !0), q = A(O, 2);
      {
        var ue = (Q) => {
          var m = mo(), b = J(m, !0);
          H(() => B(b, n())), S(Q, m);
        };
        D(q, (Q) => {
          n() && Q(ue);
        });
      }
      var Y = A(q, 2);
      {
        var z = (Q) => {
          var m = xo(), b = F(m);
          Hs(b, () => t.actions), S(Q, m);
        };
        D(Y, (Q) => {
          t.actions && Q(z);
        });
      }
      var Z = A(E, 2);
      Re(Z, 21, () => s(o), (Q) => Q.handle, (Q, m) => {
        var b = wo(), C = F(b);
        _a(C, {
          get account() {
            return s(m);
          },
          get navigate() {
            return t.navigate;
          }
        }), S(Q, b);
      }), H(() => B(R, t.title)), S(g, _);
    };
    D(v, (g) => {
      s(f) ? g(d) : s(o).length && g(p, 1);
    });
  }
  return S(e, w), ht(h);
}
var ko = /* @__PURE__ */ T('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), Eo = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), So = /* @__PURE__ */ T(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Ao = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function To(e, t) {
  dt(t, !0);
  let n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U(Ke([]));
  async function o() {
    const g = await co(), _ = new Map(t.rails.map((R) => [R.key, R])), E = /* @__PURE__ */ new Set(), O = [];
    for (const R of g)
      E.add(R.key), _.has(R.key) && O.push({ ...R });
    for (const R of t.rails)
      E.has(R.key) || O.push({ key: R.key, enabled: !0 });
    x(a, O, !0), x(i, null), x(n, !0);
  }
  function f(g, _) {
    const E = g + _;
    if (E < 0 || E >= s(a).length) return;
    const O = [...s(a)];
    [O[g], O[E]] = [O[E], O[g]], x(a, O, !0);
  }
  function l(g) {
    x(a, s(a).map((_, E) => E === g ? { ..._, enabled: !_.enabled } : _), !0);
  }
  function c(g) {
    var _;
    return ((_ = t.rails.find((E) => E.key === g)) == null ? void 0 : _.title) ?? g;
  }
  async function h() {
    var g;
    x(r, !0), x(i, null), await vo(s(a)) ? (await ((g = t.onsaved) == null ? void 0 : g.call(t)), x(n, !1)) : x(i, "Could not save. Your changes are still here."), x(r, !1);
  }
  var w = Ao(), v = we(w), d = A(v, 2);
  {
    var p = (g) => {
      var _ = So(), E = F(_), O = A(F(E), 2), R = A(E, 4);
      Re(R, 23, () => s(a), (m) => m.key, (m, b, C) => {
        var te = ko();
        let y;
        var k = F(te), $ = J(k, !0), re = A(k, 2), fe = J(re, !0), ie = A(re, 2), le = A(ie, 2);
        H(
          (I, N, X, ce) => {
            y = Jt(te, 1, "", null, y, { "ofx-off": !s(b).enabled }), B($, I), ge(re, "aria-label", N), B(fe, s(b).enabled ? "Shown" : "Hidden"), ie.disabled = s(C) === 0, ge(ie, "aria-label", X), le.disabled = s(C) === s(a).length - 1, ge(le, "aria-label", ce);
          },
          [
            () => c(s(b).key),
            () => s(b).enabled ? `Hide ${c(s(b).key)}` : `Show ${c(s(b).key)}`,
            () => `Move ${c(s(b).key)} up`,
            () => `Move ${c(s(b).key)} down`
          ]
        ), se("click", re, () => l(s(C))), se("click", ie, () => f(s(C), -1)), se("click", le, () => f(s(C), 1)), S(m, te);
      });
      var q = A(R, 2);
      {
        var ue = (m) => {
          var b = Eo(), C = J(b, !0);
          H(() => B(C, s(i))), S(m, b);
        };
        D(q, (m) => {
          s(i) && m(ue);
        });
      }
      var Y = A(q, 2), z = F(Y), Z = A(z, 2), Q = J(Z, !0);
      H(() => {
        Z.disabled = s(r), B(Q, s(r) ? "Saving…" : "Save");
      }), se("click", O, () => x(n, !1)), se("click", z, () => x(n, !1)), se("click", Z, h), S(g, _);
    };
    D(d, (g) => {
      s(n) && g(p);
    });
  }
  se("click", v, o), S(e, w), ht();
}
dn(["click"]);
var Co = /* @__PURE__ */ T(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Ro = /* @__PURE__ */ T('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Mo = /* @__PURE__ */ T('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Io = /* @__PURE__ */ T('<div class="ofx-sentinel"></div>'), No = /* @__PURE__ */ T('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Oo = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Lo = /* @__PURE__ */ T('<div class="ofx-controls"><!></div> <!> <!>', 1), Po = /* @__PURE__ */ T('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Do(e, t) {
  dt(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ U(Ke([])), a = /* @__PURE__ */ U(0), o = /* @__PURE__ */ U(!1), f = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(!1), h = /* @__PURE__ */ U(""), w, v = /* @__PURE__ */ U(null), d = /* @__PURE__ */ U(Ke([]));
  async function p() {
    const I = await no();
    x(d, Array.isArray(I) ? I : [], !0);
  }
  Dn(() => {
    p();
  });
  const g = /* @__PURE__ */ Ye(() => s(l).trim()), _ = /* @__PURE__ */ Ye(() => s(g) !== "" || s(c)), E = /* @__PURE__ */ Ye(() => s(i).length < s(a));
  async function O(I, N) {
    x(o, !0);
    const X = await da({ search: I, limit: n, offset: N });
    if (I !== s(l).trim()) {
      x(o, !1);
      return;
    }
    X ? (x(i, N === 0 ? X.items : [...s(i), ...X.items], !0), x(a, X.total, !0), x(h, I, !0), x(f, !1)) : x(f, !0), x(o, !1);
  }
  function R(I) {
    x(l, I.currentTarget.value, !0), clearTimeout(w), w = setTimeout(() => O(s(l).trim(), 0), 250);
  }
  function q() {
    x(c, !0), O("", 0);
  }
  function ue() {
    x(c, !1), x(l, ""), x(i, [], !0), x(a, 0), x(h, "");
  }
  function Y(I) {
    const N = new IntersectionObserver(
      (X) => {
        var ce;
        (ce = X[0]) != null && ce.isIntersecting && s(E) && !s(o) && O(s(h), s(i).length);
      },
      { rootMargin: "600px" }
    );
    return N.observe(I), { destroy: () => N.disconnect() };
  }
  var z = Po(), Z = A(we(z), 2), Q = F(Z);
  {
    var m = (I) => {
      var N = zn();
      H(
        (X, ce) => B(N, `${X ?? ""} of ${ce ?? ""}
        ${s(h) ? `matching “${s(h)}”` : "accounts"}`),
        [
          () => s(i).length.toLocaleString(),
          () => s(a).toLocaleString()
        ]
      ), S(I, N);
    }, b = (I) => {
      var N = zn("loading…");
      S(I, N);
    }, C = (I) => {
      var N = zn("nothing found");
      S(I, N);
    }, te = (I) => {
      var N = zn("performers, gathered from the archive sites");
      S(I, N);
    };
    D(Q, (I) => {
      s(_) && s(a) ? I(m) : s(_) && s(o) ? I(b, 1) : s(_) ? I(C, 2) : I(te, -1);
    });
  }
  var y = A(Z, 2), k = A(F(y), 2), $ = A(y, 2);
  {
    var re = (I) => {
      var N = Co();
      S(I, N);
    };
    D($, (I) => {
      s(f) && I(re);
    });
  }
  var fe = A($, 2);
  {
    var ie = (I) => {
      var N = No(), X = we(N);
      {
        var ce = (ee) => {
          var he = Ro(), Xe = J(he);
          se("click", Xe, ue), S(ee, he);
        };
        D(X, (ee) => {
          s(c) && !s(g) && ee(ce);
        });
      }
      var je = A(X, 2), _t = F(je);
      Re(_t, 17, () => s(i), (ee) => ee.handle, (ee, he) => {
        _a(ee, {
          get account() {
            return s(he);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ie = A(_t, 2);
      {
        var He = (ee) => {
          var he = hn(), Xe = we(he);
          Re(Xe, 16, () => Array(12), Wr, (sr, Jr) => {
            var Hn = Mo();
            S(sr, Hn);
          }), S(ee, he);
        };
        D(Ie, (ee) => {
          s(o) && ee(He);
        });
      }
      var Ne = A(je, 2);
      {
        var de = (ee) => {
          var he = Io();
          ca(he, (Xe) => Y == null ? void 0 : Y(Xe)), S(ee, he);
        };
        D(Ne, (ee) => {
          s(E) && ee(de);
        });
      }
      S(I, N);
    }, le = (I) => {
      var N = Lo(), X = we(N), ce = F(X);
      To(ce, {
        get rails() {
          return s(d);
        },
        onsaved: p
      });
      var je = A(X, 2);
      Re(je, 17, () => s(d).filter((Ie) => Ie.order !== "random"), (Ie) => Ie.order, (Ie, He) => {
        Or(Ie, {
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
      var _t = A(je, 2);
      {
        const Ie = (Ne) => {
          var de = Oo(), ee = we(de), he = A(ee, 2);
          se("click", ee, () => {
            var Xe;
            return (Xe = s(v)) == null ? void 0 : Xe.reload();
          }), se("click", he, q), S(Ne, de);
        };
        let He = /* @__PURE__ */ Ye(() => {
          var Ne;
          return ((Ne = s(d).find((de) => de.order === "random")) == null ? void 0 : Ne.title) ?? "Something else";
        });
        $s(
          Or(_t, {
            get title() {
              return s(He);
            },
            order: "random",
            size: r,
            get navigate() {
              return t.navigate;
            },
            actions: Ie,
            $$slots: { actions: !0 }
          }),
          (Ne) => x(v, Ne, !0),
          () => s(v)
        );
      }
      S(I, N);
    };
    D(fe, (I) => {
      s(_) ? I(ie) : I(le, -1);
    });
  }
  H(() => Xs(k, s(l))), se("input", k, R), S(e, z), ht();
}
dn(["input", "click"]);
var Fo = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), pi = /* @__PURE__ */ T('<p class="ofx-note"> </p>'), Uo = /* @__PURE__ */ T('<span class="ofx-badge"> </span>'), jo = /* @__PURE__ */ T('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Ho = /* @__PURE__ */ T('<p class="ofx-caption-title"> </p>'), zo = /* @__PURE__ */ T('<p class="ofx-caption-text"> </p>'), Vo = /* @__PURE__ */ T('<p class="ofx-caption-when"> </p>'), Bo = /* @__PURE__ */ T('<div class="ofx-caption"><!> <!> <!></div>'), qo = /* @__PURE__ */ T('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Go = /* @__PURE__ */ T('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Yo = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button"> </button>'), Ko = /* @__PURE__ */ T('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function Wo(e, t) {
  dt(t, !0);
  let n = /* @__PURE__ */ U(Ke([])), r = /* @__PURE__ */ U(0), i = /* @__PURE__ */ U(!1), a = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ U(!1);
  async function f() {
    if (s(i) || s(a)) return;
    x(i, !0);
    const m = s(r) + 1, [b, C, te] = await Promise.all([
      ao(t.handle, t.site, m),
      so(t.handle, t.site, m),
      oo(t.handle, t.site, m)
    ]);
    if (b === null && C === null && te === null)
      x(o, !0);
    else {
      const y = [
        ...(b ?? []).map((k) => ({
          kind: "video",
          key: `v:${k.video_id}`,
          title: k.title,
          thumbnail: k.thumbnail,
          badge: v(k.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: k.posted_at,
          text: k.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: k.has_text,
          item: k
        })),
        ...(C ?? []).map((k) => ({
          kind: "image",
          key: `g:${k.gallery_id}`,
          title: k.title,
          thumbnail: k.cover,
          badge: k.image_count ? `${k.image_count}` : null,
          aspect: 0.75,
          posted: k.posted,
          item: k
        })),
        ...(te ?? []).map((k) => ({
          kind: "image",
          key: `p:${k.image_id ?? `${m}:${k.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: hi(t.site, t.handle, m, k.index, !0),
          full: hi(t.site, t.handle, m, k.index),
          badge: null,
          aspect: 0.75,
          posted: k.posted_at,
          item: k
        }))
      ];
      x(n, [...s(n), ...y], !0), x(r, m), y.length === 0 && x(a, !0);
    }
    x(i, !1);
  }
  const l = /* @__PURE__ */ Ye(() => s(n).filter((m) => t.kinds.has(m.kind)));
  Dn(() => {
    t.handle, t.site, ar(() => {
      x(n, [], !0), x(r, 0), x(a, !1), x(o, !1), x(i, !1), f();
    });
  });
  function c(m, b) {
    !b || !Number.isFinite(b) || x(n, s(n).map((C) => C.key === m ? { ...C, aspect: b } : C), !0);
  }
  function h(m, b) {
    if (!b.hasText || b.text) return;
    const C = new IntersectionObserver((te) => {
      te.some((y) => y.isIntersecting) && (C.disconnect(), lo(t.site, b.item.video_id).then((y) => {
        y && x(
          n,
          s(n).map((k) => k.key === b.key ? {
            ...k,
            text: y.description,
            posted: k.posted ?? y.posted_at
          } : k),
          !0
        );
      }));
    });
    return C.observe(m), { destroy: () => C.disconnect() };
  }
  function w(m) {
    m.kind === "video" ? t.onplay(m.item) : m.full ? t.onphoto(m) : t.ongallery(m.item);
  }
  function v(m) {
    return m ? `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}` : null;
  }
  var d = Ko(), p = F(d), g = J(p, !0), _ = A(p, 2);
  {
    var E = (m) => {
      var b = Fo(), C = J(b);
      H(() => B(C, `${t.site ?? ""} did not answer.`)), S(m, b);
    }, O = (m) => {
      var b = pi(), C = J(b);
      H(() => B(C, `Nothing here on ${t.site ?? ""}.`)), S(m, b);
    }, R = (m) => {
      var b = pi(), C = J(b);
      H((te) => B(C, `${t.site ?? ""} has no ${te ?? ""} for this performer.`), [() => [...t.kinds].join(" or ")]), S(m, b);
    };
    D(_, (m) => {
      s(o) ? m(E) : !s(i) && s(n).length === 0 ? m(O, 1) : !s(i) && s(l).length === 0 && m(R, 2);
    });
  }
  var q = A(_, 2), ue = F(q);
  Re(ue, 17, () => s(l), (m) => m.key, (m, b) => {
    var C = qo(), te = F(C), y = F(te), k = F(y);
    Zr(k, {
      get src() {
        return s(b).thumbnail;
      },
      get alt() {
        return s(b).title;
      },
      get name() {
        return s(b).title;
      },
      onmeasure: (N) => c(s(b).key, N)
    });
    var $ = A(k, 2);
    {
      var re = (N) => {
        var X = Uo(), ce = J(X, !0);
        H(() => B(ce, s(b).badge)), S(N, X);
      };
      D($, (N) => {
        s(b).badge && N(re);
      });
    }
    var fe = A($, 2);
    {
      var ie = (N) => {
        var X = jo();
        S(N, X);
      };
      D(fe, (N) => {
        s(b).kind === "video" && N(ie);
      });
    }
    var le = A(te, 2);
    {
      var I = (N) => {
        var X = Bo(), ce = F(X);
        {
          var je = (de) => {
            var ee = Ho(), he = J(ee, !0);
            H(() => B(he, s(b).title)), S(de, ee);
          };
          D(ce, (de) => {
            s(b).title && de(je);
          });
        }
        var _t = A(ce, 2);
        {
          var Ie = (de) => {
            var ee = zo(), he = J(ee, !0);
            H(() => B(he, s(b).text)), S(de, ee);
          };
          D(_t, (de) => {
            s(b).text && de(Ie);
          });
        }
        var He = A(_t, 2);
        {
          var Ne = (de) => {
            var ee = Vo(), he = J(ee, !0);
            H(() => B(he, s(b).posted)), S(de, ee);
          };
          D(He, (de) => {
            s(b).posted && de(Ne);
          });
        }
        S(N, X);
      };
      D(le, (N) => {
        (s(b).title || s(b).text || s(b).posted) && N(I);
      });
    }
    ca(C, (N, X) => h == null ? void 0 : h(N, X), () => s(b)), H(() => Ks(C, `--ofx-ar: ${s(b).aspect ?? ""}; flex-grow: ${s(b).aspect ?? ""}; flex-basis: ${s(b).aspect * 220}px`)), se("click", te, () => w(s(b))), S(m, C);
  });
  var Y = A(ue, 2);
  {
    var z = (m) => {
      var b = hn(), C = we(b);
      Re(C, 16, () => Array(4), Wr, (te, y) => {
        var k = Go();
        S(te, k);
      }), S(m, b);
    };
    D(Y, (m) => {
      s(i) && m(z);
    });
  }
  var Z = A(q, 2);
  {
    var Q = (m) => {
      var b = Yo(), C = J(b, !0);
      H(() => {
        b.disabled = s(i), B(C, s(i) ? "Loading…" : "Load more");
      }), se("click", b, f), S(m, b);
    };
    D(Z, (m) => {
      !s(a) && !s(o) && s(n).length > 0 && m(Q);
    });
  }
  H(() => B(g, t.site)), S(e, d), ht();
}
dn(["click"]);
async function Zo() {
  try {
    const e = await fetch("/api/v1/vpn/status");
    return e.ok ? await e.json() : null;
  } catch {
    return null;
  }
}
async function Jo(e, t) {
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
async function Xo(e) {
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
var Qo = /* @__PURE__ */ T('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), $o = /* @__PURE__ */ T('<span class="tbx-dim">offline</span>'), el = /* @__PURE__ */ T('<li><button type="button" role="option"> <!></button></li>'), tl = /* @__PURE__ */ T('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), nl = /* @__PURE__ */ T('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), rl = /* @__PURE__ */ T('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), il = /* @__PURE__ */ T('<p class="tbx-vpn-note"> </p>'), al = /* @__PURE__ */ T('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function sl(e, t) {
  dt(t, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(null), i = /* @__PURE__ */ U(!1), a = /* @__PURE__ */ U(null);
  async function o() {
    x(n, await Zo(), !0);
  }
  Dn(() => {
    o();
  });
  async function f(v) {
    var p;
    const d = v === "scraping" ? !s(n).route_scraping : !s(n).route_streaming;
    x(r, v, !0), x(a, null), await Jo(v, d) && (await o(), await ((p = t.onchange) == null ? void 0 : p.call(t))), x(r, null);
  }
  async function l(v) {
    var p;
    x(r, "exit"), x(i, !1);
    const d = await Xo(v);
    d && (x(n, d, !0), x(a, d.detail ?? null, !0), await ((p = t.onchange) == null ? void 0 : p.call(t))), x(r, null);
  }
  var c = hn(), h = we(c);
  {
    var w = (v) => {
      var d = al(), p = we(d), g = A(F(p), 2);
      Re(
        g,
        17,
        () => [
          ["scraping", "Scraping", s(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            s(n).route_streaming
          ]
        ],
        ([Y, z, Z]) => Y,
        (Y, z) => {
          var Z = /* @__PURE__ */ Ye(() => _r(s(z), 3));
          let Q = () => s(Z)[0], m = () => s(Z)[1], b = () => s(Z)[2];
          var C = Qo();
          let te;
          var y = A(F(C), 2), k = J(y, !0);
          H(() => {
            te = Jt(C, 1, "tbx-toggle", null, te, { "tbx-toggle-on": b() }), ge(C, "aria-checked", b()), C.disabled = s(r) !== null, B(k, m());
          }), se("click", C, () => f(Q())), S(Y, C);
        }
      );
      var _ = A(g, 2);
      {
        var E = (Y) => {
          var z = nl(), Z = F(z), Q = F(Z), m = A(Z, 2);
          {
            var b = (C) => {
              var te = tl(), y = F(te), k = J(y), $ = A(y, 2);
              Re($, 17, () => s(n).exit_nodes, (re) => re.id, (re, fe) => {
                var ie = el(), le = F(ie), I = F(le), N = A(I);
                {
                  var X = (ce) => {
                    var je = $o();
                    S(ce, je);
                  };
                  D(N, (ce) => {
                    s(fe).online || ce(X);
                  });
                }
                H(() => {
                  ge(le, "aria-selected", s(fe).active), le.disabled = !s(fe).online, B(I, `${s(fe).name ?? ""}${s(fe).country ? ` · ${s(fe).country}` : ""} `);
                }), se("click", le, () => l(s(fe).id)), S(re, ie);
              }), H(() => ge(k, "aria-selected", !s(n).exit_node)), se("click", k, () => l(null)), S(C, te);
            };
            D(m, (C) => {
              s(i) && C(b);
            });
          }
          H(() => {
            ge(Z, "aria-expanded", s(i)), Z.disabled = s(r) !== null, B(Q, `${s(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), se("click", Z, () => x(i, !s(i))), S(Y, z);
        };
        D(_, (Y) => {
          var z;
          (z = s(n).exit_nodes) != null && z.length && Y(E);
        });
      }
      var O = A(_, 2);
      {
        var R = (Y) => {
          var z = rl();
          S(Y, z);
        };
        D(O, (Y) => {
          !s(n).connected && (s(n).route_scraping || s(n).route_streaming) && Y(R);
        });
      }
      var q = A(p, 2);
      {
        var ue = (Y) => {
          var z = il(), Z = J(z, !0);
          H(() => B(Z, s(a))), S(Y, z);
        };
        D(q, (Y) => {
          s(a) && Y(ue);
        });
      }
      S(v, d);
    };
    D(h, (v) => {
      var d;
      (d = s(n)) != null && d.enabled && v(w);
    });
  }
  S(e, c), ht();
}
dn(["click"]);
var ol = /* @__PURE__ */ T('<p class="ofx-error">That account could not be loaded.</p>'), ll = /* @__PURE__ */ T('<div class="ofx-banner"><img alt=""/></div>'), fl = /* @__PURE__ */ Ts('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), ul = /* @__PURE__ */ T('<p> </p> <button class="ofx-more" type="button"> </button>', 1), cl = /* @__PURE__ */ T("<span><b> </b> </span>"), vl = /* @__PURE__ */ T('<div class="ofx-stats"></div>'), dl = /* @__PURE__ */ T("<span> </span>"), gi = /* @__PURE__ */ T('<a target="_blank" rel="noreferrer noopener"> </a>'), hl = /* @__PURE__ */ T('<button type="button" role="tab"> </button>'), _l = /* @__PURE__ */ T('<span class="ofx-count"> </span>'), pl = /* @__PURE__ */ T('<button type="button"> <!></button>'), gl = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), bl = /* @__PURE__ */ T(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), ml = /* @__PURE__ */ T('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), xl = /* @__PURE__ */ T('<p class="ofx-note">Loading…</p>'), wl = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), yl = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), kl = /* @__PURE__ */ T('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), El = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Sl = /* @__PURE__ */ T("<!> <!> <!> <!>", 1);
function Al(e, t) {
  dt(t, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U("all");
  const a = /* @__PURE__ */ Ye(() => s(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([s(i)]));
  let o = /* @__PURE__ */ U(Ke(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(null), c = /* @__PURE__ */ U(null), h = /* @__PURE__ */ U(null), w = /* @__PURE__ */ U(null);
  Dn(() => {
    ro(t.handle).then((y) => {
      y ? x(n, y, !0) : x(r, !0);
    });
  });
  const v = /* @__PURE__ */ Ye(() => {
    var y, k, $, re;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (y = s(n)) == null ? void 0 : y.posts_count],
      ["photos", (k = s(n)) == null ? void 0 : k.photos_count],
      ["videos", ($ = s(n)) == null ? void 0 : $.videos_count],
      ["likes", (re = s(n)) == null ? void 0 : re.likes_count]
    ].filter(([, fe]) => fe != null);
  });
  function d(y) {
    const k = new Set(s(o));
    k.has(y) ? k.delete(y) : k.add(y), x(o, k, !0);
  }
  function p(y) {
    var k, $;
    if (!((k = t.host) != null && k.play)) {
      x(l, y, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: _i(y.site, y.video_id),
      title: y.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: y.thumbnail ?? void 0,
      site: y.site,
      videoId: y.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: (($ = s(n)) == null ? void 0 : $.display_name) || t.handle,
      duration: y.duration,
      resolution: y.resolution,
      size: y.size
    });
  }
  function g(y) {
    x(w, null), x(h, y, !0);
  }
  async function _(y) {
    x(w, null);
    const k = await fo(y.site, y.gallery_id);
    if (!k) {
      x(w, "Could not open that gallery");
      return;
    }
    if (k.length === 0) {
      x(w, "That site served no images for this gallery");
      return;
    }
    x(c, { gallery: y, count: k.length, index: 0 }, !0);
  }
  function E(y) {
    s(c) && x(
      c,
      {
        ...s(c),
        index: (s(c).index + y + s(c).count) % s(c).count
      },
      !0
    );
  }
  function O(y) {
    if (y.key === "Escape") {
      x(l, null), x(c, null), x(h, null);
      return;
    }
    s(c) && (y.key === "ArrowRight" && E(1), y.key === "ArrowLeft" && E(-1));
  }
  var R = Sl();
  Sr("keydown", yr, O);
  var q = we(R);
  {
    var ue = (y) => {
      var k = ol();
      S(y, k);
    }, Y = (y) => {
      var k = ml(), $ = we(k), re = F($);
      {
        var fe = (M) => {
          var V = ll(), ae = J(V);
          H(() => ge(ae, "src", s(n).header_url)), S(M, V);
        };
        D(re, (M) => {
          s(n).header_url && M(fe);
        });
      }
      var ie = A(re, 2), le = F(ie);
      let I;
      var N = F(le);
      Zr(N, {
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
      var X = A(le, 2), ce = F(X), je = F(ce), _t = A(je);
      {
        var Ie = (M) => {
          var V = fl();
          S(M, V);
        };
        D(_t, (M) => {
          s(n).is_verified && M(Ie);
        });
      }
      var He = A(ce, 2), Ne = F(He), de = A(Ne, 2), ee = A(He, 2);
      {
        var he = (M) => {
          var V = ul(), ae = we(V);
          let Ae;
          var pt = J(ae, !0), ze = A(ae, 2), At = J(ze, !0);
          H(() => {
            Ae = Jt(ae, 1, "ofx-bio", null, Ae, { "ofx-clamped": !s(f) }), B(pt, s(n).bio), B(At, s(f) ? "less" : "more");
          }), se("click", ze, () => x(f, !s(f))), S(M, V);
        };
        D(ee, (M) => {
          s(n).bio && M(he);
        });
      }
      var Xe = A(ee, 2);
      {
        var sr = (M) => {
          var V = vl();
          Re(V, 21, () => s(v), ([ae, Ae]) => ae, (ae, Ae) => {
            var pt = /* @__PURE__ */ Ye(() => _r(s(Ae), 2));
            let ze = () => s(pt)[0], At = () => s(pt)[1];
            var it = cl(), _n = F(it), or = J(_n, !0), Sa = A(_n);
            H(
              (Aa) => {
                B(or, Aa), B(Sa, ` ${ze() ?? ""}`);
              },
              [() => At().toLocaleString()]
            ), S(ae, it);
          }), S(M, V);
        };
        D(Xe, (M) => {
          s(v).length && M(sr);
        });
      }
      var Jr = A(Xe, 2), Hn = F(Jr);
      {
        var pa = (M) => {
          var V = dl(), ae = J(V, !0);
          H(() => B(ae, s(n).location)), S(M, V);
        };
        D(Hn, (M) => {
          s(n).location && M(pa);
        });
      }
      var Xr = A(Hn, 2);
      {
        var ga = (M) => {
          var V = gi(), ae = J(V, !0);
          H(
            (Ae) => {
              ge(V, "href", s(n).website), B(ae, Ae);
            },
            [() => s(n).website.replace(/^https?:\/\//, "")]
          ), S(M, V);
        };
        D(Xr, (M) => {
          s(n).website && M(ga);
        });
      }
      var ba = A(Xr, 2);
      {
        var ma = (M) => {
          var V = gi(), ae = J(V);
          H(() => {
            ge(V, "href", s(n).of_url), B(ae, `onlyfans.com/${s(n).of_username ?? ""}`);
          }), S(M, V);
        };
        D(ba, (M) => {
          s(n).of_url && M(ma);
        });
      }
      var xa = A(ie, 2);
      Re(xa, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([M, V]) => M, (M, V) => {
        var ae = /* @__PURE__ */ Ye(() => _r(V, 2));
        let Ae = () => s(ae)[0], pt = () => s(ae)[1];
        var ze = hl();
        let At;
        var it = J(ze, !0);
        H(() => {
          At = Jt(ze, 1, "ofx-tab", null, At, { "ofx-on": s(i) === Ae() }), ge(ze, "aria-selected", s(i) === Ae()), B(it, pt());
        }), se("click", ze, () => x(i, Ae(), !0)), S(M, ze);
      });
      var Qr = A($, 2);
      sl(Qr, {});
      var $r = A(Qr, 2), ei = A(F($r), 2);
      Re(ei, 17, () => s(n).sources, (M) => M.site, (M, V) => {
        var ae = pl();
        let Ae;
        var pt = F(ae), ze = A(pt);
        {
          var At = (it) => {
            var _n = _l(), or = J(_n, !0);
            H(() => B(or, (s(V).video_count ?? 0) + (s(V).image_count ?? 0))), S(it, _n);
          };
          D(ze, (it) => {
            (s(V).video_count != null || s(V).image_count != null) && it(At);
          });
        }
        H(
          (it) => {
            Ae = Jt(ae, 1, "ofx-btn ofx-outline", null, Ae, { "ofx-on": it }), B(pt, `${s(V).site ?? ""} `);
          },
          [() => s(o).has(s(V).site)]
        ), se("click", ae, () => d(s(V).site)), S(M, ae);
      });
      var wa = A(ei, 2), ti = A($r, 2);
      {
        var ya = (M) => {
          var V = gl(), ae = J(V, !0);
          H(() => B(ae, s(w))), S(M, V);
        };
        D(ti, (M) => {
          s(w) && M(ya);
        });
      }
      var ni = A(ti, 2);
      {
        var ka = (M) => {
          var V = bl();
          S(M, V);
        };
        D(ni, (M) => {
          s(o).size === 0 && M(ka);
        });
      }
      var ri = A(ni, 2);
      Re(ri, 17, () => s(n).sources.filter((M) => s(o).has(M.site)), (M) => M.site, (M, V) => {
        Wo(M, {
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
          onphoto: g
        });
      });
      var Ea = A(ri, 2);
      ua(Ea, () => s(n).handle, (M) => {
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
      }), H(() => {
        I = Jt(le, 1, "ofx-avatar", null, I, { "ofx-overlap": !!s(n).header_url }), B(je, `${s(n).display_name ?? ""} `), B(Ne, `@${(s(n).of_username || s(n).handle) ?? ""} `), B(de, ` ${s(n).source_count ?? ""}
                    ${s(n).source_count === 1 ? "site" : "sites"}`);
      }), se("click", wa, () => t.navigate("/x/onlyfans")), S(y, k);
    }, z = (y) => {
      var k = xl();
      S(y, k);
    };
    D(q, (y) => {
      s(r) ? y(ue) : s(n) ? y(Y, 1) : y(z, -1);
    });
  }
  var Z = A(q, 2);
  {
    var Q = (y) => {
      var k = wl(), $ = F(k), re = A($, 2);
      H(() => ge(re, "src", s(h).full)), se("click", $, () => x(h, null)), S(y, k);
    };
    D(Z, (y) => {
      s(h) && y(Q);
    });
  }
  var m = A(Z, 2);
  {
    var b = (y) => {
      var k = yl(), $ = F(k), re = A($, 2);
      H((fe) => ge(re, "src", fe), [
        () => _i(s(l).site, s(l).video_id)
      ]), se("click", $, () => x(l, null)), S(y, k);
    };
    D(m, (y) => {
      s(l) && y(b);
    });
  }
  var C = A(m, 2);
  {
    var te = (y) => {
      var k = El(), $ = F(k), re = A($, 2);
      {
        var fe = (le) => {
          var I = kl(), N = we(I), X = A(N, 2);
          se("click", N, () => E(-1)), se("click", X, () => E(1)), S(le, I);
        };
        D(re, (le) => {
          s(c).count > 1 && le(fe);
        });
      }
      var ie = A(re, 2);
      H(
        (le) => {
          ge(ie, "src", le), ge(ie, "alt", `${s(c).gallery.title ?? ""} ${s(c).index + 1} of ${s(c).count ?? ""}`);
        },
        [
          () => uo(s(c).gallery.site, s(c).gallery.gallery_id, s(c).index)
        ]
      ), se("click", $, () => x(c, null)), S(y, k);
    };
    D(C, (y) => {
      s(c) && y(te);
    });
  }
  S(e, R), ht();
}
dn(["click"]);
var Tl = /* @__PURE__ */ T('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Cl(e, t) {
  dt(t, !0);
  let n = wt(t, "path", 3, "");
  to(t.api);
  const r = /* @__PURE__ */ Ye(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Tl(), a = F(i), o = F(a);
  {
    var f = (c) => {
      var h = hn(), w = we(h);
      ua(w, () => s(r), (v) => {
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
      Do(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    D(o, (c) => {
      s(r) ? c(f) : c(l, -1);
    });
  }
  S(e, i), ht();
}
function Il({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = Ke({ path: t ?? "", api: n, navigate: r, host: i }), o = Fs(Cl, { target: e, props: a });
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
  Il as default
};

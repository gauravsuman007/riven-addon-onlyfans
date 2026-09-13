var Aa = Object.defineProperty;
var ii = (e) => {
  throw TypeError(e);
};
var Ta = (e, t, n) => t in e ? Aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ne = (e, t, n) => Ta(e, typeof t != "symbol" ? t + "" : t, n), or = (e, t, n) => t.has(e) || ii("Cannot " + n);
var u = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => t.has(e) ? ii("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), M = (e, t, n, r) => (or(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), B = (e, t, n) => (or(e, t, "access private method"), n);
const _e = Symbol("uninitialized"), Ca = "http://www.w3.org/1999/xhtml", wi = !1;
var yi = Array.isArray, Ra = Array.prototype.indexOf, Yn = Array.prototype.includes, nr = Array.from, Ei = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, ki = Object.getOwnPropertyDescriptors, Ia = Object.prototype, Ma = Array.prototype, Lr = Object.getPrototypeOf, ai = Object.isExtensible;
const Na = () => {
};
function Oa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Si() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function hr(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ge = 2, an = 4, rr = 8, Ai = 1 << 24, Xe = 16, Ye = 32, bt = 64, _r = 128, Pr = 256, Ge = 512, pe = 1024, he = 2048, et = 4096, ke = 8192, Ue = 16384, fn = 32768, Kn = 1 << 25, Ht = 65536, Wn = 1 << 17, La = 1 << 18, un = 1 << 19, Pa = 1 << 20, ot = 1 << 25, zt = 65536, Zn = 1 << 21, Zt = 1 << 22, Rt = 1 << 23, Jt = Symbol("$state"), Ti = Symbol("component"), Da = Symbol(""), Vn = Symbol("attributes"), pr = Symbol("class"), gr = Symbol("style"), hn = Symbol("text"), Mn = new class extends Error {
  constructor() {
    super(...arguments);
    Ne(this, "name", "StaleReactionError");
    Ne(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var mi;
const Fa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((mi = globalThis.document) != null && mi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ua() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ja() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ci(e) {
  return e === this.v;
}
function Ri(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ii(e) {
  return !Ri(e, this.v);
}
function Ha() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function za(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ba() {
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
let Ja = !1, Se = null;
function sn(e) {
  Se = e;
}
function xt(e, t = !1, n) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      q
    ),
    l: null
  };
}
function wt(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Zi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Se = t.p, Dr(e);
}
function Dr(e = {}) {
  return Ei(e, Ti, { value: !0 }), e;
}
function Mi() {
  return !0;
}
let Kt = [];
function Xa() {
  var e = Kt;
  Kt = [], Oa(e);
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
const Qa = -7169;
function ve(e, t) {
  e.f = e.f & Qa | t;
}
function Fr(e) {
  (e.f & Ge) !== 0 || e.deps === null ? ve(e, pe) : ve(e, et);
}
function Ni(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & zt) === 0 || (t.f ^= zt, Ni(
        /** @type {Derived} */
        t.deps
      ));
}
function Oi(e, t, n) {
  (e.f & he) !== 0 ? t.add(e) : (e.f & et) !== 0 && n.add(e), Ni(e.deps), ve(e, pe);
}
function Nn(e) {
  var t = z, n = q;
  Ke(null), ut(null);
  try {
    return e();
  } finally {
    Ke(t), ut(n);
  }
}
function $a(e, t, n, r) {
  const i = Ur;
  var a = e.filter((d) => !d.settled), o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var f = (
    /** @type {Effect} */
    q
  ), l = es(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function h(d) {
    if ((f.f & Ue) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (_) {
        st(_, f);
      }
      Jn();
    }
  }
  var g = Li();
  if (n.length === 0) {
    c.then(() => h([])).finally(g);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ ts(d))).then(h).catch((d) => st(d, f)).finally(g);
  }
  c ? c.then(() => {
    l(), v(), Jn();
  }) : v();
}
function es() {
  var e = (
    /** @type {Effect} */
    q
  ), t = z, n = Se, r = (
    /** @type {Batch} */
    N
  );
  return function(a = !0) {
    ut(e), Ke(t), sn(n), a && (e.f & Ue) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Jn(e = !0) {
  ut(null), Ke(null), sn(null), e && (N == null || N.deactivate());
}
function Li() {
  var e = (
    /** @type {Effect} */
    q
  ), t = e.b, n = (
    /** @type {Batch} */
    N
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  var t = ge | he;
  return q !== null && (q.f |= un), {
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
      _e
    ),
    wv: 0,
    parent: q,
    ac: null
  };
}
const _n = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ts(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    q
  );
  r === null && Ha();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Bt(
    /** @type {V} */
    _e
  ), o = !z, f = /* @__PURE__ */ new Set();
  return gs(() => {
    var d, _;
    var l = (
      /** @type {Effect} */
      q
    ), c = Si();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (w) => {
        w !== Mn && c.reject(w);
      }).finally(Jn);
    } catch (w) {
      c.reject(w), Jn();
    }
    var h = (
      /** @type {Batch} */
      N
    );
    if (o) {
      if ((l.f & fn) !== 0)
        var g = Li();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (_ = h.async_deriveds.get(l)) == null || _.reject(_n);
      else
        for (const w of f.values())
          w.reject(_n);
      f.add(c), h.async_deriveds.set(l, c);
    }
    const v = (w, p = void 0) => {
      g == null || g(), f.delete(c), p !== _n && (h.activate(), p ? (a.f |= Rt, on(a, p)) : ((a.f & Rt) !== 0 && (a.f ^= Rt), on(a, w)), h.deactivate());
    };
    c.promise.then(v, (w) => v(null, w || "unknown"));
  }), Wi(() => {
    for (const l of f)
      l.reject(_n);
  }), new Promise((l) => {
    function c(h) {
      function g() {
        h === i ? l(a) : c(i);
      }
      h.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  const t = /* @__PURE__ */ Ur(e);
  return ta(t), t;
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ Ur(e);
  return t.equals = Ii, t;
}
function rs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Re(
        /** @type {Effect} */
        t[n]
      );
  }
}
function jr(e) {
  var t, n = q, r = e.parent;
  if (!It && r !== null && e.v !== _e && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Ue | ke)) !== 0)
    return Ua(), e.v;
  ut(r);
  try {
    e.f &= ~zt, rs(e), t = aa(e);
  } finally {
    ut(n);
  }
  return t;
}
function Pi(e) {
  var t = jr(e);
  if (!e.equals(t) && (e.wv = ra(), (!(N != null && N.is_fork) || e.deps === null) && (N !== null ? (N.capture(e, t, !0), yn == null || yn.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ve(e, pe);
    return;
  }
  It || (me !== null ? (Vr() || N != null && N.is_fork) && me.set(e, t) : Fr(e));
}
function is(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && Nn(() => {
        n.ac.abort(Mn), n.ac = null;
      }), n.fn !== null && (n.teardown = Na), kn(n, 0), qr(n));
}
function Di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ln(t);
}
let lr = null, Gt = null, N = null, yn = null, me = null, mr = null, fr = !1, Wt = null, Bn = null;
var si = 0;
let as = 1;
var Xt, Tt, Ot, Qt, $t, en, dt, tn, Te, An, ht, Ze, rt, nn, Lt, $, br, pn, xr, Fi, Ui, Yt, ss, gn;
const $n = class $n {
  constructor() {
    O(this, $);
    Ne(this, "id", as++);
    /** True as soon as `#process` was called */
    O(this, Xt, !1);
    Ne(this, "linked", !0);
    /** @type {Batch | null} */
    O(this, Tt, null);
    /** @type {Batch | null} */
    O(this, Ot, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ne(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ne(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ne(this, "previous", /* @__PURE__ */ new Map());
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
    O(this, dt, /* @__PURE__ */ new Map());
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
    O(this, Te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    O(this, An, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    O(this, ht, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    O(this, Ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    O(this, rt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    O(this, nn, /* @__PURE__ */ new Set());
    Ne(this, "is_fork", !1);
    O(this, Lt, !1);
    Gt === null ? lr = Gt = this : (M(Gt, Ot, this), M(this, Tt, Gt)), Gt = this;
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
        ve(i, he), n(i);
      for (i of r.m)
        ve(i, et), n(i);
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
    t.v !== _e && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Rt) === 0 && (this.current.set(t, [n, r]), me == null || me.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, me = null;
  }
  flush() {
    try {
      fr = !0, N = this, B(this, $, pn).call(this);
    } finally {
      si = 0, mr = null, Wt = null, Bn = null, fr = !1, N = null, me = null, lt.clear();
    }
  }
  discard() {
    var t;
    for (const n of u(this, $t)) n(this);
    u(this, $t).clear();
    for (const n of this.async_deriveds.values())
      n.reject(_n);
    B(this, $, gn).call(this), (t = u(this, tn)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    u(this, An).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (M(this, en, u(this, en) + 1), t) {
      let r = u(this, dt).get(n) ?? 0;
      u(this, dt).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (M(this, en, u(this, en) - 1), t) {
      let r = u(this, dt).get(n) ?? 0;
      r === 1 ? u(this, dt).delete(n) : u(this, dt).set(n, r - 1);
    }
    u(this, Lt) || (M(this, Lt, !0), pt(() => {
      M(this, Lt, !1), this.linked && this.flush();
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
      u(this, Ze).add(r);
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
    return (u(this, tn) ?? M(this, tn, Si())).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new $n();
      fr || pt(() => {
        u(t, Xt) || t.flush();
      });
    }
    return N;
  }
  apply() {
    {
      me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (mr = t, (i = t.b) != null && i.is_pending && (t.f & (an | rr | Ai)) !== 0 && (t.f & fn) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Wt !== null && n === q && (z === null || (z.f & ge) === 0))
        return;
      if ((r & (bt | Ye)) !== 0) {
        if ((r & pe) === 0)
          return;
        n.f ^= pe;
      }
    }
    u(this, Te).push(n);
  }
};
Xt = new WeakMap(), Tt = new WeakMap(), Ot = new WeakMap(), Qt = new WeakMap(), $t = new WeakMap(), en = new WeakMap(), dt = new WeakMap(), tn = new WeakMap(), Te = new WeakMap(), An = new WeakMap(), ht = new WeakMap(), Ze = new WeakMap(), rt = new WeakMap(), nn = new WeakMap(), Lt = new WeakMap(), $ = new WeakSet(), br = function() {
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
}, pn = function() {
  var l, c, h, g;
  M(this, Xt, !0), si++ > 1e3 && (B(this, $, gn).call(this), os());
  for (const v of u(this, ht))
    u(this, Ze).delete(v), ve(v, he), this.schedule(v);
  for (const v of u(this, Ze))
    ve(v, et), this.schedule(v);
  const t = u(this, Te);
  M(this, Te, []), this.apply();
  var n = Wt = [], r = [], i = Bn = [];
  for (const v of t)
    try {
      B(this, $, xr).call(this, v, n, r);
    } catch (d) {
      throw zi(v), B(this, $, br).call(this) || this.discard(), d;
    }
  if (N = null, i.length > 0) {
    var a = $n.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Wt = null, Bn = null, B(this, $, br).call(this)) {
    B(this, $, Yt).call(this, r), B(this, $, Yt).call(this, n);
    for (const [v, d] of u(this, rt))
      Hi(v, d);
    i.length > 0 && /** @type {unknown} */
    B(l = N, $, pn).call(l);
    return;
  }
  const o = B(this, $, Fi).call(this);
  if (o) {
    B(this, $, Yt).call(this, r), B(this, $, Yt).call(this, n), B(c = o, $, Ui).call(c, this);
    return;
  }
  u(this, ht).clear(), u(this, Ze).clear();
  for (const v of u(this, Qt)) v(this);
  u(this, Qt).clear(), yn = this, oi(r), oi(n), yn = null, (h = u(this, tn)) == null || h.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    N
  );
  if (u(this, en) === 0 && (u(this, Te).length === 0 || f !== null) && B(this, $, gn).call(this), u(this, Te).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Te).push(...u(this, Te).filter((d) => !u(v, Te).includes(d)));
    } else
      f = this;
  f !== null && (lt.clear(), B(g = f, $, pn).call(g));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
xr = function(t, n, r) {
  t.f ^= pe;
  for (var i = t.first; i !== null; ) {
    var a = i.f, o = (a & (Ye | bt)) !== 0, f = o && (a & pe) !== 0, l = f || (a & ke) !== 0 || u(this, rt).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= pe : (a & an) !== 0 ? n.push(i) : Dn(i) && ((a & Xe) !== 0 && u(this, Ze).add(i), ln(i));
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
  for (var t = u(this, Tt); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = u(t, Tt);
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
  t.async_deriveds.clear(), this.transfer_effects(u(t, ht), u(t, Ze));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & ge) !== 0 && (i.f & (he | et)) === 0))
      for (const l of a) {
        var o = l.f;
        if ((o & ge) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          o & (Zt | Xe) && !this.async_deriveds.has(f) && (u(this, Ze).delete(f), ve(f, he), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), B(r = t, $, gn).call(r), N = this, B(this, $, pn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Yt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Oi(t[n], u(this, ht), u(this, Ze));
}, ss = function() {
  var g;
  for (let v = lr; v !== null; v = u(v, Ot)) {
    var t = v.id < this.id, n = [];
    for (const [d, [_, w]] of this.current) {
      if (v.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (t && _ !== r)
          v.current.set(d, [_, w]);
        else
          continue;
      }
      n.push(d);
    }
    if (t)
      for (const [d, _] of this.async_deriveds) {
        const w = v.async_deriveds.get(d);
        w && _.promise.then(w.resolve).catch(w.reject);
      }
    var i = [...v.current.keys()].filter(
      (d) => !/** @type {[any, boolean]} */
      v.current.get(d)[1]
    );
    if (!(!u(v, Xt) || i.length === 0)) {
      var a = i.filter((d) => !this.current.has(d));
      if (a.length === 0)
        t && v.discard();
      else if (n.length > 0) {
        if (t)
          for (const d of u(this, nn))
            v.unskip_effect(d, (_) => {
              var w;
              (_.f & (Xe | Zt)) !== 0 ? v.schedule(_) : B(w = v, $, Yt).call(w, [_]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          ji(l, a, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, _]) => {
          const w = this.current.get(d);
          return w ? w[0] !== _[0] || w[1] !== _[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, An))
            (d.f & (Ue | ke | Wn)) === 0 && Hr(d, c, f) && ((d.f & (Zt | Xe)) !== 0 ? (ve(d, he), v.schedule(d)) : u(v, ht).add(d));
        if (u(v, Te).length > 0 && !u(v, Lt)) {
          v.apply();
          for (var h of u(v, Te))
            B(g = v, $, xr).call(g, h, [], []);
          M(v, Te, []);
        }
        v.deactivate();
      }
    }
  }
}, gn = function() {
  if (this.linked) {
    var t = u(this, Tt), n = u(this, Ot);
    t === null ? lr = n : M(t, Ot, n), n === null ? Gt = t : M(n, Tt, t), this.linked = !1;
  }
};
let Vt = $n;
function os() {
  try {
    Ga();
  } catch (e) {
    st(e, mr);
  }
}
let We = null;
function oi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ue | ke)) === 0 && Dn(r) && (We = /* @__PURE__ */ new Set(), ln(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qi(r), (We == null ? void 0 : We.size) > 0)) {
        lt.clear();
        for (const i of We) {
          if ((i.f & (Ue | ke)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            We.has(o) && (We.delete(o), a.push(o)), o = o.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const l = a[f];
            (l.f & (Ue | ke)) === 0 && ln(l);
          }
        }
        We.clear();
      }
    }
    We = null;
  }
}
function ji(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & ge) !== 0 ? ji(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (a & (Zt | Xe)) !== 0 && (a & he) === 0 && Hr(i, t, r) && (ve(i, he), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function Hr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Yn.call(t, i))
        return !0;
      if ((i.f & ge) !== 0 && Hr(
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
function zr(e) {
  N.schedule(e);
}
function Hi(e, t) {
  if (!((e.f & Ye) !== 0 && (e.f & pe) !== 0)) {
    (e.f & he) !== 0 ? t.d.push(e) : (e.f & et) !== 0 && t.m.push(e), ve(e, pe);
    for (var n = e.first; n !== null; )
      Hi(n, t), n = n.next;
  }
}
function zi(e) {
  ve(e, pe);
  for (var t = e.first; t !== null; )
    zi(t), t = t.next;
}
let Xn = /* @__PURE__ */ new Set();
const lt = /* @__PURE__ */ new Map();
let Vi = !1;
function Bt(e, t) {
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
function F(e, t) {
  const n = Bt(e);
  return ta(n), n;
}
// @__NO_SIDE_EFFECTS__
function ls(e, t = !1, n = !0) {
  const r = Bt(e);
  return t || (r.equals = Ii), r;
}
function E(e, t, n = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || (z.f & Wn) !== 0) && Mi() && (z.f & (ge | Xe | Zt | Wn)) !== 0 && (ft === null || !ft.has(e)) && Wa();
  let r = n ? Qe(t) : t;
  return on(e, r, Bn);
}
function on(e, t, n = null) {
  if (!e.equals(t)) {
    It ? lt.set(e, t) : lt.has(e) || lt.set(e, e.v);
    var r = Vt.ensure();
    if (r.capture(e, t), (e.f & ge) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & he) !== 0 && jr(i), me === null && Fr(i);
    }
    e.wv = ra(), Bi(e, he, n), q !== null && (q.f & pe) !== 0 && (q.f & (Ye | bt)) === 0 && (He === null ? xs([e]) : He.push(e)), !r.is_fork && Xn.size > 0 && !Vi && fs();
  }
  return t;
}
function fs() {
  Vi = !1;
  for (const e of Xn) {
    (e.f & pe) !== 0 && ve(e, et);
    let t;
    try {
      t = Dn(e);
    } catch {
      t = !0;
    }
    t && ln(e);
  }
  Xn.clear();
}
function En(e) {
  E(e, e.v + 1);
}
function Bi(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], f = o.f, l = (f & he) === 0;
      if (l && ve(o, t), (f & Wn) !== 0)
        Xn.add(
          /** @type {Effect} */
          o
        );
      else if ((f & ge) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        me == null || me.delete(c), (f & zt) === 0 && (f & Ge && (q === null || (q.f & Zn) === 0) && (o.f |= zt), Bi(c, et, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & Xe) !== 0 && We !== null && We.add(h), n !== null ? n.push(h) : zr(h);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Jt in e || Ti in e)
    return e;
  const t = Lr(e);
  if (t !== Ia && t !== Ma)
    return e;
  var n = /* @__PURE__ */ new Map(), r = yi(e), i = /* @__PURE__ */ F(0), a = jt, o = (f) => {
    if (jt === a)
      return f();
    var l = z, c = jt;
    Ke(null), fi(a);
    var h = f();
    return Ke(l), fi(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ya();
        var h = n.get(l);
        return h === void 0 ? o(() => {
          var g = /* @__PURE__ */ F(c.value);
          return n.set(l, g), g;
        }) : E(h, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ F(_e));
            n.set(l, h), En(i);
          }
        } else
          E(c, _e), En(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === Jt)
          return e;
        var h = n.get(l), g = l in f;
        if (h === void 0 && (!g || (d = wn(f, l)) != null && d.writable) && (h = o(() => {
          var _ = Qe(g ? f[l] : _e), w = /* @__PURE__ */ F(_);
          return w;
        }), n.set(l, h)), h !== void 0) {
          var v = s(h);
          return v === _e ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = s(h));
        } else if (c === void 0) {
          var g = n.get(l), v = g == null ? void 0 : g.v;
          if (g !== void 0 && v !== _e)
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
        if (l === Jt)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== _e || Reflect.has(f, l);
        if (c !== void 0 || q !== null && (!h || (v = wn(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = h ? Qe(f[l]) : _e, _ = /* @__PURE__ */ F(d);
            return _;
          }), n.set(l, c));
          var g = s(c);
          if (g === _e)
            return !1;
        }
        return h;
      },
      set(f, l, c, h) {
        var P;
        var g = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          g.v; d += 1) {
            var _ = n.get(d + "");
            _ !== void 0 ? E(_, _e) : d in f && (_ = o(() => /* @__PURE__ */ F(_e)), n.set(d + "", _));
          }
        if (g === void 0)
          (!v || (P = wn(f, l)) != null && P.writable) && (g = o(() => /* @__PURE__ */ F(void 0)), E(g, Qe(c)), n.set(l, g));
        else {
          v = g.v !== _e;
          var w = o(() => Qe(c));
          E(g, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, l);
        if (p != null && p.set && p.set.call(h, c), !v) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), J = Number(l);
            Number.isInteger(J) && J >= A.v && E(A, J + 1);
          }
          En(i);
        }
        return !0;
      },
      ownKeys(f) {
        s(i);
        var l = Reflect.ownKeys(f).filter((g) => {
          var v = n.get(g);
          return v === void 0 || v.v !== _e;
        });
        for (var [c, h] of n)
          h.v !== _e && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ka();
      }
    }
  );
}
var wr, qi, Gi, Yi;
function us() {
  if (wr === void 0) {
    wr = window, qi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gi = wn(t, "firstChild").get, Yi = wn(t, "nextSibling").get, ai(e) && (e[pr] = void 0, e[Vn] = null, e[gr] = void 0, e.__e = void 0), ai(n) && (n[hn] = void 0);
  }
}
function mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return (
    /** @type {TemplateNode | null} */
    Gi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
function U(e, t) {
  return /* @__PURE__ */ qt(e);
}
function Ee(e, t = !1) {
  {
    var n = /* @__PURE__ */ qt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
  }
}
function Q(e, t = !1) {
  return /* @__PURE__ */ qt(e);
}
function S(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ On(r);
  return r;
}
function cs(e) {
  e.textContent = "";
}
function Ki() {
  return !1;
}
function vs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function ds(e) {
  var t = q;
  if (t === null)
    return z.f |= Rt, e;
  if ((t.f & fn) === 0 && (t.f & an) === 0)
    throw e;
  st(e, t);
}
function st(e, t) {
  if (!(t !== null && (t.f & Ue) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & _r) !== 0 && (t.f & (Ue | Kn)) === 0) {
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
  q === null && (z === null && qa(), Ba()), It && Va();
}
function _s(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yt(e, t) {
  var n = q;
  n !== null && (n.f & ke) !== 0 && (e |= ke);
  var r = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | he | Ge,
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
  N == null || N.register_created_effect(r);
  var i = r;
  if ((e & an) !== 0)
    Wt !== null ? Wt.push(r) : Vt.ensure().schedule(r);
  else if (t !== null) {
    try {
      ln(r);
    } catch (o) {
      throw Re(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & un) === 0 && (i = i.first, (e & Xe) !== 0 && (e & Ht) !== 0 && i !== null && (i.f |= Ht));
  }
  if (i !== null && (i.parent = n, n !== null && _s(i, n), z !== null && (z.f & ge) !== 0 && (e & bt) === 0)) {
    var a = (
      /** @type {Derived} */
      z
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Vr() {
  return z !== null && !$e;
}
function Wi(e) {
  const t = yt(rr, null);
  return ve(t, pe), t.teardown = e, t;
}
function Ln(e) {
  hs();
  var t = (
    /** @type {Effect} */
    q.f
  ), n = !z && (t & Ye) !== 0 && Se !== null && !Se.i;
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
  return yt(an | Pa, e);
}
function ps(e) {
  Vt.ensure();
  const t = yt(bt | un, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ut(t, () => {
      Re(t), r(void 0);
    }) : (Re(t), r(void 0));
  });
}
function Ji(e) {
  return yt(an, e);
}
function gs(e) {
  return yt(Zt | un, e);
}
function Br(e, t = 0) {
  return yt(rr | t, e);
}
function H(e, t = [], n = [], r = []) {
  $a(r, t, n, (i) => {
    yt(rr, () => {
      e(...i.map(s));
    });
  });
}
function Pn(e, t = 0) {
  var n = yt(Xe | t, e);
  return n;
}
function Be(e) {
  return yt(Ye | un, e);
}
function Xi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = It, r = z;
    li(!0), Ke(null);
    try {
      t.call(null);
    } catch (i) {
      st(i, e.parent);
    } finally {
      li(n), Ke(r);
    }
  }
}
function qr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Nn(() => {
      i.abort(Mn);
    });
    var r = n.next;
    (n.f & bt) !== 0 ? n.parent = null : Re(n, t), n = r;
  }
}
function ms(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ye) === 0 && Re(t), t = n;
  }
}
function Re(e, t = !0) {
  var n = !1;
  (t || (e.f & La) !== 0) && e.nodes !== null && e.nodes.end !== null && (bs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Kn, qr(e, t && !n), kn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Xi(e), e.f ^= Kn, e.f |= Ue;
  var i = e.parent;
  i !== null && i.first !== null && Qi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function bs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ On(e);
    e.remove(), e = n;
  }
}
function Qi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ut(e, t, n = !0) {
  var r = [];
  e.f |= Pr, $i(e, r, !0);
  var i = () => {
    n && Re(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function $i(e, t, n) {
  if ((e.f & ke) === 0) {
    e.f ^= ke;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & bt) === 0) {
        var o = (i.f & Ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ye) !== 0 && (e.f & Xe) !== 0;
        $i(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function Qn(e) {
  e.f &= ~Pr, ea(e, !0);
}
function ea(e, t) {
  if ((e.f & Pr) === 0 && (e.f & ke) !== 0) {
    e.f ^= ke, (e.f & pe) === 0 && (ve(e, he), Vt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ht) !== 0 || (n.f & Ye) !== 0;
      ea(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function Gr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ On(n);
      t.append(n), n = i;
    }
}
let qn = !1, It = !1;
function li(e) {
  It = e;
}
let z = null, $e = !1;
function Ke(e) {
  z = e;
}
let q = null;
function ut(e) {
  q = e;
}
let ft = null;
function ta(e) {
  z !== null && (ft ?? (ft = /* @__PURE__ */ new Set())).add(e);
}
let Ce = null, De = 0, He = null;
function xs(e) {
  He = e;
}
let na = 1, Mt = 0, jt = Mt;
function fi(e) {
  jt = e;
}
function ra() {
  return ++na;
}
function Dn(e) {
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if (t & ge && (e.f &= ~zt), (t & et) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Dn(
        /** @type {Derived} */
        a
      ) && Pi(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Ge) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    me === null && ve(e, pe);
  }
  return !1;
}
function ia(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ft !== null && ft.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & ge) !== 0 ? ia(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ve(a, he) : (a.f & pe) !== 0 && ve(a, et), zr(
        /** @type {Effect} */
        a
      ));
    }
}
function aa(e) {
  var t = Ce, n = De, r = He, i = z, a = ft, o = Se, f = $e, l = jt, c = e.f;
  Ce = /** @type {null | Value[]} */
  null, De = 0, He = null, z = (c & (Ye | bt)) === 0 ? e : null, ft = null, sn(e.ctx), $e = !1, jt = ++Mt, e.ac !== null && (Nn(() => {
    e.ac.abort(Mn);
  }), e.ac = null);
  try {
    e.f |= Zn;
    var h = (
      /** @type {Function} */
      e.fn
    ), g = h();
    e.f |= fn;
    var v = ui(e);
    if (Mi() && He !== null && !$e && v !== null && (e.f & (ge | et | he)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      He.length; d++)
        ia(
          He[d],
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
      He !== null && (r === null ? r = He : r.push(.../** @type {Source[]} */
      He));
    }
    return (e.f & Rt) !== 0 && (e.f ^= Rt), g;
  } catch (_) {
    return ui(e), ds(_);
  } finally {
    e.f ^= Zn, Ce = t, De = n, He = r, z = i, ft = a, sn(o), $e = f, jt = l;
  }
}
function ui(e) {
  var i;
  var t = e.deps, n = N == null ? void 0 : N.is_fork;
  if (Ce !== null) {
    var r;
    if (n || kn(e, De), t !== null && De > 0)
      for (t.length = De + Ce.length, r = 0; r < Ce.length; r++)
        t[De + r] = Ce[r];
    else
      e.deps = t = Ce;
    if (Vr() && (e.f & Ge) !== 0)
      for (r = De; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && De < t.length && (kn(e, De), t.length = De);
  return t;
}
function ws(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ra.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !Yn.call(Ce, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Ge) !== 0 && (a.f ^= Ge, a.f &= ~zt), a.v !== _e && Fr(a), a.ac !== null && Nn(() => {
      a.ac.abort(Mn), a.ac = null, ve(a, he);
    }), is(a), kn(a, 0);
  }
}
function kn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ws(e, n[r]);
}
function ln(e) {
  var t = e.f;
  if ((t & Ue) === 0) {
    ve(e, pe);
    var n = q, r = qn;
    q = e, qn = (t & (Ye | bt)) === 0;
    try {
      (t & (Xe | Ai)) !== 0 ? ms(e) : qr(e), Xi(e);
      var i = aa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = na;
      var a;
      wi && Ja && (e.f & he) !== 0 && e.deps;
    } finally {
      qn = r, q = n;
    }
  }
}
function s(e) {
  var t = e.f, n = (t & ge) !== 0;
  if (z !== null && !$e) {
    var r = q !== null && (q.f & Ue) !== 0;
    if (!r && (ft === null || !ft.has(e))) {
      var i = z.deps;
      if ((z.f & Zn) !== 0)
        e.rv < Mt && (e.rv = Mt, Ce === null && i !== null && i[De] === e ? De++ : Ce === null ? Ce = [e] : Ce.push(e));
      else {
        z.deps ?? (z.deps = []), Yn.call(z.deps, e) || z.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [z] : Yn.call(a, z) || a.push(z);
      }
    }
  }
  if (It && lt.has(e))
    return lt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (It) {
      var f = o.v;
      return ((o.f & pe) === 0 && o.reactions !== null || oa(o)) && (f = jr(o)), lt.set(o, f), f;
    }
    var l = (o.f & Ge) === 0 && !$e && z !== null && (qn || (z.f & Ge) !== 0), c = (o.f & fn) === 0;
    Dn(o) && (l && (o.f |= Ge), Pi(o)), l && !c && (Di(o), sa(o));
  }
  if (me != null && me.has(e))
    return me.get(e);
  if ((e.f & Rt) !== 0)
    throw e.v;
  return e.v;
}
function sa(e) {
  if (e.f |= Ge, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & Ge) === 0 && (Di(
        /** @type {Derived} */
        t
      ), sa(
        /** @type {Derived} */
        t
      ));
}
function oa(e) {
  if (e.v === _e) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || (t.f & ge) !== 0 && oa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ir(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
function ys(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Jt in e)
      yr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Jt in n && yr(n);
      }
  }
}
function yr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        yr(e[r], t);
      } catch {
      }
    const n = Lr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ki(n);
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
const Nt = Symbol("events"), la = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function Es(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || Sr.call(t, a), !a.cancelBubble)
      return Nn(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function kr(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = Es(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Wi(() => {
    t.removeEventListener(e, o, a);
  });
}
function de(e, t, n) {
  (t[Nt] ?? (t[Nt] = {}))[e] = n;
}
function Fn(e) {
  for (var t = 0; t < e.length; t++)
    la.add(e[t]);
  for (var n of Er)
    n(e);
}
let ur = null, cr = !1;
function Sr(e) {
  var w, p;
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
  var o = 0, f = ur === e && e[Nt];
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
    var h = z, g = q;
    Ke(null), ut(null);
    try {
      for (var v, d = []; a !== null && a !== t; ) {
        try {
          var _ = (p = a[Nt]) == null ? void 0 : p[r];
          _ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && _.call(a, e);
        } catch (A) {
          v ? d.push(A) : v = A;
        }
        if (e.cancelBubble) break;
        o++, a = o < i.length ? (
          /** @type {Element} */
          i[o]
        ) : null;
      }
      if (v) {
        for (let A of d)
          queueMicrotask(() => {
            throw A;
          });
        throw v;
      }
    } finally {
      e[Nt] = t, delete e.currentTarget, Ke(h), ut(g);
    }
  }
}
var bi;
const vr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((bi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : bi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ks(e) {
  return (
    /** @type {string} */
    (vr == null ? void 0 : vr.createHTML(e)) ?? e
  );
}
function fa(e) {
  var t = vs("template");
  return t.innerHTML = ks(e.replaceAll("<!>", "<!---->")), t.content;
}
function Sn(e, t) {
  var n = (
    /** @type {Effect} */
    q
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function T(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = fa(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || qi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Sn(f, l);
    } else
      Sn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ss(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        fa(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ qt(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qt(f);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Sn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function As(e, t) {
  return /* @__PURE__ */ Ss(e, t, "svg");
}
function Hn(e = "") {
  {
    var t = mt(e + "");
    return Sn(t, t), t;
  }
}
function cn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mt();
  return e.append(t, n), Sn(t, n), e;
}
function k(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ts = ["touchstart", "touchmove"];
function Cs(e) {
  return Ts.includes(e);
}
function Rs(e) {
  let t = 0, n = Bt(0), r;
  return () => {
    Vr() && (s(n), Br(() => (t === 0 && (r = ir(() => e(() => En(n)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, En(n));
      });
    })));
  };
}
var Is = Ht | un;
function Ms(e, t, n, r) {
  new Ns(e, t, n, r);
}
var ze, Or, Ve, Pt, we, Oe, ye, Le, it, Dt, Ct, rn, Tn, Cn, _t, er, ie, Os, Ls, Ar, Ps, Tr, mn, Gn, Cr, Rr;
class Ns {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    O(this, ie);
    /** @type {Boundary | null} */
    Ne(this, "parent");
    Ne(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ne(this, "transform_error");
    /** @type {TemplateNode} */
    O(this, ze);
    /** @type {TemplateNode | null} */
    O(this, Or, null);
    /** @type {BoundaryProps} */
    O(this, Ve);
    /** @type {((anchor: Node) => void)} */
    O(this, Pt);
    /** @type {Effect} */
    O(this, we);
    /** @type {Effect | null} */
    O(this, Oe, null);
    /** @type {Effect | null} */
    O(this, ye, null);
    /** @type {Effect | null} */
    O(this, Le, null);
    /** @type {DocumentFragment | null} */
    O(this, it, null);
    O(this, Dt, 0);
    O(this, Ct, 0);
    O(this, rn, !1);
    /** @type {Set<Effect>} */
    O(this, Tn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    O(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    O(this, _t, null);
    O(this, er, Rs(() => (M(this, _t, Bt(u(this, Dt))), () => {
      M(this, _t, null);
    })));
    var a;
    M(this, ze, t), M(this, Ve, n), M(this, Pt, (o) => {
      var f = (
        /** @type {Effect} */
        q
      );
      f.b = this, f.f |= _r, r(o);
    }), this.parent = /** @type {Effect} */
    q.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((o) => o), M(this, we, Pn(() => {
      B(this, ie, Tr).call(this);
    }, Is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Oi(t, u(this, Tn), u(this, Cn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, Ve).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    B(this, ie, Cr).call(this, t, n), M(this, Dt, u(this, Dt) + t), !(!u(this, _t) || u(this, rn)) && (M(this, rn, !0), pt(() => {
      M(this, rn, !1), u(this, _t) && on(u(this, _t), u(this, Dt));
    }));
  }
  get_effect_pending() {
    return u(this, er).call(this), s(
      /** @type {Source<number>} */
      u(this, _t)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!u(this, Ve).onerror && !u(this, Ve).failed)
      throw t;
    N != null && N.is_fork ? (u(this, Oe) && N.skip_effect(u(this, Oe)), u(this, ye) && N.skip_effect(u(this, ye)), u(this, Le) && N.skip_effect(u(this, Le)), N.oncommit(() => {
      B(this, ie, Rr).call(this, t);
    })) : B(this, ie, Rr).call(this, t);
  }
}
ze = new WeakMap(), Or = new WeakMap(), Ve = new WeakMap(), Pt = new WeakMap(), we = new WeakMap(), Oe = new WeakMap(), ye = new WeakMap(), Le = new WeakMap(), it = new WeakMap(), Dt = new WeakMap(), Ct = new WeakMap(), rn = new WeakMap(), Tn = new WeakMap(), Cn = new WeakMap(), _t = new WeakMap(), er = new WeakMap(), ie = new WeakSet(), Os = function() {
  try {
    M(this, Oe, Be(() => u(this, Pt).call(this, u(this, ze))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ls = function(t) {
  const n = u(this, Ve).failed, { reset: r, invoke_onerror: i } = B(this, ie, Ar).call(this, t);
  pt(i), n && M(this, Le, Be(() => {
    n(
      u(this, ze),
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
      ja();
      return;
    }
    n = !0, r && Za(), u(this, Le) !== null && Ut(u(this, Le), () => {
      M(this, Le, null);
    }), B(this, ie, Gn).call(this, () => {
      B(this, ie, Tr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, Ve)).onerror) == null || f.call(o, t, i), r = !1;
    } catch (l) {
      st(l, u(this, we) && u(this, we).parent);
    }
  } };
}, Ps = function() {
  const t = u(this, Ve).pending;
  t && (this.is_pending = !0, M(this, ye, Be(() => t(u(this, ze)))), pt(() => {
    var n = M(this, it, document.createDocumentFragment()), r = mt(), i = !1;
    if (n.append(r), M(this, Oe, B(this, ie, Gn).call(this, () => {
      try {
        return Be(() => u(this, Pt).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (o) {
          st(o, u(this, we).parent);
        }
        return null;
      }
    })), u(this, Oe) === null) {
      M(this, it, null), i && B(this, ie, mn).call(
        this,
        /** @type {Batch} */
        N
      );
      return;
    }
    u(this, Ct) === 0 && (u(this, ze).before(n), M(this, it, null), Ut(
      /** @type {Effect} */
      u(this, ye),
      () => {
        M(this, ye, null);
      }
    ), B(this, ie, mn).call(
      this,
      /** @type {Batch} */
      N
    ));
  }));
}, Tr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, Ct, 0), M(this, Dt, 0), M(this, Oe, Be(() => {
      u(this, Pt).call(this, u(this, ze));
    })), u(this, Ct) > 0) {
      var t = M(this, it, document.createDocumentFragment());
      Gr(u(this, Oe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, Ve).pending
      );
      M(this, ye, Be(() => n(u(this, ze))));
    } else
      B(this, ie, mn).call(
        this,
        /** @type {Batch} */
        N
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
mn = function(t) {
  this.is_pending = !1, t.transfer_effects(u(this, Tn), u(this, Cn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Gn = function(t) {
  var n = q, r = z, i = Se;
  ut(u(this, we)), Ke(u(this, we)), sn(u(this, we).ctx);
  try {
    return Vt.ensure(), t();
  } finally {
    ut(n), Ke(r), sn(i);
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
    this.parent && B(r = this.parent, ie, Cr).call(r, t, n);
    return;
  }
  M(this, Ct, u(this, Ct) + t), u(this, Ct) === 0 && (B(this, ie, mn).call(this, n), u(this, ye) && Ut(u(this, ye), () => {
    M(this, ye, null);
  }), u(this, it) && (u(this, ze).before(u(this, it)), M(this, it, null)));
}, /**
 * @param {unknown} error
 */
Rr = function(t) {
  u(this, Oe) && (Re(u(this, Oe)), M(this, Oe, null)), u(this, ye) && (Re(u(this, ye)), M(this, ye, null)), u(this, Le) && (Re(u(this, Le)), M(this, Le, null));
  let n = u(this, Ve).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: o } = B(this, ie, Ar).call(this, i);
    o(), n && M(this, Le, B(this, ie, Gn).call(this, () => {
      try {
        return Be(() => {
          var f = (
            /** @type {Effect} */
            q
          );
          f.b = this, f.f |= _r, n(
            u(this, ze),
            () => i,
            () => a
          );
        });
      } catch (f) {
        return st(
          f,
          /** @type {Effect} */
          u(this, we).parent
        ), null;
      }
    }));
  };
  pt(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (a) {
      st(a, u(this, we) && u(this, we).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => st(a, u(this, we) && u(this, we).parent)
    ) : r(i);
  });
};
function Y(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[hn] ?? (e[hn] = e.nodeValue)) && (e[hn] = n, e.nodeValue = `${n}`);
}
function Ds(e, t) {
  return Fs(e, t);
}
const zn = /* @__PURE__ */ new Map();
function Fs(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: f }) {
  us();
  var l = void 0, c = ps(() => {
    var h = n ?? t.appendChild(mt());
    Ms(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        xt({});
        var _ = (
          /** @type {ComponentContext} */
          Se
        );
        a && (_.c = a), i && (r.$$events = i), l = e(d, r) || Dr(), wt();
      },
      f
    );
    var g = /* @__PURE__ */ new Set(), v = (d) => {
      for (var _ = 0; _ < d.length; _++) {
        var w = d[_];
        if (!g.has(w)) {
          g.add(w);
          var p = Cs(w);
          for (const P of [t, document]) {
            var A = zn.get(P);
            A === void 0 && (A = /* @__PURE__ */ new Map(), zn.set(P, A));
            var J = A.get(w);
            J === void 0 ? (P.addEventListener(w, Sr, { passive: p }), A.set(w, 1)) : A.set(w, J + 1);
          }
        }
      }
    };
    return v(nr(la)), Er.add(v), () => {
      var p;
      for (var d of g)
        for (const A of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            zn.get(A)
          ), w = (
            /** @type {number} */
            _.get(d)
          );
          --w == 0 ? (A.removeEventListener(d, Sr), _.delete(d), _.size === 0 && zn.delete(A)) : _.set(d, w);
        }
      Er.delete(v), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Ir.set(l, c), l;
}
let Ir = /* @__PURE__ */ new WeakMap();
function Us(e, t) {
  const n = Ir.get(e);
  return n ? (Ir.delete(e), n(t)) : Promise.resolve();
}
var Je, at, Pe, Ft, Rn, In, tr;
class Yr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Ne(this, "anchor");
    /** @type {Map<Batch, Key>} */
    O(this, Je, /* @__PURE__ */ new Map());
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
    O(this, at, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    O(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    O(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    O(this, Rn, !0);
    /**
     * @param {Batch} batch
     */
    O(this, In, (t) => {
      if (u(this, Je).has(t)) {
        var n = (
          /** @type {Key} */
          u(this, Je).get(t)
        ), r = u(this, at).get(n);
        if (r)
          Qn(r), u(this, Ft).delete(n);
        else {
          var i = u(this, Pe).get(n);
          i && (Qn(i.effect), u(this, at).set(n, i.effect), u(this, Pe).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, o] of u(this, Je)) {
          if (u(this, Je).delete(a), a === t)
            break;
          const f = u(this, Pe).get(o);
          f && (Re(f.effect), u(this, Pe).delete(o));
        }
        for (const [a, o] of u(this, at)) {
          if (a === n || u(this, Ft).has(a)) continue;
          const f = () => {
            if (Array.from(u(this, Je).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Gr(o, c), c.append(mt()), u(this, Pe).set(a, { effect: o, fragment: c });
            } else
              Re(o);
            u(this, Ft).delete(a), u(this, at).delete(a);
          };
          u(this, Rn) || !r ? (u(this, Ft).add(a), Ut(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    O(this, tr, (t) => {
      u(this, Je).delete(t);
      const n = Array.from(u(this, Je).values());
      for (const [r, i] of u(this, Pe))
        n.includes(r) || (Re(i.effect), u(this, Pe).delete(r));
    });
    this.anchor = t, M(this, Rn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      N
    ), i = Ki();
    if (n && !u(this, at).has(t) && !u(this, Pe).has(t))
      if (i) {
        var a = document.createDocumentFragment(), o = mt();
        a.append(o), u(this, Pe).set(t, {
          effect: Be(() => n(o)),
          fragment: a
        });
      } else
        u(this, at).set(
          t,
          Be(() => n(this.anchor))
        );
    if (u(this, Je).set(r, t), i) {
      for (const [f, l] of u(this, at))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, Pe))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, In)), r.ondiscard(u(this, tr));
    } else
      u(this, In).call(this, r);
  }
}
Je = new WeakMap(), at = new WeakMap(), Pe = new WeakMap(), Ft = new WeakMap(), Rn = new WeakMap(), In = new WeakMap(), tr = new WeakMap();
function js(e, t, ...n) {
  var r = new Yr(e);
  Pn(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Ht);
}
function L(e, t, n = !1) {
  var r = new Yr(e), i = n ? Ht : 0;
  function a(o, f) {
    r.ensure(o, f);
  }
  Pn(() => {
    var o = !1;
    t((f, l = 0) => {
      o = !0, a(l, f);
    }), o || a(-1, null);
  }, i);
}
const Hs = Symbol("NaN");
function ua(e, t, n) {
  var r = new Yr(e);
  Pn(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Hs), r.ensure(i, n);
  });
}
function Kr(e, t) {
  return t;
}
function zs(e, t, n) {
  for (var r = [], i = t.length, a, o = t.length, f = 0; f < i; f++) {
    let g = t[f];
    Ut(
      g,
      () => {
        if (a) {
          if (a.pending.delete(g), a.done.add(g), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Mr(e, nr(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
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
      cs(h), h.append(c), e.items.clear();
    }
    Mr(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Mr(e, t, n = !0) {
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
      a.f |= ot;
      const o = document.createDocumentFragment();
      Gr(a, o);
    } else
      Re(t[i], n);
  }
}
var ci;
function Fe(e, t, n, r, i, a = null) {
  var o = e, f = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(mt());
  }
  var h = null, g = /* @__PURE__ */ ns(() => {
    var P = n();
    return (
      /** @type {V[]} */
      yi(P) ? P : P == null ? [] : nr(P)
    );
  }), v, d = /* @__PURE__ */ new Map(), _ = !0;
  function w(P) {
    (J.effect.f & Ue) === 0 && (J.pending.delete(P), J.fallback = h, Vs(J, v, o, t, r), h !== null && (v.length === 0 ? (h.f & ot) === 0 ? Qn(h) : (h.f ^= ot, bn(h, null, o)) : Ut(h, () => {
      h = null;
    })));
  }
  function p(P) {
    J.pending.delete(P);
  }
  var A = Pn(() => {
    v = /** @type {V[]} */
    s(g);
    for (var P = v.length, G = /* @__PURE__ */ new Set(), se = (
      /** @type {Batch} */
      N
    ), K = Ki(), V = 0; V < P; V += 1) {
      var X = v[V], ee = r(X, V), b = _ ? null : f.get(ee);
      b ? (b.v && on(b.v, X), b.i && on(b.i, V), K && se.unskip_effect(b.e)) : (b = Bs(
        f,
        _ ? o : ci ?? (ci = mt()),
        X,
        ee,
        V,
        i,
        t,
        n
      ), _ || (b.e.f |= ot), f.set(ee, b)), G.add(ee);
    }
    if (P === 0 && a && !h && (_ ? h = Be(() => a(o)) : (h = Be(() => a(ci ?? (ci = mt()))), h.f |= ot)), P > G.size && za(), !_)
      if (d.set(se, G), K) {
        for (const [y, I] of f)
          G.has(y) || se.skip_effect(I.e);
        se.oncommit(w), se.ondiscard(p);
      } else
        w(se);
    s(g);
  }), J = { effect: A, items: f, pending: d, outrogroups: null, fallback: h };
  _ = !1;
}
function dn(e) {
  for (; e !== null && (e.f & Ye) === 0; )
    e = e.next;
  return e;
}
function Vs(e, t, n, r, i) {
  var b, y, I, re, m, x, te, oe, le;
  var a = (r & 8) !== 0, o = t.length, f = e.items, l = dn(e.effect.first), c, h = null, g, v = [], d = [], _, w, p, A;
  if (a)
    for (A = 0; A < o; A += 1)
      _ = t[A], w = i(_, A), p = /** @type {EachItem} */
      f.get(w).e, (p.f & ot) === 0 && ((y = (b = p.nodes) == null ? void 0 : b.a) == null || y.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(p));
  for (A = 0; A < o; A += 1) {
    if (_ = t[A], w = i(_, A), p = /** @type {EachItem} */
    f.get(w).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(p), fe.done.delete(p);
    if ((p.f & ke) !== 0 && (Qn(p), a && ((re = (I = p.nodes) == null ? void 0 : I.a) == null || re.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(p))), (p.f & ot) !== 0)
      if (p.f ^= ot, p === l)
        bn(p, null, n);
      else {
        var J = h ? h.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), At(e, h, p), At(e, p, J), bn(p, J, n), h = p, v = [], d = [], l = dn(h.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (v.length < d.length) {
          var P = d[0], G;
          h = P.prev;
          var se = v[0], K = v[v.length - 1];
          for (G = 0; G < v.length; G += 1)
            bn(v[G], P, n);
          for (G = 0; G < d.length; G += 1)
            c.delete(d[G]);
          At(e, se.prev, K.next), At(e, h, se), At(e, K, P), l = P, h = K, A -= 1, v = [], d = [];
        } else
          c.delete(p), bn(p, l, n), At(e, p.prev, p.next), At(e, p, h === null ? e.effect.first : h.next), At(e, h, p), h = p;
        continue;
      }
      for (v = [], d = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = dn(l.next);
      if (l === null)
        continue;
    }
    (p.f & ot) === 0 && v.push(p), h = p, l = dn(p.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (Mr(e, nr(fe.done)), (m = e.outrogroups) == null || m.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var V = [];
    if (c !== void 0)
      for (p of c)
        (p.f & ke) === 0 && V.push(p);
    for (; l !== null; )
      (l.f & ke) === 0 && l !== e.fallback && V.push(l), l = dn(l.next);
    var X = V.length;
    if (X > 0) {
      var ee = (r & 4) !== 0 && o === 0 ? n : null;
      if (a) {
        for (A = 0; A < X; A += 1)
          (te = (x = V[A].nodes) == null ? void 0 : x.a) == null || te.measure();
        for (A = 0; A < X; A += 1)
          (le = (oe = V[A].nodes) == null ? void 0 : oe.a) == null || le.fix();
      }
      zs(e, V, ee);
    }
  }
  a && pt(() => {
    var fe, C;
    if (g !== void 0)
      for (p of g)
        (C = (fe = p.nodes) == null ? void 0 : fe.a) == null || C.apply();
  });
}
function Bs(e, t, n, r, i, a, o, f) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ls(n, !1, !1) : Bt(n) : null, c = (o & 2) !== 0 ? Bt(i) : null;
  return {
    v: l,
    i: c,
    e: Be(() => (a(t, l ?? n, c ?? i, f), () => {
      e.delete(r);
    }))
  };
}
function bn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && (t.f & ot) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(r)
      );
      if (a.before(r), r === i)
        return;
      r = o;
    }
}
function At(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ca(e, t, n) {
  Ji(() => {
    var r = ir(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Br(() => {
        var o = n();
        ys(o), i && Ri(a, o) && (a = o, r.update(o));
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
function qs(e, t, n) {
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
function Gs(e, t) {
  return e == null ? null : String(e);
}
function xn(e, t, n, r, i, a) {
  var o = (
    /** @type {any} */
    e[pr]
  );
  if (o !== n || o === void 0) {
    var f = qs(n, r, a);
    f == null ? e.removeAttribute("class") : e.className = f, e[pr] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && e.classList.toggle(l, c);
    }
  return a;
}
function Ys(e, t, n, r) {
  var i = (
    /** @type {any} */
    e[gr]
  );
  if (i !== t) {
    var a = Gs(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e[gr] = t;
  }
  return r;
}
const Ks = Symbol("is custom element"), Ws = Symbol("is html"), Zs = Fa ? "progress" : "PROGRESS";
function Js(e, t) {
  var n = va(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Zs) || (e.value = t ?? "");
}
function be(e, t, n, r) {
  var i = va(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Da] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xs(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function va(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Vn] ?? (e[Vn] = {
      [Ks]: e.nodeName.includes("-"),
      [Ws]: e.namespaceURI === Ca
    })
  );
}
var di = /* @__PURE__ */ new Map();
function Xs(e) {
  var t = e.getAttribute("is") || e.nodeName, n = di.get(t);
  if (n) return n;
  di.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = ki(i);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    i = Lr(i);
  }
  return n;
}
function dr(e, t) {
  return e === t || (e == null ? void 0 : e[Jt]) === t;
}
function Qs(e = Dr(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Se.r
  ), a = (
    /** @type {Effect} */
    q
  );
  return Ji(() => {
    var o, f;
    return Br(() => {
      o = f, f = [], ir(() => {
        dr(n(...f), e) || (t(e, ...f), o && dr(n(...o), e) && t(null, ...o));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & Kn; )
        l = l.parent;
      const c = () => {
        f && dr(n(...f), e) && t(null, ...f);
      }, h = l.teardown;
      l.teardown = () => {
        c(), h == null || h();
      };
    };
  }), e;
}
function gt(e, t, n, r) {
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
const $s = "5";
var xi;
typeof window < "u" && ((xi = window.__svelte ?? (window.__svelte = {})).v ?? (xi.v = /* @__PURE__ */ new Set())).add($s);
let Un = "";
function eo(e) {
  Un = e;
}
async function Et(e, t) {
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
const da = (e) => Et("/accounts", e), to = () => Et("/rails"), no = (e) => Et(`/accounts/${encodeURIComponent(e)}`), ro = (e) => Et(`/accounts/${encodeURIComponent(e)}/similar`), io = (e, t, n) => Et(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: n }), ao = (e, t, n) => Et(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: n }), so = (e, t, n) => Et(`/accounts/${encodeURIComponent(e)}/images`, { site: t, page: n }), oo = (e, t) => Et("/videoinfo", { site: e, video_id: t }), lo = (e, t) => Et(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), fo = (e, t, n) => `${Un}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${n}`, hi = (e, t, n, r, i = !1) => `${Un}/photo?site=${encodeURIComponent(e)}&handle=${encodeURIComponent(t)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, _i = (e, t, n = 0) => `${Un}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${n}`;
var uo = /* @__PURE__ */ T('<img loading="lazy"/>'), co = /* @__PURE__ */ T('<span class="ofx-initials"> </span>');
function Wr(e, t) {
  xt(t, !0);
  let n = gt(t, "src", 3, null), r = gt(t, "alt", 3, ""), i = gt(t, "name", 3, ""), a = gt(t, "onmeasure", 3, null), o = /* @__PURE__ */ F(!1);
  const f = /* @__PURE__ */ qe(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((d) => {
    var _;
    return ((_ = d[0]) == null ? void 0 : _.toUpperCase()) ?? "";
  }).join(""));
  function l(d) {
    const _ = d.currentTarget;
    a() && _.naturalWidth && _.naturalHeight && a()(_.naturalWidth / _.naturalHeight);
  }
  var c = cn(), h = Ee(c);
  {
    var g = (d) => {
      var _ = uo();
      H(() => {
        be(_, "src", n()), be(_, "alt", r());
      }), kr("load", _, l), kr("error", _, () => E(o, !0)), k(d, _);
    }, v = (d) => {
      var _ = co(), w = Q(_, !0);
      H(() => Y(w, s(f))), k(d, _);
    };
    L(h, (d) => {
      n() && !s(o) ? d(g) : d(v, -1);
    });
  }
  k(e, c), wt();
}
var vo = /* @__PURE__ */ T('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ha(e, t) {
  xt(t, !0);
  var n = vo(), r = U(n), i = U(r);
  Wr(i, {
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
  var a = S(r, 2), o = Q(a, !0), f = S(a, 2), l = Q(f);
  H(() => {
    be(n, "href", `/x/onlyfans/${t.account.handle ?? ""}`), be(a, "title", t.account.display_name), Y(o, t.account.display_name), Y(l, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), de("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), k(e, n), wt();
}
Fn(["click"]);
var ho = /* @__PURE__ */ T('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), _o = /* @__PURE__ */ T('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), po = /* @__PURE__ */ T('<span class="ofx-note"> </span>'), go = /* @__PURE__ */ T('<div class="ofx-rail-actions"><!></div>'), mo = /* @__PURE__ */ T('<div class="ofx-rail-item"><!></div>'), bo = /* @__PURE__ */ T('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Nr(e, t) {
  xt(t, !0);
  let n = gt(t, "note", 3, ""), r = gt(t, "order", 3, null), i = gt(t, "fetcher", 3, null), a = gt(t, "size", 3, 20), o = /* @__PURE__ */ F(Qe([])), f = /* @__PURE__ */ F(!0), l = /* @__PURE__ */ F(0);
  function c() {
    E(l, s(l) + 1);
  }
  Ln(() => {
    const w = r(), p = i(), A = a();
    s(l);
    let J = !1;
    E(f, !0);
    const P = p ? p() : da({ order: w, limit: A, offset: 0 });
    return Promise.resolve(P).then((G) => {
      J || (E(o, Array.isArray(G) ? G : (G == null ? void 0 : G.items) ?? [], !0), E(f, !1));
    }), () => {
      J = !0;
    };
  });
  var h = { reload: c }, g = cn(), v = Ee(g);
  {
    var d = (w) => {
      var p = _o(), A = U(p), J = Q(A, !0), P = S(A, 2);
      Fe(P, 20, () => Array(8), Kr, (G, se) => {
        var K = ho();
        k(G, K);
      }), H(() => Y(J, t.title)), k(w, p);
    }, _ = (w) => {
      var p = bo(), A = U(p), J = U(A), P = Q(J, !0), G = S(J, 2);
      {
        var se = (ee) => {
          var b = po(), y = Q(b, !0);
          H(() => Y(y, n())), k(ee, b);
        };
        L(G, (ee) => {
          n() && ee(se);
        });
      }
      var K = S(G, 2);
      {
        var V = (ee) => {
          var b = go(), y = U(b);
          js(y, () => t.actions), k(ee, b);
        };
        L(K, (ee) => {
          t.actions && ee(V);
        });
      }
      var X = S(A, 2);
      Fe(X, 21, () => s(o), (ee) => ee.handle, (ee, b) => {
        var y = mo(), I = U(y);
        ha(I, {
          get account() {
            return s(b);
          },
          get navigate() {
            return t.navigate;
          }
        }), k(ee, y);
      }), H(() => Y(P, t.title)), k(w, p);
    };
    L(v, (w) => {
      s(f) ? w(d) : s(o).length && w(_, 1);
    });
  }
  return k(e, g), wt(h);
}
var xo = /* @__PURE__ */ T(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), wo = /* @__PURE__ */ T('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), yo = /* @__PURE__ */ T('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Eo = /* @__PURE__ */ T('<div class="ofx-sentinel"></div>'), ko = /* @__PURE__ */ T('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), So = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Ao = /* @__PURE__ */ T("<!> <!>", 1), To = /* @__PURE__ */ T('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Co(e, t) {
  xt(t, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ F(Qe([])), a = /* @__PURE__ */ F(0), o = /* @__PURE__ */ F(!1), f = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(""), c = /* @__PURE__ */ F(!1), h = /* @__PURE__ */ F(""), g, v = /* @__PURE__ */ F(null), d = /* @__PURE__ */ F(Qe([]));
  Ln(() => {
    to().then((C) => {
      E(d, Array.isArray(C) ? C : [], !0);
    });
  });
  const _ = /* @__PURE__ */ qe(() => s(l).trim()), w = /* @__PURE__ */ qe(() => s(_) !== "" || s(c)), p = /* @__PURE__ */ qe(() => s(i).length < s(a));
  async function A(C, W) {
    E(o, !0);
    const j = await da({ search: C, limit: n, offset: W });
    if (C !== s(l).trim()) {
      E(o, !1);
      return;
    }
    j ? (E(i, W === 0 ? j.items : [...s(i), ...j.items], !0), E(a, j.total, !0), E(h, C, !0), E(f, !1)) : E(f, !0), E(o, !1);
  }
  function J(C) {
    E(l, C.currentTarget.value, !0), clearTimeout(g), g = setTimeout(() => A(s(l).trim(), 0), 250);
  }
  function P() {
    E(c, !0), A("", 0);
  }
  function G() {
    E(c, !1), E(l, ""), E(i, [], !0), E(a, 0), E(h, "");
  }
  function se(C) {
    const W = new IntersectionObserver(
      (j) => {
        var ae;
        (ae = j[0]) != null && ae.isIntersecting && s(p) && !s(o) && A(s(h), s(i).length);
      },
      { rootMargin: "600px" }
    );
    return W.observe(C), { destroy: () => W.disconnect() };
  }
  var K = To(), V = S(Ee(K), 2), X = U(V);
  {
    var ee = (C) => {
      var W = Hn();
      H(
        (j, ae) => Y(W, `${j ?? ""} of ${ae ?? ""}
        ${s(h) ? `matching “${s(h)}”` : "accounts"}`),
        [
          () => s(i).length.toLocaleString(),
          () => s(a).toLocaleString()
        ]
      ), k(C, W);
    }, b = (C) => {
      var W = Hn("loading…");
      k(C, W);
    }, y = (C) => {
      var W = Hn("nothing found");
      k(C, W);
    }, I = (C) => {
      var W = Hn("performers, gathered from the archive sites");
      k(C, W);
    };
    L(X, (C) => {
      s(w) && s(a) ? C(ee) : s(w) && s(o) ? C(b, 1) : s(w) ? C(y, 2) : C(I, -1);
    });
  }
  var re = S(V, 2), m = S(U(re), 2), x = S(re, 2);
  {
    var te = (C) => {
      var W = xo();
      k(C, W);
    };
    L(x, (C) => {
      s(f) && C(te);
    });
  }
  var oe = S(x, 2);
  {
    var le = (C) => {
      var W = ko(), j = Ee(W);
      {
        var ae = (Z) => {
          var ce = wo(), Me = Q(ce);
          de("click", Me, G), k(Z, ce);
        };
        L(j, (Z) => {
          s(c) && !s(_) && Z(ae);
        });
      }
      var ue = S(j, 2), xe = U(ue);
      Fe(xe, 17, () => s(i), (Z) => Z.handle, (Z, ce) => {
        ha(Z, {
          get account() {
            return s(ce);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ie = S(xe, 2);
      {
        var tt = (Z) => {
          var ce = cn(), Me = Ee(ce);
          Fe(Me, 16, () => Array(12), Kr, (jn, Zr) => {
            var ar = yo();
            k(jn, ar);
          }), k(Z, ce);
        };
        L(Ie, (Z) => {
          s(o) && Z(tt);
        });
      }
      var ct = S(ue, 2);
      {
        var kt = (Z) => {
          var ce = Eo();
          ca(ce, (Me) => se == null ? void 0 : se(Me)), k(Z, ce);
        };
        L(ct, (Z) => {
          s(p) && Z(kt);
        });
      }
      k(C, W);
    }, fe = (C) => {
      var W = Ao(), j = Ee(W);
      Fe(j, 17, () => s(d).filter((ue) => ue.order !== "random"), (ue) => ue.order, (ue, xe) => {
        Nr(ue, {
          get title() {
            return s(xe).title;
          },
          get note() {
            return s(xe).note;
          },
          get order() {
            return s(xe).order;
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var ae = S(j, 2);
      {
        const ue = (Ie) => {
          var tt = So(), ct = Ee(tt), kt = S(ct, 2);
          de("click", ct, () => {
            var Z;
            return (Z = s(v)) == null ? void 0 : Z.reload();
          }), de("click", kt, P), k(Ie, tt);
        };
        let xe = /* @__PURE__ */ qe(() => {
          var Ie;
          return ((Ie = s(d).find((tt) => tt.order === "random")) == null ? void 0 : Ie.title) ?? "Something else";
        });
        Qs(
          Nr(ae, {
            get title() {
              return s(xe);
            },
            order: "random",
            size: r,
            get navigate() {
              return t.navigate;
            },
            actions: ue,
            $$slots: { actions: !0 }
          }),
          (Ie) => E(v, Ie, !0),
          () => s(v)
        );
      }
      k(C, W);
    };
    L(oe, (C) => {
      s(w) ? C(le) : C(fe, -1);
    });
  }
  H(() => Js(m, s(l))), de("input", m, J), k(e, K), wt();
}
Fn(["input", "click"]);
var Ro = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), pi = /* @__PURE__ */ T('<p class="ofx-note"> </p>'), Io = /* @__PURE__ */ T('<span class="ofx-badge"> </span>'), Mo = /* @__PURE__ */ T('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), No = /* @__PURE__ */ T('<p class="ofx-caption-title"> </p>'), Oo = /* @__PURE__ */ T('<p class="ofx-caption-text"> </p>'), Lo = /* @__PURE__ */ T('<p class="ofx-caption-when"> </p>'), Po = /* @__PURE__ */ T('<div class="ofx-caption"><!> <!> <!></div>'), Do = /* @__PURE__ */ T('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Fo = /* @__PURE__ */ T('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Uo = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button"> </button>'), jo = /* @__PURE__ */ T('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function Ho(e, t) {
  xt(t, !0);
  let n = /* @__PURE__ */ F(Qe([])), r = /* @__PURE__ */ F(0), i = /* @__PURE__ */ F(!1), a = /* @__PURE__ */ F(!1), o = /* @__PURE__ */ F(!1);
  async function f() {
    if (s(i) || s(a)) return;
    E(i, !0);
    const b = s(r) + 1, [y, I, re] = await Promise.all([
      io(t.handle, t.site, b),
      ao(t.handle, t.site, b),
      so(t.handle, t.site, b)
    ]);
    if (y === null && I === null && re === null)
      E(o, !0);
    else {
      const m = [
        ...(y ?? []).map((x) => ({
          kind: "video",
          key: `v:${x.video_id}`,
          title: x.title,
          thumbnail: x.thumbnail,
          badge: v(x.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: x.posted_at,
          text: x.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: x.has_text,
          item: x
        })),
        ...(I ?? []).map((x) => ({
          kind: "image",
          key: `g:${x.gallery_id}`,
          title: x.title,
          thumbnail: x.cover,
          badge: x.image_count ? `${x.image_count}` : null,
          aspect: 0.75,
          posted: x.posted,
          item: x
        })),
        ...(re ?? []).map((x) => ({
          kind: "image",
          key: `p:${x.image_id ?? `${b}:${x.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: hi(t.site, t.handle, b, x.index, !0),
          full: hi(t.site, t.handle, b, x.index),
          badge: null,
          aspect: 0.75,
          posted: x.posted_at,
          item: x
        }))
      ];
      E(n, [...s(n), ...m], !0), E(r, b), m.length === 0 && E(a, !0);
    }
    E(i, !1);
  }
  const l = /* @__PURE__ */ qe(() => s(n).filter((b) => t.kinds.has(b.kind)));
  Ln(() => {
    t.handle, t.site, ir(() => {
      E(n, [], !0), E(r, 0), E(a, !1), E(o, !1), E(i, !1), f();
    });
  });
  function c(b, y) {
    !y || !Number.isFinite(y) || E(n, s(n).map((I) => I.key === b ? { ...I, aspect: y } : I), !0);
  }
  function h(b, y) {
    if (!y.hasText || y.text) return;
    const I = new IntersectionObserver((re) => {
      re.some((m) => m.isIntersecting) && (I.disconnect(), oo(t.site, y.item.video_id).then((m) => {
        m && E(
          n,
          s(n).map((x) => x.key === y.key ? {
            ...x,
            text: m.description,
            posted: x.posted ?? m.posted_at
          } : x),
          !0
        );
      }));
    });
    return I.observe(b), { destroy: () => I.disconnect() };
  }
  function g(b) {
    b.kind === "video" ? t.onplay(b.item) : b.full ? t.onphoto(b) : t.ongallery(b.item);
  }
  function v(b) {
    return b ? `${Math.floor(b / 60)}:${String(b % 60).padStart(2, "0")}` : null;
  }
  var d = jo(), _ = U(d), w = Q(_, !0), p = S(_, 2);
  {
    var A = (b) => {
      var y = Ro(), I = Q(y);
      H(() => Y(I, `${t.site ?? ""} did not answer.`)), k(b, y);
    }, J = (b) => {
      var y = pi(), I = Q(y);
      H(() => Y(I, `Nothing here on ${t.site ?? ""}.`)), k(b, y);
    }, P = (b) => {
      var y = pi(), I = Q(y);
      H((re) => Y(I, `${t.site ?? ""} has no ${re ?? ""} for this performer.`), [() => [...t.kinds].join(" or ")]), k(b, y);
    };
    L(p, (b) => {
      s(o) ? b(A) : !s(i) && s(n).length === 0 ? b(J, 1) : !s(i) && s(l).length === 0 && b(P, 2);
    });
  }
  var G = S(p, 2), se = U(G);
  Fe(se, 17, () => s(l), (b) => b.key, (b, y) => {
    var I = Do(), re = U(I), m = U(re), x = U(m);
    Wr(x, {
      get src() {
        return s(y).thumbnail;
      },
      get alt() {
        return s(y).title;
      },
      get name() {
        return s(y).title;
      },
      onmeasure: (j) => c(s(y).key, j)
    });
    var te = S(x, 2);
    {
      var oe = (j) => {
        var ae = Io(), ue = Q(ae, !0);
        H(() => Y(ue, s(y).badge)), k(j, ae);
      };
      L(te, (j) => {
        s(y).badge && j(oe);
      });
    }
    var le = S(te, 2);
    {
      var fe = (j) => {
        var ae = Mo();
        k(j, ae);
      };
      L(le, (j) => {
        s(y).kind === "video" && j(fe);
      });
    }
    var C = S(re, 2);
    {
      var W = (j) => {
        var ae = Po(), ue = U(ae);
        {
          var xe = (Z) => {
            var ce = No(), Me = Q(ce, !0);
            H(() => Y(Me, s(y).title)), k(Z, ce);
          };
          L(ue, (Z) => {
            s(y).title && Z(xe);
          });
        }
        var Ie = S(ue, 2);
        {
          var tt = (Z) => {
            var ce = Oo(), Me = Q(ce, !0);
            H(() => Y(Me, s(y).text)), k(Z, ce);
          };
          L(Ie, (Z) => {
            s(y).text && Z(tt);
          });
        }
        var ct = S(Ie, 2);
        {
          var kt = (Z) => {
            var ce = Lo(), Me = Q(ce, !0);
            H(() => Y(Me, s(y).posted)), k(Z, ce);
          };
          L(ct, (Z) => {
            s(y).posted && Z(kt);
          });
        }
        k(j, ae);
      };
      L(C, (j) => {
        (s(y).title || s(y).text || s(y).posted) && j(W);
      });
    }
    ca(I, (j, ae) => h == null ? void 0 : h(j, ae), () => s(y)), H(() => Ys(I, `--ofx-ar: ${s(y).aspect ?? ""}; flex-grow: ${s(y).aspect ?? ""}; flex-basis: ${s(y).aspect * 220}px`)), de("click", re, () => g(s(y))), k(b, I);
  });
  var K = S(se, 2);
  {
    var V = (b) => {
      var y = cn(), I = Ee(y);
      Fe(I, 16, () => Array(4), Kr, (re, m) => {
        var x = Fo();
        k(re, x);
      }), k(b, y);
    };
    L(K, (b) => {
      s(i) && b(V);
    });
  }
  var X = S(G, 2);
  {
    var ee = (b) => {
      var y = Uo(), I = Q(y, !0);
      H(() => {
        y.disabled = s(i), Y(I, s(i) ? "Loading…" : "Load more");
      }), de("click", y, f), k(b, y);
    };
    L(X, (b) => {
      !s(a) && !s(o) && s(n).length > 0 && b(ee);
    });
  }
  H(() => Y(w, t.site)), k(e, d), wt();
}
Fn(["click"]);
async function zo() {
  try {
    const e = await fetch("/api/v1/vpn/status");
    return e.ok ? await e.json() : null;
  } catch {
    return null;
  }
}
async function Vo(e, t) {
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
async function Bo(e) {
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
var qo = /* @__PURE__ */ T('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), Go = /* @__PURE__ */ T('<span class="tbx-dim">offline</span>'), Yo = /* @__PURE__ */ T('<li><button type="button" role="option"> <!></button></li>'), Ko = /* @__PURE__ */ T('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), Wo = /* @__PURE__ */ T('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), Zo = /* @__PURE__ */ T('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), Jo = /* @__PURE__ */ T('<p class="tbx-vpn-note"> </p>'), Xo = /* @__PURE__ */ T('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function Qo(e, t) {
  xt(t, !0);
  let n = /* @__PURE__ */ F(null), r = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(!1), a = /* @__PURE__ */ F(null);
  async function o() {
    E(n, await zo(), !0);
  }
  Ln(() => {
    o();
  });
  async function f(v) {
    var _;
    const d = v === "scraping" ? !s(n).route_scraping : !s(n).route_streaming;
    E(r, v, !0), E(a, null), await Vo(v, d) && (await o(), await ((_ = t.onchange) == null ? void 0 : _.call(t))), E(r, null);
  }
  async function l(v) {
    var _;
    E(r, "exit"), E(i, !1);
    const d = await Bo(v);
    d && (E(n, d, !0), E(a, d.detail ?? null, !0), await ((_ = t.onchange) == null ? void 0 : _.call(t))), E(r, null);
  }
  var c = cn(), h = Ee(c);
  {
    var g = (v) => {
      var d = Xo(), _ = Ee(d), w = S(U(_), 2);
      Fe(
        w,
        17,
        () => [
          ["scraping", "Scraping", s(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            s(n).route_streaming
          ]
        ],
        ([K, V, X]) => K,
        (K, V) => {
          var X = /* @__PURE__ */ qe(() => hr(s(V), 3));
          let ee = () => s(X)[0], b = () => s(X)[1], y = () => s(X)[2];
          var I = qo();
          let re;
          var m = S(U(I), 2), x = Q(m, !0);
          H(() => {
            re = xn(I, 1, "tbx-toggle", null, re, { "tbx-toggle-on": y() }), be(I, "aria-checked", y()), I.disabled = s(r) !== null, Y(x, b());
          }), de("click", I, () => f(ee())), k(K, I);
        }
      );
      var p = S(w, 2);
      {
        var A = (K) => {
          var V = Wo(), X = U(V), ee = U(X), b = S(X, 2);
          {
            var y = (I) => {
              var re = Ko(), m = U(re), x = Q(m), te = S(m, 2);
              Fe(te, 17, () => s(n).exit_nodes, (oe) => oe.id, (oe, le) => {
                var fe = Yo(), C = U(fe), W = U(C), j = S(W);
                {
                  var ae = (ue) => {
                    var xe = Go();
                    k(ue, xe);
                  };
                  L(j, (ue) => {
                    s(le).online || ue(ae);
                  });
                }
                H(() => {
                  be(C, "aria-selected", s(le).active), C.disabled = !s(le).online, Y(W, `${s(le).name ?? ""}${s(le).country ? ` · ${s(le).country}` : ""} `);
                }), de("click", C, () => l(s(le).id)), k(oe, fe);
              }), H(() => be(x, "aria-selected", !s(n).exit_node)), de("click", x, () => l(null)), k(I, re);
            };
            L(b, (I) => {
              s(i) && I(y);
            });
          }
          H(() => {
            be(X, "aria-expanded", s(i)), X.disabled = s(r) !== null, Y(ee, `${s(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), de("click", X, () => E(i, !s(i))), k(K, V);
        };
        L(p, (K) => {
          var V;
          (V = s(n).exit_nodes) != null && V.length && K(A);
        });
      }
      var J = S(p, 2);
      {
        var P = (K) => {
          var V = Zo();
          k(K, V);
        };
        L(J, (K) => {
          !s(n).connected && (s(n).route_scraping || s(n).route_streaming) && K(P);
        });
      }
      var G = S(_, 2);
      {
        var se = (K) => {
          var V = Jo(), X = Q(V, !0);
          H(() => Y(X, s(a))), k(K, V);
        };
        L(G, (K) => {
          s(a) && K(se);
        });
      }
      k(v, d);
    };
    L(h, (v) => {
      var d;
      (d = s(n)) != null && d.enabled && v(g);
    });
  }
  k(e, c), wt();
}
Fn(["click"]);
var $o = /* @__PURE__ */ T('<p class="ofx-error">That account could not be loaded.</p>'), el = /* @__PURE__ */ T('<div class="ofx-banner"><img alt=""/></div>'), tl = /* @__PURE__ */ As('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), nl = /* @__PURE__ */ T('<p> </p> <button class="ofx-more" type="button"> </button>', 1), rl = /* @__PURE__ */ T("<span><b> </b> </span>"), il = /* @__PURE__ */ T('<div class="ofx-stats"></div>'), al = /* @__PURE__ */ T("<span> </span>"), gi = /* @__PURE__ */ T('<a target="_blank" rel="noreferrer noopener"> </a>'), sl = /* @__PURE__ */ T('<button type="button" role="tab"> </button>'), ol = /* @__PURE__ */ T('<span class="ofx-count"> </span>'), ll = /* @__PURE__ */ T('<button type="button"> <!></button>'), fl = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), ul = /* @__PURE__ */ T(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), cl = /* @__PURE__ */ T('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), vl = /* @__PURE__ */ T('<p class="ofx-note">Loading…</p>'), dl = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), hl = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), _l = /* @__PURE__ */ T('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), pl = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), gl = /* @__PURE__ */ T("<!> <!> <!> <!>", 1);
function ml(e, t) {
  xt(t, !0);
  let n = /* @__PURE__ */ F(null), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F("all");
  const a = /* @__PURE__ */ qe(() => s(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([s(i)]));
  let o = /* @__PURE__ */ F(Qe(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(null), h = /* @__PURE__ */ F(null), g = /* @__PURE__ */ F(null);
  Ln(() => {
    no(t.handle).then((m) => {
      m ? E(n, m, !0) : E(r, !0);
    });
  });
  const v = /* @__PURE__ */ qe(() => {
    var m, x, te, oe;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = s(n)) == null ? void 0 : m.posts_count],
      ["photos", (x = s(n)) == null ? void 0 : x.photos_count],
      ["videos", (te = s(n)) == null ? void 0 : te.videos_count],
      ["likes", (oe = s(n)) == null ? void 0 : oe.likes_count]
    ].filter(([, le]) => le != null);
  });
  function d(m) {
    const x = new Set(s(o));
    x.has(m) ? x.delete(m) : x.add(m), E(o, x, !0);
  }
  function _(m) {
    var x, te;
    if (!((x = t.host) != null && x.play)) {
      E(l, m, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: _i(m.site, m.video_id),
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
      contextTitle: ((te = s(n)) == null ? void 0 : te.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  function w(m) {
    E(g, null), E(h, m, !0);
  }
  async function p(m) {
    E(g, null);
    const x = await lo(m.site, m.gallery_id);
    if (!x) {
      E(g, "Could not open that gallery");
      return;
    }
    if (x.length === 0) {
      E(g, "That site served no images for this gallery");
      return;
    }
    E(c, { gallery: m, count: x.length, index: 0 }, !0);
  }
  function A(m) {
    s(c) && E(
      c,
      {
        ...s(c),
        index: (s(c).index + m + s(c).count) % s(c).count
      },
      !0
    );
  }
  function J(m) {
    if (m.key === "Escape") {
      E(l, null), E(c, null), E(h, null);
      return;
    }
    s(c) && (m.key === "ArrowRight" && A(1), m.key === "ArrowLeft" && A(-1));
  }
  var P = gl();
  kr("keydown", wr, J);
  var G = Ee(P);
  {
    var se = (m) => {
      var x = $o();
      k(m, x);
    }, K = (m) => {
      var x = cl(), te = Ee(x), oe = U(te);
      {
        var le = (R) => {
          var D = el(), ne = Q(D);
          H(() => be(ne, "src", s(n).header_url)), k(R, D);
        };
        L(oe, (R) => {
          s(n).header_url && R(le);
        });
      }
      var fe = S(oe, 2), C = U(fe);
      let W;
      var j = U(C);
      Wr(j, {
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
      var ae = S(C, 2), ue = U(ae), xe = U(ue), Ie = S(xe);
      {
        var tt = (R) => {
          var D = tl();
          k(R, D);
        };
        L(Ie, (R) => {
          s(n).is_verified && R(tt);
        });
      }
      var ct = S(ue, 2), kt = U(ct), Z = S(kt, 2), ce = S(ct, 2);
      {
        var Me = (R) => {
          var D = nl(), ne = Ee(D);
          let Ae;
          var vt = Q(ne, !0), je = S(ne, 2), St = Q(je, !0);
          H(() => {
            Ae = xn(ne, 1, "ofx-bio", null, Ae, { "ofx-clamped": !s(f) }), Y(vt, s(n).bio), Y(St, s(f) ? "less" : "more");
          }), de("click", je, () => E(f, !s(f))), k(R, D);
        };
        L(ce, (R) => {
          s(n).bio && R(Me);
        });
      }
      var jn = S(ce, 2);
      {
        var Zr = (R) => {
          var D = il();
          Fe(D, 21, () => s(v), ([ne, Ae]) => ne, (ne, Ae) => {
            var vt = /* @__PURE__ */ qe(() => hr(s(Ae), 2));
            let je = () => s(vt)[0], St = () => s(vt)[1];
            var nt = rl(), vn = U(nt), sr = Q(vn, !0), ka = S(vn);
            H(
              (Sa) => {
                Y(sr, Sa), Y(ka, ` ${je() ?? ""}`);
              },
              [() => St().toLocaleString()]
            ), k(ne, nt);
          }), k(R, D);
        };
        L(jn, (R) => {
          s(v).length && R(Zr);
        });
      }
      var ar = S(jn, 2), Jr = U(ar);
      {
        var _a = (R) => {
          var D = al(), ne = Q(D, !0);
          H(() => Y(ne, s(n).location)), k(R, D);
        };
        L(Jr, (R) => {
          s(n).location && R(_a);
        });
      }
      var Xr = S(Jr, 2);
      {
        var pa = (R) => {
          var D = gi(), ne = Q(D, !0);
          H(
            (Ae) => {
              be(D, "href", s(n).website), Y(ne, Ae);
            },
            [() => s(n).website.replace(/^https?:\/\//, "")]
          ), k(R, D);
        };
        L(Xr, (R) => {
          s(n).website && R(pa);
        });
      }
      var ga = S(Xr, 2);
      {
        var ma = (R) => {
          var D = gi(), ne = Q(D);
          H(() => {
            be(D, "href", s(n).of_url), Y(ne, `onlyfans.com/${s(n).of_username ?? ""}`);
          }), k(R, D);
        };
        L(ga, (R) => {
          s(n).of_url && R(ma);
        });
      }
      var ba = S(fe, 2);
      Fe(ba, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([R, D]) => R, (R, D) => {
        var ne = /* @__PURE__ */ qe(() => hr(D, 2));
        let Ae = () => s(ne)[0], vt = () => s(ne)[1];
        var je = sl();
        let St;
        var nt = Q(je, !0);
        H(() => {
          St = xn(je, 1, "ofx-tab", null, St, { "ofx-on": s(i) === Ae() }), be(je, "aria-selected", s(i) === Ae()), Y(nt, vt());
        }), de("click", je, () => E(i, Ae(), !0)), k(R, je);
      });
      var Qr = S(te, 2);
      Qo(Qr, {});
      var $r = S(Qr, 2), ei = S(U($r), 2);
      Fe(ei, 17, () => s(n).sources, (R) => R.site, (R, D) => {
        var ne = ll();
        let Ae;
        var vt = U(ne), je = S(vt);
        {
          var St = (nt) => {
            var vn = ol(), sr = Q(vn, !0);
            H(() => Y(sr, (s(D).video_count ?? 0) + (s(D).image_count ?? 0))), k(nt, vn);
          };
          L(je, (nt) => {
            (s(D).video_count != null || s(D).image_count != null) && nt(St);
          });
        }
        H(
          (nt) => {
            Ae = xn(ne, 1, "ofx-btn ofx-outline", null, Ae, { "ofx-on": nt }), Y(vt, `${s(D).site ?? ""} `);
          },
          [() => s(o).has(s(D).site)]
        ), de("click", ne, () => d(s(D).site)), k(R, ne);
      });
      var xa = S(ei, 2), ti = S($r, 2);
      {
        var wa = (R) => {
          var D = fl(), ne = Q(D, !0);
          H(() => Y(ne, s(g))), k(R, D);
        };
        L(ti, (R) => {
          s(g) && R(wa);
        });
      }
      var ni = S(ti, 2);
      {
        var ya = (R) => {
          var D = ul();
          k(R, D);
        };
        L(ni, (R) => {
          s(o).size === 0 && R(ya);
        });
      }
      var ri = S(ni, 2);
      Fe(ri, 17, () => s(n).sources.filter((R) => s(o).has(R.site)), (R) => R.site, (R, D) => {
        Ho(R, {
          get handle() {
            return s(n).handle;
          },
          get site() {
            return s(D).site;
          },
          get kinds() {
            return s(a);
          },
          onplay: (ne) => _(ne),
          ongallery: p,
          onphoto: w
        });
      });
      var Ea = S(ri, 2);
      ua(Ea, () => s(n).handle, (R) => {
        Nr(R, {
          get title() {
            return `More like ${s(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => ro(s(n).handle),
          get navigate() {
            return t.navigate;
          }
        });
      }), H(() => {
        W = xn(C, 1, "ofx-avatar", null, W, { "ofx-overlap": !!s(n).header_url }), Y(xe, `${s(n).display_name ?? ""} `), Y(kt, `@${(s(n).of_username || s(n).handle) ?? ""} `), Y(Z, ` ${s(n).source_count ?? ""}
                    ${s(n).source_count === 1 ? "site" : "sites"}`);
      }), de("click", xa, () => t.navigate("/x/onlyfans")), k(m, x);
    }, V = (m) => {
      var x = vl();
      k(m, x);
    };
    L(G, (m) => {
      s(r) ? m(se) : s(n) ? m(K, 1) : m(V, -1);
    });
  }
  var X = S(G, 2);
  {
    var ee = (m) => {
      var x = dl(), te = U(x), oe = S(te, 2);
      H(() => be(oe, "src", s(h).full)), de("click", te, () => E(h, null)), k(m, x);
    };
    L(X, (m) => {
      s(h) && m(ee);
    });
  }
  var b = S(X, 2);
  {
    var y = (m) => {
      var x = hl(), te = U(x), oe = S(te, 2);
      H((le) => be(oe, "src", le), [
        () => _i(s(l).site, s(l).video_id)
      ]), de("click", te, () => E(l, null)), k(m, x);
    };
    L(b, (m) => {
      s(l) && m(y);
    });
  }
  var I = S(b, 2);
  {
    var re = (m) => {
      var x = pl(), te = U(x), oe = S(te, 2);
      {
        var le = (C) => {
          var W = _l(), j = Ee(W), ae = S(j, 2);
          de("click", j, () => A(-1)), de("click", ae, () => A(1)), k(C, W);
        };
        L(oe, (C) => {
          s(c).count > 1 && C(le);
        });
      }
      var fe = S(oe, 2);
      H(
        (C) => {
          be(fe, "src", C), be(fe, "alt", `${s(c).gallery.title ?? ""} ${s(c).index + 1} of ${s(c).count ?? ""}`);
        },
        [
          () => fo(s(c).gallery.site, s(c).gallery.gallery_id, s(c).index)
        ]
      ), de("click", te, () => E(c, null)), k(m, x);
    };
    L(I, (m) => {
      s(c) && m(re);
    });
  }
  k(e, P), wt();
}
Fn(["click"]);
var bl = /* @__PURE__ */ T('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function xl(e, t) {
  xt(t, !0);
  let n = gt(t, "path", 3, "");
  eo(t.api);
  const r = /* @__PURE__ */ qe(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = bl(), a = U(i), o = U(a);
  {
    var f = (c) => {
      var h = cn(), g = Ee(h);
      ua(g, () => s(r), (v) => {
        ml(v, {
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
      }), k(c, h);
    }, l = (c) => {
      Co(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    L(o, (c) => {
      s(r) ? c(f) : c(l, -1);
    });
  }
  k(e, i), wt();
}
function El({ target: e, path: t, api: n, navigate: r, host: i }) {
  const a = Qe({ path: t ?? "", api: n, navigate: r, host: i }), o = Ds(xl, { target: e, props: a });
  return {
    update(f) {
      a.path = f ?? "";
    },
    destroy() {
      Us(o);
    }
  };
}
export {
  El as default
};

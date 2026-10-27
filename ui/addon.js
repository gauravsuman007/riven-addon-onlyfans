var qa = Object.defineProperty;
var mi = (t) => {
  throw TypeError(t);
};
var Ga = (t, e, n) => e in t ? qa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Yt = (t, e, n) => Ga(t, typeof e != "symbol" ? e + "" : e, n), Rr = (t, e, n) => e.has(t) || mi("Cannot " + n);
var u = (t, e, n) => (Rr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), J = (t, e, n) => e.has(t) ? mi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), W = (t, e, n, r) => (Rr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), at = (t, e, n) => (Rr(t, e, "access private method"), n);
const At = Symbol("uninitialized"), Ya = "http://www.w3.org/1999/xhtml", Ui = !1;
var ji = Array.isArray, Ka = Array.prototype.indexOf, cr = Array.prototype.includes, yr = Array.from, Hi = Object.defineProperty, Fn = Object.getOwnPropertyDescriptor, Bi = Object.getOwnPropertyDescriptors, Wa = Object.prototype, Za = Array.prototype, ni = Object.getPrototypeOf, wi = Object.isExtensible;
const Ja = () => {
};
function Xa(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function zi() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a;
  });
  return { promise: n, resolve: t, reject: e };
}
function Un(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Rt = 2, yn = 4, kr = 8, Vi = 1 << 24, de = 16, re = 32, Oe = 64, Fr = 128, ri = 256, ne = 512, Tt = 1024, Et = 2048, _e = 4096, jt = 8192, Xt = 16384, An = 32768, vr = 1 << 25, nn = 65536, dr = 1 << 17, Qa = 1 << 18, Tn = 1 << 19, $a = 1 << 20, me = 1 << 25, rn = 65536, hr = 1 << 21, dn = 1 << 22, He = 1 << 23, hn = Symbol("$state"), qi = Symbol("component"), ts = Symbol(""), or = Symbol("attributes"), Ur = Symbol("class"), jr = Symbol("style"), Mn = Symbol("text"), Wn = new class extends Error {
  constructor() {
    super(...arguments);
    Yt(this, "name", "StaleReactionError");
    Yt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Pi;
const es = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Pi = globalThis.document) != null && Pi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function ns() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function rs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Gi(t) {
  return t === this.v;
}
function Yi(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ki(t) {
  return !Yi(t, this.v);
}
function is() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function as(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ss(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ls(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ds() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let hs = !1, Ht = null;
function kn(t) {
  Ht = t;
}
function ae(t, e = !1, n) {
  Ht = {
    p: Ht,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      st
    ),
    l: null
  };
}
function se(t) {
  var e = (
    /** @type {ComponentContext} */
    Ht
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      va(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ht = e.p, ii(t);
}
function ii(t = {}) {
  return Hi(t, qi, { value: !0 }), t;
}
function Wi() {
  return !0;
}
let cn = [];
function _s() {
  var t = cn;
  cn = [], Xa(t);
}
function Ie(t) {
  if (cn.length === 0) {
    var e = cn;
    queueMicrotask(() => {
      e === cn && _s();
    });
  }
  cn.push(t);
}
const ps = -7169;
function wt(t, e) {
  t.f = t.f & ps | e;
}
function ai(t) {
  (t.f & ne) !== 0 || t.deps === null ? wt(t, Tt) : wt(t, _e);
}
function Zi(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Rt) === 0 || (e.f & rn) === 0 || (e.f ^= rn, Zi(
        /** @type {Derived} */
        e.deps
      ));
}
function Ji(t, e, n) {
  (t.f & Et) !== 0 ? e.add(t) : (t.f & _e) !== 0 && n.add(t), Zi(t.deps), wt(t, Tt);
}
function Zn(t) {
  var e = nt, n = st;
  ie(null), ke(null);
  try {
    return t();
  } finally {
    ie(e), ke(n);
  }
}
function gs(t, e, n, r) {
  const a = si;
  var s = t.filter((_) => !_.settled), o = e.map(a);
  if (n.length === 0 && s.length === 0) {
    r(o);
    return;
  }
  var l = (
    /** @type {Effect} */
    st
  ), f = bs(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function d(_) {
    if ((l.f & Xt) === 0) {
      f();
      try {
        r([...o, ..._]);
      } catch (m) {
        xe(m, l);
      }
      _r();
    }
  }
  var S = Xi();
  if (n.length === 0) {
    c.then(() => d([])).finally(S);
    return;
  }
  function h() {
    Promise.all(n.map((_) => /* @__PURE__ */ xs(_))).then(d).catch((_) => xe(_, l)).finally(S);
  }
  c ? c.then(() => {
    f(), h(), _r();
  }) : h();
}
function bs() {
  var t = (
    /** @type {Effect} */
    st
  ), e = nt, n = Ht, r = (
    /** @type {Batch} */
    Z
  );
  return function(s = !0) {
    ke(t), ie(e), kn(n), s && (t.f & Xt) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function _r(t = !0) {
  ke(null), ie(null), kn(null), t && (Z == null || Z.deactivate());
}
function Xi() {
  var t = (
    /** @type {Effect} */
    st
  ), e = t.b, n = (
    /** @type {Batch} */
    Z
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function si(t) {
  var e = Rt | Et;
  return st !== null && (st.f |= Tn), {
    ctx: Ht,
    deps: null,
    effects: null,
    equals: Gi,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      At
    ),
    wv: 0,
    parent: st,
    ac: null
  };
}
const On = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function xs(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    st
  );
  r === null && is();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = sn(
    /** @type {V} */
    At
  ), o = !nt, l = /* @__PURE__ */ new Set();
  return Ps(() => {
    var _, m;
    var f = (
      /** @type {Effect} */
      st
    ), c = zi();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (C) => {
        C !== Wn && c.reject(C);
      }).finally(_r);
    } catch (C) {
      c.reject(C), _r();
    }
    var d = (
      /** @type {Batch} */
      Z
    );
    if (o) {
      if ((f.f & An) !== 0)
        var S = Xi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (_ = r.b) != null && _.is_rendered()
      )
        (m = d.async_deriveds.get(f)) == null || m.reject(On);
      else
        for (const C of l.values())
          C.reject(On);
      l.add(c), d.async_deriveds.set(f, c);
    }
    const h = (C, x = void 0) => {
      S == null || S(), l.delete(c), x !== On && (d.activate(), x ? (s.f |= He, En(s, x)) : ((s.f & He) !== 0 && (s.f ^= He), En(s, C)), d.deactivate());
    };
    c.promise.then(h, (C) => h(null, C || "unknown"));
  }), ca(() => {
    for (const f of l)
      f.reject(On);
  }), new Promise((f) => {
    function c(d) {
      function S() {
        d === a ? f(s) : c(a);
      }
      d.then(S, S);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function bt(t) {
  const e = /* @__PURE__ */ si(t);
  return ba(e), e;
}
// @__NO_SIDE_EFFECTS__
function ms(t) {
  const e = /* @__PURE__ */ si(t);
  return e.equals = Ki, e;
}
function ws(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Gt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function oi(t) {
  var e, n = st, r = t.parent;
  if (!ze && r !== null && t.v !== At && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Xt | jt)) !== 0)
    return ns(), t.v;
  ke(r);
  try {
    t.f &= ~rn, ws(t), e = ya(t);
  } finally {
    ke(n);
  }
  return e;
}
function Qi(t) {
  var e = oi(t);
  if (!t.equals(e) && (t.wv = ma(), (!(Z != null && Z.is_fork) || t.deps === null) && (Z !== null ? (Z.capture(t, e, !0), jn == null || jn.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    wt(t, Tt);
    return;
  }
  ze || (Nt !== null ? (ui() || Z != null && Z.is_fork) && Nt.set(t, e) : ai(t));
}
function ys(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Zn(() => {
        n.ac.abort(Wn), n.ac = null;
      }), n.fn !== null && (n.teardown = Ja), Bn(n, 0), vi(n));
}
function $i(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && Sn(e);
}
let Mr = null, fn = null, Z = null, jn = null, Nt = null, Hr = null, Or = !1, vn = null, lr = null;
var yi = 0;
let ks = 1;
var _n, Fe, Ze, pn, gn, bn, Ae, xn, zt, Vn, Te, ce, pe, mn, Je, dt, Br, Nn, zr, ta, ea, un, Es, Ln;
const xr = class xr {
  constructor() {
    J(this, dt);
    Yt(this, "id", ks++);
    /** True as soon as `#process` was called */
    J(this, _n, !1);
    Yt(this, "linked", !0);
    /** @type {Batch | null} */
    J(this, Fe, null);
    /** @type {Batch | null} */
    J(this, Ze, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Yt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Yt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Yt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    J(this, pn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    J(this, gn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    J(this, bn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    J(this, Ae, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    J(this, xn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    J(this, zt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    J(this, Vn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    J(this, Te, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    J(this, ce, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    J(this, pe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    J(this, mn, /* @__PURE__ */ new Set());
    Yt(this, "is_fork", !1);
    J(this, Je, !1);
    fn === null ? Mr = fn = this : (W(fn, Ze, this), W(this, Fe, fn)), fn = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    u(this, pe).has(e) || u(this, pe).set(e, { d: [], m: [] }), u(this, mn).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = u(this, pe).get(e);
    if (r) {
      u(this, pe).delete(e);
      for (var a of r.d)
        wt(a, Et), n(a);
      for (a of r.m)
        wt(a, _e), n(a);
    }
    u(this, mn).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== At && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & He) === 0 && (this.current.set(e, [n, r]), Nt == null || Nt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    Z = this;
  }
  deactivate() {
    Z = null, Nt = null;
  }
  flush() {
    try {
      Or = !0, Z = this, at(this, dt, Nn).call(this);
    } finally {
      yi = 0, Hr = null, vn = null, lr = null, Or = !1, Z = null, Nt = null, we.clear();
    }
  }
  discard() {
    var e;
    for (const n of u(this, gn)) n(this);
    u(this, gn).clear();
    for (const n of this.async_deriveds.values())
      n.reject(On);
    at(this, dt, Ln).call(this), (e = u(this, xn)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    u(this, Vn).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (W(this, bn, u(this, bn) + 1), e) {
      let r = u(this, Ae).get(n) ?? 0;
      u(this, Ae).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (W(this, bn, u(this, bn) - 1), e) {
      let r = u(this, Ae).get(n) ?? 0;
      r === 1 ? u(this, Ae).delete(n) : u(this, Ae).set(n, r - 1);
    }
    u(this, Je) || (W(this, Je, !0), Ie(() => {
      W(this, Je, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, n) {
    for (const r of e)
      u(this, Te).add(r);
    for (const r of n)
      u(this, ce).add(r);
    e.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    u(this, pn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, gn).add(e);
  }
  settled() {
    return (u(this, xn) ?? W(this, xn, zi())).promise;
  }
  static ensure() {
    if (Z === null) {
      const e = Z = new xr();
      Or || Ie(() => {
        u(e, _n) || e.flush();
      });
    }
    return Z;
  }
  apply() {
    {
      Nt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var a;
    if (Hr = e, (a = e.b) != null && a.is_pending && (e.f & (yn | kr | Vi)) !== 0 && (e.f & An) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var n = e; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (vn !== null && n === st && (nt === null || (nt.f & Rt) === 0))
        return;
      if ((r & (Oe | re)) !== 0) {
        if ((r & Tt) === 0)
          return;
        n.f ^= Tt;
      }
    }
    u(this, zt).push(n);
  }
};
_n = new WeakMap(), Fe = new WeakMap(), Ze = new WeakMap(), pn = new WeakMap(), gn = new WeakMap(), bn = new WeakMap(), Ae = new WeakMap(), xn = new WeakMap(), zt = new WeakMap(), Vn = new WeakMap(), Te = new WeakMap(), ce = new WeakMap(), pe = new WeakMap(), mn = new WeakMap(), Je = new WeakMap(), dt = new WeakSet(), Br = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, Ae).keys()) {
    for (var e = r, n = !1; e.parent !== null; ) {
      if (u(this, pe).has(e)) {
        n = !0;
        break;
      }
      e = e.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, Nn = function() {
  var f, c, d, S;
  W(this, _n, !0), yi++ > 1e3 && (at(this, dt, Ln).call(this), Ss());
  for (const h of u(this, Te))
    u(this, ce).delete(h), wt(h, Et), this.schedule(h);
  for (const h of u(this, ce))
    wt(h, _e), this.schedule(h);
  const e = u(this, zt);
  W(this, zt, []), this.apply();
  var n = vn = [], r = [], a = lr = [];
  for (const h of e)
    try {
      at(this, dt, zr).call(this, h, n, r);
    } catch (_) {
      throw ia(h), at(this, dt, Br).call(this) || this.discard(), _;
    }
  if (Z = null, a.length > 0) {
    var s = xr.ensure();
    for (const h of a)
      s.schedule(h);
  }
  if (vn = null, lr = null, at(this, dt, Br).call(this)) {
    at(this, dt, un).call(this, r), at(this, dt, un).call(this, n);
    for (const [h, _] of u(this, pe))
      ra(h, _);
    a.length > 0 && /** @type {unknown} */
    at(f = Z, dt, Nn).call(f);
    return;
  }
  const o = at(this, dt, ta).call(this);
  if (o) {
    at(this, dt, un).call(this, r), at(this, dt, un).call(this, n), at(c = o, dt, ea).call(c, this);
    return;
  }
  u(this, Te).clear(), u(this, ce).clear();
  for (const h of u(this, pn)) h(this);
  u(this, pn).clear(), jn = this, ki(r), ki(n), jn = null, (d = u(this, xn)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Z
  );
  if (u(this, bn) === 0 && (u(this, zt).length === 0 || l !== null) && at(this, dt, Ln).call(this), u(this, zt).length > 0)
    if (l !== null) {
      const h = l;
      u(h, zt).push(...u(this, zt).filter((_) => !u(h, zt).includes(_)));
    } else
      l = this;
  l !== null && (we.clear(), at(S = l, dt, Nn).call(S));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
zr = function(e, n, r) {
  e.f ^= Tt;
  for (var a = e.first; a !== null; ) {
    var s = a.f, o = (s & (re | Oe)) !== 0, l = o && (s & Tt) !== 0, f = l || (s & jt) !== 0 || u(this, pe).has(a);
    if (!f && a.fn !== null) {
      o ? a.f ^= Tt : (s & yn) !== 0 ? n.push(a) : Qn(a) && ((s & de) !== 0 && u(this, ce).add(a), Sn(a));
      var c = a.first;
      if (c !== null) {
        a = c;
        continue;
      }
    }
    for (; a !== null; ) {
      var d = a.next;
      if (d !== null) {
        a = d;
        break;
      }
      a = a.parent;
    }
  }
}, ta = function() {
  for (var e = u(this, Fe); e !== null; ) {
    if (!e.is_fork) {
      for (const [n, [, r]] of this.current)
        if (e.current.has(n) && !r)
          return e;
    }
    e = u(e, Fe);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ea = function(e) {
  var r;
  for (const [a, s] of e.current)
    !this.previous.has(a) && e.previous.has(a) && this.previous.set(a, e.previous.get(a)), this.current.set(a, s);
  for (const [a, s] of e.async_deriveds) {
    const o = this.async_deriveds.get(a);
    o && s.promise.then(o.resolve).catch(o.reject);
  }
  e.async_deriveds.clear(), this.transfer_effects(u(e, Te), u(e, ce));
  const n = (a) => {
    var s = a.reactions;
    if (s !== null && !((a.f & Rt) !== 0 && (a.f & (Et | _e)) === 0))
      for (const f of s) {
        var o = f.f;
        if ((o & Rt) !== 0)
          n(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          o & (dn | de) && !this.async_deriveds.has(l) && (u(this, ce).delete(l), wt(l, Et), this.schedule(l));
        }
      }
  };
  for (const a of this.current.keys())
    n(a);
  this.oncommit(() => e.discard()), at(r = e, dt, Ln).call(r), Z = this, at(this, dt, Nn).call(this);
}, /**
 * @param {Effect[]} effects
 */
un = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ji(e[n], u(this, Te), u(this, ce));
}, Es = function() {
  var S;
  for (let h = Mr; h !== null; h = u(h, Ze)) {
    var e = h.id < this.id, n = [];
    for (const [_, [m, C]] of this.current) {
      if (h.current.has(_)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(_)[0]
        );
        if (e && m !== r)
          h.current.set(_, [m, C]);
        else
          continue;
      }
      n.push(_);
    }
    if (e)
      for (const [_, m] of this.async_deriveds) {
        const C = h.async_deriveds.get(_);
        C && m.promise.then(C.resolve).catch(C.reject);
      }
    var a = [...h.current.keys()].filter(
      (_) => !/** @type {[any, boolean]} */
      h.current.get(_)[1]
    );
    if (!(!u(h, _n) || a.length === 0)) {
      var s = a.filter((_) => !this.current.has(_));
      if (s.length === 0)
        e && h.discard();
      else if (n.length > 0) {
        if (e)
          for (const _ of u(this, mn))
            h.unskip_effect(_, (m) => {
              var C;
              (m.f & (de | dn)) !== 0 ? h.schedule(m) : at(C = h, dt, un).call(C, [m]);
            });
        h.activate();
        var o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var f of n)
          na(f, s, o, l);
        l = /* @__PURE__ */ new Map();
        var c = [...h.current].filter(([_, m]) => {
          const C = this.current.get(_);
          return C ? C[0] !== m[0] || C[1] !== m[1] : !0;
        }).map(([_]) => _);
        if (c.length > 0)
          for (const _ of u(this, Vn))
            (_.f & (Xt | jt | dr)) === 0 && li(_, c, l) && ((_.f & (dn | de)) !== 0 ? (wt(_, Et), h.schedule(_)) : u(h, Te).add(_));
        if (u(h, zt).length > 0 && !u(h, Je)) {
          h.apply();
          for (var d of u(h, zt))
            at(S = h, dt, zr).call(S, d, [], []);
          W(h, zt, []);
        }
        h.deactivate();
      }
    }
  }
}, Ln = function() {
  if (this.linked) {
    var e = u(this, Fe), n = u(this, Ze);
    e === null ? Mr = n : W(e, Ze, n), n === null ? fn = e : W(n, Fe, e), this.linked = !1;
  }
};
let an = xr;
function Ss() {
  try {
    fs();
  } catch (t) {
    xe(t, Hr);
  }
}
let ue = null;
function ki(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Xt | jt)) === 0 && Qn(r) && (ue = /* @__PURE__ */ new Set(), Sn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && _a(r), (ue == null ? void 0 : ue.size) > 0)) {
        we.clear();
        for (const a of ue) {
          if ((a.f & (Xt | jt)) !== 0) continue;
          const s = [a];
          let o = a.parent;
          for (; o !== null; )
            ue.has(o) && (ue.delete(o), s.push(o)), o = o.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & (Xt | jt)) === 0 && Sn(f);
          }
        }
        ue.clear();
      }
    }
    ue = null;
  }
}
function na(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const a of t.reactions) {
      const s = a.f;
      (s & Rt) !== 0 ? na(
        /** @type {Derived} */
        a,
        e,
        n,
        r
      ) : (s & (dn | de)) !== 0 && (s & Et) === 0 && li(a, e, r) && (wt(a, Et), fi(
        /** @type {Effect} */
        a
      ));
    }
}
function li(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const a of t.deps) {
      if (cr.call(e, a))
        return !0;
      if ((a.f & Rt) !== 0 && li(
        /** @type {Derived} */
        a,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function fi(t) {
  Z.schedule(t);
}
function ra(t, e) {
  if (!((t.f & re) !== 0 && (t.f & Tt) !== 0)) {
    (t.f & Et) !== 0 ? e.d.push(t) : (t.f & _e) !== 0 && e.m.push(t), wt(t, Tt);
    for (var n = t.first; n !== null; )
      ra(n, e), n = n.next;
  }
}
function ia(t) {
  wt(t, Tt);
  for (var e = t.first; e !== null; )
    ia(e), e = e.next;
}
let pr = /* @__PURE__ */ new Set();
const we = /* @__PURE__ */ new Map();
let aa = !1;
function sn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Gi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(t, e) {
  const n = sn(t);
  return ba(n), n;
}
// @__NO_SIDE_EFFECTS__
function As(t, e = !1, n = !0) {
  const r = sn(t);
  return e || (r.equals = Ki), r;
}
function b(t, e, n = !1) {
  nt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!he || (nt.f & dr) !== 0) && Wi() && (nt.f & (Rt | de | dn | dr)) !== 0 && (ye === null || !ye.has(t)) && vs();
  let r = n ? qt(e) : e;
  return En(t, r, lr);
}
function En(t, e, n = null) {
  if (!t.equals(e)) {
    ze ? we.set(t, e) : we.has(t) || we.set(t, t.v);
    var r = an.ensure();
    if (r.capture(t, e), (t.f & Rt) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & Et) !== 0 && oi(a), Nt === null && ai(a);
    }
    t.wv = ma(), sa(t, Et, n), st !== null && (st.f & Tt) !== 0 && (st.f & (re | Oe)) === 0 && (Qt === null ? Us([t]) : Qt.push(t)), !r.is_fork && pr.size > 0 && !aa && Ts();
  }
  return e;
}
function Ts() {
  aa = !1;
  for (const t of pr) {
    (t.f & Tt) !== 0 && wt(t, _e);
    let e;
    try {
      e = Qn(t);
    } catch {
      e = !0;
    }
    e && Sn(t);
  }
  pr.clear();
}
function Hn(t) {
  b(t, t.v + 1);
}
function sa(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var a = r.length, s = 0; s < a; s++) {
      var o = r[s], l = o.f, f = (l & Et) === 0;
      if (f && wt(o, e), (l & dr) !== 0)
        pr.add(
          /** @type {Effect} */
          o
        );
      else if ((l & Rt) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        Nt == null || Nt.delete(c), (l & rn) === 0 && (l & ne && (st === null || (st.f & hr) === 0) && (o.f |= rn), sa(c, _e, n));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          o
        );
        (l & de) !== 0 && ue !== null && ue.add(d), n !== null ? n.push(d) : fi(d);
      }
    }
}
function qt(t) {
  if (typeof t != "object" || t === null || hn in t || qi in t)
    return t;
  const e = ni(t);
  if (e !== Wa && e !== Za)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ji(t), a = /* @__PURE__ */ j(0), s = en, o = (l) => {
    if (en === s)
      return l();
    var f = nt, c = en;
    ie(null), Si(s);
    var d = l();
    return ie(f), Si(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && us();
        var d = n.get(f);
        return d === void 0 ? o(() => {
          var S = /* @__PURE__ */ j(c.value);
          return n.set(f, S), S;
        }) : b(d, c.value, !0), !0;
      },
      deleteProperty(l, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in l) {
            const d = o(() => /* @__PURE__ */ j(At));
            n.set(f, d), Hn(a);
          }
        } else
          b(c, At), Hn(a);
        return !0;
      },
      get(l, f, c) {
        var _;
        if (f === hn)
          return t;
        var d = n.get(f), S = f in l;
        if (d === void 0 && (!S || (_ = Fn(l, f)) != null && _.writable) && (d = o(() => {
          var m = qt(S ? l[f] : At), C = /* @__PURE__ */ j(m);
          return C;
        }), n.set(f, d)), d !== void 0) {
          var h = i(d);
          return h === At ? void 0 : h;
        }
        return Reflect.get(l, f, c);
      },
      getOwnPropertyDescriptor(l, f) {
        var c = Reflect.getOwnPropertyDescriptor(l, f);
        if (c && "value" in c) {
          var d = n.get(f);
          d && (c.value = i(d));
        } else if (c === void 0) {
          var S = n.get(f), h = S == null ? void 0 : S.v;
          if (S !== void 0 && h !== At)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(l, f) {
        var h;
        if (f === hn)
          return !0;
        var c = n.get(f), d = c !== void 0 && c.v !== At || Reflect.has(l, f);
        if (c !== void 0 || st !== null && (!d || (h = Fn(l, f)) != null && h.writable)) {
          c === void 0 && (c = o(() => {
            var _ = d ? qt(l[f]) : At, m = /* @__PURE__ */ j(_);
            return m;
          }), n.set(f, c));
          var S = i(c);
          if (S === At)
            return !1;
        }
        return d;
      },
      set(l, f, c, d) {
        var D;
        var S = n.get(f), h = f in l;
        if (r && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          S.v; _ += 1) {
            var m = n.get(_ + "");
            m !== void 0 ? b(m, At) : _ in l && (m = o(() => /* @__PURE__ */ j(At)), n.set(_ + "", m));
          }
        if (S === void 0)
          (!h || (D = Fn(l, f)) != null && D.writable) && (S = o(() => /* @__PURE__ */ j(void 0)), b(S, qt(c)), n.set(f, S));
        else {
          h = S.v !== At;
          var C = o(() => qt(c));
          b(S, C);
        }
        var x = Reflect.getOwnPropertyDescriptor(l, f);
        if (x != null && x.set && x.set.call(d, c), !h) {
          if (r && typeof f == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), H = Number(f);
            Number.isInteger(H) && H >= I.v && b(I, H + 1);
          }
          Hn(a);
        }
        return !0;
      },
      ownKeys(l) {
        i(a);
        var f = Reflect.ownKeys(l).filter((S) => {
          var h = n.get(S);
          return h === void 0 || h.v !== At;
        });
        for (var [c, d] of n)
          d.v !== At && !(c in l) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
var Vr, oa, la, fa;
function Cs() {
  if (Vr === void 0) {
    Vr = window, oa = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    la = Fn(e, "firstChild").get, fa = Fn(e, "nextSibling").get, wi(t) && (t[Ur] = void 0, t[or] = null, t[jr] = void 0, t.__e = void 0), wi(n) && (n[Mn] = void 0);
  }
}
function Me(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function on(t) {
  return (
    /** @type {TemplateNode | null} */
    la.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Jn(t) {
  return (
    /** @type {TemplateNode | null} */
    fa.call(t)
  );
}
function P(t, e) {
  return /* @__PURE__ */ on(t);
}
function Ct(t, e = !1) {
  {
    var n = /* @__PURE__ */ on(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Jn(n) : n;
  }
}
function V(t, e = !1) {
  return /* @__PURE__ */ on(t);
}
function w(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Jn(r);
  return r;
}
function Is(t) {
  t.textContent = "";
}
function ua() {
  return !1;
}
function Rs(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  );
}
function Ms(t) {
  var e = st;
  if (e === null)
    return nt.f |= He, t;
  if ((e.f & An) === 0 && (e.f & yn) === 0)
    throw t;
  xe(t, e);
}
function xe(t, e) {
  if (!(e !== null && (e.f & Xt) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Fr) !== 0 && (e.f & (Xt | vr)) === 0) {
        if ((e.f & An) === 0)
          throw t;
        try {
          e.b.error(t);
          return;
        } catch (n) {
          t = n;
        }
      }
      e = e.parent;
    }
    throw t;
  }
}
function Os(t) {
  st === null && (nt === null && ls(), os()), ze && ss();
}
function Ns(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ne(t, e) {
  var n = st;
  n !== null && (n.f & jt) !== 0 && (t |= jt);
  var r = {
    ctx: Ht,
    deps: null,
    nodes: null,
    f: t | Et | ne,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  Z == null || Z.register_created_effect(r);
  var a = r;
  if ((t & yn) !== 0)
    vn !== null ? vn.push(r) : an.ensure().schedule(r);
  else if (e !== null) {
    try {
      Sn(r);
    } catch (o) {
      throw Gt(r), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Tn) === 0 && (a = a.first, (t & de) !== 0 && (t & nn) !== 0 && a !== null && (a.f |= nn));
  }
  if (a !== null && (a.parent = n, n !== null && Ns(a, n), nt !== null && (nt.f & Rt) !== 0 && (t & Oe) === 0)) {
    var s = (
      /** @type {Derived} */
      nt
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return r;
}
function ui() {
  return nt !== null && !he;
}
function ca(t) {
  const e = Ne(kr, null);
  return wt(e, Tt), e.teardown = t, e;
}
function Be(t) {
  Os();
  var e = (
    /** @type {Effect} */
    st.f
  ), n = !nt && (e & re) !== 0 && Ht !== null && !Ht.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ht
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return va(t);
}
function va(t) {
  return Ne(yn | $a, t);
}
function Ls(t) {
  an.ensure();
  const e = Ne(Oe | Tn, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? tn(e, () => {
      Gt(e), r(void 0);
    }) : (Gt(e), r(void 0));
  });
}
function da(t) {
  return Ne(yn, t);
}
function Ps(t) {
  return Ne(dn | Tn, t);
}
function ci(t, e = 0) {
  return Ne(kr | e, t);
}
function F(t, e = [], n = [], r = []) {
  gs(r, e, n, (a) => {
    Ne(kr, () => {
      t(...a.map(i));
    });
  });
}
function Xn(t, e = 0) {
  var n = Ne(de | e, t);
  return n;
}
function ee(t) {
  return Ne(re | Tn, t);
}
function ha(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ze, r = nt;
    Ei(!0), ie(null);
    try {
      e.call(null);
    } catch (a) {
      xe(a, t.parent);
    } finally {
      Ei(n), ie(r);
    }
  }
}
function vi(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && Zn(() => {
      a.abort(Wn);
    });
    var r = n.next;
    (n.f & Oe) !== 0 ? n.parent = null : Gt(n, e), n = r;
  }
}
function Ds(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & re) === 0 && Gt(e), e = n;
  }
}
function Gt(t, e = !0) {
  var n = !1;
  (e || (t.f & Qa) !== 0) && t.nodes !== null && t.nodes.end !== null && (Fs(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= vr, vi(t, e && !n), Bn(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ha(t), t.f ^= vr, t.f |= Xt;
  var a = t.parent;
  a !== null && a.first !== null && _a(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function Fs(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Jn(t);
    t.remove(), t = n;
  }
}
function _a(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function tn(t, e, n = !0) {
  var r = [];
  t.f |= ri, pa(t, r, !0);
  var a = () => {
    n && Gt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || a();
    for (var l of r)
      l.out(o);
  } else
    a();
}
function pa(t, e, n) {
  if ((t.f & jt) === 0) {
    t.f ^= jt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && e.push(l);
    for (var a = t.first; a !== null; ) {
      var s = a.next;
      if ((a.f & Oe) === 0) {
        var o = (a.f & nn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & re) !== 0 && (t.f & de) !== 0;
        pa(a, e, o ? n : !1);
      }
      a = s;
    }
  }
}
function gr(t) {
  t.f &= ~ri, ga(t, !0);
}
function ga(t, e) {
  if ((t.f & ri) === 0 && (t.f & jt) !== 0) {
    t.f ^= jt, (t.f & Tt) === 0 && (wt(t, Et), an.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, a = (n.f & nn) !== 0 || (n.f & re) !== 0;
      ga(n, a ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function di(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var a = n === r ? null : /* @__PURE__ */ Jn(n);
      e.append(n), n = a;
    }
}
let fr = !1, ze = !1;
function Ei(t) {
  ze = t;
}
let nt = null, he = !1;
function ie(t) {
  nt = t;
}
let st = null;
function ke(t) {
  st = t;
}
let ye = null;
function ba(t) {
  nt !== null && (ye ?? (ye = /* @__PURE__ */ new Set())).add(t);
}
let Vt = null, Jt = 0, Qt = null;
function Us(t) {
  Qt = t;
}
let xa = 1, Ke = 0, en = Ke;
function Si(t) {
  en = t;
}
function ma() {
  return ++xa;
}
function Qn(t) {
  var e = t.f;
  if ((e & Et) !== 0)
    return !0;
  if (e & Rt && (t.f &= ~rn), (e & _e) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, a = 0; a < r; a++) {
      var s = n[a];
      if (Qn(
        /** @type {Derived} */
        s
      ) && Qi(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & ne) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Nt === null && wt(t, Tt);
  }
  return !1;
}
function wa(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ye !== null && ye.has(t)))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & Rt) !== 0 ? wa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? wt(s, Et) : (s.f & Tt) !== 0 && wt(s, _e), fi(
        /** @type {Effect} */
        s
      ));
    }
}
function ya(t) {
  var e = Vt, n = Jt, r = Qt, a = nt, s = ye, o = Ht, l = he, f = en, c = t.f;
  Vt = /** @type {null | Value[]} */
  null, Jt = 0, Qt = null, nt = (c & (re | Oe)) === 0 ? t : null, ye = null, kn(t.ctx), he = !1, en = ++Ke, t.ac !== null && (Zn(() => {
    t.ac.abort(Wn);
  }), t.ac = null);
  try {
    t.f |= hr;
    var d = (
      /** @type {Function} */
      t.fn
    ), S = d();
    t.f |= An;
    var h = Ai(t);
    if (Wi() && Qt !== null && !he && h !== null && (t.f & (Rt | _e | Et)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      Qt.length; _++)
        wa(
          Qt[_],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (Ke++, a.deps !== null)
        for (let m = 0; m < n; m += 1)
          a.deps[m].rv = Ke;
      if (e !== null)
        for (const m of e)
          m.rv = Ke;
      Qt !== null && (r === null ? r = Qt : r.push(.../** @type {Source[]} */
      Qt));
    }
    return (t.f & He) !== 0 && (t.f ^= He), S;
  } catch (m) {
    return Ai(t), Ms(m);
  } finally {
    t.f ^= hr, Vt = e, Jt = n, Qt = r, nt = a, ye = s, kn(o), he = l, en = f;
  }
}
function Ai(t) {
  var a;
  var e = t.deps, n = Z == null ? void 0 : Z.is_fork;
  if (Vt !== null) {
    var r;
    if (n || Bn(t, Jt), e !== null && Jt > 0)
      for (e.length = Jt + Vt.length, r = 0; r < Vt.length; r++)
        e[Jt + r] = Vt[r];
    else
      t.deps = e = Vt;
    if (ui() && (t.f & ne) !== 0)
      for (r = Jt; r < e.length; r++)
        ((a = e[r]).reactions ?? (a.reactions = [])).push(t);
  } else !n && e !== null && Jt < e.length && (Bn(t, Jt), e.length = Jt);
  return e;
}
function js(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Ka.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  if (n === null && (e.f & Rt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Vt === null || !cr.call(Vt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & ne) !== 0 && (s.f ^= ne, s.f &= ~rn), s.v !== At && ai(s), s.ac !== null && Zn(() => {
      s.ac.abort(Wn), s.ac = null, wt(s, Et);
    }), ys(s), Bn(s, 0);
  }
}
function Bn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      js(t, n[r]);
}
function Sn(t) {
  var e = t.f;
  if ((e & Xt) === 0) {
    wt(t, Tt);
    var n = st, r = fr;
    st = t, fr = (e & (re | Oe)) === 0;
    try {
      (e & (de | Vi)) !== 0 ? Ds(t) : vi(t), ha(t);
      var a = ya(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = xa;
      var s;
      Ui && hs && (t.f & Et) !== 0 && t.deps;
    } finally {
      fr = r, st = n;
    }
  }
}
function i(t) {
  var e = t.f, n = (e & Rt) !== 0;
  if (nt !== null && !he) {
    var r = st !== null && (st.f & Xt) !== 0;
    if (!r && (ye === null || !ye.has(t))) {
      var a = nt.deps;
      if ((nt.f & hr) !== 0)
        t.rv < Ke && (t.rv = Ke, Vt === null && a !== null && a[Jt] === t ? Jt++ : Vt === null ? Vt = [t] : Vt.push(t));
      else {
        nt.deps ?? (nt.deps = []), cr.call(nt.deps, t) || nt.deps.push(t);
        var s = t.reactions;
        s === null ? t.reactions = [nt] : cr.call(s, nt) || s.push(nt);
      }
    }
  }
  if (ze && we.has(t))
    return we.get(t);
  if (n) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (ze) {
      var l = o.v;
      return ((o.f & Tt) === 0 && o.reactions !== null || Ea(o)) && (l = oi(o)), we.set(o, l), l;
    }
    var f = (o.f & ne) === 0 && !he && nt !== null && (fr || (nt.f & ne) !== 0), c = (o.f & An) === 0;
    Qn(o) && (f && (o.f |= ne), Qi(o)), f && !c && ($i(o), ka(o));
  }
  if (Nt != null && Nt.has(t))
    return Nt.get(t);
  if ((t.f & He) !== 0)
    throw t.v;
  return t.v;
}
function ka(t) {
  if (t.f |= ne, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Rt) !== 0 && (e.f & ne) === 0 && ($i(
        /** @type {Derived} */
        e
      ), ka(
        /** @type {Derived} */
        e
      ));
}
function Ea(t) {
  if (t.v === At) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (we.has(e) || (e.f & Rt) !== 0 && Ea(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function $n(t) {
  var e = he;
  try {
    return he = !0, t();
  } finally {
    he = e;
  }
}
function Hs(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (hn in t)
      qr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && hn in n && qr(n);
      }
  }
}
function qr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        qr(t[r], e);
      } catch {
      }
    const n = ni(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bi(n);
      for (let a in r) {
        const s = r[a].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const We = Symbol("events"), Sa = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set();
function Bs(t, e, n, r = {}) {
  function a(s) {
    if (r.capture || Kr.call(e, s), !s.cancelBubble)
      return Zn(() => n == null ? void 0 : n.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ie(() => {
    e.addEventListener(t, a, r);
  }) : e.addEventListener(t, a, r), a;
}
function Yr(t, e, n, r, a) {
  var s = { capture: r, passive: a }, o = Bs(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ca(() => {
    e.removeEventListener(t, o, s);
  });
}
function lt(t, e, n) {
  (e[We] ?? (e[We] = {}))[t] = n;
}
function qe(t) {
  for (var e = 0; e < t.length; e++)
    Sa.add(t[e]);
  for (var n of Gr)
    n(t);
}
let Nr = null, Lr = !1;
function Kr(t) {
  var C, x;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, a = ((C = t.composedPath) == null ? void 0 : C.call(t)) || [], s = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  Nr = t, Lr || (Lr = !0, setTimeout(() => {
    Lr = !1, Nr = null;
  }));
  var o = 0, l = Nr === t && t[We];
  if (l) {
    var f = a.indexOf(l);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[We] = e;
      return;
    }
    var c = a.indexOf(e);
    if (c === -1)
      return;
    f <= c && (o = f);
  }
  if (s = /** @type {Element} */
  a[o] || t.target, s !== e) {
    Hi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = nt, S = st;
    ie(null), ke(null);
    try {
      for (var h, _ = []; s !== null && s !== e; ) {
        try {
          var m = (x = s[We]) == null ? void 0 : x[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch (I) {
          h ? _.push(I) : h = I;
        }
        if (t.cancelBubble) break;
        o++, s = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (h) {
        for (let I of _)
          queueMicrotask(() => {
            throw I;
          });
        throw h;
      }
    } finally {
      t[We] = e, delete t.currentTarget, ie(d), ke(S);
    }
  }
}
var Di;
const Pr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Di = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Di.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function zs(t) {
  return (
    /** @type {string} */
    (Pr == null ? void 0 : Pr.createHTML(t)) ?? t
  );
}
function Aa(t) {
  var e = Rs("template");
  return e.innerHTML = zs(t.replaceAll("<!>", "<!---->")), e.content;
}
function zn(t, e) {
  var n = (
    /** @type {Effect} */
    st
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function T(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, a, s = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = Aa(s ? t : "<!>" + t), n || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ on(a)));
    var o = (
      /** @type {TemplateNode} */
      r || oa ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ on(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zn(l, f);
    } else
      zn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Vs(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), a = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        Aa(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ on(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ on(l);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return zn(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function qs(t, e) {
  return /* @__PURE__ */ Vs(t, e, "svg");
}
function je(t = "") {
  {
    var e = Me(t + "");
    return zn(e, e), e;
  }
}
function Ve() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Me();
  return t.append(e, n), zn(e, n), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Gs = ["touchstart", "touchmove"];
function Ys(t) {
  return Gs.includes(t);
}
function Ks(t) {
  let e = 0, n = sn(0), r;
  return () => {
    ui() && (i(n), ci(() => (e === 0 && (r = $n(() => t(() => Hn(n)))), e += 1, () => {
      Ie(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Hn(n));
      });
    })));
  };
}
var Ws = nn | Tn;
function Zs(t, e, n, r) {
  new Js(t, e, n, r);
}
var $t, ei, te, Xe, Ft, Kt, Ut, Wt, ge, Qe, Ue, wn, qn, Gn, Ce, mr, pt, Xs, Qs, Wr, $s, Zr, Pn, ur, Jr, Xr;
class Js {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, a) {
    J(this, pt);
    /** @type {Boundary | null} */
    Yt(this, "parent");
    Yt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Yt(this, "transform_error");
    /** @type {TemplateNode} */
    J(this, $t);
    /** @type {TemplateNode | null} */
    J(this, ei, null);
    /** @type {BoundaryProps} */
    J(this, te);
    /** @type {((anchor: Node) => void)} */
    J(this, Xe);
    /** @type {Effect} */
    J(this, Ft);
    /** @type {Effect | null} */
    J(this, Kt, null);
    /** @type {Effect | null} */
    J(this, Ut, null);
    /** @type {Effect | null} */
    J(this, Wt, null);
    /** @type {DocumentFragment | null} */
    J(this, ge, null);
    J(this, Qe, 0);
    J(this, Ue, 0);
    J(this, wn, !1);
    /** @type {Set<Effect>} */
    J(this, qn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    J(this, Gn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    J(this, Ce, null);
    J(this, mr, Ks(() => (W(this, Ce, sn(u(this, Qe))), () => {
      W(this, Ce, null);
    })));
    var s;
    W(this, $t, e), W(this, te, n), W(this, Xe, (o) => {
      var l = (
        /** @type {Effect} */
        st
      );
      l.b = this, l.f |= Fr, r(o);
    }), this.parent = /** @type {Effect} */
    st.b, this.transform_error = a ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((o) => o), W(this, Ft, Xn(() => {
      at(this, pt, Zr).call(this);
    }, Ws));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ji(e, u(this, qn), u(this, Gn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, te).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    at(this, pt, Jr).call(this, e, n), W(this, Qe, u(this, Qe) + e), !(!u(this, Ce) || u(this, wn)) && (W(this, wn, !0), Ie(() => {
      W(this, wn, !1), u(this, Ce) && En(u(this, Ce), u(this, Qe));
    }));
  }
  get_effect_pending() {
    return u(this, mr).call(this), i(
      /** @type {Source<number>} */
      u(this, Ce)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!u(this, te).onerror && !u(this, te).failed)
      throw e;
    Z != null && Z.is_fork ? (u(this, Kt) && Z.skip_effect(u(this, Kt)), u(this, Ut) && Z.skip_effect(u(this, Ut)), u(this, Wt) && Z.skip_effect(u(this, Wt)), Z.oncommit(() => {
      at(this, pt, Xr).call(this, e);
    })) : at(this, pt, Xr).call(this, e);
  }
}
$t = new WeakMap(), ei = new WeakMap(), te = new WeakMap(), Xe = new WeakMap(), Ft = new WeakMap(), Kt = new WeakMap(), Ut = new WeakMap(), Wt = new WeakMap(), ge = new WeakMap(), Qe = new WeakMap(), Ue = new WeakMap(), wn = new WeakMap(), qn = new WeakMap(), Gn = new WeakMap(), Ce = new WeakMap(), mr = new WeakMap(), pt = new WeakSet(), Xs = function() {
  try {
    W(this, Kt, ee(() => u(this, Xe).call(this, u(this, $t))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Qs = function(e) {
  const n = u(this, te).failed, { reset: r, invoke_onerror: a } = at(this, pt, Wr).call(this, e);
  Ie(a), n && W(this, Wt, ee(() => {
    n(
      u(this, $t),
      () => e,
      () => r
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
Wr = function(e) {
  var n = !1, r = !1;
  const a = () => {
    if (n) {
      rs();
      return;
    }
    n = !0, r && ds(), u(this, Wt) !== null && tn(u(this, Wt), () => {
      W(this, Wt, null);
    }), at(this, pt, ur).call(this, () => {
      at(this, pt, Zr).call(this);
    });
  };
  return { reset: a, invoke_onerror: () => {
    var o, l;
    try {
      r = !0, (l = (o = u(this, te)).onerror) == null || l.call(o, e, a), r = !1;
    } catch (f) {
      xe(f, u(this, Ft) && u(this, Ft).parent);
    }
  } };
}, $s = function() {
  const e = u(this, te).pending;
  e && (this.is_pending = !0, W(this, Ut, ee(() => e(u(this, $t)))), Ie(() => {
    var n = W(this, ge, document.createDocumentFragment()), r = Me(), a = !1;
    if (n.append(r), W(this, Kt, at(this, pt, ur).call(this, () => {
      try {
        return ee(() => u(this, Xe).call(this, r));
      } catch (s) {
        try {
          this.error(s), a = !0;
        } catch (o) {
          xe(o, u(this, Ft).parent);
        }
        return null;
      }
    })), u(this, Kt) === null) {
      W(this, ge, null), a && at(this, pt, Pn).call(
        this,
        /** @type {Batch} */
        Z
      );
      return;
    }
    u(this, Ue) === 0 && (u(this, $t).before(n), W(this, ge, null), tn(
      /** @type {Effect} */
      u(this, Ut),
      () => {
        W(this, Ut, null);
      }
    ), at(this, pt, Pn).call(
      this,
      /** @type {Batch} */
      Z
    ));
  }));
}, Zr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), W(this, Ue, 0), W(this, Qe, 0), W(this, Kt, ee(() => {
      u(this, Xe).call(this, u(this, $t));
    })), u(this, Ue) > 0) {
      var e = W(this, ge, document.createDocumentFragment());
      di(u(this, Kt), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, te).pending
      );
      W(this, Ut, ee(() => n(u(this, $t))));
    } else
      at(this, pt, Pn).call(
        this,
        /** @type {Batch} */
        Z
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Pn = function(e) {
  this.is_pending = !1, e.transfer_effects(u(this, qn), u(this, Gn));
}, /**
 * @template T
 * @param {() => T} fn
 */
ur = function(e) {
  var n = st, r = nt, a = Ht;
  ke(u(this, Ft)), ie(u(this, Ft)), kn(u(this, Ft).ctx);
  try {
    return an.ensure(), e();
  } finally {
    ke(n), ie(r), kn(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Jr = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && at(r = this.parent, pt, Jr).call(r, e, n);
    return;
  }
  W(this, Ue, u(this, Ue) + e), u(this, Ue) === 0 && (at(this, pt, Pn).call(this, n), u(this, Ut) && tn(u(this, Ut), () => {
    W(this, Ut, null);
  }), u(this, ge) && (u(this, $t).before(u(this, ge)), W(this, ge, null)));
}, /**
 * @param {unknown} error
 */
Xr = function(e) {
  u(this, Kt) && (Gt(u(this, Kt)), W(this, Kt, null)), u(this, Ut) && (Gt(u(this, Ut)), W(this, Ut, null)), u(this, Wt) && (Gt(u(this, Wt)), W(this, Wt, null));
  let n = u(this, te).failed;
  const r = (a) => {
    const { reset: s, invoke_onerror: o } = at(this, pt, Wr).call(this, a);
    o(), n && W(this, Wt, at(this, pt, ur).call(this, () => {
      try {
        return ee(() => {
          var l = (
            /** @type {Effect} */
            st
          );
          l.b = this, l.f |= Fr, n(
            u(this, $t),
            () => a,
            () => s
          );
        });
      } catch (l) {
        return xe(
          l,
          /** @type {Effect} */
          u(this, Ft).parent
        ), null;
      }
    }));
  };
  Ie(() => {
    var a;
    try {
      a = this.transform_error(e);
    } catch (s) {
      xe(s, u(this, Ft) && u(this, Ft).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      r,
      /** @param {unknown} e */
      (s) => xe(s, u(this, Ft) && u(this, Ft).parent)
    ) : r(a);
  });
};
function L(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[Mn] ?? (t[Mn] = t.nodeValue)) && (t[Mn] = n, t.nodeValue = `${n}`);
}
function Ta(t, e) {
  return to(t, e);
}
const sr = /* @__PURE__ */ new Map();
function to(t, { target: e, anchor: n, props: r = {}, events: a, context: s, intro: o = !0, transformError: l }) {
  Cs();
  var f = void 0, c = Ls(() => {
    var d = n ?? e.appendChild(Me());
    Zs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (_) => {
        ae({});
        var m = (
          /** @type {ComponentContext} */
          Ht
        );
        s && (m.c = s), a && (r.$$events = a), f = t(_, r) || ii(), se();
      },
      l
    );
    var S = /* @__PURE__ */ new Set(), h = (_) => {
      for (var m = 0; m < _.length; m++) {
        var C = _[m];
        if (!S.has(C)) {
          S.add(C);
          var x = Ys(C);
          for (const D of [e, document]) {
            var I = sr.get(D);
            I === void 0 && (I = /* @__PURE__ */ new Map(), sr.set(D, I));
            var H = I.get(C);
            H === void 0 ? (D.addEventListener(C, Kr, { passive: x }), I.set(C, 1)) : I.set(C, H + 1);
          }
        }
      }
    };
    return h(yr(Sa)), Gr.add(h), () => {
      var x;
      for (var _ of S)
        for (const I of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            sr.get(I)
          ), C = (
            /** @type {number} */
            m.get(_)
          );
          --C == 0 ? (I.removeEventListener(_, Kr), m.delete(_), m.size === 0 && sr.delete(I)) : m.set(_, C);
        }
      Gr.delete(h), d !== n && ((x = d.parentNode) == null || x.removeChild(d));
    };
  });
  return Qr.set(f, c), f;
}
let Qr = /* @__PURE__ */ new WeakMap();
function Ca(t, e) {
  const n = Qr.get(t);
  return n ? (Qr.delete(t), n(e)) : Promise.resolve();
}
var ve, be, Zt, $e, Yn, Kn, wr;
class hi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    Yt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    J(this, ve, /* @__PURE__ */ new Map());
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
    J(this, be, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    J(this, Zt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    J(this, $e, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    J(this, Yn, !0);
    /**
     * @param {Batch} batch
     */
    J(this, Kn, (e) => {
      if (u(this, ve).has(e)) {
        var n = (
          /** @type {Key} */
          u(this, ve).get(e)
        ), r = u(this, be).get(n);
        if (r)
          gr(r), u(this, $e).delete(n);
        else {
          var a = u(this, Zt).get(n);
          a && (gr(a.effect), u(this, be).set(n, a.effect), u(this, Zt).delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), r = a.effect);
        }
        for (const [s, o] of u(this, ve)) {
          if (u(this, ve).delete(s), s === e)
            break;
          const l = u(this, Zt).get(o);
          l && (Gt(l.effect), u(this, Zt).delete(o));
        }
        for (const [s, o] of u(this, be)) {
          if (s === n || u(this, $e).has(s)) continue;
          const l = () => {
            if (Array.from(u(this, ve).values()).includes(s)) {
              var c = document.createDocumentFragment();
              di(o, c), c.append(Me()), u(this, Zt).set(s, { effect: o, fragment: c });
            } else
              Gt(o);
            u(this, $e).delete(s), u(this, be).delete(s);
          };
          u(this, Yn) || !r ? (u(this, $e).add(s), tn(o, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    J(this, wr, (e) => {
      u(this, ve).delete(e);
      const n = Array.from(u(this, ve).values());
      for (const [r, a] of u(this, Zt))
        n.includes(r) || (Gt(a.effect), u(this, Zt).delete(r));
    });
    this.anchor = e, W(this, Yn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Z
    ), a = ua();
    if (n && !u(this, be).has(e) && !u(this, Zt).has(e))
      if (a) {
        var s = document.createDocumentFragment(), o = Me();
        s.append(o), u(this, Zt).set(e, {
          effect: ee(() => n(o)),
          fragment: s
        });
      } else
        u(this, be).set(
          e,
          ee(() => n(this.anchor))
        );
    if (u(this, ve).set(r, e), a) {
      for (const [l, f] of u(this, be))
        l === e ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [l, f] of u(this, Zt))
        l === e ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(u(this, Kn)), r.ondiscard(u(this, wr));
    } else
      u(this, Kn).call(this, r);
  }
}
ve = new WeakMap(), be = new WeakMap(), Zt = new WeakMap(), $e = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), wr = new WeakMap();
function eo(t, e, ...n) {
  var r = new hi(t);
  Xn(() => {
    const a = e() ?? null;
    r.ensure(a, a && ((s) => a(s, ...n)));
  }, nn);
}
function N(t, e, n = !1) {
  var r = new hi(t), a = n ? nn : 0;
  function s(o, l) {
    r.ensure(o, l);
  }
  Xn(() => {
    var o = !1;
    e((l, f = 0) => {
      o = !0, s(f, l);
    }), o || s(-1, null);
  }, a);
}
const no = Symbol("NaN");
function Ia(t, e, n) {
  var r = new hi(t);
  Xn(() => {
    var a = e();
    a !== a && (a = /** @type {any} */
    no), r.ensure(a, n);
  });
}
function Er(t, e) {
  return e;
}
function ro(t, e, n) {
  for (var r = [], a = e.length, s, o = e.length, l = 0; l < a; l++) {
    let S = e[l];
    tn(
      S,
      () => {
        if (s) {
          if (s.pending.delete(S), s.done.add(S), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, yr(s.done)), h.delete(s), h.size === 0 && (t.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = r.length === 0 && n !== null && t.pending.size === 0;
    if (f) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Is(d), d.append(c), t.items.clear();
    }
    $r(t, e, !f);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function $r(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of t.pending.values())
      for (const l of o)
        r.add(
          /** @type {EachItem} */
          t.items.get(l).e
        );
  }
  for (var a = 0; a < e.length; a++) {
    var s = e[a];
    if (r != null && r.has(s)) {
      s.f |= me;
      const o = document.createDocumentFragment();
      di(s, o);
    } else
      Gt(e[a], n);
  }
}
var Ti;
function St(t, e, n, r, a, s = null) {
  var o = t, l = /* @__PURE__ */ new Map(), f = (e & 4) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Me());
  }
  var d = null, S = /* @__PURE__ */ ms(() => {
    var D = n();
    return (
      /** @type {V[]} */
      ji(D) ? D : D == null ? [] : yr(D)
    );
  }), h, _ = /* @__PURE__ */ new Map(), m = !0;
  function C(D) {
    (H.effect.f & Xt) === 0 && (H.pending.delete(D), H.fallback = d, io(H, h, o, e, r), d !== null && (h.length === 0 ? (d.f & me) === 0 ? gr(d) : (d.f ^= me, Dn(d, null, o)) : tn(d, () => {
      d = null;
    })));
  }
  function x(D) {
    H.pending.delete(D);
  }
  var I = Xn(() => {
    h = /** @type {V[]} */
    i(S);
    for (var D = h.length, B = /* @__PURE__ */ new Set(), ut = (
      /** @type {Batch} */
      Z
    ), K = ua(), Y = 0; Y < D; Y += 1) {
      var $ = h[Y], rt = r($, Y), X = m ? null : l.get(rt);
      X ? (X.v && En(X.v, $), X.i && En(X.i, Y), K && ut.unskip_effect(X.e)) : (X = ao(
        l,
        m ? o : Ti ?? (Ti = Me()),
        $,
        rt,
        Y,
        a,
        e,
        n
      ), m || (X.e.f |= me), l.set(rt, X)), B.add(rt);
    }
    if (D === 0 && s && !d && (m ? d = ee(() => s(o)) : (d = ee(() => s(Ti ?? (Ti = Me()))), d.f |= me)), D > B.size && as(), !m)
      if (_.set(ut, B), K) {
        for (const [R, A] of l)
          B.has(R) || ut.skip_effect(A.e);
        ut.oncommit(C), ut.ondiscard(x);
      } else
        C(ut);
    i(S);
  }), H = { effect: I, items: l, pending: _, outrogroups: null, fallback: d };
  m = !1;
}
function Rn(t) {
  for (; t !== null && (t.f & re) === 0; )
    t = t.next;
  return t;
}
function io(t, e, n, r, a) {
  var X, R, A, U, Q, ft, q, p, k;
  var s = (r & 8) !== 0, o = e.length, l = t.items, f = Rn(t.effect.first), c, d = null, S, h = [], _ = [], m, C, x, I;
  if (s)
    for (I = 0; I < o; I += 1)
      m = e[I], C = a(m, I), x = /** @type {EachItem} */
      l.get(C).e, (x.f & me) === 0 && ((R = (X = x.nodes) == null ? void 0 : X.a) == null || R.measure(), (S ?? (S = /* @__PURE__ */ new Set())).add(x));
  for (I = 0; I < o; I += 1) {
    if (m = e[I], C = a(m, I), x = /** @type {EachItem} */
    l.get(C).e, t.outrogroups !== null)
      for (const v of t.outrogroups)
        v.pending.delete(x), v.done.delete(x);
    if ((x.f & jt) !== 0 && (gr(x), s && ((U = (A = x.nodes) == null ? void 0 : A.a) == null || U.unfix(), (S ?? (S = /* @__PURE__ */ new Set())).delete(x))), (x.f & me) !== 0)
      if (x.f ^= me, x === f)
        Dn(x, null, n);
      else {
        var H = d ? d.next : f;
        x === t.effect.last && (t.effect.last = x.prev), x.prev && (x.prev.next = x.next), x.next && (x.next.prev = x.prev), De(t, d, x), De(t, x, H), Dn(x, H, n), d = x, h = [], _ = [], f = Rn(d.next);
        continue;
      }
    if (x !== f) {
      if (c !== void 0 && c.has(x)) {
        if (h.length < _.length) {
          var D = _[0], B;
          d = D.prev;
          var ut = h[0], K = h[h.length - 1];
          for (B = 0; B < h.length; B += 1)
            Dn(h[B], D, n);
          for (B = 0; B < _.length; B += 1)
            c.delete(_[B]);
          De(t, ut.prev, K.next), De(t, d, ut), De(t, K, D), f = D, d = K, I -= 1, h = [], _ = [];
        } else
          c.delete(x), Dn(x, f, n), De(t, x.prev, x.next), De(t, x, d === null ? t.effect.first : d.next), De(t, d, x), d = x;
        continue;
      }
      for (h = [], _ = []; f !== null && f !== x; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Rn(f.next);
      if (f === null)
        continue;
    }
    (x.f & me) === 0 && h.push(x), d = x, f = Rn(x.next);
  }
  if (t.outrogroups !== null) {
    for (const v of t.outrogroups)
      v.pending.size === 0 && ($r(t, yr(v.done)), (Q = t.outrogroups) == null || Q.delete(v));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var Y = [];
    if (c !== void 0)
      for (x of c)
        (x.f & jt) === 0 && Y.push(x);
    for (; f !== null; )
      (f.f & jt) === 0 && f !== t.fallback && Y.push(f), f = Rn(f.next);
    var $ = Y.length;
    if ($ > 0) {
      var rt = (r & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (I = 0; I < $; I += 1)
          (q = (ft = Y[I].nodes) == null ? void 0 : ft.a) == null || q.measure();
        for (I = 0; I < $; I += 1)
          (k = (p = Y[I].nodes) == null ? void 0 : p.a) == null || k.fix();
      }
      ro(t, Y, rt);
    }
  }
  s && Ie(() => {
    var v, g;
    if (S !== void 0)
      for (x of S)
        (g = (v = x.nodes) == null ? void 0 : v.a) == null || g.apply();
  });
}
function ao(t, e, n, r, a, s, o, l) {
  var f = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ As(n, !1, !1) : sn(n) : null, c = (o & 2) !== 0 ? sn(a) : null;
  return {
    v: f,
    i: c,
    e: ee(() => (s(e, f ?? n, c ?? a, l), () => {
      t.delete(r);
    }))
  };
}
function Dn(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, a = t.nodes.end, s = e && (e.f & me) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Jn(r)
      );
      if (s.before(r), r === a)
        return;
      r = o;
    }
}
function De(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function _i(t, e, n) {
  da(() => {
    var r = $n(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var a = !1, s = (
        /** @type {any} */
        {}
      );
      ci(() => {
        var o = n();
        Hs(o), a && Yi(s, o) && (s = o, r.update(o));
      }), a = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const Ci = [...` 	
\r\f \v\uFEFF`];
function so(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var a of Object.keys(n))
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var s = a.length, o = 0; (o = r.indexOf(a, o)) >= 0; ) {
          var l = o + s;
          (o === 0 || Ci.includes(r[o - 1])) && (l === r.length || Ci.includes(r[l])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(l + 1) : o = l;
        }
  }
  return r === "" ? null : r;
}
function oo(t, e) {
  return t == null ? null : String(t);
}
function Se(t, e, n, r, a, s) {
  var o = (
    /** @type {any} */
    t[Ur]
  );
  if (o !== n || o === void 0) {
    var l = so(n, r, s);
    l == null ? t.removeAttribute("class") : t.className = l, t[Ur] = n;
  } else if (s && a !== s)
    for (var f in s) {
      var c = !!s[f];
      (a == null || c !== !!a[f]) && t.classList.toggle(f, c);
    }
  return s;
}
function Ra(t, e, n, r) {
  var a = (
    /** @type {any} */
    t[jr]
  );
  if (a !== e) {
    var s = oo(e);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t[jr] = e;
  }
  return r;
}
const lo = Symbol("is custom element"), fo = Symbol("is html"), uo = es ? "progress" : "PROGRESS";
function co(t, e) {
  var n = Ma(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== uo) || (t.value = e ?? "");
}
function mt(t, e, n, r) {
  var a = Ma(t);
  a[e] !== (a[e] = n) && (e === "loading" && (t[ts] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && vo(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function Ma(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[or] ?? (t[or] = {
      [lo]: t.nodeName.includes("-"),
      [fo]: t.namespaceURI === Ya
    })
  );
}
var Ii = /* @__PURE__ */ new Map();
function vo(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ii.get(e);
  if (n) return n;
  Ii.set(e, n = /* @__PURE__ */ new Set());
  for (var r, a = t, s = Element.prototype; s !== a; ) {
    r = Bi(a);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    a = ni(a);
  }
  return n;
}
function Dr(t, e) {
  return t === e || (t == null ? void 0 : t[hn]) === e;
}
function Oa(t = ii(), e, n, r) {
  var a = (
    /** @type {ComponentContext} */
    Ht.r
  ), s = (
    /** @type {Effect} */
    st
  );
  return da(() => {
    var o, l;
    return ci(() => {
      o = l, l = [], $n(() => {
        Dr(n(...l), t) || (e(t, ...l), o && Dr(n(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = s;
      for (; f !== a && f.parent !== null && f.parent.f & vr; )
        f = f.parent;
      const c = () => {
        l && Dr(n(...l), t) && e(null, ...l);
      }, d = f.teardown;
      f.teardown = () => {
        c(), d == null || d();
      };
    };
  }), t;
}
function Re(t, e, n, r) {
  var a = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, a = /** @type {V} */
  r), a), l;
  l = /** @type {V} */
  t[e], l === void 0 && r !== void 0 && (l = o());
  var f;
  return f = () => {
    var c = (
      /** @type {V} */
      t[e]
    );
    return c === void 0 ? o() : (s = !0, c);
  }, f;
}
const ho = "5";
var Fi;
typeof window < "u" && ((Fi = window.__svelte ?? (window.__svelte = {})).v ?? (Fi.v = /* @__PURE__ */ new Set())).add(ho);
let ln = "";
function Na(t) {
  ln = t;
}
async function oe(t, e) {
  const n = new URL(`${ln}${t}`, window.location.origin);
  for (const [r, a] of Object.entries(e ?? {}))
    a != null && a !== "" && n.searchParams.set(r, String(a));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const La = (t) => oe("/accounts", t), _o = () => oe("/rails"), po = (t) => oe(`/accounts/${encodeURIComponent(t)}`), go = (t) => oe(`/accounts/${encodeURIComponent(t)}/similar`), bo = (t, { offset: e = 0, limit: n = 30, kinds: r = "all" } = {}) => oe(`/accounts/${encodeURIComponent(t)}/feed`, { offset: e, limit: n, kinds: r }), xo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/videos`, { site: e, page: n }), mo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/galleries`, { site: e, page: n }), wo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/images`, { site: e, page: n }), Pa = (t, e) => oe("/videoinfo", { site: t, video_id: e }), yo = (t, e) => oe(`/galleries/${encodeURIComponent(t)}/${encodeURIComponent(e)}`);
async function ko(t, e) {
  try {
    return (await fetch(`${ln}/accounts/${encodeURIComponent(t)}/save`, {
      method: e ? "POST" : "DELETE"
    })).ok;
  } catch {
    return !1;
  }
}
const Eo = (t, e, n) => `${ln}/image?site=${encodeURIComponent(t)}&gallery_id=${encodeURIComponent(e)}&index=${n}`, br = (t, e, n, r, a = !1) => `${ln}/photo?site=${encodeURIComponent(t)}&handle=${encodeURIComponent(e)}&page=${n}&index=${r}${a ? "&thumb=true" : ""}`, Ri = (t, e, n = 0) => `${ln}/stream?site=${encodeURIComponent(t)}&video_id=${encodeURIComponent(e)}&index=${n}`, pi = "/api/v1/rails/x/onlyfans";
async function So() {
  try {
    const t = await fetch(pi);
    return t.ok ? (await t.json()).rails ?? [] : [];
  } catch {
    return [];
  }
}
async function Ao() {
  try {
    return (await fetch(pi, { method: "DELETE" })).ok;
  } catch {
    return !1;
  }
}
async function To(t) {
  try {
    return (await fetch(pi, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(t)
    })).ok;
  } catch {
    return !1;
  }
}
const Co = () => oe("/plugins"), Io = () => oe("/sync/status");
async function Ro(t) {
  const e = new URL(`${ln}/sync`, window.location.origin);
  for (const n of t ?? []) e.searchParams.append("sites", n);
  try {
    const n = await fetch(e, { method: "POST" });
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
var Mo = /* @__PURE__ */ T('<img loading="lazy"/>'), Oo = /* @__PURE__ */ T('<span class="ofx-initials"> </span>');
function Sr(t, e) {
  ae(e, !0);
  let n = Re(e, "src", 3, null), r = Re(e, "alt", 3, ""), a = Re(e, "name", 3, ""), s = Re(e, "onmeasure", 3, null), o = /* @__PURE__ */ j(!1);
  const l = /* @__PURE__ */ bt(() => (a() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var m;
    return ((m = _[0]) == null ? void 0 : m.toUpperCase()) ?? "";
  }).join(""));
  function f(_) {
    const m = _.currentTarget;
    s() && m.naturalWidth && m.naturalHeight && s()(m.naturalWidth / m.naturalHeight);
  }
  var c = Ve(), d = Ct(c);
  {
    var S = (_) => {
      var m = Mo();
      F(() => {
        mt(m, "src", n()), mt(m, "alt", r());
      }), Yr("load", m, f), Yr("error", m, () => b(o, !0)), y(_, m);
    }, h = (_) => {
      var m = Oo(), C = V(m, !0);
      F(() => L(C, i(l))), y(_, m);
    };
    N(d, (_) => {
      n() && !i(o) ? _(S) : _(h, -1);
    });
  }
  y(t, c), se();
}
var No = /* @__PURE__ */ T('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function Da(t, e) {
  ae(e, !0);
  var n = No(), r = P(n), a = P(r);
  Sr(a, {
    get src() {
      return e.account.avatar_url;
    },
    get alt() {
      return e.account.display_name;
    },
    get name() {
      return e.account.display_name;
    }
  });
  var s = w(r, 2), o = V(s, !0), l = w(s, 2), f = V(l);
  F(() => {
    mt(n, "href", `/x/onlyfans/${e.account.handle ?? ""}`), mt(s, "title", e.account.display_name), L(o, e.account.display_name), L(f, `${e.account.source_count ?? ""}
        ${e.account.source_count === 1 ? "site" : "sites"}`);
  }), lt("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), e.navigate(`/x/onlyfans/${e.account.handle}`));
  }), y(t, n), se();
}
qe(["click"]);
var Lo = /* @__PURE__ */ T('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), Po = /* @__PURE__ */ T('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), Do = /* @__PURE__ */ T('<span class="ofx-note"> </span>'), Fo = /* @__PURE__ */ T('<div class="ofx-rail-actions"><!></div>'), Uo = /* @__PURE__ */ T('<div class="ofx-rail-item"><!></div>'), jo = /* @__PURE__ */ T('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function ti(t, e) {
  ae(e, !0);
  let n = Re(e, "note", 3, ""), r = Re(e, "order", 3, null), a = Re(e, "fetcher", 3, null), s = Re(e, "size", 3, 20), o = /* @__PURE__ */ j(qt([])), l = /* @__PURE__ */ j(!0), f = /* @__PURE__ */ j(0);
  function c() {
    b(f, i(f) + 1);
  }
  Be(() => {
    const C = r(), x = a(), I = s();
    i(f);
    let H = !1;
    b(l, !0);
    const D = x ? x() : La({ order: C, limit: I, offset: 0 });
    return Promise.resolve(D).then((B) => {
      H || (b(o, Array.isArray(B) ? B : (B == null ? void 0 : B.items) ?? [], !0), b(l, !1));
    }), () => {
      H = !0;
    };
  });
  var d = { reload: c }, S = Ve(), h = Ct(S);
  {
    var _ = (C) => {
      var x = Po(), I = P(x), H = V(I, !0), D = w(I, 2);
      St(D, 20, () => Array(8), Er, (B, ut) => {
        var K = Lo();
        y(B, K);
      }), F(() => L(H, e.title)), y(C, x);
    }, m = (C) => {
      var x = jo(), I = P(x), H = P(I), D = V(H, !0), B = w(H, 2);
      {
        var ut = (rt) => {
          var X = Do(), R = V(X, !0);
          F(() => L(R, n())), y(rt, X);
        };
        N(B, (rt) => {
          n() && rt(ut);
        });
      }
      var K = w(B, 2);
      {
        var Y = (rt) => {
          var X = Fo(), R = P(X);
          eo(R, () => e.actions), y(rt, X);
        };
        N(K, (rt) => {
          e.actions && rt(Y);
        });
      }
      var $ = w(I, 2);
      St($, 21, () => i(o), (rt) => rt.handle, (rt, X) => {
        var R = Uo(), A = P(R);
        Da(A, {
          get account() {
            return i(X);
          },
          get navigate() {
            return e.navigate;
          }
        }), y(rt, R);
      }), F(() => L(D, e.title)), y(C, x);
    };
    N(h, (C) => {
      i(l) ? C(_) : i(o).length && C(m, 1);
    });
  }
  return y(t, S), se(d);
}
var Ho = /* @__PURE__ */ T('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), Bo = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), zo = /* @__PURE__ */ T(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Vo = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function qo(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j(qt([]));
  async function o() {
    const x = await So(), I = new Map(e.rails.map((B) => [B.key, B])), H = /* @__PURE__ */ new Set(), D = [];
    for (const B of x)
      H.add(B.key), I.has(B.key) && D.push({ ...B });
    for (const B of e.rails)
      H.has(B.key) || D.push({ key: B.key, enabled: !0 });
    b(s, D, !0), b(a, null), b(n, !0);
  }
  function l(x, I) {
    const H = x + I;
    if (H < 0 || H >= i(s).length) return;
    const D = [...i(s)];
    [D[x], D[H]] = [D[H], D[x]], b(s, D, !0);
  }
  function f(x) {
    b(s, i(s).map((I, H) => H === x ? { ...I, enabled: !I.enabled } : I), !0);
  }
  function c(x) {
    var I;
    return ((I = e.rails.find((H) => H.key === x)) == null ? void 0 : I.title) ?? x;
  }
  async function d() {
    var x;
    b(r, !0), b(a, null), await Ao() ? (await ((x = e.onsaved) == null ? void 0 : x.call(e)), b(n, !1)) : b(a, "Could not reset."), b(r, !1);
  }
  async function S() {
    var x;
    b(r, !0), b(a, null), await To(i(s)) ? (await ((x = e.onsaved) == null ? void 0 : x.call(e)), b(n, !1)) : b(a, "Could not save. Your changes are still here."), b(r, !1);
  }
  var h = Vo(), _ = Ct(h), m = w(_, 2);
  {
    var C = (x) => {
      var I = zo(), H = P(I), D = w(P(H), 2), B = w(H, 4);
      St(B, 23, () => i(s), (A) => A.key, (A, U, Q) => {
        var ft = Ho();
        let q;
        var p = P(ft), k = V(p, !0), v = w(p, 2), g = V(v, !0), E = w(v, 2), O = w(E, 2);
        F(
          (M, G, ot, xt) => {
            q = Se(ft, 1, "", null, q, { "ofx-off": !i(U).enabled }), L(k, M), mt(v, "aria-label", G), L(g, i(U).enabled ? "Shown" : "Hidden"), E.disabled = i(Q) === 0, mt(E, "aria-label", ot), O.disabled = i(Q) === i(s).length - 1, mt(O, "aria-label", xt);
          },
          [
            () => c(i(U).key),
            () => i(U).enabled ? `Hide ${c(i(U).key)}` : `Show ${c(i(U).key)}`,
            () => `Move ${c(i(U).key)} up`,
            () => `Move ${c(i(U).key)} down`
          ]
        ), lt("click", v, () => f(i(Q))), lt("click", E, () => l(i(Q), -1)), lt("click", O, () => l(i(Q), 1)), y(A, ft);
      });
      var ut = w(B, 2);
      {
        var K = (A) => {
          var U = Bo(), Q = V(U, !0);
          F(() => L(Q, i(a))), y(A, U);
        };
        N(ut, (A) => {
          i(a) && A(K);
        });
      }
      var Y = w(ut, 2), $ = P(Y), rt = w($, 2), X = w(rt, 2), R = V(X, !0);
      F(() => {
        $.disabled = i(r), X.disabled = i(r), L(R, i(r) ? "Saving…" : "Save");
      }), lt("click", D, () => b(n, !1)), lt("click", $, d), lt("click", rt, () => b(n, !1)), lt("click", X, S), y(x, I);
    };
    N(m, (x) => {
      i(n) && x(C);
    });
  }
  lt("click", _, o), y(t, h), se();
}
qe(["click"]);
var Go = /* @__PURE__ */ T(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Yo = /* @__PURE__ */ T('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Ko = /* @__PURE__ */ T('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Wo = /* @__PURE__ */ T('<div class="ofx-sentinel"></div>'), Zo = /* @__PURE__ */ T('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Jo = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Xo = /* @__PURE__ */ T('<div class="ofx-controls"><!></div> <!> <!>', 1), Qo = /* @__PURE__ */ T('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function $o(t, e) {
  ae(e, !0);
  const n = 60, r = 20;
  let a = /* @__PURE__ */ j(qt([])), s = /* @__PURE__ */ j(0), o = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(""), S, h = /* @__PURE__ */ j(null), _ = /* @__PURE__ */ j(qt([]));
  async function m() {
    const E = await _o();
    b(_, Array.isArray(E) ? E : [], !0);
  }
  Be(() => {
    m();
  });
  const C = /* @__PURE__ */ bt(() => i(f).trim()), x = /* @__PURE__ */ bt(() => i(C) !== "" || i(c)), I = /* @__PURE__ */ bt(() => i(a).length < i(s));
  async function H(E, O) {
    b(o, !0);
    const M = await La({ search: E, limit: n, offset: O });
    if (E !== i(f).trim()) {
      b(o, !1);
      return;
    }
    M ? (b(a, O === 0 ? M.items : [...i(a), ...M.items], !0), b(s, M.total, !0), b(d, E, !0), b(l, !1)) : b(l, !0), b(o, !1);
  }
  function D(E) {
    b(f, E.currentTarget.value, !0), clearTimeout(S), S = setTimeout(() => H(i(f).trim(), 0), 250);
  }
  function B() {
    b(c, !0), H("", 0);
  }
  function ut() {
    b(c, !1), b(f, ""), b(a, [], !0), b(s, 0), b(d, "");
  }
  function K(E) {
    const O = new IntersectionObserver(
      (M) => {
        var G;
        (G = M[0]) != null && G.isIntersecting && i(I) && !i(o) && H(i(d), i(a).length);
      },
      { rootMargin: "600px" }
    );
    return O.observe(E), { destroy: () => O.disconnect() };
  }
  var Y = Qo(), $ = w(Ct(Y), 2), rt = P($);
  {
    var X = (E) => {
      var O = je();
      F(
        (M, G) => L(O, `${M ?? ""} of ${G ?? ""}
        ${i(d) ? `matching “${i(d)}”` : "accounts"}`),
        [
          () => i(a).length.toLocaleString(),
          () => i(s).toLocaleString()
        ]
      ), y(E, O);
    }, R = (E) => {
      var O = je("loading…");
      y(E, O);
    }, A = (E) => {
      var O = je("nothing found");
      y(E, O);
    }, U = (E) => {
      var O = je("performers, gathered from the archive sites");
      y(E, O);
    };
    N(rt, (E) => {
      i(x) && i(s) ? E(X) : i(x) && i(o) ? E(R, 1) : i(x) ? E(A, 2) : E(U, -1);
    });
  }
  var Q = w($, 2), ft = w(P(Q), 2), q = w(Q, 2);
  {
    var p = (E) => {
      var O = Go();
      y(E, O);
    };
    N(q, (E) => {
      i(l) && E(p);
    });
  }
  var k = w(q, 2);
  {
    var v = (E) => {
      var O = Zo(), M = Ct(O);
      {
        var G = (et) => {
          var vt = Yo(), kt = V(vt);
          lt("click", kt, ut), y(et, vt);
        };
        N(M, (et) => {
          i(c) && !i(C) && et(G);
        });
      }
      var ot = w(M, 2), xt = P(ot);
      St(xt, 17, () => i(a), (et) => et.handle, (et, vt) => {
        Da(et, {
          get account() {
            return i(vt);
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var gt = w(xt, 2);
      {
        var Lt = (et) => {
          var vt = Ve(), kt = Ct(vt);
          St(kt, 16, () => Array(12), Er, (Ot, le) => {
            var Le = Ko();
            y(Ot, Le);
          }), y(et, vt);
        };
        N(gt, (et) => {
          i(o) && et(Lt);
        });
      }
      var Mt = w(ot, 2);
      {
        var Bt = (et) => {
          var vt = Wo();
          _i(vt, (kt) => K == null ? void 0 : K(kt)), y(et, vt);
        };
        N(Mt, (et) => {
          i(I) && et(Bt);
        });
      }
      y(E, O);
    }, g = (E) => {
      var O = Xo(), M = Ct(O), G = P(M);
      qo(G, {
        get rails() {
          return i(_);
        },
        onsaved: m
      });
      var ot = w(M, 2);
      St(ot, 17, () => i(_).filter((gt) => gt.order !== "random"), (gt) => gt.order, (gt, Lt) => {
        ti(gt, {
          get title() {
            return i(Lt).title;
          },
          get note() {
            return i(Lt).note;
          },
          get order() {
            return i(Lt).order;
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var xt = w(ot, 2);
      {
        const gt = (Mt) => {
          var Bt = Jo(), et = Ct(Bt), vt = w(et, 2);
          lt("click", et, () => {
            var kt;
            return (kt = i(h)) == null ? void 0 : kt.reload();
          }), lt("click", vt, B), y(Mt, Bt);
        };
        let Lt = /* @__PURE__ */ bt(() => {
          var Mt;
          return ((Mt = i(_).find((Bt) => Bt.order === "random")) == null ? void 0 : Mt.title) ?? "Something else";
        });
        Oa(
          ti(xt, {
            get title() {
              return i(Lt);
            },
            order: "random",
            size: r,
            get navigate() {
              return e.navigate;
            },
            actions: gt,
            $$slots: { actions: !0 }
          }),
          (Mt) => b(h, Mt, !0),
          () => i(h)
        );
      }
      y(E, O);
    };
    N(k, (E) => {
      i(x) ? E(v) : E(g, -1);
    });
  }
  F(() => co(ft, i(f))), lt("input", ft, D), y(t, Y), se();
}
qe(["input", "click"]);
var tl = /* @__PURE__ */ T('<p class="ofx-note ofx-feed-status"><!> <!></p>'), el = /* @__PURE__ */ T('<p class="ofx-error">The feed could not be loaded.</p>'), nl = /* @__PURE__ */ T(`<p class="ofx-note">None of this performer's sites has anything here.</p>`), Mi = /* @__PURE__ */ T('<span class="ofx-badge"> </span>'), rl = /* @__PURE__ */ T('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), il = /* @__PURE__ */ T('<p class="ofx-caption-title"> </p>'), al = /* @__PURE__ */ T('<p class="ofx-caption-text"> </p>'), sl = /* @__PURE__ */ T('<button type="button"> </button>'), ol = /* @__PURE__ */ T('<span class="ofx-copy-site"> </span>'), ll = /* @__PURE__ */ T('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <div class="ofx-caption"><!> <!> <p class="ofx-caption-when"><!> <!></p></div></article>'), fl = /* @__PURE__ */ T('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), ul = /* @__PURE__ */ T('<div class="ofx-feed-sentinel" aria-hidden="true"></div>'), cl = /* @__PURE__ */ T('<section class="ofx-section"><!> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function vl(t, e) {
  ae(e, !0);
  const n = 30;
  let r = /* @__PURE__ */ j(qt([])), a = /* @__PURE__ */ j(0), s = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(qt([])), c = /* @__PURE__ */ j(null);
  async function d() {
    if (i(o) || i(s)) return;
    b(o, !0);
    const v = _, g = await bo(e.handle, { offset: i(a), limit: n, kinds: e.kind });
    if (v !== _) return;
    if (!g) {
      b(l, i(r).length === 0), b(o, !1);
      return;
    }
    let E = i(r);
    for (const O of g.items) {
      const M = S(O);
      E = O.late ? h(E, M) : [...E, M];
    }
    b(r, E, !0), b(a, g.next_offset, !0), b(f, g.sources, !0), b(s, g.done, !0), b(o, !1), requestAnimationFrame(() => {
      v !== _ || i(s) || !i(c) || i(c).getBoundingClientRect().top < window.innerHeight + 800 && d();
    });
  }
  function S(v) {
    return {
      ...v,
      // Photos are addressed by position on their site's page and served
      // through the proxy, at grid size for the tile.
      thumb: v.kind === "photo" ? br(v.site, e.handle, v.page, v.index, !0) : v.thumbnail,
      full: v.kind === "photo" ? br(v.site, e.handle, v.page, v.index) : null,
      aspect: v.kind === "video" ? 16 / 9 : 3 / 4,
      text: v.description
    };
  }
  function h(v, g) {
    if (!g.posted_at) return [...v, g];
    const E = v.findIndex((O) => O.posted_at && O.posted_at < g.posted_at);
    return E < 0 ? [...v, g] : [...v.slice(0, E), g, ...v.slice(E)];
  }
  let _ = 0;
  const m = /* @__PURE__ */ bt(() => `${e.handle}
${e.kind}`);
  Be(() => {
    i(m), $n(() => {
      _++, b(r, [], !0), b(a, 0), b(s, !1), b(l, !1), b(o, !1), b(f, [], !0), d();
    });
  }), Be(() => {
    if (!i(c)) return;
    const v = new IntersectionObserver(
      (g) => {
        g.some((E) => E.isIntersecting) && d();
      },
      { rootMargin: "800px" }
    );
    return v.observe(i(c)), () => v.disconnect();
  });
  function C(v, g) {
    if (!g.text_site || g.text) return;
    const E = new IntersectionObserver((O) => {
      O.some((M) => M.isIntersecting) && (E.disconnect(), Pa(g.text_site, g.text_id).then((M) => {
        M != null && M.description && b(r, i(r).map((G) => G.key === g.key ? { ...G, text: M.description } : G), !0);
      }));
    });
    return E.observe(v), { destroy: () => E.disconnect() };
  }
  function x(v, g) {
    !g || !Number.isFinite(g) || b(r, i(r).map((E) => E.key === v ? { ...E, aspect: g } : E), !0);
  }
  function I(v, g) {
    return {
      site: (g == null ? void 0 : g.site) ?? v.site,
      video_id: (g == null ? void 0 : g.id) ?? v.id,
      title: v.title,
      thumbnail: v.thumbnail,
      duration: (g == null ? void 0 : g.duration) ?? v.duration,
      resolution: (g == null ? void 0 : g.resolution) ?? v.resolution
    };
  }
  function H(v) {
    v.kind === "video" ? e.onplay(I(v)) : v.kind === "photo" ? e.onphoto(v) : e.ongallery({ site: v.site, gallery_id: v.id, title: v.title });
  }
  function D(v) {
    if (!v) return null;
    const g = Math.floor(v / 3600), E = Math.floor(v % 3600 / 60), O = String(v % 60).padStart(2, "0");
    return g ? `${g}:${String(E).padStart(2, "0")}:${O}` : `${E}:${O}`;
  }
  function B(v) {
    if (!v.posted_at) return null;
    if (v.approximate && v.posted_label && /ago|yesterday|today/i.test(v.posted_label))
      return v.posted_label;
    const g = new Date(v.posted_at).toLocaleDateString(void 0, { day: "numeric", month: "short", year: "numeric" });
    return v.approximate ? `~${g}` : g;
  }
  const ut = /* @__PURE__ */ bt(() => i(f).filter((v) => v.state === "loading").map((v) => v.site)), K = /* @__PURE__ */ bt(() => i(f).filter((v) => v.state === "failed").map((v) => v.site));
  var Y = cl(), $ = P(Y);
  {
    var rt = (v) => {
      var g = tl(), E = P(g);
      {
        var O = (ot) => {
          var xt = je();
          F((gt) => L(xt, `Still loading: ${gt ?? ""}.`), [() => i(ut).join(", ")]), y(ot, xt);
        };
        N(E, (ot) => {
          i(ut).length && ot(O);
        });
      }
      var M = w(E, 2);
      {
        var G = (ot) => {
          var xt = je();
          F((gt) => L(xt, `Not answering: ${gt ?? ""}.`), [() => i(K).join(", ")]), y(ot, xt);
        };
        N(M, (ot) => {
          i(K).length && ot(G);
        });
      }
      y(v, g);
    };
    N($, (v) => {
      (i(ut).length || i(K).length) && v(rt);
    });
  }
  var X = w($, 2);
  {
    var R = (v) => {
      var g = el();
      y(v, g);
    }, A = (v) => {
      var g = nl();
      y(v, g);
    };
    N(X, (v) => {
      i(l) ? v(R) : i(s) && i(r).length === 0 && v(A, 1);
    });
  }
  var U = w(X, 2), Q = P(U);
  St(Q, 17, () => i(r), (v) => v.key, (v, g) => {
    var E = ll(), O = P(E), M = P(O), G = P(M);
    Sr(G, {
      get src() {
        return i(g).thumb;
      },
      get alt() {
        return i(g).title;
      },
      get name() {
        return i(g).title;
      },
      onmeasure: (it) => x(i(g).key, it)
    });
    var ot = w(G, 2);
    {
      var xt = (it) => {
        var _t = Mi(), Dt = V(_t, !0);
        F((Pe) => L(Dt, Pe), [() => D(i(g).duration)]), y(it, _t);
      }, gt = /* @__PURE__ */ bt(() => i(g).kind === "video" && D(i(g).duration)), Lt = (it) => {
        var _t = Mi(), Dt = V(_t, !0);
        F(() => L(Dt, i(g).image_count)), y(it, _t);
      };
      N(ot, (it) => {
        i(gt) ? it(xt) : i(g).kind === "gallery" && i(g).image_count && it(Lt, 1);
      });
    }
    var Mt = w(ot, 2);
    {
      var Bt = (it) => {
        var _t = rl();
        y(it, _t);
      };
      N(Mt, (it) => {
        i(g).kind === "video" && it(Bt);
      });
    }
    var et = w(O, 2), vt = P(et);
    {
      var kt = (it) => {
        var _t = il(), Dt = V(_t, !0);
        F(() => L(Dt, i(g).title)), y(it, _t);
      };
      N(vt, (it) => {
        i(g).title && it(kt);
      });
    }
    var Ot = w(vt, 2);
    {
      var le = (it) => {
        var _t = al(), Dt = V(_t, !0);
        F(() => L(Dt, i(g).text)), y(it, _t);
      };
      N(Ot, (it) => {
        i(g).text && it(le);
      });
    }
    var Le = w(Ot, 2), Cn = P(Le);
    {
      var Ar = (it) => {
        var _t = je();
        F((Dt) => L(_t, `${Dt ?? ""} ·`), [() => B(i(g))]), y(it, _t);
      }, tr = /* @__PURE__ */ bt(() => B(i(g)));
      N(Cn, (it) => {
        i(tr) && it(Ar);
      });
    }
    var Tr = w(Cn, 2);
    {
      var Cr = (it) => {
        var _t = Ve(), Dt = Ct(_t);
        St(Dt, 17, () => i(g).copies, (Pe) => `${Pe.site}:${Pe.id}`, (Pe, Ee) => {
          var Ge = sl();
          let In;
          var nr = V(Ge, !0);
          F(
            (rr) => {
              In = Se(Ge, 1, "ofx-copy", null, In, {
                "ofx-on": i(Ee).site === i(g).site && i(Ee).id === i(g).id
              }), mt(Ge, "title", `Play the ${i(Ee).site ?? ""} copy${rr ?? ""}`), L(nr, i(Ee).site);
            },
            [
              () => i(Ee).duration ? ` (${D(i(Ee).duration)})` : ""
            ]
          ), lt("click", Ge, () => e.onplay(I(i(g), i(Ee)))), y(Pe, Ge);
        }), y(it, _t);
      }, er = (it) => {
        var _t = ol(), Dt = V(_t, !0);
        F(() => L(Dt, i(g).site)), y(it, _t);
      };
      N(Tr, (it) => {
        i(g).copies.length > 1 ? it(Cr) : it(er, -1);
      });
    }
    _i(E, (it, _t) => C == null ? void 0 : C(it, _t), () => i(g)), F(() => Ra(E, `--ofx-ar: ${i(g).aspect ?? ""}; flex-grow: ${i(g).aspect ?? ""}; flex-basis: ${i(g).aspect * 220}px`)), lt("click", O, () => H(i(g))), y(v, E);
  });
  var ft = w(Q, 2);
  {
    var q = (v) => {
      var g = Ve(), E = Ct(g);
      St(E, 16, () => Array(4), Er, (O, M) => {
        var G = fl();
        y(O, G);
      }), y(v, g);
    };
    N(ft, (v) => {
      i(o) && v(q);
    });
  }
  var p = w(U, 2);
  {
    var k = (v) => {
      var g = ul();
      Oa(g, (E) => b(c, E), () => i(c)), y(v, g);
    };
    N(p, (v) => {
      !i(s) && !i(l) && v(k);
    });
  }
  y(t, Y), se();
}
qe(["click"]);
var dl = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), Oi = /* @__PURE__ */ T('<p class="ofx-note"> </p>'), hl = /* @__PURE__ */ T('<span class="ofx-badge"> </span>'), _l = /* @__PURE__ */ T('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), pl = /* @__PURE__ */ T('<p class="ofx-caption-title"> </p>'), gl = /* @__PURE__ */ T('<p class="ofx-caption-text"> </p>'), bl = /* @__PURE__ */ T('<p class="ofx-caption-when"> </p>'), xl = /* @__PURE__ */ T('<div class="ofx-caption"><!> <!> <!></div>'), ml = /* @__PURE__ */ T('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), wl = /* @__PURE__ */ T('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), yl = /* @__PURE__ */ T('<button class="ofx-btn ofx-outline" type="button"> </button>'), kl = /* @__PURE__ */ T('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function El(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ j(qt([])), r = /* @__PURE__ */ j(0), a = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1);
  async function l() {
    if (i(a) || i(s)) return;
    b(a, !0);
    const R = i(r) + 1, [A, U, Q] = await Promise.all([
      xo(e.handle, e.site, R),
      mo(e.handle, e.site, R),
      wo(e.handle, e.site, R)
    ]);
    if (A === null && U === null && Q === null)
      b(o, !0);
    else {
      const ft = [
        ...(A ?? []).map((q) => ({
          kind: "video",
          key: `v:${q.video_id}`,
          title: q.title,
          thumbnail: q.thumbnail,
          badge: _(q.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: q.posted_at,
          text: q.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: q.has_text,
          item: q
        })),
        ...(U ?? []).map((q) => ({
          kind: "image",
          key: `g:${q.gallery_id}`,
          title: q.title,
          thumbnail: q.cover,
          badge: q.image_count ? `${q.image_count}` : null,
          aspect: 0.75,
          posted: q.posted,
          item: q
        })),
        ...(Q ?? []).map((q) => ({
          kind: "image",
          key: `p:${q.image_id ?? `${R}:${q.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: br(e.site, e.handle, R, q.index, !0),
          full: br(e.site, e.handle, R, q.index),
          badge: null,
          aspect: 0.75,
          posted: q.posted_at,
          item: q
        }))
      ];
      b(n, [...i(n), ...ft], !0), b(r, R), ft.length === 0 && b(s, !0);
    }
    b(a, !1);
  }
  const f = /* @__PURE__ */ bt(() => i(n).filter((R) => e.kinds.has(R.kind))), c = /* @__PURE__ */ bt(() => `${e.handle}
${e.site}`);
  Be(() => {
    i(c), $n(() => {
      b(n, [], !0), b(r, 0), b(s, !1), b(o, !1), b(a, !1), l();
    });
  });
  function d(R, A) {
    !A || !Number.isFinite(A) || b(n, i(n).map((U) => U.key === R ? { ...U, aspect: A } : U), !0);
  }
  function S(R, A) {
    if (!A.hasText || A.text) return;
    const U = new IntersectionObserver((Q) => {
      Q.some((ft) => ft.isIntersecting) && (U.disconnect(), Pa(e.site, A.item.video_id).then((ft) => {
        ft && b(
          n,
          i(n).map((q) => q.key === A.key ? {
            ...q,
            text: ft.description,
            posted: q.posted ?? ft.posted_at
          } : q),
          !0
        );
      }));
    });
    return U.observe(R), { destroy: () => U.disconnect() };
  }
  function h(R) {
    R.kind === "video" ? e.onplay(R.item) : R.full ? e.onphoto(R) : e.ongallery(R.item);
  }
  function _(R) {
    return R ? `${Math.floor(R / 60)}:${String(R % 60).padStart(2, "0")}` : null;
  }
  var m = kl(), C = P(m), x = V(C, !0), I = w(C, 2);
  {
    var H = (R) => {
      var A = dl(), U = V(A);
      F(() => L(U, `${e.site ?? ""} did not answer.`)), y(R, A);
    }, D = (R) => {
      var A = Oi(), U = V(A);
      F(() => L(U, `Nothing here on ${e.site ?? ""}.`)), y(R, A);
    }, B = (R) => {
      var A = Oi(), U = V(A);
      F((Q) => L(U, `${e.site ?? ""} has no ${Q ?? ""} for this performer.`), [() => [...e.kinds].join(" or ")]), y(R, A);
    };
    N(I, (R) => {
      i(o) ? R(H) : !i(a) && i(n).length === 0 ? R(D, 1) : !i(a) && i(f).length === 0 && R(B, 2);
    });
  }
  var ut = w(I, 2), K = P(ut);
  St(K, 17, () => i(f), (R) => R.key, (R, A) => {
    var U = ml(), Q = P(U), ft = P(Q), q = P(ft);
    Sr(q, {
      get src() {
        return i(A).thumbnail;
      },
      get alt() {
        return i(A).title;
      },
      get name() {
        return i(A).title;
      },
      onmeasure: (M) => d(i(A).key, M)
    });
    var p = w(q, 2);
    {
      var k = (M) => {
        var G = hl(), ot = V(G, !0);
        F(() => L(ot, i(A).badge)), y(M, G);
      };
      N(p, (M) => {
        i(A).badge && M(k);
      });
    }
    var v = w(p, 2);
    {
      var g = (M) => {
        var G = _l();
        y(M, G);
      };
      N(v, (M) => {
        i(A).kind === "video" && M(g);
      });
    }
    var E = w(Q, 2);
    {
      var O = (M) => {
        var G = xl(), ot = P(G);
        {
          var xt = (et) => {
            var vt = pl(), kt = V(vt, !0);
            F(() => L(kt, i(A).title)), y(et, vt);
          };
          N(ot, (et) => {
            i(A).title && et(xt);
          });
        }
        var gt = w(ot, 2);
        {
          var Lt = (et) => {
            var vt = gl(), kt = V(vt, !0);
            F(() => L(kt, i(A).text)), y(et, vt);
          };
          N(gt, (et) => {
            i(A).text && et(Lt);
          });
        }
        var Mt = w(gt, 2);
        {
          var Bt = (et) => {
            var vt = bl(), kt = V(vt, !0);
            F(() => L(kt, i(A).posted)), y(et, vt);
          };
          N(Mt, (et) => {
            i(A).posted && et(Bt);
          });
        }
        y(M, G);
      };
      N(E, (M) => {
        (i(A).title || i(A).text || i(A).posted) && M(O);
      });
    }
    _i(U, (M, G) => S == null ? void 0 : S(M, G), () => i(A)), F(() => Ra(U, `--ofx-ar: ${i(A).aspect ?? ""}; flex-grow: ${i(A).aspect ?? ""}; flex-basis: ${i(A).aspect * 220}px`)), lt("click", Q, () => h(i(A))), y(R, U);
  });
  var Y = w(K, 2);
  {
    var $ = (R) => {
      var A = Ve(), U = Ct(A);
      St(U, 16, () => Array(4), Er, (Q, ft) => {
        var q = wl();
        y(Q, q);
      }), y(R, A);
    };
    N(Y, (R) => {
      i(a) && R($);
    });
  }
  var rt = w(ut, 2);
  {
    var X = (R) => {
      var A = yl(), U = V(A, !0);
      F(() => {
        A.disabled = i(a), L(U, i(a) ? "Loading…" : "Load more");
      }), lt("click", A, l), y(R, A);
    };
    N(rt, (R) => {
      !i(s) && !i(o) && i(n).length > 0 && R(X);
    });
  }
  F(() => L(x, e.site)), y(t, m), se();
}
qe(["click"]);
async function Sl() {
  try {
    const t = await fetch("/api/v1/vpn/status");
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function Al(t, e) {
  const n = t === "scraping" ? "vpn.route_scraping" : "vpn.route_streaming";
  try {
    return (await fetch(`/api/v1/settings/set/${n}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ [n]: e })
    })).ok;
  } catch {
    return !1;
  }
}
async function Tl(t) {
  try {
    const e = await fetch("/api/v1/vpn/exit-node", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ node_id: t })
    });
    return e.ok ? await e.json() : null;
  } catch {
    return null;
  }
}
var Cl = /* @__PURE__ */ T('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), Il = /* @__PURE__ */ T('<span class="tbx-dim">offline</span>'), Rl = /* @__PURE__ */ T('<li><button type="button" role="option"> <!></button></li>'), Ml = /* @__PURE__ */ T('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), Ol = /* @__PURE__ */ T('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), Nl = /* @__PURE__ */ T('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), Ll = /* @__PURE__ */ T('<p class="tbx-vpn-note"> </p>'), Pl = /* @__PURE__ */ T('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function Dl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(null), a = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(null);
  async function o() {
    b(n, await Sl(), !0);
  }
  Be(() => {
    o();
  });
  async function l(h) {
    var m;
    const _ = h === "scraping" ? !i(n).route_scraping : !i(n).route_streaming;
    b(r, h, !0), b(s, null), await Al(h, _) && (await o(), await ((m = e.onchange) == null ? void 0 : m.call(e))), b(r, null);
  }
  async function f(h) {
    var m;
    b(r, "exit"), b(a, !1);
    const _ = await Tl(h);
    _ && (b(n, _, !0), b(s, _.detail ?? null, !0), await ((m = e.onchange) == null ? void 0 : m.call(e))), b(r, null);
  }
  var c = Ve(), d = Ct(c);
  {
    var S = (h) => {
      var _ = Pl(), m = Ct(_), C = w(P(m), 2);
      St(
        C,
        17,
        () => [
          ["scraping", "Scraping", i(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            i(n).route_streaming
          ]
        ],
        ([K, Y, $]) => K,
        (K, Y) => {
          var $ = /* @__PURE__ */ bt(() => Un(i(Y), 3));
          let rt = () => i($)[0], X = () => i($)[1], R = () => i($)[2];
          var A = Cl();
          let U;
          var Q = w(P(A), 2), ft = V(Q, !0);
          F(() => {
            U = Se(A, 1, "tbx-toggle", null, U, { "tbx-toggle-on": R() }), mt(A, "aria-checked", R()), A.disabled = i(r) !== null, L(ft, X());
          }), lt("click", A, () => l(rt())), y(K, A);
        }
      );
      var x = w(C, 2);
      {
        var I = (K) => {
          var Y = Ol(), $ = P(Y), rt = P($), X = w($, 2);
          {
            var R = (A) => {
              var U = Ml(), Q = P(U), ft = V(Q), q = w(Q, 2);
              St(q, 17, () => i(n).exit_nodes, (p) => p.id, (p, k) => {
                var v = Rl(), g = P(v), E = P(g), O = w(E);
                {
                  var M = (G) => {
                    var ot = Il();
                    y(G, ot);
                  };
                  N(O, (G) => {
                    i(k).online || G(M);
                  });
                }
                F(() => {
                  mt(g, "aria-selected", i(k).active), g.disabled = !i(k).online, L(E, `${i(k).name ?? ""}${i(k).country ? ` · ${i(k).country}` : ""} `);
                }), lt("click", g, () => f(i(k).id)), y(p, v);
              }), F(() => mt(ft, "aria-selected", !i(n).exit_node)), lt("click", ft, () => f(null)), y(A, U);
            };
            N(X, (A) => {
              i(a) && A(R);
            });
          }
          F(() => {
            mt($, "aria-expanded", i(a)), $.disabled = i(r) !== null, L(rt, `${i(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), lt("click", $, () => b(a, !i(a))), y(K, Y);
        };
        N(x, (K) => {
          var Y;
          (Y = i(n).exit_nodes) != null && Y.length && K(I);
        });
      }
      var H = w(x, 2);
      {
        var D = (K) => {
          var Y = Nl();
          y(K, Y);
        };
        N(H, (K) => {
          !i(n).connected && (i(n).route_scraping || i(n).route_streaming) && K(D);
        });
      }
      var B = w(m, 2);
      {
        var ut = (K) => {
          var Y = Ll(), $ = V(Y, !0);
          F(() => L($, i(s))), y(K, Y);
        };
        N(B, (K) => {
          i(s) && K(ut);
        });
      }
      y(h, _);
    };
    N(d, (h) => {
      var _;
      (_ = i(n)) != null && _.enabled && h(S);
    });
  }
  y(t, c), se();
}
qe(["click"]);
var Fl = /* @__PURE__ */ T('<p class="ofx-error">That account could not be loaded.</p>'), Ul = /* @__PURE__ */ T('<div class="ofx-banner"><img alt=""/></div>'), jl = /* @__PURE__ */ qs('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Hl = /* @__PURE__ */ T('<p> </p> <button class="ofx-more" type="button"> </button>', 1), Bl = /* @__PURE__ */ T("<span><b> </b> </span>"), zl = /* @__PURE__ */ T('<div class="ofx-stats"></div>'), Vl = /* @__PURE__ */ T("<span> </span>"), Ni = /* @__PURE__ */ T('<a target="_blank" rel="noreferrer noopener"> </a>'), Li = /* @__PURE__ */ T('<button type="button" role="tab"> </button>'), ql = /* @__PURE__ */ T('<span class="ofx-count"> </span>'), Gl = /* @__PURE__ */ T('<button type="button"> <!></button>'), Yl = /* @__PURE__ */ T('<div class="ofx-controls"><span class="ofx-note">Load from:</span> <!></div>'), Kl = /* @__PURE__ */ T('<p class="ofx-error"> </p>'), Wl = /* @__PURE__ */ T(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Zl = /* @__PURE__ */ T("<!> <!>", 1), Jl = /* @__PURE__ */ T('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <button type="button"> </button> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><div class="ofx-tabs" role="tablist" aria-label="View"></div> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Xl = /* @__PURE__ */ T('<p class="ofx-note">Loading…</p>'), Ql = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), $l = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), tf = /* @__PURE__ */ T('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), ef = /* @__PURE__ */ T('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), nf = /* @__PURE__ */ T("<!> <!> <!> <!>", 1);
function rf(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j("all");
  const s = /* @__PURE__ */ bt(() => i(a) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([i(a)]));
  let o = /* @__PURE__ */ j(qt(/* @__PURE__ */ new Set())), l = /* @__PURE__ */ j("feed"), f = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(null), d = /* @__PURE__ */ j(null), S = /* @__PURE__ */ j(null), h = /* @__PURE__ */ j(null);
  Be(() => {
    po(e.handle).then((p) => {
      p ? b(n, p, !0) : b(r, !0);
    });
  });
  const _ = /* @__PURE__ */ bt(() => {
    var p, k, v, g;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (p = i(n)) == null ? void 0 : p.posts_count],
      ["photos", (k = i(n)) == null ? void 0 : k.photos_count],
      ["videos", (v = i(n)) == null ? void 0 : v.videos_count],
      ["likes", (g = i(n)) == null ? void 0 : g.likes_count]
    ].filter(([, E]) => E != null);
  });
  let m = /* @__PURE__ */ j(!1);
  async function C() {
    if (!i(n) || i(m)) return;
    b(m, !0);
    const p = !i(n).saved;
    await ko(i(n).handle, p) && b(n, { ...i(n), saved: p }, !0), b(m, !1);
  }
  function x(p) {
    const k = new Set(i(o));
    k.has(p) ? k.delete(p) : k.add(p), b(o, k, !0);
  }
  function I(p) {
    var k, v;
    if (!((k = e.host) != null && k.play)) {
      b(c, p, !0);
      return;
    }
    e.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: Ri(p.site, p.video_id),
      title: p.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: p.thumbnail ?? void 0,
      site: p.site,
      videoId: p.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((v = i(n)) == null ? void 0 : v.display_name) || e.handle,
      duration: p.duration,
      resolution: p.resolution,
      size: p.size
    });
  }
  function H(p) {
    b(h, null), b(S, p, !0);
  }
  async function D(p) {
    b(h, null);
    const k = await yo(p.site, p.gallery_id);
    if (!k) {
      b(h, "Could not open that gallery");
      return;
    }
    if (k.length === 0) {
      b(h, "That site served no images for this gallery");
      return;
    }
    b(d, { gallery: p, count: k.length, index: 0 }, !0);
  }
  function B(p) {
    i(d) && b(
      d,
      {
        ...i(d),
        index: (i(d).index + p + i(d).count) % i(d).count
      },
      !0
    );
  }
  function ut(p) {
    if (p.key === "Escape") {
      b(c, null), b(d, null), b(S, null);
      return;
    }
    i(d) && (p.key === "ArrowRight" && B(1), p.key === "ArrowLeft" && B(-1));
  }
  var K = nf();
  Yr("keydown", Vr, ut);
  var Y = Ct(K);
  {
    var $ = (p) => {
      var k = Fl();
      y(p, k);
    }, rt = (p) => {
      var k = Jl(), v = Ct(k), g = P(v);
      {
        var E = (z) => {
          var tt = Ul(), ht = V(tt);
          F(() => mt(ht, "src", i(n).header_url)), y(z, tt);
        };
        N(g, (z) => {
          i(n).header_url && z(E);
        });
      }
      var O = w(g, 2), M = P(O);
      let G;
      var ot = P(M);
      Sr(ot, {
        get src() {
          return i(n).avatar_url;
        },
        get alt() {
          return i(n).display_name;
        },
        get name() {
          return i(n).display_name;
        }
      });
      var xt = w(M, 2), gt = P(xt), Lt = P(gt), Mt = w(Lt);
      {
        var Bt = (z) => {
          var tt = jl();
          y(z, tt);
        };
        N(Mt, (z) => {
          i(n).is_verified && z(Bt);
        });
      }
      var et = w(gt, 2), vt = P(et), kt = w(vt, 2), Ot = w(et, 2);
      let le;
      var Le = V(Ot, !0), Cn = w(Ot, 2);
      {
        var Ar = (z) => {
          var tt = Hl(), ht = Ct(tt);
          let yt;
          var It = V(ht, !0), ct = w(ht, 2), Pt = V(ct, !0);
          F(() => {
            yt = Se(ht, 1, "ofx-bio", null, yt, { "ofx-clamped": !i(f) }), L(It, i(n).bio), L(Pt, i(f) ? "less" : "more");
          }), lt("click", ct, () => b(f, !i(f))), y(z, tt);
        };
        N(Cn, (z) => {
          i(n).bio && z(Ar);
        });
      }
      var tr = w(Cn, 2);
      {
        var Tr = (z) => {
          var tt = zl();
          St(tt, 21, () => i(_), ([ht, yt]) => ht, (ht, yt) => {
            var It = /* @__PURE__ */ bt(() => Un(i(yt), 2));
            let ct = () => i(It)[0], Pt = () => i(It)[1];
            var fe = Bl(), ir = P(fe), Ir = V(ir, !0), Ye = w(ir);
            F(
              (ar) => {
                L(Ir, ar), L(Ye, ` ${ct() ?? ""}`);
              },
              [() => Pt().toLocaleString()]
            ), y(ht, fe);
          }), y(z, tt);
        };
        N(tr, (z) => {
          i(_).length && z(Tr);
        });
      }
      var Cr = w(tr, 2), er = P(Cr);
      {
        var it = (z) => {
          var tt = Vl(), ht = V(tt, !0);
          F(() => L(ht, i(n).location)), y(z, tt);
        };
        N(er, (z) => {
          i(n).location && z(it);
        });
      }
      var _t = w(er, 2);
      {
        var Dt = (z) => {
          var tt = Ni(), ht = V(tt, !0);
          F(
            (yt) => {
              mt(tt, "href", i(n).website), L(ht, yt);
            },
            [() => i(n).website.replace(/^https?:\/\//, "")]
          ), y(z, tt);
        };
        N(_t, (z) => {
          i(n).website && z(Dt);
        });
      }
      var Pe = w(_t, 2);
      {
        var Ee = (z) => {
          var tt = Ni(), ht = V(tt);
          F(() => {
            mt(tt, "href", i(n).of_url), L(ht, `onlyfans.com/${i(n).of_username ?? ""}`);
          }), y(z, tt);
        };
        N(Pe, (z) => {
          i(n).of_url && z(Ee);
        });
      }
      var Ge = w(O, 2);
      St(Ge, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([z, tt]) => z, (z, tt) => {
        var ht = /* @__PURE__ */ bt(() => Un(tt, 2));
        let yt = () => i(ht)[0], It = () => i(ht)[1];
        var ct = Li();
        let Pt;
        var fe = V(ct, !0);
        F(() => {
          Pt = Se(ct, 1, "ofx-tab", null, Pt, { "ofx-on": i(a) === yt() }), mt(ct, "aria-selected", i(a) === yt()), L(fe, It());
        }), lt("click", ct, () => b(a, yt(), !0)), y(z, ct);
      });
      var In = w(v, 2);
      Dl(In, {});
      var nr = w(In, 2), rr = P(nr);
      St(rr, 20, () => [["feed", "Feed"], ["sites", "By site"]], ([z, tt]) => z, (z, tt) => {
        var ht = /* @__PURE__ */ bt(() => Un(tt, 2));
        let yt = () => i(ht)[0], It = () => i(ht)[1];
        var ct = Li();
        let Pt;
        var fe = V(ct, !0);
        F(() => {
          Pt = Se(ct, 1, "ofx-tab", null, Pt, { "ofx-on": i(l) === yt() }), mt(ct, "aria-selected", i(l) === yt()), L(fe, It());
        }), lt("click", ct, () => b(l, yt(), !0)), y(z, ct);
      });
      var Fa = w(rr, 2), gi = w(nr, 2);
      {
        var Ua = (z) => {
          var tt = Yl(), ht = w(P(tt), 2);
          St(ht, 17, () => i(n).sources, (yt) => yt.site, (yt, It) => {
            var ct = Gl();
            let Pt;
            var fe = P(ct), ir = w(fe);
            {
              var Ir = (Ye) => {
                var ar = ql(), Va = V(ar, !0);
                F(() => L(Va, (i(It).video_count ?? 0) + (i(It).image_count ?? 0))), y(Ye, ar);
              };
              N(ir, (Ye) => {
                (i(It).video_count != null || i(It).image_count != null) && Ye(Ir);
              });
            }
            F(
              (Ye) => {
                Pt = Se(ct, 1, "ofx-btn ofx-outline", null, Pt, { "ofx-on": Ye }), L(fe, `${i(It).site ?? ""} `);
              },
              [() => i(o).has(i(It).site)]
            ), lt("click", ct, () => x(i(It).site)), y(yt, ct);
          }), y(z, tt);
        };
        N(gi, (z) => {
          i(l) === "sites" && z(Ua);
        });
      }
      var bi = w(gi, 2);
      {
        var ja = (z) => {
          var tt = Kl(), ht = V(tt, !0);
          F(() => L(ht, i(h))), y(z, tt);
        };
        N(bi, (z) => {
          i(h) && z(ja);
        });
      }
      var xi = w(bi, 2);
      {
        var Ha = (z) => {
          vl(z, {
            get handle() {
              return i(n).handle;
            },
            get kind() {
              return i(a);
            },
            onplay: (tt) => I(tt),
            ongallery: D,
            onphoto: H
          });
        }, Ba = (z) => {
          var tt = Zl(), ht = Ct(tt);
          {
            var yt = (ct) => {
              var Pt = Wl();
              y(ct, Pt);
            };
            N(ht, (ct) => {
              i(o).size === 0 && ct(yt);
            });
          }
          var It = w(ht, 2);
          St(It, 17, () => i(n).sources.filter((ct) => i(o).has(ct.site)), (ct) => ct.site, (ct, Pt) => {
            El(ct, {
              get handle() {
                return i(n).handle;
              },
              get site() {
                return i(Pt).site;
              },
              get kinds() {
                return i(s);
              },
              onplay: (fe) => I(fe),
              ongallery: D,
              onphoto: H
            });
          }), y(z, tt);
        };
        N(xi, (z) => {
          i(l) === "feed" ? z(Ha) : z(Ba, -1);
        });
      }
      var za = w(xi, 2);
      Ia(za, () => i(n).handle, (z) => {
        ti(z, {
          get title() {
            return `More like ${i(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => go(i(n).handle),
          get navigate() {
            return e.navigate;
          }
        });
      }), F(() => {
        G = Se(M, 1, "ofx-avatar", null, G, { "ofx-overlap": !!i(n).header_url }), L(Lt, `${i(n).display_name ?? ""} `), L(vt, `@${(i(n).of_username || i(n).handle) ?? ""} `), L(kt, ` ${i(n).source_count ?? ""}
                    ${i(n).source_count === 1 ? "site" : "sites"}`), le = Se(Ot, 1, "ofx-btn ofx-save", null, le, { "ofx-on": i(n).saved }), Ot.disabled = i(m), mt(Ot, "aria-pressed", i(n).saved), L(Le, i(n).saved ? "★ Saved" : "☆ Save");
      }), lt("click", Ot, C), lt("click", Fa, () => e.navigate("/x/onlyfans")), y(p, k);
    }, X = (p) => {
      var k = Xl();
      y(p, k);
    };
    N(Y, (p) => {
      i(r) ? p($) : i(n) ? p(rt, 1) : p(X, -1);
    });
  }
  var R = w(Y, 2);
  {
    var A = (p) => {
      var k = Ql(), v = P(k), g = w(v, 2);
      F(() => mt(g, "src", i(S).full)), lt("click", v, () => b(S, null)), y(p, k);
    };
    N(R, (p) => {
      i(S) && p(A);
    });
  }
  var U = w(R, 2);
  {
    var Q = (p) => {
      var k = $l(), v = P(k), g = w(v, 2);
      F((E) => mt(g, "src", E), [
        () => Ri(i(c).site, i(c).video_id)
      ]), lt("click", v, () => b(c, null)), y(p, k);
    };
    N(U, (p) => {
      i(c) && p(Q);
    });
  }
  var ft = w(U, 2);
  {
    var q = (p) => {
      var k = ef(), v = P(k), g = w(v, 2);
      {
        var E = (M) => {
          var G = tf(), ot = Ct(G), xt = w(ot, 2);
          lt("click", ot, () => B(-1)), lt("click", xt, () => B(1)), y(M, G);
        };
        N(g, (M) => {
          i(d).count > 1 && M(E);
        });
      }
      var O = w(g, 2);
      F(
        (M) => {
          mt(O, "src", M), mt(O, "alt", `${i(d).gallery.title ?? ""} ${i(d).index + 1} of ${i(d).count ?? ""}`);
        },
        [
          () => Eo(i(d).gallery.site, i(d).gallery.gallery_id, i(d).index)
        ]
      ), lt("click", v, () => b(d, null)), y(p, k);
    };
    N(ft, (p) => {
      i(d) && p(q);
    });
  }
  y(t, K), se();
}
qe(["click"]);
var af = /* @__PURE__ */ T('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function sf(t, e) {
  ae(e, !0);
  let n = Re(e, "path", 3, "");
  Na(e.api);
  const r = /* @__PURE__ */ bt(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var a = af(), s = P(a), o = P(s);
  {
    var l = (c) => {
      var d = Ve(), S = Ct(d);
      Ia(S, () => i(r), (h) => {
        rf(h, {
          get handle() {
            return i(r);
          },
          get navigate() {
            return e.navigate;
          },
          get host() {
            return e.host;
          }
        });
      }), y(c, d);
    }, f = (c) => {
      $o(c, {
        get navigate() {
          return e.navigate;
        }
      });
    };
    N(o, (c) => {
      i(r) ? c(l) : c(f, -1);
    });
  }
  y(t, a), se();
}
var of = /* @__PURE__ */ T('<p class="ofx-settings-note"> </p>'), lf = /* @__PURE__ */ T('<p class="ofx-settings-error">Could not read the scraper list.</p>'), ff = /* @__PURE__ */ T('<p class="ofx-settings-error"><strong> </strong> </p>'), uf = /* @__PURE__ */ T('<button type="button" class="ofx-btn">Sync</button>'), cf = /* @__PURE__ */ T("<tr><td> </td><td> </td><td><code> </code></td><td> </td><td> </td><td><!></td></tr>"), vf = /* @__PURE__ */ T(`<div class="ofx ofx-settings"><div class="ofx-settings-head"><p class="ofx-settings-title">Account index<!></p> <button type="button" class="ofx-btn"> </button></div> <!> <p class="ofx-settings-title"> </p> <p class="ofx-settings-note">Loaded from <code> </code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.</p> <!> <!> <table class="ofx-settings-table"><thead><tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th><th>Index</th><th></th></tr></thead><tbody></tbody></table></div>`);
function df(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(!1);
  async function a() {
    const p = await Co();
    b(r, p === null), p && b(n, p, !0);
  }
  let s = /* @__PURE__ */ j(null), o = /* @__PURE__ */ j(!1);
  const l = async () => {
    const p = await Io();
    p && b(s, p, !0);
  };
  async function f(p) {
    b(o, !0);
    const k = await Ro(p);
    k && b(s, k, !0), b(o, !1);
  }
  Be(() => {
    a(), l();
    const p = setInterval(
      () => {
        var k;
        (k = i(s)) != null && k.running && l();
      },
      3e3
    );
    return () => clearInterval(p);
  });
  const c = /* @__PURE__ */ bt(() => {
    var p;
    return Object.fromEntries((((p = i(s)) == null ? void 0 : p.sites) ?? []).map((k) => [k.site, k]));
  });
  function d(p) {
    const k = i(c)[p];
    return k ? k.state === "running" ? `running, page ${k.pages}, ${k.accounts_seen} seen` : k.state === "ok" ? `${k.accounts_seen} accounts (+${k.accounts_new}) ${_(k.finished_at)}` : k.state === "failed" ? `failed: ${k.error ?? ""}` : "never run" : "";
  }
  const S = /* @__PURE__ */ bt(() => {
    var p;
    return ((p = i(n)) == null ? void 0 : p.scrapers) ?? [];
  }), h = /* @__PURE__ */ bt(() => {
    var p;
    return Object.entries(((p = i(n)) == null ? void 0 : p.errors) ?? {});
  }), _ = (p) => p ? p.slice(0, 10) : "";
  var m = vf(), C = P(m), x = P(C), I = w(P(x));
  {
    var H = (p) => {
      var k = je();
      F(() => L(k, `: ${i(s).accounts ?? ""} accounts, ${i(s).accounts_with_avatar ?? ""} with a picture`)), y(p, k);
    };
    N(I, (p) => {
      i(s) && p(H);
    });
  }
  var D = w(x, 2), B = V(D, !0), ut = w(C, 2);
  {
    var K = (p) => {
      var k = of(), v = V(k);
      F(() => L(v, `Stored feeds: ${i(s).feeds.stored ?? ""} (${i(s).feeds.fresh ?? ""} up to date), ${i(s).feeds.waiting ?? ""} waiting to be built or refreshed
            for saved, recently opened, popular and trending performers.`)), y(p, k);
    };
    N(ut, (p) => {
      var k;
      (k = i(s)) != null && k.feeds && p(K);
    });
  }
  var Y = w(ut, 2), $ = V(Y), rt = w(Y, 2), X = w(P(rt)), R = V(X, !0), A = w(rt, 2);
  {
    var U = (p) => {
      var k = lf();
      y(p, k);
    };
    N(A, (p) => {
      i(r) && p(U);
    });
  }
  var Q = w(A, 2);
  St(Q, 17, () => i(h), ([p, k]) => p, (p, k) => {
    var v = /* @__PURE__ */ bt(() => Un(i(k), 2));
    let g = () => i(v)[0], E = () => i(v)[1];
    var O = ff(), M = P(O), G = V(M, !0), ot = w(M);
    F(() => {
      L(G, g()), L(ot, `: ${E() ?? ""}`);
    }), y(p, O);
  });
  var ft = w(Q, 2), q = w(P(ft));
  St(q, 21, () => i(S), (p) => p.key, (p, k) => {
    var v = cf(), g = P(v), E = V(g), O = w(g), M = V(O, !0), G = w(O), ot = P(G), xt = V(ot, !0), gt = w(G), Lt = V(gt, !0), Mt = w(gt), Bt = V(Mt, !0), et = w(Mt), vt = P(et);
    {
      var kt = (Ot) => {
        var le = uf();
        F(() => {
          var Le;
          return le.disabled = i(o) || ((Le = i(c)[i(k).key]) == null ? void 0 : Le.state) === "running";
        }), lt("click", le, () => f([i(k).key])), y(Ot, le);
      };
      N(vt, (Ot) => {
        i(k).indexes_accounts && Ot(kt);
      });
    }
    F(
      (Ot, le) => {
        L(E, `${i(k).name ?? ""}${i(k).indexes_accounts ? "" : " (no index)"}`), L(M, i(k).base_url), L(xt, i(k).version), L(Lt, Ot), L(Bt, le);
      },
      [
        () => _(i(k).updated),
        () => i(k).indexes_accounts ? d(i(k).key) : ""
      ]
    ), y(p, v);
  }), F(() => {
    var p, k, v;
    D.disabled = i(o) || ((p = i(s)) == null ? void 0 : p.running), L(B, (k = i(s)) != null && k.running ? "Syncing…" : "Sync all sites now"), L($, `Installed scrapers (${i(S).length ?? ""})`), L(R, ((v = i(n)) == null ? void 0 : v.plugin_dir) ?? "…");
  }), lt("click", D, () => f()), y(t, m), se();
}
qe(["click"]);
function pf({ target: t, path: e, api: n, navigate: r, host: a }) {
  const s = qt({ path: e ?? "", api: n, navigate: r, host: a }), o = Ta(sf, { target: t, props: s });
  return {
    update(l) {
      s.path = l ?? "";
    },
    destroy() {
      Ca(o);
    }
  };
}
const gf = {
  settings({ target: t, api: e }) {
    Na(e);
    const n = Ta(df, { target: t });
    return {
      update() {
      },
      destroy() {
        Ca(n);
      }
    };
  }
};
export {
  pf as default,
  gf as slots
};

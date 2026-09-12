var cs = Object.defineProperty;
var Kn = (e) => {
  throw TypeError(e);
};
var vs = (e, t, r) => t in e ? cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => vs(e, typeof t != "symbol" ? t + "" : t, r), on = (e, t, r) => t.has(e) || Kn("Cannot " + r);
var f = (e, t, r) => (on(e, t, "read from private field"), r ? r.call(e) : t.get(e)), O = (e, t, r) => t.has(e) ? Kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (on(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), P = (e, t, r) => (on(e, t, "access private method"), r);
const ie = Symbol("uninitialized"), ds = "http://www.w3.org/1999/xhtml", fi = !1;
var ui = Array.isArray, hs = Array.prototype.indexOf, Br = Array.prototype.includes, Qr = Array.from, ci = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, _s = Object.getOwnPropertyDescriptors, ps = Object.prototype, gs = Array.prototype, vi = Object.getPrototypeOf, Wn = Object.isExtensible;
const ms = () => {
};
function ws(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function di() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function ys(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ae = 2, tr = 4, $r = 8, hi = 1 << 24, Be = 16, Pe = 32, ut = 64, hn = 128, Mn = 256, De = 512, se = 1024, re = 2048, qe = 4096, pe = 8192, Me = 16384, sr = 32768, Vr = 1 << 25, Nt = 65536, qr = 1 << 17, bs = 1 << 18, ar = 1 << 19, xs = 1 << 20, Je = 1 << 25, Ot = 65536, Gr = 1 << 21, Yt = 1 << 22, wt = 1 << 23, Fr = Symbol("$state"), _i = Symbol("component"), Es = Symbol(""), Ur = Symbol("attributes"), _n = Symbol("class"), ks = Symbol("style"), ur = Symbol("text"), Tr = new class extends Error {
  constructor() {
    super(...arguments);
    Ee(this, "name", "StaleReactionError");
    Ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var ai;
const Ss = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((ai = globalThis.document) != null && ai.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ts() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function As() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function pi(e) {
  return e === this.v;
}
function Cs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gi(e) {
  return !Cs(e, this.v);
}
function Ms() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Is(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ns() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ls() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ps() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Us() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Hs = !1, ge = null;
function rr(e) {
  ge = e;
}
function bt(e, t = !1, r) {
  ge = {
    p: ge,
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
function xt(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Pi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ge = t.p, Rn(e);
}
function Rn(e = {}) {
  return ci(e, _i, { value: !0 }), e;
}
function mi() {
  return !0;
}
let qt = [];
function zs() {
  var e = qt;
  qt = [], ws(e);
}
function ot(e) {
  if (qt.length === 0) {
    var t = qt;
    queueMicrotask(() => {
      t === qt && zs();
    });
  }
  qt.push(e);
}
const js = -7169;
function $(e, t) {
  e.f = e.f & js | t;
}
function In(e) {
  (e.f & De) !== 0 || e.deps === null ? $(e, se) : $(e, qe);
}
function wi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & Ot) === 0 || (t.f ^= Ot, wi(
        /** @type {Derived} */
        t.deps
      ));
}
function yi(e, t, r) {
  (e.f & re) !== 0 ? t.add(e) : (e.f & qe) !== 0 && r.add(e), wi(e.deps), $(e, se);
}
function Ar(e) {
  var t = D, r = F;
  Fe(null), rt(null);
  try {
    return e();
  } finally {
    Fe(t), rt(r);
  }
}
function Bs(e, t, r, n) {
  const i = Nn;
  var s = e.filter((h) => !h.settled), a = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(a);
    return;
  }
  var l = (
    /** @type {Effect} */
    F
  ), o = Vs(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function d(h) {
    if ((l.f & Me) === 0) {
      o();
      try {
        n([...a, ...h]);
      } catch (p) {
        Xe(p, l);
      }
      Yr();
    }
  }
  var g = bi();
  if (r.length === 0) {
    c.then(() => d([])).finally(g);
    return;
  }
  function v() {
    Promise.all(r.map((h) => /* @__PURE__ */ qs(h))).then(d).catch((h) => Xe(h, l)).finally(g);
  }
  c ? c.then(() => {
    o(), v(), Yr();
  }) : v();
}
function Vs() {
  var e = (
    /** @type {Effect} */
    F
  ), t = D, r = ge, n = (
    /** @type {Batch} */
    R
  );
  return function(s = !0) {
    rt(e), Fe(t), rr(r), s && (e.f & Me) === 0 && (n == null || n.activate(), n == null || n.apply());
  };
}
function Yr(e = !0) {
  rt(null), Fe(null), rr(null), e && (R == null || R.deactivate());
}
function bi() {
  var e = (
    /** @type {Effect} */
    F
  ), t = e.b, r = (
    /** @type {Batch} */
    R
  ), n = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, r), r.increment(n, e), () => {
    t == null || t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  var t = ae | re;
  return F !== null && (F.f |= ar), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: pi,
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
const cr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function qs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && Ms();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Dt(
    /** @type {V} */
    ie
  ), a = !D, l = /* @__PURE__ */ new Set();
  return aa(() => {
    var h, p;
    var o = (
      /** @type {Effect} */
      F
    ), c = di();
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
      R
    );
    if (a) {
      if ((o.f & sr) !== 0)
        var g = bi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = n.b) != null && h.is_rendered()
      )
        (p = d.async_deriveds.get(o)) == null || p.reject(cr);
      else
        for (const w of l.values())
          w.reject(cr);
      l.add(c), d.async_deriveds.set(o, c);
    }
    const v = (w, _ = void 0) => {
      g == null || g(), l.delete(c), _ !== cr && (d.activate(), _ ? (s.f |= wt, nr(s, _)) : ((s.f & wt) !== 0 && (s.f ^= wt), nr(s, w)), d.deactivate());
    };
    c.promise.then(v, (w) => v(null, w || "unknown"));
  }), Di(() => {
    for (const o of l)
      o.reject(cr);
  }), new Promise((o) => {
    function c(d) {
      function g() {
        d === i ? o(s) : c(i);
      }
      d.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  const t = /* @__PURE__ */ Nn(e);
  return Vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function Gs(e) {
  const t = /* @__PURE__ */ Nn(e);
  return t.equals = gi, t;
}
function Ys(e) {
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
function On(e) {
  var t, r = F, n = e.parent;
  if (!yt && n !== null && e.v !== ie && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Me | pe)) !== 0)
    return Ts(), e.v;
  rt(n);
  try {
    e.f &= ~Ot, Ys(e), t = Ki(e);
  } finally {
    rt(r);
  }
  return t;
}
function xi(e) {
  var t = On(e);
  if (!e.equals(t) && (e.wv = Gi(), (!(R != null && R.is_fork) || e.deps === null) && (R !== null ? (R.capture(e, t, !0), gr == null || gr.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    $(e, se);
    return;
  }
  yt || (oe !== null ? (Pn() || R != null && R.is_fork) && oe.set(e, t) : In(e));
}
function Ks(e) {
  var t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), r.ac !== null && Ar(() => {
        r.ac.abort(Tr), r.ac = null;
      }), r.fn !== null && (r.teardown = ms), wr(r, 0), Un(r));
}
function Ei(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ir(t);
}
let ln = null, jt = null, R = null, gr = null, oe = null, pn = null, fn = !1, Gt = null, Hr = null;
var Zn = 0;
let Ws = 1;
var Wt, gt, St, Zt, Xt, Jt, it, Qt, me, br, st, ze, Ye, $t, Tt, B, gn, vr, mn, ki, Si, Vt, Zs, dr;
const Zr = class Zr {
  constructor() {
    O(this, B);
    Ee(this, "id", Ws++);
    /** True as soon as `#process` was called */
    O(this, Wt, !1);
    Ee(this, "linked", !0);
    /** @type {Batch | null} */
    O(this, gt, null);
    /** @type {Batch | null} */
    O(this, St, null);
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
    O(this, Zt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, Xt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    O(this, Jt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    O(this, it, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    O(this, Qt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    O(this, me, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    O(this, br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    O(this, st, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    O(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    O(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    O(this, $t, /* @__PURE__ */ new Set());
    Ee(this, "is_fork", !1);
    O(this, Tt, !1);
    jt === null ? ln = jt = this : (M(jt, St, this), M(this, gt, jt)), jt = this;
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
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = f(this, Ye).get(t);
    if (n) {
      f(this, Ye).delete(t);
      for (var i of n.d)
        $(i, re), r(i);
      for (i of n.m)
        $(i, qe), r(i);
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
    t.v !== ie && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & wt) === 0 && (this.current.set(t, [r, n]), oe == null || oe.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    R = this;
  }
  deactivate() {
    R = null, oe = null;
  }
  flush() {
    try {
      fn = !0, R = this, P(this, B, vr).call(this);
    } finally {
      Zn = 0, pn = null, Gt = null, Hr = null, fn = !1, R = null, oe = null, et.clear();
    }
  }
  discard() {
    var t;
    for (const r of f(this, Xt)) r(this);
    f(this, Xt).clear();
    for (const r of this.async_deriveds.values())
      r.reject(cr);
    P(this, B, dr).call(this), (t = f(this, Qt)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    f(this, br).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (M(this, Jt, f(this, Jt) + 1), t) {
      let n = f(this, it).get(r) ?? 0;
      f(this, it).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (M(this, Jt, f(this, Jt) - 1), t) {
      let n = f(this, it).get(r) ?? 0;
      n === 1 ? f(this, it).delete(r) : f(this, it).set(r, n - 1);
    }
    f(this, Tt) || (M(this, Tt, !0), ot(() => {
      M(this, Tt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      f(this, st).add(n);
    for (const n of r)
      f(this, ze).add(n);
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
    return (f(this, Qt) ?? M(this, Qt, di())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new Zr();
      fn || ot(() => {
        f(t, Wt) || t.flush();
      });
    }
    return R;
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
    if (pn = t, (i = t.b) != null && i.is_pending && (t.f & (tr | $r | hi)) !== 0 && (t.f & sr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Gt !== null && r === F && (D === null || (D.f & ae) === 0))
        return;
      if ((n & (ut | Pe)) !== 0) {
        if ((n & se) === 0)
          return;
        r.f ^= se;
      }
    }
    f(this, me).push(r);
  }
};
Wt = new WeakMap(), gt = new WeakMap(), St = new WeakMap(), Zt = new WeakMap(), Xt = new WeakMap(), Jt = new WeakMap(), it = new WeakMap(), Qt = new WeakMap(), me = new WeakMap(), br = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), Ye = new WeakMap(), $t = new WeakMap(), Tt = new WeakMap(), B = new WeakSet(), gn = function() {
  if (this.is_fork) return !0;
  for (const n of f(this, it).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (f(this, Ye).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, vr = function() {
  var o, c, d, g;
  M(this, Wt, !0), Zn++ > 1e3 && (P(this, B, dr).call(this), Xs());
  for (const v of f(this, st))
    f(this, ze).delete(v), $(v, re), this.schedule(v);
  for (const v of f(this, ze))
    $(v, qe), this.schedule(v);
  const t = f(this, me);
  M(this, me, []), this.apply();
  var r = Gt = [], n = [], i = Hr = [];
  for (const v of t)
    try {
      P(this, B, mn).call(this, v, r, n);
    } catch (h) {
      throw Ci(v), P(this, B, gn).call(this) || this.discard(), h;
    }
  if (R = null, i.length > 0) {
    var s = Zr.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (Gt = null, Hr = null, P(this, B, gn).call(this)) {
    P(this, B, Vt).call(this, n), P(this, B, Vt).call(this, r);
    for (const [v, h] of f(this, Ye))
      Ai(v, h);
    i.length > 0 && /** @type {unknown} */
    P(o = R, B, vr).call(o);
    return;
  }
  const a = P(this, B, ki).call(this);
  if (a) {
    P(this, B, Vt).call(this, n), P(this, B, Vt).call(this, r), P(c = a, B, Si).call(c, this);
    return;
  }
  f(this, st).clear(), f(this, ze).clear();
  for (const v of f(this, Zt)) v(this);
  f(this, Zt).clear(), gr = this, Xn(n), Xn(r), gr = null, (d = f(this, Qt)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    R
  );
  if (f(this, Jt) === 0 && (f(this, me).length === 0 || l !== null) && P(this, B, dr).call(this), f(this, me).length > 0)
    if (l !== null) {
      const v = l;
      f(v, me).push(...f(this, me).filter((h) => !f(v, me).includes(h)));
    } else
      l = this;
  l !== null && (et.clear(), P(g = l, B, vr).call(g));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= se;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (Pe | ut)) !== 0, l = a && (s & se) !== 0, o = l || (s & pe) !== 0 || f(this, Ye).has(i);
    if (!o && i.fn !== null) {
      a ? i.f ^= se : (s & tr) !== 0 ? r.push(i) : Rr(i) && ((s & Be) !== 0 && f(this, ze).add(i), ir(i));
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
}, ki = function() {
  for (var t = f(this, gt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = f(t, gt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Si = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && s.promise.then(a.resolve).catch(a.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(f(t, st), f(t, ze));
  const r = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & ae) !== 0 && (i.f & (re | qe)) === 0))
      for (const o of s) {
        var a = o.f;
        if ((a & ae) !== 0)
          r(
            /** @type {Derived} */
            o
          );
        else {
          var l = (
            /** @type {Effect} */
            o
          );
          a & (Yt | Be) && !this.async_deriveds.has(l) && (f(this, ze).delete(l), $(l, re), this.schedule(l));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), P(n = t, B, dr).call(n), R = this, P(this, B, vr).call(this);
}, /**
 * @param {Effect[]} effects
 */
Vt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    yi(t[r], f(this, st), f(this, ze));
}, Zs = function() {
  var g;
  for (let v = ln; v !== null; v = f(v, St)) {
    var t = v.id < this.id, r = [];
    for (const [h, [p, w]] of this.current) {
      if (v.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && p !== n)
          v.current.set(h, [p, w]);
        else
          continue;
      }
      r.push(h);
    }
    if (t)
      for (const [h, p] of this.async_deriveds) {
        const w = v.async_deriveds.get(h);
        w && p.promise.then(w.resolve).catch(w.reject);
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
            v.unskip_effect(h, (p) => {
              var w;
              (p.f & (Be | Yt)) !== 0 ? v.schedule(p) : P(w = v, B, Vt).call(w, [p]);
            });
        v.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of r)
          Ti(o, s, a, l);
        l = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([h, p]) => {
          const w = this.current.get(h);
          return w ? w[0] !== p[0] || w[1] !== p[1] : !0;
        }).map(([h]) => h);
        if (c.length > 0)
          for (const h of f(this, br))
            (h.f & (Me | pe | qr)) === 0 && Ln(h, c, l) && ((h.f & (Yt | Be)) !== 0 ? ($(h, re), v.schedule(h)) : f(v, st).add(h));
        if (f(v, me).length > 0 && !f(v, Tt)) {
          v.apply();
          for (var d of f(v, me))
            P(g = v, B, mn).call(g, d, [], []);
          M(v, me, []);
        }
        v.deactivate();
      }
    }
  }
}, dr = function() {
  if (this.linked) {
    var t = f(this, gt), r = f(this, St);
    t === null ? ln = r : M(t, St, r), r === null ? jt = t : M(r, gt, t), this.linked = !1;
  }
};
let Lt = Zr;
function Xs() {
  try {
    Ls();
  } catch (e) {
    Xe(e, pn);
  }
}
let He = null;
function Xn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Me | pe)) === 0 && Rr(n) && (He = /* @__PURE__ */ new Set(), ir(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && zi(n), (He == null ? void 0 : He.size) > 0)) {
        et.clear();
        for (const i of He) {
          if ((i.f & (Me | pe)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            He.has(a) && (He.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (Me | pe)) === 0 && ir(o);
          }
        }
        He.clear();
      }
    }
    He = null;
  }
}
function Ti(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ae) !== 0 ? Ti(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Yt | Be)) !== 0 && (s & re) === 0 && Ln(i, t, n) && ($(i, re), Dn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ln(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Br.call(t, i))
        return !0;
      if ((i.f & ae) !== 0 && Ln(
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
function Dn(e) {
  R.schedule(e);
}
function Ai(e, t) {
  if (!((e.f & Pe) !== 0 && (e.f & se) !== 0)) {
    (e.f & re) !== 0 ? t.d.push(e) : (e.f & qe) !== 0 && t.m.push(e), $(e, se);
    for (var r = e.first; r !== null; )
      Ai(r, t), r = r.next;
  }
}
function Ci(e) {
  $(e, se);
  for (var t = e.first; t !== null; )
    Ci(t), t = t.next;
}
let Kr = /* @__PURE__ */ new Set();
const et = /* @__PURE__ */ new Map();
let Mi = !1;
function Dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: pi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const r = Dt(e);
  return Vi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Js(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = gi), n;
}
function b(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ve || (D.f & qr) !== 0) && mi() && (D.f & (ae | Be | Yt | qr)) !== 0 && (tt === null || !tt.has(e)) && Fs();
  let n = r ? Qe(t) : t;
  return nr(e, n, Hr);
}
function nr(e, t, r = null) {
  if (!e.equals(t)) {
    yt ? et.set(e, t) : et.has(e) || et.set(e, e.v);
    var n = Lt.ensure();
    if (n.capture(e, t), (e.f & ae) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & re) !== 0 && On(i), oe === null && In(i);
    }
    e.wv = Gi(), Ri(e, re, r), F !== null && (F.f & se) !== 0 && (F.f & (Pe | ut)) === 0 && (Ie === null ? fa([e]) : Ie.push(e)), !n.is_fork && Kr.size > 0 && !Mi && Qs();
  }
  return t;
}
function Qs() {
  Mi = !1;
  for (const e of Kr) {
    (e.f & se) !== 0 && $(e, qe);
    let t;
    try {
      t = Rr(e);
    } catch {
      t = !0;
    }
    t && ir(e);
  }
  Kr.clear();
}
function mr(e) {
  b(e, e.v + 1);
}
function Ri(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], l = a.f, o = (l & re) === 0;
      if (o && $(a, t), (l & qr) !== 0)
        Kr.add(
          /** @type {Effect} */
          a
        );
      else if ((l & ae) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        oe == null || oe.delete(c), (l & Ot) === 0 && (l & De && (F === null || (F.f & Gr) === 0) && (a.f |= Ot), Ri(c, qe, r));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          a
        );
        (l & Be) !== 0 && He !== null && He.add(d), r !== null ? r.push(d) : Dn(d);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Fr in e || _i in e)
    return e;
  const t = vi(e);
  if (t !== ps && t !== gs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ui(e), i = /* @__PURE__ */ H(0), s = It, a = (l) => {
    if (It === s)
      return l();
    var o = D, c = It;
    Fe(null), Qn(s);
    var d = l();
    return Fe(o), Qn(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ds();
        var d = r.get(o);
        return d === void 0 ? a(() => {
          var g = /* @__PURE__ */ H(c.value);
          return r.set(o, g), g;
        }) : b(d, c.value, !0), !0;
      },
      deleteProperty(l, o) {
        var c = r.get(o);
        if (c === void 0) {
          if (o in l) {
            const d = a(() => /* @__PURE__ */ H(ie));
            r.set(o, d), mr(i);
          }
        } else
          b(c, ie), mr(i);
        return !0;
      },
      get(l, o, c) {
        var h;
        if (o === Fr)
          return e;
        var d = r.get(o), g = o in l;
        if (d === void 0 && (!g || (h = pr(l, o)) != null && h.writable) && (d = a(() => {
          var p = Qe(g ? l[o] : ie), w = /* @__PURE__ */ H(p);
          return w;
        }), r.set(o, d)), d !== void 0) {
          var v = u(d);
          return v === ie ? void 0 : v;
        }
        return Reflect.get(l, o, c);
      },
      getOwnPropertyDescriptor(l, o) {
        var c = Reflect.getOwnPropertyDescriptor(l, o);
        if (c && "value" in c) {
          var d = r.get(o);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var g = r.get(o), v = g == null ? void 0 : g.v;
          if (g !== void 0 && v !== ie)
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
        if (o === Fr)
          return !0;
        var c = r.get(o), d = c !== void 0 && c.v !== ie || Reflect.has(l, o);
        if (c !== void 0 || F !== null && (!d || (v = pr(l, o)) != null && v.writable)) {
          c === void 0 && (c = a(() => {
            var h = d ? Qe(l[o]) : ie, p = /* @__PURE__ */ H(h);
            return p;
          }), r.set(o, c));
          var g = u(c);
          if (g === ie)
            return !1;
        }
        return d;
      },
      set(l, o, c, d) {
        var U;
        var g = r.get(o), v = o in l;
        if (n && o === "length")
          for (var h = c; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var p = r.get(h + "");
            p !== void 0 ? b(p, ie) : h in l && (p = a(() => /* @__PURE__ */ H(ie)), r.set(h + "", p));
          }
        if (g === void 0)
          (!v || (U = pr(l, o)) != null && U.writable) && (g = a(() => /* @__PURE__ */ H(void 0)), b(g, Qe(c)), r.set(o, g));
        else {
          v = g.v !== ie;
          var w = a(() => Qe(c));
          b(g, w);
        }
        var _ = Reflect.getOwnPropertyDescriptor(l, o);
        if (_ != null && _.set && _.set.call(d, c), !v) {
          if (n && typeof o == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), K = Number(o);
            Number.isInteger(K) && K >= E.v && b(E, K + 1);
          }
          mr(i);
        }
        return !0;
      },
      ownKeys(l) {
        u(i);
        var o = Reflect.ownKeys(l).filter((g) => {
          var v = r.get(g);
          return v === void 0 || v.v !== ie;
        });
        for (var [c, d] of r)
          d.v !== ie && !(c in l) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        Ps();
      }
    }
  );
}
var wn, Ii, Ni, Oi;
function $s() {
  if (wn === void 0) {
    wn = window, Ii = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ni = pr(t, "firstChild").get, Oi = pr(t, "nextSibling").get, Wn(e) && (e[_n] = void 0, e[Ur] = null, e[ks] = void 0, e.__e = void 0), Wn(r) && (r[ur] = void 0);
  }
}
function ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ni.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return (
    /** @type {TemplateNode | null} */
    Oi.call(e)
  );
}
function Y(e, t) {
  return /* @__PURE__ */ Pt(e);
}
function Ce(e, t = !1) {
  {
    var r = /* @__PURE__ */ Pt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Cr(r) : r;
  }
}
function J(e, t = !1) {
  return /* @__PURE__ */ Pt(e);
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Cr(n);
  return n;
}
function ea(e) {
  e.textContent = "";
}
function Li() {
  return !1;
}
function ta(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function ra(e) {
  var t = F;
  if (t === null)
    return D.f |= wt, e;
  if ((t.f & sr) === 0 && (t.f & tr) === 0)
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  if (!(t !== null && (t.f & Me) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & hn) !== 0 && (t.f & (Me | Vr)) === 0) {
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
function na(e) {
  F === null && (D === null && Os(), Ns()), yt && Is();
}
function ia(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ct(e, t) {
  var r = F;
  r !== null && (r.f & pe) !== 0 && (e |= pe);
  var n = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | re | De,
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
  R == null || R.register_created_effect(n);
  var i = n;
  if ((e & tr) !== 0)
    Gt !== null ? Gt.push(n) : Lt.ensure().schedule(n);
  else if (t !== null) {
    try {
      ir(n);
    } catch (a) {
      throw ye(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ar) === 0 && (i = i.first, (e & Be) !== 0 && (e & Nt) !== 0 && i !== null && (i.f |= Nt));
  }
  if (i !== null && (i.parent = r, r !== null && ia(i, r), D !== null && (D.f & ae) !== 0 && (e & ut) === 0)) {
    var s = (
      /** @type {Derived} */
      D
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Pn() {
  return D !== null && !Ve;
}
function Di(e) {
  const t = ct($r, null);
  return $(t, se), t.teardown = e, t;
}
function Fn(e) {
  na();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !D && (t & Pe) !== 0 && ge !== null && !ge.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ge
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Pi(e);
}
function Pi(e) {
  return ct(tr | xs, e);
}
function sa(e) {
  Lt.ensure();
  const t = ct(ut | ar, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Rt(t, () => {
      ye(t), n(void 0);
    }) : (ye(t), n(void 0));
  });
}
function Fi(e) {
  return ct(tr, e);
}
function aa(e) {
  return ct(Yt | ar, e);
}
function Ui(e, t = 0) {
  return ct($r | t, e);
}
function G(e, t = [], r = [], n = []) {
  Bs(n, t, r, (i) => {
    ct($r, () => {
      e(...i.map(u));
    });
  });
}
function Mr(e, t = 0) {
  var r = ct(Be | t, e);
  return r;
}
function Le(e) {
  return ct(Pe | ar, e);
}
function Hi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = yt, n = D;
    Jn(!0), Fe(null);
    try {
      t.call(null);
    } catch (i) {
      Xe(i, e.parent);
    } finally {
      Jn(r), Fe(n);
    }
  }
}
function Un(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Ar(() => {
      i.abort(Tr);
    });
    var n = r.next;
    (r.f & ut) !== 0 ? r.parent = null : ye(r, t), r = n;
  }
}
function oa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && ye(t), t = r;
  }
}
function ye(e, t = !0) {
  var r = !1;
  (t || (e.f & bs) !== 0) && e.nodes !== null && e.nodes.end !== null && (la(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Vr, Un(e, t && !r), wr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Hi(e), e.f ^= Vr, e.f |= Me;
  var i = e.parent;
  i !== null && i.first !== null && zi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function la(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Cr(e);
    e.remove(), e = r;
  }
}
function zi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Rt(e, t, r = !0) {
  var n = [];
  e.f |= Mn, ji(e, n, !0);
  var i = () => {
    r && ye(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of n)
      l.out(a);
  } else
    i();
}
function ji(e, t, r) {
  if ((e.f & pe) === 0) {
    e.f ^= pe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & ut) === 0) {
        var a = (i.f & Nt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Pe) !== 0 && (e.f & Be) !== 0;
        ji(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Wr(e) {
  e.f &= ~Mn, Bi(e, !0);
}
function Bi(e, t) {
  if ((e.f & Mn) === 0 && (e.f & pe) !== 0) {
    e.f ^= pe, (e.f & se) === 0 && ($(e, re), Lt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Nt) !== 0 || (r.f & Pe) !== 0;
      Bi(r, i ? t : !1), r = n;
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
      var i = r === n ? null : /* @__PURE__ */ Cr(r);
      t.append(r), r = i;
    }
}
let zr = !1, yt = !1;
function Jn(e) {
  yt = e;
}
let D = null, Ve = !1;
function Fe(e) {
  D = e;
}
let F = null;
function rt(e) {
  F = e;
}
let tt = null;
function Vi(e) {
  D !== null && (tt ?? (tt = /* @__PURE__ */ new Set())).add(e);
}
let we = null, Ae = 0, Ie = null;
function fa(e) {
  Ie = e;
}
let qi = 1, Et = 0, It = Et;
function Qn(e) {
  It = e;
}
function Gi() {
  return ++qi;
}
function Rr(e) {
  var t = e.f;
  if ((t & re) !== 0)
    return !0;
  if (t & ae && (e.f &= ~Ot), (t & qe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Rr(
        /** @type {Derived} */
        s
      ) && xi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & De) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    oe === null && $(e, se);
  }
  return !1;
}
function Yi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(tt !== null && tt.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ae) !== 0 ? Yi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? $(s, re) : (s.f & se) !== 0 && $(s, qe), Dn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ki(e) {
  var t = we, r = Ae, n = Ie, i = D, s = tt, a = ge, l = Ve, o = It, c = e.f;
  we = /** @type {null | Value[]} */
  null, Ae = 0, Ie = null, D = (c & (Pe | ut)) === 0 ? e : null, tt = null, rr(e.ctx), Ve = !1, It = ++Et, e.ac !== null && (Ar(() => {
    e.ac.abort(Tr);
  }), e.ac = null);
  try {
    e.f |= Gr;
    var d = (
      /** @type {Function} */
      e.fn
    ), g = d();
    e.f |= sr;
    var v = $n(e);
    if (mi() && Ie !== null && !Ve && v !== null && (e.f & (ae | qe | re)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      Ie.length; h++)
        Yi(
          Ie[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Et++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = Et;
      if (t !== null)
        for (const p of t)
          p.rv = Et;
      Ie !== null && (n === null ? n = Ie : n.push(.../** @type {Source[]} */
      Ie));
    }
    return (e.f & wt) !== 0 && (e.f ^= wt), g;
  } catch (p) {
    return $n(e), ra(p);
  } finally {
    e.f ^= Gr, we = t, Ae = r, Ie = n, D = i, tt = s, rr(a), Ve = l, It = o;
  }
}
function $n(e) {
  var i;
  var t = e.deps, r = R == null ? void 0 : R.is_fork;
  if (we !== null) {
    var n;
    if (r || wr(e, Ae), t !== null && Ae > 0)
      for (t.length = Ae + we.length, n = 0; n < we.length; n++)
        t[Ae + n] = we[n];
    else
      e.deps = t = we;
    if (Pn() && (e.f & De) !== 0)
      for (n = Ae; n < t.length; n++)
        ((i = t[n]).reactions ?? (i.reactions = [])).push(e);
  } else !r && t !== null && Ae < t.length && (wr(e, Ae), t.length = Ae);
  return t;
}
function ua(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = hs.call(r, e);
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
    (s.f & De) !== 0 && (s.f ^= De, s.f &= ~Ot), s.v !== ie && In(s), s.ac !== null && Ar(() => {
      s.ac.abort(Tr), s.ac = null, $(s, re);
    }), Ks(s), wr(s, 0);
  }
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ua(e, r[n]);
}
function ir(e) {
  var t = e.f;
  if ((t & Me) === 0) {
    $(e, se);
    var r = F, n = zr;
    F = e, zr = (t & (Pe | ut)) === 0;
    try {
      (t & (Be | hi)) !== 0 ? oa(e) : Un(e), Hi(e);
      var i = Ki(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = qi;
      var s;
      fi && Hs && (e.f & re) !== 0 && e.deps;
    } finally {
      zr = n, F = r;
    }
  }
}
function u(e) {
  var t = e.f, r = (t & ae) !== 0;
  if (D !== null && !Ve) {
    var n = F !== null && (F.f & Me) !== 0;
    if (!n && (tt === null || !tt.has(e))) {
      var i = D.deps;
      if ((D.f & Gr) !== 0)
        e.rv < Et && (e.rv = Et, we === null && i !== null && i[Ae] === e ? Ae++ : we === null ? we = [e] : we.push(e));
      else {
        D.deps ?? (D.deps = []), Br.call(D.deps, e) || D.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [D] : Br.call(s, D) || s.push(D);
      }
    }
  }
  if (yt && et.has(e))
    return et.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (yt) {
      var l = a.v;
      return ((a.f & se) === 0 && a.reactions !== null || Zi(a)) && (l = On(a)), et.set(a, l), l;
    }
    var o = (a.f & De) === 0 && !Ve && D !== null && (zr || (D.f & De) !== 0), c = (a.f & sr) === 0;
    Rr(a) && (o && (a.f |= De), xi(a)), o && !c && (Ei(a), Wi(a));
  }
  if (oe != null && oe.has(e))
    return oe.get(e);
  if ((e.f & wt) !== 0)
    throw e.v;
  return e.v;
}
function Wi(e) {
  if (e.f |= De, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & De) === 0 && (Ei(
        /** @type {Derived} */
        t
      ), Wi(
        /** @type {Derived} */
        t
      ));
}
function Zi(e) {
  if (e.v === ie) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (et.has(t) || (t.f & ae) !== 0 && Zi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function en(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
const kt = Symbol("events"), Xi = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Set();
function ca(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || bn.call(t, s), !s.cancelBubble)
      return Ar(() => r == null ? void 0 : r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ot(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Ji(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = ca(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Di(() => {
    t.removeEventListener(e, a, s);
  });
}
function _e(e, t, r) {
  (t[kt] ?? (t[kt] = {}))[e] = r;
}
function tn(e) {
  for (var t = 0; t < e.length; t++)
    Xi.add(e[t]);
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
  var a = 0, l = un === e && e[kt];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[kt] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    o <= c && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    ci(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = D, g = F;
    Fe(null), rt(null);
    try {
      for (var v, h = []; s !== null && s !== t; ) {
        try {
          var p = (_ = s[kt]) == null ? void 0 : _[n];
          p != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && p.call(s, e);
        } catch (E) {
          v ? h.push(E) : v = E;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (v) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw v;
      }
    } finally {
      e[kt] = t, delete e.currentTarget, Fe(d), rt(g);
    }
  }
}
var oi;
const vn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((oi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : oi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function va(e) {
  return (
    /** @type {string} */
    (vn == null ? void 0 : vn.createHTML(e)) ?? e
  );
}
function Qi(e) {
  var t = ta("template");
  return t.innerHTML = va(e.replaceAll("<!>", "<!---->")), t.content;
}
function yr(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Qi(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Ii ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      yr(l, o);
    } else
      yr(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function da(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Qi(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Pt(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Pt(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return yr(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function ha(e, t) {
  return /* @__PURE__ */ da(e, t, "svg");
}
function Lr(e = "") {
  {
    var t = ft(e + "");
    return yr(t, t), t;
  }
}
function Ir() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ft();
  return e.append(t, r), yr(t, r), e;
}
function y(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const _a = ["touchstart", "touchmove"];
function pa(e) {
  return _a.includes(e);
}
function ga(e) {
  let t = 0, r = Dt(0), n;
  return () => {
    Pn() && (u(r), Ui(() => (t === 0 && (n = en(() => e(() => mr(r)))), t += 1, () => {
      ot(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, mr(r));
      });
    })));
  };
}
var ma = Nt | ar;
function wa(e, t, r, n) {
  new ya(e, t, r, n);
}
var Ne, Cn, Oe, At, de, ke, he, Se, Ke, Ct, mt, er, xr, Er, at, Xr, W, ba, xa, xn, Ea, En, hr, jr, kn, Sn;
class ya {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    O(this, W);
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
    O(this, Ne);
    /** @type {TemplateNode | null} */
    O(this, Cn, null);
    /** @type {BoundaryProps} */
    O(this, Oe);
    /** @type {((anchor: Node) => void)} */
    O(this, At);
    /** @type {Effect} */
    O(this, de);
    /** @type {Effect | null} */
    O(this, ke, null);
    /** @type {Effect | null} */
    O(this, he, null);
    /** @type {Effect | null} */
    O(this, Se, null);
    /** @type {DocumentFragment | null} */
    O(this, Ke, null);
    O(this, Ct, 0);
    O(this, mt, 0);
    O(this, er, !1);
    /** @type {Set<Effect>} */
    O(this, xr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    O(this, Er, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    O(this, at, null);
    O(this, Xr, ga(() => (M(this, at, Dt(f(this, Ct))), () => {
      M(this, at, null);
    })));
    var s;
    M(this, Ne, t), M(this, Oe, r), M(this, At, (a) => {
      var l = (
        /** @type {Effect} */
        F
      );
      l.b = this, l.f |= hn, n(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((a) => a), M(this, de, Mr(() => {
      P(this, W, En).call(this);
    }, ma));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    yi(t, f(this, xr), f(this, Er));
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
  update_pending_count(t, r) {
    P(this, W, kn).call(this, t, r), M(this, Ct, f(this, Ct) + t), !(!f(this, at) || f(this, er)) && (M(this, er, !0), ot(() => {
      M(this, er, !1), f(this, at) && nr(f(this, at), f(this, Ct));
    }));
  }
  get_effect_pending() {
    return f(this, Xr).call(this), u(
      /** @type {Source<number>} */
      f(this, at)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!f(this, Oe).onerror && !f(this, Oe).failed)
      throw t;
    R != null && R.is_fork ? (f(this, ke) && R.skip_effect(f(this, ke)), f(this, he) && R.skip_effect(f(this, he)), f(this, Se) && R.skip_effect(f(this, Se)), R.oncommit(() => {
      P(this, W, Sn).call(this, t);
    })) : P(this, W, Sn).call(this, t);
  }
}
Ne = new WeakMap(), Cn = new WeakMap(), Oe = new WeakMap(), At = new WeakMap(), de = new WeakMap(), ke = new WeakMap(), he = new WeakMap(), Se = new WeakMap(), Ke = new WeakMap(), Ct = new WeakMap(), mt = new WeakMap(), er = new WeakMap(), xr = new WeakMap(), Er = new WeakMap(), at = new WeakMap(), Xr = new WeakMap(), W = new WeakSet(), ba = function() {
  try {
    M(this, ke, Le(() => f(this, At).call(this, f(this, Ne))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
xa = function(t) {
  const r = f(this, Oe).failed, { reset: n, invoke_onerror: i } = P(this, W, xn).call(this, t);
  ot(i), r && M(this, Se, Le(() => {
    r(
      f(this, Ne),
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
      As();
      return;
    }
    r = !0, n && Us(), f(this, Se) !== null && Rt(f(this, Se), () => {
      M(this, Se, null);
    }), P(this, W, jr).call(this, () => {
      P(this, W, En).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var a, l;
    try {
      n = !0, (l = (a = f(this, Oe)).onerror) == null || l.call(a, t, i), n = !1;
    } catch (o) {
      Xe(o, f(this, de) && f(this, de).parent);
    }
  } };
}, Ea = function() {
  const t = f(this, Oe).pending;
  t && (this.is_pending = !0, M(this, he, Le(() => t(f(this, Ne)))), ot(() => {
    var r = M(this, Ke, document.createDocumentFragment()), n = ft(), i = !1;
    if (r.append(n), M(this, ke, P(this, W, jr).call(this, () => {
      try {
        return Le(() => f(this, At).call(this, n));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (a) {
          Xe(a, f(this, de).parent);
        }
        return null;
      }
    })), f(this, ke) === null) {
      M(this, Ke, null), i && P(this, W, hr).call(
        this,
        /** @type {Batch} */
        R
      );
      return;
    }
    f(this, mt) === 0 && (f(this, Ne).before(r), M(this, Ke, null), Rt(
      /** @type {Effect} */
      f(this, he),
      () => {
        M(this, he, null);
      }
    ), P(this, W, hr).call(
      this,
      /** @type {Batch} */
      R
    ));
  }));
}, En = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, mt, 0), M(this, Ct, 0), M(this, ke, Le(() => {
      f(this, At).call(this, f(this, Ne));
    })), f(this, mt) > 0) {
      var t = M(this, Ke, document.createDocumentFragment());
      Hn(f(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        f(this, Oe).pending
      );
      M(this, he, Le(() => r(f(this, Ne))));
    } else
      P(this, W, hr).call(
        this,
        /** @type {Batch} */
        R
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
hr = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, xr), f(this, Er));
}, /**
 * @template T
 * @param {() => T} fn
 */
jr = function(t) {
  var r = F, n = D, i = ge;
  rt(f(this, de)), Fe(f(this, de)), rr(f(this, de).ctx);
  try {
    return Lt.ensure(), t();
  } finally {
    rt(r), Fe(n), rr(i);
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
    this.parent && P(n = this.parent, W, kn).call(n, t, r);
    return;
  }
  M(this, mt, f(this, mt) + t), f(this, mt) === 0 && (P(this, W, hr).call(this, r), f(this, he) && Rt(f(this, he), () => {
    M(this, he, null);
  }), f(this, Ke) && (f(this, Ne).before(f(this, Ke)), M(this, Ke, null)));
}, /**
 * @param {unknown} error
 */
Sn = function(t) {
  f(this, ke) && (ye(f(this, ke)), M(this, ke, null)), f(this, he) && (ye(f(this, he)), M(this, he, null)), f(this, Se) && (ye(f(this, Se)), M(this, Se, null));
  let r = f(this, Oe).failed;
  const n = (i) => {
    const { reset: s, invoke_onerror: a } = P(this, W, xn).call(this, i);
    a(), r && M(this, Se, P(this, W, jr).call(this, () => {
      try {
        return Le(() => {
          var l = (
            /** @type {Effect} */
            F
          );
          l.b = this, l.f |= hn, r(
            f(this, Ne),
            () => i,
            () => s
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
    } catch (s) {
      Xe(s, f(this, de) && f(this, de).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      n,
      /** @param {unknown} e */
      (s) => Xe(s, f(this, de) && f(this, de).parent)
    ) : n(i);
  });
};
function q(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[ur] ?? (e[ur] = e.nodeValue)) && (e[ur] = r, e.nodeValue = `${r}`);
}
function ka(e, t) {
  return Sa(e, t);
}
const Dr = /* @__PURE__ */ new Map();
function Sa(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  $s();
  var o = void 0, c = sa(() => {
    var d = r ?? t.appendChild(ft());
    wa(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        bt({});
        var p = (
          /** @type {ComponentContext} */
          ge
        );
        s && (p.c = s), i && (n.$$events = i), o = e(h, n) || Rn(), xt();
      },
      l
    );
    var g = /* @__PURE__ */ new Set(), v = (h) => {
      for (var p = 0; p < h.length; p++) {
        var w = h[p];
        if (!g.has(w)) {
          g.add(w);
          var _ = pa(w);
          for (const U of [t, document]) {
            var E = Dr.get(U);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Dr.set(U, E));
            var K = E.get(w);
            K === void 0 ? (U.addEventListener(w, bn, { passive: _ }), E.set(w, 1)) : E.set(w, K + 1);
          }
        }
      }
    };
    return v(Qr(Xi)), yn.add(v), () => {
      var _;
      for (var h of g)
        for (const E of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Dr.get(E)
          ), w = (
            /** @type {number} */
            p.get(h)
          );
          --w == 0 ? (E.removeEventListener(h, bn), p.delete(h), p.size === 0 && Dr.delete(E)) : p.set(h, w);
        }
      yn.delete(v), d !== r && ((_ = d.parentNode) == null || _.removeChild(d));
    };
  });
  return Tn.set(o, c), o;
}
let Tn = /* @__PURE__ */ new WeakMap();
function Ta(e, t) {
  const r = Tn.get(e);
  return r ? (Tn.delete(e), r(t)) : Promise.resolve();
}
var je, We, Te, Mt, kr, Sr, Jr;
class zn {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    O(this, je, /* @__PURE__ */ new Map());
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
    O(this, We, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    O(this, Te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    O(this, Mt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    O(this, kr, !0);
    /**
     * @param {Batch} batch
     */
    O(this, Sr, (t) => {
      if (f(this, je).has(t)) {
        var r = (
          /** @type {Key} */
          f(this, je).get(t)
        ), n = f(this, We).get(r);
        if (n)
          Wr(n), f(this, Mt).delete(r);
        else {
          var i = f(this, Te).get(r);
          i && (Wr(i.effect), f(this, We).set(r, i.effect), f(this, Te).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of f(this, je)) {
          if (f(this, je).delete(s), s === t)
            break;
          const l = f(this, Te).get(a);
          l && (ye(l.effect), f(this, Te).delete(a));
        }
        for (const [s, a] of f(this, We)) {
          if (s === r || f(this, Mt).has(s)) continue;
          const l = () => {
            if (Array.from(f(this, je).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Hn(a, c), c.append(ft()), f(this, Te).set(s, { effect: a, fragment: c });
            } else
              ye(a);
            f(this, Mt).delete(s), f(this, We).delete(s);
          };
          f(this, kr) || !n ? (f(this, Mt).add(s), Rt(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    O(this, Jr, (t) => {
      f(this, je).delete(t);
      const r = Array.from(f(this, je).values());
      for (const [n, i] of f(this, Te))
        r.includes(n) || (ye(i.effect), f(this, Te).delete(n));
    });
    this.anchor = t, M(this, kr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      R
    ), i = Li();
    if (r && !f(this, We).has(t) && !f(this, Te).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = ft();
        s.append(a), f(this, Te).set(t, {
          effect: Le(() => r(a)),
          fragment: s
        });
      } else
        f(this, We).set(
          t,
          Le(() => r(this.anchor))
        );
    if (f(this, je).set(n, t), i) {
      for (const [l, o] of f(this, We))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of f(this, Te))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(f(this, Sr)), n.ondiscard(f(this, Jr));
    } else
      f(this, Sr).call(this, n);
  }
}
je = new WeakMap(), We = new WeakMap(), Te = new WeakMap(), Mt = new WeakMap(), kr = new WeakMap(), Sr = new WeakMap(), Jr = new WeakMap();
function Aa(e, t, ...r) {
  var n = new zn(e);
  Mr(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, Nt);
}
function j(e, t, r = !1) {
  var n = new zn(e), i = r ? Nt : 0;
  function s(a, l) {
    n.ensure(a, l);
  }
  Mr(() => {
    var a = !1;
    t((l, o = 0) => {
      a = !0, s(o, l);
    }), a || s(-1, null);
  }, i);
}
const Ca = Symbol("NaN");
function Ma(e, t, r) {
  var n = new zn(e);
  Mr(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    Ca), n.ensure(i, r);
  });
}
function jn(e, t) {
  return t;
}
function Ra(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let g = t[l];
    Rt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            An(e, Qr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var o = n.length === 0 && r !== null && e.pending.size === 0;
    if (o) {
      var c = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      ea(d), d.append(c), e.items.clear();
    }
    An(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function An(e, t, r = !0) {
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
      s.f |= Je;
      const a = document.createDocumentFragment();
      Hn(s, a);
    } else
      ye(t[i], r);
  }
}
var ei;
function $e(e, t, r, n, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map(), o = (t & 4) !== 0;
  if (o) {
    var c = (
      /** @type {Element} */
      e
    );
    a = c.appendChild(ft());
  }
  var d = null, g = /* @__PURE__ */ Gs(() => {
    var U = r();
    return (
      /** @type {V[]} */
      ui(U) ? U : U == null ? [] : Qr(U)
    );
  }), v, h = /* @__PURE__ */ new Map(), p = !0;
  function w(U) {
    (K.effect.f & Me) === 0 && (K.pending.delete(U), K.fallback = d, Ia(K, v, a, t, n), d !== null && (v.length === 0 ? (d.f & Je) === 0 ? Wr(d) : (d.f ^= Je, _r(d, null, a)) : Rt(d, () => {
      d = null;
    })));
  }
  function _(U) {
    K.pending.delete(U);
  }
  var E = Mr(() => {
    v = /** @type {V[]} */
    u(g);
    for (var U = v.length, Z = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      R
    ), N = Li(), A = 0; A < U; A += 1) {
      var X = v[A], m = n(X, A), S = p ? null : l.get(m);
      S ? (S.v && nr(S.v, X), S.i && nr(S.i, A), N && C.unskip_effect(S.e)) : (S = Na(
        l,
        p ? a : ei ?? (ei = ft()),
        X,
        m,
        A,
        i,
        t,
        r
      ), p || (S.e.f |= Je), l.set(m, S)), Z.add(m);
    }
    if (U === 0 && s && !d && (p ? d = Le(() => s(a)) : (d = Le(() => s(ei ?? (ei = ft()))), d.f |= Je)), U > Z.size && Rs(), !p)
      if (h.set(C, Z), N) {
        for (const [Q, ee] of l)
          Z.has(Q) || C.skip_effect(ee.e);
        C.oncommit(w), C.ondiscard(_);
      } else
        w(C);
    u(g);
  }), K = { effect: E, items: l, pending: h, outrogroups: null, fallback: d };
  p = !1;
}
function fr(e) {
  for (; e !== null && (e.f & Pe) === 0; )
    e = e.next;
  return e;
}
function Ia(e, t, r, n, i) {
  var S, Q, ee, ue, be, le, ne, ce, Re;
  var s = (n & 8) !== 0, a = t.length, l = e.items, o = fr(e.effect.first), c, d = null, g, v = [], h = [], p, w, _, E;
  if (s)
    for (E = 0; E < a; E += 1)
      p = t[E], w = i(p, E), _ = /** @type {EachItem} */
      l.get(w).e, (_.f & Je) === 0 && ((Q = (S = _.nodes) == null ? void 0 : S.a) == null || Q.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(_));
  for (E = 0; E < a; E += 1) {
    if (p = t[E], w = i(p, E), _ = /** @type {EachItem} */
    l.get(w).e, e.outrogroups !== null)
      for (const T of e.outrogroups)
        T.pending.delete(_), T.done.delete(_);
    if ((_.f & pe) !== 0 && (Wr(_), s && ((ue = (ee = _.nodes) == null ? void 0 : ee.a) == null || ue.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(_))), (_.f & Je) !== 0)
      if (_.f ^= Je, _ === o)
        _r(_, null, r);
      else {
        var K = d ? d.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), pt(e, d, _), pt(e, _, K), _r(_, K, r), d = _, v = [], h = [], o = fr(d.next);
        continue;
      }
    if (_ !== o) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < h.length) {
          var U = h[0], Z;
          d = U.prev;
          var C = v[0], N = v[v.length - 1];
          for (Z = 0; Z < v.length; Z += 1)
            _r(v[Z], U, r);
          for (Z = 0; Z < h.length; Z += 1)
            c.delete(h[Z]);
          pt(e, C.prev, N.next), pt(e, d, C), pt(e, N, U), o = U, d = N, E -= 1, v = [], h = [];
        } else
          c.delete(_), _r(_, o, r), pt(e, _.prev, _.next), pt(e, _, d === null ? e.effect.first : d.next), pt(e, d, _), d = _;
        continue;
      }
      for (v = [], h = []; o !== null && o !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(o), h.push(o), o = fr(o.next);
      if (o === null)
        continue;
    }
    (_.f & Je) === 0 && v.push(_), d = _, o = fr(_.next);
  }
  if (e.outrogroups !== null) {
    for (const T of e.outrogroups)
      T.pending.size === 0 && (An(e, Qr(T.done)), (be = e.outrogroups) == null || be.delete(T));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || c !== void 0) {
    var A = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & pe) === 0 && A.push(_);
    for (; o !== null; )
      (o.f & pe) === 0 && o !== e.fallback && A.push(o), o = fr(o.next);
    var X = A.length;
    if (X > 0) {
      var m = (n & 4) !== 0 && a === 0 ? r : null;
      if (s) {
        for (E = 0; E < X; E += 1)
          (ne = (le = A[E].nodes) == null ? void 0 : le.a) == null || ne.measure();
        for (E = 0; E < X; E += 1)
          (Re = (ce = A[E].nodes) == null ? void 0 : ce.a) == null || Re.fix();
      }
      Ra(e, A, m);
    }
  }
  s && ot(() => {
    var T, V;
    if (g !== void 0)
      for (_ of g)
        (V = (T = _.nodes) == null ? void 0 : T.a) == null || V.apply();
  });
}
function Na(e, t, r, n, i, s, a, l) {
  var o = (a & 1) !== 0 ? (a & 16) === 0 ? /* @__PURE__ */ Js(r, !1, !1) : Dt(r) : null, c = (a & 2) !== 0 ? Dt(i) : null;
  return {
    v: o,
    i: c,
    e: Le(() => (s(t, o ?? r, c ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function _r(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cr(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function pt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Oa(e, t, r) {
  Fi(() => {
    var n = en(() => t(e, r == null ? void 0 : r()) || {});
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
const ti = [...` 	
\r\f \v\uFEFF`];
function La(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || ti.includes(n[a - 1])) && (l === n.length || ti.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
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
    var l = La(r, n, s);
    l == null ? e.removeAttribute("class") : e.className = l, e[_n] = r;
  } else if (s && i !== s)
    for (var o in s) {
      var c = !!s[o];
      (i == null || c !== !!i[o]) && e.classList.toggle(o, c);
    }
  return s;
}
const Da = Symbol("is custom element"), Pa = Symbol("is html"), Fa = Ss ? "progress" : "PROGRESS";
function Ua(e, t) {
  var r = $i(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Fa) || (e.value = t ?? "");
}
function Ze(e, t, r, n) {
  var i = $i(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[Es] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ha(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function $i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Ur] ?? (e[Ur] = {
      [Da]: e.nodeName.includes("-"),
      [Pa]: e.namespaceURI === ds
    })
  );
}
var ri = /* @__PURE__ */ new Map();
function Ha(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ri.get(t);
  if (r) return r;
  ri.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = _s(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = vi(i);
  }
  return r;
}
function dn(e, t) {
  return e === t || (e == null ? void 0 : e[Fr]) === t;
}
function za(e = Rn(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ge.r
  ), s = (
    /** @type {Effect} */
    F
  );
  return Fi(() => {
    var a, l;
    return Ui(() => {
      a = l, l = [], en(() => {
        dn(r(...l), e) || (t(e, ...l), a && dn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & Vr; )
        o = o.parent;
      const c = () => {
        l && dn(r(...l), e) && t(null, ...l);
      }, d = o.teardown;
      o.teardown = () => {
        c(), d == null || d();
      };
    };
  }), e;
}
function Kt(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i), l;
  l = /** @type {V} */
  e[t], l === void 0 && n !== void 0 && (l = a());
  var o;
  return o = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? a() : (s = !0, c);
  }, o;
}
const ja = "5";
var li;
typeof window < "u" && ((li = window.__svelte ?? (window.__svelte = {})).v ?? (li.v = /* @__PURE__ */ new Set())).add(ja);
let rn = "";
function Ba(e) {
  rn = e;
}
async function Nr(e, t) {
  const r = new URL(`${rn}${e}`, window.location.origin);
  for (const [n, i] of Object.entries(t ?? {}))
    i != null && i !== "" && r.searchParams.set(n, String(i));
  try {
    const n = await fetch(r);
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
const es = (e) => Nr("/accounts", e), Va = (e) => Nr(`/accounts/${encodeURIComponent(e)}`), qa = (e, t, r) => Nr(`/accounts/${encodeURIComponent(e)}/videos`, { site: t, page: r }), Ga = (e, t, r) => Nr(`/accounts/${encodeURIComponent(e)}/galleries`, { site: t, page: r }), Ya = (e, t) => Nr(`/galleries/${encodeURIComponent(e)}/${encodeURIComponent(t)}`), Ka = (e, t, r) => `${rn}/image?site=${encodeURIComponent(e)}&gallery_id=${encodeURIComponent(t)}&index=${r}`, ni = (e, t, r = 0) => `${rn}/stream?site=${encodeURIComponent(e)}&video_id=${encodeURIComponent(t)}&index=${r}`;
var Wa = /* @__PURE__ */ I('<img loading="lazy"/>'), Za = /* @__PURE__ */ I('<span class="ofx-initials"> </span>');
function Bn(e, t) {
  bt(t, !0);
  let r = Kt(t, "src", 3, null), n = Kt(t, "alt", 3, ""), i = Kt(t, "name", 3, ""), s = /* @__PURE__ */ H(!1);
  const a = /* @__PURE__ */ lt(() => (i() || n() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((g) => {
    var v;
    return ((v = g[0]) == null ? void 0 : v.toUpperCase()) ?? "";
  }).join(""));
  var l = Ir(), o = Ce(l);
  {
    var c = (g) => {
      var v = Wa();
      G(() => {
        Ze(v, "src", r()), Ze(v, "alt", n());
      }), Ji("error", v, () => b(s, !0)), y(g, v);
    }, d = (g) => {
      var v = Za(), h = J(v, !0);
      G(() => q(h, u(a))), y(g, v);
    };
    j(o, (g) => {
      r() && !u(s) ? g(c) : g(d, -1);
    });
  }
  y(e, l), xt();
}
var Xa = /* @__PURE__ */ I('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ts(e, t) {
  bt(t, !0);
  var r = Xa(), n = Y(r), i = Y(n);
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
  var s = x(n, 2), a = J(s, !0), l = x(s, 2), o = J(l);
  G(() => {
    Ze(r, "href", `/x/onlyfans/${t.account.handle ?? ""}`), Ze(s, "title", t.account.display_name), q(a, t.account.display_name), q(o, `${t.account.source_count ?? ""}
        ${t.account.source_count === 1 ? "site" : "sites"}`);
  }), _e("click", r, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), t.navigate(`/x/onlyfans/${t.account.handle}`));
  }), y(e, r), xt();
}
tn(["click"]);
var Ja = /* @__PURE__ */ I('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), Qa = /* @__PURE__ */ I('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), $a = /* @__PURE__ */ I('<span class="ofx-note"> </span>'), eo = /* @__PURE__ */ I('<div class="ofx-rail-actions"><!></div>'), to = /* @__PURE__ */ I('<div class="ofx-rail-item"><!></div>'), ro = /* @__PURE__ */ I('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Bt(e, t) {
  bt(t, !0);
  let r = Kt(t, "note", 3, ""), n = Kt(t, "size", 3, 20), i = /* @__PURE__ */ H(Qe([])), s = /* @__PURE__ */ H(!0), a = /* @__PURE__ */ H(0);
  function l() {
    b(a, u(a) + 1);
  }
  Fn(() => {
    const h = t.order, p = n();
    u(a);
    let w = !1;
    return b(s, !0), es({ order: h, limit: p, offset: 0 }).then((_) => {
      w || (b(i, (_ == null ? void 0 : _.items) ?? [], !0), b(s, !1));
    }), () => {
      w = !0;
    };
  });
  var o = { reload: l }, c = Ir(), d = Ce(c);
  {
    var g = (h) => {
      var p = Qa(), w = Y(p), _ = J(w, !0), E = x(w, 2);
      $e(E, 20, () => Array(8), jn, (K, U) => {
        var Z = Ja();
        y(K, Z);
      }), G(() => q(_, t.title)), y(h, p);
    }, v = (h) => {
      var p = ro(), w = Y(p), _ = Y(w), E = J(_, !0), K = x(_, 2);
      {
        var U = (A) => {
          var X = $a(), m = J(X, !0);
          G(() => q(m, r())), y(A, X);
        };
        j(K, (A) => {
          r() && A(U);
        });
      }
      var Z = x(K, 2);
      {
        var C = (A) => {
          var X = eo(), m = Y(X);
          Aa(m, () => t.actions), y(A, X);
        };
        j(Z, (A) => {
          t.actions && A(C);
        });
      }
      var N = x(w, 2);
      $e(N, 21, () => u(i), (A) => A.handle, (A, X) => {
        var m = to(), S = Y(m);
        ts(S, {
          get account() {
            return u(X);
          },
          get navigate() {
            return t.navigate;
          }
        }), y(A, m);
      }), G(() => q(E, t.title)), y(h, p);
    };
    j(d, (h) => {
      u(s) ? h(g) : u(i).length && h(v, 1);
    });
  }
  return y(e, c), xt(o);
}
var no = /* @__PURE__ */ I(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), io = /* @__PURE__ */ I('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), so = /* @__PURE__ */ I('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), ao = /* @__PURE__ */ I('<div class="ofx-sentinel"></div>'), oo = /* @__PURE__ */ I('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), lo = /* @__PURE__ */ I('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), fo = /* @__PURE__ */ I("<!> <!> <!> <!> <!> <!>", 1), uo = /* @__PURE__ */ I('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function co(e, t) {
  bt(t, !0);
  const r = 60, n = 20;
  let i = /* @__PURE__ */ H(Qe([])), s = /* @__PURE__ */ H(0), a = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(""), c = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(""), g, v = /* @__PURE__ */ H(null);
  const h = /* @__PURE__ */ lt(() => u(o).trim()), p = /* @__PURE__ */ lt(() => u(h) !== "" || u(c)), w = /* @__PURE__ */ lt(() => u(i).length < u(s));
  async function _(T, V) {
    b(a, !0);
    const fe = await es({ search: T, limit: r, offset: V });
    if (T !== u(o).trim()) {
      b(a, !1);
      return;
    }
    fe ? (b(i, V === 0 ? fe.items : [...u(i), ...fe.items], !0), b(s, fe.total, !0), b(d, T, !0), b(l, !1)) : b(l, !0), b(a, !1);
  }
  function E(T) {
    b(o, T.currentTarget.value, !0), clearTimeout(g), g = setTimeout(() => _(u(o).trim(), 0), 250);
  }
  function K() {
    b(c, !0), _("", 0);
  }
  function U() {
    b(c, !1), b(o, ""), b(i, [], !0), b(s, 0), b(d, "");
  }
  function Z(T) {
    const V = new IntersectionObserver(
      (fe) => {
        var Ue;
        (Ue = fe[0]) != null && Ue.isIntersecting && u(w) && !u(a) && _(u(d), u(i).length);
      },
      { rootMargin: "600px" }
    );
    return V.observe(T), { destroy: () => V.disconnect() };
  }
  var C = uo(), N = x(Ce(C), 2), A = Y(N);
  {
    var X = (T) => {
      var V = Lr();
      G(
        (fe, Ue) => q(V, `${fe ?? ""} of ${Ue ?? ""}
        ${u(d) ? `matching “${u(d)}”` : "accounts"}`),
        [
          () => u(i).length.toLocaleString(),
          () => u(s).toLocaleString()
        ]
      ), y(T, V);
    }, m = (T) => {
      var V = Lr("loading…");
      y(T, V);
    }, S = (T) => {
      var V = Lr("nothing found");
      y(T, V);
    }, Q = (T) => {
      var V = Lr("performers, gathered from the archive sites");
      y(T, V);
    };
    j(A, (T) => {
      u(p) && u(s) ? T(X) : u(p) && u(a) ? T(m, 1) : u(p) ? T(S, 2) : T(Q, -1);
    });
  }
  var ee = x(N, 2), ue = x(Y(ee), 2), be = x(ee, 2);
  {
    var le = (T) => {
      var V = no();
      y(T, V);
    };
    j(be, (T) => {
      u(l) && T(le);
    });
  }
  var ne = x(be, 2);
  {
    var ce = (T) => {
      var V = oo(), fe = Ce(V);
      {
        var Ue = (te) => {
          var ve = io(), Ge = J(ve);
          _e("click", Ge, U), y(te, ve);
        };
        j(fe, (te) => {
          u(c) && !u(h) && te(Ue);
        });
      }
      var vt = x(fe, 2), dt = Y(vt);
      $e(dt, 17, () => u(i), (te) => te.handle, (te, ve) => {
        ts(te, {
          get account() {
            return u(ve);
          },
          get navigate() {
            return t.navigate;
          }
        });
      });
      var Ft = x(dt, 2);
      {
        var Ut = (te) => {
          var ve = Ir(), Ge = Ce(ve);
          $e(Ge, 16, () => Array(12), jn, (Ht, nn) => {
            var sn = so();
            y(Ht, sn);
          }), y(te, ve);
        };
        j(Ft, (te) => {
          u(a) && te(Ut);
        });
      }
      var Or = x(vt, 2);
      {
        var ht = (te) => {
          var ve = ao();
          Oa(ve, (Ge) => Z == null ? void 0 : Z(Ge)), y(te, ve);
        };
        j(Or, (te) => {
          u(w) && te(ht);
        });
      }
      y(T, V);
    }, Re = (T) => {
      var V = fo(), fe = Ce(V);
      Bt(fe, {
        title: "Trending",
        note: "fastest growing this week",
        order: "trending",
        get navigate() {
          return t.navigate;
        }
      });
      var Ue = x(fe, 2);
      Bt(Ue, {
        title: "Rising",
        note: "growing fast from a small base",
        order: "rising",
        get navigate() {
          return t.navigate;
        }
      });
      var vt = x(Ue, 2);
      Bt(vt, {
        title: "Most popular",
        note: "most watched across the archive sites",
        order: "popular",
        get navigate() {
          return t.navigate;
        }
      });
      var dt = x(vt, 2);
      Bt(dt, {
        title: "New to the index",
        order: "new",
        get navigate() {
          return t.navigate;
        }
      });
      var Ft = x(dt, 2);
      Bt(Ft, {
        title: "Carried by the most sites",
        order: "carried",
        get navigate() {
          return t.navigate;
        }
      });
      var Ut = x(Ft, 2);
      za(
        Bt(Ut, {
          title: "Something else",
          order: "random",
          size: n,
          get navigate() {
            return t.navigate;
          },
          actions: (ht) => {
            var te = lo(), ve = Ce(te), Ge = x(ve, 2);
            _e("click", ve, () => {
              var Ht;
              return (Ht = u(v)) == null ? void 0 : Ht.reload();
            }), _e("click", Ge, K), y(ht, te);
          },
          $$slots: { actions: !0 }
        }),
        (ht) => b(v, ht, !0),
        () => u(v)
      ), y(T, V);
    };
    j(ne, (T) => {
      u(p) ? T(ce) : T(Re, -1);
    });
  }
  G(() => Ua(ue, u(o))), _e("input", ue, E), y(e, C), xt();
}
tn(["input", "click"]);
var vo = /* @__PURE__ */ I('<p class="ofx-error"> </p>'), ho = /* @__PURE__ */ I('<p class="ofx-note"> </p>'), ii = /* @__PURE__ */ I('<span class="ofx-badge"> </span>'), _o = /* @__PURE__ */ I('<button class="ofx-tile" type="button"><div class="ofx-thumb"><!> <!></div> <p> </p></button>'), po = /* @__PURE__ */ I('<div class="ofx-skeleton"></div>'), go = /* @__PURE__ */ I('<button class="ofx-btn ofx-outline" type="button"> </button>'), mo = /* @__PURE__ */ I('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-tiles"><!> <!></div> <!></section>');
function wo(e, t) {
  bt(t, !0);
  let r = /* @__PURE__ */ H(Qe([])), n = /* @__PURE__ */ H(0), i = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(!1);
  async function l() {
    if (u(i) || u(s)) return;
    b(i, !0);
    const C = u(n) + 1, A = await (t.mode === "images" ? Ga : qa)(t.handle, t.site, C);
    A === null ? b(a, !0) : (b(r, [...u(r), ...A], !0), b(n, C), A.length === 0 && b(s, !0)), b(i, !1);
  }
  Fn(() => {
    t.mode, t.handle, t.site, en(() => {
      b(r, [], !0), b(n, 0), b(s, !1), b(a, !1), b(i, !1), l();
    });
  });
  function o(C) {
    return C ? `${Math.floor(C / 60)}:${String(C % 60).padStart(2, "0")}` : null;
  }
  var c = mo(), d = Y(c), g = J(d, !0), v = x(d, 2);
  {
    var h = (C) => {
      var N = vo(), A = J(N);
      G(() => q(A, `${t.site ?? ""} did not answer.`)), y(C, N);
    }, p = (C) => {
      var N = ho(), A = J(N);
      G(() => q(A, `Nothing here on ${t.site ?? ""}.`)), y(C, N);
    };
    j(v, (C) => {
      u(a) ? C(h) : !u(i) && u(r).length === 0 && C(p, 1);
    });
  }
  var w = x(v, 2), _ = Y(w);
  $e(_, 17, () => u(r), (C) => C.video_id ?? C.gallery_id, (C, N) => {
    var A = _o(), X = Y(A), m = Y(X);
    {
      let ne = /* @__PURE__ */ lt(() => t.mode === "images" ? u(N).cover : u(N).thumbnail);
      Bn(m, {
        get src() {
          return u(ne);
        },
        get alt() {
          return u(N).title;
        },
        get name() {
          return u(N).title;
        }
      });
    }
    var S = x(m, 2);
    {
      var Q = (ne) => {
        var ce = ii(), Re = J(ce, !0);
        G(() => q(Re, u(N).image_count)), y(ne, ce);
      }, ee = (ne) => {
        var ce = ii(), Re = J(ce, !0);
        G((T) => q(Re, T), [() => o(u(N).duration)]), y(ne, ce);
      }, ue = /* @__PURE__ */ lt(() => o(u(N).duration));
      j(S, (ne) => {
        t.mode === "images" && u(N).image_count ? ne(Q) : u(ue) && ne(ee, 1);
      });
    }
    var be = x(X, 2), le = J(be, !0);
    G(() => q(le, u(N).title)), _e("click", A, () => t.mode === "images" ? t.ongallery(u(N)) : t.onplay(u(N))), y(C, A);
  });
  var E = x(_, 2);
  {
    var K = (C) => {
      var N = Ir(), A = Ce(N);
      $e(A, 16, () => Array(4), jn, (X, m) => {
        var S = po();
        y(X, S);
      }), y(C, N);
    };
    j(E, (C) => {
      u(i) && C(K);
    });
  }
  var U = x(w, 2);
  {
    var Z = (C) => {
      var N = go(), A = J(N, !0);
      G(() => {
        N.disabled = u(i), q(A, u(i) ? "Loading…" : "Load more");
      }), _e("click", N, l), y(C, N);
    };
    j(U, (C) => {
      !u(s) && !u(a) && u(r).length > 0 && C(Z);
    });
  }
  G(() => q(g, t.site)), y(e, c), xt();
}
tn(["click"]);
var yo = /* @__PURE__ */ I('<p class="ofx-error">That account could not be loaded.</p>'), bo = /* @__PURE__ */ I('<div class="ofx-banner"><img alt=""/></div>'), xo = /* @__PURE__ */ ha('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Eo = /* @__PURE__ */ I('<p> </p> <button class="ofx-more" type="button"> </button>', 1), ko = /* @__PURE__ */ I("<span><b> </b> </span>"), So = /* @__PURE__ */ I('<div class="ofx-stats"></div>'), To = /* @__PURE__ */ I("<span> </span>"), si = /* @__PURE__ */ I('<a target="_blank" rel="noreferrer noopener"> </a>'), Ao = /* @__PURE__ */ I('<button type="button"> </button>'), Co = /* @__PURE__ */ I('<span class="ofx-count"> </span>'), Mo = /* @__PURE__ */ I('<button type="button"> <!></button>'), Ro = /* @__PURE__ */ I('<p class="ofx-error"> </p>'), Io = /* @__PURE__ */ I(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), No = /* @__PURE__ */ I('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs"></div></header> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!>', 1), Oo = /* @__PURE__ */ I('<p class="ofx-note">Loading…</p>'), Lo = /* @__PURE__ */ I('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Do = /* @__PURE__ */ I('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Po = /* @__PURE__ */ I('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Fo = /* @__PURE__ */ I("<!> <!> <!>", 1);
function Uo(e, t) {
  bt(t, !0);
  let r = /* @__PURE__ */ H(null), n = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H("videos"), s = /* @__PURE__ */ H(Qe(/* @__PURE__ */ new Set())), a = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(null);
  Fn(() => {
    Va(t.handle).then((m) => {
      m ? b(r, m, !0) : b(n, !0);
    });
  });
  const d = /* @__PURE__ */ lt(() => {
    var m, S, Q, ee;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = u(r)) == null ? void 0 : m.posts_count],
      ["photos", (S = u(r)) == null ? void 0 : S.photos_count],
      ["videos", (Q = u(r)) == null ? void 0 : Q.videos_count],
      ["likes", (ee = u(r)) == null ? void 0 : ee.likes_count]
    ].filter(([, ue]) => ue != null);
  });
  function g(m) {
    const S = new Set(u(s));
    S.has(m) ? S.delete(m) : S.add(m), b(s, S, !0);
  }
  function v(m) {
    var S, Q;
    if (!((S = t.host) != null && S.play)) {
      b(l, m, !0);
      return;
    }
    t.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: ni(m.site, m.video_id),
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
      contextTitle: ((Q = u(r)) == null ? void 0 : Q.display_name) || t.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  async function h(m) {
    b(c, null);
    const S = await Ya(m.site, m.gallery_id);
    if (!S) {
      b(c, "Could not open that gallery");
      return;
    }
    if (S.length === 0) {
      b(c, "That site served no images for this gallery");
      return;
    }
    b(o, { gallery: m, count: S.length, index: 0 }, !0);
  }
  function p(m) {
    u(o) && b(
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
      b(l, null), b(o, null);
      return;
    }
    u(o) && (m.key === "ArrowRight" && p(1), m.key === "ArrowLeft" && p(-1));
  }
  var _ = Fo();
  Ji("keydown", wn, w);
  var E = Ce(_);
  {
    var K = (m) => {
      var S = yo();
      y(m, S);
    }, U = (m) => {
      var S = No(), Q = Ce(S), ee = Y(Q);
      {
        var ue = (k) => {
          var L = bo(), z = J(L);
          G(() => Ze(z, "src", u(r).header_url)), y(k, L);
        };
        j(ee, (k) => {
          u(r).header_url && k(ue);
        });
      }
      var be = x(ee, 2), le = Y(be);
      let ne;
      var ce = Y(le);
      Bn(ce, {
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
      var Re = x(le, 2), T = Y(Re), V = Y(T), fe = x(V);
      {
        var Ue = (k) => {
          var L = xo();
          y(k, L);
        };
        j(fe, (k) => {
          u(r).is_verified && k(Ue);
        });
      }
      var vt = x(T, 2), dt = Y(vt), Ft = x(dt, 2), Ut = x(vt, 2);
      {
        var Or = (k) => {
          var L = Eo(), z = Ce(L);
          let xe;
          var nt = J(z, !0), zt = x(z, 2), or = J(zt, !0);
          G(() => {
            xe = Pr(z, 1, "ofx-bio", null, xe, { "ofx-clamped": !u(a) }), q(nt, u(r).bio), q(or, u(a) ? "less" : "more");
          }), _e("click", zt, () => b(a, !u(a))), y(k, L);
        };
        j(Ut, (k) => {
          u(r).bio && k(Or);
        });
      }
      var ht = x(Ut, 2);
      {
        var te = (k) => {
          var L = So();
          $e(L, 21, () => u(d), ([z, xe]) => z, (z, xe) => {
            var nt = /* @__PURE__ */ lt(() => ys(u(xe), 2));
            let zt = () => u(nt)[0], or = () => u(nt)[1];
            var _t = ko(), lr = Y(_t), an = J(lr, !0), fs = x(lr);
            G(
              (us) => {
                q(an, us), q(fs, ` ${zt() ?? ""}`);
              },
              [() => or().toLocaleString()]
            ), y(z, _t);
          }), y(k, L);
        };
        j(ht, (k) => {
          u(d).length && k(te);
        });
      }
      var ve = x(ht, 2), Ge = Y(ve);
      {
        var Ht = (k) => {
          var L = To(), z = J(L, !0);
          G(() => q(z, u(r).location)), y(k, L);
        };
        j(Ge, (k) => {
          u(r).location && k(Ht);
        });
      }
      var nn = x(Ge, 2);
      {
        var sn = (k) => {
          var L = si(), z = J(L, !0);
          G(
            (xe) => {
              Ze(L, "href", u(r).website), q(z, xe);
            },
            [() => u(r).website.replace(/^https?:\/\//, "")]
          ), y(k, L);
        };
        j(nn, (k) => {
          u(r).website && k(sn);
        });
      }
      var rs = x(nn, 2);
      {
        var ns = (k) => {
          var L = si(), z = J(L);
          G(() => {
            Ze(L, "href", u(r).of_url), q(z, `onlyfans.com/${u(r).of_username ?? ""}`);
          }), y(k, L);
        };
        j(rs, (k) => {
          u(r).of_url && k(ns);
        });
      }
      var is = x(be, 2);
      $e(is, 20, () => ["videos", "images"], (k) => k, (k, L) => {
        var z = Ao();
        let xe;
        var nt = J(z, !0);
        G(() => {
          xe = Pr(z, 1, "ofx-tab", null, xe, { "ofx-on": u(i) === L }), q(nt, L);
        }), _e("click", z, () => b(i, L, !0)), y(k, z);
      });
      var Vn = x(Q, 2), qn = x(Y(Vn), 2);
      $e(qn, 17, () => u(r).sources, (k) => k.site, (k, L) => {
        var z = Mo();
        let xe;
        var nt = Y(z), zt = x(nt);
        {
          var or = (_t) => {
            var lr = Co(), an = J(lr, !0);
            G(() => q(an, u(L).video_count)), y(_t, lr);
          };
          j(zt, (_t) => {
            u(L).video_count && _t(or);
          });
        }
        G(
          (_t) => {
            xe = Pr(z, 1, "ofx-btn ofx-outline", null, xe, { "ofx-on": _t }), q(nt, `${u(L).site ?? ""} `);
          },
          [() => u(s).has(u(L).site)]
        ), _e("click", z, () => g(u(L).site)), y(k, z);
      });
      var ss = x(qn, 2), Gn = x(Vn, 2);
      {
        var as = (k) => {
          var L = Ro(), z = J(L, !0);
          G(() => q(z, u(c))), y(k, L);
        };
        j(Gn, (k) => {
          u(c) && k(as);
        });
      }
      var Yn = x(Gn, 2);
      {
        var os = (k) => {
          var L = Io();
          y(k, L);
        };
        j(Yn, (k) => {
          u(s).size === 0 && k(os);
        });
      }
      var ls = x(Yn, 2);
      $e(ls, 17, () => u(r).sources.filter((k) => u(s).has(k.site)), (k) => k.site, (k, L) => {
        wo(k, {
          get handle() {
            return u(r).handle;
          },
          get site() {
            return u(L).site;
          },
          get mode() {
            return u(i);
          },
          onplay: (z) => v(z),
          ongallery: h
        });
      }), G(() => {
        ne = Pr(le, 1, "ofx-avatar", null, ne, { "ofx-overlap": !!u(r).header_url }), q(V, `${u(r).display_name ?? ""} `), q(dt, `@${(u(r).of_username || u(r).handle) ?? ""} `), q(Ft, ` ${u(r).source_count ?? ""}
                    ${u(r).source_count === 1 ? "site" : "sites"}`);
      }), _e("click", ss, () => t.navigate("/x/onlyfans")), y(m, S);
    }, Z = (m) => {
      var S = Oo();
      y(m, S);
    };
    j(E, (m) => {
      u(n) ? m(K) : u(r) ? m(U, 1) : m(Z, -1);
    });
  }
  var C = x(E, 2);
  {
    var N = (m) => {
      var S = Lo(), Q = Y(S), ee = x(Q, 2);
      G((ue) => Ze(ee, "src", ue), [
        () => ni(u(l).site, u(l).video_id)
      ]), _e("click", Q, () => b(l, null)), y(m, S);
    };
    j(C, (m) => {
      u(l) && m(N);
    });
  }
  var A = x(C, 2);
  {
    var X = (m) => {
      var S = Po(), Q = Y(S), ee = x(Q, 2);
      {
        var ue = (le) => {
          var ne = Do(), ce = Ce(ne), Re = x(ce, 2);
          _e("click", ce, () => p(-1)), _e("click", Re, () => p(1)), y(le, ne);
        };
        j(ee, (le) => {
          u(o).count > 1 && le(ue);
        });
      }
      var be = x(ee, 2);
      G(
        (le) => {
          Ze(be, "src", le), Ze(be, "alt", `${u(o).gallery.title ?? ""} ${u(o).index + 1} of ${u(o).count ?? ""}`);
        },
        [
          () => Ka(u(o).gallery.site, u(o).gallery.gallery_id, u(o).index)
        ]
      ), _e("click", Q, () => b(o, null)), y(m, S);
    };
    j(A, (m) => {
      u(o) && m(X);
    });
  }
  y(e, _), xt();
}
tn(["click"]);
var Ho = /* @__PURE__ */ I('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function zo(e, t) {
  bt(t, !0);
  let r = Kt(t, "path", 3, "");
  Ba(t.api);
  const n = /* @__PURE__ */ lt(() => (r() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Ho(), s = Y(i), a = Y(s);
  {
    var l = (c) => {
      var d = Ir(), g = Ce(d);
      Ma(g, () => u(n), (v) => {
        Uo(v, {
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
      }), y(c, d);
    }, o = (c) => {
      co(c, {
        get navigate() {
          return t.navigate;
        }
      });
    };
    j(a, (c) => {
      u(n) ? c(l) : c(o, -1);
    });
  }
  y(e, i), xt();
}
function Vo({ target: e, path: t, api: r, navigate: n, host: i }) {
  const s = Qe({ path: t ?? "", api: r, navigate: n, host: i }), a = ka(zo, { target: e, props: s });
  return {
    update(l) {
      s.path = l ?? "";
    },
    destroy() {
      Ta(a);
    }
  };
}
export {
  Vo as default
};

var La = Object.defineProperty;
var ui = (t) => {
  throw TypeError(t);
};
var Pa = (t, e, n) => e in t ? La(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ut = (t, e, n) => Pa(t, typeof e != "symbol" ? e + "" : e, n), vr = (t, e, n) => e.has(t) || ui("Cannot " + n);
var u = (t, e, n) => (vr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), G = (t, e, n) => e.has(t) ? ui("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), z = (t, e, n, r) => (vr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), $ = (t, e, n) => (vr(t, e, "access private method"), n);
const gt = Symbol("uninitialized"), Da = "http://www.w3.org/1999/xhtml", Ai = !1;
var Ci = Array.isArray, Fa = Array.prototype.indexOf, Xn = Array.prototype.includes, fr = Array.from, jr = Object.defineProperty, Rn = Object.getOwnPropertyDescriptor, Ri = Object.getOwnPropertyDescriptors, Ua = Object.prototype, ja = Array.prototype, Hr = Object.getPrototypeOf, ci = Object.isExtensible;
const Qn = () => {
};
function Ha(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ii() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function $n(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const xt = 2, un = 4, ur = 8, Mi = 1 << 24, ne = 16, Xt = 32, Se = 64, mr = 128, zr = 256, Jt = 512, mt = 1024, _t = 2048, ie = 4096, Mt = 8192, Bt = 16384, hn = 32768, tr = 1 << 25, Be = 65536, er = 1 << 17, za = 1 << 18, _n = 1 << 19, Va = 1 << 20, he = 1 << 25, qe = 65536, nr = 1 << 21, tn = 1 << 22, Oe = 1 << 23, en = Symbol("$state"), Oi = Symbol("component"), Ba = Symbol(""), Kn = Symbol("attributes"), xr = Symbol("class"), yr = Symbol("style"), wn = Symbol("text"), jn = new class extends Error {
  constructor() {
    super(...arguments);
    Ut(this, "name", "StaleReactionError");
    Ut(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ei;
const qa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ei = globalThis.document) != null && Ei.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ga() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ya() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ni(t) {
  return t === this.v;
}
function Li(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Pi(t) {
  return !Li(t, this.v);
}
function Ka() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wa(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Za(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ja() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xa(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $a() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ts() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function es() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ns() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let rs = !1, Ot = null;
function cn(t) {
  Ot = t;
}
function ae(t, e = !1, n) {
  Ot = {
    p: Ot,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      tt
    ),
    l: null
  };
}
function se(t) {
  var e = (
    /** @type {ComponentContext} */
    Ot
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ea(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ot = e.p, Vr(t);
}
function Vr(t = {}) {
  return jr(t, Oi, { value: !0 }), t;
}
function Di() {
  return !0;
}
let Xe = [];
function is() {
  var t = Xe;
  Xe = [], Ha(t);
}
function we(t) {
  if (Xe.length === 0) {
    var e = Xe;
    queueMicrotask(() => {
      e === Xe && is();
    });
  }
  Xe.push(t);
}
const as = -7169;
function ht(t, e) {
  t.f = t.f & as | e;
}
function Br(t) {
  (t.f & Jt) !== 0 || t.deps === null ? ht(t, mt) : ht(t, ie);
}
function Fi(t) {
  if (t !== null)
    for (const e of t)
      (e.f & xt) === 0 || (e.f & qe) === 0 || (e.f ^= qe, Fi(
        /** @type {Derived} */
        e.deps
      ));
}
function Ui(t, e, n) {
  (t.f & _t) !== 0 ? e.add(t) : (t.f & ie) !== 0 && n.add(t), Fi(t.deps), ht(t, mt);
}
function ji(t, e, n) {
  if (t == null)
    return e(void 0), Qn;
  const r = qn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ss(t) {
  let e;
  return ji(t, (n) => e = n)(), e;
}
let wr = Symbol("unmounted");
function os(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Zi(void 0),
    unsubscribe: Qn
  });
  if (r.store !== t && !(wr in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = Qn;
    else {
      var i = !0;
      r.unsubscribe = ji(t, (a) => {
        i ? r.source.v = a : b(r.source, a);
      }), i = !1;
    }
  return t && wr in n ? ss(t) : s(r.source);
}
function ls() {
  const t = {};
  function e() {
    Zr(() => {
      for (var n in t)
        t[n].unsubscribe();
      jr(t, wr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Hn(t) {
  var e = Q, n = tt;
  Qt(null), ge(null);
  try {
    return t();
  } finally {
    Qt(e), ge(n);
  }
}
function fs(t, e, n, r) {
  const i = qr;
  var a = t.filter((d) => !d.settled), o = e.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var f = (
    /** @type {Effect} */
    tt
  ), l = us(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function h(d) {
    if ((f.f & Bt) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (p) {
        de(p, f);
      }
      rr();
    }
  }
  var x = Hi();
  if (n.length === 0) {
    c.then(() => h([])).finally(x);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ cs(d))).then(h).catch((d) => de(d, f)).finally(x);
  }
  c ? c.then(() => {
    l(), v(), rr();
  }) : v();
}
function us() {
  var t = (
    /** @type {Effect} */
    tt
  ), e = Q, n = Ot, r = (
    /** @type {Batch} */
    V
  );
  return function(a = !0) {
    ge(t), Qt(e), cn(n), a && (t.f & Bt) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function rr(t = !0) {
  ge(null), Qt(null), cn(null), t && (V == null || V.deactivate());
}
function Hi() {
  var t = (
    /** @type {Effect} */
    tt
  ), e = t.b, n = (
    /** @type {Batch} */
    V
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function qr(t) {
  var e = xt | _t;
  return tt !== null && (tt.f |= _n), {
    ctx: Ot,
    deps: null,
    effects: null,
    equals: Ni,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: tt,
    ac: null
  };
}
const kn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function cs(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    tt
  );
  r === null && Ka();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ye(
    /** @type {V} */
    gt
  ), o = !Q, f = /* @__PURE__ */ new Set();
  return Ts(() => {
    var d, p;
    var l = (
      /** @type {Effect} */
      tt
    ), c = Ii();
    i = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (T) => {
        T !== jn && c.reject(T);
      }).finally(rr);
    } catch (T) {
      c.reject(T), rr();
    }
    var h = (
      /** @type {Batch} */
      V
    );
    if (o) {
      if ((l.f & hn) !== 0)
        var x = Hi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (p = h.async_deriveds.get(l)) == null || p.reject(kn);
      else
        for (const T of f.values())
          T.reject(kn);
      f.add(c), h.async_deriveds.set(l, c);
    }
    const v = (T, _ = void 0) => {
      x == null || x(), f.delete(c), _ !== kn && (h.activate(), _ ? (a.f |= Oe, vn(a, _)) : ((a.f & Oe) !== 0 && (a.f ^= Oe), vn(a, T)), h.deactivate());
    };
    c.promise.then(v, (T) => v(null, T || "unknown"));
  }), Zr(() => {
    for (const l of f)
      l.reject(kn);
  }), new Promise((l) => {
    function c(h) {
      function x() {
        h === i ? l(a) : c(i);
      }
      h.then(x, x);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function kt(t) {
  const e = /* @__PURE__ */ qr(t);
  return oa(e), e;
}
// @__NO_SIDE_EFFECTS__
function vs(t) {
  const e = /* @__PURE__ */ qr(t);
  return e.equals = Pi, e;
}
function ds(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Dt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Gr(t) {
  var e, n = tt, r = t.parent;
  if (!Ne && r !== null && t.v !== gt && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Bt | Mt)) !== 0)
    return Ga(), t.v;
  ge(r);
  try {
    t.f &= ~qe, ds(t), e = ca(t);
  } finally {
    ge(n);
  }
  return e;
}
function zi(t) {
  var e = Gr(t);
  if (!t.equals(e) && (t.wv = fa(), (!(V != null && V.is_fork) || t.deps === null) && (V !== null ? (V.capture(t, e, !0), In == null || In.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ht(t, mt);
    return;
  }
  Ne || (yt !== null ? (Wr() || V != null && V.is_fork) && yt.set(t, e) : Br(t));
}
function hs(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Hn(() => {
        n.ac.abort(jn), n.ac = null;
      }), n.fn !== null && (n.teardown = Qn), On(n, 0), Xr(n));
}
function Vi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && dn(e);
}
let dr = null, Ze = null, V = null, In = null, yt = null, kr = null, hr = !1, Qe = null, Wn = null;
var vi = 0;
let _s = 1;
var nn, Ie, De, rn, an, sn, me, on, Lt, Ln, xe, te, ue, ln, Fe, st, Er, En, Sr, Bi, qi, Je, ps, Sn;
const sr = class sr {
  constructor() {
    G(this, st);
    Ut(this, "id", _s++);
    /** True as soon as `#process` was called */
    G(this, nn, !1);
    Ut(this, "linked", !0);
    /** @type {Batch | null} */
    G(this, Ie, null);
    /** @type {Batch | null} */
    G(this, De, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ut(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ut(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ut(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, rn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, an, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    G(this, sn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    G(this, me, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    G(this, on, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    G(this, Lt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    G(this, Ln, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    G(this, xe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    G(this, te, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    G(this, ue, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    G(this, ln, /* @__PURE__ */ new Set());
    Ut(this, "is_fork", !1);
    G(this, Fe, !1);
    Ze === null ? dr = Ze = this : (z(Ze, De, this), z(this, Ie, Ze)), Ze = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    u(this, ue).has(e) || u(this, ue).set(e, { d: [], m: [] }), u(this, ln).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = u(this, ue).get(e);
    if (r) {
      u(this, ue).delete(e);
      for (var i of r.d)
        ht(i, _t), n(i);
      for (i of r.m)
        ht(i, ie), n(i);
    }
    u(this, ln).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== gt && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Oe) === 0 && (this.current.set(e, [n, r]), yt == null || yt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    V = this;
  }
  deactivate() {
    V = null, yt = null;
  }
  flush() {
    try {
      hr = !0, V = this, $(this, st, En).call(this);
    } finally {
      vi = 0, kr = null, Qe = null, Wn = null, hr = !1, V = null, yt = null, _e.clear();
    }
  }
  discard() {
    var e;
    for (const n of u(this, an)) n(this);
    u(this, an).clear();
    for (const n of this.async_deriveds.values())
      n.reject(kn);
    $(this, st, Sn).call(this), (e = u(this, on)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    u(this, Ln).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (z(this, sn, u(this, sn) + 1), e) {
      let r = u(this, me).get(n) ?? 0;
      u(this, me).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (z(this, sn, u(this, sn) - 1), e) {
      let r = u(this, me).get(n) ?? 0;
      r === 1 ? u(this, me).delete(n) : u(this, me).set(n, r - 1);
    }
    u(this, Fe) || (z(this, Fe, !0), we(() => {
      z(this, Fe, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, n) {
    for (const r of e)
      u(this, xe).add(r);
    for (const r of n)
      u(this, te).add(r);
    e.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    u(this, rn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, an).add(e);
  }
  settled() {
    return (u(this, on) ?? z(this, on, Ii())).promise;
  }
  static ensure() {
    if (V === null) {
      const e = V = new sr();
      hr || we(() => {
        u(e, nn) || e.flush();
      });
    }
    return V;
  }
  apply() {
    {
      yt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var i;
    if (kr = e, (i = e.b) != null && i.is_pending && (e.f & (un | ur | Mi)) !== 0 && (e.f & hn) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var n = e; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Qe !== null && n === tt && (Q === null || (Q.f & xt) === 0))
        return;
      if ((r & (Se | Xt)) !== 0) {
        if ((r & mt) === 0)
          return;
        n.f ^= mt;
      }
    }
    u(this, Lt).push(n);
  }
};
nn = new WeakMap(), Ie = new WeakMap(), De = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), sn = new WeakMap(), me = new WeakMap(), on = new WeakMap(), Lt = new WeakMap(), Ln = new WeakMap(), xe = new WeakMap(), te = new WeakMap(), ue = new WeakMap(), ln = new WeakMap(), Fe = new WeakMap(), st = new WeakSet(), Er = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, me).keys()) {
    for (var e = r, n = !1; e.parent !== null; ) {
      if (u(this, ue).has(e)) {
        n = !0;
        break;
      }
      e = e.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, En = function() {
  var l, c, h, x;
  z(this, nn, !0), vi++ > 1e3 && ($(this, st, Sn).call(this), gs());
  for (const v of u(this, xe))
    u(this, te).delete(v), ht(v, _t), this.schedule(v);
  for (const v of u(this, te))
    ht(v, ie), this.schedule(v);
  const e = u(this, Lt);
  z(this, Lt, []), this.apply();
  var n = Qe = [], r = [], i = Wn = [];
  for (const v of e)
    try {
      $(this, st, Sr).call(this, v, n, r);
    } catch (d) {
      throw Ki(v), $(this, st, Er).call(this) || this.discard(), d;
    }
  if (V = null, i.length > 0) {
    var a = sr.ensure();
    for (const v of i)
      a.schedule(v);
  }
  if (Qe = null, Wn = null, $(this, st, Er).call(this)) {
    $(this, st, Je).call(this, r), $(this, st, Je).call(this, n);
    for (const [v, d] of u(this, ue))
      Yi(v, d);
    i.length > 0 && /** @type {unknown} */
    $(l = V, st, En).call(l);
    return;
  }
  const o = $(this, st, Bi).call(this);
  if (o) {
    $(this, st, Je).call(this, r), $(this, st, Je).call(this, n), $(c = o, st, qi).call(c, this);
    return;
  }
  u(this, xe).clear(), u(this, te).clear();
  for (const v of u(this, rn)) v(this);
  u(this, rn).clear(), In = this, di(r), di(n), In = null, (h = u(this, on)) == null || h.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    V
  );
  if (u(this, sn) === 0 && (u(this, Lt).length === 0 || f !== null) && $(this, st, Sn).call(this), u(this, Lt).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Lt).push(...u(this, Lt).filter((d) => !u(v, Lt).includes(d)));
    } else
      f = this;
  f !== null && (_e.clear(), $(x = f, st, En).call(x));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Sr = function(e, n, r) {
  e.f ^= mt;
  for (var i = e.first; i !== null; ) {
    var a = i.f, o = (a & (Xt | Se)) !== 0, f = o && (a & mt) !== 0, l = f || (a & Mt) !== 0 || u(this, ue).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= mt : (a & un) !== 0 ? n.push(i) : Bn(i) && ((a & ne) !== 0 && u(this, te).add(i), dn(i));
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
}, Bi = function() {
  for (var e = u(this, Ie); e !== null; ) {
    if (!e.is_fork) {
      for (const [n, [, r]] of this.current)
        if (e.current.has(n) && !r)
          return e;
    }
    e = u(e, Ie);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
qi = function(e) {
  var r;
  for (const [i, a] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of e.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && a.promise.then(o.resolve).catch(o.reject);
  }
  e.async_deriveds.clear(), this.transfer_effects(u(e, xe), u(e, te));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !((i.f & xt) !== 0 && (i.f & (_t | ie)) === 0))
      for (const l of a) {
        var o = l.f;
        if ((o & xt) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          o & (tn | ne) && !this.async_deriveds.has(f) && (u(this, te).delete(f), ht(f, _t), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), $(r = e, st, Sn).call(r), V = this, $(this, st, En).call(this);
}, /**
 * @param {Effect[]} effects
 */
Je = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ui(e[n], u(this, xe), u(this, te));
}, ps = function() {
  var x;
  for (let v = dr; v !== null; v = u(v, De)) {
    var e = v.id < this.id, n = [];
    for (const [d, [p, T]] of this.current) {
      if (v.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (e && p !== r)
          v.current.set(d, [p, T]);
        else
          continue;
      }
      n.push(d);
    }
    if (e)
      for (const [d, p] of this.async_deriveds) {
        const T = v.async_deriveds.get(d);
        T && p.promise.then(T.resolve).catch(T.reject);
      }
    var i = [...v.current.keys()].filter(
      (d) => !/** @type {[any, boolean]} */
      v.current.get(d)[1]
    );
    if (!(!u(v, nn) || i.length === 0)) {
      var a = i.filter((d) => !this.current.has(d));
      if (a.length === 0)
        e && v.discard();
      else if (n.length > 0) {
        if (e)
          for (const d of u(this, ln))
            v.unskip_effect(d, (p) => {
              var T;
              (p.f & (ne | tn)) !== 0 ? v.schedule(p) : $(T = v, st, Je).call(T, [p]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          Gi(l, a, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, p]) => {
          const T = this.current.get(d);
          return T ? T[0] !== p[0] || T[1] !== p[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, Ln))
            (d.f & (Bt | Mt | er)) === 0 && Yr(d, c, f) && ((d.f & (tn | ne)) !== 0 ? (ht(d, _t), v.schedule(d)) : u(v, xe).add(d));
        if (u(v, Lt).length > 0 && !u(v, Fe)) {
          v.apply();
          for (var h of u(v, Lt))
            $(x = v, st, Sr).call(x, h, [], []);
          z(v, Lt, []);
        }
        v.deactivate();
      }
    }
  }
}, Sn = function() {
  if (this.linked) {
    var e = u(this, Ie), n = u(this, De);
    e === null ? dr = n : z(e, De, n), n === null ? Ze = e : z(n, Ie, e), this.linked = !1;
  }
};
let Ge = sr;
function gs() {
  try {
    Qa();
  } catch (t) {
    de(t, kr);
  }
}
let $t = null;
function di(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Bt | Mt)) === 0 && Bn(r) && ($t = /* @__PURE__ */ new Set(), dn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ia(r), ($t == null ? void 0 : $t.size) > 0)) {
        _e.clear();
        for (const i of $t) {
          if ((i.f & (Bt | Mt)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            $t.has(o) && ($t.delete(o), a.push(o)), o = o.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const l = a[f];
            (l.f & (Bt | Mt)) === 0 && dn(l);
          }
        }
        $t.clear();
      }
    }
    $t = null;
  }
}
function Gi(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const a = i.f;
      (a & xt) !== 0 ? Gi(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (a & (tn | ne)) !== 0 && (a & _t) === 0 && Yr(i, e, r) && (ht(i, _t), Kr(
        /** @type {Effect} */
        i
      ));
    }
}
function Yr(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (Xn.call(e, i))
        return !0;
      if ((i.f & xt) !== 0 && Yr(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function Kr(t) {
  V.schedule(t);
}
function Yi(t, e) {
  if (!((t.f & Xt) !== 0 && (t.f & mt) !== 0)) {
    (t.f & _t) !== 0 ? e.d.push(t) : (t.f & ie) !== 0 && e.m.push(t), ht(t, mt);
    for (var n = t.first; n !== null; )
      Yi(n, e), n = n.next;
  }
}
function Ki(t) {
  ht(t, mt);
  for (var e = t.first; e !== null; )
    Ki(e), e = e.next;
}
let ir = /* @__PURE__ */ new Set();
const _e = /* @__PURE__ */ new Map();
let Wi = !1;
function Ye(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ni,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function B(t, e) {
  const n = Ye(t);
  return oa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Zi(t, e = !1, n = !0) {
  const r = Ye(t);
  return e || (r.equals = Pi), r;
}
function b(t, e, n = !1) {
  Q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!re || (Q.f & er) !== 0) && Di() && (Q.f & (xt | ne | tn | er)) !== 0 && (pe === null || !pe.has(t)) && es();
  let r = n ? Zt(e) : e;
  return vn(t, r, Wn);
}
function vn(t, e, n = null) {
  if (!t.equals(e)) {
    Ne ? _e.set(t, e) : _e.has(t) || _e.set(t, t.v);
    var r = Ge.ensure();
    if (r.capture(t, e), (t.f & xt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & _t) !== 0 && Gr(i), yt === null && Br(i);
    }
    t.wv = fa(), Ji(t, _t, n), tt !== null && (tt.f & mt) !== 0 && (tt.f & (Xt | Se)) === 0 && (Gt === null ? Rs([t]) : Gt.push(t)), !r.is_fork && ir.size > 0 && !Wi && bs();
  }
  return e;
}
function bs() {
  Wi = !1;
  for (const t of ir) {
    (t.f & mt) !== 0 && ht(t, ie);
    let e;
    try {
      e = Bn(t);
    } catch {
      e = !0;
    }
    e && dn(t);
  }
  ir.clear();
}
function Mn(t) {
  b(t, t.v + 1);
}
function Ji(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], f = o.f, l = (f & _t) === 0;
      if (l && ht(o, e), (f & er) !== 0)
        ir.add(
          /** @type {Effect} */
          o
        );
      else if ((f & xt) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        yt == null || yt.delete(c), (f & qe) === 0 && (f & Jt && (tt === null || (tt.f & nr) === 0) && (o.f |= qe), Ji(c, ie, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & ne) !== 0 && $t !== null && $t.add(h), n !== null ? n.push(h) : Kr(h);
      }
    }
}
function Zt(t) {
  if (typeof t != "object" || t === null || en in t || Oi in t)
    return t;
  const e = Hr(t);
  if (e !== Ua && e !== ja)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ci(t), i = /* @__PURE__ */ B(0), a = Ve, o = (f) => {
    if (Ve === a)
      return f();
    var l = Q, c = Ve;
    Qt(null), _i(a);
    var h = f();
    return Qt(l), _i(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ B(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && $a();
        var h = n.get(l);
        return h === void 0 ? o(() => {
          var x = /* @__PURE__ */ B(c.value);
          return n.set(l, x), x;
        }) : b(h, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ B(gt));
            n.set(l, h), Mn(i);
          }
        } else
          b(c, gt), Mn(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === en)
          return t;
        var h = n.get(l), x = l in f;
        if (h === void 0 && (!x || (d = Rn(f, l)) != null && d.writable) && (h = o(() => {
          var p = Zt(x ? f[l] : gt), T = /* @__PURE__ */ B(p);
          return T;
        }), n.set(l, h)), h !== void 0) {
          var v = s(h);
          return v === gt ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = s(h));
        } else if (c === void 0) {
          var x = n.get(l), v = x == null ? void 0 : x.v;
          if (x !== void 0 && v !== gt)
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
        if (l === en)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== gt || Reflect.has(f, l);
        if (c !== void 0 || tt !== null && (!h || (v = Rn(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = h ? Zt(f[l]) : gt, p = /* @__PURE__ */ B(d);
            return p;
          }), n.set(l, c));
          var x = s(c);
          if (x === gt)
            return !1;
        }
        return h;
      },
      set(f, l, c, h) {
        var O;
        var x = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          x.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? b(p, gt) : d in f && (p = o(() => /* @__PURE__ */ B(gt)), n.set(d + "", p));
          }
        if (x === void 0)
          (!v || (O = Rn(f, l)) != null && O.writable) && (x = o(() => /* @__PURE__ */ B(void 0)), b(x, Zt(c)), n.set(l, x));
        else {
          v = x.v !== gt;
          var T = o(() => Zt(c));
          b(x, T);
        }
        var _ = Reflect.getOwnPropertyDescriptor(f, l);
        if (_ != null && _.set && _.set.call(h, c), !v) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= E.v && b(E, P + 1);
          }
          Mn(i);
        }
        return !0;
      },
      ownKeys(f) {
        s(i);
        var l = Reflect.ownKeys(f).filter((x) => {
          var v = n.get(x);
          return v === void 0 || v.v !== gt;
        });
        for (var [c, h] of n)
          h.v !== gt && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ts();
      }
    }
  );
}
var Tr, Xi, Qi, $i;
function ms() {
  if (Tr === void 0) {
    Tr = window, Xi = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Qi = Rn(e, "firstChild").get, $i = Rn(e, "nextSibling").get, ci(t) && (t[xr] = void 0, t[Kn] = null, t[yr] = void 0, t.__e = void 0), ci(n) && (n[wn] = void 0);
  }
}
function Ee(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
  return (
    /** @type {TemplateNode | null} */
    Qi.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function zn(t) {
  return (
    /** @type {TemplateNode | null} */
    $i.call(t)
  );
}
function L(t, e) {
  return /* @__PURE__ */ Ke(t);
}
function wt(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ke(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ zn(n) : n;
  }
}
function q(t, e = !1) {
  return /* @__PURE__ */ Ke(t);
}
function g(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ zn(r);
  return r;
}
function xs(t) {
  t.textContent = "";
}
function ta() {
  return !1;
}
function ys(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  );
}
function ws(t) {
  var e = tt;
  if (e === null)
    return Q.f |= Oe, t;
  if ((e.f & hn) === 0 && (e.f & un) === 0)
    throw t;
  de(t, e);
}
function de(t, e) {
  if (!(e !== null && (e.f & Bt) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & mr) !== 0 && (e.f & (Bt | tr)) === 0) {
        if ((e.f & hn) === 0)
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
function ks(t) {
  tt === null && (Q === null && Xa(), Ja()), Ne && Za();
}
function Es(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Te(t, e) {
  var n = tt;
  n !== null && (n.f & Mt) !== 0 && (t |= Mt);
  var r = {
    ctx: Ot,
    deps: null,
    nodes: null,
    f: t | _t | Jt,
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
  V == null || V.register_created_effect(r);
  var i = r;
  if ((t & un) !== 0)
    Qe !== null ? Qe.push(r) : Ge.ensure().schedule(r);
  else if (e !== null) {
    try {
      dn(r);
    } catch (o) {
      throw Dt(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & _n) === 0 && (i = i.first, (t & ne) !== 0 && (t & Be) !== 0 && i !== null && (i.f |= Be));
  }
  if (i !== null && (i.parent = n, n !== null && Es(i, n), Q !== null && (Q.f & xt) !== 0 && (t & Se) === 0)) {
    var a = (
      /** @type {Derived} */
      Q
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Wr() {
  return Q !== null && !re;
}
function Zr(t) {
  const e = Te(ur, null);
  return ht(e, mt), e.teardown = t, e;
}
function pn(t) {
  ks();
  var e = (
    /** @type {Effect} */
    tt.f
  ), n = !Q && (e & Xt) !== 0 && Ot !== null && !Ot.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ot
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ea(t);
}
function ea(t) {
  return Te(un | Va, t);
}
function Ss(t) {
  Ge.ensure();
  const e = Te(Se | _n, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? ze(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function na(t) {
  return Te(un, t);
}
function Ts(t) {
  return Te(tn | _n, t);
}
function Jr(t, e = 0) {
  return Te(ur | e, t);
}
function H(t, e = [], n = [], r = []) {
  fs(r, e, n, (i) => {
    Te(ur, () => {
      t(...i.map(s));
    });
  });
}
function Vn(t, e = 0) {
  var n = Te(ne | e, t);
  return n;
}
function Wt(t) {
  return Te(Xt | _n, t);
}
function ra(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Ne, r = Q;
    hi(!0), Qt(null);
    try {
      e.call(null);
    } catch (i) {
      de(i, t.parent);
    } finally {
      hi(n), Qt(r);
    }
  }
}
function Xr(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Hn(() => {
      i.abort(jn);
    });
    var r = n.next;
    (n.f & Se) !== 0 ? n.parent = null : Dt(n, e), n = r;
  }
}
function As(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Xt) === 0 && Dt(e), e = n;
  }
}
function Dt(t, e = !0) {
  var n = !1;
  (e || (t.f & za) !== 0) && t.nodes !== null && t.nodes.end !== null && (Cs(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= tr, Xr(t, e && !n), On(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  ra(t), t.f ^= tr, t.f |= Bt;
  var i = t.parent;
  i !== null && i.first !== null && ia(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function Cs(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ zn(t);
    t.remove(), t = n;
  }
}
function ia(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function ze(t, e, n = !0) {
  var r = [];
  t.f |= zr, aa(t, r, !0);
  var i = () => {
    n && Dt(t), e && e();
  }, a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function aa(t, e, n) {
  if ((t.f & Mt) === 0) {
    t.f ^= Mt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && e.push(f);
    for (var i = t.first; i !== null; ) {
      var a = i.next;
      if ((i.f & Se) === 0) {
        var o = (i.f & Be) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Xt) !== 0 && (t.f & ne) !== 0;
        aa(i, e, o ? n : !1);
      }
      i = a;
    }
  }
}
function ar(t) {
  t.f &= ~zr, sa(t, !0);
}
function sa(t, e) {
  if ((t.f & zr) === 0 && (t.f & Mt) !== 0) {
    t.f ^= Mt, (t.f & mt) === 0 && (ht(t, _t), Ge.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Be) !== 0 || (n.f & Xt) !== 0;
      sa(n, i ? e : !1), n = r;
    }
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || e) && o.in();
  }
}
function Qr(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ zn(n);
      e.append(n), n = i;
    }
}
let Zn = !1, Ne = !1;
function hi(t) {
  Ne = t;
}
let Q = null, re = !1;
function Qt(t) {
  Q = t;
}
let tt = null;
function ge(t) {
  tt = t;
}
let pe = null;
function oa(t) {
  Q !== null && (pe ?? (pe = /* @__PURE__ */ new Set())).add(t);
}
let Pt = null, Vt = 0, Gt = null;
function Rs(t) {
  Gt = t;
}
let la = 1, Le = 0, Ve = Le;
function _i(t) {
  Ve = t;
}
function fa() {
  return ++la;
}
function Bn(t) {
  var e = t.f;
  if ((e & _t) !== 0)
    return !0;
  if (e & xt && (t.f &= ~qe), (e & ie) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (Bn(
        /** @type {Derived} */
        a
      ) && zi(
        /** @type {Derived} */
        a
      ), a.wv > t.wv)
        return !0;
    }
    (e & Jt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    yt === null && ht(t, mt);
  }
  return !1;
}
function ua(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(pe !== null && pe.has(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      (a.f & xt) !== 0 ? ua(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? ht(a, _t) : (a.f & mt) !== 0 && ht(a, ie), Kr(
        /** @type {Effect} */
        a
      ));
    }
}
function ca(t) {
  var e = Pt, n = Vt, r = Gt, i = Q, a = pe, o = Ot, f = re, l = Ve, c = t.f;
  Pt = /** @type {null | Value[]} */
  null, Vt = 0, Gt = null, Q = (c & (Xt | Se)) === 0 ? t : null, pe = null, cn(t.ctx), re = !1, Ve = ++Le, t.ac !== null && (Hn(() => {
    t.ac.abort(jn);
  }), t.ac = null);
  try {
    t.f |= nr;
    var h = (
      /** @type {Function} */
      t.fn
    ), x = h();
    t.f |= hn;
    var v = pi(t);
    if (Di() && Gt !== null && !re && v !== null && (t.f & (xt | ie | _t)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      Gt.length; d++)
        ua(
          Gt[d],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (Le++, i.deps !== null)
        for (let p = 0; p < n; p += 1)
          i.deps[p].rv = Le;
      if (e !== null)
        for (const p of e)
          p.rv = Le;
      Gt !== null && (r === null ? r = Gt : r.push(.../** @type {Source[]} */
      Gt));
    }
    return (t.f & Oe) !== 0 && (t.f ^= Oe), x;
  } catch (p) {
    return pi(t), ws(p);
  } finally {
    t.f ^= nr, Pt = e, Vt = n, Gt = r, Q = i, pe = a, cn(o), re = f, Ve = l;
  }
}
function pi(t) {
  var i;
  var e = t.deps, n = V == null ? void 0 : V.is_fork;
  if (Pt !== null) {
    var r;
    if (n || On(t, Vt), e !== null && Vt > 0)
      for (e.length = Vt + Pt.length, r = 0; r < Pt.length; r++)
        e[Vt + r] = Pt[r];
    else
      t.deps = e = Pt;
    if (Wr() && (t.f & Jt) !== 0)
      for (r = Vt; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && Vt < e.length && (On(t, Vt), e.length = Vt);
  return e;
}
function Is(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fa.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & xt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pt === null || !Xn.call(Pt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    (a.f & Jt) !== 0 && (a.f ^= Jt, a.f &= ~qe), a.v !== gt && Br(a), a.ac !== null && Hn(() => {
      a.ac.abort(jn), a.ac = null, ht(a, _t);
    }), hs(a), On(a, 0);
  }
}
function On(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Is(t, n[r]);
}
function dn(t) {
  var e = t.f;
  if ((e & Bt) === 0) {
    ht(t, mt);
    var n = tt, r = Zn;
    tt = t, Zn = (e & (Xt | Se)) === 0;
    try {
      (e & (ne | Mi)) !== 0 ? As(t) : Xr(t), ra(t);
      var i = ca(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = la;
      var a;
      Ai && rs && (t.f & _t) !== 0 && t.deps;
    } finally {
      Zn = r, tt = n;
    }
  }
}
function s(t) {
  var e = t.f, n = (e & xt) !== 0;
  if (Q !== null && !re) {
    var r = tt !== null && (tt.f & Bt) !== 0;
    if (!r && (pe === null || !pe.has(t))) {
      var i = Q.deps;
      if ((Q.f & nr) !== 0)
        t.rv < Le && (t.rv = Le, Pt === null && i !== null && i[Vt] === t ? Vt++ : Pt === null ? Pt = [t] : Pt.push(t));
      else {
        Q.deps ?? (Q.deps = []), Xn.call(Q.deps, t) || Q.deps.push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Q] : Xn.call(a, Q) || a.push(Q);
      }
    }
  }
  if (Ne && _e.has(t))
    return _e.get(t);
  if (n) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (Ne) {
      var f = o.v;
      return ((o.f & mt) === 0 && o.reactions !== null || da(o)) && (f = Gr(o)), _e.set(o, f), f;
    }
    var l = (o.f & Jt) === 0 && !re && Q !== null && (Zn || (Q.f & Jt) !== 0), c = (o.f & hn) === 0;
    Bn(o) && (l && (o.f |= Jt), zi(o)), l && !c && (Vi(o), va(o));
  }
  if (yt != null && yt.has(t))
    return yt.get(t);
  if ((t.f & Oe) !== 0)
    throw t.v;
  return t.v;
}
function va(t) {
  if (t.f |= Jt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & xt) !== 0 && (e.f & Jt) === 0 && (Vi(
        /** @type {Derived} */
        e
      ), va(
        /** @type {Derived} */
        e
      ));
}
function da(t) {
  if (t.v === gt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (_e.has(e) || (e.f & xt) !== 0 && da(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function qn(t) {
  var e = re;
  try {
    return re = !0, t();
  } finally {
    re = e;
  }
}
function Ms(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (en in t)
      Ar(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && en in n && Ar(n);
      }
  }
}
function Ar(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ar(t[r], e);
      } catch {
      }
    const n = Hr(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ri(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const Pe = Symbol("events"), ha = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function Os(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || Ir.call(e, a), !a.cancelBubble)
      return Hn(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? we(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Rr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Os(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Zr(() => {
    e.removeEventListener(t, o, a);
  });
}
function it(t, e, n) {
  (e[Pe] ?? (e[Pe] = {}))[t] = n;
}
function We(t) {
  for (var e = 0; e < t.length; e++)
    ha.add(t[e]);
  for (var n of Cr)
    n(t);
}
let _r = null, pr = !1;
function Ir(t) {
  var T, _;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((T = t.composedPath) == null ? void 0 : T.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  _r = t, pr || (pr = !0, setTimeout(() => {
    pr = !1, _r = null;
  }));
  var o = 0, f = _r === t && t[Pe];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[Pe] = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    jr(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var h = Q, x = tt;
    Qt(null), ge(null);
    try {
      for (var v, d = []; a !== null && a !== e; ) {
        try {
          var p = (_ = a[Pe]) == null ? void 0 : _[r];
          p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a) && p.call(a, t);
        } catch (E) {
          v ? d.push(E) : v = E;
        }
        if (t.cancelBubble) break;
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
      t[Pe] = e, delete t.currentTarget, Qt(h), ge(x);
    }
  }
}
var Si;
const gr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Si = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Si.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Ns(t) {
  return (
    /** @type {string} */
    (gr == null ? void 0 : gr.createHTML(t)) ?? t
  );
}
function _a(t) {
  var e = ys("template");
  return e.innerHTML = Ns(t.replaceAll("<!>", "<!---->")), e.content;
}
function Nn(t, e) {
  var n = (
    /** @type {Effect} */
    tt
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = _a(a ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Xi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ke(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Nn(f, l);
    } else
      Nn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ls(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        _a(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Ke(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ke(f);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Nn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ps(t, e) {
  return /* @__PURE__ */ Ls(t, e, "svg");
}
function Tn(t = "") {
  {
    var e = Ee(t + "");
    return Nn(e, e), e;
  }
}
function gn() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ee();
  return t.append(e, n), Nn(e, n), t;
}
function k(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Ds = ["touchstart", "touchmove"];
function Fs(t) {
  return Ds.includes(t);
}
function Us(t) {
  let e = 0, n = Ye(0), r;
  return () => {
    Wr() && (s(n), Jr(() => (e === 0 && (r = qn(() => t(() => Mn(n)))), e += 1, () => {
      we(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Mn(n));
      });
    })));
  };
}
var js = Be | _n;
function Hs(t, e, n, r) {
  new zs(t, e, n, r);
}
var Yt, Ur, Kt, Ue, Rt, jt, It, Ht, ce, je, Me, fn, Pn, Dn, ye, or, ct, Vs, Bs, Mr, qs, Or, An, Jn, Nr, Lr;
class zs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, i) {
    G(this, ct);
    /** @type {Boundary | null} */
    Ut(this, "parent");
    Ut(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ut(this, "transform_error");
    /** @type {TemplateNode} */
    G(this, Yt);
    /** @type {TemplateNode | null} */
    G(this, Ur, null);
    /** @type {BoundaryProps} */
    G(this, Kt);
    /** @type {((anchor: Node) => void)} */
    G(this, Ue);
    /** @type {Effect} */
    G(this, Rt);
    /** @type {Effect | null} */
    G(this, jt, null);
    /** @type {Effect | null} */
    G(this, It, null);
    /** @type {Effect | null} */
    G(this, Ht, null);
    /** @type {DocumentFragment | null} */
    G(this, ce, null);
    G(this, je, 0);
    G(this, Me, 0);
    G(this, fn, !1);
    /** @type {Set<Effect>} */
    G(this, Pn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    G(this, Dn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    G(this, ye, null);
    G(this, or, Us(() => (z(this, ye, Ye(u(this, je))), () => {
      z(this, ye, null);
    })));
    var a;
    z(this, Yt, e), z(this, Kt, n), z(this, Ue, (o) => {
      var f = (
        /** @type {Effect} */
        tt
      );
      f.b = this, f.f |= mr, r(o);
    }), this.parent = /** @type {Effect} */
    tt.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((o) => o), z(this, Rt, Vn(() => {
      $(this, ct, Or).call(this);
    }, js));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ui(e, u(this, Pn), u(this, Dn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, Kt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    $(this, ct, Nr).call(this, e, n), z(this, je, u(this, je) + e), !(!u(this, ye) || u(this, fn)) && (z(this, fn, !0), we(() => {
      z(this, fn, !1), u(this, ye) && vn(u(this, ye), u(this, je));
    }));
  }
  get_effect_pending() {
    return u(this, or).call(this), s(
      /** @type {Source<number>} */
      u(this, ye)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!u(this, Kt).onerror && !u(this, Kt).failed)
      throw e;
    V != null && V.is_fork ? (u(this, jt) && V.skip_effect(u(this, jt)), u(this, It) && V.skip_effect(u(this, It)), u(this, Ht) && V.skip_effect(u(this, Ht)), V.oncommit(() => {
      $(this, ct, Lr).call(this, e);
    })) : $(this, ct, Lr).call(this, e);
  }
}
Yt = new WeakMap(), Ur = new WeakMap(), Kt = new WeakMap(), Ue = new WeakMap(), Rt = new WeakMap(), jt = new WeakMap(), It = new WeakMap(), Ht = new WeakMap(), ce = new WeakMap(), je = new WeakMap(), Me = new WeakMap(), fn = new WeakMap(), Pn = new WeakMap(), Dn = new WeakMap(), ye = new WeakMap(), or = new WeakMap(), ct = new WeakSet(), Vs = function() {
  try {
    z(this, jt, Wt(() => u(this, Ue).call(this, u(this, Yt))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Bs = function(e) {
  const n = u(this, Kt).failed, { reset: r, invoke_onerror: i } = $(this, ct, Mr).call(this, e);
  we(i), n && z(this, Ht, Wt(() => {
    n(
      u(this, Yt),
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
Mr = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ya();
      return;
    }
    n = !0, r && ns(), u(this, Ht) !== null && ze(u(this, Ht), () => {
      z(this, Ht, null);
    }), $(this, ct, Jn).call(this, () => {
      $(this, ct, Or).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, Kt)).onerror) == null || f.call(o, e, i), r = !1;
    } catch (l) {
      de(l, u(this, Rt) && u(this, Rt).parent);
    }
  } };
}, qs = function() {
  const e = u(this, Kt).pending;
  e && (this.is_pending = !0, z(this, It, Wt(() => e(u(this, Yt)))), we(() => {
    var n = z(this, ce, document.createDocumentFragment()), r = Ee(), i = !1;
    if (n.append(r), z(this, jt, $(this, ct, Jn).call(this, () => {
      try {
        return Wt(() => u(this, Ue).call(this, r));
      } catch (a) {
        try {
          this.error(a), i = !0;
        } catch (o) {
          de(o, u(this, Rt).parent);
        }
        return null;
      }
    })), u(this, jt) === null) {
      z(this, ce, null), i && $(this, ct, An).call(
        this,
        /** @type {Batch} */
        V
      );
      return;
    }
    u(this, Me) === 0 && (u(this, Yt).before(n), z(this, ce, null), ze(
      /** @type {Effect} */
      u(this, It),
      () => {
        z(this, It, null);
      }
    ), $(this, ct, An).call(
      this,
      /** @type {Batch} */
      V
    ));
  }));
}, Or = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), z(this, Me, 0), z(this, je, 0), z(this, jt, Wt(() => {
      u(this, Ue).call(this, u(this, Yt));
    })), u(this, Me) > 0) {
      var e = z(this, ce, document.createDocumentFragment());
      Qr(u(this, jt), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, Kt).pending
      );
      z(this, It, Wt(() => n(u(this, Yt))));
    } else
      $(this, ct, An).call(
        this,
        /** @type {Batch} */
        V
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
An = function(e) {
  this.is_pending = !1, e.transfer_effects(u(this, Pn), u(this, Dn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Jn = function(e) {
  var n = tt, r = Q, i = Ot;
  ge(u(this, Rt)), Qt(u(this, Rt)), cn(u(this, Rt).ctx);
  try {
    return Ge.ensure(), e();
  } finally {
    ge(n), Qt(r), cn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Nr = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && $(r = this.parent, ct, Nr).call(r, e, n);
    return;
  }
  z(this, Me, u(this, Me) + e), u(this, Me) === 0 && ($(this, ct, An).call(this, n), u(this, It) && ze(u(this, It), () => {
    z(this, It, null);
  }), u(this, ce) && (u(this, Yt).before(u(this, ce)), z(this, ce, null)));
}, /**
 * @param {unknown} error
 */
Lr = function(e) {
  u(this, jt) && (Dt(u(this, jt)), z(this, jt, null)), u(this, It) && (Dt(u(this, It)), z(this, It, null)), u(this, Ht) && (Dt(u(this, Ht)), z(this, Ht, null));
  let n = u(this, Kt).failed;
  const r = (i) => {
    const { reset: a, invoke_onerror: o } = $(this, ct, Mr).call(this, i);
    o(), n && z(this, Ht, $(this, ct, Jn).call(this, () => {
      try {
        return Wt(() => {
          var f = (
            /** @type {Effect} */
            tt
          );
          f.b = this, f.f |= mr, n(
            u(this, Yt),
            () => i,
            () => a
          );
        });
      } catch (f) {
        return de(
          f,
          /** @type {Effect} */
          u(this, Rt).parent
        ), null;
      }
    }));
  };
  we(() => {
    var i;
    try {
      i = this.transform_error(e);
    } catch (a) {
      de(a, u(this, Rt) && u(this, Rt).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (a) => de(a, u(this, Rt) && u(this, Rt).parent)
    ) : r(i);
  });
};
function U(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[wn] ?? (t[wn] = t.nodeValue)) && (t[wn] = n, t.nodeValue = `${n}`);
}
function pa(t, e) {
  return Gs(t, e);
}
const Yn = /* @__PURE__ */ new Map();
function Gs(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: f }) {
  ms();
  var l = void 0, c = Ss(() => {
    var h = n ?? e.appendChild(Ee());
    Hs(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        ae({});
        var p = (
          /** @type {ComponentContext} */
          Ot
        );
        a && (p.c = a), i && (r.$$events = i), l = t(d, r) || Vr(), se();
      },
      f
    );
    var x = /* @__PURE__ */ new Set(), v = (d) => {
      for (var p = 0; p < d.length; p++) {
        var T = d[p];
        if (!x.has(T)) {
          x.add(T);
          var _ = Fs(T);
          for (const O of [e, document]) {
            var E = Yn.get(O);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Yn.set(O, E));
            var P = E.get(T);
            P === void 0 ? (O.addEventListener(T, Ir, { passive: _ }), E.set(T, 1)) : E.set(T, P + 1);
          }
        }
      }
    };
    return v(fr(ha)), Cr.add(v), () => {
      var _;
      for (var d of x)
        for (const E of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Yn.get(E)
          ), T = (
            /** @type {number} */
            p.get(d)
          );
          --T == 0 ? (E.removeEventListener(d, Ir), p.delete(d), p.size === 0 && Yn.delete(E)) : p.set(d, T);
        }
      Cr.delete(v), h !== n && ((_ = h.parentNode) == null || _.removeChild(h));
    };
  });
  return Pr.set(l, c), l;
}
let Pr = /* @__PURE__ */ new WeakMap();
function ga(t, e) {
  const n = Pr.get(t);
  return n ? (Pr.delete(t), n(e)) : Promise.resolve();
}
var ee, ve, zt, He, Fn, Un, lr;
class $r {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    Ut(this, "anchor");
    /** @type {Map<Batch, Key>} */
    G(this, ee, /* @__PURE__ */ new Map());
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
    G(this, ve, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    G(this, zt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    G(this, He, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    G(this, Fn, !0);
    /**
     * @param {Batch} batch
     */
    G(this, Un, (e) => {
      if (u(this, ee).has(e)) {
        var n = (
          /** @type {Key} */
          u(this, ee).get(e)
        ), r = u(this, ve).get(n);
        if (r)
          ar(r), u(this, He).delete(n);
        else {
          var i = u(this, zt).get(n);
          i && (ar(i.effect), u(this, ve).set(n, i.effect), u(this, zt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, o] of u(this, ee)) {
          if (u(this, ee).delete(a), a === e)
            break;
          const f = u(this, zt).get(o);
          f && (Dt(f.effect), u(this, zt).delete(o));
        }
        for (const [a, o] of u(this, ve)) {
          if (a === n || u(this, He).has(a)) continue;
          const f = () => {
            if (Array.from(u(this, ee).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Qr(o, c), c.append(Ee()), u(this, zt).set(a, { effect: o, fragment: c });
            } else
              Dt(o);
            u(this, He).delete(a), u(this, ve).delete(a);
          };
          u(this, Fn) || !r ? (u(this, He).add(a), ze(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    G(this, lr, (e) => {
      u(this, ee).delete(e);
      const n = Array.from(u(this, ee).values());
      for (const [r, i] of u(this, zt))
        n.includes(r) || (Dt(i.effect), u(this, zt).delete(r));
    });
    this.anchor = e, z(this, Fn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      V
    ), i = ta();
    if (n && !u(this, ve).has(e) && !u(this, zt).has(e))
      if (i) {
        var a = document.createDocumentFragment(), o = Ee();
        a.append(o), u(this, zt).set(e, {
          effect: Wt(() => n(o)),
          fragment: a
        });
      } else
        u(this, ve).set(
          e,
          Wt(() => n(this.anchor))
        );
    if (u(this, ee).set(r, e), i) {
      for (const [f, l] of u(this, ve))
        f === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, zt))
        f === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Un)), r.ondiscard(u(this, lr));
    } else
      u(this, Un).call(this, r);
  }
}
ee = new WeakMap(), ve = new WeakMap(), zt = new WeakMap(), He = new WeakMap(), Fn = new WeakMap(), Un = new WeakMap(), lr = new WeakMap();
function Ys(t, e, ...n) {
  var r = new $r(t);
  Vn(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Be);
}
function j(t, e, n = !1) {
  var r = new $r(t), i = n ? Be : 0;
  function a(o, f) {
    r.ensure(o, f);
  }
  Vn(() => {
    var o = !1;
    e((f, l = 0) => {
      o = !0, a(l, f);
    }), o || a(-1, null);
  }, i);
}
const Ks = Symbol("NaN");
function ba(t, e, n) {
  var r = new $r(t);
  Vn(() => {
    var i = e();
    i !== i && (i = /** @type {any} */
    Ks), r.ensure(i, n);
  });
}
function ti(t, e) {
  return e;
}
function Ws(t, e, n) {
  for (var r = [], i = e.length, a, o = e.length, f = 0; f < i; f++) {
    let x = e[f];
    ze(
      x,
      () => {
        if (a) {
          if (a.pending.delete(x), a.done.add(x), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Dr(t, fr(a.done)), v.delete(a), v.size === 0 && (t.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null && t.pending.size === 0;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), h = (
        /** @type {Element} */
        c.parentNode
      );
      xs(h), h.append(c), t.items.clear();
    }
    Dr(t, e, !l);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Dr(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of t.pending.values())
      for (const f of o)
        r.add(
          /** @type {EachItem} */
          t.items.get(f).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (r != null && r.has(a)) {
      a.f |= he;
      const o = document.createDocumentFragment();
      Qr(a, o);
    } else
      Dt(e[i], n);
  }
}
var gi;
function Et(t, e, n, r, i, a = null) {
  var o = t, f = /* @__PURE__ */ new Map(), l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Ee());
  }
  var h = null, x = /* @__PURE__ */ vs(() => {
    var O = n();
    return (
      /** @type {V[]} */
      Ci(O) ? O : O == null ? [] : fr(O)
    );
  }), v, d = /* @__PURE__ */ new Map(), p = !0;
  function T(O) {
    (P.effect.f & Bt) === 0 && (P.pending.delete(O), P.fallback = h, Zs(P, v, o, e, r), h !== null && (v.length === 0 ? (h.f & he) === 0 ? ar(h) : (h.f ^= he, Cn(h, null, o)) : ze(h, () => {
      h = null;
    })));
  }
  function _(O) {
    P.pending.delete(O);
  }
  var E = Vn(() => {
    v = /** @type {V[]} */
    s(x);
    for (var O = v.length, F = /* @__PURE__ */ new Set(), ut = (
      /** @type {Batch} */
      V
    ), Y = ta(), K = 0; K < O; K += 1) {
      var X = v[K], et = r(X, K), y = p ? null : f.get(et);
      y ? (y.v && vn(y.v, X), y.i && vn(y.i, K), Y && ut.unskip_effect(y.e)) : (y = Js(
        f,
        p ? o : gi ?? (gi = Ee()),
        X,
        et,
        K,
        i,
        e,
        n
      ), p || (y.e.f |= he), f.set(et, y)), F.add(et);
    }
    if (O === 0 && a && !h && (p ? h = Wt(() => a(o)) : (h = Wt(() => a(gi ?? (gi = Ee()))), h.f |= he)), O > F.size && Wa(), !p)
      if (d.set(ut, F), Y) {
        for (const [S, I] of f)
          F.has(S) || ut.skip_effect(I.e);
        ut.oncommit(T), ut.ondiscard(_);
      } else
        T(ut);
    s(x);
  }), P = { effect: E, items: f, pending: d, outrogroups: null, fallback: h };
  p = !1;
}
function yn(t) {
  for (; t !== null && (t.f & Xt) === 0; )
    t = t.next;
  return t;
}
function Zs(t, e, n, r, i) {
  var y, S, I, W, m, w, nt, ot, R;
  var a = (r & 8) !== 0, o = e.length, f = t.items, l = yn(t.effect.first), c, h = null, x, v = [], d = [], p, T, _, E;
  if (a)
    for (E = 0; E < o; E += 1)
      p = e[E], T = i(p, E), _ = /** @type {EachItem} */
      f.get(T).e, (_.f & he) === 0 && ((S = (y = _.nodes) == null ? void 0 : y.a) == null || S.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(_));
  for (E = 0; E < o; E += 1) {
    if (p = e[E], T = i(p, E), _ = /** @type {EachItem} */
    f.get(T).e, t.outrogroups !== null)
      for (const C of t.outrogroups)
        C.pending.delete(_), C.done.delete(_);
    if ((_.f & Mt) !== 0 && (ar(_), a && ((W = (I = _.nodes) == null ? void 0 : I.a) == null || W.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(_))), (_.f & he) !== 0)
      if (_.f ^= he, _ === l)
        Cn(_, null, n);
      else {
        var P = h ? h.next : l;
        _ === t.effect.last && (t.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Re(t, h, _), Re(t, _, P), Cn(_, P, n), h = _, v = [], d = [], l = yn(h.next);
        continue;
      }
    if (_ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < d.length) {
          var O = d[0], F;
          h = O.prev;
          var ut = v[0], Y = v[v.length - 1];
          for (F = 0; F < v.length; F += 1)
            Cn(v[F], O, n);
          for (F = 0; F < d.length; F += 1)
            c.delete(d[F]);
          Re(t, ut.prev, Y.next), Re(t, h, ut), Re(t, Y, O), l = O, h = Y, E -= 1, v = [], d = [];
        } else
          c.delete(_), Cn(_, l, n), Re(t, _.prev, _.next), Re(t, _, h === null ? t.effect.first : h.next), Re(t, h, _), h = _;
        continue;
      }
      for (v = [], d = []; l !== null && l !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = yn(l.next);
      if (l === null)
        continue;
    }
    (_.f & he) === 0 && v.push(_), h = _, l = yn(_.next);
  }
  if (t.outrogroups !== null) {
    for (const C of t.outrogroups)
      C.pending.size === 0 && (Dr(t, fr(C.done)), (m = t.outrogroups) == null || m.delete(C));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var K = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & Mt) === 0 && K.push(_);
    for (; l !== null; )
      (l.f & Mt) === 0 && l !== t.fallback && K.push(l), l = yn(l.next);
    var X = K.length;
    if (X > 0) {
      var et = (r & 4) !== 0 && o === 0 ? n : null;
      if (a) {
        for (E = 0; E < X; E += 1)
          (nt = (w = K[E].nodes) == null ? void 0 : w.a) == null || nt.measure();
        for (E = 0; E < X; E += 1)
          (R = (ot = K[E].nodes) == null ? void 0 : ot.a) == null || R.fix();
      }
      Ws(t, K, et);
    }
  }
  a && we(() => {
    var C, at;
    if (x !== void 0)
      for (_ of x)
        (at = (C = _.nodes) == null ? void 0 : C.a) == null || at.apply();
  });
}
function Js(t, e, n, r, i, a, o, f) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ Zi(n, !1, !1) : Ye(n) : null, c = (o & 2) !== 0 ? Ye(i) : null;
  return {
    v: l,
    i: c,
    e: Wt(() => (a(e, l ?? n, c ?? i, f), () => {
      t.delete(r);
    }))
  };
}
function Cn(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, a = e && (e.f & he) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zn(r)
      );
      if (a.before(r), r === i)
        return;
      r = o;
    }
}
function Re(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function ma(t, e, n) {
  na(() => {
    var r = qn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Jr(() => {
        var o = n();
        Ms(o), i && Li(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const bi = [...` 	
\r\f \v\uFEFF`];
function Xs(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || bi.includes(r[o - 1])) && (f === r.length || bi.includes(r[f])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(f + 1) : o = f;
        }
  }
  return r === "" ? null : r;
}
function Qs(t, e) {
  return t == null ? null : String(t);
}
function $e(t, e, n, r, i, a) {
  var o = (
    /** @type {any} */
    t[xr]
  );
  if (o !== n || o === void 0) {
    var f = Xs(n, r, a);
    f == null ? t.removeAttribute("class") : t.className = f, t[xr] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function $s(t, e, n, r) {
  var i = (
    /** @type {any} */
    t[yr]
  );
  if (i !== e) {
    var a = Qs(e);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t[yr] = e;
  }
  return r;
}
const to = Symbol("is custom element"), eo = Symbol("is html"), no = qa ? "progress" : "PROGRESS";
function ro(t, e) {
  var n = xa(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== no) || (t.value = e ?? "");
}
function bt(t, e, n, r) {
  var i = xa(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Ba] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && io(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function xa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Kn] ?? (t[Kn] = {
      [to]: t.nodeName.includes("-"),
      [eo]: t.namespaceURI === Da
    })
  );
}
var mi = /* @__PURE__ */ new Map();
function io(t) {
  var e = t.getAttribute("is") || t.nodeName, n = mi.get(e);
  if (n) return n;
  mi.set(e, n = /* @__PURE__ */ new Set());
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ri(i);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    i = Hr(i);
  }
  return n;
}
function br(t, e) {
  return t === e || (t == null ? void 0 : t[en]) === e;
}
function ao(t = Vr(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Ot.r
  ), a = (
    /** @type {Effect} */
    tt
  );
  return na(() => {
    var o, f;
    return Jr(() => {
      o = f, f = [], qn(() => {
        br(n(...f), t) || (e(t, ...f), o && br(n(...o), t) && e(null, ...o));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & tr; )
        l = l.parent;
      const c = () => {
        f && br(n(...f), t) && e(null, ...f);
      }, h = l.teardown;
      l.teardown = () => {
        c(), h == null || h();
      };
    };
  }), t;
}
function ke(t, e, n, r) {
  var i = (
    /** @type {V} */
    r
  ), a = !0, o = () => (a && (a = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = o());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      t[e]
    );
    return c === void 0 ? o() : (a = !0, c);
  }, l;
}
const so = "5";
var Ti;
typeof window < "u" && ((Ti = window.__svelte ?? (window.__svelte = {})).v ?? (Ti.v = /* @__PURE__ */ new Set())).add(so);
let bn = "";
function ya(t) {
  bn = t;
}
async function oe(t, e) {
  const n = new URL(`${bn}${t}`, window.location.origin);
  for (const [r, i] of Object.entries(e ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const wa = (t) => oe("/accounts", t), oo = () => oe("/rails"), lo = (t) => oe(`/accounts/${encodeURIComponent(t)}`), fo = (t) => oe(`/accounts/${encodeURIComponent(t)}/similar`), uo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/videos`, { site: e, page: n }), co = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/galleries`, { site: e, page: n }), vo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/images`, { site: e, page: n }), ho = (t, e) => oe("/videoinfo", { site: t, video_id: e }), _o = (t, e) => oe(`/galleries/${encodeURIComponent(t)}/${encodeURIComponent(e)}`), po = (t, e, n) => `${bn}/image?site=${encodeURIComponent(t)}&gallery_id=${encodeURIComponent(e)}&index=${n}`, xi = (t, e, n, r, i = !1) => `${bn}/photo?site=${encodeURIComponent(t)}&handle=${encodeURIComponent(e)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, yi = (t, e, n = 0) => `${bn}/stream?site=${encodeURIComponent(t)}&video_id=${encodeURIComponent(e)}&index=${n}`, ei = "/api/v1/rails/x/onlyfans";
async function go() {
  try {
    const t = await fetch(ei);
    return t.ok ? (await t.json()).rails ?? [] : [];
  } catch {
    return [];
  }
}
async function bo() {
  try {
    return (await fetch(ei, { method: "DELETE" })).ok;
  } catch {
    return !1;
  }
}
async function mo(t) {
  try {
    return (await fetch(ei, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(t)
    })).ok;
  } catch {
    return !1;
  }
}
const xo = () => oe("/plugins"), yo = () => oe("/sync/status");
async function wo(t) {
  const e = new URL(`${bn}/sync`, window.location.origin);
  for (const n of t ?? []) e.searchParams.append("sites", n);
  try {
    const n = await fetch(e, { method: "POST" });
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
var ko = /* @__PURE__ */ A('<img loading="lazy"/>'), Eo = /* @__PURE__ */ A('<span class="ofx-initials"> </span>');
function ni(t, e) {
  ae(e, !0);
  let n = ke(e, "src", 3, null), r = ke(e, "alt", 3, ""), i = ke(e, "name", 3, ""), a = ke(e, "onmeasure", 3, null), o = /* @__PURE__ */ B(!1);
  const f = /* @__PURE__ */ kt(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((d) => {
    var p;
    return ((p = d[0]) == null ? void 0 : p.toUpperCase()) ?? "";
  }).join(""));
  function l(d) {
    const p = d.currentTarget;
    a() && p.naturalWidth && p.naturalHeight && a()(p.naturalWidth / p.naturalHeight);
  }
  var c = gn(), h = wt(c);
  {
    var x = (d) => {
      var p = ko();
      H(() => {
        bt(p, "src", n()), bt(p, "alt", r());
      }), Rr("load", p, l), Rr("error", p, () => b(o, !0)), k(d, p);
    }, v = (d) => {
      var p = Eo(), T = q(p, !0);
      H(() => U(T, s(f))), k(d, p);
    };
    j(h, (d) => {
      n() && !s(o) ? d(x) : d(v, -1);
    });
  }
  k(t, c), se();
}
var So = /* @__PURE__ */ A('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ka(t, e) {
  ae(e, !0);
  var n = So(), r = L(n), i = L(r);
  ni(i, {
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
  var a = g(r, 2), o = q(a, !0), f = g(a, 2), l = q(f);
  H(() => {
    bt(n, "href", `/x/onlyfans/${e.account.handle ?? ""}`), bt(a, "title", e.account.display_name), U(o, e.account.display_name), U(l, `${e.account.source_count ?? ""}
        ${e.account.source_count === 1 ? "site" : "sites"}`);
  }), it("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), e.navigate(`/x/onlyfans/${e.account.handle}`));
  }), k(t, n), se();
}
We(["click"]);
var To = /* @__PURE__ */ A('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), Ao = /* @__PURE__ */ A('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), Co = /* @__PURE__ */ A('<span class="ofx-note"> </span>'), Ro = /* @__PURE__ */ A('<div class="ofx-rail-actions"><!></div>'), Io = /* @__PURE__ */ A('<div class="ofx-rail-item"><!></div>'), Mo = /* @__PURE__ */ A('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Fr(t, e) {
  ae(e, !0);
  let n = ke(e, "note", 3, ""), r = ke(e, "order", 3, null), i = ke(e, "fetcher", 3, null), a = ke(e, "size", 3, 20), o = /* @__PURE__ */ B(Zt([])), f = /* @__PURE__ */ B(!0), l = /* @__PURE__ */ B(0);
  function c() {
    b(l, s(l) + 1);
  }
  pn(() => {
    const T = r(), _ = i(), E = a();
    s(l);
    let P = !1;
    b(f, !0);
    const O = _ ? _() : wa({ order: T, limit: E, offset: 0 });
    return Promise.resolve(O).then((F) => {
      P || (b(o, Array.isArray(F) ? F : (F == null ? void 0 : F.items) ?? [], !0), b(f, !1));
    }), () => {
      P = !0;
    };
  });
  var h = { reload: c }, x = gn(), v = wt(x);
  {
    var d = (T) => {
      var _ = Ao(), E = L(_), P = q(E, !0), O = g(E, 2);
      Et(O, 20, () => Array(8), ti, (F, ut) => {
        var Y = To();
        k(F, Y);
      }), H(() => U(P, e.title)), k(T, _);
    }, p = (T) => {
      var _ = Mo(), E = L(_), P = L(E), O = q(P, !0), F = g(P, 2);
      {
        var ut = (et) => {
          var y = Co(), S = q(y, !0);
          H(() => U(S, n())), k(et, y);
        };
        j(F, (et) => {
          n() && et(ut);
        });
      }
      var Y = g(F, 2);
      {
        var K = (et) => {
          var y = Ro(), S = L(y);
          Ys(S, () => e.actions), k(et, y);
        };
        j(Y, (et) => {
          e.actions && et(K);
        });
      }
      var X = g(E, 2);
      Et(X, 21, () => s(o), (et) => et.handle, (et, y) => {
        var S = Io(), I = L(S);
        ka(I, {
          get account() {
            return s(y);
          },
          get navigate() {
            return e.navigate;
          }
        }), k(et, S);
      }), H(() => U(O, e.title)), k(T, _);
    };
    j(v, (T) => {
      s(f) ? T(d) : s(o).length && T(p, 1);
    });
  }
  return k(t, x), se(h);
}
var Oo = /* @__PURE__ */ A('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), No = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), Lo = /* @__PURE__ */ A(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Po = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function Do(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ B(!1), r = /* @__PURE__ */ B(!1), i = /* @__PURE__ */ B(null), a = /* @__PURE__ */ B(Zt([]));
  async function o() {
    const _ = await go(), E = new Map(e.rails.map((F) => [F.key, F])), P = /* @__PURE__ */ new Set(), O = [];
    for (const F of _)
      P.add(F.key), E.has(F.key) && O.push({ ...F });
    for (const F of e.rails)
      P.has(F.key) || O.push({ key: F.key, enabled: !0 });
    b(a, O, !0), b(i, null), b(n, !0);
  }
  function f(_, E) {
    const P = _ + E;
    if (P < 0 || P >= s(a).length) return;
    const O = [...s(a)];
    [O[_], O[P]] = [O[P], O[_]], b(a, O, !0);
  }
  function l(_) {
    b(a, s(a).map((E, P) => P === _ ? { ...E, enabled: !E.enabled } : E), !0);
  }
  function c(_) {
    var E;
    return ((E = e.rails.find((P) => P.key === _)) == null ? void 0 : E.title) ?? _;
  }
  async function h() {
    var _;
    b(r, !0), b(i, null), await bo() ? (await ((_ = e.onsaved) == null ? void 0 : _.call(e)), b(n, !1)) : b(i, "Could not reset."), b(r, !1);
  }
  async function x() {
    var _;
    b(r, !0), b(i, null), await mo(s(a)) ? (await ((_ = e.onsaved) == null ? void 0 : _.call(e)), b(n, !1)) : b(i, "Could not save. Your changes are still here."), b(r, !1);
  }
  var v = Po(), d = wt(v), p = g(d, 2);
  {
    var T = (_) => {
      var E = Lo(), P = L(E), O = g(L(P), 2), F = g(P, 4);
      Et(F, 23, () => s(a), (I) => I.key, (I, W, m) => {
        var w = Oo();
        let nt;
        var ot = L(w), R = q(ot, !0), C = g(ot, 2), at = q(C, !0), M = g(C, 2), N = g(M, 2);
        H(
          (J, lt, pt, St) => {
            nt = $e(w, 1, "", null, nt, { "ofx-off": !s(W).enabled }), U(R, J), bt(C, "aria-label", lt), U(at, s(W).enabled ? "Shown" : "Hidden"), M.disabled = s(m) === 0, bt(M, "aria-label", pt), N.disabled = s(m) === s(a).length - 1, bt(N, "aria-label", St);
          },
          [
            () => c(s(W).key),
            () => s(W).enabled ? `Hide ${c(s(W).key)}` : `Show ${c(s(W).key)}`,
            () => `Move ${c(s(W).key)} up`,
            () => `Move ${c(s(W).key)} down`
          ]
        ), it("click", C, () => l(s(m))), it("click", M, () => f(s(m), -1)), it("click", N, () => f(s(m), 1)), k(I, w);
      });
      var ut = g(F, 2);
      {
        var Y = (I) => {
          var W = No(), m = q(W, !0);
          H(() => U(m, s(i))), k(I, W);
        };
        j(ut, (I) => {
          s(i) && I(Y);
        });
      }
      var K = g(ut, 2), X = L(K), et = g(X, 2), y = g(et, 2), S = q(y, !0);
      H(() => {
        X.disabled = s(r), y.disabled = s(r), U(S, s(r) ? "Saving…" : "Save");
      }), it("click", O, () => b(n, !1)), it("click", X, h), it("click", et, () => b(n, !1)), it("click", y, x), k(_, E);
    };
    j(p, (_) => {
      s(n) && _(T);
    });
  }
  it("click", d, o), k(t, v), se();
}
We(["click"]);
var Fo = /* @__PURE__ */ A(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Uo = /* @__PURE__ */ A('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), jo = /* @__PURE__ */ A('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Ho = /* @__PURE__ */ A('<div class="ofx-sentinel"></div>'), zo = /* @__PURE__ */ A('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Vo = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Bo = /* @__PURE__ */ A('<div class="ofx-controls"><!></div> <!> <!>', 1), qo = /* @__PURE__ */ A('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Go(t, e) {
  ae(e, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ B(Zt([])), a = /* @__PURE__ */ B(0), o = /* @__PURE__ */ B(!1), f = /* @__PURE__ */ B(!1), l = /* @__PURE__ */ B(""), c = /* @__PURE__ */ B(!1), h = /* @__PURE__ */ B(""), x, v = /* @__PURE__ */ B(null), d = /* @__PURE__ */ B(Zt([]));
  async function p() {
    const M = await oo();
    b(d, Array.isArray(M) ? M : [], !0);
  }
  pn(() => {
    p();
  });
  const T = /* @__PURE__ */ kt(() => s(l).trim()), _ = /* @__PURE__ */ kt(() => s(T) !== "" || s(c)), E = /* @__PURE__ */ kt(() => s(i).length < s(a));
  async function P(M, N) {
    b(o, !0);
    const J = await wa({ search: M, limit: n, offset: N });
    if (M !== s(l).trim()) {
      b(o, !1);
      return;
    }
    J ? (b(i, N === 0 ? J.items : [...s(i), ...J.items], !0), b(a, J.total, !0), b(h, M, !0), b(f, !1)) : b(f, !0), b(o, !1);
  }
  function O(M) {
    b(l, M.currentTarget.value, !0), clearTimeout(x), x = setTimeout(() => P(s(l).trim(), 0), 250);
  }
  function F() {
    b(c, !0), P("", 0);
  }
  function ut() {
    b(c, !1), b(l, ""), b(i, [], !0), b(a, 0), b(h, "");
  }
  function Y(M) {
    const N = new IntersectionObserver(
      (J) => {
        var lt;
        (lt = J[0]) != null && lt.isIntersecting && s(E) && !s(o) && P(s(h), s(i).length);
      },
      { rootMargin: "600px" }
    );
    return N.observe(M), { destroy: () => N.disconnect() };
  }
  var K = qo(), X = g(wt(K), 2), et = L(X);
  {
    var y = (M) => {
      var N = Tn();
      H(
        (J, lt) => U(N, `${J ?? ""} of ${lt ?? ""}
        ${s(h) ? `matching “${s(h)}”` : "accounts"}`),
        [
          () => s(i).length.toLocaleString(),
          () => s(a).toLocaleString()
        ]
      ), k(M, N);
    }, S = (M) => {
      var N = Tn("loading…");
      k(M, N);
    }, I = (M) => {
      var N = Tn("nothing found");
      k(M, N);
    }, W = (M) => {
      var N = Tn("performers, gathered from the archive sites");
      k(M, N);
    };
    j(et, (M) => {
      s(_) && s(a) ? M(y) : s(_) && s(o) ? M(S, 1) : s(_) ? M(I, 2) : M(W, -1);
    });
  }
  var m = g(X, 2), w = g(L(m), 2), nt = g(m, 2);
  {
    var ot = (M) => {
      var N = Fo();
      k(M, N);
    };
    j(nt, (M) => {
      s(f) && M(ot);
    });
  }
  var R = g(nt, 2);
  {
    var C = (M) => {
      var N = zo(), J = wt(N);
      {
        var lt = (rt) => {
          var dt = Uo(), Ft = q(dt);
          it("click", Ft, ut), k(rt, dt);
        };
        j(J, (rt) => {
          s(c) && !s(T) && rt(lt);
        });
      }
      var pt = g(J, 2), St = L(pt);
      Et(St, 17, () => s(i), (rt) => rt.handle, (rt, dt) => {
        ka(rt, {
          get account() {
            return s(dt);
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var Tt = g(St, 2);
      {
        var At = (rt) => {
          var dt = gn(), Ft = wt(dt);
          Et(Ft, 16, () => Array(12), ti, (mn, Ae) => {
            var le = jo();
            k(mn, le);
          }), k(rt, dt);
        };
        j(Tt, (rt) => {
          s(o) && rt(At);
        });
      }
      var Ct = g(pt, 2);
      {
        var vt = (rt) => {
          var dt = Ho();
          ma(dt, (Ft) => Y == null ? void 0 : Y(Ft)), k(rt, dt);
        };
        j(Ct, (rt) => {
          s(E) && rt(vt);
        });
      }
      k(M, N);
    }, at = (M) => {
      var N = Bo(), J = wt(N), lt = L(J);
      Do(lt, {
        get rails() {
          return s(d);
        },
        onsaved: p
      });
      var pt = g(J, 2);
      Et(pt, 17, () => s(d).filter((Tt) => Tt.order !== "random"), (Tt) => Tt.order, (Tt, At) => {
        Fr(Tt, {
          get title() {
            return s(At).title;
          },
          get note() {
            return s(At).note;
          },
          get order() {
            return s(At).order;
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var St = g(pt, 2);
      {
        const Tt = (Ct) => {
          var vt = Vo(), rt = wt(vt), dt = g(rt, 2);
          it("click", rt, () => {
            var Ft;
            return (Ft = s(v)) == null ? void 0 : Ft.reload();
          }), it("click", dt, F), k(Ct, vt);
        };
        let At = /* @__PURE__ */ kt(() => {
          var Ct;
          return ((Ct = s(d).find((vt) => vt.order === "random")) == null ? void 0 : Ct.title) ?? "Something else";
        });
        ao(
          Fr(St, {
            get title() {
              return s(At);
            },
            order: "random",
            size: r,
            get navigate() {
              return e.navigate;
            },
            actions: Tt,
            $$slots: { actions: !0 }
          }),
          (Ct) => b(v, Ct, !0),
          () => s(v)
        );
      }
      k(M, N);
    };
    j(R, (M) => {
      s(_) ? M(C) : M(at, -1);
    });
  }
  H(() => ro(w, s(l))), it("input", w, O), k(t, K), se();
}
We(["input", "click"]);
var Yo = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), wi = /* @__PURE__ */ A('<p class="ofx-note"> </p>'), Ko = /* @__PURE__ */ A('<span class="ofx-badge"> </span>'), Wo = /* @__PURE__ */ A('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Zo = /* @__PURE__ */ A('<p class="ofx-caption-title"> </p>'), Jo = /* @__PURE__ */ A('<p class="ofx-caption-text"> </p>'), Xo = /* @__PURE__ */ A('<p class="ofx-caption-when"> </p>'), Qo = /* @__PURE__ */ A('<div class="ofx-caption"><!> <!> <!></div>'), $o = /* @__PURE__ */ A('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), tl = /* @__PURE__ */ A('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), el = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button"> </button>'), nl = /* @__PURE__ */ A('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function rl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ B(Zt([])), r = /* @__PURE__ */ B(0), i = /* @__PURE__ */ B(!1), a = /* @__PURE__ */ B(!1), o = /* @__PURE__ */ B(!1);
  async function f() {
    if (s(i) || s(a)) return;
    b(i, !0);
    const y = s(r) + 1, [S, I, W] = await Promise.all([
      uo(e.handle, e.site, y),
      co(e.handle, e.site, y),
      vo(e.handle, e.site, y)
    ]);
    if (S === null && I === null && W === null)
      b(o, !0);
    else {
      const m = [
        ...(S ?? []).map((w) => ({
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
        ...(I ?? []).map((w) => ({
          kind: "image",
          key: `g:${w.gallery_id}`,
          title: w.title,
          thumbnail: w.cover,
          badge: w.image_count ? `${w.image_count}` : null,
          aspect: 0.75,
          posted: w.posted,
          item: w
        })),
        ...(W ?? []).map((w) => ({
          kind: "image",
          key: `p:${w.image_id ?? `${y}:${w.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: xi(e.site, e.handle, y, w.index, !0),
          full: xi(e.site, e.handle, y, w.index),
          badge: null,
          aspect: 0.75,
          posted: w.posted_at,
          item: w
        }))
      ];
      b(n, [...s(n), ...m], !0), b(r, y), m.length === 0 && b(a, !0);
    }
    b(i, !1);
  }
  const l = /* @__PURE__ */ kt(() => s(n).filter((y) => e.kinds.has(y.kind)));
  pn(() => {
    e.handle, e.site, qn(() => {
      b(n, [], !0), b(r, 0), b(a, !1), b(o, !1), b(i, !1), f();
    });
  });
  function c(y, S) {
    !S || !Number.isFinite(S) || b(n, s(n).map((I) => I.key === y ? { ...I, aspect: S } : I), !0);
  }
  function h(y, S) {
    if (!S.hasText || S.text) return;
    const I = new IntersectionObserver((W) => {
      W.some((m) => m.isIntersecting) && (I.disconnect(), ho(e.site, S.item.video_id).then((m) => {
        m && b(
          n,
          s(n).map((w) => w.key === S.key ? {
            ...w,
            text: m.description,
            posted: w.posted ?? m.posted_at
          } : w),
          !0
        );
      }));
    });
    return I.observe(y), { destroy: () => I.disconnect() };
  }
  function x(y) {
    y.kind === "video" ? e.onplay(y.item) : y.full ? e.onphoto(y) : e.ongallery(y.item);
  }
  function v(y) {
    return y ? `${Math.floor(y / 60)}:${String(y % 60).padStart(2, "0")}` : null;
  }
  var d = nl(), p = L(d), T = q(p, !0), _ = g(p, 2);
  {
    var E = (y) => {
      var S = Yo(), I = q(S);
      H(() => U(I, `${e.site ?? ""} did not answer.`)), k(y, S);
    }, P = (y) => {
      var S = wi(), I = q(S);
      H(() => U(I, `Nothing here on ${e.site ?? ""}.`)), k(y, S);
    }, O = (y) => {
      var S = wi(), I = q(S);
      H((W) => U(I, `${e.site ?? ""} has no ${W ?? ""} for this performer.`), [() => [...e.kinds].join(" or ")]), k(y, S);
    };
    j(_, (y) => {
      s(o) ? y(E) : !s(i) && s(n).length === 0 ? y(P, 1) : !s(i) && s(l).length === 0 && y(O, 2);
    });
  }
  var F = g(_, 2), ut = L(F);
  Et(ut, 17, () => s(l), (y) => y.key, (y, S) => {
    var I = $o(), W = L(I), m = L(W), w = L(m);
    ni(w, {
      get src() {
        return s(S).thumbnail;
      },
      get alt() {
        return s(S).title;
      },
      get name() {
        return s(S).title;
      },
      onmeasure: (N) => c(s(S).key, N)
    });
    var nt = g(w, 2);
    {
      var ot = (N) => {
        var J = Ko(), lt = q(J, !0);
        H(() => U(lt, s(S).badge)), k(N, J);
      };
      j(nt, (N) => {
        s(S).badge && N(ot);
      });
    }
    var R = g(nt, 2);
    {
      var C = (N) => {
        var J = Wo();
        k(N, J);
      };
      j(R, (N) => {
        s(S).kind === "video" && N(C);
      });
    }
    var at = g(W, 2);
    {
      var M = (N) => {
        var J = Qo(), lt = L(J);
        {
          var pt = (vt) => {
            var rt = Zo(), dt = q(rt, !0);
            H(() => U(dt, s(S).title)), k(vt, rt);
          };
          j(lt, (vt) => {
            s(S).title && vt(pt);
          });
        }
        var St = g(lt, 2);
        {
          var Tt = (vt) => {
            var rt = Jo(), dt = q(rt, !0);
            H(() => U(dt, s(S).text)), k(vt, rt);
          };
          j(St, (vt) => {
            s(S).text && vt(Tt);
          });
        }
        var At = g(St, 2);
        {
          var Ct = (vt) => {
            var rt = Xo(), dt = q(rt, !0);
            H(() => U(dt, s(S).posted)), k(vt, rt);
          };
          j(At, (vt) => {
            s(S).posted && vt(Ct);
          });
        }
        k(N, J);
      };
      j(at, (N) => {
        (s(S).title || s(S).text || s(S).posted) && N(M);
      });
    }
    ma(I, (N, J) => h == null ? void 0 : h(N, J), () => s(S)), H(() => $s(I, `--ofx-ar: ${s(S).aspect ?? ""}; flex-grow: ${s(S).aspect ?? ""}; flex-basis: ${s(S).aspect * 220}px`)), it("click", W, () => x(s(S))), k(y, I);
  });
  var Y = g(ut, 2);
  {
    var K = (y) => {
      var S = gn(), I = wt(S);
      Et(I, 16, () => Array(4), ti, (W, m) => {
        var w = tl();
        k(W, w);
      }), k(y, S);
    };
    j(Y, (y) => {
      s(i) && y(K);
    });
  }
  var X = g(F, 2);
  {
    var et = (y) => {
      var S = el(), I = q(S, !0);
      H(() => {
        S.disabled = s(i), U(I, s(i) ? "Loading…" : "Load more");
      }), it("click", S, f), k(y, S);
    };
    j(X, (y) => {
      !s(a) && !s(o) && s(n).length > 0 && y(et);
    });
  }
  H(() => U(T, e.site)), k(t, d), se();
}
We(["click"]);
async function il() {
  try {
    const t = await fetch("/api/v1/vpn/status");
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function al(t, e) {
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
async function sl(t) {
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
var ol = /* @__PURE__ */ A('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), ll = /* @__PURE__ */ A('<span class="tbx-dim">offline</span>'), fl = /* @__PURE__ */ A('<li><button type="button" role="option"> <!></button></li>'), ul = /* @__PURE__ */ A('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), cl = /* @__PURE__ */ A('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), vl = /* @__PURE__ */ A('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), dl = /* @__PURE__ */ A('<p class="tbx-vpn-note"> </p>'), hl = /* @__PURE__ */ A('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function _l(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ B(null), r = /* @__PURE__ */ B(null), i = /* @__PURE__ */ B(!1), a = /* @__PURE__ */ B(null);
  async function o() {
    b(n, await il(), !0);
  }
  pn(() => {
    o();
  });
  async function f(v) {
    var p;
    const d = v === "scraping" ? !s(n).route_scraping : !s(n).route_streaming;
    b(r, v, !0), b(a, null), await al(v, d) && (await o(), await ((p = e.onchange) == null ? void 0 : p.call(e))), b(r, null);
  }
  async function l(v) {
    var p;
    b(r, "exit"), b(i, !1);
    const d = await sl(v);
    d && (b(n, d, !0), b(a, d.detail ?? null, !0), await ((p = e.onchange) == null ? void 0 : p.call(e))), b(r, null);
  }
  var c = gn(), h = wt(c);
  {
    var x = (v) => {
      var d = hl(), p = wt(d), T = g(L(p), 2);
      Et(
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
        ([Y, K, X]) => Y,
        (Y, K) => {
          var X = /* @__PURE__ */ kt(() => $n(s(K), 3));
          let et = () => s(X)[0], y = () => s(X)[1], S = () => s(X)[2];
          var I = ol();
          let W;
          var m = g(L(I), 2), w = q(m, !0);
          H(() => {
            W = $e(I, 1, "tbx-toggle", null, W, { "tbx-toggle-on": S() }), bt(I, "aria-checked", S()), I.disabled = s(r) !== null, U(w, y());
          }), it("click", I, () => f(et())), k(Y, I);
        }
      );
      var _ = g(T, 2);
      {
        var E = (Y) => {
          var K = cl(), X = L(K), et = L(X), y = g(X, 2);
          {
            var S = (I) => {
              var W = ul(), m = L(W), w = q(m), nt = g(m, 2);
              Et(nt, 17, () => s(n).exit_nodes, (ot) => ot.id, (ot, R) => {
                var C = fl(), at = L(C), M = L(at), N = g(M);
                {
                  var J = (lt) => {
                    var pt = ll();
                    k(lt, pt);
                  };
                  j(N, (lt) => {
                    s(R).online || lt(J);
                  });
                }
                H(() => {
                  bt(at, "aria-selected", s(R).active), at.disabled = !s(R).online, U(M, `${s(R).name ?? ""}${s(R).country ? ` · ${s(R).country}` : ""} `);
                }), it("click", at, () => l(s(R).id)), k(ot, C);
              }), H(() => bt(w, "aria-selected", !s(n).exit_node)), it("click", w, () => l(null)), k(I, W);
            };
            j(y, (I) => {
              s(i) && I(S);
            });
          }
          H(() => {
            bt(X, "aria-expanded", s(i)), X.disabled = s(r) !== null, U(et, `${s(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), it("click", X, () => b(i, !s(i))), k(Y, K);
        };
        j(_, (Y) => {
          var K;
          (K = s(n).exit_nodes) != null && K.length && Y(E);
        });
      }
      var P = g(_, 2);
      {
        var O = (Y) => {
          var K = vl();
          k(Y, K);
        };
        j(P, (Y) => {
          !s(n).connected && (s(n).route_scraping || s(n).route_streaming) && Y(O);
        });
      }
      var F = g(p, 2);
      {
        var ut = (Y) => {
          var K = dl(), X = q(K, !0);
          H(() => U(X, s(a))), k(Y, K);
        };
        j(F, (Y) => {
          s(a) && Y(ut);
        });
      }
      k(v, d);
    };
    j(h, (v) => {
      var d;
      (d = s(n)) != null && d.enabled && v(x);
    });
  }
  k(t, c), se();
}
We(["click"]);
var pl = /* @__PURE__ */ A('<p class="ofx-error">That account could not be loaded.</p>'), gl = /* @__PURE__ */ A('<div class="ofx-banner"><img alt=""/></div>'), bl = /* @__PURE__ */ Ps('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), ml = /* @__PURE__ */ A('<p> </p> <button class="ofx-more" type="button"> </button>', 1), xl = /* @__PURE__ */ A("<span><b> </b> </span>"), yl = /* @__PURE__ */ A('<div class="ofx-stats"></div>'), wl = /* @__PURE__ */ A("<span> </span>"), ki = /* @__PURE__ */ A('<a target="_blank" rel="noreferrer noopener"> </a>'), kl = /* @__PURE__ */ A('<button type="button" role="tab"> </button>'), El = /* @__PURE__ */ A('<span class="ofx-count"> </span>'), Sl = /* @__PURE__ */ A('<button type="button"> <!></button>'), Tl = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), Al = /* @__PURE__ */ A(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Cl = /* @__PURE__ */ A('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Rl = /* @__PURE__ */ A('<p class="ofx-note">Loading…</p>'), Il = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), Ml = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Ol = /* @__PURE__ */ A('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Nl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Ll = /* @__PURE__ */ A("<!> <!> <!> <!>", 1);
function Pl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ B(null), r = /* @__PURE__ */ B(!1), i = /* @__PURE__ */ B("all");
  const a = /* @__PURE__ */ kt(() => s(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([s(i)]));
  let o = /* @__PURE__ */ B(Zt(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ B(!1), l = /* @__PURE__ */ B(null), c = /* @__PURE__ */ B(null), h = /* @__PURE__ */ B(null), x = /* @__PURE__ */ B(null);
  pn(() => {
    lo(e.handle).then((m) => {
      m ? b(n, m, !0) : b(r, !0);
    });
  });
  const v = /* @__PURE__ */ kt(() => {
    var m, w, nt, ot;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (m = s(n)) == null ? void 0 : m.posts_count],
      ["photos", (w = s(n)) == null ? void 0 : w.photos_count],
      ["videos", (nt = s(n)) == null ? void 0 : nt.videos_count],
      ["likes", (ot = s(n)) == null ? void 0 : ot.likes_count]
    ].filter(([, R]) => R != null);
  });
  function d(m) {
    const w = new Set(s(o));
    w.has(m) ? w.delete(m) : w.add(m), b(o, w, !0);
  }
  function p(m) {
    var w, nt;
    if (!((w = e.host) != null && w.play)) {
      b(l, m, !0);
      return;
    }
    e.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: yi(m.site, m.video_id),
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
      contextTitle: ((nt = s(n)) == null ? void 0 : nt.display_name) || e.handle,
      duration: m.duration,
      resolution: m.resolution,
      size: m.size
    });
  }
  function T(m) {
    b(x, null), b(h, m, !0);
  }
  async function _(m) {
    b(x, null);
    const w = await _o(m.site, m.gallery_id);
    if (!w) {
      b(x, "Could not open that gallery");
      return;
    }
    if (w.length === 0) {
      b(x, "That site served no images for this gallery");
      return;
    }
    b(c, { gallery: m, count: w.length, index: 0 }, !0);
  }
  function E(m) {
    s(c) && b(
      c,
      {
        ...s(c),
        index: (s(c).index + m + s(c).count) % s(c).count
      },
      !0
    );
  }
  function P(m) {
    if (m.key === "Escape") {
      b(l, null), b(c, null), b(h, null);
      return;
    }
    s(c) && (m.key === "ArrowRight" && E(1), m.key === "ArrowLeft" && E(-1));
  }
  var O = Ll();
  Rr("keydown", Tr, P);
  var F = wt(O);
  {
    var ut = (m) => {
      var w = pl();
      k(m, w);
    }, Y = (m) => {
      var w = Cl(), nt = wt(w), ot = L(nt);
      {
        var R = (D) => {
          var Z = gl(), ft = q(Z);
          H(() => bt(ft, "src", s(n).header_url)), k(D, Z);
        };
        j(ot, (D) => {
          s(n).header_url && D(R);
        });
      }
      var C = g(ot, 2), at = L(C);
      let M;
      var N = L(at);
      ni(N, {
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
      var J = g(at, 2), lt = L(J), pt = L(lt), St = g(pt);
      {
        var Tt = (D) => {
          var Z = bl();
          k(D, Z);
        };
        j(St, (D) => {
          s(n).is_verified && D(Tt);
        });
      }
      var At = g(lt, 2), Ct = L(At), vt = g(Ct, 2), rt = g(At, 2);
      {
        var dt = (D) => {
          var Z = ml(), ft = wt(Z);
          let Nt;
          var be = q(ft, !0), qt = g(ft, 2), Ce = q(qt, !0);
          H(() => {
            Nt = $e(ft, 1, "ofx-bio", null, Nt, { "ofx-clamped": !s(f) }), U(be, s(n).bio), U(Ce, s(f) ? "less" : "more");
          }), it("click", qt, () => b(f, !s(f))), k(D, Z);
        };
        j(rt, (D) => {
          s(n).bio && D(dt);
        });
      }
      var Ft = g(rt, 2);
      {
        var mn = (D) => {
          var Z = yl();
          Et(Z, 21, () => s(v), ([ft, Nt]) => ft, (ft, Nt) => {
            var be = /* @__PURE__ */ kt(() => $n(s(Nt), 2));
            let qt = () => s(be)[0], Ce = () => s(be)[1];
            var fe = xl(), xn = L(fe), cr = q(xn, !0), Oa = g(xn);
            H(
              (Na) => {
                U(cr, Na), U(Oa, ` ${qt() ?? ""}`);
              },
              [() => Ce().toLocaleString()]
            ), k(ft, fe);
          }), k(D, Z);
        };
        j(Ft, (D) => {
          s(v).length && D(mn);
        });
      }
      var Ae = g(Ft, 2), le = L(Ae);
      {
        var Gn = (D) => {
          var Z = wl(), ft = q(Z, !0);
          H(() => U(ft, s(n).location)), k(D, Z);
        };
        j(le, (D) => {
          s(n).location && D(Gn);
        });
      }
      var ri = g(le, 2);
      {
        var Ea = (D) => {
          var Z = ki(), ft = q(Z, !0);
          H(
            (Nt) => {
              bt(Z, "href", s(n).website), U(ft, Nt);
            },
            [() => s(n).website.replace(/^https?:\/\//, "")]
          ), k(D, Z);
        };
        j(ri, (D) => {
          s(n).website && D(Ea);
        });
      }
      var Sa = g(ri, 2);
      {
        var Ta = (D) => {
          var Z = ki(), ft = q(Z);
          H(() => {
            bt(Z, "href", s(n).of_url), U(ft, `onlyfans.com/${s(n).of_username ?? ""}`);
          }), k(D, Z);
        };
        j(Sa, (D) => {
          s(n).of_url && D(Ta);
        });
      }
      var Aa = g(C, 2);
      Et(Aa, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([D, Z]) => D, (D, Z) => {
        var ft = /* @__PURE__ */ kt(() => $n(Z, 2));
        let Nt = () => s(ft)[0], be = () => s(ft)[1];
        var qt = kl();
        let Ce;
        var fe = q(qt, !0);
        H(() => {
          Ce = $e(qt, 1, "ofx-tab", null, Ce, { "ofx-on": s(i) === Nt() }), bt(qt, "aria-selected", s(i) === Nt()), U(fe, be());
        }), it("click", qt, () => b(i, Nt(), !0)), k(D, qt);
      });
      var ii = g(nt, 2);
      _l(ii, {});
      var ai = g(ii, 2), si = g(L(ai), 2);
      Et(si, 17, () => s(n).sources, (D) => D.site, (D, Z) => {
        var ft = Sl();
        let Nt;
        var be = L(ft), qt = g(be);
        {
          var Ce = (fe) => {
            var xn = El(), cr = q(xn, !0);
            H(() => U(cr, (s(Z).video_count ?? 0) + (s(Z).image_count ?? 0))), k(fe, xn);
          };
          j(qt, (fe) => {
            (s(Z).video_count != null || s(Z).image_count != null) && fe(Ce);
          });
        }
        H(
          (fe) => {
            Nt = $e(ft, 1, "ofx-btn ofx-outline", null, Nt, { "ofx-on": fe }), U(be, `${s(Z).site ?? ""} `);
          },
          [() => s(o).has(s(Z).site)]
        ), it("click", ft, () => d(s(Z).site)), k(D, ft);
      });
      var Ca = g(si, 2), oi = g(ai, 2);
      {
        var Ra = (D) => {
          var Z = Tl(), ft = q(Z, !0);
          H(() => U(ft, s(x))), k(D, Z);
        };
        j(oi, (D) => {
          s(x) && D(Ra);
        });
      }
      var li = g(oi, 2);
      {
        var Ia = (D) => {
          var Z = Al();
          k(D, Z);
        };
        j(li, (D) => {
          s(o).size === 0 && D(Ia);
        });
      }
      var fi = g(li, 2);
      Et(fi, 17, () => s(n).sources.filter((D) => s(o).has(D.site)), (D) => D.site, (D, Z) => {
        rl(D, {
          get handle() {
            return s(n).handle;
          },
          get site() {
            return s(Z).site;
          },
          get kinds() {
            return s(a);
          },
          onplay: (ft) => p(ft),
          ongallery: _,
          onphoto: T
        });
      });
      var Ma = g(fi, 2);
      ba(Ma, () => s(n).handle, (D) => {
        Fr(D, {
          get title() {
            return `More like ${s(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => fo(s(n).handle),
          get navigate() {
            return e.navigate;
          }
        });
      }), H(() => {
        M = $e(at, 1, "ofx-avatar", null, M, { "ofx-overlap": !!s(n).header_url }), U(pt, `${s(n).display_name ?? ""} `), U(Ct, `@${(s(n).of_username || s(n).handle) ?? ""} `), U(vt, ` ${s(n).source_count ?? ""}
                    ${s(n).source_count === 1 ? "site" : "sites"}`);
      }), it("click", Ca, () => e.navigate("/x/onlyfans")), k(m, w);
    }, K = (m) => {
      var w = Rl();
      k(m, w);
    };
    j(F, (m) => {
      s(r) ? m(ut) : s(n) ? m(Y, 1) : m(K, -1);
    });
  }
  var X = g(F, 2);
  {
    var et = (m) => {
      var w = Il(), nt = L(w), ot = g(nt, 2);
      H(() => bt(ot, "src", s(h).full)), it("click", nt, () => b(h, null)), k(m, w);
    };
    j(X, (m) => {
      s(h) && m(et);
    });
  }
  var y = g(X, 2);
  {
    var S = (m) => {
      var w = Ml(), nt = L(w), ot = g(nt, 2);
      H((R) => bt(ot, "src", R), [
        () => yi(s(l).site, s(l).video_id)
      ]), it("click", nt, () => b(l, null)), k(m, w);
    };
    j(y, (m) => {
      s(l) && m(S);
    });
  }
  var I = g(y, 2);
  {
    var W = (m) => {
      var w = Nl(), nt = L(w), ot = g(nt, 2);
      {
        var R = (at) => {
          var M = Ol(), N = wt(M), J = g(N, 2);
          it("click", N, () => E(-1)), it("click", J, () => E(1)), k(at, M);
        };
        j(ot, (at) => {
          s(c).count > 1 && at(R);
        });
      }
      var C = g(ot, 2);
      H(
        (at) => {
          bt(C, "src", at), bt(C, "alt", `${s(c).gallery.title ?? ""} ${s(c).index + 1} of ${s(c).count ?? ""}`);
        },
        [
          () => po(s(c).gallery.site, s(c).gallery.gallery_id, s(c).index)
        ]
      ), it("click", nt, () => b(c, null)), k(m, w);
    };
    j(I, (m) => {
      s(c) && m(W);
    });
  }
  k(t, O), se();
}
We(["click"]);
var Dl = /* @__PURE__ */ A('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Fl(t, e) {
  ae(e, !0);
  let n = ke(e, "path", 3, "");
  ya(e.api);
  const r = /* @__PURE__ */ kt(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Dl(), a = L(i), o = L(a);
  {
    var f = (c) => {
      var h = gn(), x = wt(h);
      ba(x, () => s(r), (v) => {
        Pl(v, {
          get handle() {
            return s(r);
          },
          get navigate() {
            return e.navigate;
          },
          get host() {
            return e.host;
          }
        });
      }), k(c, h);
    }, l = (c) => {
      Go(c, {
        get navigate() {
          return e.navigate;
        }
      });
    };
    j(o, (c) => {
      s(r) ? c(f) : c(l, -1);
    });
  }
  k(t, i), se();
}
var Ul = /* @__PURE__ */ A('<p class="ofx-settings-error">Could not read the scraper list.</p>'), jl = /* @__PURE__ */ A('<p class="ofx-settings-error"><strong> </strong> </p>'), Hl = /* @__PURE__ */ A('<button type="button" class="ofx-btn">Sync</button>'), zl = /* @__PURE__ */ A("<tr><td> </td><td> </td><td><code> </code></td><td> </td><td> </td><td><!></td></tr>"), Vl = /* @__PURE__ */ A(`<div class="ofx ofx-settings"><div class="ofx-settings-head"><p class="ofx-settings-title">Account index<!></p> <button type="button" class="ofx-btn"> </button></div> <p class="ofx-settings-title"> </p> <p class="ofx-settings-note">Loaded from <code> </code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.</p> <!> <!> <table class="ofx-settings-table"><thead><tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th><th>Index</th><th></th></tr></thead><tbody></tbody></table></div>`);
function Bl(t, e) {
  ae(e, !0);
  const n = () => os(d, "$state", r), [r, i] = ls();
  let a = n()(null), o = n()(!1);
  async function f() {
    const R = await xo();
    o = R === null, R && (a = R);
  }
  let l = n()(null), c = n()(!1);
  const h = async () => {
    const R = await yo();
    R && (l = R);
  };
  async function x(R) {
    c = !0;
    const C = await wo(R);
    C && (l = C), c = !1;
  }
  pn(() => {
    f(), h();
    const R = setInterval(
      () => {
        l != null && l.running && h();
      },
      3e3
    );
    return () => clearInterval(R);
  });
  const v = /* @__PURE__ */ kt(() => Object.fromEntries(((l == null ? void 0 : l.sites) ?? []).map((R) => [R.site, R])));
  function d(R) {
    const C = s(v)[R];
    return C ? C.state === "running" ? `running, page ${C.pages}, ${C.accounts_seen} seen` : C.state === "ok" ? `${C.accounts_seen} accounts (+${C.accounts_new}) ${_(C.finished_at)}` : C.state === "failed" ? `failed: ${C.error ?? ""}` : "never run" : "";
  }
  const p = /* @__PURE__ */ kt(() => (a == null ? void 0 : a.scrapers) ?? []), T = /* @__PURE__ */ kt(() => Object.entries((a == null ? void 0 : a.errors) ?? {})), _ = (R) => R ? R.slice(0, 10) : "";
  var E = Vl(), P = L(E), O = L(P), F = g(L(O));
  {
    var ut = (R) => {
      var C = Tn();
      H(() => U(C, `: ${l.accounts ?? ""} accounts, ${l.accounts_with_avatar ?? ""} with a picture`)), k(R, C);
    };
    j(F, (R) => {
      l && R(ut);
    });
  }
  var Y = g(O, 2), K = q(Y, !0), X = g(P, 2), et = q(X), y = g(X, 2), S = g(L(y)), I = q(S, !0), W = g(y, 2);
  {
    var m = (R) => {
      var C = Ul();
      k(R, C);
    };
    j(W, (R) => {
      o && R(m);
    });
  }
  var w = g(W, 2);
  Et(w, 17, () => s(T), ([R, C]) => R, (R, C) => {
    var at = /* @__PURE__ */ kt(() => $n(s(C), 2));
    let M = () => s(at)[0], N = () => s(at)[1];
    var J = jl(), lt = L(J), pt = q(lt, !0), St = g(lt);
    H(() => {
      U(pt, M()), U(St, `: ${N() ?? ""}`);
    }), k(R, J);
  });
  var nt = g(w, 2), ot = g(L(nt));
  Et(ot, 21, () => s(p), (R) => R.key, (R, C) => {
    var at = zl(), M = L(at), N = q(M), J = g(M), lt = q(J, !0), pt = g(J), St = L(pt), Tt = q(St, !0), At = g(pt), Ct = q(At, !0), vt = g(At), rt = q(vt, !0), dt = g(vt), Ft = L(dt);
    {
      var mn = (Ae) => {
        var le = Hl();
        H(() => {
          var Gn;
          return le.disabled = c || ((Gn = s(v)[s(C).key]) == null ? void 0 : Gn.state) === "running";
        }), it("click", le, () => x([s(C).key])), k(Ae, le);
      };
      j(Ft, (Ae) => {
        s(C).indexes_accounts && Ae(mn);
      });
    }
    H(
      (Ae, le) => {
        U(N, `${s(C).name ?? ""}${s(C).indexes_accounts ? "" : " (no index)"}`), U(lt, s(C).base_url), U(Tt, s(C).version), U(Ct, Ae), U(rt, le);
      },
      [
        () => _(s(C).updated),
        () => s(C).indexes_accounts ? d(s(C).key) : ""
      ]
    ), k(R, at);
  }), H(() => {
    Y.disabled = c || (l == null ? void 0 : l.running), U(K, l != null && l.running ? "Syncing…" : "Sync all sites now"), U(et, `Installed scrapers (${s(p).length ?? ""})`), U(I, (a == null ? void 0 : a.plugin_dir) ?? "…");
  }), it("click", Y, () => x()), k(t, E), se(), i();
}
We(["click"]);
function Yl({ target: t, path: e, api: n, navigate: r, host: i }) {
  const a = Zt({ path: e ?? "", api: n, navigate: r, host: i }), o = pa(Fl, { target: t, props: a });
  return {
    update(f) {
      a.path = f ?? "";
    },
    destroy() {
      ga(o);
    }
  };
}
const Kl = {
  settings({ target: t, api: e }) {
    ya(e);
    const n = pa(Bl, { target: t });
    return {
      update() {
      },
      destroy() {
        ga(n);
      }
    };
  }
};
export {
  Yl as default,
  Kl as slots
};

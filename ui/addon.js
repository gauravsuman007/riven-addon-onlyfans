var Ma = Object.defineProperty;
var ai = (t) => {
  throw TypeError(t);
};
var Ia = (t, e, n) => e in t ? Ma(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Pt = (t, e, n) => Ia(t, typeof e != "symbol" ? e + "" : e, n), fr = (t, e, n) => e.has(t) || ai("Cannot " + n);
var u = (t, e, n) => (fr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), q = (t, e, n) => e.has(t) ? ai("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), U = (t, e, n, r) => (fr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), X = (t, e, n) => (fr(t, e, "access private method"), n);
const pt = Symbol("uninitialized"), Oa = "http://www.w3.org/1999/xhtml", wi = !1;
var ki = Array.isArray, Na = Array.prototype.indexOf, Kn = Array.prototype.includes, ir = Array.from, Ei = Object.defineProperty, En = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyDescriptors, La = Object.prototype, Pa = Array.prototype, Pr = Object.getPrototypeOf, si = Object.isExtensible;
const Da = () => {
};
function Fa(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ai() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Wn(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const mt = 2, on = 4, ar = 8, Ti = 1 << 24, ne = 16, Zt = 32, Ee = 64, pr = 128, Dr = 256, Wt = 512, bt = 1024, _t = 2048, ie = 4096, At = 8192, Ht = 16384, cn = 32768, Zn = 1 << 25, ze = 65536, Jn = 1 << 17, Ua = 1 << 18, vn = 1 << 19, ja = 1 << 20, ve = 1 << 25, Ve = 65536, Xn = 1 << 21, Xe = 1 << 22, Me = 1 << 23, Qe = Symbol("$state"), Ci = Symbol("component"), Ha = Symbol(""), Bn = Symbol("attributes"), gr = Symbol("class"), br = Symbol("style"), bn = Symbol("text"), Ln = new class extends Error {
  constructor() {
    super(...arguments);
    Pt(this, "name", "StaleReactionError");
    Pt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var mi;
const za = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((mi = globalThis.document) != null && mi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Va() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ba() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ri(t) {
  return t === this.v;
}
function Mi(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ii(t) {
  return !Mi(t, this.v);
}
function qa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ga(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ya(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wa(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ja() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $a() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ts = !1, Tt = null;
function ln(t) {
  Tt = t;
}
function ae(t, e = !1, n) {
  Tt = {
    p: Tt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      Q
    ),
    l: null
  };
}
function se(t) {
  var e = (
    /** @type {ComponentContext} */
    Tt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ji(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Tt = e.p, Fr(t);
}
function Fr(t = {}) {
  return Ei(t, Ci, { value: !0 }), t;
}
function Oi() {
  return !0;
}
let We = [];
function es() {
  var t = We;
  We = [], Fa(t);
}
function ye(t) {
  if (We.length === 0) {
    var e = We;
    queueMicrotask(() => {
      e === We && es();
    });
  }
  We.push(t);
}
const ns = -7169;
function vt(t, e) {
  t.f = t.f & ns | e;
}
function Ur(t) {
  (t.f & Wt) !== 0 || t.deps === null ? vt(t, bt) : vt(t, ie);
}
function Ni(t) {
  if (t !== null)
    for (const e of t)
      (e.f & mt) === 0 || (e.f & Ve) === 0 || (e.f ^= Ve, Ni(
        /** @type {Derived} */
        e.deps
      ));
}
function Li(t, e, n) {
  (t.f & _t) !== 0 ? e.add(t) : (t.f & ie) !== 0 && n.add(t), Ni(t.deps), vt(t, bt);
}
function Pn(t) {
  var e = Z, n = Q;
  Jt(null), _e(null);
  try {
    return t();
  } finally {
    Jt(e), _e(n);
  }
}
function rs(t, e, n, r) {
  const i = jr;
  var s = t.filter((d) => !d.settled), o = e.map(i);
  if (n.length === 0 && s.length === 0) {
    r(o);
    return;
  }
  var f = (
    /** @type {Effect} */
    Q
  ), l = is(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((d) => d.promise)) : null;
  function h(d) {
    if ((f.f & Ht) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (p) {
        ce(p, f);
      }
      Qn();
    }
  }
  var m = Pi();
  if (n.length === 0) {
    c.then(() => h([])).finally(m);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ as(d))).then(h).catch((d) => ce(d, f)).finally(m);
  }
  c ? c.then(() => {
    l(), v(), Qn();
  }) : v();
}
function is() {
  var t = (
    /** @type {Effect} */
    Q
  ), e = Z, n = Tt, r = (
    /** @type {Batch} */
    H
  );
  return function(s = !0) {
    _e(t), Jt(e), ln(n), s && (t.f & Ht) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function Qn(t = !0) {
  _e(null), Jt(null), ln(null), t && (H == null || H.deactivate());
}
function Pi() {
  var t = (
    /** @type {Effect} */
    Q
  ), e = t.b, n = (
    /** @type {Batch} */
    H
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function jr(t) {
  var e = mt | _t;
  return Q !== null && (Q.f |= vn), {
    ctx: Tt,
    deps: null,
    effects: null,
    equals: Ri,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      pt
    ),
    wv: 0,
    parent: Q,
    ac: null
  };
}
const mn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function as(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    Q
  );
  r === null && qa();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = qe(
    /** @type {V} */
    pt
  ), o = !Z, f = /* @__PURE__ */ new Set();
  return ys(() => {
    var d, p;
    var l = (
      /** @type {Effect} */
      Q
    ), c = Ai();
    i = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (T) => {
        T !== Ln && c.reject(T);
      }).finally(Qn);
    } catch (T) {
      c.reject(T), Qn();
    }
    var h = (
      /** @type {Batch} */
      H
    );
    if (o) {
      if ((l.f & cn) !== 0)
        var m = Pi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (p = h.async_deriveds.get(l)) == null || p.reject(mn);
      else
        for (const T of f.values())
          T.reject(mn);
      f.add(c), h.async_deriveds.set(l, c);
    }
    const v = (T, _ = void 0) => {
      m == null || m(), f.delete(c), _ !== mn && (h.activate(), _ ? (s.f |= Me, fn(s, _)) : ((s.f & Me) !== 0 && (s.f ^= Me), fn(s, T)), h.deactivate());
    };
    c.promise.then(v, (T) => v(null, T || "unknown"));
  }), Zi(() => {
    for (const l of f)
      l.reject(mn);
  }), new Promise((l) => {
    function c(h) {
      function m() {
        h === i ? l(s) : c(i);
      }
      h.then(m, m);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function St(t) {
  const e = /* @__PURE__ */ jr(t);
  return na(e), e;
}
// @__NO_SIDE_EFFECTS__
function ss(t) {
  const e = /* @__PURE__ */ jr(t);
  return e.equals = Ii, e;
}
function os(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ot(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Hr(t) {
  var e, n = Q, r = t.parent;
  if (!Ie && r !== null && t.v !== pt && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Ht | At)) !== 0)
    return Va(), t.v;
  _e(r);
  try {
    t.f &= ~Ve, os(t), e = sa(t);
  } finally {
    _e(n);
  }
  return e;
}
function Di(t) {
  var e = Hr(t);
  if (!t.equals(e) && (t.wv = ia(), (!(H != null && H.is_fork) || t.deps === null) && (H !== null ? (H.capture(t, e, !0), Sn == null || Sn.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    vt(t, bt);
    return;
  }
  Ie || (xt !== null ? (Br() || H != null && H.is_fork) && xt.set(t, e) : Ur(t));
}
function ls(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Pn(() => {
        n.ac.abort(Ln), n.ac = null;
      }), n.fn !== null && (n.teardown = Da), Tn(n, 0), Gr(n));
}
function Fi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && un(e);
}
let ur = null, Ye = null, H = null, Sn = null, xt = null, mr = null, cr = !1, Ze = null, qn = null;
var oi = 0;
let fs = 1;
var $e, Ce, Le, tn, en, nn, be, rn, Mt, Rn, me, te, le, an, Pe, rt, xr, xn, yr, Ui, ji, Ke, us, yn;
const er = class er {
  constructor() {
    q(this, rt);
    Pt(this, "id", fs++);
    /** True as soon as `#process` was called */
    q(this, $e, !1);
    Pt(this, "linked", !0);
    /** @type {Batch | null} */
    q(this, Ce, null);
    /** @type {Batch | null} */
    q(this, Le, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Pt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Pt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Pt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, tn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, en, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, nn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    q(this, be, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, rn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    q(this, Mt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    q(this, Rn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, me, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    q(this, te, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    q(this, le, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    q(this, an, /* @__PURE__ */ new Set());
    Pt(this, "is_fork", !1);
    q(this, Pe, !1);
    Ye === null ? ur = Ye = this : (U(Ye, Le, this), U(this, Ce, Ye)), Ye = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    u(this, le).has(e) || u(this, le).set(e, { d: [], m: [] }), u(this, an).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = u(this, le).get(e);
    if (r) {
      u(this, le).delete(e);
      for (var i of r.d)
        vt(i, _t), n(i);
      for (i of r.m)
        vt(i, ie), n(i);
    }
    u(this, an).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== pt && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Me) === 0 && (this.current.set(e, [n, r]), xt == null || xt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    H = this;
  }
  deactivate() {
    H = null, xt = null;
  }
  flush() {
    try {
      cr = !0, H = this, X(this, rt, xn).call(this);
    } finally {
      oi = 0, mr = null, Ze = null, qn = null, cr = !1, H = null, xt = null, de.clear();
    }
  }
  discard() {
    var e;
    for (const n of u(this, en)) n(this);
    u(this, en).clear();
    for (const n of this.async_deriveds.values())
      n.reject(mn);
    X(this, rt, yn).call(this), (e = u(this, rn)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    u(this, Rn).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (U(this, nn, u(this, nn) + 1), e) {
      let r = u(this, be).get(n) ?? 0;
      u(this, be).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (U(this, nn, u(this, nn) - 1), e) {
      let r = u(this, be).get(n) ?? 0;
      r === 1 ? u(this, be).delete(n) : u(this, be).set(n, r - 1);
    }
    u(this, Pe) || (U(this, Pe, !0), ye(() => {
      U(this, Pe, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, n) {
    for (const r of e)
      u(this, me).add(r);
    for (const r of n)
      u(this, te).add(r);
    e.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    u(this, tn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, en).add(e);
  }
  settled() {
    return (u(this, rn) ?? U(this, rn, Ai())).promise;
  }
  static ensure() {
    if (H === null) {
      const e = H = new er();
      cr || ye(() => {
        u(e, $e) || e.flush();
      });
    }
    return H;
  }
  apply() {
    {
      xt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var i;
    if (mr = e, (i = e.b) != null && i.is_pending && (e.f & (on | ar | Ti)) !== 0 && (e.f & cn) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var n = e; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ze !== null && n === Q && (Z === null || (Z.f & mt) === 0))
        return;
      if ((r & (Ee | Zt)) !== 0) {
        if ((r & bt) === 0)
          return;
        n.f ^= bt;
      }
    }
    u(this, Mt).push(n);
  }
};
$e = new WeakMap(), Ce = new WeakMap(), Le = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), nn = new WeakMap(), be = new WeakMap(), rn = new WeakMap(), Mt = new WeakMap(), Rn = new WeakMap(), me = new WeakMap(), te = new WeakMap(), le = new WeakMap(), an = new WeakMap(), Pe = new WeakMap(), rt = new WeakSet(), xr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, be).keys()) {
    for (var e = r, n = !1; e.parent !== null; ) {
      if (u(this, le).has(e)) {
        n = !0;
        break;
      }
      e = e.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, xn = function() {
  var l, c, h, m;
  U(this, $e, !0), oi++ > 1e3 && (X(this, rt, yn).call(this), cs());
  for (const v of u(this, me))
    u(this, te).delete(v), vt(v, _t), this.schedule(v);
  for (const v of u(this, te))
    vt(v, ie), this.schedule(v);
  const e = u(this, Mt);
  U(this, Mt, []), this.apply();
  var n = Ze = [], r = [], i = qn = [];
  for (const v of e)
    try {
      X(this, rt, yr).call(this, v, n, r);
    } catch (d) {
      throw Vi(v), X(this, rt, xr).call(this) || this.discard(), d;
    }
  if (H = null, i.length > 0) {
    var s = er.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (Ze = null, qn = null, X(this, rt, xr).call(this)) {
    X(this, rt, Ke).call(this, r), X(this, rt, Ke).call(this, n);
    for (const [v, d] of u(this, le))
      zi(v, d);
    i.length > 0 && /** @type {unknown} */
    X(l = H, rt, xn).call(l);
    return;
  }
  const o = X(this, rt, Ui).call(this);
  if (o) {
    X(this, rt, Ke).call(this, r), X(this, rt, Ke).call(this, n), X(c = o, rt, ji).call(c, this);
    return;
  }
  u(this, me).clear(), u(this, te).clear();
  for (const v of u(this, tn)) v(this);
  u(this, tn).clear(), Sn = this, li(r), li(n), Sn = null, (h = u(this, rn)) == null || h.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    H
  );
  if (u(this, nn) === 0 && (u(this, Mt).length === 0 || f !== null) && X(this, rt, yn).call(this), u(this, Mt).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Mt).push(...u(this, Mt).filter((d) => !u(v, Mt).includes(d)));
    } else
      f = this;
  f !== null && (de.clear(), X(m = f, rt, xn).call(m));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
yr = function(e, n, r) {
  e.f ^= bt;
  for (var i = e.first; i !== null; ) {
    var s = i.f, o = (s & (Zt | Ee)) !== 0, f = o && (s & bt) !== 0, l = f || (s & At) !== 0 || u(this, le).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= bt : (s & on) !== 0 ? n.push(i) : Un(i) && ((s & ne) !== 0 && u(this, te).add(i), un(i));
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
  for (var e = u(this, Ce); e !== null; ) {
    if (!e.is_fork) {
      for (const [n, [, r]] of this.current)
        if (e.current.has(n) && !r)
          return e;
    }
    e = u(e, Ce);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ji = function(e) {
  var r;
  for (const [i, s] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of e.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && s.promise.then(o.resolve).catch(o.reject);
  }
  e.async_deriveds.clear(), this.transfer_effects(u(e, me), u(e, te));
  const n = (i) => {
    var s = i.reactions;
    if (s !== null && !((i.f & mt) !== 0 && (i.f & (_t | ie)) === 0))
      for (const l of s) {
        var o = l.f;
        if ((o & mt) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          o & (Xe | ne) && !this.async_deriveds.has(f) && (u(this, te).delete(f), vt(f, _t), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), X(r = e, rt, yn).call(r), H = this, X(this, rt, xn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ke = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Li(e[n], u(this, me), u(this, te));
}, us = function() {
  var m;
  for (let v = ur; v !== null; v = u(v, Le)) {
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
    if (!(!u(v, $e) || i.length === 0)) {
      var s = i.filter((d) => !this.current.has(d));
      if (s.length === 0)
        e && v.discard();
      else if (n.length > 0) {
        if (e)
          for (const d of u(this, an))
            v.unskip_effect(d, (p) => {
              var T;
              (p.f & (ne | Xe)) !== 0 ? v.schedule(p) : X(T = v, rt, Ke).call(T, [p]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          Hi(l, s, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, p]) => {
          const T = this.current.get(d);
          return T ? T[0] !== p[0] || T[1] !== p[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, Rn))
            (d.f & (Ht | At | Jn)) === 0 && zr(d, c, f) && ((d.f & (Xe | ne)) !== 0 ? (vt(d, _t), v.schedule(d)) : u(v, me).add(d));
        if (u(v, Mt).length > 0 && !u(v, Pe)) {
          v.apply();
          for (var h of u(v, Mt))
            X(m = v, rt, yr).call(m, h, [], []);
          U(v, Mt, []);
        }
        v.deactivate();
      }
    }
  }
}, yn = function() {
  if (this.linked) {
    var e = u(this, Ce), n = u(this, Le);
    e === null ? ur = n : U(e, Le, n), n === null ? Ye = e : U(n, Ce, e), this.linked = !1;
  }
};
let Be = er;
function cs() {
  try {
    Za();
  } catch (t) {
    ce(t, mr);
  }
}
let $t = null;
function li(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Ht | At)) === 0 && Un(r) && ($t = /* @__PURE__ */ new Set(), un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $i(r), ($t == null ? void 0 : $t.size) > 0)) {
        de.clear();
        for (const i of $t) {
          if ((i.f & (Ht | At)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            $t.has(o) && ($t.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (Ht | At)) === 0 && un(l);
          }
        }
        $t.clear();
      }
    }
    $t = null;
  }
}
function Hi(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & mt) !== 0 ? Hi(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Xe | ne)) !== 0 && (s & _t) === 0 && zr(i, e, r) && (vt(i, _t), Vr(
        /** @type {Effect} */
        i
      ));
    }
}
function zr(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (Kn.call(e, i))
        return !0;
      if ((i.f & mt) !== 0 && zr(
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
function Vr(t) {
  H.schedule(t);
}
function zi(t, e) {
  if (!((t.f & Zt) !== 0 && (t.f & bt) !== 0)) {
    (t.f & _t) !== 0 ? e.d.push(t) : (t.f & ie) !== 0 && e.m.push(t), vt(t, bt);
    for (var n = t.first; n !== null; )
      zi(n, e), n = n.next;
  }
}
function Vi(t) {
  vt(t, bt);
  for (var e = t.first; e !== null; )
    Vi(e), e = e.next;
}
let $n = /* @__PURE__ */ new Set();
const de = /* @__PURE__ */ new Map();
let Bi = !1;
function qe(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ri,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function F(t, e) {
  const n = qe(t);
  return na(n), n;
}
// @__NO_SIDE_EFFECTS__
function vs(t, e = !1, n = !0) {
  const r = qe(t);
  return e || (r.equals = Ii), r;
}
function g(t, e, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!re || (Z.f & Jn) !== 0) && Oi() && (Z.f & (mt | ne | Xe | Jn)) !== 0 && (he === null || !he.has(t)) && Qa();
  let r = n ? Kt(e) : e;
  return fn(t, r, qn);
}
function fn(t, e, n = null) {
  if (!t.equals(e)) {
    Ie ? de.set(t, e) : de.has(t) || de.set(t, t.v);
    var r = Be.ensure();
    if (r.capture(t, e), (t.f & mt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & _t) !== 0 && Hr(i), xt === null && Ur(i);
    }
    t.wv = ia(), qi(t, _t, n), Q !== null && (Q.f & bt) !== 0 && (Q.f & (Zt | Ee)) === 0 && (Bt === null ? Es([t]) : Bt.push(t)), !r.is_fork && $n.size > 0 && !Bi && ds();
  }
  return e;
}
function ds() {
  Bi = !1;
  for (const t of $n) {
    (t.f & bt) !== 0 && vt(t, ie);
    let e;
    try {
      e = Un(t);
    } catch {
      e = !0;
    }
    e && un(t);
  }
  $n.clear();
}
function An(t) {
  g(t, t.v + 1);
}
function qi(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], f = o.f, l = (f & _t) === 0;
      if (l && vt(o, e), (f & Jn) !== 0)
        $n.add(
          /** @type {Effect} */
          o
        );
      else if ((f & mt) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        xt == null || xt.delete(c), (f & Ve) === 0 && (f & Wt && (Q === null || (Q.f & Xn) === 0) && (o.f |= Ve), qi(c, ie, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & ne) !== 0 && $t !== null && $t.add(h), n !== null ? n.push(h) : Vr(h);
      }
    }
}
function Kt(t) {
  if (typeof t != "object" || t === null || Qe in t || Ci in t)
    return t;
  const e = Pr(t);
  if (e !== La && e !== Pa)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ki(t), i = /* @__PURE__ */ F(0), s = He, o = (f) => {
    if (He === s)
      return f();
    var l = Z, c = He;
    Jt(null), ui(s);
    var h = f();
    return Jt(l), ui(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ja();
        var h = n.get(l);
        return h === void 0 ? o(() => {
          var m = /* @__PURE__ */ F(c.value);
          return n.set(l, m), m;
        }) : g(h, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ F(pt));
            n.set(l, h), An(i);
          }
        } else
          g(c, pt), An(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === Qe)
          return t;
        var h = n.get(l), m = l in f;
        if (h === void 0 && (!m || (d = En(f, l)) != null && d.writable) && (h = o(() => {
          var p = Kt(m ? f[l] : pt), T = /* @__PURE__ */ F(p);
          return T;
        }), n.set(l, h)), h !== void 0) {
          var v = a(h);
          return v === pt ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = a(h));
        } else if (c === void 0) {
          var m = n.get(l), v = m == null ? void 0 : m.v;
          if (m !== void 0 && v !== pt)
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
        if (l === Qe)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== pt || Reflect.has(f, l);
        if (c !== void 0 || Q !== null && (!h || (v = En(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = h ? Kt(f[l]) : pt, p = /* @__PURE__ */ F(d);
            return p;
          }), n.set(l, c));
          var m = a(c);
          if (m === pt)
            return !1;
        }
        return h;
      },
      set(f, l, c, h) {
        var k;
        var m = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          m.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? g(p, pt) : d in f && (p = o(() => /* @__PURE__ */ F(pt)), n.set(d + "", p));
          }
        if (m === void 0)
          (!v || (k = En(f, l)) != null && k.writable) && (m = o(() => /* @__PURE__ */ F(void 0)), g(m, Kt(c)), n.set(l, m));
        else {
          v = m.v !== pt;
          var T = o(() => Kt(c));
          g(m, T);
        }
        var _ = Reflect.getOwnPropertyDescriptor(f, l);
        if (_ != null && _.set && _.set.call(h, c), !v) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= A.v && g(A, O + 1);
          }
          An(i);
        }
        return !0;
      },
      ownKeys(f) {
        a(i);
        var l = Reflect.ownKeys(f).filter((m) => {
          var v = n.get(m);
          return v === void 0 || v.v !== pt;
        });
        for (var [c, h] of n)
          h.v !== pt && !(c in f) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Xa();
      }
    }
  );
}
var wr, Gi, Yi, Ki;
function hs() {
  if (wr === void 0) {
    wr = window, Gi = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Yi = En(e, "firstChild").get, Ki = En(e, "nextSibling").get, si(t) && (t[gr] = void 0, t[Bn] = null, t[br] = void 0, t.__e = void 0), si(n) && (n[bn] = void 0);
  }
}
function ke(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ge(t) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Dn(t) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(t)
  );
}
function P(t, e) {
  return /* @__PURE__ */ Ge(t);
}
function yt(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ge(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Dn(n) : n;
  }
}
function Y(t, e = !1) {
  return /* @__PURE__ */ Ge(t);
}
function y(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Dn(r);
  return r;
}
function _s(t) {
  t.textContent = "";
}
function Wi() {
  return !1;
}
function ps(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  );
}
function gs(t) {
  var e = Q;
  if (e === null)
    return Z.f |= Me, t;
  if ((e.f & cn) === 0 && (e.f & on) === 0)
    throw t;
  ce(t, e);
}
function ce(t, e) {
  if (!(e !== null && (e.f & Ht) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & pr) !== 0 && (e.f & (Ht | Zn)) === 0) {
        if ((e.f & cn) === 0)
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
function bs(t) {
  Q === null && (Z === null && Wa(), Ka()), Ie && Ya();
}
function ms(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Se(t, e) {
  var n = Q;
  n !== null && (n.f & At) !== 0 && (t |= At);
  var r = {
    ctx: Tt,
    deps: null,
    nodes: null,
    f: t | _t | Wt,
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
  H == null || H.register_created_effect(r);
  var i = r;
  if ((t & on) !== 0)
    Ze !== null ? Ze.push(r) : Be.ensure().schedule(r);
  else if (e !== null) {
    try {
      un(r);
    } catch (o) {
      throw Ot(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & vn) === 0 && (i = i.first, (t & ne) !== 0 && (t & ze) !== 0 && i !== null && (i.f |= ze));
  }
  if (i !== null && (i.parent = n, n !== null && ms(i, n), Z !== null && (Z.f & mt) !== 0 && (t & Ee) === 0)) {
    var s = (
      /** @type {Derived} */
      Z
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function Br() {
  return Z !== null && !re;
}
function Zi(t) {
  const e = Se(ar, null);
  return vt(e, bt), e.teardown = t, e;
}
function dn(t) {
  bs();
  var e = (
    /** @type {Effect} */
    Q.f
  ), n = !Z && (e & Zt) !== 0 && Tt !== null && !Tt.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Tt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ji(t);
}
function Ji(t) {
  return Se(on | ja, t);
}
function xs(t) {
  Be.ensure();
  const e = Se(Ee | vn, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? je(e, () => {
      Ot(e), r(void 0);
    }) : (Ot(e), r(void 0));
  });
}
function Xi(t) {
  return Se(on, t);
}
function ys(t) {
  return Se(Xe | vn, t);
}
function qr(t, e = 0) {
  return Se(ar | e, t);
}
function z(t, e = [], n = [], r = []) {
  rs(r, e, n, (i) => {
    Se(ar, () => {
      t(...i.map(a));
    });
  });
}
function Fn(t, e = 0) {
  var n = Se(ne | e, t);
  return n;
}
function Yt(t) {
  return Se(Zt | vn, t);
}
function Qi(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Ie, r = Z;
    fi(!0), Jt(null);
    try {
      e.call(null);
    } catch (i) {
      ce(i, t.parent);
    } finally {
      fi(n), Jt(r);
    }
  }
}
function Gr(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Pn(() => {
      i.abort(Ln);
    });
    var r = n.next;
    (n.f & Ee) !== 0 ? n.parent = null : Ot(n, e), n = r;
  }
}
function ws(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Zt) === 0 && Ot(e), e = n;
  }
}
function Ot(t, e = !0) {
  var n = !1;
  (e || (t.f & Ua) !== 0) && t.nodes !== null && t.nodes.end !== null && (ks(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= Zn, Gr(t, e && !n), Tn(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Qi(t), t.f ^= Zn, t.f |= Ht;
  var i = t.parent;
  i !== null && i.first !== null && $i(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function ks(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Dn(t);
    t.remove(), t = n;
  }
}
function $i(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function je(t, e, n = !0) {
  var r = [];
  t.f |= Dr, ta(t, r, !0);
  var i = () => {
    n && Ot(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function ta(t, e, n) {
  if ((t.f & At) === 0) {
    t.f ^= At;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && e.push(f);
    for (var i = t.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ee) === 0) {
        var o = (i.f & ze) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Zt) !== 0 && (t.f & ne) !== 0;
        ta(i, e, o ? n : !1);
      }
      i = s;
    }
  }
}
function tr(t) {
  t.f &= ~Dr, ea(t, !0);
}
function ea(t, e) {
  if ((t.f & Dr) === 0 && (t.f & At) !== 0) {
    t.f ^= At, (t.f & bt) === 0 && (vt(t, _t), Be.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ze) !== 0 || (n.f & Zt) !== 0;
      ea(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function Yr(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Dn(n);
      e.append(n), n = i;
    }
}
let Gn = !1, Ie = !1;
function fi(t) {
  Ie = t;
}
let Z = null, re = !1;
function Jt(t) {
  Z = t;
}
let Q = null;
function _e(t) {
  Q = t;
}
let he = null;
function na(t) {
  Z !== null && (he ?? (he = /* @__PURE__ */ new Set())).add(t);
}
let It = null, jt = 0, Bt = null;
function Es(t) {
  Bt = t;
}
let ra = 1, Oe = 0, He = Oe;
function ui(t) {
  He = t;
}
function ia() {
  return ++ra;
}
function Un(t) {
  var e = t.f;
  if ((e & _t) !== 0)
    return !0;
  if (e & mt && (t.f &= ~Ve), (e & ie) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Un(
        /** @type {Derived} */
        s
      ) && Di(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & Wt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xt === null && vt(t, bt);
  }
  return !1;
}
function aa(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(he !== null && he.has(t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & mt) !== 0 ? aa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? vt(s, _t) : (s.f & bt) !== 0 && vt(s, ie), Vr(
        /** @type {Effect} */
        s
      ));
    }
}
function sa(t) {
  var e = It, n = jt, r = Bt, i = Z, s = he, o = Tt, f = re, l = He, c = t.f;
  It = /** @type {null | Value[]} */
  null, jt = 0, Bt = null, Z = (c & (Zt | Ee)) === 0 ? t : null, he = null, ln(t.ctx), re = !1, He = ++Oe, t.ac !== null && (Pn(() => {
    t.ac.abort(Ln);
  }), t.ac = null);
  try {
    t.f |= Xn;
    var h = (
      /** @type {Function} */
      t.fn
    ), m = h();
    t.f |= cn;
    var v = ci(t);
    if (Oi() && Bt !== null && !re && v !== null && (t.f & (mt | ie | _t)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      Bt.length; d++)
        aa(
          Bt[d],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (Oe++, i.deps !== null)
        for (let p = 0; p < n; p += 1)
          i.deps[p].rv = Oe;
      if (e !== null)
        for (const p of e)
          p.rv = Oe;
      Bt !== null && (r === null ? r = Bt : r.push(.../** @type {Source[]} */
      Bt));
    }
    return (t.f & Me) !== 0 && (t.f ^= Me), m;
  } catch (p) {
    return ci(t), gs(p);
  } finally {
    t.f ^= Xn, It = e, jt = n, Bt = r, Z = i, he = s, ln(o), re = f, He = l;
  }
}
function ci(t) {
  var i;
  var e = t.deps, n = H == null ? void 0 : H.is_fork;
  if (It !== null) {
    var r;
    if (n || Tn(t, jt), e !== null && jt > 0)
      for (e.length = jt + It.length, r = 0; r < It.length; r++)
        e[jt + r] = It[r];
    else
      t.deps = e = It;
    if (Br() && (t.f & Wt) !== 0)
      for (r = jt; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && jt < e.length && (Tn(t, jt), e.length = jt);
  return e;
}
function Ss(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Na.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & mt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (It === null || !Kn.call(It, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Wt) !== 0 && (s.f ^= Wt, s.f &= ~Ve), s.v !== pt && Ur(s), s.ac !== null && Pn(() => {
      s.ac.abort(Ln), s.ac = null, vt(s, _t);
    }), ls(s), Tn(s, 0);
  }
}
function Tn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ss(t, n[r]);
}
function un(t) {
  var e = t.f;
  if ((e & Ht) === 0) {
    vt(t, bt);
    var n = Q, r = Gn;
    Q = t, Gn = (e & (Zt | Ee)) === 0;
    try {
      (e & (ne | Ti)) !== 0 ? ws(t) : Gr(t), Qi(t);
      var i = sa(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ra;
      var s;
      wi && ts && (t.f & _t) !== 0 && t.deps;
    } finally {
      Gn = r, Q = n;
    }
  }
}
function a(t) {
  var e = t.f, n = (e & mt) !== 0;
  if (Z !== null && !re) {
    var r = Q !== null && (Q.f & Ht) !== 0;
    if (!r && (he === null || !he.has(t))) {
      var i = Z.deps;
      if ((Z.f & Xn) !== 0)
        t.rv < Oe && (t.rv = Oe, It === null && i !== null && i[jt] === t ? jt++ : It === null ? It = [t] : It.push(t));
      else {
        Z.deps ?? (Z.deps = []), Kn.call(Z.deps, t) || Z.deps.push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Z] : Kn.call(s, Z) || s.push(Z);
      }
    }
  }
  if (Ie && de.has(t))
    return de.get(t);
  if (n) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (Ie) {
      var f = o.v;
      return ((o.f & bt) === 0 && o.reactions !== null || la(o)) && (f = Hr(o)), de.set(o, f), f;
    }
    var l = (o.f & Wt) === 0 && !re && Z !== null && (Gn || (Z.f & Wt) !== 0), c = (o.f & cn) === 0;
    Un(o) && (l && (o.f |= Wt), Di(o)), l && !c && (Fi(o), oa(o));
  }
  if (xt != null && xt.has(t))
    return xt.get(t);
  if ((t.f & Me) !== 0)
    throw t.v;
  return t.v;
}
function oa(t) {
  if (t.f |= Wt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & mt) !== 0 && (e.f & Wt) === 0 && (Fi(
        /** @type {Derived} */
        e
      ), oa(
        /** @type {Derived} */
        e
      ));
}
function la(t) {
  if (t.v === pt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (de.has(e) || (e.f & mt) !== 0 && la(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function sr(t) {
  var e = re;
  try {
    return re = !0, t();
  } finally {
    re = e;
  }
}
function As(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Qe in t)
      kr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Qe in n && kr(n);
      }
  }
}
function kr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        kr(t[r], e);
      } catch {
      }
    const n = Pr(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Si(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const Ne = Symbol("events"), fa = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function Ts(t, e, n, r = {}) {
  function i(s) {
    if (r.capture || Ar.call(e, s), !s.cancelBubble)
      return Pn(() => n == null ? void 0 : n.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ye(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Sr(t, e, n, r, i) {
  var s = { capture: r, passive: i }, o = Ts(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Zi(() => {
    e.removeEventListener(t, o, s);
  });
}
function it(t, e, n) {
  (e[Ne] ?? (e[Ne] = {}))[t] = n;
}
function hn(t) {
  for (var e = 0; e < t.length; e++)
    fa.add(t[e]);
  for (var n of Er)
    n(t);
}
let vr = null, dr = !1;
function Ar(t) {
  var T, _;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((T = t.composedPath) == null ? void 0 : T.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  vr = t, dr || (dr = !0, setTimeout(() => {
    dr = !1, vr = null;
  }));
  var o = 0, f = vr === t && t[Ne];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[Ne] = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || t.target, s !== e) {
    Ei(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = Z, m = Q;
    Jt(null), _e(null);
    try {
      for (var v, d = []; s !== null && s !== e; ) {
        try {
          var p = (_ = s[Ne]) == null ? void 0 : _[r];
          p != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && p.call(s, t);
        } catch (A) {
          v ? d.push(A) : v = A;
        }
        if (t.cancelBubble) break;
        o++, s = o < i.length ? (
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
      t[Ne] = e, delete t.currentTarget, Jt(h), _e(m);
    }
  }
}
var xi;
const hr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((xi = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : xi.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Cs(t) {
  return (
    /** @type {string} */
    (hr == null ? void 0 : hr.createHTML(t)) ?? t
  );
}
function ua(t) {
  var e = ps("template");
  return e.innerHTML = Cs(t.replaceAll("<!>", "<!---->")), e.content;
}
function Cn(t, e) {
  var n = (
    /** @type {Effect} */
    Q
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = ua(s ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Gi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Cn(f, l);
    } else
      Cn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Rs(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        ua(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Ge(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Ge(f);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Cn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ms(t, e) {
  return /* @__PURE__ */ Rs(t, e, "svg");
}
function zn(t = "") {
  {
    var e = ke(t + "");
    return Cn(e, e), e;
  }
}
function _n() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ke();
  return t.append(e, n), Cn(e, n), t;
}
function S(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Is = ["touchstart", "touchmove"];
function Os(t) {
  return Is.includes(t);
}
function Ns(t) {
  let e = 0, n = qe(0), r;
  return () => {
    Br() && (a(n), qr(() => (e === 0 && (r = sr(() => t(() => An(n)))), e += 1, () => {
      ye(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, An(n));
      });
    })));
  };
}
var Ls = ze | vn;
function Ps(t, e, n, r) {
  new Ds(t, e, n, r);
}
var qt, Lr, Gt, De, kt, Dt, Et, Ft, fe, Fe, Re, sn, Mn, In, xe, nr, lt, Fs, Us, Tr, js, Cr, wn, Yn, Rr, Mr;
class Ds {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, i) {
    q(this, lt);
    /** @type {Boundary | null} */
    Pt(this, "parent");
    Pt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Pt(this, "transform_error");
    /** @type {TemplateNode} */
    q(this, qt);
    /** @type {TemplateNode | null} */
    q(this, Lr, null);
    /** @type {BoundaryProps} */
    q(this, Gt);
    /** @type {((anchor: Node) => void)} */
    q(this, De);
    /** @type {Effect} */
    q(this, kt);
    /** @type {Effect | null} */
    q(this, Dt, null);
    /** @type {Effect | null} */
    q(this, Et, null);
    /** @type {Effect | null} */
    q(this, Ft, null);
    /** @type {DocumentFragment | null} */
    q(this, fe, null);
    q(this, Fe, 0);
    q(this, Re, 0);
    q(this, sn, !1);
    /** @type {Set<Effect>} */
    q(this, Mn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, In, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, xe, null);
    q(this, nr, Ns(() => (U(this, xe, qe(u(this, Fe))), () => {
      U(this, xe, null);
    })));
    var s;
    U(this, qt, e), U(this, Gt, n), U(this, De, (o) => {
      var f = (
        /** @type {Effect} */
        Q
      );
      f.b = this, f.f |= pr, r(o);
    }), this.parent = /** @type {Effect} */
    Q.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((o) => o), U(this, kt, Fn(() => {
      X(this, lt, Cr).call(this);
    }, Ls));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Li(e, u(this, Mn), u(this, In));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, Gt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    X(this, lt, Rr).call(this, e, n), U(this, Fe, u(this, Fe) + e), !(!u(this, xe) || u(this, sn)) && (U(this, sn, !0), ye(() => {
      U(this, sn, !1), u(this, xe) && fn(u(this, xe), u(this, Fe));
    }));
  }
  get_effect_pending() {
    return u(this, nr).call(this), a(
      /** @type {Source<number>} */
      u(this, xe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!u(this, Gt).onerror && !u(this, Gt).failed)
      throw e;
    H != null && H.is_fork ? (u(this, Dt) && H.skip_effect(u(this, Dt)), u(this, Et) && H.skip_effect(u(this, Et)), u(this, Ft) && H.skip_effect(u(this, Ft)), H.oncommit(() => {
      X(this, lt, Mr).call(this, e);
    })) : X(this, lt, Mr).call(this, e);
  }
}
qt = new WeakMap(), Lr = new WeakMap(), Gt = new WeakMap(), De = new WeakMap(), kt = new WeakMap(), Dt = new WeakMap(), Et = new WeakMap(), Ft = new WeakMap(), fe = new WeakMap(), Fe = new WeakMap(), Re = new WeakMap(), sn = new WeakMap(), Mn = new WeakMap(), In = new WeakMap(), xe = new WeakMap(), nr = new WeakMap(), lt = new WeakSet(), Fs = function() {
  try {
    U(this, Dt, Yt(() => u(this, De).call(this, u(this, qt))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Us = function(e) {
  const n = u(this, Gt).failed, { reset: r, invoke_onerror: i } = X(this, lt, Tr).call(this, e);
  ye(i), n && U(this, Ft, Yt(() => {
    n(
      u(this, qt),
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
Tr = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ba();
      return;
    }
    n = !0, r && $a(), u(this, Ft) !== null && je(u(this, Ft), () => {
      U(this, Ft, null);
    }), X(this, lt, Yn).call(this, () => {
      X(this, lt, Cr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, Gt)).onerror) == null || f.call(o, e, i), r = !1;
    } catch (l) {
      ce(l, u(this, kt) && u(this, kt).parent);
    }
  } };
}, js = function() {
  const e = u(this, Gt).pending;
  e && (this.is_pending = !0, U(this, Et, Yt(() => e(u(this, qt)))), ye(() => {
    var n = U(this, fe, document.createDocumentFragment()), r = ke(), i = !1;
    if (n.append(r), U(this, Dt, X(this, lt, Yn).call(this, () => {
      try {
        return Yt(() => u(this, De).call(this, r));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (o) {
          ce(o, u(this, kt).parent);
        }
        return null;
      }
    })), u(this, Dt) === null) {
      U(this, fe, null), i && X(this, lt, wn).call(
        this,
        /** @type {Batch} */
        H
      );
      return;
    }
    u(this, Re) === 0 && (u(this, qt).before(n), U(this, fe, null), je(
      /** @type {Effect} */
      u(this, Et),
      () => {
        U(this, Et, null);
      }
    ), X(this, lt, wn).call(
      this,
      /** @type {Batch} */
      H
    ));
  }));
}, Cr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), U(this, Re, 0), U(this, Fe, 0), U(this, Dt, Yt(() => {
      u(this, De).call(this, u(this, qt));
    })), u(this, Re) > 0) {
      var e = U(this, fe, document.createDocumentFragment());
      Yr(u(this, Dt), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, Gt).pending
      );
      U(this, Et, Yt(() => n(u(this, qt))));
    } else
      X(this, lt, wn).call(
        this,
        /** @type {Batch} */
        H
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
wn = function(e) {
  this.is_pending = !1, e.transfer_effects(u(this, Mn), u(this, In));
}, /**
 * @template T
 * @param {() => T} fn
 */
Yn = function(e) {
  var n = Q, r = Z, i = Tt;
  _e(u(this, kt)), Jt(u(this, kt)), ln(u(this, kt).ctx);
  try {
    return Be.ensure(), e();
  } finally {
    _e(n), Jt(r), ln(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Rr = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && X(r = this.parent, lt, Rr).call(r, e, n);
    return;
  }
  U(this, Re, u(this, Re) + e), u(this, Re) === 0 && (X(this, lt, wn).call(this, n), u(this, Et) && je(u(this, Et), () => {
    U(this, Et, null);
  }), u(this, fe) && (u(this, qt).before(u(this, fe)), U(this, fe, null)));
}, /**
 * @param {unknown} error
 */
Mr = function(e) {
  u(this, Dt) && (Ot(u(this, Dt)), U(this, Dt, null)), u(this, Et) && (Ot(u(this, Et)), U(this, Et, null)), u(this, Ft) && (Ot(u(this, Ft)), U(this, Ft, null));
  let n = u(this, Gt).failed;
  const r = (i) => {
    const { reset: s, invoke_onerror: o } = X(this, lt, Tr).call(this, i);
    o(), n && U(this, Ft, X(this, lt, Yn).call(this, () => {
      try {
        return Yt(() => {
          var f = (
            /** @type {Effect} */
            Q
          );
          f.b = this, f.f |= pr, n(
            u(this, qt),
            () => i,
            () => s
          );
        });
      } catch (f) {
        return ce(
          f,
          /** @type {Effect} */
          u(this, kt).parent
        ), null;
      }
    }));
  };
  ye(() => {
    var i;
    try {
      i = this.transform_error(e);
    } catch (s) {
      ce(s, u(this, kt) && u(this, kt).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (s) => ce(s, u(this, kt) && u(this, kt).parent)
    ) : r(i);
  });
};
function D(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[bn] ?? (t[bn] = t.nodeValue)) && (t[bn] = n, t.nodeValue = `${n}`);
}
function ca(t, e) {
  return Hs(t, e);
}
const Vn = /* @__PURE__ */ new Map();
function Hs(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  hs();
  var l = void 0, c = xs(() => {
    var h = n ?? e.appendChild(ke());
    Ps(
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
          Tt
        );
        s && (p.c = s), i && (r.$$events = i), l = t(d, r) || Fr(), se();
      },
      f
    );
    var m = /* @__PURE__ */ new Set(), v = (d) => {
      for (var p = 0; p < d.length; p++) {
        var T = d[p];
        if (!m.has(T)) {
          m.add(T);
          var _ = Os(T);
          for (const k of [e, document]) {
            var A = Vn.get(k);
            A === void 0 && (A = /* @__PURE__ */ new Map(), Vn.set(k, A));
            var O = A.get(T);
            O === void 0 ? (k.addEventListener(T, Ar, { passive: _ }), A.set(T, 1)) : A.set(T, O + 1);
          }
        }
      }
    };
    return v(ir(fa)), Er.add(v), () => {
      var _;
      for (var d of m)
        for (const A of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Vn.get(A)
          ), T = (
            /** @type {number} */
            p.get(d)
          );
          --T == 0 ? (A.removeEventListener(d, Ar), p.delete(d), p.size === 0 && Vn.delete(A)) : p.set(d, T);
        }
      Er.delete(v), h !== n && ((_ = h.parentNode) == null || _.removeChild(h));
    };
  });
  return Ir.set(l, c), l;
}
let Ir = /* @__PURE__ */ new WeakMap();
function va(t, e) {
  const n = Ir.get(t);
  return n ? (Ir.delete(t), n(e)) : Promise.resolve();
}
var ee, ue, Ut, Ue, On, Nn, rr;
class Kr {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    Pt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, ee, /* @__PURE__ */ new Map());
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
    q(this, ue, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    q(this, Ut, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, On, !0);
    /**
     * @param {Batch} batch
     */
    q(this, Nn, (e) => {
      if (u(this, ee).has(e)) {
        var n = (
          /** @type {Key} */
          u(this, ee).get(e)
        ), r = u(this, ue).get(n);
        if (r)
          tr(r), u(this, Ue).delete(n);
        else {
          var i = u(this, Ut).get(n);
          i && (tr(i.effect), u(this, ue).set(n, i.effect), u(this, Ut).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of u(this, ee)) {
          if (u(this, ee).delete(s), s === e)
            break;
          const f = u(this, Ut).get(o);
          f && (Ot(f.effect), u(this, Ut).delete(o));
        }
        for (const [s, o] of u(this, ue)) {
          if (s === n || u(this, Ue).has(s)) continue;
          const f = () => {
            if (Array.from(u(this, ee).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Yr(o, c), c.append(ke()), u(this, Ut).set(s, { effect: o, fragment: c });
            } else
              Ot(o);
            u(this, Ue).delete(s), u(this, ue).delete(s);
          };
          u(this, On) || !r ? (u(this, Ue).add(s), je(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    q(this, rr, (e) => {
      u(this, ee).delete(e);
      const n = Array.from(u(this, ee).values());
      for (const [r, i] of u(this, Ut))
        n.includes(r) || (Ot(i.effect), u(this, Ut).delete(r));
    });
    this.anchor = e, U(this, On, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      H
    ), i = Wi();
    if (n && !u(this, ue).has(e) && !u(this, Ut).has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = ke();
        s.append(o), u(this, Ut).set(e, {
          effect: Yt(() => n(o)),
          fragment: s
        });
      } else
        u(this, ue).set(
          e,
          Yt(() => n(this.anchor))
        );
    if (u(this, ee).set(r, e), i) {
      for (const [f, l] of u(this, ue))
        f === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, Ut))
        f === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Nn)), r.ondiscard(u(this, rr));
    } else
      u(this, Nn).call(this, r);
  }
}
ee = new WeakMap(), ue = new WeakMap(), Ut = new WeakMap(), Ue = new WeakMap(), On = new WeakMap(), Nn = new WeakMap(), rr = new WeakMap();
function zs(t, e, ...n) {
  var r = new Kr(t);
  Fn(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((s) => i(s, ...n)));
  }, ze);
}
function j(t, e, n = !1) {
  var r = new Kr(t), i = n ? ze : 0;
  function s(o, f) {
    r.ensure(o, f);
  }
  Fn(() => {
    var o = !1;
    e((f, l = 0) => {
      o = !0, s(l, f);
    }), o || s(-1, null);
  }, i);
}
const Vs = Symbol("NaN");
function da(t, e, n) {
  var r = new Kr(t);
  Fn(() => {
    var i = e();
    i !== i && (i = /** @type {any} */
    Vs), r.ensure(i, n);
  });
}
function Wr(t, e) {
  return e;
}
function Bs(t, e, n) {
  for (var r = [], i = e.length, s, o = e.length, f = 0; f < i; f++) {
    let m = e[f];
    je(
      m,
      () => {
        if (s) {
          if (s.pending.delete(m), s.done.add(m), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Or(t, ir(s.done)), v.delete(s), v.size === 0 && (t.outrogroups = null);
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
      _s(h), h.append(c), t.items.clear();
    }
    Or(t, e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Or(t, e, n = !0) {
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
    var s = e[i];
    if (r != null && r.has(s)) {
      s.f |= ve;
      const o = document.createDocumentFragment();
      Yr(s, o);
    } else
      Ot(e[i], n);
  }
}
var vi;
function wt(t, e, n, r, i, s = null) {
  var o = t, f = /* @__PURE__ */ new Map(), l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(ke());
  }
  var h = null, m = /* @__PURE__ */ ss(() => {
    var k = n();
    return (
      /** @type {V[]} */
      ki(k) ? k : k == null ? [] : ir(k)
    );
  }), v, d = /* @__PURE__ */ new Map(), p = !0;
  function T(k) {
    (O.effect.f & Ht) === 0 && (O.pending.delete(k), O.fallback = h, qs(O, v, o, e, r), h !== null && (v.length === 0 ? (h.f & ve) === 0 ? tr(h) : (h.f ^= ve, kn(h, null, o)) : je(h, () => {
      h = null;
    })));
  }
  function _(k) {
    O.pending.delete(k);
  }
  var A = Fn(() => {
    v = /** @type {V[]} */
    a(m);
    for (var k = v.length, R = /* @__PURE__ */ new Set(), et = (
      /** @type {Batch} */
      H
    ), B = Wi(), V = 0; V < k; V += 1) {
      var G = v[V], J = r(G, V), x = p ? null : f.get(J);
      x ? (x.v && fn(x.v, G), x.i && fn(x.i, V), B && et.unskip_effect(x.e)) : (x = Gs(
        f,
        p ? o : vi ?? (vi = ke()),
        G,
        J,
        V,
        i,
        e,
        n
      ), p || (x.e.f |= ve), f.set(J, x)), R.add(J);
    }
    if (k === 0 && s && !h && (p ? h = Yt(() => s(o)) : (h = Yt(() => s(vi ?? (vi = ke()))), h.f |= ve)), k > R.size && Ga(), !p)
      if (d.set(et, R), B) {
        for (const [E, M] of f)
          R.has(E) || et.skip_effect(M.e);
        et.oncommit(T), et.ondiscard(_);
      } else
        T(et);
    a(m);
  }), O = { effect: A, items: f, pending: d, outrogroups: null, fallback: h };
  p = !1;
}
function gn(t) {
  for (; t !== null && (t.f & Zt) === 0; )
    t = t.next;
  return t;
}
function qs(t, e, n, r, i) {
  var x, E, M, K, b, w, tt, ot, ft;
  var s = (r & 8) !== 0, o = e.length, f = t.items, l = gn(t.effect.first), c, h = null, m, v = [], d = [], p, T, _, A;
  if (s)
    for (A = 0; A < o; A += 1)
      p = e[A], T = i(p, A), _ = /** @type {EachItem} */
      f.get(T).e, (_.f & ve) === 0 && ((E = (x = _.nodes) == null ? void 0 : x.a) == null || E.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(_));
  for (A = 0; A < o; A += 1) {
    if (p = e[A], T = i(p, A), _ = /** @type {EachItem} */
    f.get(T).e, t.outrogroups !== null)
      for (const at of t.outrogroups)
        at.pending.delete(_), at.done.delete(_);
    if ((_.f & At) !== 0 && (tr(_), s && ((K = (M = _.nodes) == null ? void 0 : M.a) == null || K.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(_))), (_.f & ve) !== 0)
      if (_.f ^= ve, _ === l)
        kn(_, null, n);
      else {
        var O = h ? h.next : l;
        _ === t.effect.last && (t.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Te(t, h, _), Te(t, _, O), kn(_, O, n), h = _, v = [], d = [], l = gn(h.next);
        continue;
      }
    if (_ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < d.length) {
          var k = d[0], R;
          h = k.prev;
          var et = v[0], B = v[v.length - 1];
          for (R = 0; R < v.length; R += 1)
            kn(v[R], k, n);
          for (R = 0; R < d.length; R += 1)
            c.delete(d[R]);
          Te(t, et.prev, B.next), Te(t, h, et), Te(t, B, k), l = k, h = B, A -= 1, v = [], d = [];
        } else
          c.delete(_), kn(_, l, n), Te(t, _.prev, _.next), Te(t, _, h === null ? t.effect.first : h.next), Te(t, h, _), h = _;
        continue;
      }
      for (v = [], d = []; l !== null && l !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = gn(l.next);
      if (l === null)
        continue;
    }
    (_.f & ve) === 0 && v.push(_), h = _, l = gn(_.next);
  }
  if (t.outrogroups !== null) {
    for (const at of t.outrogroups)
      at.pending.size === 0 && (Or(t, ir(at.done)), (b = t.outrogroups) == null || b.delete(at));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var V = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & At) === 0 && V.push(_);
    for (; l !== null; )
      (l.f & At) === 0 && l !== t.fallback && V.push(l), l = gn(l.next);
    var G = V.length;
    if (G > 0) {
      var J = (r & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (A = 0; A < G; A += 1)
          (tt = (w = V[A].nodes) == null ? void 0 : w.a) == null || tt.measure();
        for (A = 0; A < G; A += 1)
          (ft = (ot = V[A].nodes) == null ? void 0 : ot.a) == null || ft.fix();
      }
      Bs(t, V, J);
    }
  }
  s && ye(() => {
    var at, ut;
    if (m !== void 0)
      for (_ of m)
        (ut = (at = _.nodes) == null ? void 0 : at.a) == null || ut.apply();
  });
}
function Gs(t, e, n, r, i, s, o, f) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ vs(n, !1, !1) : qe(n) : null, c = (o & 2) !== 0 ? qe(i) : null;
  return {
    v: l,
    i: c,
    e: Yt(() => (s(e, l ?? n, c ?? i, f), () => {
      t.delete(r);
    }))
  };
}
function kn(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & ve) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Dn(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Te(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function ha(t, e, n) {
  Xi(() => {
    var r = sr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var o = n();
        As(o), i && Mi(s, o) && (s = o, r.update(o));
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
function Ys(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var f = o + s;
          (o === 0 || di.includes(r[o - 1])) && (f === r.length || di.includes(r[f])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(f + 1) : o = f;
        }
  }
  return r === "" ? null : r;
}
function Ks(t, e) {
  return t == null ? null : String(t);
}
function Je(t, e, n, r, i, s) {
  var o = (
    /** @type {any} */
    t[gr]
  );
  if (o !== n || o === void 0) {
    var f = Ys(n, r, s);
    f == null ? t.removeAttribute("class") : t.className = f, t[gr] = n;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function Ws(t, e, n, r) {
  var i = (
    /** @type {any} */
    t[br]
  );
  if (i !== e) {
    var s = Ks(e);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t[br] = e;
  }
  return r;
}
const Zs = Symbol("is custom element"), Js = Symbol("is html"), Xs = za ? "progress" : "PROGRESS";
function Qs(t, e) {
  var n = _a(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== Xs) || (t.value = e ?? "");
}
function gt(t, e, n, r) {
  var i = _a(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Ha] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && $s(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function _a(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Bn] ?? (t[Bn] = {
      [Zs]: t.nodeName.includes("-"),
      [Js]: t.namespaceURI === Oa
    })
  );
}
var hi = /* @__PURE__ */ new Map();
function $s(t) {
  var e = t.getAttribute("is") || t.nodeName, n = hi.get(e);
  if (n) return n;
  hi.set(e, n = /* @__PURE__ */ new Set());
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Si(i);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    i = Pr(i);
  }
  return n;
}
function _r(t, e) {
  return t === e || (t == null ? void 0 : t[Qe]) === e;
}
function to(t = Fr(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Tt.r
  ), s = (
    /** @type {Effect} */
    Q
  );
  return Xi(() => {
    var o, f;
    return qr(() => {
      o = f, f = [], sr(() => {
        _r(n(...f), t) || (e(t, ...f), o && _r(n(...o), t) && e(null, ...o));
      });
    }), () => {
      let l = s;
      for (; l !== i && l.parent !== null && l.parent.f & Zn; )
        l = l.parent;
      const c = () => {
        f && _r(n(...f), t) && e(null, ...f);
      }, h = l.teardown;
      l.teardown = () => {
        c(), h == null || h();
      };
    };
  }), t;
}
function we(t, e, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = o());
  var l;
  return l = () => {
    var c = (
      /** @type {V} */
      t[e]
    );
    return c === void 0 ? o() : (s = !0, c);
  }, l;
}
const eo = "5";
var yi;
typeof window < "u" && ((yi = window.__svelte ?? (window.__svelte = {})).v ?? (yi.v = /* @__PURE__ */ new Set())).add(eo);
let jn = "";
function pa(t) {
  jn = t;
}
async function pe(t, e) {
  const n = new URL(`${jn}${t}`, window.location.origin);
  for (const [r, i] of Object.entries(e ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const ga = (t) => pe("/accounts", t), no = () => pe("/rails"), ro = (t) => pe(`/accounts/${encodeURIComponent(t)}`), io = (t) => pe(`/accounts/${encodeURIComponent(t)}/similar`), ao = (t, e, n) => pe(`/accounts/${encodeURIComponent(t)}/videos`, { site: e, page: n }), so = (t, e, n) => pe(`/accounts/${encodeURIComponent(t)}/galleries`, { site: e, page: n }), oo = (t, e, n) => pe(`/accounts/${encodeURIComponent(t)}/images`, { site: e, page: n }), lo = (t, e) => pe("/videoinfo", { site: t, video_id: e }), fo = (t, e) => pe(`/galleries/${encodeURIComponent(t)}/${encodeURIComponent(e)}`), uo = (t, e, n) => `${jn}/image?site=${encodeURIComponent(t)}&gallery_id=${encodeURIComponent(e)}&index=${n}`, _i = (t, e, n, r, i = !1) => `${jn}/photo?site=${encodeURIComponent(t)}&handle=${encodeURIComponent(e)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, pi = (t, e, n = 0) => `${jn}/stream?site=${encodeURIComponent(t)}&video_id=${encodeURIComponent(e)}&index=${n}`, Zr = "/api/v1/rails/x/onlyfans";
async function co() {
  try {
    const t = await fetch(Zr);
    return t.ok ? (await t.json()).rails ?? [] : [];
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
async function ho(t) {
  try {
    return (await fetch(Zr, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(t)
    })).ok;
  } catch {
    return !1;
  }
}
const _o = () => pe("/plugins");
var po = /* @__PURE__ */ C('<img loading="lazy"/>'), go = /* @__PURE__ */ C('<span class="ofx-initials"> </span>');
function Jr(t, e) {
  ae(e, !0);
  let n = we(e, "src", 3, null), r = we(e, "alt", 3, ""), i = we(e, "name", 3, ""), s = we(e, "onmeasure", 3, null), o = /* @__PURE__ */ F(!1);
  const f = /* @__PURE__ */ St(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((d) => {
    var p;
    return ((p = d[0]) == null ? void 0 : p.toUpperCase()) ?? "";
  }).join(""));
  function l(d) {
    const p = d.currentTarget;
    s() && p.naturalWidth && p.naturalHeight && s()(p.naturalWidth / p.naturalHeight);
  }
  var c = _n(), h = yt(c);
  {
    var m = (d) => {
      var p = po();
      z(() => {
        gt(p, "src", n()), gt(p, "alt", r());
      }), Sr("load", p, l), Sr("error", p, () => g(o, !0)), S(d, p);
    }, v = (d) => {
      var p = go(), T = Y(p, !0);
      z(() => D(T, a(f))), S(d, p);
    };
    j(h, (d) => {
      n() && !a(o) ? d(m) : d(v, -1);
    });
  }
  S(t, c), se();
}
var bo = /* @__PURE__ */ C('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ba(t, e) {
  ae(e, !0);
  var n = bo(), r = P(n), i = P(r);
  Jr(i, {
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
  var s = y(r, 2), o = Y(s, !0), f = y(s, 2), l = Y(f);
  z(() => {
    gt(n, "href", `/x/onlyfans/${e.account.handle ?? ""}`), gt(s, "title", e.account.display_name), D(o, e.account.display_name), D(l, `${e.account.source_count ?? ""}
        ${e.account.source_count === 1 ? "site" : "sites"}`);
  }), it("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), e.navigate(`/x/onlyfans/${e.account.handle}`));
  }), S(t, n), se();
}
hn(["click"]);
var mo = /* @__PURE__ */ C('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), xo = /* @__PURE__ */ C('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), yo = /* @__PURE__ */ C('<span class="ofx-note"> </span>'), wo = /* @__PURE__ */ C('<div class="ofx-rail-actions"><!></div>'), ko = /* @__PURE__ */ C('<div class="ofx-rail-item"><!></div>'), Eo = /* @__PURE__ */ C('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Nr(t, e) {
  ae(e, !0);
  let n = we(e, "note", 3, ""), r = we(e, "order", 3, null), i = we(e, "fetcher", 3, null), s = we(e, "size", 3, 20), o = /* @__PURE__ */ F(Kt([])), f = /* @__PURE__ */ F(!0), l = /* @__PURE__ */ F(0);
  function c() {
    g(l, a(l) + 1);
  }
  dn(() => {
    const T = r(), _ = i(), A = s();
    a(l);
    let O = !1;
    g(f, !0);
    const k = _ ? _() : ga({ order: T, limit: A, offset: 0 });
    return Promise.resolve(k).then((R) => {
      O || (g(o, Array.isArray(R) ? R : (R == null ? void 0 : R.items) ?? [], !0), g(f, !1));
    }), () => {
      O = !0;
    };
  });
  var h = { reload: c }, m = _n(), v = yt(m);
  {
    var d = (T) => {
      var _ = xo(), A = P(_), O = Y(A, !0), k = y(A, 2);
      wt(k, 20, () => Array(8), Wr, (R, et) => {
        var B = mo();
        S(R, B);
      }), z(() => D(O, e.title)), S(T, _);
    }, p = (T) => {
      var _ = Eo(), A = P(_), O = P(A), k = Y(O, !0), R = y(O, 2);
      {
        var et = (J) => {
          var x = yo(), E = Y(x, !0);
          z(() => D(E, n())), S(J, x);
        };
        j(R, (J) => {
          n() && J(et);
        });
      }
      var B = y(R, 2);
      {
        var V = (J) => {
          var x = wo(), E = P(x);
          zs(E, () => e.actions), S(J, x);
        };
        j(B, (J) => {
          e.actions && J(V);
        });
      }
      var G = y(A, 2);
      wt(G, 21, () => a(o), (J) => J.handle, (J, x) => {
        var E = ko(), M = P(E);
        ba(M, {
          get account() {
            return a(x);
          },
          get navigate() {
            return e.navigate;
          }
        }), S(J, E);
      }), z(() => D(k, e.title)), S(T, _);
    };
    j(v, (T) => {
      a(f) ? T(d) : a(o).length && T(p, 1);
    });
  }
  return S(t, m), se(h);
}
var So = /* @__PURE__ */ C('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), Ao = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), To = /* @__PURE__ */ C(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Co = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function Ro(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ F(!1), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(null), s = /* @__PURE__ */ F(Kt([]));
  async function o() {
    const _ = await co(), A = new Map(e.rails.map((R) => [R.key, R])), O = /* @__PURE__ */ new Set(), k = [];
    for (const R of _)
      O.add(R.key), A.has(R.key) && k.push({ ...R });
    for (const R of e.rails)
      O.has(R.key) || k.push({ key: R.key, enabled: !0 });
    g(s, k, !0), g(i, null), g(n, !0);
  }
  function f(_, A) {
    const O = _ + A;
    if (O < 0 || O >= a(s).length) return;
    const k = [...a(s)];
    [k[_], k[O]] = [k[O], k[_]], g(s, k, !0);
  }
  function l(_) {
    g(s, a(s).map((A, O) => O === _ ? { ...A, enabled: !A.enabled } : A), !0);
  }
  function c(_) {
    var A;
    return ((A = e.rails.find((O) => O.key === _)) == null ? void 0 : A.title) ?? _;
  }
  async function h() {
    var _;
    g(r, !0), g(i, null), await vo() ? (await ((_ = e.onsaved) == null ? void 0 : _.call(e)), g(n, !1)) : g(i, "Could not reset."), g(r, !1);
  }
  async function m() {
    var _;
    g(r, !0), g(i, null), await ho(a(s)) ? (await ((_ = e.onsaved) == null ? void 0 : _.call(e)), g(n, !1)) : g(i, "Could not save. Your changes are still here."), g(r, !1);
  }
  var v = Co(), d = yt(v), p = y(d, 2);
  {
    var T = (_) => {
      var A = To(), O = P(A), k = y(P(O), 2), R = y(O, 4);
      wt(R, 23, () => a(s), (M) => M.key, (M, K, b) => {
        var w = So();
        let tt;
        var ot = P(w), ft = Y(ot, !0), at = y(ot, 2), ut = Y(at, !0), N = y(at, 2), L = y(N, 2);
        z(
          ($, ct, Ct, Xt) => {
            tt = Je(w, 1, "", null, tt, { "ofx-off": !a(K).enabled }), D(ft, $), gt(at, "aria-label", ct), D(ut, a(K).enabled ? "Shown" : "Hidden"), N.disabled = a(b) === 0, gt(N, "aria-label", Ct), L.disabled = a(b) === a(s).length - 1, gt(L, "aria-label", Xt);
          },
          [
            () => c(a(K).key),
            () => a(K).enabled ? `Hide ${c(a(K).key)}` : `Show ${c(a(K).key)}`,
            () => `Move ${c(a(K).key)} up`,
            () => `Move ${c(a(K).key)} down`
          ]
        ), it("click", at, () => l(a(b))), it("click", N, () => f(a(b), -1)), it("click", L, () => f(a(b), 1)), S(M, w);
      });
      var et = y(R, 2);
      {
        var B = (M) => {
          var K = Ao(), b = Y(K, !0);
          z(() => D(b, a(i))), S(M, K);
        };
        j(et, (M) => {
          a(i) && M(B);
        });
      }
      var V = y(et, 2), G = P(V), J = y(G, 2), x = y(J, 2), E = Y(x, !0);
      z(() => {
        G.disabled = a(r), x.disabled = a(r), D(E, a(r) ? "Saving…" : "Save");
      }), it("click", k, () => g(n, !1)), it("click", G, h), it("click", J, () => g(n, !1)), it("click", x, m), S(_, A);
    };
    j(p, (_) => {
      a(n) && _(T);
    });
  }
  it("click", d, o), S(t, v), se();
}
hn(["click"]);
var Mo = /* @__PURE__ */ C(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Io = /* @__PURE__ */ C('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Oo = /* @__PURE__ */ C('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), No = /* @__PURE__ */ C('<div class="ofx-sentinel"></div>'), Lo = /* @__PURE__ */ C('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Po = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Do = /* @__PURE__ */ C('<div class="ofx-controls"><!></div> <!> <!>', 1), Fo = /* @__PURE__ */ C('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Uo(t, e) {
  ae(e, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ F(Kt([])), s = /* @__PURE__ */ F(0), o = /* @__PURE__ */ F(!1), f = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(""), c = /* @__PURE__ */ F(!1), h = /* @__PURE__ */ F(""), m, v = /* @__PURE__ */ F(null), d = /* @__PURE__ */ F(Kt([]));
  async function p() {
    const N = await no();
    g(d, Array.isArray(N) ? N : [], !0);
  }
  dn(() => {
    p();
  });
  const T = /* @__PURE__ */ St(() => a(l).trim()), _ = /* @__PURE__ */ St(() => a(T) !== "" || a(c)), A = /* @__PURE__ */ St(() => a(i).length < a(s));
  async function O(N, L) {
    g(o, !0);
    const $ = await ga({ search: N, limit: n, offset: L });
    if (N !== a(l).trim()) {
      g(o, !1);
      return;
    }
    $ ? (g(i, L === 0 ? $.items : [...a(i), ...$.items], !0), g(s, $.total, !0), g(h, N, !0), g(f, !1)) : g(f, !0), g(o, !1);
  }
  function k(N) {
    g(l, N.currentTarget.value, !0), clearTimeout(m), m = setTimeout(() => O(a(l).trim(), 0), 250);
  }
  function R() {
    g(c, !0), O("", 0);
  }
  function et() {
    g(c, !1), g(l, ""), g(i, [], !0), g(s, 0), g(h, "");
  }
  function B(N) {
    const L = new IntersectionObserver(
      ($) => {
        var ct;
        (ct = $[0]) != null && ct.isIntersecting && a(A) && !a(o) && O(a(h), a(i).length);
      },
      { rootMargin: "600px" }
    );
    return L.observe(N), { destroy: () => L.disconnect() };
  }
  var V = Fo(), G = y(yt(V), 2), J = P(G);
  {
    var x = (N) => {
      var L = zn();
      z(
        ($, ct) => D(L, `${$ ?? ""} of ${ct ?? ""}
        ${a(h) ? `matching “${a(h)}”` : "accounts"}`),
        [
          () => a(i).length.toLocaleString(),
          () => a(s).toLocaleString()
        ]
      ), S(N, L);
    }, E = (N) => {
      var L = zn("loading…");
      S(N, L);
    }, M = (N) => {
      var L = zn("nothing found");
      S(N, L);
    }, K = (N) => {
      var L = zn("performers, gathered from the archive sites");
      S(N, L);
    };
    j(J, (N) => {
      a(_) && a(s) ? N(x) : a(_) && a(o) ? N(E, 1) : a(_) ? N(M, 2) : N(K, -1);
    });
  }
  var b = y(G, 2), w = y(P(b), 2), tt = y(b, 2);
  {
    var ot = (N) => {
      var L = Mo();
      S(N, L);
    };
    j(tt, (N) => {
      a(f) && N(ot);
    });
  }
  var ft = y(tt, 2);
  {
    var at = (N) => {
      var L = Lo(), $ = yt(L);
      {
        var ct = (nt) => {
          var ht = Io(), Qt = Y(ht);
          it("click", Qt, et), S(nt, ht);
        };
        j($, (nt) => {
          a(c) && !a(T) && nt(ct);
        });
      }
      var Ct = y($, 2), Xt = P(Ct);
      wt(Xt, 17, () => a(i), (nt) => nt.handle, (nt, ht) => {
        ba(nt, {
          get account() {
            return a(ht);
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var Nt = y(Xt, 2);
      {
        var zt = (nt) => {
          var ht = _n(), Qt = yt(ht);
          wt(Qt, 16, () => Array(12), Wr, (or, Xr) => {
            var Hn = Oo();
            S(or, Hn);
          }), S(nt, ht);
        };
        j(Nt, (nt) => {
          a(o) && nt(zt);
        });
      }
      var Lt = y(Ct, 2);
      {
        var dt = (nt) => {
          var ht = No();
          ha(ht, (Qt) => B == null ? void 0 : B(Qt)), S(nt, ht);
        };
        j(Lt, (nt) => {
          a(A) && nt(dt);
        });
      }
      S(N, L);
    }, ut = (N) => {
      var L = Do(), $ = yt(L), ct = P($);
      Ro(ct, {
        get rails() {
          return a(d);
        },
        onsaved: p
      });
      var Ct = y($, 2);
      wt(Ct, 17, () => a(d).filter((Nt) => Nt.order !== "random"), (Nt) => Nt.order, (Nt, zt) => {
        Nr(Nt, {
          get title() {
            return a(zt).title;
          },
          get note() {
            return a(zt).note;
          },
          get order() {
            return a(zt).order;
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var Xt = y(Ct, 2);
      {
        const Nt = (Lt) => {
          var dt = Po(), nt = yt(dt), ht = y(nt, 2);
          it("click", nt, () => {
            var Qt;
            return (Qt = a(v)) == null ? void 0 : Qt.reload();
          }), it("click", ht, R), S(Lt, dt);
        };
        let zt = /* @__PURE__ */ St(() => {
          var Lt;
          return ((Lt = a(d).find((dt) => dt.order === "random")) == null ? void 0 : Lt.title) ?? "Something else";
        });
        to(
          Nr(Xt, {
            get title() {
              return a(zt);
            },
            order: "random",
            size: r,
            get navigate() {
              return e.navigate;
            },
            actions: Nt,
            $$slots: { actions: !0 }
          }),
          (Lt) => g(v, Lt, !0),
          () => a(v)
        );
      }
      S(N, L);
    };
    j(ft, (N) => {
      a(_) ? N(at) : N(ut, -1);
    });
  }
  z(() => Qs(w, a(l))), it("input", w, k), S(t, V), se();
}
hn(["input", "click"]);
var jo = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), gi = /* @__PURE__ */ C('<p class="ofx-note"> </p>'), Ho = /* @__PURE__ */ C('<span class="ofx-badge"> </span>'), zo = /* @__PURE__ */ C('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Vo = /* @__PURE__ */ C('<p class="ofx-caption-title"> </p>'), Bo = /* @__PURE__ */ C('<p class="ofx-caption-text"> </p>'), qo = /* @__PURE__ */ C('<p class="ofx-caption-when"> </p>'), Go = /* @__PURE__ */ C('<div class="ofx-caption"><!> <!> <!></div>'), Yo = /* @__PURE__ */ C('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Ko = /* @__PURE__ */ C('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Wo = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button"> </button>'), Zo = /* @__PURE__ */ C('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function Jo(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ F(Kt([])), r = /* @__PURE__ */ F(0), i = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(!1), o = /* @__PURE__ */ F(!1);
  async function f() {
    if (a(i) || a(s)) return;
    g(i, !0);
    const x = a(r) + 1, [E, M, K] = await Promise.all([
      ao(e.handle, e.site, x),
      so(e.handle, e.site, x),
      oo(e.handle, e.site, x)
    ]);
    if (E === null && M === null && K === null)
      g(o, !0);
    else {
      const b = [
        ...(E ?? []).map((w) => ({
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
        ...(M ?? []).map((w) => ({
          kind: "image",
          key: `g:${w.gallery_id}`,
          title: w.title,
          thumbnail: w.cover,
          badge: w.image_count ? `${w.image_count}` : null,
          aspect: 0.75,
          posted: w.posted,
          item: w
        })),
        ...(K ?? []).map((w) => ({
          kind: "image",
          key: `p:${w.image_id ?? `${x}:${w.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: _i(e.site, e.handle, x, w.index, !0),
          full: _i(e.site, e.handle, x, w.index),
          badge: null,
          aspect: 0.75,
          posted: w.posted_at,
          item: w
        }))
      ];
      g(n, [...a(n), ...b], !0), g(r, x), b.length === 0 && g(s, !0);
    }
    g(i, !1);
  }
  const l = /* @__PURE__ */ St(() => a(n).filter((x) => e.kinds.has(x.kind)));
  dn(() => {
    e.handle, e.site, sr(() => {
      g(n, [], !0), g(r, 0), g(s, !1), g(o, !1), g(i, !1), f();
    });
  });
  function c(x, E) {
    !E || !Number.isFinite(E) || g(n, a(n).map((M) => M.key === x ? { ...M, aspect: E } : M), !0);
  }
  function h(x, E) {
    if (!E.hasText || E.text) return;
    const M = new IntersectionObserver((K) => {
      K.some((b) => b.isIntersecting) && (M.disconnect(), lo(e.site, E.item.video_id).then((b) => {
        b && g(
          n,
          a(n).map((w) => w.key === E.key ? {
            ...w,
            text: b.description,
            posted: w.posted ?? b.posted_at
          } : w),
          !0
        );
      }));
    });
    return M.observe(x), { destroy: () => M.disconnect() };
  }
  function m(x) {
    x.kind === "video" ? e.onplay(x.item) : x.full ? e.onphoto(x) : e.ongallery(x.item);
  }
  function v(x) {
    return x ? `${Math.floor(x / 60)}:${String(x % 60).padStart(2, "0")}` : null;
  }
  var d = Zo(), p = P(d), T = Y(p, !0), _ = y(p, 2);
  {
    var A = (x) => {
      var E = jo(), M = Y(E);
      z(() => D(M, `${e.site ?? ""} did not answer.`)), S(x, E);
    }, O = (x) => {
      var E = gi(), M = Y(E);
      z(() => D(M, `Nothing here on ${e.site ?? ""}.`)), S(x, E);
    }, k = (x) => {
      var E = gi(), M = Y(E);
      z((K) => D(M, `${e.site ?? ""} has no ${K ?? ""} for this performer.`), [() => [...e.kinds].join(" or ")]), S(x, E);
    };
    j(_, (x) => {
      a(o) ? x(A) : !a(i) && a(n).length === 0 ? x(O, 1) : !a(i) && a(l).length === 0 && x(k, 2);
    });
  }
  var R = y(_, 2), et = P(R);
  wt(et, 17, () => a(l), (x) => x.key, (x, E) => {
    var M = Yo(), K = P(M), b = P(K), w = P(b);
    Jr(w, {
      get src() {
        return a(E).thumbnail;
      },
      get alt() {
        return a(E).title;
      },
      get name() {
        return a(E).title;
      },
      onmeasure: (L) => c(a(E).key, L)
    });
    var tt = y(w, 2);
    {
      var ot = (L) => {
        var $ = Ho(), ct = Y($, !0);
        z(() => D(ct, a(E).badge)), S(L, $);
      };
      j(tt, (L) => {
        a(E).badge && L(ot);
      });
    }
    var ft = y(tt, 2);
    {
      var at = (L) => {
        var $ = zo();
        S(L, $);
      };
      j(ft, (L) => {
        a(E).kind === "video" && L(at);
      });
    }
    var ut = y(K, 2);
    {
      var N = (L) => {
        var $ = Go(), ct = P($);
        {
          var Ct = (dt) => {
            var nt = Vo(), ht = Y(nt, !0);
            z(() => D(ht, a(E).title)), S(dt, nt);
          };
          j(ct, (dt) => {
            a(E).title && dt(Ct);
          });
        }
        var Xt = y(ct, 2);
        {
          var Nt = (dt) => {
            var nt = Bo(), ht = Y(nt, !0);
            z(() => D(ht, a(E).text)), S(dt, nt);
          };
          j(Xt, (dt) => {
            a(E).text && dt(Nt);
          });
        }
        var zt = y(Xt, 2);
        {
          var Lt = (dt) => {
            var nt = qo(), ht = Y(nt, !0);
            z(() => D(ht, a(E).posted)), S(dt, nt);
          };
          j(zt, (dt) => {
            a(E).posted && dt(Lt);
          });
        }
        S(L, $);
      };
      j(ut, (L) => {
        (a(E).title || a(E).text || a(E).posted) && L(N);
      });
    }
    ha(M, (L, $) => h == null ? void 0 : h(L, $), () => a(E)), z(() => Ws(M, `--ofx-ar: ${a(E).aspect ?? ""}; flex-grow: ${a(E).aspect ?? ""}; flex-basis: ${a(E).aspect * 220}px`)), it("click", K, () => m(a(E))), S(x, M);
  });
  var B = y(et, 2);
  {
    var V = (x) => {
      var E = _n(), M = yt(E);
      wt(M, 16, () => Array(4), Wr, (K, b) => {
        var w = Ko();
        S(K, w);
      }), S(x, E);
    };
    j(B, (x) => {
      a(i) && x(V);
    });
  }
  var G = y(R, 2);
  {
    var J = (x) => {
      var E = Wo(), M = Y(E, !0);
      z(() => {
        E.disabled = a(i), D(M, a(i) ? "Loading…" : "Load more");
      }), it("click", E, f), S(x, E);
    };
    j(G, (x) => {
      !a(s) && !a(o) && a(n).length > 0 && x(J);
    });
  }
  z(() => D(T, e.site)), S(t, d), se();
}
hn(["click"]);
async function Xo() {
  try {
    const t = await fetch("/api/v1/vpn/status");
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function Qo(t, e) {
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
async function $o(t) {
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
var tl = /* @__PURE__ */ C('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), el = /* @__PURE__ */ C('<span class="tbx-dim">offline</span>'), nl = /* @__PURE__ */ C('<li><button type="button" role="option"> <!></button></li>'), rl = /* @__PURE__ */ C('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), il = /* @__PURE__ */ C('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), al = /* @__PURE__ */ C('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), sl = /* @__PURE__ */ C('<p class="tbx-vpn-note"> </p>'), ol = /* @__PURE__ */ C('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function ll(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ F(null), r = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(null);
  async function o() {
    g(n, await Xo(), !0);
  }
  dn(() => {
    o();
  });
  async function f(v) {
    var p;
    const d = v === "scraping" ? !a(n).route_scraping : !a(n).route_streaming;
    g(r, v, !0), g(s, null), await Qo(v, d) && (await o(), await ((p = e.onchange) == null ? void 0 : p.call(e))), g(r, null);
  }
  async function l(v) {
    var p;
    g(r, "exit"), g(i, !1);
    const d = await $o(v);
    d && (g(n, d, !0), g(s, d.detail ?? null, !0), await ((p = e.onchange) == null ? void 0 : p.call(e))), g(r, null);
  }
  var c = _n(), h = yt(c);
  {
    var m = (v) => {
      var d = ol(), p = yt(d), T = y(P(p), 2);
      wt(
        T,
        17,
        () => [
          ["scraping", "Scraping", a(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            a(n).route_streaming
          ]
        ],
        ([B, V, G]) => B,
        (B, V) => {
          var G = /* @__PURE__ */ St(() => Wn(a(V), 3));
          let J = () => a(G)[0], x = () => a(G)[1], E = () => a(G)[2];
          var M = tl();
          let K;
          var b = y(P(M), 2), w = Y(b, !0);
          z(() => {
            K = Je(M, 1, "tbx-toggle", null, K, { "tbx-toggle-on": E() }), gt(M, "aria-checked", E()), M.disabled = a(r) !== null, D(w, x());
          }), it("click", M, () => f(J())), S(B, M);
        }
      );
      var _ = y(T, 2);
      {
        var A = (B) => {
          var V = il(), G = P(V), J = P(G), x = y(G, 2);
          {
            var E = (M) => {
              var K = rl(), b = P(K), w = Y(b), tt = y(b, 2);
              wt(tt, 17, () => a(n).exit_nodes, (ot) => ot.id, (ot, ft) => {
                var at = nl(), ut = P(at), N = P(ut), L = y(N);
                {
                  var $ = (ct) => {
                    var Ct = el();
                    S(ct, Ct);
                  };
                  j(L, (ct) => {
                    a(ft).online || ct($);
                  });
                }
                z(() => {
                  gt(ut, "aria-selected", a(ft).active), ut.disabled = !a(ft).online, D(N, `${a(ft).name ?? ""}${a(ft).country ? ` · ${a(ft).country}` : ""} `);
                }), it("click", ut, () => l(a(ft).id)), S(ot, at);
              }), z(() => gt(w, "aria-selected", !a(n).exit_node)), it("click", w, () => l(null)), S(M, K);
            };
            j(x, (M) => {
              a(i) && M(E);
            });
          }
          z(() => {
            gt(G, "aria-expanded", a(i)), G.disabled = a(r) !== null, D(J, `${a(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), it("click", G, () => g(i, !a(i))), S(B, V);
        };
        j(_, (B) => {
          var V;
          (V = a(n).exit_nodes) != null && V.length && B(A);
        });
      }
      var O = y(_, 2);
      {
        var k = (B) => {
          var V = al();
          S(B, V);
        };
        j(O, (B) => {
          !a(n).connected && (a(n).route_scraping || a(n).route_streaming) && B(k);
        });
      }
      var R = y(p, 2);
      {
        var et = (B) => {
          var V = sl(), G = Y(V, !0);
          z(() => D(G, a(s))), S(B, V);
        };
        j(R, (B) => {
          a(s) && B(et);
        });
      }
      S(v, d);
    };
    j(h, (v) => {
      var d;
      (d = a(n)) != null && d.enabled && v(m);
    });
  }
  S(t, c), se();
}
hn(["click"]);
var fl = /* @__PURE__ */ C('<p class="ofx-error">That account could not be loaded.</p>'), ul = /* @__PURE__ */ C('<div class="ofx-banner"><img alt=""/></div>'), cl = /* @__PURE__ */ Ms('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), vl = /* @__PURE__ */ C('<p> </p> <button class="ofx-more" type="button"> </button>', 1), dl = /* @__PURE__ */ C("<span><b> </b> </span>"), hl = /* @__PURE__ */ C('<div class="ofx-stats"></div>'), _l = /* @__PURE__ */ C("<span> </span>"), bi = /* @__PURE__ */ C('<a target="_blank" rel="noreferrer noopener"> </a>'), pl = /* @__PURE__ */ C('<button type="button" role="tab"> </button>'), gl = /* @__PURE__ */ C('<span class="ofx-count"> </span>'), bl = /* @__PURE__ */ C('<button type="button"> <!></button>'), ml = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), xl = /* @__PURE__ */ C(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), yl = /* @__PURE__ */ C('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), wl = /* @__PURE__ */ C('<p class="ofx-note">Loading…</p>'), kl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), El = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Sl = /* @__PURE__ */ C('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Al = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Tl = /* @__PURE__ */ C("<!> <!> <!> <!>", 1);
function Cl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ F(null), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F("all");
  const s = /* @__PURE__ */ St(() => a(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([a(i)]));
  let o = /* @__PURE__ */ F(Kt(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(null), h = /* @__PURE__ */ F(null), m = /* @__PURE__ */ F(null);
  dn(() => {
    ro(e.handle).then((b) => {
      b ? g(n, b, !0) : g(r, !0);
    });
  });
  const v = /* @__PURE__ */ St(() => {
    var b, w, tt, ot;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (b = a(n)) == null ? void 0 : b.posts_count],
      ["photos", (w = a(n)) == null ? void 0 : w.photos_count],
      ["videos", (tt = a(n)) == null ? void 0 : tt.videos_count],
      ["likes", (ot = a(n)) == null ? void 0 : ot.likes_count]
    ].filter(([, ft]) => ft != null);
  });
  function d(b) {
    const w = new Set(a(o));
    w.has(b) ? w.delete(b) : w.add(b), g(o, w, !0);
  }
  function p(b) {
    var w, tt;
    if (!((w = e.host) != null && w.play)) {
      g(l, b, !0);
      return;
    }
    e.host.play({
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
      contextTitle: ((tt = a(n)) == null ? void 0 : tt.display_name) || e.handle,
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
  function A(b) {
    a(c) && g(
      c,
      {
        ...a(c),
        index: (a(c).index + b + a(c).count) % a(c).count
      },
      !0
    );
  }
  function O(b) {
    if (b.key === "Escape") {
      g(l, null), g(c, null), g(h, null);
      return;
    }
    a(c) && (b.key === "ArrowRight" && A(1), b.key === "ArrowLeft" && A(-1));
  }
  var k = Tl();
  Sr("keydown", wr, O);
  var R = yt(k);
  {
    var et = (b) => {
      var w = fl();
      S(b, w);
    }, B = (b) => {
      var w = yl(), tt = yt(w), ot = P(tt);
      {
        var ft = (I) => {
          var W = ul(), st = Y(W);
          z(() => gt(st, "src", a(n).header_url)), S(I, W);
        };
        j(ot, (I) => {
          a(n).header_url && I(ft);
        });
      }
      var at = y(ot, 2), ut = P(at);
      let N;
      var L = P(ut);
      Jr(L, {
        get src() {
          return a(n).avatar_url;
        },
        get alt() {
          return a(n).display_name;
        },
        get name() {
          return a(n).display_name;
        }
      });
      var $ = y(ut, 2), ct = P($), Ct = P(ct), Xt = y(Ct);
      {
        var Nt = (I) => {
          var W = cl();
          S(I, W);
        };
        j(Xt, (I) => {
          a(n).is_verified && I(Nt);
        });
      }
      var zt = y(ct, 2), Lt = P(zt), dt = y(Lt, 2), nt = y(zt, 2);
      {
        var ht = (I) => {
          var W = vl(), st = yt(W);
          let Rt;
          var ge = Y(st, !0), Vt = y(st, 2), Ae = Y(Vt, !0);
          z(() => {
            Rt = Je(st, 1, "ofx-bio", null, Rt, { "ofx-clamped": !a(f) }), D(ge, a(n).bio), D(Ae, a(f) ? "less" : "more");
          }), it("click", Vt, () => g(f, !a(f))), S(I, W);
        };
        j(nt, (I) => {
          a(n).bio && I(ht);
        });
      }
      var Qt = y(nt, 2);
      {
        var or = (I) => {
          var W = hl();
          wt(W, 21, () => a(v), ([st, Rt]) => st, (st, Rt) => {
            var ge = /* @__PURE__ */ St(() => Wn(a(Rt), 2));
            let Vt = () => a(ge)[0], Ae = () => a(ge)[1];
            var oe = dl(), pn = P(oe), lr = Y(pn, !0), Ca = y(pn);
            z(
              (Ra) => {
                D(lr, Ra), D(Ca, ` ${Vt() ?? ""}`);
              },
              [() => Ae().toLocaleString()]
            ), S(st, oe);
          }), S(I, W);
        };
        j(Qt, (I) => {
          a(v).length && I(or);
        });
      }
      var Xr = y(Qt, 2), Hn = P(Xr);
      {
        var ma = (I) => {
          var W = _l(), st = Y(W, !0);
          z(() => D(st, a(n).location)), S(I, W);
        };
        j(Hn, (I) => {
          a(n).location && I(ma);
        });
      }
      var Qr = y(Hn, 2);
      {
        var xa = (I) => {
          var W = bi(), st = Y(W, !0);
          z(
            (Rt) => {
              gt(W, "href", a(n).website), D(st, Rt);
            },
            [() => a(n).website.replace(/^https?:\/\//, "")]
          ), S(I, W);
        };
        j(Qr, (I) => {
          a(n).website && I(xa);
        });
      }
      var ya = y(Qr, 2);
      {
        var wa = (I) => {
          var W = bi(), st = Y(W);
          z(() => {
            gt(W, "href", a(n).of_url), D(st, `onlyfans.com/${a(n).of_username ?? ""}`);
          }), S(I, W);
        };
        j(ya, (I) => {
          a(n).of_url && I(wa);
        });
      }
      var ka = y(at, 2);
      wt(ka, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([I, W]) => I, (I, W) => {
        var st = /* @__PURE__ */ St(() => Wn(W, 2));
        let Rt = () => a(st)[0], ge = () => a(st)[1];
        var Vt = pl();
        let Ae;
        var oe = Y(Vt, !0);
        z(() => {
          Ae = Je(Vt, 1, "ofx-tab", null, Ae, { "ofx-on": a(i) === Rt() }), gt(Vt, "aria-selected", a(i) === Rt()), D(oe, ge());
        }), it("click", Vt, () => g(i, Rt(), !0)), S(I, Vt);
      });
      var $r = y(tt, 2);
      ll($r, {});
      var ti = y($r, 2), ei = y(P(ti), 2);
      wt(ei, 17, () => a(n).sources, (I) => I.site, (I, W) => {
        var st = bl();
        let Rt;
        var ge = P(st), Vt = y(ge);
        {
          var Ae = (oe) => {
            var pn = gl(), lr = Y(pn, !0);
            z(() => D(lr, (a(W).video_count ?? 0) + (a(W).image_count ?? 0))), S(oe, pn);
          };
          j(Vt, (oe) => {
            (a(W).video_count != null || a(W).image_count != null) && oe(Ae);
          });
        }
        z(
          (oe) => {
            Rt = Je(st, 1, "ofx-btn ofx-outline", null, Rt, { "ofx-on": oe }), D(ge, `${a(W).site ?? ""} `);
          },
          [() => a(o).has(a(W).site)]
        ), it("click", st, () => d(a(W).site)), S(I, st);
      });
      var Ea = y(ei, 2), ni = y(ti, 2);
      {
        var Sa = (I) => {
          var W = ml(), st = Y(W, !0);
          z(() => D(st, a(m))), S(I, W);
        };
        j(ni, (I) => {
          a(m) && I(Sa);
        });
      }
      var ri = y(ni, 2);
      {
        var Aa = (I) => {
          var W = xl();
          S(I, W);
        };
        j(ri, (I) => {
          a(o).size === 0 && I(Aa);
        });
      }
      var ii = y(ri, 2);
      wt(ii, 17, () => a(n).sources.filter((I) => a(o).has(I.site)), (I) => I.site, (I, W) => {
        Jo(I, {
          get handle() {
            return a(n).handle;
          },
          get site() {
            return a(W).site;
          },
          get kinds() {
            return a(s);
          },
          onplay: (st) => p(st),
          ongallery: _,
          onphoto: T
        });
      });
      var Ta = y(ii, 2);
      da(Ta, () => a(n).handle, (I) => {
        Nr(I, {
          get title() {
            return `More like ${a(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => io(a(n).handle),
          get navigate() {
            return e.navigate;
          }
        });
      }), z(() => {
        N = Je(ut, 1, "ofx-avatar", null, N, { "ofx-overlap": !!a(n).header_url }), D(Ct, `${a(n).display_name ?? ""} `), D(Lt, `@${(a(n).of_username || a(n).handle) ?? ""} `), D(dt, ` ${a(n).source_count ?? ""}
                    ${a(n).source_count === 1 ? "site" : "sites"}`);
      }), it("click", Ea, () => e.navigate("/x/onlyfans")), S(b, w);
    }, V = (b) => {
      var w = wl();
      S(b, w);
    };
    j(R, (b) => {
      a(r) ? b(et) : a(n) ? b(B, 1) : b(V, -1);
    });
  }
  var G = y(R, 2);
  {
    var J = (b) => {
      var w = kl(), tt = P(w), ot = y(tt, 2);
      z(() => gt(ot, "src", a(h).full)), it("click", tt, () => g(h, null)), S(b, w);
    };
    j(G, (b) => {
      a(h) && b(J);
    });
  }
  var x = y(G, 2);
  {
    var E = (b) => {
      var w = El(), tt = P(w), ot = y(tt, 2);
      z((ft) => gt(ot, "src", ft), [
        () => pi(a(l).site, a(l).video_id)
      ]), it("click", tt, () => g(l, null)), S(b, w);
    };
    j(x, (b) => {
      a(l) && b(E);
    });
  }
  var M = y(x, 2);
  {
    var K = (b) => {
      var w = Al(), tt = P(w), ot = y(tt, 2);
      {
        var ft = (ut) => {
          var N = Sl(), L = yt(N), $ = y(L, 2);
          it("click", L, () => A(-1)), it("click", $, () => A(1)), S(ut, N);
        };
        j(ot, (ut) => {
          a(c).count > 1 && ut(ft);
        });
      }
      var at = y(ot, 2);
      z(
        (ut) => {
          gt(at, "src", ut), gt(at, "alt", `${a(c).gallery.title ?? ""} ${a(c).index + 1} of ${a(c).count ?? ""}`);
        },
        [
          () => uo(a(c).gallery.site, a(c).gallery.gallery_id, a(c).index)
        ]
      ), it("click", tt, () => g(c, null)), S(b, w);
    };
    j(M, (b) => {
      a(c) && b(K);
    });
  }
  S(t, k), se();
}
hn(["click"]);
var Rl = /* @__PURE__ */ C('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Ml(t, e) {
  ae(e, !0);
  let n = we(e, "path", 3, "");
  pa(e.api);
  const r = /* @__PURE__ */ St(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Rl(), s = P(i), o = P(s);
  {
    var f = (c) => {
      var h = _n(), m = yt(h);
      da(m, () => a(r), (v) => {
        Cl(v, {
          get handle() {
            return a(r);
          },
          get navigate() {
            return e.navigate;
          },
          get host() {
            return e.host;
          }
        });
      }), S(c, h);
    }, l = (c) => {
      Uo(c, {
        get navigate() {
          return e.navigate;
        }
      });
    };
    j(o, (c) => {
      a(r) ? c(f) : c(l, -1);
    });
  }
  S(t, i), se();
}
var Il = /* @__PURE__ */ C('<p class="ofx-settings-error">Could not read the scraper list.</p>'), Ol = /* @__PURE__ */ C('<p class="ofx-settings-error"><strong> </strong> </p>'), Nl = /* @__PURE__ */ C("<tr><td> </td><td> </td><td><code> </code></td><td> </td></tr>"), Ll = /* @__PURE__ */ C(`<div class="ofx ofx-settings"><p class="ofx-settings-title"> </p> <p class="ofx-settings-note">Loaded from <code> </code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.</p> <!> <!> <table class="ofx-settings-table"><thead><tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th></tr></thead><tbody></tbody></table></div>`);
function Pl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ F(null), r = /* @__PURE__ */ F(!1);
  async function i() {
    const k = await _o();
    g(r, k === null), k && g(n, k, !0);
  }
  dn(() => {
    i();
  });
  const s = /* @__PURE__ */ St(() => {
    var k;
    return ((k = a(n)) == null ? void 0 : k.scrapers) ?? [];
  }), o = /* @__PURE__ */ St(() => {
    var k;
    return Object.entries(((k = a(n)) == null ? void 0 : k.errors) ?? {});
  }), f = (k) => k ? k.slice(0, 10) : "";
  var l = Ll(), c = P(l), h = Y(c), m = y(c, 2), v = y(P(m)), d = Y(v, !0), p = y(m, 2);
  {
    var T = (k) => {
      var R = Il();
      S(k, R);
    };
    j(p, (k) => {
      a(r) && k(T);
    });
  }
  var _ = y(p, 2);
  wt(_, 17, () => a(o), ([k, R]) => k, (k, R) => {
    var et = /* @__PURE__ */ St(() => Wn(a(R), 2));
    let B = () => a(et)[0], V = () => a(et)[1];
    var G = Ol(), J = P(G), x = Y(J, !0), E = y(J);
    z(() => {
      D(x, B()), D(E, `: ${V() ?? ""}`);
    }), S(k, G);
  });
  var A = y(_, 2), O = y(P(A));
  wt(O, 21, () => a(s), (k) => k.key, (k, R) => {
    var et = Nl(), B = P(et), V = Y(B), G = y(B), J = Y(G, !0), x = y(G), E = P(x), M = Y(E, !0), K = y(x), b = Y(K, !0);
    z(
      (w) => {
        D(V, `${a(R).name ?? ""}${a(R).indexes_accounts ? "" : " (no index)"}`), D(J, a(R).base_url), D(M, a(R).version), D(b, w);
      },
      [() => f(a(R).updated)]
    ), S(k, et);
  }), z(() => {
    var k;
    D(h, `Installed scrapers (${a(s).length ?? ""})`), D(d, ((k = a(n)) == null ? void 0 : k.plugin_dir) ?? "…");
  }), S(t, l), se();
}
function Ul({ target: t, path: e, api: n, navigate: r, host: i }) {
  const s = Kt({ path: e ?? "", api: n, navigate: r, host: i }), o = ca(Ml, { target: t, props: s });
  return {
    update(f) {
      s.path = f ?? "";
    },
    destroy() {
      va(o);
    }
  };
}
const jl = {
  settings({ target: t, api: e }) {
    pa(e);
    const n = ca(Pl, { target: t });
    return {
      update() {
      },
      destroy() {
        va(n);
      }
    };
  }
};
export {
  Ul as default,
  jl as slots
};

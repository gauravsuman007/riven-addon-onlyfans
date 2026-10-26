var Ia = Object.defineProperty;
var ai = (t) => {
  throw TypeError(t);
};
var Ma = (t, e, n) => e in t ? Ia(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ut = (t, e, n) => Ma(t, typeof e != "symbol" ? e + "" : e, n), fr = (t, e, n) => e.has(t) || ai("Cannot " + n);
var u = (t, e, n) => (fr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), G = (t, e, n) => e.has(t) ? ai("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), z = (t, e, n, r) => (fr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), $ = (t, e, n) => (fr(t, e, "access private method"), n);
const pt = Symbol("uninitialized"), Oa = "http://www.w3.org/1999/xhtml", wi = !1;
var ki = Array.isArray, Na = Array.prototype.indexOf, Wn = Array.prototype.includes, ar = Array.from, Ei = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyDescriptors, La = Object.prototype, Pa = Array.prototype, Pr = Object.getPrototypeOf, si = Object.isExtensible;
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
function Zn(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const mt = 2, fn = 4, sr = 8, Ti = 1 << 24, ne = 16, Xt = 32, Ee = 64, pr = 128, Dr = 256, Jt = 512, bt = 1024, _t = 2048, ie = 4096, It = 8192, Bt = 16384, dn = 32768, Jn = 1 << 25, ze = 65536, Xn = 1 << 17, Ua = 1 << 18, hn = 1 << 19, ja = 1 << 20, de = 1 << 25, Ve = 65536, Qn = 1 << 21, $e = 1 << 22, Ie = 1 << 23, tn = Symbol("$state"), Ci = Symbol("component"), Ha = Symbol(""), qn = Symbol("attributes"), gr = Symbol("class"), br = Symbol("style"), xn = Symbol("text"), Fn = new class extends Error {
  constructor() {
    super(...arguments);
    Ut(this, "name", "StaleReactionError");
    Ut(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
function Ii(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Mi(t) {
  return !Ii(t, this.v);
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
let ts = !1, Mt = null;
function un(t) {
  Mt = t;
}
function ae(t, e = !1, n) {
  Mt = {
    p: Mt,
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
    Mt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ji(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Mt = e.p, Fr(t);
}
function Fr(t = {}) {
  return Ei(t, Ci, { value: !0 }), t;
}
function Oi() {
  return !0;
}
let Je = [];
function es() {
  var t = Je;
  Je = [], Fa(t);
}
function ye(t) {
  if (Je.length === 0) {
    var e = Je;
    queueMicrotask(() => {
      e === Je && es();
    });
  }
  Je.push(t);
}
const ns = -7169;
function ht(t, e) {
  t.f = t.f & ns | e;
}
function Ur(t) {
  (t.f & Jt) !== 0 || t.deps === null ? ht(t, bt) : ht(t, ie);
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
  (t.f & _t) !== 0 ? e.add(t) : (t.f & ie) !== 0 && n.add(t), Ni(t.deps), ht(t, bt);
}
function Un(t) {
  var e = Z, n = tt;
  Qt(null), pe(null);
  try {
    return t();
  } finally {
    Qt(e), pe(n);
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
    tt
  ), l = is(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((d) => d.promise)) : null;
  function _(d) {
    if ((f.f & Bt) === 0) {
      l();
      try {
        r([...o, ...d]);
      } catch (g) {
        ve(g, f);
      }
      $n();
    }
  }
  var y = Pi();
  if (n.length === 0) {
    c.then(() => _([])).finally(y);
    return;
  }
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ as(d))).then(_).catch((d) => ve(d, f)).finally(y);
  }
  c ? c.then(() => {
    l(), v(), $n();
  }) : v();
}
function is() {
  var t = (
    /** @type {Effect} */
    tt
  ), e = Z, n = Mt, r = (
    /** @type {Batch} */
    V
  );
  return function(s = !0) {
    pe(t), Qt(e), un(n), s && (t.f & Bt) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function $n(t = !0) {
  pe(null), Qt(null), un(null), t && (V == null || V.deactivate());
}
function Pi() {
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
function jr(t) {
  var e = mt | _t;
  return tt !== null && (tt.f |= hn), {
    ctx: Mt,
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
    parent: tt,
    ac: null
  };
}
const yn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function as(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    tt
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
    var d, g;
    var l = (
      /** @type {Effect} */
      tt
    ), c = Ai();
    i = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (A) => {
        A !== Fn && c.reject(A);
      }).finally($n);
    } catch (A) {
      c.reject(A), $n();
    }
    var _ = (
      /** @type {Batch} */
      V
    );
    if (o) {
      if ((l.f & dn) !== 0)
        var y = Pi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (d = r.b) != null && d.is_rendered()
      )
        (g = _.async_deriveds.get(l)) == null || g.reject(yn);
      else
        for (const A of f.values())
          A.reject(yn);
      f.add(c), _.async_deriveds.set(l, c);
    }
    const v = (A, p = void 0) => {
      y == null || y(), f.delete(c), p !== yn && (_.activate(), p ? (s.f |= Ie, cn(s, p)) : ((s.f & Ie) !== 0 && (s.f ^= Ie), cn(s, A)), _.deactivate());
    };
    c.promise.then(v, (A) => v(null, A || "unknown"));
  }), Zi(() => {
    for (const l of f)
      l.reject(yn);
  }), new Promise((l) => {
    function c(_) {
      function y() {
        _ === i ? l(s) : c(i);
      }
      _.then(y, y);
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
  return e.equals = Mi, e;
}
function os(t) {
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
function Hr(t) {
  var e, n = tt, r = t.parent;
  if (!Me && r !== null && t.v !== pt && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Bt | It)) !== 0)
    return Va(), t.v;
  pe(r);
  try {
    t.f &= ~Ve, os(t), e = sa(t);
  } finally {
    pe(n);
  }
  return e;
}
function Di(t) {
  var e = Hr(t);
  if (!t.equals(e) && (t.wv = ia(), (!(V != null && V.is_fork) || t.deps === null) && (V !== null ? (V.capture(t, e, !0), Cn == null || Cn.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ht(t, bt);
    return;
  }
  Me || (wt !== null ? (Br() || V != null && V.is_fork) && wt.set(t, e) : Ur(t));
}
function ls(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Un(() => {
        n.ac.abort(Fn), n.ac = null;
      }), n.fn !== null && (n.teardown = Da), In(n, 0), Gr(n));
}
function Fi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && vn(e);
}
let ur = null, We = null, V = null, Cn = null, wt = null, mr = null, cr = !1, Xe = null, Gn = null;
var oi = 0;
let fs = 1;
var en, Ce, Le, nn, rn, an, be, sn, Lt, On, me, te, fe, on, Pe, ot, xr, wn, yr, Ui, ji, Ze, us, kn;
const nr = class nr {
  constructor() {
    G(this, ot);
    Ut(this, "id", fs++);
    /** True as soon as `#process` was called */
    G(this, en, !1);
    Ut(this, "linked", !0);
    /** @type {Batch | null} */
    G(this, Ce, null);
    /** @type {Batch | null} */
    G(this, Le, null);
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
    G(this, nn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, rn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    G(this, an, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    G(this, be, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    G(this, sn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    G(this, Lt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    G(this, On, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    G(this, me, /* @__PURE__ */ new Set());
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
    G(this, fe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    G(this, on, /* @__PURE__ */ new Set());
    Ut(this, "is_fork", !1);
    G(this, Pe, !1);
    We === null ? ur = We = this : (z(We, Le, this), z(this, Ce, We)), We = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    u(this, fe).has(e) || u(this, fe).set(e, { d: [], m: [] }), u(this, on).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = u(this, fe).get(e);
    if (r) {
      u(this, fe).delete(e);
      for (var i of r.d)
        ht(i, _t), n(i);
      for (i of r.m)
        ht(i, ie), n(i);
    }
    u(this, on).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== pt && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Ie) === 0 && (this.current.set(e, [n, r]), wt == null || wt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    V = this;
  }
  deactivate() {
    V = null, wt = null;
  }
  flush() {
    try {
      cr = !0, V = this, $(this, ot, wn).call(this);
    } finally {
      oi = 0, mr = null, Xe = null, Gn = null, cr = !1, V = null, wt = null, he.clear();
    }
  }
  discard() {
    var e;
    for (const n of u(this, rn)) n(this);
    u(this, rn).clear();
    for (const n of this.async_deriveds.values())
      n.reject(yn);
    $(this, ot, kn).call(this), (e = u(this, sn)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    u(this, On).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (z(this, an, u(this, an) + 1), e) {
      let r = u(this, be).get(n) ?? 0;
      u(this, be).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (z(this, an, u(this, an) - 1), e) {
      let r = u(this, be).get(n) ?? 0;
      r === 1 ? u(this, be).delete(n) : u(this, be).set(n, r - 1);
    }
    u(this, Pe) || (z(this, Pe, !0), ye(() => {
      z(this, Pe, !1), this.linked && this.flush();
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
    u(this, nn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, rn).add(e);
  }
  settled() {
    return (u(this, sn) ?? z(this, sn, Ai())).promise;
  }
  static ensure() {
    if (V === null) {
      const e = V = new nr();
      cr || ye(() => {
        u(e, en) || e.flush();
      });
    }
    return V;
  }
  apply() {
    {
      wt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var i;
    if (mr = e, (i = e.b) != null && i.is_pending && (e.f & (fn | sr | Ti)) !== 0 && (e.f & dn) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var n = e; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Xe !== null && n === tt && (Z === null || (Z.f & mt) === 0))
        return;
      if ((r & (Ee | Xt)) !== 0) {
        if ((r & bt) === 0)
          return;
        n.f ^= bt;
      }
    }
    u(this, Lt).push(n);
  }
};
en = new WeakMap(), Ce = new WeakMap(), Le = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), be = new WeakMap(), sn = new WeakMap(), Lt = new WeakMap(), On = new WeakMap(), me = new WeakMap(), te = new WeakMap(), fe = new WeakMap(), on = new WeakMap(), Pe = new WeakMap(), ot = new WeakSet(), xr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, be).keys()) {
    for (var e = r, n = !1; e.parent !== null; ) {
      if (u(this, fe).has(e)) {
        n = !0;
        break;
      }
      e = e.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, wn = function() {
  var l, c, _, y;
  z(this, en, !0), oi++ > 1e3 && ($(this, ot, kn).call(this), cs());
  for (const v of u(this, me))
    u(this, te).delete(v), ht(v, _t), this.schedule(v);
  for (const v of u(this, te))
    ht(v, ie), this.schedule(v);
  const e = u(this, Lt);
  z(this, Lt, []), this.apply();
  var n = Xe = [], r = [], i = Gn = [];
  for (const v of e)
    try {
      $(this, ot, yr).call(this, v, n, r);
    } catch (d) {
      throw Vi(v), $(this, ot, xr).call(this) || this.discard(), d;
    }
  if (V = null, i.length > 0) {
    var s = nr.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (Xe = null, Gn = null, $(this, ot, xr).call(this)) {
    $(this, ot, Ze).call(this, r), $(this, ot, Ze).call(this, n);
    for (const [v, d] of u(this, fe))
      zi(v, d);
    i.length > 0 && /** @type {unknown} */
    $(l = V, ot, wn).call(l);
    return;
  }
  const o = $(this, ot, Ui).call(this);
  if (o) {
    $(this, ot, Ze).call(this, r), $(this, ot, Ze).call(this, n), $(c = o, ot, ji).call(c, this);
    return;
  }
  u(this, me).clear(), u(this, te).clear();
  for (const v of u(this, nn)) v(this);
  u(this, nn).clear(), Cn = this, li(r), li(n), Cn = null, (_ = u(this, sn)) == null || _.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    V
  );
  if (u(this, an) === 0 && (u(this, Lt).length === 0 || f !== null) && $(this, ot, kn).call(this), u(this, Lt).length > 0)
    if (f !== null) {
      const v = f;
      u(v, Lt).push(...u(this, Lt).filter((d) => !u(v, Lt).includes(d)));
    } else
      f = this;
  f !== null && (he.clear(), $(y = f, ot, wn).call(y));
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
    var s = i.f, o = (s & (Xt | Ee)) !== 0, f = o && (s & bt) !== 0, l = f || (s & It) !== 0 || u(this, fe).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= bt : (s & fn) !== 0 ? n.push(i) : zn(i) && ((s & ne) !== 0 && u(this, te).add(i), vn(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var _ = i.next;
      if (_ !== null) {
        i = _;
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
          o & ($e | ne) && !this.async_deriveds.has(f) && (u(this, te).delete(f), ht(f, _t), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), $(r = e, ot, kn).call(r), V = this, $(this, ot, wn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ze = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Li(e[n], u(this, me), u(this, te));
}, us = function() {
  var y;
  for (let v = ur; v !== null; v = u(v, Le)) {
    var e = v.id < this.id, n = [];
    for (const [d, [g, A]] of this.current) {
      if (v.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (e && g !== r)
          v.current.set(d, [g, A]);
        else
          continue;
      }
      n.push(d);
    }
    if (e)
      for (const [d, g] of this.async_deriveds) {
        const A = v.async_deriveds.get(d);
        A && g.promise.then(A.resolve).catch(A.reject);
      }
    var i = [...v.current.keys()].filter(
      (d) => !/** @type {[any, boolean]} */
      v.current.get(d)[1]
    );
    if (!(!u(v, en) || i.length === 0)) {
      var s = i.filter((d) => !this.current.has(d));
      if (s.length === 0)
        e && v.discard();
      else if (n.length > 0) {
        if (e)
          for (const d of u(this, on))
            v.unskip_effect(d, (g) => {
              var A;
              (g.f & (ne | $e)) !== 0 ? v.schedule(g) : $(A = v, ot, Ze).call(A, [g]);
            });
        v.activate();
        var o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          Hi(l, s, o, f);
        f = /* @__PURE__ */ new Map();
        var c = [...v.current].filter(([d, g]) => {
          const A = this.current.get(d);
          return A ? A[0] !== g[0] || A[1] !== g[1] : !0;
        }).map(([d]) => d);
        if (c.length > 0)
          for (const d of u(this, On))
            (d.f & (Bt | It | Xn)) === 0 && zr(d, c, f) && ((d.f & ($e | ne)) !== 0 ? (ht(d, _t), v.schedule(d)) : u(v, me).add(d));
        if (u(v, Lt).length > 0 && !u(v, Pe)) {
          v.apply();
          for (var _ of u(v, Lt))
            $(y = v, ot, yr).call(y, _, [], []);
          z(v, Lt, []);
        }
        v.deactivate();
      }
    }
  }
}, kn = function() {
  if (this.linked) {
    var e = u(this, Ce), n = u(this, Le);
    e === null ? ur = n : z(e, Le, n), n === null ? We = e : z(n, Ce, e), this.linked = !1;
  }
};
let Be = nr;
function cs() {
  try {
    Za();
  } catch (t) {
    ve(t, mr);
  }
}
let $t = null;
function li(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Bt | It)) === 0 && zn(r) && ($t = /* @__PURE__ */ new Set(), vn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $i(r), ($t == null ? void 0 : $t.size) > 0)) {
        he.clear();
        for (const i of $t) {
          if ((i.f & (Bt | It)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            $t.has(o) && ($t.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (Bt | It)) === 0 && vn(l);
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
      ) : (s & ($e | ne)) !== 0 && (s & _t) === 0 && zr(i, e, r) && (ht(i, _t), Vr(
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
      if (Wn.call(e, i))
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
  V.schedule(t);
}
function zi(t, e) {
  if (!((t.f & Xt) !== 0 && (t.f & bt) !== 0)) {
    (t.f & _t) !== 0 ? e.d.push(t) : (t.f & ie) !== 0 && e.m.push(t), ht(t, bt);
    for (var n = t.first; n !== null; )
      zi(n, e), n = n.next;
  }
}
function Vi(t) {
  ht(t, bt);
  for (var e = t.first; e !== null; )
    Vi(e), e = e.next;
}
let tr = /* @__PURE__ */ new Set();
const he = /* @__PURE__ */ new Map();
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
function U(t, e) {
  const n = qe(t);
  return na(n), n;
}
// @__NO_SIDE_EFFECTS__
function vs(t, e = !1, n = !0) {
  const r = qe(t);
  return e || (r.equals = Mi), r;
}
function b(t, e, n = !1) {
  Z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!re || (Z.f & Xn) !== 0) && Oi() && (Z.f & (mt | ne | $e | Xn)) !== 0 && (_e === null || !_e.has(t)) && Qa();
  let r = n ? Zt(e) : e;
  return cn(t, r, Gn);
}
function cn(t, e, n = null) {
  if (!t.equals(e)) {
    Me ? he.set(t, e) : he.has(t) || he.set(t, t.v);
    var r = Be.ensure();
    if (r.capture(t, e), (t.f & mt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & _t) !== 0 && Hr(i), wt === null && Ur(i);
    }
    t.wv = ia(), qi(t, _t, n), tt !== null && (tt.f & bt) !== 0 && (tt.f & (Xt | Ee)) === 0 && (Gt === null ? Es([t]) : Gt.push(t)), !r.is_fork && tr.size > 0 && !Bi && ds();
  }
  return e;
}
function ds() {
  Bi = !1;
  for (const t of tr) {
    (t.f & bt) !== 0 && ht(t, ie);
    let e;
    try {
      e = zn(t);
    } catch {
      e = !0;
    }
    e && vn(t);
  }
  tr.clear();
}
function Rn(t) {
  b(t, t.v + 1);
}
function qi(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], f = o.f, l = (f & _t) === 0;
      if (l && ht(o, e), (f & Xn) !== 0)
        tr.add(
          /** @type {Effect} */
          o
        );
      else if ((f & mt) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        wt == null || wt.delete(c), (f & Ve) === 0 && (f & Jt && (tt === null || (tt.f & Qn) === 0) && (o.f |= Ve), qi(c, ie, n));
      } else if (l) {
        var _ = (
          /** @type {Effect} */
          o
        );
        (f & ne) !== 0 && $t !== null && $t.add(_), n !== null ? n.push(_) : Vr(_);
      }
    }
}
function Zt(t) {
  if (typeof t != "object" || t === null || tn in t || Ci in t)
    return t;
  const e = Pr(t);
  if (e !== La && e !== Pa)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ki(t), i = /* @__PURE__ */ U(0), s = He, o = (f) => {
    if (He === s)
      return f();
    var l = Z, c = He;
    Qt(null), ui(s);
    var _ = f();
    return Qt(l), ui(c), _;
  };
  return r && n.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ja();
        var _ = n.get(l);
        return _ === void 0 ? o(() => {
          var y = /* @__PURE__ */ U(c.value);
          return n.set(l, y), y;
        }) : b(_, c.value, !0), !0;
      },
      deleteProperty(f, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in f) {
            const _ = o(() => /* @__PURE__ */ U(pt));
            n.set(l, _), Rn(i);
          }
        } else
          b(c, pt), Rn(i);
        return !0;
      },
      get(f, l, c) {
        var d;
        if (l === tn)
          return t;
        var _ = n.get(l), y = l in f;
        if (_ === void 0 && (!y || (d = Tn(f, l)) != null && d.writable) && (_ = o(() => {
          var g = Zt(y ? f[l] : pt), A = /* @__PURE__ */ U(g);
          return A;
        }), n.set(l, _)), _ !== void 0) {
          var v = a(_);
          return v === pt ? void 0 : v;
        }
        return Reflect.get(f, l, c);
      },
      getOwnPropertyDescriptor(f, l) {
        var c = Reflect.getOwnPropertyDescriptor(f, l);
        if (c && "value" in c) {
          var _ = n.get(l);
          _ && (c.value = a(_));
        } else if (c === void 0) {
          var y = n.get(l), v = y == null ? void 0 : y.v;
          if (y !== void 0 && v !== pt)
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
        if (l === tn)
          return !0;
        var c = n.get(l), _ = c !== void 0 && c.v !== pt || Reflect.has(f, l);
        if (c !== void 0 || tt !== null && (!_ || (v = Tn(f, l)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var d = _ ? Zt(f[l]) : pt, g = /* @__PURE__ */ U(d);
            return g;
          }), n.set(l, c));
          var y = a(c);
          if (y === pt)
            return !1;
        }
        return _;
      },
      set(f, l, c, _) {
        var I;
        var y = n.get(l), v = l in f;
        if (r && l === "length")
          for (var d = c; d < /** @type {Source<number>} */
          y.v; d += 1) {
            var g = n.get(d + "");
            g !== void 0 ? b(g, pt) : d in f && (g = o(() => /* @__PURE__ */ U(pt)), n.set(d + "", g));
          }
        if (y === void 0)
          (!v || (I = Tn(f, l)) != null && I.writable) && (y = o(() => /* @__PURE__ */ U(void 0)), b(y, Zt(c)), n.set(l, y));
        else {
          v = y.v !== pt;
          var A = o(() => Zt(c));
          b(y, A);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, l);
        if (p != null && p.set && p.set.call(_, c), !v) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= E.v && b(E, P + 1);
          }
          Rn(i);
        }
        return !0;
      },
      ownKeys(f) {
        a(i);
        var l = Reflect.ownKeys(f).filter((y) => {
          var v = n.get(y);
          return v === void 0 || v.v !== pt;
        });
        for (var [c, _] of n)
          _.v !== pt && !(c in f) && l.push(c);
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
    Yi = Tn(e, "firstChild").get, Ki = Tn(e, "nextSibling").get, si(t) && (t[gr] = void 0, t[qn] = null, t[br] = void 0, t.__e = void 0), si(n) && (n[xn] = void 0);
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
function jn(t) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(t)
  );
}
function N(t, e) {
  return /* @__PURE__ */ Ge(t);
}
function Et(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ge(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ jn(n) : n;
  }
}
function B(t, e = !1) {
  return /* @__PURE__ */ Ge(t);
}
function m(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ jn(r);
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
  var e = tt;
  if (e === null)
    return Z.f |= Ie, t;
  if ((e.f & dn) === 0 && (e.f & fn) === 0)
    throw t;
  ve(t, e);
}
function ve(t, e) {
  if (!(e !== null && (e.f & Bt) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & pr) !== 0 && (e.f & (Bt | Jn)) === 0) {
        if ((e.f & dn) === 0)
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
  tt === null && (Z === null && Wa(), Ka()), Me && Ya();
}
function ms(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Se(t, e) {
  var n = tt;
  n !== null && (n.f & It) !== 0 && (t |= It);
  var r = {
    ctx: Mt,
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
  if ((t & fn) !== 0)
    Xe !== null ? Xe.push(r) : Be.ensure().schedule(r);
  else if (e !== null) {
    try {
      vn(r);
    } catch (o) {
      throw Dt(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & hn) === 0 && (i = i.first, (t & ne) !== 0 && (t & ze) !== 0 && i !== null && (i.f |= ze));
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
  const e = Se(sr, null);
  return ht(e, bt), e.teardown = t, e;
}
function _n(t) {
  bs();
  var e = (
    /** @type {Effect} */
    tt.f
  ), n = !Z && (e & Xt) !== 0 && Mt !== null && !Mt.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Mt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ji(t);
}
function Ji(t) {
  return Se(fn | ja, t);
}
function xs(t) {
  Be.ensure();
  const e = Se(Ee | hn, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? je(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function Xi(t) {
  return Se(fn, t);
}
function ys(t) {
  return Se($e | hn, t);
}
function qr(t, e = 0) {
  return Se(sr | e, t);
}
function H(t, e = [], n = [], r = []) {
  rs(r, e, n, (i) => {
    Se(sr, () => {
      t(...i.map(a));
    });
  });
}
function Hn(t, e = 0) {
  var n = Se(ne | e, t);
  return n;
}
function Wt(t) {
  return Se(Xt | hn, t);
}
function Qi(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Me, r = Z;
    fi(!0), Qt(null);
    try {
      e.call(null);
    } catch (i) {
      ve(i, t.parent);
    } finally {
      fi(n), Qt(r);
    }
  }
}
function Gr(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Un(() => {
      i.abort(Fn);
    });
    var r = n.next;
    (n.f & Ee) !== 0 ? n.parent = null : Dt(n, e), n = r;
  }
}
function ws(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Xt) === 0 && Dt(e), e = n;
  }
}
function Dt(t, e = !0) {
  var n = !1;
  (e || (t.f & Ua) !== 0) && t.nodes !== null && t.nodes.end !== null && (ks(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= Jn, Gr(t, e && !n), In(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Qi(t), t.f ^= Jn, t.f |= Bt;
  var i = t.parent;
  i !== null && i.first !== null && $i(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function ks(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ jn(t);
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
    n && Dt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function ta(t, e, n) {
  if ((t.f & It) === 0) {
    t.f ^= It;
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
        (i.f & Xt) !== 0 && (t.f & ne) !== 0;
        ta(i, e, o ? n : !1);
      }
      i = s;
    }
  }
}
function er(t) {
  t.f &= ~Dr, ea(t, !0);
}
function ea(t, e) {
  if ((t.f & Dr) === 0 && (t.f & It) !== 0) {
    t.f ^= It, (t.f & bt) === 0 && (ht(t, _t), Be.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ze) !== 0 || (n.f & Xt) !== 0;
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
      var i = n === r ? null : /* @__PURE__ */ jn(n);
      e.append(n), n = i;
    }
}
let Yn = !1, Me = !1;
function fi(t) {
  Me = t;
}
let Z = null, re = !1;
function Qt(t) {
  Z = t;
}
let tt = null;
function pe(t) {
  tt = t;
}
let _e = null;
function na(t) {
  Z !== null && (_e ?? (_e = /* @__PURE__ */ new Set())).add(t);
}
let Pt = null, Vt = 0, Gt = null;
function Es(t) {
  Gt = t;
}
let ra = 1, Oe = 0, He = Oe;
function ui(t) {
  He = t;
}
function ia() {
  return ++ra;
}
function zn(t) {
  var e = t.f;
  if ((e & _t) !== 0)
    return !0;
  if (e & mt && (t.f &= ~Ve), (e & ie) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (zn(
        /** @type {Derived} */
        s
      ) && Di(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & Jt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    wt === null && ht(t, bt);
  }
  return !1;
}
function aa(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(_e !== null && _e.has(t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & mt) !== 0 ? aa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? ht(s, _t) : (s.f & bt) !== 0 && ht(s, ie), Vr(
        /** @type {Effect} */
        s
      ));
    }
}
function sa(t) {
  var e = Pt, n = Vt, r = Gt, i = Z, s = _e, o = Mt, f = re, l = He, c = t.f;
  Pt = /** @type {null | Value[]} */
  null, Vt = 0, Gt = null, Z = (c & (Xt | Ee)) === 0 ? t : null, _e = null, un(t.ctx), re = !1, He = ++Oe, t.ac !== null && (Un(() => {
    t.ac.abort(Fn);
  }), t.ac = null);
  try {
    t.f |= Qn;
    var _ = (
      /** @type {Function} */
      t.fn
    ), y = _();
    t.f |= dn;
    var v = ci(t);
    if (Oi() && Gt !== null && !re && v !== null && (t.f & (mt | ie | _t)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      Gt.length; d++)
        aa(
          Gt[d],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (Oe++, i.deps !== null)
        for (let g = 0; g < n; g += 1)
          i.deps[g].rv = Oe;
      if (e !== null)
        for (const g of e)
          g.rv = Oe;
      Gt !== null && (r === null ? r = Gt : r.push(.../** @type {Source[]} */
      Gt));
    }
    return (t.f & Ie) !== 0 && (t.f ^= Ie), y;
  } catch (g) {
    return ci(t), gs(g);
  } finally {
    t.f ^= Qn, Pt = e, Vt = n, Gt = r, Z = i, _e = s, un(o), re = f, He = l;
  }
}
function ci(t) {
  var i;
  var e = t.deps, n = V == null ? void 0 : V.is_fork;
  if (Pt !== null) {
    var r;
    if (n || In(t, Vt), e !== null && Vt > 0)
      for (e.length = Vt + Pt.length, r = 0; r < Pt.length; r++)
        e[Vt + r] = Pt[r];
    else
      t.deps = e = Pt;
    if (Br() && (t.f & Jt) !== 0)
      for (r = Vt; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && Vt < e.length && (In(t, Vt), e.length = Vt);
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
  (Pt === null || !Wn.call(Pt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Jt) !== 0 && (s.f ^= Jt, s.f &= ~Ve), s.v !== pt && Ur(s), s.ac !== null && Un(() => {
      s.ac.abort(Fn), s.ac = null, ht(s, _t);
    }), ls(s), In(s, 0);
  }
}
function In(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ss(t, n[r]);
}
function vn(t) {
  var e = t.f;
  if ((e & Bt) === 0) {
    ht(t, bt);
    var n = tt, r = Yn;
    tt = t, Yn = (e & (Xt | Ee)) === 0;
    try {
      (e & (ne | Ti)) !== 0 ? ws(t) : Gr(t), Qi(t);
      var i = sa(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ra;
      var s;
      wi && ts && (t.f & _t) !== 0 && t.deps;
    } finally {
      Yn = r, tt = n;
    }
  }
}
function a(t) {
  var e = t.f, n = (e & mt) !== 0;
  if (Z !== null && !re) {
    var r = tt !== null && (tt.f & Bt) !== 0;
    if (!r && (_e === null || !_e.has(t))) {
      var i = Z.deps;
      if ((Z.f & Qn) !== 0)
        t.rv < Oe && (t.rv = Oe, Pt === null && i !== null && i[Vt] === t ? Vt++ : Pt === null ? Pt = [t] : Pt.push(t));
      else {
        Z.deps ?? (Z.deps = []), Wn.call(Z.deps, t) || Z.deps.push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Z] : Wn.call(s, Z) || s.push(Z);
      }
    }
  }
  if (Me && he.has(t))
    return he.get(t);
  if (n) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (Me) {
      var f = o.v;
      return ((o.f & bt) === 0 && o.reactions !== null || la(o)) && (f = Hr(o)), he.set(o, f), f;
    }
    var l = (o.f & Jt) === 0 && !re && Z !== null && (Yn || (Z.f & Jt) !== 0), c = (o.f & dn) === 0;
    zn(o) && (l && (o.f |= Jt), Di(o)), l && !c && (Fi(o), oa(o));
  }
  if (wt != null && wt.has(t))
    return wt.get(t);
  if ((t.f & Ie) !== 0)
    throw t.v;
  return t.v;
}
function oa(t) {
  if (t.f |= Jt, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & mt) !== 0 && (e.f & Jt) === 0 && (Fi(
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
    if (he.has(e) || (e.f & mt) !== 0 && la(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function or(t) {
  var e = re;
  try {
    return re = !0, t();
  } finally {
    re = e;
  }
}
function As(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (tn in t)
      kr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && tn in n && kr(n);
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
      return Un(() => n == null ? void 0 : n.call(this, s));
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
function Ye(t) {
  for (var e = 0; e < t.length; e++)
    fa.add(t[e]);
  for (var n of Er)
    n(t);
}
let vr = null, dr = !1;
function Ar(t) {
  var A, p;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], s = (
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
    var _ = Z, y = tt;
    Qt(null), pe(null);
    try {
      for (var v, d = []; s !== null && s !== e; ) {
        try {
          var g = (p = s[Ne]) == null ? void 0 : p[r];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && g.call(s, t);
        } catch (E) {
          v ? d.push(E) : v = E;
        }
        if (t.cancelBubble) break;
        o++, s = o < i.length ? (
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
      t[Ne] = e, delete t.currentTarget, Qt(_), pe(y);
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
function Mn(t, e) {
  var n = (
    /** @type {Effect} */
    tt
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
      Mn(f, l);
    } else
      Mn(o, o);
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
    return Mn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Is(t, e) {
  return /* @__PURE__ */ Rs(t, e, "svg");
}
function En(t = "") {
  {
    var e = ke(t + "");
    return Mn(e, e), e;
  }
}
function pn() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ke();
  return t.append(e, n), Mn(e, n), t;
}
function k(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Ms = ["touchstart", "touchmove"];
function Os(t) {
  return Ms.includes(t);
}
function Ns(t) {
  let e = 0, n = qe(0), r;
  return () => {
    Br() && (a(n), qr(() => (e === 0 && (r = or(() => t(() => Rn(n)))), e += 1, () => {
      ye(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Rn(n));
      });
    })));
  };
}
var Ls = ze | hn;
function Ps(t, e, n, r) {
  new Ds(t, e, n, r);
}
var Yt, Lr, Kt, De, Ct, jt, Rt, Ht, ue, Fe, Re, ln, Nn, Ln, xe, rr, ct, Fs, Us, Tr, js, Cr, Sn, Kn, Rr, Ir;
class Ds {
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
    G(this, Lr, null);
    /** @type {BoundaryProps} */
    G(this, Kt);
    /** @type {((anchor: Node) => void)} */
    G(this, De);
    /** @type {Effect} */
    G(this, Ct);
    /** @type {Effect | null} */
    G(this, jt, null);
    /** @type {Effect | null} */
    G(this, Rt, null);
    /** @type {Effect | null} */
    G(this, Ht, null);
    /** @type {DocumentFragment | null} */
    G(this, ue, null);
    G(this, Fe, 0);
    G(this, Re, 0);
    G(this, ln, !1);
    /** @type {Set<Effect>} */
    G(this, Nn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    G(this, Ln, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    G(this, xe, null);
    G(this, rr, Ns(() => (z(this, xe, qe(u(this, Fe))), () => {
      z(this, xe, null);
    })));
    var s;
    z(this, Yt, e), z(this, Kt, n), z(this, De, (o) => {
      var f = (
        /** @type {Effect} */
        tt
      );
      f.b = this, f.f |= pr, r(o);
    }), this.parent = /** @type {Effect} */
    tt.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((o) => o), z(this, Ct, Hn(() => {
      $(this, ct, Cr).call(this);
    }, Ls));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Li(e, u(this, Nn), u(this, Ln));
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
    $(this, ct, Rr).call(this, e, n), z(this, Fe, u(this, Fe) + e), !(!u(this, xe) || u(this, ln)) && (z(this, ln, !0), ye(() => {
      z(this, ln, !1), u(this, xe) && cn(u(this, xe), u(this, Fe));
    }));
  }
  get_effect_pending() {
    return u(this, rr).call(this), a(
      /** @type {Source<number>} */
      u(this, xe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!u(this, Kt).onerror && !u(this, Kt).failed)
      throw e;
    V != null && V.is_fork ? (u(this, jt) && V.skip_effect(u(this, jt)), u(this, Rt) && V.skip_effect(u(this, Rt)), u(this, Ht) && V.skip_effect(u(this, Ht)), V.oncommit(() => {
      $(this, ct, Ir).call(this, e);
    })) : $(this, ct, Ir).call(this, e);
  }
}
Yt = new WeakMap(), Lr = new WeakMap(), Kt = new WeakMap(), De = new WeakMap(), Ct = new WeakMap(), jt = new WeakMap(), Rt = new WeakMap(), Ht = new WeakMap(), ue = new WeakMap(), Fe = new WeakMap(), Re = new WeakMap(), ln = new WeakMap(), Nn = new WeakMap(), Ln = new WeakMap(), xe = new WeakMap(), rr = new WeakMap(), ct = new WeakSet(), Fs = function() {
  try {
    z(this, jt, Wt(() => u(this, De).call(this, u(this, Yt))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Us = function(e) {
  const n = u(this, Kt).failed, { reset: r, invoke_onerror: i } = $(this, ct, Tr).call(this, e);
  ye(i), n && z(this, Ht, Wt(() => {
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
Tr = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ba();
      return;
    }
    n = !0, r && $a(), u(this, Ht) !== null && je(u(this, Ht), () => {
      z(this, Ht, null);
    }), $(this, ct, Kn).call(this, () => {
      $(this, ct, Cr).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var o, f;
    try {
      r = !0, (f = (o = u(this, Kt)).onerror) == null || f.call(o, e, i), r = !1;
    } catch (l) {
      ve(l, u(this, Ct) && u(this, Ct).parent);
    }
  } };
}, js = function() {
  const e = u(this, Kt).pending;
  e && (this.is_pending = !0, z(this, Rt, Wt(() => e(u(this, Yt)))), ye(() => {
    var n = z(this, ue, document.createDocumentFragment()), r = ke(), i = !1;
    if (n.append(r), z(this, jt, $(this, ct, Kn).call(this, () => {
      try {
        return Wt(() => u(this, De).call(this, r));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (o) {
          ve(o, u(this, Ct).parent);
        }
        return null;
      }
    })), u(this, jt) === null) {
      z(this, ue, null), i && $(this, ct, Sn).call(
        this,
        /** @type {Batch} */
        V
      );
      return;
    }
    u(this, Re) === 0 && (u(this, Yt).before(n), z(this, ue, null), je(
      /** @type {Effect} */
      u(this, Rt),
      () => {
        z(this, Rt, null);
      }
    ), $(this, ct, Sn).call(
      this,
      /** @type {Batch} */
      V
    ));
  }));
}, Cr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), z(this, Re, 0), z(this, Fe, 0), z(this, jt, Wt(() => {
      u(this, De).call(this, u(this, Yt));
    })), u(this, Re) > 0) {
      var e = z(this, ue, document.createDocumentFragment());
      Yr(u(this, jt), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, Kt).pending
      );
      z(this, Rt, Wt(() => n(u(this, Yt))));
    } else
      $(this, ct, Sn).call(
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
Sn = function(e) {
  this.is_pending = !1, e.transfer_effects(u(this, Nn), u(this, Ln));
}, /**
 * @template T
 * @param {() => T} fn
 */
Kn = function(e) {
  var n = tt, r = Z, i = Mt;
  pe(u(this, Ct)), Qt(u(this, Ct)), un(u(this, Ct).ctx);
  try {
    return Be.ensure(), e();
  } finally {
    pe(n), Qt(r), un(i);
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
    this.parent && $(r = this.parent, ct, Rr).call(r, e, n);
    return;
  }
  z(this, Re, u(this, Re) + e), u(this, Re) === 0 && ($(this, ct, Sn).call(this, n), u(this, Rt) && je(u(this, Rt), () => {
    z(this, Rt, null);
  }), u(this, ue) && (u(this, Yt).before(u(this, ue)), z(this, ue, null)));
}, /**
 * @param {unknown} error
 */
Ir = function(e) {
  u(this, jt) && (Dt(u(this, jt)), z(this, jt, null)), u(this, Rt) && (Dt(u(this, Rt)), z(this, Rt, null)), u(this, Ht) && (Dt(u(this, Ht)), z(this, Ht, null));
  let n = u(this, Kt).failed;
  const r = (i) => {
    const { reset: s, invoke_onerror: o } = $(this, ct, Tr).call(this, i);
    o(), n && z(this, Ht, $(this, ct, Kn).call(this, () => {
      try {
        return Wt(() => {
          var f = (
            /** @type {Effect} */
            tt
          );
          f.b = this, f.f |= pr, n(
            u(this, Yt),
            () => i,
            () => s
          );
        });
      } catch (f) {
        return ve(
          f,
          /** @type {Effect} */
          u(this, Ct).parent
        ), null;
      }
    }));
  };
  ye(() => {
    var i;
    try {
      i = this.transform_error(e);
    } catch (s) {
      ve(s, u(this, Ct) && u(this, Ct).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (s) => ve(s, u(this, Ct) && u(this, Ct).parent)
    ) : r(i);
  });
};
function F(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[xn] ?? (t[xn] = t.nodeValue)) && (t[xn] = n, t.nodeValue = `${n}`);
}
function ca(t, e) {
  return Hs(t, e);
}
const Bn = /* @__PURE__ */ new Map();
function Hs(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  hs();
  var l = void 0, c = xs(() => {
    var _ = n ?? e.appendChild(ke());
    Ps(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (d) => {
        ae({});
        var g = (
          /** @type {ComponentContext} */
          Mt
        );
        s && (g.c = s), i && (r.$$events = i), l = t(d, r) || Fr(), se();
      },
      f
    );
    var y = /* @__PURE__ */ new Set(), v = (d) => {
      for (var g = 0; g < d.length; g++) {
        var A = d[g];
        if (!y.has(A)) {
          y.add(A);
          var p = Os(A);
          for (const I of [e, document]) {
            var E = Bn.get(I);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Bn.set(I, E));
            var P = E.get(A);
            P === void 0 ? (I.addEventListener(A, Ar, { passive: p }), E.set(A, 1)) : E.set(A, P + 1);
          }
        }
      }
    };
    return v(ar(fa)), Er.add(v), () => {
      var p;
      for (var d of y)
        for (const E of [e, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Bn.get(E)
          ), A = (
            /** @type {number} */
            g.get(d)
          );
          --A == 0 ? (E.removeEventListener(d, Ar), g.delete(d), g.size === 0 && Bn.delete(E)) : g.set(d, A);
        }
      Er.delete(v), _ !== n && ((p = _.parentNode) == null || p.removeChild(_));
    };
  });
  return Mr.set(l, c), l;
}
let Mr = /* @__PURE__ */ new WeakMap();
function va(t, e) {
  const n = Mr.get(t);
  return n ? (Mr.delete(t), n(e)) : Promise.resolve();
}
var ee, ce, zt, Ue, Pn, Dn, ir;
class Kr {
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
    G(this, ce, /* @__PURE__ */ new Map());
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
    G(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    G(this, Pn, !0);
    /**
     * @param {Batch} batch
     */
    G(this, Dn, (e) => {
      if (u(this, ee).has(e)) {
        var n = (
          /** @type {Key} */
          u(this, ee).get(e)
        ), r = u(this, ce).get(n);
        if (r)
          er(r), u(this, Ue).delete(n);
        else {
          var i = u(this, zt).get(n);
          i && (er(i.effect), u(this, ce).set(n, i.effect), u(this, zt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of u(this, ee)) {
          if (u(this, ee).delete(s), s === e)
            break;
          const f = u(this, zt).get(o);
          f && (Dt(f.effect), u(this, zt).delete(o));
        }
        for (const [s, o] of u(this, ce)) {
          if (s === n || u(this, Ue).has(s)) continue;
          const f = () => {
            if (Array.from(u(this, ee).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Yr(o, c), c.append(ke()), u(this, zt).set(s, { effect: o, fragment: c });
            } else
              Dt(o);
            u(this, Ue).delete(s), u(this, ce).delete(s);
          };
          u(this, Pn) || !r ? (u(this, Ue).add(s), je(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    G(this, ir, (e) => {
      u(this, ee).delete(e);
      const n = Array.from(u(this, ee).values());
      for (const [r, i] of u(this, zt))
        n.includes(r) || (Dt(i.effect), u(this, zt).delete(r));
    });
    this.anchor = e, z(this, Pn, n);
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
    ), i = Wi();
    if (n && !u(this, ce).has(e) && !u(this, zt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = ke();
        s.append(o), u(this, zt).set(e, {
          effect: Wt(() => n(o)),
          fragment: s
        });
      } else
        u(this, ce).set(
          e,
          Wt(() => n(this.anchor))
        );
    if (u(this, ee).set(r, e), i) {
      for (const [f, l] of u(this, ce))
        f === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of u(this, zt))
        f === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(u(this, Dn)), r.ondiscard(u(this, ir));
    } else
      u(this, Dn).call(this, r);
  }
}
ee = new WeakMap(), ce = new WeakMap(), zt = new WeakMap(), Ue = new WeakMap(), Pn = new WeakMap(), Dn = new WeakMap(), ir = new WeakMap();
function zs(t, e, ...n) {
  var r = new Kr(t);
  Hn(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((s) => i(s, ...n)));
  }, ze);
}
function j(t, e, n = !1) {
  var r = new Kr(t), i = n ? ze : 0;
  function s(o, f) {
    r.ensure(o, f);
  }
  Hn(() => {
    var o = !1;
    e((f, l = 0) => {
      o = !0, s(l, f);
    }), o || s(-1, null);
  }, i);
}
const Vs = Symbol("NaN");
function da(t, e, n) {
  var r = new Kr(t);
  Hn(() => {
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
    let y = e[f];
    je(
      y,
      () => {
        if (s) {
          if (s.pending.delete(y), s.done.add(y), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Or(t, ar(s.done)), v.delete(s), v.size === 0 && (t.outrogroups = null);
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
      ), _ = (
        /** @type {Element} */
        c.parentNode
      );
      _s(_), _.append(c), t.items.clear();
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
      s.f |= de;
      const o = document.createDocumentFragment();
      Yr(s, o);
    } else
      Dt(e[i], n);
  }
}
var vi;
function At(t, e, n, r, i, s = null) {
  var o = t, f = /* @__PURE__ */ new Map(), l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(ke());
  }
  var _ = null, y = /* @__PURE__ */ ss(() => {
    var I = n();
    return (
      /** @type {V[]} */
      ki(I) ? I : I == null ? [] : ar(I)
    );
  }), v, d = /* @__PURE__ */ new Map(), g = !0;
  function A(I) {
    (P.effect.f & Bt) === 0 && (P.pending.delete(I), P.fallback = _, qs(P, v, o, e, r), _ !== null && (v.length === 0 ? (_.f & de) === 0 ? er(_) : (_.f ^= de, An(_, null, o)) : je(_, () => {
      _ = null;
    })));
  }
  function p(I) {
    P.pending.delete(I);
  }
  var E = Hn(() => {
    v = /** @type {V[]} */
    a(y);
    for (var I = v.length, D = /* @__PURE__ */ new Set(), lt = (
      /** @type {Batch} */
      V
    ), W = Wi(), q = 0; q < I; q += 1) {
      var J = v[q], et = r(J, q), w = g ? null : f.get(et);
      w ? (w.v && cn(w.v, J), w.i && cn(w.i, q), W && lt.unskip_effect(w.e)) : (w = Gs(
        f,
        g ? o : vi ?? (vi = ke()),
        J,
        et,
        q,
        i,
        e,
        n
      ), g || (w.e.f |= de), f.set(et, w)), D.add(et);
    }
    if (I === 0 && s && !_ && (g ? _ = Wt(() => s(o)) : (_ = Wt(() => s(vi ?? (vi = ke()))), _.f |= de)), I > D.size && Ga(), !g)
      if (d.set(lt, D), W) {
        for (const [S, R] of f)
          D.has(S) || lt.skip_effect(R.e);
        lt.oncommit(A), lt.ondiscard(p);
      } else
        A(lt);
    a(y);
  }), P = { effect: E, items: f, pending: d, outrogroups: null, fallback: _ };
  g = !1;
}
function mn(t) {
  for (; t !== null && (t.f & Xt) === 0; )
    t = t.next;
  return t;
}
function qs(t, e, n, r, i) {
  var w, S, R, Y, x, h, T, Q, at;
  var s = (r & 8) !== 0, o = e.length, f = t.items, l = mn(t.effect.first), c, _ = null, y, v = [], d = [], g, A, p, E;
  if (s)
    for (E = 0; E < o; E += 1)
      g = e[E], A = i(g, E), p = /** @type {EachItem} */
      f.get(A).e, (p.f & de) === 0 && ((S = (w = p.nodes) == null ? void 0 : w.a) == null || S.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(p));
  for (E = 0; E < o; E += 1) {
    if (g = e[E], A = i(g, E), p = /** @type {EachItem} */
    f.get(A).e, t.outrogroups !== null)
      for (const rt of t.outrogroups)
        rt.pending.delete(p), rt.done.delete(p);
    if ((p.f & It) !== 0 && (er(p), s && ((Y = (R = p.nodes) == null ? void 0 : R.a) == null || Y.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(p))), (p.f & de) !== 0)
      if (p.f ^= de, p === l)
        An(p, null, n);
      else {
        var P = _ ? _.next : l;
        p === t.effect.last && (t.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Te(t, _, p), Te(t, p, P), An(p, P, n), _ = p, v = [], d = [], l = mn(_.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (v.length < d.length) {
          var I = d[0], D;
          _ = I.prev;
          var lt = v[0], W = v[v.length - 1];
          for (D = 0; D < v.length; D += 1)
            An(v[D], I, n);
          for (D = 0; D < d.length; D += 1)
            c.delete(d[D]);
          Te(t, lt.prev, W.next), Te(t, _, lt), Te(t, W, I), l = I, _ = W, E -= 1, v = [], d = [];
        } else
          c.delete(p), An(p, l, n), Te(t, p.prev, p.next), Te(t, p, _ === null ? t.effect.first : _.next), Te(t, _, p), _ = p;
        continue;
      }
      for (v = [], d = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), d.push(l), l = mn(l.next);
      if (l === null)
        continue;
    }
    (p.f & de) === 0 && v.push(p), _ = p, l = mn(p.next);
  }
  if (t.outrogroups !== null) {
    for (const rt of t.outrogroups)
      rt.pending.size === 0 && (Or(t, ar(rt.done)), (x = t.outrogroups) == null || x.delete(rt));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var q = [];
    if (c !== void 0)
      for (p of c)
        (p.f & It) === 0 && q.push(p);
    for (; l !== null; )
      (l.f & It) === 0 && l !== t.fallback && q.push(l), l = mn(l.next);
    var J = q.length;
    if (J > 0) {
      var et = (r & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (E = 0; E < J; E += 1)
          (T = (h = q[E].nodes) == null ? void 0 : h.a) == null || T.measure();
        for (E = 0; E < J; E += 1)
          (at = (Q = q[E].nodes) == null ? void 0 : Q.a) == null || at.fix();
      }
      Bs(t, q, et);
    }
  }
  s && ye(() => {
    var rt, st;
    if (y !== void 0)
      for (p of y)
        (st = (rt = p.nodes) == null ? void 0 : rt.a) == null || st.apply();
  });
}
function Gs(t, e, n, r, i, s, o, f) {
  var l = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ vs(n, !1, !1) : qe(n) : null, c = (o & 2) !== 0 ? qe(i) : null;
  return {
    v: l,
    i: c,
    e: Wt(() => (s(e, l ?? n, c ?? i, f), () => {
      t.delete(r);
    }))
  };
}
function An(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & de) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jn(r)
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
    var r = or(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      qr(() => {
        var o = n();
        As(o), i && Ii(s, o) && (s = o, r.update(o));
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
function Qe(t, e, n, r, i, s) {
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
    t[qn] ?? (t[qn] = {
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
  return t === e || (t == null ? void 0 : t[tn]) === e;
}
function to(t = Fr(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Mt.r
  ), s = (
    /** @type {Effect} */
    tt
  );
  return Xi(() => {
    var o, f;
    return qr(() => {
      o = f, f = [], or(() => {
        _r(n(...f), t) || (e(t, ...f), o && _r(n(...o), t) && e(null, ...o));
      });
    }), () => {
      let l = s;
      for (; l !== i && l.parent !== null && l.parent.f & Jn; )
        l = l.parent;
      const c = () => {
        f && _r(n(...f), t) && e(null, ...f);
      }, _ = l.teardown;
      l.teardown = () => {
        c(), _ == null || _();
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
let gn = "";
function pa(t) {
  gn = t;
}
async function oe(t, e) {
  const n = new URL(`${gn}${t}`, window.location.origin);
  for (const [r, i] of Object.entries(e ?? {}))
    i != null && i !== "" && n.searchParams.set(r, String(i));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const ga = (t) => oe("/accounts", t), no = () => oe("/rails"), ro = (t) => oe(`/accounts/${encodeURIComponent(t)}`), io = (t) => oe(`/accounts/${encodeURIComponent(t)}/similar`), ao = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/videos`, { site: e, page: n }), so = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/galleries`, { site: e, page: n }), oo = (t, e, n) => oe(`/accounts/${encodeURIComponent(t)}/images`, { site: e, page: n }), lo = (t, e) => oe("/videoinfo", { site: t, video_id: e }), fo = (t, e) => oe(`/galleries/${encodeURIComponent(t)}/${encodeURIComponent(e)}`), uo = (t, e, n) => `${gn}/image?site=${encodeURIComponent(t)}&gallery_id=${encodeURIComponent(e)}&index=${n}`, _i = (t, e, n, r, i = !1) => `${gn}/photo?site=${encodeURIComponent(t)}&handle=${encodeURIComponent(e)}&page=${n}&index=${r}${i ? "&thumb=true" : ""}`, pi = (t, e, n = 0) => `${gn}/stream?site=${encodeURIComponent(t)}&video_id=${encodeURIComponent(e)}&index=${n}`, Zr = "/api/v1/rails/x/onlyfans";
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
const _o = () => oe("/plugins"), po = () => oe("/sync/status");
async function go(t) {
  const e = new URL(`${gn}/sync`, window.location.origin);
  for (const n of t ?? []) e.searchParams.append("sites", n);
  try {
    const n = await fetch(e, { method: "POST" });
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
var bo = /* @__PURE__ */ C('<img loading="lazy"/>'), mo = /* @__PURE__ */ C('<span class="ofx-initials"> </span>');
function Jr(t, e) {
  ae(e, !0);
  let n = we(e, "src", 3, null), r = we(e, "alt", 3, ""), i = we(e, "name", 3, ""), s = we(e, "onmeasure", 3, null), o = /* @__PURE__ */ U(!1);
  const f = /* @__PURE__ */ St(() => (i() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((d) => {
    var g;
    return ((g = d[0]) == null ? void 0 : g.toUpperCase()) ?? "";
  }).join(""));
  function l(d) {
    const g = d.currentTarget;
    s() && g.naturalWidth && g.naturalHeight && s()(g.naturalWidth / g.naturalHeight);
  }
  var c = pn(), _ = Et(c);
  {
    var y = (d) => {
      var g = bo();
      H(() => {
        gt(g, "src", n()), gt(g, "alt", r());
      }), Sr("load", g, l), Sr("error", g, () => b(o, !0)), k(d, g);
    }, v = (d) => {
      var g = mo(), A = B(g, !0);
      H(() => F(A, a(f))), k(d, g);
    };
    j(_, (d) => {
      n() && !a(o) ? d(y) : d(v, -1);
    });
  }
  k(t, c), se();
}
var xo = /* @__PURE__ */ C('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function ba(t, e) {
  ae(e, !0);
  var n = xo(), r = N(n), i = N(r);
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
  var s = m(r, 2), o = B(s, !0), f = m(s, 2), l = B(f);
  H(() => {
    gt(n, "href", `/x/onlyfans/${e.account.handle ?? ""}`), gt(s, "title", e.account.display_name), F(o, e.account.display_name), F(l, `${e.account.source_count ?? ""}
        ${e.account.source_count === 1 ? "site" : "sites"}`);
  }), it("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), e.navigate(`/x/onlyfans/${e.account.handle}`));
  }), k(t, n), se();
}
Ye(["click"]);
var yo = /* @__PURE__ */ C('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), wo = /* @__PURE__ */ C('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), ko = /* @__PURE__ */ C('<span class="ofx-note"> </span>'), Eo = /* @__PURE__ */ C('<div class="ofx-rail-actions"><!></div>'), So = /* @__PURE__ */ C('<div class="ofx-rail-item"><!></div>'), Ao = /* @__PURE__ */ C('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function Nr(t, e) {
  ae(e, !0);
  let n = we(e, "note", 3, ""), r = we(e, "order", 3, null), i = we(e, "fetcher", 3, null), s = we(e, "size", 3, 20), o = /* @__PURE__ */ U(Zt([])), f = /* @__PURE__ */ U(!0), l = /* @__PURE__ */ U(0);
  function c() {
    b(l, a(l) + 1);
  }
  _n(() => {
    const A = r(), p = i(), E = s();
    a(l);
    let P = !1;
    b(f, !0);
    const I = p ? p() : ga({ order: A, limit: E, offset: 0 });
    return Promise.resolve(I).then((D) => {
      P || (b(o, Array.isArray(D) ? D : (D == null ? void 0 : D.items) ?? [], !0), b(f, !1));
    }), () => {
      P = !0;
    };
  });
  var _ = { reload: c }, y = pn(), v = Et(y);
  {
    var d = (A) => {
      var p = wo(), E = N(p), P = B(E, !0), I = m(E, 2);
      At(I, 20, () => Array(8), Wr, (D, lt) => {
        var W = yo();
        k(D, W);
      }), H(() => F(P, e.title)), k(A, p);
    }, g = (A) => {
      var p = Ao(), E = N(p), P = N(E), I = B(P, !0), D = m(P, 2);
      {
        var lt = (et) => {
          var w = ko(), S = B(w, !0);
          H(() => F(S, n())), k(et, w);
        };
        j(D, (et) => {
          n() && et(lt);
        });
      }
      var W = m(D, 2);
      {
        var q = (et) => {
          var w = Eo(), S = N(w);
          zs(S, () => e.actions), k(et, w);
        };
        j(W, (et) => {
          e.actions && et(q);
        });
      }
      var J = m(E, 2);
      At(J, 21, () => a(o), (et) => et.handle, (et, w) => {
        var S = So(), R = N(S);
        ba(R, {
          get account() {
            return a(w);
          },
          get navigate() {
            return e.navigate;
          }
        }), k(et, S);
      }), H(() => F(I, e.title)), k(A, p);
    };
    j(v, (A) => {
      a(f) ? A(d) : a(o).length && A(g, 1);
    });
  }
  return k(t, y), se(_);
}
var To = /* @__PURE__ */ C('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), Co = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), Ro = /* @__PURE__ */ C(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Io = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function Mo(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U(Zt([]));
  async function o() {
    const p = await co(), E = new Map(e.rails.map((D) => [D.key, D])), P = /* @__PURE__ */ new Set(), I = [];
    for (const D of p)
      P.add(D.key), E.has(D.key) && I.push({ ...D });
    for (const D of e.rails)
      P.has(D.key) || I.push({ key: D.key, enabled: !0 });
    b(s, I, !0), b(i, null), b(n, !0);
  }
  function f(p, E) {
    const P = p + E;
    if (P < 0 || P >= a(s).length) return;
    const I = [...a(s)];
    [I[p], I[P]] = [I[P], I[p]], b(s, I, !0);
  }
  function l(p) {
    b(s, a(s).map((E, P) => P === p ? { ...E, enabled: !E.enabled } : E), !0);
  }
  function c(p) {
    var E;
    return ((E = e.rails.find((P) => P.key === p)) == null ? void 0 : E.title) ?? p;
  }
  async function _() {
    var p;
    b(r, !0), b(i, null), await vo() ? (await ((p = e.onsaved) == null ? void 0 : p.call(e)), b(n, !1)) : b(i, "Could not reset."), b(r, !1);
  }
  async function y() {
    var p;
    b(r, !0), b(i, null), await ho(a(s)) ? (await ((p = e.onsaved) == null ? void 0 : p.call(e)), b(n, !1)) : b(i, "Could not save. Your changes are still here."), b(r, !1);
  }
  var v = Io(), d = Et(v), g = m(d, 2);
  {
    var A = (p) => {
      var E = Ro(), P = N(E), I = m(N(P), 2), D = m(P, 4);
      At(D, 23, () => a(s), (R) => R.key, (R, Y, x) => {
        var h = To();
        let T;
        var Q = N(h), at = B(Q, !0), rt = m(Q, 2), st = B(rt, !0), M = m(rt, 2), O = m(M, 2);
        H(
          (X, vt, xt, Ft) => {
            T = Qe(h, 1, "", null, T, { "ofx-off": !a(Y).enabled }), F(at, X), gt(rt, "aria-label", vt), F(st, a(Y).enabled ? "Shown" : "Hidden"), M.disabled = a(x) === 0, gt(M, "aria-label", xt), O.disabled = a(x) === a(s).length - 1, gt(O, "aria-label", Ft);
          },
          [
            () => c(a(Y).key),
            () => a(Y).enabled ? `Hide ${c(a(Y).key)}` : `Show ${c(a(Y).key)}`,
            () => `Move ${c(a(Y).key)} up`,
            () => `Move ${c(a(Y).key)} down`
          ]
        ), it("click", rt, () => l(a(x))), it("click", M, () => f(a(x), -1)), it("click", O, () => f(a(x), 1)), k(R, h);
      });
      var lt = m(D, 2);
      {
        var W = (R) => {
          var Y = Co(), x = B(Y, !0);
          H(() => F(x, a(i))), k(R, Y);
        };
        j(lt, (R) => {
          a(i) && R(W);
        });
      }
      var q = m(lt, 2), J = N(q), et = m(J, 2), w = m(et, 2), S = B(w, !0);
      H(() => {
        J.disabled = a(r), w.disabled = a(r), F(S, a(r) ? "Saving…" : "Save");
      }), it("click", I, () => b(n, !1)), it("click", J, _), it("click", et, () => b(n, !1)), it("click", w, y), k(p, E);
    };
    j(g, (p) => {
      a(n) && p(A);
    });
  }
  it("click", d, o), k(t, v), se();
}
Ye(["click"]);
var Oo = /* @__PURE__ */ C(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), No = /* @__PURE__ */ C('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Lo = /* @__PURE__ */ C('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), Po = /* @__PURE__ */ C('<div class="ofx-sentinel"></div>'), Do = /* @__PURE__ */ C('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), Fo = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Uo = /* @__PURE__ */ C('<div class="ofx-controls"><!></div> <!> <!>', 1), jo = /* @__PURE__ */ C('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Ho(t, e) {
  ae(e, !0);
  const n = 60, r = 20;
  let i = /* @__PURE__ */ U(Zt([])), s = /* @__PURE__ */ U(0), o = /* @__PURE__ */ U(!1), f = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(!1), _ = /* @__PURE__ */ U(""), y, v = /* @__PURE__ */ U(null), d = /* @__PURE__ */ U(Zt([]));
  async function g() {
    const M = await no();
    b(d, Array.isArray(M) ? M : [], !0);
  }
  _n(() => {
    g();
  });
  const A = /* @__PURE__ */ St(() => a(l).trim()), p = /* @__PURE__ */ St(() => a(A) !== "" || a(c)), E = /* @__PURE__ */ St(() => a(i).length < a(s));
  async function P(M, O) {
    b(o, !0);
    const X = await ga({ search: M, limit: n, offset: O });
    if (M !== a(l).trim()) {
      b(o, !1);
      return;
    }
    X ? (b(i, O === 0 ? X.items : [...a(i), ...X.items], !0), b(s, X.total, !0), b(_, M, !0), b(f, !1)) : b(f, !0), b(o, !1);
  }
  function I(M) {
    b(l, M.currentTarget.value, !0), clearTimeout(y), y = setTimeout(() => P(a(l).trim(), 0), 250);
  }
  function D() {
    b(c, !0), P("", 0);
  }
  function lt() {
    b(c, !1), b(l, ""), b(i, [], !0), b(s, 0), b(_, "");
  }
  function W(M) {
    const O = new IntersectionObserver(
      (X) => {
        var vt;
        (vt = X[0]) != null && vt.isIntersecting && a(E) && !a(o) && P(a(_), a(i).length);
      },
      { rootMargin: "600px" }
    );
    return O.observe(M), { destroy: () => O.disconnect() };
  }
  var q = jo(), J = m(Et(q), 2), et = N(J);
  {
    var w = (M) => {
      var O = En();
      H(
        (X, vt) => F(O, `${X ?? ""} of ${vt ?? ""}
        ${a(_) ? `matching “${a(_)}”` : "accounts"}`),
        [
          () => a(i).length.toLocaleString(),
          () => a(s).toLocaleString()
        ]
      ), k(M, O);
    }, S = (M) => {
      var O = En("loading…");
      k(M, O);
    }, R = (M) => {
      var O = En("nothing found");
      k(M, O);
    }, Y = (M) => {
      var O = En("performers, gathered from the archive sites");
      k(M, O);
    };
    j(et, (M) => {
      a(p) && a(s) ? M(w) : a(p) && a(o) ? M(S, 1) : a(p) ? M(R, 2) : M(Y, -1);
    });
  }
  var x = m(J, 2), h = m(N(x), 2), T = m(x, 2);
  {
    var Q = (M) => {
      var O = Oo();
      k(M, O);
    };
    j(T, (M) => {
      a(f) && M(Q);
    });
  }
  var at = m(T, 2);
  {
    var rt = (M) => {
      var O = Do(), X = Et(O);
      {
        var vt = (nt) => {
          var ut = No(), yt = B(ut);
          it("click", yt, lt), k(nt, ut);
        };
        j(X, (nt) => {
          a(c) && !a(A) && nt(vt);
        });
      }
      var xt = m(X, 2), Ft = N(xt);
      At(Ft, 17, () => a(i), (nt) => nt.handle, (nt, ut) => {
        ba(nt, {
          get account() {
            return a(ut);
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var kt = m(Ft, 2);
      {
        var Ot = (nt) => {
          var ut = pn(), yt = Et(ut);
          At(yt, 16, () => Array(12), Wr, (Ke, Xr) => {
            var Vn = Lo();
            k(Ke, Vn);
          }), k(nt, ut);
        };
        j(kt, (nt) => {
          a(o) && nt(Ot);
        });
      }
      var Tt = m(xt, 2);
      {
        var dt = (nt) => {
          var ut = Po();
          ha(ut, (yt) => W == null ? void 0 : W(yt)), k(nt, ut);
        };
        j(Tt, (nt) => {
          a(E) && nt(dt);
        });
      }
      k(M, O);
    }, st = (M) => {
      var O = Uo(), X = Et(O), vt = N(X);
      Mo(vt, {
        get rails() {
          return a(d);
        },
        onsaved: g
      });
      var xt = m(X, 2);
      At(xt, 17, () => a(d).filter((kt) => kt.order !== "random"), (kt) => kt.order, (kt, Ot) => {
        Nr(kt, {
          get title() {
            return a(Ot).title;
          },
          get note() {
            return a(Ot).note;
          },
          get order() {
            return a(Ot).order;
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var Ft = m(xt, 2);
      {
        const kt = (Tt) => {
          var dt = Fo(), nt = Et(dt), ut = m(nt, 2);
          it("click", nt, () => {
            var yt;
            return (yt = a(v)) == null ? void 0 : yt.reload();
          }), it("click", ut, D), k(Tt, dt);
        };
        let Ot = /* @__PURE__ */ St(() => {
          var Tt;
          return ((Tt = a(d).find((dt) => dt.order === "random")) == null ? void 0 : Tt.title) ?? "Something else";
        });
        to(
          Nr(Ft, {
            get title() {
              return a(Ot);
            },
            order: "random",
            size: r,
            get navigate() {
              return e.navigate;
            },
            actions: kt,
            $$slots: { actions: !0 }
          }),
          (Tt) => b(v, Tt, !0),
          () => a(v)
        );
      }
      k(M, O);
    };
    j(at, (M) => {
      a(p) ? M(rt) : M(st, -1);
    });
  }
  H(() => Qs(h, a(l))), it("input", h, I), k(t, q), se();
}
Ye(["input", "click"]);
var zo = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), gi = /* @__PURE__ */ C('<p class="ofx-note"> </p>'), Vo = /* @__PURE__ */ C('<span class="ofx-badge"> </span>'), Bo = /* @__PURE__ */ C('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), qo = /* @__PURE__ */ C('<p class="ofx-caption-title"> </p>'), Go = /* @__PURE__ */ C('<p class="ofx-caption-text"> </p>'), Yo = /* @__PURE__ */ C('<p class="ofx-caption-when"> </p>'), Ko = /* @__PURE__ */ C('<div class="ofx-caption"><!> <!> <!></div>'), Wo = /* @__PURE__ */ C('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), Zo = /* @__PURE__ */ C('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), Jo = /* @__PURE__ */ C('<button class="ofx-btn ofx-outline" type="button"> </button>'), Xo = /* @__PURE__ */ C('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function Qo(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ U(Zt([])), r = /* @__PURE__ */ U(0), i = /* @__PURE__ */ U(!1), s = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ U(!1);
  async function f() {
    if (a(i) || a(s)) return;
    b(i, !0);
    const w = a(r) + 1, [S, R, Y] = await Promise.all([
      ao(e.handle, e.site, w),
      so(e.handle, e.site, w),
      oo(e.handle, e.site, w)
    ]);
    if (S === null && R === null && Y === null)
      b(o, !0);
    else {
      const x = [
        ...(S ?? []).map((h) => ({
          kind: "video",
          key: `v:${h.video_id}`,
          title: h.title,
          thumbnail: h.thumbnail,
          badge: v(h.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: h.posted_at,
          text: h.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: h.has_text,
          item: h
        })),
        ...(R ?? []).map((h) => ({
          kind: "image",
          key: `g:${h.gallery_id}`,
          title: h.title,
          thumbnail: h.cover,
          badge: h.image_count ? `${h.image_count}` : null,
          aspect: 0.75,
          posted: h.posted,
          item: h
        })),
        ...(Y ?? []).map((h) => ({
          kind: "image",
          key: `p:${h.image_id ?? `${w}:${h.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: _i(e.site, e.handle, w, h.index, !0),
          full: _i(e.site, e.handle, w, h.index),
          badge: null,
          aspect: 0.75,
          posted: h.posted_at,
          item: h
        }))
      ];
      b(n, [...a(n), ...x], !0), b(r, w), x.length === 0 && b(s, !0);
    }
    b(i, !1);
  }
  const l = /* @__PURE__ */ St(() => a(n).filter((w) => e.kinds.has(w.kind)));
  _n(() => {
    e.handle, e.site, or(() => {
      b(n, [], !0), b(r, 0), b(s, !1), b(o, !1), b(i, !1), f();
    });
  });
  function c(w, S) {
    !S || !Number.isFinite(S) || b(n, a(n).map((R) => R.key === w ? { ...R, aspect: S } : R), !0);
  }
  function _(w, S) {
    if (!S.hasText || S.text) return;
    const R = new IntersectionObserver((Y) => {
      Y.some((x) => x.isIntersecting) && (R.disconnect(), lo(e.site, S.item.video_id).then((x) => {
        x && b(
          n,
          a(n).map((h) => h.key === S.key ? {
            ...h,
            text: x.description,
            posted: h.posted ?? x.posted_at
          } : h),
          !0
        );
      }));
    });
    return R.observe(w), { destroy: () => R.disconnect() };
  }
  function y(w) {
    w.kind === "video" ? e.onplay(w.item) : w.full ? e.onphoto(w) : e.ongallery(w.item);
  }
  function v(w) {
    return w ? `${Math.floor(w / 60)}:${String(w % 60).padStart(2, "0")}` : null;
  }
  var d = Xo(), g = N(d), A = B(g, !0), p = m(g, 2);
  {
    var E = (w) => {
      var S = zo(), R = B(S);
      H(() => F(R, `${e.site ?? ""} did not answer.`)), k(w, S);
    }, P = (w) => {
      var S = gi(), R = B(S);
      H(() => F(R, `Nothing here on ${e.site ?? ""}.`)), k(w, S);
    }, I = (w) => {
      var S = gi(), R = B(S);
      H((Y) => F(R, `${e.site ?? ""} has no ${Y ?? ""} for this performer.`), [() => [...e.kinds].join(" or ")]), k(w, S);
    };
    j(p, (w) => {
      a(o) ? w(E) : !a(i) && a(n).length === 0 ? w(P, 1) : !a(i) && a(l).length === 0 && w(I, 2);
    });
  }
  var D = m(p, 2), lt = N(D);
  At(lt, 17, () => a(l), (w) => w.key, (w, S) => {
    var R = Wo(), Y = N(R), x = N(Y), h = N(x);
    Jr(h, {
      get src() {
        return a(S).thumbnail;
      },
      get alt() {
        return a(S).title;
      },
      get name() {
        return a(S).title;
      },
      onmeasure: (O) => c(a(S).key, O)
    });
    var T = m(h, 2);
    {
      var Q = (O) => {
        var X = Vo(), vt = B(X, !0);
        H(() => F(vt, a(S).badge)), k(O, X);
      };
      j(T, (O) => {
        a(S).badge && O(Q);
      });
    }
    var at = m(T, 2);
    {
      var rt = (O) => {
        var X = Bo();
        k(O, X);
      };
      j(at, (O) => {
        a(S).kind === "video" && O(rt);
      });
    }
    var st = m(Y, 2);
    {
      var M = (O) => {
        var X = Ko(), vt = N(X);
        {
          var xt = (dt) => {
            var nt = qo(), ut = B(nt, !0);
            H(() => F(ut, a(S).title)), k(dt, nt);
          };
          j(vt, (dt) => {
            a(S).title && dt(xt);
          });
        }
        var Ft = m(vt, 2);
        {
          var kt = (dt) => {
            var nt = Go(), ut = B(nt, !0);
            H(() => F(ut, a(S).text)), k(dt, nt);
          };
          j(Ft, (dt) => {
            a(S).text && dt(kt);
          });
        }
        var Ot = m(Ft, 2);
        {
          var Tt = (dt) => {
            var nt = Yo(), ut = B(nt, !0);
            H(() => F(ut, a(S).posted)), k(dt, nt);
          };
          j(Ot, (dt) => {
            a(S).posted && dt(Tt);
          });
        }
        k(O, X);
      };
      j(st, (O) => {
        (a(S).title || a(S).text || a(S).posted) && O(M);
      });
    }
    ha(R, (O, X) => _ == null ? void 0 : _(O, X), () => a(S)), H(() => Ws(R, `--ofx-ar: ${a(S).aspect ?? ""}; flex-grow: ${a(S).aspect ?? ""}; flex-basis: ${a(S).aspect * 220}px`)), it("click", Y, () => y(a(S))), k(w, R);
  });
  var W = m(lt, 2);
  {
    var q = (w) => {
      var S = pn(), R = Et(S);
      At(R, 16, () => Array(4), Wr, (Y, x) => {
        var h = Zo();
        k(Y, h);
      }), k(w, S);
    };
    j(W, (w) => {
      a(i) && w(q);
    });
  }
  var J = m(D, 2);
  {
    var et = (w) => {
      var S = Jo(), R = B(S, !0);
      H(() => {
        S.disabled = a(i), F(R, a(i) ? "Loading…" : "Load more");
      }), it("click", S, f), k(w, S);
    };
    j(J, (w) => {
      !a(s) && !a(o) && a(n).length > 0 && w(et);
    });
  }
  H(() => F(A, e.site)), k(t, d), se();
}
Ye(["click"]);
async function $o() {
  try {
    const t = await fetch("/api/v1/vpn/status");
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function tl(t, e) {
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
async function el(t) {
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
var nl = /* @__PURE__ */ C('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), rl = /* @__PURE__ */ C('<span class="tbx-dim">offline</span>'), il = /* @__PURE__ */ C('<li><button type="button" role="option"> <!></button></li>'), al = /* @__PURE__ */ C('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), sl = /* @__PURE__ */ C('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), ol = /* @__PURE__ */ C('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), ll = /* @__PURE__ */ C('<p class="tbx-vpn-note"> </p>'), fl = /* @__PURE__ */ C('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function ul(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(null), i = /* @__PURE__ */ U(!1), s = /* @__PURE__ */ U(null);
  async function o() {
    b(n, await $o(), !0);
  }
  _n(() => {
    o();
  });
  async function f(v) {
    var g;
    const d = v === "scraping" ? !a(n).route_scraping : !a(n).route_streaming;
    b(r, v, !0), b(s, null), await tl(v, d) && (await o(), await ((g = e.onchange) == null ? void 0 : g.call(e))), b(r, null);
  }
  async function l(v) {
    var g;
    b(r, "exit"), b(i, !1);
    const d = await el(v);
    d && (b(n, d, !0), b(s, d.detail ?? null, !0), await ((g = e.onchange) == null ? void 0 : g.call(e))), b(r, null);
  }
  var c = pn(), _ = Et(c);
  {
    var y = (v) => {
      var d = fl(), g = Et(d), A = m(N(g), 2);
      At(
        A,
        17,
        () => [
          ["scraping", "Scraping", a(n).route_scraping],
          [
            "streaming",
            "Video streaming",
            a(n).route_streaming
          ]
        ],
        ([W, q, J]) => W,
        (W, q) => {
          var J = /* @__PURE__ */ St(() => Zn(a(q), 3));
          let et = () => a(J)[0], w = () => a(J)[1], S = () => a(J)[2];
          var R = nl();
          let Y;
          var x = m(N(R), 2), h = B(x, !0);
          H(() => {
            Y = Qe(R, 1, "tbx-toggle", null, Y, { "tbx-toggle-on": S() }), gt(R, "aria-checked", S()), R.disabled = a(r) !== null, F(h, w());
          }), it("click", R, () => f(et())), k(W, R);
        }
      );
      var p = m(A, 2);
      {
        var E = (W) => {
          var q = sl(), J = N(q), et = N(J), w = m(J, 2);
          {
            var S = (R) => {
              var Y = al(), x = N(Y), h = B(x), T = m(x, 2);
              At(T, 17, () => a(n).exit_nodes, (Q) => Q.id, (Q, at) => {
                var rt = il(), st = N(rt), M = N(st), O = m(M);
                {
                  var X = (vt) => {
                    var xt = rl();
                    k(vt, xt);
                  };
                  j(O, (vt) => {
                    a(at).online || vt(X);
                  });
                }
                H(() => {
                  gt(st, "aria-selected", a(at).active), st.disabled = !a(at).online, F(M, `${a(at).name ?? ""}${a(at).country ? ` · ${a(at).country}` : ""} `);
                }), it("click", st, () => l(a(at).id)), k(Q, rt);
              }), H(() => gt(h, "aria-selected", !a(n).exit_node)), it("click", h, () => l(null)), k(R, Y);
            };
            j(w, (R) => {
              a(i) && R(S);
            });
          }
          H(() => {
            gt(J, "aria-expanded", a(i)), J.disabled = a(r) !== null, F(et, `${a(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), it("click", J, () => b(i, !a(i))), k(W, q);
        };
        j(p, (W) => {
          var q;
          (q = a(n).exit_nodes) != null && q.length && W(E);
        });
      }
      var P = m(p, 2);
      {
        var I = (W) => {
          var q = ol();
          k(W, q);
        };
        j(P, (W) => {
          !a(n).connected && (a(n).route_scraping || a(n).route_streaming) && W(I);
        });
      }
      var D = m(g, 2);
      {
        var lt = (W) => {
          var q = ll(), J = B(q, !0);
          H(() => F(J, a(s))), k(W, q);
        };
        j(D, (W) => {
          a(s) && W(lt);
        });
      }
      k(v, d);
    };
    j(_, (v) => {
      var d;
      (d = a(n)) != null && d.enabled && v(y);
    });
  }
  k(t, c), se();
}
Ye(["click"]);
var cl = /* @__PURE__ */ C('<p class="ofx-error">That account could not be loaded.</p>'), vl = /* @__PURE__ */ C('<div class="ofx-banner"><img alt=""/></div>'), dl = /* @__PURE__ */ Is('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), hl = /* @__PURE__ */ C('<p> </p> <button class="ofx-more" type="button"> </button>', 1), _l = /* @__PURE__ */ C("<span><b> </b> </span>"), pl = /* @__PURE__ */ C('<div class="ofx-stats"></div>'), gl = /* @__PURE__ */ C("<span> </span>"), bi = /* @__PURE__ */ C('<a target="_blank" rel="noreferrer noopener"> </a>'), bl = /* @__PURE__ */ C('<button type="button" role="tab"> </button>'), ml = /* @__PURE__ */ C('<span class="ofx-count"> </span>'), xl = /* @__PURE__ */ C('<button type="button"> <!></button>'), yl = /* @__PURE__ */ C('<p class="ofx-error"> </p>'), wl = /* @__PURE__ */ C(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), kl = /* @__PURE__ */ C('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><span class="ofx-note">Load from:</span> <!> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), El = /* @__PURE__ */ C('<p class="ofx-note">Loading…</p>'), Sl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), Al = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Tl = /* @__PURE__ */ C('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Cl = /* @__PURE__ */ C('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Rl = /* @__PURE__ */ C("<!> <!> <!> <!>", 1);
function Il(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U("all");
  const s = /* @__PURE__ */ St(() => a(i) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([a(i)]));
  let o = /* @__PURE__ */ U(Zt(/* @__PURE__ */ new Set())), f = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(null), c = /* @__PURE__ */ U(null), _ = /* @__PURE__ */ U(null), y = /* @__PURE__ */ U(null);
  _n(() => {
    ro(e.handle).then((x) => {
      x ? b(n, x, !0) : b(r, !0);
    });
  });
  const v = /* @__PURE__ */ St(() => {
    var x, h, T, Q;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (x = a(n)) == null ? void 0 : x.posts_count],
      ["photos", (h = a(n)) == null ? void 0 : h.photos_count],
      ["videos", (T = a(n)) == null ? void 0 : T.videos_count],
      ["likes", (Q = a(n)) == null ? void 0 : Q.likes_count]
    ].filter(([, at]) => at != null);
  });
  function d(x) {
    const h = new Set(a(o));
    h.has(x) ? h.delete(x) : h.add(x), b(o, h, !0);
  }
  function g(x) {
    var h, T;
    if (!((h = e.host) != null && h.play)) {
      b(l, x, !0);
      return;
    }
    e.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: pi(x.site, x.video_id),
      title: x.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: x.thumbnail ?? void 0,
      site: x.site,
      videoId: x.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((T = a(n)) == null ? void 0 : T.display_name) || e.handle,
      duration: x.duration,
      resolution: x.resolution,
      size: x.size
    });
  }
  function A(x) {
    b(y, null), b(_, x, !0);
  }
  async function p(x) {
    b(y, null);
    const h = await fo(x.site, x.gallery_id);
    if (!h) {
      b(y, "Could not open that gallery");
      return;
    }
    if (h.length === 0) {
      b(y, "That site served no images for this gallery");
      return;
    }
    b(c, { gallery: x, count: h.length, index: 0 }, !0);
  }
  function E(x) {
    a(c) && b(
      c,
      {
        ...a(c),
        index: (a(c).index + x + a(c).count) % a(c).count
      },
      !0
    );
  }
  function P(x) {
    if (x.key === "Escape") {
      b(l, null), b(c, null), b(_, null);
      return;
    }
    a(c) && (x.key === "ArrowRight" && E(1), x.key === "ArrowLeft" && E(-1));
  }
  var I = Rl();
  Sr("keydown", wr, P);
  var D = Et(I);
  {
    var lt = (x) => {
      var h = cl();
      k(x, h);
    }, W = (x) => {
      var h = kl(), T = Et(h), Q = N(T);
      {
        var at = (L) => {
          var K = vl(), ft = B(K);
          H(() => gt(ft, "src", a(n).header_url)), k(L, K);
        };
        j(Q, (L) => {
          a(n).header_url && L(at);
        });
      }
      var rt = m(Q, 2), st = N(rt);
      let M;
      var O = N(st);
      Jr(O, {
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
      var X = m(st, 2), vt = N(X), xt = N(vt), Ft = m(xt);
      {
        var kt = (L) => {
          var K = dl();
          k(L, K);
        };
        j(Ft, (L) => {
          a(n).is_verified && L(kt);
        });
      }
      var Ot = m(vt, 2), Tt = N(Ot), dt = m(Tt, 2), nt = m(Ot, 2);
      {
        var ut = (L) => {
          var K = hl(), ft = Et(K);
          let Nt;
          var ge = B(ft, !0), qt = m(ft, 2), Ae = B(qt, !0);
          H(() => {
            Nt = Qe(ft, 1, "ofx-bio", null, Nt, { "ofx-clamped": !a(f) }), F(ge, a(n).bio), F(Ae, a(f) ? "less" : "more");
          }), it("click", qt, () => b(f, !a(f))), k(L, K);
        };
        j(nt, (L) => {
          a(n).bio && L(ut);
        });
      }
      var yt = m(nt, 2);
      {
        var Ke = (L) => {
          var K = pl();
          At(K, 21, () => a(v), ([ft, Nt]) => ft, (ft, Nt) => {
            var ge = /* @__PURE__ */ St(() => Zn(a(Nt), 2));
            let qt = () => a(ge)[0], Ae = () => a(ge)[1];
            var le = _l(), bn = N(le), lr = B(bn, !0), Ca = m(bn);
            H(
              (Ra) => {
                F(lr, Ra), F(Ca, ` ${qt() ?? ""}`);
              },
              [() => Ae().toLocaleString()]
            ), k(ft, le);
          }), k(L, K);
        };
        j(yt, (L) => {
          a(v).length && L(Ke);
        });
      }
      var Xr = m(yt, 2), Vn = N(Xr);
      {
        var ma = (L) => {
          var K = gl(), ft = B(K, !0);
          H(() => F(ft, a(n).location)), k(L, K);
        };
        j(Vn, (L) => {
          a(n).location && L(ma);
        });
      }
      var Qr = m(Vn, 2);
      {
        var xa = (L) => {
          var K = bi(), ft = B(K, !0);
          H(
            (Nt) => {
              gt(K, "href", a(n).website), F(ft, Nt);
            },
            [() => a(n).website.replace(/^https?:\/\//, "")]
          ), k(L, K);
        };
        j(Qr, (L) => {
          a(n).website && L(xa);
        });
      }
      var ya = m(Qr, 2);
      {
        var wa = (L) => {
          var K = bi(), ft = B(K);
          H(() => {
            gt(K, "href", a(n).of_url), F(ft, `onlyfans.com/${a(n).of_username ?? ""}`);
          }), k(L, K);
        };
        j(ya, (L) => {
          a(n).of_url && L(wa);
        });
      }
      var ka = m(rt, 2);
      At(ka, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([L, K]) => L, (L, K) => {
        var ft = /* @__PURE__ */ St(() => Zn(K, 2));
        let Nt = () => a(ft)[0], ge = () => a(ft)[1];
        var qt = bl();
        let Ae;
        var le = B(qt, !0);
        H(() => {
          Ae = Qe(qt, 1, "ofx-tab", null, Ae, { "ofx-on": a(i) === Nt() }), gt(qt, "aria-selected", a(i) === Nt()), F(le, ge());
        }), it("click", qt, () => b(i, Nt(), !0)), k(L, qt);
      });
      var $r = m(T, 2);
      ul($r, {});
      var ti = m($r, 2), ei = m(N(ti), 2);
      At(ei, 17, () => a(n).sources, (L) => L.site, (L, K) => {
        var ft = xl();
        let Nt;
        var ge = N(ft), qt = m(ge);
        {
          var Ae = (le) => {
            var bn = ml(), lr = B(bn, !0);
            H(() => F(lr, (a(K).video_count ?? 0) + (a(K).image_count ?? 0))), k(le, bn);
          };
          j(qt, (le) => {
            (a(K).video_count != null || a(K).image_count != null) && le(Ae);
          });
        }
        H(
          (le) => {
            Nt = Qe(ft, 1, "ofx-btn ofx-outline", null, Nt, { "ofx-on": le }), F(ge, `${a(K).site ?? ""} `);
          },
          [() => a(o).has(a(K).site)]
        ), it("click", ft, () => d(a(K).site)), k(L, ft);
      });
      var Ea = m(ei, 2), ni = m(ti, 2);
      {
        var Sa = (L) => {
          var K = yl(), ft = B(K, !0);
          H(() => F(ft, a(y))), k(L, K);
        };
        j(ni, (L) => {
          a(y) && L(Sa);
        });
      }
      var ri = m(ni, 2);
      {
        var Aa = (L) => {
          var K = wl();
          k(L, K);
        };
        j(ri, (L) => {
          a(o).size === 0 && L(Aa);
        });
      }
      var ii = m(ri, 2);
      At(ii, 17, () => a(n).sources.filter((L) => a(o).has(L.site)), (L) => L.site, (L, K) => {
        Qo(L, {
          get handle() {
            return a(n).handle;
          },
          get site() {
            return a(K).site;
          },
          get kinds() {
            return a(s);
          },
          onplay: (ft) => g(ft),
          ongallery: p,
          onphoto: A
        });
      });
      var Ta = m(ii, 2);
      da(Ta, () => a(n).handle, (L) => {
        Nr(L, {
          get title() {
            return `More like ${a(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => io(a(n).handle),
          get navigate() {
            return e.navigate;
          }
        });
      }), H(() => {
        M = Qe(st, 1, "ofx-avatar", null, M, { "ofx-overlap": !!a(n).header_url }), F(xt, `${a(n).display_name ?? ""} `), F(Tt, `@${(a(n).of_username || a(n).handle) ?? ""} `), F(dt, ` ${a(n).source_count ?? ""}
                    ${a(n).source_count === 1 ? "site" : "sites"}`);
      }), it("click", Ea, () => e.navigate("/x/onlyfans")), k(x, h);
    }, q = (x) => {
      var h = El();
      k(x, h);
    };
    j(D, (x) => {
      a(r) ? x(lt) : a(n) ? x(W, 1) : x(q, -1);
    });
  }
  var J = m(D, 2);
  {
    var et = (x) => {
      var h = Sl(), T = N(h), Q = m(T, 2);
      H(() => gt(Q, "src", a(_).full)), it("click", T, () => b(_, null)), k(x, h);
    };
    j(J, (x) => {
      a(_) && x(et);
    });
  }
  var w = m(J, 2);
  {
    var S = (x) => {
      var h = Al(), T = N(h), Q = m(T, 2);
      H((at) => gt(Q, "src", at), [
        () => pi(a(l).site, a(l).video_id)
      ]), it("click", T, () => b(l, null)), k(x, h);
    };
    j(w, (x) => {
      a(l) && x(S);
    });
  }
  var R = m(w, 2);
  {
    var Y = (x) => {
      var h = Cl(), T = N(h), Q = m(T, 2);
      {
        var at = (st) => {
          var M = Tl(), O = Et(M), X = m(O, 2);
          it("click", O, () => E(-1)), it("click", X, () => E(1)), k(st, M);
        };
        j(Q, (st) => {
          a(c).count > 1 && st(at);
        });
      }
      var rt = m(Q, 2);
      H(
        (st) => {
          gt(rt, "src", st), gt(rt, "alt", `${a(c).gallery.title ?? ""} ${a(c).index + 1} of ${a(c).count ?? ""}`);
        },
        [
          () => uo(a(c).gallery.site, a(c).gallery.gallery_id, a(c).index)
        ]
      ), it("click", T, () => b(c, null)), k(x, h);
    };
    j(R, (x) => {
      a(c) && x(Y);
    });
  }
  k(t, I), se();
}
Ye(["click"]);
var Ml = /* @__PURE__ */ C('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function Ol(t, e) {
  ae(e, !0);
  let n = we(e, "path", 3, "");
  pa(e.api);
  const r = /* @__PURE__ */ St(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var i = Ml(), s = N(i), o = N(s);
  {
    var f = (c) => {
      var _ = pn(), y = Et(_);
      da(y, () => a(r), (v) => {
        Il(v, {
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
      }), k(c, _);
    }, l = (c) => {
      Ho(c, {
        get navigate() {
          return e.navigate;
        }
      });
    };
    j(o, (c) => {
      a(r) ? c(f) : c(l, -1);
    });
  }
  k(t, i), se();
}
var Nl = /* @__PURE__ */ C('<p class="ofx-settings-error">Could not read the scraper list.</p>'), Ll = /* @__PURE__ */ C('<p class="ofx-settings-error"><strong> </strong> </p>'), Pl = /* @__PURE__ */ C('<button type="button" class="ofx-btn">Sync</button>'), Dl = /* @__PURE__ */ C("<tr><td> </td><td> </td><td><code> </code></td><td> </td><td> </td><td><!></td></tr>"), Fl = /* @__PURE__ */ C(`<div class="ofx ofx-settings"><div class="ofx-settings-head"><p class="ofx-settings-title">Account index<!></p> <button type="button" class="ofx-btn"> </button></div> <p class="ofx-settings-title"> </p> <p class="ofx-settings-note">Loaded from <code> </code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.</p> <!> <!> <table class="ofx-settings-table"><thead><tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th><th>Index</th><th></th></tr></thead><tbody></tbody></table></div>`);
function Ul(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ U(null), r = /* @__PURE__ */ U(!1);
  async function i() {
    const h = await _o();
    b(r, h === null), h && b(n, h, !0);
  }
  let s = /* @__PURE__ */ U(null), o = /* @__PURE__ */ U(!1);
  const f = async () => {
    const h = await po();
    h && b(s, h, !0);
  };
  async function l(h) {
    b(o, !0);
    const T = await go(h);
    T && b(s, T, !0), b(o, !1);
  }
  _n(() => {
    i(), f();
    const h = setInterval(
      () => {
        var T;
        (T = a(s)) != null && T.running && f();
      },
      3e3
    );
    return () => clearInterval(h);
  });
  const c = /* @__PURE__ */ St(() => {
    var h;
    return Object.fromEntries((((h = a(s)) == null ? void 0 : h.sites) ?? []).map((T) => [T.site, T]));
  });
  function _(h) {
    const T = a(c)[h];
    return T ? T.state === "running" ? `running, page ${T.pages}, ${T.accounts_seen} seen` : T.state === "ok" ? `${T.accounts_seen} accounts (+${T.accounts_new}) ${d(T.finished_at)}` : T.state === "failed" ? `failed: ${T.error ?? ""}` : "never run" : "";
  }
  const y = /* @__PURE__ */ St(() => {
    var h;
    return ((h = a(n)) == null ? void 0 : h.scrapers) ?? [];
  }), v = /* @__PURE__ */ St(() => {
    var h;
    return Object.entries(((h = a(n)) == null ? void 0 : h.errors) ?? {});
  }), d = (h) => h ? h.slice(0, 10) : "";
  var g = Fl(), A = N(g), p = N(A), E = m(N(p));
  {
    var P = (h) => {
      var T = En();
      H(() => F(T, `: ${a(s).accounts ?? ""} accounts, ${a(s).accounts_with_avatar ?? ""} with a picture`)), k(h, T);
    };
    j(E, (h) => {
      a(s) && h(P);
    });
  }
  var I = m(p, 2), D = B(I, !0), lt = m(A, 2), W = B(lt), q = m(lt, 2), J = m(N(q)), et = B(J, !0), w = m(q, 2);
  {
    var S = (h) => {
      var T = Nl();
      k(h, T);
    };
    j(w, (h) => {
      a(r) && h(S);
    });
  }
  var R = m(w, 2);
  At(R, 17, () => a(v), ([h, T]) => h, (h, T) => {
    var Q = /* @__PURE__ */ St(() => Zn(a(T), 2));
    let at = () => a(Q)[0], rt = () => a(Q)[1];
    var st = Ll(), M = N(st), O = B(M, !0), X = m(M);
    H(() => {
      F(O, at()), F(X, `: ${rt() ?? ""}`);
    }), k(h, st);
  });
  var Y = m(R, 2), x = m(N(Y));
  At(x, 21, () => a(y), (h) => h.key, (h, T) => {
    var Q = Dl(), at = N(Q), rt = B(at), st = m(at), M = B(st, !0), O = m(st), X = N(O), vt = B(X, !0), xt = m(O), Ft = B(xt, !0), kt = m(xt), Ot = B(kt, !0), Tt = m(kt), dt = N(Tt);
    {
      var nt = (ut) => {
        var yt = Pl();
        H(() => {
          var Ke;
          return yt.disabled = a(o) || ((Ke = a(c)[a(T).key]) == null ? void 0 : Ke.state) === "running";
        }), it("click", yt, () => l([a(T).key])), k(ut, yt);
      };
      j(dt, (ut) => {
        a(T).indexes_accounts && ut(nt);
      });
    }
    H(
      (ut, yt) => {
        F(rt, `${a(T).name ?? ""}${a(T).indexes_accounts ? "" : " (no index)"}`), F(M, a(T).base_url), F(vt, a(T).version), F(Ft, ut), F(Ot, yt);
      },
      [
        () => d(a(T).updated),
        () => a(T).indexes_accounts ? _(a(T).key) : ""
      ]
    ), k(h, Q);
  }), H(() => {
    var h, T, Q;
    I.disabled = a(o) || ((h = a(s)) == null ? void 0 : h.running), F(D, (T = a(s)) != null && T.running ? "Syncing…" : "Sync all sites now"), F(W, `Installed scrapers (${a(y).length ?? ""})`), F(et, ((Q = a(n)) == null ? void 0 : Q.plugin_dir) ?? "…");
  }), it("click", I, () => l()), k(t, g), se();
}
Ye(["click"]);
function zl({ target: t, path: e, api: n, navigate: r, host: i }) {
  const s = Zt({ path: e ?? "", api: n, navigate: r, host: i }), o = ca(Ol, { target: t, props: s });
  return {
    update(f) {
      s.path = f ?? "";
    },
    destroy() {
      va(o);
    }
  };
}
const Vl = {
  settings({ target: t, api: e }) {
    pa(e);
    const n = ca(Ul, { target: t });
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
  zl as default,
  Vl as slots
};

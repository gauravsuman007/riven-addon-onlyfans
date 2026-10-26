var ja = Object.defineProperty;
var gi = (t) => {
  throw TypeError(t);
};
var Ha = (t, e, n) => e in t ? ja(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Gt = (t, e, n) => Ha(t, typeof e != "symbol" ? e + "" : e, n), Ir = (t, e, n) => e.has(t) || gi("Cannot " + n);
var u = (t, e, n) => (Ir(t, e, "read from private field"), n ? n.call(t) : e.get(t)), X = (t, e, n) => e.has(t) ? gi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Y = (t, e, n, r) => (Ir(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), at = (t, e, n) => (Ir(t, e, "access private method"), n);
const At = Symbol("uninitialized"), Ba = "http://www.w3.org/1999/xhtml", Pi = !1;
var Di = Array.isArray, za = Array.prototype.indexOf, fr = Array.prototype.includes, mr = Array.from, Fi = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Ui = Object.getOwnPropertyDescriptors, Va = Object.prototype, qa = Array.prototype, ei = Object.getPrototypeOf, bi = Object.isExtensible;
const Ga = () => {
};
function Ya(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ji() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a;
  });
  return { promise: n, resolve: t, reject: e };
}
function Dn(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Mt = 2, mn = 4, wr = 8, Hi = 1 << 24, ce = 16, ne = 32, Re = 64, Dr = 128, ni = 256, ee = 512, Tt = 1024, kt = 2048, de = 4096, jt = 8192, Jt = 16384, En = 32768, ur = 1 << 25, tn = 65536, cr = 1 << 17, Ka = 1 << 18, Sn = 1 << 19, Wa = 1 << 20, be = 1 << 25, en = 65536, vr = 1 << 21, cn = 1 << 22, Ue = 1 << 23, vn = Symbol("$state"), Bi = Symbol("component"), Za = Symbol(""), ar = Symbol("attributes"), Fr = Symbol("class"), Ur = Symbol("style"), In = Symbol("text"), Yn = new class extends Error {
  constructor() {
    super(...arguments);
    Gt(this, "name", "StaleReactionError");
    Gt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Oi;
const Ja = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Oi = globalThis.document) != null && Oi.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Xa() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Qa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function zi(t) {
  return t === this.v;
}
function Vi(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function qi(t) {
  return !Vi(t, this.v);
}
function $a() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ts(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function es(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ns() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rs(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function is() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function as() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ss() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function os() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ls() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let fs = !1, Ht = null;
function wn(t) {
  Ht = t;
}
function ie(t, e = !1, n) {
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
function ae(t) {
  var e = (
    /** @type {ComponentContext} */
    Ht
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      fa(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ht = e.p, ri(t);
}
function ri(t = {}) {
  return Fi(t, Bi, { value: !0 }), t;
}
function Gi() {
  return !0;
}
let fn = [];
function us() {
  var t = fn;
  fn = [], Ya(t);
}
function Te(t) {
  if (fn.length === 0) {
    var e = fn;
    queueMicrotask(() => {
      e === fn && us();
    });
  }
  fn.push(t);
}
const cs = -7169;
function bt(t, e) {
  t.f = t.f & cs | e;
}
function ii(t) {
  (t.f & ee) !== 0 || t.deps === null ? bt(t, Tt) : bt(t, de);
}
function Yi(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Mt) === 0 || (e.f & en) === 0 || (e.f ^= en, Yi(
        /** @type {Derived} */
        e.deps
      ));
}
function Ki(t, e, n) {
  (t.f & kt) !== 0 ? e.add(t) : (t.f & de) !== 0 && n.add(t), Yi(t.deps), bt(t, Tt);
}
function Kn(t) {
  var e = et, n = st;
  re(null), we(null);
  try {
    return t();
  } finally {
    re(e), we(n);
  }
}
function vs(t, e, n, r) {
  const a = ai;
  var s = t.filter((_) => !_.settled), o = e.map(a);
  if (n.length === 0 && s.length === 0) {
    r(o);
    return;
  }
  var l = (
    /** @type {Effect} */
    st
  ), f = ds(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function d(_) {
    if ((l.f & Jt) === 0) {
      f();
      try {
        r([...o, ..._]);
      } catch (m) {
        ge(m, l);
      }
      dr();
    }
  }
  var E = Wi();
  if (n.length === 0) {
    c.then(() => d([])).finally(E);
    return;
  }
  function h() {
    Promise.all(n.map((_) => /* @__PURE__ */ hs(_))).then(d).catch((_) => ge(_, l)).finally(E);
  }
  c ? c.then(() => {
    f(), h(), dr();
  }) : h();
}
function ds() {
  var t = (
    /** @type {Effect} */
    st
  ), e = et, n = Ht, r = (
    /** @type {Batch} */
    K
  );
  return function(s = !0) {
    we(t), re(e), wn(n), s && (t.f & Jt) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
function dr(t = !0) {
  we(null), re(null), wn(null), t && (K == null || K.deactivate());
}
function Wi() {
  var t = (
    /** @type {Effect} */
    st
  ), e = t.b, n = (
    /** @type {Batch} */
    K
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function ai(t) {
  var e = Mt | kt;
  return st !== null && (st.f |= Sn), {
    ctx: Ht,
    deps: null,
    effects: null,
    equals: zi,
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
const Rn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function hs(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    st
  );
  r === null && $a();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = rn(
    /** @type {V} */
    At
  ), o = !et, l = /* @__PURE__ */ new Set();
  return Rs(() => {
    var _, m;
    var f = (
      /** @type {Effect} */
      st
    ), c = ji();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (C) => {
        C !== Yn && c.reject(C);
      }).finally(dr);
    } catch (C) {
      c.reject(C), dr();
    }
    var d = (
      /** @type {Batch} */
      K
    );
    if (o) {
      if ((f.f & En) !== 0)
        var E = Wi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (_ = r.b) != null && _.is_rendered()
      )
        (m = d.async_deriveds.get(f)) == null || m.reject(Rn);
      else
        for (const C of l.values())
          C.reject(Rn);
      l.add(c), d.async_deriveds.set(f, c);
    }
    const h = (C, b = void 0) => {
      E == null || E(), l.delete(c), b !== Rn && (d.activate(), b ? (s.f |= Ue, yn(s, b)) : ((s.f & Ue) !== 0 && (s.f ^= Ue), yn(s, C)), d.deactivate());
    };
    c.promise.then(h, (C) => h(null, C || "unknown"));
  }), la(() => {
    for (const f of l)
      f.reject(Rn);
  }), new Promise((f) => {
    function c(d) {
      function E() {
        d === a ? f(s) : c(a);
      }
      d.then(E, E);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function wt(t) {
  const e = /* @__PURE__ */ ai(t);
  return _a(e), e;
}
// @__NO_SIDE_EFFECTS__
function _s(t) {
  const e = /* @__PURE__ */ ai(t);
  return e.equals = qi, e;
}
function ps(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      qt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function si(t) {
  var e, n = st, r = t.parent;
  if (!He && r !== null && t.v !== At && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (Jt | jt)) !== 0)
    return Xa(), t.v;
  we(r);
  try {
    t.f &= ~en, ps(t), e = xa(t);
  } finally {
    we(n);
  }
  return e;
}
function Zi(t) {
  var e = si(t);
  if (!t.equals(e) && (t.wv = ga(), (!(K != null && K.is_fork) || t.deps === null) && (K !== null ? (K.capture(t, e, !0), Fn == null || Fn.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    bt(t, Tt);
    return;
  }
  He || (Nt !== null ? (fi() || K != null && K.is_fork) && Nt.set(t, e) : ii(t));
}
function gs(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Kn(() => {
        n.ac.abort(Yn), n.ac = null;
      }), n.fn !== null && (n.teardown = Ga), jn(n, 0), ci(n));
}
function Ji(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && kn(e);
}
let Rr = null, on = null, K = null, Fn = null, Nt = null, jr = null, Mr = !1, un = null, sr = null;
var xi = 0;
let bs = 1;
var dn, Pe, Ke, hn, _n, pn, Ee, gn, Bt, Bn, Se, fe, he, bn, We, vt, Hr, Mn, Br, Xi, Qi, ln, xs, On;
const gr = class gr {
  constructor() {
    X(this, vt);
    Gt(this, "id", bs++);
    /** True as soon as `#process` was called */
    X(this, dn, !1);
    Gt(this, "linked", !0);
    /** @type {Batch | null} */
    X(this, Pe, null);
    /** @type {Batch | null} */
    X(this, Ke, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Gt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Gt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Gt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    X(this, hn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    X(this, _n, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    X(this, pn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    X(this, Ee, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    X(this, gn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    X(this, Bt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    X(this, Bn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    X(this, Se, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    X(this, fe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    X(this, he, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    X(this, bn, /* @__PURE__ */ new Set());
    Gt(this, "is_fork", !1);
    X(this, We, !1);
    on === null ? Rr = on = this : (Y(on, Ke, this), Y(this, Pe, on)), on = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    u(this, he).has(e) || u(this, he).set(e, { d: [], m: [] }), u(this, bn).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = u(this, he).get(e);
    if (r) {
      u(this, he).delete(e);
      for (var a of r.d)
        bt(a, kt), n(a);
      for (a of r.m)
        bt(a, de), n(a);
    }
    u(this, bn).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== At && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Ue) === 0 && (this.current.set(e, [n, r]), Nt == null || Nt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    K = this;
  }
  deactivate() {
    K = null, Nt = null;
  }
  flush() {
    try {
      Mr = !0, K = this, at(this, vt, Mn).call(this);
    } finally {
      xi = 0, jr = null, un = null, sr = null, Mr = !1, K = null, Nt = null, xe.clear();
    }
  }
  discard() {
    var e;
    for (const n of u(this, _n)) n(this);
    u(this, _n).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Rn);
    at(this, vt, On).call(this), (e = u(this, gn)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    u(this, Bn).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (Y(this, pn, u(this, pn) + 1), e) {
      let r = u(this, Ee).get(n) ?? 0;
      u(this, Ee).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (Y(this, pn, u(this, pn) - 1), e) {
      let r = u(this, Ee).get(n) ?? 0;
      r === 1 ? u(this, Ee).delete(n) : u(this, Ee).set(n, r - 1);
    }
    u(this, We) || (Y(this, We, !0), Te(() => {
      Y(this, We, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, n) {
    for (const r of e)
      u(this, Se).add(r);
    for (const r of n)
      u(this, fe).add(r);
    e.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    u(this, hn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, _n).add(e);
  }
  settled() {
    return (u(this, gn) ?? Y(this, gn, ji())).promise;
  }
  static ensure() {
    if (K === null) {
      const e = K = new gr();
      Mr || Te(() => {
        u(e, dn) || e.flush();
      });
    }
    return K;
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
    if (jr = e, (a = e.b) != null && a.is_pending && (e.f & (mn | wr | Hi)) !== 0 && (e.f & En) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var n = e; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (un !== null && n === st && (et === null || (et.f & Mt) === 0))
        return;
      if ((r & (Re | ne)) !== 0) {
        if ((r & Tt) === 0)
          return;
        n.f ^= Tt;
      }
    }
    u(this, Bt).push(n);
  }
};
dn = new WeakMap(), Pe = new WeakMap(), Ke = new WeakMap(), hn = new WeakMap(), _n = new WeakMap(), pn = new WeakMap(), Ee = new WeakMap(), gn = new WeakMap(), Bt = new WeakMap(), Bn = new WeakMap(), Se = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), bn = new WeakMap(), We = new WeakMap(), vt = new WeakSet(), Hr = function() {
  if (this.is_fork) return !0;
  for (const r of u(this, Ee).keys()) {
    for (var e = r, n = !1; e.parent !== null; ) {
      if (u(this, he).has(e)) {
        n = !0;
        break;
      }
      e = e.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, Mn = function() {
  var f, c, d, E;
  Y(this, dn, !0), xi++ > 1e3 && (at(this, vt, On).call(this), ms());
  for (const h of u(this, Se))
    u(this, fe).delete(h), bt(h, kt), this.schedule(h);
  for (const h of u(this, fe))
    bt(h, de), this.schedule(h);
  const e = u(this, Bt);
  Y(this, Bt, []), this.apply();
  var n = un = [], r = [], a = sr = [];
  for (const h of e)
    try {
      at(this, vt, Br).call(this, h, n, r);
    } catch (_) {
      throw ea(h), at(this, vt, Hr).call(this) || this.discard(), _;
    }
  if (K = null, a.length > 0) {
    var s = gr.ensure();
    for (const h of a)
      s.schedule(h);
  }
  if (un = null, sr = null, at(this, vt, Hr).call(this)) {
    at(this, vt, ln).call(this, r), at(this, vt, ln).call(this, n);
    for (const [h, _] of u(this, he))
      ta(h, _);
    a.length > 0 && /** @type {unknown} */
    at(f = K, vt, Mn).call(f);
    return;
  }
  const o = at(this, vt, Xi).call(this);
  if (o) {
    at(this, vt, ln).call(this, r), at(this, vt, ln).call(this, n), at(c = o, vt, Qi).call(c, this);
    return;
  }
  u(this, Se).clear(), u(this, fe).clear();
  for (const h of u(this, hn)) h(this);
  u(this, hn).clear(), Fn = this, mi(r), mi(n), Fn = null, (d = u(this, gn)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    K
  );
  if (u(this, pn) === 0 && (u(this, Bt).length === 0 || l !== null) && at(this, vt, On).call(this), u(this, Bt).length > 0)
    if (l !== null) {
      const h = l;
      u(h, Bt).push(...u(this, Bt).filter((_) => !u(h, Bt).includes(_)));
    } else
      l = this;
  l !== null && (xe.clear(), at(E = l, vt, Mn).call(E));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Br = function(e, n, r) {
  e.f ^= Tt;
  for (var a = e.first; a !== null; ) {
    var s = a.f, o = (s & (ne | Re)) !== 0, l = o && (s & Tt) !== 0, f = l || (s & jt) !== 0 || u(this, he).has(a);
    if (!f && a.fn !== null) {
      o ? a.f ^= Tt : (s & mn) !== 0 ? n.push(a) : Jn(a) && ((s & ce) !== 0 && u(this, fe).add(a), kn(a));
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
}, Xi = function() {
  for (var e = u(this, Pe); e !== null; ) {
    if (!e.is_fork) {
      for (const [n, [, r]] of this.current)
        if (e.current.has(n) && !r)
          return e;
    }
    e = u(e, Pe);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Qi = function(e) {
  var r;
  for (const [a, s] of e.current)
    !this.previous.has(a) && e.previous.has(a) && this.previous.set(a, e.previous.get(a)), this.current.set(a, s);
  for (const [a, s] of e.async_deriveds) {
    const o = this.async_deriveds.get(a);
    o && s.promise.then(o.resolve).catch(o.reject);
  }
  e.async_deriveds.clear(), this.transfer_effects(u(e, Se), u(e, fe));
  const n = (a) => {
    var s = a.reactions;
    if (s !== null && !((a.f & Mt) !== 0 && (a.f & (kt | de)) === 0))
      for (const f of s) {
        var o = f.f;
        if ((o & Mt) !== 0)
          n(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          o & (cn | ce) && !this.async_deriveds.has(l) && (u(this, fe).delete(l), bt(l, kt), this.schedule(l));
        }
      }
  };
  for (const a of this.current.keys())
    n(a);
  this.oncommit(() => e.discard()), at(r = e, vt, On).call(r), K = this, at(this, vt, Mn).call(this);
}, /**
 * @param {Effect[]} effects
 */
ln = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Ki(e[n], u(this, Se), u(this, fe));
}, xs = function() {
  var E;
  for (let h = Rr; h !== null; h = u(h, Ke)) {
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
    if (!(!u(h, dn) || a.length === 0)) {
      var s = a.filter((_) => !this.current.has(_));
      if (s.length === 0)
        e && h.discard();
      else if (n.length > 0) {
        if (e)
          for (const _ of u(this, bn))
            h.unskip_effect(_, (m) => {
              var C;
              (m.f & (ce | cn)) !== 0 ? h.schedule(m) : at(C = h, vt, ln).call(C, [m]);
            });
        h.activate();
        var o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var f of n)
          $i(f, s, o, l);
        l = /* @__PURE__ */ new Map();
        var c = [...h.current].filter(([_, m]) => {
          const C = this.current.get(_);
          return C ? C[0] !== m[0] || C[1] !== m[1] : !0;
        }).map(([_]) => _);
        if (c.length > 0)
          for (const _ of u(this, Bn))
            (_.f & (Jt | jt | cr)) === 0 && oi(_, c, l) && ((_.f & (cn | ce)) !== 0 ? (bt(_, kt), h.schedule(_)) : u(h, Se).add(_));
        if (u(h, Bt).length > 0 && !u(h, We)) {
          h.apply();
          for (var d of u(h, Bt))
            at(E = h, vt, Br).call(E, d, [], []);
          Y(h, Bt, []);
        }
        h.deactivate();
      }
    }
  }
}, On = function() {
  if (this.linked) {
    var e = u(this, Pe), n = u(this, Ke);
    e === null ? Rr = n : Y(e, Ke, n), n === null ? on = e : Y(n, Pe, e), this.linked = !1;
  }
};
let nn = gr;
function ms() {
  try {
    is();
  } catch (t) {
    ge(t, jr);
  }
}
let le = null;
function mi(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Jt | jt)) === 0 && Jn(r) && (le = /* @__PURE__ */ new Set(), kn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && va(r), (le == null ? void 0 : le.size) > 0)) {
        xe.clear();
        for (const a of le) {
          if ((a.f & (Jt | jt)) !== 0) continue;
          const s = [a];
          let o = a.parent;
          for (; o !== null; )
            le.has(o) && (le.delete(o), s.push(o)), o = o.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & (Jt | jt)) === 0 && kn(f);
          }
        }
        le.clear();
      }
    }
    le = null;
  }
}
function $i(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const a of t.reactions) {
      const s = a.f;
      (s & Mt) !== 0 ? $i(
        /** @type {Derived} */
        a,
        e,
        n,
        r
      ) : (s & (cn | ce)) !== 0 && (s & kt) === 0 && oi(a, e, r) && (bt(a, kt), li(
        /** @type {Effect} */
        a
      ));
    }
}
function oi(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const a of t.deps) {
      if (fr.call(e, a))
        return !0;
      if ((a.f & Mt) !== 0 && oi(
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
function li(t) {
  K.schedule(t);
}
function ta(t, e) {
  if (!((t.f & ne) !== 0 && (t.f & Tt) !== 0)) {
    (t.f & kt) !== 0 ? e.d.push(t) : (t.f & de) !== 0 && e.m.push(t), bt(t, Tt);
    for (var n = t.first; n !== null; )
      ta(n, e), n = n.next;
  }
}
function ea(t) {
  bt(t, Tt);
  for (var e = t.first; e !== null; )
    ea(e), e = e.next;
}
let hr = /* @__PURE__ */ new Set();
const xe = /* @__PURE__ */ new Map();
let na = !1;
function rn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: zi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  const n = rn(t);
  return _a(n), n;
}
// @__NO_SIDE_EFFECTS__
function ws(t, e = !1, n = !0) {
  const r = rn(t);
  return e || (r.equals = qi), r;
}
function x(t, e, n = !1) {
  et !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ve || (et.f & cr) !== 0) && Gi() && (et.f & (Mt | ce | cn | cr)) !== 0 && (me === null || !me.has(t)) && os();
  let r = n ? Vt(e) : e;
  return yn(t, r, sr);
}
function yn(t, e, n = null) {
  if (!t.equals(e)) {
    He ? xe.set(t, e) : xe.has(t) || xe.set(t, t.v);
    var r = nn.ensure();
    if (r.capture(t, e), (t.f & Mt) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & kt) !== 0 && si(a), Nt === null && ii(a);
    }
    t.wv = ga(), ra(t, kt, n), st !== null && (st.f & Tt) !== 0 && (st.f & (ne | Re)) === 0 && (Xt === null ? Ns([t]) : Xt.push(t)), !r.is_fork && hr.size > 0 && !na && ys();
  }
  return e;
}
function ys() {
  na = !1;
  for (const t of hr) {
    (t.f & Tt) !== 0 && bt(t, de);
    let e;
    try {
      e = Jn(t);
    } catch {
      e = !0;
    }
    e && kn(t);
  }
  hr.clear();
}
function Un(t) {
  x(t, t.v + 1);
}
function ra(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var a = r.length, s = 0; s < a; s++) {
      var o = r[s], l = o.f, f = (l & kt) === 0;
      if (f && bt(o, e), (l & cr) !== 0)
        hr.add(
          /** @type {Effect} */
          o
        );
      else if ((l & Mt) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        Nt == null || Nt.delete(c), (l & en) === 0 && (l & ee && (st === null || (st.f & vr) === 0) && (o.f |= en), ra(c, de, n));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          o
        );
        (l & ce) !== 0 && le !== null && le.add(d), n !== null ? n.push(d) : li(d);
      }
    }
}
function Vt(t) {
  if (typeof t != "object" || t === null || vn in t || Bi in t)
    return t;
  const e = ei(t);
  if (e !== Va && e !== qa)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Di(t), a = /* @__PURE__ */ H(0), s = $e, o = (l) => {
    if ($e === s)
      return l();
    var f = et, c = $e;
    re(null), yi(s);
    var d = l();
    return re(f), yi(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && as();
        var d = n.get(f);
        return d === void 0 ? o(() => {
          var E = /* @__PURE__ */ H(c.value);
          return n.set(f, E), E;
        }) : x(d, c.value, !0), !0;
      },
      deleteProperty(l, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in l) {
            const d = o(() => /* @__PURE__ */ H(At));
            n.set(f, d), Un(a);
          }
        } else
          x(c, At), Un(a);
        return !0;
      },
      get(l, f, c) {
        var _;
        if (f === vn)
          return t;
        var d = n.get(f), E = f in l;
        if (d === void 0 && (!E || (_ = Pn(l, f)) != null && _.writable) && (d = o(() => {
          var m = Vt(E ? l[f] : At), C = /* @__PURE__ */ H(m);
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
          var E = n.get(f), h = E == null ? void 0 : E.v;
          if (E !== void 0 && h !== At)
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
        if (f === vn)
          return !0;
        var c = n.get(f), d = c !== void 0 && c.v !== At || Reflect.has(l, f);
        if (c !== void 0 || st !== null && (!d || (h = Pn(l, f)) != null && h.writable)) {
          c === void 0 && (c = o(() => {
            var _ = d ? Vt(l[f]) : At, m = /* @__PURE__ */ H(_);
            return m;
          }), n.set(f, c));
          var E = i(c);
          if (E === At)
            return !1;
        }
        return d;
      },
      set(l, f, c, d) {
        var U;
        var E = n.get(f), h = f in l;
        if (r && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          E.v; _ += 1) {
            var m = n.get(_ + "");
            m !== void 0 ? x(m, At) : _ in l && (m = o(() => /* @__PURE__ */ H(At)), n.set(_ + "", m));
          }
        if (E === void 0)
          (!h || (U = Pn(l, f)) != null && U.writable) && (E = o(() => /* @__PURE__ */ H(void 0)), x(E, Vt(c)), n.set(f, E));
        else {
          h = E.v !== At;
          var C = o(() => Vt(c));
          x(E, C);
        }
        var b = Reflect.getOwnPropertyDescriptor(l, f);
        if (b != null && b.set && b.set.call(d, c), !h) {
          if (r && typeof f == "string") {
            var R = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(f);
            Number.isInteger(F) && F >= R.v && x(R, F + 1);
          }
          Un(a);
        }
        return !0;
      },
      ownKeys(l) {
        i(a);
        var f = Reflect.ownKeys(l).filter((E) => {
          var h = n.get(E);
          return h === void 0 || h.v !== At;
        });
        for (var [c, d] of n)
          d.v !== At && !(c in l) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        ss();
      }
    }
  );
}
var zr, ia, aa, sa;
function ks() {
  if (zr === void 0) {
    zr = window, ia = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    aa = Pn(e, "firstChild").get, sa = Pn(e, "nextSibling").get, bi(t) && (t[Fr] = void 0, t[ar] = null, t[Ur] = void 0, t.__e = void 0), bi(n) && (n[In] = void 0);
  }
}
function Ie(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function an(t) {
  return (
    /** @type {TemplateNode | null} */
    aa.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  return (
    /** @type {TemplateNode | null} */
    sa.call(t)
  );
}
function N(t, e) {
  return /* @__PURE__ */ an(t);
}
function Ct(t, e = !1) {
  {
    var n = /* @__PURE__ */ an(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wn(n) : n;
  }
}
function V(t, e = !1) {
  return /* @__PURE__ */ an(t);
}
function y(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wn(r);
  return r;
}
function Es(t) {
  t.textContent = "";
}
function oa() {
  return !1;
}
function Ss(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  );
}
function As(t) {
  var e = st;
  if (e === null)
    return et.f |= Ue, t;
  if ((e.f & En) === 0 && (e.f & mn) === 0)
    throw t;
  ge(t, e);
}
function ge(t, e) {
  if (!(e !== null && (e.f & Jt) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Dr) !== 0 && (e.f & (Jt | ur)) === 0) {
        if ((e.f & En) === 0)
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
function Ts(t) {
  st === null && (et === null && rs(), ns()), He && es();
}
function Cs(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Me(t, e) {
  var n = st;
  n !== null && (n.f & jt) !== 0 && (t |= jt);
  var r = {
    ctx: Ht,
    deps: null,
    nodes: null,
    f: t | kt | ee,
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
  K == null || K.register_created_effect(r);
  var a = r;
  if ((t & mn) !== 0)
    un !== null ? un.push(r) : nn.ensure().schedule(r);
  else if (e !== null) {
    try {
      kn(r);
    } catch (o) {
      throw qt(r), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Sn) === 0 && (a = a.first, (t & ce) !== 0 && (t & tn) !== 0 && a !== null && (a.f |= tn));
  }
  if (a !== null && (a.parent = n, n !== null && Cs(a, n), et !== null && (et.f & Mt) !== 0 && (t & Re) === 0)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return r;
}
function fi() {
  return et !== null && !ve;
}
function la(t) {
  const e = Me(wr, null);
  return bt(e, Tt), e.teardown = t, e;
}
function je(t) {
  Ts();
  var e = (
    /** @type {Effect} */
    st.f
  ), n = !et && (e & ne) !== 0 && Ht !== null && !Ht.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ht
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return fa(t);
}
function fa(t) {
  return Me(mn | Wa, t);
}
function Is(t) {
  nn.ensure();
  const e = Me(Re | Sn, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? Qe(e, () => {
      qt(e), r(void 0);
    }) : (qt(e), r(void 0));
  });
}
function ua(t) {
  return Me(mn, t);
}
function Rs(t) {
  return Me(cn | Sn, t);
}
function ui(t, e = 0) {
  return Me(wr | e, t);
}
function j(t, e = [], n = [], r = []) {
  vs(r, e, n, (a) => {
    Me(wr, () => {
      t(...a.map(i));
    });
  });
}
function Zn(t, e = 0) {
  var n = Me(ce | e, t);
  return n;
}
function te(t) {
  return Me(ne | Sn, t);
}
function ca(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = He, r = et;
    wi(!0), re(null);
    try {
      e.call(null);
    } catch (a) {
      ge(a, t.parent);
    } finally {
      wi(n), re(r);
    }
  }
}
function ci(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && Kn(() => {
      a.abort(Yn);
    });
    var r = n.next;
    (n.f & Re) !== 0 ? n.parent = null : qt(n, e), n = r;
  }
}
function Ms(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & ne) === 0 && qt(e), e = n;
  }
}
function qt(t, e = !0) {
  var n = !1;
  (e || (t.f & Ka) !== 0) && t.nodes !== null && t.nodes.end !== null && (Os(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= ur, ci(t, e && !n), jn(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ca(t), t.f ^= ur, t.f |= Jt;
  var a = t.parent;
  a !== null && a.first !== null && va(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function Os(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Wn(t);
    t.remove(), t = n;
  }
}
function va(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Qe(t, e, n = !0) {
  var r = [];
  t.f |= ni, da(t, r, !0);
  var a = () => {
    n && qt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || a();
    for (var l of r)
      l.out(o);
  } else
    a();
}
function da(t, e, n) {
  if ((t.f & jt) === 0) {
    t.f ^= jt;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && e.push(l);
    for (var a = t.first; a !== null; ) {
      var s = a.next;
      if ((a.f & Re) === 0) {
        var o = (a.f & tn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & ne) !== 0 && (t.f & ce) !== 0;
        da(a, e, o ? n : !1);
      }
      a = s;
    }
  }
}
function _r(t) {
  t.f &= ~ni, ha(t, !0);
}
function ha(t, e) {
  if ((t.f & ni) === 0 && (t.f & jt) !== 0) {
    t.f ^= jt, (t.f & Tt) === 0 && (bt(t, kt), nn.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, a = (n.f & tn) !== 0 || (n.f & ne) !== 0;
      ha(n, a ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function vi(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var a = n === r ? null : /* @__PURE__ */ Wn(n);
      e.append(n), n = a;
    }
}
let or = !1, He = !1;
function wi(t) {
  He = t;
}
let et = null, ve = !1;
function re(t) {
  et = t;
}
let st = null;
function we(t) {
  st = t;
}
let me = null;
function _a(t) {
  et !== null && (me ?? (me = /* @__PURE__ */ new Set())).add(t);
}
let zt = null, Zt = 0, Xt = null;
function Ns(t) {
  Xt = t;
}
let pa = 1, Ge = 0, $e = Ge;
function yi(t) {
  $e = t;
}
function ga() {
  return ++pa;
}
function Jn(t) {
  var e = t.f;
  if ((e & kt) !== 0)
    return !0;
  if (e & Mt && (t.f &= ~en), (e & de) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, a = 0; a < r; a++) {
      var s = n[a];
      if (Jn(
        /** @type {Derived} */
        s
      ) && Zi(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Nt === null && bt(t, Tt);
  }
  return !1;
}
function ba(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(me !== null && me.has(t)))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & Mt) !== 0 ? ba(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? bt(s, kt) : (s.f & Tt) !== 0 && bt(s, de), li(
        /** @type {Effect} */
        s
      ));
    }
}
function xa(t) {
  var e = zt, n = Zt, r = Xt, a = et, s = me, o = Ht, l = ve, f = $e, c = t.f;
  zt = /** @type {null | Value[]} */
  null, Zt = 0, Xt = null, et = (c & (ne | Re)) === 0 ? t : null, me = null, wn(t.ctx), ve = !1, $e = ++Ge, t.ac !== null && (Kn(() => {
    t.ac.abort(Yn);
  }), t.ac = null);
  try {
    t.f |= vr;
    var d = (
      /** @type {Function} */
      t.fn
    ), E = d();
    t.f |= En;
    var h = ki(t);
    if (Gi() && Xt !== null && !ve && h !== null && (t.f & (Mt | de | kt)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      Xt.length; _++)
        ba(
          Xt[_],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (Ge++, a.deps !== null)
        for (let m = 0; m < n; m += 1)
          a.deps[m].rv = Ge;
      if (e !== null)
        for (const m of e)
          m.rv = Ge;
      Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
      Xt));
    }
    return (t.f & Ue) !== 0 && (t.f ^= Ue), E;
  } catch (m) {
    return ki(t), As(m);
  } finally {
    t.f ^= vr, zt = e, Zt = n, Xt = r, et = a, me = s, wn(o), ve = l, $e = f;
  }
}
function ki(t) {
  var a;
  var e = t.deps, n = K == null ? void 0 : K.is_fork;
  if (zt !== null) {
    var r;
    if (n || jn(t, Zt), e !== null && Zt > 0)
      for (e.length = Zt + zt.length, r = 0; r < zt.length; r++)
        e[Zt + r] = zt[r];
    else
      t.deps = e = zt;
    if (fi() && (t.f & ee) !== 0)
      for (r = Zt; r < e.length; r++)
        ((a = e[r]).reactions ?? (a.reactions = [])).push(t);
  } else !n && e !== null && Zt < e.length && (jn(t, Zt), e.length = Zt);
  return e;
}
function Ls(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = za.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  if (n === null && (e.f & Mt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !fr.call(zt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & ee) !== 0 && (s.f ^= ee, s.f &= ~en), s.v !== At && ii(s), s.ac !== null && Kn(() => {
      s.ac.abort(Yn), s.ac = null, bt(s, kt);
    }), gs(s), jn(s, 0);
  }
}
function jn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ls(t, n[r]);
}
function kn(t) {
  var e = t.f;
  if ((e & Jt) === 0) {
    bt(t, Tt);
    var n = st, r = or;
    st = t, or = (e & (ne | Re)) === 0;
    try {
      (e & (ce | Hi)) !== 0 ? Ms(t) : ci(t), ca(t);
      var a = xa(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = pa;
      var s;
      Pi && fs && (t.f & kt) !== 0 && t.deps;
    } finally {
      or = r, st = n;
    }
  }
}
function i(t) {
  var e = t.f, n = (e & Mt) !== 0;
  if (et !== null && !ve) {
    var r = st !== null && (st.f & Jt) !== 0;
    if (!r && (me === null || !me.has(t))) {
      var a = et.deps;
      if ((et.f & vr) !== 0)
        t.rv < Ge && (t.rv = Ge, zt === null && a !== null && a[Zt] === t ? Zt++ : zt === null ? zt = [t] : zt.push(t));
      else {
        et.deps ?? (et.deps = []), fr.call(et.deps, t) || et.deps.push(t);
        var s = t.reactions;
        s === null ? t.reactions = [et] : fr.call(s, et) || s.push(et);
      }
    }
  }
  if (He && xe.has(t))
    return xe.get(t);
  if (n) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (He) {
      var l = o.v;
      return ((o.f & Tt) === 0 && o.reactions !== null || wa(o)) && (l = si(o)), xe.set(o, l), l;
    }
    var f = (o.f & ee) === 0 && !ve && et !== null && (or || (et.f & ee) !== 0), c = (o.f & En) === 0;
    Jn(o) && (f && (o.f |= ee), Zi(o)), f && !c && (Ji(o), ma(o));
  }
  if (Nt != null && Nt.has(t))
    return Nt.get(t);
  if ((t.f & Ue) !== 0)
    throw t.v;
  return t.v;
}
function ma(t) {
  if (t.f |= ee, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Mt) !== 0 && (e.f & ee) === 0 && (Ji(
        /** @type {Derived} */
        e
      ), ma(
        /** @type {Derived} */
        e
      ));
}
function wa(t) {
  if (t.v === At) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (xe.has(e) || (e.f & Mt) !== 0 && wa(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Xn(t) {
  var e = ve;
  try {
    return ve = !0, t();
  } finally {
    ve = e;
  }
}
function Ps(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (vn in t)
      Vr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && vn in n && Vr(n);
      }
  }
}
function Vr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Vr(t[r], e);
      } catch {
      }
    const n = ei(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ui(n);
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
const Ye = Symbol("events"), ya = /* @__PURE__ */ new Set(), qr = /* @__PURE__ */ new Set();
function Ds(t, e, n, r = {}) {
  function a(s) {
    if (r.capture || Yr.call(e, s), !s.cancelBubble)
      return Kn(() => n == null ? void 0 : n.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Te(() => {
    e.addEventListener(t, a, r);
  }) : e.addEventListener(t, a, r), a;
}
function Gr(t, e, n, r, a) {
  var s = { capture: r, passive: a }, o = Ds(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && la(() => {
    e.removeEventListener(t, o, s);
  });
}
function lt(t, e, n) {
  (e[Ye] ?? (e[Ye] = {}))[t] = n;
}
function ze(t) {
  for (var e = 0; e < t.length; e++)
    ya.add(t[e]);
  for (var n of qr)
    n(t);
}
let Or = null, Nr = !1;
function Yr(t) {
  var C, b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, a = ((C = t.composedPath) == null ? void 0 : C.call(t)) || [], s = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  Or = t, Nr || (Nr = !0, setTimeout(() => {
    Nr = !1, Or = null;
  }));
  var o = 0, l = Or === t && t[Ye];
  if (l) {
    var f = a.indexOf(l);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[Ye] = e;
      return;
    }
    var c = a.indexOf(e);
    if (c === -1)
      return;
    f <= c && (o = f);
  }
  if (s = /** @type {Element} */
  a[o] || t.target, s !== e) {
    Fi(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = et, E = st;
    re(null), we(null);
    try {
      for (var h, _ = []; s !== null && s !== e; ) {
        try {
          var m = (b = s[Ye]) == null ? void 0 : b[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch (R) {
          h ? _.push(R) : h = R;
        }
        if (t.cancelBubble) break;
        o++, s = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (h) {
        for (let R of _)
          queueMicrotask(() => {
            throw R;
          });
        throw h;
      }
    } finally {
      t[Ye] = e, delete t.currentTarget, re(d), we(E);
    }
  }
}
var Ni;
const Lr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ni = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ni.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Fs(t) {
  return (
    /** @type {string} */
    (Lr == null ? void 0 : Lr.createHTML(t)) ?? t
  );
}
function ka(t) {
  var e = Ss("template");
  return e.innerHTML = Fs(t.replaceAll("<!>", "<!---->")), e.content;
}
function Hn(t, e) {
  var n = (
    /** @type {Effect} */
    st
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, a, s = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ka(s ? t : "<!>" + t), n || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ an(a)));
    var o = (
      /** @type {TemplateNode} */
      r || ia ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ an(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Hn(l, f);
    } else
      Hn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Us(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), a = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        ka(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ an(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ an(l);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Hn(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function js(t, e) {
  return /* @__PURE__ */ Us(t, e, "svg");
}
function Fe(t = "") {
  {
    var e = Ie(t + "");
    return Hn(e, e), e;
  }
}
function Be() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ie();
  return t.append(e, n), Hn(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Hs = ["touchstart", "touchmove"];
function Bs(t) {
  return Hs.includes(t);
}
function zs(t) {
  let e = 0, n = rn(0), r;
  return () => {
    fi() && (i(n), ui(() => (e === 0 && (r = Xn(() => t(() => Un(n)))), e += 1, () => {
      Te(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Un(n));
      });
    })));
  };
}
var Vs = tn | Sn;
function qs(t, e, n, r) {
  new Gs(t, e, n, r);
}
var Qt, ti, $t, Ze, Ft, Yt, Ut, Kt, _e, Je, De, xn, zn, Vn, Ae, br, _t, Ys, Ks, Kr, Ws, Wr, Nn, lr, Zr, Jr;
class Gs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, a) {
    X(this, _t);
    /** @type {Boundary | null} */
    Gt(this, "parent");
    Gt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Gt(this, "transform_error");
    /** @type {TemplateNode} */
    X(this, Qt);
    /** @type {TemplateNode | null} */
    X(this, ti, null);
    /** @type {BoundaryProps} */
    X(this, $t);
    /** @type {((anchor: Node) => void)} */
    X(this, Ze);
    /** @type {Effect} */
    X(this, Ft);
    /** @type {Effect | null} */
    X(this, Yt, null);
    /** @type {Effect | null} */
    X(this, Ut, null);
    /** @type {Effect | null} */
    X(this, Kt, null);
    /** @type {DocumentFragment | null} */
    X(this, _e, null);
    X(this, Je, 0);
    X(this, De, 0);
    X(this, xn, !1);
    /** @type {Set<Effect>} */
    X(this, zn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    X(this, Vn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    X(this, Ae, null);
    X(this, br, zs(() => (Y(this, Ae, rn(u(this, Je))), () => {
      Y(this, Ae, null);
    })));
    var s;
    Y(this, Qt, e), Y(this, $t, n), Y(this, Ze, (o) => {
      var l = (
        /** @type {Effect} */
        st
      );
      l.b = this, l.f |= Dr, r(o);
    }), this.parent = /** @type {Effect} */
    st.b, this.transform_error = a ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((o) => o), Y(this, Ft, Zn(() => {
      at(this, _t, Wr).call(this);
    }, Vs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ki(e, u(this, zn), u(this, Vn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!u(this, $t).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    at(this, _t, Zr).call(this, e, n), Y(this, Je, u(this, Je) + e), !(!u(this, Ae) || u(this, xn)) && (Y(this, xn, !0), Te(() => {
      Y(this, xn, !1), u(this, Ae) && yn(u(this, Ae), u(this, Je));
    }));
  }
  get_effect_pending() {
    return u(this, br).call(this), i(
      /** @type {Source<number>} */
      u(this, Ae)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!u(this, $t).onerror && !u(this, $t).failed)
      throw e;
    K != null && K.is_fork ? (u(this, Yt) && K.skip_effect(u(this, Yt)), u(this, Ut) && K.skip_effect(u(this, Ut)), u(this, Kt) && K.skip_effect(u(this, Kt)), K.oncommit(() => {
      at(this, _t, Jr).call(this, e);
    })) : at(this, _t, Jr).call(this, e);
  }
}
Qt = new WeakMap(), ti = new WeakMap(), $t = new WeakMap(), Ze = new WeakMap(), Ft = new WeakMap(), Yt = new WeakMap(), Ut = new WeakMap(), Kt = new WeakMap(), _e = new WeakMap(), Je = new WeakMap(), De = new WeakMap(), xn = new WeakMap(), zn = new WeakMap(), Vn = new WeakMap(), Ae = new WeakMap(), br = new WeakMap(), _t = new WeakSet(), Ys = function() {
  try {
    Y(this, Yt, te(() => u(this, Ze).call(this, u(this, Qt))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ks = function(e) {
  const n = u(this, $t).failed, { reset: r, invoke_onerror: a } = at(this, _t, Kr).call(this, e);
  Te(a), n && Y(this, Kt, te(() => {
    n(
      u(this, Qt),
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
Kr = function(e) {
  var n = !1, r = !1;
  const a = () => {
    if (n) {
      Qa();
      return;
    }
    n = !0, r && ls(), u(this, Kt) !== null && Qe(u(this, Kt), () => {
      Y(this, Kt, null);
    }), at(this, _t, lr).call(this, () => {
      at(this, _t, Wr).call(this);
    });
  };
  return { reset: a, invoke_onerror: () => {
    var o, l;
    try {
      r = !0, (l = (o = u(this, $t)).onerror) == null || l.call(o, e, a), r = !1;
    } catch (f) {
      ge(f, u(this, Ft) && u(this, Ft).parent);
    }
  } };
}, Ws = function() {
  const e = u(this, $t).pending;
  e && (this.is_pending = !0, Y(this, Ut, te(() => e(u(this, Qt)))), Te(() => {
    var n = Y(this, _e, document.createDocumentFragment()), r = Ie(), a = !1;
    if (n.append(r), Y(this, Yt, at(this, _t, lr).call(this, () => {
      try {
        return te(() => u(this, Ze).call(this, r));
      } catch (s) {
        try {
          this.error(s), a = !0;
        } catch (o) {
          ge(o, u(this, Ft).parent);
        }
        return null;
      }
    })), u(this, Yt) === null) {
      Y(this, _e, null), a && at(this, _t, Nn).call(
        this,
        /** @type {Batch} */
        K
      );
      return;
    }
    u(this, De) === 0 && (u(this, Qt).before(n), Y(this, _e, null), Qe(
      /** @type {Effect} */
      u(this, Ut),
      () => {
        Y(this, Ut, null);
      }
    ), at(this, _t, Nn).call(
      this,
      /** @type {Batch} */
      K
    ));
  }));
}, Wr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Y(this, De, 0), Y(this, Je, 0), Y(this, Yt, te(() => {
      u(this, Ze).call(this, u(this, Qt));
    })), u(this, De) > 0) {
      var e = Y(this, _e, document.createDocumentFragment());
      vi(u(this, Yt), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        u(this, $t).pending
      );
      Y(this, Ut, te(() => n(u(this, Qt))));
    } else
      at(this, _t, Nn).call(
        this,
        /** @type {Batch} */
        K
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Nn = function(e) {
  this.is_pending = !1, e.transfer_effects(u(this, zn), u(this, Vn));
}, /**
 * @template T
 * @param {() => T} fn
 */
lr = function(e) {
  var n = st, r = et, a = Ht;
  we(u(this, Ft)), re(u(this, Ft)), wn(u(this, Ft).ctx);
  try {
    return nn.ensure(), e();
  } finally {
    we(n), re(r), wn(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Zr = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && at(r = this.parent, _t, Zr).call(r, e, n);
    return;
  }
  Y(this, De, u(this, De) + e), u(this, De) === 0 && (at(this, _t, Nn).call(this, n), u(this, Ut) && Qe(u(this, Ut), () => {
    Y(this, Ut, null);
  }), u(this, _e) && (u(this, Qt).before(u(this, _e)), Y(this, _e, null)));
}, /**
 * @param {unknown} error
 */
Jr = function(e) {
  u(this, Yt) && (qt(u(this, Yt)), Y(this, Yt, null)), u(this, Ut) && (qt(u(this, Ut)), Y(this, Ut, null)), u(this, Kt) && (qt(u(this, Kt)), Y(this, Kt, null));
  let n = u(this, $t).failed;
  const r = (a) => {
    const { reset: s, invoke_onerror: o } = at(this, _t, Kr).call(this, a);
    o(), n && Y(this, Kt, at(this, _t, lr).call(this, () => {
      try {
        return te(() => {
          var l = (
            /** @type {Effect} */
            st
          );
          l.b = this, l.f |= Dr, n(
            u(this, Qt),
            () => a,
            () => s
          );
        });
      } catch (l) {
        return ge(
          l,
          /** @type {Effect} */
          u(this, Ft).parent
        ), null;
      }
    }));
  };
  Te(() => {
    var a;
    try {
      a = this.transform_error(e);
    } catch (s) {
      ge(s, u(this, Ft) && u(this, Ft).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      r,
      /** @param {unknown} e */
      (s) => ge(s, u(this, Ft) && u(this, Ft).parent)
    ) : r(a);
  });
};
function D(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[In] ?? (t[In] = t.nodeValue)) && (t[In] = n, t.nodeValue = `${n}`);
}
function Ea(t, e) {
  return Zs(t, e);
}
const ir = /* @__PURE__ */ new Map();
function Zs(t, { target: e, anchor: n, props: r = {}, events: a, context: s, intro: o = !0, transformError: l }) {
  ks();
  var f = void 0, c = Is(() => {
    var d = n ?? e.appendChild(Ie());
    qs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (_) => {
        ie({});
        var m = (
          /** @type {ComponentContext} */
          Ht
        );
        s && (m.c = s), a && (r.$$events = a), f = t(_, r) || ri(), ae();
      },
      l
    );
    var E = /* @__PURE__ */ new Set(), h = (_) => {
      for (var m = 0; m < _.length; m++) {
        var C = _[m];
        if (!E.has(C)) {
          E.add(C);
          var b = Bs(C);
          for (const U of [e, document]) {
            var R = ir.get(U);
            R === void 0 && (R = /* @__PURE__ */ new Map(), ir.set(U, R));
            var F = R.get(C);
            F === void 0 ? (U.addEventListener(C, Yr, { passive: b }), R.set(C, 1)) : R.set(C, F + 1);
          }
        }
      }
    };
    return h(mr(ya)), qr.add(h), () => {
      var b;
      for (var _ of E)
        for (const R of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            ir.get(R)
          ), C = (
            /** @type {number} */
            m.get(_)
          );
          --C == 0 ? (R.removeEventListener(_, Yr), m.delete(_), m.size === 0 && ir.delete(R)) : m.set(_, C);
        }
      qr.delete(h), d !== n && ((b = d.parentNode) == null || b.removeChild(d));
    };
  });
  return Xr.set(f, c), f;
}
let Xr = /* @__PURE__ */ new WeakMap();
function Sa(t, e) {
  const n = Xr.get(t);
  return n ? (Xr.delete(t), n(e)) : Promise.resolve();
}
var ue, pe, Wt, Xe, qn, Gn, xr;
class di {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    Gt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    X(this, ue, /* @__PURE__ */ new Map());
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
    X(this, pe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    X(this, Wt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    X(this, Xe, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    X(this, qn, !0);
    /**
     * @param {Batch} batch
     */
    X(this, Gn, (e) => {
      if (u(this, ue).has(e)) {
        var n = (
          /** @type {Key} */
          u(this, ue).get(e)
        ), r = u(this, pe).get(n);
        if (r)
          _r(r), u(this, Xe).delete(n);
        else {
          var a = u(this, Wt).get(n);
          a && (_r(a.effect), u(this, pe).set(n, a.effect), u(this, Wt).delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), r = a.effect);
        }
        for (const [s, o] of u(this, ue)) {
          if (u(this, ue).delete(s), s === e)
            break;
          const l = u(this, Wt).get(o);
          l && (qt(l.effect), u(this, Wt).delete(o));
        }
        for (const [s, o] of u(this, pe)) {
          if (s === n || u(this, Xe).has(s)) continue;
          const l = () => {
            if (Array.from(u(this, ue).values()).includes(s)) {
              var c = document.createDocumentFragment();
              vi(o, c), c.append(Ie()), u(this, Wt).set(s, { effect: o, fragment: c });
            } else
              qt(o);
            u(this, Xe).delete(s), u(this, pe).delete(s);
          };
          u(this, qn) || !r ? (u(this, Xe).add(s), Qe(o, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    X(this, xr, (e) => {
      u(this, ue).delete(e);
      const n = Array.from(u(this, ue).values());
      for (const [r, a] of u(this, Wt))
        n.includes(r) || (qt(a.effect), u(this, Wt).delete(r));
    });
    this.anchor = e, Y(this, qn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      K
    ), a = oa();
    if (n && !u(this, pe).has(e) && !u(this, Wt).has(e))
      if (a) {
        var s = document.createDocumentFragment(), o = Ie();
        s.append(o), u(this, Wt).set(e, {
          effect: te(() => n(o)),
          fragment: s
        });
      } else
        u(this, pe).set(
          e,
          te(() => n(this.anchor))
        );
    if (u(this, ue).set(r, e), a) {
      for (const [l, f] of u(this, pe))
        l === e ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [l, f] of u(this, Wt))
        l === e ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(u(this, Gn)), r.ondiscard(u(this, xr));
    } else
      u(this, Gn).call(this, r);
  }
}
ue = new WeakMap(), pe = new WeakMap(), Wt = new WeakMap(), Xe = new WeakMap(), qn = new WeakMap(), Gn = new WeakMap(), xr = new WeakMap();
function Js(t, e, ...n) {
  var r = new di(t);
  Zn(() => {
    const a = e() ?? null;
    r.ensure(a, a && ((s) => a(s, ...n)));
  }, tn);
}
function L(t, e, n = !1) {
  var r = new di(t), a = n ? tn : 0;
  function s(o, l) {
    r.ensure(o, l);
  }
  Zn(() => {
    var o = !1;
    e((l, f = 0) => {
      o = !0, s(f, l);
    }), o || s(-1, null);
  }, a);
}
const Xs = Symbol("NaN");
function Aa(t, e, n) {
  var r = new di(t);
  Zn(() => {
    var a = e();
    a !== a && (a = /** @type {any} */
    Xs), r.ensure(a, n);
  });
}
function yr(t, e) {
  return e;
}
function Qs(t, e, n) {
  for (var r = [], a = e.length, s, o = e.length, l = 0; l < a; l++) {
    let E = e[l];
    Qe(
      E,
      () => {
        if (s) {
          if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Qr(t, mr(s.done)), h.delete(s), h.size === 0 && (t.outrogroups = null);
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
      Es(d), d.append(c), t.items.clear();
    }
    Qr(t, e, !f);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Qr(t, e, n = !0) {
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
      s.f |= be;
      const o = document.createDocumentFragment();
      vi(s, o);
    } else
      qt(e[a], n);
  }
}
var Ei;
function Et(t, e, n, r, a, s = null) {
  var o = t, l = /* @__PURE__ */ new Map(), f = (e & 4) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Ie());
  }
  var d = null, E = /* @__PURE__ */ _s(() => {
    var U = n();
    return (
      /** @type {V[]} */
      Di(U) ? U : U == null ? [] : mr(U)
    );
  }), h, _ = /* @__PURE__ */ new Map(), m = !0;
  function C(U) {
    (F.effect.f & Jt) === 0 && (F.pending.delete(U), F.fallback = d, $s(F, h, o, e, r), d !== null && (h.length === 0 ? (d.f & be) === 0 ? _r(d) : (d.f ^= be, Ln(d, null, o)) : Qe(d, () => {
      d = null;
    })));
  }
  function b(U) {
    F.pending.delete(U);
  }
  var R = Zn(() => {
    h = /** @type {V[]} */
    i(E);
    for (var U = h.length, B = /* @__PURE__ */ new Set(), ft = (
      /** @type {Batch} */
      K
    ), J = oa(), G = 0; G < U; G += 1) {
      var $ = h[G], tt = r($, G), S = m ? null : l.get(tt);
      S ? (S.v && yn(S.v, $), S.i && yn(S.i, G), J && ft.unskip_effect(S.e)) : (S = to(
        l,
        m ? o : Ei ?? (Ei = Ie()),
        $,
        tt,
        G,
        a,
        e,
        n
      ), m || (S.e.f |= be), l.set(tt, S)), B.add(tt);
    }
    if (U === 0 && s && !d && (m ? d = te(() => s(o)) : (d = te(() => s(Ei ?? (Ei = Ie()))), d.f |= be)), U > B.size && ts(), !m)
      if (_.set(ft, B), J) {
        for (const [T, O] of l)
          B.has(T) || ft.skip_effect(O.e);
        ft.oncommit(C), ft.ondiscard(b);
      } else
        C(ft);
    i(E);
  }), F = { effect: R, items: l, pending: _, outrogroups: null, fallback: d };
  m = !1;
}
function Cn(t) {
  for (; t !== null && (t.f & ne) === 0; )
    t = t.next;
  return t;
}
function $s(t, e, n, r, a) {
  var S, T, O, W, nt, v, k, Z, p;
  var s = (r & 8) !== 0, o = e.length, l = t.items, f = Cn(t.effect.first), c, d = null, E, h = [], _ = [], m, C, b, R;
  if (s)
    for (R = 0; R < o; R += 1)
      m = e[R], C = a(m, R), b = /** @type {EachItem} */
      l.get(C).e, (b.f & be) === 0 && ((T = (S = b.nodes) == null ? void 0 : S.a) == null || T.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(b));
  for (R = 0; R < o; R += 1) {
    if (m = e[R], C = a(m, R), b = /** @type {EachItem} */
    l.get(C).e, t.outrogroups !== null)
      for (const g of t.outrogroups)
        g.pending.delete(b), g.done.delete(b);
    if ((b.f & jt) !== 0 && (_r(b), s && ((W = (O = b.nodes) == null ? void 0 : O.a) == null || W.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(b))), (b.f & be) !== 0)
      if (b.f ^= be, b === f)
        Ln(b, null, n);
      else {
        var F = d ? d.next : f;
        b === t.effect.last && (t.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), Ne(t, d, b), Ne(t, b, F), Ln(b, F, n), d = b, h = [], _ = [], f = Cn(d.next);
        continue;
      }
    if (b !== f) {
      if (c !== void 0 && c.has(b)) {
        if (h.length < _.length) {
          var U = _[0], B;
          d = U.prev;
          var ft = h[0], J = h[h.length - 1];
          for (B = 0; B < h.length; B += 1)
            Ln(h[B], U, n);
          for (B = 0; B < _.length; B += 1)
            c.delete(_[B]);
          Ne(t, ft.prev, J.next), Ne(t, d, ft), Ne(t, J, U), f = U, d = J, R -= 1, h = [], _ = [];
        } else
          c.delete(b), Ln(b, f, n), Ne(t, b.prev, b.next), Ne(t, b, d === null ? t.effect.first : d.next), Ne(t, d, b), d = b;
        continue;
      }
      for (h = [], _ = []; f !== null && f !== b; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Cn(f.next);
      if (f === null)
        continue;
    }
    (b.f & be) === 0 && h.push(b), d = b, f = Cn(b.next);
  }
  if (t.outrogroups !== null) {
    for (const g of t.outrogroups)
      g.pending.size === 0 && (Qr(t, mr(g.done)), (nt = t.outrogroups) == null || nt.delete(g));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var G = [];
    if (c !== void 0)
      for (b of c)
        (b.f & jt) === 0 && G.push(b);
    for (; f !== null; )
      (f.f & jt) === 0 && f !== t.fallback && G.push(f), f = Cn(f.next);
    var $ = G.length;
    if ($ > 0) {
      var tt = (r & 4) !== 0 && o === 0 ? n : null;
      if (s) {
        for (R = 0; R < $; R += 1)
          (k = (v = G[R].nodes) == null ? void 0 : v.a) == null || k.measure();
        for (R = 0; R < $; R += 1)
          (p = (Z = G[R].nodes) == null ? void 0 : Z.a) == null || p.fix();
      }
      Qs(t, G, tt);
    }
  }
  s && Te(() => {
    var g, P;
    if (E !== void 0)
      for (b of E)
        (P = (g = b.nodes) == null ? void 0 : g.a) == null || P.apply();
  });
}
function to(t, e, n, r, a, s, o, l) {
  var f = (o & 1) !== 0 ? (o & 16) === 0 ? /* @__PURE__ */ ws(n, !1, !1) : rn(n) : null, c = (o & 2) !== 0 ? rn(a) : null;
  return {
    v: f,
    i: c,
    e: te(() => (s(e, f ?? n, c ?? a, l), () => {
      t.delete(r);
    }))
  };
}
function Ln(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, a = t.nodes.end, s = e && (e.f & be) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wn(r)
      );
      if (s.before(r), r === a)
        return;
      r = o;
    }
}
function Ne(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function hi(t, e, n) {
  ua(() => {
    var r = Xn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var a = !1, s = (
        /** @type {any} */
        {}
      );
      ui(() => {
        var o = n();
        Ps(o), a && Vi(s, o) && (s = o, r.update(o));
      }), a = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const Si = [...` 	
\r\f \v\uFEFF`];
function eo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var a of Object.keys(n))
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var s = a.length, o = 0; (o = r.indexOf(a, o)) >= 0; ) {
          var l = o + s;
          (o === 0 || Si.includes(r[o - 1])) && (l === r.length || Si.includes(r[l])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(l + 1) : o = l;
        }
  }
  return r === "" ? null : r;
}
function no(t, e) {
  return t == null ? null : String(t);
}
function Le(t, e, n, r, a, s) {
  var o = (
    /** @type {any} */
    t[Fr]
  );
  if (o !== n || o === void 0) {
    var l = eo(n, r, s);
    l == null ? t.removeAttribute("class") : t.className = l, t[Fr] = n;
  } else if (s && a !== s)
    for (var f in s) {
      var c = !!s[f];
      (a == null || c !== !!a[f]) && t.classList.toggle(f, c);
    }
  return s;
}
function Ta(t, e, n, r) {
  var a = (
    /** @type {any} */
    t[Ur]
  );
  if (a !== e) {
    var s = no(e);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t[Ur] = e;
  }
  return r;
}
const ro = Symbol("is custom element"), io = Symbol("is html"), ao = Ja ? "progress" : "PROGRESS";
function so(t, e) {
  var n = Ca(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== ao) || (t.value = e ?? "");
}
function mt(t, e, n, r) {
  var a = Ca(t);
  a[e] !== (a[e] = n) && (e === "loading" && (t[Za] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && oo(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function Ca(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[ar] ?? (t[ar] = {
      [ro]: t.nodeName.includes("-"),
      [io]: t.namespaceURI === Ba
    })
  );
}
var Ai = /* @__PURE__ */ new Map();
function oo(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ai.get(e);
  if (n) return n;
  Ai.set(e, n = /* @__PURE__ */ new Set());
  for (var r, a = t, s = Element.prototype; s !== a; ) {
    r = Ui(a);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    a = ei(a);
  }
  return n;
}
function Pr(t, e) {
  return t === e || (t == null ? void 0 : t[vn]) === e;
}
function Ia(t = ri(), e, n, r) {
  var a = (
    /** @type {ComponentContext} */
    Ht.r
  ), s = (
    /** @type {Effect} */
    st
  );
  return ua(() => {
    var o, l;
    return ui(() => {
      o = l, l = [], Xn(() => {
        Pr(n(...l), t) || (e(t, ...l), o && Pr(n(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = s;
      for (; f !== a && f.parent !== null && f.parent.f & ur; )
        f = f.parent;
      const c = () => {
        l && Pr(n(...l), t) && e(null, ...l);
      }, d = f.teardown;
      f.teardown = () => {
        c(), d == null || d();
      };
    };
  }), t;
}
function Ce(t, e, n, r) {
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
const lo = "5";
var Li;
typeof window < "u" && ((Li = window.__svelte ?? (window.__svelte = {})).v ?? (Li.v = /* @__PURE__ */ new Set())).add(lo);
let An = "";
function Ra(t) {
  An = t;
}
async function se(t, e) {
  const n = new URL(`${An}${t}`, window.location.origin);
  for (const [r, a] of Object.entries(e ?? {}))
    a != null && a !== "" && n.searchParams.set(r, String(a));
  try {
    const r = await fetch(n);
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}
const Ma = (t) => se("/accounts", t), fo = () => se("/rails"), uo = (t) => se(`/accounts/${encodeURIComponent(t)}`), co = (t) => se(`/accounts/${encodeURIComponent(t)}/similar`), vo = (t, { offset: e = 0, limit: n = 30, kinds: r = "all" } = {}) => se(`/accounts/${encodeURIComponent(t)}/feed`, { offset: e, limit: n, kinds: r }), ho = (t, e, n) => se(`/accounts/${encodeURIComponent(t)}/videos`, { site: e, page: n }), _o = (t, e, n) => se(`/accounts/${encodeURIComponent(t)}/galleries`, { site: e, page: n }), po = (t, e, n) => se(`/accounts/${encodeURIComponent(t)}/images`, { site: e, page: n }), Oa = (t, e) => se("/videoinfo", { site: t, video_id: e }), go = (t, e) => se(`/galleries/${encodeURIComponent(t)}/${encodeURIComponent(e)}`), bo = (t, e, n) => `${An}/image?site=${encodeURIComponent(t)}&gallery_id=${encodeURIComponent(e)}&index=${n}`, pr = (t, e, n, r, a = !1) => `${An}/photo?site=${encodeURIComponent(t)}&handle=${encodeURIComponent(e)}&page=${n}&index=${r}${a ? "&thumb=true" : ""}`, Ti = (t, e, n = 0) => `${An}/stream?site=${encodeURIComponent(t)}&video_id=${encodeURIComponent(e)}&index=${n}`, _i = "/api/v1/rails/x/onlyfans";
async function xo() {
  try {
    const t = await fetch(_i);
    return t.ok ? (await t.json()).rails ?? [] : [];
  } catch {
    return [];
  }
}
async function mo() {
  try {
    return (await fetch(_i, { method: "DELETE" })).ok;
  } catch {
    return !1;
  }
}
async function wo(t) {
  try {
    return (await fetch(_i, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(t)
    })).ok;
  } catch {
    return !1;
  }
}
const yo = () => se("/plugins"), ko = () => se("/sync/status");
async function Eo(t) {
  const e = new URL(`${An}/sync`, window.location.origin);
  for (const n of t ?? []) e.searchParams.append("sites", n);
  try {
    const n = await fetch(e, { method: "POST" });
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
var So = /* @__PURE__ */ A('<img loading="lazy"/>'), Ao = /* @__PURE__ */ A('<span class="ofx-initials"> </span>');
function kr(t, e) {
  ie(e, !0);
  let n = Ce(e, "src", 3, null), r = Ce(e, "alt", 3, ""), a = Ce(e, "name", 3, ""), s = Ce(e, "onmeasure", 3, null), o = /* @__PURE__ */ H(!1);
  const l = /* @__PURE__ */ wt(() => (a() || r() || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((_) => {
    var m;
    return ((m = _[0]) == null ? void 0 : m.toUpperCase()) ?? "";
  }).join(""));
  function f(_) {
    const m = _.currentTarget;
    s() && m.naturalWidth && m.naturalHeight && s()(m.naturalWidth / m.naturalHeight);
  }
  var c = Be(), d = Ct(c);
  {
    var E = (_) => {
      var m = So();
      j(() => {
        mt(m, "src", n()), mt(m, "alt", r());
      }), Gr("load", m, f), Gr("error", m, () => x(o, !0)), w(_, m);
    }, h = (_) => {
      var m = Ao(), C = V(m, !0);
      j(() => D(C, i(l))), w(_, m);
    };
    L(d, (_) => {
      n() && !i(o) ? _(E) : _(h, -1);
    });
  }
  w(t, c), ae();
}
var To = /* @__PURE__ */ A('<a class="ofx-card"><figure><!></figure> <p> </p> <small> </small></a>');
function Na(t, e) {
  ie(e, !0);
  var n = To(), r = N(n), a = N(r);
  kr(a, {
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
  var s = y(r, 2), o = V(s, !0), l = y(s, 2), f = V(l);
  j(() => {
    mt(n, "href", `/x/onlyfans/${e.account.handle ?? ""}`), mt(s, "title", e.account.display_name), D(o, e.account.display_name), D(f, `${e.account.source_count ?? ""}
        ${e.account.source_count === 1 ? "site" : "sites"}`);
  }), lt("click", n, (c) => {
    c.metaKey || c.ctrlKey || c.shiftKey || c.button !== 0 || (c.preventDefault(), e.navigate(`/x/onlyfans/${e.account.handle}`));
  }), w(t, n), ae();
}
ze(["click"]);
var Co = /* @__PURE__ */ A('<div class="ofx-rail-item"><div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div></div>'), Io = /* @__PURE__ */ A('<section class="ofx-rail"><h2> </h2> <div class="ofx-rail-strip"></div></section>'), Ro = /* @__PURE__ */ A('<span class="ofx-note"> </span>'), Mo = /* @__PURE__ */ A('<div class="ofx-rail-actions"><!></div>'), Oo = /* @__PURE__ */ A('<div class="ofx-rail-item"><!></div>'), No = /* @__PURE__ */ A('<section class="ofx-rail"><div class="ofx-rail-head"><h2> </h2> <!> <!></div> <div class="ofx-rail-strip"></div></section>');
function $r(t, e) {
  ie(e, !0);
  let n = Ce(e, "note", 3, ""), r = Ce(e, "order", 3, null), a = Ce(e, "fetcher", 3, null), s = Ce(e, "size", 3, 20), o = /* @__PURE__ */ H(Vt([])), l = /* @__PURE__ */ H(!0), f = /* @__PURE__ */ H(0);
  function c() {
    x(f, i(f) + 1);
  }
  je(() => {
    const C = r(), b = a(), R = s();
    i(f);
    let F = !1;
    x(l, !0);
    const U = b ? b() : Ma({ order: C, limit: R, offset: 0 });
    return Promise.resolve(U).then((B) => {
      F || (x(o, Array.isArray(B) ? B : (B == null ? void 0 : B.items) ?? [], !0), x(l, !1));
    }), () => {
      F = !0;
    };
  });
  var d = { reload: c }, E = Be(), h = Ct(E);
  {
    var _ = (C) => {
      var b = Io(), R = N(b), F = V(R, !0), U = y(R, 2);
      Et(U, 20, () => Array(8), yr, (B, ft) => {
        var J = Co();
        w(B, J);
      }), j(() => D(F, e.title)), w(C, b);
    }, m = (C) => {
      var b = No(), R = N(b), F = N(R), U = V(F, !0), B = y(F, 2);
      {
        var ft = (tt) => {
          var S = Ro(), T = V(S, !0);
          j(() => D(T, n())), w(tt, S);
        };
        L(B, (tt) => {
          n() && tt(ft);
        });
      }
      var J = y(B, 2);
      {
        var G = (tt) => {
          var S = Mo(), T = N(S);
          Js(T, () => e.actions), w(tt, S);
        };
        L(J, (tt) => {
          e.actions && tt(G);
        });
      }
      var $ = y(R, 2);
      Et($, 21, () => i(o), (tt) => tt.handle, (tt, S) => {
        var T = Oo(), O = N(T);
        Na(O, {
          get account() {
            return i(S);
          },
          get navigate() {
            return e.navigate;
          }
        }), w(tt, T);
      }), j(() => D(U, e.title)), w(C, b);
    };
    L(h, (C) => {
      i(l) ? C(_) : i(o).length && C(m, 1);
    });
  }
  return w(t, E), ae(d);
}
var Lo = /* @__PURE__ */ A('<li><span class="ofx-drawer-name"> </span> <button class="ofx-btn ofx-outline" type="button"> </button> <button class="ofx-btn ofx-outline" type="button">↑</button> <button class="ofx-btn ofx-outline" type="button">↓</button></li>'), Po = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), Do = /* @__PURE__ */ A(`<div class="ofx-drawer"><div class="ofx-drawer-head"><strong>Rows on this page</strong> <button class="ofx-btn ofx-outline" type="button">Close</button></div> <p class="ofx-note">Drawn top to bottom. A hidden row keeps its place, so turning it back on does not drop
            it to the bottom.</p> <ul class="ofx-drawer-list"></ul> <!> <div class="ofx-drawer-foot"><button class="ofx-btn ofx-outline ofx-drawer-reset" type="button">Reset</button> <button class="ofx-btn ofx-outline" type="button">Cancel</button> <button class="ofx-btn" type="button"> </button></div></div>`), Fo = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Edit rows</button> <!>', 1);
function Uo(t, e) {
  ie(e, !0);
  let n = /* @__PURE__ */ H(!1), r = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(Vt([]));
  async function o() {
    const b = await xo(), R = new Map(e.rails.map((B) => [B.key, B])), F = /* @__PURE__ */ new Set(), U = [];
    for (const B of b)
      F.add(B.key), R.has(B.key) && U.push({ ...B });
    for (const B of e.rails)
      F.has(B.key) || U.push({ key: B.key, enabled: !0 });
    x(s, U, !0), x(a, null), x(n, !0);
  }
  function l(b, R) {
    const F = b + R;
    if (F < 0 || F >= i(s).length) return;
    const U = [...i(s)];
    [U[b], U[F]] = [U[F], U[b]], x(s, U, !0);
  }
  function f(b) {
    x(s, i(s).map((R, F) => F === b ? { ...R, enabled: !R.enabled } : R), !0);
  }
  function c(b) {
    var R;
    return ((R = e.rails.find((F) => F.key === b)) == null ? void 0 : R.title) ?? b;
  }
  async function d() {
    var b;
    x(r, !0), x(a, null), await mo() ? (await ((b = e.onsaved) == null ? void 0 : b.call(e)), x(n, !1)) : x(a, "Could not reset."), x(r, !1);
  }
  async function E() {
    var b;
    x(r, !0), x(a, null), await wo(i(s)) ? (await ((b = e.onsaved) == null ? void 0 : b.call(e)), x(n, !1)) : x(a, "Could not save. Your changes are still here."), x(r, !1);
  }
  var h = Fo(), _ = Ct(h), m = y(_, 2);
  {
    var C = (b) => {
      var R = Do(), F = N(R), U = y(N(F), 2), B = y(F, 4);
      Et(B, 23, () => i(s), (O) => O.key, (O, W, nt) => {
        var v = Lo();
        let k;
        var Z = N(v), p = V(Z, !0), g = y(Z, 2), P = V(g, !0), I = y(g, 2), M = y(I, 2);
        j(
          (q, rt, pt, yt) => {
            k = Le(v, 1, "", null, k, { "ofx-off": !i(W).enabled }), D(p, q), mt(g, "aria-label", rt), D(P, i(W).enabled ? "Shown" : "Hidden"), I.disabled = i(nt) === 0, mt(I, "aria-label", pt), M.disabled = i(nt) === i(s).length - 1, mt(M, "aria-label", yt);
          },
          [
            () => c(i(W).key),
            () => i(W).enabled ? `Hide ${c(i(W).key)}` : `Show ${c(i(W).key)}`,
            () => `Move ${c(i(W).key)} up`,
            () => `Move ${c(i(W).key)} down`
          ]
        ), lt("click", g, () => f(i(nt))), lt("click", I, () => l(i(nt), -1)), lt("click", M, () => l(i(nt), 1)), w(O, v);
      });
      var ft = y(B, 2);
      {
        var J = (O) => {
          var W = Po(), nt = V(W, !0);
          j(() => D(nt, i(a))), w(O, W);
        };
        L(ft, (O) => {
          i(a) && O(J);
        });
      }
      var G = y(ft, 2), $ = N(G), tt = y($, 2), S = y(tt, 2), T = V(S, !0);
      j(() => {
        $.disabled = i(r), S.disabled = i(r), D(T, i(r) ? "Saving…" : "Save");
      }), lt("click", U, () => x(n, !1)), lt("click", $, d), lt("click", tt, () => x(n, !1)), lt("click", S, E), w(b, R);
    };
    L(m, (b) => {
      i(n) && b(C);
    });
  }
  lt("click", _, o), w(t, h), ae();
}
ze(["click"]);
var jo = /* @__PURE__ */ A(`<p class="ofx-error">Could not load accounts. The add-on's API may be unavailable.</p>`), Ho = /* @__PURE__ */ A('<div class="ofx-controls"><button class="ofx-btn ofx-outline" type="button">← Back to recommendations</button></div>'), Bo = /* @__PURE__ */ A('<div class="ofx-skeleton" style="aspect-ratio:1/1;border-radius:9999px"></div>'), zo = /* @__PURE__ */ A('<div class="ofx-sentinel"></div>'), Vo = /* @__PURE__ */ A('<!> <div class="ofx-grid"><!> <!></div> <!>', 1), qo = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button">Shuffle</button> <button class="ofx-btn ofx-outline" type="button">Show all</button>', 1), Go = /* @__PURE__ */ A('<div class="ofx-controls"><!></div> <!> <!>', 1), Yo = /* @__PURE__ */ A('<h1>OnlyFans</h1> <p class="ofx-sub"><!></p> <div class="ofx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="search" placeholder="Search performers" aria-label="Search performers"/></div> <!> <!>', 1);
function Ko(t, e) {
  ie(e, !0);
  const n = 60, r = 20;
  let a = /* @__PURE__ */ H(Vt([])), s = /* @__PURE__ */ H(0), o = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(""), c = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(""), E, h = /* @__PURE__ */ H(null), _ = /* @__PURE__ */ H(Vt([]));
  async function m() {
    const I = await fo();
    x(_, Array.isArray(I) ? I : [], !0);
  }
  je(() => {
    m();
  });
  const C = /* @__PURE__ */ wt(() => i(f).trim()), b = /* @__PURE__ */ wt(() => i(C) !== "" || i(c)), R = /* @__PURE__ */ wt(() => i(a).length < i(s));
  async function F(I, M) {
    x(o, !0);
    const q = await Ma({ search: I, limit: n, offset: M });
    if (I !== i(f).trim()) {
      x(o, !1);
      return;
    }
    q ? (x(a, M === 0 ? q.items : [...i(a), ...q.items], !0), x(s, q.total, !0), x(d, I, !0), x(l, !1)) : x(l, !0), x(o, !1);
  }
  function U(I) {
    x(f, I.currentTarget.value, !0), clearTimeout(E), E = setTimeout(() => F(i(f).trim(), 0), 250);
  }
  function B() {
    x(c, !0), F("", 0);
  }
  function ft() {
    x(c, !1), x(f, ""), x(a, [], !0), x(s, 0), x(d, "");
  }
  function J(I) {
    const M = new IntersectionObserver(
      (q) => {
        var rt;
        (rt = q[0]) != null && rt.isIntersecting && i(R) && !i(o) && F(i(d), i(a).length);
      },
      { rootMargin: "600px" }
    );
    return M.observe(I), { destroy: () => M.disconnect() };
  }
  var G = Yo(), $ = y(Ct(G), 2), tt = N($);
  {
    var S = (I) => {
      var M = Fe();
      j(
        (q, rt) => D(M, `${q ?? ""} of ${rt ?? ""}
        ${i(d) ? `matching “${i(d)}”` : "accounts"}`),
        [
          () => i(a).length.toLocaleString(),
          () => i(s).toLocaleString()
        ]
      ), w(I, M);
    }, T = (I) => {
      var M = Fe("loading…");
      w(I, M);
    }, O = (I) => {
      var M = Fe("nothing found");
      w(I, M);
    }, W = (I) => {
      var M = Fe("performers, gathered from the archive sites");
      w(I, M);
    };
    L(tt, (I) => {
      i(b) && i(s) ? I(S) : i(b) && i(o) ? I(T, 1) : i(b) ? I(O, 2) : I(W, -1);
    });
  }
  var nt = y($, 2), v = y(N(nt), 2), k = y(nt, 2);
  {
    var Z = (I) => {
      var M = jo();
      w(I, M);
    };
    L(k, (I) => {
      i(l) && I(Z);
    });
  }
  var p = y(k, 2);
  {
    var g = (I) => {
      var M = Vo(), q = Ct(M);
      {
        var rt = (ot) => {
          var ct = Ho(), St = V(ct);
          lt("click", St, ft), w(ot, ct);
        };
        L(q, (ot) => {
          i(c) && !i(C) && ot(rt);
        });
      }
      var pt = y(q, 2), yt = N(pt);
      Et(yt, 17, () => i(a), (ot) => ot.handle, (ot, ct) => {
        Na(ot, {
          get account() {
            return i(ct);
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var It = y(yt, 2);
      {
        var Dt = (ot) => {
          var ct = Be(), St = Ct(ct);
          Et(St, 16, () => Array(12), yr, (ye, Qn) => {
            var sn = Bo();
            w(ye, sn);
          }), w(ot, ct);
        };
        L(It, (ot) => {
          i(o) && ot(Dt);
        });
      }
      var Ot = y(pt, 2);
      {
        var gt = (ot) => {
          var ct = zo();
          hi(ct, (St) => J == null ? void 0 : J(St)), w(ot, ct);
        };
        L(Ot, (ot) => {
          i(R) && ot(gt);
        });
      }
      w(I, M);
    }, P = (I) => {
      var M = Go(), q = Ct(M), rt = N(q);
      Uo(rt, {
        get rails() {
          return i(_);
        },
        onsaved: m
      });
      var pt = y(q, 2);
      Et(pt, 17, () => i(_).filter((It) => It.order !== "random"), (It) => It.order, (It, Dt) => {
        $r(It, {
          get title() {
            return i(Dt).title;
          },
          get note() {
            return i(Dt).note;
          },
          get order() {
            return i(Dt).order;
          },
          get navigate() {
            return e.navigate;
          }
        });
      });
      var yt = y(pt, 2);
      {
        const It = (Ot) => {
          var gt = qo(), ot = Ct(gt), ct = y(ot, 2);
          lt("click", ot, () => {
            var St;
            return (St = i(h)) == null ? void 0 : St.reload();
          }), lt("click", ct, B), w(Ot, gt);
        };
        let Dt = /* @__PURE__ */ wt(() => {
          var Ot;
          return ((Ot = i(_).find((gt) => gt.order === "random")) == null ? void 0 : Ot.title) ?? "Something else";
        });
        Ia(
          $r(yt, {
            get title() {
              return i(Dt);
            },
            order: "random",
            size: r,
            get navigate() {
              return e.navigate;
            },
            actions: It,
            $$slots: { actions: !0 }
          }),
          (Ot) => x(h, Ot, !0),
          () => i(h)
        );
      }
      w(I, M);
    };
    L(p, (I) => {
      i(b) ? I(g) : I(P, -1);
    });
  }
  j(() => so(v, i(f))), lt("input", v, U), w(t, G), ae();
}
ze(["input", "click"]);
var Wo = /* @__PURE__ */ A('<p class="ofx-note ofx-feed-status"><!> <!></p>'), Zo = /* @__PURE__ */ A('<p class="ofx-error">The feed could not be loaded.</p>'), Jo = /* @__PURE__ */ A(`<p class="ofx-note">None of this performer's sites has anything here.</p>`), Ci = /* @__PURE__ */ A('<span class="ofx-badge"> </span>'), Xo = /* @__PURE__ */ A('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), Qo = /* @__PURE__ */ A('<p class="ofx-caption-title"> </p>'), $o = /* @__PURE__ */ A('<p class="ofx-caption-text"> </p>'), tl = /* @__PURE__ */ A('<button type="button"> </button>'), el = /* @__PURE__ */ A('<span class="ofx-copy-site"> </span>'), nl = /* @__PURE__ */ A('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <div class="ofx-caption"><!> <!> <p class="ofx-caption-when"><!> <!></p></div></article>'), rl = /* @__PURE__ */ A('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), il = /* @__PURE__ */ A('<div class="ofx-feed-sentinel" aria-hidden="true"></div>'), al = /* @__PURE__ */ A('<section class="ofx-section"><!> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function sl(t, e) {
  ie(e, !0);
  const n = 30;
  let r = /* @__PURE__ */ H(Vt([])), a = /* @__PURE__ */ H(0), s = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(Vt([])), c = /* @__PURE__ */ H(null);
  async function d() {
    if (i(o) || i(s)) return;
    x(o, !0);
    const p = _, g = await vo(e.handle, { offset: i(a), limit: n, kinds: e.kind });
    if (p !== _) return;
    if (!g) {
      x(l, i(r).length === 0), x(o, !1);
      return;
    }
    let P = i(r);
    for (const I of g.items) {
      const M = E(I);
      P = I.late ? h(P, M) : [...P, M];
    }
    x(r, P, !0), x(a, g.next_offset, !0), x(f, g.sources, !0), x(s, g.done, !0), x(o, !1), requestAnimationFrame(() => {
      p !== _ || i(s) || !i(c) || i(c).getBoundingClientRect().top < window.innerHeight + 800 && d();
    });
  }
  function E(p) {
    return {
      ...p,
      // Photos are addressed by position on their site's page and served
      // through the proxy, at grid size for the tile.
      thumb: p.kind === "photo" ? pr(p.site, e.handle, p.page, p.index, !0) : p.thumbnail,
      full: p.kind === "photo" ? pr(p.site, e.handle, p.page, p.index) : null,
      aspect: p.kind === "video" ? 16 / 9 : 3 / 4,
      text: p.description
    };
  }
  function h(p, g) {
    if (!g.posted_at) return [...p, g];
    const P = p.findIndex((I) => I.posted_at && I.posted_at < g.posted_at);
    return P < 0 ? [...p, g] : [...p.slice(0, P), g, ...p.slice(P)];
  }
  let _ = 0;
  je(() => {
    e.handle, e.kind, Xn(() => {
      _++, x(r, [], !0), x(a, 0), x(s, !1), x(l, !1), x(o, !1), x(f, [], !0), d();
    });
  }), je(() => {
    if (!i(c)) return;
    const p = new IntersectionObserver(
      (g) => {
        g.some((P) => P.isIntersecting) && d();
      },
      { rootMargin: "800px" }
    );
    return p.observe(i(c)), () => p.disconnect();
  });
  function m(p, g) {
    if (!g.text_site || g.text) return;
    const P = new IntersectionObserver((I) => {
      I.some((M) => M.isIntersecting) && (P.disconnect(), Oa(g.text_site, g.text_id).then((M) => {
        M != null && M.description && x(r, i(r).map((q) => q.key === g.key ? { ...q, text: M.description } : q), !0);
      }));
    });
    return P.observe(p), { destroy: () => P.disconnect() };
  }
  function C(p, g) {
    !g || !Number.isFinite(g) || x(r, i(r).map((P) => P.key === p ? { ...P, aspect: g } : P), !0);
  }
  function b(p, g) {
    return {
      site: (g == null ? void 0 : g.site) ?? p.site,
      video_id: (g == null ? void 0 : g.id) ?? p.id,
      title: p.title,
      thumbnail: p.thumbnail,
      duration: (g == null ? void 0 : g.duration) ?? p.duration,
      resolution: (g == null ? void 0 : g.resolution) ?? p.resolution
    };
  }
  function R(p) {
    p.kind === "video" ? e.onplay(b(p)) : p.kind === "photo" ? e.onphoto(p) : e.ongallery({ site: p.site, gallery_id: p.id, title: p.title });
  }
  function F(p) {
    if (!p) return null;
    const g = Math.floor(p / 3600), P = Math.floor(p % 3600 / 60), I = String(p % 60).padStart(2, "0");
    return g ? `${g}:${String(P).padStart(2, "0")}:${I}` : `${P}:${I}`;
  }
  function U(p) {
    if (!p.posted_at) return null;
    if (p.approximate && p.posted_label && /ago|yesterday|today/i.test(p.posted_label))
      return p.posted_label;
    const g = new Date(p.posted_at).toLocaleDateString(void 0, { day: "numeric", month: "short", year: "numeric" });
    return p.approximate ? `~${g}` : g;
  }
  const B = /* @__PURE__ */ wt(() => i(f).filter((p) => p.state === "loading").map((p) => p.site)), ft = /* @__PURE__ */ wt(() => i(f).filter((p) => p.state === "failed").map((p) => p.site));
  var J = al(), G = N(J);
  {
    var $ = (p) => {
      var g = Wo(), P = N(g);
      {
        var I = (rt) => {
          var pt = Fe();
          j((yt) => D(pt, `Still loading: ${yt ?? ""}.`), [() => i(B).join(", ")]), w(rt, pt);
        };
        L(P, (rt) => {
          i(B).length && rt(I);
        });
      }
      var M = y(P, 2);
      {
        var q = (rt) => {
          var pt = Fe();
          j((yt) => D(pt, `Not answering: ${yt ?? ""}.`), [() => i(ft).join(", ")]), w(rt, pt);
        };
        L(M, (rt) => {
          i(ft).length && rt(q);
        });
      }
      w(p, g);
    };
    L(G, (p) => {
      (i(B).length || i(ft).length) && p($);
    });
  }
  var tt = y(G, 2);
  {
    var S = (p) => {
      var g = Zo();
      w(p, g);
    }, T = (p) => {
      var g = Jo();
      w(p, g);
    };
    L(tt, (p) => {
      i(l) ? p(S) : i(s) && i(r).length === 0 && p(T, 1);
    });
  }
  var O = y(tt, 2), W = N(O);
  Et(W, 17, () => i(r), (p) => p.key, (p, g) => {
    var P = nl(), I = N(P), M = N(I), q = N(M);
    kr(q, {
      get src() {
        return i(g).thumb;
      },
      get alt() {
        return i(g).title;
      },
      get name() {
        return i(g).title;
      },
      onmeasure: (it) => C(i(g).key, it)
    });
    var rt = y(q, 2);
    {
      var pt = (it) => {
        var ht = Ci(), Lt = V(ht, !0);
        j((Oe) => D(Lt, Oe), [() => F(i(g).duration)]), w(it, ht);
      }, yt = /* @__PURE__ */ wt(() => i(g).kind === "video" && F(i(g).duration)), It = (it) => {
        var ht = Ci(), Lt = V(ht, !0);
        j(() => D(Lt, i(g).image_count)), w(it, ht);
      };
      L(rt, (it) => {
        i(yt) ? it(pt) : i(g).kind === "gallery" && i(g).image_count && it(It, 1);
      });
    }
    var Dt = y(rt, 2);
    {
      var Ot = (it) => {
        var ht = Xo();
        w(it, ht);
      };
      L(Dt, (it) => {
        i(g).kind === "video" && it(Ot);
      });
    }
    var gt = y(I, 2), ot = N(gt);
    {
      var ct = (it) => {
        var ht = Qo(), Lt = V(ht, !0);
        j(() => D(Lt, i(g).title)), w(it, ht);
      };
      L(ot, (it) => {
        i(g).title && it(ct);
      });
    }
    var St = y(ot, 2);
    {
      var ye = (it) => {
        var ht = $o(), Lt = V(ht, !0);
        j(() => D(Lt, i(g).text)), w(it, ht);
      };
      L(St, (it) => {
        i(g).text && it(ye);
      });
    }
    var Qn = y(St, 2), sn = N(Qn);
    {
      var $n = (it) => {
        var ht = Fe();
        j((Lt) => D(ht, `${Lt ?? ""} ·`), [() => U(i(g))]), w(it, ht);
      }, Er = /* @__PURE__ */ wt(() => U(i(g)));
      L(sn, (it) => {
        i(Er) && it($n);
      });
    }
    var tr = y(sn, 2);
    {
      var Sr = (it) => {
        var ht = Be(), Lt = Ct(ht);
        Et(Lt, 17, () => i(g).copies, (Oe) => Oe.site, (Oe, ke) => {
          var Ve = tl();
          let Tn;
          var Tr = V(Ve, !0);
          j(
            (er) => {
              Tn = Le(Ve, 1, "ofx-copy", null, Tn, { "ofx-on": i(ke).site === i(g).site }), mt(Ve, "title", `Play the ${i(ke).site ?? ""} copy${er ?? ""}`), D(Tr, i(ke).site);
            },
            [
              () => i(ke).duration ? ` (${F(i(ke).duration)})` : ""
            ]
          ), lt("click", Ve, () => e.onplay(b(i(g), i(ke)))), w(Oe, Ve);
        }), w(it, ht);
      }, Ar = (it) => {
        var ht = el(), Lt = V(ht, !0);
        j(() => D(Lt, i(g).site)), w(it, ht);
      };
      L(tr, (it) => {
        i(g).copies.length > 1 ? it(Sr) : it(Ar, -1);
      });
    }
    hi(P, (it, ht) => m == null ? void 0 : m(it, ht), () => i(g)), j(() => Ta(P, `--ofx-ar: ${i(g).aspect ?? ""}; flex-grow: ${i(g).aspect ?? ""}; flex-basis: ${i(g).aspect * 220}px`)), lt("click", I, () => R(i(g))), w(p, P);
  });
  var nt = y(W, 2);
  {
    var v = (p) => {
      var g = Be(), P = Ct(g);
      Et(P, 16, () => Array(4), yr, (I, M) => {
        var q = rl();
        w(I, q);
      }), w(p, g);
    };
    L(nt, (p) => {
      i(o) && p(v);
    });
  }
  var k = y(O, 2);
  {
    var Z = (p) => {
      var g = il();
      Ia(g, (P) => x(c, P), () => i(c)), w(p, g);
    };
    L(k, (p) => {
      !i(s) && !i(l) && p(Z);
    });
  }
  w(t, J), ae();
}
ze(["click"]);
var ol = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), Ii = /* @__PURE__ */ A('<p class="ofx-note"> </p>'), ll = /* @__PURE__ */ A('<span class="ofx-badge"> </span>'), fl = /* @__PURE__ */ A('<span class="ofx-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>'), ul = /* @__PURE__ */ A('<p class="ofx-caption-title"> </p>'), cl = /* @__PURE__ */ A('<p class="ofx-caption-text"> </p>'), vl = /* @__PURE__ */ A('<p class="ofx-caption-when"> </p>'), dl = /* @__PURE__ */ A('<div class="ofx-caption"><!> <!> <!></div>'), hl = /* @__PURE__ */ A('<article class="ofx-tile"><button class="ofx-open" type="button"><div class="ofx-thumb"><!> <!> <!></div></button> <!></article>'), _l = /* @__PURE__ */ A('<div class="ofx-skeleton" style="flex-grow: 1.6; flex-basis: 340px"></div>'), pl = /* @__PURE__ */ A('<button class="ofx-btn ofx-outline" type="button"> </button>'), gl = /* @__PURE__ */ A('<section class="ofx-section"><h2> </h2> <!> <div class="ofx-mosaic"><!> <!> <span class="ofx-mosaic-tail" aria-hidden="true"></span></div> <!></section>');
function bl(t, e) {
  ie(e, !0);
  let n = /* @__PURE__ */ H(Vt([])), r = /* @__PURE__ */ H(0), a = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(!1);
  async function l() {
    if (i(a) || i(s)) return;
    x(a, !0);
    const S = i(r) + 1, [T, O, W] = await Promise.all([
      ho(e.handle, e.site, S),
      _o(e.handle, e.site, S),
      po(e.handle, e.site, S)
    ]);
    if (T === null && O === null && W === null)
      x(o, !0);
    else {
      const nt = [
        ...(T ?? []).map((v) => ({
          kind: "video",
          key: `v:${v.video_id}`,
          title: v.title,
          thumbnail: v.thumbnail,
          badge: h(v.duration),
          // A still from a KVS player is 16:9 and a fapello card is
          // portrait; both are corrected the moment the file
          // decodes. This is the opening guess, not a claim.
          aspect: 1.7777777777777777,
          posted: v.posted_at,
          text: v.description,
          // Asked for lazily, and only where the site has something
          // to say -- see `reveal`.
          hasText: v.has_text,
          item: v
        })),
        ...(O ?? []).map((v) => ({
          kind: "image",
          key: `g:${v.gallery_id}`,
          title: v.title,
          thumbnail: v.cover,
          badge: v.image_count ? `${v.image_count}` : null,
          aspect: 0.75,
          posted: v.posted,
          item: v
        })),
        ...(W ?? []).map((v) => ({
          kind: "image",
          key: `p:${v.image_id ?? `${S}:${v.index}`}`,
          title: "",
          // Through the proxy and at grid size: the originals are
          // several megabytes each and a page holds 32 of them.
          thumbnail: pr(e.site, e.handle, S, v.index, !0),
          full: pr(e.site, e.handle, S, v.index),
          badge: null,
          aspect: 0.75,
          posted: v.posted_at,
          item: v
        }))
      ];
      x(n, [...i(n), ...nt], !0), x(r, S), nt.length === 0 && x(s, !0);
    }
    x(a, !1);
  }
  const f = /* @__PURE__ */ wt(() => i(n).filter((S) => e.kinds.has(S.kind)));
  je(() => {
    e.handle, e.site, Xn(() => {
      x(n, [], !0), x(r, 0), x(s, !1), x(o, !1), x(a, !1), l();
    });
  });
  function c(S, T) {
    !T || !Number.isFinite(T) || x(n, i(n).map((O) => O.key === S ? { ...O, aspect: T } : O), !0);
  }
  function d(S, T) {
    if (!T.hasText || T.text) return;
    const O = new IntersectionObserver((W) => {
      W.some((nt) => nt.isIntersecting) && (O.disconnect(), Oa(e.site, T.item.video_id).then((nt) => {
        nt && x(
          n,
          i(n).map((v) => v.key === T.key ? {
            ...v,
            text: nt.description,
            posted: v.posted ?? nt.posted_at
          } : v),
          !0
        );
      }));
    });
    return O.observe(S), { destroy: () => O.disconnect() };
  }
  function E(S) {
    S.kind === "video" ? e.onplay(S.item) : S.full ? e.onphoto(S) : e.ongallery(S.item);
  }
  function h(S) {
    return S ? `${Math.floor(S / 60)}:${String(S % 60).padStart(2, "0")}` : null;
  }
  var _ = gl(), m = N(_), C = V(m, !0), b = y(m, 2);
  {
    var R = (S) => {
      var T = ol(), O = V(T);
      j(() => D(O, `${e.site ?? ""} did not answer.`)), w(S, T);
    }, F = (S) => {
      var T = Ii(), O = V(T);
      j(() => D(O, `Nothing here on ${e.site ?? ""}.`)), w(S, T);
    }, U = (S) => {
      var T = Ii(), O = V(T);
      j((W) => D(O, `${e.site ?? ""} has no ${W ?? ""} for this performer.`), [() => [...e.kinds].join(" or ")]), w(S, T);
    };
    L(b, (S) => {
      i(o) ? S(R) : !i(a) && i(n).length === 0 ? S(F, 1) : !i(a) && i(f).length === 0 && S(U, 2);
    });
  }
  var B = y(b, 2), ft = N(B);
  Et(ft, 17, () => i(f), (S) => S.key, (S, T) => {
    var O = hl(), W = N(O), nt = N(W), v = N(nt);
    kr(v, {
      get src() {
        return i(T).thumbnail;
      },
      get alt() {
        return i(T).title;
      },
      get name() {
        return i(T).title;
      },
      onmeasure: (M) => c(i(T).key, M)
    });
    var k = y(v, 2);
    {
      var Z = (M) => {
        var q = ll(), rt = V(q, !0);
        j(() => D(rt, i(T).badge)), w(M, q);
      };
      L(k, (M) => {
        i(T).badge && M(Z);
      });
    }
    var p = y(k, 2);
    {
      var g = (M) => {
        var q = fl();
        w(M, q);
      };
      L(p, (M) => {
        i(T).kind === "video" && M(g);
      });
    }
    var P = y(W, 2);
    {
      var I = (M) => {
        var q = dl(), rt = N(q);
        {
          var pt = (gt) => {
            var ot = ul(), ct = V(ot, !0);
            j(() => D(ct, i(T).title)), w(gt, ot);
          };
          L(rt, (gt) => {
            i(T).title && gt(pt);
          });
        }
        var yt = y(rt, 2);
        {
          var It = (gt) => {
            var ot = cl(), ct = V(ot, !0);
            j(() => D(ct, i(T).text)), w(gt, ot);
          };
          L(yt, (gt) => {
            i(T).text && gt(It);
          });
        }
        var Dt = y(yt, 2);
        {
          var Ot = (gt) => {
            var ot = vl(), ct = V(ot, !0);
            j(() => D(ct, i(T).posted)), w(gt, ot);
          };
          L(Dt, (gt) => {
            i(T).posted && gt(Ot);
          });
        }
        w(M, q);
      };
      L(P, (M) => {
        (i(T).title || i(T).text || i(T).posted) && M(I);
      });
    }
    hi(O, (M, q) => d == null ? void 0 : d(M, q), () => i(T)), j(() => Ta(O, `--ofx-ar: ${i(T).aspect ?? ""}; flex-grow: ${i(T).aspect ?? ""}; flex-basis: ${i(T).aspect * 220}px`)), lt("click", W, () => E(i(T))), w(S, O);
  });
  var J = y(ft, 2);
  {
    var G = (S) => {
      var T = Be(), O = Ct(T);
      Et(O, 16, () => Array(4), yr, (W, nt) => {
        var v = _l();
        w(W, v);
      }), w(S, T);
    };
    L(J, (S) => {
      i(a) && S(G);
    });
  }
  var $ = y(B, 2);
  {
    var tt = (S) => {
      var T = pl(), O = V(T, !0);
      j(() => {
        T.disabled = i(a), D(O, i(a) ? "Loading…" : "Load more");
      }), lt("click", T, l), w(S, T);
    };
    L($, (S) => {
      !i(s) && !i(o) && i(n).length > 0 && S(tt);
    });
  }
  j(() => D(C, e.site)), w(t, _), ae();
}
ze(["click"]);
async function xl() {
  try {
    const t = await fetch("/api/v1/vpn/status");
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function ml(t, e) {
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
async function wl(t) {
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
var yl = /* @__PURE__ */ A('<button type="button" role="switch"><span class="tbx-toggle-track"><span class="tbx-toggle-knob"></span></span> <span> </span></button>'), kl = /* @__PURE__ */ A('<span class="tbx-dim">offline</span>'), El = /* @__PURE__ */ A('<li><button type="button" role="option"> <!></button></li>'), Sl = /* @__PURE__ */ A('<ul class="tbx-picker-list" role="listbox"><li><button type="button" role="option">No exit node</button></li> <!></ul>'), Al = /* @__PURE__ */ A('<div class="tbx-picker"><button type="button" class="tbx-picker-button" aria-haspopup="listbox"> <span class="tbx-caret" aria-hidden="true"></span></button> <!></div>'), Tl = /* @__PURE__ */ A('<span class="tbx-vpn-down">tunnel down · routed traffic is blocked</span>'), Cl = /* @__PURE__ */ A('<p class="tbx-vpn-note"> </p>'), Il = /* @__PURE__ */ A('<div class="tbx-vpn"><span class="tbx-vpn-label">VPN</span> <!> <!> <!></div> <!>', 1);
function Rl(t, e) {
  ie(e, !0);
  let n = /* @__PURE__ */ H(null), r = /* @__PURE__ */ H(null), a = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(null);
  async function o() {
    x(n, await xl(), !0);
  }
  je(() => {
    o();
  });
  async function l(h) {
    var m;
    const _ = h === "scraping" ? !i(n).route_scraping : !i(n).route_streaming;
    x(r, h, !0), x(s, null), await ml(h, _) && (await o(), await ((m = e.onchange) == null ? void 0 : m.call(e))), x(r, null);
  }
  async function f(h) {
    var m;
    x(r, "exit"), x(a, !1);
    const _ = await wl(h);
    _ && (x(n, _, !0), x(s, _.detail ?? null, !0), await ((m = e.onchange) == null ? void 0 : m.call(e))), x(r, null);
  }
  var c = Be(), d = Ct(c);
  {
    var E = (h) => {
      var _ = Il(), m = Ct(_), C = y(N(m), 2);
      Et(
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
        ([J, G, $]) => J,
        (J, G) => {
          var $ = /* @__PURE__ */ wt(() => Dn(i(G), 3));
          let tt = () => i($)[0], S = () => i($)[1], T = () => i($)[2];
          var O = yl();
          let W;
          var nt = y(N(O), 2), v = V(nt, !0);
          j(() => {
            W = Le(O, 1, "tbx-toggle", null, W, { "tbx-toggle-on": T() }), mt(O, "aria-checked", T()), O.disabled = i(r) !== null, D(v, S());
          }), lt("click", O, () => l(tt())), w(J, O);
        }
      );
      var b = y(C, 2);
      {
        var R = (J) => {
          var G = Al(), $ = N(G), tt = N($), S = y($, 2);
          {
            var T = (O) => {
              var W = Sl(), nt = N(W), v = V(nt), k = y(nt, 2);
              Et(k, 17, () => i(n).exit_nodes, (Z) => Z.id, (Z, p) => {
                var g = El(), P = N(g), I = N(P), M = y(I);
                {
                  var q = (rt) => {
                    var pt = kl();
                    w(rt, pt);
                  };
                  L(M, (rt) => {
                    i(p).online || rt(q);
                  });
                }
                j(() => {
                  mt(P, "aria-selected", i(p).active), P.disabled = !i(p).online, D(I, `${i(p).name ?? ""}${i(p).country ? ` · ${i(p).country}` : ""} `);
                }), lt("click", P, () => f(i(p).id)), w(Z, g);
              }), j(() => mt(v, "aria-selected", !i(n).exit_node)), lt("click", v, () => f(null)), w(O, W);
            };
            L(S, (O) => {
              i(a) && O(T);
            });
          }
          j(() => {
            mt($, "aria-expanded", i(a)), $.disabled = i(r) !== null, D(tt, `${i(n).exit_node_name ?? "No exit node" ?? ""} `);
          }), lt("click", $, () => x(a, !i(a))), w(J, G);
        };
        L(b, (J) => {
          var G;
          (G = i(n).exit_nodes) != null && G.length && J(R);
        });
      }
      var F = y(b, 2);
      {
        var U = (J) => {
          var G = Tl();
          w(J, G);
        };
        L(F, (J) => {
          !i(n).connected && (i(n).route_scraping || i(n).route_streaming) && J(U);
        });
      }
      var B = y(m, 2);
      {
        var ft = (J) => {
          var G = Cl(), $ = V(G, !0);
          j(() => D($, i(s))), w(J, G);
        };
        L(B, (J) => {
          i(s) && J(ft);
        });
      }
      w(h, _);
    };
    L(d, (h) => {
      var _;
      (_ = i(n)) != null && _.enabled && h(E);
    });
  }
  w(t, c), ae();
}
ze(["click"]);
var Ml = /* @__PURE__ */ A('<p class="ofx-error">That account could not be loaded.</p>'), Ol = /* @__PURE__ */ A('<div class="ofx-banner"><img alt=""/></div>'), Nl = /* @__PURE__ */ js('<svg class="ofx-verified" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Verified"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'), Ll = /* @__PURE__ */ A('<p> </p> <button class="ofx-more" type="button"> </button>', 1), Pl = /* @__PURE__ */ A("<span><b> </b> </span>"), Dl = /* @__PURE__ */ A('<div class="ofx-stats"></div>'), Fl = /* @__PURE__ */ A("<span> </span>"), Ri = /* @__PURE__ */ A('<a target="_blank" rel="noreferrer noopener"> </a>'), Mi = /* @__PURE__ */ A('<button type="button" role="tab"> </button>'), Ul = /* @__PURE__ */ A('<span class="ofx-count"> </span>'), jl = /* @__PURE__ */ A('<button type="button"> <!></button>'), Hl = /* @__PURE__ */ A('<div class="ofx-controls"><span class="ofx-note">Load from:</span> <!></div>'), Bl = /* @__PURE__ */ A('<p class="ofx-error"> </p>'), zl = /* @__PURE__ */ A(`<p class="ofx-note">Pick a site above to load this performer's content from it.</p>`), Vl = /* @__PURE__ */ A("<!> <!>", 1), ql = /* @__PURE__ */ A('<header class="ofx-header"><!> <div class="ofx-identity"><div><!></div> <div style="min-width:0;flex:1"><h1> <!></h1> <p class="ofx-sub"> <span class="ofx-dot">·</span> </p> <!> <!> <div class="ofx-links"><!> <!> <!></div></div></div> <div class="ofx-tabs" role="tablist" aria-label="Show"></div></header> <!> <div class="ofx-controls"><div class="ofx-tabs" role="tablist" aria-label="View"></div> <button class="ofx-btn" type="button">← All accounts</button></div> <!> <!> <!> <!>', 1), Gl = /* @__PURE__ */ A('<p class="ofx-note">Loading…</p>'), Yl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <img class="ofx-lightbox-image" alt=""/></div>'), Kl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button>  <video controls="" autoplay=""></video></div>', 2), Wl = /* @__PURE__ */ A('<button class="ofx-step ofx-prev" type="button" aria-label="Previous">‹</button> <button class="ofx-step ofx-next" type="button" aria-label="Next">›</button>', 1), Zl = /* @__PURE__ */ A('<div class="ofx-overlay"><button class="ofx-close" type="button" aria-label="Close">✕</button> <!> <img/></div>'), Jl = /* @__PURE__ */ A("<!> <!> <!> <!>", 1);
function Xl(t, e) {
  ie(e, !0);
  let n = /* @__PURE__ */ H(null), r = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H("all");
  const s = /* @__PURE__ */ wt(() => i(a) === "all" ? /* @__PURE__ */ new Set(["video", "image"]) : /* @__PURE__ */ new Set([i(a)]));
  let o = /* @__PURE__ */ H(Vt(/* @__PURE__ */ new Set())), l = /* @__PURE__ */ H("feed"), f = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(null), d = /* @__PURE__ */ H(null), E = /* @__PURE__ */ H(null), h = /* @__PURE__ */ H(null);
  je(() => {
    uo(e.handle).then((v) => {
      v ? x(n, v, !0) : x(r, !0);
    });
  });
  const _ = /* @__PURE__ */ wt(() => {
    var v, k, Z, p;
    return [
      // OnlyFans' own order on a profile, which is the page this one
      // is meant to read as.
      ["posts", (v = i(n)) == null ? void 0 : v.posts_count],
      ["photos", (k = i(n)) == null ? void 0 : k.photos_count],
      ["videos", (Z = i(n)) == null ? void 0 : Z.videos_count],
      ["likes", (p = i(n)) == null ? void 0 : p.likes_count]
    ].filter(([, g]) => g != null);
  });
  function m(v) {
    const k = new Set(i(o));
    k.has(v) ? k.delete(v) : k.add(v), x(o, k, !0);
  }
  function C(v) {
    var k, Z;
    if (!((k = e.host) != null && k.play)) {
      x(c, v, !0);
      return;
    }
    e.host.play({
      // The backend proxy, never the site's own URL: that one carries a
      // short-lived token and these hosts check Referer, so a player
      // pointed straight at it would 403.
      src: Ti(v.site, v.video_id),
      title: v.title,
      // The real type is not known until the backend resolves the
      // source, and the proxy reports it on the response. MP4 is the
      // right opening guess; the player falls back if the element
      // rejects it.
      mimeType: "video/mp4",
      poster: v.thumbnail ?? void 0,
      site: v.site,
      videoId: v.video_id,
      // What the player labels a bookmark with. The performer is the
      // context these videos were found under.
      contextTitle: ((Z = i(n)) == null ? void 0 : Z.display_name) || e.handle,
      duration: v.duration,
      resolution: v.resolution,
      size: v.size
    });
  }
  function b(v) {
    x(h, null), x(E, v, !0);
  }
  async function R(v) {
    x(h, null);
    const k = await go(v.site, v.gallery_id);
    if (!k) {
      x(h, "Could not open that gallery");
      return;
    }
    if (k.length === 0) {
      x(h, "That site served no images for this gallery");
      return;
    }
    x(d, { gallery: v, count: k.length, index: 0 }, !0);
  }
  function F(v) {
    i(d) && x(
      d,
      {
        ...i(d),
        index: (i(d).index + v + i(d).count) % i(d).count
      },
      !0
    );
  }
  function U(v) {
    if (v.key === "Escape") {
      x(c, null), x(d, null), x(E, null);
      return;
    }
    i(d) && (v.key === "ArrowRight" && F(1), v.key === "ArrowLeft" && F(-1));
  }
  var B = Jl();
  Gr("keydown", zr, U);
  var ft = Ct(B);
  {
    var J = (v) => {
      var k = Ml();
      w(v, k);
    }, G = (v) => {
      var k = ql(), Z = Ct(k), p = N(Z);
      {
        var g = (z) => {
          var Q = Ol(), dt = V(Q);
          j(() => mt(dt, "src", i(n).header_url)), w(z, Q);
        };
        L(p, (z) => {
          i(n).header_url && z(g);
        });
      }
      var P = y(p, 2), I = N(P);
      let M;
      var q = N(I);
      kr(q, {
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
      var rt = y(I, 2), pt = N(rt), yt = N(pt), It = y(yt);
      {
        var Dt = (z) => {
          var Q = Nl();
          w(z, Q);
        };
        L(It, (z) => {
          i(n).is_verified && z(Dt);
        });
      }
      var Ot = y(pt, 2), gt = N(Ot), ot = y(gt, 2), ct = y(Ot, 2);
      {
        var St = (z) => {
          var Q = Ll(), dt = Ct(Q);
          let xt;
          var Rt = V(dt, !0), ut = y(dt, 2), Pt = V(ut, !0);
          j(() => {
            xt = Le(dt, 1, "ofx-bio", null, xt, { "ofx-clamped": !i(f) }), D(Rt, i(n).bio), D(Pt, i(f) ? "less" : "more");
          }), lt("click", ut, () => x(f, !i(f))), w(z, Q);
        };
        L(ct, (z) => {
          i(n).bio && z(St);
        });
      }
      var ye = y(ct, 2);
      {
        var Qn = (z) => {
          var Q = Dl();
          Et(Q, 21, () => i(_), ([dt, xt]) => dt, (dt, xt) => {
            var Rt = /* @__PURE__ */ wt(() => Dn(i(xt), 2));
            let ut = () => i(Rt)[0], Pt = () => i(Rt)[1];
            var oe = Pl(), nr = N(oe), Cr = V(nr, !0), qe = y(nr);
            j(
              (rr) => {
                D(Cr, rr), D(qe, ` ${ut() ?? ""}`);
              },
              [() => Pt().toLocaleString()]
            ), w(dt, oe);
          }), w(z, Q);
        };
        L(ye, (z) => {
          i(_).length && z(Qn);
        });
      }
      var sn = y(ye, 2), $n = N(sn);
      {
        var Er = (z) => {
          var Q = Fl(), dt = V(Q, !0);
          j(() => D(dt, i(n).location)), w(z, Q);
        };
        L($n, (z) => {
          i(n).location && z(Er);
        });
      }
      var tr = y($n, 2);
      {
        var Sr = (z) => {
          var Q = Ri(), dt = V(Q, !0);
          j(
            (xt) => {
              mt(Q, "href", i(n).website), D(dt, xt);
            },
            [() => i(n).website.replace(/^https?:\/\//, "")]
          ), w(z, Q);
        };
        L(tr, (z) => {
          i(n).website && z(Sr);
        });
      }
      var Ar = y(tr, 2);
      {
        var it = (z) => {
          var Q = Ri(), dt = V(Q);
          j(() => {
            mt(Q, "href", i(n).of_url), D(dt, `onlyfans.com/${i(n).of_username ?? ""}`);
          }), w(z, Q);
        };
        L(Ar, (z) => {
          i(n).of_url && z(it);
        });
      }
      var ht = y(P, 2);
      Et(ht, 20, () => [["all", "All"], ["video", "Videos"], ["image", "Photos"]], ([z, Q]) => z, (z, Q) => {
        var dt = /* @__PURE__ */ wt(() => Dn(Q, 2));
        let xt = () => i(dt)[0], Rt = () => i(dt)[1];
        var ut = Mi();
        let Pt;
        var oe = V(ut, !0);
        j(() => {
          Pt = Le(ut, 1, "ofx-tab", null, Pt, { "ofx-on": i(a) === xt() }), mt(ut, "aria-selected", i(a) === xt()), D(oe, Rt());
        }), lt("click", ut, () => x(a, xt(), !0)), w(z, ut);
      });
      var Lt = y(Z, 2);
      Rl(Lt, {});
      var Oe = y(Lt, 2), ke = N(Oe);
      Et(ke, 20, () => [["feed", "Feed"], ["sites", "By site"]], ([z, Q]) => z, (z, Q) => {
        var dt = /* @__PURE__ */ wt(() => Dn(Q, 2));
        let xt = () => i(dt)[0], Rt = () => i(dt)[1];
        var ut = Mi();
        let Pt;
        var oe = V(ut, !0);
        j(() => {
          Pt = Le(ut, 1, "ofx-tab", null, Pt, { "ofx-on": i(l) === xt() }), mt(ut, "aria-selected", i(l) === xt()), D(oe, Rt());
        }), lt("click", ut, () => x(l, xt(), !0)), w(z, ut);
      });
      var Ve = y(ke, 2), Tn = y(Oe, 2);
      {
        var Tr = (z) => {
          var Q = Hl(), dt = y(N(Q), 2);
          Et(dt, 17, () => i(n).sources, (xt) => xt.site, (xt, Rt) => {
            var ut = jl();
            let Pt;
            var oe = N(ut), nr = y(oe);
            {
              var Cr = (qe) => {
                var rr = Ul(), Ua = V(rr, !0);
                j(() => D(Ua, (i(Rt).video_count ?? 0) + (i(Rt).image_count ?? 0))), w(qe, rr);
              };
              L(nr, (qe) => {
                (i(Rt).video_count != null || i(Rt).image_count != null) && qe(Cr);
              });
            }
            j(
              (qe) => {
                Pt = Le(ut, 1, "ofx-btn ofx-outline", null, Pt, { "ofx-on": qe }), D(oe, `${i(Rt).site ?? ""} `);
              },
              [() => i(o).has(i(Rt).site)]
            ), lt("click", ut, () => m(i(Rt).site)), w(xt, ut);
          }), w(z, Q);
        };
        L(Tn, (z) => {
          i(l) === "sites" && z(Tr);
        });
      }
      var er = y(Tn, 2);
      {
        var La = (z) => {
          var Q = Bl(), dt = V(Q, !0);
          j(() => D(dt, i(h))), w(z, Q);
        };
        L(er, (z) => {
          i(h) && z(La);
        });
      }
      var pi = y(er, 2);
      {
        var Pa = (z) => {
          sl(z, {
            get handle() {
              return i(n).handle;
            },
            get kind() {
              return i(a);
            },
            onplay: (Q) => C(Q),
            ongallery: R,
            onphoto: b
          });
        }, Da = (z) => {
          var Q = Vl(), dt = Ct(Q);
          {
            var xt = (ut) => {
              var Pt = zl();
              w(ut, Pt);
            };
            L(dt, (ut) => {
              i(o).size === 0 && ut(xt);
            });
          }
          var Rt = y(dt, 2);
          Et(Rt, 17, () => i(n).sources.filter((ut) => i(o).has(ut.site)), (ut) => ut.site, (ut, Pt) => {
            bl(ut, {
              get handle() {
                return i(n).handle;
              },
              get site() {
                return i(Pt).site;
              },
              get kinds() {
                return i(s);
              },
              onplay: (oe) => C(oe),
              ongallery: R,
              onphoto: b
            });
          }), w(z, Q);
        };
        L(pi, (z) => {
          i(l) === "feed" ? z(Pa) : z(Da, -1);
        });
      }
      var Fa = y(pi, 2);
      Aa(Fa, () => i(n).handle, (z) => {
        $r(z, {
          get title() {
            return `More like ${i(n).display_name ?? ""}`;
          },
          note: "similar content on the archive sites",
          fetcher: () => co(i(n).handle),
          get navigate() {
            return e.navigate;
          }
        });
      }), j(() => {
        M = Le(I, 1, "ofx-avatar", null, M, { "ofx-overlap": !!i(n).header_url }), D(yt, `${i(n).display_name ?? ""} `), D(gt, `@${(i(n).of_username || i(n).handle) ?? ""} `), D(ot, ` ${i(n).source_count ?? ""}
                    ${i(n).source_count === 1 ? "site" : "sites"}`);
      }), lt("click", Ve, () => e.navigate("/x/onlyfans")), w(v, k);
    }, $ = (v) => {
      var k = Gl();
      w(v, k);
    };
    L(ft, (v) => {
      i(r) ? v(J) : i(n) ? v(G, 1) : v($, -1);
    });
  }
  var tt = y(ft, 2);
  {
    var S = (v) => {
      var k = Yl(), Z = N(k), p = y(Z, 2);
      j(() => mt(p, "src", i(E).full)), lt("click", Z, () => x(E, null)), w(v, k);
    };
    L(tt, (v) => {
      i(E) && v(S);
    });
  }
  var T = y(tt, 2);
  {
    var O = (v) => {
      var k = Kl(), Z = N(k), p = y(Z, 2);
      j((g) => mt(p, "src", g), [
        () => Ti(i(c).site, i(c).video_id)
      ]), lt("click", Z, () => x(c, null)), w(v, k);
    };
    L(T, (v) => {
      i(c) && v(O);
    });
  }
  var W = y(T, 2);
  {
    var nt = (v) => {
      var k = Zl(), Z = N(k), p = y(Z, 2);
      {
        var g = (I) => {
          var M = Wl(), q = Ct(M), rt = y(q, 2);
          lt("click", q, () => F(-1)), lt("click", rt, () => F(1)), w(I, M);
        };
        L(p, (I) => {
          i(d).count > 1 && I(g);
        });
      }
      var P = y(p, 2);
      j(
        (I) => {
          mt(P, "src", I), mt(P, "alt", `${i(d).gallery.title ?? ""} ${i(d).index + 1} of ${i(d).count ?? ""}`);
        },
        [
          () => bo(i(d).gallery.site, i(d).gallery.gallery_id, i(d).index)
        ]
      ), lt("click", Z, () => x(d, null)), w(v, k);
    };
    L(W, (v) => {
      i(d) && v(nt);
    });
  }
  w(t, B), ae();
}
ze(["click"]);
var Ql = /* @__PURE__ */ A('<div class="ofx"><div class="ofx-wrap"><!></div></div>');
function $l(t, e) {
  ie(e, !0);
  let n = Ce(e, "path", 3, "");
  Ra(e.api);
  const r = /* @__PURE__ */ wt(() => (n() || "").split("/").filter(Boolean)[0] ?? "");
  var a = Ql(), s = N(a), o = N(s);
  {
    var l = (c) => {
      var d = Be(), E = Ct(d);
      Aa(E, () => i(r), (h) => {
        Xl(h, {
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
      }), w(c, d);
    }, f = (c) => {
      Ko(c, {
        get navigate() {
          return e.navigate;
        }
      });
    };
    L(o, (c) => {
      i(r) ? c(l) : c(f, -1);
    });
  }
  w(t, a), ae();
}
var tf = /* @__PURE__ */ A('<p class="ofx-settings-error">Could not read the scraper list.</p>'), ef = /* @__PURE__ */ A('<p class="ofx-settings-error"><strong> </strong> </p>'), nf = /* @__PURE__ */ A('<button type="button" class="ofx-btn">Sync</button>'), rf = /* @__PURE__ */ A("<tr><td> </td><td> </td><td><code> </code></td><td> </td><td> </td><td><!></td></tr>"), af = /* @__PURE__ */ A(`<div class="ofx ofx-settings"><div class="ofx-settings-head"><p class="ofx-settings-title">Account index<!></p> <button type="button" class="ofx-btn"> </button></div> <p class="ofx-settings-title"> </p> <p class="ofx-settings-note">Loaded from <code> </code>. All of them run; the version is the
        scraper's own if it declares one, otherwise a short hash of its file.</p> <!> <!> <table class="ofx-settings-table"><thead><tr><th>Scraper</th><th>Site</th><th>Version</th><th>Updated</th><th>Index</th><th></th></tr></thead><tbody></tbody></table></div>`);
function sf(t, e) {
  ie(e, !0);
  let n = /* @__PURE__ */ H(null), r = /* @__PURE__ */ H(!1);
  async function a() {
    const v = await yo();
    x(r, v === null), v && x(n, v, !0);
  }
  let s = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(!1);
  const l = async () => {
    const v = await ko();
    v && x(s, v, !0);
  };
  async function f(v) {
    x(o, !0);
    const k = await Eo(v);
    k && x(s, k, !0), x(o, !1);
  }
  je(() => {
    a(), l();
    const v = setInterval(
      () => {
        var k;
        (k = i(s)) != null && k.running && l();
      },
      3e3
    );
    return () => clearInterval(v);
  });
  const c = /* @__PURE__ */ wt(() => {
    var v;
    return Object.fromEntries((((v = i(s)) == null ? void 0 : v.sites) ?? []).map((k) => [k.site, k]));
  });
  function d(v) {
    const k = i(c)[v];
    return k ? k.state === "running" ? `running, page ${k.pages}, ${k.accounts_seen} seen` : k.state === "ok" ? `${k.accounts_seen} accounts (+${k.accounts_new}) ${_(k.finished_at)}` : k.state === "failed" ? `failed: ${k.error ?? ""}` : "never run" : "";
  }
  const E = /* @__PURE__ */ wt(() => {
    var v;
    return ((v = i(n)) == null ? void 0 : v.scrapers) ?? [];
  }), h = /* @__PURE__ */ wt(() => {
    var v;
    return Object.entries(((v = i(n)) == null ? void 0 : v.errors) ?? {});
  }), _ = (v) => v ? v.slice(0, 10) : "";
  var m = af(), C = N(m), b = N(C), R = y(N(b));
  {
    var F = (v) => {
      var k = Fe();
      j(() => D(k, `: ${i(s).accounts ?? ""} accounts, ${i(s).accounts_with_avatar ?? ""} with a picture`)), w(v, k);
    };
    L(R, (v) => {
      i(s) && v(F);
    });
  }
  var U = y(b, 2), B = V(U, !0), ft = y(C, 2), J = V(ft), G = y(ft, 2), $ = y(N(G)), tt = V($, !0), S = y(G, 2);
  {
    var T = (v) => {
      var k = tf();
      w(v, k);
    };
    L(S, (v) => {
      i(r) && v(T);
    });
  }
  var O = y(S, 2);
  Et(O, 17, () => i(h), ([v, k]) => v, (v, k) => {
    var Z = /* @__PURE__ */ wt(() => Dn(i(k), 2));
    let p = () => i(Z)[0], g = () => i(Z)[1];
    var P = ef(), I = N(P), M = V(I, !0), q = y(I);
    j(() => {
      D(M, p()), D(q, `: ${g() ?? ""}`);
    }), w(v, P);
  });
  var W = y(O, 2), nt = y(N(W));
  Et(nt, 21, () => i(E), (v) => v.key, (v, k) => {
    var Z = rf(), p = N(Z), g = V(p), P = y(p), I = V(P, !0), M = y(P), q = N(M), rt = V(q, !0), pt = y(M), yt = V(pt, !0), It = y(pt), Dt = V(It, !0), Ot = y(It), gt = N(Ot);
    {
      var ot = (ct) => {
        var St = nf();
        j(() => {
          var ye;
          return St.disabled = i(o) || ((ye = i(c)[i(k).key]) == null ? void 0 : ye.state) === "running";
        }), lt("click", St, () => f([i(k).key])), w(ct, St);
      };
      L(gt, (ct) => {
        i(k).indexes_accounts && ct(ot);
      });
    }
    j(
      (ct, St) => {
        D(g, `${i(k).name ?? ""}${i(k).indexes_accounts ? "" : " (no index)"}`), D(I, i(k).base_url), D(rt, i(k).version), D(yt, ct), D(Dt, St);
      },
      [
        () => _(i(k).updated),
        () => i(k).indexes_accounts ? d(i(k).key) : ""
      ]
    ), w(v, Z);
  }), j(() => {
    var v, k, Z;
    U.disabled = i(o) || ((v = i(s)) == null ? void 0 : v.running), D(B, (k = i(s)) != null && k.running ? "Syncing…" : "Sync all sites now"), D(J, `Installed scrapers (${i(E).length ?? ""})`), D(tt, ((Z = i(n)) == null ? void 0 : Z.plugin_dir) ?? "…");
  }), lt("click", U, () => f()), w(t, m), ae();
}
ze(["click"]);
function ff({ target: t, path: e, api: n, navigate: r, host: a }) {
  const s = Vt({ path: e ?? "", api: n, navigate: r, host: a }), o = Ea($l, { target: t, props: s });
  return {
    update(l) {
      s.path = l ?? "";
    },
    destroy() {
      Sa(o);
    }
  };
}
const uf = {
  settings({ target: t, api: e }) {
    Ra(e);
    const n = Ea(sf, { target: t });
    return {
      update() {
      },
      destroy() {
        Sa(n);
      }
    };
  }
};
export {
  ff as default,
  uf as slots
};

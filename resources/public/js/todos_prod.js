;(function(){
var g, m = this;
function aa(a) {
  a = a.split(".");
  for (var b = m, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function q(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  var b = q(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ca(a) {
  return "string" == typeof a;
}
function da(a) {
  return "function" == q(a);
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function fa(a) {
  return a[ha] || (a[ha] = ++ia);
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ka(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function la(a, b, c) {
  la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
  return la.apply(null, arguments);
}
var ma = Date.now || function() {
  return+new Date;
};
function na(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ec = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;function oa(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d);
  }
  return a;
}
function qa(a) {
  if (!ra.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(sa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ta, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ua, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(va, "\x26quot;"));
  return a;
}
var sa = /&/g, ta = /</g, ua = />/g, va = /\"/g, ra = /[&<>\"]/;
function wa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, wa) : this.stack = Error().stack || "";
  a && (this.message = String(a));
}
na(wa, Error);
wa.prototype.name = "CustomError";
function xa(a, b) {
  b.unshift(a);
  wa.call(this, oa.apply(null, b));
  b.shift();
}
na(xa, wa);
xa.prototype.name = "AssertionError";
function ya(a, b) {
  throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var za = Array.prototype, Aa = za.indexOf ? function(a, b, c) {
  return za.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ba = za.forEach ? function(a, b, c) {
  za.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ca(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Ca = za.filter ? function(a, b, c) {
  return za.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = ca(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
function Da(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Ea(a, b, c) {
  return 2 >= arguments.length ? za.slice.call(a, b) : za.slice.call(a, b, c);
}
;function Fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ha(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ga.length;f++) {
      c = Ga[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function Ia(a) {
  var b = arguments.length;
  if (1 == b && "array" == q(arguments[0])) {
    return Ia.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
}
;function Ja(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ja.prototype.va = "";
Ja.prototype.append = function(a, b, c) {
  this.va += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.va += arguments[d];
    }
  }
  return this;
};
Ja.prototype.toString = function() {
  return this.va;
};
var Ka, Ma = null;
function Na() {
  return new s(null, 5, [Oa, !0, Pa, !0, Qa, !1, Ra, !1, Sa, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function Ta(a) {
  return t(a) ? !1 : !0;
}
function u(a, b) {
  return a[q(null == b ? null : b)] ? !0 : a._ ? !0 : v ? !1 : null;
}
function Ua(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = Ua(b), c = t(t(c) ? c.qb : c) ? c.pb : q(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Va(a) {
  var b = a.pb;
  return t(b) ? b : "" + y(a);
}
function z(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Wa(a) {
  return Array.prototype.slice.call(arguments);
}
var Xa = {}, Ya = {};
function Za(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = Za[q(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = $a[q(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var ab = {};
function bb(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = bb[q(null == a ? null : a)];
  if (!c && (c = bb._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var cb = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var h;
    h = A[q(null == a ? null : a)];
    if (!h && (h = A._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.T : a) {
      return a.T(a, b);
    }
    var c;
    c = A[q(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), db = {};
function B(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = B[q(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.U : a) {
    return a.U(a);
  }
  var b;
  b = C[q(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var eb = {}, fb = {}, gb = function() {
  function a(a, b, c) {
    if (a ? a.R : a) {
      return a.R(a, b, c);
    }
    var h;
    h = gb[q(null == a ? null : a)];
    if (!h && (h = gb._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Q : a) {
      return a.Q(a, b);
    }
    var c;
    c = gb[q(null == a ? null : a)];
    if (!c && (c = gb._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function hb(a, b, c) {
  if (a ? a.wa : a) {
    return a.wa(a, b, c);
  }
  var d;
  d = hb[q(null == a ? null : a)];
  if (!d && (d = hb._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var ib = {}, jb = {};
function kb(a) {
  if (a ? a.fb : a) {
    return a.fb();
  }
  var b;
  b = kb[q(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function lb(a) {
  if (a ? a.gb : a) {
    return a.gb();
  }
  var b;
  b = lb[q(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var mb = {};
function nb(a, b, c) {
  if (a ? a.hb : a) {
    return a.hb(a, b, c);
  }
  var d;
  d = nb[q(null == a ? null : a)];
  if (!d && (d = nb._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function ob(a) {
  if (a ? a.Ib : a) {
    return a.state;
  }
  var b;
  b = ob[q(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var pb = {};
function qb(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = qb[q(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var rb = {};
function sb(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = sb[q(null == a ? null : a)];
  if (!c && (c = sb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var tb = {}, ub = function() {
  function a(a, b, c) {
    if (a ? a.N : a) {
      return a.N(a, b, c);
    }
    var h;
    h = ub[q(null == a ? null : a)];
    if (!h && (h = ub._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = ub[q(null == a ? null : a)];
    if (!c && (c = ub._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function vb(a, b) {
  if (a ? a.r : a) {
    return a.r(a, b);
  }
  var c;
  c = vb[q(null == a ? null : a)];
  if (!c && (c = vb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function wb(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = wb[q(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var xb = {};
function yb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = yb[q(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var zb = {};
function D(a, b) {
  if (a ? a.ob : a) {
    return a.ob(0, b);
  }
  var c;
  c = D[q(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Ab = {};
function Bb(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = Bb[q(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Db(a, b, c) {
  if (a ? a.nb : a) {
    return a.nb(0, b, c);
  }
  var d;
  d = Db[q(null == a ? null : a)];
  if (!d && (d = Db._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Eb(a) {
  if (a ? a.Ga : a) {
    return a.Ga(a);
  }
  var b;
  b = Eb[q(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Fb(a, b) {
  if (a ? a.Ia : a) {
    return a.Ia(a, b);
  }
  var c;
  c = Fb[q(null == a ? null : a)];
  if (!c && (c = Fb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Gb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = Gb[q(null == a ? null : a)];
  if (!b && (b = Gb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Hb(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
  }
  var d;
  d = Hb[q(null == a ? null : a)];
  if (!d && (d = Hb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ib(a, b, c) {
  if (a ? a.mb : a) {
    return a.mb(0, b, c);
  }
  var d;
  d = Ib[q(null == a ? null : a)];
  if (!d && (d = Ib._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Jb(a) {
  if (a ? a.kb : a) {
    return a.kb();
  }
  var b;
  b = Jb[q(null == a ? null : a)];
  if (!b && (b = Jb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Kb(a) {
  if (a ? a.Qa : a) {
    return a.Qa(a);
  }
  var b;
  b = Kb[q(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = Lb[q(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Mb(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = Mb[q(null == a ? null : a)];
  if (!b && (b = Mb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  this.dc = a;
  this.o = 0;
  this.f = 1073741824;
}
Nb.prototype.ob = function(a, b) {
  return this.dc.append(b);
};
function Ob(a) {
  var b = new Ja;
  a.s(null, new Nb(b), Na());
  return "" + y(b);
}
function Pb(a, b) {
  if (t(G.a ? G.a(a, b) : G.call(null, a, b))) {
    return 0;
  }
  var c = Ta(a.O);
  if (t(c ? b.O : c)) {
    return-1;
  }
  if (t(a.O)) {
    if (Ta(b.O)) {
      return 1;
    }
    c = Qb.a ? Qb.a(a.O, b.O) : Qb.call(null, a.O, b.O);
    return 0 === c ? Qb.a ? Qb.a(a.name, b.name) : Qb.call(null, a.name, b.name) : c;
  }
  return Rb ? Qb.a ? Qb.a(a.name, b.name) : Qb.call(null, a.name, b.name) : null;
}
function Sb(a, b, c, d, e) {
  this.O = a;
  this.name = b;
  this.la = c;
  this.ma = d;
  this.L = e;
  this.f = 2154168321;
  this.o = 4096;
}
g = Sb.prototype;
g.s = function(a, b) {
  return D(b, this.la);
};
g.u = function() {
  var a = this.ma;
  return null != a ? a : this.ma = a = Tb.a ? Tb.a(H.c ? H.c(this.O) : H.call(null, this.O), H.c ? H.c(this.name) : H.call(null, this.name)) : Tb.call(null, H.c ? H.c(this.O) : H.call(null, this.O), H.c ? H.c(this.name) : H.call(null, this.name));
};
g.F = function(a, b) {
  return new Sb(this.O, this.name, this.la, this.ma, b);
};
g.C = function() {
  return this.L;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gb.b(c, this, null);
      case 3:
        return gb.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return gb.b(a, this, null);
};
g.a = function(a, b) {
  return gb.b(a, this, b);
};
g.r = function(a, b) {
  return b instanceof Sb ? this.la === b.la : !1;
};
g.toString = function() {
  return this.la;
};
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.ee)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ub(a, 0);
  }
  if (u(xb, a)) {
    return yb(a);
  }
  if (v) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null;
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.xa)) {
    return a.I(null);
  }
  a = I(a);
  return null == a ? null : B(a);
}
function K(a) {
  return null != a ? a && (a.f & 64 || a.xa) ? a.U(null) : (a = I(a)) ? C(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.Ha) ? a.S(null) : I(K(a));
}
var G = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || vb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = J(e), e = M(e);
          } else {
            return b.a(d, J(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
Ya["null"] = !0;
Za["null"] = function() {
  return 0;
};
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
vb.number = function(a, b) {
  return a === b;
};
pb["function"] = !0;
qb["function"] = function() {
  return null;
};
Xa["function"] = !0;
wb._ = function(a) {
  return fa(a);
};
var Vb = function() {
  function a(a, b, c, d) {
    for (var l = Za(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(null, c, A.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Za(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, A.a(a, l)) : b.call(null, c, A.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Za(a);
    if (0 === c) {
      return b.t ? b.t() : b.call(null);
    }
    for (var d = A.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, A.a(a, l)) : b.call(null, d, A.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Wb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.t ? b.t() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function Xb(a) {
  return a ? a.f & 2 || a.Hb ? !0 : a.f ? !1 : u(Ya, a) : u(Ya, a);
}
function Yb(a) {
  return a ? a.f & 16 || a.lb ? !0 : a.f ? !1 : u(cb, a) : u(cb, a);
}
function Ub(a, b) {
  this.d = a;
  this.j = b;
  this.f = 166199550;
  this.o = 8192;
}
g = Ub.prototype;
g.u = function() {
  return Zb.c ? Zb.c(this) : Zb.call(null, this);
};
g.S = function() {
  return this.j + 1 < this.d.length ? new Ub(this.d, this.j + 1) : null;
};
g.A = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return Wb.l(this.d, b, this.d[this.j], this.j + 1);
};
g.N = function(a, b, c) {
  return Wb.l(this.d, b, c, this.j);
};
g.D = function() {
  return this;
};
g.P = function() {
  return this.d.length - this.j;
};
g.I = function() {
  return this.d[this.j];
};
g.U = function() {
  return this.j + 1 < this.d.length ? new Ub(this.d, this.j + 1) : L;
};
g.r = function(a, b) {
  return $b.a ? $b.a(this, b) : $b.call(null, this, b);
};
g.T = function(a, b) {
  var c = b + this.j;
  return c < this.d.length ? this.d[c] : null;
};
g.Z = function(a, b, c) {
  a = b + this.j;
  return a < this.d.length ? this.d[a] : c;
};
g.G = function() {
  return L;
};
var ac = function() {
  function a(a, b) {
    return b < a.length ? new Ub(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return ac.a(a, b);
  }
  function b(a) {
    return ac.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
vb._ = function(a, b) {
  return a === b;
};
var bc = function() {
  function a(a, b) {
    return null != a ? bb(a, b) : bb(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
          a = b.a(a, d), d = J(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.Hb)) {
      a = a.P(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (u(Ya, a)) {
            a = Za(a);
          } else {
            if (v) {
              a: {
                a = I(a);
                for (var b = 0;;) {
                  if (Xb(a)) {
                    a = b + Za(a);
                    break a;
                  }
                  a = M(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var cc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return I(a) ? J(a) : c;
      }
      if (Yb(a)) {
        return A.b(a, b, c);
      }
      if (I(a)) {
        a = M(a), b -= 1;
      } else {
        return v ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (I(a)) {
          return J(a);
        }
        throw Error("Index out of bounds");
      }
      if (Yb(a)) {
        return A.a(a, b);
      }
      if (I(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (v) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), dc = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.lb)) {
        return a.Z(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (u(cb, a)) {
        return A.a(a, b);
      }
      if (v) {
        if (a ? a.f & 64 || a.xa || (a.f ? 0 : u(db, a)) : u(db, a)) {
          return cc.b(a, b, c);
        }
        throw Error([y("nth not supported on this type "), y(Va(Ua(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.lb)) {
      return a.T(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u(cb, a)) {
      return A.a(a, b);
    }
    if (v) {
      if (a ? a.f & 64 || a.xa || (a.f ? 0 : u(db, a)) : u(db, a)) {
        return cc.a(a, b);
      }
      throw Error([y("nth not supported on this type "), y(Va(Ua(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), ec = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Kb) ? a.R(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(fb, a) ? gb.b(a, b, c) : v ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Kb) ? a.Q(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(fb, a) ? gb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), hc = function() {
  function a(a, b, c) {
    return null != a ? hb(a, b, c) : fc.a ? fc.a([b], [c]) : fc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), t(l)) {
          d = J(l), e = J(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function ic(a) {
  var b = da(a);
  return b ? b : a ? t(t(null) ? null : a.Gb) ? !0 : a.Vb ? !1 : u(Xa, a) : u(Xa, a);
}
var kc = function jc(b, c) {
  return ic(b) && !(b ? b.f & 262144 || b.he || (b.f ? 0 : u(rb, b)) : u(rb, b)) ? jc(function() {
    "undefined" === typeof Ka && (Ka = function(b, c, f, h) {
      this.i = b;
      this.Ca = c;
      this.gc = f;
      this.ac = h;
      this.o = 0;
      this.f = 393217;
    }, Ka.qb = !0, Ka.pb = "cljs.core/t6593", Ka.Ub = function(b) {
      return D(b, "cljs.core/t6593");
    }, Ka.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return R.a ? R.a(b.Ca, d) : R.call(null, b.Ca, d);
      }
      b.m = 1;
      b.h = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), Ka.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(z(c)));
    }, Ka.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return R.a ? R.a(self__.Ca, b) : R.call(null, self__.Ca, b);
      }
      b.m = 0;
      b.h = function(b) {
        b = I(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), Ka.prototype.Gb = !0, Ka.prototype.C = function() {
      return this.ac;
    }, Ka.prototype.F = function(b, c) {
      return new Ka(this.i, this.Ca, this.gc, c);
    });
    return new Ka(c, b, jc, null);
  }(), c) : null == b ? null : sb(b, c);
};
function lc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.Mb || (a.f ? 0 : u(pb, a)) : u(pb, a) : b) ? qb(a) : null;
}
var mc = {}, nc = 0;
function H(a) {
  if (a && (a.f & 4194304 || a.ce)) {
    a = a.u(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < nc && (mc = {}, nc = 0);
            var b = mc[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              mc[a] = b;
              nc += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : v ? wb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function oc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.de ? !0 : a.f ? !1 : u(ib, a) : u(ib, a);
}
function pc(a) {
  return a ? a.f & 16384 || a.ge ? !0 : a.f ? !1 : u(mb, a) : u(mb, a);
}
function qc(a) {
  return a ? a.o & 512 || a.Zd ? !0 : !1 : !1;
}
function rc(a) {
  var b = [];
  Fa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function sc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function tc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.xa ? !0 : a.f ? !1 : u(db, a) : u(db, a);
}
function uc(a) {
  return t(a) ? !0 : !1;
}
function Qb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ua(a) === Ua(b)) {
    return a && (a.o & 2048 || a.Ea) ? a.Fa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (v) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var vc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Qb(dc.a(a, h), dc.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), h = Q(b);
    return f < h ? -1 : f > h ? 1 : v ? c.l(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    for (c = I(c);;) {
      if (c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? wc.b ? wc.b(a, J(c), M(c)) : wc.call(null, a, J(c), M(c)) : a.t ? a.t() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), wc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Ob) ? c.N(null, a, b) : c instanceof Array ? Wb.b(c, a, b) : "string" === typeof c ? Wb.b(c, a, b) : u(tb, c) ? ub.b(c, a, b) : v ? S.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Ob) ? b.M(null, a) : b instanceof Array ? Wb.a(b, a) : "string" === typeof b ? Wb.a(b, a) : u(tb, b) ? ub.a(b, a) : v ? S.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function xc(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.c ? Math.floor.c((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.c ? Math.ceil.c((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function yc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Ja(b.c(a)), l = d;;) {
        if (t(l)) {
          e = e.append(b.c(J(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.h = function(a) {
      var b = J(a);
      a = K(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.t = function() {
    return "";
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function $b(a, b) {
  return uc((b ? b.f & 16777216 || b.fe || (b.f ? 0 : u(zb, b)) : u(zb, b)) ? function() {
    for (var c = I(a), d = I(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (G.a(J(c), J(d))) {
        c = M(c), d = M(d);
      } else {
        return v ? !1 : null;
      }
    }
  }() : null);
}
function Tb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Zb(a) {
  if (I(a)) {
    var b = H(J(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = Tb(b, H(J(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function zc(a) {
  var b = 0;
  for (a = I(a);;) {
    if (a) {
      var c = J(a), b = (b + (H(Ac.c ? Ac.c(c) : Ac.call(null, c)) ^ H(Bc.c ? Bc.c(c) : Bc.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function Cc(a, b, c, d, e) {
  this.i = a;
  this.za = b;
  this.ia = c;
  this.count = d;
  this.k = e;
  this.f = 65937646;
  this.o = 8192;
}
g = Cc.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  return 1 === this.count ? null : this.ia;
};
g.A = function(a, b) {
  return new Cc(this.i, b, this, this.count + 1, null);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return this.count;
};
g.I = function() {
  return this.za;
};
g.U = function() {
  return 1 === this.count ? L : this.ia;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Cc(b, this.za, this.ia, this.count, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return L;
};
function Dc(a) {
  this.i = a;
  this.f = 65937614;
  this.o = 8192;
}
g = Dc.prototype;
g.u = function() {
  return 0;
};
g.S = function() {
  return null;
};
g.A = function(a, b) {
  return new Cc(this.i, b, null, 1, null);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return null;
};
g.P = function() {
  return 0;
};
g.I = function() {
  return null;
};
g.U = function() {
  return L;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Dc(b);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return this;
};
var L = new Dc(null), Ec = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Ub && 0 === a.j) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.I(null)), a = a.S(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = L;;) {
      if (0 < a) {
        var f = a - 1, e = e.A(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Fc(a, b, c, d) {
  this.i = a;
  this.za = b;
  this.ia = c;
  this.k = d;
  this.f = 65929452;
  this.o = 8192;
}
g = Fc.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  return null == this.ia ? null : I(this.ia);
};
g.A = function(a, b) {
  return new Fc(null, b, this, this.k);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.za;
};
g.U = function() {
  return null == this.ia ? L : this.ia;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Fc(b, this.za, this.ia, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return kc(L, this.i);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.xa)) ? new Fc(null, a, b, null) : new Fc(null, a, I(b), null);
}
function T(a, b, c, d) {
  this.O = a;
  this.name = b;
  this.ka = c;
  this.ma = d;
  this.f = 2153775105;
  this.o = 4096;
}
g = T.prototype;
g.s = function(a, b) {
  return D(b, [y(":"), y(this.ka)].join(""));
};
g.u = function() {
  null == this.ma && (this.ma = Tb(H(this.O), H(this.name)) + 2654435769);
  return this.ma;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ec.a(c, this);
      case 3:
        return ec.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return ec.a(a, this);
};
g.a = function(a, b) {
  return ec.b(a, this, b);
};
g.r = function(a, b) {
  return b instanceof T ? this.ka === b.ka : !1;
};
g.toString = function() {
  return[y(":"), y(this.ka)].join("");
};
var Hc = function() {
  function a(a, b) {
    return new T(a, b, [y(t(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof T) {
      return a;
    }
    if (a instanceof Sb) {
      var b;
      if (a && (a.o & 4096 || a.Nb)) {
        b = a.O;
      } else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new T(b, Gc.c ? Gc.c(a) : Gc.call(null, a), a.la, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new T(b[0], b[1], a, null) : new T(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function U(a, b, c, d) {
  this.i = a;
  this.ua = b;
  this.p = c;
  this.k = d;
  this.o = 0;
  this.f = 32374988;
}
g = U.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  yb(this);
  return null == this.p ? null : M(this.p);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
function Ic(a) {
  null != a.ua && (a.p = a.ua.t ? a.ua.t() : a.ua.call(null), a.ua = null);
  return a.p;
}
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  Ic(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof U) {
      a = Ic(a);
    } else {
      return this.p = a, I(this.p);
    }
  }
};
g.I = function() {
  yb(this);
  return null == this.p ? null : J(this.p);
};
g.U = function() {
  yb(this);
  return null != this.p ? K(this.p) : L;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new U(b, this.ua, this.p, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return kc(L, this.i);
};
function Jc(a, b) {
  this.Na = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
Jc.prototype.P = function() {
  return this.end;
};
Jc.prototype.add = function(a) {
  this.Na[this.end] = a;
  return this.end += 1;
};
Jc.prototype.W = function() {
  var a = new Kc(this.Na, 0, this.end);
  this.Na = null;
  return a;
};
function Kc(a, b, c) {
  this.d = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = Kc.prototype;
g.M = function(a, b) {
  return Wb.l(this.d, b, this.d[this.q], this.q + 1);
};
g.N = function(a, b, c) {
  return Wb.l(this.d, b, c, this.q);
};
g.kb = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Kc(this.d, this.q + 1, this.end);
};
g.T = function(a, b) {
  return this.d[this.q + b];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.d[this.q + b] : c;
};
g.P = function() {
  return this.end - this.q;
};
var Lc = function() {
  function a(a, b, c) {
    return new Kc(a, b, c);
  }
  function b(a, b) {
    return new Kc(a, b, a.length);
  }
  function c(a) {
    return new Kc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Mc(a, b, c, d) {
  this.W = a;
  this.ca = b;
  this.i = c;
  this.k = d;
  this.f = 31850732;
  this.o = 1536;
}
g = Mc.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  if (1 < Za(this.W)) {
    return new Mc(Jb(this.W), this.ca, this.i, null);
  }
  var a = yb(this.ca);
  return null == a ? null : a;
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return A.a(this.W, 0);
};
g.U = function() {
  return 1 < Za(this.W) ? new Mc(Jb(this.W), this.ca, this.i, null) : null == this.ca ? L : this.ca;
};
g.Pa = function() {
  return null == this.ca ? null : this.ca;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Mc(this.W, this.ca, b, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return kc(L, this.i);
};
g.Qa = function() {
  return this.W;
};
g.Ra = function() {
  return null == this.ca ? L : this.ca;
};
function Nc(a, b) {
  return 0 === Za(a) ? b : new Mc(a, b, null, null);
}
function Oc(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Pc(a, b) {
  if (Xb(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Rc = function Qc(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : v ? O(J(b), Qc(M(b))) : null;
}, Sc = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = I(a);
      return c ? qc(c) ? Nc(Kb(c), d.a(Lb(c), b)) : O(J(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new U(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new U(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, f) {
      var e = null;
      2 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new U(null, function() {
          var c = I(a);
          return c ? qc(c) ? Nc(Kb(c), r(Lb(c), b)) : O(J(c), r(K(c), b)) : t(b) ? r(J(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.m = 2;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.h = e.h;
  d.t = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Tc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, n) {
      var r = null;
      4 < arguments.length && (r = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, r);
    }
    function b(a, c, d, e, f) {
      return O(a, O(c, O(d, O(e, Rc(f)))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var n = J(a);
      a = K(a);
      return b(c, d, e, n, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return O(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.e(c, f, h, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.h = d.h;
  c.c = function(a) {
    return I(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.b = b;
  c.l = a;
  c.e = d.e;
  return c;
}(), Uc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Hb(a, c, d), t(k)) {
          c = J(k), d = J(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = M(a);
      var k = J(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Hb(a, d, e);
      default:
        return b.e(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.h = b.h;
  a.b = function(a, b, e) {
    return Hb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Vc(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.t ? a.t() : a.call(null);
  }
  c = B(d);
  var e = C(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = B(e), f = C(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = B(f), h = C(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = B(h), k = C(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = B(k);
  k = C(k);
  if (5 === b) {
    return a.B ? a.B(c, d, e, f, h) : a.B ? a.B(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = B(k);
  var l = C(k);
  if (6 === b) {
    return a.fa ? a.fa(c, d, e, f, h, a) : a.fa ? a.fa(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var k = B(l), p = C(l);
  if (7 === b) {
    return a.ra ? a.ra(c, d, e, f, h, a, k) : a.ra ? a.ra(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = B(p), n = C(p);
  if (8 === b) {
    return a.cb ? a.cb(c, d, e, f, h, a, k, l) : a.cb ? a.cb(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var p = B(n), r = C(n);
  if (9 === b) {
    return a.eb ? a.eb(c, d, e, f, h, a, k, l, p) : a.eb ? a.eb(c, d, e, f, h, a, k, l, p) : a.call(null, c, d, e, f, h, a, k, l, p);
  }
  var n = B(r), x = C(r);
  if (10 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, a, k, l, p, n) : a.Sa ? a.Sa(c, d, e, f, h, a, k, l, p, n) : a.call(null, c, d, e, f, h, a, k, l, p, n);
  }
  var r = B(x), F = C(x);
  if (11 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, a, k, l, p, n, r) : a.Ta ? a.Ta(c, d, e, f, h, a, k, l, p, n, r) : a.call(null, c, d, e, f, h, a, k, l, p, n, r);
  }
  var x = B(F), E = C(F);
  if (12 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, a, k, l, p, n, r, x) : a.Ua ? a.Ua(c, d, e, f, h, a, k, l, p, n, r, x) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x);
  }
  var F = B(E), P = C(E);
  if (13 === b) {
    return a.Va ? a.Va(c, d, e, f, h, a, k, l, p, n, r, x, F) : a.Va ? a.Va(c, d, e, f, h, a, k, l, p, n, r, x, F) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F);
  }
  var E = B(P), W = C(P);
  if (14 === b) {
    return a.Wa ? a.Wa(c, d, e, f, h, a, k, l, p, n, r, x, F, E) : a.Wa ? a.Wa(c, d, e, f, h, a, k, l, p, n, r, x, F, E) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E);
  }
  var P = B(W), ga = C(W);
  if (15 === b) {
    return a.Xa ? a.Xa(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P) : a.Xa ? a.Xa(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P);
  }
  var W = B(ga), pa = C(ga);
  if (16 === b) {
    return a.Ya ? a.Ya(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W) : a.Ya ? a.Ya(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W);
  }
  var ga = B(pa), La = C(pa);
  if (17 === b) {
    return a.Za ? a.Za(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga) : a.Za ? a.Za(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga);
  }
  var pa = B(La), gc = C(La);
  if (18 === b) {
    return a.$a ? a.$a(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa) : a.$a ? a.$a(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa);
  }
  La = B(gc);
  gc = C(gc);
  if (19 === b) {
    return a.ab ? a.ab(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La) : a.ab ? a.ab(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La);
  }
  var Cb = B(gc);
  C(gc);
  if (20 === b) {
    return a.bb ? a.bb(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La, Cb) : a.bb ? a.bb(c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La, Cb) : a.call(null, c, d, e, f, h, a, k, l, p, n, r, x, F, E, P, W, ga, pa, La, Cb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, f) {
    b = Tc.l(b, c, d, f);
    c = a.m;
    return a.h ? (d = Pc(b, c + 1), d <= c ? Vc(a, d, b) : a.h(b)) : a.apply(a, Oc(b));
  }
  function b(a, b, c, d) {
    b = Tc.b(b, c, d);
    c = a.m;
    return a.h ? (d = Pc(b, c + 1), d <= c ? Vc(a, d, b) : a.h(b)) : a.apply(a, Oc(b));
  }
  function c(a, b, c) {
    b = Tc.a(b, c);
    c = a.m;
    if (a.h) {
      var d = Pc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.h(b);
    }
    return a.apply(a, Oc(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.h) {
      var d = Pc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.h(b);
    }
    return a.apply(a, Oc(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, h, F) {
      var E = null;
      5 < arguments.length && (E = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, h, E);
    }
    function b(a, c, d, f, e, h) {
      c = O(c, O(d, O(f, O(e, Rc(h)))));
      d = a.m;
      return a.h ? (f = Pc(c, d + 1), f <= d ? Vc(a, f, c) : a.h(c)) : a.apply(a, Oc(c));
    }
    a.m = 5;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var f = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, f, e, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, n, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, n);
      default:
        return f.e(e, k, l, p, n, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = f.h;
  e.a = d;
  e.b = c;
  e.l = b;
  e.B = a;
  e.e = f.e;
  return e;
}(), Wc = function() {
  function a(a, b) {
    return!G.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ta(R.l(G, a, c, d));
    }
    a.m = 2;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.c = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Xc(a, b) {
  for (;;) {
    if (null == I(b)) {
      return!0;
    }
    if (t(a.c ? a.c(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return v ? !1 : null;
    }
  }
}
function Yc(a) {
  for (var b = Zc;;) {
    if (I(a)) {
      var c = b.c ? b.c(J(a)) : b.call(null, J(a));
      if (t(c)) {
        return c;
      }
      a = M(a);
    } else {
      return null;
    }
  }
}
function Zc(a) {
  return a;
}
var V = function() {
  function a(a, b, c, e) {
    return new U(null, function() {
      var p = I(b), n = I(c), r = I(e);
      return p && n && r ? O(a.b ? a.b(J(p), J(n), J(r)) : a.call(null, J(p), J(n), J(r)), d.l(a, K(p), K(n), K(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var e = I(b), p = I(c);
      return e && p ? O(a.a ? a.a(J(e), J(p)) : a.call(null, J(e), J(p)), d.b(a, K(e), K(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = I(b);
      if (c) {
        if (qc(c)) {
          for (var e = Kb(c), p = Q(e), n = new Jc(Array(p), 0), r = 0;;) {
            if (r < p) {
              var x = a.c ? a.c(A.a(e, r)) : a.call(null, A.a(e, r));
              n.add(x);
              r += 1;
            } else {
              break;
            }
          }
          return Nc(n.W(), d.a(a, Lb(c)));
        }
        return O(a.c ? a.c(J(c)) : a.call(null, J(c)), d.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var x = null;
      4 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return R.a(a, b);
      }, function F(a) {
        return new U(null, function() {
          var b = d.a(I, a);
          return Xc(Zc, b) ? O(d.a(J, b), F(d.a(K, b))) : null;
        }, null, null);
      }(bc.e(h, f, N([e, c], 0))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}();
function $c(a, b) {
  return new U(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = I(d), 0 < c && d) {
          c -= 1, d = K(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
var ad = function() {
  function a(a, c) {
    return new U(null, function() {
      var f = I(a), h = I(c);
      return f && h ? O(J(f), O(J(h), b.a(K(f), K(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new U(null, function() {
        var c = V.a(I, bc.e(e, d, N([a], 0)));
        return Xc(Zc, c) ? Sc.a(V.a(J, c), R.a(b, V.a(K, c))) : null;
      }, null, null);
    }
    a.m = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}(), cd = function bd(b, c) {
  return new U(null, function() {
    var d = I(c);
    if (d) {
      if (qc(d)) {
        for (var e = Kb(d), f = Q(e), h = new Jc(Array(f), 0), k = 0;;) {
          if (k < f) {
            if (t(b.c ? b.c(A.a(e, k)) : b.call(null, A.a(e, k)))) {
              var l = A.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Nc(h.W(), bd(b, Lb(d)));
      }
      e = J(d);
      d = K(d);
      return t(b.c ? b.c(e) : b.call(null, e)) ? O(e, bd(b, d)) : bd(b, d);
    }
    return null;
  }, null, null);
};
function dd(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.ae) ? (c = wc.b(Fb, Eb(a), b), c = Gb(c)) : c = wc.b(bb, a, b) : c = wc.b(bc, L, b);
  return c;
}
function ed(a, b) {
  this.n = a;
  this.d = b;
}
function fd(a) {
  return new ed(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function gd(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function hd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = fd(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var jd = function id(b, c, d, e) {
  var f = new ed(d.n, z(d.d)), h = b.g - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? id(b, c - 5, d, e) : hd(null, c - 5, e), f.d[h] = b);
  return f;
};
function kd(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function ld(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= gd(a)) {
      return a.K;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return kd(b, a.g);
  }
}
var nd = function md(b, c, d, e, f) {
  var h = new ed(d.n, z(d.d));
  if (0 === c) {
    h.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = md(b, c - 5, d.d[k], e, f);
    h.d[k] = b;
  }
  return h;
};
function X(a, b, c, d, e, f) {
  this.i = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.K = e;
  this.k = f;
  this.o = 8196;
  this.f = 167668511;
}
g = X.prototype;
g.Ga = function() {
  return new od(this.g, this.shift, pd.c ? pd.c(this.root) : pd.call(null, this.root), qd.c ? qd.c(this.K) : qd.call(null, this.K));
};
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.Q = function(a, b) {
  return A.b(this, b, null);
};
g.R = function(a, b, c) {
  return A.b(this, b, c);
};
g.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return nb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.T(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return this.T(null, a);
};
g.a = function(a, b) {
  return this.Z(null, a, b);
};
g.A = function(a, b) {
  if (32 > this.g - gd(this)) {
    for (var c = this.K.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.K[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.i, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = fd(null), d.d[0] = this.root, e = hd(null, this.shift, new ed(null, this.K)), d.d[1] = e) : d = jd(this, this.shift, this.root, new ed(null, this.K));
  return new X(this.i, this.g + 1, c, d, [b], null);
};
g.fb = function() {
  return A.a(this, 0);
};
g.gb = function() {
  return A.a(this, 1);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return Vb.a(this, b);
};
g.N = function(a, b, c) {
  return Vb.b(this, b, c);
};
g.D = function() {
  return 0 === this.g ? null : 32 > this.g ? N.c(this.K) : v ? Y.b ? Y.b(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
g.P = function() {
  return this.g;
};
g.hb = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return gd(this) <= b ? (a = z(this.K), a[b & 31] = c, new X(this.i, this.g, this.shift, this.root, a, null)) : new X(this.i, this.g, this.shift, nd(this, this.shift, this.root, b, c), this.K, null);
  }
  if (b === this.g) {
    return bb(this, c);
  }
  if (v) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.g), y("]")].join(""));
  }
  return null;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new X(b, this.g, this.shift, this.root, this.K, this.k);
};
g.C = function() {
  return this.i;
};
g.T = function(a, b) {
  return ld(this, b)[b & 31];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? A.a(this, b) : c;
};
g.G = function() {
  return kc(rd, this.i);
};
var sd = new ed(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), rd = new X(null, 0, 5, sd, [], 0);
function td(a) {
  return Gb(wc.b(Fb, Eb(rd), a));
}
function ud(a, b, c, d, e, f) {
  this.w = a;
  this.Y = b;
  this.j = c;
  this.q = d;
  this.i = e;
  this.k = f;
  this.f = 32243948;
  this.o = 1536;
}
g = ud.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  if (this.q + 1 < this.Y.length) {
    var a = Y.l ? Y.l(this.w, this.Y, this.j, this.q + 1) : Y.call(null, this.w, this.Y, this.j, this.q + 1);
    return null == a ? null : a;
  }
  return Mb(this);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return Vb.a(vd.b ? vd.b(this.w, this.j + this.q, Q(this.w)) : vd.call(null, this.w, this.j + this.q, Q(this.w)), b);
};
g.N = function(a, b, c) {
  return Vb.b(vd.b ? vd.b(this.w, this.j + this.q, Q(this.w)) : vd.call(null, this.w, this.j + this.q, Q(this.w)), b, c);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.Y[this.q];
};
g.U = function() {
  if (this.q + 1 < this.Y.length) {
    var a = Y.l ? Y.l(this.w, this.Y, this.j, this.q + 1) : Y.call(null, this.w, this.Y, this.j, this.q + 1);
    return null == a ? L : a;
  }
  return Lb(this);
};
g.Pa = function() {
  var a = this.Y.length, a = this.j + a < Za(this.w) ? Y.b ? Y.b(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? null : a;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return Y.B ? Y.B(this.w, this.Y, this.j, this.q, b) : Y.call(null, this.w, this.Y, this.j, this.q, b);
};
g.G = function() {
  return kc(rd, this.i);
};
g.Qa = function() {
  return Lc.a(this.Y, this.q);
};
g.Ra = function() {
  var a = this.Y.length, a = this.j + a < Za(this.w) ? Y.b ? Y.b(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? L : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new ud(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new ud(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new ud(a, ld(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.B = a;
  return d;
}();
function wd(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.f = 166617887;
  this.o = 8192;
}
g = wd.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.Q = function(a, b) {
  return A.b(this, b, null);
};
g.R = function(a, b, c) {
  return A.b(this, b, c);
};
g.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return nb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.T(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return this.T(null, a);
};
g.a = function(a, b) {
  return this.Z(null, a, b);
};
g.A = function(a, b) {
  return xd.B ? xd.B(this.i, nb(this.da, this.end, b), this.start, this.end + 1, null) : xd.call(null, this.i, nb(this.da, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return Vb.a(this, b);
};
g.N = function(a, b, c) {
  return Vb.b(this, b, c);
};
g.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(A.a(a.da, d), new U(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.P = function() {
  return this.end - this.start;
};
g.hb = function(a, b, c) {
  var d = this, e = d.start + b;
  return xd.B ? xd.B(d.i, hc.b(d.da, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : xd.call(null, d.i, hc.b(d.da, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return xd.B ? xd.B(b, this.da, this.start, this.end, this.k) : xd.call(null, b, this.da, this.start, this.end, this.k);
};
g.C = function() {
  return this.i;
};
g.T = function(a, b) {
  return 0 > b || this.end <= this.start + b ? kd(b, this.end - this.start) : A.a(this.da, this.start + b);
};
g.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.b(this.da, this.start + b, c);
};
g.G = function() {
  return kc(rd, this.i);
};
function xd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof wd) {
      c = b.start + c, d = b.start + d, b = b.da;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new wd(a, b, c, d, e);
    }
  }
}
var vd = function() {
  function a(a, b, c) {
    return xd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, Q(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function pd(a) {
  return new ed({}, z(a.d));
}
function qd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  sc(a, 0, b, 0, a.length);
  return b;
}
var zd = function yd(b, c, d, e) {
  d = b.root.n === d.n ? d : new ed(b.root.n, z(d.d));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[f];
    b = null != h ? yd(b, c - 5, h, e) : hd(b.root.n, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function od(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.f = 275;
  this.o = 88;
}
g = od.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Q(null, c);
      case 3:
        return this.R(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return this.Q(null, a);
};
g.a = function(a, b) {
  return this.R(null, a, b);
};
g.Q = function(a, b) {
  return A.b(this, b, null);
};
g.R = function(a, b, c) {
  return A.b(this, b, c);
};
g.T = function(a, b) {
  if (this.root.n) {
    return ld(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? A.a(this, b) : c;
};
g.P = function() {
  if (this.root.n) {
    return this.g;
  }
  throw Error("count after persistent!");
};
g.mb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.g) {
      return gd(this) <= b ? d.K[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new ed(d.root.n, z(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var p = b >>> a & 31, n = f(a - 5, l.d[p]);
          l.d[p] = n;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.g) {
      return Fb(this, c);
    }
    if (v) {
      throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.g)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.ya = function(a, b, c) {
  return Ib(this, b, c);
};
g.Ia = function(a, b) {
  if (this.root.n) {
    if (32 > this.g - gd(this)) {
      this.K[this.g & 31] = b;
    } else {
      var c = new ed(this.root.n, this.K), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.K = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = hd(this.root.n, this.shift, c);
        this.root = new ed(this.root.n, d);
        this.shift = e;
      } else {
        this.root = zd(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ja = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.g - gd(this), b = Array(a);
    sc(this.K, 0, b, 0, a);
    return new X(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Ad() {
  this.o = 0;
  this.f = 2097152;
}
Ad.prototype.r = function() {
  return!1;
};
var Bd = new Ad;
function Cd(a, b) {
  return uc(oc(b) ? Q(a) === Q(b) ? Xc(Zc, V.a(function(a) {
    return G.a(ec.b(b, J(a), Bd), J(M(a)));
  }, a)) : null : null);
}
function Dd(a, b) {
  var c = a.d;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.ka, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof T && e === h.ka) {
          c = f;
          break a;
        }
        if (v) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (v) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Sb) {
        a: {
          d = c.length;
          e = b.la;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Sb && e === h.la) {
              c = f;
              break a;
            }
            if (v) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (v) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (v) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (G.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (v) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Ed(a, b, c) {
  this.d = a;
  this.j = b;
  this.L = c;
  this.o = 0;
  this.f = 32374990;
}
g = Ed.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  return this.j < this.d.length - 2 ? new Ed(this.d, this.j + 2, this.L) : null;
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return(this.d.length - this.j) / 2;
};
g.I = function() {
  return new X(null, 2, 5, sd, [this.d[this.j], this.d[this.j + 1]], null);
};
g.U = function() {
  return this.j < this.d.length - 2 ? new Ed(this.d, this.j + 2, this.L) : L;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Ed(this.d, this.j, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return kc(L, this.L);
};
function s(a, b, c, d) {
  this.i = a;
  this.g = b;
  this.d = c;
  this.k = d;
  this.o = 8196;
  this.f = 16123663;
}
g = s.prototype;
g.Ga = function() {
  return new Fd({}, this.d.length, z(this.d));
};
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = zc(this);
};
g.Q = function(a, b) {
  return gb.b(this, b, null);
};
g.R = function(a, b, c) {
  a = Dd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
g.wa = function(a, b, c) {
  a = Dd(this, b);
  if (-1 === a) {
    if (this.g < Gd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new s(this.i, this.g + 1, e, null);
    }
    return sb(hb(dd(Hd, this), b, c), this.i);
  }
  return c === this.d[a + 1] ? this : v ? (b = z(this.d), b[a + 1] = c, new s(this.i, this.g, b, null)) : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Q(null, c);
      case 3:
        return this.R(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return this.Q(null, a);
};
g.a = function(a, b) {
  return this.R(null, a, b);
};
g.A = function(a, b) {
  return pc(b) ? hb(this, A.a(b, 0), A.a(b, 1)) : wc.b(bb, this, b);
};
g.toString = function() {
  return Ob(this);
};
g.D = function() {
  return 0 <= this.d.length - 2 ? new Ed(this.d, 0, null) : null;
};
g.P = function() {
  return this.g;
};
g.r = function(a, b) {
  return Cd(this, b);
};
g.F = function(a, b) {
  return new s(b, this.g, this.d, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return sb(Id, this.i);
};
var Id = new s(null, 0, [], null), Gd = 8;
function Jd(a) {
  for (var b = a.length, c = 0, d = Eb(Id);;) {
    if (c < b) {
      var e = c + 2, d = Hb(d, a[c], a[c + 1]), c = e
    } else {
      return Gb(d);
    }
  }
}
function Fd(a, b, c) {
  this.sa = a;
  this.oa = b;
  this.d = c;
  this.o = 56;
  this.f = 258;
}
g = Fd.prototype;
g.ya = function(a, b, c) {
  if (t(this.sa)) {
    a = Dd(this, b);
    if (-1 === a) {
      return this.oa + 2 <= 2 * Gd ? (this.oa += 2, this.d.push(b), this.d.push(c), this) : Uc.b(Kd.a ? Kd.a(this.oa, this.d) : Kd.call(null, this.oa, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ia = function(a, b) {
  if (t(this.sa)) {
    if (b ? b.f & 2048 || b.Lb || (b.f ? 0 : u(jb, b)) : u(jb, b)) {
      return Hb(this, Ac.c ? Ac.c(b) : Ac.call(null, b), Bc.c ? Bc.c(b) : Bc.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = J(c);
      if (t(e)) {
        c = M(c), d = Hb(d, Ac.c ? Ac.c(e) : Ac.call(null, e), Bc.c ? Bc.c(e) : Bc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ja = function() {
  if (t(this.sa)) {
    return this.sa = !1, new s(null, xc(this.oa), this.d, null);
  }
  throw Error("persistent! called twice");
};
g.Q = function(a, b) {
  return gb.b(this, b, null);
};
g.R = function(a, b, c) {
  if (t(this.sa)) {
    return a = Dd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.P = function() {
  if (t(this.sa)) {
    return xc(this.oa);
  }
  throw Error("count after persistent!");
};
function Kd(a, b) {
  for (var c = Eb(Hd), d = 0;;) {
    if (d < a) {
      c = Uc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ld() {
  this.ea = !1;
}
function Md(a, b) {
  return a === b ? !0 : a === b || a instanceof T && b instanceof T && a.ka === b.ka ? !0 : v ? G.a(a, b) : null;
}
var Nd = function() {
  function a(a, b, c, h, k) {
    a = z(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = z(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.B = a;
  return c;
}(), Od = function() {
  function a(a, b, c, h, k, l) {
    a = a.ta(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ta(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.fa = a;
  return c;
}();
function Pd(a, b, c) {
  this.n = a;
  this.v = b;
  this.d = c;
}
g = Pd.prototype;
g.aa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = yc(this.v & h - 1);
  if (0 === (this.v & h)) {
    var l = yc(this.v);
    if (2 * l < this.d.length) {
      a = this.ta(a);
      b = a.d;
      f.ea = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.v |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Qd.aa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.v >>> d & 1) && (k[d] = null != this.d[e] ? Qd.aa(a, b + 5, H(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Rd(a, l + 1, k);
    }
    return v ? (b = Array(2 * (l + 4)), sc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, sc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ea = !0, a = this.ta(a), a.d = b, a.v |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.aa(a, b + 5, c, d, e, f), l === h ? this : Od.l(this, a, 2 * k + 1, l)) : Md(d, l) ? e === h ? this : Od.l(this, a, 2 * k + 1, e) : v ? (f.ea = !0, Od.fa(this, a, 2 * k, null, 2 * k + 1, Sd.ra ? Sd.ra(a, b + 5, l, h, c, d, e) : Sd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.Aa = function() {
  return Td.c ? Td.c(this.d) : Td.call(null, this.d);
};
g.ta = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = yc(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.d, 0, c, 0, 2 * b);
  return new Pd(a, this.v, c);
};
g.$ = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = yc(this.v & f - 1);
  if (0 === (this.v & f)) {
    var k = yc(this.v);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Qd.$(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.v >>> c & 1) && (h[c] = null != this.d[d] ? Qd.$(a + 5, H(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Rd(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    sc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    sc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ea = !0;
    return new Pd(null, this.v | f, a);
  }
  k = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == k ? (k = f.$(a + 5, b, c, d, e), k === f ? this : new Pd(null, this.v, Nd.b(this.d, 2 * h + 1, k))) : Md(c, k) ? d === f ? this : new Pd(null, this.v, Nd.b(this.d, 2 * h + 1, d)) : v ? (e.ea = !0, new Pd(null, this.v, Nd.B(this.d, 2 * h, null, 2 * h + 1, Sd.fa ? Sd.fa(a + 5, k, f, b, c, d) : Sd.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.na = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.v & e)) {
    return d;
  }
  var f = yc(this.v & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.na(a + 5, b, c, d) : Md(c, e) ? f : v ? d : null;
};
var Qd = new Pd(null, 0, []);
function Rd(a, b, c) {
  this.n = a;
  this.g = b;
  this.d = c;
}
g = Rd.prototype;
g.aa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = Od.l(this, a, h, Qd.aa(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.aa(a, b + 5, c, d, e, f);
  return b === k ? this : Od.l(this, a, h, b);
};
g.Aa = function() {
  return Ud.c ? Ud.c(this.d) : Ud.call(null, this.d);
};
g.ta = function(a) {
  return a === this.n ? this : new Rd(a, this.g, z(this.d));
};
g.$ = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if (null == h) {
    return new Rd(null, this.g + 1, Nd.b(this.d, f, Qd.$(a + 5, b, c, d, e)));
  }
  a = h.$(a + 5, b, c, d, e);
  return a === h ? this : new Rd(null, this.g, Nd.b(this.d, f, a));
};
g.na = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.na(a + 5, b, c, d) : d;
};
function Vd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Md(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Wd(a, b, c, d) {
  this.n = a;
  this.ja = b;
  this.g = c;
  this.d = d;
}
g = Wd.prototype;
g.aa = function(a, b, c, d, e, f) {
  if (c === this.ja) {
    b = Vd(this.d, this.g, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.g) {
        return a = Od.fa(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.ea = !0, a.g += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      sc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ea = !0;
      f = this.g + 1;
      a === this.n ? (this.d = b, this.g = f, a = this) : a = new Wd(this.n, this.ja, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Od.l(this, a, b + 1, e);
  }
  return(new Pd(a, 1 << (this.ja >>> b & 31), [null, this, null, null])).aa(a, b, c, d, e, f);
};
g.Aa = function() {
  return Td.c ? Td.c(this.d) : Td.call(null, this.d);
};
g.ta = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  sc(this.d, 0, b, 0, 2 * this.g);
  return new Wd(a, this.ja, this.g, b);
};
g.$ = function(a, b, c, d, e) {
  return b === this.ja ? (a = Vd(this.d, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), sc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ea = !0, new Wd(null, this.ja, this.g + 1, b)) : G.a(this.d[a], d) ? this : new Wd(null, this.ja, this.g, Nd.b(this.d, a + 1, d))) : (new Pd(null, 1 << (this.ja >>> a & 31), [null, this])).$(a, b, c, d, e);
};
g.na = function(a, b, c, d) {
  a = Vd(this.d, this.g, c);
  return 0 > a ? d : Md(c, this.d[a]) ? this.d[a + 1] : v ? d : null;
};
var Sd = function() {
  function a(a, b, c, h, k, l, p) {
    var n = H(c);
    if (n === k) {
      return new Wd(null, n, 2, [c, h, l, p]);
    }
    var r = new Ld;
    return Qd.aa(a, b, n, c, h, r).aa(a, b, k, l, p, r);
  }
  function b(a, b, c, h, k, l) {
    var p = H(b);
    if (p === h) {
      return new Wd(null, p, 2, [b, c, k, l]);
    }
    var n = new Ld;
    return Qd.$(a, p, b, c, n).$(a, h, k, l, n);
  }
  var c = null, c = function(c, e, f, h, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.fa = b;
  c.ra = a;
  return c;
}();
function Xd(a, b, c, d, e) {
  this.i = a;
  this.ba = b;
  this.j = c;
  this.p = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = Xd.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return null == this.p ? new X(null, 2, 5, sd, [this.ba[this.j], this.ba[this.j + 1]], null) : J(this.p);
};
g.U = function() {
  return null == this.p ? Td.b ? Td.b(this.ba, this.j + 2, null) : Td.call(null, this.ba, this.j + 2, null) : Td.b ? Td.b(this.ba, this.j, M(this.p)) : Td.call(null, this.ba, this.j, M(this.p));
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Xd(b, this.ba, this.j, this.p, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return kc(L, this.i);
};
var Td = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Xd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (t(h) && (h = h.Aa(), t(h))) {
            return new Xd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Xd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
}();
function Yd(a, b, c, d, e) {
  this.i = a;
  this.ba = b;
  this.j = c;
  this.p = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = Yd.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return J(this.p);
};
g.U = function() {
  return Ud.l ? Ud.l(null, this.ba, this.j, M(this.p)) : Ud.call(null, null, this.ba, this.j, M(this.p));
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new Yd(b, this.ba, this.j, this.p, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return kc(L, this.i);
};
var Ud = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (t(k) && (k = k.Aa(), t(k))) {
            return new Yd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Yd(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function Zd(a, b, c, d, e, f) {
  this.i = a;
  this.g = b;
  this.root = c;
  this.V = d;
  this.X = e;
  this.k = f;
  this.o = 8196;
  this.f = 16123663;
}
g = Zd.prototype;
g.Ga = function() {
  return new $d({}, this.root, this.g, this.V, this.X);
};
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = zc(this);
};
g.Q = function(a, b) {
  return gb.b(this, b, null);
};
g.R = function(a, b, c) {
  return null == b ? this.V ? this.X : c : null == this.root ? c : v ? this.root.na(0, H(b), b, c) : null;
};
g.wa = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.X ? this : new Zd(this.i, this.V ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new Ld;
  b = (null == this.root ? Qd : this.root).$(0, H(b), b, c, a);
  return b === this.root ? this : new Zd(this.i, a.ea ? this.g + 1 : this.g, b, this.V, this.X, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Q(null, c);
      case 3:
        return this.R(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return this.Q(null, a);
};
g.a = function(a, b) {
  return this.R(null, a, b);
};
g.A = function(a, b) {
  return pc(b) ? hb(this, A.a(b, 0), A.a(b, 1)) : wc.b(bb, this, b);
};
g.toString = function() {
  return Ob(this);
};
g.D = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Aa() : null;
    return this.V ? O(new X(null, 2, 5, sd, [null, this.X], null), a) : a;
  }
  return null;
};
g.P = function() {
  return this.g;
};
g.r = function(a, b) {
  return Cd(this, b);
};
g.F = function(a, b) {
  return new Zd(b, this.g, this.root, this.V, this.X, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return sb(Hd, this.i);
};
var Hd = new Zd(null, 0, null, !1, null, 0);
function fc(a, b) {
  for (var c = a.length, d = 0, e = Eb(Hd);;) {
    if (d < c) {
      var f = d + 1, e = e.ya(null, a[d], b[d]), d = f
    } else {
      return Gb(e);
    }
  }
}
function $d(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.X = e;
  this.o = 56;
  this.f = 258;
}
g = $d.prototype;
g.ya = function(a, b, c) {
  return ae(this, b, c);
};
g.Ia = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.Lb || (b.f ? 0 : u(jb, b)) : u(jb, b)) {
        c = ae(this, Ac.c ? Ac.c(b) : Ac.call(null, b), Bc.c ? Bc.c(b) : Bc.call(null, b));
        break a;
      }
      c = I(b);
      for (var d = this;;) {
        var e = J(c);
        if (t(e)) {
          c = M(c), d = ae(d, Ac.c ? Ac.c(e) : Ac.call(null, e), Bc.c ? Bc.c(e) : Bc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Ja = function() {
  var a;
  if (this.n) {
    this.n = null, a = new Zd(null, this.count, this.root, this.V, this.X, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.Q = function(a, b) {
  return null == b ? this.V ? this.X : null : null == this.root ? null : this.root.na(0, H(b), b);
};
g.R = function(a, b, c) {
  return null == b ? this.V ? this.X : c : null == this.root ? c : this.root.na(0, H(b), b, c);
};
g.P = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ae(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.X !== c && (a.X = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new Ld;
      b = (null == a.root ? Qd : a.root).aa(a.n, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ea && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var be = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I(a);
    for (var b = Eb(Hd);;) {
      if (a) {
        var e = M(M(a)), b = Uc.b(b, J(a), J(M(a)));
        a = e;
      } else {
        return Gb(b);
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), ce = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new s(null, xc(Q(a)), R.a(Wa, a), null);
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function de(a, b) {
  this.J = a;
  this.L = b;
  this.o = 0;
  this.f = 32374988;
}
g = de.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null == a ? null : new de(a, this.L);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.J.I(null).fb();
};
g.U = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null != a ? new de(a, this.L) : L;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new de(this.J, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return kc(L, this.L);
};
function ee(a) {
  return(a = I(a)) ? new de(a, null) : null;
}
function Ac(a) {
  return kb(a);
}
function fe(a, b) {
  this.J = a;
  this.L = b;
  this.o = 0;
  this.f = 32374988;
}
g = fe.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null == a ? null : new fe(a, this.L);
};
g.A = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Ob(this);
};
g.M = function(a, b) {
  return S.a(b, this);
};
g.N = function(a, b, c) {
  return S.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.J.I(null).gb();
};
g.U = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null != a ? new fe(a, this.L) : L;
};
g.r = function(a, b) {
  return $b(this, b);
};
g.F = function(a, b) {
  return new fe(this.J, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return kc(L, this.L);
};
function ge(a) {
  return(a = I(a)) ? new fe(a, null) : null;
}
function Bc(a) {
  return lb(a);
}
var he = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return t(Yc(a)) ? wc.a(function(a, b) {
      return bc.a(t(a) ? a : Id, b);
    }, a) : null;
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Gc(a) {
  if (a && (a.o & 4096 || a.Nb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
var ie = function() {
  function a(a, b) {
    for (;;) {
      if (I(b) && 0 < a) {
        var c = a - 1, h = M(b);
        a = c;
        b = h;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (I(a)) {
        a = M(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), je = function() {
  function a(a, b) {
    ie.a(a, b);
    return b;
  }
  function b(a) {
    ie.c(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function ke(a, b, c, d, e, f, h) {
  var k = Ma;
  try {
    Ma = null == Ma ? null : Ma - 1;
    if (null != Ma && 0 > Ma) {
      return D(a, "#");
    }
    D(a, c);
    I(h) && (b.b ? b.b(J(h), a, f) : b.call(null, J(h), a, f));
    for (var l = M(h), p = Sa.c(f);l && (null == p || 0 !== p);) {
      D(a, d);
      b.b ? b.b(J(l), a, f) : b.call(null, J(l), a, f);
      var n = M(l);
      c = p - 1;
      l = n;
      p = c;
    }
    t(Sa.c(f)) && (D(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    Ma = k;
  }
}
var le = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = I(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.T(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = I(e)) {
          f = e, qc(f) ? (e = Kb(f), h = Lb(f), f = e, l = Q(e), e = h, h = l) : (l = J(f), D(a, l), e = M(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.h = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), me = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ne(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return me[a];
  })), y('"')].join("");
}
var Z = function oe(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (v) {
    t(function() {
      var c = ec.a(d, Qa);
      return t(c) ? (c = b ? b.f & 131072 || b.Mb ? !0 : b.f ? !1 : u(pb, b) : u(pb, b)) ? lc(b) : c : c;
    }()) && (D(c, "^"), oe(lc(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.qb) {
      return b.Ub(c);
    }
    if (b && (b.f & 2147483648 || b.H)) {
      return b.s(null, c, d);
    }
    if (Ua(b) === Boolean || "number" === typeof b) {
      return D(c, "" + y(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), pe.l ? pe.l(V.a(function(c) {
        return new X(null, 2, 5, sd, [Hc.c(c), b[c]], null);
      }, rc(b)), oe, c, d) : pe.call(null, V.a(function(c) {
        return new X(null, 2, 5, sd, [Hc.c(c), b[c]], null);
      }, rc(b)), oe, c, d);
    }
    if (b instanceof Array) {
      return ke(c, oe, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return t(Pa.c(d)) ? D(c, ne(b)) : D(c, b);
    }
    if (ic(b)) {
      return le.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + y(b);;) {
          if (Q(d) < c) {
            d = [y("0"), y(d)].join("");
          } else {
            return d;
          }
        }
      };
      return le.e(c, N(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? le.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.H || (b.f ? 0 : u(Ab, b)) : u(Ab, b)) ? Bb(b, c, d) : v ? le.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0)) : null;
  }
  return null;
}, qe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || Ta(I(a))) {
      b = "";
    } else {
      b = y;
      var e = Na(), f = new Ja;
      a: {
        var h = new Nb(f);
        Z(J(a), h, e);
        a = I(M(a));
        for (var k = null, l = 0, p = 0;;) {
          if (p < l) {
            var n = k.T(null, p);
            D(h, " ");
            Z(n, h, e);
            p += 1;
          } else {
            if (a = I(a)) {
              k = a, qc(k) ? (a = Kb(k), l = Lb(k), k = a, n = Q(a), a = l, l = n) : (n = J(k), D(h, " "), Z(n, h, e), a = M(k), k = null, l = 0), p = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function pe(a, b, c, d) {
  return ke(c, function(a, c, d) {
    b.b ? b.b(kb(a), c, d) : b.call(null, kb(a), c, d);
    D(c, " ");
    return b.b ? b.b(lb(a), c, d) : b.call(null, lb(a), c, d);
  }, "{", ", ", "}", d, I(a));
}
de.prototype.H = !0;
de.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Ub.prototype.H = !0;
Ub.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
wd.prototype.H = !0;
wd.prototype.s = function(a, b, c) {
  return ke(b, Z, "[", " ", "]", c, this);
};
Mc.prototype.H = !0;
Mc.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
s.prototype.H = !0;
s.prototype.s = function(a, b, c) {
  return pe(this, Z, b, c);
};
U.prototype.H = !0;
U.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Xd.prototype.H = !0;
Xd.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
ud.prototype.H = !0;
ud.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Zd.prototype.H = !0;
Zd.prototype.s = function(a, b, c) {
  return pe(this, Z, b, c);
};
X.prototype.H = !0;
X.prototype.s = function(a, b, c) {
  return ke(b, Z, "[", " ", "]", c, this);
};
Cc.prototype.H = !0;
Cc.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Ed.prototype.H = !0;
Ed.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Dc.prototype.H = !0;
Dc.prototype.s = function(a, b) {
  return D(b, "()");
};
Fc.prototype.H = !0;
Fc.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
Yd.prototype.H = !0;
Yd.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
fe.prototype.H = !0;
fe.prototype.s = function(a, b, c) {
  return ke(b, Z, "(", " ", ")", c, this);
};
X.prototype.Ea = !0;
X.prototype.Fa = function(a, b) {
  return vc.a(this, b);
};
wd.prototype.Ea = !0;
wd.prototype.Fa = function(a, b) {
  return vc.a(this, b);
};
T.prototype.Ea = !0;
T.prototype.Fa = function(a, b) {
  return Pb(this, b);
};
Sb.prototype.Ea = !0;
Sb.prototype.Fa = function(a, b) {
  return Pb(this, b);
};
function re(a, b) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b);
  }
  var c;
  c = re[q(null == a ? null : a)];
  if (!c && (c = re._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var se = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Tb : a) {
      return a.Tb(a, b, c, d, e);
    }
    var n;
    n = se[q(null == a ? null : a)];
    if (!n && (n = se._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Sb : a) {
      return a.Sb(a, b, c, d);
    }
    var e;
    e = se[q(null == a ? null : a)];
    if (!e && (e = se._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Rb : a) {
      return a.Rb(a, b, c);
    }
    var d;
    d = se[q(null == a ? null : a)];
    if (!d && (d = se._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Qb : a) {
      return a.Qb(a, b);
    }
    var c;
    c = se[q(null == a ? null : a)];
    if (!c && (c = se._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.l = b;
  e.B = a;
  return e;
}();
function te(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.fc = c;
  this.Db = d;
  this.f = 2153938944;
  this.o = 16386;
}
g = te.prototype;
g.u = function() {
  return fa(this);
};
g.nb = function(a, b, c) {
  a = I(this.Db);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.T(null, f), k = dc.b(h, 0, null), h = dc.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = I(a)) {
        qc(a) ? (d = Kb(a), a = Lb(a), k = d, e = Q(d), d = k) : (d = J(a), k = dc.b(d, 0, null), h = dc.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.s = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return D(b, "\x3e");
};
g.C = function() {
  return this.i;
};
g.Ib = function() {
  return this.state;
};
g.r = function(a, b) {
  return this === b;
};
var ve = function() {
  function a(a) {
    return new te(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = tc(c) ? R.a(be, c) : c, e = ec.a(d, ue), d = ec.a(d, Qa);
      return new te(a, d, e, null);
    }
    a.m = 1;
    a.h = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}();
function we(a, b) {
  if (a instanceof te) {
    var c = a.fc;
    if (null != c && !t(c.c ? c.c(b) : c.call(null, b))) {
      throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(qe.e(N([Ec(new Sb(null, "validate", "validate", 1233162959, null), new Sb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Db && Db(a, c, b);
    return b;
  }
  return re(a, b);
}
var xe = function() {
  function a(a, b, c, d) {
    return a instanceof te ? we(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : se.l(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof te ? we(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : se.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof te ? we(a, b.c ? b.c(a.state) : b.call(null, a.state)) : se.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var x = null;
      4 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, d, e, f) {
      return a instanceof te ? we(a, R.B(c, a.state, d, e, f)) : se.B(a, c, d, e, f);
    }
    a.m = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), ye = {};
function ze(a, b) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b);
  }
  var c;
  c = ze[q(null == a ? null : a)];
  if (!c && (c = ze._, !c)) {
    throw w("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Be = function() {
  function a(a) {
    return b.e(a, N([new s(null, 1, [Ae, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? t(t(null) ? null : a.be) || (a.Vb ? 0 : u(ye, a)) : u(ye, a)) {
        return ze(a, R.a(ce, c));
      }
      if (I(c)) {
        var d = tc(c) ? R.a(be, c) : c, e = ec.a(d, Ae);
        return function(a, b, c, d) {
          return function E(e) {
            return tc(e) ? je.c(V.a(E, e)) : (null == e ? 0 : e ? e.f & 8 || e.$d || (e.f ? 0 : u(ab, e)) : u(ab, e)) ? dd(null == e ? null : $a(e), V.a(E, e)) : e instanceof Array ? td(V.a(E, e)) : Ua(e) === Object ? dd(Id, function() {
              return function(a, b, c, d) {
                return function Cb(f) {
                  return new U(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = I(f);
                        if (a) {
                          if (qc(a)) {
                            var b = Kb(a), c = Q(b), h = new Jc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = A.a(b, k), l = new X(null, 2, 5, sd, [d.c ? d.c(l) : d.call(null, l), E(e[l])], null);
                                  h.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? Nc(h.W(), Cb(Lb(a))) : Nc(h.W(), null);
                          }
                          h = J(a);
                          return O(new X(null, 2, 5, sd, [d.c ? d.c(h) : d.call(null, h), E(e[h])], null), Cb(K(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(rc(e));
            }()) : v ? e : null;
          };
        }(c, d, e, t(e) ? Hc : y)(a);
      }
      return null;
    }
    a.m = 1;
    a.h = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}();
var Ce, De, Ee, Fe;
function Ge() {
  return m.navigator ? m.navigator.userAgent : null;
}
Fe = Ee = De = Ce = !1;
var He;
if (He = Ge()) {
  var Ie = m.navigator;
  Ce = 0 == He.indexOf("Opera");
  De = !Ce && -1 != He.indexOf("MSIE");
  Ee = !Ce && -1 != He.indexOf("WebKit");
  Fe = !Ce && !Ee && "Gecko" == Ie.product;
}
var Je = Ce, Ke = De, Le = Fe, Me = Ee;
function Ne() {
  var a = m.document;
  return a ? a.documentMode : void 0;
}
var Oe;
a: {
  var Pe = "", Qe;
  if (Je && m.opera) {
    var Re = m.opera.version, Pe = "function" == typeof Re ? Re() : Re
  } else {
    if (Le ? Qe = /rv\:([^\);]+)(\)|;)/ : Ke ? Qe = /MSIE\s+([^\);]+)(\)|;)/ : Me && (Qe = /WebKit\/(\S+)/), Qe) {
      var Se = Qe.exec(Ge()), Pe = Se ? Se[1] : ""
    }
  }
  if (Ke) {
    var Te = Ne();
    if (Te > parseFloat(Pe)) {
      Oe = String(Te);
      break a;
    }
  }
  Oe = Pe;
}
var Ue = {};
function Ve(a) {
  var b;
  if (!(b = Ue[a])) {
    b = 0;
    for (var c = String(Oe).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = p.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == r[0].length) {
          break;
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == r[2].length) ? -1 : (0 == n[2].length) > (0 == r[2].length) ? 1 : 0) || (n[2] < r[2] ? -1 : n[2] > r[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Ue[a] = 0 <= b;
  }
  return b;
}
var We = m.document, Xe = We && Ke ? Ne() || ("CSS1Compat" == We.compatMode ? parseInt(Oe, 10) : 5) : void 0;
var Ye = {qc:"click", zc:"dblclick", Yc:"mousedown", bd:"mouseup", ad:"mouseover", $c:"mouseout", Zc:"mousemove", Nd:"selectstart", Rc:"keypress", Qc:"keydown", Sc:"keyup", nc:"blur", Ic:"focus", Ac:"deactivate", Jc:Ke ? "focusin" : "DOMFocusIn", Kc:Ke ? "focusout" : "DOMFocusOut", oc:"change", Md:"select", Od:"submit", Pc:"input", Ed:"propertychange", Gc:"dragstart", Bc:"drag", Dc:"dragenter", Fc:"dragover", Ec:"dragleave", Hc:"drop", Cc:"dragend", Ud:"touchstart", Td:"touchmove", Sd:"touchend", 
Rd:"touchcancel", mc:"beforeunload", wc:"contextmenu", Eb:"error", Mc:"help", Tc:"load", Wc:"losecapture", Gd:"readystatechange", Jd:"resize", Ld:"scroll", Xd:"unload", Lc:"hashchange", vd:"pagehide", wd:"pageshow", Cd:"popstate", xc:"copy", xd:"paste", yc:"cut", jc:"beforecopy", kc:"beforecut", lc:"beforepaste", ud:"online", sd:"offline", Xc:"message", vc:"connect", Vd:Me ? "webkitTransitionEnd" : Je ? "oTransitionEnd" : "transitionend", cd:"MSGestureChange", dd:"MSGestureEnd", ed:"MSGestureHold", 
fd:"MSGestureStart", gd:"MSGestureTap", hd:"MSGotPointerCapture", jd:"MSInertiaStart", kd:"MSLostPointerCapture", ld:"MSPointerCancel", md:"MSPointerDown", nd:"MSPointerMove", pd:"MSPointerOver", od:"MSPointerOut", qd:"MSPointerUp", Qd:"textinput", tc:"compositionstart", uc:"compositionupdate", sc:"compositionend"};
function Ze() {
  0 != $e && fa(this);
}
var $e = 0;
var af = !Ke || Ke && 9 <= Xe, bf = Ke && !Ve("9");
!Me || Ve("528");
Le && Ve("1.9b") || Ke && Ve("8") || Je && Ve("9.5") || Me && Ve("528");
Le && !Ve("8") || Ke && Ve("9");
function cf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
cf.prototype.jb = !1;
cf.prototype.defaultPrevented = !1;
cf.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function df(a) {
  df[" "](a);
  return a;
}
df[" "] = function() {
};
function ef(a, b) {
  a && this.Ka(a, b);
}
na(ef, cf);
g = ef.prototype;
g.target = null;
g.relatedTarget = null;
g.offsetX = 0;
g.offsetY = 0;
g.clientX = 0;
g.clientY = 0;
g.screenX = 0;
g.screenY = 0;
g.button = 0;
g.keyCode = 0;
g.charCode = 0;
g.ctrlKey = !1;
g.altKey = !1;
g.shiftKey = !1;
g.metaKey = !1;
g.tb = null;
g.Ka = function(a, b) {
  var c = this.type = a.type;
  cf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Le) {
      var e;
      a: {
        try {
          df(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = Me || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Me || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.tb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.jb;
};
g.preventDefault = function() {
  ef.ec.preventDefault.call(this);
  var a = this.tb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, bf) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var ff = 0;
function gf() {
}
g = gf.prototype;
g.key = 0;
g.qa = !1;
g.Da = !1;
g.Ka = function(a, b, c, d, e, f) {
  if (da(a)) {
    this.zb = !0;
  } else {
    if (a && a.handleEvent && da(a.handleEvent)) {
      this.zb = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.pa = a;
  this.Bb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.xb = f;
  this.Da = !1;
  this.key = ++ff;
  this.qa = !1;
};
g.handleEvent = function(a) {
  return this.zb ? this.pa.call(this.xb || this.src, a) : this.pa.handleEvent.call(this.pa, a);
};
var hf = {}, jf = {}, kf = {}, lf = {};
function mf(a, b, c, d, e) {
  if ("array" == q(b)) {
    for (var f = 0;f < b.length;f++) {
      mf(a, b[f], c, d, e);
    }
    return null;
  }
  a: {
    if (!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var h = jf;
    b in h || (h[b] = {ga:0, ha:0});
    h = h[b];
    d in h || (h[d] = {ga:0, ha:0}, h.ga++);
    var h = h[d], f = fa(a), k;
    h.ha++;
    if (h[f]) {
      k = h[f];
      for (var l = 0;l < k.length;l++) {
        if (h = k[l], h.pa == c && h.xb == e) {
          if (h.qa) {
            break;
          }
          k[l].Da = !1;
          a = k[l];
          break a;
        }
      }
    } else {
      k = h[f] = [], h.ga++;
    }
    l = nf();
    h = new gf;
    h.Ka(c, l, a, b, d, e);
    h.Da = !1;
    l.src = a;
    l.pa = h;
    k.push(h);
    kf[f] || (kf[f] = []);
    kf[f].push(h);
    a.addEventListener ? a != m && a.Zb || a.addEventListener(b, l, d) : a.attachEvent(b in lf ? lf[b] : lf[b] = "on" + b, l);
    a = h;
  }
  b = a.key;
  hf[b] = a;
  return b;
}
function nf() {
  var a = of, b = af ? function(c) {
    return a.call(b.src, b.pa, c);
  } : function(c) {
    c = a.call(b.src, b.pa, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function pf(a, b, c, d) {
  if (!d.La && d.Ab) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].qa ? d[e].Bb.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Ab = !1;
    0 == f && (delete jf[a][b][c], jf[a][b].ga--, 0 == jf[a][b].ga && (delete jf[a][b], jf[a].ga--), 0 == jf[a].ga && delete jf[a]);
  }
}
function qf(a, b, c, d, e) {
  var f = 1;
  b = fa(b);
  if (a[b]) {
    var h = --a.ha, k = a[b];
    k.La ? k.La++ : k.La = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var n = k[p];
        n && !n.qa && (f &= !1 !== rf(n, e));
      }
    } finally {
      a.ha = Math.max(h, a.ha), k.La--, pf(c, d, b, k);
    }
  }
  return Boolean(f);
}
function rf(a, b) {
  if (a.Da) {
    var c = a.key, d = hf[c];
    if (d && !d.qa) {
      var e = d.src, f = d.type, h = d.Bb, k = d.capture;
      e.removeEventListener ? e != m && e.Zb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in lf ? lf[f] : lf[f] = "on" + f, h);
      e = fa(e);
      if (kf[e]) {
        var h = kf[e], l = Aa(h, d);
        0 <= l && za.splice.call(h, l, 1);
        0 == h.length && delete kf[e];
      }
      d.qa = !0;
      if (d = jf[f][k][e]) {
        d.Ab = !0, pf(f, k, e, d);
      }
      delete hf[c];
    }
  }
  return a.handleEvent(b);
}
function of(a, b) {
  if (a.qa) {
    return!0;
  }
  var c = a.type, d = jf;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!af) {
    e = b || aa("window.event");
    var h = !0 in d, k = !1 in d;
    if (h) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (p) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new ef;
    l.Ka(e, this);
    e = !0;
    try {
      if (h) {
        for (var n = [], r = l.currentTarget;r;r = r.parentNode) {
          n.push(r);
        }
        f = d[!0];
        f.ha = f.ga;
        for (var x = n.length - 1;!l.jb && 0 <= x && f.ha;x--) {
          l.currentTarget = n[x], e &= qf(f, n[x], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.ha = f.ga, x = 0;!l.jb && x < n.length && f.ha;x++) {
            l.currentTarget = n[x], e &= qf(f, n[x], c, !1, l);
          }
        }
      } else {
        e = rf(a, l);
      }
    } finally {
      n && (n.length = 0);
    }
    return e;
  }
  c = new ef(b, this);
  return e = rf(a, c);
}
;var Ra = new T(null, "dup", "dup"), Rb = new T(null, "default", "default"), sf = new T(null, "total", "total"), Ae = new T(null, "keywordize-keys", "keywordize-keys"), Oa = new T(null, "flush-on-newline", "flush-on-newline"), Sa = new T(null, "print-length", "print-length"), tf = new T(null, "left", "left"), v = new T(null, "else", "else"), Pa = new T(null, "readably", "readably"), ue = new T(null, "validator", "validator"), Qa = new T(null, "meta", "meta"), uf = new T(null, "completed", "completed");
function vf(a) {
  if (a ? a.rb : a) {
    return a.rb();
  }
  var b;
  b = vf[q(null == a ? null : a)];
  if (!b && (b = vf._, !b)) {
    throw w("EventType.event-types", a);
  }
  return b.call(null, a);
}
Element.prototype.rb = function() {
  return dd(Id, V.a(function(a) {
    var b = dc.b(a, 0, null);
    a = dc.b(a, 1, null);
    return new X(null, 2, 5, sd, [Hc.c(b.toLowerCase()), a], null);
  }, he.e(N([Be.c(Ye)], 0))));
};
var wf = function() {
  function a(a, b, c, h) {
    return mf(a, ec.b(vf(a), b, b), c, h);
  }
  function b(a, b, f) {
    return c.l(a, b, f, !1);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.l = a;
  return c;
}();
var xf, yf = !Ke || Ke && 9 <= Xe, zf = !Le && !Ke || Ke && Ke && 9 <= Xe || Le && Ve("1.9.1");
Ke && Ve("9");
function Af(a, b) {
  var c;
  c = a.className;
  c = ca(c) && c.match(/\S+/g) || [];
  for (var d = Ea(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    0 <= Aa(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
}
;function Bf(a) {
  return ca(a) ? document.getElementById(a) : a;
}
function Cf(a, b) {
  Fa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Df ? a.setAttribute(Df[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Df = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Ef(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!yf && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', qa(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', qa(h.type), '"');
      var k = {};
      Ha(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (ca(h) ? f.className = h : "array" == q(h) ? Af.apply(null, [f].concat(h)) : Cf(f, h));
  2 < d.length && Ff(e, f, d, 2);
  return f;
}
function Ff(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ca(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ba(f) || ea(f) && 0 < f.nodeType ? e(f) : Ba(Gf(f) ? Da(f) : f, e);
  }
}
function Hf(a, b) {
  Ff(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1);
}
function If(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Gf(a) {
  if (a && "number" == typeof a.length) {
    if (ea(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (da(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Jf(a) {
  this.sb = a || m.document || document;
}
g = Jf.prototype;
g.createElement = function(a) {
  return this.sb.createElement(a);
};
g.createTextNode = function(a) {
  return this.sb.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = Hf;
g.wb = function(a) {
  return zf && void 0 != a.children ? a.children : Ca(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
var Kf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    R.b(Hf, a, b);
    return a;
  }
  a.m = 1;
  a.h = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Lf = function() {
  function a(a, b, c) {
    if (a ? a.Xb : a) {
      return a.Xb(a, b, c);
    }
    var d;
    d = Lf[q(null == a ? null : a)];
    if (!d && (d = Lf._, !d)) {
      throw w("DOMBuilder.-element", a);
    }
    return d.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Wb : a) {
      return a.Wb(a, b);
    }
    var c;
    c = Lf[q(null == a ? null : a)];
    if (!c && (c = Lf._, !c)) {
      throw w("DOMBuilder.-element", a);
    }
    return c.call(null, a, b);
  }
  function c(a) {
    if (a ? a.ib : a) {
      return a.ib(a);
    }
    var b;
    b = Lf[q(null == a ? null : a)];
    if (!b && (b = Lf._, !b)) {
      throw w("DOMBuilder.-element", a);
    }
    return b.call(null, a);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}(), Mf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log(R.a(qe, a));
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
Element.prototype.ib = function() {
  Mf.e(N(["js/Element (-element ", this, ")"], 0));
  return this;
};
X.prototype.ib = function() {
  Mf.e(N(["PersistentVector (-element ", this, ")"], 0));
  var a = J(this), b = J(M(this)), c = $c(2, this);
  return oc(b) ? Lf.b(a, b, c) : Lf.b(a, null, K(this));
};
Lf.string = function() {
  function a(a, b, e) {
    Mf.e(N(["string (-element ", a, " ", b, " ", e, ")"], 0));
    b = oc(b) && I(b) ? wc.b(function(a, b) {
      var c = dc.b(b, 0, null), d = dc.b(b, 1, null), e = null == a ? {} : a;
      Mf.e(N(["o \x3d ", e], 0));
      Mf.e(N(["k \x3d ", c], 0));
      Mf.e(N(["v \x3d ", d], 0));
      return c instanceof T || "string" === typeof c ? (e[Gc(c)] = d, e) : null;
    }, {}, b) : null;
    console.log(b);
    return I(e) ? R.l(Ef, Gc(a), b, V.a(Lf, e)) : Ef(Gc(a), b);
  }
  var b = null;
  return b = function(b, d, e) {
    switch(arguments.length) {
      case 1:
        Mf.e(N(["string (-element ", b, ")"], 0));
        var f;
        b instanceof T ? (f = Gc(b), f = document.createElement(f)) : v ? (f = Gc(b), f = document.createTextNode(String(f))) : f = null;
        return f;
      case 2:
        return Mf.e(N(["string (-element ", b, " ", d, ")"], 0)), f = J(d), oc(f) ? Lf.b(b, f, K(d)) : Lf.b(b, null, d);
      case 3:
        return a.call(this, b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
var Nf = function() {
  function a(a) {
    Mf.e(N(["(element ", a, ")"], 0));
    return Lf.c(a);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      Mf.e(N(["(element ", a, " ", c, ")"], 0));
      var d = J(c);
      return oc(d) ? Lf.b(a, d, K(c)) : Lf.b(a, null, c);
    }
    a.m = 1;
    a.h = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Of(a) {
  return Bf(Gc(a));
}
function Pf(a) {
  var b;
  if (a instanceof T) {
    b = Of(a);
  } else {
    if ("string" === typeof a) {
      var c = document;
      b = c.createElement("div");
      Ke ? (b.innerHTML = "\x3cbr\x3e" + a, b.removeChild(b.firstChild)) : b.innerHTML = a;
      if (1 == b.childNodes.length) {
        b = b.removeChild(b.firstChild);
      } else {
        for (a = c.createDocumentFragment();b.firstChild;) {
          a.appendChild(b.firstChild);
        }
        b = a;
      }
    } else {
      b = v ? a : null;
    }
  }
  return b;
}
function Qf(a, b) {
  Cf(Pf(a), R.a(Ia, ad.a(ee(b), ge(b))));
}
function Rf(a, b) {
  Qf(a, new s(null, 1, ["value", b], null));
}
;/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Sf(a) {
  return Tf(a || arguments.callee.caller, []);
}
function Tf(a, b) {
  var c = [];
  if (0 <= Aa(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Uf(a) + "(");
      for (var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Uf(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Tf(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Uf(a) {
  if (Vf[a]) {
    return Vf[a];
  }
  a = String(a);
  if (!Vf[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Vf[a] = b ? b[1] : "[Anonymous]";
  }
  return Vf[a];
}
var Vf = {};
function Wf(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Wf.prototype.vb = null;
Wf.prototype.ub = null;
var Xf = 0;
Wf.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Xf++;
  d || ma();
  this.Ba = a;
  this.bc = b;
  delete this.vb;
  delete this.ub;
};
Wf.prototype.Cb = function(a) {
  this.Ba = a;
};
function Yf(a) {
  this.cc = a;
}
Yf.prototype.Ma = null;
Yf.prototype.Ba = null;
Yf.prototype.Oa = null;
Yf.prototype.yb = null;
function Zf(a, b) {
  this.name = a;
  this.value = b;
}
Zf.prototype.toString = function() {
  return this.name;
};
var $f = new Zf("INFO", 800), ag = new Zf("CONFIG", 700);
g = Yf.prototype;
g.getParent = function() {
  return this.Ma;
};
g.wb = function() {
  this.Oa || (this.Oa = {});
  return this.Oa;
};
g.Cb = function(a) {
  this.Ba = a;
};
function bg(a) {
  if (a.Ba) {
    return a.Ba;
  }
  if (a.Ma) {
    return bg(a.Ma);
  }
  ya("Root logger has no level set.");
  return null;
}
g.log = function(a, b, c) {
  if (a.value >= bg(this).value) {
    for (a = this.$b(a, b, c), b = "log:" + a.bc, m.console && (m.console.timeStamp ? m.console.timeStamp(b) : m.console.markTimeline && m.console.markTimeline(b)), m.msWriteProfilerMark && m.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.yb) {
        for (var e = 0, f = void 0;f = c.yb[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
g.$b = function(a, b, c) {
  var d = new Wf(a, String(b), this.cc);
  if (c) {
    d.vb = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = aa("window.location.href");
      if (ca(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var l, p, n = !1;
        try {
          l = c.lineNumber || c.ie || "Not available";
        } catch (r) {
          l = "Not available", n = !0;
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || k;
        } catch (x) {
          p = "Not available", n = !0;
        }
        h = !n && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"};
      }
      e = "Message: " + qa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + qa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + qa(Sf(f) + "-\x3e ");
    } catch (F) {
      e = "Exception trying to expose exception! You win, we lose. " + F;
    }
    d.ub = e;
  }
  return d;
};
g.info = function(a, b) {
  this.log($f, a, b);
};
var cg = {}, dg = null;
function eg(a) {
  dg || (dg = new Yf(""), cg[""] = dg, dg.Cb(ag));
  var b;
  if (!(b = cg[a])) {
    b = new Yf(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = eg(a.substr(0, c));
    c.wb()[d] = b;
    b.Ma = c;
    cg[a] = b;
  }
  return b;
}
;eg("goog.messaging.AbstractChannel");
var fg = eg("goog.net.xpc");
function gg(a) {
  Ze.call(this);
  a || xf || (xf = new Jf);
}
na(gg, Ze);
function hg(a, b) {
  gg.call(this, b);
  this.Fb = a;
}
var ig;
na(hg, gg);
var jg = [], kg = la(function() {
  var a, b = !1;
  try {
    for (var c = 0;a = jg[c];c++) {
      var d;
      if (!(d = b)) {
        var e = a, f = e.je.location.href;
        if (f != e.Yb) {
          e.Yb = f;
          var h = f.split("#")[1];
          h && (h = h.substr(1), e.Yd(decodeURIComponent(h)));
          d = !0;
        } else {
          d = !1;
        }
      }
      b = d;
    }
  } catch (k) {
    if (fg.info("receive_() failed: " + k), a = a.ke.Fb, fg.info("Transport Error"), a.close(), !jg.length) {
      return;
    }
  }
  a = ma();
  b && (ig = a);
  window.setTimeout(kg, 1E3 > a - ig ? 10 : 100);
}, hg);
eg("goog.net.XhrIo");
dd(Id, V.a(function(a) {
  var b = dc.b(a, 0, null);
  a = dc.b(a, 1, null);
  return new X(null, 2, 5, sd, [Hc.c(b.toLowerCase()), a], null);
}, he.e(N([Be.c({rc:"complete", Pd:"success", Eb:"error", hc:"abort", Fd:"ready", Hd:"readystatechange", TIMEOUT:"timeout", Oc:"incrementaldata", Dd:"progress"})], 0))));
dd(Id, V.a(function(a) {
  var b = dc.b(a, 0, null);
  a = dc.b(a, 1, null);
  return new X(null, 2, 5, sd, [Hc.c(b.toLowerCase()), a], null);
}, Be.c({pc:"cn", ic:"at", Id:"rat", Bd:"pu", Nc:"ifrid", Wd:"tp", Vc:"lru", Ad:"pru", Uc:"lpu", zd:"ppu", yd:"ph", td:"osh", Kd:"role", rd:"nativeProtocolVersion"})));
ve.c(null);
ve.c(0);
var lg = ve.c(rd);
function mg(a, b) {
  return Nf.e(a, N([b], 0));
}
function ng() {
  var a = Q(ob(lg)), b = Q(cd(function() {
    return function(a) {
      return G.a(!0, a.c ? a.c("completed") : a.call(null, "completed"));
    };
  }(a), ob(lg)));
  return new s(null, 3, [sf, a, uf, b, tf, a - b], null);
}
function og(a, b, c) {
  var d = td(V.a(function(d) {
    return G.a(d.c ? d.c("id") : d.call(null, "id"), a) ? bc.a(d, new Jd([b, c])) : d;
  }, ob(lg)));
  we(lg, d);
}
function pg(a) {
  we(lg, td(cd(function(b) {
    return Wc.a(b.c ? b.c("id") : b.call(null, "id"), a);
  }, ob(lg))));
}
function qg(a) {
  a = a.target.getAttribute("data-todo-id");
  pg(a);
  return $.t ? $.t() : $.call(null);
}
function rg(a) {
  a = a.target;
  var b = a.getAttribute("data-todo-id");
  og(b, "completed", a.checked);
  return $.t ? $.t() : $.call(null);
}
function sg(a) {
  var b = a.target.getAttribute("data-todo-id");
  a = [y("li_"), y(b)].join("");
  a = Of(a);
  b = [y("input_"), y(b)].join("");
  b = Of(b);
  Qf(a, new s(null, 1, ["class", "editing"], null));
  return b.focus();
}
function tg(a) {
  var b = a.target, c = b.value.trim(), b = R.a(y, $c(6, b.id));
  if (I(c)) {
    return G.a(13, a.keyCode) ? (og(b, "title", c), $.t ? $.t() : $.call(null)) : null;
  }
  pg(b);
  return $.t ? $.t() : $.call(null);
}
function ug() {
  Of("todo-list").innerHTML = "";
  Rf(Of("todo-input"), "");
  ie.c(V.a(function(a) {
    var b = a.c ? a.c("id") : a.call(null, "id"), c = mg("li", new s(null, 1, ["id", [y("li_"), y(b)].join("")], null)), d = mg("input", new s(null, 3, ["class", "toggle", "data-todo-id", b, "type", "checkbox"], null)), e = mg("label", new s(null, 1, ["data-todo-id", b], null)), f = mg("button", new s(null, 2, ["class", "destroy", "data-todo-id", b], null)), h = mg("div", new s(null, 2, ["class", "view", "data-todo-id", b], null)), b = mg("input", new s(null, 2, ["id", [y("input_"), y(b)].join(""), 
    "class", "edit"], null)), k = a.c ? a.c("title") : a.call(null, "title"), l = Pf(e);
    if ("textContent" in l) {
      l.textContent = k;
    } else {
      if (l.firstChild && 3 == l.firstChild.nodeType) {
        for (;l.lastChild != l.firstChild;) {
          l.removeChild(l.lastChild);
        }
        l.firstChild.data = k;
      } else {
        If(l), l.appendChild((9 == l.nodeType ? l : l.ownerDocument || l.document).createTextNode(String(k)));
      }
    }
    Rf(b, a.c ? a.c("title") : a.call(null, "title"));
    wf.b(d, "change", rg);
    wf.b(e, "dblclick", sg);
    wf.b(f, "click", qg);
    wf.b(b, "keypress", tg);
    Kf.e(h, N([d, e, f], 0));
    Kf.e(c, N([h, b], 0));
    t(a.c ? a.c("completed") : a.call(null, "completed")) && (Qf(c, new s(null, 1, ["class", "complete"], null)), Qf(d, new s(null, 1, ["checked", !0], null)));
    return Kf.e(Of("todo-list"), N([c], 0));
  }, ob(lg)));
}
function vg() {
  we(lg, cd(function(a) {
    return Ta(a.c ? a.c("completed") : a.call(null, "completed"));
  }, ob(lg)));
  return $.t ? $.t() : $.call(null);
}
function wg() {
  var a = Of("toggle-all"), b = Xc(function() {
    return function(a) {
      return G.a(!0, a.c ? a.c("completed") : a.call(null, "completed"));
    };
  }(a), ob(lg));
  return a.checked = b;
}
function $() {
  ug();
  var a = Of("footer"), b;
  b = ob(lg);
  var c = null == b || Ta(I(b)) ? "none" : "block";
  b = ng();
  var d = Bf(Gc("footer"));
  If(d);
  Qf(a, new s(null, 1, ["style", [y("display:"), y(c)].join("")], null));
  Wc.a(0, uf.c(b)) && (a = Of("footer"), c = [y("Clear completed ("), y(uf.c(ng())), y(")")].join(""), c = Nf.e("button", N([new s(null, 1, ["id", "clear-completed"], null), c], 0)), wf.b(c, "click", vg), Kf.e(a, N([c], 0)));
  Wc.a(0, sf.c(b)) && (a = ng(), b = [y(" "), y(G.a(1, tf.c(a)) ? "item" : "items"), y(" left")].join(""), a = Nf.e("strong", N(["" + y(tf.c(a))], 0)), c = Nf.e("span", N([new s(null, 1, ["id", "todo-count"], null)], 0)), d = Of("footer"), Kf.e(c, N([a, b], 0)), Kf.e(d, N([c], 0)));
  return wg();
}
function xg() {
  return R.a(y, V.a(function(a) {
    return G.a(a, "0") ? (16 * Math.random() | 0).toString(16) : a;
  }, "00000000-0000-4000-0000-000000000000"));
}
function yg() {
  var a = Of("todo-input").value.trim();
  return I(a) ? (xe.b(lg, bc, new s(null, 3, ["id", xg(), "title", a, "completed", !1], null)), $()) : null;
}
function zg(a) {
  return G.a(13, a.keyCode) ? yg() : null;
}
function Ag() {
  return yg();
}
function Bg(a) {
  a = V.a(function(a) {
    return function(c) {
      return hc.b(c, "completed", a);
    };
  }(a.target.checked), ob(lg));
  we(lg, a);
  return $();
}
mf(window, "load", function() {
  $();
  wf.b(Of("todo-input"), "keypress", zg);
  wf.b(Of("add-todo"), "click", Ag);
  wf.b(Of("remove-todo"), "click", vg);
  return wf.b(Of("toggle-all"), "change", Bg);
});

})();

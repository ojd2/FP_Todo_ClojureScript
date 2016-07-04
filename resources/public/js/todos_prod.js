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
function fa(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ga(a) {
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
var na = Date.now || function() {
  return+new Date;
};
function oa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ec = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;function pa(a, b) {
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
oa(wa, Error);
wa.prototype.name = "CustomError";
function xa(a, b) {
  b.unshift(a);
  wa.call(this, pa.apply(null, b));
  b.shift();
}
oa(xa, wa);
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
;function Ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ka.prototype.va = "";
Ka.prototype.append = function(a, b, c) {
  this.va += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.va += arguments[d];
    }
  }
  return this;
};
Ka.prototype.toString = function() {
  return this.va;
};
var La, Ma = null;
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
  if (a ? a.s : a) {
    return a.s(a, b);
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
  if (a ? a.t : a) {
    return a.t(a, b, c);
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
function G(a) {
  var b = new Ka;
  a.t(null, new Nb(b), Na());
  return "" + y(b);
}
function Ob(a, b) {
  if (t(Pb.a ? Pb.a(a, b) : Pb.call(null, a, b))) {
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
g.t = function(a, b) {
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
g.s = function(a, b) {
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
var Pb = function() {
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
Date.prototype.s = function(a, b) {
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
  return ga(a);
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
      return b.p ? b.p() : b.call(null);
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
      return b.p ? b.p() : b.call(null);
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
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
g.toString = function() {
  return G(this);
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
g.s = function(a, b) {
  return Q.a ? Q.a(this, b) : Q.call(null, this, b);
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
var $b = function() {
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
    return $b.a(a, b);
  }
  function b(a) {
    return $b.a(a, 0);
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
var ac = function() {
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
function R(a) {
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
var bc = function() {
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
}(), cc = function() {
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
          return bc.b(a, b, c);
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
        return bc.a(a, b);
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
}(), dc = function() {
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
}(), fc = function() {
  function a(a, b, c) {
    return null != a ? hb(a, b, c) : ec.a ? ec.a([b], [c]) : ec.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
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
function hc(a) {
  var b = da(a);
  return b ? b : a ? t(t(null) ? null : a.Gb) ? !0 : a.Vb ? !1 : u(Xa, a) : u(Xa, a);
}
var jc = function ic(b, c) {
  return hc(b) && !(b ? b.f & 262144 || b.he || (b.f ? 0 : u(rb, b)) : u(rb, b)) ? ic(function() {
    "undefined" === typeof La && (La = function(b, c, f, h) {
      this.i = b;
      this.Ca = c;
      this.gc = f;
      this.ac = h;
      this.o = 0;
      this.f = 393217;
    }, La.qb = !0, La.pb = "cljs.core/t6593", La.Ub = function(b) {
      return D(b, "cljs.core/t6593");
    }, La.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return S.a ? S.a(b.Ca, d) : S.call(null, b.Ca, d);
      }
      b.m = 1;
      b.h = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), La.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(z(c)));
    }, La.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return S.a ? S.a(self__.Ca, b) : S.call(null, self__.Ca, b);
      }
      b.m = 0;
      b.h = function(b) {
        b = I(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), La.prototype.Gb = !0, La.prototype.C = function() {
      return this.ac;
    }, La.prototype.F = function(b, c) {
      return new La(this.i, this.Ca, this.gc, c);
    });
    return new La(c, b, ic, null);
  }(), c) : null == b ? null : sb(b, c);
};
function kc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.Mb || (a.f ? 0 : u(pb, a)) : u(pb, a) : b) ? qb(a) : null;
}
var lc = {}, mc = 0;
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
            255 < mc && (lc = {}, mc = 0);
            var b = lc[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              lc[a] = b;
              mc += 1;
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
function nc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.de ? !0 : a.f ? !1 : u(ib, a) : u(ib, a);
}
function oc(a) {
  return a ? a.f & 16384 || a.ge ? !0 : a.f ? !1 : u(mb, a) : u(mb, a);
}
function pc(a) {
  return a ? a.o & 512 || a.Zd ? !0 : !1 : !1;
}
function qc(a) {
  var b = [];
  Fa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function rc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function sc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.xa ? !0 : a.f ? !1 : u(db, a) : u(db, a);
}
function tc(a) {
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
var uc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Qb(cc.a(a, h), cc.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = R(a), h = R(b);
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
}(), T = function() {
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
    return c ? vc.b ? vc.b(a, J(c), M(c)) : vc.call(null, a, J(c), M(c)) : a.p ? a.p() : a.call(null);
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
}(), vc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Ob) ? c.N(null, a, b) : c instanceof Array ? Wb.b(c, a, b) : "string" === typeof c ? Wb.b(c, a, b) : u(tb, c) ? ub.b(c, a, b) : v ? T.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Ob) ? b.M(null, a) : b instanceof Array ? Wb.a(b, a) : "string" === typeof b ? Wb.a(b, a) : u(tb, b) ? ub.a(b, a) : v ? T.a(a, b) : null;
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
function wc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
function xc(a) {
  return wc((a - a % 2) / 2);
}
var yc = function() {
  function a(a) {
    return a * c.p();
  }
  function b() {
    return Math.random.p ? Math.random.p() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.c = a;
  return c;
}();
function zc(a) {
  return wc(yc.c(a));
}
function Ac(a) {
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
      for (var e = new Ka(b.c(a)), l = d;;) {
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
  b.p = function() {
    return "";
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function Q(a, b) {
  return tc((b ? b.f & 16777216 || b.fe || (b.f ? 0 : u(zb, b)) : u(zb, b)) ? function() {
    for (var c = I(a), d = I(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Pb.a(J(c), J(d))) {
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
function Bc(a) {
  var b = 0;
  for (a = I(a);;) {
    if (a) {
      var c = J(a), b = (b + (H(Cc.c ? Cc.c(c) : Cc.call(null, c)) ^ H(Dc.c ? Dc.c(c) : Dc.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function Ec(a, b, c, d, e) {
  this.i = a;
  this.za = b;
  this.ia = c;
  this.count = d;
  this.k = e;
  this.f = 65937646;
  this.o = 8192;
}
g = Ec.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  return 1 === this.count ? null : this.ia;
};
g.A = function(a, b) {
  return new Ec(this.i, b, this, this.count + 1, null);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
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
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new Ec(b, this.za, this.ia, this.count, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return L;
};
function Fc(a) {
  this.i = a;
  this.f = 65937614;
  this.o = 8192;
}
g = Fc.prototype;
g.u = function() {
  return 0;
};
g.S = function() {
  return null;
};
g.A = function(a, b) {
  return new Ec(this.i, b, null, 1, null);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
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
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new Fc(b);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return this;
};
var L = new Fc(null), Gc = function() {
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
function Hc(a, b, c, d) {
  this.i = a;
  this.za = b;
  this.ia = c;
  this.k = d;
  this.f = 65929452;
  this.o = 8192;
}
g = Hc.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  return null == this.ia ? null : I(this.ia);
};
g.A = function(a, b) {
  return new Hc(null, b, this, this.k);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
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
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new Hc(b, this.za, this.ia, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return jc(L, this.i);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.xa)) ? new Hc(null, a, b, null) : new Hc(null, a, I(b), null);
}
function U(a, b, c, d) {
  this.O = a;
  this.name = b;
  this.ka = c;
  this.ma = d;
  this.f = 2153775105;
  this.o = 4096;
}
g = U.prototype;
g.t = function(a, b) {
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
        return dc.a(c, this);
      case 3:
        return dc.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
g.c = function(a) {
  return dc.a(a, this);
};
g.a = function(a, b) {
  return dc.b(a, this, b);
};
g.s = function(a, b) {
  return b instanceof U ? this.ka === b.ka : !1;
};
g.toString = function() {
  return[y(":"), y(this.ka)].join("");
};
var Jc = function() {
  function a(a, b) {
    return new U(a, b, [y(t(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof Sb) {
      var b;
      if (a && (a.o & 4096 || a.Nb)) {
        b = a.O;
      } else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new U(b, Ic.c ? Ic.c(a) : Ic.call(null, a), a.la, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
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
function V(a, b, c, d) {
  this.i = a;
  this.ua = b;
  this.q = c;
  this.k = d;
  this.o = 0;
  this.f = 32374988;
}
g = V.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  yb(this);
  return null == this.q ? null : M(this.q);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
function Kc(a) {
  null != a.ua && (a.q = a.ua.p ? a.ua.p() : a.ua.call(null), a.ua = null);
  return a.q;
}
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  Kc(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof V) {
      a = Kc(a);
    } else {
      return this.q = a, I(this.q);
    }
  }
};
g.I = function() {
  yb(this);
  return null == this.q ? null : J(this.q);
};
g.U = function() {
  yb(this);
  return null != this.q ? K(this.q) : L;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new V(b, this.ua, this.q, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return jc(L, this.i);
};
function Lc(a, b) {
  this.Na = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
Lc.prototype.P = function() {
  return this.end;
};
Lc.prototype.add = function(a) {
  this.Na[this.end] = a;
  return this.end += 1;
};
Lc.prototype.W = function() {
  var a = new Mc(this.Na, 0, this.end);
  this.Na = null;
  return a;
};
function Mc(a, b, c) {
  this.d = a;
  this.r = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = Mc.prototype;
g.M = function(a, b) {
  return Wb.l(this.d, b, this.d[this.r], this.r + 1);
};
g.N = function(a, b, c) {
  return Wb.l(this.d, b, c, this.r);
};
g.kb = function() {
  if (this.r === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Mc(this.d, this.r + 1, this.end);
};
g.T = function(a, b) {
  return this.d[this.r + b];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.r ? this.d[this.r + b] : c;
};
g.P = function() {
  return this.end - this.r;
};
var Nc = function() {
  function a(a, b, c) {
    return new Mc(a, b, c);
  }
  function b(a, b) {
    return new Mc(a, b, a.length);
  }
  function c(a) {
    return new Mc(a, 0, a.length);
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
function Oc(a, b, c, d) {
  this.W = a;
  this.ca = b;
  this.i = c;
  this.k = d;
  this.f = 31850732;
  this.o = 1536;
}
g = Oc.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  if (1 < Za(this.W)) {
    return new Oc(Jb(this.W), this.ca, this.i, null);
  }
  var a = yb(this.ca);
  return null == a ? null : a;
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return A.a(this.W, 0);
};
g.U = function() {
  return 1 < Za(this.W) ? new Oc(Jb(this.W), this.ca, this.i, null) : null == this.ca ? L : this.ca;
};
g.Pa = function() {
  return null == this.ca ? null : this.ca;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new Oc(this.W, this.ca, b, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return jc(L, this.i);
};
g.Qa = function() {
  return this.W;
};
g.Ra = function() {
  return null == this.ca ? L : this.ca;
};
function Pc(a, b) {
  return 0 === Za(a) ? b : new Oc(a, b, null, null);
}
function Qc(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Rc(a, b) {
  if (Xb(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Tc = function Sc(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : v ? P(J(b), Sc(M(b))) : null;
}, Uc = function() {
  function a(a, b) {
    return new V(null, function() {
      var c = I(a);
      return c ? pc(c) ? Pc(Kb(c), d.a(Lb(c), b)) : P(J(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new V(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new V(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, f) {
      var e = null;
      2 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, f) {
      return function r(a, b) {
        return new V(null, function() {
          var c = I(a);
          return c ? pc(c) ? Pc(Kb(c), r(Lb(c), b)) : P(J(c), r(K(c), b)) : t(b) ? r(J(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), f);
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
  d.p = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Vc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var r = null;
      4 < arguments.length && (r = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, r);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, Tc(f)))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var p = J(a);
      a = K(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return P(c, f);
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
    return P(a, b);
  };
  c.b = b;
  c.l = a;
  c.e = d.e;
  return c;
}(), Wc = function() {
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
function Xc(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
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
  var k = B(l), n = C(l);
  if (7 === b) {
    return a.ra ? a.ra(c, d, e, f, h, a, k) : a.ra ? a.ra(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = B(n), p = C(n);
  if (8 === b) {
    return a.cb ? a.cb(c, d, e, f, h, a, k, l) : a.cb ? a.cb(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var n = B(p), r = C(p);
  if (9 === b) {
    return a.eb ? a.eb(c, d, e, f, h, a, k, l, n) : a.eb ? a.eb(c, d, e, f, h, a, k, l, n) : a.call(null, c, d, e, f, h, a, k, l, n);
  }
  var p = B(r), x = C(r);
  if (10 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, a, k, l, n, p) : a.Sa ? a.Sa(c, d, e, f, h, a, k, l, n, p) : a.call(null, c, d, e, f, h, a, k, l, n, p);
  }
  var r = B(x), F = C(x);
  if (11 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, a, k, l, n, p, r) : a.Ta ? a.Ta(c, d, e, f, h, a, k, l, n, p, r) : a.call(null, c, d, e, f, h, a, k, l, n, p, r);
  }
  var x = B(F), E = C(F);
  if (12 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, a, k, l, n, p, r, x) : a.Ua ? a.Ua(c, d, e, f, h, a, k, l, n, p, r, x) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x);
  }
  var F = B(E), O = C(E);
  if (13 === b) {
    return a.Va ? a.Va(c, d, e, f, h, a, k, l, n, p, r, x, F) : a.Va ? a.Va(c, d, e, f, h, a, k, l, n, p, r, x, F) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F);
  }
  var E = B(O), W = C(O);
  if (14 === b) {
    return a.Wa ? a.Wa(c, d, e, f, h, a, k, l, n, p, r, x, F, E) : a.Wa ? a.Wa(c, d, e, f, h, a, k, l, n, p, r, x, F, E) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E);
  }
  var O = B(W), ea = C(W);
  if (15 === b) {
    return a.Xa ? a.Xa(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O) : a.Xa ? a.Xa(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O);
  }
  var W = B(ea), ma = C(ea);
  if (16 === b) {
    return a.Ya ? a.Ya(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W) : a.Ya ? a.Ya(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W);
  }
  var ea = B(ma), Ja = C(ma);
  if (17 === b) {
    return a.Za ? a.Za(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea) : a.Za ? a.Za(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea);
  }
  var ma = B(Ja), gc = C(Ja);
  if (18 === b) {
    return a.$a ? a.$a(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma) : a.$a ? a.$a(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma);
  }
  Ja = B(gc);
  gc = C(gc);
  if (19 === b) {
    return a.ab ? a.ab(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja) : a.ab ? a.ab(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja);
  }
  var Cb = B(gc);
  C(gc);
  if (20 === b) {
    return a.bb ? a.bb(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja, Cb) : a.bb ? a.bb(c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja, Cb) : a.call(null, c, d, e, f, h, a, k, l, n, p, r, x, F, E, O, W, ea, ma, Ja, Cb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, f) {
    b = Vc.l(b, c, d, f);
    c = a.m;
    return a.h ? (d = Rc(b, c + 1), d <= c ? Xc(a, d, b) : a.h(b)) : a.apply(a, Qc(b));
  }
  function b(a, b, c, d) {
    b = Vc.b(b, c, d);
    c = a.m;
    return a.h ? (d = Rc(b, c + 1), d <= c ? Xc(a, d, b) : a.h(b)) : a.apply(a, Qc(b));
  }
  function c(a, b, c) {
    b = Vc.a(b, c);
    c = a.m;
    if (a.h) {
      var d = Rc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.h(b);
    }
    return a.apply(a, Qc(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.h) {
      var d = Rc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.h(b);
    }
    return a.apply(a, Qc(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, h, F) {
      var E = null;
      5 < arguments.length && (E = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, h, E);
    }
    function b(a, c, d, f, e, h) {
      c = P(c, P(d, P(f, P(e, Tc(h)))));
      d = a.m;
      return a.h ? (f = Rc(c, d + 1), f <= d ? Xc(a, f, c) : a.h(c)) : a.apply(a, Qc(c));
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
  }(), e = function(e, k, l, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return f.e(e, k, l, n, p, N(arguments, 5));
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
}(), Yc = function() {
  function a(a, b) {
    return!Pb.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ta(S.l(Pb, a, c, d));
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
function Zc(a, b) {
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
function $c(a) {
  for (var b = ad;;) {
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
function ad(a) {
  return a;
}
var bd = function() {
  function a(a, b, c, e) {
    return new V(null, function() {
      var n = I(b), p = I(c), r = I(e);
      return n && p && r ? P(a.b ? a.b(J(n), J(p), J(r)) : a.call(null, J(n), J(p), J(r)), d.l(a, K(n), K(p), K(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var e = I(b), n = I(c);
      return e && n ? P(a.a ? a.a(J(e), J(n)) : a.call(null, J(e), J(n)), d.b(a, K(e), K(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new V(null, function() {
      var c = I(b);
      if (c) {
        if (pc(c)) {
          for (var e = Kb(c), n = R(e), p = new Lc(Array(n), 0), r = 0;;) {
            if (r < n) {
              var x = a.c ? a.c(A.a(e, r)) : a.call(null, A.a(e, r));
              p.add(x);
              r += 1;
            } else {
              break;
            }
          }
          return Pc(p.W(), d.a(a, Lb(c)));
        }
        return P(a.c ? a.c(J(c)) : a.call(null, J(c)), d.a(a, K(c)));
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
        return S.a(a, b);
      }, function F(a) {
        return new V(null, function() {
          var b = d.a(I, a);
          return Zc(ad, b) ? P(d.a(J, b), F(d.a(K, b))) : null;
        }, null, null);
      }(ac.e(h, f, N([e, c], 0))));
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
  }(), d = function(d, h, k, l, n) {
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
function cd(a) {
  return new V(null, function() {
    var b;
    a: {
      b = 2;
      for (var c = a;;) {
        if (c = I(c), 0 < b && c) {
          b -= 1, c = K(c);
        } else {
          b = c;
          break a;
        }
      }
      b = void 0;
    }
    return b;
  }, null, null);
}
var dd = function() {
  function a(a, c) {
    return new V(null, function() {
      var f = I(a), h = I(c);
      return f && h ? P(J(f), P(J(h), b.a(K(f), K(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new V(null, function() {
        var c = bd.a(I, ac.e(e, d, N([a], 0)));
        return Zc(ad, c) ? Uc.a(bd.a(J, c), S.a(b, bd.a(K, c))) : null;
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
}(), fd = function ed(b, c) {
  return new V(null, function() {
    var d = I(c);
    if (d) {
      if (pc(d)) {
        for (var e = Kb(d), f = R(e), h = new Lc(Array(f), 0), k = 0;;) {
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
        return Pc(h.W(), ed(b, Lb(d)));
      }
      e = J(d);
      d = K(d);
      return t(b.c ? b.c(e) : b.call(null, e)) ? P(e, ed(b, d)) : ed(b, d);
    }
    return null;
  }, null, null);
};
function gd(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.ae) ? (c = vc.b(Fb, Eb(a), b), c = Gb(c)) : c = vc.b(bb, a, b) : c = vc.b(ac, L, b);
  return c;
}
function hd(a, b) {
  this.n = a;
  this.d = b;
}
function id(a) {
  return new hd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function jd(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function kd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = id(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var md = function ld(b, c, d, e) {
  var f = new hd(d.n, z(d.d)), h = b.g - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? ld(b, c - 5, d, e) : kd(null, c - 5, e), f.d[h] = b);
  return f;
};
function nd(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function od(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= jd(a)) {
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
    return nd(b, a.g);
  }
}
var qd = function pd(b, c, d, e, f) {
  var h = new hd(d.n, z(d.d));
  if (0 === c) {
    h.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = pd(b, c - 5, d.d[k], e, f);
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
  return new rd(this.g, this.shift, sd.c ? sd.c(this.root) : sd.call(null, this.root), td.c ? td.c(this.K) : td.call(null, this.K));
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
  if (32 > this.g - jd(this)) {
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
  d ? (d = id(null), d.d[0] = this.root, e = kd(null, this.shift, new hd(null, this.K)), d.d[1] = e) : d = md(this, this.shift, this.root, new hd(null, this.K));
  return new X(this.i, this.g + 1, c, d, [b], null);
};
g.fb = function() {
  return A.a(this, 0);
};
g.gb = function() {
  return A.a(this, 1);
};
g.toString = function() {
  return G(this);
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
    return jd(this) <= b ? (a = z(this.K), a[b & 31] = c, new X(this.i, this.g, this.shift, this.root, a, null)) : new X(this.i, this.g, this.shift, qd(this, this.shift, this.root, b, c), this.K, null);
  }
  if (b === this.g) {
    return bb(this, c);
  }
  if (v) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.g), y("]")].join(""));
  }
  return null;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new X(b, this.g, this.shift, this.root, this.K, this.k);
};
g.C = function() {
  return this.i;
};
g.T = function(a, b) {
  return od(this, b)[b & 31];
};
g.Z = function(a, b, c) {
  return 0 <= b && b < this.g ? A.a(this, b) : c;
};
g.G = function() {
  return jc(ud, this.i);
};
var vd = new hd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ud = new X(null, 0, 5, vd, [], 0);
function wd(a) {
  return Gb(vc.b(Fb, Eb(ud), a));
}
function xd(a, b, c, d, e, f) {
  this.w = a;
  this.Y = b;
  this.j = c;
  this.r = d;
  this.i = e;
  this.k = f;
  this.f = 32243948;
  this.o = 1536;
}
g = xd.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.S = function() {
  if (this.r + 1 < this.Y.length) {
    var a = Y.l ? Y.l(this.w, this.Y, this.j, this.r + 1) : Y.call(null, this.w, this.Y, this.j, this.r + 1);
    return null == a ? null : a;
  }
  return Mb(this);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return Vb.a(yd.b ? yd.b(this.w, this.j + this.r, R(this.w)) : yd.call(null, this.w, this.j + this.r, R(this.w)), b);
};
g.N = function(a, b, c) {
  return Vb.b(yd.b ? yd.b(this.w, this.j + this.r, R(this.w)) : yd.call(null, this.w, this.j + this.r, R(this.w)), b, c);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.Y[this.r];
};
g.U = function() {
  if (this.r + 1 < this.Y.length) {
    var a = Y.l ? Y.l(this.w, this.Y, this.j, this.r + 1) : Y.call(null, this.w, this.Y, this.j, this.r + 1);
    return null == a ? L : a;
  }
  return Lb(this);
};
g.Pa = function() {
  var a = this.Y.length, a = this.j + a < Za(this.w) ? Y.b ? Y.b(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? null : a;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return Y.B ? Y.B(this.w, this.Y, this.j, this.r, b) : Y.call(null, this.w, this.Y, this.j, this.r, b);
};
g.G = function() {
  return jc(ud, this.i);
};
g.Qa = function() {
  return Nc.a(this.Y, this.r);
};
g.Ra = function() {
  var a = this.Y.length, a = this.j + a < Za(this.w) ? Y.b ? Y.b(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? L : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new xd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new xd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new xd(a, od(a, b), b, c, null, null);
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
function zd(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.f = 166617887;
  this.o = 8192;
}
g = zd.prototype;
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
  return Ad.B ? Ad.B(this.i, nb(this.da, this.end, b), this.start, this.end + 1, null) : Ad.call(null, this.i, nb(this.da, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return G(this);
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
    return d === a.end ? null : P(A.a(a.da, d), new V(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.P = function() {
  return this.end - this.start;
};
g.hb = function(a, b, c) {
  var d = this, e = d.start + b;
  return Ad.B ? Ad.B(d.i, fc.b(d.da, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Ad.call(null, d.i, fc.b(d.da, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return Ad.B ? Ad.B(b, this.da, this.start, this.end, this.k) : Ad.call(null, b, this.da, this.start, this.end, this.k);
};
g.C = function() {
  return this.i;
};
g.T = function(a, b) {
  return 0 > b || this.end <= this.start + b ? nd(b, this.end - this.start) : A.a(this.da, this.start + b);
};
g.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.b(this.da, this.start + b, c);
};
g.G = function() {
  return jc(ud, this.i);
};
function Ad(a, b, c, d, e) {
  for (;;) {
    if (b instanceof zd) {
      c = b.start + c, d = b.start + d, b = b.da;
    } else {
      var f = R(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new zd(a, b, c, d, e);
    }
  }
}
var yd = function() {
  function a(a, b, c) {
    return Ad(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, R(a));
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
function sd(a) {
  return new hd({}, z(a.d));
}
function td(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  rc(a, 0, b, 0, a.length);
  return b;
}
var Cd = function Bd(b, c, d, e) {
  d = b.root.n === d.n ? d : new hd(b.root.n, z(d.d));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[f];
    b = null != h ? Bd(b, c - 5, h, e) : kd(b.root.n, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function rd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.K = d;
  this.f = 275;
  this.o = 88;
}
g = rd.prototype;
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
    return od(this, b)[b & 31];
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
      return jd(this) <= b ? d.K[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new hd(d.root.n, z(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, p = f(a - 5, l.d[n]);
          l.d[n] = p;
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
    if (32 > this.g - jd(this)) {
      this.K[this.g & 31] = b;
    } else {
      var c = new hd(this.root.n, this.K), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.K = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = kd(this.root.n, this.shift, c);
        this.root = new hd(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Cd(this, this.shift, this.root, c);
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
    var a = this.g - jd(this), b = Array(a);
    rc(this.K, 0, b, 0, a);
    return new X(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Dd() {
  this.o = 0;
  this.f = 2097152;
}
Dd.prototype.s = function() {
  return!1;
};
var Ed = new Dd;
function Fd(a, b) {
  return tc(nc(b) ? R(a) === R(b) ? Zc(ad, bd.a(function(a) {
    return Pb.a(dc.b(b, J(a), Ed), J(M(a)));
  }, a)) : null : null);
}
function Gd(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ka, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof U && e === h.ka) {
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
                if (Pb.a(b, c[e])) {
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
function Hd(a, b, c) {
  this.d = a;
  this.j = b;
  this.L = c;
  this.o = 0;
  this.f = 32374990;
}
g = Hd.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  return this.j < this.d.length - 2 ? new Hd(this.d, this.j + 2, this.L) : null;
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return(this.d.length - this.j) / 2;
};
g.I = function() {
  return new X(null, 2, 5, vd, [this.d[this.j], this.d[this.j + 1]], null);
};
g.U = function() {
  return this.j < this.d.length - 2 ? new Hd(this.d, this.j + 2, this.L) : L;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new Hd(this.d, this.j, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return jc(L, this.L);
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
  return new Id({}, this.d.length, z(this.d));
};
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Bc(this);
};
g.Q = function(a, b) {
  return gb.b(this, b, null);
};
g.R = function(a, b, c) {
  a = Gd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
g.wa = function(a, b, c) {
  a = Gd(this, b);
  if (-1 === a) {
    if (this.g < Jd) {
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
    return sb(hb(gd(Kd, this), b, c), this.i);
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
  return oc(b) ? hb(this, A.a(b, 0), A.a(b, 1)) : vc.b(bb, this, b);
};
g.toString = function() {
  return G(this);
};
g.D = function() {
  return 0 <= this.d.length - 2 ? new Hd(this.d, 0, null) : null;
};
g.P = function() {
  return this.g;
};
g.s = function(a, b) {
  return Fd(this, b);
};
g.F = function(a, b) {
  return new s(b, this.g, this.d, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return sb(Ld, this.i);
};
var Ld = new s(null, 0, [], null), Jd = 8;
function Md(a) {
  for (var b = a.length, c = 0, d = Eb(Ld);;) {
    if (c < b) {
      var e = c + 2, d = Hb(d, a[c], a[c + 1]), c = e
    } else {
      return Gb(d);
    }
  }
}
function Id(a, b, c) {
  this.sa = a;
  this.oa = b;
  this.d = c;
  this.o = 56;
  this.f = 258;
}
g = Id.prototype;
g.ya = function(a, b, c) {
  if (t(this.sa)) {
    a = Gd(this, b);
    if (-1 === a) {
      return this.oa + 2 <= 2 * Jd ? (this.oa += 2, this.d.push(b), this.d.push(c), this) : Wc.b(Nd.a ? Nd.a(this.oa, this.d) : Nd.call(null, this.oa, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ia = function(a, b) {
  if (t(this.sa)) {
    if (b ? b.f & 2048 || b.Lb || (b.f ? 0 : u(jb, b)) : u(jb, b)) {
      return Hb(this, Cc.c ? Cc.c(b) : Cc.call(null, b), Dc.c ? Dc.c(b) : Dc.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = J(c);
      if (t(e)) {
        c = M(c), d = Hb(d, Cc.c ? Cc.c(e) : Cc.call(null, e), Dc.c ? Dc.c(e) : Dc.call(null, e));
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
    return a = Gd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.P = function() {
  if (t(this.sa)) {
    return xc(this.oa);
  }
  throw Error("count after persistent!");
};
function Nd(a, b) {
  for (var c = Eb(Kd), d = 0;;) {
    if (d < a) {
      c = Wc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Od() {
  this.ea = !1;
}
function Pd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ka === b.ka ? !0 : v ? Pb.a(a, b) : null;
}
var Qd = function() {
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
}(), Rd = function() {
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
function Sd(a, b, c) {
  this.n = a;
  this.v = b;
  this.d = c;
}
g = Sd.prototype;
g.aa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Ac(this.v & h - 1);
  if (0 === (this.v & h)) {
    var l = Ac(this.v);
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
      k[c >>> b & 31] = Td.aa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.v >>> d & 1) && (k[d] = null != this.d[e] ? Td.aa(a, b + 5, H(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ud(a, l + 1, k);
    }
    return v ? (b = Array(2 * (l + 4)), rc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, rc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ea = !0, a = this.ta(a), a.d = b, a.v |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.aa(a, b + 5, c, d, e, f), l === h ? this : Rd.l(this, a, 2 * k + 1, l)) : Pd(d, l) ? e === h ? this : Rd.l(this, a, 2 * k + 1, e) : v ? (f.ea = !0, Rd.fa(this, a, 2 * k, null, 2 * k + 1, Vd.ra ? Vd.ra(a, b + 5, l, h, c, d, e) : Vd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.Aa = function() {
  return Wd.c ? Wd.c(this.d) : Wd.call(null, this.d);
};
g.ta = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Ac(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.d, 0, c, 0, 2 * b);
  return new Sd(a, this.v, c);
};
g.$ = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Ac(this.v & f - 1);
  if (0 === (this.v & f)) {
    var k = Ac(this.v);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Td.$(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.v >>> c & 1) && (h[c] = null != this.d[d] ? Td.$(a + 5, H(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ud(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    rc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    rc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ea = !0;
    return new Sd(null, this.v | f, a);
  }
  k = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == k ? (k = f.$(a + 5, b, c, d, e), k === f ? this : new Sd(null, this.v, Qd.b(this.d, 2 * h + 1, k))) : Pd(c, k) ? d === f ? this : new Sd(null, this.v, Qd.b(this.d, 2 * h + 1, d)) : v ? (e.ea = !0, new Sd(null, this.v, Qd.B(this.d, 2 * h, null, 2 * h + 1, Vd.fa ? Vd.fa(a + 5, k, f, b, c, d) : Vd.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.na = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.v & e)) {
    return d;
  }
  var f = Ac(this.v & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.na(a + 5, b, c, d) : Pd(c, e) ? f : v ? d : null;
};
var Td = new Sd(null, 0, []);
function Ud(a, b, c) {
  this.n = a;
  this.g = b;
  this.d = c;
}
g = Ud.prototype;
g.aa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = Rd.l(this, a, h, Td.aa(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.aa(a, b + 5, c, d, e, f);
  return b === k ? this : Rd.l(this, a, h, b);
};
g.Aa = function() {
  return Xd.c ? Xd.c(this.d) : Xd.call(null, this.d);
};
g.ta = function(a) {
  return a === this.n ? this : new Ud(a, this.g, z(this.d));
};
g.$ = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if (null == h) {
    return new Ud(null, this.g + 1, Qd.b(this.d, f, Td.$(a + 5, b, c, d, e)));
  }
  a = h.$(a + 5, b, c, d, e);
  return a === h ? this : new Ud(null, this.g, Qd.b(this.d, f, a));
};
g.na = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.na(a + 5, b, c, d) : d;
};
function Yd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Pd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Zd(a, b, c, d) {
  this.n = a;
  this.ja = b;
  this.g = c;
  this.d = d;
}
g = Zd.prototype;
g.aa = function(a, b, c, d, e, f) {
  if (c === this.ja) {
    b = Yd(this.d, this.g, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.g) {
        return a = Rd.fa(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.ea = !0, a.g += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      rc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ea = !0;
      f = this.g + 1;
      a === this.n ? (this.d = b, this.g = f, a = this) : a = new Zd(this.n, this.ja, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Rd.l(this, a, b + 1, e);
  }
  return(new Sd(a, 1 << (this.ja >>> b & 31), [null, this, null, null])).aa(a, b, c, d, e, f);
};
g.Aa = function() {
  return Wd.c ? Wd.c(this.d) : Wd.call(null, this.d);
};
g.ta = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  rc(this.d, 0, b, 0, 2 * this.g);
  return new Zd(a, this.ja, this.g, b);
};
g.$ = function(a, b, c, d, e) {
  return b === this.ja ? (a = Yd(this.d, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), rc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ea = !0, new Zd(null, this.ja, this.g + 1, b)) : Pb.a(this.d[a], d) ? this : new Zd(null, this.ja, this.g, Qd.b(this.d, a + 1, d))) : (new Sd(null, 1 << (this.ja >>> a & 31), [null, this])).$(a, b, c, d, e);
};
g.na = function(a, b, c, d) {
  a = Yd(this.d, this.g, c);
  return 0 > a ? d : Pd(c, this.d[a]) ? this.d[a + 1] : v ? d : null;
};
var Vd = function() {
  function a(a, b, c, h, k, l, n) {
    var p = H(c);
    if (p === k) {
      return new Zd(null, p, 2, [c, h, l, n]);
    }
    var r = new Od;
    return Td.aa(a, b, p, c, h, r).aa(a, b, k, l, n, r);
  }
  function b(a, b, c, h, k, l) {
    var n = H(b);
    if (n === h) {
      return new Zd(null, n, 2, [b, c, k, l]);
    }
    var p = new Od;
    return Td.$(a, n, b, c, p).$(a, h, k, l, p);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.fa = b;
  c.ra = a;
  return c;
}();
function $d(a, b, c, d, e) {
  this.i = a;
  this.ba = b;
  this.j = c;
  this.q = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = $d.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return null == this.q ? new X(null, 2, 5, vd, [this.ba[this.j], this.ba[this.j + 1]], null) : J(this.q);
};
g.U = function() {
  return null == this.q ? Wd.b ? Wd.b(this.ba, this.j + 2, null) : Wd.call(null, this.ba, this.j + 2, null) : Wd.b ? Wd.b(this.ba, this.j, M(this.q)) : Wd.call(null, this.ba, this.j, M(this.q));
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new $d(b, this.ba, this.j, this.q, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return jc(L, this.i);
};
var Wd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new $d(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (t(h) && (h = h.Aa(), t(h))) {
            return new $d(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new $d(null, a, b, c, null);
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
function ae(a, b, c, d, e) {
  this.i = a;
  this.ba = b;
  this.j = c;
  this.q = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = ae.prototype;
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Zb(this);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return J(this.q);
};
g.U = function() {
  return Xd.l ? Xd.l(null, this.ba, this.j, M(this.q)) : Xd.call(null, null, this.ba, this.j, M(this.q));
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new ae(b, this.ba, this.j, this.q, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return jc(L, this.i);
};
var Xd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (t(k) && (k = k.Aa(), t(k))) {
            return new ae(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new ae(a, b, c, h, null);
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
function be(a, b, c, d, e, f) {
  this.i = a;
  this.g = b;
  this.root = c;
  this.V = d;
  this.X = e;
  this.k = f;
  this.o = 8196;
  this.f = 16123663;
}
g = be.prototype;
g.Ga = function() {
  return new ce({}, this.root, this.g, this.V, this.X);
};
g.u = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Bc(this);
};
g.Q = function(a, b) {
  return gb.b(this, b, null);
};
g.R = function(a, b, c) {
  return null == b ? this.V ? this.X : c : null == this.root ? c : v ? this.root.na(0, H(b), b, c) : null;
};
g.wa = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.X ? this : new be(this.i, this.V ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new Od;
  b = (null == this.root ? Td : this.root).$(0, H(b), b, c, a);
  return b === this.root ? this : new be(this.i, a.ea ? this.g + 1 : this.g, b, this.V, this.X, null);
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
  return oc(b) ? hb(this, A.a(b, 0), A.a(b, 1)) : vc.b(bb, this, b);
};
g.toString = function() {
  return G(this);
};
g.D = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Aa() : null;
    return this.V ? P(new X(null, 2, 5, vd, [null, this.X], null), a) : a;
  }
  return null;
};
g.P = function() {
  return this.g;
};
g.s = function(a, b) {
  return Fd(this, b);
};
g.F = function(a, b) {
  return new be(b, this.g, this.root, this.V, this.X, this.k);
};
g.C = function() {
  return this.i;
};
g.G = function() {
  return sb(Kd, this.i);
};
var Kd = new be(null, 0, null, !1, null, 0);
function ec(a, b) {
  for (var c = a.length, d = 0, e = Eb(Kd);;) {
    if (d < c) {
      var f = d + 1, e = e.ya(null, a[d], b[d]), d = f
    } else {
      return Gb(e);
    }
  }
}
function ce(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.X = e;
  this.o = 56;
  this.f = 258;
}
g = ce.prototype;
g.ya = function(a, b, c) {
  return de(this, b, c);
};
g.Ia = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.Lb || (b.f ? 0 : u(jb, b)) : u(jb, b)) {
        c = de(this, Cc.c ? Cc.c(b) : Cc.call(null, b), Dc.c ? Dc.c(b) : Dc.call(null, b));
        break a;
      }
      c = I(b);
      for (var d = this;;) {
        var e = J(c);
        if (t(e)) {
          c = M(c), d = de(d, Cc.c ? Cc.c(e) : Cc.call(null, e), Dc.c ? Dc.c(e) : Dc.call(null, e));
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
    this.n = null, a = new be(null, this.count, this.root, this.V, this.X, null);
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
function de(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.X !== c && (a.X = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new Od;
      b = (null == a.root ? Td : a.root).aa(a.n, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ea && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var ee = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I(a);
    for (var b = Eb(Kd);;) {
      if (a) {
        var e = M(M(a)), b = Wc.b(b, J(a), J(M(a)));
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
}(), fe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new s(null, xc(R(a)), S.a(Wa, a), null);
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ge(a, b) {
  this.J = a;
  this.L = b;
  this.o = 0;
  this.f = 32374988;
}
g = ge.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null == a ? null : new ge(a, this.L);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.J.I(null).fb();
};
g.U = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null != a ? new ge(a, this.L) : L;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new ge(this.J, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return jc(L, this.L);
};
function he(a) {
  return(a = I(a)) ? new ge(a, null) : null;
}
function Cc(a) {
  return kb(a);
}
function ie(a, b) {
  this.J = a;
  this.L = b;
  this.o = 0;
  this.f = 32374988;
}
g = ie.prototype;
g.u = function() {
  return Zb(this);
};
g.S = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null == a ? null : new ie(a, this.L);
};
g.A = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return T.a(b, this);
};
g.N = function(a, b, c) {
  return T.b(b, c, this);
};
g.D = function() {
  return this;
};
g.I = function() {
  return this.J.I(null).gb();
};
g.U = function() {
  var a = this.J, a = (a ? a.f & 128 || a.Ha || (a.f ? 0 : u(eb, a)) : u(eb, a)) ? this.J.S(null) : M(this.J);
  return null != a ? new ie(a, this.L) : L;
};
g.s = function(a, b) {
  return Q(this, b);
};
g.F = function(a, b) {
  return new ie(this.J, b);
};
g.C = function() {
  return this.L;
};
g.G = function() {
  return jc(L, this.L);
};
function je(a) {
  return(a = I(a)) ? new ie(a, null) : null;
}
function Dc(a) {
  return lb(a);
}
var ke = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return t($c(a)) ? vc.a(function(a, b) {
      return ac.a(t(a) ? a : Ld, b);
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
function Ic(a) {
  if (a && (a.o & 4096 || a.Nb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
var le = function() {
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
}(), me = function() {
  function a(a, b) {
    le.a(a, b);
    return b;
  }
  function b(a) {
    le.c(a);
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
function ne(a, b, c, d, e, f, h) {
  var k = Ma;
  try {
    Ma = null == Ma ? null : Ma - 1;
    if (null != Ma && 0 > Ma) {
      return D(a, "#");
    }
    D(a, c);
    I(h) && (b.b ? b.b(J(h), a, f) : b.call(null, J(h), a, f));
    for (var l = M(h), n = Sa.c(f);l && (null == n || 0 !== n);) {
      D(a, d);
      b.b ? b.b(J(l), a, f) : b.call(null, J(l), a, f);
      var p = M(l);
      c = n - 1;
      l = p;
      n = c;
    }
    t(Sa.c(f)) && (D(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    Ma = k;
  }
}
var oe = function() {
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
          f = e, pc(f) ? (e = Kb(f), h = Lb(f), f = e, l = R(e), e = h, h = l) : (l = J(f), D(a, l), e = M(f), f = null, h = 0), k = 0;
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
}(), pe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function qe(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return pe[a];
  })), y('"')].join("");
}
var Z = function re(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (v) {
    t(function() {
      var c = dc.a(d, Qa);
      return t(c) ? (c = b ? b.f & 131072 || b.Mb ? !0 : b.f ? !1 : u(pb, b) : u(pb, b)) ? kc(b) : c : c;
    }()) && (D(c, "^"), re(kc(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.qb) {
      return b.Ub(c);
    }
    if (b && (b.f & 2147483648 || b.H)) {
      return b.t(null, c, d);
    }
    if (Ua(b) === Boolean || "number" === typeof b) {
      return D(c, "" + y(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), se.l ? se.l(bd.a(function(c) {
        return new X(null, 2, 5, vd, [Jc.c(c), b[c]], null);
      }, qc(b)), re, c, d) : se.call(null, bd.a(function(c) {
        return new X(null, 2, 5, vd, [Jc.c(c), b[c]], null);
      }, qc(b)), re, c, d);
    }
    if (b instanceof Array) {
      return ne(c, re, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return t(Pa.c(d)) ? D(c, qe(b)) : D(c, b);
    }
    if (hc(b)) {
      return oe.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + y(b);;) {
          if (R(d) < c) {
            d = [y("0"), y(d)].join("");
          } else {
            return d;
          }
        }
      };
      return oe.e(c, N(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? oe.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.H || (b.f ? 0 : u(Ab, b)) : u(Ab, b)) ? Bb(b, c, d) : v ? oe.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0)) : null;
  }
  return null;
}, te = function() {
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
      var e = Na(), f = new Ka;
      a: {
        var h = new Nb(f);
        Z(J(a), h, e);
        a = I(M(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var p = k.T(null, n);
            D(h, " ");
            Z(p, h, e);
            n += 1;
          } else {
            if (a = I(a)) {
              k = a, pc(k) ? (a = Kb(k), l = Lb(k), k = a, p = R(a), a = l, l = p) : (p = J(k), D(h, " "), Z(p, h, e), a = M(k), k = null, l = 0), n = 0;
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
function se(a, b, c, d) {
  return ne(c, function(a, c, d) {
    b.b ? b.b(kb(a), c, d) : b.call(null, kb(a), c, d);
    D(c, " ");
    return b.b ? b.b(lb(a), c, d) : b.call(null, lb(a), c, d);
  }, "{", ", ", "}", d, I(a));
}
ge.prototype.H = !0;
ge.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
Ub.prototype.H = !0;
Ub.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
zd.prototype.H = !0;
zd.prototype.t = function(a, b, c) {
  return ne(b, Z, "[", " ", "]", c, this);
};
Oc.prototype.H = !0;
Oc.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
s.prototype.H = !0;
s.prototype.t = function(a, b, c) {
  return se(this, Z, b, c);
};
V.prototype.H = !0;
V.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
$d.prototype.H = !0;
$d.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
xd.prototype.H = !0;
xd.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
be.prototype.H = !0;
be.prototype.t = function(a, b, c) {
  return se(this, Z, b, c);
};
X.prototype.H = !0;
X.prototype.t = function(a, b, c) {
  return ne(b, Z, "[", " ", "]", c, this);
};
Ec.prototype.H = !0;
Ec.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
Hd.prototype.H = !0;
Hd.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
Fc.prototype.H = !0;
Fc.prototype.t = function(a, b) {
  return D(b, "()");
};
Hc.prototype.H = !0;
Hc.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
ae.prototype.H = !0;
ae.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
ie.prototype.H = !0;
ie.prototype.t = function(a, b, c) {
  return ne(b, Z, "(", " ", ")", c, this);
};
X.prototype.Ea = !0;
X.prototype.Fa = function(a, b) {
  return uc.a(this, b);
};
zd.prototype.Ea = !0;
zd.prototype.Fa = function(a, b) {
  return uc.a(this, b);
};
U.prototype.Ea = !0;
U.prototype.Fa = function(a, b) {
  return Ob(this, b);
};
Sb.prototype.Ea = !0;
Sb.prototype.Fa = function(a, b) {
  return Ob(this, b);
};
function ue(a, b) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b);
  }
  var c;
  c = ue[q(null == a ? null : a)];
  if (!c && (c = ue._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var ve = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Tb : a) {
      return a.Tb(a, b, c, d, e);
    }
    var p;
    p = ve[q(null == a ? null : a)];
    if (!p && (p = ve._, !p)) {
      throw w("ISwap.-swap!", a);
    }
    return p.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Sb : a) {
      return a.Sb(a, b, c, d);
    }
    var e;
    e = ve[q(null == a ? null : a)];
    if (!e && (e = ve._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Rb : a) {
      return a.Rb(a, b, c);
    }
    var d;
    d = ve[q(null == a ? null : a)];
    if (!d && (d = ve._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Qb : a) {
      return a.Qb(a, b);
    }
    var c;
    c = ve[q(null == a ? null : a)];
    if (!c && (c = ve._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.l = b;
  e.B = a;
  return e;
}();
function we(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.fc = c;
  this.Db = d;
  this.f = 2153938944;
  this.o = 16386;
}
g = we.prototype;
g.u = function() {
  return ga(this);
};
g.nb = function(a, b, c) {
  a = I(this.Db);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.T(null, f), k = cc.b(h, 0, null), h = cc.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = I(a)) {
        pc(a) ? (d = Kb(a), a = Lb(a), k = d, e = R(d), d = k) : (d = J(a), k = cc.b(d, 0, null), h = cc.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.t = function(a, b, c) {
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
g.s = function(a, b) {
  return this === b;
};
var ye = function() {
  function a(a) {
    return new we(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = sc(c) ? S.a(ee, c) : c, e = dc.a(d, xe), d = dc.a(d, Qa);
      return new we(a, d, e, null);
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
function ze(a, b) {
  if (a instanceof we) {
    var c = a.fc;
    if (null != c && !t(c.c ? c.c(b) : c.call(null, b))) {
      throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(te.e(N([Gc(new Sb(null, "validate", "validate", 1233162959, null), new Sb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Db && Db(a, c, b);
    return b;
  }
  return ue(a, b);
}
var Ae = function() {
  function a(a, b, c, d) {
    return a instanceof we ? ze(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : ve.l(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof we ? ze(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : ve.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof we ? ze(a, b.c ? b.c(a.state) : b.call(null, a.state)) : ve.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var x = null;
      4 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, d, e, f) {
      return a instanceof we ? ze(a, S.B(c, a.state, d, e, f)) : ve.B(a, c, d, e, f);
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
  }(), d = function(d, h, k, l, n) {
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
}(), Be = {};
function Ce(a, b) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b);
  }
  var c;
  c = Ce[q(null == a ? null : a)];
  if (!c && (c = Ce._, !c)) {
    throw w("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Ee = function() {
  function a(a) {
    return b.e(a, N([new s(null, 1, [De, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? t(t(null) ? null : a.be) || (a.Vb ? 0 : u(Be, a)) : u(Be, a)) {
        return Ce(a, S.a(fe, c));
      }
      if (I(c)) {
        var d = sc(c) ? S.a(ee, c) : c, e = dc.a(d, De);
        return function(a, b, c, d) {
          return function E(e) {
            return sc(e) ? me.c(bd.a(E, e)) : (null == e ? 0 : e ? e.f & 8 || e.$d || (e.f ? 0 : u(ab, e)) : u(ab, e)) ? gd(null == e ? null : $a(e), bd.a(E, e)) : e instanceof Array ? wd(bd.a(E, e)) : Ua(e) === Object ? gd(Ld, function() {
              return function(a, b, c, d) {
                return function Cb(f) {
                  return new V(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = I(f);
                        if (a) {
                          if (pc(a)) {
                            var b = Kb(a), c = R(b), h = new Lc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = A.a(b, k), l = new X(null, 2, 5, vd, [d.c ? d.c(l) : d.call(null, l), E(e[l])], null);
                                  h.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? Pc(h.W(), Cb(Lb(a))) : Pc(h.W(), null);
                          }
                          h = J(a);
                          return P(new X(null, 2, 5, vd, [d.c ? d.c(h) : d.call(null, h), E(e[h])], null), Cb(K(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(qc(e));
            }()) : v ? e : null;
          };
        }(c, d, e, t(e) ? Jc : y)(a);
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
}(), yc = function() {
  function a(a) {
    return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
  }
  function b() {
    return c.c(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.c = a;
  return c;
}(), zc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.p ? Math.random.p() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.p ? Math.random.p() : Math.random.call(null)) * a);
};
var Fe, Ge, He, Ie;
function Je() {
  return m.navigator ? m.navigator.userAgent : null;
}
Ie = He = Ge = Fe = !1;
var Ke;
if (Ke = Je()) {
  var Le = m.navigator;
  Fe = 0 == Ke.indexOf("Opera");
  Ge = !Fe && -1 != Ke.indexOf("MSIE");
  He = !Fe && -1 != Ke.indexOf("WebKit");
  Ie = !Fe && !He && "Gecko" == Le.product;
}
var Me = Fe, $ = Ge, Ne = Ie, Oe = He;
function Pe() {
  var a = m.document;
  return a ? a.documentMode : void 0;
}
var Qe;
a: {
  var Re = "", Se;
  if (Me && m.opera) {
    var Te = m.opera.version, Re = "function" == typeof Te ? Te() : Te
  } else {
    if (Ne ? Se = /rv\:([^\);]+)(\)|;)/ : $ ? Se = /MSIE\s+([^\);]+)(\)|;)/ : Oe && (Se = /WebKit\/(\S+)/), Se) {
      var Ue = Se.exec(Je()), Re = Ue ? Ue[1] : ""
    }
  }
  if ($) {
    var Ve = Pe();
    if (Ve > parseFloat(Re)) {
      Qe = String(Ve);
      break a;
    }
  }
  Qe = Re;
}
var We = {};
function Xe(a) {
  var b;
  if (!(b = We[a])) {
    b = 0;
    for (var c = String(Qe).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], r = n.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == r[0].length) {
          break;
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == r[2].length) ? -1 : (0 == p[2].length) > (0 == r[2].length) ? 1 : 0) || (p[2] < r[2] ? -1 : p[2] > r[2] ? 1 : 0);
      } while (0 == b);
    }
    b = We[a] = 0 <= b;
  }
  return b;
}
var Ye = m.document, Ze = Ye && $ ? Pe() || ("CSS1Compat" == Ye.compatMode ? parseInt(Qe, 10) : 5) : void 0;
var $e = {qc:"click", zc:"dblclick", Yc:"mousedown", bd:"mouseup", ad:"mouseover", $c:"mouseout", Zc:"mousemove", Nd:"selectstart", Rc:"keypress", Qc:"keydown", Sc:"keyup", nc:"blur", Ic:"focus", Ac:"deactivate", Jc:$ ? "focusin" : "DOMFocusIn", Kc:$ ? "focusout" : "DOMFocusOut", oc:"change", Md:"select", Od:"submit", Pc:"input", Ed:"propertychange", Gc:"dragstart", Bc:"drag", Dc:"dragenter", Fc:"dragover", Ec:"dragleave", Hc:"drop", Cc:"dragend", Ud:"touchstart", Td:"touchmove", Sd:"touchend", Rd:"touchcancel", 
mc:"beforeunload", wc:"contextmenu", Eb:"error", Mc:"help", Tc:"load", Wc:"losecapture", Gd:"readystatechange", Jd:"resize", Ld:"scroll", Xd:"unload", Lc:"hashchange", vd:"pagehide", wd:"pageshow", Cd:"popstate", xc:"copy", xd:"paste", yc:"cut", jc:"beforecopy", kc:"beforecut", lc:"beforepaste", ud:"online", sd:"offline", Xc:"message", vc:"connect", Vd:Oe ? "webkitTransitionEnd" : Me ? "oTransitionEnd" : "transitionend", cd:"MSGestureChange", dd:"MSGestureEnd", ed:"MSGestureHold", fd:"MSGestureStart", 
gd:"MSGestureTap", hd:"MSGotPointerCapture", jd:"MSInertiaStart", kd:"MSLostPointerCapture", ld:"MSPointerCancel", md:"MSPointerDown", nd:"MSPointerMove", pd:"MSPointerOver", od:"MSPointerOut", qd:"MSPointerUp", Qd:"textinput", tc:"compositionstart", uc:"compositionupdate", sc:"compositionend"};
function af() {
  0 != bf && ga(this);
}
var bf = 0;
var cf = !$ || $ && 9 <= Ze, df = $ && !Xe("9");
!Oe || Xe("528");
Ne && Xe("1.9b") || $ && Xe("8") || Me && Xe("9.5") || Oe && Xe("528");
Ne && !Xe("8") || $ && Xe("9");
function ef(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
ef.prototype.jb = !1;
ef.prototype.defaultPrevented = !1;
ef.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function ff(a) {
  ff[" "](a);
  return a;
}
ff[" "] = function() {
};
function gf(a, b) {
  a && this.Ka(a, b);
}
oa(gf, ef);
g = gf.prototype;
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
  ef.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Ne) {
      var e;
      a: {
        try {
          ff(d.nodeName);
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
  this.offsetX = Oe || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Oe || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  gf.ec.preventDefault.call(this);
  var a = this.tb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, df) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var hf = 0;
function jf() {
}
g = jf.prototype;
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
  this.key = ++hf;
  this.qa = !1;
};
g.handleEvent = function(a) {
  return this.zb ? this.pa.call(this.xb || this.src, a) : this.pa.handleEvent.call(this.pa, a);
};
var kf = {}, lf = {}, mf = {}, nf = {};
function of(a, b, c, d, e) {
  if ("array" == q(b)) {
    for (var f = 0;f < b.length;f++) {
      of(a, b[f], c, d, e);
    }
    return null;
  }
  a: {
    if (!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var h = lf;
    b in h || (h[b] = {ga:0, ha:0});
    h = h[b];
    d in h || (h[d] = {ga:0, ha:0}, h.ga++);
    var h = h[d], f = ga(a), k;
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
    l = pf();
    h = new jf;
    h.Ka(c, l, a, b, d, e);
    h.Da = !1;
    l.src = a;
    l.pa = h;
    k.push(h);
    mf[f] || (mf[f] = []);
    mf[f].push(h);
    a.addEventListener ? a != m && a.Zb || a.addEventListener(b, l, d) : a.attachEvent(b in nf ? nf[b] : nf[b] = "on" + b, l);
    a = h;
  }
  b = a.key;
  kf[b] = a;
  return b;
}
function pf() {
  var a = qf, b = cf ? function(c) {
    return a.call(b.src, b.pa, c);
  } : function(c) {
    c = a.call(b.src, b.pa, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function rf(a, b, c, d) {
  if (!d.La && d.Ab) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].qa ? d[e].Bb.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Ab = !1;
    0 == f && (delete lf[a][b][c], lf[a][b].ga--, 0 == lf[a][b].ga && (delete lf[a][b], lf[a].ga--), 0 == lf[a].ga && delete lf[a]);
  }
}
function sf(a, b, c, d, e) {
  var f = 1;
  b = ga(b);
  if (a[b]) {
    var h = --a.ha, k = a[b];
    k.La ? k.La++ : k.La = 1;
    try {
      for (var l = k.length, n = 0;n < l;n++) {
        var p = k[n];
        p && !p.qa && (f &= !1 !== tf(p, e));
      }
    } finally {
      a.ha = Math.max(h, a.ha), k.La--, rf(c, d, b, k);
    }
  }
  return Boolean(f);
}
function tf(a, b) {
  if (a.Da) {
    var c = a.key, d = kf[c];
    if (d && !d.qa) {
      var e = d.src, f = d.type, h = d.Bb, k = d.capture;
      e.removeEventListener ? e != m && e.Zb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in nf ? nf[f] : nf[f] = "on" + f, h);
      e = ga(e);
      if (mf[e]) {
        var h = mf[e], l = Aa(h, d);
        0 <= l && za.splice.call(h, l, 1);
        0 == h.length && delete mf[e];
      }
      d.qa = !0;
      if (d = lf[f][k][e]) {
        d.Ab = !0, rf(f, k, e, d);
      }
      delete kf[c];
    }
  }
  return a.handleEvent(b);
}
function qf(a, b) {
  if (a.qa) {
    return!0;
  }
  var c = a.type, d = lf;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!cf) {
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
          } catch (n) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new gf;
    l.Ka(e, this);
    e = !0;
    try {
      if (h) {
        for (var p = [], r = l.currentTarget;r;r = r.parentNode) {
          p.push(r);
        }
        f = d[!0];
        f.ha = f.ga;
        for (var x = p.length - 1;!l.jb && 0 <= x && f.ha;x--) {
          l.currentTarget = p[x], e &= sf(f, p[x], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.ha = f.ga, x = 0;!l.jb && x < p.length && f.ha;x++) {
            l.currentTarget = p[x], e &= sf(f, p[x], c, !1, l);
          }
        }
      } else {
        e = tf(a, l);
      }
    } finally {
      p && (p.length = 0);
    }
    return e;
  }
  c = new gf(b, this);
  return e = tf(a, c);
}
;var Oa = new U(null, "dup", "dup"), Ra = new U(null, "default", "default"), xe = new U(null, "keywordize-keys", "keywordize-keys"), De = new U(null, "ancestors", "ancestors"), Rb = new U(null, "done", "done"), Pa = new U(null, "print-length", "print-length"), Qa = new U(null, "else", "else"), Sa = new U("cljs.core", "not-found", "cljs.core/not-found"), v = new U(null, "validator", "validator");
function uf(a) {
  if (a ? a.rb : a) {
    return a.rb();
  }
  var b;
  b = uf[q(null == a ? null : a)];
  if (!b && (b = uf._, !b)) {
    throw w("EventType.event-types", a);
  }
  return b.call(null, a);
}
Element.prototype.rb = function() {
  return gd(Ld, bd.a(function(a) {
    var b = cc.b(a, 0, null);
    a = cc.b(a, 1, null);
    return new X(null, 2, 5, vd, [Jc.c(b.toLowerCase()), a], null);
  }, ke.e(N([Ee.c($e)], 0))));
};
var vf = function() {
  function a(a, b, c, h) {
    return of(a, dc.b(uf(a), b, b), c, h);
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
var wf, xf = !$ || $ && 9 <= Ze, yf = !Ne && !$ || $ && $ && 9 <= Ze || Ne && Xe("1.9.1");
$ && Xe("9");
function zf(a, b) {
  var c;
  c = a.className;
  c = ca(c) && c.match(/\S+/g) || [];
  for (var d = Ea(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    0 <= Aa(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
}
;function Af(a, b) {
  Fa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Bf ? a.setAttribute(Bf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Bf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Cf(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!xf && h && (h.name || h.type)) {
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
  h && (ca(h) ? f.className = h : "array" == q(h) ? zf.apply(null, [f].concat(h)) : Af(f, h));
  2 < d.length && Df(e, f, d, 2);
  return f;
}
function Df(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ca(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ba(f) || fa(f) && 0 < f.nodeType ? e(f) : Ba(Ef(f) ? Da(f) : f, e);
  }
}
function Ff(a, b) {
  Df(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1);
}
function Ef(a) {
  if (a && "number" == typeof a.length) {
    if (fa(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (da(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Gf(a) {
  this.sb = a || m.document || document;
}
g = Gf.prototype;
g.createElement = function(a) {
  return this.sb.createElement(a);
};
g.createTextNode = function(a) {
  return this.sb.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = Ff;
g.wb = function(a) {
  return yf && void 0 != a.children ? a.children : Ca(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
var Hf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    S.b(Ff, a, b);
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
}(), If = function() {
  function a(a, b, c) {
    if (a ? a.Xb : a) {
      return a.Xb(a, b, c);
    }
    var d;
    d = If[q(null == a ? null : a)];
    if (!d && (d = If._, !d)) {
      throw w("DOMBuilder.-element", a);
    }
    return d.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Wb : a) {
      return a.Wb(a, b);
    }
    var c;
    c = If[q(null == a ? null : a)];
    if (!c && (c = If._, !c)) {
      throw w("DOMBuilder.-element", a);
    }
    return c.call(null, a, b);
  }
  function c(a) {
    if (a ? a.ib : a) {
      return a.ib(a);
    }
    var b;
    b = If[q(null == a ? null : a)];
    if (!b && (b = If._, !b)) {
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
}(), Jf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log(S.a(te, a));
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
  Jf.e(N(["js/Element (-element ", this, ")"], 0));
  return this;
};
X.prototype.ib = function() {
  Jf.e(N(["PersistentVector (-element ", this, ")"], 0));
  var a = J(this), b = J(M(this)), c = cd(this);
  return nc(b) ? If.b(a, b, c) : If.b(a, null, K(this));
};
If.string = function() {
  function a(a, b, e) {
    Jf.e(N(["string (-element ", a, " ", b, " ", e, ")"], 0));
    b = nc(b) && I(b) ? vc.b(function(a, b) {
      var c = cc.b(b, 0, null), d = cc.b(b, 1, null), e = null == a ? {} : a;
      Jf.e(N(["o \x3d ", e], 0));
      Jf.e(N(["k \x3d ", c], 0));
      Jf.e(N(["v \x3d ", d], 0));
      return c instanceof U || "string" === typeof c ? (e[Ic(c)] = d, e) : null;
    }, {}, b) : null;
    console.log(b);
    return I(e) ? S.l(Cf, Ic(a), b, bd.a(If, e)) : Cf(Ic(a), b);
  }
  var b = null;
  return b = function(b, d, e) {
    switch(arguments.length) {
      case 1:
        Jf.e(N(["string (-element ", b, ")"], 0));
        var f;
        b instanceof U ? (f = Ic(b), f = document.createElement(f)) : v ? (f = Ic(b), f = document.createTextNode(String(f))) : f = null;
        return f;
      case 2:
        return Jf.e(N(["string (-element ", b, " ", d, ")"], 0)), f = J(d), nc(f) ? If.b(b, f, K(d)) : If.b(b, null, d);
      case 3:
        return a.call(this, b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
var Kf = function() {
  function a(a) {
    Jf.e(N(["(element ", a, ")"], 0));
    return If.c(a);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      Jf.e(N(["(element ", a, " ", c, ")"], 0));
      var d = J(c);
      return nc(d) ? If.b(a, d, K(c)) : If.b(a, null, c);
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
function Lf(a) {
  a = Ic(a);
  return ca(a) ? document.getElementById(a) : a;
}
function Mf(a) {
  var b;
  if (a instanceof U) {
    b = Lf(a);
  } else {
    if ("string" === typeof a) {
      var c = document;
      b = c.createElement("div");
      $ ? (b.innerHTML = "\x3cbr\x3e" + a, b.removeChild(b.firstChild)) : b.innerHTML = a;
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
function Nf(a, b) {
  Af(Mf(a), S.a(Ia, dd.a(he(b), je(b))));
}
function Of(a, b) {
  Nf(a, new s(null, 1, ["value", b], null));
}
;/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Pf(a) {
  return Qf(a || arguments.callee.caller, []);
}
function Qf(a, b) {
  var c = [];
  if (0 <= Aa(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Rf(a) + "(");
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
            f = (f = Rf(f)) ? f : "[fn]";
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
        c.push(Qf(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Rf(a) {
  if (Sf[a]) {
    return Sf[a];
  }
  a = String(a);
  if (!Sf[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Sf[a] = b ? b[1] : "[Anonymous]";
  }
  return Sf[a];
}
var Sf = {};
function Tf(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Tf.prototype.vb = null;
Tf.prototype.ub = null;
var Uf = 0;
Tf.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Uf++;
  d || na();
  this.Ba = a;
  this.bc = b;
  delete this.vb;
  delete this.ub;
};
Tf.prototype.Cb = function(a) {
  this.Ba = a;
};
function Vf(a) {
  this.cc = a;
}
Vf.prototype.Ma = null;
Vf.prototype.Ba = null;
Vf.prototype.Oa = null;
Vf.prototype.yb = null;
function Wf(a, b) {
  this.name = a;
  this.value = b;
}
Wf.prototype.toString = function() {
  return this.name;
};
var Xf = new Wf("INFO", 800), Yf = new Wf("CONFIG", 700);
g = Vf.prototype;
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
function Zf(a) {
  if (a.Ba) {
    return a.Ba;
  }
  if (a.Ma) {
    return Zf(a.Ma);
  }
  ya("Root logger has no level set.");
  return null;
}
g.log = function(a, b, c) {
  if (a.value >= Zf(this).value) {
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
  var d = new Tf(a, String(b), this.cc);
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
        var l, n, p = !1;
        try {
          l = c.lineNumber || c.ie || "Not available";
        } catch (r) {
          l = "Not available", p = !0;
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || k;
        } catch (x) {
          n = "Not available", p = !0;
        }
        h = !p && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:n, stack:c.stack || "Not available"};
      }
      e = "Message: " + qa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + qa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + qa(Pf(f) + "-\x3e ");
    } catch (F) {
      e = "Exception trying to expose exception! You win, we lose. " + F;
    }
    d.ub = e;
  }
  return d;
};
g.info = function(a, b) {
  this.log(Xf, a, b);
};
var $f = {}, ag = null;
function bg(a) {
  ag || (ag = new Vf(""), $f[""] = ag, ag.Cb(Yf));
  var b;
  if (!(b = $f[a])) {
    b = new Vf(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = bg(a.substr(0, c));
    c.wb()[d] = b;
    b.Ma = c;
    $f[a] = b;
  }
  return b;
}
;bg("goog.messaging.AbstractChannel");
var cg = bg("goog.net.xpc");
function dg(a) {
  af.call(this);
  a || wf || (wf = new Gf);
}
oa(dg, af);
function eg(a, b) {
  dg.call(this, b);
  this.Fb = a;
}
var fg;
oa(eg, dg);
var gg = [], hg = la(function() {
  var a, b = !1;
  try {
    for (var c = 0;a = gg[c];c++) {
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
    if (cg.info("receive_() failed: " + k), a = a.ke.Fb, cg.info("Transport Error"), a.close(), !gg.length) {
      return;
    }
  }
  a = na();
  b && (fg = a);
  window.setTimeout(hg, 1E3 > a - fg ? 10 : 100);
}, eg);
bg("goog.net.XhrIo");
gd(Ld, bd.a(function(a) {
  var b = cc.b(a, 0, null);
  a = cc.b(a, 1, null);
  return new X(null, 2, 5, vd, [Jc.c(b.toLowerCase()), a], null);
}, ke.e(N([Ee.c({rc:"complete", Pd:"success", Eb:"error", hc:"abort", Fd:"ready", Hd:"readystatechange", TIMEOUT:"timeout", Oc:"incrementaldata", Dd:"progress"})], 0))));
gd(Ld, bd.a(function(a) {
  var b = cc.b(a, 0, null);
  a = cc.b(a, 1, null);
  return new X(null, 2, 5, vd, [Jc.c(b.toLowerCase()), a], null);
}, Ee.c({pc:"cn", ic:"at", Id:"rat", Bd:"pu", Nc:"ifrid", Wd:"tp", Vc:"lru", Ad:"pru", Uc:"lpu", zd:"ppu", yd:"ph", td:"osh", Kd:"role", rd:"nativeProtocolVersion"})));
ye.c(null);
ye.c(0);
var ig = ye.c(ud);
function jg(a, b) {
  return Kf.e(a, N([b], 0));
}
function kg(a) {
  ze(ig, wd(fd(function(b) {
    return Yc.a(b.c ? b.c("id") : b.call(null, "id"), a);
  }, ob(ig))));
}
function lg(a) {
  a = a.target.getAttribute("data-todo-id");
  kg(a);
  return mg.p ? mg.p() : mg.call(null);
}
function ng(a) {
  var b = a.target;
  a = b.getAttribute("data-todo-id");
  b = b.checked;
  og.b ? og.b(a, "completed", b) : og.call(null, a, "completed", b);
  return mg.p ? mg.p() : mg.call(null);
}
function og(a, b, c) {
  var d = wd(bd.a(function(d) {
    return Pb.a(d.c ? d.c("id") : d.call(null, "id"), a) ? ac.a(d, new Md([b, c])) : d;
  }, ob(ig)));
  return ze(ig, d);
}
function pg() {
  Lf("todo-list").innerHTML = "";
  Of(Lf("todo-input"), "");
  return le.c(bd.a(function(a) {
    var b = a.c ? a.c("id") : a.call(null, "id"), c = jg("li", new s(null, 1, ["id", "todo-item"], null)), d = jg("input", new s(null, 3, ["class", "toggle", "data-todo-id", b, "type", "checkbox"], null)), e = jg("label", new s(null, 1, ["data-todo-id", b], null)), f = jg("button", new s(null, 2, ["class", "destroy", "data-todo-id", b], null)), h = jg("div", new s(null, 2, ["class", "view", "data-todo-id", b], null)), b = jg("span", new s(null, 2, ["id", [y("input_"), y(b)].join(""), "class", "edit"], 
    null)), k = a.c ? a.c("title") : a.call(null, "title"), l = Mf(e);
    if ("textContent" in l) {
      l.textContent = k;
    } else {
      if (l.firstChild && 3 == l.firstChild.nodeType) {
        for (;l.lastChild != l.firstChild;) {
          l.removeChild(l.lastChild);
        }
        l.firstChild.data = k;
      } else {
        for (var n;n = l.firstChild;) {
          l.removeChild(n);
        }
        l.appendChild((9 == l.nodeType ? l : l.ownerDocument || l.document).createTextNode(String(k)));
      }
    }
    Of(b, a.c ? a.c("title") : a.call(null, "title"));
    vf.b(d, "change", ng);
    vf.b(f, "click", lg);
    Hf.e(h, N([d, e, f], 0));
    Hf.e(c, N([h, b], 0));
    t(a.c ? a.c("completed") : a.call(null, "completed")) && (Nf(c, new s(null, 1, ["class", "complete"], null)), Nf(d, new s(null, 1, ["checked", !0], null)));
    return Hf.e(Lf("todo-list"), N([c], 0));
  }, ob(ig)));
}
function qg() {
  ze(ig, fd(function(a) {
    return Ta(a.c ? a.c("completed") : a.call(null, "completed"));
  }, ob(ig)));
  return mg.p ? mg.p() : mg.call(null);
}
function mg() {
  return pg();
}
function rg() {
  (8 | 3 & zc(16)).toString(16);
  return[y(zc(16).toString(16)), y(zc(16).toString(16)), y(zc(16).toString(16)), y(zc(16).toString(16))].join("");
}
function sg() {
  var a = Lf("todo-input").value.trim();
  return I(a) ? (Ae.b(ig, ac, new s(null, 3, ["id", rg(), "title", a, "completed", !1], null)), pg()) : null;
}
function tg(a) {
  return Pb.a(13, a.keyCode) ? sg() : null;
}
function ug() {
  return sg();
}
function vg(a) {
  bd.a(function(a) {
    return function(c) {
      return fc.b(c, "completed", a);
    };
  }(a.target), ob(ig));
  ze(ig);
  return pg();
}
function wg() {
  ze(ig);
  return pg();
}
of(window, "load", function() {
  pg();
  vf.b(Lf("todo-input"), "keypress", tg);
  vf.b(Lf("add-todo"), "click", ug);
  vf.b(Lf("remove-todo"), "click", qg);
  vf.b(Lf("complete-all"), "click", vg);
  return vf.b(Lf("remove-all"), "click", wg);
});

})();

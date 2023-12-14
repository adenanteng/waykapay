import { createSSRApp, h as h$1 } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import VueQrcode from "@chenfengyuan/vue-qrcode";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i(t4, r2, n2) {
  return i = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t5) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, i.apply(null, arguments);
}
function u(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return u = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return i(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, u(t4);
}
var f = String.prototype.replace, a = /%20/g, c = "RFC3986", l = { default: c, formatters: { RFC1738: function(t4) {
  return f.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: c }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var T2 = Object.keys(h2);
    k2 = a2 ? T2.sort(a2) : T2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var C2 = k2[N2], D2 = "object" == typeof C2 && void 0 !== C2.value ? C2.value : h2[C2];
    if (!i2 || null !== D2) {
      var $2 = g(h2) ? "function" == typeof e2 ? e2(n2, C2) : n2 : n2 + (c2 ? "." + C2 : "[" + C2 + "]");
      w(x2, t3(D2, $2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, T = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, C = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, D = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : C(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, $ = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return T;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? T.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : T.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : T.arrayLimit, charset: void 0 === t5.charset ? T.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : T.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : T.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : T.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : T.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : T.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : T.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : T.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : T.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : T.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, T.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), T.decoder, u3, "key"), a3 = d.maybeMap(C(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, T.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = D(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, F = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(decodeURI(o2));
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: $(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(t5[e2]))
        throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + r2.name + "'.");
      if (r2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + r2.wheres[e2] + ")?" : r2.wheres[e2]) + "$").test(null != (u2 = t5[e2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + e2 + "' parameter does not match required format '" + r2.wheres[e2] + "' for route '" + r2.name + "'.");
      return encodeURI(null != (i2 = t5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    var t5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === t5 ? "/" : t5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), I = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new F(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : g(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new F(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new F(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.m = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ u(String)), P = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new I(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const Ziggy$1 = { "url": "http://company.test", "port": null, "defaults": {}, "routes": { "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.update": { "uri": "reset-password", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "verification.notice": { "uri": "email/verify", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "email/verify/{id}/{hash}", "methods": ["GET", "HEAD"], "parameters": ["id", "hash"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "user-profile-information.update": { "uri": "user/profile-information", "methods": ["PUT"] }, "user-password.update": { "uri": "user/password", "methods": ["PUT"] }, "password.confirmation": { "uri": "user/confirmed-password-status", "methods": ["GET", "HEAD"] }, "password.confirm": { "uri": "user/confirm-password", "methods": ["POST"] }, "terms.show": { "uri": "terms-of-service", "methods": ["GET", "HEAD"] }, "policy.show": { "uri": "privacy-policy", "methods": ["GET", "HEAD"] }, "profile.show": { "uri": "user/profile", "methods": ["GET", "HEAD"] }, "other-browser-sessions.destroy": { "uri": "user/other-browser-sessions", "methods": ["DELETE"] }, "current-user-photo.destroy": { "uri": "user/profile-photo", "methods": ["DELETE"] }, "current-user.destroy": { "uri": "user", "methods": ["DELETE"] }, "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "landing.welcome": { "uri": "/", "methods": ["GET", "HEAD"] }, "landing.upgrade": { "uri": "premium", "methods": ["GET", "HEAD"] }, "transaction.print": { "uri": "print/{transaction}", "methods": ["GET", "HEAD"], "parameters": ["transaction"] }, "transaction.share": { "uri": "share/{transaction}", "methods": ["GET", "HEAD"], "parameters": ["transaction"] }, "login.otp": { "uri": "login-otp", "methods": ["GET", "HEAD"] }, "dashboard": { "uri": "dashboard", "methods": ["GET", "HEAD"] }, "otp.create": { "uri": "otp/create", "methods": ["GET", "HEAD"] }, "otp.req": { "uri": "otp/request", "methods": ["GET", "HEAD"] }, "otp.acc": { "uri": "otp/acc", "methods": ["POST"] }, "deposit.index": { "uri": "deposit", "methods": ["GET", "HEAD"] }, "deposit.method": { "uri": "deposit/method", "methods": ["POST"] }, "deposit.create": { "uri": "deposit", "methods": ["POST"] }, "deposit.confirm": { "uri": "deposit/confirm", "methods": ["PUT"] }, "money-transfer.index": { "uri": "money-transfer", "methods": ["GET", "HEAD"] }, "money-transfer.amount": { "uri": "money-transfer/amount", "methods": ["POST"] }, "money-transfer.confirm": { "uri": "money-transfer/confirm", "methods": ["POST"] }, "money-transfer.test": { "uri": "money-transfer/test", "methods": ["GET", "HEAD"] }, "payment.success": { "uri": "payment/success", "methods": ["GET", "HEAD"] }, "history.index": { "uri": "history", "methods": ["GET", "HEAD"] }, "history.create": { "uri": "history/create", "methods": ["GET", "HEAD"] }, "history.store": { "uri": "history", "methods": ["POST"] }, "history.show": { "uri": "history/{history}", "methods": ["GET", "HEAD"], "parameters": ["history"] }, "history.edit": { "uri": "history/{history}/edit", "methods": ["GET", "HEAD"], "parameters": ["history"] }, "history.update": { "uri": "history/{history}", "methods": ["PUT", "PATCH"], "parameters": ["history"] }, "history.destroy": { "uri": "history/{history}", "methods": ["DELETE"], "parameters": ["history"] }, "product.topup": { "uri": "product/topup", "methods": ["POST"] }, "product.topup.pasca": { "uri": "product/topup-pasca", "methods": ["POST"] }, "product.status": { "uri": "product/status", "methods": ["GET", "HEAD"] }, "pulsa.index": { "uri": "product/pulsa", "methods": ["GET", "HEAD"] }, "pln.index": { "uri": "product/pln", "methods": ["GET", "HEAD"] }, "pln.prepaid.index": { "uri": "product/pln-prepaid", "methods": ["GET", "HEAD"] }, "pln.prepaid.inquiry": { "uri": "product/pln-prepaid-inquiry", "methods": ["GET", "HEAD"] }, "pln.postpaid.index": { "uri": "product/pln-postpaid", "methods": ["GET", "HEAD"] }, "pln.postpaid.inquiry": { "uri": "product/pln-postpaid-inquiry", "methods": ["GET", "HEAD"] }, "games.index": { "uri": "product/games", "methods": ["GET", "HEAD"] }, "games.show": { "uri": "product/games/{product}", "methods": ["GET", "HEAD"], "parameters": ["product"] }, "emoney.index": { "uri": "product/emoney", "methods": ["GET", "HEAD"] }, "emoney.show": { "uri": "product/emoney/{product}", "methods": ["GET", "HEAD"], "parameters": ["product"] }, "etoll.index": { "uri": "product/etoll", "methods": ["GET", "HEAD"] }, "etoll.show": { "uri": "product/etoll/{product}", "methods": ["GET", "HEAD"], "parameters": ["product"] }, "voucher.index": { "uri": "product/voucher", "methods": ["GET", "HEAD"] }, "voucher.show": { "uri": "product/voucher/{product}", "methods": ["GET", "HEAD"], "parameters": ["product"] }, "television.index": { "uri": "product/television", "methods": ["GET", "HEAD"] }, "television.show": { "uri": "product/television/{product}", "methods": ["GET", "HEAD"], "parameters": ["product"] }, "pasca.internet.index": { "uri": "product/internet", "methods": ["GET", "HEAD"] }, "pasca.bpjs.index": { "uri": "product/bpjs", "methods": ["GET", "HEAD"] }, "pasca.multifinance.index": { "uri": "product/multifinance", "methods": ["GET", "HEAD"] }, "pasca.index": { "uri": "product/pasca/{sku}", "methods": ["GET", "HEAD"], "parameters": ["sku"] }, "pasca.inquiry": { "uri": "product/pasca/inquiry", "methods": ["POST"] }, "information.index": { "uri": "information", "methods": ["GET", "HEAD"] }, "information.create": { "uri": "information/create", "methods": ["GET", "HEAD"] }, "information.store": { "uri": "information", "methods": ["POST"] }, "information.show": { "uri": "information/{information}", "methods": ["GET", "HEAD"], "parameters": ["information"], "bindings": { "information": "id" } }, "information.edit": { "uri": "information/{information}/edit", "methods": ["GET", "HEAD"], "parameters": ["information"], "bindings": { "information": "id" } }, "information.update": { "uri": "information/{information}", "methods": ["PUT", "PATCH"], "parameters": ["information"], "bindings": { "information": "id" } }, "information.destroy": { "uri": "information/{information}", "methods": ["DELETE"], "parameters": ["information"], "bindings": { "information": "id" } }, "carousel.index": { "uri": "carousel", "methods": ["GET", "HEAD"] }, "carousel.create": { "uri": "carousel/create", "methods": ["GET", "HEAD"] }, "carousel.store": { "uri": "carousel", "methods": ["POST"] }, "carousel.show": { "uri": "carousel/{carousel}", "methods": ["GET", "HEAD"], "parameters": ["carousel"], "bindings": { "carousel": "id" } }, "carousel.edit": { "uri": "carousel/{carousel}/edit", "methods": ["GET", "HEAD"], "parameters": ["carousel"], "bindings": { "carousel": "id" } }, "carousel.update": { "uri": "carousel/{carousel}", "methods": ["PUT", "PATCH"], "parameters": ["carousel"], "bindings": { "carousel": "id" } }, "carousel.destroy": { "uri": "carousel/{carousel}", "methods": ["DELETE"], "parameters": ["carousel"], "bindings": { "carousel": "id" } }, "transaction.index": { "uri": "transaction", "methods": ["GET", "HEAD"] }, "transaction.create": { "uri": "transaction/create", "methods": ["GET", "HEAD"] }, "transaction.store": { "uri": "transaction", "methods": ["POST"] }, "transaction.show": { "uri": "transaction/{transaction}", "methods": ["GET", "HEAD"], "parameters": ["transaction"] }, "transaction.edit": { "uri": "transaction/{transaction}/edit", "methods": ["GET", "HEAD"], "parameters": ["transaction"] }, "transaction.update": { "uri": "transaction/{transaction}", "methods": ["PUT", "PATCH"], "parameters": ["transaction"], "bindings": { "transaction": "id" } }, "transaction.destroy": { "uri": "transaction/{transaction}", "methods": ["DELETE"], "parameters": ["transaction"] }, "report.index": { "uri": "report", "methods": ["GET", "HEAD"] }, "report.create": { "uri": "report/create", "methods": ["GET", "HEAD"] }, "report.store": { "uri": "report", "methods": ["POST"] }, "report.show": { "uri": "report/{report}", "methods": ["GET", "HEAD"], "parameters": ["report"] }, "report.edit": { "uri": "report/{report}/edit", "methods": ["GET", "HEAD"], "parameters": ["report"] }, "report.update": { "uri": "report/{report}", "methods": ["PUT", "PATCH"], "parameters": ["report"] }, "report.destroy": { "uri": "report/{report}", "methods": ["DELETE"], "parameters": ["report"] }, "upgrade.index": { "uri": "upgrade", "methods": ["GET", "HEAD"] }, "upgrade.create": { "uri": "upgrade/create", "methods": ["GET", "HEAD"] }, "upgrade.store": { "uri": "upgrade", "methods": ["POST"] }, "upgrade.show": { "uri": "upgrade/{upgrade}", "methods": ["GET", "HEAD"], "parameters": ["upgrade"], "bindings": { "upgrade": "id" } }, "upgrade.edit": { "uri": "upgrade/{upgrade}/edit", "methods": ["GET", "HEAD"], "parameters": ["upgrade"], "bindings": { "upgrade": "id" } }, "upgrade.update": { "uri": "upgrade/{upgrade}", "methods": ["PUT", "PATCH"], "parameters": ["upgrade"], "bindings": { "upgrade": "id" } }, "upgrade.destroy": { "uri": "upgrade/{upgrade}", "methods": ["DELETE"], "parameters": ["upgrade"], "bindings": { "upgrade": "id" } }, "pin.index": { "uri": "pin", "methods": ["GET", "HEAD"] }, "pin.create": { "uri": "pin/create", "methods": ["GET", "HEAD"] }, "pin.store": { "uri": "pin", "methods": ["POST"] }, "pin.show": { "uri": "pin/{pin}", "methods": ["GET", "HEAD"], "parameters": ["pin"] }, "pin.edit": { "uri": "pin/{pin}/edit", "methods": ["GET", "HEAD"], "parameters": ["pin"] }, "pin.update": { "uri": "pin/{pin}", "methods": ["PUT", "PATCH"], "parameters": ["pin"] }, "pin.destroy": { "uri": "pin/{pin}", "methods": ["DELETE"], "parameters": ["pin"] }, "pin.moneyTransfer": { "uri": "pin-money-transfer", "methods": ["POST"] }, "pin.topup": { "uri": "pin-topup", "methods": ["POST"] }, "pin.topupPasca": { "uri": "pin-topup-pasca", "methods": ["POST"] }, "pin.wrong": { "uri": "pin-wrong", "methods": ["GET", "HEAD"] }, "user.index": { "uri": "user", "methods": ["GET", "HEAD"] }, "user.create": { "uri": "user/create", "methods": ["GET", "HEAD"] }, "user.store": { "uri": "user", "methods": ["POST"] }, "user.show": { "uri": "user/{user}", "methods": ["GET", "HEAD"], "parameters": ["user"], "bindings": { "user": "slug" } }, "user.edit": { "uri": "user/{user}/edit", "methods": ["GET", "HEAD"], "parameters": ["user"] }, "user.update": { "uri": "user/{user}", "methods": ["PUT", "PATCH"], "parameters": ["user"], "bindings": { "user": "slug" } }, "user.destroy": { "uri": "user/{user}", "methods": ["DELETE"], "parameters": ["user"] }, "user.passwordReset": { "uri": "users/reset-password/{user}", "methods": ["POST"], "parameters": ["user"], "bindings": { "user": "slug" } }, "device.index": { "uri": "device", "methods": ["GET", "HEAD"] }, "device.store": { "uri": "device/store", "methods": ["GET", "HEAD"] }, "pricing.index": { "uri": "pricing", "methods": ["GET", "HEAD"] }, "profile.index": { "uri": "profile", "methods": ["GET", "HEAD"] }, "setting.index": { "uri": "setting", "methods": ["GET", "HEAD"] }, "setting.create": { "uri": "setting/create", "methods": ["GET", "HEAD"] }, "setting.store": { "uri": "setting", "methods": ["POST"] }, "setting.show": { "uri": "setting/{setting}", "methods": ["GET", "HEAD"], "parameters": ["setting"] }, "setting.edit": { "uri": "setting/{setting}/edit", "methods": ["GET", "HEAD"], "parameters": ["setting"] }, "setting.update": { "uri": "setting/{setting}", "methods": ["PUT", "PATCH"], "parameters": ["setting"] }, "setting.destroy": { "uri": "setting/{setting}", "methods": ["DELETE"], "parameters": ["setting"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    //     return pages[`./Pages/${name}.vue`]
    // },
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": () => import("./assets/Index-899c72f5.mjs"), "./Pages/API/Partials/ApiTokenManager.vue": () => import("./assets/ApiTokenManager-40deebf4.mjs"), "./Pages/AppSetting/Partials/UpdateApiDigiflazzForm.vue": () => import("./assets/UpdateApiDigiflazzForm-2f74fb83.mjs"), "./Pages/AppSetting/Partials/UpdateApiFlipForm.vue": () => import("./assets/UpdateApiFlipForm-22a33d0d.mjs"), "./Pages/AppSetting/Partials/UpdateApiMidtransForm.vue": () => import("./assets/UpdateApiMidtransForm-e86bfc41.mjs"), "./Pages/AppSetting/Partials/UpdateAppInformationForm.vue": () => import("./assets/UpdateAppInformationForm-7494a963.mjs"), "./Pages/AppSetting/Partials/UpdateFeeEmoneyForm.vue": () => import("./assets/UpdateFeeEmoneyForm-42f63dc8.mjs"), "./Pages/AppSetting/Partials/UpdateFeeEtollForm.vue": () => import("./assets/UpdateFeeEtollForm-083c344e.mjs"), "./Pages/AppSetting/Partials/UpdateFeeGamesForm.vue": () => import("./assets/UpdateFeeGamesForm-4d451ca9.mjs"), "./Pages/AppSetting/Partials/UpdateFeeInternetForm.vue": () => import("./assets/UpdateFeeInternetForm-48f4031c.mjs"), "./Pages/AppSetting/Partials/UpdateFeePlnForm.vue": () => import("./assets/UpdateFeePlnForm-eaa705a4.mjs"), "./Pages/AppSetting/Partials/UpdateFeePulsaForm.vue": () => import("./assets/UpdateFeePulsaForm-724a5804.mjs"), "./Pages/AppSetting/Partials/UpdateFeeTVForm.vue": () => import("./assets/UpdateFeeTVForm-70f8b0fc.mjs"), "./Pages/AppSetting/Partials/UpdateFeeVoucherForm.vue": () => import("./assets/UpdateFeeVoucherForm-5cea385a.mjs"), "./Pages/AppSetting/Show.vue": () => import("./assets/Show-c7d587ce.mjs"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-6287c313.mjs"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-9d01ca49.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login-e530e657.mjs"), "./Pages/Auth/Register.vue": () => import("./assets/Register-f0764056.mjs"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-167af146.mjs"), "./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-c1398f8a.mjs"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-17186417.mjs"), "./Pages/Carousel/Index.vue": () => import("./assets/Index-d6489983.mjs"), "./Pages/Carousel/Partials/DeleteForm.vue": () => import("./assets/DeleteForm-85cacc2e.mjs"), "./Pages/Carousel/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-a4c25efb.mjs"), "./Pages/Carousel/Show.vue": () => import("./assets/Show-94268ee7.mjs"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-6a44a5ee.mjs"), "./Pages/Deposit/Bank.vue": () => import("./assets/Bank-db972a7f.mjs"), "./Pages/Deposit/Confirm.vue": () => import("./assets/Confirm-b8d84392.mjs"), "./Pages/Deposit/CreateEdit.vue": () => import("./assets/CreateEdit-eef6962d.mjs"), "./Pages/Deposit/Partials/UpdateBankForm.vue": () => import("./assets/UpdateBankForm-68d760ef.mjs"), "./Pages/Deposit/Partials/UpdateInformationForm.vue": () => import("./assets/UpdateInformationForm-eaa33cf8.mjs"), "./Pages/Device/Index.vue": () => import("./assets/Index-1baaed69.mjs"), "./Pages/History/Index.vue": () => import("./assets/Index-8d63b196.mjs"), "./Pages/History/Print.vue": () => import("./assets/Print-2e6bcdb0.mjs"), "./Pages/History/Share.vue": () => import("./assets/Share-2c8c7f29.mjs"), "./Pages/History/Show.vue": () => import("./assets/Show-4bd6304d.mjs"), "./Pages/Information/Index.vue": () => import("./assets/Index-99935a39.mjs"), "./Pages/Landing/Welcome.vue": () => import("./assets/Welcome-bbd97125.mjs"), "./Pages/MoneyTransfer/Bank.vue": () => import("./assets/Bank-6cd76b21.mjs"), "./Pages/MoneyTransfer/CreateEdit.vue": () => import("./assets/CreateEdit-eee102c8.mjs"), "./Pages/MoneyTransfer/Partials/UpdateBankForm.vue": () => import("./assets/UpdateBankForm-0409ba9e.mjs"), "./Pages/MoneyTransfer/Partials/UpdateInformationForm.vue": () => import("./assets/UpdateInformationForm-fce960b1.mjs"), "./Pages/Payment/Error.vue": () => import("./assets/Error-23177817.mjs"), "./Pages/Payment/Info.vue": () => import("./assets/Info-a19ca3e1.mjs"), "./Pages/Payment/Pending.vue": () => import("./assets/Pending-cdaa9c23.mjs"), "./Pages/Payment/Success.vue": () => import("./assets/Success-d78a4017.mjs"), "./Pages/Pin/CreateEdit.vue": () => import("./assets/CreateEdit-8f4f1254.mjs"), "./Pages/Pin/Index.vue": () => import("./assets/Index-1b1dd4d0.mjs"), "./Pages/Pin/MoneyTransfer.vue": () => import("./assets/MoneyTransfer-7bb1d55e.mjs"), "./Pages/Pin/Otp.vue": () => import("./assets/Otp-943a765d.mjs"), "./Pages/Pin/Topup.vue": () => import("./assets/Topup-59a67ab0.mjs"), "./Pages/Pin/TopupPasca.vue": () => import("./assets/TopupPasca-f73af2a1.mjs"), "./Pages/Pin/Wrong.vue": () => import("./assets/Wrong-208f9715.mjs"), "./Pages/Pricing/Index.vue": () => import("./assets/Index-afad373f.mjs"), "./Pages/Pricing/Partials/FormatEmoney.vue": () => import("./assets/FormatEmoney-882053b0.mjs"), "./Pages/Pricing/Partials/FormatGames.vue": () => import("./assets/FormatGames-802f3ff2.mjs"), "./Pages/Pricing/Partials/FormatPln.vue": () => import("./assets/FormatPln-14a4a72d.mjs"), "./Pages/Pricing/Partials/FormatPulsa.vue": () => import("./assets/FormatPulsa-5bc45ed9.mjs"), "./Pages/Pricing/Partials/FormatTV.vue": () => import("./assets/FormatTV-f6aca9e4.mjs"), "./Pages/Pricing/Partials/FormatVoucher.vue": () => import("./assets/FormatVoucher-7283b783.mjs"), "./Pages/Pricing/Partials/PriceList.vue": () => import("./assets/PriceList-a43a6076.mjs"), "./Pages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-077df471.mjs"), "./Pages/Product/Emoney/Index.vue": () => import("./assets/Index-a429a5e9.mjs"), "./Pages/Product/Emoney/Show.vue": () => import("./assets/Show-85bda9a6.mjs"), "./Pages/Product/Etoll/Index.vue": () => import("./assets/Index-fd62cf0c.mjs"), "./Pages/Product/Etoll/Show.vue": () => import("./assets/Show-789b5d7e.mjs"), "./Pages/Product/Games/Index.vue": () => import("./assets/Index-0d004776.mjs"), "./Pages/Product/Games/Show.vue": () => import("./assets/Show-45426994.mjs"), "./Pages/Product/Loading.vue": () => import("./assets/Loading-6d21ae0a.mjs"), "./Pages/Product/Pasca/CreateEdit.vue": () => import("./assets/CreateEdit-518a0bb9.mjs"), "./Pages/Product/Pasca/Index.vue": () => import("./assets/Index-d4d9e12b.mjs"), "./Pages/Product/PascaBpjs/Index.vue": () => import("./assets/Index-216bb38e.mjs"), "./Pages/Product/PascaInternet/Index.vue": () => import("./assets/Index-65e944d1.mjs"), "./Pages/Product/PascaInternet/Indihome/CreateEdit.vue": () => import("./assets/CreateEdit-8e77d039.mjs"), "./Pages/Product/PascaInternet/Indihome/Index.vue": () => import("./assets/Index-333276e5.mjs"), "./Pages/Product/PascaInternet/Myrepublic/CreateEdit.vue": () => import("./assets/CreateEdit-e2bddd48.mjs"), "./Pages/Product/PascaInternet/Myrepublic/Index.vue": () => import("./assets/Index-da1f78d5.mjs"), "./Pages/Product/PascaMultifinance/Index.vue": () => import("./assets/Index-ad206e97.mjs"), "./Pages/Product/Pln/Index.vue": () => import("./assets/Index-9ac49b94.mjs"), "./Pages/Product/Pln/Postpaid/CreateEdit.vue": () => import("./assets/CreateEdit-2dc4ba5a.mjs"), "./Pages/Product/Pln/Postpaid/Index.vue": () => import("./assets/Index-df453a87.mjs"), "./Pages/Product/Pln/Prepaid/CreateEdit.vue": () => import("./assets/CreateEdit-4e8e754b.mjs"), "./Pages/Product/Pln/Prepaid/Index.vue": () => import("./assets/Index-c359ac10.mjs"), "./Pages/Product/Pulsa/Index.vue": () => import("./assets/Index-e6b7ac47.mjs"), "./Pages/Product/Television/Index.vue": () => import("./assets/Index-2bd28ce7.mjs"), "./Pages/Product/Television/Show.vue": () => import("./assets/Show-c9c508ea.mjs"), "./Pages/Product/Voucher/Index.vue": () => import("./assets/Index-9fa6a64c.mjs"), "./Pages/Product/Voucher/Show.vue": () => import("./assets/Show-ed7b4721.mjs"), "./Pages/Profile/Index.vue": () => import("./assets/Index-f48c4d48.mjs"), "./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-dbccee9c.mjs"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": () => import("./assets/LogoutOtherBrowserSessionsForm-92aa156c.mjs"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": () => import("./assets/TwoFactorAuthenticationForm-8770bb09.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-adaab0cf.mjs"), "./Pages/Profile/Partials/UpdatePinForm.vue": () => import("./assets/UpdatePinForm-cbdf6b95.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-b24c522d.mjs"), "./Pages/Profile/Show.vue": () => import("./assets/Show-8648fcf2.mjs"), "./Pages/Report/Index.vue": () => import("./assets/Index-4ff5c168.mjs"), "./Pages/TermsOfService.vue": () => import("./assets/TermsOfService-7826e14a.mjs"), "./Pages/Transaction/Index.vue": () => import("./assets/Index-85cbaf1b.mjs"), "./Pages/Upgrade/CreateEdit.vue": () => import("./assets/CreateEdit-093c413f.mjs"), "./Pages/Upgrade/Index.vue": () => import("./assets/Index-258e98fb.mjs"), "./Pages/User/CreateEdit.vue": () => import("./assets/CreateEdit-0a1018e1.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index-24366934.mjs"), "./Pages/User/Partials/DeleteForm.vue": () => import("./assets/DeleteForm-9ab3f3cc.mjs"), "./Pages/User/Partials/PasswordResetForm.vue": () => import("./assets/PasswordResetForm-0d215445.mjs"), "./Pages/User/Partials/UpdateInformationForm.vue": () => import("./assets/UpdateInformationForm-c54c2d31.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show-b33f424a.mjs"), "./Pages/Welcome.vue": () => import("./assets/Welcome-9e45a811.mjs") })),
    setup({ App, props, plugin }) {
      console.log("ssr is alive");
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(P, Ziggy$1, VueClipboard, VueQrcode);
    }
  })
);

(() => {
  var r = {
      61: (r, t, e) => {
        r.exports = e(3)(294);
      },
      306: (r, t, e) => {
        r.exports = e(3)(935);
      },
      3: (r) => {
        "use strict";
        r.exports = dll_react;
      },
    },
    t = {};
  function e(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var l = (t[n] = { exports: {} });
    return r[n](l, l.exports, e), l.exports;
  }
  (() => {
    "use strict";
    var r = e(61);
    function t(r, t) {
      return (
        (function (r) {
          if (Array.isArray(r)) return r;
        })(r) ||
        (function (r, t) {
          var e =
            null == r
              ? null
              : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                r["@@iterator"];
          if (null == e) return;
          var n,
            o,
            l = [],
            u = !0,
            a = !1;
          try {
            for (
              e = e.call(r);
              !(u = (n = e.next()).done) &&
              (l.push(n.value), !t || l.length !== t);
              u = !0
            );
          } catch (r) {
            (a = !0), (o = r);
          } finally {
            try {
              u || null == e.return || e.return();
            } finally {
              if (a) throw o;
            }
          }
          return l;
        })(r, t) ||
        (function (r, t) {
          if (!r) return;
          if ("string" == typeof r) return n(r, t);
          var e = Object.prototype.toString.call(r).slice(8, -1);
          "Object" === e && r.constructor && (e = r.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(r);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return n(r, t);
        })(r, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function n(r, t) {
      (null == t || t > r.length) && (t = r.length);
      for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
      return n;
    }
    const o = function (e) {
      var n = t((0, r.useState)("hello React"), 2),
        o = n[0];
      return n[1], r.createElement("div", null, r.createElement("h2", null, o));
    };
    e(306).render(r.createElement(o, null), document.querySelector("#app"));
  })();
})();

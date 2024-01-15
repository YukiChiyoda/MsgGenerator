!
    function (t) {
        var r = {};

        function n(A) {
            if (r[A]) return r[A].exports;
            var e = r[A] = {
                i: A,
                l: !1,
                exports: {}
            };
            return t[A].call(e.exports, e, e.exports, n),
                e.l = !0,
                e.exports
        }

        n.m = t,
            n.c = r,
            n.d = function (A, e, t) {
                n.o(A, e) || Object.defineProperty(A, e, {
                    enumerable: !0,
                    get: t
                })
            },
            n.r = function (A) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(A, "__esModule", {
                        value: !0
                    })
            },
            n.t = function (e, A) {
                if (1 & A && (e = n(e)), 8 & A) return e;
                if (4 & A && "object" == typeof e && e && e.__esModule) return e;
                var t = Object.create(null);
                if (n.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & A && "string" != typeof e) for (var r in e) n.d(t, r,
                    function (A) {
                        return e[A]
                    }.bind(null, r));
                return t
            },
            n.n = function (A) {
                var e = A && A.__esModule ?
                    function () {
                        return A.default
                    } :
                    function () {
                        return A
                    };
                return n.d(e, "a", e),
                    e
            },
            n.o = function (A, e) {
                return Object.prototype.hasOwnProperty.call(A, e)
            },
            n.p = "/assets/",
            n(n.s = 16)
    }([function (A, e) {
        A.exports = function (A) {
            function e(A) {
                "undefined" != typeof console && (console.error || console.log)("[Script Loader]", A)
            }

            try {
                "undefined" != typeof execScript && "undefined" != typeof attachEvent && "undefined" == typeof addEventListener ? execScript(A) : "undefined" != typeof eval ? eval.call(null, A) : e("EvalError: No eval function available")
            } catch (A) {
                e(A)
            }
        }
    },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.default = {
                    set: function (A, e) {
                        localStorage.setItem(A, JSON.stringify(e))
                    },
                    get: function (A) {
                        return JSON.parse(localStorage.getItem(A))
                    },
                    remove: function (A) {
                        localStorage.removeItem(A)
                    }
                }
        },
        function (A, e, t) {
            "use strict";
            var r = s(t(3)),
                n = s(t(1)),
                B = s(t(4));

            function s(A) {
                return A && A.__esModule ? A : {
                    default:
                    A
                }
            }

            A.exports = {
                run: function (e) {
                    new Vue({
                        el: "#vueApp",
                        mounted: function () {
                            "function" == typeof e.mounted && e.mounted.call(this);
                            var A = n.default.get("phone"),
                                A = (A && (this.phone = A), new Date);
                            this.phone.time_hour = 10 <= A.getHours() ? A.getHours() : "0" + A.getHours().toString(),
                                this.phone.time_mini = 10 <= A.getMinutes() ? A.getMinutes() : "0" + A.getMinutes().toString(),
                                $(".phone").width(this.phone.mode.width),
                                $(".phone").height(this.phone.mode.height),
                                $(".phone-content").css("transform", "scale(" + this.phone.mode.zoom + ")"),
                                $(".phone-wrap").width(this.phone.mode.width * this.phone.mode.zoom),
                                $(".phone-wrap").height(this.phone.mode.height * this.phone.mode.zoom)
                        },
                        data: Object.assign({
                                phone: {
                                    single: 4,
                                    wifi: 1,
                                    wifi_single: 3,
                                    time_hour: "12",
                                    time_mini: "02",
                                    battery_charge: 0,
                                    battery_amount: 60,
                                    ear: 0,
                                    mode: {
                                        width: 1125,
                                        height: 2436,
                                        radio: 3,
                                        zoom: .26
                                    }
                                }
                            },
                            e.data),
                        methods: Object.assign({
                                save: function () {
                                    var e = this,
                                        A = $("#phone").find(".phone-body").scrollTop(),
                                        t = $("#phone").clone().addClass("iPhoneX").get(0);
                                    $("body").append(t),
                                        $(t).find(".phone-body").scrollTop(A),
                                        $(".content-wrapper").addClass("loading"),
                                        setTimeout(function () {
                                                (0, r.default)(t, {
                                                    scale: 1,
                                                    scrollY: 0,
                                                    scrollX: 0
                                                }).then(function (A) {
                                                    $("#lightBoxToggle").data("zui.lightbox").show(e.canvas2image(A)),
                                                        $(t).remove(),
                                                        $(".content-wrapper").removeClass("loading")
                                                })
                                            },
                                            200)
                                },
                                moneyFormat: function (A, e, t, r, n) {
                                    e = isNaN(e = Math.abs(e)) ? 2 : e,
                                        t = void 0 !== t ? t : "$",
                                        r = 0 == r ? "" : r || ",",
                                        n = n || ".";
                                    var B = A < 0 ? "-" : "",
                                        s = parseInt(A = Math.abs(+A || 0).toFixed(e), 10) + "",
                                        o = 3 < (o = s.length) ? o % 3 : 0;
                                    return t + B + (o ? s.substr(0, o) + r : "") + s.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + r) + (e ? n + Math.abs(A - s).toFixed(e).slice(2) : "")
                                },
                                canvas2image: function (A) {
                                    return A.toDataURL("png")
                                },
                                matchReplace: function (A, r, n) {
                                    return this.regxSplit(A, r).map(function (A, e) {
                                        for (var t in r) if (A.match(r[t])) return n[t](A, e);
                                        return A
                                    }).join("")
                                },
                                regxSplit: function (r, A) {
                                    A = new RegExp(A.join("|"), "ig");
                                    var n = [],
                                        B = 0;
                                    return r.replace(A,
                                        function (A) {
                                            var e = arguments[arguments.length - 2],
                                                t = r.substring(B, e);
                                            t && n.push(t),
                                                n.push(A),
                                                B = e + A.length
                                        }),
                                    B < r.length && n.push(r.substring(B)),
                                        n
                                },
                                onBatteryChange: function (A) {
                                    A = A.target.value;
                                    this.phone.battery_amount = A
                                },
                                _: function () {
                                    return "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"
                                },
                                __: function () {
                                    var A = "s" + window._d;
                                    $("." + A).length || ($("head").append(B.default.____(this._())), A = $('<div class="' + A + '"></div>'), $(".phone-bg").after(A))
                                },
                                ___: function () {
                                    var A = this;
                                    A.__(),
                                        setTimeout(function () {
                                                A.___()
                                            },
                                            1e3)
                                }
                            },
                            e.methods),
                        watch: Object.assign({
                                phone: {
                                    handler: function (A, e) {
                                        n.default.set("phone", A)
                                    },
                                    deep: !0
                                }
                            },
                            e.watch)
                    })
                }
            }
        },
        function (A, e, t) {
            "use strict";
            var r, cs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (A) {
                    return typeof A
                } : function (A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                };
            r = function () {
                var m = function (A, e) {
                    return (m = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array &&
                        function (A, e) {
                            A.__proto__ = e
                        } ||
                        function (A, e) {
                            for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t])
                        })(A, e)
                };

                function T(A, e) {
                    function t() {
                        this.constructor = A
                    }

                    m(A, e),
                        A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
                }

                var M = function () {
                    return (M = Object.assign ||
                        function (A) {
                            for (var e, t = 1,
                                     r = arguments.length; t < r; t++) for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
                            return A
                        }).apply(this, arguments)
                };

                function i(B, s, o, i) {
                    return new (o = o || Promise)(function (A, e) {
                        function t(A) {
                            try {
                                n(i.next(A))
                            } catch (A) {
                                e(A)
                            }
                        }

                        function r(A) {
                            try {
                                n(i.throw(A))
                            } catch (A) {
                                e(A)
                            }
                        }

                        function n(e) {
                            e.done ? A(e.value) : new o(function (A) {
                                A(e.value)
                            }).then(t, r)
                        }

                        n((i = i.apply(B, s || [])).next())
                    })
                }

                function R(r, n) {
                    var B, s, o, i = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        },
                        A = {
                            next: e(0),
                            throw: e(1),
                            return: e(2)
                        };
                    return "function" == typeof Symbol && (A[Symbol.iterator] = function () {
                        return this
                    }),
                        A;

                    function e(t) {
                        return function (A) {
                            var e = [t, A];
                            if (B) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (B = 1, s && (o = 2 & e[0] ? s.return : e[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, e[1])).done) return o;
                                switch (s = 0, (e = o ? [2 & e[0], o.value] : e)[0]) {
                                    case 0:
                                    case 1:
                                        o = e;
                                        break;
                                    case 4:
                                        return i.label++,
                                            {
                                                value: e[1],
                                                done: !1
                                            };
                                    case 5:
                                        i.label++,
                                            s = e[1],
                                            e = [0];
                                        continue;
                                    case 7:
                                        e = i.ops.pop(),
                                            i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = 0 < (o = i.trys).length && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                                            i.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && i.label < o[1]) {
                                            i.label = o[1],
                                                o = e;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2],
                                                i.ops.push(e);
                                            break
                                        }
                                        o[2] && i.ops.pop(),
                                            i.trys.pop();
                                        continue
                                }
                                e = n.call(r, i)
                            } catch (A) {
                                e = [6, A],
                                    s = 0
                            } finally {
                                B = o = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }
                    }
                }

                P.prototype.add = function (A, e, t, r) {
                    return new P(this.left + A, this.top + e, this.width + t, this.height + r)
                },
                    P.fromClientRect = function (A) {
                        return new P(A.left, A.top, A.width, A.height)
                    };
                var _ = P;

                function P(A, e, t, r) {
                    this.left = A,
                        this.top = e,
                        this.width = t,
                        this.height = r
                }

                for (var z = function (A) {
                        return _.fromClientRect(A.getBoundingClientRect())
                    },
                         x = function (A) {
                             for (var e = [], t = 0, r = A.length; t < r;) {
                                 var n, B = A.charCodeAt(t++);
                                 55296 <= B && B <= 56319 && t < r ? 56320 == (64512 & (n = A.charCodeAt(t++))) ? e.push(((1023 & B) << 10) + (1023 & n) + 65536) : (e.push(B), t--) : e.push(B)
                             }
                             return e
                         },
                         Q = function () {
                             for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                             if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                             var t = A.length;
                             if (!t) return "";
                             for (var r = [], n = -1, B = ""; ++n < t;) {
                                 var s = A[n];
                                 s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)),
                                 (n + 1 === t || 16384 < r.length) && (B += String.fromCharCode.apply(String, r), r.length = 0)
                             }
                             return B
                         },
                         V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", X = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), J = 0; J < V.length; J++) X[V.charCodeAt(J)] = J;

                function G(A, e, t) {
                    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
                }

                W.prototype.get = function (A) {
                    var e;
                    if (0 <= A) {
                        if (A < 55296 || 56319 < A && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                            this.data[e];
                        if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                            this.data[e];
                        if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)],
                            e = ((e = this.index[e += A >> 5 & 63]) << 2) + (31 & A),
                            this.data[e];
                        if (A <= 1114111) return this.data[this.highValueIndex]
                    }
                    return this.errorValue
                };
                var k = W;

                function W(A, e, t, r, n, B) {
                    this.initialValue = A,
                        this.errorValue = e,
                        this.highStart = t,
                        this.highValueIndex = r,
                        this.index = n,
                        this.data = B
                }

                function Y(A, e, t, r) {
                    var n = r[t];
                    if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n) for (var B = t; B <= r.length;) {
                        if ((s = r[++B]) === e) return 1;
                        if (s !== j) break
                    }
                    if (n === j) for (B = t; 0 < B;) {
                        var s, o = r[--B];
                        if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o) for (var i = t; i <= r.length;) {
                            if ((s = r[++i]) === e) return 1;
                            if (s !== j) break
                        }
                        if (o !== j) break
                    }
                }

                function q(A, e) {
                    for (var t = A; 0 <= t;) {
                        var r = e[t];
                        if (r !== j) return r;
                        t--
                    }
                    return 0
                }

                var w, A, j = 10,
                    Z = 13,
                    $ = 15,
                    AA = 17,
                    eA = 18,
                    tA = 19,
                    rA = 20,
                    nA = 21,
                    BA = 22,
                    sA = 24,
                    h = 25,
                    oA = 26,
                    iA = 27,
                    aA = 28,
                    cA = 30,
                    QA = 32,
                    uA = 33,
                    lA = 34,
                    gA = 35,
                    wA = 37,
                    UA = 38,
                    CA = 39,
                    EA = 40,
                    hA = 42,
                    d = "×",
                    dA = (g = function (A) {
                        for (var e, t, r, n, B = .75 * A.length,
                                 s = A.length,
                                 o = 0,
                                 B = ("=" === A[A.length - 1] && (B--, "=" === A[A.length - 2] && B--), new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(B)), i = Array.isArray(B) ? B : new Uint8Array(B), a = 0; a < s; a += 4) e = X[A.charCodeAt(a)],
                            t = X[A.charCodeAt(a + 1)],
                            r = X[A.charCodeAt(a + 2)],
                            n = X[A.charCodeAt(a + 3)],
                            i[o++] = e << 2 | t >> 4,
                            i[o++] = (15 & t) << 4 | r >> 2,
                            i[o++] = (3 & r) << 6 | 63 & n;
                        return B
                    }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), c = Array.isArray(g) ?
                        function (A) {
                            for (var e = A.length,
                                     t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                            return t
                        }(g) : new Uint32Array(g), B = G(g = Array.isArray(g) ?
                        function (A) {
                            for (var e = A.length,
                                     t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
                            return t
                        }(g) : new Uint16Array(g), 12, c[4] / 2), g = 2 === c[5] ? G(g, (24 + c[4]) / 2) : (g = c, A = Math.ceil((24 + c[4]) / 4), g.slice ? g.slice(A, void 0) : new Uint32Array(Array.prototype.slice.call(g, A, void 0))), new k(c[0], c[1], c[2], c[3], B, g)),
                    FA = [cA, 36],
                    HA = [1, 2, 3, 5],
                    fA = [j, 8],
                    pA = [iA, oA],
                    NA = HA.concat(fA),
                    KA = [UA, CA, EA, lA, gA],
                    IA = [$, Z],
                    mA = (TA.prototype.slice = function () {
                        return Q.apply(void 0, this.codePoints.slice(this.start, this.end))
                    },
                        TA);

                function TA(A, e, t, r) {
                    this.codePoints = A,
                        this.required = "!" === e,
                        this.start = t,
                        this.end = r
                }

                function u(A) {
                    return 48 <= A && A <= 57
                }

                function RA(A) {
                    return u(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102
                }

                function vA(A) {
                    return 10 === A || 9 === A || 32 === A
                }

                function bA(A) {
                    return 97 <= (e = A) && e <= 122 || 65 <= e && e <= 90 || 128 <= A || 95 === A;
                    var e
                }

                function LA(A) {
                    return bA(A) || u(A) || 45 === A
                }

                function yA(A, e) {
                    return 92 === A && 10 !== e
                }

                function OA(A, e, t) {
                    return 45 === A ? bA(e) || yA(e, t) : bA(A) || 92 === A && yA(A, e)
                }

                function SA(A, e, t) {
                    return 43 === A || 45 === A ? u(e) || 46 === e && u(t) : u(46 === A ? e : A)
                }

                (A = w = w || {})[A.STRING_TOKEN = 0] = "STRING_TOKEN",
                    A[A.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN",
                    A[A.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN",
                    A[A.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN",
                    A[A.COMMA_TOKEN = 4] = "COMMA_TOKEN",
                    A[A.HASH_TOKEN = 5] = "HASH_TOKEN",
                    A[A.DELIM_TOKEN = 6] = "DELIM_TOKEN",
                    A[A.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN",
                    A[A.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN",
                    A[A.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN",
                    A[A.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN",
                    A[A.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN",
                    A[A.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN",
                    A[A.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN",
                    A[A.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN",
                    A[A.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN",
                    A[A.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN",
                    A[A.NUMBER_TOKEN = 17] = "NUMBER_TOKEN",
                    A[A.FUNCTION = 18] = "FUNCTION",
                    A[A.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN",
                    A[A.IDENT_TOKEN = 20] = "IDENT_TOKEN",
                    A[A.COLUMN_TOKEN = 21] = "COLUMN_TOKEN",
                    A[A.URL_TOKEN = 22] = "URL_TOKEN",
                    A[A.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN",
                    A[A.CDC_TOKEN = 24] = "CDC_TOKEN",
                    A[A.CDO_TOKEN = 25] = "CDO_TOKEN",
                    A[A.COLON_TOKEN = 26] = "COLON_TOKEN",
                    A[A.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN",
                    A[A.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN",
                    A[A.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN",
                    A[A.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN",
                    A[A.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN",
                    A[A.EOF_TOKEN = 32] = "EOF_TOKEN";
                var DA = {
                        type: w.LEFT_PARENTHESIS_TOKEN
                    },
                    MA = {
                        type: w.RIGHT_PARENTHESIS_TOKEN
                    },
                    _A = {
                        type: w.COMMA_TOKEN
                    },
                    PA = {
                        type: w.SUFFIX_MATCH_TOKEN
                    },
                    zA = {
                        type: w.PREFIX_MATCH_TOKEN
                    },
                    xA = {
                        type: w.COLUMN_TOKEN
                    },
                    VA = {
                        type: w.DASH_MATCH_TOKEN
                    },
                    XA = {
                        type: w.INCLUDE_MATCH_TOKEN
                    },
                    JA = {
                        type: w.LEFT_CURLY_BRACKET_TOKEN
                    },
                    GA = {
                        type: w.RIGHT_CURLY_BRACKET_TOKEN
                    },
                    kA = {
                        type: w.SUBSTRING_MATCH_TOKEN
                    },
                    WA = {
                        type: w.BAD_URL_TOKEN
                    },
                    YA = {
                        type: w.BAD_STRING_TOKEN
                    },
                    qA = {
                        type: w.CDO_TOKEN
                    },
                    jA = {
                        type: w.CDC_TOKEN
                    },
                    ZA = {
                        type: w.COLON_TOKEN
                    },
                    $A = {
                        type: w.SEMICOLON_TOKEN
                    },
                    Ae = {
                        type: w.LEFT_SQUARE_BRACKET_TOKEN
                    },
                    ee = {
                        type: w.RIGHT_SQUARE_BRACKET_TOKEN
                    },
                    te = {
                        type: w.WHITESPACE_TOKEN
                    },
                    re = {
                        type: w.EOF_TOKEN
                    },
                    ne = (e.prototype.write = function (A) {
                        this._value = this._value.concat(x(A))
                    },
                        e.prototype.read = function () {
                            for (var A = [], e = this.consumeToken(); e !== re;) A.push(e),
                                e = this.consumeToken();
                            return A
                        },
                        e.prototype.consumeToken = function () {
                            var A = this.consumeCodePoint();
                            switch (A) {
                                case 34:
                                    return this.consumeStringToken(34);
                                case 35:
                                    var e, t = this.peekCodePoint(0),
                                        r = this.peekCodePoint(1),
                                        n = this.peekCodePoint(2);
                                    if (LA(t) || yA(r, n)) return t = OA(t, r, n) ? 2 : 1,
                                        e = this.consumeName(),
                                        {
                                            type: w.HASH_TOKEN,
                                            value: e,
                                            flags: t
                                        };
                                    break;
                                case 36:
                                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        PA;
                                    break;
                                case 39:
                                    return this.consumeStringToken(39);
                                case 40:
                                    return DA;
                                case 41:
                                    return MA;
                                case 42:
                                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        kA;
                                    break;
                                case 43:
                                    if (SA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                    break;
                                case 44:
                                    return _A;
                                case 45:
                                    r = A,
                                        n = this.peekCodePoint(0),
                                        t = this.peekCodePoint(1);
                                    if (SA(r, n, t)) return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                    if (OA(r, n, t)) return this.reconsumeCodePoint(A),
                                        this.consumeIdentLikeToken();
                                    if (45 === n && 62 === t) return this.consumeCodePoint(),
                                        this.consumeCodePoint(),
                                        jA;
                                    break;
                                case 46:
                                    if (SA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                    break;
                                case 47:
                                    if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint(); ;) {
                                        var B = this.consumeCodePoint();
                                        if (42 === B && 47 === (B = this.consumeCodePoint())) return this.consumeToken();
                                        if (-1 === B) return this.consumeToken()
                                    }
                                    break;
                                case 58:
                                    return ZA;
                                case 59:
                                    return $A;
                                case 60:
                                    if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(),
                                        this.consumeCodePoint(),
                                        qA;
                                    break;
                                case 64:
                                    if (OA(this.peekCodePoint(0), this.peekCodePoint(1), this.peekCodePoint(2))) return e = this.consumeName(),
                                        {
                                            type: w.AT_KEYWORD_TOKEN,
                                            value: e
                                        };
                                    break;
                                case 91:
                                    return Ae;
                                case 92:
                                    if (yA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A),
                                        this.consumeIdentLikeToken();
                                    break;
                                case 93:
                                    return ee;
                                case 61:
                                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        zA;
                                    break;
                                case 123:
                                    return JA;
                                case 125:
                                    return GA;
                                case 117:
                                case 85:
                                    r = this.peekCodePoint(0),
                                        n = this.peekCodePoint(1);
                                    return 43 !== r || !RA(n) && 63 !== n || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
                                        this.reconsumeCodePoint(A),
                                        this.consumeIdentLikeToken();
                                case 124:
                                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        VA;
                                    if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        xA;
                                    break;
                                case 126:
                                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(),
                                        XA;
                                    break;
                                case -1 :
                                    return re
                            }
                            return vA(A) ? (this.consumeWhiteSpace(), te) : u(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : bA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                                type: w.DELIM_TOKEN,
                                value: Q(A)
                            }
                        },
                        e.prototype.consumeCodePoint = function () {
                            var A = this._value.shift();
                            return void 0 === A ? -1 : A
                        },
                        e.prototype.reconsumeCodePoint = function (A) {
                            this._value.unshift(A)
                        },
                        e.prototype.peekCodePoint = function (A) {
                            return A >= this._value.length ? -1 : this._value[A]
                        },
                        e.prototype.consumeUnicodeRangeToken = function () {
                            for (var A = [], e = this.consumeCodePoint(); RA(e) && A.length < 6;) A.push(e),
                                e = this.consumeCodePoint();
                            for (var t, r = !1; 63 === e && A.length < 6;) A.push(e),
                                e = this.consumeCodePoint(),
                                r = !0;
                            if (r) return n = parseInt(Q.apply(void 0, A.map(function (A) {
                                return 63 === A ? 48 : A
                            })), 16),
                                t = parseInt(Q.apply(void 0, A.map(function (A) {
                                    return 63 === A ? 70 : A
                                })), 16),
                                {
                                    type: w.UNICODE_RANGE_TOKEN,
                                    start: n,
                                    end: t
                                };
                            var n = parseInt(Q.apply(void 0, A), 16);
                            if (45 === this.peekCodePoint(0) && RA(this.peekCodePoint(1))) {
                                this.consumeCodePoint();
                                for (var e = this.consumeCodePoint(), B = []; RA(e) && B.length < 6;) B.push(e),
                                    e = this.consumeCodePoint();
                                return t = parseInt(Q.apply(void 0, B), 16),
                                    {
                                        type: w.UNICODE_RANGE_TOKEN,
                                        start: n,
                                        end: t
                                    }
                            }
                            return {
                                type: w.UNICODE_RANGE_TOKEN,
                                start: n,
                                end: n
                            }
                        },
                        e.prototype.consumeIdentLikeToken = function () {
                            var A = this.consumeName();
                            return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                                type: w.FUNCTION_TOKEN,
                                value: A
                            }) : {
                                type: w.IDENT_TOKEN,
                                value: A
                            }
                        },
                        e.prototype.consumeUrlToken = function () {
                            var A = [];
                            if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
                                type: w.URL_TOKEN,
                                value: ""
                            };
                            var e = this.peekCodePoint(0);
                            if (39 === e || 34 === e) return (e = this.consumeStringToken(this.consumeCodePoint())).type === w.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                                type: w.URL_TOKEN,
                                value: e.value
                            }) : (this.consumeBadUrlRemnants(), WA);
                            for (; ;) {
                                var t = this.consumeCodePoint();
                                if (-1 === t || 41 === t) return {
                                    type: w.URL_TOKEN,
                                    value: Q.apply(void 0, A)
                                };
                                if (vA(t)) return this.consumeWhiteSpace(),
                                    -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                                        type: w.URL_TOKEN,
                                        value: Q.apply(void 0, A)
                                    }) : (this.consumeBadUrlRemnants(), WA);
                                if (34 === t || 39 === t || 40 === t || 0 <= t && t <= 8 || 11 === t || 14 <= t && t <= 31 || 127 === t) return this.consumeBadUrlRemnants(),
                                    WA;
                                if (92 === t) {
                                    if (!yA(t, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(),
                                        WA;
                                    A.push(this.consumeEscapedCodePoint())
                                } else A.push(t)
                            }
                        },
                        e.prototype.consumeWhiteSpace = function () {
                            for (; vA(this.peekCodePoint(0));) this.consumeCodePoint()
                        },
                        e.prototype.consumeBadUrlRemnants = function () {
                            for (; ;) {
                                var A = this.consumeCodePoint();
                                if (41 === A || -1 === A) return;
                                yA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                            }
                        },
                        e.prototype.consumeStringSlice = function (A) {
                            for (var e = ""; 0 < A;) {
                                var t = Math.min(6e4, A);
                                e += Q.apply(void 0, this._value.splice(0, t)),
                                    A -= t
                            }
                            return this._value.shift(),
                                e
                        },
                        e.prototype.consumeStringToken = function (A) {
                            for (var e = "",
                                     t = 0; ;) {
                                var r, n = this._value[t];
                                if (-1 === n || void 0 === n || n === A) return e += this.consumeStringSlice(t),
                                    {
                                        type: w.STRING_TOKEN,
                                        value: e
                                    };
                                if (10 === n) return this._value.splice(0, t),
                                    YA;
                                92 !== n || -1 !== (r = this._value[t + 1]) && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : yA(n, r) && (e = (e += this.consumeStringSlice(t)) + Q(this.consumeEscapedCodePoint()), t = -1)),
                                    t++
                            }
                        },
                        e.prototype.consumeNumber = function () {
                            var A = [],
                                e = 4;
                            for (43 !== (t = this.peekCodePoint(0)) && 45 !== t || A.push(this.consumeCodePoint()); u(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                            var t = this.peekCodePoint(0),
                                r = this.peekCodePoint(1);
                            if (46 === t && u(r)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; u(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                            t = this.peekCodePoint(0);
                            var r = this.peekCodePoint(1),
                                n = this.peekCodePoint(2);
                            if ((69 === t || 101 === t) && ((43 === r || 45 === r) && u(n) || u(r))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; u(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                            return [function (A) {
                                var e = 0,
                                    t = 1;
                                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
                                for (var r = []; u(A[e]);) r.push(A[e++]);
                                var n = r.length ? parseInt(Q.apply(void 0, r), 10) : 0;
                                46 === A[e] && e++;
                                for (var B = []; u(A[e]);) B.push(A[e++]);
                                var s = B.length,
                                    o = s ? parseInt(Q.apply(void 0, B), 10) : 0,
                                    i = (69 !== A[e] && 101 !== A[e] || e++, 1);
                                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = -1), e++);
                                for (var a = []; u(A[e]);) a.push(A[e++]);
                                var c = a.length ? parseInt(Q.apply(void 0, a), 10) : 0;
                                return t * (n + o * Math.pow(10, -s)) * Math.pow(10, i * c)
                            }(A), e]
                        },
                        e.prototype.consumeNumericToken = function () {
                            var A, e = this.consumeNumber(),
                                t = e[0],
                                e = e[1],
                                r = this.peekCodePoint(0);
                            return OA(r, this.peekCodePoint(1), this.peekCodePoint(2)) ? (A = this.consumeName(), {
                                type: w.DIMENSION_TOKEN,
                                number: t,
                                flags: e,
                                unit: A
                            }) : 37 === r ? (this.consumeCodePoint(), {
                                type: w.PERCENTAGE_TOKEN,
                                number: t,
                                flags: e
                            }) : {
                                type: w.NUMBER_TOKEN,
                                number: t,
                                flags: e
                            }
                        },
                        e.prototype.consumeEscapedCodePoint = function () {
                            var A = this.consumeCodePoint();
                            if (RA(A)) {
                                for (var e = Q(A); RA(this.peekCodePoint(0)) && e.length < 6;) e += Q(this.consumeCodePoint());
                                vA(this.peekCodePoint(0)) && this.consumeCodePoint();
                                var t = parseInt(e, 16);
                                return 0 === t || 55296 <= t && t <= 57343 || 1114111 < t ? 65533 : t
                            }
                            return -1 === A ? 65533 : A
                        },
                        e.prototype.consumeName = function () {
                            for (var A = ""; ;) {
                                var e = this.consumeCodePoint();
                                if (LA(e)) A += Q(e);
                                else {
                                    if (!yA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e),
                                        A;
                                    A += Q(this.consumeEscapedCodePoint())
                                }
                            }
                        },
                        e);

                function e() {
                    this._value = []
                }

                t.create = function (A) {
                    var e = new ne;
                    return e.write(A),
                        new t(e.read())
                },
                    t.parseValue = function (A) {
                        return t.create(A).parseComponentValue()
                    },
                    t.parseValues = function (A) {
                        return t.create(A).parseComponentValues()
                    },
                    t.prototype.parseComponentValue = function () {
                        for (var A = this.consumeToken(); A.type === w.WHITESPACE_TOKEN;) A = this.consumeToken();
                        if (A.type === w.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                        this.reconsumeToken(A);
                        for (var e = this.consumeComponentValue(); (A = this.consumeToken()).type === w.WHITESPACE_TOKEN;) ;
                        if (A.type === w.EOF_TOKEN) return e;
                        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                    },
                    t.prototype.parseComponentValues = function () {
                        for (var A = []; ;) {
                            var e = this.consumeComponentValue();
                            if (e.type === w.EOF_TOKEN) return A;
                            A.push(e),
                                A.push()
                        }
                    },
                    t.prototype.consumeComponentValue = function () {
                        var A = this.consumeToken();
                        switch (A.type) {
                            case w.LEFT_CURLY_BRACKET_TOKEN:
                            case w.LEFT_SQUARE_BRACKET_TOKEN:
                            case w.LEFT_PARENTHESIS_TOKEN:
                                return this.consumeSimpleBlock(A.type);
                            case w.FUNCTION_TOKEN:
                                return this.consumeFunction(A)
                        }
                        return A
                    },
                    t.prototype.consumeSimpleBlock = function (A) {
                        for (var e = {
                                type: A,
                                values: []
                            },
                                 t = this.consumeToken(); ;) {
                            if (t.type === w.EOF_TOKEN || He(t, A)) return e;
                            this.reconsumeToken(t),
                                e.values.push(this.consumeComponentValue()),
                                t = this.consumeToken()
                        }
                    },
                    t.prototype.consumeFunction = function (A) {
                        for (var e = {
                            name: A.value,
                            values: [],
                            type: w.FUNCTION
                        }; ;) {
                            var t = this.consumeToken();
                            if (t.type === w.EOF_TOKEN || t.type === w.RIGHT_PARENTHESIS_TOKEN) return e;
                            this.reconsumeToken(t),
                                e.values.push(this.consumeComponentValue())
                        }
                    },
                    t.prototype.consumeToken = function () {
                        var A = this._tokens.shift();
                        return void 0 === A ? re : A
                    },
                    t.prototype.reconsumeToken = function (A) {
                        this._tokens.unshift(A)
                    };
                var Be = t;

                function t(A) {
                    this._tokens = A
                }

                function se(A) {
                    return A.type === w.DIMENSION_TOKEN
                }

                function oe(A) {
                    return A.type === w.NUMBER_TOKEN
                }

                function U(A) {
                    return A.type === w.IDENT_TOKEN
                }

                function ie(A) {
                    return A.type === w.STRING_TOKEN
                }

                function ae(A, e) {
                    return U(A) && A.value === e
                }

                function ce(A) {
                    return A.type !== w.WHITESPACE_TOKEN
                }

                function Qe(A) {
                    return A.type !== w.WHITESPACE_TOKEN && A.type !== w.COMMA_TOKEN
                }

                function ue(A) {
                    var e = [],
                        t = [];
                    return A.forEach(function (A) {
                        if (A.type === w.COMMA_TOKEN) {
                            if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                            return e.push(t),
                                void (t = [])
                        }
                        A.type !== w.WHITESPACE_TOKEN && t.push(A)
                    }),
                    t.length && e.push(t),
                        e
                }

                function le(A) {
                    return A.type === w.NUMBER_TOKEN || A.type === w.DIMENSION_TOKEN
                }

                function C(A) {
                    return A.type === w.PERCENTAGE_TOKEN || le(A)
                }

                function ge(A) {
                    return 1 < A.length ? [A[0], A[1]] : [A[0]]
                }

                function we(A, e, t) {
                    var r = A[0],
                        A = A[1];
                    return [b(r, e), b(void 0 !== A ? A : r, t)]
                }

                function Ue(A) {
                    return A.type === w.DIMENSION_TOKEN && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
                }

                function Ce(A) {
                    switch (A.filter(U).map(function (A) {
                        return A.value
                    }).join(" ")) {
                        case "to bottom right":
                        case "to right bottom":
                        case "left top":
                        case "top left":
                            return [l, l];
                        case "to top":
                        case "bottom":
                            return s(0);
                        case "to bottom left":
                        case "to left bottom":
                        case "right top":
                        case "top right":
                            return [l, pe];
                        case "to right":
                        case "left":
                            return s(90);
                        case "to top left":
                        case "to left top":
                        case "right bottom":
                        case "bottom right":
                            return [pe, pe];
                        case "to bottom":
                        case "top":
                            return s(180);
                        case "to top right":
                        case "to right top":
                        case "left bottom":
                        case "bottom left":
                            return [pe, l];
                        case "to left":
                        case "right":
                            return s(270)
                    }
                    return 0
                }

                function Ee(A) {
                    return 0 == (255 & A)
                }

                function v(A) {
                    var e = 255 & A,
                        t = 255 & A >> 8,
                        r = 255 & A >> 16,
                        A = 255 & A >> 24;
                    return e < 255 ? "rgba(" + A + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + r + "," + t + ")"
                }

                function he(A, e) {
                    if (A.type === w.NUMBER_TOKEN) return A.number;
                    if (A.type !== w.PERCENTAGE_TOKEN) return 0;
                    var t = 3 === e ? 1 : 255;
                    return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
                }

                function de(A) {
                    var e, t, r, A = A.filter(Qe);
                    if (3 === A.length) return e = (r = A.map(he))[0],
                        t = r[1],
                        r = r[2],
                        Ke(e, t, r, 1);
                    if (4 !== A.length) return 0;
                    A = A.map(he),
                        e = A[0],
                        t = A[1],
                        r = A[2],
                        A = A[3];
                    return Ke(e, t, r, A)
                }

                function Fe(A) {
                    if (A.type === w.DIMENSION_TOKEN) switch (A.unit) {
                        case "deg":
                            return Math.PI * A.number / 180;
                        case "grad":
                            return Math.PI / 200 * A.number;
                        case "rad":
                            return A.number;
                        case "turn":
                            return 2 * Math.PI * A.number
                    }
                    throw new Error("Unsupported angle type")
                }

                function s(A) {
                    return Math.PI * A / 180
                }

                var He = function (A, e) {
                        return e === w.LEFT_CURLY_BRACKET_TOKEN && A.type === w.RIGHT_CURLY_BRACKET_TOKEN || e === w.LEFT_SQUARE_BRACKET_TOKEN && A.type === w.RIGHT_SQUARE_BRACKET_TOKEN || e === w.LEFT_PARENTHESIS_TOKEN && A.type === w.RIGHT_PARENTHESIS_TOKEN
                    },
                    l = {
                        type: w.NUMBER_TOKEN,
                        number: 0,
                        flags: 4
                    },
                    fe = {
                        type: w.PERCENTAGE_TOKEN,
                        number: 50,
                        flags: 4
                    },
                    pe = {
                        type: w.PERCENTAGE_TOKEN,
                        number: 100,
                        flags: 4
                    },
                    b = function (A, e) {
                        if (A.type === w.PERCENTAGE_TOKEN) return A.number / 100 * e;
                        if (se(A)) switch (A.unit) {
                            case "rem":
                            case "em":
                                return 16 * A.number;
                            default:
                                return A.number
                        }
                        return A.number
                    },
                    Ne = function (A) {
                        if (A.type === w.FUNCTION) {
                            var e = Re[A.name];
                            if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
                            return e(A.values)
                        }
                        if (A.type === w.HASH_TOKEN) {
                            var t, r, n, B;
                            if (3 === A.value.length) return t = A.value.substring(0, 1),
                                r = A.value.substring(1, 2),
                                n = A.value.substring(2, 3),
                                Ke(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1);
                            if (4 === A.value.length) return t = A.value.substring(0, 1),
                                r = A.value.substring(1, 2),
                                n = A.value.substring(2, 3),
                                B = A.value.substring(3, 4),
                                Ke(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16) / 255);
                            if (6 === A.value.length) return t = A.value.substring(0, 2),
                                r = A.value.substring(2, 4),
                                n = A.value.substring(4, 6),
                                Ke(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), 1);
                            if (8 === A.value.length) return t = A.value.substring(0, 2),
                                r = A.value.substring(2, 4),
                                n = A.value.substring(4, 6),
                                B = A.value.substring(6, 8),
                                Ke(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), parseInt(B, 16) / 255)
                        }
                        if (A.type === w.IDENT_TOKEN) {
                            e = ve[A.value.toUpperCase()];
                            if (void 0 !== e) return e
                        }
                        return ve.TRANSPARENT
                    },
                    Ke = function (A, e, t, r) {
                        return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
                    };

                function Ie(A, e, t) {
                    return t < 0 && (t += 1),
                    1 <= t && --t,
                        t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
                }

                function me(A) {
                    var A = A.filter(Qe),
                        e = A[0],
                        t = A[1],
                        r = A[2],
                        A = A[3],
                        e = (e.type === w.NUMBER_TOKEN ? s(e.number) : Fe(e)) / (2 * Math.PI),
                        t = C(t) ? t.number / 100 : 0,
                        r = C(r) ? r.number / 100 : 0,
                        A = void 0 !== A && C(A) ? b(A, 1) : 1;
                    if (0 == t) return Ke(255 * r, 255 * r, 255 * r, 1);
                    var t = r <= .5 ? r * (1 + t) : r + t - r * t,
                        r = 2 * r - t,
                        n = Ie(r, t, e + 1 / 3),
                        B = Ie(r, t, e),
                        r = Ie(r, t, e - 1 / 3);
                    return Ke(255 * n, 255 * B, 255 * r, A)
                }

                var o, Te, Re = {
                        hsl: me,
                        hsla: me,
                        rgb: de,
                        rgba: de
                    },
                    ve = {
                        ALICEBLUE: 4042850303,
                        ANTIQUEWHITE: 4209760255,
                        AQUA: 16777215,
                        AQUAMARINE: 2147472639,
                        AZURE: 4043309055,
                        BEIGE: 4126530815,
                        BISQUE: 4293182719,
                        BLACK: 255,
                        BLANCHEDALMOND: 4293643775,
                        BLUE: 65535,
                        BLUEVIOLET: 2318131967,
                        BROWN: 2771004159,
                        BURLYWOOD: 3736635391,
                        CADETBLUE: 1604231423,
                        CHARTREUSE: 2147418367,
                        CHOCOLATE: 3530104575,
                        CORAL: 4286533887,
                        CORNFLOWERBLUE: 1687547391,
                        CORNSILK: 4294499583,
                        CRIMSON: 3692313855,
                        CYAN: 16777215,
                        DARKBLUE: 35839,
                        DARKCYAN: 9145343,
                        DARKGOLDENROD: 3095837695,
                        DARKGRAY: 2846468607,
                        DARKGREEN: 6553855,
                        DARKGREY: 2846468607,
                        DARKKHAKI: 3182914559,
                        DARKMAGENTA: 2332068863,
                        DARKOLIVEGREEN: 1433087999,
                        DARKORANGE: 4287365375,
                        DARKORCHID: 2570243327,
                        DARKRED: 2332033279,
                        DARKSALMON: 3918953215,
                        DARKSEAGREEN: 2411499519,
                        DARKSLATEBLUE: 1211993087,
                        DARKSLATEGRAY: 793726975,
                        DARKSLATEGREY: 793726975,
                        DARKTURQUOISE: 13554175,
                        DARKVIOLET: 2483082239,
                        DEEPPINK: 4279538687,
                        DEEPSKYBLUE: 12582911,
                        DIMGRAY: 1768516095,
                        DIMGREY: 1768516095,
                        DODGERBLUE: 512819199,
                        FIREBRICK: 2988581631,
                        FLORALWHITE: 4294635775,
                        FORESTGREEN: 579543807,
                        FUCHSIA: 4278255615,
                        GAINSBORO: 3705462015,
                        GHOSTWHITE: 4177068031,
                        GOLD: 4292280575,
                        GOLDENROD: 3668254975,
                        GRAY: 2155905279,
                        GREEN: 8388863,
                        GREENYELLOW: 2919182335,
                        GREY: 2155905279,
                        HONEYDEW: 4043305215,
                        HOTPINK: 4285117695,
                        INDIANRED: 3445382399,
                        INDIGO: 1258324735,
                        IVORY: 4294963455,
                        KHAKI: 4041641215,
                        LAVENDER: 3873897215,
                        LAVENDERBLUSH: 4293981695,
                        LAWNGREEN: 2096890111,
                        LEMONCHIFFON: 4294626815,
                        LIGHTBLUE: 2916673279,
                        LIGHTCORAL: 4034953471,
                        LIGHTCYAN: 3774873599,
                        LIGHTGOLDENRODYELLOW: 4210742015,
                        LIGHTGRAY: 3553874943,
                        LIGHTGREEN: 2431553791,
                        LIGHTGREY: 3553874943,
                        LIGHTPINK: 4290167295,
                        LIGHTSALMON: 4288707327,
                        LIGHTSEAGREEN: 548580095,
                        LIGHTSKYBLUE: 2278488831,
                        LIGHTSLATEGRAY: 2005441023,
                        LIGHTSLATEGREY: 2005441023,
                        LIGHTSTEELBLUE: 2965692159,
                        LIGHTYELLOW: 4294959359,
                        LIME: 16711935,
                        LIMEGREEN: 852308735,
                        LINEN: 4210091775,
                        MAGENTA: 4278255615,
                        MAROON: 2147483903,
                        MEDIUMAQUAMARINE: 1724754687,
                        MEDIUMBLUE: 52735,
                        MEDIUMORCHID: 3126187007,
                        MEDIUMPURPLE: 2473647103,
                        MEDIUMSEAGREEN: 1018393087,
                        MEDIUMSLATEBLUE: 2070474495,
                        MEDIUMSPRINGGREEN: 16423679,
                        MEDIUMTURQUOISE: 1221709055,
                        MEDIUMVIOLETRED: 3340076543,
                        MIDNIGHTBLUE: 421097727,
                        MINTCREAM: 4127193855,
                        MISTYROSE: 4293190143,
                        MOCCASIN: 4293178879,
                        NAVAJOWHITE: 4292783615,
                        NAVY: 33023,
                        OLDLACE: 4260751103,
                        OLIVE: 2155872511,
                        OLIVEDRAB: 1804477439,
                        ORANGE: 4289003775,
                        ORANGERED: 4282712319,
                        ORCHID: 3664828159,
                        PALEGOLDENROD: 4008225535,
                        PALEGREEN: 2566625535,
                        PALETURQUOISE: 2951671551,
                        PALEVIOLETRED: 3681588223,
                        PAPAYAWHIP: 4293907967,
                        PEACHPUFF: 4292524543,
                        PERU: 3448061951,
                        PINK: 4290825215,
                        PLUM: 3718307327,
                        POWDERBLUE: 2967529215,
                        PURPLE: 2147516671,
                        REBECCAPURPLE: 1714657791,
                        RED: 4278190335,
                        ROSYBROWN: 3163525119,
                        ROYALBLUE: 1097458175,
                        SADDLEBROWN: 2336560127,
                        SALMON: 4202722047,
                        SANDYBROWN: 4104413439,
                        SEAGREEN: 780883967,
                        SEASHELL: 4294307583,
                        SIENNA: 2689740287,
                        SILVER: 3233857791,
                        SKYBLUE: 2278484991,
                        SLATEBLUE: 1784335871,
                        SLATEGRAY: 1887473919,
                        SLATEGREY: 1887473919,
                        SNOW: 4294638335,
                        SPRINGGREEN: 16744447,
                        STEELBLUE: 1182971135,
                        TAN: 3535047935,
                        TEAL: 8421631,
                        THISTLE: 3636451583,
                        TOMATO: 4284696575,
                        TRANSPARENT: 0,
                        TURQUOISE: 1088475391,
                        VIOLET: 4001558271,
                        WHEAT: 4125012991,
                        WHITE: 4294967295,
                        WHITESMOKE: 4126537215,
                        YELLOW: 4294902015,
                        YELLOWGREEN: 2597139199
                    };

                function be(A) {
                    var e = Ne(A[0]),
                        A = A[1];
                    return A && C(A) ? {
                        color: e,
                        stop: A
                    } : {
                        color: e,
                        stop: null
                    }
                }

                function Le(A, t) {
                    var e = A[0],
                        r = A[A.length - 1];
                    null === e.stop && (e.stop = l),
                    null === r.stop && (r.stop = pe);
                    for (var n = [], B = 0, s = 0; s < A.length; s++) {
                        var o = A[s].stop;
                        null !== o ? (B < (o = b(o, t)) ? n.push(o) : n.push(B), B = o) : n.push(null)
                    }
                    for (var i = null,
                             s = 0; s < n.length; s++) {
                        var a = n[s];
                        if (null === a) null === i && (i = s);
                        else if (null !== i) {
                            for (var c = s - i,
                                     Q = (a - n[i - 1]) / (1 + c), u = 1; u <= c; u++) n[i + u - 1] = Q * u;
                            i = null
                        }
                    }
                    return A.map(function (A, e) {
                        return {
                            color: A.color,
                            stop: Math.max(Math.min(1, n[e] / t), 0)
                        }
                    })
                }

                function L(A, e) {
                    return Math.sqrt(A * A + e * e)
                }

                function ye(A, e, n, B, s) {
                    return [[0, 0], [0, e], [A, 0], [A, e]].reduce(function (A, e) {
                            var t = e[0],
                                r = e[1],
                                t = L(n - t, B - r);
                            return (s ? t < A.optimumDistance : t > A.optimumDistance) ? {
                                optimumCorner: e,
                                optimumDistance: t
                            } : A
                        },
                        {
                            optimumDistance: s ? 1 / 0 : -1 / 0,
                            optimumCorner: null
                        }).optimumCorner
                }

                function Oe(A) {
                    var t = s(180),
                        r = [];
                    return ue(A).forEach(function (A, e) {
                        if (0 === e) {
                            e = A[0];
                            if (e.type === w.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(e.value)) return void (t = Ce(A));
                            if (Ue(e)) return void (t = (Fe(e) + s(270)) % s(360))
                        }
                        e = be(A);
                        r.push(e)
                    }),
                        {
                            angle: t,
                            stops: r,
                            type: O.LINEAR_GRADIENT
                        }
                }

                function Se(A) {
                    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                }

                o = {
                    VALUE: 0,
                    0: "VALUE",
                    LIST: 1,
                    1: "LIST",
                    IDENT_VALUE: 2,
                    2: "IDENT_VALUE",
                    TYPE_VALUE: 3,
                    3: "TYPE_VALUE",
                    TOKEN_VALUE: 4,
                    4: "TOKEN_VALUE"
                };

                function De(A, e, t, r, n) {
                    var B = "http://www.w3.org/2000/svg",
                        s = document.createElementNS(B, "svg"),
                        B = document.createElementNS(B, "foreignObject");
                    return s.setAttributeNS(null, "width", A.toString()),
                        s.setAttributeNS(null, "height", e.toString()),
                        B.setAttributeNS(null, "width", "100%"),
                        B.setAttributeNS(null, "height", "100%"),
                        B.setAttributeNS(null, "x", t.toString()),
                        B.setAttributeNS(null, "y", r.toString()),
                        B.setAttributeNS(null, "externalResourcesRequired", "true"),
                        s.appendChild(B),
                        B.appendChild(n),
                        s
                }

                function Me(r) {
                    return new Promise(function (A, e) {
                        var t = new Image;
                        t.onload = function () {
                            return A(t)
                        },
                            t.onerror = e,
                            t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
                    })
                }

                var _e = {
                        name: "background-clip",
                        initialValue: "border-box",
                        prefix: !((k = Te = {
                            BORDER_BOX: 0,
                            0: "BORDER_BOX",
                            PADDING_BOX: 1,
                            1: "PADDING_BOX"
                        })[k.CONTENT_BOX = 2] = "CONTENT_BOX"),
                        type: o.LIST,
                        parse: function (A) {
                            return A.map(function (A) {
                                if (U(A)) switch (A.value) {
                                    case "padding-box":
                                        return Te.PADDING_BOX;
                                    case "content-box":
                                        return Te.CONTENT_BOX
                                }
                                return Te.BORDER_BOX
                            })
                        }
                    },
                    Pe = {
                        name: "background-color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "color"
                    },
                    a = {
                        get SUPPORT_RANGE_BOUNDS() {
                            var A = function (A) {
                                if (A.createRange) {
                                    var e = A.createRange();
                                    if (e.getBoundingClientRect) {
                                        var t = A.createElement("boundtest"),
                                            e = (t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t), e.getBoundingClientRect()),
                                            e = Math.round(e.height);
                                        if (A.body.removeChild(t), 123 === e) return !0
                                    }
                                }
                                return !1
                            }(document);
                            return Object.defineProperty(a, "SUPPORT_RANGE_BOUNDS", {
                                value: A
                            }),
                                A
                        },
                        get SUPPORT_SVG_DRAWING() {
                            var A = function (A) {
                                var e = new Image,
                                    t = A.createElement("canvas"),
                                    r = t.getContext("2d");
                                if (!r) return !1;
                                e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                                try {
                                    r.drawImage(e, 0, 0),
                                        t.toDataURL()
                                } catch (A) {
                                    return !1
                                }
                                return !0
                            }(document);
                            return Object.defineProperty(a, "SUPPORT_SVG_DRAWING", {
                                value: A
                            }),
                                A
                        },
                        get SUPPORT_FOREIGNOBJECT_DRAWING() {
                            var A = "function" == typeof Array.from && "function" == typeof window.fetch ?
                                function (t) {
                                    var A = t.createElement("canvas"),
                                        r = 100,
                                        n = (A.width = r, A.height = r, A.getContext("2d"));
                                    if (!n) return Promise.reject(!1);
                                    n.fillStyle = "rgb(0, 255, 0)",
                                        n.fillRect(0, 0, r, r);
                                    var e = new Image,
                                        B = A.toDataURL(),
                                        A = (e.src = B, De(r, r, 0, 0, e));
                                    return n.fillStyle = "red",
                                        n.fillRect(0, 0, r, r),
                                        Me(A).then(function (A) {
                                            n.drawImage(A, 0, 0);
                                            var A = n.getImageData(0, 0, r, r).data,
                                                e = (n.fillStyle = "red", n.fillRect(0, 0, r, r), t.createElement("div"));
                                            return e.style.backgroundImage = "url(" + B + ")",
                                                e.style.height = "100px",
                                                Se(A) ? Me(De(r, r, 0, 0, e)) : Promise.reject(!1)
                                        }).then(function (A) {
                                            return n.drawImage(A, 0, 0),
                                                Se(n.getImageData(0, 0, r, r).data)
                                        }).catch(function () {
                                            return !1
                                        })
                                }(document) : Promise.resolve(!1);
                            return Object.defineProperty(a, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                                value: A
                            }),
                                A
                        },
                        get SUPPORT_CORS_IMAGES() {
                            var A = void 0 !== (new Image).crossOrigin;
                            return Object.defineProperty(a, "SUPPORT_CORS_IMAGES", {
                                value: A
                            }),
                                A
                        },
                        get SUPPORT_RESPONSE_TYPE() {
                            var A = "string" == typeof (new XMLHttpRequest).responseType;
                            return Object.defineProperty(a, "SUPPORT_RESPONSE_TYPE", {
                                value: A
                            }),
                                A
                        },
                        get SUPPORT_CORS_XHR() {
                            var A = "withCredentials" in new XMLHttpRequest;
                            return Object.defineProperty(a, "SUPPORT_CORS_XHR", {
                                value: A
                            }),
                                A
                        }
                    },
                    y = (r.prototype.debug = function () {
                        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                        !this.enabled || "undefined" != typeof window && window.console && "function" == typeof console.debug || this.info.apply(this, A)
                    },
                        r.prototype.getTime = function () {
                            return Date.now() - this.start
                        },
                        r.create = function (A) {
                            r.instances[A.id] = new r(A)
                        },
                        r.destroy = function (A) {
                            delete r.instances[A]
                        },
                        r.getInstance = function (A) {
                            var e = r.instances[A];
                            if (void 0 === e) throw new Error("No logger instance found with id " + A);
                            return e
                        },
                        r.prototype.info = function () {
                            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                            this.enabled && "undefined" != typeof window && window.console && console.info
                        },
                        r.prototype.error = function () {
                            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                            !this.enabled || "undefined" != typeof window && window.console && "function" == typeof console.error || this.info.apply(this, A)
                        },
                        r.instances = {},
                        r);

                function r(A) {
                    var e = A.id,
                        A = A.enabled;
                    this.id = e,
                        this.enabled = A,
                        this.start = Date.now()
                }

                n.create = function (A, e) {
                    return n._caches[A] = new xe(A, e)
                },
                    n.destroy = function (A) {
                        delete n._caches[A]
                    },
                    n.open = function (A) {
                        var e = n._caches[A];
                        if (void 0 !== e) return e;
                        throw new Error('Cache with key "' + A + '" not found')
                    },
                    n.getOrigin = function (A) {
                        var e = n._link;
                        return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
                    },
                    n.isSameOrigin = function (A) {
                        return n.getOrigin(A) === n._origin
                    },
                    n.setContext = function (A) {
                        n._link = A.document.createElement("a"),
                            n._origin = n.getOrigin(A.location.href)
                    },
                    n.getInstance = function () {
                        var A = n._current;
                        if (null === A) throw new Error("No cache instance attached");
                        return A
                    },
                    n.attachInstance = function (A) {
                        n._current = A
                    },
                    n.detachInstance = function () {
                        n._current = null
                    },
                    n._caches = {},
                    n._origin = "about:blank",
                    n._current = null;
                var ze = n;

                function n() {
                }

                Ve.prototype.addImage = function (A) {
                    var e = Promise.resolve();
                    return this.has(A) || (At(A) || je(A)) && (this._cache[A] = this.loadImage(A)),
                        e
                },
                    Ve.prototype.match = function (A) {
                        return this._cache[A]
                    },
                    Ve.prototype.loadImage = function (s) {
                        return i(this, void 0, void 0,
                            function () {
                                var e, r, t, n, B = this;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return e = ze.isSameOrigin(s),
                                                    r = !Ze(s) && !0 === this._options.useCORS && a.SUPPORT_CORS_IMAGES && !e,
                                                    t = !Ze(s) && !e && "string" == typeof this._options.proxy && a.SUPPORT_CORS_XHR && !r,
                                                    e || !1 !== this._options.allowTaint || Ze(s) || t || r ? (n = s, t ? [4, this.proxy(n)] : [3, 2]) : [2];
                                            case 1:
                                                n = A.sent(),
                                                    A.label = 2;
                                            case 2:
                                                return y.getInstance(this.id).debug("Added image " + s.substring(0, 256)),
                                                    [4, new Promise(function (A, e) {
                                                        var t = new Image;
                                                        t.onload = function () {
                                                            return A(t)
                                                        },
                                                            t.onerror = e,
                                                        ($e(n) || r) && (t.crossOrigin = "anonymous"),
                                                            t.src = n,
                                                        !0 === t.complete && setTimeout(function () {
                                                                return A(t)
                                                            },
                                                            500),
                                                        0 < B._options.imageTimeout && setTimeout(function () {
                                                                return e("Timed out (" + B._options.imageTimeout + "ms) loading image")
                                                            },
                                                            B._options.imageTimeout)
                                                    })];
                                            case 3:
                                                return [2, A.sent()]
                                        }
                                    })
                            })
                    },
                    Ve.prototype.has = function (A) {
                        return void 0 !== this._cache[A]
                    },
                    Ve.prototype.keys = function () {
                        return Promise.resolve(Object.keys(this._cache))
                    },
                    Ve.prototype.proxy = function (B) {
                        var s = this,
                            o = this._options.proxy;
                        if (!o) throw new Error("No proxy defined");
                        var i = B.substring(0, 256);
                        return new Promise(function (e, t) {
                            var A, r = a.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                                n = new XMLHttpRequest;
                            n.onload = function () {
                                var A;
                                200 === n.status ? "text" == r ? e(n.response) : ((A = new FileReader).addEventListener("load",
                                    function () {
                                        return e(A.result)
                                    },
                                    !1), A.addEventListener("error",
                                    function (A) {
                                        return t(A)
                                    },
                                    !1), A.readAsDataURL(n.response)) : t("Failed to proxy resource " + i + " with status code " + n.status)
                            },
                                n.onerror = t,
                                n.open("GET", o + "?url=" + encodeURIComponent(B) + "&responseType=" + r),
                            "text" != r && n instanceof XMLHttpRequest && (n.responseType = r),
                            s._options.imageTimeout && (A = s._options.imageTimeout, n.timeout = A, n.ontimeout = function () {
                                return t("Timed out (" + A + "ms) proxying " + i)
                            }),
                                n.send()
                        })
                    };
                var xe = Ve;

                function Ve(A, e) {
                    this.id = A,
                        this._options = e,
                        this._cache = {}
                }

                function Xe(A) {
                    var r = S.CIRCLE,
                        n = D.FARTHEST_CORNER,
                        B = [],
                        s = [];
                    return ue(A).forEach(function (A, e) {
                        var t = !0;
                        0 === e ? t = A.reduce(function (A, e) {
                                if (U(e)) switch (e.value) {
                                    case "center":
                                        return s.push(fe),
                                            !1;
                                    case "top":
                                    case "left":
                                        return s.push(l),
                                            !1;
                                    case "right":
                                    case "bottom":
                                        return s.push(pe),
                                            !1
                                } else if (C(e) || le(e)) return s.push(e),
                                    !1;
                                return A
                            },
                            t) : 1 === e && (t = A.reduce(function (A, e) {
                                if (U(e)) switch (e.value) {
                                    case "circle":
                                        return r = S.CIRCLE,
                                            !1;
                                    case st:
                                        return r = S.ELLIPSE,
                                            !1;
                                    case ot:
                                    case tt:
                                        return n = D.CLOSEST_SIDE,
                                            !1;
                                    case rt:
                                        return n = D.FARTHEST_SIDE,
                                            !1;
                                    case nt:
                                        return n = D.CLOSEST_CORNER,
                                            !1;
                                    case "cover":
                                    case Bt:
                                        return n = D.FARTHEST_CORNER,
                                            !1
                                } else if (le(e) || C(e)) return (n = Array.isArray(n) ? n : []).push(e),
                                    !1;
                                return A
                            },
                            t)),
                        t && (e = be(A), B.push(e))
                    }),
                        {
                            size: n,
                            shape: r,
                            stops: B,
                            position: s,
                            type: O.RADIAL_GRADIENT
                        }
                }

                function Je(A) {
                    if (A.type === w.URL_TOKEN) return e = {
                        url: A.value,
                        type: O.URL
                    },
                        ze.getInstance().addImage(A.value),
                        e;
                    if (A.type !== w.FUNCTION) throw new Error("Unsupported image type");
                    var e = it[A.name];
                    if (void 0 === e) throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
                    return e(A.values)
                }

                var O, S, D, Ge, ke, We = /^data:image\/svg\+xml/i,
                    Ye = /^data:image\/.*;base64,/i,
                    qe = /^data:image\/.*/i,
                    je = function (A) {
                        return a.SUPPORT_SVG_DRAWING || !et(A)
                    },
                    Ze = function (A) {
                        return qe.test(A)
                    },
                    $e = function (A) {
                        return Ye.test(A)
                    },
                    At = function (A) {
                        return "blob" === A.substr(0, 4)
                    },
                    et = function (A) {
                        return "svg" === A.substr(-3).toLowerCase() || We.test(A)
                    },
                    tt = "closest-side",
                    rt = "farthest-side",
                    nt = "closest-corner",
                    Bt = "farthest-corner",
                    st = "ellipse",
                    ot = "contain",
                    it = ((c = O = O || {})[c.URL = 0] = "URL", c[c.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", c[c.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT", S = {
                        CIRCLE: 0,
                        0: "CIRCLE",
                        ELLIPSE: 1,
                        1: "ELLIPSE"
                    },
                        D = {
                            CLOSEST_SIDE: 0,
                            0: "CLOSEST_SIDE",
                            FARTHEST_SIDE: 1,
                            1: "FARTHEST_SIDE",
                            CLOSEST_CORNER: 2,
                            2: "CLOSEST_CORNER",
                            FARTHEST_CORNER: 3,
                            3: "FARTHEST_CORNER"
                        },
                        {
                            "linear-gradient": function (A) {
                                var t = s(180),
                                    r = [];
                                return ue(A).forEach(function (A, e) {
                                    if (0 === e) {
                                        e = A[0];
                                        if (e.type === w.IDENT_TOKEN && "to" === e.value) return void (t = Ce(A));
                                        if (Ue(e)) return void (t = Fe(e))
                                    }
                                    e = be(A);
                                    r.push(e)
                                }),
                                    {
                                        angle: t,
                                        stops: r,
                                        type: O.LINEAR_GRADIENT
                                    }
                            },
                            "-moz-linear-gradient": Oe,
                            "-ms-linear-gradient": Oe,
                            "-o-linear-gradient": Oe,
                            "-webkit-linear-gradient": Oe,
                            "radial-gradient": function (A) {
                                var n = S.CIRCLE,
                                    B = D.FARTHEST_CORNER,
                                    s = [],
                                    o = [];
                                return ue(A).forEach(function (A, e) {
                                    var t, r = !0;
                                    0 === e && (t = !1, r = A.reduce(function (A, e) {
                                            if (t) if (U(e)) switch (e.value) {
                                                case "center":
                                                    return o.push(fe),
                                                        A;
                                                case "top":
                                                case "left":
                                                    return o.push(l),
                                                        A;
                                                case "right":
                                                case "bottom":
                                                    return o.push(pe),
                                                        A
                                            } else (C(e) || le(e)) && o.push(e);
                                            else if (U(e)) switch (e.value) {
                                                case "circle":
                                                    return n = S.CIRCLE,
                                                        !1;
                                                case st:
                                                    return n = S.ELLIPSE,
                                                        !1;
                                                case "at":
                                                    return !(t = !0);
                                                case tt:
                                                    return B = D.CLOSEST_SIDE,
                                                        !1;
                                                case "cover":
                                                case rt:
                                                    return B = D.FARTHEST_SIDE,
                                                        !1;
                                                case ot:
                                                case nt:
                                                    return B = D.CLOSEST_CORNER,
                                                        !1;
                                                case Bt:
                                                    return B = D.FARTHEST_CORNER,
                                                        !1
                                            } else if (le(e) || C(e)) return (B = Array.isArray(B) ? B : []).push(e),
                                                !1;
                                            return A
                                        },
                                        r)),
                                    r && (e = be(A), s.push(e))
                                }),
                                    {
                                        size: B,
                                        shape: n,
                                        stops: s,
                                        position: o,
                                        type: O.RADIAL_GRADIENT
                                    }
                            },
                            "-moz-radial-gradient": Xe,
                            "-ms-radial-gradient": Xe,
                            "-o-radial-gradient": Xe,
                            "-webkit-radial-gradient": Xe,
                            "-webkit-gradient": function (A) {
                                var e = s(180),
                                    r = [],
                                    n = O.LINEAR_GRADIENT,
                                    t = S.CIRCLE,
                                    B = D.FARTHEST_CORNER;
                                return ue(A).forEach(function (A, e) {
                                    var t, A = A[0];
                                    if (0 === e) {
                                        if (U(A) && "linear" === A.value) return void (n = O.LINEAR_GRADIENT);
                                        if (U(A) && "radial" === A.value) return void (n = O.RADIAL_GRADIENT)
                                    }
                                    A.type === w.FUNCTION && ("from" === A.name ? (t = Ne(A.values[0]), r.push({
                                        stop: l,
                                        color: t
                                    })) : "to" === A.name ? (t = Ne(A.values[0]), r.push({
                                        stop: pe,
                                        color: t
                                    })) : "color-stop" === A.name && 2 === (e = A.values.filter(Qe)).length && (t = Ne(e[1]), oe(A = e[0]) && r.push({
                                        stop: {
                                            type: w.PERCENTAGE_TOKEN,
                                            number: 100 * A.number,
                                            flags: A.flags
                                        },
                                        color: t
                                    })))
                                }),
                                    n === O.LINEAR_GRADIENT ? {
                                        angle: (e + s(180)) % s(360),
                                        stops: r,
                                        type: n
                                    } : {
                                        size: B,
                                        shape: t,
                                        stops: r,
                                        position: [],
                                        type: n
                                    }
                            }
                        }),
                    at = {
                        name: "background-image",
                        initialValue: "none",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            if (0 === A.length) return [];
                            var e = A[0];
                            return e.type === w.IDENT_TOKEN && "none" === e.value ? [] : A.filter(function (A) {
                                return Qe(A) && (A.type !== w.FUNCTION || it[A.name])
                            }).map(Je)
                        }
                    },
                    ct = {
                        name: "background-origin",
                        initialValue: "border-box",
                        prefix: !1,
                        type: o.LIST,
                        parse: function (A) {
                            return A.map(function (A) {
                                if (U(A)) switch (A.value) {
                                    case "padding-box":
                                        return 1;
                                    case "content-box":
                                        return 2
                                }
                                return 0
                            })
                        }
                    },
                    Qt = {
                        name: "background-position",
                        initialValue: "0% 0%",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            return ue(A).map(function (A) {
                                return A.filter(C)
                            }).map(ge)
                        }
                    },
                    B = Ge = {
                        REPEAT: 0,
                        0: "REPEAT",
                        NO_REPEAT: 1,
                        1: "NO_REPEAT",
                        REPEAT_X: 2,
                        2: "REPEAT_X"
                    },
                    ut = {
                        name: "background-repeat",
                        initialValue: "repeat",
                        prefix: !(B[B.REPEAT_Y = 3] = "REPEAT_Y"),
                        type: o.LIST,
                        parse: function (A) {
                            return ue(A).map(function (A) {
                                return A.filter(U).map(function (A) {
                                    return A.value
                                }).join(" ")
                            }).map(lt)
                        }
                    },
                    lt = function (A) {
                        switch (A) {
                            case "no-repeat":
                                return Ge.NO_REPEAT;
                            case "repeat-x":
                            case "repeat no-repeat":
                                return Ge.REPEAT_X;
                            case "repeat-y":
                            case "no-repeat repeat":
                                return Ge.REPEAT_Y;
                            default:
                                return Ge.REPEAT
                        }
                    };

                function gt(A) {
                    return {
                        name:
                            "border-" + A + "-color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "color"
                    }
                }

                function wt(A) {
                    return {
                        name: "border-radius-" + A,
                        initialValue: "0 0",
                        prefix: !1,
                        type: o.LIST,
                        parse: function (A) {
                            return ge(A.filter(C))
                        }
                    }
                }

                (g = ke = ke || {}).AUTO = "auto",
                    g.CONTAIN = "contain";
                var Ut, Ct = {
                        name: "background-size",
                        initialValue: "0",
                        prefix: !(g.COVER = "cover"),
                        type: o.LIST,
                        parse: function (A) {
                            return ue(A).map(function (A) {
                                return A.filter(Et)
                            })
                        }
                    },
                    Et = function (A) {
                        return U(A) || C(A)
                    },
                    ht = gt("top"),
                    dt = gt("right"),
                    Ft = gt("bottom"),
                    Ht = gt("left"),
                    ft = wt("top-left"),
                    pt = wt("top-right"),
                    Nt = wt("bottom-right"),
                    Kt = wt("bottom-left");

                function It(A) {
                    return {
                        name: "border-" + A + "-style",
                        initialValue: "solid",
                        prefix: !1,
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            return "none" === A ? Ut.NONE : Ut.SOLID
                        }
                    }
                }

                function mt(A) {
                    return {
                        name: "border-" + A + "-width",
                        initialValue: "0",
                        type: o.VALUE,
                        prefix: !1,
                        parse: function (A) {
                            return se(A) ? A.number : 0
                        }
                    }
                }

                Ut = {
                    NONE: 0,
                    0: "NONE",
                    SOLID: 1,
                    1: "SOLID"
                };
                var Tt, Rt, vt, E, bt = It("top"),
                    Lt = It("right"),
                    yt = It("bottom"),
                    Ot = It("left"),
                    St = mt("top"),
                    Dt = mt("right"),
                    Mt = mt("bottom"),
                    _t = mt("left"),
                    Pt = {
                        name: "color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "color"
                    },
                    zt = {
                        name: "display",
                        initialValue: "inline-block",
                        prefix: !1,
                        type: o.LIST,
                        parse: function (A) {
                            return A.filter(U).reduce(function (A, e) {
                                    return A | xt(e.value)
                                },
                                0)
                        }
                    },
                    xt = function (A) {
                        switch (A) {
                            case "block":
                                return 2;
                            case "inline":
                                return 4;
                            case "run-in":
                                return 8;
                            case "flow":
                                return 16;
                            case "flow-root":
                                return 32;
                            case "table":
                                return 64;
                            case "flex":
                            case "-webkit-flex":
                                return 128;
                            case "grid":
                            case "-ms-grid":
                                return 256;
                            case "ruby":
                                return 512;
                            case "subgrid":
                                return 1024;
                            case "list-item":
                                return 2048;
                            case "table-row-group":
                                return 4096;
                            case "table-header-group":
                                return 8192;
                            case "table-footer-group":
                                return 16384;
                            case "table-row":
                                return 32768;
                            case "table-cell":
                                return 65536;
                            case "table-column-group":
                                return 131072;
                            case "table-column":
                                return 262144;
                            case "table-caption":
                                return 524288;
                            case "ruby-base":
                                return 1048576;
                            case "ruby-text":
                                return 2097152;
                            case "ruby-base-container":
                                return 4194304;
                            case "ruby-text-container":
                                return 8388608;
                            case "contents":
                                return 16777216;
                            case "inline-block":
                                return 33554432;
                            case "inline-list-item":
                                return 67108864;
                            case "inline-table":
                                return 134217728;
                            case "inline-flex":
                                return 268435456;
                            case "inline-grid":
                                return 536870912
                        }
                        return 0
                    },
                    k = Tt = {
                        NONE: 0,
                        0: "NONE",
                        LEFT: 1,
                        1: "LEFT",
                        RIGHT: 2,
                        2: "RIGHT",
                        INLINE_START: 3,
                        3: "INLINE_START"
                    },
                    Vt = {
                        name: "float",
                        initialValue: "none",
                        prefix: !(k[k.INLINE_END = 4] = "INLINE_END"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "left":
                                    return Tt.LEFT;
                                case "right":
                                    return Tt.RIGHT;
                                case "inline-start":
                                    return Tt.INLINE_START;
                                case "inline-end":
                                    return Tt.INLINE_END
                            }
                            return Tt.NONE
                        }
                    },
                    Xt = {
                        name: "letter-spacing",
                        initialValue: "0",
                        prefix: !1,
                        type: o.VALUE,
                        parse: function (A) {
                            return !(A.type === w.IDENT_TOKEN && "normal" === A.value || A.type !== w.NUMBER_TOKEN && A.type !== w.DIMENSION_TOKEN) ? A.number : 0
                        }
                    },
                    Jt = {
                        name: "line-break",
                        initialValue: (Rt = {}).NORMAL = "normal",
                        prefix: !(Rt.STRICT = "strict"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            return "strict" !== A ? Rt.NORMAL : Rt.STRICT
                        }
                    },
                    Gt = {
                        name: "line-height",
                        initialValue: "normal",
                        prefix: !1,
                        type: o.TOKEN_VALUE
                    },
                    kt = {
                        name: "list-style-image",
                        initialValue: "none",
                        type: o.VALUE,
                        prefix: !1,
                        parse: function (A) {
                            return A.type === w.IDENT_TOKEN && "none" === A.value ? null : Je(A)
                        }
                    },
                    c = vt = {
                        INSIDE: 0,
                        0: "INSIDE"
                    },
                    Wt = {
                        name: "list-style-position",
                        initialValue: "outside",
                        prefix: !(c[c.OUTSIDE = 1] = "OUTSIDE"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            return "inside" !== A ? vt.OUTSIDE : vt.INSIDE
                        }
                    };

                function Yt(A) {
                    return {
                        name: "margin-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: o.TOKEN_VALUE
                    }
                }

                (B = E = E || {})[B.NONE = -1] = "NONE",
                    B[B.DISC = 0] = "DISC",
                    B[B.CIRCLE = 1] = "CIRCLE",
                    B[B.SQUARE = 2] = "SQUARE",
                    B[B.DECIMAL = 3] = "DECIMAL",
                    B[B.CJK_DECIMAL = 4] = "CJK_DECIMAL",
                    B[B.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO",
                    B[B.LOWER_ROMAN = 6] = "LOWER_ROMAN",
                    B[B.UPPER_ROMAN = 7] = "UPPER_ROMAN",
                    B[B.LOWER_GREEK = 8] = "LOWER_GREEK",
                    B[B.LOWER_ALPHA = 9] = "LOWER_ALPHA",
                    B[B.UPPER_ALPHA = 10] = "UPPER_ALPHA",
                    B[B.ARABIC_INDIC = 11] = "ARABIC_INDIC",
                    B[B.ARMENIAN = 12] = "ARMENIAN",
                    B[B.BENGALI = 13] = "BENGALI",
                    B[B.CAMBODIAN = 14] = "CAMBODIAN",
                    B[B.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH",
                    B[B.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM",
                    B[B.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC",
                    B[B.DEVANAGARI = 18] = "DEVANAGARI",
                    B[B.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC",
                    B[B.GEORGIAN = 20] = "GEORGIAN",
                    B[B.GUJARATI = 21] = "GUJARATI",
                    B[B.GURMUKHI = 22] = "GURMUKHI",
                    B[B.HEBREW = 22] = "HEBREW",
                    B[B.HIRAGANA = 23] = "HIRAGANA",
                    B[B.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA",
                    B[B.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL",
                    B[B.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL",
                    B[B.KANNADA = 27] = "KANNADA",
                    B[B.KATAKANA = 28] = "KATAKANA",
                    B[B.KATAKANA_IROHA = 29] = "KATAKANA_IROHA",
                    B[B.KHMER = 30] = "KHMER",
                    B[B.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL",
                    B[B.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL",
                    B[B.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL",
                    B[B.LAO = 34] = "LAO",
                    B[B.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN",
                    B[B.MALAYALAM = 36] = "MALAYALAM",
                    B[B.MONGOLIAN = 37] = "MONGOLIAN",
                    B[B.MYANMAR = 38] = "MYANMAR",
                    B[B.ORIYA = 39] = "ORIYA",
                    B[B.PERSIAN = 40] = "PERSIAN",
                    B[B.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL",
                    B[B.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL",
                    B[B.TAMIL = 43] = "TAMIL",
                    B[B.TELUGU = 44] = "TELUGU",
                    B[B.THAI = 45] = "THAI",
                    B[B.TIBETAN = 46] = "TIBETAN",
                    B[B.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL",
                    B[B.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL",
                    B[B.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN",
                    B[B.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN";
                var qt, jt = {
                        name: "list-style-type",
                        initialValue: "none",
                        prefix: !(B[B.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "disc":
                                    return E.DISC;
                                case "circle":
                                    return E.CIRCLE;
                                case "square":
                                    return E.SQUARE;
                                case "decimal":
                                    return E.DECIMAL;
                                case "cjk-decimal":
                                    return E.CJK_DECIMAL;
                                case "decimal-leading-zero":
                                    return E.DECIMAL_LEADING_ZERO;
                                case "lower-roman":
                                    return E.LOWER_ROMAN;
                                case "upper-roman":
                                    return E.UPPER_ROMAN;
                                case "lower-greek":
                                    return E.LOWER_GREEK;
                                case "lower-alpha":
                                    return E.LOWER_ALPHA;
                                case "upper-alpha":
                                    return E.UPPER_ALPHA;
                                case "arabic-indic":
                                    return E.ARABIC_INDIC;
                                case "armenian":
                                    return E.ARMENIAN;
                                case "bengali":
                                    return E.BENGALI;
                                case "cambodian":
                                    return E.CAMBODIAN;
                                case "cjk-earthly-branch":
                                    return E.CJK_EARTHLY_BRANCH;
                                case "cjk-heavenly-stem":
                                    return E.CJK_HEAVENLY_STEM;
                                case "cjk-ideographic":
                                    return E.CJK_IDEOGRAPHIC;
                                case "devanagari":
                                    return E.DEVANAGARI;
                                case "ethiopic-numeric":
                                    return E.ETHIOPIC_NUMERIC;
                                case "georgian":
                                    return E.GEORGIAN;
                                case "gujarati":
                                    return E.GUJARATI;
                                case "gurmukhi":
                                    return E.GURMUKHI;
                                case "hebrew":
                                    return E.HEBREW;
                                case "hiragana":
                                    return E.HIRAGANA;
                                case "hiragana-iroha":
                                    return E.HIRAGANA_IROHA;
                                case "japanese-formal":
                                    return E.JAPANESE_FORMAL;
                                case "japanese-informal":
                                    return E.JAPANESE_INFORMAL;
                                case "kannada":
                                    return E.KANNADA;
                                case "katakana":
                                    return E.KATAKANA;
                                case "katakana-iroha":
                                    return E.KATAKANA_IROHA;
                                case "khmer":
                                    return E.KHMER;
                                case "korean-hangul-formal":
                                    return E.KOREAN_HANGUL_FORMAL;
                                case "korean-hanja-formal":
                                    return E.KOREAN_HANJA_FORMAL;
                                case "korean-hanja-informal":
                                    return E.KOREAN_HANJA_INFORMAL;
                                case "lao":
                                    return E.LAO;
                                case "lower-armenian":
                                    return E.LOWER_ARMENIAN;
                                case "malayalam":
                                    return E.MALAYALAM;
                                case "mongolian":
                                    return E.MONGOLIAN;
                                case "myanmar":
                                    return E.MYANMAR;
                                case "oriya":
                                    return E.ORIYA;
                                case "persian":
                                    return E.PERSIAN;
                                case "simp-chinese-formal":
                                    return E.SIMP_CHINESE_FORMAL;
                                case "simp-chinese-informal":
                                    return E.SIMP_CHINESE_INFORMAL;
                                case "tamil":
                                    return E.TAMIL;
                                case "telugu":
                                    return E.TELUGU;
                                case "thai":
                                    return E.THAI;
                                case "tibetan":
                                    return E.TIBETAN;
                                case "trad-chinese-formal":
                                    return E.TRAD_CHINESE_FORMAL;
                                case "trad-chinese-informal":
                                    return E.TRAD_CHINESE_INFORMAL;
                                case "upper-armenian":
                                    return E.UPPER_ARMENIAN;
                                case "disclosure-open":
                                    return E.DISCLOSURE_OPEN;
                                case "disclosure-closed":
                                    return E.DISCLOSURE_CLOSED;
                                default:
                                    return E.NONE
                            }
                        }
                    },
                    Zt = Yt("top"),
                    $t = Yt("right"),
                    Ar = Yt("bottom"),
                    er = Yt("left");

                function tr(A) {
                    return {
                        name: "padding-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "length-percentage"
                    }
                }

                var rr, nr, Br, sr, or, ir, ar, cr = {
                        name: "overflow",
                        initialValue: "visible",
                        prefix: !((g = qt = {
                            VISIBLE: 0,
                            0: "VISIBLE",
                            HIDDEN: 1,
                            1: "HIDDEN",
                            SCROLL: 2,
                            2: "SCROLL"
                        })[g.AUTO = 3] = "AUTO"),
                        type: o.LIST,
                        parse: function (A) {
                            return A.filter(U).map(function (A) {
                                switch (A.value) {
                                    case "hidden":
                                        return qt.HIDDEN;
                                    case "scroll":
                                        return qt.SCROLL;
                                    case "auto":
                                        return qt.AUTO;
                                    default:
                                        return qt.VISIBLE
                                }
                            })
                        }
                    },
                    Qr = {
                        name: "overflow-wrap",
                        initialValue: (rr = {}).NORMAL = "normal",
                        prefix: !(rr.BREAK_WORD = "break-word"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            return "break-word" !== A ? rr.NORMAL : rr.BREAK_WORD
                        }
                    },
                    ur = tr("top"),
                    lr = tr("right"),
                    gr = tr("bottom"),
                    wr = tr("left"),
                    k = nr = {
                        LEFT: 0,
                        0: "LEFT",
                        CENTER: 1,
                        1: "CENTER"
                    },
                    Ur = {
                        name: "text-align",
                        initialValue: "left",
                        prefix: !(k[k.RIGHT = 2] = "RIGHT"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "right":
                                    return nr.RIGHT;
                                case "center":
                                case "justify":
                                    return nr.CENTER;
                                default:
                                    return nr.LEFT
                            }
                        }
                    },
                    c = Br = {
                        STATIC: 0,
                        0: "STATIC",
                        RELATIVE: 1,
                        1: "RELATIVE",
                        ABSOLUTE: 2,
                        2: "ABSOLUTE",
                        FIXED: 3,
                        3: "FIXED"
                    },
                    Cr = {
                        name: "position",
                        initialValue: "static",
                        prefix: !(c[c.STICKY = 4] = "STICKY"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "relative":
                                    return Br.RELATIVE;
                                case "absolute":
                                    return Br.ABSOLUTE;
                                case "fixed":
                                    return Br.FIXED;
                                case "sticky":
                                    return Br.STICKY
                            }
                            return Br.STATIC
                        }
                    },
                    Er = {
                        name: "text-shadow",
                        initialValue: "none",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            return 1 === A.length && ae(A[0], "none") ? [] : ue(A).map(function (A) {
                                for (var e = {
                                        color: ve.TRANSPARENT,
                                        offsetX: l,
                                        offsetY: l,
                                        blur: l
                                    },
                                         t = 0, r = 0; r < A.length; r++) {
                                    var n = A[r];
                                    le(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : e.blur = n, t++) : e.color = Ne(n)
                                }
                                return e
                            })
                        }
                    },
                    B = sr = {
                        NONE: 0,
                        0: "NONE",
                        LOWERCASE: 1,
                        1: "LOWERCASE",
                        UPPERCASE: 2,
                        2: "UPPERCASE"
                    },
                    hr = {
                        name: "text-transform",
                        initialValue: "none",
                        prefix: !(B[B.CAPITALIZE = 3] = "CAPITALIZE"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "uppercase":
                                    return sr.UPPERCASE;
                                case "lowercase":
                                    return sr.LOWERCASE;
                                case "capitalize":
                                    return sr.CAPITALIZE
                            }
                            return sr.NONE
                        }
                    },
                    dr = {
                        name: "transform",
                        initialValue: "none",
                        prefix: !0,
                        type: o.VALUE,
                        parse: function (A) {
                            if (A.type === w.IDENT_TOKEN && "none" === A.value) return null;
                            if (A.type !== w.FUNCTION) return null;
                            var e = Fr[A.name];
                            if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
                            return e(A.values)
                        }
                    },
                    Fr = {
                        matrix: function (A) {
                            A = A.filter(function (A) {
                                return A.type === w.NUMBER_TOKEN
                            }).map(function (A) {
                                return A.number
                            });
                            return 6 === A.length ? A : null
                        },
                        matrix3d: function (A) {
                            var A = A.filter(function (A) {
                                    return A.type === w.NUMBER_TOKEN
                                }).map(function (A) {
                                    return A.number
                                }),
                                e = A[0],
                                t = A[1],
                                r = (A[2], A[3], A[4]),
                                n = A[5],
                                B = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]),
                                s = A[13];
                            return A[14],
                                A[15],
                                16 === A.length ? [e, t, r, n, B, s] : null
                        }
                    },
                    g = {
                        type: w.PERCENTAGE_TOKEN,
                        number: 50,
                        flags: 4
                    },
                    Hr = [g, g],
                    fr = {
                        name: "transform-origin",
                        initialValue: "50% 50%",
                        prefix: !0,
                        type: o.LIST,
                        parse: function (A) {
                            A = A.filter(C);
                            return 2 !== A.length ? Hr : [A[0], A[1]]
                        }
                    },
                    k = or = {
                        VISIBLE: 0,
                        0: "VISIBLE",
                        HIDDEN: 1,
                        1: "HIDDEN"
                    },
                    pr = {
                        name: "visible",
                        initialValue: "none",
                        prefix: !(k[k.COLLAPSE = 2] = "COLLAPSE"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "hidden":
                                    return or.HIDDEN;
                                case "collapse":
                                    return or.COLLAPSE;
                                default:
                                    return or.VISIBLE
                            }
                        }
                    },
                    c = ir = {
                        NORMAL: "normal",
                        BREAK_ALL: "break-all"
                    },
                    Nr = {
                        name: "word-break",
                        initialValue: "normal",
                        prefix: !(c.KEEP_ALL = "keep-all"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "break-all":
                                    return ir.BREAK_ALL;
                                case "keep-all":
                                    return ir.KEEP_ALL;
                                default:
                                    return ir.NORMAL
                            }
                        }
                    },
                    Kr = {
                        name: "z-index",
                        initialValue: "auto",
                        prefix: !1,
                        type: o.VALUE,
                        parse: function (A) {
                            if (A.type === w.IDENT_TOKEN) return {
                                auto: !0,
                                order: 0
                            };
                            if (oe(A)) return {
                                auto: !1,
                                order: A.number
                            };
                            throw new Error("Invalid z-index number parsed")
                        }
                    },
                    Ir = {
                        name: "opacity",
                        initialValue: "1",
                        type: o.VALUE,
                        prefix: !1,
                        parse: function (A) {
                            return oe(A) ? A.number : 1
                        }
                    },
                    mr = {
                        name: "text-decoration-color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "color"
                    },
                    Tr = {
                        name: "text-decoration-line",
                        initialValue: "none",
                        prefix: !1,
                        type: o.LIST,
                        parse: function (A) {
                            return A.filter(U).map(function (A) {
                                switch (A.value) {
                                    case "underline":
                                        return 1;
                                    case "overline":
                                        return 2;
                                    case "line-through":
                                        return 3;
                                    case "none":
                                        return 4
                                }
                                return 0
                            }).filter(function (A) {
                                return 0 !== A
                            })
                        }
                    },
                    Rr = {
                        name: "font-family",
                        initialValue: "",
                        prefix: !1,
                        type: o.LIST,
                        parse: function (A) {
                            var e = [],
                                t = [];
                            return A.forEach(function (A) {
                                switch (A.type) {
                                    case w.IDENT_TOKEN:
                                    case w.STRING_TOKEN:
                                        e.push(A.value);
                                        break;
                                    case w.NUMBER_TOKEN:
                                        e.push(A.number.toString());
                                        break;
                                    case w.COMMA_TOKEN:
                                        t.push(e.join(" ")),
                                            e.length = 0
                                }
                            }),
                            e.length && t.push(e.join(" ")),
                                t.map(function (A) {
                                    return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                                })
                        }
                    },
                    vr = {
                        name: "font-size",
                        initialValue: "0",
                        prefix: !1,
                        type: o.TYPE_VALUE,
                        format: "length"
                    },
                    br = {
                        name: "font-weight",
                        initialValue: "normal",
                        type: o.VALUE,
                        prefix: !1,
                        parse: function (A) {
                            return oe(A) ? A.number : !U(A) || "bold" !== A.value ? 400 : 700
                        }
                    },
                    Lr = {
                        name: "font-variant",
                        initialValue: "none",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            return A.filter(U).map(function (A) {
                                return A.value
                            })
                        }
                    };

                function F(A, e) {
                    return 0 != (A & e)
                }

                function yr(A, e, t) {
                    if (!A) return "";
                    e = A[Math.min(e, A.length - 1)];
                    return e ? t ? e.open : e.close : ""
                }

                var Or, Sr = {
                        name: "font-style",
                        initialValue: "normal",
                        prefix: !((Or = ar = {
                            NORMAL: "normal",
                            ITALIC: "italic"
                        }).OBLIQUE = "oblique"),
                        type: o.IDENT_VALUE,
                        parse: function (A) {
                            switch (A) {
                                case "oblique":
                                    return ar.OBLIQUE;
                                case "italic":
                                    return ar.ITALIC;
                                default:
                                    return ar.NORMAL
                            }
                        }
                    },
                    Dr = {
                        name: "content",
                        initialValue: "none",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            if (0 === A.length) return [];
                            var e = A[0];
                            return e.type === w.IDENT_TOKEN && "none" === e.value ? [] : A
                        }
                    },
                    Mr = {
                        name: "counter-increment",
                        initialValue: "none",
                        prefix: !0,
                        type: o.LIST,
                        parse: function (A) {
                            if (0 === A.length) return null;
                            var e = A[0];
                            if (e.type === w.IDENT_TOKEN && "none" === e.value) return null;
                            for (var t = [], r = A.filter(ce), n = 0; n < r.length; n++) {
                                var B = r[n],
                                    s = r[n + 1];
                                B.type === w.IDENT_TOKEN && (s = s && oe(s) ? s.number : 1, t.push({
                                    counter: B.value,
                                    increment: s
                                }))
                            }
                            return t
                        }
                    },
                    _r = {
                        name: "counter-reset",
                        initialValue: "none",
                        prefix: !0,
                        type: o.LIST,
                        parse: function (A) {
                            if (0 === A.length) return [];
                            for (var e = [], t = A.filter(ce), r = 0; r < t.length; r++) {
                                var n = t[r],
                                    B = t[r + 1];
                                U(n) && "none" !== n.value && (B = B && oe(B) ? B.number : 0, e.push({
                                    counter: n.value,
                                    reset: B
                                }))
                            }
                            return e
                        }
                    },
                    Pr = {
                        name: "quotes",
                        initialValue: "none",
                        prefix: !0,
                        type: o.LIST,
                        parse: function (A) {
                            if (0 === A.length) return null;
                            var e = A[0];
                            if (e.type === w.IDENT_TOKEN && "none" === e.value) return null;
                            var t = [],
                                r = A.filter(ie);
                            if (r.length % 2 != 0) return null;
                            for (var n = 0; n < r.length; n += 2) {
                                var B = r[n].value,
                                    s = r[n + 1].value;
                                t.push({
                                    open: B,
                                    close: s
                                })
                            }
                            return t
                        }
                    },
                    zr = {
                        name: "box-shadow",
                        initialValue: "none",
                        type: o.LIST,
                        prefix: !1,
                        parse: function (A) {
                            return 1 === A.length && ae(A[0], "none") ? [] : ue(A).map(function (A) {
                                for (var e = {
                                        color: 255,
                                        offsetX: l,
                                        offsetY: l,
                                        blur: l,
                                        spread: l,
                                        inset: !1
                                    },
                                         t = 0, r = 0; r < A.length; r++) {
                                    var n = A[r];
                                    ae(n, "inset") ? e.inset = !0 : le(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : 2 === t ? e.blur = n : e.spread = n, t++) : e.color = Ne(n)
                                }
                                return e
                            })
                        }
                    },
                    xr = (Vr.prototype.isVisible = function () {
                        return 0 < this.display && 0 < this.opacity && this.visibility === or.VISIBLE
                    },
                        Vr.prototype.isTransparent = function () {
                            return Ee(this.backgroundColor)
                        },
                        Vr.prototype.isTransformed = function () {
                            return null !== this.transform
                        },
                        Vr.prototype.isPositioned = function () {
                            return this.position !== Br.STATIC
                        },
                        Vr.prototype.isPositionedWithZIndex = function () {
                            return this.isPositioned() && !this.zIndex.auto
                        },
                        Vr.prototype.isFloating = function () {
                            return this.float !== Tt.NONE
                        },
                        Vr.prototype.isInlineLevel = function () {
                            return F(this.display, 4) || F(this.display, 33554432) || F(this.display, 268435456) || F(this.display, 536870912) || F(this.display, 67108864) || F(this.display, 134217728)
                        },
                        Vr);

                function Vr(A) {
                    this.backgroundClip = H(_e, A.backgroundClip),
                        this.backgroundColor = H(Pe, A.backgroundColor),
                        this.backgroundImage = H(at, A.backgroundImage),
                        this.backgroundOrigin = H(ct, A.backgroundOrigin),
                        this.backgroundPosition = H(Qt, A.backgroundPosition),
                        this.backgroundRepeat = H(ut, A.backgroundRepeat),
                        this.backgroundSize = H(Ct, A.backgroundSize),
                        this.borderTopColor = H(ht, A.borderTopColor),
                        this.borderRightColor = H(dt, A.borderRightColor),
                        this.borderBottomColor = H(Ft, A.borderBottomColor),
                        this.borderLeftColor = H(Ht, A.borderLeftColor),
                        this.borderTopLeftRadius = H(ft, A.borderTopLeftRadius),
                        this.borderTopRightRadius = H(pt, A.borderTopRightRadius),
                        this.borderBottomRightRadius = H(Nt, A.borderBottomRightRadius),
                        this.borderBottomLeftRadius = H(Kt, A.borderBottomLeftRadius),
                        this.borderTopStyle = H(bt, A.borderTopStyle),
                        this.borderRightStyle = H(Lt, A.borderRightStyle),
                        this.borderBottomStyle = H(yt, A.borderBottomStyle),
                        this.borderLeftStyle = H(Ot, A.borderLeftStyle),
                        this.borderTopWidth = H(St, A.borderTopWidth),
                        this.borderRightWidth = H(Dt, A.borderRightWidth),
                        this.borderBottomWidth = H(Mt, A.borderBottomWidth),
                        this.borderLeftWidth = H(_t, A.borderLeftWidth),
                        this.boxShadow = H(zr, A.boxShadow),
                        this.color = H(Pt, A.color),
                        this.display = H(zt, A.display),
                        this.float = H(Vt, A.cssFloat),
                        this.fontFamily = H(Rr, A.fontFamily),
                        this.fontSize = H(vr, A.fontSize),
                        this.fontStyle = H(Sr, A.fontStyle),
                        this.fontVariant = H(Lr, A.fontVariant),
                        this.fontWeight = H(br, A.fontWeight),
                        this.letterSpacing = H(Xt, A.letterSpacing),
                        this.lineBreak = H(Jt, A.lineBreak),
                        this.lineHeight = H(Gt, A.lineHeight),
                        this.listStyleImage = H(kt, A.listStyleImage),
                        this.listStylePosition = H(Wt, A.listStylePosition),
                        this.listStyleType = H(jt, A.listStyleType),
                        this.marginTop = H(Zt, A.marginTop),
                        this.marginRight = H($t, A.marginRight),
                        this.marginBottom = H(Ar, A.marginBottom),
                        this.marginLeft = H(er, A.marginLeft),
                        this.opacity = H(Ir, A.opacity);
                    var e = H(cr, A.overflow);
                    this.overflowX = e[0],
                        this.overflowY = e[1 < e.length ? 1 : 0],
                        this.overflowWrap = H(Qr, A.overflowWrap),
                        this.paddingTop = H(ur, A.paddingTop),
                        this.paddingRight = H(lr, A.paddingRight),
                        this.paddingBottom = H(gr, A.paddingBottom),
                        this.paddingLeft = H(wr, A.paddingLeft),
                        this.position = H(Cr, A.position),
                        this.textAlign = H(Ur, A.textAlign),
                        this.textDecorationColor = H(mr, A.textDecorationColor || A.color),
                        this.textDecorationLine = H(Tr, A.textDecorationLine),
                        this.textShadow = H(Er, A.textShadow),
                        this.textTransform = H(hr, A.textTransform),
                        this.transform = H(dr, A.transform),
                        this.transformOrigin = H(fr, A.transformOrigin),
                        this.visibility = H(pr, A.visibility),
                        this.wordBreak = H(Nr, A.wordBreak),
                        this.zIndex = H(Kr, A.zIndex)
                }

                function Xr(A) {
                    this.content = H(Dr, A.content),
                        this.quotes = H(Pr, A.quotes)
                }

                function Jr(A) {
                    this.counterIncrement = H(Mr, A.counterIncrement),
                        this.counterReset = H(_r, A.counterReset)
                }

                function Gr(A, e) {
                    this.text = A,
                        this.bounds = e
                }

                function kr(A, e) {
                    e = {
                        lineBreak: e.lineBreak,
                        wordBreak: e.overflowWrap === rr.BREAK_WORD ? "break-word" : e.wordBreak
                    },
                        c = x(A),
                        r = c,
                    void 0 === (n = (e = (e = e) || {
                        lineBreak: "normal",
                        wordBreak: "normal"
                    }).lineBreak) && (n = "strict"),
                        B = [],
                        s = [],
                        o = [],
                        r.forEach(function (A, e) {
                            var t = dA.get(A);
                            if (50 < t ? (o.push(!0), t -= 50) : o.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(n) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return s.push(e),
                                B.push(16);
                            if (4 !== t && 11 !== t) return s.push(e),
                                31 === t ? B.push("strict" === n ? nA : wA) : t === hA || 29 === t ? B.push(cA) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(wA) : B.push(cA) : void B.push(t);
                            if (0 === e) return s.push(e),
                                B.push(cA);
                            A = B[e - 1];
                            return -1 === NA.indexOf(A) ? (s.push(s[e - 1]), B.push(A)) : (s.push(e), B.push(cA))
                        }),
                        i = (A = [s, B, o])[1],
                        a = A[2],
                        A = [A[0], i = "break-all" !== e.wordBreak && "break-word" !== e.wordBreak ? i : i.map(function (A) {
                            return -1 !== [h, cA, hA].indexOf(A) ? wA : A
                        }), "keep-all" === e.wordBreak ? a.map(function (A, e) {
                            return A && 19968 <= r[e] && r[e] <= 40959
                        }) : void 0],
                        Q = A[0],
                        u = A[1],
                        l = A[2],
                        g = c.length,
                        U = w = 0;
                    for (var t, r, n, B, s, o, i, a, c, Q, u, l, g, w, U, C = {
                            next: function () {
                                if (g <= U) return {
                                    done: !0,
                                    value: null
                                };
                                for (var A = d; U < g && (A = function (A, e, t, r, n) {
                                    if (0 === t[r]) return d;
                                    if (r -= 1, Array.isArray(n) && !0 === n[r]) return d;
                                    var B, n = r - 1,
                                        s = 1 + r,
                                        o = e[r],
                                        i = 0 <= n ? e[n] : 0,
                                        a = e[s];
                                    if (2 === o && 3 === a) return d;
                                    if (-1 !== HA.indexOf(o)) return "!";
                                    if (-1 !== HA.indexOf(a)) return d;
                                    if (-1 !== fA.indexOf(a)) return d;
                                    if (8 === q(r, e)) return "÷";
                                    if (11 === dA.get(A[r]) && (a === wA || a === QA || a === uA)) return d;
                                    if (7 === o || 7 === a) return d;
                                    if (9 === o) return d;
                                    if (-1 === [j, Z, $].indexOf(o) && 9 === a) return d;
                                    if (-1 !== [AA, eA, tA, sA, aA].indexOf(a)) return d;
                                    if (q(r, e) === BA) return d;
                                    if (Y(23, BA, r, e)) return d;
                                    if (Y([AA, eA], nA, r, e)) return d;
                                    if (Y(12, 12, r, e)) return d;
                                    if (o === j) return "÷";
                                    if (23 === o || 23 === a) return d;
                                    if (16 === a || 16 === o) return "÷";
                                    if (-1 !== [Z, $, nA].indexOf(a) || 14 === o) return d;
                                    if (36 === i && -1 !== IA.indexOf(o)) return d;
                                    if (o === aA && 36 === a) return d;
                                    if (a === rA && -1 !== FA.concat(rA, tA, h, wA, QA, uA).indexOf(o)) return d;
                                    if (-1 !== FA.indexOf(a) && o === h || -1 !== FA.indexOf(o) && a === h) return d;
                                    if (o === iA && -1 !== [wA, QA, uA].indexOf(a) || -1 !== [wA, QA, uA].indexOf(o) && a === oA) return d;
                                    if (-1 !== FA.indexOf(o) && -1 !== pA.indexOf(a) || -1 !== pA.indexOf(o) && -1 !== FA.indexOf(a)) return d;
                                    if (-1 !== [iA, oA].indexOf(o) && (a === h || -1 !== [BA, $].indexOf(a) && e[1 + s] === h) || -1 !== [BA, $].indexOf(o) && a === h || o === h && -1 !== [h, aA, sA].indexOf(a)) return d;
                                    if (-1 !== [h, aA, sA, AA, eA].indexOf(a)) for (var c = r; 0 <= c;) {
                                        if ((B = e[c]) === h) return d;
                                        if (-1 === [aA, sA].indexOf(B)) break;
                                        c--
                                    }
                                    if (-1 !== [iA, oA].indexOf(a)) for (c = -1 !== [AA, eA].indexOf(o) ? n : r; 0 <= c;) {
                                        if ((B = e[c]) === h) return d;
                                        if (-1 === [aA, sA].indexOf(B)) break;
                                        c--
                                    }
                                    if (UA === o && -1 !== [UA, CA, lA, gA].indexOf(a) || -1 !== [CA, lA].indexOf(o) && -1 !== [CA, EA].indexOf(a) || -1 !== [EA, gA].indexOf(o) && a === EA) return d;
                                    if (-1 !== KA.indexOf(o) && -1 !== [rA, oA].indexOf(a) || -1 !== KA.indexOf(a) && o === iA) return d;
                                    if (-1 !== FA.indexOf(o) && -1 !== FA.indexOf(a)) return d;
                                    if (o === sA && -1 !== FA.indexOf(a)) return d;
                                    if (-1 !== FA.concat(h).indexOf(o) && a === BA || -1 !== FA.concat(h).indexOf(a) && o === eA) return d;
                                    if (41 === o && 41 === a) {
                                        for (var Q = t[r], u = 1; 0 < Q && 41 === e[--Q];) u++;
                                        if (u % 2 != 0) return d
                                    }
                                    return o === QA && a === uA ? d : "÷"
                                }(c, u, Q, ++U, l)) === d;) ;
                                if (A === d && U !== g) return {
                                    done: !0,
                                    value: null
                                };
                                var e = new mA(c, A, w, U);
                                return w = U,
                                    {
                                        value: e,
                                        done: !1
                                    }
                            }
                        },
                             E = []; !(t = C.next()).done;) t.value && E.push(t.value.slice());
                    return E
                }

                function Wr(A, e) {
                    switch (e) {
                        case sr.LOWERCASE:
                            return A.toLowerCase();
                        case sr.CAPITALIZE:
                            return A.replace(Zr, $r);
                        case sr.UPPERCASE:
                            return A.toUpperCase();
                        default:
                            return A
                    }
                }

                var Yr, H = function (A, e) {
                        var t = new ne,
                            e = null != e ? e.toString() : A.initialValue,
                            r = (t.write(e), new Be(t.read()));
                        switch (A.type) {
                            case o.IDENT_VALUE:
                                var n = r.parseComponentValue();
                                return A.parse(U(n) ? n.value : A.initialValue);
                            case o.VALUE:
                                return A.parse(r.parseComponentValue());
                            case o.LIST:
                                return A.parse(r.parseComponentValues());
                            case o.TOKEN_VALUE:
                                return r.parseComponentValue();
                            case o.TYPE_VALUE:
                                switch (A.format) {
                                    case "angle":
                                        return Fe(r.parseComponentValue());
                                    case "color":
                                        return Ne(r.parseComponentValue());
                                    case "image":
                                        return Je(r.parseComponentValue());
                                    case "length":
                                        var B = r.parseComponentValue();
                                        return le(B) ? B : l;
                                    case "length-percentage":
                                        B = r.parseComponentValue();
                                        return C(B) ? B : l
                                }
                        }
                        throw new Error("Attempting to parse unsupported css format type " + A.format)
                    },
                    qr = function (A) {
                        this.styles = new xr(window.getComputedStyle(A, null)),
                            this.textNodes = [],
                            this.elements = [],
                        null !== this.styles.transform && Vn(A) && (A.style.transform = "none"),
                            this.bounds = z(A),
                            this.flags = 0
                    },
                    jr = function (A, e) {
                        var t, r, n, B, s;
                        this.text = Wr(A.data, e.textTransform),
                            this.textBounds = (t = this.text, n = A, t = t, t = 0 !== (A = r = e).letterSpacing ? x(t).map(function (A) {
                                return Q(A)
                            }) : kr(t, A), B = [], s = 0, t.forEach(function (A) {
                                var e;
                                r.textDecorationLine.length || 0 < A.trim().length ? a.SUPPORT_RANGE_BOUNDS ? B.push(new Gr(A,
                                    function (A, e, t) {
                                        var r = A.ownerDocument;
                                        if (!r) throw new Error("Node has no owner document");
                                        r = r.createRange();
                                        return r.setStart(A, e),
                                            r.setEnd(A, e + t),
                                            _.fromClientRect(r.getBoundingClientRect())
                                    }(n, s, A.length))) : (e = n.splitText(A.length), B.push(new Gr(A,
                                    function (A) {
                                        var e = A.ownerDocument;
                                        if (e) {
                                            var e = e.createElement("html2canvaswrapper"),
                                                t = (e.appendChild(A.cloneNode(!0)), A.parentNode);
                                            if (t) return t.replaceChild(e, A),
                                                A = z(e),
                                            e.firstChild && t.replaceChild(e.firstChild, e),
                                                A
                                        }
                                        return new _(0, 0, 0, 0)
                                    }(n))), n = e) : a.SUPPORT_RANGE_BOUNDS || (n = n.splitText(A.length)),
                                    s += A.length
                            }), B)
                    },
                    Zr = /(^|\s|:|-|\(|\))([a-z])/g,
                    $r = function (A, e, t) {
                        return 0 < A.length ? e + t.toUpperCase() : A
                    },
                    An = (T(en, Yr = qr), en);

                function en(A) {
                    var e = Yr.call(this, A) || this;
                    return e.src = A.currentSrc || A.src,
                        e.intrinsicWidth = A.naturalWidth,
                        e.intrinsicHeight = A.naturalHeight,
                        ze.getInstance().addImage(e.src),
                        e
                }

                T(nn, tn = qr);
                var tn, rn = nn;

                function nn(A) {
                    var e = tn.call(this, A) || this;
                    return e.canvas = A,
                        e.intrinsicWidth = A.width,
                        e.intrinsicHeight = A.height,
                        e
                }

                T(on, Bn = qr);
                var Bn, sn = on;

                function on(A) {
                    var e = Bn.call(this, A) || this,
                        t = new XMLSerializer;
                    return e.svg = "data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)),
                        e.intrinsicWidth = A.width.baseVal.value,
                        e.intrinsicHeight = A.height.baseVal.value,
                        ze.getInstance().addImage(e.svg),
                        e
                }

                T(Qn, an = qr);
                var an, cn = Qn;

                function Qn(A) {
                    var e = an.call(this, A) || this;
                    return e.value = A.value,
                        e
                }

                T(gn, un = qr);
                var un, ln = gn;

                function gn(A) {
                    var e = un.call(this, A) || this;
                    return e.start = A.start,
                        e.reversed = "boolean" == typeof A.reversed && !0 === A.reversed,
                        e
                }

                var wn, Un = [{
                        type: w.DIMENSION_TOKEN,
                        flags: 0,
                        unit: "px",
                        number: 3
                    }],
                    Cn = [{
                        type: w.PERCENTAGE_TOKEN,
                        flags: 0,
                        number: 50
                    }],
                    En = "checkbox",
                    hn = "radio",
                    dn = 707406591,
                    Fn = (T(Hn, wn = qr), Hn);

                function Hn(A) {
                    var e, t = wn.call(this, A) || this;
                    switch (t.type = A.type.toLowerCase(), t.checked = A.checked, t.value = 0 === (e = "password" === (A = A).type ? new Array(A.value.length + 1).join("•") : A.value).length ? A.placeholder || "" : e, t.type !== En && t.type !== hn || (t.styles.backgroundColor = 3739148031, t.styles.borderTopColor = t.styles.borderRightColor = t.styles.borderBottomColor = t.styles.borderLeftColor = 2779096575, t.styles.borderTopWidth = t.styles.borderRightWidth = t.styles.borderBottomWidth = t.styles.borderLeftWidth = 1, t.styles.borderTopStyle = t.styles.borderRightStyle = t.styles.borderBottomStyle = t.styles.borderLeftStyle = Ut.SOLID, t.styles.backgroundClip = [Te.BORDER_BOX], t.styles.backgroundOrigin = [0], t.bounds = (A = t.bounds).width > A.height ? new _(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new _(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A), t.type) {
                        case En:
                            t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = Un;
                            break;
                        case hn:
                            t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = Cn
                    }
                    return t
                }

                T(Nn, fn = qr);
                var fn, pn = Nn;

                function Nn(A) {
                    var e = fn.call(this, A) || this,
                        A = A.options[A.selectedIndex || 0];
                    return e.value = A && A.text || "",
                        e
                }

                T(mn, Kn = qr);
                var Kn, In = mn;

                function mn(A) {
                    var e = Kn.call(this, A) || this;
                    return e.value = A.value,
                        e
                }

                function Tn(A) {
                    return Ne(Be.create(A).parseComponentValue())
                }

                T(bn, Rn = qr);
                var Rn, vn = bn;

                function bn(A) {
                    var e, t, r = Rn.call(this, A) || this;
                    r.src = A.src,
                        r.width = parseInt(A.width, 10) || 0,
                        r.height = parseInt(A.height, 10) || 0,
                        r.backgroundColor = r.styles.backgroundColor;
                    try {
                        A.contentWindow && A.contentWindow.document && A.contentWindow.document.documentElement && (r.tree = Mn(A.contentWindow.document.documentElement), e = A.contentWindow.document.documentElement ? Tn(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor) : ve.TRANSPARENT, t = A.contentWindow.document.body ? Tn(getComputedStyle(A.contentWindow.document.body).backgroundColor) : ve.TRANSPARENT, r.backgroundColor = Ee(e) ? Ee(t) ? r.styles.backgroundColor : t : e)
                    } catch (A) {
                    }
                    return r
                }

                function Ln(A) {
                    return "STYLE" === A.tagName
                }

                function yn(A, e, t) {
                    for (var r = A.firstChild; r; r = B) {
                        var n, B = r.nextSibling;
                        zn(r) && 0 < r.data.trim().length ? e.textNodes.push(new jr(r, e.styles)) : xn(r) && (n = Dn(r)).styles.isVisible() && (_n(r, n, t) ? n.flags |= 4 : Pn(n.styles) && (n.flags |= 2), -1 !== Sn.indexOf(r.tagName) && (n.flags |= 8), e.elements.push(n), Zn(r) || Wn(r) || $n(r) || yn(r, n, t))
                    }
                }

                function On(A) {
                    return "BODY" === A.tagName
                }

                var Sn = ["OL", "UL", "MENU"],
                    Dn = function (A) {
                        return new (qn(A) ? An : Yn(A) ? rn : Wn(A) ? sn : Jn(A) ? cn : Gn(A) ? ln : kn(A) ? Fn : $n(A) ? pn : Zn(A) ? In : jn(A) ? vn : qr)(A)
                    },
                    Mn = function (A) {
                        var e = Dn(A);
                        return e.flags |= 4,
                            yn(A, e, e),
                            e
                    },
                    _n = function (A, e, t) {
                        return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || On(A) && t.styles.isTransparent()
                    },
                    Pn = function (A) {
                        return A.isPositioned() || A.isFloating()
                    },
                    zn = function (A) {
                        return A.nodeType === Node.TEXT_NODE
                    },
                    xn = function (A) {
                        return A.nodeType === Node.ELEMENT_NODE
                    },
                    Vn = function (A) {
                        return xn(A) && void 0 !== A.style && !Xn(A)
                    },
                    Xn = function (A) {
                        return "object" == cs(A.className)
                    },
                    Jn = function (A) {
                        return "LI" === A.tagName
                    },
                    Gn = function (A) {
                        return "OL" === A.tagName
                    },
                    kn = function (A) {
                        return "INPUT" === A.tagName
                    },
                    Wn = function (A) {
                        return "svg" === A.tagName
                    },
                    Yn = function (A) {
                        return "CANVAS" === A.tagName
                    },
                    qn = function (A) {
                        return "IMG" === A.tagName
                    },
                    jn = function (A) {
                        return "IFRAME" === A.tagName
                    },
                    Zn = function (A) {
                        return "TEXTAREA" === A.tagName
                    },
                    $n = function (A) {
                        return "SELECT" === A.tagName
                    },
                    AB = (eB.prototype.getCounterValue = function (A) {
                        A = this.counters[A];
                        return A && A.length ? A[A.length - 1] : 1
                    },
                        eB.prototype.getCounterValues = function (A) {
                            return this.counters[A] || []
                        },
                        eB.prototype.pop = function (A) {
                            var e = this;
                            A.forEach(function (A) {
                                return e.counters[A].pop()
                            })
                        },
                        eB.prototype.parse = function (A) {
                            var t = this,
                                e = A.counterIncrement,
                                A = A.counterReset,
                                r = !0,
                                n = (null !== e && e.forEach(function (A) {
                                    var e = t.counters[A.counter];
                                    e && 0 !== A.increment && (r = !1, e[Math.max(0, e.length - 1)] += A.increment)
                                }), []);
                            return r && A.forEach(function (A) {
                                var e = t.counters[A.counter];
                                n.push(A.counter),
                                    (e = e || (t.counters[A.counter] = [])).push(A.reset)
                            }),
                                n
                        },
                        eB);

                function eB() {
                    this.counters = {}
                }

                function tB(r, A, e, n, t, B) {
                    return r < A || e < r ? uB(r, t, 0 < B.length) : n.integers.reduce(function (A, e, t) {
                            for (; e <= r;) r -= e,
                                A += n.values[t];
                            return A
                        },
                        "") + B
                }

                function rB(A, e, t, r) {
                    for (var n = ""; t || A--, n = r(A) + n, e <= (A /= e) * e;) ;
                    return n
                }

                function f(A, e, t, r, n) {
                    var B = t - e + 1;
                    return (A < 0 ? "-" : "") + (rB(Math.abs(A), B, r,
                        function (A) {
                            return Q(Math.floor(A % B) + e)
                        }) + n)
                }

                function nB(A, e, t) {
                    void 0 === t && (t = ". ");
                    var r = e.length;
                    return rB(Math.abs(A), r, !1,
                        function (A) {
                            return e[Math.floor(A % r)]
                        }) + t
                }

                function BB(A, e, t, r, n, B) {
                    if (A < -9999 || 9999 < A) return uB(A, E.CJK_DECIMAL, 0 < n.length);
                    var s = Math.abs(A),
                        o = n;
                    if (0 === s) return e[0] + o;
                    for (var i = 0; 0 < s && i <= 4; i++) {
                        var a = s % 10;
                        0 == a && F(B, 1) && "" !== o ? o = e[a] + o : 1 < a || 1 == a && 0 === i || 1 == a && 1 === i && F(B, 2) || 1 == a && 1 === i && F(B, 4) && 100 < A || 1 == a && 1 < i && F(B, 8) ? o = e[a] + (0 < i ? t[i - 1] : "") + o : 1 == a && 0 < i && (o = t[i - 1] + o),
                            s = Math.floor(s / 10)
                    }
                    return (A < 0 ? r : "") + o
                }

                var sB, oB = {
                        integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                        values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                    },
                    iB = {
                        integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
                    },
                    aB = {
                        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
                    },
                    cB = {
                        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
                    },
                    QB = "마이너스",
                    uB = function (A, e, t) {
                        var r = t ? ". " : "",
                            n = t ? "、" : "",
                            B = t ? ", " : "",
                            s = t ? " " : "";
                        switch (e) {
                            case E.DISC:
                                return "•" + s;
                            case E.CIRCLE:
                                return "◦" + s;
                            case E.SQUARE:
                                return "◾" + s;
                            case E.DECIMAL_LEADING_ZERO:
                                var o = f(A, 48, 57, !0, r);
                                return o.length < 4 ? "0" + o : o;
                            case E.CJK_DECIMAL:
                                return nB(A, "〇一二三四五六七八九", n);
                            case E.LOWER_ROMAN:
                                return tB(A, 1, 3999, oB, E.DECIMAL, r).toLowerCase();
                            case E.UPPER_ROMAN:
                                return tB(A, 1, 3999, oB, E.DECIMAL, r);
                            case E.LOWER_GREEK:
                                return f(A, 945, 969, !1, r);
                            case E.LOWER_ALPHA:
                                return f(A, 97, 122, !1, r);
                            case E.UPPER_ALPHA:
                                return f(A, 65, 90, !1, r);
                            case E.ARABIC_INDIC:
                                return f(A, 1632, 1641, !0, r);
                            case E.ARMENIAN:
                            case E.UPPER_ARMENIAN:
                                return tB(A, 1, 9999, iB, E.DECIMAL, r);
                            case E.LOWER_ARMENIAN:
                                return tB(A, 1, 9999, iB, E.DECIMAL, r).toLowerCase();
                            case E.BENGALI:
                                return f(A, 2534, 2543, !0, r);
                            case E.CAMBODIAN:
                            case E.KHMER:
                                return f(A, 6112, 6121, !0, r);
                            case E.CJK_EARTHLY_BRANCH:
                                return nB(A, "子丑寅卯辰巳午未申酉戌亥", n);
                            case E.CJK_HEAVENLY_STEM:
                                return nB(A, "甲乙丙丁戊己庚辛壬癸", n);
                            case E.CJK_IDEOGRAPHIC:
                            case E.TRAD_CHINESE_INFORMAL:
                                return BB(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
                            case E.TRAD_CHINESE_FORMAL:
                                return BB(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
                            case E.SIMP_CHINESE_INFORMAL:
                                return BB(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
                            case E.SIMP_CHINESE_FORMAL:
                                return BB(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
                            case E.JAPANESE_INFORMAL:
                                return BB(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
                            case E.JAPANESE_FORMAL:
                                return BB(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
                            case E.KOREAN_HANGUL_FORMAL:
                                return BB(A, "영일이삼사오육칠팔구", "십백천만", QB, B, 7);
                            case E.KOREAN_HANJA_INFORMAL:
                                return BB(A, "零一二三四五六七八九", "十百千萬", QB, B, 0);
                            case E.KOREAN_HANJA_FORMAL:
                                return BB(A, "零壹貳參四五六七八九", "拾百千", QB, B, 7);
                            case E.DEVANAGARI:
                                return f(A, 2406, 2415, !0, r);
                            case E.GEORGIAN:
                                return tB(A, 1, 19999, cB, E.DECIMAL, r);
                            case E.GUJARATI:
                                return f(A, 2790, 2799, !0, r);
                            case E.GURMUKHI:
                                return f(A, 2662, 2671, !0, r);
                            case E.HEBREW:
                                return tB(A, 1, 10999, aB, E.DECIMAL, r);
                            case E.HIRAGANA:
                                return nB(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                            case E.HIRAGANA_IROHA:
                                return nB(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                            case E.KANNADA:
                                return f(A, 3302, 3311, !0, r);
                            case E.KATAKANA:
                                return nB(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                            case E.KATAKANA_IROHA:
                                return nB(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                            case E.LAO:
                                return f(A, 3792, 3801, !0, r);
                            case E.MONGOLIAN:
                                return f(A, 6160, 6169, !0, r);
                            case E.MYANMAR:
                                return f(A, 4160, 4169, !0, r);
                            case E.ORIYA:
                                return f(A, 2918, 2927, !0, r);
                            case E.PERSIAN:
                                return f(A, 1776, 1785, !0, r);
                            case E.TAMIL:
                                return f(A, 3046, 3055, !0, r);
                            case E.TELUGU:
                                return f(A, 3174, 3183, !0, r);
                            case E.THAI:
                                return f(A, 3664, 3673, !0, r);
                            case E.TIBETAN:
                                return f(A, 3872, 3881, !0, r);
                            default:
                                E.DECIMAL;
                                return f(A, 48, 57, !0, r)
                        }
                    },
                    lB = "data-html2canvas-ignore",
                    gB = (wB.prototype.toIFrame = function (A, t) {
                        var e = this,
                            r = CB(A, t);
                        if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
                        var n = A.defaultView.pageXOffset,
                            A = A.defaultView.pageYOffset,
                            B = r.contentWindow,
                            s = B.document,
                            o = EB(r).then(function () {
                                return i(e, void 0, void 0,
                                    function () {
                                        var e;
                                        return R(this,
                                            function (A) {
                                                switch (A.label) {
                                                    case 0:
                                                        return this.scrolledElements.forEach(HB),
                                                        B && (B.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || B.scrollY === t.top && B.scrollX === t.left || (s.documentElement.style.top = -t.top + "px", s.documentElement.style.left = -t.left + "px", s.documentElement.style.position = "absolute")),
                                                            e = this.options.onclone,
                                                            void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
                                                    case 1:
                                                        A.sent(),
                                                            A.label = 2;
                                                    case 2:
                                                        return "function" == typeof e ? [2, Promise.resolve().then(function () {
                                                            return e(s)
                                                        }).then(function () {
                                                            return r
                                                        })] : [2, r]
                                                }
                                            })
                                    })
                            });
                        return s.open(),
                            s.write(dB(document.doctype) + "<html></html>"),
                            FB(this.referenceElement.ownerDocument, n, A),
                            s.replaceChild(s.adoptNode(this.documentElement), s.documentElement),
                            s.close(),
                            o
                    },
                        wB.prototype.createElementClone = function (A) {
                            if (Yn(A)) return this.createCanvasClone(A);
                            if (Ln(A)) return this.createStyleClone(A);
                            A = A.cloneNode(!1);
                            return qn(A) && "lazy" === A.loading && (A.loading = "eager"),
                                A
                        },
                        wB.prototype.createStyleClone = function (A) {
                            try {
                                var e, t, r = A.sheet;
                                if (r && r.cssRules) return e = [].slice.call(r.cssRules, 0).reduce(function (A, e) {
                                        return e && "string" == typeof e.cssText ? A + e.cssText : A
                                    },
                                    ""),
                                    (t = A.cloneNode(!1)).textContent = e,
                                    t
                            } catch (A) {
                                if (y.getInstance(this.options.id).error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
                            }
                            return A.cloneNode(!1)
                        },
                        wB.prototype.createCanvasClone = function (A) {
                            if (this.options.inlineImages && A.ownerDocument) {
                                var e = A.ownerDocument.createElement("img");
                                try {
                                    return e.src = A.toDataURL(),
                                        e
                                } catch (A) {
                                    y.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
                                }
                            }
                            e = A.cloneNode(!1);
                            try {
                                e.width = A.width,
                                    e.height = A.height;
                                var t = A.getContext("2d"),
                                    r = e.getContext("2d");
                                return r && (t ? r.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0)),
                                    e
                            } catch (A) {
                            }
                            return e
                        },
                        wB.prototype.cloneNode = function (A) {
                            if (zn(A)) return document.createTextNode(A.data);
                            if (!A.ownerDocument) return A.cloneNode(!1);
                            var e = A.ownerDocument.defaultView;
                            if (e && xn(A) && (Vn(A) || Xn(A))) {
                                var t = this.createElementClone(A),
                                    r = e.getComputedStyle(A),
                                    n = e.getComputedStyle(A, ":before"),
                                    e = e.getComputedStyle(A, ":after");
                                this.referenceElement === A && Vn(t) && (this.clonedReferenceElement = t),
                                On(t) && KB(t);
                                for (var B = this.counters.parse(new Jr(r)), n = this.resolvePseudoContent(A, t, n, sB.BEFORE), s = A.firstChild; s; s = s.nextSibling) xn(s) && ("SCRIPT" === s.tagName || s.hasAttribute(lB) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(s)) || this.options.copyStyles && xn(s) && Ln(s) || t.appendChild(this.cloneNode(s));
                                n && t.insertBefore(n, t.firstChild);
                                n = this.resolvePseudoContent(A, t, e, sB.AFTER);
                                return n && t.appendChild(n),
                                    this.counters.pop(B),
                                r && (this.options.copyStyles || Xn(A)) && !jn(A) && hB(r, t),
                                0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]),
                                (Zn(A) || $n(A)) && (Zn(t) || $n(t)) && (t.value = A.value),
                                    t
                            }
                            return A.cloneNode(!1)
                        },
                        wB.prototype.resolvePseudoContent = function (s, A, e, t) {
                            var o = this;
                            if (e) {
                                var i, a, r = e.content,
                                    c = A.ownerDocument;
                                if (c && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) return this.counters.parse(new Jr(e)),
                                    i = new Xr(e),
                                    a = c.createElement("html2canvaspseudoelement"),
                                    hB(e, a),
                                    i.content.forEach(function (A) {
                                        if (A.type === w.STRING_TOKEN) a.appendChild(c.createTextNode(A.value));
                                        else if (A.type === w.URL_TOKEN) {
                                            var e = c.createElement("img");
                                            e.src = A.value,
                                                e.style.opacity = "1",
                                                a.appendChild(e)
                                        } else if (A.type === w.FUNCTION) {
                                            var t, r, n, B;
                                            "attr" === A.name ? (e = A.values.filter(U)).length && a.appendChild(c.createTextNode(s.getAttribute(e[0].value) || "")) : "counter" === A.name ? (n = (e = A.values.filter(Qe))[0], B = e[1], n && U(n) && (e = o.counters.getCounterValue(n.value), t = B && U(B) ? jt.parse(B.value) : E.DECIMAL, a.appendChild(c.createTextNode(uB(e, t, !1))))) : "counters" === A.name && (n = (e = A.values.filter(Qe))[0], t = e[1], B = e[2], n && U(n) && (e = o.counters.getCounterValues(n.value), r = B && U(B) ? jt.parse(B.value) : E.DECIMAL, n = t && t.type === w.STRING_TOKEN ? t.value : "", B = e.map(function (A) {
                                                return uB(A, r, !1)
                                            }).join(n), a.appendChild(c.createTextNode(B))))
                                        } else if (A.type === w.IDENT_TOKEN) switch (A.value) {
                                            case "open-quote":
                                                a.appendChild(c.createTextNode(yr(i.quotes, o.quoteDepth++, !0)));
                                                break;
                                            case "close-quote":
                                                a.appendChild(c.createTextNode(yr(i.quotes, --o.quoteDepth, !1)));
                                                break;
                                            default:
                                                a.appendChild(c.createTextNode(A.value))
                                        }
                                    }),
                                    a.className = fB + " " + pB,
                                    r = t === sB.BEFORE ? " " + fB : " " + pB,
                                    Xn(A) ? A.className.baseValue += r : A.className += r,
                                    a
                            }
                        },
                        wB.destroy = function (A) {
                            return !!A.parentNode && (A.parentNode.removeChild(A), !0)
                        },
                        wB);

                function wB(A, e) {
                    if (this.options = e, this.scrolledElements = [], this.referenceElement = A, this.counters = new AB, this.quoteDepth = 0, !A.ownerDocument) throw new Error("Cloned element does not have an owner document");
                    this.documentElement = this.cloneNode(A.ownerDocument.documentElement)
                }

                (B = sB = sB || {})[B.BEFORE = 0] = "BEFORE",
                    B[B.AFTER = 1] = "AFTER";
                var UB, CB = function (A, e) {
                        var t = A.createElement("iframe");
                        return t.className = "html2canvas-container",
                            t.style.visibility = "hidden",
                            t.style.position = "fixed",
                            t.style.left = "-10000px",
                            t.style.top = "0px",
                            t.style.border = "0",
                            t.width = e.width.toString(),
                            t.height = e.height.toString(),
                            t.scrolling = "no",
                            t.setAttribute(lB, "true"),
                            A.body.appendChild(t),
                            t
                    },
                    EB = function (n) {
                        return new Promise(function (e, A) {
                            var t = n.contentWindow;
                            if (!t) return A("No window assigned for iframe");
                            var r = t.document;
                            t.onload = n.onload = r.onreadystatechange = function () {
                                t.onload = n.onload = r.onreadystatechange = null;
                                var A = setInterval(function () {
                                        0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(n))
                                    },
                                    50)
                            }
                        })
                    },
                    hB = function (A, e) {
                        for (var t = A.length - 1; 0 <= t; t--) {
                            var r = A.item(t);
                            "content" !== r && e.style.setProperty(r, A.getPropertyValue(r))
                        }
                        return e
                    },
                    dB = function (A) {
                        var e = "";
                        return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"),
                            e
                    },
                    FB = function (A, e, t) {
                        A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
                    },
                    HB = function (A) {
                        var e = A[0],
                            t = A[1],
                            A = A[2];
                        e.scrollLeft = t,
                            e.scrollTop = A
                    },
                    fB = "___html2canvas___pseudoelement_before",
                    pB = "___html2canvas___pseudoelement_after",
                    NB = '{\n    content: "" !important;\n    display: none !important;\n}',
                    KB = function (A) {
                        IB(A, "." + fB + ":before" + NB + "\n         ." + pB + ":after" + NB)
                    },
                    IB = function (A, e) {
                        var t = A.ownerDocument;
                        t && ((t = t.createElement("style")).textContent = e, A.appendChild(t))
                    };

                function mB(A, t) {
                    return A.length === t.length && A.some(function (A, e) {
                        return A === t[e]
                    })
                }

                (g = UB = UB || {})[g.VECTOR = 0] = "VECTOR",
                    g[g.BEZIER_CURVE = 1] = "BEZIER_CURVE";
                TB.prototype.add = function (A, e) {
                    return new TB(this.x + A, this.y + e)
                };
                var p = TB;

                function TB(A, e) {
                    this.type = UB.VECTOR,
                        this.x = A,
                        this.y = e
                }

                function RB(A, e, t) {
                    return new p(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
                }

                bB.prototype.subdivide = function (A, e) {
                    var t = RB(this.start, this.startControl, A),
                        r = RB(this.startControl, this.endControl, A),
                        n = RB(this.endControl, this.end, A),
                        B = RB(t, r, A),
                        r = RB(r, n, A),
                        A = RB(B, r, A);
                    return e ? new bB(this.start, t, B, A) : new bB(A, r, n, this.end)
                },
                    bB.prototype.add = function (A, e) {
                        return new bB(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e))
                    },
                    bB.prototype.reverse = function () {
                        return new bB(this.end, this.endControl, this.startControl, this.start)
                    };
                var vB = bB;

                function bB(A, e, t, r) {
                    this.type = UB.BEZIER_CURVE,
                        this.start = A,
                        this.startControl = e,
                        this.endControl = t,
                        this.end = r
                }

                function LB(A) {
                    return A.type === UB.BEZIER_CURVE
                }

                function yB(A) {
                    var e = A.styles,
                        t = A.bounds,
                        r = (n = we(e.borderTopLeftRadius, t.width, t.height))[0],
                        n = n[1],
                        B = (s = we(e.borderTopRightRadius, t.width, t.height))[0],
                        s = s[1],
                        o = (i = we(e.borderBottomRightRadius, t.width, t.height))[0],
                        i = i[1],
                        a = (c = we(e.borderBottomLeftRadius, t.width, t.height))[0],
                        c = c[1];
                    (Q = []).push((r + B) / t.width),
                        Q.push((a + o) / t.width),
                        Q.push((n + c) / t.height),
                        Q.push((s + i) / t.height);
                    1 < (Q = Math.max.apply(Math, Q)) && (r /= Q, n /= Q, B /= Q, s /= Q, o /= Q, i /= Q, a /= Q, c /= Q);
                    var Q = t.width - B,
                        u = t.height - i,
                        l = t.width - o,
                        g = t.height - c,
                        w = e.borderTopWidth,
                        U = e.borderRightWidth,
                        C = e.borderBottomWidth,
                        E = e.borderLeftWidth,
                        h = b(e.paddingTop, A.bounds.width),
                        d = b(e.paddingRight, A.bounds.width),
                        F = b(e.paddingBottom, A.bounds.width),
                        e = b(e.paddingLeft, A.bounds.width);
                    this.topLeftBorderBox = 0 < r || 0 < n ? K(t.left, t.top, r, n, N.TOP_LEFT) : new p(t.left, t.top),
                        this.topRightBorderBox = 0 < B || 0 < s ? K(t.left + Q, t.top, B, s, N.TOP_RIGHT) : new p(t.left + t.width, t.top),
                        this.bottomRightBorderBox = 0 < o || 0 < i ? K(t.left + l, t.top + u, o, i, N.BOTTOM_RIGHT) : new p(t.left + t.width, t.top + t.height),
                        this.bottomLeftBorderBox = 0 < a || 0 < c ? K(t.left, t.top + g, a, c, N.BOTTOM_LEFT) : new p(t.left, t.top + t.height),
                        this.topLeftPaddingBox = 0 < r || 0 < n ? K(t.left + E, t.top + w, Math.max(0, r - E), Math.max(0, n - w), N.TOP_LEFT) : new p(t.left + E, t.top + w),
                        this.topRightPaddingBox = 0 < B || 0 < s ? K(t.left + Math.min(Q, t.width + E), t.top + w, Q > t.width + E ? 0 : B - E, s - w, N.TOP_RIGHT) : new p(t.left + t.width - U, t.top + w),
                        this.bottomRightPaddingBox = 0 < o || 0 < i ? K(t.left + Math.min(l, t.width - E), t.top + Math.min(u, t.height + w), Math.max(0, o - U), i - C, N.BOTTOM_RIGHT) : new p(t.left + t.width - U, t.top + t.height - C),
                        this.bottomLeftPaddingBox = 0 < a || 0 < c ? K(t.left + E, t.top + g, Math.max(0, a - E), c - C, N.BOTTOM_LEFT) : new p(t.left + E, t.top + t.height - C),
                        this.topLeftContentBox = 0 < r || 0 < n ? K(t.left + E + e, t.top + w + h, Math.max(0, r - (E + e)), Math.max(0, n - (w + h)), N.TOP_LEFT) : new p(t.left + E + e, t.top + w + h),
                        this.topRightContentBox = 0 < B || 0 < s ? K(t.left + Math.min(Q, t.width + E + e), t.top + w + h, Q > t.width + E + e ? 0 : B - E + e, s - (w + h), N.TOP_RIGHT) : new p(t.left + t.width - (U + d), t.top + w + h),
                        this.bottomRightContentBox = 0 < o || 0 < i ? K(t.left + Math.min(l, t.width - (E + e)), t.top + Math.min(u, t.height + w + h), Math.max(0, o - (U + d)), i - (C + F), N.BOTTOM_RIGHT) : new p(t.left + t.width - (U + d), t.top + t.height - (C + F)),
                        this.bottomLeftContentBox = 0 < a || 0 < c ? K(t.left + E + e, t.top + g, Math.max(0, a - (E + e)), c - (C + F), N.BOTTOM_LEFT) : new p(t.left + E + e, t.top + t.height - (C + F))
                }

                var N;

                function OB(A) {
                    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
                }

                function SB(A) {
                    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
                }

                N = {
                    TOP_LEFT: 0,
                    0: "TOP_LEFT",
                    TOP_RIGHT: 1,
                    1: "TOP_RIGHT",
                    BOTTOM_RIGHT: 2,
                    2: "BOTTOM_RIGHT",
                    BOTTOM_LEFT: 3,
                    3: "BOTTOM_LEFT"
                };

                function DB(A, e, t) {
                    this.type = 0,
                        this.offsetX = A,
                        this.offsetY = e,
                        this.matrix = t,
                        this.target = 6
                }

                function MB(A, e) {
                    this.type = 1,
                        this.target = e,
                        this.path = A
                }

                function _B(A) {
                    this.element = A,
                        this.inlineLevel = [],
                        this.nonInlineLevel = [],
                        this.negativeZIndex = [],
                        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                        this.positiveZIndex = [],
                        this.nonPositionedFloats = [],
                        this.nonPositionedInlineLevel = []
                }

                var K = function (A, e, t, r, n) {
                        var B = (Math.sqrt(2) - 1) / 3 * 4,
                            s = t * B,
                            o = r * B,
                            i = A + t,
                            a = e + r;
                        switch (n) {
                            case N.TOP_LEFT:
                                return new vB(new p(A, a), new p(A, a - o), new p(i - s, e), new p(i, e));
                            case N.TOP_RIGHT:
                                return new vB(new p(A, e), new p(A + s, e), new p(i, a - o), new p(i, a));
                            case N.BOTTOM_RIGHT:
                                return new vB(new p(i, e), new p(i, e + o), new p(A + s, a), new p(A, a));
                            default:
                                N.BOTTOM_LEFT;
                                return new vB(new p(i, a), new p(i - s, a), new p(A, e + o), new p(A, e))
                        }
                    },
                    PB = (zB.prototype.getParentEffects = function () {
                        var A, e = this.effects.slice(0);
                        return this.container.styles.overflowX === qt.VISIBLE || mB(OB(this.curves), A = SB(this.curves)) || e.push(new MB(A, 6)),
                            e
                    },
                        zB);

                function zB(A, e) {
                    var t, r;
                    this.container = A,
                        this.effects = e.slice(0),
                        this.curves = new yB(A),
                    null !== A.styles.transform && (e = A.bounds.left + A.styles.transformOrigin[0].number, r = A.bounds.top + A.styles.transformOrigin[1].number, t = A.styles.transform, this.effects.push(new DB(e, r, t))),
                    A.styles.overflowX !== qt.VISIBLE && (mB(e = OB(this.curves), r = SB(this.curves)) ? this.effects.push(new MB(e, 6)) : (this.effects.push(new MB(e, 2)), this.effects.push(new MB(r, 4))))
                }

                function xB(A) {
                    var e = A.bounds,
                        A = A.styles;
                    return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
                }

                function VB(A) {
                    var e = A.styles,
                        A = A.bounds,
                        t = b(e.paddingLeft, A.width),
                        r = b(e.paddingRight, A.width),
                        n = b(e.paddingTop, A.width),
                        B = b(e.paddingBottom, A.width);
                    return A.add(t + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + t + r), -(e.borderTopWidth + e.borderBottomWidth + n + B))
                }

                function XB(A, e, t) {
                    r = jB(A.styles.backgroundOrigin, e),
                        n = A;
                    var r = 0 === r ? n.bounds : (2 === r ? VB : xB)(n),
                        n = (n = jB(A.styles.backgroundClip, e), B = A, n === Te.BORDER_BOX ? B.bounds : (n === Te.CONTENT_BOX ? VB : xB)(B)),
                        B = qB(jB(A.styles.backgroundSize, e), t, r),
                        t = B[0],
                        s = B[1],
                        o = we(jB(A.styles.backgroundPosition, e), r.width - t, r.height - s);
                    return [ZB(jB(A.styles.backgroundRepeat, e), o, B, r, n), Math.round(r.left + o[0]), Math.round(r.top + o[1]), t, s]
                }

                function JB(A) {
                    return U(A) && A.value === ke.AUTO
                }

                function GB(A) {
                    return "number" == typeof A
                }

                function kB(a, c, Q, u) {
                    a.container.elements.forEach(function (A) {
                        var e, t, r, n, B = F(A.flags, 4),
                            s = F(A.flags, 2),
                            o = new PB(A, a.getParentEffects()),
                            i = (F(A.styles.display, 2048) && u.push(o), F(A.flags, 8) ? [] : u);
                        B || s ? (s = B || A.styles.isPositioned() ? Q : c, e = new _B(o), A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed() ? (t = A.styles.zIndex.order) < 0 ? (r = 0, s.negativeZIndex.some(function (A, e) {
                            return t > A.element.container.styles.zIndex.order ? (r = e, !1) : 0 < r
                        }), s.negativeZIndex.splice(r, 0, e)) : 0 < t ? (n = 0, s.positiveZIndex.some(function (A, e) {
                            return t >= A.element.container.styles.zIndex.order ? (n = e + 1, !1) : 0 < n
                        }), s.positiveZIndex.splice(n, 0, e)) : s.zeroOrAutoZIndexOrTransformedOrOpacity.push(e) : (A.styles.isFloating() ? s.nonPositionedFloats : s.nonPositionedInlineLevel).push(e), kB(o, e, B ? e : Q, i)) : ((A.styles.isInlineLevel() ? c.inlineLevel : c.nonInlineLevel).push(o), kB(o, c, Q, i)),
                        F(A.flags, 8) && WB(A, i)
                    })
                }

                function WB(A, e) {
                    for (var t = A instanceof ln ? A.start : 1, r = A instanceof ln && A.reversed, n = 0; n < e.length; n++) {
                        var B = e[n];
                        B.container instanceof cn && "number" == typeof B.container.value && 0 !== B.container.value && (t = B.container.value),
                            B.listValue = uB(t, B.container.styles.listStyleType, !0),
                            t += r ? -1 : 1
                    }
                }

                function YB(A, e, t, r) {
                    var n = [];
                    return LB(A) ? n.push(A.subdivide(.5, !1)) : n.push(A),
                        LB(t) ? n.push(t.subdivide(.5, !0)) : n.push(t),
                        LB(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r),
                        LB(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e),
                        n
                }

                var qB = function (A, e, t) {
                        var r = e[0],
                            n = e[1],
                            e = e[2],
                            B = A[0],
                            A = A[1];
                        if (C(B) && A && C(A)) return [b(B, t.width), b(A, t.height)];
                        var s = GB(e);
                        if (U(B) && (B.value === ke.CONTAIN || B.value === ke.COVER)) return GB(e) ? t.width / t.height < e != (B.value === ke.COVER) ? [t.width, t.width / e] : [t.height * e, t.height] : [t.width, t.height];
                        var o = GB(r),
                            i = GB(n),
                            a = o || i;
                        if (JB(B) && (!A || JB(A))) return o && i ? [r, n] : s || a ? a && s ? [o ? r : n * e, i ? n : r / e] : [o ? r : t.width, i ? n : t.height] : [t.width, t.height];
                        if (s) return s = a = 0,
                            C(B) ? a = b(B, t.width) : C(A) && (s = b(A, t.height)),
                            JB(B) ? a = s * e : A && !JB(A) || (s = a / e),
                            [a, s];
                        e = null,
                            a = null;
                        if (C(B) ? e = b(B, t.width) : A && C(A) && (a = b(A, t.height)), null !== (e = null !== (a = null === e || A && !JB(A) ? a : o && i ? e / r * n : t.height) && JB(B) ? o && i ? a / n * r : t.width : e) && null !== a) return [e, a];
                        throw new Error("Unable to calculate background-size for element")
                    },
                    jB = function (A, e) {
                        e = A[e];
                        return void 0 === e ? A[0] : e
                    },
                    ZB = function (A, e, t, r, n) {
                        var B = e[0],
                            s = e[1],
                            o = t[0],
                            i = t[1];
                        switch (A) {
                            case Ge.REPEAT_X:
                                return [new p(Math.round(r.left), Math.round(r.top + s)), new p(Math.round(r.left + r.width), Math.round(r.top + s)), new p(Math.round(r.left + r.width), Math.round(i + r.top + s)), new p(Math.round(r.left), Math.round(i + r.top + s))];
                            case Ge.REPEAT_Y:
                                return [new p(Math.round(r.left + B), Math.round(r.top)), new p(Math.round(r.left + B + o), Math.round(r.top)), new p(Math.round(r.left + B + o), Math.round(r.height + r.top)), new p(Math.round(r.left + B), Math.round(r.height + r.top))];
                            case Ge.NO_REPEAT:
                                return [new p(Math.round(r.left + B), Math.round(r.top + s)), new p(Math.round(r.left + B + o), Math.round(r.top + s)), new p(Math.round(r.left + B + o), Math.round(r.top + s + i)), new p(Math.round(r.left + B), Math.round(r.top + s + i))];
                            default:
                                return [new p(Math.round(n.left), Math.round(n.top)), new p(Math.round(n.left + n.width), Math.round(n.top)), new p(Math.round(n.left + n.width), Math.round(n.height + n.top)), new p(Math.round(n.left), Math.round(n.height + n.top))]
                        }
                    },
                    $B = "Hidden Text",
                    As = (es.prototype.parseMetrics = function (A, e) {
                        var t = this._document.createElement("div"),
                            r = this._document.createElement("img"),
                            n = this._document.createElement("span"),
                            B = this._document.body,
                            A = (t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", B.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode($B)), t.appendChild(n), t.appendChild(r), r.offsetTop - n.offsetTop + 2),
                            e = (t.removeChild(n), t.appendChild(this._document.createTextNode($B)), t.style.lineHeight = "normal", r.style.verticalAlign = "super", r.offsetTop - t.offsetTop + 2);
                        return B.removeChild(t),
                            {
                                baseline: A,
                                middle: e
                            }
                    },
                        es.prototype.getMetrics = function (A, e) {
                            var t = A + " " + e;
                            return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
                                this._data[t]
                        },
                        es);

                function es(A) {
                    this._data = {},
                        this._document = A
                }

                I.prototype.applyEffects = function (A, e) {
                    for (var t = this; this._activeEffects.length;) this.popEffect();
                    A.filter(function (A) {
                        return F(A.target, e)
                    }).forEach(function (A) {
                        return t.applyEffect(A)
                    })
                },
                    I.prototype.applyEffect = function (A) {
                        this.ctx.save(),
                        0 === A.type && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)),
                        1 === A.type && (this.path(A.path), this.ctx.clip()),
                            this._activeEffects.push(A)
                    },
                    I.prototype.popEffect = function () {
                        this._activeEffects.pop(),
                            this.ctx.restore()
                    },
                    I.prototype.renderStack = function (t) {
                        return i(this, void 0, void 0,
                            function () {
                                var e;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return (e = t.element.container.styles).isVisible() ? (this.ctx.globalAlpha = e.opacity, [4, this.renderStackContent(t)]) : [3, 2];
                                            case 1:
                                                A.sent(),
                                                    A.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                            })
                    },
                    I.prototype.renderNode = function (e) {
                        return i(this, void 0, void 0,
                            function () {
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                                            case 1:
                                                return A.sent(),
                                                    [4, this.renderNodeContent(e)];
                                            case 2:
                                                A.sent(),
                                                    A.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                            })
                    },
                    I.prototype.renderTextWithLetterSpacing = function (t, A) {
                        var r = this;
                        0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height) : x(t.text).map(function (A) {
                            return Q(A)
                        }).reduce(function (A, e) {
                                return r.ctx.fillText(e, A, t.bounds.top + t.bounds.height),
                                A + r.ctx.measureText(e).width
                            },
                            t.bounds.left)
                    },
                    I.prototype.createFontStyle = function (A) {
                        var e = A.fontVariant.filter(function (A) {
                                return "normal" === A || "small-caps" === A
                            }).join(""),
                            t = A.fontFamily.join(", "),
                            r = se(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                        return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r]
                    },
                    I.prototype.renderTextNode = function (s, o) {
                        return i(this, void 0, void 0,
                            function () {
                                var e, t, r, n, B = this;
                                return R(this,
                                    function (A) {
                                        return e = this.createFontStyle(o),
                                            t = e[0],
                                            r = e[1],
                                            n = e[2],
                                            this.ctx.font = t,
                                            s.textBounds.forEach(function (t) {
                                                B.ctx.fillStyle = v(o.color),
                                                    B.renderTextWithLetterSpacing(t, o.letterSpacing);
                                                var A = o.textShadow;
                                                A.length && t.text.trim().length && (A.slice(0).reverse().forEach(function (A) {
                                                    B.ctx.shadowColor = v(A.color),
                                                        B.ctx.shadowOffsetX = A.offsetX.number * B.options.scale,
                                                        B.ctx.shadowOffsetY = A.offsetY.number * B.options.scale,
                                                        B.ctx.shadowBlur = A.blur.number,
                                                        B.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height)
                                                }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0),
                                                o.textDecorationLine.length && (B.ctx.fillStyle = v(o.textDecorationColor || o.color), o.textDecorationLine.forEach(function (A) {
                                                    switch (A) {
                                                        case 1:
                                                            var e = B.fontMetrics.getMetrics(r, n).baseline;
                                                            B.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + e), t.bounds.width, 1);
                                                            break;
                                                        case 2:
                                                            B.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                                                            break;
                                                        case 3:
                                                            e = B.fontMetrics.getMetrics(r, n).middle;
                                                            B.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + e), t.bounds.width, 1)
                                                    }
                                                }))
                                            }),
                                            [2]
                                    })
                            })
                    },
                    I.prototype.renderReplacedElement = function (A, e, t) {
                        var r;
                        t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (r = VB(A), e = SB(e), this.path(e), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore())
                    },
                    I.prototype.renderNodeContent = function (g) {
                        return i(this, void 0, void 0,
                            function () {
                                var r, n, B, s, o, i, a, c, Q, u, l;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                this.applyEffects(g.effects, 4),
                                                    r = g.container,
                                                    n = g.curves,
                                                    B = r.styles,
                                                    s = 0,
                                                    o = r.textNodes,
                                                    A.label = 1;
                                            case 1:
                                                return s < o.length ? (i = o[s], [4, this.renderTextNode(i, B)]) : [3, 4];
                                            case 2:
                                                A.sent(),
                                                    A.label = 3;
                                            case 3:
                                                return s++,
                                                    [3, 1];
                                            case 4:
                                                if (!(r instanceof An)) return [3, 8];
                                                A.label = 5;
                                            case 5:
                                                return A.trys.push([5, 7, , 8]),
                                                    [4, this.options.cache.match(r.src)];
                                            case 6:
                                                return Q = A.sent(),
                                                    this.renderReplacedElement(r, n, Q),
                                                    [3, 8];
                                            case 7:
                                                return A.sent(),
                                                    y.getInstance(this.options.id).error("Error loading image " + r.src),
                                                    [3, 8];
                                            case 8:
                                                if (r instanceof rn && this.renderReplacedElement(r, n, r.canvas), !(r instanceof sn)) return [3, 12];
                                                A.label = 9;
                                            case 9:
                                                return A.trys.push([9, 11, , 12]),
                                                    [4, this.options.cache.match(r.svg)];
                                            case 10:
                                                return Q = A.sent(),
                                                    this.renderReplacedElement(r, n, Q),
                                                    [3, 12];
                                            case 11:
                                                return A.sent(),
                                                    y.getInstance(this.options.id).error("Error loading svg " + r.svg.substring(0, 255)),
                                                    [3, 12];
                                            case 12:
                                                return r instanceof vn && r.tree ? [4, new I({
                                                    id: this.options.id,
                                                    scale: this.options.scale,
                                                    backgroundColor: r.backgroundColor,
                                                    x: 0,
                                                    y: 0,
                                                    scrollX: 0,
                                                    scrollY: 0,
                                                    width: r.width,
                                                    height: r.height,
                                                    cache: this.options.cache,
                                                    windowWidth: r.width,
                                                    windowHeight: r.height
                                                }).render(r.tree)] : [3, 14];
                                            case 13:
                                                i = A.sent(),
                                                r.width && r.height && this.ctx.drawImage(i, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height),
                                                    A.label = 14;
                                            case 14:
                                                if (r instanceof Fn && (c = Math.min(r.bounds.width, r.bounds.height), r.type === En ? r.checked && (this.ctx.save(), this.path([new p(r.bounds.left + .39363 * c, r.bounds.top + .79 * c), new p(r.bounds.left + .16 * c, r.bounds.top + .5549 * c), new p(r.bounds.left + .27347 * c, r.bounds.top + .44071 * c), new p(r.bounds.left + .39694 * c, r.bounds.top + .5649 * c), new p(r.bounds.left + .72983 * c, r.bounds.top + .23 * c), new p(r.bounds.left + .84 * c, r.bounds.top + .34085 * c), new p(r.bounds.left + .39363 * c, r.bounds.top + .79 * c)]), this.ctx.fillStyle = v(dn), this.ctx.fill(), this.ctx.restore()) : r.type === hn && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = v(dn), this.ctx.fill(), this.ctx.restore())), rs(r) && r.value.length) {
                                                    switch (this.ctx.font = this.createFontStyle(B)[0], this.ctx.fillStyle = v(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = Bs(r.styles.textAlign), l = VB(r), a = 0, r.styles.textAlign) {
                                                        case nr.CENTER:
                                                            a += l.width / 2;
                                                            break;
                                                        case nr.RIGHT:
                                                            a += l.width
                                                    }
                                                    c = l.add(a, 0, 0, -l.height / 2 + 1),
                                                        this.ctx.save(),
                                                        this.path([new p(l.left, l.top), new p(l.left + l.width, l.top), new p(l.left + l.width, l.top + l.height), new p(l.left, l.top + l.height)]),
                                                        this.ctx.clip(),
                                                        this.renderTextWithLetterSpacing(new Gr(r.value, c), B.letterSpacing),
                                                        this.ctx.restore(),
                                                        this.ctx.textBaseline = "bottom",
                                                        this.ctx.textAlign = "left"
                                                }
                                                if (!F(r.styles.display, 2048)) return [3, 20];
                                                if (null === r.styles.listStyleImage) return [3, 19];
                                                if ((u = r.styles.listStyleImage).type !== O.URL) return [3, 18];
                                                Q = void 0,
                                                    u = u.url,
                                                    A.label = 15;
                                            case 15:
                                                return A.trys.push([15, 17, , 18]),
                                                    [4, this.options.cache.match(u)];
                                            case 16:
                                                return Q = A.sent(),
                                                    this.ctx.drawImage(Q, r.bounds.left - (Q.width + 10), r.bounds.top),
                                                    [3, 18];
                                            case 17:
                                                return A.sent(),
                                                    y.getInstance(this.options.id).error("Error loading list-style-image " + u),
                                                    [3, 18];
                                            case 18:
                                                return [3, 20];
                                            case 19:
                                                g.listValue && r.styles.listStyleType !== E.NONE && (this.ctx.font = this.createFontStyle(B)[0], this.ctx.fillStyle = v(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", l = new _(r.bounds.left, r.bounds.top + b(r.styles.paddingTop, r.bounds.width), r.bounds.width, (e = B.lineHeight, t = B.fontSize.number, (U(e) && "normal" === e.value ? 1.2 * t : e.type === w.NUMBER_TOKEN ? t * e.number : C(e) ? b(e, t) : t) / 2 + 1)), this.renderTextWithLetterSpacing(new Gr(g.listValue, l), B.letterSpacing), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"),
                                                    A.label = 20;
                                            case 20:
                                                return [2]
                                        }
                                        var e, t
                                    })
                            })
                    }, I.prototype.renderStackContent = function (U) {
                    return i(this, void 0, void 0,
                        function () {
                            var e, t, r, n, B, s, o, i, a, c, Q, u, l, g, w;
                            return R(this,
                                function (A) {
                                    switch (A.label) {
                                        case 0:
                                            return [4, this.renderNodeBackgroundAndBorders(U.element)];
                                        case 1:
                                            A.sent(),
                                                e = 0,
                                                t = U.negativeZIndex,
                                                A.label = 2;
                                        case 2:
                                            return e < t.length ? (w = t[e], [4, this.renderStack(w)]) : [3, 5];
                                        case 3:
                                            A.sent(),
                                                A.label = 4;
                                        case 4:
                                            return e++,
                                                [3, 2];
                                        case 5:
                                            return [4, this.renderNodeContent(U.element)];
                                        case 6:
                                            A.sent(),
                                                r = 0,
                                                n = U.nonInlineLevel,
                                                A.label = 7;
                                        case 7:
                                            return r < n.length ? (w = n[r], [4, this.renderNode(w)]) : [3, 10];
                                        case 8:
                                            A.sent(),
                                                A.label = 9;
                                        case 9:
                                            return r++,
                                                [3, 7];
                                        case 10:
                                            B = 0,
                                                s = U.nonPositionedFloats,
                                                A.label = 11;
                                        case 11:
                                            return B < s.length ? (w = s[B], [4, this.renderStack(w)]) : [3, 14];
                                        case 12:
                                            A.sent(),
                                                A.label = 13;
                                        case 13:
                                            return B++,
                                                [3, 11];
                                        case 14:
                                            o = 0,
                                                i = U.nonPositionedInlineLevel,
                                                A.label = 15;
                                        case 15:
                                            return o < i.length ? (w = i[o], [4, this.renderStack(w)]) : [3, 18];
                                        case 16:
                                            A.sent(),
                                                A.label = 17;
                                        case 17:
                                            return o++,
                                                [3, 15];
                                        case 18:
                                            a = 0,
                                                c = U.inlineLevel,
                                                A.label = 19;
                                        case 19:
                                            return a < c.length ? (w = c[a], [4, this.renderNode(w)]) : [3, 22];
                                        case 20:
                                            A.sent(),
                                                A.label = 21;
                                        case 21:
                                            return a++,
                                                [3, 19];
                                        case 22:
                                            Q = 0,
                                                u = U.zeroOrAutoZIndexOrTransformedOrOpacity,
                                                A.label = 23;
                                        case 23:
                                            return Q < u.length ? (w = u[Q], [4, this.renderStack(w)]) : [3, 26];
                                        case 24:
                                            A.sent(),
                                                A.label = 25;
                                        case 25:
                                            return Q++,
                                                [3, 23];
                                        case 26:
                                            l = 0,
                                                g = U.positiveZIndex,
                                                A.label = 27;
                                        case 27:
                                            return l < g.length ? (w = g[l], [4, this.renderStack(w)]) : [3, 30];
                                        case 28:
                                            A.sent(),
                                                A.label = 29;
                                        case 29:
                                            return l++,
                                                [3, 27];
                                        case 30:
                                            return [2]
                                    }
                                })
                        })
                },
                    I.prototype.mask = function (A) {
                        this.ctx.beginPath(),
                            this.ctx.moveTo(0, 0),
                            this.ctx.lineTo(this.canvas.width, 0),
                            this.ctx.lineTo(this.canvas.width, this.canvas.height),
                            this.ctx.lineTo(0, this.canvas.height),
                            this.ctx.lineTo(0, 0),
                            this.formatPath(A.slice(0).reverse()),
                            this.ctx.closePath()
                    },
                    I.prototype.path = function (A) {
                        this.ctx.beginPath(),
                            this.formatPath(A),
                            this.ctx.closePath()
                    },
                    I.prototype.formatPath = function (A) {
                        var r = this;
                        A.forEach(function (A, e) {
                            var t = LB(A) ? A.start : A;
                            0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y),
                            LB(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                        })
                    },
                    I.prototype.renderRepeat = function (A, e, t, r) {
                        this.path(A),
                            this.ctx.fillStyle = e,
                            this.ctx.translate(t, r),
                            this.ctx.fill(),
                            this.ctx.translate(-t, -r)
                    },
                    I.prototype.resizeImage = function (A, e, t) {
                        if (A.width === e && A.height === t) return A;
                        var r = this.canvas.ownerDocument.createElement("canvas");
                        return r.width = e,
                            r.height = t,
                            r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
                            r
                    },
                    I.prototype.renderBackgroundImage = function (T) {
                        return i(this, void 0, void 0,
                            function () {
                                var I, e, m, t, r, n;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                I = T.styles.backgroundImage.length - 1,
                                                    e = function (o) {
                                                        var i, a, c, Q, u, l, g, w, U, C, E, h, d, F, H, f, p, N, K;
                                                        return R(this,
                                                            function (A) {
                                                                switch (A.label) {
                                                                    case 0:
                                                                        if (o.type !== O.URL) return [3, 5];
                                                                        i = void 0,
                                                                            a = o.url,
                                                                            A.label = 1;
                                                                    case 1:
                                                                        return A.trys.push([1, 3, , 4]),
                                                                            [4, m.options.cache.match(a)];
                                                                    case 2:
                                                                        return i = A.sent(),
                                                                            [3, 4];
                                                                    case 3:
                                                                        return A.sent(),
                                                                            y.getInstance(m.options.id).error("Error loading background-image " + a),
                                                                            [3, 4];
                                                                    case 4:
                                                                        return i && (h = XB(T, I, [i.width, i.height, i.width / i.height]), w = h[0], d = h[1], F = h[2], E = h[3], h = h[4], g = m.ctx.createPattern(m.resizeImage(i, E, h), "repeat"), m.renderRepeat(w, g, d, F)),
                                                                            [3, 6];
                                                                    case 5:
                                                                        o.type !== O.LINEAR_GRADIENT ? o.type === O.RADIAL_GRADIENT && (N = XB(T, I, [null, null, null]), w = N[0], U = N[1], C = N[2], E = N[3], h = N[4], N = 0 === o.position.length ? [fe] : o.position, d = b(N[0], E), F = b(N[N.length - 1], h), N = function (A, e, t, r, n) {
                                                                            var B, s, o = 0,
                                                                                i = 0;
                                                                            switch (A.size) {
                                                                                case D.CLOSEST_SIDE:
                                                                                    A.shape === S.CIRCLE ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === S.ELLIPSE && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
                                                                                    break;
                                                                                case D.CLOSEST_CORNER:
                                                                                    A.shape === S.CIRCLE ? o = i = Math.min(L(e, t), L(e, t - n), L(e - r, t), L(e - r, t - n)) : A.shape === S.ELLIPSE && (i = (B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r))) * (o = L((s = ye(r, n, e, t, !0))[0] - e, (s[1] - t) / B)));
                                                                                    break;
                                                                                case D.FARTHEST_SIDE:
                                                                                    A.shape === S.CIRCLE ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === S.ELLIPSE && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
                                                                                    break;
                                                                                case D.FARTHEST_CORNER:
                                                                                    A.shape === S.CIRCLE ? o = i = Math.max(L(e, t), L(e, t - n), L(e - r, t), L(e - r, t - n)) : A.shape === S.ELLIPSE && (i = (B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r))) * (o = L((s = ye(r, n, e, t, !1))[0] - e, (s[1] - t) / B)))
                                                                            }
                                                                            return Array.isArray(A.size) && (o = b(A.size[0], r), i = 2 === A.size.length ? b(A.size[1], n) : o),
                                                                                [o, i]
                                                                        }(o, d, F, E, h), K = N[0], N = N[1], 0 < K && (H = m.ctx.createRadialGradient(U + d, C + F, 0, U + d, C + F, K), Le(o.stops, 2 * K).forEach(function (A) {
                                                                            return H.addColorStop(A.stop, v(A.color))
                                                                        }), m.path(w), m.ctx.fillStyle = H, K !== N ? (f = T.bounds.left + .5 * T.bounds.width, p = T.bounds.top + .5 * T.bounds.height, K = 1 / (N = N / K), m.ctx.save(), m.ctx.translate(f, p), m.ctx.transform(1, 0, 0, N, 0, 0), m.ctx.translate(-f, -p), m.ctx.fillRect(U, K * (C - p) + p, E, h * K), m.ctx.restore()) : m.ctx.fill())) : (N = XB(T, I, [null, null, null]), w = N[0], d = N[1], F = N[2], E = N[3], h = N[4], e = o.angle, t = E, r = h, e = "number" == typeof e ? e : (s = t / 2, B = (n = r) / 2, s = b((e = e)[0], t) - s, B -= b(e[1], n), (Math.atan2(B, s) + 2 * Math.PI) % (2 * Math.PI)), n = Math.abs(t * Math.sin(e)) + Math.abs(r * Math.cos(e)), B = t / 2, s = r / 2, t = n / 2, r = Math.sin(e - Math.PI / 2) * t, e = Math.cos(e - Math.PI / 2) * t, U = (f = [n, B - e, B + e, s - r, s + r])[0], C = f[1], p = f[2], K = f[3], c = f[4], (Q = document.createElement("canvas")).width = E, Q.height = h, u = Q.getContext("2d"), l = u.createLinearGradient(C, K, p, c), Le(o.stops, U).forEach(function (A) {
                                                                            return l.addColorStop(A.stop, v(A.color))
                                                                        }), u.fillStyle = l, u.fillRect(0, 0, E, h), 0 < E && 0 < h && (g = m.ctx.createPattern(Q, "repeat"), m.renderRepeat(w, g, d, F))),
                                                                            A.label = 6;
                                                                    case 6:
                                                                        return I--,
                                                                            [2]
                                                                }
                                                                var e, t, r, n, B, s
                                                            })
                                                    }, m = this,
                                                    t = 0,
                                                    r = T.styles.backgroundImage.slice(0).reverse(),
                                                    A.label = 1;
                                            case 1:
                                                return t < r.length ? (n = r[t], [5, e(n)]) : [3, 4];
                                            case 2:
                                                A.sent(),
                                                    A.label = 3;
                                            case 3:
                                                return t++,
                                                    [3, 1];
                                            case 4:
                                                return [2]
                                        }
                                    })
                            })
                    },
                    I.prototype.renderBorder = function (e, t, r) {
                        return i(this, void 0, void 0,
                            function () {
                                return R(this,
                                    function (A) {
                                        return this.path(function (A) {
                                            switch (t) {
                                                case 0:
                                                    return YB(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                                                case 1:
                                                    return YB(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                                                case 2:
                                                    return YB(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                                                default:
                                                    return YB(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                                            }
                                        }(r)),
                                            this.ctx.fillStyle = v(e),
                                            this.ctx.fill(),
                                            [2]
                                    })
                            })
                    },
                    I.prototype.renderNodeBackgroundAndBorders = function (a) {
                        return i(this, void 0, void 0,
                            function () {
                                var e, t, r, n, B, s, o, i = this;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return this.applyEffects(a.effects, 2),
                                                    e = a.container.styles,
                                                    o = !Ee(e.backgroundColor) || e.backgroundImage.length,
                                                    t = [{
                                                        style: e.borderTopStyle,
                                                        color: e.borderTopColor
                                                    },
                                                        {
                                                            style: e.borderRightStyle,
                                                            color: e.borderRightColor
                                                        },
                                                        {
                                                            style: e.borderBottomStyle,
                                                            color: e.borderBottomColor
                                                        },
                                                        {
                                                            style: e.borderLeftStyle,
                                                            color: e.borderLeftColor
                                                        }],
                                                    r = ns(jB(e.backgroundClip, 0), a.curves),
                                                    o || e.boxShadow.length ? (this.ctx.save(), this.path(r), this.ctx.clip(), Ee(e.backgroundColor) || (this.ctx.fillStyle = v(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(a.container)]) : [3, 2];
                                            case 1:
                                                A.sent(),
                                                    this.ctx.restore(),
                                                    e.boxShadow.slice(0).reverse().forEach(function (A) {
                                                        i.ctx.save();
                                                        var t, r, n, B, e = OB(a.curves),
                                                            s = A.inset ? 0 : 1e4,
                                                            o = (t = -s + (A.inset ? 1 : -1) * A.spread.number, r = (A.inset ? 1 : -1) * A.spread.number, n = A.spread.number * (A.inset ? -2 : 2), B = A.spread.number * (A.inset ? -2 : 2), e.map(function (A, e) {
                                                                switch (e) {
                                                                    case 0:
                                                                        return A.add(t, r);
                                                                    case 1:
                                                                        return A.add(t + n, r);
                                                                    case 2:
                                                                        return A.add(t + n, r + B);
                                                                    case 3:
                                                                        return A.add(t, r + B)
                                                                }
                                                                return A
                                                            }));
                                                        A.inset ? (i.path(e), i.ctx.clip(), i.mask(o)) : (i.mask(e), i.ctx.clip(), i.path(o)),
                                                            i.ctx.shadowOffsetX = A.offsetX.number + s,
                                                            i.ctx.shadowOffsetY = A.offsetY.number,
                                                            i.ctx.shadowColor = v(A.color),
                                                            i.ctx.shadowBlur = A.blur.number,
                                                            i.ctx.fillStyle = A.inset ? v(A.color) : "rgba(0,0,0,1)",
                                                            i.ctx.fill(),
                                                            i.ctx.restore()
                                                    }),
                                                    A.label = 2;
                                            case 2:
                                                B = n = 0,
                                                    s = t,
                                                    A.label = 3;
                                            case 3:
                                                return B < s.length ? (o = s[B]).style === Ut.NONE || Ee(o.color) ? [3, 5] : [4, this.renderBorder(o.color, n, a.curves)] : [3, 7];
                                            case 4:
                                                A.sent(),
                                                    A.label = 5;
                                            case 5:
                                                n++,
                                                    A.label = 6;
                                            case 6:
                                                return B++,
                                                    [3, 3];
                                            case 7:
                                                return [2]
                                        }
                                    })
                            })
                    },
                    I.prototype.render = function (n) {
                        return i(this, void 0, void 0,
                            function () {
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return this.options.backgroundColor && (this.ctx.fillStyle = v(this.options.backgroundColor), this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)),
                                                    e = new PB(n, []),
                                                    t = new _B(e),
                                                    kB(e, t, t, r = []),
                                                    WB(e.container, r),
                                                    [4, this.renderStack(t)];
                                            case 1:
                                                return A.sent(),
                                                    this.applyEffects([], 2),
                                                    [2, this.canvas]
                                        }
                                        var e, t, r
                                    })
                            })
                    };
                var ts = I;

                function I(A) {
                    this._activeEffects = [],
                        this.canvas = A.canvas || document.createElement("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                    (this.options = A).canvas || (this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px"),
                        this.fontMetrics = new As(document),
                        this.ctx.scale(this.options.scale, this.options.scale),
                        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                        this.ctx.textBaseline = "bottom",
                        this._activeEffects = [],
                        y.getInstance(A.id).debug("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
                }

                var rs = function (A) {
                        return A instanceof In || A instanceof pn || A instanceof Fn && A.type !== hn && A.type !== En
                    },
                    ns = function (A, e) {
                        switch (A) {
                            case Te.BORDER_BOX:
                                return OB(e);
                            case Te.CONTENT_BOX:
                                return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox];
                            default:
                                Te.PADDING_BOX;
                                return SB(e)
                        }
                    },
                    Bs = function (A) {
                        switch (A) {
                            case nr.CENTER:
                                return "center";
                            case nr.RIGHT:
                                return "right";
                            default:
                                nr.LEFT;
                                return "left"
                        }
                    },
                    ss = (os.prototype.render = function (t) {
                        return i(this, void 0, void 0,
                            function () {
                                var e;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                return e = De(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, t),
                                                    [4, as(e)];
                                            case 1:
                                                return e = A.sent(),
                                                this.options.backgroundColor && (this.ctx.fillStyle = v(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                                    this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                                    [2, this.canvas]
                                        }
                                    })
                            })
                    },
                        os);

                function os(A) {
                    this.canvas = A.canvas || document.createElement("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                        this.options = A,
                        this.canvas.width = Math.floor(A.width * A.scale),
                        this.canvas.height = Math.floor(A.height * A.scale),
                        this.canvas.style.width = A.width + "px",
                        this.canvas.style.height = A.height + "px",
                        this.ctx.scale(this.options.scale, this.options.scale),
                        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                        y.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
                }

                function is(A) {
                    return Ne(Be.create(A).parseComponentValue())
                }

                var as = function (r) {
                    return new Promise(function (A, e) {
                        var t = new Image;
                        t.onload = function () {
                            A(t)
                        },
                            t.onerror = e,
                            t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
                    })
                };
                "undefined" != typeof window && ze.setContext(window);
                return function (A, e) {
                    return g = A,
                        w = e = void 0 === e ? {} : e,
                        i(void 0, void 0, void 0,
                            function () {
                                var e, t, r, n, B, s, o, i, a, c, Q, u, l;
                                return R(this,
                                    function (A) {
                                        switch (A.label) {
                                            case 0:
                                                if (!(e = g.ownerDocument)) throw new Error("Element is not attached to a Document");
                                                if (s = e.defaultView) return t = (Math.round(1e3 * Math.random()) + Date.now()).toString(16),
                                                    a = On(g) || "HTML" === g.tagName ?
                                                        function (A) {
                                                            var e = A.body,
                                                                A = A.documentElement;
                                                            if (!e || !A) throw new Error("Unable to get document size");
                                                            var t = Math.max(Math.max(e.scrollWidth, A.scrollWidth), Math.max(e.offsetWidth, A.offsetWidth), Math.max(e.clientWidth, A.clientWidth)),
                                                                e = Math.max(Math.max(e.scrollHeight, A.scrollHeight), Math.max(e.offsetHeight, A.offsetHeight), Math.max(e.clientHeight, A.clientHeight));
                                                            return new _(0, 0, t, e)
                                                        }(e) : z(g),
                                                    i = a.width,
                                                    n = a.height,
                                                    r = a.left,
                                                    a = a.top,
                                                    o = M({},
                                                        {
                                                            allowTaint: !1,
                                                            imageTimeout: 15e3,
                                                            proxy: void 0,
                                                            useCORS: !1
                                                        },
                                                        w),
                                                    s = {
                                                        backgroundColor: "#ffffff",
                                                        cache: w.cache || ze.create(t, o),
                                                        logging: !0,
                                                        removeContainer: !0,
                                                        foreignObjectRendering: !1,
                                                        scale: s.devicePixelRatio || 1,
                                                        windowWidth: s.innerWidth,
                                                        windowHeight: s.innerHeight,
                                                        scrollX: s.pageXOffset,
                                                        scrollY: s.pageYOffset,
                                                        x: r,
                                                        y: a,
                                                        width: Math.ceil(i),
                                                        height: Math.ceil(n),
                                                        id: t
                                                    },
                                                    r = M({},
                                                        s, o, w),
                                                    a = new _(r.scrollX, r.scrollY, r.windowWidth, r.windowHeight),
                                                    y.create({
                                                        id: t,
                                                        enabled: r.logging
                                                    }),
                                                    y.getInstance(t).debug("Starting document clone"),
                                                    i = new gB(g, {
                                                        id: t,
                                                        onclone: r.onclone,
                                                        ignoreElements: r.ignoreElements,
                                                        inlineImages: r.foreignObjectRendering,
                                                        copyStyles: r.foreignObjectRendering
                                                    }),
                                                    (n = i.clonedReferenceElement) ? [4, i.toIFrame(e, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                                                throw new Error("Document is not attached to a Window");
                                            case 1:
                                                return B = A.sent(),
                                                    s = e.documentElement ? is(getComputedStyle(e.documentElement).backgroundColor) : ve.TRANSPARENT,
                                                    o = e.body ? is(getComputedStyle(e.body).backgroundColor) : ve.TRANSPARENT,
                                                    i = w.backgroundColor,
                                                    a = "string" == typeof i ? is(i) : null === i ? ve.TRANSPARENT : 4294967295,
                                                    c = g === e.documentElement ? Ee(s) ? Ee(o) ? a : o : s : a,
                                                    Q = {
                                                        id: t,
                                                        cache: r.cache,
                                                        canvas: r.canvas,
                                                        backgroundColor: c,
                                                        scale: r.scale,
                                                        x: r.x,
                                                        y: r.y,
                                                        scrollX: r.scrollX,
                                                        scrollY: r.scrollY,
                                                        width: r.width,
                                                        height: r.height,
                                                        windowWidth: r.windowWidth,
                                                        windowHeight: r.windowHeight
                                                    },
                                                    r.foreignObjectRendering ? (y.getInstance(t).debug("Document cloned, using foreign object rendering"), [4, new ss(Q).render(n)]) : [3, 3];
                                            case 2:
                                                return u = A.sent(),
                                                    [3, 5];
                                            case 3:
                                                return y.getInstance(t).debug("Document cloned, using computed rendering"),
                                                    ze.attachInstance(r.cache),
                                                    y.getInstance(t).debug("Starting DOM parsing"),
                                                    l = Mn(n),
                                                    ze.detachInstance(),
                                                c === l.styles.backgroundColor && (l.styles.backgroundColor = ve.TRANSPARENT),
                                                    y.getInstance(t).debug("Starting renderer"),
                                                    [4, new ts(Q).render(l)];
                                            case 4:
                                                u = A.sent(),
                                                    A.label = 5;
                                            case 5:
                                                return !0 !== r.removeContainer || gB.destroy(B) || y.getInstance(t).error("Cannot detach cloned iframe as it is not in the DOM anymore"),
                                                    y.getInstance(t).debug("Finished rendering"),
                                                    y.destroy(t),
                                                    ze.destroy(t),
                                                    [2, u]
                                        }
                                    })
                            });
                    var g, w
                }
            }, "object" == cs(e) && void 0 !== A ? A.exports = r() : void 0 !== (t = "function" == typeof (r = r) ? r.call(e, t, e, A) : r) && (A.exports = t)
        },
        function (A, e, t) {
            "use strict";
            A.exports = {
                ___: "iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI5REZEOEVGQTU3MTFFQUI2NTBBMTMwQTg4MTUwM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI5REZEOERGQTU3MTFFQUI2NTBBMTMwQTg4MTUwM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjFFMEJEMENGOTBCMTFFQUI2NTBBMTMwQTg4MTUwM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjFFMEJEMERGOTBCMTFFQUI2NTBBMTMwQTg4MTUwM0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DaXOLAAA1WklEQVR42uydDXRc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",
                ____: function (A) {
                    return "<style>.s" + window._d + "{display: flex;align-items: center;justify-content: center;height: 100%;position: absolute;top: 0;width: 100%;overflow: hidden; background: url(data:image/png;base64," + this.___ + A + ") repeat;}</style>"
                }
            }
        },
        function (A, e, t) {
            t(0)(t(6))
        },
        function (A, e) {
            A.exports = "'use strict';\n\nfunction PrefixInteger(num, m) {\n    return (Array(m).join(0) + num).slice(-m);\n}\n\n$(function () {\n    for (var i = 0; i < 24; i++) {\n        var v = PrefixInteger(i, 2);\n        $('.edit-phone-time-hour').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 0; i < 60; i++) {\n        var v = PrefixInteger(i, 2);\n        $('.edit-phone-time-mini').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 2018; i < 2022; i++) {\n        var v = i + '年';\n        $('.edit-phone-time-year').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 1; i < 13; i++) {\n        var v = i + '月';\n        $('.edit-phone-time-month').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 1; i < 32; i++) {\n        var v = i + '日';\n        $('.edit-phone-time-day').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n\n    var img_tips = 'Right Click to Save';\n\n    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n        //移动端\n        img_tips = 'Long Press to Save';\n    }\n\n    $('#lightBoxToggle').lightbox({\n        image: null,\n        caption: img_tips,\n        modalTeamplate: '<div class=\"icon-spinner icon-spin loader\"></div><div class=\"modal-dialog\"><button class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"icon-remove\"></i></button><button class=\"controller prev\"><i class=\"icon icon-chevron-left\"></i></button><button class=\"controller next\"><i class=\"icon icon-chevron-right\"></i></button><img class=\"lightbox-img\" src=\"{image}\" alt=\"\" /><div class=\"caption\"><div class=\"content\">{caption}<div></div></div>'\n    });\n\n    $('.el-remove').remove();\n});"
        },
        , , , , , , , , ,
        function (A, e, t) {
            "use strict";
            var r = B(t(2)),
                n = B(t(17));

            function B(A) {
                return A && A.__esModule ? A : {
                    default:
                    A
                }
            }

            $(function () {
                r.default.run(n.default)
            });
            t(5)
        },
        function (A, e, t) {
            "use strict";
            var t = t(1),
                n = (t = t) && t.__esModule ? t : {
                    default:
                    t
                };
            A.exports = {
                mounted: function () {
                    var A = new Date,
                        e = n.default.get("msg_setting"),
                        t = n.default.get("msg_users"),
                        r = n.default.get("msg_dialogs");
                    e && (this.setting = e),
                    t && (this.users = t),
                    r && (this.dialogs = r),
                        this.setting.date_hour = 10 <= A.getHours() ? A.getHours() : "0" + A.getHours().toString(),
                        this.setting.date_min = 10 <= A.getMinutes() ? A.getMinutes() : "0" + A.getMinutes().toString()
                },
                data: {
                    setting: {
                        message: 1,
                        title: "Me",
                        dialog_content: "Hello, world!",
                        dialog_money: 88,
                        dialog_voice: 2,
                        dialog_voice_isread: 1,
                        dialog_repacket_remark: "恭喜发财，大吉大利",
                        dialog_trans_remark: "",
                        voice: 0,
                        background: "",
                        date_year: "",
                        date_month: "",
                        date_day: "",
                        date_xinqi: "",
                        date_shiduan: "",
                        date_hour: "",
                        date_min: ""
                    },
                    users: [{
                        id: "user-1",
                        name: "Me",
                        image: "./static/app/images/demo-avatar1.jpg",
                        is_me: !0,
                        selected: !0
                    },
                        {
                            id: "user-2",
                            name: "User",
                            image: "./static/app/images/demo-avatar2.jpg"
                        }],
                    dialogs: [{
                        id: "dialog-1",
                        type: "text",
                        content: "hello，world",
                        is_me: !1,
                        user_id: "user-2"
                    },
                        {
                            id: "dialog-2",
                            type: "text",
                            content: "hello，world!!!",
                            is_me: !0,
                            user_id: "user-1"
                        },
                        {
                            id: "dialog-3",
                            type: "notice",
                            content: "2019年5月20日 下午4:20"
                        },
                        {
                            id: "dialog-4",
                            type: "transfer",
                            money: "1.00",
                            is_me: !0,
                            user_id: "user-1",
                            is_get: !1,
                            remark: "转账给User"
                        },
                        {
                            id: "dialog-5",
                            type: "transfer",
                            money: "1.00",
                            user_id: "user-2",
                            is_get: !0,
                            remark: "已领取"
                        },
                        {
                            id: "dialog-6",
                            type: "redpacket",
                            money: "1.00",
                            is_me: !0,
                            user_id: "user-1",
                            is_get: !1,
                            remark: "恭喜发财，大吉大利"
                        },
                        {
                            id: "dialog-7",
                            type: "redpacket",
                            money: "1.00",
                            user_id: "user-2",
                            is_get: !0,
                            remark: "恭喜发财，大吉大利"
                        },
                        {
                            id: "dialog-8",
                            type: "image",
                            image: _path.images + "/dialog-demo1.jpeg",
                            is_me: !1,
                            user_id: "user-2"
                        },
                        {
                            id: "dialog-9",
                            type: "voice",
                            time: 10,
                            is_me: !1,
                            user_id: "user-2"
                        },
                        {
                            id: "dialog-10",
                            type: "voice",
                            time: 60,
                            is_me: !0,
                            user_id: "user-1"
                        }]
                },
                methods: {
                    changeTitle: function () {
                        var n = this.users.length
                        if (n === 1) {
                            this.setting.title = this.users[0].name
                        } else if (n === 2) {
                            this.setting.title = this.users[1].name
                        } else {
                            this.setting.title = "Group Chat(" + n + ")"
                        }
                        // console.log(this.setting.title)
                    },
                    addUser: function () {
                        this.users.push({
                            id: "user-" + (new Date).valueOf(),
                            name: "New User",
                            image: _path.images + "/face-default.jpg"
                        })
                        this.changeTitle()
                    },
                    delUser: function (A) {
                        var e = this.users[A],
                            t = this.dialogs.filter(function (A) {
                                return A.user_id != e.id
                            });
                        this.dialogs = t,
                            this.users.splice(A, 1)
                        this.changeTitle()
                    },
                    addDialog: function (A) {
                        this.dialogs.push(A),
                            setTimeout(function () {
                                    $(".phone-body").scrollTop($(".phone-body .msg-content").height())
                                },
                                100)
                    },
                    addNoticeDialog: function () {
                        var A = this.setting.date_year + this.setting.date_month + this.setting.date_day + " " + this.setting.date_xinqi + " " + this.setting.date_shiduan + (this.setting.date_shiduan ? parseInt(this.setting.date_hour) : this.setting.date_hour) + ":" + this.setting.date_min,
                            A = {
                                id: "dialog-" + (new Date).valueOf(),
                                type: "notice",
                                content: A
                            };
                        this.addDialog(A),
                            this.setting.date_year = "",
                            this.setting.date_month = "",
                            this.setting.date_day = "",
                            this.setting.date_xinqi = "",
                            this.setting.date_shiduan = ""
                    },
                    addTextDialog: function () {
                        var A = this.getSelectedUser();
                        if (!A) return alert("No User Selected!"),
                            !1;
                        if (!this.setting.dialog_content) return alert("No Text!"),
                            !1;
                        A = {
                            id: "dialog-" + (new Date).valueOf(),
                            type: "text",
                            content: this.setting.dialog_content,
                            is_me: A.is_me,
                            user_id: A.id
                        };
                        this.addDialog(A)
                    },
                    addVoiceDialog: function () {
                        var A = this.getSelectedUser();
                        if (!A) return alert("No User Selected!"),
                            !1;
                        if (!this.setting.dialog_voice) return alert("No Voice Length!"),
                            !1;
                        60 < this.setting.dialog_voice && (this.setting.dialog_voice = 60);
                        A = {
                            id: "dialog-" + (new Date).valueOf(),
                            type: "voice",
                            time: this.setting.dialog_voice,
                            is_me: A.is_me,
                            user_id: A.id,
                            isread: this.setting.dialog_voice_isread
                        };
                        this.addDialog(A)
                    },
                    addImageDialog: function (A) {
                        var e = this.getSelectedUser();
                        if (!e) return alert("No User Selected!"),
                            !1;
                        var t = this,
                            A = A.target.files[0],
                            r = new FileReader;
                        r.onload = function () {
                            t.dealImage(r.result, {
                                    width: 1260,
                                    quality: .9
                                },
                                function (A) {
                                    A = {
                                        id: "dialog-" + (new Date).valueOf(),
                                        type: "image",
                                        image: A,
                                        is_me: e.is_me,
                                        user_id: e.id
                                    };
                                    t.addDialog(A)
                                })
                        },
                            r.readAsDataURL(A)
                    },
                    addTransferDialog: function () {
                        var A = this.getSelectedUser();
                        if (!A) return alert("No User Selected!"),
                            !1;
                        // if (!this.setting.dialog_money) return alert("Unvalid Amount!"),
                        //     !1;
                        var e = "转账给你",
                            t = (A.is_me && (e = "转账给" + ((t = this.getOtherUser()) ? t.name : "马克")), this.setting.dialog_trans_remark && (e = this.setting.dialog_trans_remark), {
                                id: "dialog-" + (new Date).valueOf(),
                                type: "transfer",
                                money: this.setting.dialog_money,
                                is_me: A.is_me,
                                user_id: A.id,
                                remark: e,
                                trans_remark: this.setting.dialog_trans_remark
                            });
                        this.addDialog(t),
                            this.setting.dialog_trans_remark = ""
                    },
                    addRedpacketDialog: function () {
                        var A = this.getSelectedUser();
                        if (!A) return alert("No User Selected!"),
                            !1;
                        // if (!this.setting.dialog_money) return alert("No Amount!"),
                        //     !1;
                        var e = this.setting.dialog_repacket_remark,
                            A = {
                                id: "dialog-" + (new Date).valueOf(),
                                type: "redpacket",
                                money: this.setting.dialog_money,
                                is_me: A.is_me,
                                user_id: A.id,
                                remark: e
                            };
                        this.addDialog(A),
                            this.setting.dialog_repacket_remark = "恭喜发财，大吉大利"
                    },
                    getUserById: function (e) {
                        var A = this.users.filter(function (A) {
                            return A.id == e
                        });
                        return 0 < A.length ? A[0] : {
                            image: null
                        }
                    },
                    setUserImage: function (A, e) {
                        var t = this,
                            A = A.target.files[0],
                            r = new FileReader;
                        r.onload = function () {
                            t.dealImage(r.result, {
                                    width: 400
                                },
                                function (A) {
                                    t.users[e].image = A
                                })
                        },
                            r.readAsDataURL(A)
                    },
                    setBackground: function (A) {
                        var e = this,
                            A = A.target.files[0],
                            t = new FileReader;
                        t.onload = function () {
                            e.dealImage(t.result, {
                                    width: 1400,
                                    quality: .9
                                },
                                function (A) {
                                    e.$set(e.setting, "background", A)
                                })
                        },
                            t.readAsDataURL(A)
                    },
                    deleteBackground: function () {
                        this.$set(this.setting, "background", "")
                    },
                    selectUser: function (A) {
                        for (var e in this.users) {
                            e = this.users[e];
                            if (e.selected) {
                                e.selected = !1;
                                break
                            }
                        }
                        this.$set(this.users[A], "selected", !0)
                    },
                    getSelectedUser: function () {
                        var A, e = null;
                        for (A in this.users) {
                            var t = this.users[A];
                            if (t.selected) {
                                e = t;
                                break
                            }
                        }
                        return e
                    },
                    getOtherUser: function () {
                        var A = this.users.filter(function (A) {
                            return !A.is_me
                        });
                        return 0 < A.length ? A[0] : null
                    },
                    getMeUser: function () {
                        var A = this.users.filter(function (A) {
                            return A.is_me
                        });
                        return 0 < A.length ? A[0] : null
                    },
                    getSender: function () {
                        var A = this.getSelectedUser();
                        return A ? A.name : "未选择"
                    },
                    deleteDialog: function (A) {
                        this.dialogs.splice(A, 1)
                    },
                    getVoiceLength: function (A) {
                        return 380 / 59 * (A - 1)
                    },
                    cleanDialogs: function () {
                        confirm("您确认要清空对话内容？") && (this.dialogs = [])
                    },
                    dealImage: function (A, o, i) {
                        var e = new Image;
                        e.src = A,
                            e.onload = function () {
                                var A = (e = this.width) / this.height,
                                    e = o.width && e > o.width ? o.width : e,
                                    A = o.height || e / A,
                                    t = .7,
                                    r = document.createElement("canvas"),
                                    n = r.getContext("2d"),
                                    B = document.createAttribute("width"),
                                    s = (B.nodeValue = e, document.createAttribute("height")),
                                    B = (s.nodeValue = A, r.setAttributeNode(B), r.setAttributeNode(s), n.drawImage(this, 0, 0, e, A), o.quality && o.quality <= 1 && 0 < o.quality && (t = o.quality), r.toDataURL("image/jpeg", t));
                                i(B)
                            }
                    },
                    redpacketGet: function (A) {
                        var e = this.dialogs[A],
                            t = this.getUserById(e.user_id),
                            A = (this.$set(this.dialogs[A], "is_get", !0), "[红包] 你领取了" + t.name + "的#红包#"),
                            e = (e.is_me && (A = "[红包]" + t.name + "领取了你的#红包#"), this.matchReplace(A, ["\\[红包]", "\\#.*?\\#"], [function (A, e) {
                                return '<i class="msg-dialog-notice-redp-icon"></i>'
                            },
                                function (A, e) {
                                    return "<em>" + A.substring(1, A.length - 1) + "</em>"
                                }])),
                            t = {
                                id: "dialog-" + (new Date).valueOf(),
                                type: "notice",
                                content: e,
                                is_system: 1
                            };
                        this.addDialog(t)
                    },
                    transferGet: function (A) {
                        var e = this.dialogs[A],
                            t = e.is_me ? this.getOtherUser() : this.getMeUser(),
                            A = (this.$set(this.dialogs[A], "is_get", !0), this.$set(this.dialogs[A], "remark", "已被领取"), e.trans_remark && this.$set(this.dialogs[A], "remark", "已被领取 - " + e.trans_remark), {
                                id: "dialog-" + (new Date).valueOf(),
                                type: "transfer",
                                money: e.money,
                                is_me: !e.is_me,
                                user_id: t.id,
                                remark: "已收款",
                                is_get: !0
                            });
                        this.addDialog(A)
                    },
                    onBackgroundLoad: function (A) {
                        (A.target.width >= A.target.height || A.target.width < 1125 || A.target.height < 2436) && $(A.target).addClass("phone-bg-for-height")
                    }
                },
                watch: {
                    setting: {
                        handler: function (A, e) {
                            n.default.set("msg_setting", A)
                        },
                        deep: !0
                    },
                    users: {
                        handler: function (A, e) {
                            n.default.set("msg_users", A)
                        },
                        deep: !0
                    },
                    dialogs: {
                        handler: function (A, e) {
                            n.default.set("msg_dialogs", A)
                        },
                        deep: !0
                    }
                }
            }
        }]);
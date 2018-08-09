require = function n(l, i, u) {
function s(t, e) {
if (!i[t]) {
if (!l[t]) {
var o = "function" == typeof require && require;
if (!e && o) return o(t, !0);
if (a) return a(t, !0);
var r = new Error("Cannot find module '" + t + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
var c = i[t] = {
exports: {}
};
l[t][0].call(c.exports, function(e) {
var o = l[t][1][e];
return s(o || e);
}, c, c.exports, n, l, i, u);
}
return i[t].exports;
}
for (var a = "function" == typeof require && require, e = 0; e < u.length; e++) s(u[e]);
return s;
}({
Helloworld: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, n = r.property, l = function(o) {
__extends(e, o);
function e() {
var e = null !== o && o.apply(this, arguments) || this;
e.label = null;
e.cocoNode = [];
e.text = "hello";
return e;
}
e.prototype.start = function() {
this.label.string = this.text;
for (var e = 0; e < this.cocoNode.length; e++) {
this.cocoNode[e].runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(50, 50)), cc.moveBy(.5, cc.v2(-50, -50)))));
jsb.jsbTest && jsb.jsbTest.testlog();
}
};
__decorate([ n(cc.Label) ], e.prototype, "label", void 0);
__decorate([ n([ cc.Node ]) ], e.prototype, "cocoNode", void 0);
__decorate([ n ], e.prototype, "text", void 0);
return e = __decorate([ c ], e);
}(cc.Component);
t.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld" ]);
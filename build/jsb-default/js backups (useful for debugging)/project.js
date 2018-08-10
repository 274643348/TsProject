require = function n(i, l, u) {
function s(t, e) {
if (!l[t]) {
if (!i[t]) {
var o = "function" == typeof require && require;
if (!e && o) return o(t, !0);
if (a) return a(t, !0);
var r = new Error("Cannot find module '" + t + "'");
throw r.code = "MODULE_NOT_FOUND", r;
}
var c = l[t] = {
exports: {}
};
i[t][0].call(c.exports, function(e) {
var o = i[t][1][e];
return s(o || e);
}, c, c.exports, n, i, l, u);
}
return l[t].exports;
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
var r = cc._decorator, c = r.ccclass, n = r.property, i = function(o) {
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
if (jsb.jsbTest) {
new jsb.jsbTest().testlog();
}
}
};
__decorate([ n(cc.Label) ], e.prototype, "label", void 0);
__decorate([ n([ cc.Node ]) ], e.prototype, "cocoNode", void 0);
__decorate([ n ], e.prototype, "text", void 0);
return e = __decorate([ c ], e);
}(cc.Component);
t.default = i;
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld" ]);
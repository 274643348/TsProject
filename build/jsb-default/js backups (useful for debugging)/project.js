require = function n(i, l, u) {
function a(r, e) {
if (!l[r]) {
if (!i[r]) {
var o = "function" == typeof require && require;
if (!e && o) return o(r, !0);
if (d) return d(r, !0);
var t = new Error("Cannot find module '" + r + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
var c = l[r] = {
exports: {}
};
i[r][0].call(c.exports, function(e) {
var o = i[r][1][e];
return a(o || e);
}, c, c.exports, n, i, l, u);
}
return l[r].exports;
}
for (var d = "function" == typeof require && require, e = 0; e < u.length; e++) a(u[e]);
return a;
}({
Helloworld: [ function(e, o, r) {
"use strict";
cc._RF.push(o, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
Object.defineProperty(r, "__esModule", {
value: !0
});
var t = cc._decorator, c = t.ccclass, n = t.property, i = function(o) {
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
}
};
__decorate([ n(cc.Label) ], e.prototype, "label", void 0);
__decorate([ n([ cc.Node ]) ], e.prototype, "cocoNode", void 0);
__decorate([ n ], e.prototype, "text", void 0);
return e = __decorate([ c ], e);
}(cc.Component);
r.default = i;
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld" ]);
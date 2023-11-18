System.register("chunks:///_virtual/Content.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,n,o,r,s,l,a,p,c,h,u;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,l=t.SpriteFrame,a=t.Sprite,p=t.v3,c=t.Tween,h=t.tween,u=t.Component}],execute:function(){var f,y,d,v,g,b,m;r._RF.push({},"c0acd14wnZFk7eVmFaIo/eP","Content",void 0);var _=s.ccclass,z=s.property;t("Content",(f=_("Content"),y=z([l]),d=z([l]),f((b=i((g=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return i=t.call.apply(t,[this].concat(r))||this,n(i,"sprites",b,o(i)),n(i,"z_sprites",m,o(i)),i.tweenRF=null,i.list=[[],[],[]],i.list_index=[3,3,3],i.speed=0,i}e(i,t);var r=i.prototype;return r.start=function(){for(var t=this,i=0;i<this.list.length;i++)for(var e=0;e<4;e++)this.list[i].push({type:5,blur:!1});for(var n=0;n<this.list.length;n++)for(var o=0;o<100;o++)this.list[n].push({type:7*Math.random()^0,blur:!0});for(var r=0;r<this.list.length;r++)for(var s=0;s<3;s++)this.list[r].push({type:7*Math.random()^0,blur:!1});this.node.children.forEach((function(i,e){i.children.forEach((function(i,n){var o=t.list[e][n],r=o.blur?t.z_sprites:t.sprites;i.getComponent(a).spriteFrame=r[o.type]}))}))},r.onStart=function(){var t=this,i=p(0,50,0),e=-21890,n=p(0,e,0);this.speed=e/8,this.node.children.forEach((function(e,o){c.stopAllByTarget(e),h(e).delay(.1*o).by(.2,{position:i}).by(8,{position:n},{onUpdate:function(i){i.children.forEach((function(e){if(e.parent.position.y+e.position.y<-105){e.setPosition(0,e.position.y+840);var n=++t.list_index[o],r=t.list[o][n];if(r){var s=r.blur?t.z_sprites:t.sprites;e.getComponent(a).spriteFrame=s[r.type]}else c.stopAllByTarget(i)}}))}}).start()}))},r.onStop=function(){var t=this,i=this.list_index[0];this.list[0].length=i+1,this.list[1].length=i+1,this.list[2].length=i+1;for(var e=0;e<this.list.length;e++)for(var n=0;n<8+e;n++)this.list[e].push({type:7*Math.random()^0,blur:!0});for(var o=0;o<this.list.length;o++)for(var r=0;r<3;r++)this.list[o].push({type:5,blur:!1});var s=0;this.node.children.forEach((function(i,e){c.stopAllByTarget(i);var n=-(210*t.list[e].length-630+30),o=p(0,n-i.position.y),r=o.y/t.speed;h(i).by(r,{position:o},{onUpdate:function(i){i.children.forEach((function(i){if(i.parent.position.y+i.position.y<-105){i.setPosition(0,i.position.y+840);var n=++t.list_index[e],o=t.list[e][n];if(o){var r=o.blur?t.z_sprites:t.sprites;i.getComponent(a).spriteFrame=r[o.type]}}}))}}).by(.4,{position:p(0,30)}).call((function(){c.stopAllByTarget(i),i.children.forEach((function(t){t.setPosition(0,t.position.y+i.position.y)})),i.setPosition(i.position.x,0),++s>=3&&t.do_compleet()})).start()}))},r.do_compleet=function(){this.list=[[],[],[]],this.list_index=[3,3,3],console.log("结束")},r.update=function(t){},i}(u)).prototype,"sprites",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=i(g.prototype,"z_sprites",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=g))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/G_Paint.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r,i,c,s,a,u,p,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,c=e._decorator,s=e.Graphics,a=e.Node,u=e.v3,p=e.UITransform,l=e.Component}],execute:function(){var _,h,v,g,f;i._RF.push({},"e8306u/jKVLbKs5VHFgJ1bK","G_Paint",void 0);var y=c.ccclass,d=c.property;e("G_Paint",(_=y("G_Paint"),h=d(s),_((f=t((g=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i))||this,o(t,"g",f,r(t)),t.prev_pos=null,t.line_w=100,t.touch_start=function(e){var n=t.getDrawPos(e);t.g.circle(n.x,n.y,t.line_w/2),t.g.fill(),t.prev_pos=n},t.touch_move=function(e){var n=t.getDrawPos(e);t.g.circle(n.x,n.y,t.line_w/2),t.g.fill(),t.g.lineWidth=t.line_w,t.g.moveTo(t.prev_pos.x,t.prev_pos.y),t.g.lineTo(n.x,n.y),t.g.stroke(),t.prev_pos=n},t.touch_end=function(e){t.prev_pos=null},t}n(t,e);var i=t.prototype;return i.start=function(){this.node.on(a.EventType.TOUCH_START,this.touch_start),this.node.on(a.EventType.TOUCH_MOVE,this.touch_move),this.node.on(a.EventType.TOUCH_END,this.touch_end),this.node.on(a.EventType.TOUCH_CANCEL,this.touch_end)},i.getDrawPos=function(e){var t=e.getUILocation(),n=u(t.x,t.y);return this.g.node.getComponent(p).convertToNodeSpaceAR(n)},i.update=function(e){},t}(l)).prototype,"g",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=g))||v));i._RF.pop()}}}));

System.register("chunks:///_virtual/ggl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,i,r,n,s,l,h,a,u,c,p,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,l=e.Node,h=e.Label,a=e.v3,u=e.UITransform,c=e.v4,p=e.Sprite,g=e.Component}],execute:function(){var _,f,d,v,b,m,y;n._RF.push({},"3fc66+Sz3ZE4KmtIgXbOy+o","ggl",void 0);var w=s.ccclass,T=s.property;e("ggl",(_=w("ggl"),f=T(l),d=T(h),_((m=t((b=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,i(t,"box",m,r(t)),i(t,"progress_label",y,r(t)),t.row=20,t.line=20,t.l_width=640,t.l_height=640,t.half_width=t.l_width/2,t.half_height=t.l_height/2,t.total_count=t.row*t.line,t.box_size=t.l_width/t.row,t.mesh=[],t.material=null,t.points=[],t.progress_count=0,t.touch_move=function(e){var o,i,r=e.getUILocation(),n=a(r.x,r.y,0),s=t.node.getComponent(u).convertToNodeSpaceAR(n),l=(s.x+t.half_width)/t.box_size^0,h=-(s.y-t.half_height)/t.box_size^0,p=null==(o=t.mesh[l])||null==(i=o[h])?void 0:i.brushed;if(null!=p){if(0==p){t.mesh[l][h]=!0;var g=(l+.5)*t.box_size,_=(h+.5)*t.box_size,f=(g-t.half_width)/t.half_width*.5,d=(_-t.half_height)/t.half_height*.5;t.points.push(c(f,d,0,1)),console.log(f,d),t.updateProgress(t.points.length)}t.material.setProperty("game",t.points)}},t.touch_end=function(){},t}o(t,e);var n=t.prototype;return n.start=function(){this.node.on(l.EventType.TOUCH_START,this.touch_move),this.node.on(l.EventType.TOUCH_MOVE,this.touch_move),this.node.on(l.EventType.TOUCH_END,this.touch_end);for(var e=0;e<this.line;e++){this.mesh[e]=[];for(var t=0;t<this.row;t++)this.mesh[e][t]={brushed:!1}}var o=this.node.getComponent(p);this.material=o.getMaterial(0),this.updateProgress(0)},n.updateProgress=function(e){this.progress_label.string=e+"/"+this.row*this.line},n.update=function(e){},t}(g)).prototype,"box",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(b.prototype,"progress_label",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=b))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./G_Paint.ts","./NewComponent.ts","./R_Paint.ts","./ggl.ts","./Render.ts","./Content.ts","./NewComponent2.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NewComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;n._RF.push({},"3fbe8ZlbLFJYoOvTmYV14+l","NewComponent",void 0);var u=o.ccclass;o.property,t("NewComponent",u("NewComponent")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/NewComponent2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,i,c,a,u,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,c=t._decorator,a=t.Node,u=t.UITransform,l=t.v3,s=t.Component}],execute:function(){var p,f,b,g,h,m,v;i._RF.push({},"1bad3VLPcFIL6JLmjvgmGZV","NewComponent",void 0);var d=c.ccclass,y=c.property;t("NewComponent",(p=d("NewComponent"),f=y(a),b=y(a),p((m=e((h=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i))||this,o(e,"box",m,r(e)),o(e,"button",v,r(e)),e}n(e,t);var i=e.prototype;return i.start=function(){},i.update=function(t){},i.onClick=function(t){var e=this.node.getComponent(u).convertToNodeSpaceAR(l(t.getLocation().x,t.getLocation().y));console.log(e.toString())},i.clickButton=function(){var t=this;this.box.setScale(.5,.5),this.scheduleOnce((function(){t.box.setScale(1,1)}),1)},e}(s)).prototype,"box",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(h.prototype,"button",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));i._RF.pop()}}}));

System.register("chunks:///_virtual/R_Paint.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,s,r,h,p,a,u,l,c,_,d;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.find,s=t.Sprite,r=t.RenderTexture,h=t.Camera,p=t.SpriteFrame,a=t.Node,u=t.Vec3,l=t.v3,c=t.UITransform,_=t.instantiate,d=t.Component}],execute:function(){var f;n._RF.push({},"44f140etDBICo4UVu/8a9j3","R_Paint",void 0);var m=o.ccclass;o.property,t("R_Paint",m("R_Paint")(f=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).front=null,e.show=null,e.rt=null,e.cam=null,e.Pen_Texture=null,e.pen=null,e.prev_pos=null,e.min_dis=5,e.pen_nodes=[],e.pen_pool=[],e.touch_start=function(t){var n=e.getDrawPos(t);e.pen.setPosition(n.x,n.y),e.prev_pos=n},e.touch_move=function(t){var n=e.getDrawPos(t);e.interpolate(e.prev_pos,n),e.pen.setPosition(n.x,n.y),e.prev_pos=n},e.touch_end=function(t){e.prev_pos=null,e.removeAllPens()},e}e(n,t);var o=n.prototype;return o.start=function(){this.show=i("show/show_texture",this.node).getComponent(s),this.front=this.node.getChildByName("front"),this.pen=i("Pen_Texture/pen",this.node),this.Pen_Texture=this.node.getChildByName("Pen_Texture"),this.rt=new r,this.rt.initialize({width:720,height:1280}),this.cam=this.node.getChildByName("Camera_Pen").getComponent(h),this.cam.targetTexture=this.rt,this.show.spriteFrame=new p,this.show.spriteFrame.texture=this.rt,this.show.spriteFrame.flipUVY=!0,this.front.getComponent(s).spriteFrame.flipUVY=!0,this.front.getComponent(s).getMaterial(0).setProperty("mask_texture",this.rt),this.node.on(a.EventType.TOUCH_START,this.touch_start),this.node.on(a.EventType.TOUCH_MOVE,this.touch_move),this.node.on(a.EventType.TOUCH_END,this.touch_end),this.node.on(a.EventType.TOUCH_CANCEL,this.touch_end)},o.interpolate=function(t,e){var n=u.distance(e,t);if(n>this.min_dis)for(var o=Math.ceil(n/this.min_dis),i=1;i<o;i++){var s=this.getPen(),r=l();u.lerp(r,t,e,i/o),s.setPosition(r),s.parent=this.Pen_Texture,this.pen_nodes.push(s)}},o.removeAllPens=function(){if(this.pen_nodes.length)for(console.log("清除插值的pen节点",this.pen_nodes.length);this.pen_nodes.length;)this.returnPen(this.pen_nodes.shift())},o.getDrawPos=function(t){var e=t.getUILocation(),n=l(e.x,e.y);return n=this.front.getComponent(c).convertToNodeSpaceAR(n)},o.getPen=function(){return this.pen_pool.length?this.pen_pool.shift():_(this.pen)},o.returnPen=function(t){this.pen_pool.push(t)},o.update=function(t){this.pen_nodes.length&&this.returnPen(this.pen_nodes.shift())},n}(d))||f);n._RF.pop()}}}));

System.register("chunks:///_virtual/Render.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,i,o,s,l,a,p,h,u,c,f,_,v,g,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,l=e.Sprite,a=e.Node,p=e.Camera,h=e.UITransform,u=e.v3,c=e.Vec3,f=e.RenderTexture,_=e.SpriteFrame,v=e.gfx,g=e.instantiate,m=e.Component}],execute:function(){var w,d,y,b,T,C,P,R,x,z,L,A,F;o._RF.push({},"18337Bz80VKC5xxOBPz27Lw","Render",void 0);var O=s.ccclass,U=s.property;e("Render",(w=O("Render"),d=U(l),y=U(a),b=U(p),T=U(a),C=U(a),w((x=t((R=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,r(t,"show",x,i(t)),r(t,"waller",z,i(t)),r(t,"cam",L,i(t)),r(t,"pen",A,i(t)),r(t,"front",F,i(t)),t.rt=null,t.prev_pen_pos=null,t.shadow_pens=[],t.interval_dis=6,t.touch_start=function(e){var n=e.getUILocation(),r=t.waller.getComponent(h).convertToNodeSpaceAR(u(n.x,n.y)),i=t.pen;i.layer=1,r.multiply(u(1.5,-1.5,1)),i.setPosition(r),i.parent=t.waller,t.prev_pen_pos=r},t.touch_end=function(){t.prev_pen_pos=null,t.removeAllPens()},t.touch=function(e){var n=e.getUILocation(),r=t.waller.getComponent(h).convertToNodeSpaceAR(u(n.x,n.y)),i=t.pen;if(i.layer=1,r.multiply(u(1.5,-1.5,1)),t.prev_pen_pos){var o=c.distance(t.prev_pen_pos,r),s=Math.ceil(o/t.interval_dis);if(s>0)for(var l=0;l<s;l++){var a=u();c.lerp(a,t.prev_pen_pos,r,l/(s+1));var p=t.getPen();p.layer=1,p.setPosition(a),p.parent=t.waller,t.shadow_pens.push(p),console.log("增加...pen")}}t.prev_pen_pos=r,i.setPosition(r),i.parent=t.waller,console.log(r.toString())},t.time=0,t.pool=[],t}n(t,e);var o=t.prototype;return o.start=function(){this.rt=new f,this.rt.initialize({width:960,height:960}),this.cam.targetTexture=this.rt,this.show.spriteFrame=new _,this.show.spriteFrame.texture=this.rt,this.show.spriteFrame.flipUVY=!0,this.front.on(a.EventType.TOUCH_START,this.touch_start),this.front.on(a.EventType.TOUCH_MOVE,this.touch),this.front.on(a.EventType.TOUCH_END,this.touch_end),this.front.on(a.EventType.TOUCH_CANCEL,this.touch_end),this.front.getComponent(l).getMaterial(0).setProperty("mask_texture",this.rt)},o.update=function(e){if(this.time+=e,this.time>.3){if(this.shadow_pens.length){var t=this.shadow_pens.shift();t.parent=null,this.pool.push(t),console.log("移除...pen")}this.time=0}},o.removeAllPens=function(){if(this.shadow_pens.length){for(;this.shadow_pens.length;){var e=this.shadow_pens.shift();e.parent=null,this.pool.push(e),console.log("移除...")}console.log("移除...ALL")}},o.clearMap=function(){this.cam.clearFlags=v.ClearFlagBit.COLOR,this.pen.active=!1},o.getPen=function(){return this.pool.length?this.pool.shift():g(this.pen)},t}(m)).prototype,"show",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(R.prototype,"waller",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(R.prototype,"cam",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(R.prototype,"pen",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(R.prototype,"front",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=R))||P));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
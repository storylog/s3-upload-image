require('source-map-support/register'),module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=0)}([function(a,b,c){a.exports=c(1)},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(2),f=c.n(e),g=c(4),h=c.n(g),i=c(5),j=c.n(i),k=c(6),l=c.n(k),m=this,n=null,o=function(){var a=d(f.a.mark(function a(b){var c;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j()(b.data).toBuffer();case 2:return c=a.sent,a.abrupt('return',c);case 4:case'end':return a.stop();}},a,m)}));return function(){return a.apply(this,arguments)}}(),p=function(a){var b=a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),c={};if(3!==b.length)throw new Error('Invalid input string');if(!/image\/(png|jpg|jpeg)/.test(b[1]))throw new Error('Type is not support');return c.type=b[1],c.data=new Buffer(b[2],'base64'),c},q=function(){var a=d(f.a.mark(function a(b,c){var d,e,g,h;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(!n.config),n.config){a.next=3;break}throw new Error('Please input config S3');case 3:return d=p(b),a.next=6,o(d);case 6:return e=a.sent,g={Bucket:c,Key:l.a.generate(15),Body:e},a.prev=8,a.next=11,n.upload(g).promise();case 11:return h=a.sent,a.abrupt('return',h.Location);case 15:throw a.prev=15,a.t0=a['catch'](8),new Error('Cannot upload image');case 18:case'end':return a.stop();}},a,m,[[8,15]])}));return function(){return a.apply(this,arguments)}}();b['default']={init:function(a){n=new h.a.S3(a)},uploadImage:q}},function(a,b,c){a.exports=c(3)},function(a){a.exports=require('regenerator-runtime')},function(a){a.exports=require('aws-sdk')},function(a){a.exports=require('sharp')},function(a){a.exports=require('randomstring')}]);
//# sourceMappingURL=main.map
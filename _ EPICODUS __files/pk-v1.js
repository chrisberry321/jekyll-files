if(!window.TypekitPreview)window.TypekitPreview={};window.TypekitPreview.config={"pk":"//use.typekit.net/p/{id}/{description}/{format}{/extras*}?{token}"};
;(function(window,document,undefined){if(!document.querySelector){document.documentElement.className+=" wf-inactive";return;}function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var l=Date.now||function(){return+new Date};function ca(){this.N=this.P=this.F=this.I=this.J=!0};function da(a){this.b=a}da.prototype.toString=function(){var a=this.b;return encodeURIComponent(a.c.location.hostname||a.f.location.hostname)};function ea(a,b){this.c=a;this.b=b}
ea.prototype.toString=function(){for(var a=[],b=0;b<this.b.length;b++)for(var c=this.b[b],d=c.B(),c=c.B(this.c),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function fa(a,b){this.b=a;this.c=b}fa.prototype.B=function(){return this.c};function ga(a){this.b=a}function ha(a,b){return b};function ia(a){var b=[];a.length&&b.push("1w");for(var c=0;c<a.length;c++){var d=a[c],e=[];e.push(d.css_name);e.push(d.id);var f=d.primer;f&&64===f.length?e.push(d.primer):e.push("all"===d.subset?1:2);for(f=0;f<d.variations.length;f++)e.push(d.variations[f]);b.push(e.join(","))}return b.join(";")};var n={T:"a",Y:"d",S:"i",U:"j",R:"k",X:"l",NONE:"x"};var p={};p.a=p.d=p.l=p.j=function(){return[]};p.i=function(a,b,c){return[new da(a),new ea(b,c)]};p.k=function(a){return[new da(a)]};var ja={};
ja.i=new ga(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new fa(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});function ka(a){this.b=a}ka.prototype.o=function(a,b){var c=a||{},d=this.b.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(b?"http:":"https:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function la(a,b,c,d,e){for(var f=[],g=0;g<d.length;g++)f.push(d[g].toString());c={format:c,extras:f};c.id=a;c.description=b;e&&(c.token=e);return c};function t(a,b,c,d,e,f,g){this.b=a;this.w=b;this.D=c;this.C=d;this.m=e;this.h=f;this.H=g}t.prototype.getName=function(){return this.b};function u(a,b,c,d){this.b=null!=a?a:null;this.c=null!=b?b:null;this.f=null!=c?c:null;this.o=null!=d?d:null}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function v(a,b){return a.b>b.b||a.b===b.b&&a.c>b.c||a.b===b.b&&a.c===b.c&&a.f>b.f?1:a.b<b.b||a.b===b.b&&a.c<b.c||a.b===b.b&&a.c===b.c&&a.f<b.f?-1:0}function w(a,b){return-1===v(a,b)}function x(a,b){return 0===v(a,b)||1===v(a,b)}function na(a,b){return 0===v(a,b)||-1===v(a,b)}function y(a,b){return 0===v(a,b)}
u.prototype.toString=function(){return[this.b,this.c||"",this.f||"",this.o||""].join("")};function z(a){a=ma.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(/^[0-9]+$/.test(a[4])?e=parseInt(a[4],10):e=a[4]));return new u(b,c,d,e)};function oa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.D||"Unknown"===a.getName()&&"AppleWebKit"===a.D&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}function pa(a){return"Chrome"===a.getName()&&x(a.w,new u(6))&&na(a.w,new u(35))}function ra(a){return"Chrome"===a.getName()&&x(a.w,new u(36))}function sa(a){return"BuiltinBrowser"===a.getName()};function A(a){return"Windows"===a.m}function ta(a){return A(a)&&x(a.h,new u(6,1))}function B(a){return A(a)&&y(a.h,new u(5,1))||A(a)&&y(a.h,new u(5,2))||A(a)&&y(a.h,new u(6,0))||ta(a)}function C(a){return"Macintosh"===a.m&&(x(a.h,new u(10,4))||null===a.h.b)}function ua(a,b){return b.J&&("iPhone"===a.m||"iPod"===a.m)&&x(a.h,new u(4,2))&&w(a.h,new u(5))}function va(a,b){return b.J&&("iPhone"===a.m||"iPod"===a.m)&&x(a.h,new u(5))}
function wa(a,b){return b.I&&"iPad"===a.m&&x(a.h,new u(4,2))&&w(a.h,new u(5))}function xa(a,b){return b.I&&"iPad"===a.m&&x(a.h,new u(5))}function D(a,b){return b.F&&"Android"===a.m}function ya(a,b){return D(a,b)&&x(a.h,new u(2,2))&&w(a.h,new u(3,1))}function za(a,b){return D(a,b)&&x(a.h,new u(3,1))&&w(a.h,new u(4,1))}function E(a){return"Linux"===a.m||"Ubuntu"===a.m};var F={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.D&&x(a.C,new u(525,13))&&w(a.C,new u(534,50))&&(B(a)||C(a))||sa(a)&&(ya(a,b)||D(a,b)&&x(a.h,new u(4,1)))||b.F&&"Silk"===a.getName()&&w(a.w,new u(2))&&(ya(a,b)||C)||b.F&&"Silk"===a.getName()&&x(a.w,new u(2))&&D(a,b)&&x(a.h,new u(4,1))||oa(a)&&(wa(a,b)||ua(a,b))||pa(a)&&(wa(a,b)||ua(a,b))||ra(a)&&(wa(a,b)||ua(a,b))||"AdobeAIR"===a.getName()&&x(a.w,new u(2,5))&&(A(a)&&null===a.h.b||E(a)||C(a))},d:function(a,b){return pa(a)&&(B(a)||
E(a)||C(a)||D(a,b)||"CrOS"===a.m||"CrKey"===a.m||xa(a,b)||va(a,b))||ra(a)&&(xa(a,b)||va(a,b))||"Gecko"===a.D&&1===v(a.C,new u(1,9,1))&&na(a.C,new u(38))&&(B(a)||E(a)||C(a)||D(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.D&&x(a.C,new u(534,50))&&(B(a)||C(a))||oa(a)&&(xa(a,b)||va(a,b))||"Opera"===a.getName()&&x(a.w,new u(11,10))&&na(a.w,new u(22))&&(B(a)||E(a)||C(a)||D(a,b))||"MSIE"===a.getName()&&9<=a.H&&(ta(a)||A(a)&&y(a.h,new u(6,0)))||"Edge"===a.getName()&&ta(a)||"MSIE"===a.getName()&&b.P&&
"Windows Phone"===a.m&&x(a.h,new u(8))||sa(a)&&(b.N&&"BlackBerry"===a.m&&x(a.h,new u(10))||E(a))},j:function(a,b){return sa(a)&&za(a,b)||b.F&&"Silk"===a.getName()&&x(a.w,new u(2))&&(za(a,b)||E(a))},i:function(a){return"MSIE"===a.getName()&&x(a.w,new u(6,0))&&(void 0===a.H||9>a.H)&&B(a)},l:function(a,b){return ra(a)&&(B(a)||E(a)||C(a)||D(a,b)||"CrOS"===a.m||"CrKey"===a.m)||"Gecko"===a.D&&x(a.C,new u(39))&&(B(a)||E(a)||C(a)||D(a,b))||"Opera"===a.getName()&&x(a.w,new u(23))&&(B(a)||E(a)||C(a)||D(a,b))},
x:function(){return!1}};function Aa(){var a=Ba,b=new ca,c=new ca,d;for(d in n){var e=n[d];if(F[e]&&F[e](a,c))return e}for(d in n)if(e=n[d],F[e]&&F[e](a,b))return"x";return"k"};function Ca(){var a=document;this.b=navigator.userAgent;this.c=a}var Da=new t("Unknown",new u,"Unknown",new u,"Unknown",new u,void 0);function G(a){var b=H(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!==b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=H(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!==a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function I(a){var b=H(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=H(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=H(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=H(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=H(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ea(){var a=J,b="Unknown",c=z(H(a.b,/Presto\/([\d\w\.]+)/,1)),d=z(I(a)),e=K(a.c);null!==c.b?b="Presto":(-1!=a.b.indexOf("Gecko")&&(b="Gecko"),c=z(H(a.b,/rv:([^\)]+)/,1)));if(-1!=a.b.indexOf("Opera Mini/")){var f=z(H(a.b,/Opera Mini\/([\d\.]+)/,1));return new t("OperaMini",f,b,c,G(a),d,e)}if(-1!=a.b.indexOf("Version/")&&(f=z(H(a.b,/Version\/([\d\.]+)/,1)),null!==f.b))return new t("Opera",f,b,c,G(a),d,e);f=z(H(a.b,/Opera[\/ ]([\d\.]+)/,1));return null!==f.b?new t("Opera",f,b,c,G(a),d,e):new t("Opera",
new u,b,c,G(a),d,e)}
function Fa(){var a=J,b=G(a),c=z(I(a)),d=z(H(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new u,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=H(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=H(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=H(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=H(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=H(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=H(a.b,/PhantomJS\/([\d.]+)/,1));f=z(f);return new t(e,f,"AppleWebKit",d,b,c,K(a.c))}function H(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function K(a){if(a.documentMode)return a.documentMode};function Ga(a){this.b=a||"-"}Ga.prototype.o=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.b)};function Ha(){var a=window;this.c=this.f=a;this.b=this.c.document}var Ia=!!window.FontFace;function Ja(a,b,c,d){b=a.b.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.b.createTextNode(d));return b}function Ka(a,b,c){a=a.b.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}
function La(a,b){a.b.body?b():a.b.addEventListener?a.b.addEventListener("DOMContentLoaded",b):a.b.attachEvent("onreadystatechange",function(){"interactive"!=a.b.readyState&&"complete"!=a.b.readyState||b()})}function L(a){a.parentNode&&a.parentNode.removeChild(a)}
function M(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function Ma(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function Na(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=Ja(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;Ia?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);Ka(a,"head",b)};function Oa(a,b){this.b=a;this.f=a.c.document.documentElement;this.s=b;this.c=new Ga("-");this.u=!1!==b.events;this.g=!1!==b.classes}function Pa(a){a.g&&M(a.f,[a.c.o("wf","loading")]);P(a,"loading")}function Qa(a){if(a.g){var b=Ma(a.f,a.c.o("wf","active")),c=[],d=[a.c.o("wf","loading")];b||c.push(a.c.o("wf","inactive"));M(a.f,c,d)}P(a,"inactive")}function P(a,b,c){if(a.u&&a.s[b])if(c)a.s[b](c.getName(),Q(c));else a.s[b]()};function R(a,b){this.f=a;this.c=4;this.b="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.b=c[1],this.c=parseInt(c[2],10))}R.prototype.getName=function(){return this.f};function Ra(a){return Sa(a)+" "+(a.c+"00")+" 300px "+Ta(a.f)}function Ta(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function Q(a){return a.b+a.c}
function Sa(a){var b="normal";"o"===a.b?b="oblique":"i"===a.b&&(b="italic");return b};function Ua(a,b,c,d,e){this.b=a;this.g=b;this.s=c;this.v=d;this.u=e;this.f={};this.c={}}Ua.prototype.B=function(a){return a?(this.f[a]||this.g).slice(0):this.g.slice(0)};function Va(a,b,c){for(var d=[],e=a.b.split(",")[0].replace(/"|'/g,""),f=a.B(),g,k=[],q={},r=0;r<f.length;r++)g=f[r],0<g.length&&!q[g]&&(q[g]=!0,k.push(g));c=c.b?c.b(e,k,d):k;a.f[b]=c;a.c[b]=d}
function Wa(a,b){for(var c=a.B(b),d=a.c[b]||[],e=[],f=0;f<c.length;f++)e.push(new R(a.b,c[f]));for(f=0;f<d.length;f++)if(c=d[f].b,c!==a.b)for(var g=d[f].B(),k=0;k<g.length;k++)e.push(new R(c,g[k]));return e};function S(a,b){this.b=a;this.f=b;this.c=Ja(this.b,"span",{"aria-hidden":"true"},this.f)}function T(a){Ka(a.b,"body",a.c)}function U(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+Ta(a.f)+";"+("font-style:"+Sa(a)+";font-weight:"+(a.c+"00")+";")};function Xa(a,b,c,d,e,f,g){this.K=a;this.L=b;this.b=c;this.c=d;this.A=g||"BESbswy";this.f={};this.M=e||3E3;this.G=f||null;this.v=this.u=this.s=this.g=null;this.g=new S(this.b,this.A);this.s=new S(this.b,this.A);this.u=new S(this.b,this.A);this.v=new S(this.b,this.A);a=new R(this.c.getName()+",serif",Q(this.c));a=U(a);this.g.c.style.cssText=a;a=new R(this.c.getName()+",sans-serif",Q(this.c));a=U(a);this.s.c.style.cssText=a;a=new R("serif",Q(this.c));a=U(a);this.u.c.style.cssText=a;a=new R("sans-serif",
Q(this.c));a=U(a);this.v.c.style.cssText=a;T(this.g);T(this.s);T(this.u);T(this.v)}var V={W:"serif",V:"sans-serif"},Ya=null;function Za(){if(null===Ya){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);Ya=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return Ya}Xa.prototype.start=function(){this.f.serif=this.u.c.offsetWidth;this.f["sans-serif"]=this.v.c.offsetWidth;this.O=l();$a(this)};
function ab(a,b,c){for(var d in V)if(V.hasOwnProperty(d)&&b===a.f[V[d]]&&c===a.f[V[d]])return!0;return!1}function $a(a){var b=a.g.c.offsetWidth,c=a.s.c.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=Za()&&ab(a,b,c));d?l()-a.O>=a.M?Za()&&ab(a,b,c)&&(null===a.G||a.G.hasOwnProperty(a.c.getName()))?bb(a,a.K):bb(a,a.L):cb(a):bb(a,a.K)}function cb(a){setTimeout(h(function(){$a(this)},a),50)}
function bb(a,b){setTimeout(h(function(){L(this.g.c);L(this.s.c);L(this.u.c);L(this.v.c);b(this.c)},a),0)};function db(a,b,c,d,e,f){this.g=a;this.u=b;this.c=d;this.b=c;this.f=e||3E3;this.s=f||void 0}db.prototype.start=function(){var a=this.b.c.document,b=this,c=l(),d=new Promise(function(d,e){function k(){l()-c>=b.f?e():a.fonts.load(Ra(b.c),b.s).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,c){setTimeout(c,b.f)});Promise.race([e,d]).then(function(){b.g(b.c)},function(){b.u(b.c)})};function eb(a,b,c){this.b=a;this.c=b;this.f=0;this.v=this.u=!1;this.A=c}var W=null;eb.prototype.g=function(a){var b=this.c;b.g&&M(b.f,[b.c.o("wf",a.getName(),Q(a).toString(),"active")],[b.c.o("wf",a.getName(),Q(a).toString(),"loading"),b.c.o("wf",a.getName(),Q(a).toString(),"inactive")]);P(b,"fontactive",a);this.v=!0;fb(this)};
eb.prototype.s=function(a){var b=this.c;if(b.g){var c=Ma(b.f,b.c.o("wf",a.getName(),Q(a).toString(),"active")),d=[],e=[b.c.o("wf",a.getName(),Q(a).toString(),"loading")];c||d.push(b.c.o("wf",a.getName(),Q(a).toString(),"inactive"));M(b.f,d,e)}P(b,"fontinactive",a);fb(this)};function fb(a){0==--a.f&&a.u&&(a.v?(a=a.c,a.g&&M(a.f,[a.c.o("wf","active")],[a.c.o("wf","loading"),a.c.o("wf","inactive")]),P(a,"active")):Qa(a.c))};function gb(){this.c=0;this.b=null}function hb(a){a.c++;return function(){a.c--;ib(a)}}function jb(a,b){a.b=b;ib(a)}function ib(a){0==a.c&&a.b&&(a.b(),a.b=null)};function X(a,b,c,d){this.v=a;this.c=b;this.u=c;this.b=d;this.f="anonymous";this.g=null;this.s="default"}X.prototype.G=function(a){var b=a.auth_id;b&&(this.f=b);if(b=a.auth_token)this.g=b;!(a=a.default_subset)||"default"!==a&&"all"!==a||(this.s=a)};X.prototype.A=function(a){var b=null;if("be"!==this.f)return null;a=kb(this,a);var c=lb(a);if("x"!==this.c){for(b=0;b<c.length;b++)Va(c[b],this.c,this.u);a=ia(a);b=this.c;c=p[b](this.b,b,c);c=la(this.f,a,this.c,c,this.g||void 0);b=this.v.o(c)}return b};
X.prototype.load=function(a,b){var c=b||{};a=kb(this,a);var d=lb(a),e=null;if("x"!==this.c){for(e=0;e<d.length;e++)Va(d[e],this.c,this.u);var e=ia(a),f;f=this.c;f=p[f](this.b,f,d);e=la(this.f,e,this.c,f,this.g||void 0);e=this.v.o(e)}if(mb(this,d,e,c)){c=[];for(e=0;e<d.length;e++){var g=d[e],k=g.B(this.c);f=g.s;var q=g.v,r=g.u;0<k.length&&c.push(nb(f,k,g.b,q,r));g=g.c[this.c]||[];for(k=0;k<g.length;k++){var m=g[k];c.push(nb(f,m.B(),m.b,q,r))}}d=c}else d=[];return d};
function mb(a,b,c,d){var e=!1!==d.events,f=!1!==d.classes,g=new gb,k=new Oa(a.b,d);if("x"===a.c)return Qa(k),!1;if(b.length){var q=[],r={},m=new eb(a.b,k,d.timeout);for(d=0;d<b.length;d++)q=q.concat(Wa(b[d],a.c));for(d=0;d<q.length;d++)r[q[d].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";Pa(k);Na(a.b,c,hb(g));(f||e)&&La(a.b,function(){jb(g,function(){var a=q,b={},c=r||{};if(0===a.length)Qa(m.c);else{m.f+=a.length;m.u=!0;var d,e=[];for(d=0;d<a.length;d++){var f=a[d],g=c[f.getName()],
k=m.c,O=f;k.g&&M(k.f,[k.c.o("wf",O.getName(),Q(O).toString(),"loading")]);P(k,"fontloading",O);k=null;null===W&&(W=window.FontFace?(O=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(O[1],10):!0:!1);W?k=new db(h(m.g,m),h(m.s,m),m.b,f,m.A,g):k=new Xa(h(m.g,m),h(m.s,m),m.b,f,m.A,b,g);e.push(k)}for(d=0;d<e.length;d++)e[d].start()}})})}return!0}
function kb(a,b){for(var c=[],d=0;d<b.length;d++){var e=/^[A-Za-z0-9_-]+$/,f=b[d],g=f.id,k=f.variations,q=f.css_name,q=q&&"string"==typeof q&&q.match(e)?q:g,r=f.subset,r="default"===r||"all"===r?r:a.s,f=(f=f.primer)&&64===f.length?f:null;if("string"==typeof g&&g.match(e)&&"object"==typeof k&&0<k.length){for(var e={},m=[],qa=0;qa<k.length;qa++){var N=k[qa];N&&0<N.length&&!e[N]&&(m.push(N),e[N]=!0)}0<m.length&&c.push(nb(g,m.sort(),q,r,f))}}return c.sort(function(a,b){var c=a.css_name,d=b.css_name;return c<
d?-1:c>d?1:0})}function lb(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];b.push(new Ua(d.css_name,d.variations,d.id,d.subset,d.primer))}return b}function nb(a,b,c,d,e){return{id:a,variations:b,css_name:c,subset:d,primer:e}};window.TypekitPreview||(window.TypekitPreview={});
if(!window.TypekitPreview.load){var ob=new ka((window.TypekitPreview.config||{}).pk),Ba,J=new Ca,pb,qb=J;if(-1!=qb.b.indexOf("MSIE")||-1!=qb.b.indexOf("Trident/")){var Y=J,rb=G(Y),sb=z(I(Y)),tb=null,ub=null,vb=null,wb=H(Y.b,/Trident\/([\d\w\.]+)/,1),xb=K(Y.c),tb=-1!=Y.b.indexOf("MSIE")?z(H(Y.b,/MSIE ([\d\w\.]+)/,1)):z(H(Y.b,/rv:([\d\w\.]+)/,1));""!==wb?(ub="Trident",vb=z(wb)):(ub="Unknown",vb=new u);pb=new t("MSIE",tb,ub,vb,rb,sb,xb)}else{var yb;if(-1!=J.b.indexOf("Edge/")){var zb=J,Ab=G(zb),Bb=z(I(zb)),
Cb=z(H(zb.b,/Edge\/([\d\w\.]+)/,1));yb=new t("Edge",Cb,"Edge",Cb,Ab,Bb,K(zb.c))}else{var Db;if(-1!=J.b.indexOf("Opera"))Db=Ea();else{var Eb;if(/OPR\/[\d.]+/.test(J.b))Eb=Fa();else{var Fb;if(/AppleWeb(K|k)it/.test(J.b))Fb=Fa();else{var Gb;if(-1!=J.b.indexOf("Gecko")){var Z=J,Hb="Unknown",Ib=new u,Jb=z(I(Z));-1!=Z.b.indexOf("Firefox")?(Hb="Firefox",Ib=z(H(Z.b,/Firefox\/([\d\w\.]+)/,1))):-1!=Z.b.indexOf("Mozilla")&&(Hb="Mozilla");var Kb=z(H(Z.b,/rv:([^\)]+)/,1));Gb=new t(Hb,Ib,"Gecko",Kb,G(Z),Jb,K(Z.c))}else Gb=
Da;Fb=Gb}Eb=Fb}Db=Eb}yb=Db}pb=yb}Ba=pb;var Lb=Aa(),Mb=new X(ob,Lb,ja[Lb]||new ga(ha),new Ha);window.TypekitPreview=Mb;window.TypekitPreview.setup=Mb.G;window.TypekitPreview.load=Mb.load;window.TypekitPreview.getCssUrl=Mb.A};}(this,document));


// pako.min.js - must be inlcuded here as this file ends into worker which cannot load other dependencies
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).pako={})}(this,(function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t){for(var a=Array.prototype.slice.call(arguments,1);a.length;){var i=a.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)e(i,n)&&(t[n]=i[n])}}return t}function i(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)}var n={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(a,a+i),n);else for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;e<a;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;e<a;e++)r=t[e],s.set(r,n),n+=r.length;return s},Buf8:function(t){return new Uint8Array(t)},Buf16:function(t){return new Uint16Array(t)},Buf32:function(t){return new Int32Array(t)}},r={arraySet:function(t,e,a,i,n){for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)},Buf8:function(t){return new Array(t)},Buf16:function(t){return new Array(t)},Buf32:function(t){return new Array(t)}},s=function(){var t="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;return s=function(){return t},t},o=function(t,e,a,i,h){return(o=s()?n.arraySet:r.arraySet)(t,e,a,i,h)},h=function(t){return(h=s()?n.flattenChunks:r.flattenChunks)(t)},l=function(t){return(l=s()?n.Buf8:r.Buf8)(t)},d=function(t){return(d=s()?n.Buf16:r.Buf16)(t)},_=function(t){return(_=s()?n.Buf32:r.Buf32)(t)},f=function(){var t=!0;try{String.fromCharCode.apply(null,[0])}catch(e){t=!1}return f=function(){return t},t},u=function(){var t=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){t=!1}return u=function(){return t},t},c=function(t){for(var e=l(256),a=0;a<256;a++)e[a]=a>=252?6:a>=248?5:a>=240?4:a>=224?3:a>=192?2:1;return e[254]=e[254]=1,c=function(t){return e[t]},e[t]};function g(t){var e,a,i,n,r,s=t.length,o=0;for(n=0;n<s;n++)55296==(64512&(a=t.charCodeAt(n)))&&n+1<s&&56320==(64512&(i=t.charCodeAt(n+1)))&&(a=65536+(a-55296<<10)+(i-56320),n++),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),r=0,n=0;r<o;n++)55296==(64512&(a=t.charCodeAt(n)))&&n+1<s&&56320==(64512&(i=t.charCodeAt(n+1)))&&(a=65536+(a-55296<<10)+(i-56320),n++),a<128?e[r++]=a:a<2048?(e[r++]=192|a>>>6,e[r++]=128|63&a):a<65536?(e[r++]=224|a>>>12,e[r++]=128|a>>>6&63,e[r++]=128|63&a):(e[r++]=240|a>>>18,e[r++]=128|a>>>12&63,e[r++]=128|a>>>6&63,e[r++]=128|63&a);return e}function w(t,e){if(e<65534&&(t.subarray&&u()||!t.subarray&&f()))return String.fromCharCode.apply(null,i(t,e));for(var a="",n=0;n<e;n++)a+=String.fromCharCode(t[n]);return a}function b(t,e){var a,i,n,r,s=e||t.length,o=new Array(2*s);for(i=0,a=0;a<s;)if((n=t[a++])<128)o[i++]=n;else if((r=c(n))>4)o[i++]=65533,a+=r-1;else{for(n&=2===r?31:3===r?15:7;r>1&&a<s;)n=n<<6|63&t[a++],r--;r>1?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return w(o,i)}function m(t,e){var a;for((e=e||t.length)>t.length&&(e=t.length),a=e-1;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+c(t[a])>e?a:e}function p(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{r=r+(n=n+e[i++]|0)|0}while(--s);n%=65521,r%=65521}return n|r<<16|0}var v=function(){var t=function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}();return v=function(){return t},t};function k(t,e,a,i){var n=v(),r=i+a;t^=-1;for(var s=i;s<r;s++)t=t>>>8^n[255&(t^e[s])];return-1^t}function y(t,e){var a,i,n,r,s,o,h,l,d,_,f,u,c,g,w,b,m,p,v,k,y,x,z,A,B;a=t.state,i=t.next_in,A=t.input,n=i+(t.avail_in-5),r=t.next_out,B=t.output,s=r-(e-t.avail_out),o=r+(t.avail_out-257),h=a.dmax,l=a.wsize,d=a.whave,_=a.wnext,f=a.window,u=a.hold,c=a.bits,g=a.lencode,w=a.distcode,b=(1<<a.lenbits)-1,m=(1<<a.distbits)-1;t:do{c<15&&(u+=A[i++]<<c,c+=8,u+=A[i++]<<c,c+=8),p=g[u&b];e:for(;;){if(u>>>=v=p>>>24,c-=v,0===(v=p>>>16&255))B[r++]=65535&p;else{if(!(16&v)){if(0==(64&v)){p=g[(65535&p)+(u&(1<<v)-1)];continue e}if(32&v){a.mode=12;break t}t.msg="invalid literal/length code",a.mode=30;break t}k=65535&p,(v&=15)&&(c<v&&(u+=A[i++]<<c,c+=8),k+=u&(1<<v)-1,u>>>=v,c-=v),c<15&&(u+=A[i++]<<c,c+=8,u+=A[i++]<<c,c+=8),p=w[u&m];a:for(;;){if(u>>>=v=p>>>24,c-=v,!(16&(v=p>>>16&255))){if(0==(64&v)){p=w[(65535&p)+(u&(1<<v)-1)];continue a}t.msg="invalid distance code",a.mode=30;break t}if(y=65535&p,c<(v&=15)&&(u+=A[i++]<<c,(c+=8)<v&&(u+=A[i++]<<c,c+=8)),(y+=u&(1<<v)-1)>h){t.msg="invalid distance too far back",a.mode=30;break t}if(u>>>=v,c-=v,y>(v=r-s)){if((v=y-v)>d&&a.sane){t.msg="invalid distance too far back",a.mode=30;break t}if(x=0,z=f,0===_){if(x+=l-v,v<k){k-=v;do{B[r++]=f[x++]}while(--v);x=r-y,z=B}}else if(_<v){if(x+=l+_-v,(v-=_)<k){k-=v;do{B[r++]=f[x++]}while(--v);if(x=0,_<k){k-=v=_;do{B[r++]=f[x++]}while(--v);x=r-y,z=B}}}else if(x+=_-v,v<k){k-=v;do{B[r++]=f[x++]}while(--v);x=r-y,z=B}for(;k>2;)B[r++]=z[x++],B[r++]=z[x++],B[r++]=z[x++],k-=3;k&&(B[r++]=z[x++],k>1&&(B[r++]=z[x++]))}else{x=r-y;do{B[r++]=B[x++],B[r++]=B[x++],B[r++]=B[x++],k-=3}while(k>2);k&&(B[r++]=B[x++],k>1&&(B[r++]=B[x++]))}break}}break}}while(i<n&&r<o);i-=k=c>>3,u&=(1<<(c-=k<<3))-1,t.next_in=i,t.next_out=r,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=r<o?o-r+257:257-(r-o),a.hold=u,a.bits=c}var x=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],z=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],A=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],B=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];function E(t,e,a,i,n,r,s,o){var h,l,_,f,u,c,g,w,b,m=o.bits,p=0,v=0,k=0,y=0,E=0,S=0,C=0,Z=0,R=0,U=0,O=null,T=0,D=d(16),L=d(16),N=null,j=0;for(p=0;p<=15;p++)D[p]=0;for(v=0;v<i;v++)D[e[a+v]]++;for(E=m,y=15;y>=1&&0===D[y];y--);if(E>y&&(E=y),0===y)return n[r++]=20971520,n[r++]=20971520,o.bits=1,0;for(k=1;k<y&&0===D[k];k++);for(E<k&&(E=k),Z=1,p=1;p<=15;p++)if(Z<<=1,(Z-=D[p])<0)return-1;if(Z>0&&(0===t||1!==y))return-1;for(L[1]=0,p=1;p<15;p++)L[p+1]=L[p]+D[p];for(v=0;v<i;v++)0!==e[a+v]&&(s[L[e[a+v]]++]=v);if(0===t?(O=N=s,c=19):1===t?(O=x,T-=257,N=z,j-=257,c=256):(O=A,N=B,c=-1),U=0,v=0,p=k,u=r,S=E,C=0,_=-1,f=(R=1<<E)-1,1===t&&R>852||2===t&&R>592)return 1;for(;;){g=p-C,s[v]<c?(w=0,b=s[v]):s[v]>c?(w=N[j+s[v]],b=O[T+s[v]]):(w=96,b=0),h=1<<p-C,k=l=1<<S;do{n[u+(U>>C)+(l-=h)]=g<<24|w<<16|b|0}while(0!==l);for(h=1<<p-1;U&h;)h>>=1;if(0!==h?(U&=h-1,U+=h):U=0,v++,0==--D[p]){if(p===y)break;p=e[a+s[v]]}if(p>E&&(U&f)!==_){for(0===C&&(C=E),u+=k,Z=1<<(S=p-C);S+C<y&&!((Z-=D[S+C])<=0);)S++,Z<<=1;if(R+=1<<S,1===t&&R>852||2===t&&R>592)return 1;n[_=U&f]=E<<24|S<<16|u-r|0}}return 0!==U&&(n[u+U]=p-C<<24|64<<16|0),o.bits=E,0}function S(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function C(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=d(320),this.work=d(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Z(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,function(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=_(852),e.distcode=e.distdyn=_(592),e.sane=1,e.back=-1,0):-2}(t)):-2}function R(t,e){var a,i;return t?(i=new C,t.state=i,i.window=null,0!==(a=function(t,e){var a,i;return t&&t.state?(i=t.state,e<0?(a=0,e=-e):(a=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?-2:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,Z(t))):-2}(t,e))&&(t.state=null),a):-2}var U,O,T=!0;function D(t){if(T){var e;for(U=_(512),O=_(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(E(1,t.lens,0,288,U,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;E(2,t.lens,0,32,O,0,t.work,{bits:5}),T=!1}t.lencode=U,t.lenbits=9,t.distcode=O,t.distbits=5}function L(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=l(r.wsize)),i>=r.wsize?(o(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):((n=r.wsize-r.wnext)>i&&(n=i),o(r.window,e,a-i,n,r.wnext),(i-=n)?(o(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}function N(t,e){var a,i,n,r,s,h,d,_,f,u,c,g,w,b,m,v,x,z,A,B,C,Z,R,U,O=0,T=l(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return-2;12===(a=t.state).mode&&(a.mode=13),s=t.next_out,n=t.output,d=t.avail_out,r=t.next_in,i=t.input,h=t.avail_in,_=a.hold,f=a.bits,u=h,c=d,Z=0;t:for(;;)switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break}for(;f<16;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(2&a.wrap&&35615===_){a.check=0,T[0]=255&_,T[1]=_>>>8&255,a.check=k(a.check,T,2,0),_=0,f=0,a.mode=2;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=30;break}if(8!=(15&_)){t.msg="unknown compression method",a.mode=30;break}if(f-=4,C=8+(15&(_>>>=4)),0===a.wbits)a.wbits=C;else if(C>a.wbits){t.msg="invalid window size",a.mode=30;break}a.dmax=1<<C,t.adler=a.check=1,a.mode=512&_?10:12,_=0,f=0;break;case 2:for(;f<16;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(a.flags=_,8!=(255&a.flags)){t.msg="unknown compression method",a.mode=30;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=30;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(T[0]=255&_,T[1]=_>>>8&255,a.check=k(a.check,T,2,0)),_=0,f=0,a.mode=3;case 3:for(;f<32;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.head&&(a.head.time=_),512&a.flags&&(T[0]=255&_,T[1]=_>>>8&255,T[2]=_>>>16&255,T[3]=_>>>24&255,a.check=k(a.check,T,4,0)),_=0,f=0,a.mode=4;case 4:for(;f<16;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(T[0]=255&_,T[1]=_>>>8&255,a.check=k(a.check,T,2,0)),_=0,f=0,a.mode=5;case 5:if(1024&a.flags){for(;f<16;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(T[0]=255&_,T[1]=_>>>8&255,a.check=k(a.check,T,2,0)),_=0,f=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&((g=a.length)>h&&(g=h),g&&(a.head&&(C=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),o(a.head.extra,i,r,g,C)),512&a.flags&&(a.check=k(a.check,i,g,r)),h-=g,r+=g,a.length-=g),a.length))break t;a.length=0,a.mode=7;case 7:if(2048&a.flags){if(0===h)break t;g=0;do{C=i[r+g++],a.head&&C&&a.length<65536&&(a.head.name+=String.fromCharCode(C))}while(C&&g<h);if(512&a.flags&&(a.check=k(a.check,i,g,r)),h-=g,r+=g,C)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&a.flags){if(0===h)break t;g=0;do{C=i[r+g++],a.head&&C&&a.length<65536&&(a.head.comment+=String.fromCharCode(C))}while(C&&g<h);if(512&a.flags&&(a.check=k(a.check,i,g,r)),h-=g,r+=g,C)break t}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;f<16;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=30;break}_=0,f=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=12;break;case 10:for(;f<32;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}t.adler=a.check=S(_),_=0,f=0,a.mode=11;case 11:if(0===a.havedict)return t.next_out=s,t.avail_out=d,t.next_in=r,t.avail_in=h,a.hold=_,a.bits=f,2;t.adler=a.check=1,a.mode=12;case 12:if(5===e||6===e)break t;case 13:if(a.last){_>>>=7&f,f-=7&f,a.mode=27;break}for(;f<3;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}switch(a.last=1&_,f-=1,3&(_>>>=1)){case 0:a.mode=14;break;case 1:if(D(a),a.mode=20,6===e){_>>>=2,f-=2;break t}break;case 2:a.mode=17;break;case 3:t.msg="invalid block type",a.mode=30}_>>>=2,f-=2;break;case 14:for(_>>>=7&f,f-=7&f;f<32;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if((65535&_)!=(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=30;break}if(a.length=65535&_,_=0,f=0,a.mode=15,6===e)break t;case 15:a.mode=16;case 16:if(g=a.length){if(g>h&&(g=h),g>d&&(g=d),0===g)break t;o(n,i,r,g,s),h-=g,r+=g,d-=g,s+=g,a.length-=g;break}a.mode=12;break;case 17:for(;f<14;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(a.nlen=257+(31&_),_>>>=5,f-=5,a.ndist=1+(31&_),_>>>=5,f-=5,a.ncode=4+(15&_),_>>>=4,f-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=30;break}a.have=0,a.mode=18;case 18:for(;a.have<a.ncode;){for(;f<3;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.lens[N[a.have++]]=7&_,_>>>=3,f-=3}for(;a.have<19;)a.lens[N[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,R={bits:a.lenbits},Z=E(0,a.lens,0,19,a.lencode,0,a.work,R),a.lenbits=R.bits,Z){t.msg="invalid code lengths set",a.mode=30;break}a.have=0,a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;v=(O=a.lencode[_&(1<<a.lenbits)-1])>>>16&255,x=65535&O,!((m=O>>>24)<=f);){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(x<16)_>>>=m,f-=m,a.lens[a.have++]=x;else{if(16===x){for(U=m+2;f<U;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(_>>>=m,f-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=30;break}C=a.lens[a.have-1],g=3+(3&_),_>>>=2,f-=2}else if(17===x){for(U=m+3;f<U;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}f-=m,C=0,g=3+(7&(_>>>=m)),_>>>=3,f-=3}else{for(U=m+7;f<U;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}f-=m,C=0,g=11+(127&(_>>>=m)),_>>>=7,f-=7}if(a.have+g>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=30;break}for(;g--;)a.lens[a.have++]=C}}if(30===a.mode)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=30;break}if(a.lenbits=9,R={bits:a.lenbits},Z=E(1,a.lens,0,a.nlen,a.lencode,0,a.work,R),a.lenbits=R.bits,Z){t.msg="invalid literal/lengths set",a.mode=30;break}if(a.distbits=6,a.distcode=a.distdyn,R={bits:a.distbits},Z=E(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,R),a.distbits=R.bits,Z){t.msg="invalid distances set",a.mode=30;break}if(a.mode=20,6===e)break t;case 20:a.mode=21;case 21:if(h>=6&&d>=258){t.next_out=s,t.avail_out=d,t.next_in=r,t.avail_in=h,a.hold=_,a.bits=f,y(t,c),s=t.next_out,n=t.output,d=t.avail_out,r=t.next_in,i=t.input,h=t.avail_in,_=a.hold,f=a.bits,12===a.mode&&(a.back=-1);break}for(a.back=0;v=(O=a.lencode[_&(1<<a.lenbits)-1])>>>16&255,x=65535&O,!((m=O>>>24)<=f);){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(v&&0==(240&v)){for(z=m,A=v,B=x;v=(O=a.lencode[B+((_&(1<<z+A)-1)>>z)])>>>16&255,x=65535&O,!(z+(m=O>>>24)<=f);){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}_>>>=z,f-=z,a.back+=z}if(_>>>=m,f-=m,a.back+=m,a.length=x,0===v){a.mode=26;break}if(32&v){a.back=-1,a.mode=12;break}if(64&v){t.msg="invalid literal/length code",a.mode=30;break}a.extra=15&v,a.mode=22;case 22:if(a.extra){for(U=a.extra;f<U;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,f-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;v=(O=a.distcode[_&(1<<a.distbits)-1])>>>16&255,x=65535&O,!((m=O>>>24)<=f);){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(0==(240&v)){for(z=m,A=v,B=x;v=(O=a.distcode[B+((_&(1<<z+A)-1)>>z)])>>>16&255,x=65535&O,!(z+(m=O>>>24)<=f);){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}_>>>=z,f-=z,a.back+=z}if(_>>>=m,f-=m,a.back+=m,64&v){t.msg="invalid distance code",a.mode=30;break}a.offset=x,a.extra=15&v,a.mode=24;case 24:if(a.extra){for(U=a.extra;f<U;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,f-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=30;break}a.mode=25;case 25:if(0===d)break t;if(g=c-d,a.offset>g){if((g=a.offset-g)>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=30;break}g>a.wnext?(g-=a.wnext,w=a.wsize-g):w=a.wnext-g,g>a.length&&(g=a.length),b=a.window}else b=n,w=s-a.offset,g=a.length;g>d&&(g=d),d-=g,a.length-=g;do{n[s++]=b[w++]}while(--g);0===a.length&&(a.mode=21);break;case 26:if(0===d)break t;n[s++]=a.length,d--,a.mode=21;break;case 27:if(a.wrap){for(;f<32;){if(0===h)break t;h--,_|=i[r++]<<f,f+=8}if(c-=d,t.total_out+=c,a.total+=c,c&&(t.adler=a.check=a.flags?k(a.check,n,c,s-c):p(a.check,n,c,s-c)),c=d,(a.flags?_:S(_))!==a.check){t.msg="incorrect data check",a.mode=30;break}_=0,f=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;f<32;){if(0===h)break t;h--,_+=i[r++]<<f,f+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=30;break}_=0,f=0}a.mode=29;case 29:Z=1;break t;case 30:Z=-3;break t;case 31:return-4;case 32:default:return-2}return t.next_out=s,t.avail_out=d,t.next_in=r,t.avail_in=h,a.hold=_,a.bits=f,(a.wsize||c!==t.avail_out&&a.mode<30&&(a.mode<27||4!==e))&&L(t,t.output,t.next_out,c-t.avail_out),u-=t.avail_in,c-=t.avail_out,t.total_in+=u,t.total_out+=c,a.total+=c,a.wrap&&c&&(t.adler=a.check=a.flags?k(a.check,n,c,t.next_out-c):p(a.check,n,c,t.next_out-c)),t.data_type=a.bits+(a.last?64:0)+(12===a.mode?128:0)+(20===a.mode||15===a.mode?256:0),(0===u&&0===c||4===e)&&0===Z&&(Z=-5),Z}function j(t,e){var a,i=e.length;return t&&t.state?0!==(a=t.state).wrap&&11!==a.mode?-2:11===a.mode&&p(1,e,i,0)!==a.check?-3:L(t,e,i,i)?(a.mode=31,-4):(a.havedict=1,0):-2}var F={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function I(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}function M(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var P=Object.prototype.toString,H=function t(e){if(!(this instanceof t))return new t(e);this.options=a({chunkSize:16384,windowBits:0,to:""},e||{});var i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,0===i.windowBits&&(i.windowBits=-15)),!(i.windowBits>=0&&i.windowBits<16)||e&&e.windowBits||(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&0==(15&i.windowBits)&&(i.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new I,this.strm.avail_out=0;var n,r,s,o=R(this.strm,i.windowBits);if(0!==o)throw new Error(F[o]);if(this.header=new M,n=this.strm,r=this.header,n&&n.state&&(0==(2&(s=n.state).wrap)||(s.head=r,r.done=!1)),i.dictionary&&("string"==typeof i.dictionary?i.dictionary=g(i.dictionary):"[object ArrayBuffer]"===P.call(i.dictionary)&&(i.dictionary=new Uint8Array(i.dictionary)),i.raw&&0!==(o=j(this.strm,i.dictionary))))throw new Error(F[o])};function Y(t,e){var a=new H(e);if(a.push(t,!0),a.err)throw a.msg||F[a.err];return a.result}H.prototype.push=function(t,e){var a,n,r,s,h,d,_=this.strm,f=this.options.chunkSize,u=this.options.dictionary,c=!1;if(this.ended)return!1;n=e===~~e?e:!0===e?4:0,"string"==typeof t?_.input=function(t){for(var e=new Uint8Array(t.length),a=0,i=e.length;a<i;a++)e[a]=t.charCodeAt(a);return e}(t):"[object ArrayBuffer]"===P.call(t)?_.input=new Uint8Array(t):_.input=t,_.next_in=0,_.avail_in=_.input.length;do{if(0===_.avail_out&&(_.output=l(f),_.next_out=0,_.avail_out=f),2===(a=N(_,0))&&u&&(d="string"==typeof u?g(u):"[object ArrayBuffer]"===P.call(u)?new Uint8Array(u):u,a=j(this.strm,d)),-5===a&&!0===c&&(a=0,c=!1),1!==a&&0!==a)return this.onEnd(a),this.ended=!0,!1;_.next_out&&(0!==_.avail_out&&1!==a&&(0!==_.avail_in||4!==n&&2!==n)||("string"===this.options.to?(r=m(_.output,_.next_out),s=_.next_out-r,h=b(_.output,r),_.next_out=s,_.avail_out=f-s,s&&o(_.output,_.output,r,s,0),this.onData(h)):this.onData(i(_.output,_.next_out)))),0===_.avail_in&&0===_.avail_out&&(c=!0)}while((_.avail_in>0||0===_.avail_out)&&1!==a);return 1===a&&(n=4),4===n?(a=function(t){if(!t||!t.state)return-2;var e=t.state;return e.window&&(e.window=null),t.state=null,0}(this.strm),this.onEnd(a),this.ended=!0,0===a):2!==n||(this.onEnd(0),_.avail_out=0,!0)},H.prototype.onData=function(t){this.chunks.push(t)},H.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var K=Y;function X(t){for(var e=t.length;--e>=0;)t[e]=0}var G,W,q,J,Q,V,$,tt,et,at=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],it=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],nt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function st(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function ot(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function ht(t){return t<256?q[t]:q[256+(t>>>7)]}function lt(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function dt(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,lt(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function _t(t,e,a){dt(t,a[2*e],a[2*e+1])}function ft(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1}function ut(t,e,a){var i,n,r=new Array(16),s=0;for(i=1;i<=15;i++)r[i]=s=s+a[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=ft(r[o]++,o))}}function ct(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function gt(t){t.bi_valid>8?lt(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function wt(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function bt(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&wt(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!wt(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function mt(t,e,a){var i,n,r,s,o=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?_t(t,n,e):(_t(t,(r=J[n])+256+1,e),0!==(s=at[r])&&dt(t,n-=Q[r],s),_t(t,r=ht(--i),a),0!==(s=it[r])&&dt(t,i-=V[r],s))}while(o<t.last_lit);_t(t,256,e)}function pt(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<h;a++)0!==r[2*a]?(t.heap[++t.heap_len]=l=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)r[2*(n=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=l,a=t.heap_len>>1;a>=1;a--)bt(t,r,a);n=h;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],bt(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,bt(t,r,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,i,n,r,s,o,h=e.dyn_tree,l=e.max_code,d=e.stat_desc.static_tree,_=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,g=0;for(r=0;r<=15;r++)t.bl_count[r]=0;for(h[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(r=h[2*h[2*(i=t.heap[a])+1]+1]+1)>c&&(r=c,g++),h[2*i+1]=r,i>l||(t.bl_count[r]++,s=0,i>=u&&(s=f[i-u]),o=h[2*i],t.opt_len+=o*(r+s),_&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==g){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,g-=2}while(g>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)(n=t.heap[--a])>l||(h[2*n+1]!==r&&(t.opt_len+=(r-h[2*n+1])*h[2*n],h[2*n+1]=r),i--)}}(t,e),ut(r,l,t.bl_count)}function vt(t,e,a){var i,n,r=-1,s=e[1],o=0,h=7,l=4;for(0===s&&(h=138,l=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=s,s=e[2*(i+1)+1],++o<h&&n===s||(o<l?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,r=n,0===s?(h=138,l=3):n===s?(h=6,l=3):(h=7,l=4))}function kt(t,e,a){var i,n,r=-1,s=e[1],o=0,h=7,l=4;for(0===s&&(h=138,l=3),i=0;i<=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o<h&&n===s)){if(o<l)do{_t(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==r&&(_t(t,n,t.bl_tree),o--),_t(t,16,t.bl_tree),dt(t,o-3,2)):o<=10?(_t(t,17,t.bl_tree),dt(t,o-3,3)):(_t(t,18,t.bl_tree),dt(t,o-11,7));o=0,r=n,0===s?(h=138,l=3):n===s?(h=6,l=3):(h=7,l=4)}}var yt=!1;function xt(t){yt||(!function(){var t,e,a,i,n,r=new Array(16);for(X(G=new Array(576)),X(W=new Array(60)),X(q=new Array(512)),X(J=new Array(256)),X(Q=new Array(29)),X(V=new Array(30)),a=0,i=0;i<28;i++)for(Q[i]=a,t=0;t<1<<at[i];t++)J[a++]=i;for(J[a-1]=i,n=0,i=0;i<16;i++)for(V[i]=n,t=0;t<1<<it[i];t++)q[n++]=i;for(n>>=7;i<30;i++)for(V[i]=n<<7,t=0;t<1<<it[i]-7;t++)q[256+n++]=i;for(e=0;e<=15;e++)r[e]=0;for(t=0;t<=143;)G[2*t+1]=8,t++,r[8]++;for(;t<=255;)G[2*t+1]=9,t++,r[9]++;for(;t<=279;)G[2*t+1]=7,t++,r[7]++;for(;t<=287;)G[2*t+1]=8,t++,r[8]++;for(ut(G,287,r),t=0;t<30;t++)W[2*t+1]=5,W[2*t]=ft(t,5);$=new st(G,at,257,286,15),tt=new st(W,it,0,30,15),et=new st(new Array(0),nt,0,19,7)}(),yt=!0),t.l_desc=new ot(t.dyn_ltree,$),t.d_desc=new ot(t.dyn_dtree,tt),t.bl_desc=new ot(t.bl_tree,et),t.bi_buf=0,t.bi_valid=0,ct(t)}function zt(t,e,a,i){dt(t,0+(i?1:0),3),function(t,e,a,i){gt(t),i&&(lt(t,a),lt(t,~a)),o(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}(t,e,a,!0)}function At(t){dt(t,2,3),_t(t,256,G),function(t){16===t.bi_valid?(lt(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}function Bt(t,e,a,i){var n,r,s=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),pt(t,t.l_desc),pt(t,t.d_desc),s=function(t){var e;for(vt(t,t.dyn_ltree,t.l_desc.max_code),vt(t,t.dyn_dtree,t.d_desc.max_code),pt(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*rt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(r=t.static_len+3+7>>>3)<=n&&(n=r)):n=r=a+5,a+4<=n&&-1!==e?zt(t,e,a,i):4===t.strategy||r===n?(dt(t,2+(i?1:0),3),mt(t,G,W)):(dt(t,4+(i?1:0),3),function(t,e,a,i){var n;for(dt(t,e-257,5),dt(t,a-1,5),dt(t,i-4,4),n=0;n<i;n++)dt(t,t.bl_tree[2*rt[n]+1],3);kt(t,t.dyn_ltree,e-1),kt(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),mt(t,t.dyn_ltree,t.dyn_dtree)),ct(t),i&&gt(t)}function Et(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(J[a]+256+1)]++,t.dyn_dtree[2*ht(e)]++),t.last_lit===t.lit_bufsize-1}function St(t,e){return t.msg=F[e],e}function Ct(t){return(t<<1)-(t>4?9:0)}function Zt(t){for(var e=t.length;--e>=0;)t[e]=0}function Rt(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(o(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function Ut(t,e){Bt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,Rt(t.strm)}function Ot(t,e){t.pending_buf[t.pending++]=e}function Tt(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function Dt(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,l=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258,u=l[r+s-1],c=l[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(l[(a=e)+s]===c&&l[a+s-1]===u&&l[a]===l[r]&&l[++a]===l[r+1]){r+=2,a++;do{}while(l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&l[++r]===l[++a]&&r<f);if(i=258-(f-r),r=f-258,i>s){if(t.match_start=e,s=i,i>=o)break;u=l[r+s-1],c=l[r+s]}}}while((e=_[e&d])>h&&0!=--n);return s<=t.lookahead?s:t.lookahead}function Lt(t){var e,a,i,n,r,s,h,l,d,_,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-262)){o(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=a=t.hash_size;do{i=t.head[--e],t.head[e]=i>=f?i-f:0}while(--a);e=a=f;do{i=t.prev[--e],t.prev[e]=i>=f?i-f:0}while(--a);n+=f}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,d=n,_=void 0,(_=s.avail_in)>d&&(_=d),a=0===_?0:(s.avail_in-=_,o(h,s.input,s.next_in,_,l),1===s.state.wrap?s.adler=p(s.adler,h,_,l):2===s.state.wrap&&(s.adler=k(s.adler,h,_,l)),s.next_in+=_,s.total_in+=_,_),t.lookahead+=a,t.lookahead+t.insert>=3)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+3-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function Nt(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,Ut(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(Ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Ut(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ut(t,!1),t.strm.avail_out),1)}function jt(t,e){for(var a,i;;){if(t.lookahead<262){if(Lt(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=Dt(t,a)),t.match_length>=3)if(i=Et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=Et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(Ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(Ut(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ut(t,!1),0===t.strm.avail_out)?1:2}function Ft(t,e){for(var a,i,n;;){if(t.lookahead<262){if(Lt(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=Dt(t,a),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=Et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(Ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((i=Et(t,0,t.window[t.strstart-1]))&&Ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=Et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(Ut(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ut(t,!1),0===t.strm.avail_out)?1:2}function It(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}var Mt=function(){var t=[new It(0,0,0,0,Nt),new It(4,4,8,4,jt),new It(4,5,16,8,jt),new It(4,6,32,32,jt),new It(4,4,16,16,Ft),new It(8,16,32,32,Ft),new It(8,16,128,128,Ft),new It(8,32,128,256,Ft),new It(32,128,258,1024,Ft),new It(32,258,258,4096,Ft)];return Mt=function(){return t},t};function Pt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=d(1146),this.dyn_dtree=d(122),this.bl_tree=d(78),Zt(this.dyn_ltree),Zt(this.dyn_dtree),Zt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=d(16),this.heap=d(573),Zt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=d(573),Zt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ht(t){var e=function(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=0,xt(e),0):St(t,-2)}(t);return 0===e&&function(t){t.window_size=2*t.w_size,Zt(t.head);var e=Mt();t.max_lazy_match=e[t.level].max_lazy,t.good_match=e[t.level].good_length,t.nice_match=e[t.level].nice_length,t.max_chain_length=e[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0}(t.state),e}function Yt(t,e){var a,i,n,r;if(!t||!t.state||e>5||e<0)return t?St(t,-2):-2;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&4!==e)return St(t,0===t.avail_out?-5:-2);if(i.strm=t,a=i.last_flush,i.last_flush=e,42===i.status)if(2===i.wrap)t.adler=0,Ot(i,31),Ot(i,139),Ot(i,8),i.gzhead?(Ot(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),Ot(i,255&i.gzhead.time),Ot(i,i.gzhead.time>>8&255),Ot(i,i.gzhead.time>>16&255),Ot(i,i.gzhead.time>>24&255),Ot(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),Ot(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(Ot(i,255&i.gzhead.extra.length),Ot(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=k(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(Ot(i,0),Ot(i,0),Ot(i,0),Ot(i,0),Ot(i,0),Ot(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),Ot(i,3),i.status=113);else{var s=8+(i.w_bits-8<<4)<<8;s|=(i.strategy>=2||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(s|=32),s+=31-s%31,i.status=113,Tt(i,s),0!==i.strstart&&(Tt(i,t.adler>>>16),Tt(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),Rt(t),n=i.pending,i.pending!==i.pending_buf_size));)Ot(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),Rt(t),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}r=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,Ot(i,r)}while(0!==r);i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),0===r&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),Rt(t),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}r=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,Ot(i,r)}while(0!==r);i.gzhead.hcrc&&i.pending>n&&(t.adler=k(t.adler,i.pending_buf,i.pending-n,n)),0===r&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Rt(t),i.pending+2<=i.pending_buf_size&&(Ot(i,255&t.adler),Ot(i,t.adler>>8&255),t.adler=0,i.status=113)):i.status=113),0!==i.pending){if(Rt(t),0===t.avail_out)return i.last_flush=-1,0}else if(0===t.avail_in&&Ct(e)<=Ct(a)&&4!==e)return St(t,-5);if(666===i.status&&0!==t.avail_in)return St(t,-5);if(0!==t.avail_in||0!==i.lookahead||0!==e&&666!==i.status){var o=2===i.strategy?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,a=Et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Ut(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ut(t,!1),0===t.strm.avail_out)?1:2}(i,e):3===i.strategy?function(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=258){if(Lt(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(i=s[n=t.strstart-1])===s[++n]&&i===s[++n]&&i===s[++n]){r=t.strstart+258;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<r);t.match_length=258-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=Et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=Et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Ut(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ut(t,!1),0===t.strm.avail_out)?1:2}(i,e):Mt()[i.level].func(i,e);if(3!==o&&4!==o||(i.status=666),1===o||3===o)return 0===t.avail_out&&(i.last_flush=-1),0;if(2===o&&(1===e?At(i):5!==e&&(zt(i,0,0,!1),3===e&&(Zt(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),Rt(t),0===t.avail_out))return i.last_flush=-1,0}return 4!==e?0:i.wrap<=0?1:(2===i.wrap?(Ot(i,255&t.adler),Ot(i,t.adler>>8&255),Ot(i,t.adler>>16&255),Ot(i,t.adler>>24&255),Ot(i,255&t.total_in),Ot(i,t.total_in>>8&255),Ot(i,t.total_in>>16&255),Ot(i,t.total_in>>24&255)):(Tt(i,t.adler>>>16),Tt(i,65535&t.adler)),Rt(t),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?0:1)}var Kt=Object.prototype.toString,Xt=function(t){this.options=a({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new I,this.strm.avail_out=0;var i,n,r=function(t,e,a,i,n,r){if(!t)return-2;var s=1;if(-1===e&&(e=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),n<1||n>9||8!==a||i<8||i>15||e<0||e>9||r<0||r>4)return St(t,-2);8===i&&(i=9);var o=new Pt;return t.state=o,o.strm=t,o.wrap=s,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=l(2*o.w_size),o.head=d(o.hash_size),o.prev=d(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=l(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=r,o.method=a,Ht(t)}(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(0!==r)throw new Error(F[r]);if(e.header&&(i=this.strm,n=e.header,i&&i.state&&(2!==i.state.wrap||(i.state.gzhead=n))),e.dictionary){var s;if(s="string"==typeof e.dictionary?g(e.dictionary):"[object ArrayBuffer]"===Kt.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(r=function(t,e){var a,i,n,r,s,h,d,_,f=e.length;if(!t||!t.state)return-2;if(2===(r=(a=t.state).wrap)||1===r&&42!==a.status||a.lookahead)return-2;for(1===r&&(t.adler=p(t.adler,e,f,0)),a.wrap=0,f>=a.w_size&&(0===r&&(Zt(a.head),a.strstart=0,a.block_start=0,a.insert=0),_=l(a.w_size),o(_,e,f-a.w_size,a.w_size,0),e=_,f=a.w_size),s=t.avail_in,h=t.next_in,d=t.input,t.avail_in=f,t.next_in=0,t.input=e,Lt(a);a.lookahead>=3;){i=a.strstart,n=a.lookahead-2;do{a.ins_h=(a.ins_h<<a.hash_shift^a.window[i+3-1])&a.hash_mask,a.prev[i&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++}while(--n);a.strstart=i,a.lookahead=2,Lt(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=2,a.match_available=0,t.next_in=h,t.input=d,t.avail_in=s,a.wrap=r,0}(this.strm,s)))throw new Error(F[r]);this._dict_set=!0}};function Gt(t,e){var a=new Xt(e);if(a.push(t,!0),a.err)throw a.msg||F[a.err];return a.result}Xt.prototype.push=function(t,e){var a,n,r,s=this.strm,o=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:!0===e?4:0,"string"==typeof t?s.input=g(t):"[object ArrayBuffer]"===Kt.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=l(o),s.next_out=0,s.avail_out=o),1!==(a=Yt(s,n))&&0!==a)return this.onEnd(a),this.ended=!0,!1;0!==s.avail_out&&(0!==s.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(w(r=i(s.output,s.next_out),r.length)):this.onData(i(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&1!==a);return 4===n?(a=function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?St(t,-2):(t.state=null,113===e?St(t,-3):0):-2}(this.strm),this.onEnd(a),this.ended=!0,0===a):2!==n||(this.onEnd(0),s.avail_out=0,!0)},Xt.prototype.onData=function(t){this.chunks.push(t)},Xt.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},t.Deflate=Xt,t.Inflate=H,t.Z_BEST_COMPRESSION=9,t.Z_BEST_SPEED=1,t.Z_BINARY=0,t.Z_BLOCK=5,t.Z_BUF_ERROR=-5,t.Z_DATA_ERROR=-3,t.Z_DEFAULT_COMPRESSION=-1,t.Z_DEFAULT_STRATEGY=0,t.Z_DEFLATED=8,t.Z_ERRNO=-1,t.Z_FILTERED=1,t.Z_FINISH=4,t.Z_FIXED=4,t.Z_FULL_FLUSH=3,t.Z_HUFFMAN_ONLY=2,t.Z_NEED_DICT=2,t.Z_NO_COMPRESSION=0,t.Z_NO_FLUSH=0,t.Z_OK=0,t.Z_PARTIAL_FLUSH=1,t.Z_RLE=3,t.Z_STREAM_END=1,t.Z_STREAM_ERROR=-2,t.Z_SYNC_FLUSH=2,t.Z_TEXT=1,t.Z_TREES=6,t.Z_UNKNOWN=2,t.deflate=Gt,t.deflateRaw=function(t,e){return(e=e||{}).raw=!0,Gt(t,e)},t.gzip=function(t,e){return(e=e||{}).gzip=!0,Gt(t,e)},t.inflate=Y,t.inflateRaw=function(t,e){return(e=e||{}).raw=!0,Y(t,e)},t.ungzip=K,Object.defineProperty(t,"__esModule",{value:!0})}));

// enable for high detailed logging inside worker
const traceDisabled = true;

class FlvPlayerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FlvPlayerError';
    }
}

const debug = {
    trace: (condition, ...args) => {
        if (!condition) {
            console.trace(...args);
        }
    },    
    warn: (condition, ...args) => {
        if (!condition) {
            console.warn(...args);
        }
    },
    error: (condition, msg) => {
        if (!condition) {
            throw new FlvPlayerError(msg);
        }
    },
};

function mergeBuffer(...buffers) {
    const Cons = buffers[0].constructor;
    return buffers.reduce((pre, val) => {
        const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
        merge.set(pre, 0);
        merge.set(val, pre.byteLength | 0);
        return merge;
    }, new Cons());
}

function readBufferSum(array, uint = true) {
    return array.reduce((totle, num, index) => totle + (uint ? num : num - 128) * 256 ** (array.length - index - 1), 0);
}

function readString(array) {
    return String.fromCharCode.apply(String, array);
}

function readBuffer(buffer) {
    let index = 0;
    function readFn(length) {
        const tempUint8 = new Uint8Array(length);
        for (let i = 0; i < length; i += 1) {
            tempUint8[i] = buffer[index];
            index += 1;
        }
        readFn.index = index;
        return tempUint8;
    }
    readFn.index = 0;
    return readFn;
}

function readDouble(array) {
    const view = new DataView(new ArrayBuffer(array.length));
    array.forEach((b, i) => {
        view.setUint8(i, b);
    });
    return view.getFloat64(0);
}

function readBoolean(array) {
    return array[0] !== 0;
}

let index = 0;
let header = null;
let uint8 = new Uint8Array();
let scripMeta = null;
let AudioSpecificConfig = null;
let AVCDecoderConfigurationRecord = null;
const nalStart = new Uint8Array([0x00, 0x00, 0x00, 0x01]);
let fsvFullFrameArray = new Uint8Array();

function readable(length) {
    return uint8.length - index >= length;
}

function read(length) {
    const tempUint8 = new Uint8Array(length);
    for (let i = 0; i < length; i += 1) {
        tempUint8[i] = uint8[index];
        index += 1;
    }
    return tempUint8;
}

function demuxerScripTag(tag) {
    const readScripTag = readBuffer(tag.body);
    const amf1 = Object.create(null);
    const amf2 = Object.create(null);

    amf1.type = readScripTag(1)[0];
    debug.error(amf1.type === 2, `AMF: [amf1] type expect 2, but got ${amf1.type}`);
    amf1.size = readBufferSum(readScripTag(2));
    amf1.string = readString(readScripTag(amf1.size));

    amf2.type = readScripTag(1)[0];
    debug.error(amf2.type === 8 || amf2.type === 3, `AMF: [amf2] type expect 8 or 3, but got ${amf2.type}`);
    amf2.size = readBufferSum(readScripTag(4));
    amf2.metaData = Object.create(null);

    function getValue(type) {
        let value = null;
        if (type !== undefined) {
            switch (type) {
                case 0:
                    value = readDouble(readScripTag(8));
                    break;
                case 1:
                    value = readBoolean(readScripTag(1));
                    break;
                case 2: {
                    const valueLength = readBufferSum(readScripTag(2));
                    value = readString(readScripTag(valueLength));
                    break;
                }
                case 3: {
                    value = Object.create(null);
                    let lastType = -1;
                    while (lastType !== 9) {
                        const nameLength = readBufferSum(readScripTag(2));
                        const name = readString(readScripTag(nameLength));
                        const itemType = readScripTag(1)[0];
                        if (name) {
                            value[name] = getValue(itemType);
                        }
                        lastType = itemType;
                    }
                    break;
                }
                case 5:
                    value = null;
                    break;
                case 6:
                    value = undefined;
                    break;
                case 7:
                    value = `Reference #${readScripTag.index}`;
                    readScripTag(2);
                    break;
                case 8: {
                    value = Object.create(null);
                    let lastType = -1;
                    while (lastType !== 9) {
                        const nameLength = readBufferSum(readScripTag(2));
                        const name = readString(readScripTag(nameLength));
                        const itemType = readScripTag(1)[0];
                        if (name) {
                            value[name] = getValue(itemType);
                        }
                        lastType = itemType;
                    }
                    break;
                }
                case 10: {
                    const valueLength = readBufferSum(readScripTag(4));
                    value = [];
                    for (let i = 0; i < valueLength; i += 1) {
                        const itemType = readScripTag(1)[0];
                        value.push(getValue(itemType));
                    }
                    break;
                }
                case 11:
                    value = readDouble(readScripTag(2));
                    break;
                case 12: {
                    const valueLength = readBufferSum(readScripTag(4));
                    value = readString(readScripTag(valueLength));
                    break;
                }
                default:
                    debug.error(false, `AMF: Unknown metaData type: ${type}`);
                    break;
            }
        }
        return value;
    }

    while (readScripTag.index < tag.body.length) {
        const nameLength = readBufferSum(readScripTag(2));
        const name = readString(readScripTag(nameLength));
        const type = readScripTag(1)[0];
        if (name) {
            amf2.metaData[name] = getValue(type);
        }
    }

    debug.warn(readScripTag.index === tag.body.length, '[AMF] Seems to be incompletely parsed');
    debug.warn(amf2.size === Object.keys(amf2.metaData).length, '[AMF] [amf2] length does not match');

    scripMeta = { amf1, amf2 };
    postMessage({
        type: 'scripMeta',
        data: scripMeta,
    });
}

function parseAVCVideoData(tag) {
    const packet = tag.body.slice(1, 5);
    debug.error(packet.length >= 4, '[H264] Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
    const view = new DataView(packet.buffer);
    const AVCPacketType = view.getUint8(0);
    const CompositionTime = ((view.getUint32(0) & 0x00ffffff) << 8) >> 8;
    const pts = CompositionTime + tag.timestamp;
    const packetData = tag.body.subarray(5);
    if (AVCPacketType === 0) {
        debug.warn(!AVCDecoderConfigurationRecord, '[h264] Find another one AVCDecoderConfigurationRecord');
        debug.error(packetData.length >= 7, '[H264] AVCDecoderConfigurationRecord parse length is not enough');
        const readDcr = readBuffer(packetData);
        const result = {};
        result.configurationVersion = readDcr(1)[0];
        debug.error(result.configurationVersion === 1, `[H264] Invalid configurationVersion: ${result.configurationVersion}`);
        result.AVCProfileIndication = readDcr(1)[0];
        debug.error(result.AVCProfileIndication !== 0, `[H264] Invalid AVCProfileIndication: ${result.AVCProfileIndication}`);
        result.profile_compatibility = readDcr(1)[0];
        result.AVCLevelIndication = readDcr(1)[0];
        result.lengthSizeMinusOne = (readDcr(1)[0] & 3) + 1;
        debug.error(result.lengthSizeMinusOne === 4 || result.lengthSizeMinusOne !== 3, `[H264] Invalid lengthSizeMinusOne: ${result.lengthSizeMinusOne}`);
        result.numOfSequenceParameterSets = readDcr(1)[0] & 31;
        debug.error(result.numOfSequenceParameterSets !== 0, `[H264] Invalid numOfSequenceParameterSets: ${result.numOfSequenceParameterSets}`);
        debug.warn(result.numOfSequenceParameterSets === 1, `[H264] Strange numOfSequenceParameterSets: ${result.numOfSequenceParameterSets}`);
        for (let i = 0; i < result.numOfSequenceParameterSets; i += 1) {
            result.sequenceParameterSetLength = readBufferSum(readDcr(2));
            if (result.sequenceParameterSetLength > 0) {
                const SPS = readDcr(result.sequenceParameterSetLength);
                postMessage({
                    type: 'videoData',
                    data: mergeBuffer(nalStart, SPS),
                });
            }
        }
        result.numOfPictureParameterSets = readDcr(1)[0];
        debug.error(result.numOfPictureParameterSets !== 0, `[H264] Invalid numOfPictureParameterSets: ${result.numOfPictureParameterSets}`);
        debug.warn(result.numOfPictureParameterSets === 1, `[H264] Strange numOfPictureParameterSets: ${result.numOfPictureParameterSets}`);
        for (let i = 0; i < result.numOfPictureParameterSets; i += 1) {
            result.pictureParameterSetLength = readBufferSum(readDcr(2));
            if (result.pictureParameterSetLength > 0) {
                const PPS = readDcr(result.pictureParameterSetLength);
                postMessage({
                    type: 'videoData',
                    data: mergeBuffer(nalStart, PPS),
                });
            }
        }
        AVCDecoderConfigurationRecord = result;
        postMessage({
            type: 'AVCDecoderConfigurationRecord',
            data: result,
        });
    }
    else if (AVCPacketType === 1) {
        const { lengthSizeMinusOne } = AVCDecoderConfigurationRecord;
        const readVideo = readBuffer(packetData);
        while (readVideo.index < packetData.length) {
            const length = readBufferSum(readVideo(lengthSizeMinusOne));
            postMessage({
                type: 'videoData',
                data: mergeBuffer(nalStart, readVideo(length)),
                timestamp: pts,
            });
        }
    }
    else {
        debug.error(AVCPacketType === 2, `[H264] Invalid video packet type ${AVCPacketType}`);
    }
}

function parseFSVideoPayload(tag, frameType, blockWidth, blockHeight, amountOfBlockColumns, amountOfBlockRows, imageWidth, imageHeight) {

    const screenVideoPayload = tag.body.slice(5);
    const v = new DataView(screenVideoPayload.buffer);

    let offset = 0;
    let imageBlockDataSize = 0;
    let currentBlockRow = 0;
    let currentBlockColumn = 0;
    const imageBlockCount = amountOfBlockColumns * amountOfBlockRows;
    let image = new Uint8Array(imageWidth * imageHeight * 4);

    if (frameType !== 1) { // partial frame -> let's draw previous keyframe with all differences
        image = fsvFullFrameArray;
    }

    for (let i = 0; i < imageBlockCount; i += 1) {
        if (offset >= v.byteLength) {
            debug.error(true, 'We are out of scope for FSV video payload!');
            break;
        }

        currentBlockRow = Math.trunc(i / amountOfBlockColumns);
        currentBlockColumn = i % amountOfBlockColumns;

        imageBlockDataSize = v.getUint16(offset, false);
        debug.trace(traceDisabled, `${i}/${imageBlockCount} offset: ${offset}, imageBlockDataSize: ${imageBlockDataSize}`);

        if (imageBlockDataSize > 0)
        {
            const compressedBuffer = screenVideoPayload.slice(offset + 2, offset + imageBlockDataSize + 2);

            try {
                const rawBRGPixels = pako.inflate(compressedBuffer);
                debug.trace(traceDisabled, `compressed[${currentBlockRow}, ${currentBlockColumn}]: ${compressedBuffer.length} => inflated ${rawBRGPixels.length}`);

                const dx = currentBlockColumn * blockWidth;
                const dy = currentBlockRow * blockHeight;
                let blockRowIndex = image.byteLength - (dy * imageWidth * 4) + (dx * 4);
                if (dy === 0) {
                    blockRowIndex -= (imageWidth * 4);
                }

                for (let j = 0, k = 0, l = 0; k < rawBRGPixels.byteLength; j += 4, k += 3, l = j % (blockWidth * 4)) {

                    image[blockRowIndex + l]    = rawBRGPixels[k+2]    // red
                    image[blockRowIndex + l+1]  = rawBRGPixels[k+1];   // green
                    image[blockRowIndex + l+2]  = rawBRGPixels[k];     // blue
                    image[blockRowIndex + l+3]  = 255;                 // alpha

                    if ((j !== 0) && (((j+4) % (blockWidth * 4)) === 0))
                    {
                        blockRowIndex -= imageWidth * 4;
                    }
                }

                debug.trace(traceDisabled, `image(${imageWidth}, ${imageHeight}), row: ${currentBlockRow}, column: ${currentBlockColumn}, dx: ${dx}, dy: ${dy}`);
            } catch (err) {
                debug.error(true, err);
            }

            offset += imageBlockDataSize + 2; // BlockSize is Uint16 in Bigendian
        } else
        {
            offset += 2; // BlockSize is Uint16 in Bigendian
        }
    }

    // save full frame for further use with partial frames
    fsvFullFrameArray = image;

    postMessage({
        type: 'fsVideoData',
        data: { width: imageWidth, height: imageHeight, data: image },
        timestamp: tag.timestamp,
    });
}

function parseFSVideoData(tag, frameType) {
    const screenVideoPacket = tag.body.slice(1, 5);
    debug.error(screenVideoPacket.length >= 4, '[FSV1] Invalid Flash Screen Video packet');
    const v = new DataView(screenVideoPacket.buffer);
    const blockWidth  = ((((v.getUint8(0) & 0xF0) >>> 4) + 1) * 16);
    const imageWidth = (v.getUint16(0) & 0x0FFF);
    const blockHeight  = ((((v.getUint8(2) & 0xF0) >>> 4) + 1) * 16);
    const imageHeight = (v.getUint16(2) & 0x0FFF);
    let amountOfBlockColumns = Math.trunc(imageWidth / blockWidth);
    let amountOfBlockRows = Math.trunc(imageHeight / blockHeight);
    if (imageWidth % blockWidth !== 0)
    {
        amountOfBlockColumns += 1;
    }

    if (imageHeight % blockHeight !== 0)
    {
        amountOfBlockRows += 1;
    }

    parseFSVideoPayload(tag, frameType, blockWidth, blockHeight, amountOfBlockColumns, amountOfBlockRows, imageWidth, imageHeight);
}

function demuxerVideoTag(tag) {
    debug.error(tag.body.length > 1, 'Invalid video packet');
    const videoHeader = {
        frameType: (tag.body[0] & 0xf0) >> 4,
        codecID: tag.body[0] & 0x0f,
    };
    if (videoHeader.codecID !== 3 && videoHeader.codecID !== 7) {
        debug.error(true, "[videoTrack] Unsupported codec in video frame: ".concat(videoHeader.codecID));
    }
    
    switch (videoHeader.codecID) {
    case 3:
        parseFSVideoData(tag, videoHeader.frameType);
        break;

    case 7:
        parseAVCVideoData(tag);
        break;

    default:
        debug.error(true, "[videoTrack] Unsupported codec in video frame: ".concat(videoHeader.codecID));
        break;
    }
}

function demuxerAudioTag(tag) {
    debug.error(tag.body.length > 1, 'Invalid audio packet');
    const audioHeader = {
        soundFormat: (tag.body[0] & 0xf0) >> 4,
        soundRate: (tag.body[0] & 0x0c) >> 2,
        soundSize: (tag.body[0] & 0x02) >> 1,
        soundType: (tag.body[0] & 0x01) >> 0,
    };
    debug.error(audioHeader.soundFormat === 10, `[audioTrack] unsupported audio format: ${audioHeader.soundFormat}`);
    const packet = tag.body.subarray(1);
    const packetType = packet[0];
    if (packetType === 0) {
        const packetData = packet.subarray(1);
        debug.warn(!AudioSpecificConfig, '[AAC] Find another one AudioSpecificConfig');
        debug.error(packetData.length >= 2, '[AAC] AudioSpecificConfig parse length is not enough');
        const result = {};
        result.audioObjectType = (packetData[0] & 0xf8) >> 3;
        result.samplingFrequencyIndex = ((packetData[0] & 7) << 1) + (((packetData[1] & 0x80) >> 7) & 1);
        result.channelConfiguration = (packetData[1] & 0x7f) >> 3;
        AudioSpecificConfig = result;
        postMessage({
            type: 'AudioSpecificConfig',
            data: result,
        });
    } else {
        const { audioObjectType, samplingFrequencyIndex, channelConfiguration } = AudioSpecificConfig;
        const ADTSLen = tag.dataSize - 2 + 7;
        const ADTSHeader = new Uint8Array(7);
        ADTSHeader[0] = 0xff;
        ADTSHeader[1] = 0xf0;
        ADTSHeader[1] |= 0 << 3;
        ADTSHeader[1] |= 0 << 1;
        ADTSHeader[1] |= 1;
        ADTSHeader[2] = (audioObjectType - 1) << 6;
        ADTSHeader[2] |= (samplingFrequencyIndex & 0x0f) << 2;
        ADTSHeader[2] |= 0 << 1;
        ADTSHeader[2] |= (channelConfiguration & 0x04) >> 2;
        ADTSHeader[3] = (channelConfiguration & 0x03) << 6;
        ADTSHeader[3] |= 0 << 5;
        ADTSHeader[3] |= 0 << 4;
        ADTSHeader[3] |= 0 << 3;
        ADTSHeader[3] |= 0 << 2;
        ADTSHeader[3] |= (ADTSLen & 0x1800) >> 11;
        ADTSHeader[4] = (ADTSLen & 0x7f8) >> 3;
        ADTSHeader[5] = (ADTSLen & 0x7) << 5;
        ADTSHeader[5] |= 0x1f;
        ADTSHeader[6] = 0xfc;
        const ADTSBody = tag.body.subarray(2);
        postMessage({
            type: 'audioData',
            data: mergeBuffer(ADTSHeader, ADTSBody),
            timestamp: tag.timestamp,
        });
    }
}

onmessage = (event) => {
    uint8 = mergeBuffer(uint8, event.data.uint8);
    if (!header && readable(13)) {
        header = Object.create(null);
        header.signature = readString(read(3));
        header.version = read(1)[0];
        debug.error(header.signature === 'FLV' && header.version === 1, 'FLV header not found');
        header.flags = read(1)[0];
        const hasAudio = (header.flags & 4) >>> 2 !== 0;
        const hasVideo = (header.flags & 1) !== 0;
        debug.warn(hasVideo, '[FLV header] flags not found video');
        debug.warn(hasAudio, '[FLV header] flags not found audio');
        header.headersize = readBufferSum(read(4));
        const prevTagSize = readBufferSum(read(4));
        debug.error(prevTagSize === 0, `PrevTagSize0 should be equal to 0, but got ${prevTagSize}`);
        postMessage({
            type: 'flvHeader',
            data: header,
        });
    }

    while (index < uint8.length) {
        const tag = Object.create(null);
        const restIndex = index;

        if (readable(11)) {
            tag.tagType = read(1)[0];
            tag.dataSize = readBufferSum(read(3));
            const ts2 = read(1)[0];
            const ts1 = read(1)[0];
            const ts0 = read(1)[0];
            const ts3 = read(1)[0];
            tag.timestamp = ts0 | (ts1 << 8) | (ts2 << 16) | (ts3 << 24);
            tag.streamID = readBufferSum(read(3));
            debug.error(tag.streamID === 0, `streamID should be equal to 0, but got ${tag.streamID}`);
        } else {
            index = 0;
            uint8 = uint8.subarray(restIndex);
            return;
        }

        if (readable(tag.dataSize + 4)) {
            tag.body = read(tag.dataSize);
            const prevTagSize = readBufferSum(read(4));
            debug.error(prevTagSize === tag.dataSize + 11, `Invalid PrevTagSize: ${prevTagSize}`);
        } else {
            index = 0;
            uint8 = uint8.subarray(restIndex);
            return;
        }

        switch (tag.tagType) {
            case 18:
                demuxerScripTag(tag);
                break;
            case 9:
                demuxerVideoTag(tag);
                break;
            case 8:
                if (event.data.hasAudio) {
                    demuxerAudioTag(tag);
                }
                break;
            default:
                debug.error(false, `unknown tag type: ${tag.tagType}`);
                break;
        }
    }

    index = 0;
    uint8 = new Uint8Array();
};

var sa=Object.defineProperty;var Sr=Object.getOwnPropertySymbols;var aa=Object.prototype.hasOwnProperty,oa=Object.prototype.propertyIsEnumerable;var yr=(n,e,t)=>e in n?sa(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Er=(n,e)=>{for(var t in e||(e={}))aa.call(e,t)&&yr(n,t,e[t]);if(Sr)for(var t of Sr(e))oa.call(e,t)&&yr(n,t,e[t]);return n};const la="136",ca=0,Tr=1,ua=2,br=1,ha=2,Pi=3,Fi=0,Ue=1,ni=2,da=1,Nt=0,Ii=1,wr=2,Ar=3,Rr=4,fa=5,ri=100,pa=101,ma=102,Lr=103,Cr=104,ga=200,_a=201,xa=202,va=203,Dr=204,Pr=205,Ma=206,Sa=207,ya=208,Ea=209,Ta=210,ba=0,wa=1,Aa=2,bn=3,Ra=4,La=5,Ca=6,Da=7,Fr=0,Pa=1,Fa=2,Ut=0,Ia=1,Na=2,Ua=3,Oa=4,Ba=5,Ir=300,Ni=301,Ui=302,wn=303,An=304,Ji=306,Rn=307,Ln=1e3,$e=1001,Cn=1002,Ye=1003,Nr=1004,Ur=1005,Qe=1006,za=1007,$i=1008,wt=1009,Ga=1010,Va=1011,Oi=1012,Ha=1013,Qi=1014,Ot=1015,Kt=1016,Wa=1017,ka=1018,Xa=1019,si=1020,qa=1021,ai=1022,Be=1023,Ya=1024,Za=1025,Jt=1026,oi=1027,ja=1028,Ka=1029,Ja=1030,$a=1031,Qa=1032,eo=1033,Or=33776,Br=33777,zr=33778,Gr=33779,Vr=35840,Hr=35841,Wr=35842,kr=35843,to=36196,Xr=37492,qr=37496,io=37808,no=37809,ro=37810,so=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,xo=37840,vo=37841,Mo=37842,So=37843,yo=37844,Eo=37845,To=37846,bo=37847,wo=37848,Ao=37849,Ro=37850,Lo=37851,Co=37852,Do=37853,xt=3e3,Bi=3001,Po=3200,Fo=3201,Io=0,No=1,Dn=7680,Uo=519,Yr=35044,Zr="300 es";class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ge=[];for(let n=0;n<256;n++)Ge[n]=(n<16?"0":"")+n.toString(16);const Pn=Math.PI/180,jr=180/Math.PI;function zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[e&255]+Ge[e>>8&255]+"-"+Ge[e>>16&15|64]+Ge[e>>24&255]+"-"+Ge[t&63|128]+Ge[t>>8&255]+"-"+Ge[t>>16&255]+Ge[t>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toUpperCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Oo(n,e){return(n%e+e)%e}function Fn(n,e,t){return(1-t)*n+t*e}function Kr(n){return(n&n-1)==0&&n!==0}function Bo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Ce{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Ce.prototype.isVector2=!0;class lt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],p=i[2],m=i[5],_=i[8],g=r[0],T=r[3],d=r[6],f=r[1],A=r[4],M=r[7],w=r[2],C=r[5],P=r[8];return s[0]=o*g+a*f+c*w,s[3]=o*T+a*A+c*C,s[6]=o*d+a*M+c*P,s[1]=l*g+u*f+h*w,s[4]=l*T+u*A+h*C,s[7]=l*d+u*M+h*P,s[2]=p*g+m*f+_*w,s[5]=p*T+m*A+_*C,s[8]=p*d+m*M+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,p=a*c-u*s,m=l*s-o*c,_=t*h+i*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*l-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=p*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}lt.prototype.isMatrix3=!0;function Jr(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}function In(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}let ci;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=In("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Go=0;class nt extends li{constructor(e=nt.DEFAULT_IMAGE,t=nt.DEFAULT_MAPPING,i=$e,r=$e,s=Qe,o=$i,a=Be,c=wt,l=1,u=xt){super();Object.defineProperty(this,"id",{value:Go++}),this.uuid=zi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=zi()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nn(r[o].image)):s.push(Nn(r[o]))}else s=Nn(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ir)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case $e:e.x=e.x<0?0:1;break;case Cn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case $e:e.y=e.y<0?0:1;break;case Cn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}nt.DEFAULT_IMAGE=void 0;nt.DEFAULT_MAPPING=Ir;nt.prototype.isTexture=!0;function Nn(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?zo.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ze{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],_=c[9],g=c[2],T=c[6],d=c[10];if(Math.abs(u-p)<o&&Math.abs(h-g)<o&&Math.abs(_-T)<o){if(Math.abs(u+p)<a&&Math.abs(h+g)<a&&Math.abs(_+T)<a&&Math.abs(l+m+d-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,M=(m+1)/2,w=(d+1)/2,C=(u+p)/4,P=(h+g)/4,q=(_+T)/4;return A>M&&A>w?A<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=C/i,s=P/i):M>w?M<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=q/r):w<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=q/s),this.set(i,r,s,t),this}let f=Math.sqrt((T-_)*(T-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(f)<.001&&(f=1),this.x=(T-_)/f,this.y=(h-g)/f,this.z=(p-u)/f,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ze.prototype.isVector4=!0;class Mt extends li{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t),this.texture=new nt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qe,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Er({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Mt.prototype.isWebGLRenderTarget=!0;class Un extends Mt{constructor(e,t,i={}){super(e,t,i);this.samples=4,this.ignoreDepthForMultisampleCopy=i.ignoreDepth!==void 0?i.ignoreDepth:!0,this.useRenderToTexture=i.useRenderToTexture!==void 0?i.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Un.prototype.isWebGLMultisampleRenderTarget=!0;class ui{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==p||l!==m||u!==_){let T=1-a;const d=c*p+l*m+u*_+h*g,f=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const w=Math.sqrt(A),C=Math.atan2(w,d*f);T=Math.sin(T*C)/w,a=Math.sin(a*C)/w}const M=a*f;if(c=c*T+p*M,l=l*T+m*M,u=u*T+_*M,h=h*T+g*M,T===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*m-l*p,e[t+1]=c*_+u*p+l*h-a*m,e[t+2]=l*_+u*m+a*p-c*h,e[t+3]=u*_-a*h-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),p=c(i/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"YXZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"ZXY":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"ZYX":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"YZX":this._x=p*u*h+l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h-p*m*_;break;case"XZY":this._x=p*u*h-l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=i+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ui.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion($r.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($r.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,p=-s*t-o*i-a*r;return this.x=l*c+p*-s+u*-a-h*-o,this.y=u*c+p*-o+h*-s-l*-a,this.z=h*c+p*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return On.copy(this).projectOnVector(e),this.sub(On)}reflect(e){return this.sub(On.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}L.prototype.isVector3=!0;const On=new L,$r=new ui;class hi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],p=e[c+2];u<t&&(t=u),h<i&&(i=h),p<r&&(r=p),u>s&&(s=u),h>o&&(o=h),p>a&&(a=p)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),p=e.getZ(c);u<t&&(t=u),h<i&&(i=h),p<r&&(r=p),u>s&&(s=u),h>o&&(o=h),p>a&&(a=p)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Bn.copy(t.boundingBox),Bn.applyMatrix4(e.matrixWorld),this.union(Bn));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),en.subVectors(this.max,Vi),di.subVectors(e.a,Vi),fi.subVectors(e.b,Vi),pi.subVectors(e.c,Vi),Bt.subVectors(fi,di),zt.subVectors(pi,fi),$t.subVectors(di,pi);let t=[0,-Bt.z,Bt.y,0,-zt.z,zt.y,0,-$t.z,$t.y,Bt.z,0,-Bt.x,zt.z,0,-zt.x,$t.z,0,-$t.x,-Bt.y,Bt.x,0,-zt.y,zt.x,0,-$t.y,$t.x,0];return!zn(t,di,fi,pi,en)||(t=[1,0,0,0,1,0,0,0,1],!zn(t,di,fi,pi,en))?!1:(tn.crossVectors(Bt,zt),t=[tn.x,tn.y,tn.z],zn(t,di,fi,pi,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(At[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),At[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),At[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),At[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),At[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),At[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),At[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),At[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(At),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}hi.prototype.isBox3=!0;const At=[new L,new L,new L,new L,new L,new L,new L,new L],Gi=new L,Bn=new hi,di=new L,fi=new L,pi=new L,Bt=new L,zt=new L,$t=new L,Vi=new L,en=new L,tn=new L,Qt=new L;function zn(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qt.fromArray(n,s);const a=r.x*Math.abs(Qt.x)+r.y*Math.abs(Qt.y)+r.z*Math.abs(Qt.z),c=e.dot(Qt),l=t.dot(Qt),u=i.dot(Qt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vo=new hi,Qr=new L,nn=new L,Gn=new L;class Vn{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vo.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Gn.subVectors(e,this.center);const t=Gn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Gn.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?nn.set(0,0,1).multiplyScalar(e.radius):nn.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Qr.copy(e.center).add(nn)),this.expandByPoint(Qr.copy(e.center).sub(nn)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rt=new L,Hn=new L,rn=new L,Gt=new L,Wn=new L,sn=new L,kn=new L;class Ho{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rt.copy(this.direction).multiplyScalar(t).add(this.origin),Rt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hn.copy(e).add(t).multiplyScalar(.5),rn.copy(t).sub(e).normalize(),Gt.copy(this.origin).sub(Hn);const s=e.distanceTo(t)*.5,o=-this.direction.dot(rn),a=Gt.dot(this.direction),c=-Gt.dot(rn),l=Gt.lengthSq(),u=Math.abs(1-o*o);let h,p,m,_;if(u>0)if(h=o*c-a,p=o*a-c,_=s*u,h>=0)if(p>=-_)if(p<=_){const g=1/u;h*=g,p*=g,m=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(rn).multiplyScalar(p).add(Hn),m}intersectSphere(e,t){Rt.subVectors(e.center,this.origin);const i=Rt.dot(this.direction),r=Rt.dot(Rt)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rt)!==null}intersectTriangle(e,t,i,r,s){Wn.subVectors(t,e),sn.subVectors(i,e),kn.crossVectors(Wn,sn);let o=this.direction.dot(kn),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gt.subVectors(this.origin,e);const c=a*this.direction.dot(sn.crossVectors(Gt,sn));if(c<0)return null;const l=a*this.direction.dot(Wn.cross(Gt));if(l<0||c+l>o)return null;const u=-a*Gt.dot(kn);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,h,p,m,_,g,T){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=_,d[11]=g,d[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=p-g*l,t[9]=-a*c,t[2]=g-p*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,m=c*h,_=l*u,g=l*h;t[0]=p+g*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,m=c*h,_=l*u,g=l*h;t[0]=p-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=p*l+g,t[1]=c*h,t[5]=g*l+p,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-p*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=p-g*h}else if(e.order==="XZY"){const p=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wo,e,ko)}lookAt(e,t,i){const r=this.elements;return et.subVectors(e,t),et.lengthSq()===0&&(et.z=1),et.normalize(),Vt.crossVectors(i,et),Vt.lengthSq()===0&&(Math.abs(i.z)===1?et.x+=1e-4:et.z+=1e-4,et.normalize(),Vt.crossVectors(i,et)),Vt.normalize(),an.crossVectors(et,Vt),r[0]=Vt.x,r[4]=an.x,r[8]=et.x,r[1]=Vt.y,r[5]=an.y,r[9]=et.y,r[2]=Vt.z,r[6]=an.z,r[10]=et.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],p=i[9],m=i[13],_=i[2],g=i[6],T=i[10],d=i[14],f=i[3],A=i[7],M=i[11],w=i[15],C=r[0],P=r[4],q=r[8],ie=r[12],Y=r[1],I=r[5],S=r[9],y=r[13],U=r[2],z=r[6],F=r[10],B=r[14],$=r[3],ne=r[7],G=r[11],H=r[15];return s[0]=o*C+a*Y+c*U+l*$,s[4]=o*P+a*I+c*z+l*ne,s[8]=o*q+a*S+c*F+l*G,s[12]=o*ie+a*y+c*B+l*H,s[1]=u*C+h*Y+p*U+m*$,s[5]=u*P+h*I+p*z+m*ne,s[9]=u*q+h*S+p*F+m*G,s[13]=u*ie+h*y+p*B+m*H,s[2]=_*C+g*Y+T*U+d*$,s[6]=_*P+g*I+T*z+d*ne,s[10]=_*q+g*S+T*F+d*G,s[14]=_*ie+g*y+T*B+d*H,s[3]=f*C+A*Y+M*U+w*$,s[7]=f*P+A*I+M*z+w*ne,s[11]=f*q+A*S+M*F+w*G,s[15]=f*ie+A*y+M*B+w*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],m=e[14],_=e[3],g=e[7],T=e[11],d=e[15];return _*(+s*c*h-r*l*h-s*a*p+i*l*p+r*a*m-i*c*m)+g*(+t*c*m-t*l*p+s*o*p-r*o*m+r*l*u-s*c*u)+T*(+t*l*h-t*a*m-s*o*h+i*o*m+s*a*u-i*l*u)+d*(-r*a*u-t*c*h+t*a*p+r*o*h-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],m=e[11],_=e[12],g=e[13],T=e[14],d=e[15],f=h*T*l-g*p*l+g*c*m-a*T*m-h*c*d+a*p*d,A=_*p*l-u*T*l-_*c*m+o*T*m+u*c*d-o*p*d,M=u*g*l-_*h*l+_*a*m-o*g*m-u*a*d+o*h*d,w=_*h*c-u*g*c-_*a*p+o*g*p+u*a*T-o*h*T,C=t*f+i*A+r*M+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=f*P,e[1]=(g*p*s-h*T*s-g*r*m+i*T*m+h*r*d-i*p*d)*P,e[2]=(a*T*s-g*c*s+g*r*l-i*T*l-a*r*d+i*c*d)*P,e[3]=(h*c*s-a*p*s-h*r*l+i*p*l+a*r*m-i*c*m)*P,e[4]=A*P,e[5]=(u*T*s-_*p*s+_*r*m-t*T*m-u*r*d+t*p*d)*P,e[6]=(_*c*s-o*T*s-_*r*l+t*T*l+o*r*d-t*c*d)*P,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*m+t*c*m)*P,e[8]=M*P,e[9]=(_*h*s-u*g*s-_*i*m+t*g*m+u*i*d-t*h*d)*P,e[10]=(o*g*s-_*a*s+_*i*l-t*g*l-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*m-t*a*m)*P,e[12]=w*P,e[13]=(u*g*r-_*h*r+_*i*p-t*g*p-u*i*T+t*h*T)*P,e[14]=(_*a*r-o*g*r-_*i*c+t*g*c+o*i*T-t*a*T)*P,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*p+t*a*p)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,p=s*l,m=s*u,_=s*h,g=o*u,T=o*h,d=a*h,f=c*l,A=c*u,M=c*h,w=i.x,C=i.y,P=i.z;return r[0]=(1-(g+d))*w,r[1]=(m+M)*w,r[2]=(_-A)*w,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(p+d))*C,r[6]=(T+f)*C,r[7]=0,r[8]=(_+A)*P,r[9]=(T-f)*P,r[10]=(1-(p+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ct.copy(this);const l=1/s,u=1/o,h=1/a;return ct.elements[0]*=l,ct.elements[1]*=l,ct.elements[2]*=l,ct.elements[4]*=u,ct.elements[5]*=u,ct.elements[6]*=u,ct.elements[8]*=h,ct.elements[9]*=h,ct.elements[10]*=h,t.setFromRotationMatrix(ct),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),p=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,p=(i+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Ve.prototype.isMatrix4=!0;const mi=new L,ct=new Ve,Wo=new L(0,0,0),ko=new L(1,1,1),Vt=new L,an=new L,et=new L,es=new Ve,ts=new ui;class gi{constructor(e=0,t=0,i=0,r=gi.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return es.makeRotationFromQuaternion(e),this.setFromRotationMatrix(es,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ts.setFromEuler(this),this.setFromQuaternion(ts,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}gi.prototype.isEuler=!0;gi.DefaultOrder="XYZ";gi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class is{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Xo=0;const ns=new L,_i=new ui,Lt=new Ve,on=new L,Hi=new L,qo=new L,Yo=new ui,rs=new L(1,0,0),ss=new L(0,1,0),as=new L(0,0,1),Zo={type:"added"},os={type:"removed"};class rt extends li{constructor(){super();Object.defineProperty(this,"id",{value:Xo++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new L,t=new gi,i=new ui,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new lt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(rs,e)}rotateY(e){return this.rotateOnAxis(ss,e)}rotateZ(e){return this.rotateOnAxis(as,e)}translateOnAxis(e,t){return ns.copy(e).applyQuaternion(this.quaternion),this.position.add(ns.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rs,e)}translateY(e){return this.translateOnAxis(ss,e)}translateZ(e){return this.translateOnAxis(as,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Lt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?on.copy(e):on.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lt.lookAt(Hi,on,this.up):Lt.lookAt(on,Hi,this.up),this.quaternion.setFromRotationMatrix(Lt),r&&(Lt.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(Lt),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(os)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(os)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Lt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,qo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Yo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rt.DefaultUp=new L(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.prototype.isObject3D=!0;const ut=new L,Ct=new L,Xn=new L,Dt=new L,xi=new L,vi=new L,ls=new L,qn=new L,Yn=new L,Zn=new L;class Pt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ut.subVectors(e,t),r.cross(ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ut.subVectors(r,t),Ct.subVectors(i,t),Xn.subVectors(e,t);const o=ut.dot(ut),a=ut.dot(Ct),c=ut.dot(Xn),l=Ct.dot(Ct),u=Ct.dot(Xn),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const p=1/h,m=(l*c-a*u)*p,_=(o*u-a*c)*p;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dt),Dt.x>=0&&Dt.y>=0&&Dt.x+Dt.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Dt),c.set(0,0),c.addScaledVector(s,Dt.x),c.addScaledVector(o,Dt.y),c.addScaledVector(a,Dt.z),c}static isFrontFacing(e,t,i,r){return ut.subVectors(i,t),Ct.subVectors(e,t),ut.cross(Ct).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ut.subVectors(this.c,this.b),Ct.subVectors(this.a,this.b),ut.cross(Ct).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Pt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xi.subVectors(r,i),vi.subVectors(s,i),qn.subVectors(e,i);const c=xi.dot(qn),l=vi.dot(qn);if(c<=0&&l<=0)return t.copy(i);Yn.subVectors(e,r);const u=xi.dot(Yn),h=vi.dot(Yn);if(u>=0&&h<=u)return t.copy(r);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(xi,o);Zn.subVectors(e,s);const m=xi.dot(Zn),_=vi.dot(Zn);if(_>=0&&m<=_)return t.copy(s);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(vi,a);const T=u*_-m*h;if(T<=0&&h-u>=0&&m-_>=0)return ls.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(ls,a);const d=1/(T+g+p);return o=g*d,a=p*d,t.copy(i).addScaledVector(xi,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jo=0;class Wi extends li{constructor(){super();Object.defineProperty(this,"id",{value:jo++}),this.uuid=zi(),this.name="",this.type="Material",this.fog=!0,this.blending=Ii,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.format=Be,this.transparent=!1,this.blendSrc=Dr,this.blendDst=Pr,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===da;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.format!==Be&&(i.format=this.format),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Wi.prototype.isMaterial=!0;const cs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={h:0,s:0,l:0},ln={h:0,s:0,l:0};function jn(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Re{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Oo(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=jn(s,r,e+1/3),this.g=jn(s,r,e),this.b=jn(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=cs[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(ht),ht.h+=e,ht.s+=t,ht.l+=i,this.setHSL(ht.h,ht.s,ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ht),e.getHSL(ln);const i=Fn(ht.h,ln.h,t),r=Fn(ht.s,ln.s,t),s=Fn(ht.l,ln.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Re.NAMES=cs;Re.prototype.isColor=!0;Re.prototype.r=1;Re.prototype.g=1;Re.prototype.b=1;class $n extends Wi{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}$n.prototype.isMeshBasicMaterial=!0;const De=new L,cn=new Ce;class st{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ce),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new L),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ze),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXY(t,cn.x,cn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)De.fromBufferAttribute(this,t),De.applyMatrix3(e),this.setXYZ(t,De.x,De.y,De.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyMatrix4(e),this.setXYZ(t,De.x,De.y,De.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyNormalMatrix(e),this.setXYZ(t,De.x,De.y,De.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.transformDirection(e),this.setXYZ(t,De.x,De.y,De.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}st.prototype.isBufferAttribute=!0;class us extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hs extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ko extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}}Ko.prototype.isFloat16BufferAttribute=!0;class St extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jo=0;const at=new Ve,Qn=new rt,Mi=new L,tt=new hi,ki=new hi,ze=new L;class Ft extends li{constructor(){super();Object.defineProperty(this,"id",{value:Jo++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jr(e)>65535?hs:us)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return at.makeRotationFromQuaternion(e),this.applyMatrix4(at),this}rotateX(e){return at.makeRotationX(e),this.applyMatrix4(at),this}rotateY(e){return at.makeRotationY(e),this.applyMatrix4(at),this}rotateZ(e){return at.makeRotationZ(e),this.applyMatrix4(at),this}translate(e,t,i){return at.makeTranslation(e,t,i),this.applyMatrix4(at),this}scale(e,t,i){return at.makeScale(e,t,i),this.applyMatrix4(at),this}lookAt(e){return Qn.lookAt(e),Qn.updateMatrix(),this.applyMatrix4(Qn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tt.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,tt.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,tt.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(tt.min),this.boundingBox.expandByPoint(tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(tt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(tt.min,ki.min),tt.expandByPoint(ze),ze.addVectors(tt.max,ki.max),tt.expandByPoint(ze)):(tt.expandByPoint(ki.min),tt.expandByPoint(ki.max))}tt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ze.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ze));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Mi.fromBufferAttribute(e,l),ze.add(Mi)),r=Math.max(r,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new st(new Float32Array(4*a),4));const c=t.tangent.array,l=[],u=[];for(let Y=0;Y<a;Y++)l[Y]=new L,u[Y]=new L;const h=new L,p=new L,m=new L,_=new Ce,g=new Ce,T=new Ce,d=new L,f=new L;function A(Y,I,S){h.fromArray(r,Y*3),p.fromArray(r,I*3),m.fromArray(r,S*3),_.fromArray(o,Y*2),g.fromArray(o,I*2),T.fromArray(o,S*2),p.sub(h),m.sub(h),g.sub(_),T.sub(_);const y=1/(g.x*T.y-T.x*g.y);!isFinite(y)||(d.copy(p).multiplyScalar(T.y).addScaledVector(m,-g.y).multiplyScalar(y),f.copy(m).multiplyScalar(g.x).addScaledVector(p,-T.x).multiplyScalar(y),l[Y].add(d),l[I].add(d),l[S].add(d),u[Y].add(f),u[I].add(f),u[S].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let Y=0,I=M.length;Y<I;++Y){const S=M[Y],y=S.start,U=S.count;for(let z=y,F=y+U;z<F;z+=3)A(i[z+0],i[z+1],i[z+2])}const w=new L,C=new L,P=new L,q=new L;function ie(Y){P.fromArray(s,Y*3),q.copy(P);const I=l[Y];w.copy(I),w.sub(P.multiplyScalar(P.dot(I))).normalize(),C.crossVectors(q,I);const y=C.dot(u[Y])<0?-1:1;c[Y*4]=w.x,c[Y*4+1]=w.y,c[Y*4+2]=w.z,c[Y*4+3]=y}for(let Y=0,I=M.length;Y<I;++Y){const S=M[Y],y=S.start,U=S.count;for(let z=y,F=y+U;z<F;z+=3)ie(i[z+0]),ie(i[z+1]),ie(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),g=e.getX(p+1),T=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,T),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,T),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(T,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let h=0,p=l;h<u;h++,p++)o[p]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ze.fromBufferAttribute(e,t),ze.normalize(),e.setXYZ(t,ze.x,ze.y,ze.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let m=0,_=0;for(let g=0,T=c.length;g<T;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*u;for(let d=0;d<u;d++)p[_++]=l[m++]}return new st(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.prototype.isBufferGeometry=!0;const ds=new Ve,Si=new Ho,er=new Vn,Ht=new L,Wt=new L,kt=new L,tr=new L,ir=new L,nr=new L,un=new L,hn=new L,dn=new L,fn=new Ce,pn=new Ce,mn=new Ce,rr=new L,gn=new L;class It extends rt{constructor(e=new Ft,t=new $n){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere),er.applyMatrix4(s),e.ray.intersectsSphere(er)===!1)||(ds.copy(s).invert(),Si.copy(e.ray).applyMatrix4(ds),i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,p=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,T=m.length;g<T;g++){const d=m[g],f=r[d.materialIndex],A=Math.max(d.start,_.start),M=Math.min(a.count,Math.min(d.start+d.count,_.start+_.count));for(let w=A,C=M;w<C;w+=3){const P=a.getX(w),q=a.getX(w+1),ie=a.getX(w+2);o=_n(this,f,e,Si,c,l,u,h,p,P,q,ie),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),T=Math.min(a.count,_.start+_.count);for(let d=g,f=T;d<f;d+=3){const A=a.getX(d),M=a.getX(d+1),w=a.getX(d+2);o=_n(this,r,e,Si,c,l,u,h,p,A,M,w),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,T=m.length;g<T;g++){const d=m[g],f=r[d.materialIndex],A=Math.max(d.start,_.start),M=Math.min(c.count,Math.min(d.start+d.count,_.start+_.count));for(let w=A,C=M;w<C;w+=3){const P=w,q=w+1,ie=w+2;o=_n(this,f,e,Si,c,l,u,h,p,P,q,ie),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),T=Math.min(c.count,_.start+_.count);for(let d=g,f=T;d<f;d+=3){const A=d,M=d+1,w=d+2;o=_n(this,r,e,Si,c,l,u,h,p,A,M,w),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}It.prototype.isMesh=!0;function $o(n,e,t,i,r,s,o,a){let c;if(e.side===Ue?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==ni,a),c===null)return null;gn.copy(a),gn.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(gn);return l<t.near||l>t.far?null:{distance:l,point:gn.clone(),object:n}}function _n(n,e,t,i,r,s,o,a,c,l,u,h){Ht.fromBufferAttribute(r,l),Wt.fromBufferAttribute(r,u),kt.fromBufferAttribute(r,h);const p=n.morphTargetInfluences;if(s&&p){un.set(0,0,0),hn.set(0,0,0),dn.set(0,0,0);for(let _=0,g=s.length;_<g;_++){const T=p[_],d=s[_];T!==0&&(tr.fromBufferAttribute(d,l),ir.fromBufferAttribute(d,u),nr.fromBufferAttribute(d,h),o?(un.addScaledVector(tr,T),hn.addScaledVector(ir,T),dn.addScaledVector(nr,T)):(un.addScaledVector(tr.sub(Ht),T),hn.addScaledVector(ir.sub(Wt),T),dn.addScaledVector(nr.sub(kt),T)))}Ht.add(un),Wt.add(hn),kt.add(dn)}n.isSkinnedMesh&&(n.boneTransform(l,Ht),n.boneTransform(u,Wt),n.boneTransform(h,kt));const m=$o(n,e,t,i,Ht,Wt,kt,rr);if(m){a&&(fn.fromBufferAttribute(a,l),pn.fromBufferAttribute(a,u),mn.fromBufferAttribute(a,h),m.uv=Pt.getUV(rr,Ht,Wt,kt,fn,pn,mn,new Ce)),c&&(fn.fromBufferAttribute(c,l),pn.fromBufferAttribute(c,u),mn.fromBufferAttribute(c,h),m.uv2=Pt.getUV(rr,Ht,Wt,kt,fn,pn,mn,new Ce));const _={a:l,b:u,c:h,normal:new L,materialIndex:0};Pt.getNormal(Ht,Wt,kt,_.normal),m.face=_}return m}class Xi extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function _(g,T,d,f,A,M,w,C,P,q,ie){const Y=M/P,I=w/q,S=M/2,y=w/2,U=C/2,z=P+1,F=q+1;let B=0,$=0;const ne=new L;for(let G=0;G<F;G++){const H=G*I-y;for(let re=0;re<z;re++){const te=re*Y-S;ne[g]=te*f,ne[T]=H*A,ne[d]=U,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[T]=0,ne[d]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(re/P),h.push(1-G/q),B+=1}}for(let G=0;G<q;G++)for(let H=0;H<P;H++){const re=p+H+z*G,te=p+H+z*(G+1),se=p+(H+1)+z*(G+1),Ee=p+(H+1)+z*G;c.push(re,te,Ee),c.push(te,se,Ee),$+=6}a.addGroup(m,$,ie),m+=$,p+=B}}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ke(n){const e={};for(let t=0;t<n.length;t++){const i=yi(n[t]);for(const r in i)e[r]=i[r]}return e}const Qo={clone:yi,merge:ke};var el=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,tl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ei extends Wi{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=el,this.fragmentShader=tl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}Ei.prototype.isShaderMaterial=!0;class sr extends rt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}sr.prototype.isCamera=!0;class dt extends sr{constructor(e=50,t=1,i=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Pn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}dt.prototype.isPerspectiveCamera=!0;const Ti=90,bi=1;class il extends rt{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new dt(Ti,bi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(1,0,0)),this.add(r);const s=new dt(Ti,bi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const o=new dt(Ti,bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new dt(Ti,bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const c=new dt(Ti,bi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,1)),this.add(c);const l=new dt(Ti,bi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}}class ar extends nt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni;super(e,t,i,r,s,o,a,c,l,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ar.prototype.isCubeTexture=!0;class fs extends Mt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i);super(e,e,t);t=t||{},this.texture=new ar(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qe,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Be,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Nt});s.uniforms.tEquirect.value=t;const o=new It(r,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=Qe),new il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}fs.prototype.isWebGLCubeRenderTarget=!0;const or=new L,nl=new L,rl=new lt;class Xt{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=or.subVectors(i,t).cross(nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(or),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rl.getNormalMatrix(e),r=this.coplanarPoint(or).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Xt.prototype.isPlane=!0;const wi=new Vn,xn=new L;class ps{constructor(e=new Xt,t=new Xt,i=new Xt,r=new Xt,s=new Xt,o=new Xt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],p=i[8],m=i[9],_=i[10],g=i[11],T=i[12],d=i[13],f=i[14],A=i[15];return t[0].setComponents(a-r,h-c,g-p,A-T).normalize(),t[1].setComponents(a+r,h+c,g+p,A+T).normalize(),t[2].setComponents(a+s,h+l,g+m,A+d).normalize(),t[3].setComponents(a-s,h-l,g-m,A-d).normalize(),t[4].setComponents(a-o,h-u,g-_,A-f).normalize(),t[5].setComponents(a+o,h+u,g+_,A+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xn.x=r.normal.x>0?e.max.x:e.min.x,xn.y=r.normal.y>0?e.max.y:e.min.y,xn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ms(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sl(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,p=l.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,p),l.onUploadCallback();let _=n.FLOAT;return h instanceof Float32Array?_=n.FLOAT:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?_=n.HALF_FLOAT:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=n.UNSIGNED_SHORT:h instanceof Int16Array?_=n.SHORT:h instanceof Uint32Array?_=n.UNSIGNED_INT:h instanceof Int32Array?_=n.INT:h instanceof Int8Array?_=n.BYTE:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(_=n.UNSIGNED_BYTE),{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const p=u.array,m=u.updateRange;n.bindBuffer(h,l),m.count===-1?n.bufferSubData(h,0,p):(t?n.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class lr extends Ft{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,p=t/c,m=[],_=[],g=[],T=[];for(let d=0;d<u;d++){const f=d*p-o;for(let A=0;A<l;A++){const M=A*h-s;_.push(M,-f,0),g.push(0,0,1),T.push(A/a),T.push(1-d/c)}}for(let d=0;d<c;d++)for(let f=0;f<a;f++){const A=f+l*d,M=f+l*(d+1),w=f+1+l*(d+1),C=f+1+l*d;m.push(A,M,C),m.push(M,w,C)}this.setIndex(m),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(T,2))}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var al=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,ol=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,ll=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,cl=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,ul=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,hl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,dl=`
vec3 transformed = vec3( position );
`,fl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,pl=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,ml=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,gl=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,_l=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,xl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,vl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Ml=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Sl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,yl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,El=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Tl=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,bl=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		if ( mipInt < cubeUV_maxMipLevel ) {

			uv.y += 2.0 * cubeUV_maxTileSize;

		}

		uv.y += filterInt * 2.0 * cubeUV_minTileSize;

		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );

		uv *= texelSize;

		return texture2D( envMap, uv ).rgb;

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,wl=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Al=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Rl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Ll=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Cl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Dl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Pl=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Fl=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

		envColor = envMapTexelToLinear( envColor );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Il=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Nl=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Ul=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Ol=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,Bl=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,zl=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Gl=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Vl=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Hl=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,Wl=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		lightMapIrradiance *= PI;

	#endif

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,kl=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Xl=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,ql=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Yl=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION

		uniform float refractionRatio;

	#endif

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec;

			#ifdef ENVMAP_MODE_REFLECTION

				reflectVec = reflect( - viewDir, normal );

				// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			#else

				reflectVec = refract( - viewDir, normal, refractionRatio );

			#endif

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,Zl=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,jl=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,Kl=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Jl=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,$l=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,Ql=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );


	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,ec=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,tc=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI;

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,ic=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,nc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,rc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,sc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,ac=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,oc=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`,lc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,cc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,uc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,hc=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,dc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,fc=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,pc=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;

		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {

			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;

			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,mc=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			#ifndef USE_MORPHNORMALS

				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];

			#else

				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];

			#endif

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,gc=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,_c=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,xc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,vc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Mc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Sc=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,yc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Ec=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Tc=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,bc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,wc=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Ac=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Rc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Lc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Cc=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Dc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Pc=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Fc=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Ic=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Nc=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,Uc=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Oc=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Bc=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,zc=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Gc=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,Vc=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Hc=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Wc=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,kc=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,Xc=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,qc=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( float roughness, float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef TEXTURE_LOD_EXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,Yc=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,Zc=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,jc=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,Kc=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,Jc=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,$c=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,Qc=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const eu=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,tu=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,iu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,nu=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,ru=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,su=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,au=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,ou=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,lu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,cu=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,uu=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,hu=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,du=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,fu=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,pu=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,mu=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,gu=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,_u=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,xu=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,vu=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`,Mu=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Su=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,yu=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Eu=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Tu=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,bu=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,wu=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Au=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Ru=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Lu=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Cu=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Du=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Se={alphamap_fragment:al,alphamap_pars_fragment:ol,alphatest_fragment:ll,alphatest_pars_fragment:cl,aomap_fragment:ul,aomap_pars_fragment:hl,begin_vertex:dl,beginnormal_vertex:fl,bsdfs:pl,bumpmap_pars_fragment:ml,clipping_planes_fragment:gl,clipping_planes_pars_fragment:_l,clipping_planes_pars_vertex:xl,clipping_planes_vertex:vl,color_fragment:Ml,color_pars_fragment:Sl,color_pars_vertex:yl,color_vertex:El,common:Tl,cube_uv_reflection_fragment:bl,defaultnormal_vertex:wl,displacementmap_pars_vertex:Al,displacementmap_vertex:Rl,emissivemap_fragment:Ll,emissivemap_pars_fragment:Cl,encodings_fragment:Dl,encodings_pars_fragment:Pl,envmap_fragment:Fl,envmap_common_pars_fragment:Il,envmap_pars_fragment:Nl,envmap_pars_vertex:Ul,envmap_physical_pars_fragment:Yl,envmap_vertex:Ol,fog_vertex:Bl,fog_pars_vertex:zl,fog_fragment:Gl,fog_pars_fragment:Vl,gradientmap_pars_fragment:Hl,lightmap_fragment:Wl,lightmap_pars_fragment:kl,lights_lambert_vertex:Xl,lights_pars_begin:ql,lights_toon_fragment:Zl,lights_toon_pars_fragment:jl,lights_phong_fragment:Kl,lights_phong_pars_fragment:Jl,lights_physical_fragment:$l,lights_physical_pars_fragment:Ql,lights_fragment_begin:ec,lights_fragment_maps:tc,lights_fragment_end:ic,logdepthbuf_fragment:nc,logdepthbuf_pars_fragment:rc,logdepthbuf_pars_vertex:sc,logdepthbuf_vertex:ac,map_fragment:oc,map_pars_fragment:lc,map_particle_fragment:cc,map_particle_pars_fragment:uc,metalnessmap_fragment:hc,metalnessmap_pars_fragment:dc,morphnormal_vertex:fc,morphtarget_pars_vertex:pc,morphtarget_vertex:mc,normal_fragment_begin:gc,normal_fragment_maps:_c,normal_pars_fragment:xc,normal_pars_vertex:vc,normal_vertex:Mc,normalmap_pars_fragment:Sc,clearcoat_normal_fragment_begin:yc,clearcoat_normal_fragment_maps:Ec,clearcoat_pars_fragment:Tc,output_fragment:bc,packing:wc,premultiplied_alpha_fragment:Ac,project_vertex:Rc,dithering_fragment:Lc,dithering_pars_fragment:Cc,roughnessmap_fragment:Dc,roughnessmap_pars_fragment:Pc,shadowmap_pars_fragment:Fc,shadowmap_pars_vertex:Ic,shadowmap_vertex:Nc,shadowmask_pars_fragment:Uc,skinbase_vertex:Oc,skinning_pars_vertex:Bc,skinning_vertex:zc,skinnormal_vertex:Gc,specularmap_fragment:Vc,specularmap_pars_fragment:Hc,tonemapping_fragment:Wc,tonemapping_pars_fragment:kc,transmission_fragment:Xc,transmission_pars_fragment:qc,uv_pars_fragment:Yc,uv_pars_vertex:Zc,uv_vertex:jc,uv2_pars_fragment:Kc,uv2_pars_vertex:Jc,uv2_vertex:$c,worldpos_vertex:Qc,background_vert:eu,background_frag:tu,cube_vert:iu,cube_frag:nu,depth_vert:ru,depth_frag:su,distanceRGBA_vert:au,distanceRGBA_frag:ou,equirect_vert:lu,equirect_frag:cu,linedashed_vert:uu,linedashed_frag:hu,meshbasic_vert:du,meshbasic_frag:fu,meshlambert_vert:pu,meshlambert_frag:mu,meshmatcap_vert:gu,meshmatcap_frag:_u,meshnormal_vert:xu,meshnormal_frag:vu,meshphong_vert:Mu,meshphong_frag:Su,meshphysical_vert:yu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:bu,points_vert:wu,points_frag:Au,shadow_vert:Ru,shadow_frag:Lu,sprite_vert:Cu,sprite_frag:Du},J={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}}},yt={basic:{uniforms:ke([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ke([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.fog,J.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ke([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ke([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ke([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ke([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ke([J.points,J.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ke([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ke([J.common,J.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ke([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ke([J.sprite,J.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},cube:{uniforms:ke([J.envmap,{opacity:{value:1}}]),vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ke([J.common,J.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ke([J.lights,J.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};yt.physical={uniforms:ke([yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};function Pu(n,e,t,i,r){const s=new Re(0);let o=0,a,c,l=null,u=0,h=null;function p(_,g){let T=!1,d=g.isScene===!0?g.background:null;d&&d.isTexture&&(d=e.get(d));const f=n.xr,A=f.getSession&&f.getSession();A&&A.environmentBlendMode==="additive"&&(d=null),d===null?m(s,o):d&&d.isColor&&(m(d,1),T=!0),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),d&&(d.isCubeTexture||d.mapping===Ji)?(c===void 0&&(c=new It(new Xi(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:yi(yt.cube.uniforms),vertexShader:yt.cube.vertexShader,fragmentShader:yt.cube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=d,c.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,(l!==d||u!==d.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=d,u=d.version,h=n.toneMapping),_.unshift(c,c.geometry,c.material,0,0,null)):d&&d.isTexture&&(a===void 0&&(a=new It(new lr(2,2),new Ei({name:"BackgroundMaterial",uniforms:yi(yt.background.uniforms),vertexShader:yt.background.vertexShader,fragmentShader:yt.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=d,d.matrixAutoUpdate===!0&&d.updateMatrix(),a.material.uniforms.uvTransform.value.copy(d.matrix),(l!==d||u!==d.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,l=d,u=d.version,h=n.toneMapping),_.unshift(a,a.geometry,a.material,0,0,null))}function m(_,g){t.buffers.color.setClear(_.r,_.g,_.b,g,r)}return{getClearColor:function(){return s},setClearColor:function(_,g=1){s.set(_),o=g,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(s,o)},render:p}}function Fu(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=g(null);let l=c;function u(y,U,z,F,B){let $=!1;if(o){const ne=_(F,z,U);l!==ne&&(l=ne,p(l.object)),$=T(F,B),$&&d(F,B)}else{const ne=U.wireframe===!0;(l.geometry!==F.id||l.program!==z.id||l.wireframe!==ne)&&(l.geometry=F.id,l.program=z.id,l.wireframe=ne,$=!0)}y.isInstancedMesh===!0&&($=!0),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),$&&(P(y,U,z,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(y){return i.isWebGL2?n.bindVertexArray(y):s.bindVertexArrayOES(y)}function m(y){return i.isWebGL2?n.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function _(y,U,z){const F=z.wireframe===!0;let B=a[y.id];B===void 0&&(B={},a[y.id]=B);let $=B[U.id];$===void 0&&($={},B[U.id]=$);let ne=$[F];return ne===void 0&&(ne=g(h()),$[F]=ne),ne}function g(y){const U=[],z=[],F=[];for(let B=0;B<r;B++)U[B]=0,z[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function T(y,U){const z=l.attributes,F=y.attributes;let B=0;for(const $ in F){const ne=z[$],G=F[$];if(ne===void 0||ne.attribute!==G||ne.data!==G.data)return!0;B++}return l.attributesNum!==B||l.index!==U}function d(y,U){const z={},F=y.attributes;let B=0;for(const $ in F){const ne=F[$],G={};G.attribute=ne,ne.data&&(G.data=ne.data),z[$]=G,B++}l.attributes=z,l.attributesNum=B,l.index=U}function f(){const y=l.newAttributes;for(let U=0,z=y.length;U<z;U++)y[U]=0}function A(y){M(y,0)}function M(y,U){const z=l.newAttributes,F=l.enabledAttributes,B=l.attributeDivisors;z[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),B[y]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,U),B[y]=U)}function w(){const y=l.newAttributes,U=l.enabledAttributes;for(let z=0,F=U.length;z<F;z++)U[z]!==y[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function C(y,U,z,F,B,$){i.isWebGL2===!0&&(z===n.INT||z===n.UNSIGNED_INT)?n.vertexAttribIPointer(y,U,z,B,$):n.vertexAttribPointer(y,U,z,F,B,$)}function P(y,U,z,F){if(i.isWebGL2===!1&&(y.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const B=F.attributes,$=z.getAttributes(),ne=U.defaultAttributeValues;for(const G in $){const H=$[G];if(H.location>=0){let re=B[G];if(re===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const te=re.normalized,se=re.itemSize,Ee=t.get(re);if(Ee===void 0)continue;const R=Ee.buffer,be=Ee.type,ce=Ee.bytesPerElement;if(re.isInterleavedBufferAttribute){const oe=re.data,fe=oe.stride,Pe=re.offset;if(oe&&oe.isInstancedInterleavedBuffer){for(let ue=0;ue<H.locationSize;ue++)M(H.location+ue,oe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ue=0;ue<H.locationSize;ue++)A(H.location+ue);n.bindBuffer(n.ARRAY_BUFFER,R);for(let ue=0;ue<H.locationSize;ue++)C(H.location+ue,se/H.locationSize,be,te,fe*ce,(Pe+se/H.locationSize*ue)*ce)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)M(H.location+oe,re.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<H.locationSize;oe++)A(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,R);for(let oe=0;oe<H.locationSize;oe++)C(H.location+oe,se/H.locationSize,be,te,se*ce,se/H.locationSize*oe*ce)}}else if(ne!==void 0){const te=ne[G];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}w()}function q(){I();for(const y in a){const U=a[y];for(const z in U){const F=U[z];for(const B in F)m(F[B].object),delete F[B];delete U[z]}delete a[y]}}function ie(y){if(a[y.id]===void 0)return;const U=a[y.id];for(const z in U){const F=U[z];for(const B in F)m(F[B].object),delete F[B];delete U[z]}delete a[y.id]}function Y(y){for(const U in a){const z=a[U];if(z[y.id]===void 0)continue;const F=z[y.id];for(const B in F)m(F[B].object),delete F[B];delete z[y.id]}}function I(){S(),l!==c&&(l=c,p(l.object))}function S(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:S,dispose:q,releaseStatesOfGeometry:ie,releaseStatesOfProgram:Y,initAttributes:f,enableAttribute:A,disableUnusedAttributes:w}}function Iu(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let p,m;if(r)p=n,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Nu(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),f=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,M=o||e.has("OES_texture_float"),w=A&&M,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:T,maxVaryings:d,maxFragmentUniforms:f,vertexTextures:A,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:C}}function Uu(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xt,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p,m){const _=h.length!==0||p||i!==0||r;return r=p,t=u(h,m,0),i=h.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,p,m){const _=h.clippingPlanes,g=h.clipIntersection,T=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!T)s?u(null):l();else{const f=s?0:i,A=f*4;let M=d.clippingState||null;c.value=M,M=u(_,p,A,m);for(let w=0;w!==A;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,m,_){const g=h!==null?h.length:0;let T=null;if(g!==0){if(T=c.value,_!==!0||T===null){const d=m+g*4,f=p.matrixWorldInverse;a.getNormalMatrix(f),(T===null||T.length<d)&&(T=new Float32Array(d));for(let A=0,M=m;A!==g;++A,M+=4)o.copy(h[A]).applyMatrix4(f,a),o.normal.toArray(T,M),T[M+3]=o.constant}c.value=T,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,T}}function Ou(n){let e=new WeakMap;function t(o,a){return a===wn?o.mapping=Ni:a===An&&(o.mapping=Ui),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wn||a===An)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=n.getRenderTarget(),u=new fs(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gs extends sr{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}gs.prototype.isOrthographicCamera=!0;class vn extends Ei{constructor(e){super(e);this.type="RawShaderMaterial"}}vn.prototype.isRawShaderMaterial=!0;const Ai=4,qt=8,Et=Math.pow(2,qt),_s=[.125,.215,.35,.446,.526,.582],xs=qt-Ai+1+_s.length,Ri=20,Mn={[xt]:0,[Bi]:1},cr=new gs,{_lodPlanes:qi,_sizeLods:vs,_sigmas:Sn}=zu(),Ms=new Re;let ur=null;const ei=(1+Math.sqrt(5))/2,Li=1/ei,Ss=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ei,Li),new L(0,ei,-Li),new L(Li,0,ei),new L(-Li,0,ei),new L(ei,Li,0),new L(-ei,Li,0)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Gu(Ri),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ur=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Ts(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Es(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<qi.length;e++)qi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ur),e.scissorTest=!1,yn(e,0,0,e.width,e.height)}_fromTexture(e){ur=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Kt,format:Be,encoding:xt,depthBuffer:!1},i=ys(t);return i.depthBuffer=!e,this._pingPongRenderTarget=ys(t),i}_compileMaterial(e){const t=new It(qi[0],e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,r){const s=90,o=1,a=new dt(s,o,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Ms),u.toneMapping=Ut,u.autoClear=!1;const m=new $n({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new It(new Xi,m);let g=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,g=!0):(m.color.copy(Ms),g=!0);for(let d=0;d<6;d++){const f=d%3;f==0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):f==1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d])),yn(r,f*Et,d>2?Et:0,Et,Et),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=T}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Be&&t.type===wt&&t.encoding===Bi?e.value=Mn[xt]:e.value=Mn[t.encoding]}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ni||e.mapping===Ui;r?this._cubemapShader==null&&(this._cubemapShader=Ts()):this._equirectShader==null&&(this._equirectShader=Es());const s=r?this._cubemapShader:this._equirectShader,o=new It(qi[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),yn(t,0,0,3*Et,2*Et),i.setRenderTarget(t),i.render(o,cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<xs;r++){const s=Math.sqrt(Sn[r]*Sn[r]-Sn[r-1]*Sn[r-1]),o=Ss[(r-1)%Ss.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(qi[r],l),p=l.uniforms,m=vs[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),g=s/_,T=isFinite(s)?1+Math.floor(u*g):Ri;T>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${Ri}`);const d=[];let f=0;for(let C=0;C<Ri;++C){const P=C/g,q=Math.exp(-P*P/2);d.push(q),C==0?f+=q:C<T&&(f+=2*q)}for(let C=0;C<d.length;C++)d[C]=d[C]/f;p.envMap.value=e.texture,p.samples.value=T,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a),p.dTheta.value=_,p.mipInt.value=qt-i;const A=vs[r],M=3*Math.max(0,Et-2*A),w=(r===0?0:2*Et)+2*A*(r>qt-Ai?r-qt+Ai:0);yn(t,M,w,3*A,2*A),c.setRenderTarget(t),c.render(h,cr)}}function zu(){const n=[],e=[],t=[];let i=qt;for(let r=0;r<xs;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>qt-Ai?o=_s[r-qt+Ai-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,p=6,m=3,_=2,g=1,T=new Float32Array(m*p*h),d=new Float32Array(_*p*h),f=new Float32Array(g*p*h);for(let M=0;M<h;M++){const w=M%3*2/3-1,C=M>2?0:-1,P=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];T.set(P,m*p*M),d.set(u,_*p*M);const q=[M,M,M,M,M,M];f.set(q,g*p*M)}const A=new Ft;A.setAttribute("position",new st(T,m)),A.setAttribute("uv",new st(d,_)),A.setAttribute("faceIndex",new st(f,g)),n.push(A),i>Ai&&i--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function ys(n){const e=new Mt(3*Et,3*Et,n);return e.texture.mapping=Ji,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function yn(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Gu(n){const e=new Float32Array(n),t=new L(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${dr()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Es(){const n=new Ce(1,1);return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:Mn[xt]}},vertexShader:hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${dr()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Ts(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Mn[xt]}},vertexShader:hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${dr()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function hr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dr(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Vu(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const c=a.mapping,l=c===wn||c===An,u=c===Ni||c===Ui;if(l||u){if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){const p=n.getRenderTarget();t===null&&(t=new Bu(n));const m=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),n.setRenderTarget(p),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hu(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wu(n,e,t,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let T=0,d=g.length;T<d;T++)e.update(g[T],n.ARRAY_BUFFER)}}function l(h){const p=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const f=m.array;g=m.version;for(let A=0,M=f.length;A<M;A+=3){const w=f[A+0],C=f[A+1],P=f[A+2];p.push(w,C,C,P,P,w)}}else{const f=_.array;g=_.version;for(let A=0,M=f.length/3-1;A<M;A+=3){const w=A+0,C=A+1,P=A+2;p.push(w,C,C,P,P,w)}}const T=new(Jr(p)>65535?hs:us)(p,1);T.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,T)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ku(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,m){n.drawElements(s,m,a,p*c),t.update(m,s,1)}function h(p,m,_){if(_===0)return;let g,T;if(r)g=n,T="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),T="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[T](s,m,a,p*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Xu(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}class fr extends nt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}fr.prototype.isDataTexture2DArray=!0;function qu(n,e){return n[0]-e[0]}function Yu(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bs(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Zu(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new L,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,p){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position.length;let g=s.get(u);if(g===void 0||g.count!==_){g!==void 0&&g.texture.dispose();const f=u.morphAttributes.normal!==void 0,A=u.morphAttributes.position,M=u.morphAttributes.normal||[],w=u.attributes.position.count,C=f===!0?2:1;let P=w*C,q=1;P>e.maxTextureSize&&(q=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const ie=new Float32Array(P*q*4*_),Y=new fr(ie,P,q,_);Y.format=Be,Y.type=Ot,Y.needsUpdate=!0;const I=C*4;for(let S=0;S<_;S++){const y=A[S],U=M[S],z=P*q*4*S;for(let F=0;F<y.count;F++){o.fromBufferAttribute(y,F),y.normalized===!0&&bs(o,y);const B=F*I;ie[z+B+0]=o.x,ie[z+B+1]=o.y,ie[z+B+2]=o.z,ie[z+B+3]=0,f===!0&&(o.fromBufferAttribute(U,F),U.normalized===!0&&bs(o,U),ie[z+B+4]=o.x,ie[z+B+5]=o.y,ie[z+B+6]=o.z,ie[z+B+7]=0)}}g={count:_,texture:Y,size:new Ce(P,q)},s.set(u,g)}let T=0;for(let f=0;f<m.length;f++)T+=m[f];const d=u.morphTargetsRelative?1:1-T;p.getUniforms().setValue(n,"morphTargetBaseInfluence",d),p.getUniforms().setValue(n,"morphTargetInfluences",m),p.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=m===void 0?0:m.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];i[u.id]=g}for(let M=0;M<_;M++){const w=g[M];w[0]=M,w[1]=m[M]}g.sort(Yu);for(let M=0;M<8;M++)M<_&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(qu);const T=u.morphAttributes.position,d=u.morphAttributes.normal;let f=0;for(let M=0;M<8;M++){const w=a[M],C=w[0],P=w[1];C!==Number.MAX_SAFE_INTEGER&&P?(T&&u.getAttribute("morphTarget"+M)!==T[C]&&u.setAttribute("morphTarget"+M,T[C]),d&&u.getAttribute("morphNormal"+M)!==d[C]&&u.setAttribute("morphNormal"+M,d[C]),r[M]=P,f+=P):(T&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const A=u.morphTargetsRelative?1:1-f;p.getUniforms().setValue(n,"morphTargetBaseInfluence",A),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function ju(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class ws extends nt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ws.prototype.isDataTexture3D=!0;const As=new nt,Rs=new fr,Ls=new ws,Cs=new ar,Ds=[],Ps=[],Fs=new Float32Array(16),Is=new Float32Array(9),Ns=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ds[r];if(s===void 0&&(s=new Float32Array(r),Ds[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function je(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xe(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function En(n,e){let t=Ps[e];t===void 0&&(t=new Int32Array(e),Ps[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ku(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ju(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(je(t,e))return;n.uniform2fv(this.addr,e),Xe(t,e)}}function $u(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(je(t,e))return;n.uniform3fv(this.addr,e),Xe(t,e)}}function Qu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(je(t,e))return;n.uniform4fv(this.addr,e),Xe(t,e)}}function eh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;Ns.set(i),n.uniformMatrix2fv(this.addr,!1,Ns),Xe(t,i)}}function th(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;Is.set(i),n.uniformMatrix3fv(this.addr,!1,Is),Xe(t,i)}}function ih(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(je(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(je(t,i))return;Fs.set(i),n.uniformMatrix4fv(this.addr,!1,Fs),Xe(t,i)}}function nh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rh(n,e){const t=this.cache;je(t,e)||(n.uniform2iv(this.addr,e),Xe(t,e))}function sh(n,e){const t=this.cache;je(t,e)||(n.uniform3iv(this.addr,e),Xe(t,e))}function ah(n,e){const t=this.cache;je(t,e)||(n.uniform4iv(this.addr,e),Xe(t,e))}function oh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lh(n,e){const t=this.cache;je(t,e)||(n.uniform2uiv(this.addr,e),Xe(t,e))}function ch(n,e){const t=this.cache;je(t,e)||(n.uniform3uiv(this.addr,e),Xe(t,e))}function uh(n,e){const t=this.cache;je(t,e)||(n.uniform4uiv(this.addr,e),Xe(t,e))}function hh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||As,r)}function dh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ls,r)}function fh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Cs,r)}function ph(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rs,r)}function mh(n){switch(n){case 5126:return Ku;case 35664:return Ju;case 35665:return $u;case 35666:return Qu;case 35674:return eh;case 35675:return th;case 35676:return ih;case 5124:case 35670:return nh;case 35667:case 35671:return rh;case 35668:case 35672:return sh;case 35669:case 35673:return ah;case 5125:return oh;case 36294:return lh;case 36295:return ch;case 36296:return uh;case 35678:case 36198:case 36298:case 36306:case 35682:return hh;case 35679:case 36299:case 36307:return dh;case 35680:case 36300:case 36308:case 36293:return fh;case 36289:case 36303:case 36311:case 36292:return ph}}function gh(n,e){n.uniform1fv(this.addr,e)}function _h(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function xh(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function vh(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function Mh(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sh(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yh(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Eh(n,e){n.uniform1iv(this.addr,e)}function Th(n,e){n.uniform2iv(this.addr,e)}function bh(n,e){n.uniform3iv(this.addr,e)}function wh(n,e){n.uniform4iv(this.addr,e)}function Ah(n,e){n.uniform1uiv(this.addr,e)}function Rh(n,e){n.uniform2uiv(this.addr,e)}function Lh(n,e){n.uniform3uiv(this.addr,e)}function Ch(n,e){n.uniform4uiv(this.addr,e)}function Dh(n,e,t){const i=e.length,r=En(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||As,r[s])}function Ph(n,e,t){const i=e.length,r=En(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ls,r[s])}function Fh(n,e,t){const i=e.length,r=En(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Cs,r[s])}function Ih(n,e,t){const i=e.length,r=En(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Rs,r[s])}function Nh(n){switch(n){case 5126:return gh;case 35664:return _h;case 35665:return xh;case 35666:return vh;case 35674:return Mh;case 35675:return Sh;case 35676:return yh;case 5124:case 35670:return Eh;case 35667:case 35671:return Th;case 35668:case 35672:return bh;case 35669:case 35673:return wh;case 5125:return Ah;case 36294:return Rh;case 36295:return Lh;case 36296:return Ch;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Ph;case 35680:case 36300:case 36308:case 36293:return Fh;case 36289:case 36303:case 36311:case 36292:return Ih}}function Uh(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=mh(e.type)}function Us(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Nh(e.type)}Us.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Xe(e,n)};function Os(n){this.id=n,this.seq=[],this.map={}}Os.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const pr=/(\w+)(\])?(\[|\.)?/g;function Bs(n,e){n.seq.push(e),n.map[e.id]=e}function Oh(n,e,t){const i=n.name,r=i.length;for(pr.lastIndex=0;;){const s=pr.exec(i),o=pr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Bs(t,l===void 0?new Uh(a,n,e):new Us(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Os(a),Bs(t,h)),t=h}}}function Yt(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,n.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);Oh(r,s,this)}}Yt.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};Yt.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};Yt.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};Yt.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function zs(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Bh=0;function zh(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Gs(n){switch(n){case xt:return["Linear","( value )"];case Bi:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Vs(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+zh(n.getShaderSource(e))}function ti(n,e){const t=Gs(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Gh(n,e){const t=Gs(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vh(n,e){let t;switch(e){case Ia:t="Linear";break;case Na:t="Reinhard";break;case Ua:t="OptimizedCineon";break;case Oa:t="ACESFilmic";break;case Ba:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hh(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Wh(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kh(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yi(n){return n!==""}function Hs(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ws(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xh=/^[ \t]*#include +<([\w\d./]+)>/gm;function mr(n){return n.replace(Xh,qh)}function qh(n,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return mr(t)}const Yh=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Zh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ks(n){return n.replace(Zh,Xs).replace(Yh,jh)}function jh(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Xs(n,e,t,i)}function Xs(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qs(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kh(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===br?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ha?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jh(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ni:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ji:case Rn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $h(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ui:case Rn:e="ENVMAP_MODE_REFRACTION";break}return e}function Qh(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fr:e="ENVMAP_BLENDING_MULTIPLY";break;case Pa:e="ENVMAP_BLENDING_MIX";break;case Fa:e="ENVMAP_BLENDING_ADD";break}return e}function ed(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Kh(t),l=Jh(t),u=$h(t),h=Qh(t),p=t.isWebGL2?"":Hh(t),m=Wh(s),_=r.createProgram();let g,T,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Yi).join(`
`),g.length>0&&(g+=`
`),T=[p,m].filter(Yi).join(`
`),T.length>0&&(T+=`
`)):(g=[qs(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),T=[p,qs(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?Se.tonemapping_pars_fragment:"",t.toneMapping!==Ut?Vh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ai?"#define OPAQUE":"",Se.encodings_pars_fragment,t.map?ti("mapTexelToLinear",t.mapEncoding):"",t.matcap?ti("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ti("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ti("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?ti("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?ti("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?ti("lightMapTexelToLinear",t.lightMapEncoding):"",Gh("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=mr(o),o=Hs(o,t),o=Ws(o,t),a=mr(a),a=Hs(a,t),a=Ws(a,t),o=ks(o),a=ks(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,T=["#define varying in",t.glslVersion===Zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const f=d+g+o,A=d+T+a,M=zs(r,r.VERTEX_SHADER,f),w=zs(r,r.FRAGMENT_SHADER,A);if(r.attachShader(_,M),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const q=r.getProgramInfoLog(_).trim(),ie=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(w).trim();let I=!0,S=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1){I=!1;const y=Vs(r,M,"vertex"),U=Vs(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+y+`
`+U)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(ie===""||Y==="")&&(S=!1);S&&(this.diagnostics={runnable:I,programLog:q,vertexShader:{log:ie,prefix:g},fragmentShader:{log:Y,prefix:T}})}r.deleteShader(M),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Yt(r,_)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=kh(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Bh++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let td=0;class id{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new nd;t.set(e,i)}return t.get(e)}}class nd{constructor(){this.id=td++,this.usedTimes=0}}function rd(n,e,t,i,r,s,o){const a=new is,c=new id,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.floatVertexTextures,m=r.maxVertexUniforms,_=r.vertexTextures;let g=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(S){const U=S.skeleton.bones;if(p)return 1024;{const F=Math.floor((m-20)/4),B=Math.min(F,U.length);return B<U.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+U.length+" bones. This GPU supports "+B+"."),0):B}}function f(S){let y;return S&&S.isTexture?y=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),y=S.texture.encoding):y=xt,u&&S&&S.isTexture&&S.format===Be&&S.type===wt&&S.encoding===Bi&&(y=xt),y}function A(S,y,U,z,F){const B=z.fog,$=S.isMeshStandardMaterial?z.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),G=T[S.type],H=F.isSkinnedMesh?d(F):0;S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let re,te,se,Ee;if(G){const fe=yt[G];re=fe.vertexShader,te=fe.fragmentShader}else re=S.vertexShader,te=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),Ee=c.getFragmentShaderID(S);const R=n.getRenderTarget(),be=S.alphaTest>0,ce=S.clearcoat>0;return{isWebGL2:u,shaderID:G,shaderName:S.type,vertexShader:re,fragmentShader:te,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:_,outputEncoding:R!==null?f(R.texture):n.outputEncoding,map:!!S.map,mapEncoding:f(S.map),matcap:!!S.matcap,matcapEncoding:f(S.matcap),envMap:!!ne,envMapMode:ne&&ne.mapping,envMapEncoding:f(ne),envMapCubeUV:!!ne&&(ne.mapping===Ji||ne.mapping===Rn),lightMap:!!S.lightMap,lightMapEncoding:f(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:f(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===No,tangentSpaceNormalMap:S.normalMapType===Io,clearcoat:ce,clearcoatMap:ce&&!!S.clearcoatMap,clearcoatRoughnessMap:ce&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,specularColorMapEncoding:f(S.specularColorMap),alphaMap:!!S.alphaMap,alphaTest:be,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenColorMapEncoding:f(S.sheenColorMap),sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!F.geometry&&!!F.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.geometry&&!!F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!B,useFog:S.fog,fogExp2:B&&B.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0&&H>0,maxBones:H,useVertexTexture:p,morphTargets:!!F.geometry&&!!F.geometry.morphAttributes.position,morphNormals:!!F.geometry&&!!F.geometry.morphAttributes.normal,morphTargetsCount:!!F.geometry&&!!F.geometry.morphAttributes.position?F.geometry.morphAttributes.position.length:0,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:S.format,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Ut,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===Ue,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function M(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)y.push(U),y.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(w(y,S),C(y,S),y.push(n.outputEncoding)),y.push(S.customProgramCacheKey),y.join()}function w(S,y){S.push(y.precision),S.push(y.outputEncoding),S.push(y.mapEncoding),S.push(y.matcapEncoding),S.push(y.envMapMode),S.push(y.envMapEncoding),S.push(y.lightMapEncoding),S.push(y.emissiveMapEncoding),S.push(y.combine),S.push(y.vertexUvs),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.maxBones),S.push(y.morphTargetsCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.format),S.push(y.specularColorMapEncoding),S.push(y.sheenColorMapEncoding)}function C(S,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.map&&a.enable(4),y.matcap&&a.enable(5),y.envMap&&a.enable(6),y.envMapCubeUV&&a.enable(7),y.lightMap&&a.enable(8),y.aoMap&&a.enable(9),y.emissiveMap&&a.enable(10),y.bumpMap&&a.enable(11),y.normalMap&&a.enable(12),y.objectSpaceNormalMap&&a.enable(13),y.tangentSpaceNormalMap&&a.enable(14),y.clearcoat&&a.enable(15),y.clearcoatMap&&a.enable(16),y.clearcoatRoughnessMap&&a.enable(17),y.clearcoatNormalMap&&a.enable(18),y.displacementMap&&a.enable(19),y.specularMap&&a.enable(20),y.roughnessMap&&a.enable(21),y.metalnessMap&&a.enable(22),y.gradientMap&&a.enable(23),y.alphaMap&&a.enable(24),y.alphaTest&&a.enable(25),y.vertexColors&&a.enable(26),y.vertexAlphas&&a.enable(27),y.vertexUvs&&a.enable(28),y.vertexTangents&&a.enable(29),y.uvsVertexOnly&&a.enable(30),y.fog&&a.enable(31),S.push(a.mask),a.disableAll(),y.useFog&&a.enable(0),y.flatShading&&a.enable(1),y.logarithmicDepthBuffer&&a.enable(2),y.skinning&&a.enable(3),y.useVertexTexture&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.premultipliedAlpha&&a.enable(7),y.shadowMapEnabled&&a.enable(8),y.physicallyCorrectLights&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.depthPacking&&a.enable(12),y.dithering&&a.enable(13),y.specularIntensityMap&&a.enable(14),y.specularColorMap&&a.enable(15),y.transmission&&a.enable(16),y.transmissionMap&&a.enable(17),y.thicknessMap&&a.enable(18),y.sheen&&a.enable(19),y.sheenColorMap&&a.enable(20),y.sheenRoughnessMap&&a.enable(21),S.push(a.mask)}function P(S){const y=T[S.type];let U;if(y){const z=yt[y];U=Qo.clone(z.uniforms)}else U=S.uniforms;return U}function q(S,y){let U;for(let z=0,F=l.length;z<F;z++){const B=l[z];if(B.cacheKey===y){U=B,++U.usedTimes;break}}return U===void 0&&(U=new ed(n,y,S,s),l.push(U)),U}function ie(S){if(--S.usedTimes==0){const y=l.indexOf(S);l[y]=l[l.length-1],l.pop(),S.destroy()}}function Y(S){c.remove(S)}function I(){c.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:P,acquireProgram:q,releaseProgram:ie,releaseShaderCache:Y,programs:l,dispose:I}}function sd(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ys(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zs(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,p,m,_,g,T){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:T},n[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=T),e++,d}function a(h,p,m,_,g,T){const d=o(h,p,m,_,g,T);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,p,m,_,g,T){const d=o(h,p,m,_,g,T);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,p){t.length>1&&t.sort(h||ad),i.length>1&&i.sort(p||Ys),r.length>1&&r.sort(p||Ys)}function u(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function od(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Zs,n.set(i,[s])):r>=n.get(i).length?(s=new Zs,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function ld(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function cd(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ud=0;function hd(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function dd(n,e){const t=new ld,i=cd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new Ve,a=new Ve;function c(u,h){let p=0,m=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let g=0,T=0,d=0,f=0,A=0,M=0,w=0,C=0;u.sort(hd);const P=h!==!0?Math.PI:1;for(let ie=0,Y=u.length;ie<Y;ie++){const I=u[ie],S=I.color,y=I.intensity,U=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=S.r*y*P,m+=S.g*y*P,_+=S.b*y*P;else if(I.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],y);else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*P),I.castShadow){const B=I.shadow,$=i.get(I);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=z,r.directionalShadowMatrix[g]=I.shadow.matrix,M++}r.directional[g]=F,g++}else if(I.isSpotLight){const F=t.get(I);if(F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(S).multiplyScalar(y*P),F.distance=U,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,I.castShadow){const B=I.shadow,$=i.get(I);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=z,r.spotShadowMatrix[d]=I.shadow.matrix,C++}r.spot[d]=F,d++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(S).multiplyScalar(y),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[f]=F,f++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*P),F.distance=I.distance,F.decay=I.decay,I.castShadow){const B=I.shadow,$=i.get(I);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=z,r.pointShadowMatrix[T]=I.shadow.matrix,w++}r.point[T]=F,T++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(y*P),F.groundColor.copy(I.groundColor).multiplyScalar(y*P),r.hemi[A]=F,A++}}f>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=_;const q=r.hash;(q.directionalLength!==g||q.pointLength!==T||q.spotLength!==d||q.rectAreaLength!==f||q.hemiLength!==A||q.numDirectionalShadows!==M||q.numPointShadows!==w||q.numSpotShadows!==C)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=f,r.point.length=T,r.hemi.length=A,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,q.directionalLength=g,q.pointLength=T,q.spotLength=d,q.rectAreaLength=f,q.hemiLength=A,q.numDirectionalShadows=M,q.numPointShadows=w,q.numSpotShadows=C,r.version=ud++)}function l(u,h){let p=0,m=0,_=0,g=0,T=0;const d=h.matrixWorldInverse;for(let f=0,A=u.length;f<A;f++){const M=u[f];if(M.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(M.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const w=r.hemi[T];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),w.direction.normalize(),T++}}}return{setup:c,setupView:l,state:r}}function js(n,e){const t=new dd(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fd(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new js(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new js(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ks extends Wi{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Po,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ks.prototype.isMeshDepthMaterial=!0;class Js extends Wi{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Js.prototype.isMeshDistanceMaterial=!0;const pd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,md=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function gd(n,e,t){let i=new ps;const r=new Ce,s=new Ce,o=new Ze,a=new Ks({depthPacking:Fo}),c=new Js,l={},u=t.maxTextureSize,h={0:Ue,1:Fi,2:ni},p=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:pd,fragmentShader:md}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(_,p),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br,this.render=function(M,w,C){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||M.length===0)return;const P=n.getRenderTarget(),q=n.getActiveCubeFace(),ie=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Nt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let I=0,S=M.length;I<S;I++){const y=M[I],U=y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null&&!U.isPointLightShadow&&this.type===Pi){const B={minFilter:Qe,magFilter:Qe,format:Be};U.map=new Mt(r.x,r.y,B),U.map.texture.name=y.name+".shadowMap",U.mapPass=new Mt(r.x,r.y,B),U.camera.updateProjectionMatrix()}if(U.map===null){const B={minFilter:Ye,magFilter:Ye,format:Be};U.map=new Mt(r.x,r.y,B),U.map.texture.name=y.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const F=U.getViewportCount();for(let B=0;B<F;B++){const $=U.getViewport(B);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),Y.viewport(o),U.updateMatrices(y,B),i=U.getFrustum(),A(w,C,U.camera,y,this.type)}!U.isPointLightShadow&&this.type===Pi&&d(U,C),U.needsUpdate=!1}T.needsUpdate=!1,n.setRenderTarget(P,q,ie)};function d(M,w){const C=e.update(g);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,C,p,g,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,C,m,g,null)}function f(M,w,C,P,q,ie,Y){let I=null;const S=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0?I=S:I=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const y=I.uuid,U=C.uuid;let z=l[y];z===void 0&&(z={},l[y]=z);let F=z[U];F===void 0&&(F=I.clone(),z[U]=F),I=F}return I.visible=C.visible,I.wireframe=C.wireframe,Y===Pi?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:h[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaTest,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=q,I.farDistance=ie),I}function A(M,w,C,P,q){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&q===Pi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const I=e.update(M),S=M.material;if(Array.isArray(S)){const y=I.groups;for(let U=0,z=y.length;U<z;U++){const F=y[U],B=S[F.materialIndex];if(B&&B.visible){const $=f(M,I,B,P,C.near,C.far,q);n.renderBufferDirect(C,null,I,$,M,F)}}}else if(S.visible){const y=f(M,I,S,P,C.near,C.far,q);n.renderBufferDirect(C,null,I,y,M,null)}}const Y=M.children;for(let I=0,S=Y.length;I<S;I++)A(Y[I],w,C,P,q)}}function _d(n,e,t){const i=t.isWebGL2;function r(){let b=!1;const K=new Ze;let X=null;const pe=new Ze(0,0,0,0);return{setMask:function(ae){X!==ae&&!b&&(n.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){b=ae},setClear:function(ae,xe,Q,_e,Le){Le===!0&&(ae*=_e,xe*=_e,Q*=_e),K.set(ae,xe,Q,_e),pe.equals(K)===!1&&(n.clearColor(ae,xe,Q,_e),pe.copy(K))},reset:function(){b=!1,X=null,pe.set(-1,0,0,0)}}}function s(){let b=!1,K=null,X=null,pe=null;return{setTest:function(ae){ae?te(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(ae){K!==ae&&!b&&(n.depthMask(ae),K=ae)},setFunc:function(ae){if(X!==ae){if(ae)switch(ae){case ba:n.depthFunc(n.NEVER);break;case wa:n.depthFunc(n.ALWAYS);break;case Aa:n.depthFunc(n.LESS);break;case bn:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case La:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}else n.depthFunc(n.LEQUAL);X=ae}},setLocked:function(ae){b=ae},setClear:function(ae){pe!==ae&&(n.clearDepth(ae),pe=ae)},reset:function(){b=!1,K=null,X=null,pe=null}}}function o(){let b=!1,K=null,X=null,pe=null,ae=null,xe=null,Q=null,_e=null,Le=null;return{setTest:function(Ae){b||(Ae?te(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(Ae){K!==Ae&&!b&&(n.stencilMask(Ae),K=Ae)},setFunc:function(Ae,ft,pt){(X!==Ae||pe!==ft||ae!==pt)&&(n.stencilFunc(Ae,ft,pt),X=Ae,pe=ft,ae=pt)},setOp:function(Ae,ft,pt){(xe!==Ae||Q!==ft||_e!==pt)&&(n.stencilOp(Ae,ft,pt),xe=Ae,Q=ft,_e=pt)},setLocked:function(Ae){b=Ae},setClear:function(Ae){Le!==Ae&&(n.clearStencil(Ae),Le=Ae)},reset:function(){b=!1,K=null,X=null,pe=null,ae=null,xe=null,Q=null,_e=null,Le=null}}}const a=new r,c=new s,l=new o;let u={},h={},p=null,m=!1,_=null,g=null,T=null,d=null,f=null,A=null,M=null,w=!1,C=null,P=null,q=null,ie=null,Y=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let S=!1,y=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(y=parseFloat(/^WebGL (\d)/.exec(U)[1]),S=y>=1):U.indexOf("OpenGL ES")!==-1&&(y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),S=y>=2);let z=null,F={};const B=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),ne=new Ze().fromArray(B),G=new Ze().fromArray($);function H(b,K,X){const pe=new Uint8Array(4),ae=n.createTexture();n.bindTexture(b,ae),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<X;xe++)n.texImage2D(K+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ae}const re={};re[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),te(n.DEPTH_TEST),c.setFunc(bn),Pe(!1),ue(Tr),te(n.CULL_FACE),oe(Nt);function te(b){u[b]!==!0&&(n.enable(b),u[b]=!0)}function se(b){u[b]!==!1&&(n.disable(b),u[b]=!1)}function Ee(b,K){return h[b]!==K?(n.bindFramebuffer(b,K),h[b]=K,i&&(b===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=K),b===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=K)),!0):!1}function R(b){return p!==b?(n.useProgram(b),p=b,!0):!1}const be={[ri]:n.FUNC_ADD,[pa]:n.FUNC_SUBTRACT,[ma]:n.FUNC_REVERSE_SUBTRACT};if(i)be[Lr]=n.MIN,be[Cr]=n.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(be[Lr]=b.MIN_EXT,be[Cr]=b.MAX_EXT)}const ce={[ga]:n.ZERO,[_a]:n.ONE,[xa]:n.SRC_COLOR,[Dr]:n.SRC_ALPHA,[Ta]:n.SRC_ALPHA_SATURATE,[ya]:n.DST_COLOR,[Ma]:n.DST_ALPHA,[va]:n.ONE_MINUS_SRC_COLOR,[Pr]:n.ONE_MINUS_SRC_ALPHA,[Ea]:n.ONE_MINUS_DST_COLOR,[Sa]:n.ONE_MINUS_DST_ALPHA};function oe(b,K,X,pe,ae,xe,Q,_e){if(b===Nt){m===!0&&(se(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),b!==fa){if(b!==_||_e!==w){if((g!==ri||f!==ri)&&(n.blendEquation(n.FUNC_ADD),g=ri,f=ri),_e)switch(b){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wr:n.blendFunc(n.ONE,n.ONE);break;case Ar:n.blendFuncSeparate(n.ZERO,n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ONE_MINUS_SRC_ALPHA);break;case Rr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ar:n.blendFunc(n.ZERO,n.ONE_MINUS_SRC_COLOR);break;case Rr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}T=null,d=null,A=null,M=null,_=b,w=_e}return}ae=ae||K,xe=xe||X,Q=Q||pe,(K!==g||ae!==f)&&(n.blendEquationSeparate(be[K],be[ae]),g=K,f=ae),(X!==T||pe!==d||xe!==A||Q!==M)&&(n.blendFuncSeparate(ce[X],ce[pe],ce[xe],ce[Q]),T=X,d=pe,A=xe,M=Q),_=b,w=null}function fe(b,K){b.side===ni?se(n.CULL_FACE):te(n.CULL_FACE);let X=b.side===Ue;K&&(X=!X),Pe(X),b.blending===Ii&&b.transparent===!1?oe(Nt):oe(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),a.setMask(b.colorWrite);const pe=b.stencilWrite;l.setTest(pe),pe&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),He(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(b){C!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),C=b)}function ue(b){b!==ca?(te(n.CULL_FACE),b!==P&&(b===Tr?n.cullFace(n.BACK):b===ua?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),P=b}function Fe(b){b!==q&&(S&&n.lineWidth(b),q=b)}function He(b,K,X){b?(te(n.POLYGON_OFFSET_FILL),(ie!==K||Y!==X)&&(n.polygonOffset(K,X),ie=K,Y=X)):se(n.POLYGON_OFFSET_FILL)}function Oe(b){b?te(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function Ke(b){b===void 0&&(b=n.TEXTURE0+I-1),z!==b&&(n.activeTexture(b),z=b)}function it(b,K){z===null&&Ke();let X=F[z];X===void 0&&(X={type:void 0,texture:void 0},F[z]=X),(X.type!==b||X.texture!==K)&&(n.bindTexture(b,K||re[b]),X.type=b,X.texture=K)}function Je(){const b=F[z];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function qe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function E(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function v(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function k(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(b){ne.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ne.copy(b))}function le(b){G.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),G.copy(b))}function j(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},z=null,F={},h={},p=null,m=!1,_=null,g=null,T=null,d=null,f=null,A=null,M=null,w=!1,C=null,P=null,q=null,ie=null,Y=null,ne.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:te,disable:se,bindFramebuffer:Ee,useProgram:R,setBlending:oe,setMaterial:fe,setFlipSided:Pe,setCullFace:ue,setLineWidth:Fe,setPolygonOffset:He,setScissorTest:Oe,activeTexture:Ke,bindTexture:it,unbindTexture:Je,compressedTexImage2D:qe,texImage2D:ee,texImage3D:k,texStorage2D:W,texStorage3D:Z,texSubImage2D:Tt,texSubImage3D:E,compressedTexSubImage2D:v,scissor:ge,viewport:le,reset:j}}function xd(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,_=new WeakMap;let g,T=!1;try{T=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(E,v){return T?new OffscreenCanvas(E,v):In("canvas")}function f(E,v,W,Z){let ee=1;if((E.width>Z||E.height>Z)&&(ee=Z/Math.max(E.width,E.height)),ee<1||v===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const k=v?Bo:Math.floor,ge=k(ee*E.width),le=k(ee*E.height);g===void 0&&(g=d(ge,le));const j=W?d(ge,le):g;return j.width=ge,j.height=le,j.getContext("2d").drawImage(E,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+le+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function A(E){return Kr(E.width)&&Kr(E.height)}function M(E){return a?!1:E.wrapS!==$e||E.wrapT!==$e||E.minFilter!==Ye&&E.minFilter!==Qe}function w(E,v){return E.generateMipmaps&&v&&E.minFilter!==Ye&&E.minFilter!==Qe}function C(E){n.generateMipmap(E)}function P(E,v,W,Z){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=v;return v===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RGB&&(W===n.FLOAT&&(ee=n.RGB32F),W===n.HALF_FLOAT&&(ee=n.RGB16F),W===n.UNSIGNED_BYTE&&(ee=n.RGB8)),v===n.RGBA&&(W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=Z===Bi?n.SRGB8_ALPHA8:n.RGBA8)),(ee===n.R16F||ee===n.R32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function q(E,v,W){return w(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Ye&&E.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function ie(E){return E===Ye||E===Nr||E===Ur?n.NEAREST:n.LINEAR}function Y(E){const v=E.target;v.removeEventListener("dispose",Y),S(v),v.isVideoTexture&&_.delete(v),o.memory.textures--}function I(E){const v=E.target;v.removeEventListener("dispose",I),y(v)}function S(E){const v=i.get(E);v.__webglInit!==void 0&&(n.deleteTexture(v.__webglTexture),i.remove(E))}function y(E){const v=E.texture,W=i.get(E),Z=i.get(v);if(!!E){if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(W.__webglFramebuffer[ee]),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ee]);else n.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&n.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ee=0,k=v.length;ee<k;ee++){const ge=i.get(v[ee]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(E)}}let U=0;function z(){U=0}function F(){const E=U;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),U+=1,E}function B(E,v){const W=i.get(E);if(E.isVideoTexture&&Ke(E),E.version>0&&W.__version!==E.version){const Z=E.image;if(Z===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(W,E,v);return}}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_2D,W.__webglTexture)}function $(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){Ee(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture)}function ne(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){Ee(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_3D,W.__webglTexture)}function G(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){R(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture)}const H={[Ln]:n.REPEAT,[$e]:n.CLAMP_TO_EDGE,[Cn]:n.MIRRORED_REPEAT},re={[Ye]:n.NEAREST,[Nr]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR};function te(E,v,W){if(W?(n.texParameteri(E,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,H[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,re[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,re[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==$e||v.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ie(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ie(v.minFilter)),v.minFilter!==Ye&&v.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(v.type===Ot&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Kt&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function se(E,v){E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",Y),E.__webglTexture=n.createTexture(),o.memory.textures++)}function Ee(E,v,W){let Z=n.TEXTURE_2D;v.isDataTexture2DArray&&(Z=n.TEXTURE_2D_ARRAY),v.isDataTexture3D&&(Z=n.TEXTURE_3D),se(E,v),t.activeTexture(n.TEXTURE0+W),t.bindTexture(Z,E.__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ee=M(v)&&A(v.image)===!1,k=f(v.image,ee,!1,u),ge=A(k)||a,le=s.convert(v.format);let j=s.convert(v.type),b=P(v.internalFormat,le,j,v.encoding);te(Z,v,ge);let K;const X=v.mipmaps,pe=a&&v.isVideoTexture!==!0,ae=E.__version===void 0,xe=q(v,k,ge);if(v.isDepthTexture)b=n.DEPTH_COMPONENT,a?v.type===Ot?b=n.DEPTH_COMPONENT32F:v.type===Qi?b=n.DEPTH_COMPONENT24:v.type===si?b=n.DEPTH24_STENCIL8:b=n.DEPTH_COMPONENT16:v.type===Ot&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Jt&&b===n.DEPTH_COMPONENT&&v.type!==Oi&&v.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Oi,j=s.convert(v.type)),v.format===oi&&b===n.DEPTH_COMPONENT&&(b=n.DEPTH_STENCIL,v.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=si,j=s.convert(v.type))),pe&&ae?t.texStorage2D(n.TEXTURE_2D,1,b,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,b,k.width,k.height,0,le,j,null);else if(v.isDataTexture)if(X.length>0&&ge){pe&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,b,X[0].width,X[0].height);for(let Q=0,_e=X.length;Q<_e;Q++)K=X[Q],pe?t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,le,j,K.data):t.texImage2D(n.TEXTURE_2D,Q,b,K.width,K.height,0,le,j,K.data);v.generateMipmaps=!1}else pe?(ae&&t.texStorage2D(n.TEXTURE_2D,xe,b,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,le,j,k.data)):t.texImage2D(n.TEXTURE_2D,0,b,k.width,k.height,0,le,j,k.data);else if(v.isCompressedTexture){pe&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,b,X[0].width,X[0].height);for(let Q=0,_e=X.length;Q<_e;Q++)K=X[Q],v.format!==Be&&v.format!==ai?le!==null?pe?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,K.width,K.height,le,K.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,b,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,K.width,K.height,le,j,K.data):t.texImage2D(n.TEXTURE_2D,Q,b,K.width,K.height,0,le,j,K.data)}else if(v.isDataTexture2DArray)pe?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,b,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,le,j,k.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,b,k.width,k.height,k.depth,0,le,j,k.data);else if(v.isDataTexture3D)pe?(ae&&t.texStorage3D(n.TEXTURE_3D,xe,b,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,le,j,k.data)):t.texImage3D(n.TEXTURE_3D,0,b,k.width,k.height,k.depth,0,le,j,k.data);else if(v.isFramebufferTexture)pe&&ae?t.texStorage2D(n.TEXTURE_2D,xe,b,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,b,k.width,k.height,0,le,j,null);else if(X.length>0&&ge){pe&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,b,X[0].width,X[0].height);for(let Q=0,_e=X.length;Q<_e;Q++)K=X[Q],pe?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le,j,K):t.texImage2D(n.TEXTURE_2D,Q,b,le,j,K);v.generateMipmaps=!1}else pe?(ae&&t.texStorage2D(n.TEXTURE_2D,xe,b,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,j,k)):t.texImage2D(n.TEXTURE_2D,0,b,le,j,k);w(v,ge)&&C(Z),E.__version=v.version,v.onUpdate&&v.onUpdate(v)}function R(E,v,W){if(v.image.length!==6)return;se(E,v),t.activeTexture(n.TEXTURE0+W),t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Z=v&&(v.isCompressedTexture||v.image[0].isCompressedTexture),ee=v.image[0]&&v.image[0].isDataTexture,k=[];for(let Q=0;Q<6;Q++)!Z&&!ee?k[Q]=f(v.image[Q],!1,!0,l):k[Q]=ee?v.image[Q].image:v.image[Q];const ge=k[0],le=A(ge)||a,j=s.convert(v.format),b=s.convert(v.type),K=P(v.internalFormat,j,b,v.encoding),X=a&&v.isVideoTexture!==!0,pe=E.__version===void 0;let ae=q(v,ge,le);te(n.TEXTURE_CUBE_MAP,v,le);let xe;if(Z){X&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,K,ge.width,ge.height);for(let Q=0;Q<6;Q++){xe=k[Q].mipmaps;for(let _e=0;_e<xe.length;_e++){const Le=xe[_e];v.format!==Be&&v.format!==ai?j!==null?X?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Le.width,Le.height,j,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,K,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Le.width,Le.height,j,b,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,K,Le.width,Le.height,0,j,b,Le.data)}}}else{xe=v.mipmaps,X&&pe&&(xe.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,K,k[0].width,k[0].height));for(let Q=0;Q<6;Q++)if(ee){X?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,k[Q].width,k[Q].height,j,b,k[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,K,k[Q].width,k[Q].height,0,j,b,k[Q].data);for(let _e=0;_e<xe.length;_e++){const Ae=xe[_e].image[Q].image;X?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Ae.width,Ae.height,j,b,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,K,Ae.width,Ae.height,0,j,b,Ae.data)}}else{X?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,j,b,k[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,K,j,b,k[Q]);for(let _e=0;_e<xe.length;_e++){const Le=xe[_e];X?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,j,b,Le.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,K,j,b,Le.image[Q])}}}w(v,le)&&C(n.TEXTURE_CUBE_MAP),E.__version=v.version,v.onUpdate&&v.onUpdate(v)}function be(E,v,W,Z,ee){const k=s.convert(W.format),ge=s.convert(W.type),le=P(W.internalFormat,k,ge,W.encoding);i.get(v).__hasExternalTextures||(ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,le,v.width,v.height,v.depth,0,k,ge,null):t.texImage2D(ee,0,le,v.width,v.height,0,k,ge,null)),t.bindFramebuffer(n.FRAMEBUFFER,E),v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,i.get(W).__webglTexture,0,Oe(v)):n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,i.get(W).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(E,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Z=n.DEPTH_COMPONENT16;if(W||v.useRenderToTexture){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ot?Z=n.DEPTH_COMPONENT32F:ee.type===Qi&&(Z=n.DEPTH_COMPONENT24));const k=Oe(v);v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,Z,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,k,Z,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Z=Oe(v);W&&v.useRenderbuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,v.width,v.height):v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture[0]:v.texture,ee=s.convert(Z.format),k=s.convert(Z.type),ge=P(Z.internalFormat,ee,k,Z.encoding),le=Oe(v);W&&v.useRenderbuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ge,v.width,v.height):v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const Z=i.get(v.depthTexture).__webglTexture,ee=Oe(v);if(v.depthTexture.format===Jt)v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===oi)v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function fe(E){const v=i.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");oe(v.__webglFramebuffer,E)}else if(W){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=n.createRenderbuffer(),ce(v.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ce(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,v,W){const Z=i.get(E);v!==void 0&&be(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),W!==void 0&&fe(E)}function ue(E){const v=E.texture,W=i.get(E),Z=i.get(v);E.addEventListener("dispose",I),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,k=E.isWebGLMultipleRenderTargets===!0,ge=v.isDataTexture3D||v.isDataTexture2DArray,le=A(E)||a;if(a&&v.format===ai&&(v.type===Ot||v.type===Kt)&&(v.format=Be,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ee){W.__webglFramebuffer=[];for(let j=0;j<6;j++)W.__webglFramebuffer[j]=n.createFramebuffer()}else if(W.__webglFramebuffer=n.createFramebuffer(),k)if(r.drawBuffers){const j=E.texture;for(let b=0,K=j.length;b<K;b++){const X=i.get(j[b]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(E.useRenderbuffer)if(a){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer);const j=s.convert(v.format),b=s.convert(v.type),K=P(v.internalFormat,j,b,v.encoding),X=Oe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,K,E.width,E.height),t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,W.__webglColorRenderbuffer),n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),te(n.TEXTURE_CUBE_MAP,v,le);for(let j=0;j<6;j++)be(W.__webglFramebuffer[j],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j);w(v,le)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){const j=E.texture;for(let b=0,K=j.length;b<K;b++){const X=j[b],pe=i.get(X);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),te(n.TEXTURE_2D,X,le),be(W.__webglFramebuffer,E,X,n.COLOR_ATTACHMENT0+b,n.TEXTURE_2D),w(X,le)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let j=n.TEXTURE_2D;ge&&(a?j=v.isDataTexture3D?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(j,Z.__webglTexture),te(j,v,le),be(W.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,j),w(v,le)&&C(j),t.unbindTexture()}E.depthBuffer&&fe(E)}function Fe(E){const v=A(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,ee=W.length;Z<ee;Z++){const k=W[Z];if(w(k,v)){const ge=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(k).__webglTexture;t.bindTexture(ge,le),C(ge),t.unbindTexture()}}}function He(E){if(E.useRenderbuffer)if(a){const v=E.width,W=E.height;let Z=n.COLOR_BUFFER_BIT;const ee=[n.COLOR_ATTACHMENT0],k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;E.depthBuffer&&ee.push(k),E.ignoreDepthForMultisampleCopy||(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT));const ge=i.get(E);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer),E.ignoreDepthForMultisampleCopy&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[k]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[k])),n.blitFramebuffer(0,0,v,W,0,0,v,W,Z,n.NEAREST),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee),t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Oe(E){return a&&(E.useRenderbuffer||E.useRenderToTexture)?Math.min(h,E.samples):0}function Ke(E){const v=o.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}let it=!1,Je=!1;function qe(E,v){E&&E.isWebGLRenderTarget&&(it===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),it=!0),E=E.texture),B(E,v)}function Tt(E,v){E&&E.isWebGLCubeRenderTarget&&(Je===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Je=!0),E=E.texture),G(E,v)}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=be,this.safeSetTexture2D=qe,this.safeSetTextureCube=Tt}function vd(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===wt)return n.UNSIGNED_BYTE;if(s===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Xa)return n.UNSIGNED_SHORT_5_6_5;if(s===Ga)return n.BYTE;if(s===Va)return n.SHORT;if(s===Oi)return n.UNSIGNED_SHORT;if(s===Ha)return n.INT;if(s===Qi)return n.UNSIGNED_INT;if(s===Ot)return n.FLOAT;if(s===Kt)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qa)return n.ALPHA;if(s===ai)return n.RGB;if(s===Be)return n.RGBA;if(s===Ya)return n.LUMINANCE;if(s===Za)return n.LUMINANCE_ALPHA;if(s===Jt)return n.DEPTH_COMPONENT;if(s===oi)return n.DEPTH_STENCIL;if(s===ja)return n.RED;if(s===Ka)return n.RED_INTEGER;if(s===Ja)return n.RG;if(s===$a)return n.RG_INTEGER;if(s===Qa)return n.RGB_INTEGER;if(s===eo)return n.RGBA_INTEGER;if(s===Or||s===Br||s===zr||s===Gr)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vr||s===Hr||s===Wr||s===kr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===to)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Xr||s===qr)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Xr)return o.COMPRESSED_RGB8_ETC2;if(s===qr)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===io||s===no||s===ro||s===so||s===ao||s===oo||s===lo||s===co||s===uo||s===ho||s===fo||s===po||s===mo||s===go||s===xo||s===vo||s===Mo||s===So||s===yo||s===Eo||s===To||s===bo||s===wo||s===Ao||s===Ro||s===Lo||s===Co||s===Do)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===_o)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===si)return i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class $s extends dt{constructor(e=[]){super();this.cameras=e}}$s.prototype.isArrayCamera=!0;class Zi extends rt{constructor(){super();this.type="Group"}}Zi.prototype.isGroup=!0;const Md={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md))),l&&e.hand){o=!0;for(const g of e.hand.values()){const T=t.getJointPose(g,i);if(l.joints[g.jointName]===void 0){const f=new Zi;f.matrixAutoUpdate=!1,f.visible=!1,l.joints[g.jointName]=f,l.add(f)}const d=l.joints[g.jointName];T!==null&&(d.matrix.fromArray(T.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=T.radius),d.visible=T!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class _r extends nt{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Jt,u!==Jt&&u!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jt&&(i=Oi),i===void 0&&u===oi&&(i=si);super(null,r,s,o,a,c,u,i,l);this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1}}_r.prototype.isDepthTexture=!0;class Sd extends li{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor";const c=e.extensions.has("WEBGL_multisampled_render_to_texture");let l=null,u=null,h=null,p=null,m=!1,_=null;const g=t.getContextAttributes();let T=null,d=null;const f=[],A=new Map,M=new dt;M.layers.enable(1),M.viewport=new Ze;const w=new dt;w.layers.enable(2),w.viewport=new Ze;const C=[M,w],P=new $s;P.layers.enable(1),P.layers.enable(2);let q=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=f[G];return H===void 0&&(H=new gr,f[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=f[G];return H===void 0&&(H=new gr,f[G]=H),H.getGripSpace()},this.getHand=function(G){let H=f[G];return H===void 0&&(H=new gr,f[G]=H),H.getHandSpace()};function Y(G){const H=A.get(G.inputSource);H&&H.dispatchEvent({type:G.type,data:G.inputSource})}function I(){A.forEach(function(G,H){G.disconnect(H)}),A.clear(),q=null,ie=null,e.setRenderTarget(T),p=null,h=null,u=null,r=null,d=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",I),r.addEventListener("inputsourceschange",S),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:p}),d=new Mt(p.framebufferWidth,p.framebufferHeight,{format:Be,type:wt,encoding:e.outputEncoding})}else{m=g.antialias;let H=null,re=null,te=null;g.depth&&(te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=g.stencil?oi:Jt,re=g.stencil?si:Oi);const se={colorFormat:g.alpha||m?t.RGBA8:t.RGB8,depthFormat:te,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(se),r.updateRenderState({layers:[h]}),m?d=new Un(h.textureWidth,h.textureHeight,{format:Be,type:wt,depthTexture:new _r(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:c,encoding:e.outputEncoding}):d=new Mt(h.textureWidth,h.textureHeight,{format:g.alpha?Be:ai,type:wt,depthTexture:new _r(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function S(G){const H=r.inputSources;for(let re=0;re<f.length;re++)A.set(H[re],f[re]);for(let re=0;re<G.removed.length;re++){const te=G.removed[re],se=A.get(te);se&&(se.dispatchEvent({type:"disconnected",data:te}),A.delete(te))}for(let re=0;re<G.added.length;re++){const te=G.added[re],se=A.get(te);se&&se.dispatchEvent({type:"connected",data:te})}}const y=new L,U=new L;function z(G,H,re){y.setFromMatrixPosition(H.matrixWorld),U.setFromMatrixPosition(re.matrixWorld);const te=y.distanceTo(U),se=H.projectionMatrix.elements,Ee=re.projectionMatrix.elements,R=se[14]/(se[10]-1),be=se[14]/(se[10]+1),ce=(se[9]+1)/se[5],oe=(se[9]-1)/se[5],fe=(se[8]-1)/se[0],Pe=(Ee[8]+1)/Ee[0],ue=R*fe,Fe=R*Pe,He=te/(-fe+Pe),Oe=He*-fe;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(He),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ke=R+He,it=be+He,Je=ue-Oe,qe=Fe+(te-Oe),Tt=ce*be/it*Ke,E=oe*be/it*Ke;G.projectionMatrix.makePerspective(Je,qe,Tt,E,Ke,it)}function F(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;P.near=w.near=M.near=G.near,P.far=w.far=M.far=G.far,(q!==P.near||ie!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),q=P.near,ie=P.far);const H=G.parent,re=P.cameras;F(P,H);for(let se=0;se<re.length;se++)F(re[se],H);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),G.position.copy(P.position),G.quaternion.copy(P.quaternion),G.scale.copy(P.scale),G.matrix.copy(P.matrix),G.matrixWorld.copy(P.matrixWorld);const te=G.children;for(let se=0,Ee=te.length;se<Ee;se++)te[se].updateMatrixWorld(!0);re.length===2?z(P,M,w):P.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let B=null;function $(G,H){if(l=H.getViewerPose(o),_=H,l!==null){const te=l.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let se=!1;te.length!==P.cameras.length&&(P.cameras.length=0,se=!0);for(let Ee=0;Ee<te.length;Ee++){const R=te[Ee];let be=null;if(p!==null)be=p.getViewport(R);else{const oe=u.getViewSubImage(h,R);be=oe.viewport,Ee===0&&(e.setRenderTargetTextures(d,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(d))}const ce=C[Ee];ce.matrix.fromArray(R.transform.matrix),ce.projectionMatrix.fromArray(R.projectionMatrix),ce.viewport.set(be.x,be.y,be.width,be.height),Ee===0&&P.matrix.copy(ce.matrix),se===!0&&P.cameras.push(ce)}}const re=r.inputSources;for(let te=0;te<f.length;te++){const se=f[te],Ee=re[te];se.update(Ee,H,o)}B&&B(G,H),_=null}const ne=new ms;ne.setAnimationLoop($),this.setAnimationLoop=function(G){B=G},this.dispose=function(){}}}function yd(n){function e(d,f){d.fogColor.value.copy(f.color),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function t(d,f,A,M,w){f.isMeshBasicMaterial?i(d,f):f.isMeshLambertMaterial?(i(d,f),c(d,f)):f.isMeshToonMaterial?(i(d,f),u(d,f)):f.isMeshPhongMaterial?(i(d,f),l(d,f)):f.isMeshStandardMaterial?(i(d,f),f.isMeshPhysicalMaterial?p(d,f,w):h(d,f)):f.isMeshMatcapMaterial?(i(d,f),m(d,f)):f.isMeshDepthMaterial?(i(d,f),_(d,f)):f.isMeshDistanceMaterial?(i(d,f),g(d,f)):f.isMeshNormalMaterial?(i(d,f),T(d,f)):f.isLineBasicMaterial?(r(d,f),f.isLineDashedMaterial&&s(d,f)):f.isPointsMaterial?o(d,f,A,M):f.isSpriteMaterial?a(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.specularMap&&(d.specularMap.value=f.specularMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const A=n.get(f).envMap;A&&(d.envMap.value=A,d.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uv2Transform.value.copy(w.matrix))}function r(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity}function s(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,A,M){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*A,d.scale.value=M*.5,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let A;f.map?A=f.map:f.alphaMap&&(A=f.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),d.uvTransform.value.copy(A.matrix))}function c(d,f){f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap)}function l(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===Ue&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===Ue&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===Ue&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===Ue&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias)}function h(d,f){d.roughness.value=f.roughness,d.metalness.value=f.metalness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===Ue&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===Ue&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),n.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,A){h(d,f),d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),d.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ue&&d.clearcoatNormalScale.value.negate())),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap)}function m(d,f){f.matcap&&(d.matcap.value=f.matcap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===Ue&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===Ue&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias)}function _(d,f){f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias)}function g(d,f){f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),d.referencePosition.value.copy(f.referencePosition),d.nearDistance.value=f.nearDistance,d.farDistance.value=f.farDistance}function T(d,f){f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===Ue&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===Ue&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ed(){const n=In("canvas");return n.style.display="block",n}function Td(n={}){const e=n.canvas!==void 0?n.canvas:Ed(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xt,this.physicallyCorrectLights=!1,this.toneMapping=Ut,this.toneMappingExposure=1;const g=this;let T=!1,d=0,f=0,A=null,M=-1,w=null;const C=new Ze,P=new Ze;let q=null,ie=e.width,Y=e.height,I=1,S=null,y=null;const U=new Ze(0,0,ie,Y),z=new Ze(0,0,ie,Y);let F=!1;const B=[],$=new ps;let ne=!1,G=!1,H=null;const re=new Ve,te=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?I:1}let R=t;function be(x,D){for(let O=0;O<x.length;O++){const N=x[O],V=e.getContext(N,D);if(V!==null)return V}return null}try{const x={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ae,!1),R===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),R=be(D,x),R===null)throw be(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ce,oe,fe,Pe,ue,Fe,He,Oe,Ke,it,Je,qe,Tt,E,v,W,Z,ee,k,ge,le,j,b;function K(){ce=new Hu(R),oe=new Nu(R,ce,n),ce.init(oe),j=new vd(R,ce,oe),fe=new _d(R,ce,oe),B[0]=R.BACK,Pe=new Xu(R),ue=new sd,Fe=new xd(R,ce,fe,ue,oe,j,Pe),He=new Ou(g),Oe=new Vu(g),Ke=new sl(R,oe),b=new Fu(R,ce,Ke,oe),it=new Wu(R,Ke,Pe,b),Je=new ju(R,it,Ke,Pe),k=new Zu(R,oe,Fe),W=new Uu(ue),qe=new rd(g,He,Oe,ce,oe,b,W),Tt=new yd(ue),E=new od,v=new fd(ce,oe),ee=new Pu(g,He,fe,Je,a),Z=new gd(g,Je,oe),ge=new Iu(R,ce,Pe,oe),le=new ku(R,ce,Pe,oe),Pe.programs=qe.programs,g.capabilities=oe,g.extensions=ce,g.properties=ue,g.renderLists=E,g.shadowMap=Z,g.state=fe,g.info=Pe}K();const X=new Sd(g,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=ce.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ce.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(x){x!==void 0&&(I=x,this.setSize(ie,Y,!1))},this.getSize=function(x){return x.set(ie,Y)},this.setSize=function(x,D,O){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=x,Y=D,e.width=Math.floor(x*I),e.height=Math.floor(D*I),O!==!1&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(ie*I,Y*I).floor()},this.setDrawingBufferSize=function(x,D,O){ie=x,Y=D,I=O,e.width=Math.floor(x*O),e.height=Math.floor(D*O),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(U)},this.setViewport=function(x,D,O,N){x.isVector4?U.set(x.x,x.y,x.z,x.w):U.set(x,D,O,N),fe.viewport(C.copy(U).multiplyScalar(I).floor())},this.getScissor=function(x){return x.copy(z)},this.setScissor=function(x,D,O,N){x.isVector4?z.set(x.x,x.y,x.z,x.w):z.set(x,D,O,N),fe.scissor(P.copy(z).multiplyScalar(I).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(x){fe.setScissorTest(F=x)},this.setOpaqueSort=function(x){S=x},this.setTransparentSort=function(x){y=x},this.getClearColor=function(x){return x.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(x,D,O){let N=0;(x===void 0||x)&&(N|=R.COLOR_BUFFER_BIT),(D===void 0||D)&&(N|=R.DEPTH_BUFFER_BIT),(O===void 0||O)&&(N|=R.STENCIL_BUFFER_BIT),R.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ae,!1),E.dispose(),v.dispose(),ue.dispose(),He.dispose(),Oe.dispose(),Je.dispose(),b.dispose(),qe.dispose(),X.dispose(),X.removeEventListener("sessionstart",ft),X.removeEventListener("sessionend",pt),H&&(H.dispose(),H=null),Zt.stop()};function pe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=Pe.autoReset,D=Z.enabled,O=Z.autoUpdate,N=Z.needsUpdate,V=Z.type;K(),Pe.autoReset=x,Z.enabled=D,Z.autoUpdate=O,Z.needsUpdate=N,Z.type=V}function xe(x){const D=x.target;D.removeEventListener("dispose",xe),Q(D)}function Q(x){_e(x),ue.remove(x)}function _e(x){const D=ue.get(x).programs;D!==void 0&&(D.forEach(function(O){qe.releaseProgram(O)}),x.isShaderMaterial&&qe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,O,N,V,he){D===null&&(D=se);const me=V.isMesh&&V.matrixWorld.determinant()<0,ve=ia(x,D,O,N,V);fe.setMaterial(N,me);let de=O.index;const Te=O.attributes.position;if(de===null){if(Te===void 0||Te.count===0)return}else if(de.count===0)return;let Me=1;N.wireframe===!0&&(de=it.getWireframeAttribute(O),Me=2),b.setup(V,N,ve,O,de);let ye,Ie=ge;de!==null&&(ye=Ke.get(de),Ie=le,Ie.setIndex(ye));const jt=de!==null?de.count:Te.count,ii=O.drawRange.start*Me,we=O.drawRange.count*Me,mt=he!==null?he.start*Me:0,Ne=he!==null?he.count*Me:1/0,gt=Math.max(ii,mt),Ki=Math.min(jt,ii+we,mt+Ne)-1,_t=Math.max(0,Ki-gt+1);if(_t!==0){if(V.isMesh)N.wireframe===!0?(fe.setLineWidth(N.wireframeLinewidth*Ee()),Ie.setMode(R.LINES)):Ie.setMode(R.TRIANGLES);else if(V.isLine){let bt=N.linewidth;bt===void 0&&(bt=1),fe.setLineWidth(bt*Ee()),V.isLineSegments?Ie.setMode(R.LINES):V.isLineLoop?Ie.setMode(R.LINE_LOOP):Ie.setMode(R.LINE_STRIP)}else V.isPoints?Ie.setMode(R.POINTS):V.isSprite&&Ie.setMode(R.TRIANGLES);if(V.isInstancedMesh)Ie.renderInstances(gt,_t,V.count);else if(O.isInstancedBufferGeometry){const bt=Math.min(O.instanceCount,O._maxInstanceCount);Ie.renderInstances(gt,_t,bt)}else Ie.render(gt,_t)}},this.compile=function(x,D){p=v.get(x),p.init(),_.push(p),x.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g.physicallyCorrectLights),x.traverse(function(O){const N=O.material;if(N)if(Array.isArray(N))for(let V=0;V<N.length;V++){const he=N[V];Tn(he,x,O)}else Tn(N,x,O)}),_.pop(),p=null};let Le=null;function Ae(x){Le&&Le(x)}function ft(){Zt.stop()}function pt(){Zt.start()}const Zt=new ms;Zt.setAnimationLoop(Ae),typeof window!="undefined"&&Zt.setContext(window),this.setAnimationLoop=function(x){Le=x,X.setAnimationLoop(x),x===null?Zt.stop():Zt.start()},X.addEventListener("sessionstart",ft),X.addEventListener("sessionend",pt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.autoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),x.isScene===!0&&x.onBeforeRender(g,x,D,A),p=v.get(x,_.length),p.init(),_.push(p),re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(re),G=this.localClippingEnabled,ne=W.init(this.clippingPlanes,G,D),h=E.get(x,m.length),h.init(),m.push(h),xr(x,D,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(S,y),ne===!0&&W.beginShadows();const O=p.state.shadowsArray;if(Z.render(O,x,D),ne===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,x),p.setupLights(g.physicallyCorrectLights),D.isArrayCamera){const N=D.cameras;for(let V=0,he=N.length;V<he;V++){const me=N[V];vr(h,x,me,me.viewport)}}else vr(h,x,D);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(g,x,D),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),b.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function xr(x,D,O,N){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){N&&te.setFromMatrixPosition(x.matrixWorld).applyMatrix4(re);const me=Je.update(x),ve=x.material;ve.visible&&h.push(x,me,ve,O,te.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Pe.render.frame&&(x.skeleton.update(),x.skeleton.frame=Pe.render.frame),!x.frustumCulled||$.intersectsObject(x))){N&&te.setFromMatrixPosition(x.matrixWorld).applyMatrix4(re);const me=Je.update(x),ve=x.material;if(Array.isArray(ve)){const de=me.groups;for(let Te=0,Me=de.length;Te<Me;Te++){const ye=de[Te],Ie=ve[ye.materialIndex];Ie&&Ie.visible&&h.push(x,me,Ie,O,te.z,ye)}}else ve.visible&&h.push(x,me,ve,O,te.z,null)}}const he=x.children;for(let me=0,ve=he.length;me<ve;me++)xr(he[me],D,O,N)}function vr(x,D,O,N){const V=x.opaque,he=x.transmissive,me=x.transparent;p.setupLightsView(O),he.length>0&&ea(V,D,O),N&&fe.viewport(C.copy(N)),V.length>0&&ji(V,D,O),he.length>0&&ji(he,D,O),me.length>0&&ji(me,D,O)}function ea(x,D,O){if(H===null){const me=o===!0&&oe.isWebGL2===!0?Un:Mt;H=new me(1024,1024,{generateMipmaps:!0,type:j.convert(Kt)!==null?Kt:wt,minFilter:$i,magFilter:Ye,wrapS:$e,wrapT:$e,useRenderToTexture:ce.has("WEBGL_multisampled_render_to_texture")})}const N=g.getRenderTarget();g.setRenderTarget(H),g.clear();const V=g.toneMapping;g.toneMapping=Ut,ji(x,D,O),g.toneMapping=V,Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H),g.setRenderTarget(N)}function ji(x,D,O){const N=D.isScene===!0?D.overrideMaterial:null;for(let V=0,he=x.length;V<he;V++){const me=x[V],ve=me.object,de=me.geometry,Te=N===null?me.material:N,Me=me.group;ve.layers.test(O.layers)&&ta(ve,D,O,de,Te,Me)}}function ta(x,D,O,N,V,he){x.onBeforeRender(g,D,O,N,V,he),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(g,D,O,N,x,he),V.transparent===!0&&V.side===ni?(V.side=Ue,V.needsUpdate=!0,g.renderBufferDirect(O,D,N,V,x,he),V.side=Fi,V.needsUpdate=!0,g.renderBufferDirect(O,D,N,V,x,he),V.side=ni):g.renderBufferDirect(O,D,N,V,x,he),x.onAfterRender(g,D,O,N,V,he)}function Tn(x,D,O){D.isScene!==!0&&(D=se);const N=ue.get(x),V=p.state.lights,he=p.state.shadowsArray,me=V.state.version,ve=qe.getParameters(x,V.state,he,D,O),de=qe.getProgramCacheKey(ve);let Te=N.programs;N.environment=x.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(x.isMeshStandardMaterial?Oe:He).get(x.envMap||N.environment),Te===void 0&&(x.addEventListener("dispose",xe),Te=new Map,N.programs=Te);let Me=Te.get(de);if(Me!==void 0){if(N.currentProgram===Me&&N.lightsStateVersion===me)return Mr(x,ve),Me}else ve.uniforms=qe.getUniforms(x),x.onBuild(O,ve,g),x.onBeforeCompile(ve,g),Me=qe.acquireProgram(ve,de),Te.set(de,Me),N.uniforms=ve.uniforms;const ye=N.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ye.clippingPlanes=W.uniform),Mr(x,ve),N.needsLights=ra(x),N.lightsStateVersion=me,N.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.directionalShadowMap.value=V.state.directionalShadowMap,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotShadowMap.value=V.state.spotShadowMap,ye.spotShadowMatrix.value=V.state.spotShadowMatrix,ye.pointShadowMap.value=V.state.pointShadowMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix);const Ie=Me.getUniforms(),jt=Yt.seqWithValue(Ie.seq,ye);return N.currentProgram=Me,N.uniformsList=jt,Me}function Mr(x,D){const O=ue.get(x);O.outputEncoding=D.outputEncoding,O.instancing=D.instancing,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ia(x,D,O,N,V){D.isScene!==!0&&(D=se),Fe.resetTextureUnits();const he=D.fog,me=N.isMeshStandardMaterial?D.environment:null,ve=A===null?g.outputEncoding:A.texture.encoding,de=(N.isMeshStandardMaterial?Oe:He).get(N.envMap||me),Te=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Me=!!N.normalMap&&!!O.attributes.tangent,ye=!!O.morphAttributes.position,Ie=!!O.morphAttributes.normal,jt=O.morphAttributes.position?O.morphAttributes.position.length:0,ii=N.toneMapped?g.toneMapping:Ut,we=ue.get(N),mt=p.state.lights;if(ne===!0&&(G===!0||x!==w)){const ot=x===w&&N.id===M;W.setState(N,x,ot)}let Ne=!1;N.version===we.__version?(we.needsLights&&we.lightsStateVersion!==mt.state.version||we.outputEncoding!==ve||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||we.envMap!==de||N.fog&&we.fog!==he||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==W.numPlanes||we.numIntersection!==W.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Me||we.morphTargets!==ye||we.morphNormals!==Ie||we.toneMapping!==ii||oe.isWebGL2===!0&&we.morphTargetsCount!==jt)&&(Ne=!0):(Ne=!0,we.__version=N.version);let gt=we.currentProgram;Ne===!0&&(gt=Tn(N,D,V));let Ki=!1,_t=!1,bt=!1;const We=gt.getUniforms(),Di=we.uniforms;if(fe.useProgram(gt.program)&&(Ki=!0,_t=!0,bt=!0),N.id!==M&&(M=N.id,_t=!0),Ki||w!==x){if(We.setValue(R,"projectionMatrix",x.projectionMatrix),oe.logarithmicDepthBuffer&&We.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),w!==x&&(w=x,_t=!0,bt=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const ot=We.map.cameraPosition;ot!==void 0&&ot.setValue(R,te.setFromMatrixPosition(x.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&We.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||V.isSkinnedMesh)&&We.setValue(R,"viewMatrix",x.matrixWorldInverse)}if(V.isSkinnedMesh){We.setOptional(R,V,"bindMatrix"),We.setOptional(R,V,"bindMatrixInverse");const ot=V.skeleton;ot&&(oe.floatVertexTextures?(ot.boneTexture===null&&ot.computeBoneTexture(),We.setValue(R,"boneTexture",ot.boneTexture,Fe),We.setValue(R,"boneTextureSize",ot.boneTextureSize)):We.setOptional(R,ot,"boneMatrices"))}return!!O&&(O.morphAttributes.position!==void 0||O.morphAttributes.normal!==void 0)&&k.update(V,O,N,gt),(_t||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,We.setValue(R,"receiveShadow",V.receiveShadow)),_t&&(We.setValue(R,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&na(Di,bt),he&&N.fog&&Tt.refreshFogUniforms(Di,he),Tt.refreshMaterialUniforms(Di,N,I,Y,H),Yt.upload(R,we.uniformsList,Di,Fe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Yt.upload(R,we.uniformsList,Di,Fe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&We.setValue(R,"center",V.center),We.setValue(R,"modelViewMatrix",V.modelViewMatrix),We.setValue(R,"normalMatrix",V.normalMatrix),We.setValue(R,"modelMatrix",V.matrixWorld),gt}function na(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ra(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,D,O){ue.get(x.texture).__webglTexture=D,ue.get(x.depthTexture).__webglTexture=O;const N=ue.get(x);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||x.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),x.useRenderToTexture=!1,x.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(x,D){const O=ue.get(x);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,O=0){A=x,d=D,f=O;let N=!0;if(x){const de=ue.get(x);de.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(R.FRAMEBUFFER,null),N=!1):de.__webglFramebuffer===void 0?Fe.setupRenderTarget(x):de.__hasExternalTextures&&Fe.rebindTextures(x,ue.get(x.texture).__webglTexture,ue.get(x.depthTexture).__webglTexture)}let V=null,he=!1,me=!1;if(x){const de=x.texture;(de.isDataTexture3D||de.isDataTexture2DArray)&&(me=!0);const Te=ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(V=Te[D],he=!0):x.useRenderbuffer?V=ue.get(x).__webglMultisampledFramebuffer:V=Te,C.copy(x.viewport),P.copy(x.scissor),q=x.scissorTest}else C.copy(U).multiplyScalar(I).floor(),P.copy(z).multiplyScalar(I).floor(),q=F;if(fe.bindFramebuffer(R.FRAMEBUFFER,V)&&oe.drawBuffers&&N){let de=!1;if(x)if(x.isWebGLMultipleRenderTargets){const Te=x.texture;if(B.length!==Te.length||B[0]!==R.COLOR_ATTACHMENT0){for(let Me=0,ye=Te.length;Me<ye;Me++)B[Me]=R.COLOR_ATTACHMENT0+Me;B.length=Te.length,de=!0}}else(B.length!==1||B[0]!==R.COLOR_ATTACHMENT0)&&(B[0]=R.COLOR_ATTACHMENT0,B.length=1,de=!0);else(B.length!==1||B[0]!==R.BACK)&&(B[0]=R.BACK,B.length=1,de=!0);de&&(oe.isWebGL2?R.drawBuffers(B):ce.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}if(fe.viewport(C),fe.scissor(P),fe.setScissorTest(q),he){const de=ue.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,O)}else if(me){const de=ue.get(x.texture),Te=D||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.__webglTexture,O||0,Te)}M=-1},this.readRenderTargetPixels=function(x,D,O,N,V,he,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){fe.bindFramebuffer(R.FRAMEBUFFER,ve);try{const de=x.texture,Te=de.format,Me=de.type;if(Te!==Be&&j.convert(Te)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ye=Me===Kt&&(ce.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Me!==wt&&j.convert(Me)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Me===Ot&&(oe.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R.checkFramebufferStatus(R.FRAMEBUFFER)===R.FRAMEBUFFER_COMPLETE?D>=0&&D<=x.width-N&&O>=0&&O<=x.height-V&&R.readPixels(D,O,N,V,j.convert(Te),j.convert(Me),he):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const de=A!==null?ue.get(A).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,de)}}},this.copyFramebufferToTexture=function(x,D,O=0){if(D.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const N=Math.pow(2,-O),V=Math.floor(D.image.width*N),he=Math.floor(D.image.height*N);Fe.setTexture2D(D,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,x.x,x.y,V,he),fe.unbindTexture()},this.copyTextureToTexture=function(x,D,O,N=0){const V=D.image.width,he=D.image.height,me=j.convert(O.format),ve=j.convert(O.type);Fe.setTexture2D(O,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,x.x,x.y,V,he,me,ve,D.image.data):D.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,N,x.x,x.y,me,ve,D.image),N===0&&O.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(x,D,O,N,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,ve=x.max.z-x.min.z+1,de=j.convert(N.format),Te=j.convert(N.type);let Me;if(N.isDataTexture3D)Fe.setTexture3D(N,0),Me=R.TEXTURE_3D;else if(N.isDataTexture2DArray)Fe.setTexture2DArray(N,0),Me=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ye=R.getParameter(R.UNPACK_ROW_LENGTH),Ie=R.getParameter(R.UNPACK_IMAGE_HEIGHT),jt=R.getParameter(R.UNPACK_SKIP_PIXELS),ii=R.getParameter(R.UNPACK_SKIP_ROWS),we=R.getParameter(R.UNPACK_SKIP_IMAGES),mt=O.isCompressedTexture?O.mipmaps[0]:O.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,x.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,x.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isDataTexture3D?R.texSubImage3D(Me,V,D.x,D.y,D.z,he,me,ve,de,Te,mt.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Me,V,D.x,D.y,D.z,he,me,ve,de,mt.data)):R.texSubImage3D(Me,V,D.x,D.y,D.z,he,me,ve,de,Te,mt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie),R.pixelStorei(R.UNPACK_SKIP_PIXELS,jt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ii),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we),V===0&&N.generateMipmaps&&R.generateMipmap(Me),fe.unbindTexture()},this.initTexture=function(x){Fe.setTexture2D(x,0),fe.unbindTexture()},this.resetState=function(){d=0,f=0,A=null,fe.reset(),b.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Td.prototype.isWebGLRenderer=!0;class bd extends rt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}bd.prototype.isScene=!0;class Qs extends Ft{constructor(e=1,t=.4,i=8,r=6,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new L,h=new L,p=new L;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const g=_/r*s,T=m/i*Math.PI*2;h.x=(e+t*Math.cos(T))*Math.cos(g),h.y=(e+t*Math.cos(T))*Math.sin(g),h.z=t*Math.sin(T),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),p.subVectors(h,u).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const g=(r+1)*m+_-1,T=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,f=(r+1)*m+_;o.push(g,T,f),o.push(T,d,f)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}static fromJSON(e){return new Qs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}export{$n as M,dt as P,bd as S,Qs as T,Td as W,It as a};

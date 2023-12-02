var makehuman=function(t){"use strict";var e="undefined"!=typeof Float32Array?Float32Array:Array;function i(){var t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function s(t,e,i){var s=Math.sin(i),o=Math.cos(i),r=e[4],n=e[5],a=e[6],l=e[7],h=e[8],d=e[9],c=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*o+h*s,t[5]=n*o+d*s,t[6]=a*o+c*s,t[7]=l*o+p*s,t[8]=h*o-r*s,t[9]=d*o-n*s,t[10]=c*o-a*s,t[11]=p*o-l*s,t}function o(t,e,i){var s=Math.sin(i),o=Math.cos(i),r=e[0],n=e[1],a=e[2],l=e[3],h=e[8],d=e[9],c=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*o-h*s,t[1]=n*o-d*s,t[2]=a*o-c*s,t[3]=l*o-p*s,t[8]=r*s+h*o,t[9]=n*s+d*o,t[10]=a*s+c*o,t[11]=l*s+p*o,t}function r(t,e,i){var s=Math.sin(i),o=Math.cos(i),r=e[0],n=e[1],a=e[2],l=e[3],h=e[4],d=e[5],c=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*o+h*s,t[1]=n*o+d*s,t[2]=a*o+c*s,t[3]=l*o+p*s,t[4]=h*o-r*s,t[5]=d*o-n*s,t[6]=c*o-a*s,t[7]=p*o-l*s,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var n=function(t,e,i,s,o){var r,n=1/Math.tan(e/2);return t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(r=1/(s-o),t[10]=(o+s)*r,t[14]=2*o*s*r):(t[10]=-1,t[14]=-2*s),t};function a(){var t=new e(3);return e!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function l(t,i,s){var o=new e(3);return o[0]=t,o[1]=i,o[2]=s,o}function h(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function d(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}function c(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function p(t,e){var i=e[0],s=e[1],o=e[2],r=i*i+s*s+o*o;return r>0&&(r=1/Math.sqrt(r)),t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function u(t,e,i){var s=e[0],o=e[1],r=e[2],n=i[0],a=i[1],l=i[2];return t[0]=o*l-r*a,t[1]=r*n-s*l,t[2]=s*a-o*n,t}function g(t,e,i){var s=e[0],o=e[1],r=e[2],n=i[3]*s+i[7]*o+i[11]*r+i[15];return n=n||1,t[0]=(i[0]*s+i[4]*o+i[8]*r+i[12])/n,t[1]=(i[1]*s+i[5]*o+i[9]*r+i[13])/n,t[2]=(i[2]*s+i[6]*o+i[10]*r+i[14])/n,t}var f,m,b,v=d;function x(t,e,i){function s(e,i){t[e]+=i[0],t[e+1]+=i[1],t[e+2]+=i[2]}for(let t=0;t<i.length;){const o=3*i[t++],r=3*i[t++],n=3*i[t++],h=3*i[t++],c=l(e[o],e[o+1],e[o+2]),g=l(e[r],e[r+1],e[r+2]),f=l(e[n],e[n+1],e[n+2]),m=a(),b=a(),v=a();d(m,g,c),d(b,f,c),u(v,m,b),p(v,v),s(o,v),s(r,v),s(n,v),s(h,v)}for(let i=0;i<e.length;i+=3){const e=l(t[i],t[i+1],t[i+2]);p(e,e),t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2]}return t}function y(t,e,i){function s(e,i){t[e]+=i[0],t[e+1]+=i[1],t[e+2]+=i[2]}for(let t=0;t<i.length;){const o=3*i[t++],r=3*i[t++],n=3*i[t++],h=l(e[o],e[o+1],e[o+2]),c=l(e[r],e[r+1],e[r+2]),g=l(e[n],e[n+1],e[n+2]),f=a(),m=a(),b=a();d(f,c,h),d(m,g,h),u(b,f,m),p(b,b),s(o,b),s(r,b),s(n,b)}for(let i=0;i<e.length;i+=3){const e=l(t[i],t[i+1],t[i+2]);p(e,e),t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2]}return t}a();class w{constructor(t,e,i,s,o,r=!0){if(this.gl=t,this.fvertex=i,this.quads=r,!1===r)return this.glIndices=this.createBuffer(t.ELEMENT_ARRAY_BUFFER,t.STATIC_DRAW,Uint16Array,i),this.glVertex=this.createBuffer(t.ARRAY_BUFFER,t.STATIC_DRAW,Float32Array,e),this.normal=new Float32Array(e.length),y(this.normal,e,i),this.glNormal=this.createBuffer(t.ARRAY_BUFFER,t.STATIC_DRAW,Float32Array,this.normal),void(this.glData={indices:i});const n=function(t,e,i,s){if(void 0!==s&&e.length!==s.length)throw Error(`fvertex and fuv must have the same length, instead it is ${e.length} and ${s.length}`);if(void 0!==s&&void 0===i)throw Error("uv & fuv must both be defined");const o=[],r=new Array(t.length/3*2),n=[],a=[],l=[];function h(t){return e[t]}function d(o){const h=e[o],d=e[o],c=s[o],p=i[2*c],u=i[2*c+1];if(void 0===r[2*d])return r[2*d]=p,r[2*d+1]=u,h;if(r[2*d]===p&&r[2*d+1]===u)return h;const g=(t.length+a.length)/3,f=3*h,m=t[f],b=t[f+1],v=t[f+2];return n.push(h),a.push(m),a.push(b),a.push(v),l.push(p),l.push(u),g}let c;c=void 0===s?h:d;for(let t=0;t<e.length;t+=4){const e=c(t);o.push(e),o.push(c(t+1));const i=c(t+2);o.push(i),o.push(c(t+3)),o.push(e),o.push(i)}if(void 0===s)return{idxExtra:[],indices:o,vertex:t,texcoord:void 0};const p=new Float32Array(t.length+a.length),u=new Float32Array(r.length+l.length);return p.set(t),p.set(a,t.length),u.set(r),u.set(l,r.length),{indices:o,vertex:p,texcoord:u,idxExtra:n}}(e,i,s,o);this.glData=n,this.glIndices=this.createBuffer(t.ELEMENT_ARRAY_BUFFER,t.STATIC_DRAW,Uint16Array,n.indices),this.glVertex=this.createBuffer(t.ARRAY_BUFFER,t.STATIC_DRAW,Float32Array,n.vertex),n.texcoord&&(this.glTexture=this.createBuffer(t.ARRAY_BUFFER,t.STATIC_DRAW,Float32Array,n.texcoord)),this.normal=new Float32Array(n.vertex.length),x(this.normal,e,i),this.glData.idxExtra.forEach(((t,i)=>{this.normal[e.length+3*i]=this.normal[3*t],this.normal[e.length+3*i+1]=this.normal[3*t+1],this.normal[e.length+3*i+2]=this.normal[3*t+2]})),this.glNormal=this.createBuffer(t.ARRAY_BUFFER,t.STATIC_DRAW,Float32Array,this.normal)}update(t){this.quads?(this.glData.vertex.set(t),x(this.normal,t,this.fvertex),this.glData.idxExtra.forEach(((e,i)=>{this.glData.vertex[t.length+3*i]=t[3*e],this.glData.vertex[t.length+3*i+1]=t[3*e+1],this.glData.vertex[t.length+3*i+2]=t[3*e+2],this.normal[t.length+3*i]=this.normal[3*e],this.normal[t.length+3*i+1]=this.normal[3*e+1],this.normal[t.length+3*i+2]=this.normal[3*e+2]})),this.updateBuffer(this.glVertex,this.gl.ARRAY_BUFFER,this.gl.STATIC_DRAW,Float32Array,this.glData.vertex),this.updateBuffer(this.glNormal,this.gl.ARRAY_BUFFER,this.gl.STATIC_DRAW,Float32Array,this.normal)):(this.updateBuffer(this.glVertex,this.gl.ARRAY_BUFFER,this.gl.STATIC_DRAW,Float32Array,t),y(this.normal,t,this.fvertex),this.updateBuffer(this.glNormal,this.gl.ARRAY_BUFFER,this.gl.STATIC_DRAW,Float32Array,this.normal))}draw(t,e){this.bind(t),this.gl.drawElements(e,this.glData.indices.length,this.gl.UNSIGNED_SHORT,0)}bind(t){t.bind(this.glIndices,this.glVertex,this.glNormal,this.glTexture)}drawSubset(t,e,i){this.gl.drawElements(t,i,this.gl.UNSIGNED_SHORT,2*e)}createBuffer(t,e,i,s){const o=this.gl.createBuffer();if(null===o)throw Error("Failed to create new WebGLBuffer");return this.updateBuffer(o,t,e,i,s),o}updateBuffer(t,e,i,s,o){this.gl.bindBuffer(e,t),o instanceof Float32Array||o instanceof Int16Array?this.gl.bufferData(e,o,i):this.gl.bufferData(e,new s(o),i)}}class C{get size(){return this.vertices.length}constructor(t,e,i,s){this.vertices=void 0!==s?[t,e,i,s]:[t,e,i],this.material_index=-1,this.no=a()}}class _{static setInstance(t){_.instance=t}static readFile(t){return _.instance.readFile(t)}static exists(t){return _.instance.exists(t)}static isFile(t){return _.instance.isFile(t)}static isDir(t){return _.instance.isDir(t)}static listDir(t){return _.instance.listDir(t)}static realPath(t){return _.instance.realPath(t)}static joinPath(t,e){return _.instance.joinPath(t,e)}}class k{constructor(t){this.data=t,this.index=0}next(){if(0===this.data.length||-1===this.index)return{value:void 0,done:!0};const t=this.data.indexOf("\n",this.index);let e;e=-1===t?void 0:t-this.index;const i=this.data.substr(this.index,e);return this.index=-1===t?-1:t+1,{value:i,done:!1}}}class S{constructor(t){this.data=t}[Symbol.iterator](){return new k(this.data)}}class H extends Array{loadGeometry(t){const e=_.readFile(t),i=new S(e);let s=0,o=0;for(let t of i){t=t.trim();const e=t.split(/,+/);switch(e.length){case 3:++s,this.push(new C(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])));break;case 4:++o,this.push(new C(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])))}}console.log(`loaded ${s} triangles and ${o} quads from ${t}`)}}class A{constructor(t,i,s){var o,r;this.co=t instanceof A?(o=t.co,(r=new e(3))[0]=o[0],r[1]=o[1],r[2]=o[2],r):l(t,i,s)}}class T extends Array{load(t){const e=_.readFile(t),i=new S(e);for(let t of i){t=t.trim();const e=t.split(/,+/);3===e.length&&this.push(new A(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])))}console.log(`loaded ${this.length} vertices from ${t}`)}clone(){const t=new T(this.length);for(let e=0;e<this.length;++e){const i=this[e];t[e]=new A(i)}return t}setFrom(t){if(this.length!==t.length)throw Error("length must be the same");for(let s=0;s<this.length;++s)e=this[s].co,i=t[s].co,e[0]=i[0],e[1]=i[1],e[2]=i[2];var e,i}}!function(t){t[t.NO_LIMIT=-1]="NO_LIMIT",t[t.NO_RECURSIVE=0]="NO_RECURSIVE"}(f||(f={})),function(t){t[t.REGULAR_FILE=0]="REGULAR_FILE",t[t.DIRECTORY=1]="DIRECTORY"}(m||(m={}));class E{constructor(){this.file_list=[],this.file_filter="",this.path="",this.recursive_level=-1,this.recursive_counter=0,this.file_type=m.REGULAR_FILE}setFileFilter(t){this.file_filter=t}setRecursive(t){this.recursive_level=t}setRootPath(t){this.path=t}setFileType(t){this.file_type=t}getDirectoryList(){return this.readDirRecursive(this.path),this.recursive_counter=0,this.file_list}readDirRecursive(t){for(const e of _.listDir(t)){if("."===t.charAt(0))continue;const i=`${t}/${e}`;_.isDir(i)?(this.file_type===m.DIRECTORY&&this.file_list.push(i),(this.recursive_counter<this.recursive_level||this.recursive_level==f.NO_LIMIT)&&(++this.recursive_counter,this.readDirRecursive(i),--this.recursive_counter)):this.hasFileFilterEnding(i)&&this.file_list.push(i)}}hasFileFilterEnding(t){return!(this.file_filter.length>t.length)&&t.endsWith(this.file_filter)}}class M extends Array{}class R extends Array{constructor(){super(...arguments),this.modVertex=new M}load(t){const e=_.readFile(`${t}`),i=new S(e);for(let t of i){t=t.trim();const e=t.split(/,+/);if(4===e.length){const t={vertex_number:parseInt(e[0]),morph_vector:l(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]))};this.push(t),this.modVertex.push(t.vertex_number)}}return!0}getModVertex(){return this.modVertex}}class L{constructor(t,e=!1){this.mTarget=void 0,this.mTargetLoadTry=!1,this.mFilename=t,e&&this.loadFromFile()}loadFromFile(){return!1===this.mTargetLoadTry&&(this.mTargetLoadTry=!0,this.mTarget=new R,this.mTarget.load(this.mFilename)||(this.mTarget=void 0)),void 0!==this.mTarget}getTarget(){return this.mTargetLoadTry||this.loadFromFile(),this.mTarget}}!function(t){t[t.X_AXIS=0]="X_AXIS",t[t.Y_AXIS=1]="Y_AXIS",t[t.Z_AXIS=2]="Z_AXIS"}(b||(b={}));class D extends Array{constructor(){super(...arguments),this.modVertex=[],this.hasCenter=!1,this.minAngle=0,this.maxAngle=0,this.normalize=!1,this.cat=""}clear(){this.length=0}load(t){this.clear();const e=_.readFile(`${t}.info`).split("\n").map((t=>t.trim()));if(e.length<3)return!1;const i=e[0],s=e[1].charAt(0),o=e[2].split(",");this.minAngle=parseFloat(o[0]),this.maxAngle=parseFloat(o[1]);const r=_.readFile(t),n=new S(r);for(let t of n){t=t.trim();const e=t.split(/,+/);if(2===e.length){const t={vertex_number:parseInt(e[0]),rotation:parseFloat(e[1])};this.modVertex.push(t.vertex_number),this.push(t)}}switch(s){case"X":this.axis=b.X_AXIS;break;case"Y":this.axis=b.Y_AXIS;break;case"Z":this.axis=b.Z_AXIS;break;default:throw Error(`unknown axis ${s}`)}return this.centerVertexNumbers=i.split(",").map((t=>parseInt(t))),!0}getCenterVertexNumbers(){return this.centerVertexNumbers}getModVertex(){return this.modVertex}getCenter(){return this.center}setCenter(t){this.center=t}getAxis(){return this.axis}getHasCenter(){return this.hasCenter}setHasCenter(t){this.hasCenter=t}getMinAngle(){return this.minAngle}getMaxAngle(){return this.maxAngle}getNormalize(){return this.normalize}setNormalize(t){this.normalize=t}getCat(){return this.cat}setCat(t){this.cat=t}setLimb(t){this.mbLimb=t}getLimb(){return this.mbLimb}}class I{constructor(t=((t,e)=>t<e)){this.array=[],this.order=t}get size(){return this.array.length}entries(){return this.array}[Symbol.iterator](){return this.array[Symbol.iterator]()}last(){return this.array[this.array.length-1]}eraseLast(){this.array.length=this.array.length-1}first(){return this.array[0]}eraseFirst(){this.array.splice(0,1)}insert(t){let e=0,i=this.array.length,s=Math.floor((i+e)/2);for(;e<i;){if(this.order(t,this.array[s]))i=s-1;else{if(!this.order(this.array[s],t))break;e=s+1}s=Math.floor((i+e)/2)}s>=this.array.length?this.array.push(t):s<0?this.array.splice(0,0,t):this.order(t,this.array[s])?this.array.splice(s,0,t):this.array.splice(s+1,0,t)}}class B{constructor(){this.target=new R,this.formFactor=l(1,1,1),this.minAngle=0,this.maxAngle=0,this.normalize=!1,this.cat="",this.mbLimb=!1}load(t){this.inFilename=t;const e=_.readFile(`${t}.info`).split("\n").map((t=>t.trim()));if(e.length<3)return!1;this.originalSize=e[0].split(",").map((t=>parseFloat(t)));const i=e[1].split(",");return this.minAngle=parseFloat(i[0]),this.maxAngle=parseFloat(i[1]),this.target.load(t),!0}getModVertex(){return this.target.getModVertex()}calcFormFactor(t){let e=new I,i=new I,s=new I,o=new I,r=new I,n=new I,a=0,h=10;const d=this.getTarget();d.length<20&&(h=Math.floor(d.length/2));for(const l of d)a<h?(e.insert(t[l.vertex_number].co[0]),i.insert(t[l.vertex_number].co[0]),s.insert(t[l.vertex_number].co[1]),o.insert(t[l.vertex_number].co[1]),r.insert(t[l.vertex_number].co[2]),n.insert(t[l.vertex_number].co[2]),++a):(t[l.vertex_number].co[0]<e.last()&&(e.insert(t[l.vertex_number].co[0]),e.eraseLast()),t[l.vertex_number].co[0]>i.first()&&(i.insert(t[l.vertex_number].co[0]),i.eraseFirst()),t[l.vertex_number].co[1]<s.last()&&(s.insert(t[l.vertex_number].co[1]),s.eraseLast()),t[l.vertex_number].co[1]>o.first()&&(o.insert(t[l.vertex_number].co[1]),o.eraseFirst()),t[l.vertex_number].co[2]<r.last()&&(r.insert(t[l.vertex_number].co[2]),r.eraseLast()),t[l.vertex_number].co[2]>n.first()&&(n.insert(t[l.vertex_number].co[2]),n.eraseFirst()));let c=0,p=0,u=0,g=0,f=0,m=0;for(const t of e)c+=t;for(const t of i)p+=t;for(const t of s)u+=t;for(const t of o)g+=t;for(const t of r)f+=t;for(const t of n)m+=t;let b=i.size,v=o.size,x=n.size;this.formFactor=l((p/b-c/b)/this.originalSize[0],(g/v-u/v)/this.originalSize[1],(m/x-f/x)/this.originalSize[2])}getTarget(){return this.target}getFormFactor(){return this.formFactor}getMinAngle(){return this.minAngle}getMaxAngle(){return this.maxAngle}getNormalize(){return this.normalize}setNormalize(t){this.normalize=t}getFilename(){return this.inFilename}getCat(){return this.cat}setCat(t){this.cat=t}setLimb(t){this.mbLimb=t}getLimb(){return this.mbLimb}}function F(t,e){let i=a();for(const s of t)h(i,i,e[s].co);return c(i,i,1/t.length),i}class N{constructor(t,e){this.positiveTranslations=[],this.negativeTranslations=[],this.positiveRotations=[],this.negativeRotations=[],this.negative=!1,this.positive=!1,this.normalizationInited=!1,this.modVertex=new Set,this.minAngle=0,this.maxAngle=0,this.targetName=t,this.fullPath=e}load(){const t=new E;t.setRootPath(this.fullPath),t.setRecursive(0);const e=t.getDirectoryList();for(const t of e){const e=t.substring(this.fullPath.length+1);if(e.endsWith("-.rot")){const i=new D;i.load(t)&&(i.setCat(e.substring(0,2)),i.setLimb(-1!==e.indexOf("LIMB")),this.negativeRotations.push(i),i.getModVertex().forEach((t=>this.modVertex.add(t))),this.negative=!0,this.minAngle=Math.min(this.minAngle,i.getMinAngle()))}else if(e.endsWith(".rot")){const i=new D;i.load(t)&&(i.setCat(e.substring(0,2)),i.setLimb(-1!==e.indexOf("LIMB")),this.positiveRotations.push(i),i.getModVertex().forEach((t=>this.modVertex.add(t))),this.positive=!0,this.maxAngle=Math.max(this.maxAngle,i.getMaxAngle()))}else if(e.endsWith("-.target")){const i=new B;i.load(t)&&(i.setCat(e.substring(0,2)),this.negativeTranslations.push(i),i.getModVertex().forEach((t=>this.modVertex.add(t))),this.minAngle=Math.min(this.minAngle,i.getMinAngle()))}else if(e.endsWith(".target")){const i=new B;i.load(t)&&(i.setCat(e.substring(0,2)),this.positiveTranslations.push(i),i.getModVertex().forEach((t=>this.modVertex.add(t))),this.maxAngle=Math.max(this.maxAngle,i.getMaxAngle()))}else;}}calcRotationsCenteroids(t,e){if(void 0===e)this.positive&&this.calcRotationsCenteroids(t,this.positiveRotations),this.negative&&this.calcRotationsCenteroids(t,this.negativeRotations);else for(const i of e)i.setCenter(F(i.getCenterVertexNumbers(),t))}calcTranslationsFormFactors(t,e){if(void 0===e)this.positive&&this.calcTranslationsFormFactors(t,this.positiveTranslations),this.negative&&this.calcTranslationsFormFactors(t,this.negativeTranslations);else for(const i of e)i.calcFormFactor(t)}calcNormalizations(){if(!this.normalizationInited){for(const t of this.positiveRotations)t.getMinAngle()===this.minAngle&&t.getMaxAngle()===this.maxAngle||t.setNormalize(!0);for(const t of this.negativeRotations)t.getMinAngle()===this.minAngle&&t.getMaxAngle()===this.maxAngle||t.setNormalize(!0);for(const t of this.positiveTranslations)t.getMinAngle()===this.minAngle&&t.getMaxAngle()===this.maxAngle||t.setNormalize(!0);for(const t of this.negativeTranslations)t.getMinAngle()===this.minAngle&&t.getMaxAngle()===this.maxAngle||t.setNormalize(!0);this.normalizationInited=!0}}hasNegative(){return this.negative}hasPositive(){return this.positive}getPositiveTranslations(){return this.positiveTranslations}getNegativeTranslations(){return this.negativeTranslations}getPositiveRotations(){return this.positiveRotations}getNegativeRotations(){return this.negativeRotations}getModVertex(){return this.modVertex}getMinAngle(){return this.minAngle}getMaxAngle(){return this.maxAngle}}class ${constructor(t,e,i=!1){this.mTargetLoadTry=!1,this.mFilename=t,this.mFullPath=e,i&&this.loadFromFile()}loadFromFile(){return!1===this.mTargetLoadTry&&(this.mTargetLoadTry=!0,this.mTarget=new N(this.mFilename,this.mFullPath),this.mTarget.load()),void 0!==this.mTarget}getTarget(){return this.mTargetLoadTry||this.loadFromFile(),this.mTarget}}class z extends Map{constructor(){super(...arguments),this.loaded=!1,this.vertexes=new Map}load(t){let e;const i=_.readFile(t),s=new S(i);for(let t of s)if((o=t.charAt(0))>="a"&&o<="z"||o>="A"&&o<="Z")e=t.split(",")[0].trim();else{let i={visible:!0,facesIndexes:t.split(" ").map((t=>parseInt(t)))};this.set(e,i)}var o;return console.log(`loaded ${this.size} face groups from ${t}`),!0}}function P(t,e,i){return void 0!==e&&void 0!==e.children&&(e.children=[e.children]),O(t,e)}function O(t,e,i){let s;if("string"!=typeof t)return new t(e);const o=t;switch(o){case"svg":case"line":case"rect":case"circle":case"path":case"text":s="http://www.w3.org/2000/svg";break;default:s="http://www.w3.org/1999/xhtml"}const r=document.createElementNS(s,o);return V(r,e,s),r}function V(t,e,i){if(null!=e){for(let[s,o]of Object.entries(e))switch(s){case"children":break;case"action":t.setAction(o);break;case"model":t.setModel(o);break;case"class":t.classList.add(o);break;case"style":for(let[e,i]of Object.entries(o)){const s=/[A-Z]/g;e=e.replace(s,(t=>"-"+t.toLowerCase())),"number"==typeof i&&(i=`${i}`),t.style.setProperty(e,i)}break;case"set":Object.defineProperty(e.set.object,e.set.attribute,{value:t});break;default:if("on"===s.substring(0,2))t.addEventListener(s.substring(2),o);else if("string"==typeof o||"number"==typeof o||"boolean"==typeof o){if("http://www.w3.org/2000/svg"===i){const t=/[A-Z]/g;s=s.replace(t,(t=>"-"+t.toLowerCase()))}t.setAttributeNS(null,s,`${o}`)}}void 0!==e.children&&W(t,e.children)}}function W(t,e){for(const i of e)i instanceof Array?W(t,i):"string"!=typeof i?t.appendChild(i):t.appendChild(document.createTextNode(i))}function U(t,...e){let i=t[0];return e.forEach(((e,s)=>{i=i.concat(e).concat(t[s+1])})),i}function j(t,e){const i=document.createElement(t);for(let t=0;t<e.length;++t){let s=e[t];s instanceof Array&&(e.splice(t,1,...s),s=e[t]),"string"!=typeof s?i.appendChild(s):i.appendChild(document.createTextNode(s))}return i}function G(t){return document.createTextNode(t)}const Y=(...t)=>j("div",t),X=(...t)=>j("span",t),J=(...t)=>j("slot",t),q=(...t)=>j("input",t),Z=(...t)=>j("button",t),K=(...t)=>j("ul",t),Q=(...t)=>j("li",t),tt="http://www.w3.org/2000/svg";function et(t){const e=document.createElementNS(tt,"svg");return void 0!==t&&e.appendChild(t),e}function it(t){const e=document.createElementNS(tt,"path");return void 0!==t&&e.setAttributeNS(null,"d",t),e}class st{constructor(t,e){this.callback=t,this.id=e}}class ot{constructor(){this.locked=!1,this.busy=!1}add(t,e){this.callbacks||(this.callbacks=new Array),this.callbacks.push(new st(t,e))}remove(t){if(this.callbacks)for(let e=this.callbacks.length-1;e>=0;--e)this.callbacks[e].id===t&&this.callbacks.splice(e,1)}count(){return this.callbacks?this.callbacks.length:0}lock(){this.locked=!0}unlock(){if(this.locked=!1,this.triggered){let t=this.triggered.data;this.triggered=void 0,this.trigger(t)}}withLock(t){this.lock();const e=t();return this.unlock(),e}trigger(t){if(this.busy)return;if(this.busy=!0,this.locked)return this.triggered={data:t},void(this.busy=!1);if(!this.callbacks)return void(this.busy=!1);let e;for(let i=0;i<this.callbacks.length;++i)try{this.callbacks[i].callback(t)}catch(t){e=t}if(this.busy=!1,void 0!==e)throw e}}var rt,nt,at;!function(t){t[t.ALL=0]="ALL",t[t.VALUE=1]="VALUE",t[t.ENABLED=2]="ENABLED",t[t.COLOR=3]="COLOR",t[t.LABEL=4]="LABEL",t[t.DESCRIPTION=5]="DESCRIPTION",t[t.ERROR=6]="ERROR",t[t.MAX_REASON=7]="MAX_REASON"}(rt||(rt={}));class lt{constructor(t){this.modified=new ot,this.options=t}set enabled(t){this.options?.enabled!==t&&(void 0===this.options&&(this.options={}),this.options.enabled=t,this.modified.trigger(rt.ENABLED))}get enabled(){return!1!==this.options?.enabled}set color(t){this.options?.color!==t&&(void 0===this.options&&(this.options={}),this.options.color=t,this.modified.trigger(rt.COLOR))}get color(){return this.options?.color}set label(t){this.options?.label!==t&&(void 0===this.options&&(this.options={}),this.options.label=t,this.modified.trigger(rt.LABEL))}get label(){return this.options?.label}set description(t){this.options?.description!==t&&(void 0===this.options&&(this.options={}),this.options.description=t,this.modified.trigger(rt.DESCRIPTION))}get description(){return this.options?.description}set error(t){this.options?.error!==t&&(void 0===this.options&&(this.options={}),this.options.error=t,this.modified.trigger(rt.ERROR))}get error(){return this.options?.error}applyStyle(t){if(this.enabled?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled"),void 0!==this.color)switch(t.style.fontStyle="",t.style.fontWeight="",t.style.color="",this.color){case"italic":t.style.fontStyle="italic";break;case"bold":t.style.fontWeight="bold";break;default:t.style.color=this.color}else t.style.color="",t.style.fontStyle="",t.style.fontWeight="";void 0!==this.error?t.classList.add("tx-error"):t.classList.remove("tx-error")}}!function(t){t[t.DEFAULT=7]="DEFAULT",t[t.MAX_REASON=8]="MAX_REASON"}(nt||(nt={}));class ht extends lt{set default(t){this.options?.default!==t&&(void 0===this.options&&(this.options={}),this.options.default=t,this.modified.trigger(nt.DEFAULT))}get default(){return this.options?.default}resetToDefault(){const t=this.default;void 0!==t&&(this.value=t)}}class dt extends ht{constructor(t,e){super(e),this._value=t}set value(t){this._value!==t&&(this._value=t,this.modified.trigger(rt.VALUE))}get value(){return this._value}}class ct extends dt{constructor(t,e){super(t,e)}}class pt{constructor(t){if(this._n=0n,t instanceof pt)return t;let[e,i]=String(t).split(".").concat("");this._n=BigInt(e+i.padEnd(pt.DECIMALS,"0").slice(0,pt.DECIMALS))+BigInt(pt.ROUNDED&&i[pt.DECIMALS]>="5")}static fromBigInt(t){return Object.assign(Object.create(pt.prototype),{_n:t})}add(t){return pt.fromBigInt(this._n+new pt(t)._n)}sub(t){return pt.fromBigInt(this._n-new pt(t)._n)}static _divRound(t,e){return pt.fromBigInt(t/e+(pt.ROUNDED?2n*t/e%2n:0n))}mul(t){return pt._divRound(this._n*new pt(t)._n,pt.SHIFT)}div(t){return pt._divRound(this._n*pt.SHIFT,new pt(t)._n)}toString(){const t=this._n.toString().padStart(pt.DECIMALS+1,"0");return t.slice(0,-pt.DECIMALS)+"."+t.slice(-pt.DECIMALS).replace(/\.?0+$/,"")}}pt.DECIMALS=18,pt.ROUNDED=!0,pt.SHIFT=BigInt("1"+"0".repeat(pt.DECIMALS));class ut{constructor(t){this.value=t}eval(t){if("number"==typeof this.value)return this.value;if(this.value instanceof Array){if(void 0===t)throw Error(`yikes: no model to get cell [${this.value[0]},${this.value[1]}]`);return t.getCell(this.value[0],this.value[1])._calculatedValue}switch(this.value){case"+":return this.down.eval(t)+this.down.next.eval(t);case"-":return this.down?.next?this.down.eval(t)-this.down.next.eval(t):-this.down.eval(t);case"*":return this.down.eval(t)*this.down.next.eval(t);case"/":return this.down.eval(t)/this.down.next.eval(t);default:throw Error(`unexpected token '${this.value}'`)}}append(t){if(void 0===this.down)this.down=t;else{let e=this.down;for(;e.next;)e=e.next;e.next=t}}dependencies(t=[]){return this.value instanceof Array&&t.push(this.value),this.next&&this.next.dependencies(t),this.down&&this.down.dependencies(t),t}toString(){return this._toString()}_toString(t="\n",e=0){for(let i=0;i<e;++i)t+="    ";t+=this.value,t+="\n";for(let i=this.down;i;i=i.next)t=i._toString(t,e+1);return t}}class gt{constructor(t){this.i=0,this.stack=[],this.str=t}isspace(t){return" "==t||"\n"==t||"\r"==t||"\t"==t||"\t"==t}isnumber(t){const e=t.charCodeAt(0);return e>=48&&e<=57}isalpha(t){const e=t.charCodeAt(0);return e>=65&&e<=90||e>=145&&e<=122}isalnum(t){return this.isnumber(t)||this.isalpha(t)}unlex(t){this.stack.push(t)}lex(){if(this.stack.length>0)return this.stack.pop();let t=0,e=0,i=0;if(this.i>=this.str.length)return;const s=this.i;for(;;){let o=this.str.at(this.i);switch(i){case 0:if(void 0===o)return;if(this.isspace(o)){++this.i;break}if(this.isnumber(o)){++this.i,i=1;break}if(this.isalpha(o)){t=0,i=3;break}switch(o){case"+":case"-":case"*":case"/":case"(":case")":case"=":return++this.i,new ut(o)}return;case 1:if(void 0!==o&&this.isnumber(o)){++this.i;break}if("."===o||"e"==o||"E"==o){++this.i,i=2;break}return new ut(parseFloat(this.str.substring(s,this.i)));case 2:if(void 0!==o&&this.isnumber(o)){++this.i;break}return new ut(parseFloat(this.str.substring(s,this.i)));case 3:if(void 0!==o){const s=o.charCodeAt(0);if(s>=48&&s<=57){e=s-48,i=4,++this.i;break}if(s>=65&&s<=90){t*=26,t+=s-64,++this.i;break}if(s>=145&&s<=122){t*=26,t+=s-144,++this.i;break}}return new ut(this.str.substring(s,this.i));case 4:if(void 0!==o){const t=o.charCodeAt(0);if(t>=48&&t<=57){e*=10,e+=t-48,++this.i;break}}return new ut([t-1,e-1])}}}}function ft(t){const e=mt(t);if(void 0===e)return;const i=t.lex();if(void 0===i)return e;if("+"===i.value||"-"===i.value){const s=ft(t);return void 0===s?(t.unlex(i),e):(i.append(e),i.append(s),i)}return t.unlex(i),e}function mt(t){const e=bt(t);if(void 0===e)return;const i=t.lex();if(void 0===i)return e;if("*"===i.value||"/"===i.value){const s=mt(t);if(void 0===s)throw Error(`expexted expression after ${i.value}`);return i.append(e),i.append(s),i}return t.unlex(i),e}function bt(t){const e=t.lex();if(void 0!==e){if("number"==typeof e.value)return e;if(e.value instanceof Array)return e;if("("===e.value){const e=ft(t);if(void 0===e)throw Error("Unexpected end after '(");const i=t.lex();if(")"!==i?.value)throw Error("Excepted ')");return e}if("-"===e.value){const i=bt(t);if(void 0!==i)return e.append(i),e}t.unlex(e)}}!function(t){t[t.MIN=8]="MIN",t[t.MAX=9]="MAX",t[t.STEP=10]="STEP",t[t.AUTOCORRECT=11]="AUTOCORRECT",t[t.MAX_REASON=12]="MAX_REASON"}(at||(at={}));class vt extends dt{constructor(t,e){super(t,e)}increment(){if(void 0!==this.step){const t=new pt(this.value),e=new pt(this.step);this.value=this.clip(parseFloat(t.add(e).toString()))}}decrement(){if(void 0!==this.step){const t=new pt(this.value),e=new pt(this.step);this.value=this.clip(parseFloat(t.sub(e).toString()))}}set value(t){let e;if("string"==typeof t){const i=ft(new gt(t));e=i.eval()}else e=t;this.modified.withLock((()=>{this.autocorrect?super.value=this.clip(e):(super.value=e,this.error=this.check(e))}))}get value(){return super.value}set min(t){this.options?.min!==t&&(void 0===this.options&&(this.options={}),this.options.min=t,this.modified.trigger(at.MIN))}get min(){return this.options?.min}set max(t){this.options?.max!==t&&(void 0===this.options&&(this.options={}),this.options.max=t,this.modified.trigger(at.MAX))}get max(){return this.options?.max}set step(t){this.options?.step!==t&&(void 0===this.options&&(this.options={}),this.options.step=t,this.modified.trigger(at.STEP))}get step(){return this.options?.step}set autocorrect(t){this.options?.autocorrect!==t&&(void 0===this.options&&(this.options={}),this.options.autocorrect=t,this.modified.trigger(at.AUTOCORRECT))}get autocorrect(){return!0===this.options?.autocorrect}clip(t){return void 0!==this.min&&t<this.min&&(t=this.min),void 0!==this.max&&t>this.max&&(t=this.max),t}check(t){if(void 0!==this.min&&t<this.min)return`The value must not be below ${this.min}.`;if(void 0!==this.max&&t>this.max){if(!this.autocorrect)return`The value must not be above ${this.max}.`;t=this.max}}}class xt extends ht{constructor(t="",e){super(e),this.value=t}set promise(t){this._value=t,this.modified.trigger(rt.VALUE)}get promise(){if("string"==typeof this._value){const t=this._value;return()=>t}return this._value}set value(t){this._value!==t&&("string"==typeof t?this.modified.withLock((()=>{this.error=void 0,this._value=t,this.modified.trigger(rt.VALUE)})):console.trace(`TextModel.set value(value: string): ${typeof t} is not type string`))}get value(){switch(typeof this._value){case"number":case"string":this._value=`${this._value}`;break;case"function":this._value=this._value()}return this._value}}class yt extends xt{constructor(t,e){super(t,e)}}class wt extends lt{constructor(t){super(),this.signal=new ot,this.signal.add(t)}set value(t){throw Error("Action.value can not be assigned a value")}get value(){throw Error("Action.value can not return a value")}trigger(t){this.enabled&&this.signal.trigger(t)}}function Ct(t,e){let i=t.getAttribute(e);if(null===i)throw console.log("missing attribute '"+e+"' in ",t),Error("missing attribute '"+e+"' in "+t.nodeName);return i}function _t(t,e){let i=t.getAttribute(e);return null===i?void 0:i}let kt=new class{constructor(){this.modelId2Models=new Map,this.modelId2Views=new Map,this.view2ModelIds=new Map,this.sigChanged=new ot}registerAction(t,e){let i=new wt(e);return i.signal.add(e),this._registerModel("A:"+t,i),i}registerModel(t,e){this._registerModel("M:"+t,e)}_registerModel(t,e){let i=this.modelId2Models.get(t);i||(i=new Set,this.modelId2Models.set(t,i)),i.add(e);let s=this.modelId2Views.get(t);if(s)for(let t of s)t.setModel(e)}registerView(t,e){if(e.controller&&e.controller!==this)return void console.log("error: attempt to register view more than once at different controllers");e.controller=this;let i=this.view2ModelIds.get(e);i||(i=new Set,this.view2ModelIds.set(e,i)),i.add(t);let s=this.modelId2Views.get(t);s||(s=new Set,this.modelId2Views.set(t,s)),s.add(e);let o=this.modelId2Models.get(t);if(o)for(let t of o)e.setModel(t)}unregisterView(t){if(!t.controller)return;if(t.controller!==this)throw Error("attempt to unregister view from wrong controller");let e=this.view2ModelIds.get(t);if(e)for(let i of e){let e=this.modelId2Views.get(i);e&&(e.delete(t),0===e.size&&this.modelId2Views.delete(i),t.setModel(void 0))}}clear(){for(let t of this.view2ModelIds)t[0].setModel(void 0);this.modelId2Models.clear(),this.modelId2Views.clear(),this.view2ModelIds.clear()}bind(t,e){this.registerModel(t,e)}action(t,e){return this.registerAction(t,e)}text(t,e){let i=new xt(e);return this.bind(t,i),i}html(t,e){let i=new yt(e);return this.bind(t,i),i}boolean(t,e){let i=new ct(e);return this.bind(t,i),i}number(t,e,i){let s=new vt(e,i);return this.bind(t,s),s}};class St{constructor(){this._stop=!1,this._firstFrame=this._firstFrame.bind(this),this._animationFrame=this._animationFrame.bind(this)}start(){this.prepare(),!0!==this._stop&&this.requestAnimationFrame(this._firstFrame)}stop(){this._stop=!0,this.animator?.current===this&&this.animator.clearCurrent()}replace(t){this.next=t,this.animationFrame(1),this.lastFrame(),t.prepare()}prepare(){}firstFrame(){}animationFrame(t){}lastFrame(){}requestAnimationFrame(t){window.requestAnimationFrame(t)}_firstFrame(t){this.startTime=t,this.firstFrame(),this._stop||(this.animationFrame(0),this.requestAnimationFrame(this._animationFrame))}_animationFrame(t){if(this.next)return void this.next._firstFrame(t);let e=St.animationFrameCount>0?(t-this.startTime)/St.animationFrameCount:1;e=e>1?1:e;const i=this.ease(e);this.animationFrame(i),this._stop||(i<1?this.requestAnimationFrame(this._animationFrame.bind(this)):(this.lastFrame(),this.animator&&this.animator._current===this&&this.animator.clearCurrent()))}ease(t){return.5*(1-Math.cos(Math.PI*t))}}St.animationFrameCount=468;class Ht extends St{constructor(t){super(),this.animation=t}prepare(){this.animation.prepare()}firstFrame(){this.animation.firstFrame()}animationFrame(t){this.animation.animationFrame(t)}lastFrame(){this.animation.lastFrame()}}class At{get current(){if(void 0!==this._current)return this._current instanceof Ht?this._current.animation:this._current}clearCurrent(){this._current=void 0}run(t){let e;e=t instanceof St?t:new Ht(t);const i=this._current;if(this._current=e,e.animator=this,i)i.animator=void 0,i.replace(e);else{if(At.halt)return;e.start()}}}At.halt=!1;class Tt extends HTMLElement{static define(t,e,i){const s=window.customElements.get(t);if(void 0===s)window.customElements.define(t,e,i);else if(s!==e){for(let s=0;s<255;++s){const o=`${t}-duplicate-${s}`;if(void 0===window.customElements.get(o))return console.log(`View::define(${t}, ...) with different constructor, using ${o} instead (known issue on Safari and Edge)`),void window.customElements.define(o,e,i)}console.error(`View::define(${t}, ...): attempt to redefine view with different constructor (known issue on Safari and Edge), giving up after 255 times`)}}constructor(t){super(),V(this,t)}setModel(t){console.trace("Please note that View.setModel(model) has no implementation.")}getModelId(){if(!this.hasAttribute("model"))throw Error("no 'model' attribute");let t=this.getAttribute("model");if(!t)throw Error("no model id");return"M:"+t}getActionId(){if(!this.hasAttribute("action"))throw Error("no 'action' attribute");let t=this.getAttribute("action");if(!t)throw Error("no action id");return"A:"+t}connectedCallback(){if(this.controller)return;let t="";try{t=this.getModelId()}catch(t){}""!=t&&kt.registerView(t,this)}disconnectedCallback(){this.controller&&this.controller.unregisterView(this)}}class Et extends Tt{constructor(t){super(t),this.model=void 0,void 0!==t?.model&&this.setModel(t.model)}updateModel(){}updateView(t){}setModel(t){if(t===this.model)return;const e=this;this.model&&this.model.modified.remove(e),t&&t.modified.add((t=>e.updateView(t)),e),this.model=t,this.isConnected&&this.updateView(rt.ALL)}connectedCallback(){super.connectedCallback(),this.model&&this.updateView(rt.ALL)}}class Mt extends Et{constructor(t){super(t)}connectedCallback(){if(this.controller)this.updateView(rt.ALL);else{try{kt.registerView(this.getActionId(),this)}catch(t){}try{kt.registerView(this.getModelId(),this)}catch(t){}this.updateView(rt.ALL)}}disconnectedCallback(){super.disconnectedCallback(),this.controller&&this.controller.unregisterView(this)}setModel(t){if(void 0===t)return this.model&&this.model.modified.remove(this),this.action&&this.action.modified.remove(this),this.model=void 0,this.action=void 0,void this.updateView(rt.ALL);if(t instanceof wt)this.action=t,this.action.modified.add((()=>{this.updateView(rt.ALL)}),this);else{if(!(t instanceof xt))throw"object"==typeof t?Error(`unexpected model of type ${t.constructor.name}`):Error("unexpected model of type "+typeof t);this.model=t,this.model.modified.add((()=>{this.updateView(rt.ALL)}),this)}this.updateView(rt.ALL)}setAction(t){t instanceof Function?this.setModel(new wt(t)):this.setModel(t)}isEnabled(){return void 0!==this.action&&this.action.enabled}}const Rt=new CSSStyleSheet;Rt.replaceSync(U`
:host {
    display: inline-block;
}

.tx-text {
    width: 100%;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--tx-edit-fg-color);
    background-color: var(--tx-edit-bg-color);

    /* we use the border instead of an outline to indicate the focus */
    outline: none;
    border-width: var(--tx-border-width);
    border-style: solid;
    border-color: var(--tx-border-color);
    border-radius: var(--tx-border-radius);

    font-weight: var(--tx-edit-font-weight);
    font-size: var(--tx-edit-font-size);
    line-height: 18px;

    padding: 4px 8px 4px 8px;
    text-indent: 0;
    vertical-align: top;
    margin: 0;
    overflow: visible;
    text-overflow: ellipsis;
}
.tx-text:hover {
    border-color: var(--tx-border-color-hover);
}
.tx-text:disabled {
    color: var(--tx-fg-color-disabled);
    background-color: var(--tx-bg-color-disabled);
    border-color: var(--tx-bg-color-disabled);
}
.tx-text::placeholder {
    color: var(--tx-placeholder-fg-color);
    font-style: italic;
    font-weight: 300;
}
.tx-text:hover::placeholder {
    color: var(--tx-placeholder-fg-color-hover);
}
.tx-text:focus {
    border-color: var(--tx-outline-color);
}
.tx-text.tx-error {
    border-color: var(--tx-warning-color)
}
`);class Lt extends Et{constructor(t){super(t),this.input=document.createElement("input"),this.input.classList.add("tx-text"),this.input.onkeydown=t=>{"Enter"===t.key&&this.model instanceof vt&&this.updateModel()},this.input.onblur=t=>{this.model instanceof vt&&this.updateModel()},this.input.oninput=t=>{this.model instanceof vt||this.updateModel()},this.wheel=this.wheel.bind(this),this.input.onwheel=this.wheel,this.input.ondblclick=()=>{this.model?.resetToDefault()},this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[Rt],this.shadowRoot.appendChild(this.input),this.updateView()}wheel(t){this.model instanceof vt&&(t.preventDefault(),t.deltaY>0&&this.model.decrement(),t.deltaY<0&&this.model.increment())}focus(){this.input.focus()}blur(){this.input.blur()}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,i){if("value"===t)this.model&&void 0!==i&&(this.model.value=i)}updateModel(){this.model&&(this.model.value=this.input.value),this.setAttribute("value",this.input.value)}updateView(){if(!this.model)return this.setAttribute("disabled","disabled"),void this.input.setAttribute("disabled","disabled");this.model.enabled?this.removeAttribute("disabled"):this.setAttribute("disabled","disabled"),this.model.applyStyle(this.input);const t=`${this.model.value}`;this.input.value!==t&&(this.input.value=t,this.setAttribute("value",t))}get value(){return this.input.value}set value(t){this.input.value=t,this.updateModel()}}Lt.define("tx-text",Lt);const Dt=new CSSStyleSheet;Dt.replaceSync(U`

/* try to follow material ui: when active render button labels in black, otherwise in gray */
svg .fill {
  fill: var(--tx-gray-700);
  stroke: var(--tx-gray-700);
}
svg .stroke {
  fill: none;
  stroke: var(--tx-gray-700);
}
svg .strokeFill {
  fill: var(--tx-gray-200);
  stroke: var(--tx-gray-700);
}

/*
these don't seem to be in use anymore
.toolbar.active svg .fill {
  fill: #000;
  stroke: #000;
}
.toolbar.active svg .stroke {
  fill: none;
  stroke: #000;
}
.toolbar.active svg .strokeFill {
  fill: #fff;
  stroke: #000;
}
*/

.toolbar button {
    background: var(--tx-gray-75);
    color: var(--tx-gray-800);
    border: 1px var(--tx-gray-400);
    border-style: solid solid solid none;
    padding: 5;
    margin: 0;
    vertical-align: middle;
    height: 22px;
}

.toolbar button:active:hover {
    background: linear-gradient(to bottom, var(--tx-gray-600) 0%,var(--tx-gray-50) 100%,var(--tx-gray-500) 100%);
}

.toolbar button.left {
    border-style: solid;
    border-radius: 3px 0 0 3px;
}

.toolbar button.right {
    border: 1px var(--tx-gray-400);
    border-style: solid solid solid none;
    border-radius: 0 3px 3px 0;
}

.toolbar button.active {
    background: linear-gradient(to bottom, var(--tx-gray-600) 0%,var(--tx-gray-50) 100%,var(--tx-gray-500) 100%);
    border: 1px var(--tx-global-blue-500) solid;
    color: var(--tx-gray-900);
}

div.textarea {
  font-family: var(--tx-font-family);
  font-size: var(--tx-font-size);
  border: 1px var(--tx-gray-400) solid;
  border-radius: 3px;
  margin: 2px;
  padding: 4px 5px;
  outline-offset: -2px;
}

div.textarea h1 {
  font-size: 22px;
  margin: 0;
  padding: 4px 0 4px 0;
}

div.textarea h2 {
  font-size: 18px;
  margin: 0;
  padding: 4px 0 4px 0;
}

div.textarea h3 {
  font-size: 16px;
  margin: 0;
  padding: 4px 0 4px 0;
}

div.textarea h4 {
  font-size: 14px;
  margin: 0;
  padding: 4px 0 4px 0;
}

div.textarea div {
  padding: 2px 0 2px 0;
}
`);class It extends Et{constructor(){super(),It.texttool=this;let t=P("div",{class:"toolbar"});this.buttonH1=P("button",{class:"left",children:"H1"}),this.buttonH1.onclick=()=>{document.execCommand("formatBlock",!1,"<h1>"),this.update()},t.appendChild(this.buttonH1),this.buttonH2=P("button",{children:"H2"}),this.buttonH2.onclick=()=>{document.execCommand("formatBlock",!1,"<h2>"),this.update()},t.appendChild(this.buttonH2),this.buttonH3=P("button",{children:"H3"}),this.buttonH3.onclick=()=>{document.execCommand("formatBlock",!1,"<h3>"),this.update()},t.appendChild(this.buttonH3),this.buttonH4=P("button",{class:"right",children:"H4"}),this.buttonH4.onclick=()=>{document.execCommand("formatBlock",!1,"<h4>"),this.update()},t.appendChild(this.buttonH4),t.appendChild(document.createTextNode(" ")),this.buttonBold=P("button",{class:"left",children:P("b",{children:"B"})}),this.buttonBold.onclick=()=>{document.execCommand("bold",!1),this.update()},t.appendChild(this.buttonBold),this.buttonItalic=P("button",{children:P("i",{children:"I"})}),this.buttonItalic.onclick=()=>{document.execCommand("italic",!1),this.update()},t.appendChild(this.buttonItalic),this.buttonUnderline=P("button",{children:P("u",{children:"U"})}),this.buttonUnderline.onclick=()=>{document.execCommand("underline",!1),this.update()},t.appendChild(this.buttonUnderline),this.buttonStrikeThrough=P("button",{children:P("strike",{children:"S"})}),this.buttonStrikeThrough.onclick=()=>{document.execCommand("strikeThrough",!1),this.update()},t.appendChild(this.buttonStrikeThrough),this.buttonSubscript=P("button",{children:"x₂"}),this.buttonSubscript.onclick=()=>{document.execCommand("subscript",!1),this.update()},t.appendChild(this.buttonSubscript),this.buttonSuperscript=P("button",{class:"right",children:"x²"}),this.buttonSuperscript.onclick=()=>{document.execCommand("superscript",!1),this.update()},t.appendChild(this.buttonSuperscript),t.appendChild(document.createTextNode(" ")),this.buttonJustifyLeft=P("button",{class:"left",children:O("svg",{viewBox:"0 0 10 9",width:"10",height:"9",children:[P("line",{x1:"0",y1:"0.5",x2:"10",y2:"0.5",class:"stroke"}),P("line",{x1:"0",y1:"2.5",x2:"6",y2:"2.5",class:"stroke"}),P("line",{x1:"0",y1:"4.5",x2:"10",y2:"4.5",class:"stroke"}),P("line",{x1:"0",y1:"6.5",x2:"6",y2:"6.5",class:"stroke"}),P("line",{x1:"0",y1:"8.5",x2:"10",y2:"8.5",class:"stroke"})]})}),this.buttonJustifyLeft.onclick=()=>{document.execCommand("justifyLeft",!1),this.update()},t.appendChild(this.buttonJustifyLeft),this.buttonJustifyCenter=P("button",{children:O("svg",{viewBox:"0 0 10 9",width:"10",height:"9",children:[P("line",{x1:"0",y1:"0.5",x2:"10",y2:"0.5",class:"stroke"}),P("line",{x1:"2",y1:"2.5",x2:"8",y2:"2.5",class:"stroke"}),P("line",{x1:"0",y1:"4.5",x2:"10",y2:"4.5",class:"stroke"}),P("line",{x1:"2",y1:"6.5",x2:"8",y2:"6.5",class:"stroke"}),P("line",{x1:"0",y1:"8.5",x2:"10",y2:"8.5",class:"stroke"})]})}),this.buttonJustifyCenter.onclick=()=>{document.execCommand("justifyCenter",!1),this.update()},t.appendChild(this.buttonJustifyCenter),this.buttonJustifyRight=P("button",{class:"right",children:O("svg",{viewBox:"0 0 10 9",width:"10",height:"9",children:[P("line",{x1:"0",y1:"0.5",x2:"10",y2:"0.5",class:"stroke"}),P("line",{x1:"4",y1:"2.5",x2:"10",y2:"2.5",class:"stroke"}),P("line",{x1:"0",y1:"4.5",x2:"10",y2:"4.5",class:"stroke"}),P("line",{x1:"4",y1:"6.5",x2:"10",y2:"6.5",class:"stroke"}),P("line",{x1:"0",y1:"8.5",x2:"10",y2:"8.5",class:"stroke"})]})}),this.buttonJustifyRight.onclick=()=>{document.execCommand("justifyRight",!1),this.update()},t.appendChild(this.buttonJustifyRight),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Dt],this.shadowRoot.appendChild(t)}update(){this.buttonH1.classList.toggle("active","h1"===document.queryCommandValue("formatBlock")),this.buttonH2.classList.toggle("active","h2"===document.queryCommandValue("formatBlock")),this.buttonH3.classList.toggle("active","h3"===document.queryCommandValue("formatBlock")),this.buttonH4.classList.toggle("active","h4"===document.queryCommandValue("formatBlock")),this.buttonBold.classList.toggle("active",document.queryCommandState("bold")),this.buttonItalic.classList.toggle("active",document.queryCommandState("italic")),this.buttonUnderline.classList.toggle("active",document.queryCommandState("underline")),this.buttonStrikeThrough.classList.toggle("active",document.queryCommandState("strikeThrough")),this.buttonSubscript.classList.toggle("active",document.queryCommandState("subscript")),this.buttonSuperscript.classList.toggle("active",document.queryCommandState("superscript")),this.buttonJustifyLeft.classList.toggle("active",document.queryCommandState("justifyLeft")),this.buttonJustifyCenter.classList.toggle("active",document.queryCommandState("justifyCenter")),this.buttonJustifyRight.classList.toggle("active",document.queryCommandState("justifyRight"))}}It.define("tx-texttool",It);class Bt extends Et{constructor(t){super(t);let e=document.createElement("div");this.content=e,e.classList.add("tx-text"),e.contentEditable="true",e.oninput=t=>{if(this.model instanceof yt){let i=t.target.firstChild;i&&3===i.nodeType?document.execCommand("formatBlock",!1,"<div>"):"<br>"===e.innerHTML&&(e.innerHTML="")}this.updateModel()},e.onkeydown=t=>{this.model instanceof yt&&(!0===t.metaKey&&"b"===t.key?(t.preventDefault(),document.execCommand("bold",!1),this.updateTextTool()):!0===t.metaKey&&"i"===t.key?(t.preventDefault(),document.execCommand("italic",!1),this.updateTextTool()):!0===t.metaKey&&"u"===t.key?(t.preventDefault(),document.execCommand("underline",!1),this.updateTextTool()):"Tab"===t.key?t.preventDefault():"Enter"===t.key&&!0!==t.shiftKey&&"blockquote"===document.queryCommandValue("formatBlock")&&document.execCommand("formatBlock",!1,"<p>"))},e.onkeyup=()=>{this.updateTextTool()},e.onmouseup=()=>{this.updateTextTool()},this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Rt],this.shadowRoot.appendChild(e)}updateTextTool(){void 0!==It.texttool&&It.texttool.update()}updateModel(){this.model&&(this.model.promise=()=>this.model instanceof yt?this.content.innerHTML:this.content.innerText)}updateView(){this.model&&(this.model instanceof yt?this.content.innerHTML!==this.model.value&&(this.content.innerHTML=this.model.value):this.content.innerText!==this.model.value&&(this.content.innerText=this.model.value))}}Bt.define("tx-textarea",Bt);class Ft extends Et{constructor(t){super(t)}updateView(){void 0!==this.model?this.model instanceof xt?this.innerText=this.model.value:this.model instanceof yt?this.innerHTML=this.model.value:this.model instanceof vt&&(this.innerText=`${this.model.value}`):this.innerText=""}}Ft.define("tx-display",Ft);const Nt=new CSSStyleSheet;var $t;Nt.replaceSync(U`
.tx-button {
    padding: 2px 14px 2px 14px;
    margin: 0;
    color: var(--tx-gray-800);
    transition: background-color 130ms ease-in-out;
    background-color: var(--tx-gray-300);
    border: 0 none;
    height: 28px;
    border-radius: 16px;
    box-shadow: none;
    font-family: inherit;
}

.tx-button:hover, .tx-button:active {
    color: var(--tx-gray-900);
    background-color: var(--tx-gray-400);
}

.tx-button:hover:active > span {
    transition: transform 130ms ease-in-out;
}
:host > .tx-button:hover:active {
    transform: translate(1px, 1px);
}
:host([disabled]) > .tx-button:hover:active {
    transform: translate(0px, 0px);
}

/* accent */

.tx-button.tx-accent {
    color: var(--tx-static-white);
    background-color: var(--tx-static-blue-600);
}
.tx-button.tx-accent:hover, .tx-button.tx-accent:active {
    color: var(--tx-static-white);
    background-color: var(--tx-static-blue-700);
}
.tx-button.tx-accent:hover:active {
    color: var(--tx-static-white);
    background-color: var(--tx-static-blue-500);
}

/* negative */

.tx-button.tx-negative {
    color: var(--tx-static-white);
    background-color: var(--tx-static-red-600);
}
.tx-button.tx-negative:hover, .tx-button.tx-negative:active {
    color: var(--tx-static-white);
    background-color: var(--tx-static-red-700);
}
.tx-button.tx-negative:hover:active {
    color: var(--tx-static-white);
    background-color: var(--tx-static-red-500);
}

/* primary */

.tx-button.tx-default {
    color: var(--tx-gray-50);
    background-color: var(--tx-gray-800);
}

.tx-button.tx-default:hover, .tx-button.tx-default:hover:active {
    color: var(--tx-gray-50);
    background-color: var(--tx-gray-900);
}

.tx-button.tx-default:active {
    color: var(--tx-gray-50);
    background-color: var(--tx-gray-900);
}

.tx-label {
    font-weight: bold;
    padding: 4px 0 6px 0;
    /* override parent flex/grid's align-items property to align in the center */
    align-self: center;
    /* adjust sides in container to look centered...? */
    justify-self: center;
    /* align children in the center */
    text-align: center;
}

:host([disabled]) > .tx-button, :host([disabled]) > .tx-button:active {
    color: var(--tx-fg-color-disabled);
    background-color: var(--tx-gray-200);
}
`),function(t){t[t.PRIMARY=0]="PRIMARY",t[t.SECONDARY=1]="SECONDARY",t[t.ACCENT=2]="ACCENT",t[t.NEGATIVE=3]="NEGATIVE"}($t||($t={}));class zt extends Mt{constructor(t){switch(super(t),this.button=Z(this.label=X()),this.button.classList.add("tx-button"),this.label.classList.add("tx-label"),this.button.onclick=()=>{this.action&&this.action.trigger()},this.getAttribute("variant")){case"primary":this.button.classList.add("tx-default");break;case"secondary":break;case"accent":this.button.classList.add("tx-accent");break;case"negative":this.button.classList.add("tx-negative")}switch(t?.variant){case $t.PRIMARY:this.button.classList.add("tx-default");break;case $t.SECONDARY:break;case $t.ACCENT:this.button.classList.add("tx-accent");break;case $t.NEGATIVE:this.button.classList.add("tx-negative")}this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Nt],this.shadowRoot.appendChild(this.button)}connectedCallback(){super.connectedCallback(),0===this.children.length&&(this._observer=new MutationObserver(((t,e)=>{void 0!==this._timer&&clearTimeout(this._timer),this._timer=window.setTimeout((()=>{this._timer=void 0,this.updateView()}),100)})),this._observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}updateView(){this.isConnected&&(this.model&&this.model.value?this.model instanceof yt?this.label.innerHTML=this.model.value:this.label.innerText=this.model.value:this.label.innerHTML=this.innerHTML,this.isEnabled()?this.removeAttribute("disabled"):this.setAttribute("disabled","disabled"))}}zt.define("tx-button",zt);class Pt extends Et{setModel(t){if(void 0!==t&&!(t instanceof ct))throw Error("BooleanView.setModel(): model is not of type BooleanModel");super.setModel(t)}updateModel(){this.model&&(this.model.value=this.input.checked)}updateView(){this.model&&this.model.enabled?this.input.removeAttribute("disabled"):this.input.setAttribute("disabled",""),this.model&&(this.input.checked=this.model.value)}}const Ot=new CSSStyleSheet;Ot.replaceSync(U`
:host(.tx-checkbox) {
    display: inline-block;
    position: relative;
    box-shadow: none;
    box-sizing: border-box;
    padding: 0;
    margin: 2px; /* leave space for the focus ring */
    border: none 0;
    height: 14px;
    width: 14px;
}

:host(.tx-checkbox) > input {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    border: 2px solid;
    border-radius: 2px;
    border-color: var(--tx-gray-700);
    /* border-radius: var(--tx-border-radius); */
    color: var(--tx-edit-fg-color);
    background-color: var(--tx-edit-bg-color);
    -webkit-appearance: none;
}

/* this is a svg 2 feature, works with firefox, chrome and edge, but not safari */
/* :host(.tx-checkbox) > svg > path {
    d: path("M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z");
} */

/* focus ring */
:host(.tx-checkbox) > input:focus-visible {
    outline: 2px solid;
    outline-color: var(--tx-outline-color);
    outline-offset: 2px;
}

:host(.tx-checkbox) > svg {
    position: absolute;
    left: 2px;
    top: 2px;
    stroke: none;
    fill: var(--tx-edit-bg-color);
    width: 10px;
    height: 10px;
    pointer-events: none;
}

:host(.tx-checkbox) > input:hover {
    border-color: var(--tx-gray-800);
}
.tx-checkbox > input:focus {
    border-color: var(--tx-outline-color);
}

:host(.tx-checkbox) > input:checked {
    background-color: var(--tx-gray-700);
}
:host(.tx-checkbox) > input:hover:checked {
    background-color: var(--tx-gray-800);
}

:host(.tx-checkbox) > input:disabled {
    color: var(--tx-gray-400);
    border-color: var(--tx-gray-400);
}
:host(.tx-checkbox) > input:checked:disabled {
    background-color: var(--tx-gray-400);
}
`);class Vt extends Pt{constructor(t){super(t),this.classList.add("tx-checkbox"),this.input=q(),this.input.type="checkbox",this.updateModel=this.updateModel.bind(this),this.input.onchange=this.updateModel;const e=et(it("M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"));this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[Ot],this.shadowRoot.replaceChildren(this.input,e)}}Vt.define("tx-checkbox",Vt);const Wt=new CSSStyleSheet;Wt.replaceSync(U`
.tx-search {
    display: inline-block;
    position: relative;
}
.tx-search > div {
    display: inline-flex;
    position: relative;
}
.tx-search > div > svg {
    display: block;
    position: absolute;
    height: 18px;
    width: 18px;
    top: 7px;
    left: 10px;
    pointer-events: none;
    overflow: hidden;
    fill: var(--tx-gray-700);
}
.tx-search > div > input {
    box-sizing: border-box;
    padding: 3px 12px 5px 35px;
    margin: 0;
    border: 1px solid var(--tx-gray-400);
    border-radius: 4px;
    -webkit-appearance: none;
    outline-offset: -2px;
    outline: none;
    width: 100%;
    height: 32px;
    overflow: visible;
    background: var(--tx-gray-50);

    color: var(--tx-gray-900);  
    font-weight: var(--tx-edit-font-weight);
    font-size: var(--tx-edit-font-size);
    line-height: 18px;
}
/* the button is transparent so that the border of the input field remains visible */
.tx-search > button {
    display: inline-flex;
    position: absolute;
    box-sizing: border-box;
    right: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    padding: 0;
    margin: 1px;
    border: none;
    align-items: center;
    justify-content: center;
    overflow: visible;
    vertical-align: top;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    text-align: center;
    outline: none;

    background-color: var(--tx-gray-50);
    border-radius: 0 4px 4px 0;

}
.tx-search > button > svg {
    display: inline-block;
    pointer-events: none;
    height: 10px;
    width: 10px;
    padding: 0;
    margin: 0;
    border: none;
    fill: var(--tx-gray-700);
}
.tx-search > div > input:hover {
    border-color: var(--tx-gray-500);
}

.tx-search > div > input:focus {
    border-color: var(--tx-outline-color);
}
.tx-search > button:focus > svg {
    fill: var(--tx-outline-color);
}

.tx-search > div > input:disabled {
    color: var(--tx-gray-700);
    background-color: var(--tx-gray-200);
    border-color: var(--tx-gray-200);
}
.tx-search > button:disabled {
    background-color: var(--tx-gray-200);
}
.tx-search > button:disabled > svg {
    fill: var(--tx-gray-400);
}`);class Ut extends Et{constructor(t){let e,i,s,o;super(t);const r=((...t)=>j("form",t))(Y(e=et(o=it("M33.173 30.215L25.4 22.443a12.826 12.826 0 10-2.957 2.957l7.772 7.772a2.1 2.1 0 002.958-2.958zM6 15a9 9 0 119 9 9 9 0 01-9-9z")),s=q()),Z(i=et(it("M6.548 5L9.63 1.917A1.094 1.094 0 008.084.371L5.001 3.454 1.917.37A1.094 1.094 0 00.371 1.917L3.454 5 .37 8.085A1.094 1.094 0 101.917 9.63l3.084-3.083L8.084 9.63a1.094 1.094 0 101.547-1.546z"))));e.setAttributeNS(null,"width","100%"),e.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"transform","scale(0.5, 0.5)"),i.setAttributeNS(null,"width","100%"),i.setAttributeNS(null,"height","100%"),s.type="search",s.placeholder="Search",s.autocomplete="off",r.classList.add("tx-search"),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Wt],this.shadowRoot.appendChild(r)}}Ut.define("tx-search",Ut);const jt=new CSSStyleSheet;jt.replaceSync(U`
/* a div on top serves as the container for elements used for the switch*/
:host(.tx-switch) {
    display: inline-flex;
    align-items: flex-start;
    position: relative;
    vertical-align: top;
}
/* an invisible checkbox will overlay everything, handling input and state */
:host(.tx-switch) > input {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: absolute;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 1;
}
/* the span provides the visual appearance */
:host(.tx-switch) > span {
    display: block;
    position: relative;
    left: 0;
    top: 0;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;

    border: 0px none;
    border-radius: 7px;

    width: 26px;
    height: 14px;
    background: var(--tx-gray-300);
}

/* focus ring */
:host(.tx-switch) > input:focus-visible + span {
    outline: 2px solid;
    outline-color: var(--tx-outline-color);
    outline-offset: 2px;
}

/* this is the knob on the switch */
:host(.tx-switch) > span:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;
    background: var(--tx-gray-75);
    border: 2px solid var(--tx-gray-700);
    border-radius: 7px;
    content: "";
    box-sizing: border-box;

    /* 'transform' usually can be GPU acclerated while 'left' can not */
    transition: transform 130ms ease-in-out;
}
:host(.tx-switch) > input:hover + span:before {
    border-color: var(--tx-gray-900);
}

:host(.tx-switch) > input:checked + span:before {
    /* border-color: var(--tx-gray-700); */
    transform: translateX(calc(100% - 2px));
}

:host(.tx-switch) > input:checked + span {
    background: var(--tx-gray-700);
}
:host(.tx-switch) > input:checked:hover + span {
    background: var(--tx-gray-900);
}
:host(.tx-switch) > input:hover + span + label {
    color: var(--tx-gray-900);
}

:host(.tx-switch) > input:checked:disabled + span {
    background: var(--tx-gray-400);
}
:host(.tx-switch) > input:disabled + span:before {
    border-color: var(--tx-gray-400);
}
:host(.tx-switch) > input:disabled + span + label {
    color: var(--tx-gray-400);
}`);class Gt extends Pt{constructor(t){super(t),this.classList.add("tx-switch"),this.input=q(),this.input.type="checkbox",this.input.onchange=()=>{this.updateModel()},this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[jt],this.shadowRoot.appendChild(this.input),this.shadowRoot.appendChild(X())}}Gt.define("tx-switch",Gt);const Yt=new CSSStyleSheet;Yt.replaceSync(U`
:host(.tx-radio) {
    display: inline-flex;
    align-items: flex-start;
    position: relative;
    vertical-align: top;
    padding: 2px;
}
/* an invisible radiobutton will overlay everything, handling input and state */
:host(.tx-radio) > input {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: absolute;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 1;
}

/* the span provides the visual appearance */
:host(.tx-radio) > span {
    display: block;
    position: relative;
    left: 0;
    top: 2px;
    margin-right: 3px;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;

    border: 2px solid var(--tx-gray-700);
    border-radius: 7px;

    width: 14px;
    height: 14px;
    background: none;
}

/* focus ring */
:host(.tx-radio) > input:focus-visible + span {
    outline: 2px solid;
    outline-color: var(--tx-outline-color);
    outline-offset: 2px;
}
/* this is the knob on the switch */
:host(.tx-radio) > span:before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 10px;
    height: 10px;
    background: var(--tx-gray-75);
    border: 2px solid var(--tx-gray-75);
    border-radius: 7px;
    content: "";
    box-sizing: border-box;

    /* 'transform' usually can be GPU acclerated while 'left' can not */
    transition: opacity 130ms ease-in-out;
}
:host(.tx-radio) > input:checked + span:before {
    background: var(--tx-gray-700);
}
:host(.tx-radio) > input:checked:hover + span:before {
    background: var(--tx-gray-900);
}
:host(.tx-radio) > input:hover + span {
    border-color: var(--tx-gray-900);
}

:host(.tx-radio) > input:checked:disabled + span:before {
    background: var(--tx-gray-500);
}
:host(.tx-radio) > input:disabled + span {
    border-color: var(--tx-gray-500);
}
:host(.tx-radio) > input:disabled + span + label {
    color: var(--tx-gray-500);
}
`);class Xt extends Et{constructor(t){super(t),this.value=t?.value,this.updateModel=this.updateModel.bind(this),this.updateView=this.updateView.bind(this),this.classList.add("tx-radio"),this.input=q(),this.input.type="radio",this.input.onchange=this.updateModel,this.input.disabled=!0,this.label=((...t)=>j("label",t))(),this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[Yt],this.shadowRoot.replaceChildren(this.input,X(),this.label)}updateModel(){this.input.checked&&void 0!==this.model&&(this.model.value=this.value)}updateView(){if(void 0!==this.model){let t=Xt.radioGroups.get(this.model);void 0===t&&(t=++Xt.radioGroupCounter,Xt.radioGroups.set(this.model,t)),this.input.name=`tx-radio-group-${t}`,this.input.value=`${this.model.indexOf(this.value)}`,this.childNodes.length>0?this.label.replaceChildren(J()):this.label.replaceChildren(this.model.labelOf(this.value))}else this.input.name="";this.model&&this.model.enabled&&this.model.isEnabledOf(this.value)?this.input.removeAttribute("disabled"):this.input.setAttribute("disabled",""),this.model&&(this.input.checked=this.model.value===this.value)}}var Jt;Xt.radioGroupCounter=0,Xt.radioGroups=new WeakMap,Xt.define("tx-radio",Xt),function(t){t[t.WAIT=0]="WAIT",t[t.DOWN=1]="DOWN",t[t.UP_N_HOLD=2]="UP_N_HOLD",t[t.DOWN_N_HOLD=3]="DOWN_N_HOLD",t[t.DOWN_N_OUTSIDE=4]="DOWN_N_OUTSIDE",t[t.DOWN_N_INSIDE_AGAIN=5]="DOWN_N_INSIDE_AGAIN"}(Jt||(Jt={}));class qt extends Tt{constructor(t){super(t),this.vertical=!0,this.closeOnClose=!1,this.state=Jt.WAIT}}class Zt extends qt{constructor(t,e){super(),this.vertical=!0,this.root=t,this.parentButton=e,this.popup=document.createElement("div"),this.popup.classList.add("menu-popup");let i=t.down;for(;i;)i.isAvailable()?i.createWindowAt(this,this.popup):i.deleteWindow(),i=i.next;this.appendChild(this.popup),this.show()}show(){this.parentButton.master.vertical?function(t,e){let i=t.getBoundingClientRect();e.style.opacity="0",e.style.left=i.left+i.width+"px",e.style.top=i.top+"px",setTimeout((function(){let t=e.getBoundingClientRect();i.top+t.height>window.innerHeight&&(e.style.top=i.top+i.height-t.height+"px"),i.left+i.width+t.width>window.innerWidth&&(e.style.left=i.left-t.width+"px"),e.style.opacity="1"}),0)}(this.parentButton,this.popup):Kt(this.parentButton,this.popup),this.style.display=""}hide(){this.style.display="none"}}function Kt(t,e){let i=t.getBoundingClientRect();e.style.opacity="0",e.style.left=i.left+"px",e.style.top=i.top+i.height+"px",setTimeout((function(){let t=e.getBoundingClientRect(),s=i.top+i.height+t.height;if(s>window.innerHeight){const o=i.top-t.height;(o>0||-o<s-window.innerHeight)&&(e.style.top=`${o}px`)}i.left+t.width>window.innerWidth&&(e.style.left=i.left+i.width-t.width+"px"),e.style.opacity="1"}),0)}Tt.define("tx-popupmenu",Zt);const Qt=new CSSStyleSheet;Qt.replaceSync(U`
:host(.tx-combobox) {
    display: inline-flex;
    align-items: flex-start;
    position: relative;
    vertical-align: top;
}
:host(.tx-combobox) > :first-child {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    line-height: 30px; /* center text vertically */
    overflow: hidden; /* children shall not overlap our border */
    margin: 0;
    padding: 0;
    vertical-align: top;
    text-align: left;
    outline: none;
    display: inline-block;
    border: 1px solid var(--tx-gray-400);
    border-radius: 4px;
    background-color: var(--tx-gray-50);
    
    color: var(--tx-gray-900);  
    font-weight: var(--tx-edit-font-weight);
    font-size: var(--tx-edit-font-size);
}
:host(.tx-combobox) > input:first-child {
    padding: 4px 32px 4px 11px;
}
:host(.tx-combobox) > :first-child > :first-child {
    padding-left: 7px;
}
:host(.tx-combobox) > :first-child::placeholder {
    color: var(--tx-placeholder-fg-color);
    font-style: italic;
    font-weight: 300;
}
:host(.tx-combobox) > button {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    box-sizing: border-box;
    overflow: visible;
    margin: 0;
    text-transform: none;

    width: 32px;
    height: 32px;
    background-color: var(--tx-gray-75);
    border-radius: 0 4px 4px 0;
    border: 1px solid var(--tx-gray-400);
}
:host(.tx-combobox) > button > svg {
    fill: var(--tx-gray-700);
    transform: rotate(90deg) translate(5px, 8px);
}

:host(.tx-combobox) > :first-child:hover {
    border-color: var(--tx-gray-500);
}
:host(.tx-combobox) > button:hover {
    border-color: var(--tx-gray-500);
    background-color: var(--tx-gray-50);
}
:host(.tx-combobox) > button:hover > svg {
    fill: var(--tx-gray-900);
}

:host(.tx-combobox) > :first-child:focus {
    border-color: var(--tx-outline-color);
}
:host(.tx-combobox) > :first-child:focus + button {
    border-color: var(--tx-outline-color);
}
/* spectrum use a 1px focus ring when the focus was set by mouse
 * and a 2px focus ring when the focus was set by keyboard
 * no clue how to do that with css
 *
/* :host(.tx-combobox) > input:focus-visible {
    outline: 1px solid var(--tx-outline-color);
}
:host(.tx-combobox) > input:focus-visible + button {
    outline: 1px solid var(--tx-outline-color);
    border-left: none;
} */

:host(.tx-combobox) > :first-child.tx-disabled {
    color: var(--tx-gray-700);
    background-color: var(--tx-gray-200);
    border-color: var(--tx-gray-200);
}
:host(.tx-combobox) > :first-child.tx-disabled > * {
    color: var(--tx-gray-500);
    background-color: var(--tx-gray-200);
    border-color: var(--tx-gray-200);
}
:host(.tx-combobox) > :first-child.tx-disabled + button {
    background-color: var(--tx-gray-200);
    border-color: var(--tx-gray-200);
}
:host(.tx-combobox) > :first-child.tx-disabled + button > svg {
    fill: var(--tx-gray-400);
}
:host(.tx-combobox) > :first-child.tx-error {
    color: var(--tx-warning-color);
    border-color: var(--tx-warning-color)
}
:host(.tx-combobox) > :first-child.tx-error + button {
    border-color: var(--tx-warning-color)
}
`);const te=new CSSStyleSheet;te.replaceSync(U`
.tx-popover {
    background-color: var(--tx-gray-50);
    border: 1px solid var(--tx-gray-400);
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 1px 4px);
}
.tx-menu {
    display: inline-block;
    padding: 0;
    margin: 2px 0 2px 0;
}
.tx-menu > li {
    cursor: pointer;
    display: flex;
    border: none;
    border-left: 2px solid var(--tx-gray-50);
    margin-right: 2px;
    padding: 0;
    margin: 0;
    font-weight: 500;
    outline: none;
}
.tx-menu > li:first-child {
    border-top-right-radius: 4px;
    overflow: hidden;
}
.tx-menu > li:last-child {
    border-bottom-right-radius: 4px;
    overflow: hidden;
}
.tx-menu > li > :first-child {
    padding: 7px 11px 7px 10px;
}
.tx-menu > li:hover {
    background-color: var(--tx-gray-100);
    border-color: var(--tx-gray-100);
}
.tx-menu > li.tx-hover {
    filter: brightness(1.2);
    backdrop-filter: brightness(1.2);
    border-color: var(--tx-gray-100);
}
.tx-menu > li:focus {
    border-left-color: var(--tx-outline-color);
}
.tx-menu > li[role=separator] {
    display: block;
    box-sizing: content-box;
    overflow: visible;
    cursor: default;
    height: 2px;
    padding: 0px;
    margin: 1.5px 7px 1.5px 7px;
    background-color: var(--tx-gray-100);
    white-space: pre;
    list-style-type: none;
}
.tx-menu > li.tx-disabled {
    color: var(--tx-gray-500);
}
.tx-menu > li.tx-disabled:hover {
    background-color: var(--tx-gray-50);
}`);class ee extends Et{constructor(t){let e;super(t),this.pointerup=this.pointerup.bind(this),this.pointermove=this.pointermove.bind(this),this.pointerdown=this.pointerdown.bind(this),this.wheel=this.wheel.bind(this),this.keydown=this.keydown.bind(this);const i=Z(e=et(it("M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z")));this.button=i,i.tabIndex=-1,i.style.outline="none",e.style.width="100%",e.style.height="100%",i.onpointerdown=this.pointerdown,i.onpointermove=this.pointermove,i.onpointerup=this.pointerup,this.classList.add("tx-combobox"),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Qt,te]}finalize(){this.displayElement.onwheel=this.button.onwheel=this.wheel,this.shadowRoot.replaceChildren(this.displayElement,this.button)}keydown(t){if(t.preventDefault(),this.model)switch(t.key){case"ArrowUp":this.model.prev();break;case"ArrowDown":this.model.next();break;case"Enter":this.togglePopup();break;case"Escape":void 0!==this.popup&&this.close()}}wheel(t){t.preventDefault(),void 0!==this.model&&this.model.enabled&&(this.displayElement.focus(),t.deltaY>0&&this.model.next(),t.deltaY<0&&this.model.prev())}pointerdown(t){t.preventDefault(),void 0!==this.model&&this.model.enabled&&(this.popup?this.close():(this.displayElement.focus(),this.open(),this.button.setPointerCapture(t.pointerId)))}pointermove(t){if(void 0===this.popup)return;let e=this.findMenuItem(t);this.hover!==e&&(this.hover&&this.hover.classList.remove("tx-hover"),this.hover=e,this.hover&&this.hover.classList.add("tx-hover"))}findMenuItem(t){let e=this.shadowRoot.elementFromPoint(t.clientX,t.clientY);for(;e&&("LI"!==e.nodeName||!e.parentElement?.classList.contains("tx-menu")||!e.parentElement?.parentElement?.classList.contains("tx-popover"));)e=e?.parentElement;return e||void 0}pointerup(t){if(this.hover){const t=parseInt(this.hover.dataset.idx);return this.close(),void this.select(t)}const e=this.shadowRoot.elementFromPoint(t.clientX,t.clientY);this.displayElement.contains(e)||this.button.contains(e)||this.close()}togglePopup(){this.popup?this.close():this.open()}open(){this.popup=Y(),this.model&&this.popup.replaceChildren(P("ul",{class:"tx-menu","aria-roledescription":"listbox",children:this.model.map(((t,e,i)=>{const s=Q(this.model.asHtml(e));return s.tabIndex=0,s.ariaRoleDescription="option",s.dataset.idx=`${i}`,s.onpointerdown=t=>{this.button.setPointerCapture(t.pointerId),this.hover=s,t.preventDefault()},s.onkeydown=this.keydown,s}))})),this.popup.classList.add("tx-popover"),this.popup.style.position="fixed",this.popup.style.zIndex="99",this.shadowRoot.appendChild(this.popup),Kt(this,this.popup),this.focusToItem()}focusToItem(){if(this.popup&&this.model){void 0!==this.model.index&&this.popup.children[0].children[this.model.index].focus()}}close(){this.hover=void 0,void 0!==this.popup&&(this.shadowRoot.removeChild(this.popup),this.popup=void 0,this.displayElement.focus())}select(t){this.model&&(this.model.index=t)}updateView(){this.model&&this.model.enabled?(this.displayElement.classList.remove("tx-disabled"),this.displayElement.removeAttribute("disabled"),this.button.removeAttribute("disabled")):(this.displayElement.classList.add("tx-disabled"),this.displayElement.setAttribute("disabled",""),this.button.setAttribute("disabled","")),void 0!==this.model?.error?this.displayElement.classList.add("tx-error"):this.displayElement.classList.remove("tx-error")}}class ie extends ee{constructor(t){super(t),this.displayElement=Y(),this.displayElement.tabIndex=0,this.displayElement.style.minWidth="200px",this.displayElement.onpointerdown=this.pointerdown,this.displayElement.onkeydown=this.keydown,this.finalize()}updateView(){super.updateView(),void 0!==this.model&&this.displayElement.replaceChildren(this.model.html),this.focusToItem()}}class se extends ee{constructor(t){super(t),this.textModel=t?.text,this.displayElement=q(),this.displayElement.type="text",this.displayElement.onkeydown=t=>{"Enter"!==t.key&&void 0===this.popup||this.keydown(t)},this.displayElement.oninput=()=>{this.updateModel()},this.finalize()}close(){super.close(),void 0===this.popup&&this.displayElement.focus()}updateModel(){this.model&&("number"==typeof this.model.value?this.model.value=Number.parseFloat(this.displayElement.value):this.model.value=this.displayElement.value),this.textModel&&(this.textModel.value=this.displayElement.value)}updateView(){super.updateView(),void 0!==this.model&&(this.displayElement.value=`${this.model.value}`),this.focusToItem()}}ie.define("tx-select",ie),se.define("tx-combobox",se);const oe=new CSSStyleSheet;function re(t){let e,i,s,o,r;return e=(t=t.trim()).match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),null!==e?(i=parseInt(e[1],16),s=parseInt(e[2],16),o=parseInt(e[3],16),i=16*i+i,s=16*s+s,o=16*o+o,r=1,{r:i,g:s,b:o,a:r}):(e=t.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),null!==e?(i=parseInt(e[1],16),s=parseInt(e[2],16),o=parseInt(e[3],16),r=1,{r:i,g:s,b:o,a:r}):(e=t.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),null!==e?(i=parseInt(e[1]),s=parseInt(e[2]),o=parseInt(e[3]),r=1,{r:i,g:s,b:o,a:r}):(e=t.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),null!==e?(i=parseInt(e[1]),s=parseInt(e[2]),o=parseInt(e[3]),r=parseInt(e[4]),{r:i,g:s,b:o,a:r}):void 0)))}oe.replaceSync(U`
    :host {
        position: relative;
        box-sizing: content-box;
        display: inline-block;
    }

    :host(:not([orientation="vertical"])) {
        height: 4px;
        width: 100%;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    :host([orientation="vertical"]) {
        width: 4px;
        height: 100%;
        padding-left: 8px;
        padding-right: 8px;
    }

    .tx-space {
        position: absolute;
        box-sizing: content-box;
        padding: 0;
        margin: 0;
        border: 0;
    }

    :host(:not([orientation="vertical"])) .tx-space {
        left: 8px;
        right: 8px;
        top: 0;
        bottom: 0;
    }

    :host([orientation="vertical"]) .tx-space {
        left: 0;
        right: 0;
        top: 8px;
        bottom: 8px;
    }

    .tx-rail {
        background-color: var(--tx-gray-300);
        position: absolute;
        display: block;
        border-radius: 2px;
    }

    :host(:not([orientation="vertical"])) .tx-rail {
        top: 50%;
        width: 100%;
        height: 2px;
        transform: translateY(-50%);
    }

    :host([orientation="vertical"]) .tx-rail {
        left: 50%;
        height: 100%;
        width: 2px;
        transform: translateX(-50%);
    }

    :host([disabled]) .tx-rail {
        background-color: var(--tx-gray-100);
    }
    :host([disabled]) .tx-track {
        background-color: var(--tx-gray-100);
    }
    :host([disabled]) .tx-thumb {
        border-color: var(--tx-gray-500);
    }
    .tx-track {
        background-color: var(--tx-gray-700);
        position: absolute;
        display: block;
        border-radius: 2px;
    }

    :host(:not([orientation="vertical"])) .tx-track {  
        top: 50%;
        height: 2px;
        transform: translateY(-50%);
    }

    :host([orientation="vertical"]) .tx-track {  
        left: 50%;
        width: 2px;
        transform: translateX(-50%);
    }

    .tx-thumb {
        border: 2px solid var(--tx-gray-700); /* knob border */
        border-radius: 50%;
        background: var(--tx-gray-75); /* inside knob */
        cursor: pointer;
        position: absolute;
        display: flex;
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        outline-width: 0px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
    .tx-thumb:hover {
        border-color: var(--tx-gray-800)
    }

    :host(:not([orientation="vertical"])) .tx-thumb { 
        top: 50%;
    }
    :host([orientation="vertical"]) .tx-thumb { 
        left: 50%;
    }

    .tx-focus {
        outline: 2px solid;
        outline-color: var(--tx-outline-color);
        outline-offset: 1px;
    }

    .tx-thumb>input {
        border: 0;
        clip: rect(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        margin: -1px;
        /* this hides most of the slider and centers the thumb */
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        direction: ltr;
    }
`);class ne extends Et{constructor(t){let e,i,s,o,r;super(t),this.vertical=t?"vertical"===t.orientation:"vertical"===this.getAttribute("orientation"),e=Y(i=X(),s=X(),o=X(r=q())),e.classList.add("tx-space"),i.classList.add("tx-rail"),s.classList.add("tx-track"),o.classList.add("tx-thumb"),r.type="range",this.input=r,this.rail=i,this.track=s,this.thumb=o;const n=t?t.minColor:this.getAttribute("minColor"),a=t?t.maxColor:this.getAttribute("maxColor");let l;n&&(this.minColor=re(n)),a&&(this.maxColor=re(a)),this.setGradient(),this.updateView(),r.onfocus=()=>{o.classList.add("tx-focus")},r.onblur=()=>{o.classList.remove("tx-focus")},r.oninput=()=>{this.model&&(this.model.value=parseFloat(r.value))},o.onpointerdown=t=>{if(!0!==this.model?.enabled)return;o.setPointerCapture(t.pointerId);const e=parseFloat(r.value),i=this.getBoundingClientRect(),s=parseFloat(r.min),n=parseFloat(r.max);if(this.vertical){const o=n-(t.clientY-i.y)/i.height*(n-s);l=e-o}else{const o=(t.clientX-i.x)/i.width*(n-s)+s;l=e-o}},o.onpointermove=t=>{if(void 0===l)return;t.preventDefault();const e=this.getBoundingClientRect(),i=parseFloat(r.min),s=parseFloat(r.max);let o;o=this.vertical?s-(t.clientY-e.y)/e.height*(s-i):(t.clientX-e.x)/e.width*(s-i)+i+l,o<i&&(o=i),o>s&&(o=s),this.model&&(this.model.value=o)},o.onpointerup=t=>{void 0!==l&&(o.onpointermove(t),l=void 0)},this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[oe],this.shadowRoot.replaceChildren(e)}setGradient(){if(this.minColor&&this.maxColor){if(!0===this.model?.enabled){const t=this.vertical?"0deg":"90deg",e=this.minColor,i=this.maxColor;this.rail.style.backgroundImage=`linear-gradient(${t}, rgb(${e.r},${e.g},${e.b}), rgb(${i.r},${i.g},${i.b}))`}else this.rail.style.backgroundImage="";this.track.style.display="none"}}updateModel(){this.model&&(this.model.value=Number.parseFloat(this.input.value))}updateView(){if(this.setGradient(),!this.model)return void this.setAttribute("disabled","disabled");this.model.enabled?this.removeAttribute("disabled"):this.setAttribute("disabled","disabled"),void 0===this.model.step&&void 0!==this.model.min&&void 0!==this.model.max?this.input.step=""+(this.model.max-this.model.min)/100:this.input.step=String(this.model.step),this.input.min=String(this.model.min),this.input.max=String(this.model.max),this.input.value=String(this.model.value);const t=this.model.min,e=this.model.max;let i=(this.model.value-t)/(e-t);if(this.minColor&&this.maxColor)if(!0!==this.model?.enabled)this.thumb.style.backgroundColor="";else{const t=`rgb(${(this.maxColor.r-this.minColor.r)*i+this.minColor.r},${(this.maxColor.g-this.minColor.g)*i+this.minColor.g},${(this.maxColor.b-this.minColor.b)*i+this.minColor.b})`;this.thumb.style.backgroundColor=t}i*=100,this.vertical?(this.track.style.top=100-i+"%",this.track.style.height=`${i}%`,this.thumb.style.top=100-i+"%"):(this.track.style.left="0%",this.track.style.width=`${i}%`,this.thumb.style.left=`${i}%`)}}ne.define("tx-slider",ne);class ae extends Tt{static focusIn(t){const e=new Map;for(let i=t.parentElement,s=0;null!==i;i=i.parentElement,++s)e.set(i,s);let i,s,o=Number.MAX_SAFE_INTEGER,r=new Array;for(const s of this.allTools.values())if(s.canHandle(t))for(let t=s.parentElement,n=0;null!==t;t=t.parentElement,++n){const n=e.get(t);void 0!==n&&(o<n||(o>n&&(r.length=0),o=n,i=t,r.push(s)))}if(!i)return;const n=ae.getIndex(t,i);let a=Number.MIN_SAFE_INTEGER;for(let t of r){const e=ae.getIndex(t,i);e<n&&e>a&&(a=e,s=t)}this.setActive(s,t)}static getIndex(t,e){void 0===e&&console.trace(`GenericTool.getIndex(${t}, ${e})`);let i=t;for(;i.parentElement!==e;)i=i.parentElement;return Array.from(e.childNodes).indexOf(i)}static setActive(t,e){this.activeTool&&this.activeTool.deactivate(),this.activeTool=t,this.activeView=e,t&&t.activate()}static focusOut(t){this.activeView===t&&this.setActive(void 0,void 0)}connectedCallback(){super.connectedCallback(),ae.allTools.add(this)}disconnectedCallback(){ae.activeTool===this&&ae.setActive(void 0,void 0),ae.allTools.delete(this),super.disconnectedCallback()}}ae.allTools=new Set,window.addEventListener("focusin",(t=>{t.target instanceof ae||(t.relatedTarget instanceof Tt&&ae.focusOut(t.relatedTarget),t.target instanceof Tt&&ae.focusIn(t.target))}));const le=new CSSStyleSheet;le.replaceSync(U`
:host {
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid var(--tx-gray-400);
    border-radius: 3px;
    background: var(--tx-gray-400);
    color: var(--tx-gray-900);
    width: 24px;
    height: 22px;
    margin: 0;
    padding: 0;
}

:host([selected]) {
    background-color: var(--tx-gray-100);
    border: 1px solid var(--tx-gray-100);
}

:host([disabled]) {
    opacity: 0.5;
}

:host([disabled]) img {
    opacity: 0.5;
}
`);class he extends Et{constructor(t){super(t),t?this.setAttribute("value",`${t.value}`):t={value:this.getAttribute("value")},this.value=t?.value,this.onpointerdown=t=>{this.hasAttribute("disabled")||(this.focus(),t.preventDefault(),void 0!==this.model&&(this.model.value=this.value))},this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[le],this.shadowRoot.appendChild(document.createElement("slot"))}connectedCallback(){super.connectedCallback(),void 0===this.model&&this.setAttribute("disabled","")}updateView(){if(void 0===this.model)return this.setAttribute("disabled",""),void this.removeAttribute("selected");this.model.enabled&&this.model.isEnabledOf(this.value)?this.removeAttribute("disabled"):this.setAttribute("disabled",""),this.model.value===this.value?this.setAttribute("selected",""):this.removeAttribute("selected")}}he.define("tx-toolbutton",he);class de extends Et{constructor(t){super(t)}updateView(){if(!this.model)return;let t=void 0===this.model.value?"":this.model.value;this.model instanceof yt?this.innerHTML=t:this.innerText=t}}de.define("tx-slot",de);class ce extends Et{constructor(t){super(t)}updateView(){this.model&&(this.style.display=this.model.value?"":"none")}}ce.define("tx-if",ce);const pe=new CSSStyleSheet;pe.replaceSync(U`
    /*
     * tabs, line, content
     */
    :host {
        /* position: relative; */
        display: grid;
        /* flex-wrap: nowrap; */
        /* box-sizing: border-box; */
        margin: 0;
        padding: 0;
    }
    :host(:not(.tx-vertical)) {
        /* flex-direction: column; */
        /* display: grid; */
        /* height: */
        grid-template-rows: 0 max-content auto;
        grid-template-columns: 1;
        /* https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items */
        /* https://www.w3.org/TR/css3-grid-layout/#min-size-auto */
        min-width: 0;
    }
    :host(.tx-vertical) {
        grid-template-rows: 1;
        grid-template-columns: 0 max-content auto;
        min-height: 0;
    }

    /*
     * tabs
     */
    :host > ul {
        display: flex;
        flex-wrap: nowrap;
        list-style: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :host(:not(.tx-vertical)) > ul {
        flex-direction: row;
        border-bottom: 2px solid var(--tx-gray-200);
    }
    :host(.tx-vertical) > ul {
        flex-direction: column;
         border-left: 2px solid var(--tx-gray-200);
    }
    :host > ul > li {
        box-sizing: border-box;
        list-style: none;
    }

    /*
     * label
     */
    :host > ul > li > span {
        display: block;
        list-style: none;
        font-weight: 500;
        margin: 8px 12px 8px 12px;
        color: var(--tx-gray-700);
        cursor: pointer;
    }
    :host(.tx-vertical) > ul > li > span {
        margin: 0;
        padding: 12px 8px 12px 8px;
    }
    :host > ul > li > span.active {
        color: var(--tx-gray-900);
    }
    :host > ul > li > span:hover {
        color: var(--tx-gray-900);
    }

    /*
     * line
     */
    .line-container {
        position: relative;
        overflow: none;
    }
    :host > .line-container > .line {
        position: absolute;
        background-color: var(--tx-gray-900);
        pointer-events: none;
    }
    :host(:not(.tx-vertical)) > .line-container > .line {
        transition: left 0.5s ease-in-out, width 0.5s 0.1s;
        /* position: relative; below labels */
        top: 0px;
        height: 2px;
        left: 12px;
        width: 0px;
    }
    :host(.tx-vertical) > .line-container > .line {
        transition: top 0.5s ease-in-out, width 0.5s 0.1s;
        /* position: absolute; */
        left: 0; /* before labels */
        height: 0px;
        width: 2px;
    }

    /*
     * content
     */
    .content {
        overflow: auto;
    }
`);const ue=new CSSStyleSheet;ue.replaceSync(U`
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #1e1e1e;
    }
    ::-webkit-scrollbar-corner {
        background: #1e1e1e;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--tx-gray-500);
    }
`);class ge extends Et{constructor(t){let e,i;super(t),this.labelMap=new Map,this.activateTab=this.activateTab.bind(this),this.classList.add("tx-tabs"),this.vertical=this.hasAttribute("vertical")||"vertical"===t?.orientation,this.vertical&&this.classList.add("tx-vertical");const s=[e=X(this.markerLine=Y()),i=K(),this.content=Y(J())];e.classList.add("line-container"),this.markerLine.classList.add("line"),this.content.classList.add("content");let o=this.activeLabel,r=this.activePanel;for(let t=0;t<this.children.length;++t){const e=this.children[t];if(!(e instanceof fe)){console.log(`unexpected <${e.nodeName.toLowerCase()}> within <Tabs>`);continue}const s=e;let n;typeof s.value!=typeof this.model?.value&&console.log(`Type error: Tab<${typeof s.value}>({label="${s.label}", value=${s.value}}) differs from Tabs<${typeof this.model?.value}>({model.value=${this.model?.value}})`),i.appendChild(Q(n=X(G(s.getAttribute("label"))))),n.onpointerdown=t=>{t.stopPropagation(),t.preventDefault(),this.activateTab(n,s)},this.labelMap.set(s,n),void 0!==o||void 0!==this.model&&this.model.value!==s.value?s.style.display="none":(o=n,r=s)}this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[pe,ue],this.shadowRoot.replaceChildren(...s),void 0!==o&&this.activateTab(o,r)}updateView(){if(this.model)for(let t=0;t<this.children.length;++t){const e=this.children[t];if(!(e instanceof fe)){console.log(`unexpected <${e.nodeName.toLowerCase()}> within <Tabs>`);continue}const i=e;if(this.model.value===i.value){this.activateTab(this.labelMap.get(i),i);break}}}activateTab(t,e){this.activePanel!==e&&(void 0!==this.activeLabel&&void 0!==this.activePanel&&(this.activeLabel.classList.remove("active"),this.activePanel.style.display="none",this.activePanel.close()),this.activeLabel=t,this.activePanel=e,this.activePanel.open(),this.activeLabel.classList.add("active"),this.activePanel.style.display="",setTimeout((()=>this.adjustLine()),0),this.model&&void 0!==e.value&&(this.model.value=e.value))}adjustLine(){const t=this.markerLine,e=this.activeLabel;void 0!==e&&(this.vertical?(t.style.top=e.offsetTop-this.offsetTop+"px",t.style.height=`${e.clientHeight}px`):(t.style.top="-2px",t.style.left=e.offsetLeft-this.offsetLeft+"px",t.style.width=`${e.clientWidth}px`))}}ge.define("tx-tabs",ge);class fe extends Tt{constructor(t){super(t),this.value=t?.value,this.label=t?.label,this.content=t?.content}open(){if(0===this.childNodes.length&&void 0!==this.content){const t=this.content();t instanceof Promise?t.then((t=>{if("object"==typeof t&&"default"in t){const e=t.default;if("function"==typeof e){const t=e();t instanceof Promise?t.then((t=>{me(this,t)})):me(this,t)}else me(this,e)}})):me(this,this.content())}}close(){}}function me(t,e){for(const i of e)i instanceof Array?me(t,i):"string"!=typeof i?t.appendChild(i):t.appendChild(document.createTextNode(i))}Tt.define("tx-tab",fe);const be=new CSSStyleSheet;be.replaceSync(U`
  :host(.menu-button) {
    font-family: var(--tx-font-family);
    font-size: var(--tx-edit-font-size);
    font-weight: var(--tx-edit-font-weight);
    padding: 7px;
    vertical-align: center;
  
    background: var(--tx-gray-200);
    color: var(--tx-gray-900);
    cursor: default;
  }
  :host(.menu-button:hover) {
    background: var(--tx-gray-300);
  }
  :host(.menu-button.active) {
    background: var(--tx-gray-400);
    color: var(--tx-gray-900);
  }
  :host(.menu-button.disabled) {
    color: var(--tx-gray-500);
  }
  :host(.menu-button.active.disabled) {
    color: var(--tx-gray-700);
  }
  :host(.menu-button.menu-down) {
    padding-right: 20px;
    background-image: url("data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14"><path d="M 0 4 l 10 0 l -5 5 Z" fill="#fff" stroke="none"/></svg>')}");
    background-repeat: no-repeat;
    background-position: right center;
  }
  :host(.menu-button.active.menu-down) {
    background-image: url("data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14"><path d="M 0 4 l 10 0 l -5 5 Z" fill="#fff" stroke="none"/></svg>')}");
    background-repeat: no-repeat;
    background-position: right center;
  }
  :host(.menu-button.menu-side) {
    padding-right: 20px;
    background-image: url("data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14"><path d="M 0 2 l 0 10 l 5 -5 Z" fill="#fff" stroke="none"/></svg>')}");
    background-repeat: no-repeat;
    background-position: right center;
  }
  :host(.menu-button.active.menu-side) {
    background-image: url("data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14"><path d="M 0 2 l 0 10 l 5 -5 Z" fill="#fff" stroke="none"/></svg>')}");
    background-repeat: no-repeat;
    background-position: right center;
  }
  .menu-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--tx-gray-200);
  }
  .menu-popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px var(--tx-gray-50);
  }
`);class ve extends Et{constructor(t,e){super(),this.master=t,this.node=e;let i=this;if(this.classList.add("menu-button"),e.down&&(t.vertical?this.classList.add("menu-side"):this.classList.add("menu-down")),this.updateView(),this.onmousedown=t=>{t.stopPropagation();let e=function(t){document.removeEventListener("mouseup",e,{capture:!0}),t.preventDefault(),setTimeout((()=>{ve.buttonDown&&i.dispatchEvent(new MouseEvent("mouseup",t))}),0)};if(document.addEventListener("mouseup",e,{capture:!0}),ve.buttonDown=!0,!this.master)throw Error("yikes");switch(this.master.state){case Jt.WAIT:this.master.state=Jt.DOWN,this.activate();break;case Jt.UP_N_HOLD:this.master.active!==this?(this.master.state=Jt.DOWN,this.activate()):this.master.state=Jt.DOWN_N_HOLD;break;default:throw Error("unexpected state "+this.master.state)}return!1},this.onmouseup=t=>{if(t.stopPropagation(),ve.buttonDown){if(ve.buttonDown=!1,!this.master)throw Error("yikes");if(!this.node)throw Error("yikes");switch(this.master.state){case Jt.DOWN:this.node.isEnabled()&&!this.node.down?(this.trigger(),this.master.state=Jt.WAIT):(this.master.state=Jt.UP_N_HOLD,ve.documentMouseDown&&document.removeEventListener("mousedown",ve.documentMouseDown,{capture:!1}),ve.documentMouseDown=function(t){ve.documentMouseDown&&document.removeEventListener("mousedown",ve.documentMouseDown,{capture:!1}),ve.documentMouseDown=void 0,"TOAD-MENUBUTTON"!==t.target.tagName&&i.collapse()},document.addEventListener("mousedown",ve.documentMouseDown,{capture:!1}));break;case Jt.DOWN_N_HOLD:case Jt.DOWN_N_OUTSIDE:this.master.state=Jt.WAIT,this.deactivate(),this.collapse(),this.master.closeOnClose;break;case Jt.DOWN_N_INSIDE_AGAIN:this.trigger();break;default:throw Error("unexpected state "+this.master.state)}return!1}},this.onmouseout=t=>{if(t.stopPropagation(),!this.master)throw Error("yikes");switch(ve.inside=void 0,this.master.state){case Jt.WAIT:case Jt.DOWN_N_OUTSIDE:case Jt.UP_N_HOLD:case Jt.DOWN_N_HOLD:break;case Jt.DOWN:case Jt.DOWN_N_INSIDE_AGAIN:this.master.state=Jt.DOWN_N_OUTSIDE,this.updateView();break;default:throw Error("unexpected state")}return!1},this.onmouseover=t=>{if(t.stopPropagation(),!i.master)throw Error("yikes");switch(ve.inside=i,i.master.state){case Jt.WAIT:case Jt.UP_N_HOLD:case Jt.DOWN_N_OUTSIDE:case Jt.DOWN_N_HOLD:case Jt.DOWN:case Jt.DOWN_N_INSIDE_AGAIN:if(!ve.buttonDown)break;if(!this.master)throw Error("yikes");this.master.active&&this.master.active.deactivate(),this.master.state=Jt.DOWN_N_INSIDE_AGAIN,this.activate();break;default:throw Error("unexpected state "+i.master.state)}return!1},this.attachShadow({mode:"open"}),!this.shadowRoot)throw Error("yikes");this.shadowRoot.adoptedStyleSheets=[be],this.node.modelId||this.shadowRoot.appendChild(document.createTextNode(e.label))}connectedCallback(){if(!this.controller){if(void 0===this.node.down){let t=this.node.title;for(let e=this.node.parent;e&&e.title.length;e=e.parent)t=e.title+"|"+t;t="A:"+t,kt.registerView(t,this)}if(void 0!==this.node.modelId)if("string"==typeof this.node.modelId){let t="M:"+this.node.modelId;kt.registerView(t,this)}else this.setModel(this.node.modelId)}}disconnectedCallback(){this.controller&&this.controller.unregisterView(this)}setModel(t){if(!t)return this.action&&this.action.modified.remove(this),this.model=void 0,this.action=void 0,void this.updateView();if(t instanceof wt)this.action=t,this.action.modified.add((()=>{this.updateView()}),this);else{if(!(t instanceof xt))throw"object"==typeof t?Error(`unexpected model of type ${t.constructor.name}`):Error("unexpected model of type "+typeof t);this.model=t}this.updateView()}updateView(){if(this.model&&this.model.value){if(!this.shadowRoot)throw Error("yikes");let t=document.createElement("span");this.model instanceof yt?t.innerHTML=this.model.value:t.innerText=this.model.value,this.shadowRoot.children.length>1&&this.shadowRoot.removeChild(this.shadowRoot.children[1]),this.shadowRoot.children.length>1?this.shadowRoot.insertBefore(t,this.shadowRoot.children[1]):this.shadowRoot.appendChild(t)}if(!this.master)throw Error("yikes");let t=!1;if(this.master.active==this)switch(this.master.state){case Jt.DOWN:case Jt.UP_N_HOLD:case Jt.DOWN_N_HOLD:case Jt.DOWN_N_INSIDE_AGAIN:t=!0;break;case Jt.DOWN_N_OUTSIDE:if(!this.node)throw Error("yikes");t=void 0!==this.node.down&&this.node.isEnabled()}this.classList.toggle("active",t),this.classList.toggle("disabled",!this.isEnabled())}isEnabled(){return void 0!==this.node.down||void 0!==this.action&&this.action.enabled}trigger(){this.collapse(),this.action&&this.action.trigger()}collapse(){if(!this.master)throw Error("yikes");this.master.parentButton?this.master.parentButton.collapse():this.deactivate()}openPopup(){if(this.node&&this.node.down){if(!this.shadowRoot)throw Error("yikes");this.popup?this.popup.show():(this.popup=new Zt(this.node,this),this.shadowRoot.appendChild(this.popup))}}closePopup(){this.popup&&(this.popup.active&&this.popup.active.deactivate(),this.popup.hide())}activate(){if(!this.master)throw Error("yikes");if(!this.node)throw Error("yikes");let t=this.master.active;this.master.active=this,t&&t!==this&&(t.closePopup(),t.updateView()),this.updateView(),this.openPopup()}deactivate(){if(!this.master)throw Error("yikes");this.master.active===this&&(this.master.active.closePopup(),this.master.active=void 0,this.master.state=Jt.WAIT,this.updateView())}}ve.define("tx-menubutton",ve);class xe{constructor(t,e,i,s,o){this.title=t,this.label=e,this.shortcut=i,this.type=s||"entry",this.modelId=o}isEnabled(){return!0}isAvailable(){return!0}createWindowAt(t,e){if("spacer"==this.type){let t=document.createElement("span");return t.style.flexGrow="1",void e.appendChild(t)}this.view=new ve(t,this),e.appendChild(this.view)}deleteWindow(){}}class ye extends qt{constructor(t){super(t),this.config=t?.config,this.vertical=!1,this.root=new xe("","",void 0,void 0)}connectedCallback(){if(super.connectedCallback(),this.tabIndex=0,this.config)return this.config2nodes(this.config,this.root),this.referenceActions(),void this.createShadowDOM();0===this.children.length?(this._observer=new MutationObserver(((t,e)=>{void 0!==this._timer&&clearTimeout(this._timer),this._timer=window.setTimeout((()=>{this._timer=void 0,this.layout2nodes(this.children,this.root),this.referenceActions(),this.createShadowDOM()}),100)})),this._observer.observe(this,{childList:!0,subtree:!0})):(this.layout2nodes(this.children,this.root),this.referenceActions(),this.createShadowDOM())}layout2nodes(t,e){let i=e.down;for(let s of t){let t;switch(s.nodeName){case"TX-MENUSPACER":t=new xe("","","","spacer");break;case"TX-MENUENTRY":t=new xe(Ct(s,"name"),Ct(s,"label"),_t(s,"shortcut"),_t(s,"type"),_t(s,"model"))}if(t&&(t.parent=e,i?i.next=t:e.down=t,i=t),!i)throw Error("yikes");this.layout2nodes(s.children,i)}}config2nodes(t,e){let i=e.down;for(let s of t){let t;if(t=!0===s.space?new xe("","","","spacer"):new xe(s.name,s.label,s.shortcut,s.type,s.model),t&&(t.parent=e,i?i.next=t:e.down=t,i=t),!i)throw Error("yikes");s.sub&&this.config2nodes(s.sub,i)}}referenceActions(){}findNode(t,e){let i=t.indexOf("|"),s=-1==i?t:t.substr(0,i),o=-1==i?"":t.substr(i+1);e||(e=this.root);for(let t=e.down;t;t=t.next)if(t.title==s)return t.down?this.findNode(o,t):t}createShadowDOM(){this.view=document.createElement("div"),this.view.classList.add("menu-bar");let t=this.root.down;for(;t;)t.isAvailable()?t.createWindowAt(this,this.view):t.deleteWindow(),t=t.next;this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[be],this.shadowRoot.appendChild(this.view)}}ye.define("tx-menu",ye);class we extends HTMLElement{}Tt.define("tx-menuspacer",we);class Ce extends lt{isEmpty(){return 0===this.colCount&&0===this.rowCount}}var _e,ke,Se;!function(t){t[t.EDIT_CELL=0]="EDIT_CELL",t[t.SELECT_CELL=1]="SELECT_CELL",t[t.SELECT_ROW=2]="SELECT_ROW"}(_e||(_e={}));class He{constructor(t,e){this.col=t,this.row=e}toString(){return`TablePos { col:${this.col}, row:${this.row} }`}}class Ae extends lt{constructor(t=_e.EDIT_CELL){super(),this.mode=t,this._value=new He(0,0)}set col(t){this._value.col!==t&&(this._value.col=t,this.modified.trigger())}get col(){return this._value.col}set row(t){this._value.row!==t&&(this._value.row=t,this.modified.trigger())}get row(){return this._value.row}set value(t){this._value.col===t.col&&this._value.row===t.row||(this._value=t,this.modified.trigger())}get value(){return this._value}toString(){return`SelectionModel {enabled: ${this.enabled}, mode: ${_e[this.mode]}, value: ${this._value}}`}}class Te extends Ce{constructor(t,e){super(),this.nodeClass=t}}!function(t){t[t.EDIT_ON_FOCUS=0]="EDIT_ON_FOCUS",t[t.EDIT_ON_ENTER=1]="EDIT_ON_ENTER"}(ke||(ke={}));class Ee{constructor(){this.editMode=ke.EDIT_ON_FOCUS,this.seamless=!1,this.expandColumn=!1,this.expandRow=!1}}class Me{constructor(t){this.config=new Ee,this.model=t}get colCount(){return void 0===this.model?0:this.model.colCount}get rowCount(){return void 0===this.model?0:this.model.rowCount}getColumnHead(t){}getRowHead(t){}showCell(t,e){}saveCell(t,e){}editCell(t,e){}isViewCompact(){return!1}static register(t,e,i){let s=Me.modelToAdapter.get(e);if(void 0===s&&(s=new Map,Me.modelToAdapter.set(e,s)),void 0!==i){if(s.has(i))throw Error("attempt to redefine existing table adapter");s.set(i,t)}else{if(s.has(null))throw Error("attempt to redefine existing table adapter");s.set(null,t)}}static unbind(){Me.modelToAdapter.clear()}static lookup(t){let e;e=t instanceof Te?t.nodeClass:null;const i=Me.modelToAdapter.get(Object.getPrototypeOf(t).constructor);let s=i?.get(e);if(void 0===s)for(let i of Me.modelToAdapter.keys())if(t instanceof i){s=Me.modelToAdapter.get(i)?.get(e);break}if(void 0===s){let i=`TableAdapter.lookup(): Did not find an adapter for model of type ${t.constructor.name}`;if(i+=`\n    Requested adapter: model=${t.constructor.name}, type=${e?.name}\n    Available adapters:`,0===Me.modelToAdapter.size)i+=" none.";else for(const[t,e]of Me.modelToAdapter)for(const[s,o]of e)i+=`\n        model=${t.name}`,null!=s&&(i+=`, type=${s.name}`);throw Error(i)}return s}}Me.modelToAdapter=new Map,function(t){t[t.INSERT_ROW=0]="INSERT_ROW",t[t.REMOVE_ROW=1]="REMOVE_ROW",t[t.INSERT_COL=2]="INSERT_COL",t[t.REMOVE_COL=3]="REMOVE_COL",t[t.CELL_CHANGED=4]="CELL_CHANGED",t[t.RESIZE_ROW=5]="RESIZE_ROW",t[t.RESIZE_COL=6]="RESIZE_COL",t[t.CHANGED=7]="CHANGED"}(Se||(Se={}));class Re{constructor(t,e,i){this.type=t,this.index=e,this.size=i}get col(){return this.index}get row(){return this.size}toString(){return`TableEvent {type: ${Se[this.type]}, index: ${this.index}, size: ${this.size}}`}}class Le{constructor(t){this.table=t}get logger(){return this.table.logger}get adapter(){return this.table.adapter}get root(){return this.table.root}get measure(){return this.table.measure}focus(){this.table.focus()}getStaging(){const t=this.table.animator;if(void 0===t.current)return;return t.current.bodyStaging}getHeadStaging(){const t=this.table.animator;if(void 0===t.current)return;return t.current.headStaging}get body(){return this.table.body}get splitBody(){return this.table.splitBody}get colHeads(){return this.table.colHeads}set colHeads(t){this.table.colHeads=t}get rowHeads(){return this.table.rowHeads}set rowHeads(t){this.table.rowHeads=t}get colResizeHandles(){return this.table.colResizeHandles}set colResizeHandles(t){this.table.colResizeHandles=t}get rowResizeHandles(){return this.table.rowResizeHandles}set rowResizeHandles(t){this.table.rowResizeHandles=t}set animationDone(t){this.table.animationDone=t}get selection(){return this.table.selection}get style(){return this.table.style}setCellSize(t,e,i,s,o){this.table.setCellSize(t,e,i,s,o)}clearAnimation(){this.table.animation=void 0}}class De extends Le{constructor(t){super(t)}prepareStagingWithRows(){this.prepareBodyStaging(),this.prepareRowHeadStaging(),this.table.addStaging(this.bodyStaging,this.headStaging),this.scrollStaging()}prepareStagingWithColumns(){this.prepareBodyStaging(),this.prepareColHeadStaging(),this.table.addStaging(this.bodyStaging,this.headStaging),this.scrollStaging()}prepareBodyStaging(){this.bodyStaging=Y(),this.bodyStaging.className="staging",this.bodyStaging.style.left=this.body.style.left,this.bodyStaging.style.top=this.body.style.top}prepareRowHeadStaging(){void 0!==this.rowHeads&&(this.headStaging=Y(),this.headStaging.classList.add("staging"),this.headStaging.style.top=this.rowHeads.style.top,this.headStaging.style.width=this.rowHeads.style.width)}prepareColHeadStaging(){void 0!==this.colHeads&&(this.headStaging=Y(),this.headStaging.classList.add("staging"),this.headStaging.classList.add("colHack"),this.headStaging.style.left=this.colHeads.style.left,this.headStaging.style.height=this.colHeads.style.height)}disposeStaging(){this.table.removeStaging(this.bodyStaging,this.headStaging)}scrollStaging(){}makeRowMask(t,e){const i=X();return i.style.boxSizing="content-box",i.style.top=`${t}px`,i.style.height=`${e}px`,i.style.left="0",i.style.right="0",i.style.border="none",i.style.backgroundColor=Qe.maskColor,i}makeColumnMask(t,e){const i=X();return i.style.boxSizing="content-box",i.style.left=`${t}px`,i.style.width=`${e}px`,i.style.top="0",i.style.bottom="0",i.style.border="none",i.style.backgroundColor=Qe.maskColor,i}}class Ie extends De{constructor(t,e){super(t),this.done=!1,this.event=e}prepare(){this.prepareCellsToBeMeasured(),this.prepareStaging()}firstFrame(){this.arrangeInStaging(),this.split()}animationFrame(t){this.animate(this.animationStart+t*this.totalSize)}lastFrame(){this.animate(this.animationStart+this.totalSize),this.join(),this.disposeStaging()}join(){this.done||(this.done=!0,this.joinHeader(),this.joinBody(),this.table.animationDone&&this.table.animationDone())}}class Be extends Ie{constructor(t,e){super(t,e),this.join=this.join.bind(this),this.initialRowCount=this.adapter.rowCount-e.size,Be.current=this}prepareStaging(){this.prepareStagingWithRows()}animate(t){this.splitBody.style.top=`${t}px`,this.mask.style.top=`${t}px`,void 0!==this.rowHeads&&(this.splitHead.style.top=`${t}px`,this.headMask.style.top=`${t}px`)}prepareCellsToBeMeasured(){this.table.prepareMinCellSize();let t=new Array(this.event.size);for(let e=this.event.index;e<this.event.index+this.event.size;++e){const i=this.adapter.getRowHead(e);void 0===this.rowHeads&&void 0!==i&&(this.rowHeads=Y(),this.rowHeads.className="rows",this.root.appendChild(this.rowHeads),this.rowResizeHandles=Y(),this.rowResizeHandles.className="rows",this.root.appendChild(this.rowResizeHandles)),t[e-this.event.index]=i}if(void 0!==this.rowHeads)for(let e=0;e<this.event.size;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}if(void 0===this.colHeads&&this.adapter.colCount===this.event.size){let t=new Array(this.adapter.colCount);for(let e=0;e<this.adapter.colCount;++e){const i=this.adapter.getColumnHead(e);void 0===this.colHeads&&void 0!==i&&(this.colHeads=Y(),this.colHeads.className="cols",this.root.appendChild(this.colHeads),this.colResizeHandles=Y(),this.colResizeHandles.className="cols",this.root.appendChild(this.colResizeHandles)),t[e]=i}if(void 0!==this.colHeads)for(let e=0;e<this.adapter.colCount;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}}for(let t=this.event.index;t<this.event.index+this.event.size;++t)for(let e=0;e<this.adapter.colCount;++e){const i=this.table.createCell();this.table.showCell(new He(e,t),i),this.measure.appendChild(i)}}arrangeInStaging(){this.table.calculateMinCellSize();const t=this.adapter.config.seamless?0:1;let e=0,i=this.event.index*this.adapter.colCount;if(0!==this.body.children.length)if(i<this.body.children.length){e=Ze(this.body.children[i].style.top)}else{let i=this.body.children[this.body.children.length-1],s=i.getBoundingClientRect();e=Ze(i.style.top)+s.height-t}let s=new Array(this.adapter.colCount);if(this.body.children.length>0)for(let t=0;t<this.adapter.colCount;++t){const e=this.body.children[t].getBoundingClientRect();s[t]=e.width,this.adapter.config.seamless&&(s[t]+=2)}else s.fill(this.table.minCellWidth);let o=this.table.minCellWidth;if(this.rowHeads&&this.rowHeads.children.length>0){const t=this.rowHeads.children[0].getBoundingClientRect();o=Math.max(o,t.width),this.adapter.config.seamless&&(o+=2)}let r=new Array(this.event.size);if(r.fill(this.table.minCellHeight),this.totalSize=0,i=0,void 0!==this.rowHeads)for(let t=0;t<this.event.size;++t){const e=this.measure.children[i++].getBoundingClientRect();r[t]=Math.max(r[t],e.height),o=Math.max(o,e.width)}o=Math.ceil(o);let n=0;if(void 0!==this.colHeads&&0===this.colHeads.children.length&&this.adapter.rowCount==this.event.size){n=this.table.minCellHeight;for(let t=0;t<this.adapter.colCount;++t){const e=this.measure.children[i++].getBoundingClientRect();s[t]=Math.max(s[t],e.width-this.table.WIDTH_ADJUST),n=Math.max(n,e.height-this.table.HEIGHT_ADJUST)}}else if(void 0!==this.colHeads){n=this.colHeads.children[0].getBoundingClientRect().height-this.table.HEIGHT_ADJUST}n=Math.ceil(n),this.rowHeads&&(this.rowHeads.style.top=0===n?"0px":n+this.table.HEIGHT_ADJUST-t+"px",this.rowHeads.style.bottom="0px",this.rowHeads.style.width=`${o}px`,this.body.style.left=o-t+"px",this.bodyStaging.style.left=o-t+"px");for(let e=0;e<this.event.size;++e){for(let t=0;t<this.adapter.colCount;++t){const o=this.measure.children[i++].getBoundingClientRect();r[e]=Math.max(r[e],o.height),this.adapter.config.expandColumn?s[t]=Math.ceil(Math.max(s[t],o.width)):0===e&&0===this.body.children.length&&(s[t]=Math.ceil(o.width))}this.totalSize+=r[e]-t}if(this.adapter.config.expandColumn){i=0;let e=0,o=0;for(;i<this.body.children.length;){const r=this.body.children[i];r.style.left=`${e}px`,r.style.width=s[o]-this.table.WIDTH_ADJUST+"px",e+=s[o]-t,this.adapter.config.seamless&&(e-=2),++o,++i,o>=this.adapter.colCount&&(e=0,o=0)}}this.totalSize+=t,this.adapter.config.seamless&&(this.totalSize-=2*this.event.size);let a=e;if(void 0!==this.rowHeads)for(let e=0;e<this.event.size;++e){const i=this.measure.children[0];this.setCellSize(i,0,a,o,r[e]),this.headStaging.appendChild(i),a+=r[e]-t,this.adapter.config.seamless&&(a-=2)}if(void 0!==this.colHeads&&0===this.colHeads.children.length&&this.adapter.rowCount==this.event.size){let e=0;for(let i=0;i<this.adapter.colCount;++i){const o=this.measure.children[0];o.style.left=`${e}px`,o.style.width=s[i]-this.table.WIDTH_ADJUST+"px",o.style.height=`${n}px`,this.colHeads.appendChild(o),e+=s[i]-t}n+=this.table.HEIGHT_ADJUST,this.body.style.top=n-t+"px",this.bodyStaging.style.top=n-t+"px",this.headStaging.style.top=n-t+"px",this.rowHeads.style.top=n-t+"px",this.colHeads.style.left=o-t+"px",this.colHeads.style.right="0px",this.colHeads.style.height=`${n}px`}a=e;for(let e=0;e<this.event.size;++e){let i=0;for(let o=0;o<this.adapter.colCount;++o){const n=this.measure.children[0];this.setCellSize(n,i,a,s[o],r[e]),this.bodyStaging.appendChild(n),i+=s[o]-t,this.adapter.config.seamless&&(i-=2)}a+=r[e]-t,this.adapter.config.seamless&&(a-=2)}if(this.mask=this.makeRowMask(e,this.totalSize),this.bodyStaging.appendChild(this.mask),void 0!==this.rowHeads&&(this.headMask=this.makeRowMask(e,this.totalSize),this.headStaging.appendChild(this.headMask)),0!==this.initialRowCount){const t=this.adapter.config.seamless?0:1;this.totalSize-=t}}split(){this.table.splitHorizontalNew(this.event.index),void 0!==this.rowHeads&&(this.splitHead=this.rowHeads.lastElementChild),this.animationStart=Ze(this.splitBody.style.top)}joinHeader(){if(void 0!==this.rowHeads){for(this.headStaging.removeChild(this.headMask),this.rowHeads.removeChild(this.splitHead);this.headStaging.children.length>0;)this.rowHeads.appendChild(this.headStaging.children[0]);if(this.splitHead.children.length>0){let t=Ze(this.splitHead.style.top);for(;this.splitHead.children.length>0;){const e=this.splitHead.children[0];e.style.top=`${Ze(e.style.top)+t}px`,this.rowHeads.appendChild(e)}}}}joinBody(){for(this.bodyStaging.removeChild(this.mask),this.body.removeChild(this.splitBody);this.bodyStaging.children.length>0;)this.body.appendChild(this.bodyStaging.children[0]);if(this.splitBody.children.length>0){let t=Ze(this.splitBody.style.top);for(;this.splitBody.children.length>0;){const e=this.splitBody.children[0];e.style.top=`${Ze(e.style.top)+t}px`,this.body.appendChild(e)}}}}class Fe extends De{constructor(t,e){if(super(t),this.event=e,this.joinHorizontal=this.joinHorizontal.bind(this),0===this.body.children.length)this.initialHeight=0;else{const t=this.body.children[this.body.children.length-1],e=Ze(t.style.top),i=t.getBoundingClientRect();this.initialHeight=e+i.height}this.overlap=this.adapter.config.seamless?0:1,this.removeAll=this.event.index>=this.adapter.rowCount,Fe.current=this}prepare(){this.prepareStagingWithRows(),this.arrangeRowsInStaging(),this.splitHorizontal()}firstFrame(){}animationFrame(t){this.splitBody.style.top=this.topSplitBody-t*this.animationHeight+"px",this.mask.style.top=this.topMask-t*this.animationHeight+"px",void 0!==this.rowHeads&&(this.splitHead.style.top=this.topSplitBody-t*this.animationHeight+"px",this.headMask.style.top=this.topMask-t*this.animationHeight+"px")}lastFrame(){this.joinHorizontal(),this.disposeStaging()}arrangeRowsInStaging(){const t=this.event.index*this.adapter.colCount,e=this.event.size*this.adapter.colCount,i=Ze(this.body.children[t].style.top);for(let i=0;i<e;++i)this.bodyStaging.appendChild(this.body.children[t]);let s;if(t<this.body.children.length)s=Ze(this.body.children[t].style.top);else{const t=this.bodyStaging.children[this.bodyStaging.children.length-1];s=Ze(t.style.top)+Ze(t.style.height)+this.table.HEIGHT_ADJUST}if(this.animationHeight=s-i,this.mask=this.makeRowMask(s,this.animationHeight),this.bodyStaging.appendChild(this.mask),void 0!==this.rowHeads){for(let t=0;t<this.event.size;++t)this.headStaging.appendChild(this.rowHeads.children[this.event.index]);this.headMask=this.makeRowMask(s,this.animationHeight),this.headStaging.appendChild(this.headMask)}}splitHorizontal(){this.table.splitHorizontalNew(this.event.index),void 0!==this.rowHeads&&(this.splitHead=this.rowHeads.lastElementChild),this.topSplitBody=Ze(this.splitBody.style.top),this.topMask=Ze(this.mask.style.top)}joinHorizontal(){this.bodyStaging.removeChild(this.mask),this.body.removeChild(this.splitBody),this.bodyStaging.replaceChildren(),this.moveSplitBodyToBody(),this.rowHeads&&(this.headStaging.removeChild(this.headMask),this.rowHeads.removeChild(this.splitHead),this.headStaging.replaceChildren(),this.moveSplitHeadToHead()),this.table.animationDone&&this.table.animationDone()}moveSplitHeadToHead(){if(0===this.splitHead.children.length)return;let t=Ze(this.splitHead.style.top);for(;this.splitHead.children.length>0;){const e=this.splitHead.children[0];e.style.top=`${Ze(e.style.top)+t}px`,this.rowHeads.appendChild(e)}}moveSplitBodyToBody(){if(0===this.splitBody.children.length)return;let t=Ze(this.splitBody.style.top);for(;this.splitBody.children.length>0;){const e=this.splitBody.children[0];e.style.top=`${Ze(e.style.top)+t}px`,this.body.appendChild(e)}}}class Ne extends Ie{constructor(t,e){super(t,e),this.event=e,this.join=this.join.bind(this),this.colCount=this.adapter.colCount,this.rowCount=this.adapter.rowCount,Ne.current=this}prepareStaging(){this.prepareStagingWithColumns()}animate(t){this.mask.style.left=`${t}px`,this.splitBody.style.left=`${t}px`,void 0!==this.colHeads&&(this.splitHead.style.left=`${t}px`,this.headMask.style.left=`${t}px`)}prepareCellsToBeMeasured(){this.table.prepareMinCellSize();let t=new Array(this.event.size);for(let e=this.event.index;e<this.event.index+this.event.size;++e){const i=this.adapter.getColumnHead(e);void 0===this.colHeads&&void 0!==i&&(this.colHeads=Y(),this.colHeads.className="cols",this.root.appendChild(this.colHeads),this.colResizeHandles=Y(),this.colResizeHandles.className="cols",this.root.appendChild(this.colResizeHandles)),t[e-this.event.index]=i}if(void 0!==this.colHeads)for(let e=0;e<this.event.size;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}if(void 0===this.rowHeads&&this.adapter.rowCount===this.event.size){let t=new Array(this.adapter.rowCount);for(let e=0;e<this.adapter.rowCount;++e){const i=this.adapter.getRowHead(e);void 0===this.rowHeads&&void 0!==i&&(this.rowHeads=Y(),this.rowHeads.className="rows",this.root.appendChild(this.rowHeads),this.rowResizeHandles=Y(),this.rowResizeHandles.className="rows",this.root.appendChild(this.rowResizeHandles)),t[e]=i}if(void 0!==this.rowHeads)for(let e=0;e<this.adapter.rowCount;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}}for(let t=this.event.index;t<this.event.index+this.event.size;++t)for(let e=0;e<this.rowCount;++e){const i=X();this.table.showCell(new He(t,e),i),this.measure.appendChild(i)}}arrangeInStaging(){this.table.calculateMinCellSize();const t=this.colCount-this.event.size,e=this.adapter.config.seamless?0:1;let i,s=this.event.index;if(s<t){i=qe(this.body.children[s].style.left)}else if(0===this.body.children.length)i=0;else{const s=this.body.children[t-1];i=qe(s.style.left)+qe(s.style.width)+this.table.WIDTH_ADJUST-e}this.animationStart=i;let o=new Array(this.adapter.rowCount);if(0!==this.body.children.length)for(let e=0;e<this.adapter.rowCount;++e){const i=this.body.children[e*t].getBoundingClientRect();o[e]=i.height,this.adapter.config.seamless&&(o[e]+=2)}else o.fill(this.table.minCellHeight);let r=this.table.minCellHeight;if(this.colHeads&&this.colHeads.children.length>0){r=this.colHeads.children[0].getBoundingClientRect().height,this.adapter.config.seamless&&(r+=2)}let n=new Array(this.event.size);if(n.fill(this.table.minCellWidth),this.totalSize=0,s=0,void 0!==this.colHeads)for(let t=0;t<this.event.size;++t){const e=this.measure.children[s++].getBoundingClientRect();n[t]=Math.max(n[t],e.width),r=Math.max(r,e.height)}r=Math.ceil(r);let a=0;if(void 0!==this.rowHeads&&0===this.rowHeads.children.length&&this.adapter.colCount==this.event.size){a=this.table.minCellWidth;for(let t=0;t<this.adapter.rowCount;++t){const e=this.measure.children[s++].getBoundingClientRect();o[t]=Math.max(o[t],e.height-this.table.HEIGHT_ADJUST),a=Math.max(a,e.width-this.table.WIDTH_ADJUST)}}else if(void 0!==this.rowHeads){a=this.rowHeads.children[0].getBoundingClientRect().width-this.table.WIDTH_ADJUST}a=Math.ceil(a),this.colHeads&&(this.colHeads.style.left=0===a?"0px":a+this.table.WIDTH_ADJUST+2-e+"px",this.colHeads.style.right="0px",this.colHeads.style.height=`${r}px`,this.body.style.top=r-1+"px",this.bodyStaging.style.top=r-1+"px");for(let t=0;t<this.event.size;++t){for(let e=0;e<this.adapter.rowCount;++e){const i=this.measure.children[s++].getBoundingClientRect();n[t]=Math.ceil(Math.max(n[t],i.width)-2),this.adapter.config.expandRow?o[t]=Math.ceil(Math.max(o[e],i.height)):0===t&&0===this.body.children.length&&(o[e]=Math.ceil(i.height))}this.totalSize+=n[t]-e}n.forEach(((t,e)=>n[e]=t+4)),this.totalSize+=e,this.adapter.config.seamless&&(this.totalSize-=2*this.event.size);let l=i;if(void 0!==this.colHeads)for(let t=0;t<this.event.size;++t){const i=this.measure.children[0];this.setCellSize(i,l,0,n[t],r),this.headStaging.appendChild(i),l+=n[t]-e,this.adapter.config.seamless&&(l-=2)}if(void 0!==this.rowHeads&&0===this.rowHeads.children.length&&this.adapter.colCount==this.event.size){let t=0;for(let i=0;i<this.adapter.rowCount;++i){const s=this.measure.children[0];s.style.top=`${t}px`,s.style.height=o[i]-this.table.HEIGHT_ADJUST+"px",s.style.width=`${a}px`,this.rowHeads.appendChild(s),t+=o[i]-e}a+=this.table.WIDTH_ADJUST,this.body.style.left=a-e+"px",this.bodyStaging.style.left=a-e+"px",this.headStaging.style.left=a-e+"px",this.colHeads.style.left=a-e+"px",this.rowHeads.style.top=r-e+"px",this.rowHeads.style.bottom="0px",this.rowHeads.style.width=`${a}px`}let h=0;l=i;for(let t=this.event.index;t<this.event.index+this.event.size;++t){let i=n[t-this.event.index],s=0;for(let t=0;t<this.rowCount;++t){const r=this.measure.children[0];this.setCellSize(r,l,s,i,o[t]),this.bodyStaging.appendChild(r),s+=o[t]-e,this.adapter.config.seamless&&(s-=2)}l+=i-e-2,this.adapter.config.seamless||(l+=2),h+=i-2}this.totalSize=h+2,this.mask=this.makeColumnMask(i,this.totalSize),this.bodyStaging.appendChild(this.mask),void 0!==this.colHeads&&(this.headMask=this.makeColumnMask(i,this.totalSize),this.headStaging.appendChild(this.headMask))}split(){this.table.splitVerticalNew(this.event.index),void 0!==this.colHeads&&(this.splitHead=this.colHeads.lastElementChild)}joinHeader(){if(void 0!==this.colHeads){for(this.headStaging.removeChild(this.headMask),this.colHeads.removeChild(this.splitHead);this.headStaging.children.length>0;)this.colHeads.appendChild(this.headStaging.children[0]);if(this.splitHead.children.length>0){let t=Ze(this.splitHead.style.left);for(;this.splitHead.children.length>0;){const e=this.splitHead.children[0];e.style.left=`${Ze(e.style.left)+t}px`,this.colHeads.appendChild(e)}}}}joinBody(){this.bodyStaging.removeChild(this.mask),this.body.removeChild(this.splitBody);const t=this.adapter.model.colCount,e=this.event.index,i=this.event.size,s=t-i-this.event.index;for(let t=0;t<i;++t)for(let s=0;s<this.rowCount;++s){const o=this.bodyStaging.children[0],r=s*(e+i)+e+t;this.bodyInsertAt(o,r)}let o=this.totalSize+this.animationStart;for(let r=0;r<this.rowCount;++r)for(let n=0;n<s;++n){const s=this.splitBody.children[0];s.style.left=`${Ze(s.style.left)+o}px`;const a=r*t+e+i+n;this.bodyInsertAt(s,a)}}bodyInsertAt(t,e){let i;i=e<this.body.children.length?this.body.children[e]:null,this.body.insertBefore(t,i)}}class $e extends De{constructor(t,e){if(super(t),this.done=!1,this.colCount=this.adapter.colCount,this.rowCount=this.adapter.rowCount,this.event=e,this.joinVertical=this.joinVertical.bind(this),0===this.body.children.length)this.initialWidth=0;else{const t=this.body.children[this.body.children.length-1],e=Ze(t.style.left),i=t.getBoundingClientRect();this.initialWidth=e+i.width}$e.current=this}prepare(){this.prepareStagingWithColumns(),this.arrangeColumnsInStaging(),this.splitVertical()}firstFrame(){}animationFrame(t){let e=0;this.adapter.config.seamless&&(e=1),this.splitBody.style.left=`${this.leftSplitBody-t*this.animationWidth+e}px`,this.mask.style.left=this.leftMask-t*this.animationWidth+"px",void 0!==this.colHeads&&(this.splitHead.style.left=`${this.leftSplitBody-t*this.animationWidth+e}px`,this.headMask.style.left=this.leftMask-t*this.animationWidth+"px")}lastFrame(){this.joinVertical(),this.disposeStaging()}arrangeColumnsInStaging(){let t=this.event.index;for(let e=0;e<this.adapter.rowCount;++e){for(let e=0;e<this.event.size;++e)this.bodyStaging.appendChild(this.body.children[t]);t+=this.colCount}const e=this.bodyStaging.children[0],i=this.bodyStaging.children[this.bodyStaging.children.length-1];let s=Ze(i.style.left)+Ze(i.style.width)+this.table.WIDTH_ADJUST;s-=1;let o=s-Ze(e.style.left);if(this.animationWidth=o,this.mask=this.makeColumnMask(s,o),this.bodyStaging.appendChild(this.mask),void 0!==this.colHeads){for(let t=0;t<this.event.size;++t)this.headStaging.appendChild(this.colHeads.children[this.event.index]);this.headMask=this.makeColumnMask(s,o),this.headStaging.appendChild(this.headMask)}}splitVertical(){this.table.splitVerticalNew(this.event.index),void 0!==this.colHeads&&(this.splitHead=this.colHeads.lastElementChild);const t=Ze(this.splitBody.style.left);this.splitBody.style.width=this.initialWidth-t-1+"px",this.leftSplitBody=t,this.leftMask=Ze(this.mask.style.left),void 0!==this.colHeads&&(this.splitHead.style.left=`${t}px`,this.splitHead.style.width=this.initialWidth-t-1+"px")}joinVertical(){this.bodyStaging.removeChild(this.mask),this.body.removeChild(this.splitBody),this.bodyStaging.replaceChildren(),this.moveSplitBodyToBody(),this.colHeads&&(this.headStaging.removeChild(this.headMask),this.colHeads.removeChild(this.splitHead),this.headStaging.replaceChildren(),this.moveSplitHeadToHead()),this.table.animationDone&&this.table.animationDone()}moveSplitHeadToHead(){if(0===this.splitHead.children.length)return;let t=Ze(this.splitHead.style.left);for(;this.splitHead.children.length>0;){const e=this.splitHead.children[0];e.style.left=`${Ze(e.style.left)+t}px`,this.colHeads.appendChild(e)}}moveSplitBodyToBody(){if(0===this.splitBody.children.length)return;let t=Ze(this.splitBody.style.left);for(let e=0;e<this.rowCount;++e)for(let i=0;i<this.colCount-this.event.index;++i){const s=this.splitBody.children[0];s.style.left=`${Ze(s.style.left)+t}px`;const o=e*this.adapter.colCount+this.event.index+i;this.bodyInsertAt(s,o)}}bodyInsertAt(t,e){let i;i=e<this.body.children.length?this.body.children[e]:null,this.body.insertBefore(t,i)}}let ze=468;function Pe(t){if(void 0===t)return;const e=function(t){for(;t!==document.body&&!1===Ge(t);){if(null===t.parentElement)return;t=t.parentElement}return t}(t);if(void 0===e)return;const i=e.getBoundingClientRect(),s=t.getBoundingClientRect();if(e!==document.body){const{x:t,y:o}=function(t,e,i){const s=16,o=i.left+t.scrollLeft-e.left-s,r=i.right+t.scrollLeft-e.left+s,n=i.top+t.scrollTop-e.top-s,a=i.bottom+t.scrollTop-e.top+s,l=t.clientWidth,h=t.clientHeight;var d=t.scrollLeft,c=t.scrollTop;r-o-2*s>l?d=o:r>t.scrollLeft+l?d=r-l:o<t.scrollLeft&&(d=o);a-n-2*s>h?c=n:a>t.scrollTop+h?c=a-h:n<t.scrollTop&&(c=n);return d=Math.max(0,d),c=Math.max(0,c),{x:d,y:c}}(e,i,s);!function(t,e,i){let s,o,r=Oe.get(t);void 0===r?(r={x:e,y:i},Oe.set(t,r)):(r.x=e,r.y=i);t===document.body?(s=window.scrollX||window.pageXOffset,o=window.scrollY||window.pageYOffset):(s=t.scrollLeft,o=t.scrollTop);const n=e-s,a=i-o;if(0===n&&0===a)return void Oe.delete(t);l=l=>{if(r.x!==e||r.y!==i)return!1;const h=s+l*n,d=o+l*a;return t===document.body?window.scrollTo(h,d):(t.scrollLeft=h,t.scrollTop=d),1===l&&Oe.delete(t),!0},setTimeout((()=>{window.requestAnimationFrame(We.bind(window,l,void 0,void 0))}),0);var l}(e,t,o),"fixed"!==window.getComputedStyle(e).position&&window.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else window.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}const Oe=new Map;let Ve=0;function We(t,e,i){void 0===e&&(e=Date.now(),i=++Ve);let s=(Date.now()-e)/ze;s=s>1?1:s;const o=(r=s,.5*(1-Math.cos(Math.PI*r)));var r;!1!==t(o)&&o<1&&window.requestAnimationFrame(We.bind(window,t,e,i))}var Ue,je=(Ue=window.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(Ue)?1:0);function Ge(t){const e=Ye(t,"Y")&&Xe(t,"Y"),i=Ye(t,"X")&&Xe(t,"X");return e||i}function Ye(t,e){return"X"===e?t.clientWidth+je<t.scrollWidth:t.clientHeight+je<t.scrollHeight}function Xe(t,e){const i=window.getComputedStyle(t,null)["overflow"+e];return"auto"===i||"scroll"===i}const Je=new CSSStyleSheet;Je.replaceSync(U`
:host {
    position: relative;
    display: inline-block;
    border: 1px solid var(--tx-gray-300);
    border-radius: 3px;
    /* outline-offset: -2px; */
    outline: none;
    font-family: var(--tx-font-family);
    font-size: var(--tx-font-size);
    background: #1e1e1e;

    /* not sure about these */
    /*
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    height: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    */

    min-height: 50px;
    min-width: 50px;
}

.staging, .body, .splitBody, .cols, .rows {
    position: absolute;
}

.cols {
    right: 0;
    top: 0;
}

.rows {
    left: 0;
    bottom: 0;
}

.staging {
    overflow: hidden;
    inset: 0;
}

.body {
    overflow: auto;
    inset: 0;
}

.cols, .rows {
    overflow: hidden;
}

.body > span,
.splitBody > span,
.cols > span,
.rows > span,
.measure > span,
.staging > span {
    position: absolute;
    box-sizing: content-box;
    white-space: nowrap;
    outline: none;
    border: solid 1px var(--tx-gray-200);
    padding: 0 2px 0 2px;
    margin: 0;
    background-color: #080808;
    font-weight: 400;
    overflow: hidden;
    cursor: default;
    caret-color: transparent;
}

.seamless > .body > span,
.seamless > .body > .splitBody > span,
.seamless > .cols > span,
.seamless > .rows > span,
.seamless > .cols > .splitBody > span,
.seamless > .rows > .splitBody > span,
.seamless > .measure > span,
.seamless > .staging > span {
    border: none 0px;
}

.body > span:hover {
    background: #1a1a1a;
}

.body > span.error, .splitBody > span.error {
    border-color: var(--tx-global-red-600);
    z-index: 1;
}

.body > span:focus, .splitBody > span:focus {
    background: #0e2035;
    border-color: #2680eb;
    z-index: 2;
}

.body > span:focus:hover {
    background: #112d4d;
}

.body > span.error, .splitBody > span.error {
    background-color: #522426;
}

.body > span.error:hover {
    background: #401111;
}

.cols > span.handle,
.rows > span.handle {
    padding: 0;
    border: 0 none;
    opacity: 0;
    background-color: #08f;
}
.fill {
    opacity: 0;
}

.cols > span.handle {
    cursor: col-resize;
}
.rows > span.handle {
    cursor: row-resize;
}

.staging span.head,
.cols span.head,
.rows span.head,
.measure span.head {
    background: #1e1e1e;
    font-weight: 600;
}

.colHack > span,
.cols > span {
    text-align: center;
}

.measure {
    position: absolute;
    opacity: 0;
}

.body > span.edit, .splitBody > span.edit, .body > span.edit:hover, .splitBody > span.edit:hover {
    caret-color: currentcolor;
}
`);function qe(t){return parseInt(t.substring(0,t.length-2))}function Ze(t){return parseFloat(t.substring(0,t.length-2))}function Ke(t){return!1!==t.isConnected&&("none"!==window.getComputedStyle(t).display&&(!t.parentElement||Ke(t.parentElement)))}class Qe extends Tt{constructor(t){super(),this.WIDTH_ADJUST=6,this.HEIGHT_ADJUST=2,this.HANDLE_SIZE=5,this.HANDLE_SKEW=3,this.visible=!1,this.prepareInProgress=!1,this.animator=new At,this.logger=new Qe.loggerType,this.logger.log("Table::constructor()"),this.arrangeAllMeasuredInGrid=this.arrangeAllMeasuredInGrid.bind(this),this.hostKeyDown=this.hostKeyDown.bind(this),this.cellKeyDown=this.cellKeyDown.bind(this),this.cellFocus=this.cellFocus.bind(this),this.focusIn=this.focusIn.bind(this),this.focusOut=this.focusOut.bind(this),this.pointerDown=this.pointerDown.bind(this),this.handleDown=this.handleDown.bind(this),this.handleMove=this.handleMove.bind(this),this.handleUp=this.handleUp.bind(this),this.setHeadingFillerSizeToScrollbarSize=this.setHeadingFillerSizeToScrollbarSize.bind(this),this.selectionChanged=this.selectionChanged.bind(this),this.modelChanged=this.modelChanged.bind(this),this.root=Y(this.body=Y()),this.root.className="root",this.body.className="body",this.measure=Y(),this.measure.classList.add("measure"),this.onkeydown=this.hostKeyDown,this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut),this.body.onresize=this.setHeadingFillerSizeToScrollbarSize,this.body.onscroll=()=>{this.animator.current&&this.animator.current instanceof De&&this.animator.current.scrollStaging(),this.setHeadingFillerSizeToScrollbarSize(),this.colHeads&&(this.colHeads.scrollLeft=this.body.scrollLeft,this.colResizeHandles.scrollLeft=this.body.scrollLeft),this.rowHeads&&(this.rowHeads.scrollTop=this.body.scrollTop,this.rowResizeHandles.scrollTop=this.body.scrollTop)},this.body.onpointerdown=this.pointerDown,this.attachShadow({mode:"open",delegatesFocus:!0}),this.shadowRoot.adoptedStyleSheets=[Je,ue],this.shadowRoot.appendChild(this.root),this.shadowRoot.appendChild(this.measure),t&&(V(this,t),t.selectionModel&&this.setModel(t.selectionModel)),void 0===Qe.observer&&(Qe.observer=new MutationObserver(((t,e)=>{Qe.allTables.forEach((t=>{Ke(t)&&(this.logger.log("Table.observer => table became visible => prepareCells()"),Qe.allTables.delete(t),t.prepareCells())}))})),Qe.observer.observe(document.body,{attributes:!0,subtree:!0}))}connectedCallback(){this.logger.log("Table::connectedCallback()"),setTimeout((()=>{Ke(this)?(this.logger.log("Table::connectedCallback() => is visible => prepareCells()"),this.prepareCells()):(this.logger.log("Table::connectedCallback() => is not visible => track in Table.allTables"),Qe.allTables.add(this))}),0),super.connectedCallback(),void 0===this.selection&&(this.selection=new Ae(_e.SELECT_CELL),this.selection.modified.add(this.selectionChanged,this))}disconnectedCallback(){this.logger.log("Table::disconnectedCallback()"),Qe.allTables.delete(this)}addStaging(...t){for(const e of t)void 0!==e&&this.root.insertBefore(e,this.root.children[0])}removeStaging(...t){for(const e of t)void 0!==e&&this.root.removeChild(e)}hostKeyDown(t){if(this.logger.log(`Table::hostKeyDown(ev): ${t.key}, mode: ${_e[this.selection.mode]}, adapter edit mode ${ke[this.adapter.config.editMode]}, editing=${this.editing}`),this.selection)switch(this.selection.mode){case _e.SELECT_ROW:{let e=this.selection.value.row;switch(t.key){case"ArrowDown":e+1<this.adapter.rowCount&&++e;break;case"ArrowUp":e>0&&--e}this.selection.row=e}break;case _e.SELECT_CELL:{let e={col:this.selection.col,row:this.selection.row};switch(t.key){case"ArrowRight":void 0===this.editing&&e.col+1<this.adapter.colCount&&(++e.col,t.preventDefault(),t.stopPropagation());break;case"ArrowLeft":void 0===this.editing&&e.col>0&&(--e.col,t.preventDefault(),t.stopPropagation());break;case"ArrowDown":e.row+1<this.adapter.rowCount&&(++e.row,t.preventDefault(),t.stopPropagation());break;case"ArrowUp":e.row>0&&(--e.row,t.preventDefault(),t.stopPropagation());break;case"Enter":void 0===this.editing?this.adapter?.config.editMode===ke.EDIT_ON_ENTER&&this.editCell():(this.saveCell(),e.row+1<this.adapter.rowCount&&(++e.row,this.selection.value=e,this.editCell())),t.preventDefault(),t.stopPropagation()}this.selection.value=e}break;case _e.EDIT_CELL:let e={col:this.selection.col,row:this.selection.row};switch(t.key){case"ArrowDown":e.row+1<this.adapter.rowCount&&(++e.row,t.preventDefault(),t.stopPropagation());break;case"ArrowUp":e.row>0&&(--e.row,t.preventDefault(),t.stopPropagation());break;case"Enter":void 0===this.editing?this.adapter?.config.editMode===ke.EDIT_ON_ENTER&&this.editCell():(this.saveCell(),this.editCell()),t.preventDefault(),t.stopPropagation()}this.selection.value=e}}cellKeyDown(t){this.logger.log("Table::cellKeyDown()");const e=t.target;if("Enter"===t.key)return this.hostKeyDown(t),void t.preventDefault();if(!e.classList.contains("edit")&&void 0===this.editing)switch(t.key){case"ArrowDown":case"ArrowUp":case"ArrowRight":case"ArrowLeft":case"Tab":case"Enter":break;default:this.adapter?.config.editMode===ke.EDIT_ON_ENTER&&t.preventDefault()}}cellFocus(t){this.logger.log("Table::cellFocus(event)");const e=t.target;if(e instanceof HTMLElement){const t=e.getBoundingClientRect(),i=this.clientPosToTablePos(t.x+t.width/2,t.y+t.height/2);void 0!==i&&(this.selection.value=i),this.selection?.mode===_e.SELECT_CELL&&this.adapter?.config.editMode===ke.EDIT_ON_FOCUS&&this.editCell()}}focusIn(t){}focusOut(t){}editCell(){const t=this.selection.value.col,e=this.selection.value.row;if(this.logger.log(`Table.editCell(): cell[${t}, ${e}]`),void 0!==this.editing&&this.editing.col===this.selection.value.col&&this.editing.row===this.selection.value.row)return;const i=this.body.children[t+e*this.adapter.colCount];this.editing=new He(t,e),i.classList.add("edit"),this.adapter.editCell(this.editing,i)}saveCell(){if(void 0===this.editing)return;const t=this.editing.col,e=this.editing.row;this.logger.log(`Table::saveCell(): cell[${t}, ${e}]`);const i=this.body.children[t+e*this.adapter.colCount];i.classList.remove("edit"),this.adapter.saveCell(this.editing,i),this.editing=void 0,this.focus()}pointerDown(t){}getModel(){return this.model}setModel(t){if(void 0===t)return this.logger.log("Table::setModel(undefined) => remove all models"),this.selection&&this.selection.modified.remove(this),this.model=void 0,this.selection=new Ae,void this.selection.modified.add(this.selectionChanged,this);if(t instanceof Ae)return this.logger.log("Table::setModel(SelectionModel) => set selection model"),this.selection&&this.selection.modified.remove(this),this.selection=t,void this.selection.modified.add(this.selectionChanged,this);if(t instanceof Ce){this.logger.log("Table::setModel(TableModel) => set table model"),this.model=t,this.model.modified.add(this.modelChanged,this);const e=Me.lookup(t);try{this.adapter=new e(t)}catch(t){throw console.log(`Table.setModel(): failed to instantiate table adapter: ${t}`),console.log("setting TypeScript's target to 'es6' might help"),t}this.prepareCells()}else if(t instanceof Object)throw this.logger.log(`Table::setModel(TableModel) => unexpected model of type ${t.constructor.name}`),Error(`Table.setModel(): unexpected model of type ${t.constructor.name}`)}selectionChanged(){if(this.logger.log(`Table::selectionChanged(): ${this.selection?.col}, ${this.selection?.row}, mode=${this.selection?_e[this.selection.mode]:"undefined"}`),void 0!==this.selection)switch(this.saveCell(),this.selection.mode){case _e.EDIT_CELL:if(document.activeElement===this){const t=this.body.children[this.selection.col+this.selection.row*this.adapter.colCount];(function(t){let e=document.activeElement;for(;null!==e;){if(e===t)return!0;if(null===e.shadowRoot)break;e=e.shadowRoot.activeElement}return!1})(t)||t.focus(),Pe(t),this.adapter?.config.editMode===ke.EDIT_ON_FOCUS&&this.editCell()}break;case _e.SELECT_CELL:case _e.SELECT_ROW:if(document.activeElement===this){const t=this.body.children[this.selection.col+this.selection.row*this.adapter.colCount];t.focus(),Pe(t)}}}modelChanged(t){if(this.logger.log(`Table::modelChanged(${t})`),(this.visible||0!==this.body.children.length)&&t instanceof Re)switch(t.type){case Se.CELL_CHANGED:{const e=t.col+t.row*this.adapter.colCount,i=this.body.children[e];if(void 0===i)return void console.log(`Table::modelChanged(): failed to find cell ${t.col}, ${t.row} (${e}) (body has ${this.body.children.length} children and table has parent ${this.parentElement})`);i instanceof HTMLSpanElement&&this.showCell(t,i)}break;case Se.INSERT_ROW:this.animator.run(new Be(this,t));break;case Se.REMOVE_ROW:this.animator.run(new Fe(this,t));break;case Se.INSERT_COL:this.animator.run(new Ne(this,t));break;case Se.REMOVE_COL:this.animator.run(new $e(this,t))}}prepareCells(){void 0!==this.adapter?0!==this.adapter.colCount&&0!==this.adapter.rowCount?(this.visible=Ke(this),this.visible?this.prepareInProgress?this.logger.log("Table::prepareCells(): prepareInProgress => abort"):(this.prepareInProgress=!0,this.logger.log("Table::prepareCells(): start"),this.adapter.config.seamless&&this.root.classList.add("seamless"),this.prepareMinCellSize(),this.prepareColumnHeads(),this.prepareRowHeads(),this.prepareBody(),this.logger.log("Table::prepareCells(): finish, schedule arrangeAllMeasuredInGrid()"),setTimeout(this.arrangeAllMeasuredInGrid,0)):this.logger.log("Table::prepareCells(): not visible, can not calculate layout => abort")):this.logger.log("Table::prepareCells(): col and/or row count is zero => abort"):this.logger.log("Table::prepareCells(): no adapter => abort")}arrangeAllMeasuredInGrid(){this.logger.log("Table::arrangeAllMeasuredInGrid(): begin"),this.calculateMinCellSize();let{colWidths:t,colHeadHeight:e}=this.calculateColumnWidths(),{rowHeights:i,rowHeadWidth:s}=this.calculateRowHeights();this.placeColumnHeads(t,e,s),this.placeRowHeads(i,e,s),this.placeBody(s,e),this.placeBodyCells(t,i,e,s),this.setHeadingFillerSizeToScrollbarSize(),this.prepareInProgress=!1,this.logger.log("Table::arrangeAllMeasuredInGrid(): finish")}prepareMinCellSize(){if(this.logger.log("Table::prepareMinCellSize()"),void 0!==this.minCellHeight)return;const t=X(G("Tg"));this.measure.appendChild(t)}calculateMinCellSize(){if(this.logger.log("Table::calculateMinCellSize()"),void 0!==this.minCellHeight)return;const t=this.measure.children[0],e=t.getBoundingClientRect();this.minCellWidth=Math.ceil(e.width-this.WIDTH_ADJUST),this.minCellHeight=Math.ceil(e.height-this.HEIGHT_ADJUST),this.measure.removeChild(t)}prepareColumnHeads(){this.logger.log("Table::prepareColumnHeads()");const t=new Array(this.adapter.colCount);for(let e=0;e<this.adapter.colCount;++e){const i=this.adapter.getColumnHead(e);void 0===this.colHeads&&void 0!==i&&(this.colHeads=Y(),this.colHeads.className="cols",this.root.appendChild(this.colHeads),this.colResizeHandles=Y(),this.colResizeHandles.className="cols",this.root.appendChild(this.colResizeHandles)),t[e]=i}if(void 0!==this.colHeads)for(let e=0;e<this.adapter.colCount;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}}prepareRowHeads(){this.logger.log("Table::prepareRowHeads()");let t=new Array(this.adapter.rowCount);for(let e=0;e<this.adapter.rowCount;++e){const i=this.adapter.getRowHead(e);void 0===this.rowHeads&&void 0!==i&&(this.rowHeads=Y(),this.rowHeads.className="rows",this.root.appendChild(this.rowHeads),this.rowResizeHandles=Y(),this.rowResizeHandles.className="rows",this.root.appendChild(this.rowResizeHandles)),t[e]=i}if(this.rowHeads)for(let e=0;e<this.adapter.rowCount;++e){const i=X(t[e]);i.className="head",this.measure.appendChild(i)}}prepareBody(){this.logger.log("Table::prepareBody()");for(let t=0;t<this.adapter.rowCount;++t)for(let e=0;e<this.adapter.colCount;++e){const i=this.createCell();this.showCell(new He(e,t),i),this.measure.appendChild(i)}}createCell(){const t=X();return t.onfocus=this.cellFocus,t.onkeydown=this.cellKeyDown,t.tabIndex=0,t.setAttribute("contenteditable",""),t}setCellSize(t,e,i,s,o){t.style.left=`${e}px`,t.style.top=`${i}px`,t.style.width=s-this.WIDTH_ADJUST+"px",t.style.height=o-this.HEIGHT_ADJUST+"px"}showCell(t,e){this.adapter.showCell(t,e),0!==e.children.length&&(e.style.caretColor="currentcolor")}calculateRowHeights(){this.logger.log("Table::calculateRowHeights()");let t=this.colHeads?this.adapter.colCount:0,e=0;const i=Array(this.adapter.rowCount);if(this.rowHeads)for(let s=0;s<this.adapter.rowCount;++s){const o=this.measure.children[t++].getBoundingClientRect();i[s]=Math.max(o.height,this.minCellHeight),e=Math.max(e,o.width)}else i.fill(this.minCellHeight);t=(this.colHeads?this.adapter.colCount:0)+(this.rowHeads?this.adapter.rowCount:0);for(let e=0;e<this.adapter.rowCount;++e){let s=i[e];for(let i=0;i<this.adapter.colCount;++i){const o=this.measure.children[t+i+e*this.adapter.colCount].getBoundingClientRect();s=Math.max(s,o.height)}i[e]=Math.ceil(s)}return e=Math.ceil(e),{rowHeights:i,rowHeadWidth:e}}calculateColumnWidths(t=!1){this.logger.log(`Table::calculateColumnWidths(withinBody = ${t})`);let e=0;const i=Array(this.adapter.colCount);if(this.colHeads)for(let t=0;t<this.adapter.colCount;++t){const s=this.measure.children[t].getBoundingClientRect();i[t]=Math.max(s.width,this.minCellWidth),e=Math.max(e,s.height)}else i.fill(this.minCellWidth);let s;e=Math.ceil(e),s=t?0:(this.colHeads?this.adapter.colCount:0)+(this.rowHeads?this.adapter.rowCount:0);for(let e=0;e<this.adapter.colCount;++e){let o=i[e];for(let i=0;i<this.adapter.rowCount;++i){let r,n=s+e+i*this.adapter.colCount;r=t?this.body.children[n]:this.measure.children[n];const a=r.getBoundingClientRect();o=Math.max(o,a.width)}i[e]=Math.ceil(o)}return{colWidths:i,colHeadHeight:e}}placeColumnHeads(t,e,i){if(this.logger.log("Table::placeColumnHeads(...)"),void 0===this.colHeads)return;const s=this.adapter.config.seamless?0:1;let o=0;for(let i=0;i<this.adapter.colCount;++i){const r=this.measure.children[0];this.setCellSize(r,o,0,t[i],e),this.colHeads.appendChild(r),o+=t[i]-1-1+s}let r=X();r.classList.add("head"),r.classList.add("fill"),r.style.left=`${o}px`,r.style.top="0",r.style.width="256px",r.style.height=`${e}px`,this.colHeads.appendChild(r),this.colResizeHandles.style.left=`${i}px`,this.colResizeHandles.style.height=`${e}px`,o=-this.HANDLE_SKEW;for(let i=0;i<this.adapter.colCount;++i){o+=t[i]-1;const s=this.createHandle(i,o,0,this.HANDLE_SIZE,e);this.colResizeHandles.appendChild(s)}o+=this.HANDLE_SIZE,r=X(),r.classList.add("head"),r.classList.add("fill"),r.style.left=`${o}px`,r.style.top="0",r.style.width="256px",r.style.height=`${e}px`,this.colResizeHandles.appendChild(r)}placeRowHeads(t,e,i){if(this.logger.log("Table::placeRowHeads(...)"),void 0===this.rowHeads)return;const s=this.adapter.config.seamless?0:1;let o=0;for(let e=0;e<this.adapter.rowCount;++e){const r=this.measure.children[0];this.setCellSize(r,0,o,i,t[e]),this.rowHeads.appendChild(r),o+=t[e]-1-1+s}let r=X();r.classList.add("head"),r.classList.add("fill"),r.style.left="0",r.style.top=`${o}px`,r.style.width=`${i}px`,r.style.height="256px",this.rowHeads.appendChild(r),this.rowResizeHandles.style.top=`${e}px`,this.rowResizeHandles.style.width=`${i}px`,o=-this.HANDLE_SKEW;for(let e=0;e<this.adapter.rowCount;++e){o+=t[e]-1;const s=this.createHandle(e,0,o,i,this.HANDLE_SIZE);this.rowResizeHandles.appendChild(s)}o+=this.HANDLE_SIZE,r=X(),r.classList.add("head"),r.classList.add("fill"),r.style.left="0",r.style.top=`${o}0px`,r.style.width=`${i}px`,r.style.height="256px",this.rowResizeHandles.appendChild(r)}placeBody(t,e){return this.logger.log("Table::placeBody(...)"),void 0!==this.colHeads&&(this.adapter?.config.seamless?(this.colHeads.style.height=e-2+"px",this.colHeads.style.left=t-(null==this.rowHeads?0:2)+"px"):(this.colHeads.style.height=`${e}px`,this.colHeads.style.left=t-(null==this.rowHeads?0:1)+"px")),void 0!==this.rowHeads&&(this.adapter?.config.seamless?(this.rowHeads.style.width=t-2+"px",this.rowHeads.style.top=e-(null==this.colHeads?0:2)+"px"):(this.rowHeads.style.width=`${t}px`,this.rowHeads.style.top=e-(null==this.colHeads?0:1)+"px")),--t,--e,this.adapter?.config.seamless&&(--t,--e),t<0&&(t=0),e<0&&(e=0),this.body.style.left=`${t}px`,this.body.style.top=`${e}px`,{rowHeadWidth:t,colHeadHeight:e}}placeBodyCells(t,e,i,s){this.logger.log("Table::placeBodyCells(...)");const o=this.adapter.config.seamless?0:1;let r=0;for(let i=0;i<this.adapter.rowCount;++i){let s=0;for(let n=0;n<this.adapter.colCount;++n){const a=this.measure.children[0];this.setCellSize(a,s,r,t[n],e[i]),this.body.appendChild(a),s+=t[n]-2+o}r+=e[i]-2+o}}createHandle(t,e,i,s,o){const r=X();return r.className="handle",r.style.left=`${e}px`,r.style.top=`${i}px`,r.style.width=`${s}px`,r.style.height=`${o}px`,r.dataset.idx=`${t}`,r.onpointerdown=this.handleDown,r.onpointermove=this.handleMove,r.onpointerup=this.handleUp,r}handleDown(t){t.preventDefault(),this.handle=t.target,this.handleIndex=parseInt(this.handle.dataset.idx)+1,this.handle.setPointerCapture(t.pointerId);if(this.handle.parentElement===this.colResizeHandles){this.deltaHandle=t.clientX-qe(this.handle.style.left),this.deltaSplitBody=t.clientX,this.deltaSplitHead=t.clientX-Ze(this.body.style.left);const e=this.colHeads.children[this.handleIndex-1];this.deltaColumn=t.clientX-Ze(e.style.width),this.splitVertical(this.handleIndex)}else{this.deltaHandle=t.clientY-Ze(this.handle.style.top),this.deltaSplitBody=t.clientY,this.deltaSplitHead=t.clientY-Ze(this.body.style.top);const e=this.rowHeads.children[this.handleIndex-1];this.deltaColumn=t.clientY-Ze(e.style.height),this.splitHorizontal(this.handleIndex)}}handleMove(t){if(void 0===this.handle)return;if(this.handle.parentElement===this.colResizeHandles){let e=t.clientX;const i=this.deltaColumn+8;e<i&&(e=i),this.handle.style.left=e-this.deltaHandle+"px",this.splitHead.style.left=e-this.deltaSplitHead+"px",this.splitBody.style.left=e-this.deltaSplitBody+"px";const s=this.handleIndex;this.colHeads.children[s-1].style.width=e-this.deltaColumn+"px";for(let t=0;t<this.adapter.rowCount;++t)this.body.children[s-1+t*s].style.width=e-this.deltaColumn+"px"}else{let e=t.clientY;const i=this.deltaColumn+8;e<i&&(e=i),this.handle.style.top=e-this.deltaHandle+"px",this.splitHead.style.top=e-this.deltaSplitHead+"px",this.splitBody.style.top=e-this.deltaSplitBody+"px";const s=this.handleIndex;this.rowHeads.children[s-1].style.height=e-this.deltaColumn+"px";let o=(s-1)*this.adapter.colCount;for(let t=0;t<this.adapter.colCount;++t)this.body.children[o+t].style.height=e-this.deltaColumn+"px"}}handleUp(t){if(void 0===this.handle)return;this.handleMove(t);if(this.handle.parentElement===this.colResizeHandles){let e=t.clientX;const i=this.deltaColumn+8;e<i&&(e=i),this.joinVertical(this.handleIndex,e-this.deltaSplitBody)}else{let e=t.clientY;const i=this.deltaColumn+8;e<i&&(e=i),this.joinHorizontal(this.handleIndex,e-this.deltaSplitBody)}this.handle=void 0}splitVerticalNew(t){this.logger.log(`Table.splitVerticalNew(splitCol = ${t})`),this.splitHeadVertical(t),this.splitBodyVertical(t)}splitHeadVertical(t){if(this.logger.log(`Table.splitHeadVertical(splitCol = ${t})`),void 0===this.colHeads)return;const e=this.adapter.config.seamless?0:1;this.splitHead=Y(),this.splitHead.className="splitBody colHack",this.splitHead.style.top="0",this.splitHead.style.bottom="0",this.splitHead.style.backgroundColor=Qe.splitColor;const i=t;if(0===this.body.children.length)this.splitHead.style.left="0px",this.splitHead.style.width="1px";else if(i<this.colHeads.children.length){let t=this.colHeads.children[i],s=0;const o=Ze(t.style.left);for(;i<this.colHeads.children.length;){t=this.colHeads.children[i];s+=t.getBoundingClientRect().width-e;let r=Ze(t.style.left);t.style.left=r-o+"px",this.splitHead.appendChild(t)}this.adapter.config.seamless&&(s+=e),this.splitHead.style.left=`${o}px`,this.splitHead.style.width=`${s}px`}else{let t=this.colHeads.children[this.body.children.length-1],i=t.getBoundingClientRect(),s=Ze(t.style.left)+i.width-e;this.splitHead.style.left=`${s}px`,this.splitHead.style.width="1px"}this.colHeads.appendChild(this.splitHead)}splitBodyVertical(t){this.logger.log(`Table.splitBodyVertical(splitCol=${t})`);const e=this.adapter.config.seamless?0:1;if(this.splitBody=Y(),this.splitBody.className="splitBody",this.splitBody.style.top="0",this.splitBody.style.bottom="0",this.splitBody.style.backgroundColor=Qe.splitColor,0===this.body.children.length)this.splitBody.style.left="0px",this.splitBody.style.width="1px";else{if(t<this.body.children.length/this.adapter.rowCount){let i=this.body.children[t];const s=Ze(i.style.left);let o=0;const r=this.body.children.length/this.adapter.rowCount-t;let n=t;for(let a=0;a<this.adapter.rowCount;++a){for(let t=0;t<r;++t){if(i=this.body.children[n],0===a){o+=i.getBoundingClientRect().width-e}i.style.left=Ze(i.style.left)-s+"px",this.splitBody.appendChild(i)}n+=t}this.splitBody.style.left=`${s}px`,this.splitBody.style.width=`${o}px`}else{let t=this.body.children[this.body.children.length-1],i=t.getBoundingClientRect(),s=Ze(t.style.left)+i.width-e;this.splitBody.style.left=`${s}px`,this.splitBody.style.width="1px"}}this.body.appendChild(this.splitBody)}splitVertical(t,e=0){this.logger.log(`Table::splitVertical(splitColumn=${t}, extra=${e})`),void 0!==this.colHeads&&(this.splitHead=Y(),this.splitHead.className="cols",this.splitHead.style.left=this.colHeads.style.left,this.splitHead.style.height=this.colHeads.style.height,this.root.appendChild(this.splitHead),setTimeout((()=>{this.splitHead.scrollTop=this.colHeads.scrollTop,this.splitHead.scrollLeft=this.colHeads.scrollLeft}),0)),this.splitBody=Y(),this.splitBody.className="splitBody";const i=this.body.getBoundingClientRect();this.splitBody.style.width=`${i.width}px`,this.splitBody.style.height=`${i.height}px`,this.body.appendChild(this.splitBody);const s=t,o=this.adapter.colCount-t+e;if(void 0!==this.splitHead){for(let e=0;e<o;++e)this.splitHead.appendChild(this.colHeads.children[t]);this.splitHead.appendChild(this.colHeads.children[this.colHeads.children.length-1].cloneNode())}let r=t;for(let t=0;t<this.adapter.rowCount;++t){for(let t=0;t<o;++t)this.splitBody.appendChild(this.body.children[r]);r+=s}}joinVertical(t,e,i=0,s,o){this.logger.log(`Table::joinVertical(splitCol=${t}, delta=${e}, extra=${i}, colCount = ${s}, rowCount = ${o})`),void 0===s&&(s=this.adapter.colCount),void 0===o&&(o=this.adapter.rowCount);const r=s-t+i;let n=t-i;if(void 0!==this.colHeads){const t=this.colHeads.children[this.colHeads.children.length-1];for(let i=0;i<r;++i){const i=this.splitHead.children[0],s=Ze(i.style.left);i.style.left=`${s+e}px`,this.colHeads.insertBefore(i,t)}const i=Ze(t.style.left);t.style.left=`${i+e}px`;for(let t=n;t<=s;++t){const i=this.colResizeHandles.children[t],s=Ze(i.style.left);i.style.left=`${s+e}px`}}for(let t=0;t<o;++t){let t=this.body.children[n];for(let i=0;i<r;++i){const i=this.splitBody.children[0],s=Ze(i.style.left);i.style.left=`${s+e}px`,this.body.insertBefore(i,t)}n+=s}void 0!==this.colHeads&&(this.root.removeChild(this.splitHead),this.splitHead=void 0),this.body.removeChild(this.splitBody),this.splitBody=void 0}splitHorizontalNew(t){this.logger.log(`Table.splitHorizontalNew(splitRow = ${t})`),this.splitHeadHorizontal(t),this.splitBodyHorizontal(t)}splitHeadHorizontal(t){if(this.logger.log(`Table.splitHeadHorizontal(splitRow = ${t})`),void 0===this.rowHeads)return;const e=this.adapter.config.seamless?0:1;this.splitHead=Y(),this.splitHead.className="splitBody",this.splitHead.style.left="0",this.splitHead.style.right="0",this.splitHead.style.backgroundColor=Qe.splitColor;const i=t;if(0===this.body.children.length)this.splitHead.style.top="0px",this.splitHead.style.height="1px";else if(i<this.rowHeads.children.length){let t=this.rowHeads.children[i],s=0;const o=Ze(t.style.top);for(;i<this.rowHeads.children.length;){t=this.rowHeads.children[i];s+=t.getBoundingClientRect().height-e;let r=Ze(t.style.top);t.style.top=r-o+"px",this.splitHead.appendChild(t)}this.adapter.config.seamless&&(s+=e),this.splitHead.style.top=`${o}px`,this.splitHead.style.height=`${s}px`}else{let t=this.rowHeads.children[this.body.children.length-1],i=t.getBoundingClientRect(),s=Ze(t.style.top)+i.height-e;this.splitHead.style.top=`${s}px`,this.splitHead.style.height="1px"}this.rowHeads.appendChild(this.splitHead)}splitBodyHorizontal(t){this.logger.log(`Table.splitBodyHorizontal(splitRow = ${t})`);const e=this.adapter.config.seamless?0:1;this.splitBody=Y(),this.splitBody.className="splitBody",this.splitBody.style.left="0",this.splitBody.style.right="0",this.splitBody.style.backgroundColor=Qe.splitColor;const i=t*this.adapter.colCount;if(0===this.body.children.length)this.splitBody.style.top="0px",this.splitBody.style.height="1px";else if(i<this.body.children.length){let t=this.body.children[i],s=this.adapter.colCount,o=0;const r=Ze(t.style.top);for(;i<this.body.children.length;){if(t=this.body.children[i],--s,0===s){o+=t.getBoundingClientRect().height-e,s=this.adapter.colCount}let n=Ze(t.style.top);t.style.top=n-r+"px",this.splitBody.appendChild(t)}o+=e,this.splitBody.style.top=`${r}px`,this.splitBody.style.height=`${o}px`}else{let t=this.body.children[this.body.children.length-1],i=t.getBoundingClientRect(),s=Ze(t.style.top)+i.height-e;this.splitBody.style.top=`${s}px`,this.splitBody.style.height="1px"}this.body.appendChild(this.splitBody)}splitHorizontal(t,e=0,i){this.logger.log(`Table.splitHorizontal(splitRow = ${t}, extra = ${e}, event = ...)`),void 0!==this.rowHeads&&(this.splitHead=Y(),this.splitHead.className="rows",this.splitHead.style.top=this.rowHeads.style.top,this.splitHead.style.width=this.rowHeads.style.width,this.root.appendChild(this.splitHead),setTimeout((()=>{this.splitHead.scrollTop=this.rowHeads.scrollTop,this.splitHead.scrollLeft=this.rowHeads.scrollLeft}),0)),this.splitBody=Y(),this.splitBody.className="splitBody",this.splitBody.style.backgroundColor="rgba(255,128,0,0.5)";const s=this.body.getBoundingClientRect();this.splitBody.style.width=`${s.width}px`,this.splitBody.style.height=`${s.height}px`,this.body.appendChild(this.splitBody);const o=this.adapter.rowCount-t+e;if(void 0!==this.splitHead){for(let e=0;e<o;++e)this.splitHead.appendChild(this.rowHeads.children[t]);this.splitHead.appendChild(this.rowHeads.children[this.rowHeads.children.length-1].cloneNode())}let r=this.adapter.colCount*t;for(let t=0;t<o;++t)for(let t=0;t<this.adapter.colCount;++t)this.splitBody.appendChild(this.body.children[r]);if(this.splitBody.children.length>0){r=this.splitBody.children.length-1;const t=qe(this.splitBody.children[r].style.top);for(let e=0;e<this.splitBody.children.length;++e){const i=this.splitBody.children[e],s=qe(i.style.top);i.style.top=s-t+"px"}this.splitBody.style.backgroundColor="#f80",this.splitBody.style.top=`${t}px`,this.splitBody.style.height=s.height-t+"px"}else if(void 0!==i&&this.body.children.length>0){r=i.index*this.adapter.colCount;const t=qe(this.body.children[r].style.top);this.splitBody.style.top=`${t}px`,this.splitBody.style.height=s.height-t+"px"}else if(this.body.children.length>0){const t=X();r=this.body.children.length-2;const e=this.body.children[r],i=this.body.children[r].getBoundingClientRect();t.style.border="none",t.style.backgroundColor="#1e1e1e";const o=qe(e.style.top)+i.height;t.style.top=`${o}px`,t.style.left="0px",t.style.width=s.width-2+"px",t.style.height=s.height-o+"px",this.splitBody.appendChild(t)}}joinHorizontal(t,e,i=0,s,o){this.logger.log(`Table. joinHorizontal(splitRow = ${t}, delta = ${e}, extra = ${i}, colCount = ${s}, rowCount = ${o}`),void 0===s&&(s=this.adapter.colCount),void 0===o&&(o=this.adapter.rowCount);const r=o-t+i;if(void 0!==this.rowHeads){const i=this.rowHeads.children[this.rowHeads.children.length-1];for(let t=0;t<r;++t){const t=this.splitHead.children[0],s=Ze(t.style.top);t.style.top=`${s+e}px`,this.rowHeads.insertBefore(t,i)}const s=Ze(i.style.top);i.style.top=`${s+e}px`;for(let i=t;i<=o;++i){const t=this.rowResizeHandles.children[i],s=Ze(t.style.top);t.style.top=`${s+e}px`}}for(let t=0;t<r;++t)for(let t=0;t<s;++t){const t=this.splitBody.children[0],i=Ze(t.style.top);t.style.top=`${i+e}px`,this.body.appendChild(t)}void 0!==this.rowHeads&&(this.root.removeChild(this.splitHead),this.splitHead=void 0),this.body.removeChild(this.splitBody),this.splitBody=void 0}setHeadingFillerSizeToScrollbarSize(){this.logger.log("Table.setHeadingFillerSizeToScrollbarSize()");const t=this.body.getBoundingClientRect();if(void 0!==this.colHeads){const e=Math.ceil(t.width-this.body.clientWidth);this.colHeads.children[this.colHeads.children.length-1].style.width=`${e}px`,this.colHeads.style.right=`${e}px`}if(void 0!==this.rowHeads){const e=Math.ceil(t.height-this.body.clientHeight);this.rowHeads.children[this.rowHeads.children.length-1].style.height=`${e}px`,this.rowHeads.style.bottom=`${e}px`}}clientPosToTablePos(t,e){let i,s;for(i=0;i<this.adapter.colCount;++i){const e=this.body.children[i].getBoundingClientRect();if(e.x<=t&&t<e.x+e.width)break}if(i>=this.adapter.colCount)return;let o=0;for(s=0;s<this.adapter.rowCount;++s){const t=this.body.children[o].getBoundingClientRect();if(t.y<=e&&e<t.y+t.height)break;o+=this.adapter.colCount}return s>=this.adapter.rowCount?void 0:new He(i,s)}}Qe.maskColor="#1e1e1e",Qe.splitColor="#1e1e1e",Qe.allTables=new Set,Qe.loggerType=class{log(t){}print(){}},Qe.define("tx-table",Qe);function ti(t){return void 0!==t&&"insertRow"in t&&"removeRow"in t}function ei(t){return void 0!==t&&"insertColumn"in t&&"removeColumn"in t}Tt.define("tx-tabletool",class extends ae{constructor(){super(),this.toolbar=P("div",{class:"toolbar"}),this.buttonAddRowAbove=P("button",{class:"left",title:"add row above",children:O("svg",{style:{display:"block"},viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"0.5",y1:"8.5",x2:"12.5",y2:"8.5",class:"stroke"}),P("line",{x1:"4.5",y1:"8.5",x2:"4.5",y2:"13.5",class:"stroke"}),P("line",{x1:"8.5",y1:"8.5",x2:"8.5",y2:"13.5",class:"stroke"}),P("line",{x1:"6.5",y1:"2",x2:"6.5",y2:"7",class:"stroke"}),P("line",{x1:"4",y1:"4.5",x2:"9",y2:"4.5",class:"stroke"})]})}),this.buttonAddRowAbove.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ti(t)&&t.insertRow(e.row)},this.toolbar.appendChild(this.buttonAddRowAbove),this.buttonAddRowBelow=P("button",{title:"add row below",children:O("svg",{viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"0.5",y1:"4.5",x2:"12.5",y2:"4.5",class:"stroke"}),P("line",{x1:"4.5",y1:"0.5",x2:"4.5",y2:"4.5",class:"stroke"}),P("line",{x1:"8.5",y1:"0.5",x2:"8.5",y2:"4.5",class:"stroke"}),P("line",{x1:"6.5",y1:"6",x2:"6.5",y2:"11",class:"stroke"}),P("line",{x1:"4",y1:"8.5",x2:"9",y2:"8.5",class:"stroke"})]})}),this.buttonAddRowBelow.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ti(t)&&t.insertRow(e.row+1)},this.toolbar.appendChild(this.buttonAddRowBelow),this.buttonDeleteRow=P("button",{class:"right",title:"delete row",children:O("svg",{viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"0.5",y1:"4.5",x2:"12.5",y2:"4.5",class:"stroke"}),P("line",{x1:"0.5",y1:"8.5",x2:"12.5",y2:"8.5",class:"stroke"}),P("line",{x1:"5.5",y1:"3.5",x2:"11.5",y2:"9.5",class:"stroke","stroke-width":"1.5"}),P("line",{x1:"11.5",y1:"3.5",x2:"5.5",y2:"9.5",class:"stroke","stroke-width":"1.5"})]})}),this.buttonDeleteRow.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ti(t)&&t.removeRow(e.row,1)},this.toolbar.appendChild(this.buttonDeleteRow),this.toolbar.appendChild(document.createTextNode(" ")),this.buttonAddColumnLeft=P("button",{class:"left",title:"add column left",children:O("svg",{viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"8.5",y1:"0.5",x2:"8.5",y2:"12.5",class:"stroke"}),P("line",{x1:"8.5",y1:"4.5",x2:"12.5",y2:"4.5",class:"stroke"}),P("line",{x1:"8.5",y1:"8.5",x2:"12.5",y2:"8.5",class:"stroke"}),P("line",{x1:"2",y1:"6.5",x2:"7",y2:"6.5",class:"stroke"}),P("line",{x1:"4.5",y1:"4",x2:"4.5",y2:"9",class:"stroke"})]})}),this.buttonAddColumnLeft.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ei(t)&&t.insertColumn(e.col)},this.toolbar.appendChild(this.buttonAddColumnLeft),this.buttonAddColumnRight=P("button",{title:"add column right",children:O("svg",{viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"4.5",y1:"0.5",x2:"4.5",y2:"12.5",class:"stroke"}),P("line",{x1:"0.5",y1:"4.5",x2:"4.5",y2:"4.5",class:"stroke"}),P("line",{x1:"0.5",y1:"8.5",x2:"4.5",y2:"8.5",class:"stroke"}),P("line",{x1:"6",y1:"6.5",x2:"11",y2:"6.5",class:"stroke"}),P("line",{x1:"8.5",y1:"4",x2:"8.5",y2:"9",class:"stroke"})]})}),this.buttonAddColumnRight.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ei(t)&&t.insertColumn(e.col+1)},this.toolbar.appendChild(this.buttonAddColumnRight),this.buttonDeleteColumn=P("button",{class:"right",title:"delete column",children:O("svg",{viewBox:"0 0 13 13",width:"13",height:"13",children:[P("rect",{x:"0.5",y:"0.5",width:"12",height:"12",class:"strokeFill"}),P("line",{x1:"4.5",y1:"0.5",x2:"4.5",y2:"12.5",class:"stroke"}),P("line",{x1:"8.5",y1:"0.5",x2:"8.5",y2:"12.5",class:"stroke"}),P("line",{x1:"3.5",y1:"5.5",x2:"9.5",y2:"11.5",class:"stroke","stroke-width":"1.5"}),P("line",{x1:"3.5",y1:"11.5",x2:"9.5",y2:"5.5",class:"stroke","stroke-width":"1.5"})]})}),this.buttonDeleteColumn.onclick=()=>{this.lastActiveTable?.focus();const t=this.lastActiveTable?.model,e=this.lastActiveTable?.selection;e&&ei(t)&&t.removeColumn(e.col,1)},this.toolbar.appendChild(this.buttonDeleteColumn),this.toolbar.appendChild(document.createTextNode(" ")),this.buttonAddNodeAbove=P("button",{class:"left",title:"add node above",children:O("svg",{style:{display:"block",border:"none"},viewBox:"0 0 8 17",width:"8",height:"17",children:[P("rect",{x:"0.5",y:"1.5",width:"6",height:"6",class:"strokeFill"}),P("rect",{x:"0.5",y:"9.5",width:"6",height:"6",class:"fill"}),P("line",{x1:"3.5",y1:"3",x2:"3.5",y2:"6",class:"stroke"}),P("line",{x1:"2",y1:"4.5",x2:"5",y2:"4.5",class:"stroke"}),P("line",{x1:"3.5",y1:"0",x2:"3.5",y2:"1",class:"stroke"}),P("line",{x1:"3.5",y1:"8",x2:"3.5",y2:"17",class:"stroke"})]})}),this.toolbar.appendChild(this.buttonAddNodeAbove),this.buttonAddNodeBelow=P("button",{title:"add node below",children:O("svg",{style:{display:"block",border:"none"},viewBox:"0 0 8 17",width:"8",height:"17",children:[P("rect",{x:"0.5",y:"1.5",width:"6",height:"6",class:"fill"}),P("rect",{x:"0.5",y:"9.5",width:"6",height:"6",class:"strokeFill"}),P("line",{x1:"3.5",y1:"11",x2:"3.5",y2:"14",class:"stroke"}),P("line",{x1:"2",y1:"12.5",x2:"5",y2:"12.5",class:"stroke"}),P("line",{x1:"3.5",y1:"0",x2:"3.5",y2:"9",class:"stroke"}),P("line",{x1:"3.5",y1:"16",x2:"3.5",y2:"17",class:"stroke"})]})}),this.toolbar.appendChild(this.buttonAddNodeBelow),this.buttonAddNodeParent=P("button",{title:"add node parent",children:O("svg",{viewBox:"0 0 13 17",width:"13",height:"17",children:[P("rect",{x:"0.5",y:"1.5",width:"6",height:"6",class:"strokeFill"}),P("rect",{x:"6.5",y:"9.5",width:"6",height:"6",class:"fill"}),P("line",{x1:"7",y1:"4.5",x2:"10",y2:"4.5",class:"stroke"}),P("line",{x1:"9.5",y1:"4",x2:"9.5",y2:"9",class:"stroke"}),P("line",{x1:"3.5",y1:"3",x2:"3.5",y2:"6",class:"stroke"}),P("line",{x1:"2",y1:"4.5",x2:"5",y2:"4.5",class:"stroke"}),P("line",{x1:"3.5",y1:"0",x2:"3.5",y2:"1",class:"stroke"}),P("line",{x1:"3.5",y1:"8",x2:"3.5",y2:"17",class:"stroke"})]})}),this.buttonAddNodeParent.onclick=()=>{},this.toolbar.appendChild(this.buttonAddNodeParent),this.buttonAddNodeChild=P("button",{title:"add node child",children:O("svg",{viewBox:"0 0 13 17",width:"13",height:"17",children:[P("rect",{x:"0.5",y:"1.5",width:"6",height:"6",class:"fill"}),P("rect",{x:"6.5",y:"9.5",width:"6",height:"6",class:"strokeFill"}),P("line",{x1:"7",y1:"4.5",x2:"10",y2:"4.5",class:"stroke"}),P("line",{x1:"9.5",y1:"4",x2:"9.5",y2:"9",class:"stroke"}),P("line",{x1:"9.5",y1:"11",x2:"9.5",y2:"14",class:"stroke"}),P("line",{x1:"8",y1:"12.5",x2:"11",y2:"12.5",class:"stroke"}),P("line",{x1:"3.5",y1:"0",x2:"3.5",y2:"17",class:"stroke"})]})}),this.toolbar.appendChild(this.buttonAddNodeChild),this.buttonDeleteNode=P("button",{class:"right",title:"delete node",children:O("svg",{viewBox:"0 0 10 17",width:"10",height:"17",children:[P("rect",{x:"1.5",y:"5.5",width:"6",height:"6",class:"strokeFill"}),P("line",{x1:"4.5",y1:"2",x2:"4.5",y2:"5",class:"stroke"}),P("line",{x1:"4.5",y1:"12",x2:"4.5",y2:"15",class:"stroke"}),P("line",{x1:"0.5",y1:"4.5",x2:"8.5",y2:"12.5",class:"stroke","stroke-width":"1.5"}),P("line",{x1:"8.5",y1:"4.5",x2:"0.5",y2:"12.5",class:"stroke","stroke-width":"1.5"})]})}),this.toolbar.appendChild(this.buttonDeleteNode),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[Dt],this.shadowRoot.appendChild(this.toolbar)}canHandle(t){return t instanceof Qe}activate(){this.lastActiveTable=ae.activeView,this.toolbar.classList.add("active")}deactivate(){this.lastActiveTable=void 0,this.toolbar.classList.remove("active")}});class ii extends Map{}class si extends Map{}var oi;!function(t){t[t.MORPH=0]="MORPH",t[t.POSE=1]="POSE"}(oi||(oi={}));class ri{constructor(){this.changed=new ot,this.dirty=!1,this.poseChanged=!1,this.mode=oi.MORPH,this.vertexBase=new T,this.poses=new ni,this.bodyset=new ni,this.facevector=new H,this.facegroup=new z,this.targetmap=new ii,this.posemap=new si}morphMode(){this.mode=oi.MORPH,this.markDirty()}poseMode(){this.initPoses(),this.mode=oi.POSE,this.poseChanged=!0,this.markDirty()}getVertexes(){switch(this.mode){case oi.MORPH:return this.vertexMorphed;case oi.POSE:return this.vertexPosed}}clear(){switch(this.mode){case oi.MORPH:this.clearMorph();break;case oi.POSE:this.clearPose()}}clearMorph(){0!==this.bodyset.size&&(this.vertexMorphed.setFrom(this.vertexBase),this.bodyset.clear(),this.markDirty())}clearPose(){0!==this.poses.size&&(this.poses.clear(),this.poseChanged=!0,this.markDirty())}markDirty(){!1===this.dirty&&(this.dirty=!0,this.changed.trigger())}update(){this.updatePose(),this.dirty=!1}loadMeshFactory(t,e){this.vertexBase.load(t),this.facevector.loadGeometry(e),this.vertexMorphed=this.vertexBase.clone()}loadGroupsFactory(t){return this.facegroup.load(t)}loadTargetsFactory(t,e=1,i=!1,s=!0){s&&this.targetmap.clear();const o=new E;o.setRootPath(t),o.setRecursive(e),o.setFileFilter(".target");const r=o.getDirectoryList();for(const e of r){const s=e.substring(t.length+1),o=new L(e,i);this.targetmap.set(s,o)}console.log(`${i?"loaded":"referenced"} ${r.length} morph targets from ${t}/`)}loadPoseTargetsFactory(t,e=1){this.posemap.clear();const i=new E;i.setRootPath(t),i.setRecursive(e),i.setFileType(m.DIRECTORY);const s=i.getDirectoryList();let o=0;for(const e of s){const i=e.substring(t.length+1);-1!==i.indexOf("/")&&(this.posemap.set(i,new $(i,e,!1)),++o)}console.log(`loaded ${o} pose entries from ${t}/`)}initPoses(){this.vertexPosed=this.vertexMorphed.clone(),this.posemap.forEach((t=>{const e=t.getTarget();e.calcRotationsCenteroids(this.vertexMorphed),e.calcTranslationsFormFactors(this.vertexMorphed),e.calcNormalizations()}))}setPose(t,e){const i=this.getPoseTargetForName(t);if(void 0===i)throw Error(`unknown pose target ${t}`);if(e<i.getMinAngle()&&(e=i.getMinAngle()),e>i.getMaxAngle()&&(e=i.getMaxAngle()),!this.posemap.has(t))throw new Error(`a pose target with name "${t}" wasn't found in posemap`);if(0===e){if(!this.poses.has(t))return e;this.poses.delete(t)}else{if(this.poses.get(t)===e)return e;this.poses.set(t,e)}return!1===this.poseChanged&&(this.poseChanged=!0,this.markDirty()),e}getPose(t){const e=this.poses.get(t);return void 0===e?0:e}updatePose(){!1!==this.poseChanged&&(this.poseChanged=!1,this.vertexPosed.setFrom(this.vertexMorphed),[...this.poses.keys()].sort().forEach((t=>{const e=this.getPoseTargetForName(t),i=this.poses.get(t);this.doPose(t,i,e.getModVertex())})))}getTargetForName(t){var e;return null===(e=this.targetmap.get(t))||void 0===e?void 0:e.getTarget()}getPoseTargetForName(t){var e;return null===(e=this.posemap.get(t))||void 0===e?void 0:e.getTarget()}doPose(t,e,i){const s=this.getPoseTargetForName(t),o=e<0?s.getNegativeRotations():s.getPositiveRotations(),r=e<0?s.getNegativeTranslations():s.getPositiveTranslations();for(const t of r){if("00"!==t.getCat())throw Error("not implemented yet");this.doPoseTranslation(t,e,i)}for(const t of o)this.doPoseRotation(t,e,i)}doPoseTranslation(t,e,i){const s=t.getTarget(),o=t.getFormFactor();let r=0;t.getNormalize()?e<0?e<t.getMaxAngle()&&(r=Math.max(e,t.getMinAngle())-t.getMaxAngle()):e>t.getMinAngle()&&(r=Math.min(e,t.getMaxAngle())-t.getMinAngle()):r=e;for(const t of s){if(!i.has(t.vertex_number))continue;const e=this.vertexPosed[t.vertex_number].co;h(e,e,l(o[0]*t.morph_vector[0]*r,o[1]*t.morph_vector[1]*r,o[2]*t.morph_vector[2]*r))}}doPoseRotation(t,e,n){let a=0,l=i();t.getNormalize()?e<0?e<t.getMaxAngle()&&(a=Math.max(e,t.getMinAngle())-t.getMaxAngle()):e>t.getMinAngle()&&(a=Math.min(e,t.getMaxAngle())-t.getMinAngle()):a=e;const d=t.getAxis(),c=Math.PI/180;for(const e of t){if(!n.has(e.vertex_number))continue;const i=a*e.rotation*c;switch((p=l)[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,d){case b.X_AXIS:s(l,l,i);break;case b.Y_AXIS:o(l,l,i);break;case b.Z_AXIS:r(l,l,i)}const u=this.vertexPosed[e.vertex_number].co;if(void 0===u)throw Error();v(u,u,t.getCenter()),g(u,u,l),h(u,u,t.getCenter())}var p}doMorph(t,e){if(e<0&&(e=0),e>1&&(e=1),!this.targetmap.has(t))throw new Error(`a morph target with name "${t}" wasn't found in targetmap`);let i,s=this.getMorph(t);i=0===e?-s:e-s;const o=this.getTargetForName(t);for(const t of o){const e=this.vertexMorphed[t.vertex_number].co;h(e,e,c(a(),t.morph_vector,i))}if(0===e){if(!this.bodyset.has(t))return e;this.bodyset.delete(t)}else{if(this.bodyset.get(t)===e)return e;this.bodyset.set(t,e)}return this.markDirty(),e}getMorph(t){const e=this.bodyset.get(t);return void 0===e?0:e}}class ni extends Map{}var ai=Uint8Array,li=Uint16Array,hi=Int32Array,di=new ai([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ci=new ai([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pi=new ai([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ui=function(t,e){for(var i=new li(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var o=new hi(i[30]);for(s=1;s<30;++s)for(var r=i[s];r<i[s+1];++r)o[r]=r-i[s]<<5|s;return{b:i,r:o}},gi=ui(di,2),fi=gi.b,mi=gi.r;fi[28]=258,mi[258]=28;for(var bi=ui(ci,0).b,vi=new li(32768),xi=0;xi<32768;++xi){var yi=(43690&xi)>>1|(21845&xi)<<1;yi=(61680&(yi=(52428&yi)>>2|(13107&yi)<<2))>>4|(3855&yi)<<4,vi[xi]=((65280&yi)>>8|(255&yi)<<8)>>1}var wi=function(t,e,i){for(var s=t.length,o=0,r=new li(e);o<s;++o)t[o]&&++r[t[o]-1];var n,a=new li(e);for(o=1;o<e;++o)a[o]=a[o-1]+r[o-1]<<1;if(i){n=new li(1<<e);var l=15-e;for(o=0;o<s;++o)if(t[o])for(var h=o<<4|t[o],d=e-t[o],c=a[t[o]-1]++<<d,p=c|(1<<d)-1;c<=p;++c)n[vi[c]>>l]=h}else for(n=new li(s),o=0;o<s;++o)t[o]&&(n[o]=vi[a[t[o]-1]++]>>15-t[o]);return n},Ci=new ai(288);for(xi=0;xi<144;++xi)Ci[xi]=8;for(xi=144;xi<256;++xi)Ci[xi]=9;for(xi=256;xi<280;++xi)Ci[xi]=7;for(xi=280;xi<288;++xi)Ci[xi]=8;var _i=new ai(32);for(xi=0;xi<32;++xi)_i[xi]=5;var ki=wi(Ci,9,1),Si=wi(_i,5,1),Hi=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},Ai=function(t,e,i){var s=e/8|0;return(t[s]|t[s+1]<<8)>>(7&e)&i},Ti=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},Ei=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mi=function(t,e,i){var s=new Error(e||Ei[t]);if(s.code=t,Error.captureStackTrace&&Error.captureStackTrace(s,Mi),!i)throw s;return s},Ri=function(t,e,i,s){var o=t.length,r=s?s.length:0;if(!o||e.f&&!e.l)return i||new ai(0);var n=!i,a=n||2!=e.i,l=e.i;n&&(i=new ai(3*o));var h=function(t){var e=i.length;if(t>e){var s=new ai(Math.max(2*e,t));s.set(i),i=s}},d=e.f||0,c=e.p||0,p=e.b||0,u=e.l,g=e.d,f=e.m,m=e.n,b=8*o;do{if(!u){d=Ai(t,c,1);var v=Ai(t,c+1,3);if(c+=3,!v){var x=t[(M=4+((c+7)/8|0))-4]|t[M-3]<<8,y=M+x;if(y>o){l&&Mi(0);break}a&&h(p+x),i.set(t.subarray(M,y),p),e.b=p+=x,e.p=c=8*y,e.f=d;continue}if(1==v)u=ki,g=Si,f=9,m=5;else if(2==v){var w=Ai(t,c,31)+257,C=Ai(t,c+10,15)+4,_=w+Ai(t,c+5,31)+1;c+=14;for(var k=new ai(_),S=new ai(19),H=0;H<C;++H)S[pi[H]]=Ai(t,c+3*H,7);c+=3*C;var A=Hi(S),T=(1<<A)-1,E=wi(S,A,1);for(H=0;H<_;){var M,R=E[Ai(t,c,T)];if(c+=15&R,(M=R>>4)<16)k[H++]=M;else{var L=0,D=0;for(16==M?(D=3+Ai(t,c,3),c+=2,L=k[H-1]):17==M?(D=3+Ai(t,c,7),c+=3):18==M&&(D=11+Ai(t,c,127),c+=7);D--;)k[H++]=L}}var I=k.subarray(0,w),B=k.subarray(w);f=Hi(I),m=Hi(B),u=wi(I,f,1),g=wi(B,m,1)}else Mi(1);if(c>b){l&&Mi(0);break}}a&&h(p+131072);for(var F=(1<<f)-1,N=(1<<m)-1,$=c;;$=c){var z=(L=u[Ti(t,c)&F])>>4;if((c+=15&L)>b){l&&Mi(0);break}if(L||Mi(2),z<256)i[p++]=z;else{if(256==z){$=c,u=null;break}var P=z-254;if(z>264){var O=di[H=z-257];P=Ai(t,c,(1<<O)-1)+fi[H],c+=O}var V=g[Ti(t,c)&N],W=V>>4;V||Mi(3),c+=15&V;B=bi[W];if(W>3){O=ci[W];B+=Ti(t,c)&(1<<O)-1,c+=O}if(c>b){l&&Mi(0);break}a&&h(p+131072);var U=p+P;if(p<B){var j=r-B,G=Math.min(B,U);for(j+p<0&&Mi(3);p<G;++p)i[p]=s[j+p]}for(;p<U;++p)i[p]=i[p-B]}}e.l=u,e.p=$,e.b=p,e.f=d,u&&(d=1,e.m=f,e.d=g,e.n=m)}while(!d);return p!=i.length&&n?function(t,e,i){return(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length),new ai(t.subarray(e,i))}(i,0,p):i.subarray(0,p)},Li=new ai(0);function Di(t,e){return Ri(t.subarray((i=t,s=e&&e.dictionary,(8!=(15&i[0])||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Mi(6,"invalid zlib data"),(i[1]>>5&1)==+!s&&Mi(6,"invalid zlib data: "+(32&i[1]?"need":"unexpected")+" dictionary"),2+(i[1]>>3&4)),-4),{i:2},e&&e.out,e&&e.dictionary);var i,s}var Ii="undefined"!=typeof TextDecoder&&new TextDecoder;try{Ii.decode(Li,{stream:!0}),1}catch(t){}class Bi{readFile(t){if(Bi.debug&&console.log(`HTTPJSFSAdapter.isFile('${t}')`),t.endsWith(".z")){Bi.debug&&console.log(`load compressed file ${t}`);const e=new XMLHttpRequest;if(e.overrideMimeType("text/plain; charset=x-user-defined"),e.open("GET",`data/${t}`,!1),e.send(null),e.status>400)throw new Error(`Request failed for '${t}': ${e.statusText}`);const i=new ArrayBuffer(e.responseText.length),s=new Uint8Array(i);for(let t=0;t<e.responseText.length;++t)s[t]=e.responseText.charCodeAt(t);return new TextDecoder("utf-8").decode(Di(s))}if(t.endsWith("/directory.json")){Bi.debug&&console.log(`load uncompressed file ${t}`);const e=new XMLHttpRequest;if(e.open("GET",`data/${t}`,!1),e.send(null),e.status<400)return e.responseText;throw new Error(`Request failed for '${t}': ${e.statusText}`)}return this.readFile(`${t}.z`)}exists(t){Bi.debug&&console.log(`HTTPJSFSAdapter.exits('${t}')`);let e=Bi.directoryCache.get(t);if(void 0===e){try{this.listDir(t)}catch(t){return!1}e=Bi.directoryCache.get(t)}return void 0!==e}isFile(t){Bi.debug&&console.log(`HTTPJSFSAdapter.isFile('${t}')`);let e=Bi.directoryCache.get(t);if(void 0===e){try{this.listDir(t)}catch(e){throw Error(`HTTPFSAdapter.isFile('${t}')": failed to load directory ${t}`)}e=Bi.directoryCache.get(t)}if(void 0===e)throw Error(`HTTPFSAdapter.isFile('${t}'): info === undefined`);return!e.isDir}isDir(t){var e;Bi.debug&&console.log(`HTTPFSAdapter.isDir('${t}')`);const i=Bi.directoryCache.get(t);if(void 0===i){const i=t.lastIndexOf("/");if(i>=0){const s=Bi.directoryCache.get(t.substring(0,i));if(void 0!==s&&(null===(e=s.dir)||void 0===e?void 0:e.includes(t.substring(i+1))))return!0}throw Error(`HTTPFSAdapter.isFile('${t}')`)}return i.isDir}listDir(t){Bi.debug&&console.log(`HTTPFSAdapter.listDir('${t}')`);let e=Bi.directoryCache.get(t);if(void 0!==e&&void 0!==e.dir)return e.dir;void 0===e&&(e={file:"",isDir:!0,dir:void 0});const i=this.readFile(`${t}/directory.json`),s=JSON.parse(i);e.dir=[];for(const i of s){const s=`${t}/${i.file}`;e.dir.push(i.file),i.isDir||Bi.directoryCache.set(s,{file:i.file,isDir:!1})}return Bi.directoryCache.set(t,e),e.dir}realPath(t){return Bi.debug&&console.log(`HTTPFSAdapter.realPath('${t}')`),t}joinPath(t,e){return Bi.debug&&console.log(`HTTPFSAdapter.joinPath('${t}', '${e}')`),`${t}/${e}`}}Bi.debug=!1,Bi.directoryCache=new Map;class Fi{constructor(t,e,i){const s=t.createProgram();if(null===s)throw Error("Unable to create WebGLProgram");const o=Fi.compileShader(t,t.VERTEX_SHADER,e),r=Fi.compileShader(t,t.FRAGMENT_SHADER,i);if(t.attachShader(s,o),t.attachShader(s,r),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))throw Error(`Unable to initialize WebGLProgram: ${t.getProgramInfoLog(s)}`);this.gl=t,this.program=s,this.vertexPosition=t.getAttribLocation(this.program,"aVertexPosition"),this.vertexNormal=t.getAttribLocation(this.program,"aVertexNormal"),this.projectionMatrix=Fi.getUniformLocation(t,this.program,"uProjectionMatrix"),this.modelViewMatrix=Fi.getUniformLocation(t,this.program,"uModelViewMatrix"),this.normalMatrix=Fi.getUniformLocation(t,this.program,"uNormalMatrix")}bind(t,e,i,s){const o=this.gl.FLOAT;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.vertexAttribPointer(this.vertexPosition,3,o,false,0,0),this.gl.enableVertexAttribArray(this.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.vertexAttribPointer(this.vertexNormal,3,o,false,0,0),this.gl.enableVertexAttribArray(this.vertexNormal),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t)}init(t,e,i){this.initProgram(),this.initProjectionMatrix(t),this.initModelViewMatrix(e),this.initNormalMatrix(i)}initProgram(){this.gl.useProgram(this.program)}initProjectionMatrix(t){this.gl.uniformMatrix4fv(this.projectionMatrix,!1,t)}initModelViewMatrix(t){this.gl.uniformMatrix4fv(this.modelViewMatrix,!1,t)}initNormalMatrix(t){this.gl.uniformMatrix4fv(this.normalMatrix,!1,t)}static compileShader(t,e,i){const s=t.createShader(e);if(null===s)throw Error("Unable to create WebGLShader");if(t.shaderSource(s,i),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS))throw t.deleteShader(s),Error(`An error occurred compiling the ${e} WebGLShader: ${t.getShaderInfoLog(s)}`);return s}static getUniformLocation(t,e,i){const s=t.getUniformLocation(e,i);if(null===s)throw Error(`Internal Error: Failed to get uniform location for ${i}`);return s}}class Ni extends Fi{constructor(t){super(t,$i,zi),this._color=Fi.getUniformLocation(t,this.program,"uColor")}setColor(t){this.gl.uniform4fv(this._color,t)}}const $i="\n// this is our input per vertex\nattribute vec4 aVertexPosition;\nattribute vec3 aVertexNormal;\n\n// input for all vertices (uniform for the whole shader program)\nuniform mat4 uNormalMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec4 uColor;\n\n// data exchanged with other graphic pipeline stages\nvarying lowp vec4 vColor;\nvarying highp vec3 vLighting;\n\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n\n  highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n  highp vec3 directionalLightColor = vec3(1, 1, 1);\n  highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n\n  highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);\n\n  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n  vLighting = ambientLight + (directionalLightColor * directional);\n\n  vColor = uColor;\n}",zi="\nvarying lowp vec4 vColor;\nvarying highp vec3 vLighting;\nvoid main(void) {\n  gl_FragColor = vec4(vec3(vColor[0],vColor[1],vColor[2]) * vLighting, vColor[3]);\n}";class Pi{constructor(t,e){this.object=t,this.attribute=e.toString()}get(){return this.object[this.attribute]}set(t){Object.defineProperty(this.object,this.attribute,{value:t,writable:!0})}toString(){return`${this.object[this.attribute]}`}fromString(t){const e=typeof this.object[this.attribute];let i;switch(e){case"string":i=t;break;case"number":i=Number.parseFloat(t);break;default:throw Error(`Reference.fromString() isn't yet supported for type ${e}`)}Object.defineProperty(this.object,this.attribute,{value:i,writable:!0})}}class Oi extends Array{constructor(t){super(...t?.children);for(let t=0;t<this.length;++t){const e=this[t];"string"==typeof e&&(this[t]=document.createTextNode(e))}}replaceIn(t){t.replaceChildren(...this)}appendTo(t){for(let e of this)t.appendChild(e)}}function Vi(t,e,i){return void 0!==e&&void 0!==e.children&&(e.children=[e.children]),Wi(t,e)}function Wi(t,e,i){let s;if("string"!=typeof t)return new t(e);const o=t;switch(o){case"svg":case"line":case"rect":case"circle":case"path":case"text":s="http://www.w3.org/2000/svg";break;default:s="http://www.w3.org/1999/xhtml"}const r=document.createElementNS(s,o);return function(t,e,i){if(null==e)return;for(let[s,o]of Object.entries(e))switch(s){case"children":break;case"action":t.setAction(o);break;case"model":t.setModel(o);break;case"class":t.classList.add(o);break;case"style":for(let[e,i]of Object.entries(o)){const s=/[A-Z]/g;e=e.replace(s,(t=>"-"+t.toLowerCase())),"number"==typeof i&&(i=`${i}`),t.style.setProperty(e,i)}break;case"set":Object.defineProperty(e.set.object,e.set.attribute,{value:t,writable:!0});break;default:if("on"===s.substring(0,2))t.addEventListener(s.substring(2),o);else if("string"==typeof o||"number"==typeof o||"boolean"==typeof o){if("http://www.w3.org/2000/svg"===i){const t=/[A-Z]/g;s=s.replace(t,(t=>"-"+t.toLowerCase()))}t.setAttributeNS(null,s,`${o}`)}}void 0!==e.children&&Ui(t,e.children)}(r,e,s),r}function Ui(t,e){for(const i of e)i instanceof Array?Ui(t,i):"string"!=typeof i?t.appendChild(i):t.appendChild(document.createTextNode(i))}const ji={};let Gi,Yi;function Xi(t,e){const i=Ji[e];Gi[e]={targetName:i};const s=Vi("img",{src:`images/ui/rotations_${e.toString().padStart(2,"0")}.png`});if(Gi[e].img=s,void 0===i)return s;const o=i.at(4).toUpperCase()+i.substring(5).replaceAll("_"," ");return s.title=o,s.onpointerenter=()=>{s.src=`images/ui/rotations_${e.toString().padStart(2,"0")}_over.png`},s.onpointerleave=()=>{Yi!==e&&(s.src=`images/ui/rotations_${e.toString().padStart(2,"0")}.png`)},s.onpointerdown=()=>{if(e<Gi.length){const i=Vi(Oi,{children:Vi("div",{style:{padding:"5px",fontWeight:"bold"},children:o})});t.posemap.forEach(((s,o)=>{o.startsWith(`${Gi[e].targetName}/`)&&i.push(function(t,e){const i=`images/rot/${e}.png`,s=`images/rot/${e}_over.png`,o=Wi("div",{style:{display:"inline-block",textAlign:"center"},children:[Vi("img",{width:"64",height:"64",title:e,src:i}),Vi("div",{})]});let r,n=0;const a=o.children[0],l=o.children[1],h=i=>{const s=t.setPose(e,i);l.innerText=Math.round(s).toString(),l.style.color=0!==i?"#f00":""};return h(t.getPose(e)),a.onpointerenter=t=>{t.preventDefault(),a.src=s},a.onpointerleave=t=>{t.preventDefault(),a.src=i},a.oncontextmenu=t=>{t.preventDefault()},a.onpointerdown=i=>{switch(i.preventDefault(),a.setPointerCapture(i.pointerId),i.button){case 0:r=i.x,n=t.getPose(e);break;case 2:h(0)}},a.onpointerup=t=>{t.preventDefault(),r=void 0},a.onpointermove=t=>{t.preventDefault(),void 0!==r&&h(n+t.x-r)},o}(t,o))})),ji.details.replaceChildren(...i),void 0!==Yi&&Yi!==e&&(Gi[Yi].img.src=`images/ui/rotations_${Yi.toString().padStart(2,"0")}.png`),Yi=e}},s}const Ji=[void 0,"260_right_collar","300_head","280_left_collar","070_left_ringfinger_3","067_left_middlefinger_3","064_left_forefinger_3","220_right_upper_arm","320_neck","240_left_upper_arm","071_left_ringfinger_2","068_left_middlefinger_2","065_left_forefinger_2",void 0,"360_torso",void 0,"073_left_littlefinger_3","069_left_middlefinger_1","066_left_forefinger_1","140_right_lower_arm","380_pivot","160_left_lower_arm","074_left_littlefinger_2","072_left_ringfinger_1","061_left_pollex_3","060_right_hand",void 0,"080_left_hand","075_left_littlefinger_1","063_left_pollex_1","062_left_pollex_2","180_right_upper_leg",void 0,"200_left_upper_leg","044_right_forefinger_3","047_right_middlefinger_3","050_right_ringfinger_3","100_right_lower_leg",void 0,"120_left_lower_leg","045_right_forefinger_2","048_right_middlefinger_2","051_right_ringfinger_2",void 0,void 0,void 0,"046_right_forefinger_1","049_right_middlefinger_1","053_right_littlefinger_3","020_right_foot",void 0,"040_left_foot","041_right_pollex_3","052_right_ringfinger_1","054_right_littlefinger_2",void 0,void 0,void 0,"042_right_pollex_2","043_right_pollex_1","055_right_littlefinger_1","002_right_footfinger_4_2","000_right_footfinger_5_2","001_right_footfinger_5_1","022_left_footfinger_5_1","021_left_footfinger_5_2","023_left_footfinger_4_2","004_right_footfinger_3_2","005_right_footfinger_3_1","003_right_footfinger_4_1","024_left_footfinger_4_1","026_left_footfinger_3_1","025_left_footfinger_3_2","006_right_footfinger_2_2","007_right_footfinger_2_1","009_right_footfinger_1_1","030_left_footfinger_1_1","028_left_footfinger_2_1","027_left_footfinger_2_2","008_right_footfinger_1_2",void 0,void 0,void 0,void 0,"029_left_footfinger_1_2"],qi={};let Zi,Ki;function Qi(t,e){const i=is[e];Zi[e]={targetName:i};const s=Math.floor(e/6),o=e%6;let r,n;o<2?(r="body",n=1+o+2*s):s<6?(r="face",n=1+o-2+4*s):(r="hands",n=1+o-2+4*(s-6)),r=`${r}_${n.toString().padStart(2,"0")}`,Zi[e].imgSrc=`images/ui/${r}.png`,Zi[e].imgSrcOver=`images/ui/${r}_over.png`;const a=Vi("img",{src:Zi[e].imgSrc}),l=is[e];if(void 0!==l){const i=l.at(0).toUpperCase()+l.substring(1).replace("_"," ");a.title=i,a.onpointerenter=()=>{a.src=Zi[e].imgSrcOver},a.onpointerleave=()=>{Ki!==e&&(a.src=Zi[e].imgSrc)},a.onpointerdown=()=>{const s=Vi(Oi,{children:Vi("div",{style:{padding:"5px",fontWeight:"bold"},children:i})});t.targetmap.forEach(((i,o)=>{o.startsWith(`${Zi[e].targetName}/`)&&s.push(function(t,e){const i=`images/target/${e.substring(0,e.length-7)}.png`,s=Wi("div",{style:{display:"inline-block",textAlign:"center"},children:[Vi("img",{width:"64",height:"64",title:e,src:i}),Vi("div",{})]});let o,r=0;const n=s.children[0],a=s.children[1],l=i=>{i/=100;const s=t.doMorph(e,i);a.innerText=s.toPrecision(2),es(i)&&(i=0),es(i-1)&&(i=1),a.style.color=0!==s?"#f00":""};return l(100*t.getMorph(e)),n.onpointerenter=t=>{t.preventDefault()},n.onpointerleave=t=>{t.preventDefault()},n.oncontextmenu=t=>{t.preventDefault()},n.onpointerdown=i=>{switch(i.preventDefault(),n.setPointerCapture(i.pointerId),i.button){case 0:r=100*t.getMorph(e),o=i.x;break;case 2:l(0)}},n.onpointerup=t=>{t.preventDefault(),o=void 0},n.onpointermove=t=>{t.preventDefault(),void 0!==o&&l(r+t.x-o)},s}(t,o))})),qi.details.replaceChildren(...s),void 0!==Ki&&Ki!==e&&(Zi[Ki].img.src=Zi[Ki].imgSrc),Ki=e}}return Zi[e].img=a,a}const ts=1e-5;function es(t){return Math.abs(t)<=ts}const is=["torso","head",void 0,void 0,void 0,void 0,"shoulders","neck",void 0,"forehead",void 0,void 0,"upper_arms",void 0,void 0,"eyes",void 0,void 0,"lower_arms","abdomen","nose","cheek","ears",void 0,"hands","pelvis","mouth",void 0,void 0,void 0,"upper_legs",void 0,"chin_jaw",void 0,void 0,void 0,void 0,void 0,"forefinger","middlefinger","ringfinger",void 0,"lower_legs",void 0,"pollex",void 0,"littlefinger",void 0,"feet",void 0,void 0,void 0,void 0,void 0];function ss(t,e,i){const s=Wi("div",{style:{position:"relative"},children:[Vi("div",{style:{pointerEvents:"none",position:"absolute",left:e.cursorPos.x-3+"px",top:104-e.cursorPos.y-3+"px",width:"6px",height:"6px",border:"0",background:"#f00"}}),Vi("img",{src:`images/ui/${i}_selector.png`})]}),o=s.children[0],r=i=>{e.setCursorPos(i.offsetX,104-i.offsetY),o.style.left=e.cursorPos.x-3+"px",o.style.top=104-e.cursorPos.y-3+"px",t.calcWidgetTargets()};return s.onpointerdown=t=>{t.preventDefault(),s.setPointerCapture(t.pointerId),r(t)},s.onpointermove=t=>{0!==t.buttons&&r(t)},s}const os={};var rs;!function(t){t[t.LOAD=0]="LOAD",t[t.SAVE=1]="SAVE",t[t.CHARACTER=2]="CHARACTER",t[t.DETAILS=3]="DETAILS",t[t.POSE=4]="POSE"}(rs||(rs={}));const ns=[{id:rs.LOAD,file:"load",desc:"Load body setting"},{id:rs.SAVE,file:"save",desc:"Save body setting"},{id:rs.CHARACTER,file:"charac_sett",desc:"Character setting (somatypes, shapes, age, etc...)",render:(t,e)=>function(t,e){return t.morphMode(),Wi(Oi,{children:[Vi("div",{style:{padding:"5px",fontWeight:"bold"},children:"Character"}),ss(e,e.age,"age"),ss(e,e.muscleSize,"muscle_size"),ss(e,e.breast,"breast"),ss(e,e.shape,"shape")]})}(t,e)},{id:rs.DETAILS,file:"body_det_real",desc:"Body details (realistic morphings)",render:t=>function(t){t.morphMode();const e=[];Zi=new Array(is.length);for(let i=0;i<is.length;++i)e.push(Qi(t,i));return Wi(Oi,{children:[Vi("div",{style:{padding:"5px",fontWeight:"bold"},children:"Body Details"}),Wi("div",{id:"panel",style:{lineHeight:"0"},children:[...e]}),Vi("div",{id:"details",set:new Pi(qi,"details")})]})}(t)},{id:rs.POSE,file:"poses",desc:"Reset mesh",render:t=>function(t){t.poseMode();const e=[];Gi=new Array(Ji.length);for(let i=1;i<Ji.length;++i)e.push(Xi(t,i));return Wi(Oi,{children:[Vi("div",{style:{padding:"5px",fontWeight:"bold"},children:"Poses"}),Wi("div",{id:"panel",style:{lineHeight:"0"},children:[...e]}),Vi("div",{id:"details",set:new Pi(ji,"details")})]})}(t)}];let as;function ls(t,e,i){as&&(as.img.src=`images/ui/toolbar_${as.file}.png`),as=i,as.img.src=`images/ui/toolbar_${as.file}_over.png`,void 0!==i.render?os.panel.replaceChildren(...i.render(t,e)):os.panel.replaceChildren()}function hs(t,e){return ns.map((i=>{const s=Vi("img",{src:`images/ui/toolbar_${i.file}.png`,title:i.desc});return i.img=s,s.onpointerenter=()=>{s.src=`images/ui/toolbar_${i.file}_over.png`},s.onpointerleave=()=>{i!==as&&(s.src=`images/ui/toolbar_${i.file}.png`)},s.onpointerdown=()=>{ls(t,e,i)},s}))}class ds{constructor(t,e,i){this.height=104,this.width=192,this.cursorPos={x:48,y:54},this.points=[],this.rows=t,this.cols=e,this.labels=i;const s=this.width/(e-1),o=this.height/(t-1);this.cellRatio=s/o,this.maxValue=Math.min(s,o*this.cellRatio);for(let i=0;i<t;++i)for(let t=0;t<e;++t)this.points.push({x:t*s,y:i*o})}setCursorPos(t,e){this.dists=void 0,t=Math.max(Math.min(t,this.width),0),e=Math.max(Math.min(e,this.height),0),this.cursorPos.x=t,this.cursorPos.y=e}getDists(){if(void 0!==this.dists)return this.dists;this.dists=[];let t=this.cursorPos.x,e=this.cursorPos.y;for(const i of this.points){const s=1-Math.sqrt(Math.pow(i.x-t,2)+Math.pow((i.y-e)*this.cellRatio,2))/this.maxValue;s>0?this.dists.push(s):this.dists.push(0)}return this.dists}}class cs{constructor(t){this.mesh=t,this.age=new ds(2,5,["female_10","female_30","female_50","female_70","female_90","male_10","male_30","male_50","male_70","male_90"]),this.muscleSize=new ds(2,2,["skinny_nomuscle","big_nomuscle","skinny_muscle","big_muscle"]),this.breast=new ds(2,2,["cone_little","cone_big","sphere_little","sphere_big"]),this.breast.setCursorPos(96,54),this.shape=new ds(2,2,["brevilinear_vshape","brevilinear_peershape","longilinear_vshape","longilinear_peershape"])}doMorph(t,e){this.mesh.doMorph(t,e)}calcWidgetTargets(){const t=this.age.getDists(),e=this.muscleSize.getDists(),i=this.breast.getDists(),s=this.shape.getDists();let o,r,n;o=0;for(const e of t)if(o<this.age.labels.length){const t=`ages/${this.age.labels[o++]}.target`;this.doMorph(t,e)}r=0;for(const s of e){o=0;for(const e of t){if(r<this.muscleSize.labels.length&&o<this.age.labels.length){const t=`muscleSize/${this.age.labels[o]}_${this.muscleSize.labels[r]}.target`,i=e*s;this.doMorph(t,i)}if(n=0,o<=4)for(const t of i){if(n<this.breast.labels.length){const i=`breast/${this.age.labels[o]}_${this.muscleSize.labels[r]}_${this.breast.labels[n]}.target`,a=e*s*t;this.doMorph(i,a)}++n}++o}++r}o=0;for(const t of s)if(o<this.shape.labels.length){const e=`shapes/${this.shape.labels[o++]}.target`;this.doMorph(e,t)}}}function ps(){console.log("mh091rc1a (Makehuman 0.9.1-rc1a clone)"),_.setInstance(new Bi);const t=new ri;t.loadMeshFactory("base.vertices","base.faces"),t.loadGroupsFactory("base.parts"),t.loadTargetsFactory("targets"),t.loadTargetsFactory("selectors",1,!0,!1),t.loadPoseTargetsFactory("rotations");const e=new cs(t);e.calcWidgetTargets(),document.body.style.overflow="hidden",document.body.style.margin="0",document.body.style.padding="0",document.body.replaceChildren(...((t,e)=>{const i=Wi(Oi,{children:[Wi("div",{style:{position:"absolute",display:"block",left:"0",top:"0",bottom:"0",width:"192px"},children:[Wi("div",{id:"toolbar",style:{lineHeight:"0"},children:[...hs(t,e),Vi("img",{src:"images/ui/toolbar_reset.png",title:"Reset mesh",onpointerdown:()=>t.clear()})]}),Vi("div",{set:new Pi(os,"panel")})]}),Vi("div",{style:{position:"absolute",left:"192px",top:"0px",bottom:"0px",right:"0px"},children:Vi("canvas",{style:{width:"100%",height:"100%"}})})]});return ls(t,e,ns[2]),i})(t,e)),t.update();!function(t,e){const r=[];for(const t of e.getVertexes())r.push(t.co[0],t.co[1],t.co[2]);const a=[],l=new Map;e.facegroup.forEach(((t,i)=>{const s=a.length;for(const i of t.facesIndexes){if(void 0===e.facevector[i])continue;const t=e.facevector[i].vertices;switch(t.length){case 3:a.push(...t);break;case 4:a.push(t[0],t[1],t[2],t[0],t[2],t[3]);break;default:console.log(`skipping face with ${t.length} edges`)}}const o=a.length-s;l.set(i,{offset:s,length:o})}));const h=t.getContext("webgl2")||t.getContext("experimental-webgl");if(null==h)throw Error("Unable to initialize WebGL. Your browser or machine may not support it.");const d=new w(h,new Float32Array(r),a,void 0,void 0,!1),c=new Ni(h);c.initProgram(),d.bind(c),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0),h.enable(h.CULL_FACE),h.cullFace(h.BACK);let p=0,u=0;const g=()=>{!function(t){t.width===t.clientWidth&&t.height===t.clientHeight||(t.width=t.clientWidth,t.height=t.clientHeight)}(t);const e=function(t){const e=45*Math.PI/180,s=t.width/t.height,o=i();return n(o,e,s,.1,100),o}(t),r=function(t,e){const r=180/Math.PI,n=i();return function(t,e,i){var s,o,r,n,a,l,h,d,c,p,u,g,f=i[0],m=i[1],b=i[2];e===t?(t[12]=e[0]*f+e[4]*m+e[8]*b+e[12],t[13]=e[1]*f+e[5]*m+e[9]*b+e[13],t[14]=e[2]*f+e[6]*m+e[10]*b+e[14],t[15]=e[3]*f+e[7]*m+e[11]*b+e[15]):(s=e[0],o=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=e[6],d=e[7],c=e[8],p=e[9],u=e[10],g=e[11],t[0]=s,t[1]=o,t[2]=r,t[3]=n,t[4]=a,t[5]=l,t[6]=h,t[7]=d,t[8]=c,t[9]=p,t[10]=u,t[11]=g,t[12]=s*f+a*m+c*b+e[12],t[13]=o*f+l*m+p*b+e[13],t[14]=r*f+h*m+u*b+e[14],t[15]=n*f+d*m+g*b+e[15])}(n,n,[0,0,-25]),s(n,n,e/r),o(n,n,t/r),n}(p,u),a=function(t){const e=i();var s,o,r,n,a,l,h,d,c,p,u,g,f,m,b,v,x,y,w,C,_,k,S,H,A,T,E,M,R,L,D;return s=e,r=(o=t)[0],n=o[1],a=o[2],l=o[3],h=o[4],d=o[5],c=o[6],p=o[7],u=o[8],g=o[9],f=o[10],m=o[11],b=o[12],v=o[13],x=o[14],y=o[15],(D=(w=r*d-n*h)*(L=f*y-m*x)-(C=r*c-a*h)*(R=g*y-m*v)+(_=r*p-l*h)*(M=g*x-f*v)+(k=n*c-a*d)*(E=u*y-m*b)-(S=n*p-l*d)*(T=u*x-f*b)+(H=a*p-l*c)*(A=u*v-g*b))&&(D=1/D,s[0]=(d*L-c*R+p*M)*D,s[1]=(a*R-n*L-l*M)*D,s[2]=(v*H-x*S+y*k)*D,s[3]=(f*S-g*H-m*k)*D,s[4]=(c*E-h*L-p*T)*D,s[5]=(r*L-a*E+l*T)*D,s[6]=(x*_-b*H-y*C)*D,s[7]=(u*H-f*_+m*C)*D,s[8]=(h*R-d*E+p*A)*D,s[9]=(n*E-r*R-l*A)*D,s[10]=(b*S-v*_+y*w)*D,s[11]=(g*_-u*S-m*w)*D,s[12]=(d*T-h*M-c*A)*D,s[13]=(r*M-n*T+a*A)*D,s[14]=(v*C-b*k-x*w)*D,s[15]=(u*k-g*C+f*w)*D),function(t,e){if(t===e){var i=e[1],s=e[2],o=e[3],r=e[6],n=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=i,t[6]=e[9],t[7]=e[13],t[8]=s,t[9]=r,t[11]=e[14],t[12]=o,t[13]=n,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15]}(e,e),e}(r);c.initModelViewMatrix(r),c.initNormalMatrix(a),c.initProjectionMatrix(e),function(t,e){t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.depthMask(!0)}(h,t),l.forEach(((t,e)=>{switch(e){case"body":case"head":c.setColor([1,.8,.7,1]);break;case"teeth":case"eyes":c.setColor([1,1,1,1]);break;case"tongue":case"gums":c.setColor([1,0,0,1]);break;case"zcornea":case"zeyebrows":case"zeyelashes":c.setColor([0,0,0,1]);break;default:console.log(e),c.setColor([1,0,0,1])}d.drawSubset(h.TRIANGLES,t.offset,t.length)}))};g(),e.changed.add((()=>{requestAnimationFrame((()=>{e.update();const t=[];for(const i of e.getVertexes())t.push(i.co[0],i.co[1],i.co[2]);d.update(new Float32Array(t)),g()}))})),new ResizeObserver(g).observe(t);let f=0,m=0,b=!1;t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),b=!0,p=f=e.x,u=m=e.y},t.onpointerup=t=>{b=!1},t.onpointermove=t=>{if(b){const e=t.x-f,i=t.y-m;e===p&&i===u||(p=e,u=i,requestAnimationFrame((()=>g())))}}}(document.body.querySelector("canvas"),t)}try{ps()}catch(t){console.log(t)}return t.main=ps,t}({});
//# sourceMappingURL=mh091rc1a.js.map

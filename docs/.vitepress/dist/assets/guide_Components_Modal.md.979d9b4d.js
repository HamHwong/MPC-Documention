import{_ as x,f as a,c as h,b as o,d as i,w as g,a as s,r as n,o as y}from"./app.5942c628.js";const u={setup(){const e=a(!1),l=a("/static/demo.pdf");function d(){e.value=!1}function t(){e.value=!0}return{modalVisibility:e,handleClose:d,handleShow:t,url:l}}},P='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Modal.md"}',_=s('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>\u652F\u6301\u4F38\u7F29\u3001\u79FB\u52A8\u7684\u7A97\u53E3</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),p=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">draggable</td><td style="text-align:left;">\u662F\u5426\u53EF\u79FB\u52A8</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;">resizeable</td><td style="text-align:left;">\u662F\u5426\u53EF\u4F38\u7F29</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">\u521D\u59CB\u5BBD\u5EA6,\u82E5\u672A\u8BBE\u7F6E,\u5219\u9ED8\u8BA4\u4E3A\u5185\u5BB9\u5BBD\u5EA6,\u6700\u5C0F\u5BBD\u5EA6\u4E3A200px</td><td style="text-align:left;"><code>Number</code>,<code>Null</code></td><td style="text-align:left;"><code>null</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">\u521D\u59CB\u9AD8\u5EA6,\u82E5\u672A\u8BBE\u7F6E,\u5219\u9ED8\u8BA4\u4E3A\u5185\u5BB9\u9AD8\u5EA6,\u6700\u5C0F\u9AD8\u5EA6\u4E3A200px</td><td style="text-align:left;"><code>Number</code>,<code>Null</code></td><td style="text-align:left;"><code>null</code></td></tr><tr><td style="text-align:left;">maxHeight</td><td style="text-align:left;">\u6700\u5927\u9AD8\u5EA6</td><td style="text-align:left;"><code>Number</code>,<code>Null</code></td><td style="text-align:left;"><code>null</code></td></tr><tr><td style="text-align:left;">maxWidth</td><td style="text-align:left;">\u6700\u5927\u5BBD\u5EA6</td><td style="text-align:left;"><code>Number</code>,<code>Null</code></td><td style="text-align:left;"><code>null</code></td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;">\u521D\u59CB\u4F4D\u7F6E</td><td style="text-align:left;"><code>Object</code>:{x:<code>Number</code>,y:<code>Number</code>}</td><td style="text-align:left;"><code>{x:0,y:0}</code></td></tr><tr><td style="text-align:left;">visible</td><td style="text-align:left;">\u7A97\u53E3\u662F\u5426\u53EF\u89C1</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;">center</td><td style="text-align:left;">\u7A97\u53E3\u662F\u5426\u5C45\u4E2D\u663E\u793A, \u82E5\u4E3A<code>true</code>\u65F6<code>draggable</code>,<code>resizeable</code>\u5931\u6548</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;">tapShadowToClose</td><td style="text-align:left;">\u70B9\u51FB\u9634\u5F71\u662F\u5426\u5173\u95ED\u7A97\u53E3</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Event Name</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;">close</td><td style="text-align:left;">\u7A97\u53E3\u5173\u95ED\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">display</td><td style="text-align:left;">\u7A97\u53E3\u663E\u793A\u65F6\u89E6\u53D1</td></tr></tbody></table>',5);function b(e,l,d,t,m,v){const r=n("MPPdfReader"),c=n("MPModal");return y(),h("div",null,[_,o("div",null,[o("button",{onClick:l[0]||(l[0]=(...f)=>t.handleShow&&t.handleShow(...f))},"\u70B9\u51FB\u5F00\u7A97"),i(c,{visible:t.modalVisibility,onClose:t.handleClose,position:{x:50,y:100},draggable:"",resizeable:""},{default:g(()=>[i(r,{pdfurl:t.url},null,8,["pdfurl"])]),_:1},8,["visible","onClose"])]),p])}var T=x(u,[["render",b]]);export{P as __pageData,T as default};

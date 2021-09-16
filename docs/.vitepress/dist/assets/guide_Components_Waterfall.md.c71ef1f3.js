import{e as a,o as n,c as t,b as s,f as e,w as p,F as l,k as o,j as c,a as u}from"./app.ad5e330f.js";const i='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Waterfall.md","lastUpdated":1631670909973}',r={},k=u('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>瀑布流</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),d={style:{"overflow-y":"auto",height:"500px",width:"700px",margin:"20px"}},g={style:{padding:"10px",position:"relative"}},h=s("div",null," Name ",-1),v=u('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">overflow-y</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>700px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPWaterFall</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPCard</span>\n            <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`10px`<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gallery<span class="token punctuation">&quot;</span></span>\n            <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>5px</span><span class="token punctuation">&quot;</span></span></span>\n            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 20<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`/images/img${i % 4 == 0 || i % 4 == 1 ? <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> : i % 4}.jpg`<span class="token punctuation">&quot;</span></span>\n        <span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span>relative</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>far<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>heart<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n                    Name\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MPCard</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MPWaterFall</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">column</td><td style="text-align:left;">列数</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>3</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">高度</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>100%</code></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">瀑布流对齐方式,包括[<code>&#39;around&#39;</code>,<code>&#39;between&#39;</code>,<code>&#39;unset&#39;</code>,<code>&#39;center&#39;</code>,<code>&#39;evenly&#39;</code>]</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>0</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3>',5),y=u('<table><thead><tr><th style="text-align:left;">Event Name</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table>',1);r.render=function(u,i,r,x,f,m){const _=a("font-awesome-icon"),q=a("MPCard"),T=a("MPWaterFall");return n(),t("div",null,[k,s("div",d,[e(T,{column:"3",type:"center"},{default:p((()=>[(n(),t(l,null,o(20,(a=>e(q,{radius:"10px",type:"gallery",style:{margin:"5px"},key:a,image:`/images/img${a%4==0||a%4==1?"":a%4}.jpg`},{default:p((()=>[s("div",g,[s("div",null,[s("i",null,[e(_,{icon:["far","heart"]})])]),h])])),_:2},1032,["image"]))),64))])),_:1})]),v,c(" |Event Name|Explanation|Type|Default| "),y])};export{i as __pageData,r as default};

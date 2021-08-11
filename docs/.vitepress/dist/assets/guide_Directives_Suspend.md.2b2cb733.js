import{e as a,o as s,c as n,b as t,F as e,f as p,w as l,a as o}from"./app.e1baed53.js";const c='{"title":"Suspend","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Directives Props","slug":"directives-props"}],"relativePath":"guide/Directives/Suspend.md","lastUpdated":1628585417489}',u={},i=o('<h1 id="suspend"><a class="header-anchor" href="#suspend" aria-hidden="true">#</a> Suspend</h1><h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>DOM设置为悬浮样式</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',4),r={style:{display:"flex"}},d=o('<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 5<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span>\n      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n            <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n            <span class="token property">box-shadow</span><span class="token punctuation">:</span>0 0 20px #ccc<span class="token punctuation">;</span>\n            <span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">&quot;</span></span></span> \n      <span class="token attr-name">v-suspend</span>\n    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> \n</code></pre></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="directives-props"><a class="header-anchor" href="#directives-props" aria-hidden="true">#</a> Directives Props</h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;">v-suspend</td><td style="text-align:left;">Mark and suspend content</td></tr></tbody></table>',4);u.render=function(o,c,u,k,h,v){const g=a("suspend");return s(),n("div",null,[i,t("div",r,[(s(),n(e,null,p(5,(a=>l(t("div",{key:a,style:{width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},null,512),[[g]]))),64))]),d])};export{c as __pageData,u as default};

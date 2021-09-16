import{e as a,l as s,o as n,c as t,b as e,f as p,w as l,F as o,k as c,m as i,t as u,a as r}from"./app.ad5e330f.js";const d='{"title":"Suspend","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Directives Props","slug":"directives-props"}],"relativePath":"guide/Directives/Suspend.md","lastUpdated":1631698381207}',k={},h=r('<h1 id="suspend" tabindex="-1">Suspend <a class="header-anchor" href="#suspend" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>DOM设置为悬浮样式</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),v={style:{display:"flex"}},x=r('<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 5<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span>\n      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n            <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n            <span class="token property">box-shadow</span><span class="token punctuation">:</span>0 0 20px #ccc<span class="token punctuation">;</span>\n            <span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">&quot;</span></span></span> \n      <span class="token attr-name">v-suspend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`${ i * 200 } px`<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>Perspective: {{ i * 200}} px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> \n</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="directives-props" tabindex="-1">Directives Props <a class="header-anchor" href="#directives-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-suspend</td><td style="text-align:left;">Mark and suspend content, <code>String</code>value will set the perspective</td><td style="text-align:left;"><code>800px</code></td></tr></tbody></table>',4);k.render=function(r,d,k,g,_,y){const f=a("ClientOnly"),m=s("suspend");return n(),t("div",null,[h,e("div",v,[p(f,null,{default:l((()=>[(n(),t(o,null,c(5,(a=>i(e("div",{key:a,style:{width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},"Perspective: "+u(200*a)+" px",513),[[m,100*a+"px"]]))),64))])),_:1})]),x])};export{d as __pageData,k as default};

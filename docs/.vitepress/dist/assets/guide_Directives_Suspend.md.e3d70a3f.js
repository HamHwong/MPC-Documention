import{_ as o,B as r,a2 as i,o as e,c as a,x as t,D as c,z as d,F as h,K as u,N as n,a3 as y,t as D}from"./chunks/framework.6acf563d.js";const S=JSON.parse('{"title":"Suspend","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Directives/Suspend.md"}'),_={name:"guide/Directives/Suspend.md"},C=n('<h1 id="suspend" tabindex="-1">Suspend <a class="header-anchor" href="#suspend" aria-label="Permalink to &quot;Suspend&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>DOM设置为悬浮样式</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>',4),x={style:{display:"flex"}},v=n(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">flex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-for=&quot;i in 5&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :key=&quot;i&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      style=&quot;width:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            box-shadow:0 0 20px #ccc;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border-radius:10px;margin:10px&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">      v-suspend=&quot;\`\${ i * 200 } px\`&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;Perspective: {{ i * 200}} px</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="directives-props" tabindex="-1">Directives Props <a class="header-anchor" href="#directives-props" aria-label="Permalink to &quot;Directives Props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-suspend</td><td style="text-align:left;">Mark and suspend content, <code>String</code>value will set the perspective</td><td style="text-align:left;"><code>800px</code></td></tr></tbody></table>`,4);function A(F,g,m,f,b,q){const l=r("ClientOnly"),p=i("suspend");return e(),a("div",null,[C,t("div",x,[c(l,null,{default:d(()=>[(e(),a(h,null,u(5,s=>y(t("div",{key:s,style:{width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},"Perspective: "+D(s*200)+" px",1),[[p,s*100+"px"]])),64))]),_:1})]),v])}const T=o(_,[["render",A]]);export{S as __pageData,T as default};

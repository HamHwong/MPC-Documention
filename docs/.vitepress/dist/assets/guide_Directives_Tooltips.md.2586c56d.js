import{_ as n,B as o,a2 as p,o as i,c as r,D as c,z as D,x as s,a3 as t,N as l}from"./chunks/framework.6acf563d.js";const b=JSON.parse('{"title":"Tooltips(Fixing)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Directives/Tooltips.md"}'),y={name:"guide/Directives/Tooltips.md"},d=l('<h1 id="tooltips-fixing" tabindex="-1">Tooltips(Fixing) <a class="header-anchor" href="#tooltips-fixing" aria-label="Permalink to &quot;Tooltips(Fixing)&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>根据挂载DOM的长宽和Content内容长宽自动选择显示方向的Tooltips.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>',4),F={style:{display:"flex","justify-content":"flex-end"}},h={style:{display:"flex","justify-content":"flex-end",width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},_=l(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-tooltips</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">鼠标</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">display:flex;justify-content: flex-end;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-tooltips</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\`自定义内容\`</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">鼠标</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="directives-props" tabindex="-1">Directives Props <a class="header-anchor" href="#directives-props" aria-label="Permalink to &quot;Directives Props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">v-tooltips</td><td style="text-align:left;">Mark and display content, if left it blank, tooltips will show inner text</td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table>`,4);function x(u,v,f,C,g,A){const e=o("ClientOnly"),a=p("tooltips");return i(),r("div",null,[d,c(e,null,{default:D(()=>[s("div",null,[t(s("span",null,"鼠标",512),[[a]])]),s("div",F,[t(s("span",null,"鼠标",512),[[a,"自定义内容"]])]),t(s("div",h," 鼠标 ",512),[[a,"自定义内容"]])]),_:1}),_])}const T=n(y,[["render",x]]);export{b as __pageData,T as default};
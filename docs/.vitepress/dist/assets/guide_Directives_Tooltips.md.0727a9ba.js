import{e as a,l as s,o as n,c as t,f as e,w as p,b as l,m as o,a as i}from"./app.40076093.js";const c='{"title":"Tooltips(Fixing)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Directives Props","slug":"directives-props"}],"relativePath":"guide/Directives/Tooltips.md","lastUpdated":1631795288923}',u={},r=i('<h1 id="tooltips-fixing" tabindex="-1">Tooltips(Fixing) <a class="header-anchor" href="#tooltips-fixing" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>根据挂载DOM的长宽和Content内容长宽自动选择显示方向的Tooltips.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),d={style:{display:"flex","justify-content":"flex-end"}},k={style:{display:"flex","justify-content":"flex-end",width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},g=i('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-tooltips</span><span class="token punctuation">&gt;</span></span>鼠标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-tooltips</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`自定义内容`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>鼠标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="directives-props" tabindex="-1">Directives Props <a class="header-anchor" href="#directives-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">v-tooltips</td><td style="text-align:left;">Mark and display content, if left it blank, tooltips will show inner text</td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table>',4);u.render=function(i,c,u,h,v,x){const f=a("ClientOnly"),_=s("tooltips");return n(),t("div",null,[r,e(f,null,{default:p((()=>[l("div",null,[o(l("span",null,"鼠标",512),[[_]])]),l("div",d,[o(l("span",null,"鼠标",512),[[_,"自定义内容"]])]),o(l("div",k," 鼠标 ",512),[[_,"自定义内容"]])])),_:1}),g])};export{c as __pageData,u as default};

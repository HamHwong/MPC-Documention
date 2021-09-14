import{l as a,o as s,c as t,b as n,m as e,a as p}from"./app.0a656ca2.js";const l='{"title":"Tooltips(Fixing)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Directives Props","slug":"directives-props"}],"relativePath":"guide/Directives/Tooltips.md","lastUpdated":1629961529101}',o={},i=p('<h1 id="tooltips-fixing"><a class="header-anchor" href="#tooltips-fixing" aria-hidden="true">#</a> Tooltips(Fixing)</h1><h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>根据挂载DOM的长宽和Content内容长宽自动选择显示方向的Tooltips.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',4),c={style:{display:"flex","justify-content":"flex-end"}},u={style:{display:"flex","justify-content":"flex-end",width:"100px",height:"100px","box-shadow":"0 0 20px #ccc","border-radius":"10px",margin:"10px"}},r=p('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-tooltips</span><span class="token punctuation">&gt;</span></span>鼠标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-tooltips</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`自定义内容`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>鼠标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="directives-props"><a class="header-anchor" href="#directives-props" aria-hidden="true">#</a> Directives Props</h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">v-tooltips</td><td style="text-align:left;">Mark and display content, if left it blank, tooltips will show inner text</td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table>',4);o.render=function(p,l,o,d,k,g){const h=a("tooltips");return s(),t("div",null,[i,n("div",null,[e(n("span",null,"鼠标",512),[[h]])]),n("div",c,[e(n("span",null,"鼠标",512),[[h,"自定义内容"]])]),e(n("div",u," 鼠标 ",512),[[h,"自定义内容"]]),r])};export{l as __pageData,o as default};

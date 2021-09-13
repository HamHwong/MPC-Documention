import{e as t,o as a,c as n,f as e,j as s,a as l}from"./app.af743826.js";const p=l('<h1 id="pdfreader-pdf阅读器" tabindex="-1">PDFReader PDF阅读器 <a class="header-anchor" href="#pdfreader-pdf阅读器" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>基于PDFjs-dist开发，简单的PDF阅读器。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),o=l('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPPdfReader</span> \n    <span class="token attr-name">@pageChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChanged<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">:pdfurl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/reactivity&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> url<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;/static/demo.pdf&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">function</span> <span class="token function">handlePageChanged</span> <span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span> Instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// Your code here...</span>\n    <span class="token punctuation">}</span> \n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      url<span class="token punctuation">,</span>\n      handlePageChanged\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n\n</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">pdfurl</td><td style="text-align:left;">The path of pdf</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">the initial width of PDF</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">the initial height of PDF</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;">maxHeight</td><td style="text-align:left;">the max-width of PDF</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>950</code></td></tr><tr><td style="text-align:left;">minHeight</td><td style="text-align:left;">the max-height of PDF</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>450</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3>',5),d=l('<table><thead><tr><th style="text-align:left;">Event Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Return Value</th></tr></thead><tbody><tr><td style="text-align:left;">pageChanged</td><td style="text-align:left;">Triggered by page changed</td><td style="text-align:left;"><code>page</code>,<code>Instance</code></td></tr></tbody></table>',1),c='{"title":"PDFReader PDF阅读器","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/PDFReader.md","lastUpdated":1628472701307}',i={};const r=Object.assign(i,{setup:function(l){function c(t,a){console.log(t,a)}return(l,i)=>{const r=t("MPPdfReader");return a(),n("div",null,[p,e(r,{pdfurl:"/static/demo.pdf",onPageChanged:c}),o,s(" |Event Name|Explanation|Type|Default| "),d])}}});export{c as __pageData,r as default};

import{l as a,o as n,c as s,b as t,m as p,a as e}from"./app.0a656ca2.js";const o='{"title":"Blur","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Directives Props","slug":"directives-props"}],"relativePath":"guide/Directives/Blur.md","lastUpdated":1629962061993}',l={},c=e('<h1 id="blur"><a class="header-anchor" href="#blur" aria-hidden="true">#</a> Blur</h1><h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>DOM设置为毛玻璃效果,</p><p>注意容器需要设置背景</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',5),i={style:{background:"url(/images/img.jpg) no-repeat","background-size":"cover",width:"500px",height:"400px",padding:"100px"}},u={style:{width:"300px",height:"200px","box-shadow":"0 0 20px #333","border-radius":"10px",color:"#fff",margin:"0 auto"}},r=[t("div",{style:{"font-size":"40px","font-weight":"bold","text-align":"center"}}," Blur ",-1),t("div",{style:{padding:"0 10px"}},[t("p",null,"It's not fit for child dom with position 'Fixed','Static'")],-1)],k=e('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/images/img.jpg<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>\n          <span class="token property">background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span>\n          <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>\n          <span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>\n          <span class="token property">padding</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>\n            <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span> \n            <span class="token property">box-shadow</span><span class="token punctuation">:</span>0 0 20px #333<span class="token punctuation">;</span>\n            <span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>\n            <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>\n            <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>\n            <span class="token attr-name">v-blur</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span>\n              <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>\n              <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n      Blur\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span>0 10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>It&#39;s not fit for child dom with position &#39;Fixed&#39;,&#39;Static&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),d={style:{background:"url(/images/img.jpg) no-repeat","background-size":"cover",width:"500px",height:"400px",padding:"100px"}},g={style:{width:"300px",height:"200px","box-shadow":"0 0 20px #333","border-radius":"10px",overflow:"hidden",color:"#fff",margin:"0 auto"}},h=[t("div",{style:{"font-size":"40px","font-weight":"bold","text-align":"center"}}," Blur ",-1),t("div",{style:{padding:"0 10px"}},[t("p",null,"The v-blur was set to 10 and white bg color")],-1)],v=e('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="directives-props"><a class="header-anchor" href="#directives-props" aria-hidden="true">#</a> Directives Props</h3><table><thead><tr><th style="text-align:left;">Directives</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Arg</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">v-blur</td><td style="text-align:left;">设置毛玻璃效果, 需要放在设置了background-image的DOM中</td><td style="text-align:left;">[<code>white</code>,<code>dark</code>] 可设置背景色(如果模糊度过大可能导致边缘原图显示,故用背景色填充)</td><td style="text-align:left;"><code>1-10</code>模糊度, 对应<code>blur(2px ~ 20px)</code>, 默认为<code>1</code></td></tr></tbody></table>',3);l.render=function(e,o,l,x,f,y){const _=a("blur");return n(),s("div",null,[c,t("div",i,[p(t("div",u,r,512),[[_]])]),k,t("div",d,[p(t("div",g,h,512),[[_,10,"white"]])]),v])};export{o as __pageData,l as default};

import{_ as l,f as e,c as u,b as s,t as i,M as r,a as o,o as k}from"./app.51fe55da.js";const d={setup(){const t=e(!1),n=e(null);function p(a){t.value=r.utils.isElementInViewport(a.target,n.value)}return{el:n,handleScroll:p,isInViewPort:t}}},w='{"title":"isElementInViewport","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"}],"relativePath":"guide/Utils/isElementInViewport.md","lastUpdated":1629962245970}',g=o('',4),h=s("div",{style:{margin:"0 auto","text-align":"center"}},"\u5F80\u4E0B\u6ED1",-1),f={ref:"el",style:{width:"50px",height:"50px","background-color":"#fff","margin-top":"1000px","margin-bottom":"1000px","margin-left":"auto","margin-right":"auto","font-size":"8px","text-align":"center",color:"#333","box-shadow":"rgb(204 204 204) 0px 0px 20px","border-radius":"10px"}},m=o(`__VP_STATIC_START__<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ isInViewPort }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleScroll<span class="token punctuation">&quot;</span></span> 
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span>
        <span class="token property">overflow-y</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span>1000px<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span>1000px<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span>8px<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>204 204 204<span class="token punctuation">)</span> 0px 0px 20px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    \u5230\u4E86
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token constant">MPC</span> <span class="token keyword">from</span> <span class="token string">&#39;@mpanda/mpc&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> isInViewPort <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">handleScroll</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
      isInViewPort<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token constant">MPC</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">isElementInViewport</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">,</span>el<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">,</span>
      handleScroll<span class="token punctuation">,</span>
      isInViewPort
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Params Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;">elDOM</td><td style="text-align:left;">The target DOM</td><td style="text-align:left;"><code>HTMLDocument</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;">containerDOM</td><td style="text-align:left;">The container DOM, if left it black, the default DOM will be <code>#app</code> DOM or even <code>document</code> DOM</td><td style="text-align:left;"><code>HTMLDocument</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table>__VP_STATIC_END__`,4);function x(t,n,p,a,y,v){return k(),u("div",null,[g,s("div",null,[s("span",null,"\u662F\u5426\u663E\u793A:"+i(a.isInViewPort),1),s("div",{onScroll:n[0]||(n[0]=(...c)=>a.handleScroll&&a.handleScroll(...c)),style:{width:"50%",height:"300px","background-color":"#333","overflow-y":"auto",color:"#fff"}},[h,s("div",f," \u5230\u4E86 ",512)],32)]),m])}var b=l(d,[["render",x]]);export{w as __pageData,b as default};

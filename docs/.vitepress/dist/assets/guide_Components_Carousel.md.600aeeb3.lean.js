import{f as u,g as r,h,r as l,o,c as g,b as k,d as f,w as x,i as y,u as m,j as p,a as n}from"./app.51fe55da.js";const _=n('',6),v={style:{width:"100%","background-color":"#ccc","box-sizing":"content-box"}},w=n(`__VP_STATIC_START__<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPCarousel</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">$event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img.jpg&#39;</span><span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img2.jpg&#39;</span><span class="token punctuation">,</span> 
        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img3.jpg&#39;</span><span class="token punctuation">,</span> 
        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img.jpg&#39;</span><span class="token punctuation">,</span> 
        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">,</span>
      handlePageChanged<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">The source data of carousel</td><td style="text-align:left;"><code>Array</code></td><td style="text-align:left;"><code>[]</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">The height of carousel</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>300px</code></td></tr><tr><td style="text-align:left;">indicators</td><td style="text-align:left;">If show the indicators at the bottom of slides</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h3 id="data-props" tabindex="-1">Data Props <a class="header-anchor" href="#data-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Data Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;">pic</td><td style="text-align:left;">The <code>URL</code> of image</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td><td style="text-align:left;"><code>Required</code></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">Display width of image, if left it unset, the pic will show as original size. if set only width without height, the height will automatically fit the scale</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Display height of image, if set width and left height unset, the pic will show as original size.</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">order</td><td style="text-align:left;">The slides will shows in ascending order</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,7),b=n('',1),j='{"title":"Carousel \u8F6E\u64AD\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Data Props","slug":"data-props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Carousel.md","lastUpdated":1631698330375}',C={};function T(E){const a=u(!1),c=r([{order:1,pic:"/images/img.jpg",width:300},{order:2,pic:"/images/img2.jpg",width:300},{order:3,pic:"/images/img3.jpg",width:300},{order:4,pic:"/images/img.jpg",width:300}]);h(()=>{a.value=!0});function i(e,s,t){console.log(e,s,t)}return(e,s)=>{const t=l("MPCarousel"),d=l("ClientOnly");return o(),g("div",null,[_,k("div",v,[f(d,null,{default:x(()=>[a.value?(o(),y(t,{key:0,indicators:"",onClick:i,value:m(c)},null,8,["value"])):p("v-if",!0)]),_:1})]),w,p(" |Event Name|Explanation|Type|Default| "),b])}}const N=Object.assign(C,{setup:T});export{j as __pageData,N as default};

import{r as t,k as n,l as a,g as e,o as s,c as l,b as p,m as o,u as c,j as i,a as d}from"./app.183d8745.js";const u=d('<h1 id="carousel-轮播图"><a class="header-anchor" href="#carousel-轮播图" aria-hidden="true">#</a> Carousel 轮播图</h1><h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>用翻牌展示图片信息，在IE上加载不出来的，别试了</p><p>组件最小宽度会设置为2倍图片最大宽度, 请留好足够空间</p><p>尽量单组件控制在50张以内，之后再优化。</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',6),r={style:{width:"100%","background-color":"#ccc","box-sizing":"content-box"}},g=d('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPCarousel</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">$event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        order<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> \n        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img.jpg&#39;</span><span class="token punctuation">,</span>\n        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        order<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> \n        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img2.jpg&#39;</span><span class="token punctuation">,</span> \n        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        order<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> \n        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img3.jpg&#39;</span><span class="token punctuation">,</span> \n        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        order<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> \n        pic<span class="token operator">:</span> <span class="token string">&#39;/images/img.jpg&#39;</span><span class="token punctuation">,</span> \n        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      handlePageChanged<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">The source data of carousel</td><td style="text-align:left;"><code>Array</code></td><td style="text-align:left;"><code>[]</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">The height of carousel</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>300px</code></td></tr><tr><td style="text-align:left;">indicators</td><td style="text-align:left;">If show the indicators at the bottom of slides</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h3 id="data-props"><a class="header-anchor" href="#data-props" aria-hidden="true">#</a> Data Props</h3><table><thead><tr><th style="text-align:left;">Data Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;">pic</td><td style="text-align:left;">The <code>URL</code> of image</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td><td style="text-align:left;"><code>Required</code></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">Display width of image, if left it unset, the pic will show as original size. if set only width without height, the height will automatically fit the scale</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Display height of image, if set width and left height unset, the pic will show as original size.</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">order</td><td style="text-align:left;">The slides will shows in ascending order</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>',7),k=d('<table><thead><tr><th style="text-align:left;">Event Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Return Value</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">Click event, triggered when you click the actived slice.</td><td style="text-align:left;"><code>$event</code> ,<code>item</code>,<code>index</code>, for <code>Click Event</code>,<code>Clicked Object</code>,<code>Index of the Clicked Object</code></td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">Emit while carousel paused, specific means when mouse over the slide</td><td style="text-align:left;"><code>index</code>, current index of the paused slide</td></tr><tr><td style="text-align:left;">continue</td><td style="text-align:left;">Emit when carousel resume, specific means when mouse out of the slide</td><td style="text-align:left;"><code>index</code>, current index of the resuming slide</td></tr><tr><td style="text-align:left;">next</td><td style="text-align:left;">Emit when carousel turn to next page</td><td style="text-align:left;"><code>index</code>, the index of the turning slide</td></tr><tr><td style="text-align:left;">previous</td><td style="text-align:left;">Emit when carousel turn to previous page</td><td style="text-align:left;"><code>index</code>, the index of the turning slide</td></tr></tbody></table>',1),h='{"title":"Carousel 轮播图","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Data Props","slug":"data-props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Carousel.md","lastUpdated":1628761821873}',f={};const x=Object.assign(f,{setup:function(d){const h=t(!1),f=n([{order:1,pic:"/images/img.jpg",width:300},{order:2,pic:"/images/img2.jpg",width:300},{order:3,pic:"/images/img3.jpg",width:300},{order:4,pic:"/images/img.jpg",width:300}]);function x(t,n,a){console.log(t,n,a)}return a((()=>{h.value=!0})),(t,n)=>{const a=e("MPCarousel");return s(),l("div",null,[u,p("div",r,[h.value?(s(),o(a,{key:0,indicators:"",onClick:x,value:c(f)},null,8,["value"])):i("v-if",!0)]),g,i(" |Event Name|Explanation|Type|Default| "),k])}}});export{h as __pageData,x as default};

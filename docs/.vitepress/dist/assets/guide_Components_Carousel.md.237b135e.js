import{h as i,a1 as y,j as d,B as e,o as n,c as F,x as D,D as h,z as g,N as o,y as f,A as u}from"./chunks/framework.6acf563d.js";const C=o('<h1 id="carousel-轮播图" tabindex="-1">Carousel 轮播图 <a class="header-anchor" href="#carousel-轮播图" aria-label="Permalink to &quot;Carousel 轮播图&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>用翻牌展示图片信息，在IE上加载不出来的，别试了</p><p>组件最小宽度会设置为2倍图片最大宽度, 请留好足够空间</p><p>尽量单组件控制在50张以内，之后再优化。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>',6),x={style:{width:"100%","background-color":"#ccc","box-sizing":"content-box"}},m=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MPCarousel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">handleClick</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">$event</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">$event</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#F07178;">([</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        order</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        pic</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/images/img.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        order</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        pic</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/images/img2.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        order</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        pic</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/images/img3.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        order</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        pic</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/images/img.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    ])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">handlePageChanged</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">The source data of carousel</td><td style="text-align:left;"><code>Array</code></td><td style="text-align:left;"><code>[]</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">The height of carousel</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>300px</code></td></tr><tr><td style="text-align:left;">indicators</td><td style="text-align:left;">If show the indicators at the bottom of slides</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h3 id="data-props" tabindex="-1">Data Props <a class="header-anchor" href="#data-props" aria-label="Permalink to &quot;Data Props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Data Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;">pic</td><td style="text-align:left;">The <code>URL</code> of image</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td><td style="text-align:left;"><code>Required</code></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">Display width of image, if left it unset, the pic will show as original size. if set only width without height, the height will automatically fit the scale</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Display height of image, if set width and left height unset, the pic will show as original size.</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr><tr><td style="text-align:left;">order</td><td style="text-align:left;">The slides will shows in ascending order</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"></td><td style="text-align:left;"><code>Optional</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Event Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Return Value</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">Click event, triggered when you click the actived slice.</td><td style="text-align:left;"><code>$event</code> ,<code>item</code>,<code>index</code>, for <code>Click Event</code>,<code>Clicked Object</code>,<code>Index of the Clicked Object</code></td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">Emit while carousel paused, specific means when mouse over the slide</td><td style="text-align:left;"><code>index</code>, current index of the paused slide</td></tr><tr><td style="text-align:left;">continue</td><td style="text-align:left;">Emit when carousel resume, specific means when mouse out of the slide</td><td style="text-align:left;"><code>index</code>, current index of the resuming slide</td></tr><tr><td style="text-align:left;">next</td><td style="text-align:left;">Emit when carousel turn to next page</td><td style="text-align:left;"><code>index</code>, the index of the turning slide</td></tr><tr><td style="text-align:left;">previous</td><td style="text-align:left;">Emit when carousel turn to previous page</td><td style="text-align:left;"><code>index</code>, the index of the turning slide</td></tr></tbody></table>`,8),b=JSON.parse('{"title":"Carousel 轮播图","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Components/Carousel.md"}'),A={name:"guide/Components/Carousel.md"},w=Object.assign(A,{setup(_){const t=i(!1),p=y([{order:1,pic:"/images/img.jpg",width:300},{order:2,pic:"/images/img2.jpg",width:300},{order:3,pic:"/images/img3.jpg",width:300},{order:4,pic:"/images/img.jpg",width:300}]);d(()=>{t.value=!0});function c(a,l,s){console.log(a,l,s)}return(a,l)=>{const s=e("MPCarousel"),r=e("ClientOnly");return n(),F("div",null,[C,D("div",x,[h(r,null,{default:g(()=>[t.value?(n(),f(s,{key:0,indicators:"",onClick:c,value:p},null,8,["value"])):u("",!0)]),_:1})]),m])}}});export{b as __pageData,w as default};
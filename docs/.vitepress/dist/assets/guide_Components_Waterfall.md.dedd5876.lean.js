import{_ as r,r as n,c as p,b as a,d as s,w as o,j as d,a as e,o as l,F as k,k as g}from"./app.51fe55da.js";const A='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Waterfall.md","lastUpdated":1631670909973}',h={},_=e('',4),v={style:{"overflow-y":"auto",height:"500px",width:"700px",margin:"20px"}},m={style:{padding:"10px",position:"relative"}},y=a("div",null," Name ",-1),x=e(`__VP_STATIC_START__<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">overflow-y</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>700px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPWaterFall</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPCard</span>
            <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`10px\`<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gallery<span class="token punctuation">&quot;</span></span>
            <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>5px</span><span class="token punctuation">&quot;</span></span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 20<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/images/img\${i % 4 == 0 || i % 4 == 1 ? <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> : i % 4}.jpg\`<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span>relative</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>far<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>heart<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                    Name
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MPCard</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MPWaterFall</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Props Name</th><th style="text-align:left;">Explanation</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">column</td><td style="text-align:left;">\u5217\u6570</td><td style="text-align:left;"><code>Number</code></td><td style="text-align:left;"><code>3</code></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">\u9AD8\u5EA6</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>100%</code></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">\u7011\u5E03\u6D41\u5BF9\u9F50\u65B9\u5F0F,\u5305\u62EC[<code>&#39;around&#39;</code>,<code>&#39;between&#39;</code>,<code>&#39;unset&#39;</code>,<code>&#39;center&#39;</code>,<code>&#39;evenly&#39;</code>]</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>0</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,5),f=e('',1);function q(P,T,b,w,C,E){const c=n("font-awesome-icon"),u=n("MPCard"),i=n("MPWaterFall");return l(),p("div",null,[_,a("div",v,[s(i,{column:"3",type:"center"},{default:o(()=>[(l(),p(k,null,g(20,t=>s(u,{radius:"10px",type:"gallery",style:{margin:"5px"},key:t,image:`/images/img${t%4==0||t%4==1?"":t%4}.jpg`},{default:o(()=>[a("div",m,[a("div",null,[a("i",null,[s(c,{icon:["far","heart"]})])]),y])]),_:2},1032,["image"])),64))]),_:1})]),x,d(" |Event Name|Explanation|Type|Default| "),f])}var S=r(h,[["render",q]]);export{A as __pageData,S as default};

import{o as a,c as n,a as s}from"./app.183d8745.js";const t='{"title":"Start 起步","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation安装","slug":"installation安装"},{"level":2,"title":"Usage使用","slug":"usage使用"}],"relativePath":"guide/start.md","lastUpdated":1629078755172}',p={},e=[s('<h1 id="start-起步"><a class="header-anchor" href="#start-起步" aria-hidden="true">#</a> Start 起步</h1><h2 id="installation安装"><a class="header-anchor" href="#installation安装" aria-hidden="true">#</a> Installation安装</h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @mpanda/mpc -S\n</code></pre></div><div class="language-shell"><pre><code>cnpm <span class="token function">install</span> @mpanda/mpc -S\n</code></pre></div><div class="language-shell"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> @mpanda/mpc -S\n</code></pre></div><h2 id="usage使用"><a class="header-anchor" href="#usage使用" aria-hidden="true">#</a> Usage使用</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token constant">MPC</span> <span class="token keyword">from</span> <span class="token string">&#39;@mpanda/mpc&#39;</span> \n<span class="token keyword">import</span> <span class="token string">&#39;@mpanda/mpc/lib/mpc.css&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">MPC</span><span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div>',7)];p.render=function(s,t,p,o,c,l){return a(),n("div",null,e)};export{t as __pageData,p as default};
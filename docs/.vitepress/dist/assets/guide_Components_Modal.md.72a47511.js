import{r as e,g as a,o as l,c as i,b as r,t as s,w as d,a as t,d as o}from"./app.bf27681a.js";const h={setup(){const a=e(!1);return{modalVisibility:a,handleClose:function(){a.value=!1},handleShow:function(){a.value=!0}}}},n='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Data Props","slug":"data-props"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"guide/Components/Modal.md","lastUpdated":1628666570830}',p=t('<h1 id="modal"><a class="header-anchor" href="#modal" aria-hidden="true">#</a> Modal</h1><h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',3),v=o("aa"),u=t('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><h3 id="data-props"><a class="header-anchor" href="#data-props" aria-hidden="true">#</a> Data Props</h3><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>',4);h.render=function(e,t,o,h,n,_){const c=a("MPModal");return l(),i("div",null,[p,r("div",{onClick:t[1]||(t[1]=(...e)=>h.handleShow&&h.handleShow(...e))},s(h.modalVisibility)+" "+s(typeof h.modalVisibility),1),r(c,{visible:h.modalVisibility,onClose:h.handleClose,draggable:"",resizeable:""},{default:d((()=>[v])),_:1},8,["visible","onClose"]),u])};export{n as __pageData,h as default};
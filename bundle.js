"use strict";history.scrollRestoration="auto";let e='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style="background:%23333c3e"><path d="M-40 1000L0 0h960z" fill="%23009083"/><path d="M-40 1000l318-318L0 200z" fill="%2323b39b"/><path d="M-40 1000l318-318L0 521z" fill="%2395e9dd"/><path d="M-40 1000l318-318 184 318z" fill="%23698287"/><path d="M490 710L1200 0H80z" fill="%23027e63"/><path d="M490 710L1200 0h360L718 842z" fill="%2338574c"/></svg>';document.head.insertAdjacentHTML("beforeend",`<meta name="viewport" content="width=device-width"><meta name="theme-color" content="#3f51b5"><link rel="icon" href='${e}'><style>*{max-height:100%;margin:0}html{font-family:sans-serif;line-height:1.8;overflow-wrap:break-word;background:#f8f9fa;-webkit-tap-highlight-color:#0000}a{color:#3f51b5;text-decoration:none}main{width:100%;min-height:100vh;margin:50px 0 0}main>*{padding:20px;margin-top:1px;background:#fff;box-shadow:0 1px #ddd}@media (min-width:750px){main{width:680px;margin:75px auto 25px}main>*{margin-top:20px;border-radius:8px;box-shadow:0 1px 4px #aaa}}main h1{padding-bottom:7px;margin:-9px 0 13px;font-weight:400;box-shadow:0 1px #ddd}section>*{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}section h3{margin:-8px 0 5px;font-weight:400}section div{margin:9px 0 -2px}section div a,section>a,section span{padding:2px 7px;margin:5px 9px -4px 0;font-size:13px;border:1px solid #ccc;border-radius:4px}section>a{display:inline-block}nav{padding:0;font-size:14px;line-height:3;text-align:center}nav a{padding:1em 6%}header{position:fixed;top:0;width:100%;background:#3f51b5;box-shadow:0 0 5px #aaa;transition:.2s}header.hidden{transform:translateY(-55px)}header>*{float:left;height:28px;padding:11px;cursor:pointer;fill:#fff}header a +*{float:right}header img{width:24px;margin-left:-10px;border:2px solid #fff;border-radius:50%}footer,footer a{font-size:13px;line-height:3;color:#ccc;text-align:center;background:#3f51b5}aside{position:fixed;top:0;width:100%;height:100%;background:#0008;transition:.3s}aside.hidden{visibility:hidden;background:#0000}aside div{width:70%;max-width:230px;height:100%;padding-top:50px;overflow:auto;background:#fff;transition:.3s}aside.hidden div{transform:translateX(-100%)}aside a{display:block;padding-left:15%;line-height:4;color:#333}spin-circle{position:fixed;opacity:0}.loading spin-circle{top:50%;left:50%;padding:17px;margin:-20px;border:3px solid #3f51b5;border-top-color:#0000;border-radius:50%;opacity:1;transition:opacity .3s .1s,transform 5s linear;transform:rotate(3600deg)}.loading main,.loading footer{filter:opacity(.2);transition:.3s}@keyframes loaded{0%{filter:opacity(.1);transform:translateY(9px)}}.loaded main,.loaded footer{transition:none;animation:.2s ease-out loaded}article>*,article details>*,article p{margin-top:7px}article h3,article h4{margin-top:11px;font-weight:400}article a{color:#0366d6}article summary{padding-left:3px}article blockquote{padding-left:15px;border-left:3px solid #ddd}article code{padding:2px 5px;font-size:14px;background:#f4f4f4;border-radius:4px}article pre code{display:block;padding:16px;overflow:auto;line-height:1.3}article ol,article ul{padding-left:22px}article table{display:block;overflow:auto;border-collapse:collapse}article tr:nth-child(2n){background:#f8f9fa}article tr>*{padding:5px 13px;font-weight:400;border:1px solid #ddd}article img{max-width:100%;height:auto;}article img:not(.no-border){filter:drop-shadow(0 0 2px #ccc);border-radius:4px}</style>`),document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",`<header><svg viewBox="-6 0 12 12" onclick="document.body.children[4].className=''"><circle r="1" cy="3"/><circle r="1" cy="6"/><circle r="1" cy="9"/></svg><a href="/./"><img src='${e}'></a><svg viewBox="0 0 48 48" onclick="self.scroll({top:0,behavior:'smooth'})"><path d="M22 15.7V40h4V15.7l11.2 11.1L40 24 24 8 8 24l2.8 2.8z"/></svg></header><footer><a href="/./about/#license">CC0</a>&emsp;|&emsp;<a href="/feed.xml">RSS</a></footer><spin-circle></spin-circle><aside class="hidden" onclick="className='hidden'"><div><a href="/./">Home</a><a href="/./archive/">Archive</a><a href="/./tag/">Tag</a><a href="/./toy/">Toy</a><a href="/./about/">About</a></div></aside>`);let[i,a]=document.body.children,t={},o=0,d=function(e){e.preventDefault(),history.pushState(null,null,this.href),onpopstate()},r=()=>{(document.getElementById(location.hash.slice(1))||a).scrollIntoView(),document.querySelectorAll('a[href^="/."],a[href^="#"]').forEach(e=>e.onclick=d)};onscroll=()=>{a.className=o<(t[location]=o=scrollY)&&o>55?"hidden":""},onpopstate=e=>{document.body.className="loading",history.scrollRestoration="manual",fetch(location).then(e=>e.text()).then(a=>{[,document.title,,i.innerHTML]=a.split(/<\/?title>|<\/?main>/),scroll(0,e&&t[location]||0),r(),document.body.className="loaded",setTimeout(()=>document.body.className="",250)})},r()});
import{r as l,j as h}from"./jsx-runtime-DexIYAB0.js";import{V as j}from"./visually-hidden-CvCfHxBV.js";import{u as M,c as V}from"./heading-DOSdPG19.js";import{u as G}from"./use-spring-Cyan7EMP.js";async function R(e){return new Promise(t=>setTimeout(t,e))}const T="_text_1v07c_2",E="_glyph_1v07c_9",N="_value_1v07c_16",p={text:T,glyph:E,value:N},g=["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ー","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ"],r={Glyph:"glyph",Value:"value"};function S(e,t,s){return e.map((i,a)=>{if(a<s)return{type:r.Value,value:i};if(s%1<.5){const n=Math.floor(Math.random()*g.length);return{type:r.Glyph,value:g[n]}}return{type:r.Glyph,value:t[a].value}})}const I=l.memo(({text:e,start:t=!0,delay:s=0,className:i,...a})=>{const n=l.useRef([{type:r.Glyph,value:""}]),d=l.useRef(),m=M(),y=G(0,{stiffness:8,damping:5});return l.useEffect(()=>{const x=d.current,c=e.split("");let _;const v=()=>{const o=n.current.map(u=>`<span class="${p[u.type]}">${u.value}</span>`);x.innerHTML=o.join("")},f=y.on("change",o=>{n.current=S(c,n.current,o),v()});return t&&!_&&!m&&(async()=>{await R(s),y.set(c.length)})(),m&&(n.current=c.map((o,u)=>({type:r.Value,value:c[u]})),v()),()=>{f==null||f()}},[y,m,t,s,e]),h.jsxs("span",{className:V(p.text,i),...a,children:[h.jsx(j,{className:p.label,children:e}),h.jsx("span",{"aria-hidden":!0,className:p.content,ref:d})]})});export{I as D};
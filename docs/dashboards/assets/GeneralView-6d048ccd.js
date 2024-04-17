import{_ as d,o as n,c as i,a as s,t as r,r as p,b as h,F as _,d as f,e as b,f as g}from"./index-161bd139.js";const v={props:["name","value"],setup(o){return console.log(o),{props:o}}},x={class:"w-1/2 xl:w-1/4 px-3"},C={class:"w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"},y=s("svg",{class:"w-16 h-16 fill-current mr-4 hidden lg:block",viewBox:"0 0 20 20"},[s("path",{d:"M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"})],-1),w={class:"text-gray-700"},$={class:"font-semibold text-3xl"};function B(o,t,a,e,c,m){return n(),i("div",x,[s("div",C,[y,s("div",w,[s("p",$,r(e.props.value),1),s("p",null,r(e.props.name),1)])])])}const z=d(v,[["render",B]]);d3plus.colorDefaults.missing="#e5e7eb";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);const S={components:{ItemComponent:z},setup(){var o=p([]);return[{name:"Encuestas",condition:'collection like "%25Survey%25"'},{name:"Censos",condition:'collection like "%25Censuses%25"'},{name:"Otras fuentes",condition:'collection not like "%25Censuses%25" AND collection not like "%25Survey%25"'}].forEach(t=>{fetch(`https://mydata.iadb.org/resource/5bbz-ibhf.json?$where=${t.condition}`).then(a=>a.json()).then(a=>{const e=[...new Set(a.map(c=>c.indicator))];o.value.push({name:t.name,value:e.length})})}),fetch("https://mydata.iadb.org/resource/5bbz-ibhf.json").then(t=>t.json()).then(t=>{const a=[...new Set(t.map(e=>e.indicator))];o.value.push({name:"Total",value:a.length}),new d3plus.Treemap().data(t).groupBy(["theme_es"]).sum(e=>e.indicator?e.indicator.length:0).legend(!1).height(300).title("Porcentaje de indicadores por tema").select("#viz-treemap").detectVisible(!1).render(),new d3plus.Matrix().data(t).groupBy(["theme_es","collection"]).column("collection").row("theme_es").colorScaleConfig({color:["#60a5fa"]}).title("Indicadores por tema y origen de datos").colorScale("indicator").legend(!1).height(500).select("#viz-matrix").detectVisible(!1).render()}),{items:o}},mounted(){}},k={class:""},F=s("p",{className:"text-3xl font-semibold mb-2 lg:mb-0"},"General",-1),j=s("p",{className:"text-md mb-2 lg:mb-0"},"El Sector Social (SCL) de la Vicepresidencia de Sectores y Conocimiento del BID cuenta con indicadores estandarizados y comparables para 26 países de la región (ALC). El objetivo de las siguientes visualizaciones es indicar la disponibilidad de estos por tema y fuente de datos. Parte de los mismos son calculados internamente en base a las encuestas de hogares y censos de población oficiales de los institutos estadísticos de cada país. Por otro lado, los externos se obtienen a partir encuestas demográficas y de salud, organizaciones internacionales y evaluaciones de aprendizaje.",-1),D={key:0,class:"flex flex-wrap pt-5 justify-center"},E=s("small",null,"* Cantidad de indicadores por fuente de datos.",-1),V=s("div",{class:"px-3"},[s("div",{id:"viz-treemap",className:"pt-10 pb-10"}),s("div",{id:"viz-matrix",className:"pt-10 pb-10"})],-1);function A(o,t,a,e,c,m){const u=h("item-component");return n(),i("div",k,[F,j,e.items?(n(),i("div",D,[(n(!0),i(_,null,f(e.items,l=>(n(),g(u,{key:l.name,name:l.name,value:l.value},null,8,["name","value"]))),128))])):b("",!0),E,V])}const M=d(S,[["render",A]]);export{M as default};

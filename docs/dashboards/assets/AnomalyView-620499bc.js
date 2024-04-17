import{_ as F,r as A,b as p,o as m,c as x,g as n,h as s,i as y,a as e,F as z,d as S,t as r,j as _,m as k,f as $,e as B}from"./index-161bd139.js";d3plus.colorDefaults.missing="white";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);d3plus.formatDefaultLocale="es-ES";const M={methods:{},setup(){var C=A(!1),w=A(0),g=[];g=["Shock externo","Cambio de metodología","Otros"];function v(){Promise.all([fetch("https://mydata.iadb.org/resource/s8uc-zq8r.json").then(o=>o.ok&&o.json()||Promise.reject(o)),fetch("https://mydata.iadb.org/resource/mjbx-2muu.json").then(o=>o.ok&&o.json()||Promise.reject(o))]).then(o=>{var f=o[0],l=o[1];this.headers=[{title:"País",value:"isoalpha3"},{title:"Año/s",value:"years"},{title:"Indicador",value:"indicator"},{title:"Tema",value:"theme_en"}];var h=f.sort((a,i)=>a.isoalpha3<i.isoalpha3?-1:a.isoalpha3>i.isoalpha3?1:0),b=[];h.forEach(a=>{var i=b.filter(u=>a.indicator==u.indicator&&a.isoalpha3==u.isoalpha3)[0];i!=null?(i.years.push(+a.year),i.years=[...new Set(i.years.map(u=>+u))]):(a.years=[+a.year],b.push(a))}),b.forEach(a=>{a.exception=null,a.years_exception=[];var i=l.filter(u=>u.isoalpha3==a.isoalpha3&&u.indicator==a.indicator)[0];i!=null&&(a.years_exception.push(i.year),a.exception=i)}),this.anomalies=b,drawGraph(b)})}function E(){fetch("https://mydata.iadb.org/resource/mjbx-2muu.json",{method:"POST",headers:{Authorization:"OAuth ZeJLaxe-dvTgkOxd5CsyOAg7PoylMDL2mYnB","Content-Type":"application/json"},body:JSON.stringify({id:"1233",indicator:"prangoedad0_15",year:"2015",isoalpha3:"SLV",anomalyconfirmed:"1",comments:"Value is within expected range"})}).then(o=>o.json()).then(o=>{console.log(o)})}function V(o){fetch(`https://mydata.iadb.org/resource/q8e9-eb82.json?$$app_token=IjHG1z0fQXsM9vxlkB8vPq3S2&indicator=${o.indicator}&isoalpha3=${o.isoalpha3}&totals_dummy=1`).then(f=>f.json()).then(f=>{d3.select("#viz").select("svg").remove(),console.clear(),d3.max(f,l=>l.value),new d3plus.LinePlot().data(f).groupBy(["isoalpha3","indicator"]).height(600).x(l=>+l.year).loadingMessage(!0).tooltip(!0).lineMarkerConfig({fill:(l,h)=>+l.y&&y(o.years).indexOf(l.x)>-1||l.value&&y(o.years).indexOf(+l.year)>-1?"#C24E4C":"#1E88E5",label:l=>d3.format(".2f")(l.y),r:20,labelConfig:{fontResize:!0}}).baseline(0).title(`Error encontrado en: <b>${o.isoalpha3} ${o.years.join(", ")} ${o.indicator} ${o.theme_en}</b>`).tooltip(!0).lineMarkers(!0).legend(!1).y(l=>+l.value).select("#viz").render()})}return{getData:v,anomalies:w,dialog:C,drawViz:V,addException:E,describe_exception:g}},mounted(){this.getData()}},L={class:"container"},T=e("p",{class:"text-3xl font-semibold mb-2 lg:mb-0"},"ANOMALÍAS",-1),q=e("p",{class:"text-md mb-2 lg:mb-0"},[_(" Se definen como anomalías aquellos indicadores cuyo valor se encuentra fuera de tres veces el rango intercuartílico de este para un país a través de los años. A continuación, se muestra una tabla de anomalías por indicador y país con tres botones: tendencia, excepción y comentarios. "),e("ul",{class:"list-disc pl-5"},[e("li",null,"En tendencia, se muestra gráficamente los valores del indicador y se resalta en rojo los números fuera de los rangos esperados."),e("li",null,"En excepción, el technical steward podrá mandar un correo para indicar si el valor está en el rango esperado y debería considerarse como correcto."),e("li",null,"En comentario, se podrá ver aquellos indicadores que a pesar de ser anomalías tienen una explicación para estar tres veces fuera del rango intercuartílico.")])],-1),N=e("thead",null,[e("tr",null,[e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," ID "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," País "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Tema "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Indicador "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Año "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Acciones ")])],-1),U=e("div",{id:"viz"},null,-1),I=e("div",null,null,-1),G={class:"v-card-text"},J=e("hr",null,null,-1),R=e("p",{class:"pt-5"},[_("Si desea agregar una excepción para anomaía seleccionada, debe enviar un email a "),e("b",null,"scldata@iadb.org"),_(" con el siguiente formato.")],-1),H=e("br",null,null,-1),Q=e("b",{class:"text-blue-400"},"Asunto del email: ",-1),X=e("br",null,null,-1),Y=e("b",{class:"pt-10 text-blue-400"},"Contenido del email",-1),Z=e("br",null,null,-1),K=e("b",{class:"pt-2"},"Indicador: ",-1),W=e("br",null,null,-1),ee=e("b",{class:"pt-2"},"País: ",-1),te=e("br",null,null,-1),oe=e("b",{class:"pt-2"},"Año/s: ",-1),ne=e("br",null,null,-1),ae=e("b",{class:"pt-2"},"Motivo general: ",-1),le=e("br",null,null,-1),se=e("b",{class:"pt-2"},"Comentario: ",-1),ie={class:"d-flex align-center flex-column"},re={class:"v-card-text"};function ce(C,w,g,v,E,V){const o=p("v-col"),f=p("v-row"),l=p("v-chip"),h=p("v-btn"),b=p("v-spacer"),a=p("v-card-actions"),i=p("v-card"),u=p("v-dialog"),j=p("v-select"),D=p("v-textarea"),P=p("v-table");return m(),x("div",L,[n(f,{class:""},{default:s(()=>[n(o,null,{default:s(()=>[T,q]),_:1})]),_:1}),n(P,{density:"compact",class:"mt-10"},{default:s(()=>[N,e("tbody",null,[(m(!0),x(z,null,S(v.anomalies,(t,O)=>(m(),x("tr",{key:t.id},[e("td",null,r(O+1),1),e("td",null,r(t.isoalpha3),1),e("td",null,r(t.theme_en),1),e("td",null,r(t.indicator),1),e("td",null,[(m(!0),x(z,null,S(t.years,(c,d)=>(m(),x("div",{class:"inline",key:d},[n(l,{size:"x-small",color:t.years_exception.indexOf(c.toString())!=-1?"success":"black"},{default:s(()=>[_(r(c),1)]),_:2},1032,["color"])]))),128))]),e("td",null,[e("div",null,[n(u,{fullscreen:""},{activator:s(({props:c})=>[n(h,k({variant:"outlined",size:"x-small"},c,{text:"Tendencia",onClick:d=>v.drawViz(t)}),null,16,["onClick"])]),default:s(({isActive:c})=>[n(i,{title:""},{default:s(()=>[U,I,n(a,null,{default:s(()=>[n(b),n(h,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(u,null,{activator:s(({props:c})=>[n(h,k({variant:"outlined",size:"x-small"},c,{text:"➕ excepción",class:"ml-2",onClick:d=>v.addException(t)}),null,16,["onClick"])]),default:s(({isActive:c})=>[n(i,{title:"Envio de excepción para una anomalía"},{default:s(()=>[e("div",G,[n(j,{multiple:"",class:"w-25 d-inline-block pr-10 pt-5",label:"Año de la excepción",modelValue:t.year_exception,"onUpdate:modelValue":d=>t.year_exception=d,items:t.years,variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","items"]),v.describe_exception?(m(),$(j,{key:0,class:"w-25 d-inline-block",label:"Motivo de la excepción",modelValue:t.describe_exception,"onUpdate:modelValue":d=>t.describe_exception=d,items:v.describe_exception,variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","items"])):B("",!0),n(D,{maxlength:"500",placeholder:"Explicación de la excepción",rows:"3",variant:"outlined",class:"pt-2",modelValue:t.comments,"onUpdate:modelValue":d=>t.comments=d},null,8,["modelValue","onUpdate:modelValue"]),J,R,H,Q,e("p",null,[_("Excepción para "),e("b",null,r(t.indicator)+" / "+r(t.isoalpha3)+" / "+r(t.year_exception?t.year_exception.join(","):t.year),1)]),X,Y,Z,K,_(r(t.indicator),1),W,ee,_(r(t.isoalpha3),1),te,oe,_(r(t.year_exception?t.year_exception.join(","):t.year),1),ne,ae,_(r(t.describe_exception),1),le,se,_(r(t.comments),1)]),n(a,null,{default:s(()=>[n(b),n(h,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(u,null,{activator:s(({props:c})=>[t.exception!=null?(m(),$(h,k({key:0,variant:"outlined",color:"success",size:"x-small"},c,{text:"Comentario",class:"ml-2 border-1",onClick:d=>v.addException(t)}),null,16,["onClick"])):B("",!0)]),default:s(({isActive:c})=>[e("div",ie,[n(i,{title:"Motivo de excepción",width:"400"},{default:s(()=>[e("div",re,[e("h3",null,r(t.exception.year),1),e("p",null,r(t.exception.comments),1)]),n(a,null,{default:s(()=>[n(b),n(h,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])])]))),128))])]),_:1})])}const ue=F(M,[["render",ce]]);export{ue as default};

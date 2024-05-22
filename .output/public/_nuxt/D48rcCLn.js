import{d as D,r,u as K,l as q,m as B,b as t,w as o,e as a,g as m,o as C,C as u,B as x,h as T,t as U,D as F}from"./D0exQMQl.js";import{N as I}from"./CSzv-MlV.js";import{a as R,N as d}from"./DzljE34E.js";const V={class:"page"},$=m("div",{class:"page-header"},[m("div",{class:"title"},"2. Dependent Dropdown (Pilihan Terkait)")],-1),M={class:"my-6"},A=D({__name:"DependentDropdown",setup(O){const h=r(null),y={provinsi:{required:!0,trigger:["blur"]},kabupaten:{required:!0,trigger:["blur"]},kecamatan:{required:!0,trigger:["blur"]},kelurahan:{required:!0,trigger:["blur"]}},N=K(),p=r([]),v=r([]),c=r([]),f=r([]),k=r(""),l=r({provinsi:"",kabupaten:"",kecamatan:"",kelurahan:""});q(()=>{fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json").then(async i=>p.value=(await i.json()).map(e=>({value:e.id,label:e.name})))});async function P(i){fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${i}.json`).then(async e=>v.value=(await e.json()).map(n=>({value:n.id,label:n.name})))}async function j(i){fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${i}.json`).then(async e=>c.value=(await e.json()).map(n=>({value:n.id,label:n.name})))}async function S(i){fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${i}.json`).then(async e=>f.value=(await e.json()).map(n=>({value:n.id,label:n.name})))}async function _(){var i;(i=h.value)==null||i.validate(async e=>{var n,b,w,g;e?N.error("Invalid Data Input"):fetch("/api/dependent-dropdown",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({provinsi:(n=p.value.find(s=>l.value.provinsi===s.value))==null?void 0:n.label,kabupaten:(b=v.value.find(s=>l.value.kabupaten===s.value))==null?void 0:b.label,kecamatan:(w=c.value.find(s=>l.value.kecamatan===s.value))==null?void 0:w.label,kelurahan:(g=f.value.find(s=>l.value.kelurahan===s.value))==null?void 0:g.label})}).then(async s=>k.value=(await s.json()).result)})}return(i,e)=>(C(),B("div",V,[$,t(a(F),null,{default:o(()=>[t(a(I),{vertical:""},{default:o(()=>[t(a(R),{ref_key:"formRef",ref:h,rules:y,"validate-messages":{required:"Field %s is required!"},model:a(l)},{default:o(()=>[t(a(d),{label:"Provinsi",path:"provinsi"},{default:o(()=>[t(a(u),{value:a(l).provinsi,"onUpdate:value":[e[0]||(e[0]=n=>a(l).provinsi=n),e[1]||(e[1]=n=>{a(l).kabupaten="",a(l).kelurahan="",a(l).kecamatan="",P(n)})],filterable:"",placeholder:"Silahkan Pilih Provinsi",options:a(p)},null,8,["value","options"])]),_:1}),t(a(d),{label:"Kabupaten/Kota",path:"kabupaten"},{default:o(()=>[t(a(u),{value:a(l).kabupaten,"onUpdate:value":[e[2]||(e[2]=n=>a(l).kabupaten=n),e[3]||(e[3]=n=>{a(l).kelurahan="",a(l).kecamatan="",j(n)})],filterable:"",placeholder:"Silahkan Pilih Provinsi",options:a(v),disabled:!a(l).provinsi},null,8,["value","options","disabled"])]),_:1}),t(a(d),{label:"Kecamatan",path:"kecamatan"},{default:o(()=>[t(a(u),{value:a(l).kecamatan,"onUpdate:value":[e[4]||(e[4]=n=>a(l).kecamatan=n),e[5]||(e[5]=n=>{a(l).kelurahan="",S(n)})],filterable:"",placeholder:"Silahkan Pilih Provinsi",options:a(c),disabled:!a(l).kabupaten},null,8,["value","options","disabled"])]),_:1}),t(a(d),{label:"Kelurahan",path:"kelurahan"},{default:o(()=>[t(a(u),{value:a(l).kelurahan,"onUpdate:value":e[6]||(e[6]=n=>a(l).kelurahan=n),filterable:"",placeholder:"Silahkan Pilih Provinsi",options:a(f),disabled:!a(l).kecamatan},null,8,["value","options","disabled"])]),_:1}),t(a(x),{onClick:_},{default:o(()=>[T("Send")]),_:1}),m("div",M,"Result:   "+U(a(k)),1)]),_:1},8,["model"])]),_:1})]),_:1})]))}});export{A as default};
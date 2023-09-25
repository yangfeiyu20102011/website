"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4128],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8495:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const i={title:"Introduction",slug:"/"},a="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Welcome to Koordinator!",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1695624233,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/next/installation"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Koordinator vs. Other Concept",id:"koordinator-vs-other-concept",level:2},{value:"Koordinator QoS vs Kubernetes QoS",id:"koordinator-qos-vs-kubernetes-qos",level:3},{value:"Koordinator scheduler vs kube-scheduler",id:"koordinator-scheduler-vs-kube-scheduler",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to Koordinator!"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Koordinator is a QQoS-based scheduling for efficient orchestration of microservices, AI, and big data workloads on Kubernetes. It aims to improve the runtime efficiency and reliability of both latency sensitive workloads and batch jobs, simplify the complexity of resource-related configuration tuning, and increase pod deployment density to improve resource utilizations."),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("p",null,"Koordinator enhances the kubernetes user experiences in the workload management by providing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Well-designed priority and QoS mechanism to co-locate different types of workloads in a cluster and run different types of pods on a single node."),(0,r.kt)("li",{parentName:"ul"},"Allowing for resource overcommitments to achieve high resource utilizations but still satisfying the QoS guarantees by leveraging an application profiling mechanism."),(0,r.kt)("li",{parentName:"ul"},"Fine-grained resource orchestration and isolation mechanism to improve the efficiency of latency-sensitive workloads and batch jobs."),(0,r.kt)("li",{parentName:"ul"},"Flexible job scheduling mechanism to support workloads in specific areas, e.g., big data, AI, audio and video."),(0,r.kt)("li",{parentName:"ul"},"A set of tools for monitoring, troubleshooting and operations.")),(0,r.kt)("h2",{id:"koordinator-vs-other-concept"},"Koordinator vs. Other Concept"),(0,r.kt)("h3",{id:"koordinator-qos-vs-kubernetes-qos"},"Koordinator QoS vs Kubernetes QoS"),(0,r.kt)("p",null,"Kubernetes provides three types of QoS: Guaranteed/Burstable/BestEffort, of which Guaranteed/Burstable is widely used and BestEffort is rarely used. Koordinator is compatible with Kubernetes QoS and has numerous enhancements on each type. In order to avoid interfering with the native QoS semantics, Koordinator introduces an independent field ",(0,r.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass")," to describe the co-location QoS. This QoS describes the service quality of the Pod running on the node in the co-location scenario. It is the most critical semantics of the mixed system."),(0,r.kt)("p",null,"Koordinator is compatible with Kubernetes QoS and has numerous enhancements on each type."),(0,r.kt)("h3",{id:"koordinator-scheduler-vs-kube-scheduler"},"Koordinator scheduler vs kube-scheduler"),(0,r.kt)("p",null,"Koordinator scheduler is ",(0,r.kt)("strong",{parentName:"p"},"not")," designed to replace kube-scheduler, but to make co-located workloads run ",(0,r.kt)("strong",{parentName:"p"},"better")," on kubernetes."),(0,r.kt)("p",null,"Koordinator scheduler is developed based on schedule-framework, adding scheduling plugins related to co-location and priority preemption on top of native scheduling capabilities. Koordinator will be committed to promoting related enhancements into the upstream community of kubernetes and promoting the standardization of co-location technology."),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Here are some recommended next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start to ",(0,r.kt)("a",{parentName:"li",href:"./installation"},"install Koordinator"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,r.kt)("a",{parentName:"li",href:"architecture/overview"},"Overview"),".")))}p.isMDXComponent=!0}}]);
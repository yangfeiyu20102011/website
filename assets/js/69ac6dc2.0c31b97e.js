"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1968],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,y=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9293:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="Priority",d={unversionedId:"key-designs/priority",id:"version-v0.4/key-designs/priority",title:"Priority",description:"Koordinator defines a set of specifications on top of kubernetes priority class, and extends a dimension of priority to support fine-grained colocation.",source:"@site/versioned_docs/version-v0.4/key-designs/priority.md",sourceDirName:"key-designs",slug:"/key-designs/priority",permalink:"/docs/v0.4/key-designs/priority",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/key-designs/priority.md",tags:[],version:"v0.4",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1656560734,formattedLastUpdatedAt:"6/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Resource Model",permalink:"/docs/v0.4/key-designs/resource-model"},next:{title:"QoS",permalink:"/docs/v0.4/key-designs/qos"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Koordinator Priority vs. Kubernetes Priority",id:"koordinator-priority-vs-kubernetes-priority",level:2},{value:"Examples",id:"examples",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"priority"},"Priority"),(0,i.kt)("p",null,"Koordinator defines a set of specifications on top of kubernetes priority class, and extends a dimension of priority to support fine-grained colocation."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Priority is represented by numbers, and four classes are currently defined:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PriorityClass"),(0,i.kt)("th",{parentName:"tr",align:null},"Priority Ranges"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"koord-prod"),(0,i.kt)("td",{parentName:"tr",align:null},"[9000, 9999]"),(0,i.kt)("td",{parentName:"tr",align:null},"Selling requires planning resources quota in advance, and success is guaranteed within quota")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"koord-mid"),(0,i.kt)("td",{parentName:"tr",align:null},"[7000, 7099]"),(0,i.kt)("td",{parentName:"tr",align:null},"Selling requires planning resources quota in advance, and success is guaranteed within quota")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"koord-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"[5000, 5999]"),(0,i.kt)("td",{parentName:"tr",align:null},"Selling requires planning resources quota in advance, and quota borrowing is allowed generally")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"koord-free"),(0,i.kt)("td",{parentName:"tr",align:null},"[3000, 3999]"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource quota is not guaranteed, and the total allocatable resource depends on the total idle resources of the cluster")))),(0,i.kt)("p",null,"There is some white space between PriorityClass to support possible future extensions."),(0,i.kt)("h2",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"Koordinator matches different types of workloads to different priorities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'koord-prod, running typical latency sensitive services, generally referring to types of services that require a "real-time" response, such as a typical service called by clicking a button in the mobile APP.'),(0,i.kt)("li",{parentName:"ul"},"koord-mid, corresponding to the available resources estimated by the appeal long-term reservation, typically used to run some real-time computing, AI training jobs, such as tensorflow/pytorch, etc."),(0,i.kt)("li",{parentName:"ul"},"koord-batch, corresponding to the available resources estimated by the appeal short-term reservation, run typical offline batch jobs, generally referring to offline analysis type jobs, such as day-level big data reports, non-interactive SQL queries."),(0,i.kt)("li",{parentName:"ul"},"koord-free, run low-priority offline batch jobs, generally refers to not making resource budgets, using idle resources to complete as much as possible, such as developers submitting a job for testing purposes.")),(0,i.kt)("h2",{id:"koordinator-priority-vs-kubernetes-priority"},"Koordinator Priority vs. Kubernetes Priority"),(0,i.kt)("p",null,"Koordinator initializes four PriorityClasses in the kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-prod\nvalue: 9000\ndescription: "This priority class should be used for prod service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-mid\nvalue: 7000\ndescription: "This priority class should be used for mid service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-batch\nvalue: 5000\ndescription: "This priority class should be used for batch service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-free\nvalue: 3000\ndescription: "This priority class should be used for free service pods only."\n')),(0,i.kt)("p",null,"Inside each PriorityClass, Koordinator allows users to set Pod colocation priorities for fine-grained resource scheduling."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following YAML is an example of a Pod configuration that uses the PriorityClass and Priority created in the preceding example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\n    koordinator.sh/priority: "5300"\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  priorityClassName: koord-batch\n')),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"Here are some recommended next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./resource-model"},"Resource Model"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./qos"},"QoS"),".")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[998],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={},l="Descheduler Framework",d={unversionedId:"designs/descheduler-framework",id:"version-v0.7/designs/descheduler-framework",title:"Descheduler Framework",description:"Summary",source:"@site/versioned_docs/version-v0.7/designs/descheduler-framework.md",sourceDirName:"designs",slug:"/designs/descheduler-framework",permalink:"/docs/designs/descheduler-framework",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/descheduler-framework.md",tags:[],version:"v0.7",lastUpdatedBy:"Joseph",lastUpdatedAt:1664180357,formattedLastUpdatedAt:"9/26/2022",frontMatter:{},sidebar:"docs",previous:{title:"PodMigrationJob",permalink:"/docs/designs/pod-migration-job"},next:{title:"Colocation of Spark Jobs",permalink:"/docs/best-practices/colocation-of-spark-jobs"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Implementation Details/Notes/Constraints",id:"implementation-detailsnotesconstraints",level:3},{value:"Descheduler profile",id:"descheduler-profile",level:4},{value:"Abstract PodEvictor interface",id:"abstract-podevictor-interface",level:4},{value:"Plug-in descheduler strategy",id:"plug-in-descheduler-strategy",level:4}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"descheduler-framework"},"Descheduler Framework"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This proposal is based on the K8s community's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler"},"descheduler")," to design and implement the descheduler framework required by the koordinator."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"The existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler"},"descheduler")," in the community can solve some problems, but we think that there are still many aspects of the descheduler that can be improved, for example, it only supports the mode of periodic execution, and does not support the event-triggered mode. It is not possible to extend and configure custom rescheduling strategies without invading the existing code of descheduler like kube-scheduler; it also does not support implementing custom evictor. "),(0,i.kt)("p",null,"We also noticed that the K8s descheduler community also found these problems and proposed corresponding solutions such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/issues/753"},"#753 Descheduler framework Proposal")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/781"},"PoC #781"),". The K8s descheduler community tries to implement a descheduler framework similar to the k8s scheduling framework. This coincides with our thinking.  "),(0,i.kt)("p",null,"On the whole, these solutions solved most of our problems, but we also noticed that the related implementations were not merged into the main branch. But we review these implementations and discussions, and we believe this is the right direction. Considering that Koordiantor has clear milestones for descheduler-related features, we will implement Koordinator's own descheduler independently of the upstream community. We try to use some of the designs in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/issues/753"},"#753 PR")," proposed by the community and we will follow the Koordinator's compatibility principle with K8s to maintain compatibility with the upstream community descheduler when implementing. Such as independent implementation can also drive the evolution of the upstream community's work on the descheduler framework. And when the upstream community has new changes or switches to the architecture that Koordinator deems appropriate, Koordinator will follow up promptly and actively."),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Implement Koordinator Descheduler following part of the design in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/descheduler/issues/753"},"#753")," proposed by the community")),(0,i.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Break any existing use cases of the Descheduler.")),(0,i.kt)("h2",{id:"proposal"},"Proposal"),(0,i.kt)("h3",{id:"implementation-detailsnotesconstraints"},"Implementation Details/Notes/Constraints"),(0,i.kt)("h4",{id:"descheduler-profile"},"Descheduler profile"),(0,i.kt)("p",null,"The current descheduler configuration is too simple to support disabling or enabling plugins or supporting custom plugin configurations. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/587"},"PR #587")," introducing descheduler profiles with v1alpha2 api version. We will use this proposal as Koordiantor Descheduler's configuration API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The descheduler profile API supports user specify which extension points are enabled/disabled, alongside specifying plugin configuration. Including ability to configure multiple descheduling profiles."),(0,i.kt)("li",{parentName:"ul"},"The descheduling framework configuration can be converted into an internal representation."),(0,i.kt)("li",{parentName:"ul"},"To reduce need to specify value for every possible configuration, also defaulting serves as a recommended/opinionated settings for the plugins.")),(0,i.kt)("h4",{id:"abstract-podevictor-interface"},"Abstract PodEvictor interface"),(0,i.kt)("p",null,"Currently, descheduler has split ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod Evictor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Evictor Filter"),". Users can inject ",(0,i.kt)("inlineCode",{parentName:"p"},"Evictor Filter")," on demand, and the plug-in calls ",(0,i.kt)("inlineCode",{parentName:"p"},"Evictor Filter")," when selecting abnormal Pods to select Pods that meet the requirements and calls ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod Evictor")," to initiate eviction. At present, ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod Evictor")," has not been abstracted as an interface. We adopt the solution in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/781"},"PoC #781")," to abstract an ",(0,i.kt)("inlineCode",{parentName:"p"},"Evictor interface"),". And refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/885"},"PR #885")," to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"EvictOptions")," paramters.  We can implement custom Evictor based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20220701-pod-migration-job.md"},"PodMigrationJob"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Evictor")," interface defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type EvictOptons struct {\n  // PluginName represents the initiator of the eviction operation\n    PluginName string\n    // Reason allows for passing details about the specific eviction for logging.\n    Reason string\n    // DeleteOptions holds the arguments used to delete\n    DeleteOptions *metav1.DeleteOptions\n}\n\n// Plugin is the parent type for all the descheduling framework plugins.\ntype Plugin interface {\n    Name() string\n}\n\ntype Evictor interface {\n    Plugin\n    // Filter checks if a pod can be evicted\n    Filter(pod *corev1.Pod) bool\n    // Evict evicts a pod (no pre-check performed)\n    Evict(ctx context.Context, pod *corev1.Pod, evictOptions EvictOptions) bool\n}\n")),(0,i.kt)("h4",{id:"plug-in-descheduler-strategy"},"Plug-in descheduler strategy"),(0,i.kt)("p",null,"The current descheduler has some strategies. In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/781"},"PoC #781"),", it is converted into ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin")," and executed periodically. In this ",(0,i.kt)("inlineCode",{parentName:"p"},"periodic execution mode"),", it is appropriate to abstract the policy for Pod and Node dimensions as ",(0,i.kt)("inlineCode",{parentName:"p"},"DeschedulePlugin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"BalancePlugin"),". The load hotspot descheduling capability that we will implement later can also implement the BalancePlugin interface."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeschedulePlugin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BalancePlugin")," interfaces defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type DeschedulePlugin interface {\n    Plugin\n    Deschedule(ctx context.Context, nodes []*corev1.Node) *Status\n}\n\ntype BalancePlugin interface {\n    Plugin\n    Balance(ctx context.Context, nodes []*corev1.Node) *Status\n}\n")),(0,i.kt)("p",null,"We also need to support the ",(0,i.kt)("inlineCode",{parentName:"p"},"event-triggered mode"),", which means that descheduling is performed in the form of a Controller.\nIn some scenarios, CRD-oriented descheduling needs to be implemented. For example, different descheduling configurations are provided according to the workload. When some abnormality is detected in the workload, descheduling will be triggered. We can think of Controller as a special form of Plugin. When the descheduler is initialized, an instance is constructed through the plugin factory function like a normal Plugin, and then a similar Run method is called to start execution."))}h.isMDXComponent=!0}}]);
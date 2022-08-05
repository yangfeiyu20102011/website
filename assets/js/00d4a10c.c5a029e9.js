"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2280],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=r,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2509:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={slug:"release-v0.6.0",title:"Koordinator v0.6: Complete fine-grained CPU orchestration, Resource Reservation and Descheduling",authors:["joseph"],tags:["release"]},l=void 0,d={permalink:"/blog/release-v0.6.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2022-08-04-release/index.md",source:"@site/blog/2022-08-04-release/index.md",title:"Koordinator v0.6: Complete fine-grained CPU orchestration, Resource Reservation and Descheduling",description:"We are happy to announce the release of Koordinator v0.6.0. Koordinator v0.6.0 brings complete Fine-grained CPU Orchestration, Resource Reservation mechanism, safely Pod Migration mechanism and Descheduling Framework.",date:"2022-08-04T00:00:00.000Z",formattedDate:"August 4, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:8.425,truncated:!1,authors:[{name:"Joseph",title:"Koordinator maintainer",url:"https://github.com/eahydra",imageURL:"https://github.com/eahydra.png",key:"joseph"}],frontMatter:{slug:"release-v0.6.0",title:"Koordinator v0.6: Complete fine-grained CPU orchestration, Resource Reservation and Descheduling",authors:["joseph"],tags:["release"]},nextItem:{title:"Koordinator v0.5: Now With Node Resource Topology And More",permalink:"/blog/release-v0.5.0"}},h={authorsImageUrls:[void 0]},c=[{value:"Install or Upgrade to Koordinator v0.6.0",id:"install-or-upgrade-to-koordinator-v060",level:2},{value:"Install with helms",id:"install-with-helms",level:3},{value:"Upgrade with helm",id:"upgrade-with-helm",level:3},{value:"Fine-grained CPU Orchestration",id:"fine-grained-cpu-orchestration",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Pod Migration Job",id:"pod-migration-job",level:2},{value:"Descheduling Framework",id:"descheduling-framework",level:2},{value:"About GPU Scheduling",id:"about-gpu-scheduling",level:2},{value:"What\u2019s coming next in Koordinator",id:"whats-coming-next-in-koordinator",level:2}],u={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are happy to announce the release of Koordinator v0.6.0. Koordinator v0.6.0 brings complete Fine-grained CPU Orchestration, Resource Reservation mechanism, safely Pod Migration mechanism and Descheduling Framework."),(0,a.kt)("h2",{id:"install-or-upgrade-to-koordinator-v060"},"Install or Upgrade to Koordinator v0.6.0"),(0,a.kt)("h3",{id:"install-with-helms"},"Install with helms"),(0,a.kt)("p",null,"Koordinator can be simply installed by helm v3.5+, which is a simple command-line tool, and you can get it\nfrom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 0.6.0\n")),(0,a.kt)("h3",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 0.6.0 [--force]\n")),(0,a.kt)("p",null,"For more details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation"},"installation manual"),"."),(0,a.kt)("h2",{id:"fine-grained-cpu-orchestration"},"Fine-grained CPU Orchestration"),(0,a.kt)("p",null,"In Koordinator v0.5.0, we designed and implemented basic CPU orchestration capabilities. The koord-scheduler supports different CPU bind policies to help LSE/LSR Pods achieve better performance. "),(0,a.kt)("p",null,"Now in the v0.6 version, we have basically completed the CPU orchestration capabilities originally designed, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support default CPU bind policy configured by koord-scheduler for LSR/LSE Pods that do not specify a CPU bind policy"),(0,a.kt)("li",{parentName:"ul"},"Support CPU exclusive policy that supports ",(0,a.kt)("inlineCode",{parentName:"li"},"PCPULevel")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NUMANodeLevel"),", which can spread the CPU-bound Pods to different physical cores or NUMA Nodes as much as possible to reduce the interference between Pods."),(0,a.kt)("li",{parentName:"ul"},"Support Node CPU Orchestration API to helper cluster administrators control the CPU orchestration behavior of nodes. The label ",(0,a.kt)("inlineCode",{parentName:"li"},"node.koordinator.sh/cpu-bind-policy")," constrains how to bind CPU logical CPUs when scheduling. If set with the ",(0,a.kt)("inlineCode",{parentName:"li"},"FullPCPUsOnly")," that requires that the scheduler must allocate full physical cores. Equivalent to kubelet CPU manager policy option ",(0,a.kt)("inlineCode",{parentName:"li"},"full-pcpus-only=true"),". If there is no ",(0,a.kt)("inlineCode",{parentName:"li"},"node.koordinator.sh/cpu-bind-policy")," in the node's label, it will be executed according to the policy configured by the Pod or koord-scheduler. The label ",(0,a.kt)("inlineCode",{parentName:"li"},"node.koordinator.sh/numa-allocate-strategy")," indicates how to choose satisfied NUMA Nodes when scheduling. Support ",(0,a.kt)("inlineCode",{parentName:"li"},"MostAllocated")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LeastAllocated"),"."),(0,a.kt)("li",{parentName:"ul"},"koordlet supports the LSE Pods and improve compatibility with existing Guaranteed Pods with static CPU Manager policy. ")),(0,a.kt)("p",null,"Please check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-manuals/fine-grained-cpu-orchestration"},"user manual")," for a detailed introduction and\ntutorial."),(0,a.kt)("h2",{id:"resource-reservation"},"Resource Reservation"),(0,a.kt)("p",null,"We completed the ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource Reservation API")," design proposal in v0.5, and implemented the basic Reservation mechanism in the current v0.6 version. "),(0,a.kt)("p",null,"When you want to use the Reservation mechanism to reserve resources, you do not need to modify the Pod or the existing workloads(e.g. Deployment, StatefulSet). koord-scheduler provides a simple to use API named ",(0,a.kt)("inlineCode",{parentName:"p"},"Reservation"),", which allows us to reserve node resources for specified pods or workloads even if they haven't get created yet. You only need to write the Pod Template and the owner information in the ReservationSpec when creating a Reservation. When koord-scheduler perceives a new Reservation object, it will allocate resources to the Reservation object through the normal Pod scheduling process. After scheduling, koord-scheduler will update the success or failure information to ResourceStatus. If the reservation is successful, and the OwnerReference or Labels of the newly created Pod satisfy the owner information declared earlier, then the newly created Pod will directly reuse the resources held by the Reservation. When the Pod is destroyed, the Reservation object can be reused until the Reservation expires."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image",src:o(4462).Z,width:"511",height:"371"})),(0,a.kt)("p",null,"The resource reservation mechanism can help solve or optimize the problems in the following scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Preemption: Existing preemption does not guarantee that only preempting pods can allocate preempted resources. With a\nreservation, the scheduler should be able to "lock" resources preventing from allocation of other pods with the same\nor higher priority.'),(0,a.kt)("li",{parentName:"ol"},"Descheduling: For the descheduler, it is better to ensure sufficient resources with the reservation before pods get\nrescheduled. Otherwise, rescheduled pods may not be runnable anymore and make the belonging application disrupted."),(0,a.kt)("li",{parentName:"ol"},"Horizontal scaling: Using reservation to achieve more deterministic horizontal scaling. e.g. Submit a reservation and\nmake sure it is available before scaling up replicas."),(0,a.kt)("li",{parentName:"ol"},"Resource Pre-allocation: Sometimes we want to pre-allocate node resources for future resource demands even if the\nresources are not currently allocatable. Reservation can help with this and it should make no physical cost.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please check out our ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-manuals/resource-reservation"},"user manual")," for a detailed introduction and\ntutorial."),(0,a.kt)("li",{parentName:"ul"},"For more information, please see ",(0,a.kt)("a",{parentName:"li",href:"/docs/designs/resource-reservation"},"Design: Resource Reservation"))),(0,a.kt)("h2",{id:"pod-migration-job"},"Pod Migration Job"),(0,a.kt)("p",null,"Migrating Pods is an important capability that many components (such as descheduler) rely on, and can be used to optimize scheduling or help resolve workload runtime quality issues. We believe that pod migration is a complex process, involving steps such as auditing, resource allocation, and application startup, and is mixed with application upgrading, scaling scenarios, resource operation and maintenance operations by cluster administrators. Therefore, how to manage the stability risk of this process to ensure that the application does not fail due to the migration of Pods is a very critical issue that must be resolved."),(0,a.kt)("p",null,"The descheduler in the K8s community evicts pods according to different strategies. However, it does not guarantee whether the evicted Pod has resources available after re-creation. If a large number of newly created Pods are in the Pending state when the resources in the cluster are tight, may lower the application availabilities."),(0,a.kt)("p",null,"Koordinator defines a CRD-based Migration/Eviction API named ",(0,a.kt)("inlineCode",{parentName:"p"},"PodMigrationAPI"),", through which the descheduler or other components can evict or delete Pods more safely. With PodMigrationJob we can track the status of each process in the migration, and perceive scenarios such as upgrading and scaling of the application."),(0,a.kt)("p",null,"It's simple to use the PodMigrationJob API. Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"PodMigrationJob")," with the YAML file below to migrate ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-demo-0"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  paused: false\n  ttl: 5m\n  mode: ReservationFirst\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\nstatus:\n  phase: Pending\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f migrationjob-demo.yaml\npodmigrationjob.scheduling.koordinator.sh/migrationjob-demo created\n")),(0,a.kt)("p",null,"Then you can query the migration status and query the migration events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get podmigrationjob migrationjob-demo\nNAME                PHASE     STATUS     AGE   NODE     RESERVATION                            PODNAMESPACE   POD                         NEWPOD                      TTL\nmigrationjob-demo   Succeed   Complete   37s   node-1   d56659ab-ba16-47a2-821d-22d6ba49258e   default        pod-demo-5f9b977566-c7lvk   pod-demo-5f9b977566-nxjdf   5m0s\n\n$ kubectl describe podmigrationjob migrationjob-demo\n...\nEvents:\n  Type    Reason                Age    From               Message\n  ----    ------                ----   ----               -------\n  Normal  ReservationCreated    8m33s  koord-descheduler  Successfully create Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e"\n  Normal  ReservationScheduled  8m33s  koord-descheduler  Assigned Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e" to node "node-1"\n  Normal  Evicting              8m33s  koord-descheduler  Try to evict Pod "default/pod-demo-5f9b977566-c7lvk"\n  Normal  EvictComplete         8m     koord-descheduler  Pod "default/pod-demo-5f9b977566-c7lvk" has been evicted\n  Normal  Complete              8m     koord-descheduler  Bind Pod "default/pod-demo-5f9b977566-nxjdf" in Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please check out our ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-manuals/pod-migration-job"},"user manual")," for a detailed introduction and\ntutorial."),(0,a.kt)("li",{parentName:"ul"},"For more information, please see ",(0,a.kt)("a",{parentName:"li",href:"/docs/designs/pod-migration-job"},"Design: PodMigrationJob"),".")),(0,a.kt)("h2",{id:"descheduling-framework"},"Descheduling Framework"),(0,a.kt)("p",null,"We implemented a brand new Descheduling Framework in v0.6. "),(0,a.kt)("p",null,"The existing descheduler in the community can solve some problems, but we think that there are still many aspects of the descheduler that can be improved, for example, it only supports the mode of periodic execution, and does not support the event-triggered mode. It is not possible to extend and configure custom descheduling strategies without invading the existing code of descheduler like kube-scheduler; it also does not support implementing custom evictor."),(0,a.kt)("p",null,"We also noticed that the K8s descheduler community also found these problems and proposed corresponding solutions such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/issues/753"},"#753 Descheduler framework Proposal")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/pull/781"},"PoC #781"),". The K8s descheduler community tries to implement a descheduler framework similar to the k8s scheduling framework. This coincides with our thinking."),(0,a.kt)("p",null,"Overall, these solutions solved most of our problems, but we also noticed that the related implementations were not merged into the main branch. But we review these implementations and discussions, and we believe this is the right direction. Considering that Koordiantor has clear milestones for descheduler-related features, we will implement Koordinator's own descheduler independently of the upstream community. We try to use some of the designs in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/descheduler/issues/753"},"#753 PR")," proposed by the community and we will follow the Koordinator's compatibility principle with K8s to maintain compatibility with the upstream community descheduler when implementing. Such as independent implementation can also drive the evolution of the upstream community's work on the descheduler framework. And when the upstream community has new changes or switches to the architecture that Koordinator deems appropriate, Koordinator will follow up promptly and actively."),(0,a.kt)("p",null,"Based on this descheduling framework, it is very easy to be compatible with the existing descheduling strategies in the K8s community, and users can implement and integrate their own descheduling plugins as easily as K8s Scheduling Framework. At the same time, users are also supported to implement Controller in the form of plugins to realize event-based descheduling scenarios. At the same time, the framework integrates the ",(0,a.kt)("inlineCode",{parentName:"p"},"MigrationController")," based on PodMigrationJob API and serves as the default Evictor plugin to help safely migrate Pods in various descheduling scenarios."),(0,a.kt)("p",null,"At present, we have implemented the main body of the framework, including the MigrationController based on PodMigrationJob, which is available as a whole. And we also provide ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/pkg/descheduler/framework/plugins/removepodsviolatingnodeaffinity/node_affinity.go"},"a demo descheduling plugin"),". In the future, we will migrate and be compatible with the existing descheduling policies of the community, as well as the load balancing descheduling plugin provided for co-location scenarios. "),(0,a.kt)("p",null,"The current framework is still in the early stage of rapid evolution, and there are still many details that need to be improved. Everyone who is interested is welcome to participate in the construction together. We hope that more people can be more assured and simpler to realize the descheduling capabilities they need."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For more information, please see ",(0,a.kt)("a",{parentName:"li",href:"/docs/designs/descheduler-framework"},"Design: descheduling framework"),"."),(0,a.kt)("li",{parentName:"ul"},"For specific implementation, please see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/tree/main/pkg/descheduler"},"pkg/descheduler"),".")),(0,a.kt)("h2",{id:"about-gpu-scheduling"},"About GPU Scheduling"),(0,a.kt)("p",null,"There are also some new developments in GPU scheduling capabilities that everyone cares about. "),(0,a.kt)("p",null,"During the iteration of v0.6, we completed the design of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20220629-fine-grained-device-scheduling.md"},"GPU Share Scheduling"),", and also completed the design of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20220701-schedule-gang.md"},"Gang Scheduling"),". Development of these capabilities is ongoing and will be released in v0.7. "),(0,a.kt)("p",null,"In addition, in order to explore the mechanism of GPU overcommitment, we have implemented the ability to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/pull/361"},"report GPU Metric")," in v0.6."),(0,a.kt)("h2",{id:"whats-coming-next-in-koordinator"},"What\u2019s coming next in Koordinator"),(0,a.kt)("p",null,"Don't forget that Koordinator is developed in the open. You can check out our Github milestone to know more about what\nis happening and what we have planned. For more details, please refer to\nour ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/milestones"},"milestone"),". Hope it helps!"))}p.isMDXComponent=!0},4462:function(e,t,o){t.Z=o.p+"assets/images/resource-reservation-0c5a187530dd5e3dc9c6e96f97add1ba.svg"}}]);
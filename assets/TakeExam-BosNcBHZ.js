import{c as K,u as y,a as J,j as e,A as Z,b as ee,d as te,e as se,f as h,B as v,L as ae,S as ne,w as ie,g as re,C as le,h as ce,X as V,i as W,I as oe,H as de,R as z,r as p,k as ue,l as me,M as xe,m as he,n as fe,N as pe,T as be,o as je,p as ve,q as ge,s as we,F as ye,t as _e,v as Ne,x as Se,y as L,z as Ee,D as Ce,E as ke,G as R,K as Le,J as Te,O as Ae,P as Me,Q as Ie,U as Qe,V as Fe,W as Oe,Y as P,Z as ze,_ as Re}from"./index-BxhaY3QC.js";import{A as D,N as U,M as q,a as B,b as H,C as Pe,c as De}from"./CATLanguageDropdown-Bam0sJvZ.js";/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=K("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),E=t=>t&&t.ans&&t.ans.length>0,T=t=>t&&t.review,Be=t=>t&&T(t)&&E(t),$=t=>t?!E(t)&&!T(t):!1;function He({setOpenDrawer:t}){var j,N,g;const{examData:a,dispatch:n,submitExam:c}=y(),[i]=J(),f=ie(re),s=()=>{const r=a.subjects[a.studentExamState.activeSubject];return r.qlimit&&parseInt(r.qlimit)>0&&Object.values(a.studentExamState.student_answers).filter(l=>l.sub_id==r.sub_id&&E(l)).length>parseInt(r.qlimit)?(f.fire(`You can attempt a maximum of ${r.qlimit} questions on this subject`,"","error"),!1):!0},x=async()=>{a.studentExamState.activeSubject+1<=a.subjects.length-1?n({type:"submit_section",payload:{}}):c({submission_source:"manual"})},b=()=>{s()&&(t&&t(!1),f.fire({title:"Are you sure you want to submit this section?",html:e.jsx(ne,{examData:a}),showDenyButton:!0,showCancelButton:!1,allowOutsideClick:!1,backdrop:"rgba(0, 0, 0, 0.5)",confirmButtonText:"Yes",confirmButtonColor:"#22c55e",denyButtonText:"No"}).then(r=>{r.isConfirmed&&x()}))},_=r=>{let o=1;return r.map(l=>({...l,questions:l.questions.map(w=>({...w,questionNumber:o++}))}))};return e.jsxs(e.Fragment,{children:[a.authUser&&e.jsxs("div",{className:"flex flex-row gap-2 justify-start md:h-[70px] items-center p-2 px-5",children:[e.jsxs(Z,{className:"w-12 h-12 mr-2",children:[e.jsx(ee,{src:a.authUser.profile_pic,className:"object-cover"}),e.jsx(te,{children:a.authUser.firstname[0]+a.authUser.lastname[0]})]}),e.jsx("p",{className:"font-medium text-sm",children:`${a.authUser.firstname} ${a.authUser.lastname}`})]}),e.jsxs("div",{className:"grid grid-cols-2 w-full overflow-hidden font-normal text-xs justify-between m-0 md:h-[130px]",children:[e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(D,{value:Object.values(a.studentExamState.student_answers).filter(r=>E(r)).length}),"Answered"]}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(U,{value:Object.values(a.studentExamState.student_answers).filter(r=>$(r)).length}),"Not Answered"]}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(q,{value:Object.values(a.studentExamState.student_answers).filter(r=>T(r)&&!E(r)).length}),"Marked"]}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(B,{value:se(a.subjects)-Object.values(a.studentExamState.student_answers).length}),"Not Visited"]}),e.jsxs("div",{className:"flex col-span-2 gap-2 items-center w-full overflow-hidden",children:[e.jsx(H,{value:Object.values(a.studentExamState.student_answers).filter(r=>Be(r)).length}),"Answered & Marked for Review (will also be evaluated)"]})]}),e.jsx("div",{className:"flex max-w-full overflow-x-auto gap-2 p-2 h-[32px] bg-[#4e85c5]",children:e.jsx("h3",{className:"font-medium text-sm text-white",children:(j=a.subjects[a.studentExamState.activeSubject])==null?void 0:j.name})}),e.jsx("p",{className:"bg-[#e5f6fd] font-medium text-sm p-2",children:"Choose a Question"}),e.jsx("div",{className:"bg-[#e5f6fd] pe-[30px] pb-0 grid grid-cols-4 auto-rows-max gap-x-0 gap-y-3 mb-0 h-[calc(100%-300px)] md:h-[calc(100%-410px)] overflow-y-auto",children:(g=(N=_(a==null?void 0:a.subjects)[a.studentExamState.activeSubject])==null?void 0:N.questions)==null?void 0:g.map((r,o)=>{const l=a.studentExamState.student_answers[r._id.$oid],w=!!(l&&E(l)),S=!!(l&&T(l)),A=$(l),u=a.qorder=="cont"?r.questionNumber:o+1;return e.jsxs("div",{onClick:()=>{n({type:"setActiveQuestion",payload:{index:o,subjectIndex:a.studentExamState.activeSubject}}),t&&t(!1)},className:"flex items-start justify-start cursor-pointer",children:[!l&&!S&&!w&&e.jsx(B,{size:"lg",value:u}),l&&A&&e.jsx(U,{size:"lg",value:u}),!S&&w&&e.jsx(D,{size:"lg",value:u}),S&&!w&&e.jsx(q,{size:"lg",value:u}),S&&w&&e.jsx(H,{size:"lg",value:u})]},o)})}),e.jsx("div",{className:h("mt-auto flex flex-col justify-center items-center gap-2 p-4 py-0 border-t-2 border-blue-200 h-[100px] md:h-[100px] bg-[#e5f6fd]"),children:a.subject_time=="yes"?a.submit_section_button=="yes"?e.jsx(v,{className:"bg-green-600 hover:bg-green-800 uppercase shadow-md font-medium w-full",onClick:b,children:"Submit section"}):"":e.jsx(v,{className:"rounded-none uppercase shadow-md font-medium w-full bg-[#38aae9]",asChild:!0,children:e.jsx(ae,{to:{pathname:"/cat-exam/submit",search:i.toString()},children:"Submit Exam"})})})]})}function $e({showSidebar:t,setShowSidebar:a,setShowQuestionPaper:n,setShowInstructions:c}){return e.jsxs("div",{className:h("relative h-screen",t?"md:w-[350px]":""),children:[e.jsx("div",{className:"absolute left-[-15px] top-[calc(50%-60px)] h-[60px] w-[15px] hidden md:block",children:e.jsx("button",{type:"button",className:"p-0 bg-slate-800 text-white flex items-center justify-center text-center  w-full h-full",onClick:()=>a(!t),children:t?e.jsx(le,{size:15}):e.jsx(ce,{size:15})})}),e.jsx("div",{className:h("hidden pt-5 md:pt-0  w-full border-l-2 border-gray-700 h-screen overflow-y-clip",t?"md:block":"hidden"),children:e.jsx(He,{setShowQuestionPaper:n,setShowInstructions:c})})]})}function Ke({open:t,setOpen:a}){const{examData:n}=y();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:h("fixed md:fixed h-screen w-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-20",t?"visible":"hidden")}),e.jsxs("div",{className:h("fixed flex flex-col  h-[calc(100vh-100px)] w-[90%] margin-auto left-[5%] top-[50px] bg-white md:z-30",t?"visible":"hidden"),children:[e.jsxs("div",{className:"bg-blue-600 text-white px-5 mb-2 flex justify-between",children:[e.jsx("h1",{className:"w-full text-start text-sm py-1 font-medium",children:"Instructions"}),e.jsxs("button",{className:"p-0 flex text-xs justify-center items-center",onClick:()=>a(!1),type:"button",children:["close ",e.jsx(V,{className:"text-gray-300 ms-1",size:16})]})]}),e.jsxs(W,{className:"pb-5 px-5 font-serif text-sm",children:[n.studentExamState.activeLang==="EN"?e.jsx(Pe,{}):"",n.studentExamState.activeLang==="HI"?e.jsx(e.Fragment,{children:n.test_second_language=="Indonesia"?e.jsx(oe,{}):e.jsx(de,{})}):""]})]})]})}function Je({open:t,setOpen:a}){const{examData:n}=y();return console.log(n),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:h("fixed md:fixed h-screen w-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-20",t?"visible":"hidden")}),e.jsxs("div",{className:h("fixed flex flex-col  h-[calc(100vh-100px)] w-[90%] margin-auto left-[5%] top-[50px] bg-white md:z-30",t?"visible":"hidden"),children:[e.jsxs("div",{className:"bg-blue-600 text-white px-5 mb-2 flex justify-between",children:[e.jsx("h1",{className:"w-full text-start text-sm py-1 font-medium",children:n.subjects[n.studentExamState.activeSubject].name}),e.jsxs("button",{className:"p-0 flex text-xs justify-center items-center",onClick:()=>a(!1),type:"button",children:["close ",e.jsx(V,{className:"text-gray-300 ms-1",size:16})]})]}),e.jsx(W,{className:"pb-5 px-5",children:n.subjects[n.studentExamState.activeSubject].questions.map((c,i)=>{var f,s,x,b;return e.jsxs("div",{className:"mt-2 border-b pb-2",children:[e.jsx("h3",{className:"font-bold",children:`Q${i+1}.`}),e.jsx("div",{className:"no-tailwindcss-base ck-editor text-sm",dangerouslySetInnerHTML:{__html:((s=(f=c.passage_desc)==null?void 0:f[0])==null?void 0:s.passage)||((b=(x=c.hi_passage_desc)==null?void 0:x[0])==null?void 0:b.passage)||""}}),e.jsx("div",{className:"no-tailwindcss-base ck-editor text-sm",dangerouslySetInnerHTML:{__html:n.studentExamState.activeLang=="EN"?c.question:c.hi_question??""}})]},`question_${i}`)})})]})]})}function Ve({index:t,isActive:a,subjectIndex:n}){const{examData:c}=y(),i=c.subjects[n].questions[t];return e.jsx("div",{className:h("w-full p-2 rounded-none border-0 border-r-2 border-gray-700",a&&c.passage_with_qs?"visible":"hidden",c.passage_alignment=="Left"?"md:w-1/2":""),children:e.jsxs("div",{className:"",children:[i.passage_desc.length>0&&c.studentExamState.activeLang=="EN"&&e.jsx("div",{className:"text-[15px]",dangerouslySetInnerHTML:{__html:i.passage_desc[0].passage}}),i.hi_passage_desc.length>0&&c.studentExamState.activeLang=="HI"&&e.jsx("div",{className:"text-[15px]",dangerouslySetInnerHTML:{__html:i.hi_passage_desc[0].passage}})]})})}const We={wrapper:"w-full rounded-lg p-1 flex items-center gap-2 cursor-pointer relative bg-white hover:bg-gray-100/50",label:"border w-7 h-7 text-sm font-medium flex items-center justify-center text-center rounded-full"};function Ye({index:t,subjectIndex:a}){var N,g;const{examData:n,dispatch:c}=y(),[i,f]=z.useState([]),s=n.subjects[a].questions[t],x=n.studentExamState.activeLang,b=((g=(N=n.studentExamState)==null?void 0:N.student_answers[s._id.$oid])==null?void 0:g.mcq_shuffled_order)??[0,1,2,3,4],_=r=>{c({type:"setActiveAnswer",payload:String.fromCharCode(65+r).toLowerCase()})},j=n.studentExamState.activeAnswer;return z.useEffect(()=>{if(x=="EN"){const r=[{index:0,value:s==null?void 0:s.opt1},{index:1,value:s==null?void 0:s.opt2},{index:2,value:s==null?void 0:s.opt3},{index:3,value:s==null?void 0:s.opt4}];s!=null&&s.opt5&&r.push({index:4,value:s==null?void 0:s.opt5}),f(r)}else if(s!=null&&s.hi_opt1){const r=[{index:0,value:s==null?void 0:s.hi_opt1},{index:1,value:s==null?void 0:s.hi_opt2},{index:2,value:s==null?void 0:s.hi_opt3},{index:3,value:s==null?void 0:s.hi_opt4}];s!=null&&s.hi_opt5&&r.push({index:4,value:s==null?void 0:s.hi_opt5}),f(r)}else f([])},[]),p.useEffect(()=>{window.MathJax&&window.MathJax.typesetPromise()},[i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"no-tailwindcss-base ck-editor",dangerouslySetInnerHTML:{__html:x=="EN"?s==null?void 0:s.question:(s==null?void 0:s.hi_question)??""}}),i.sort((r,o)=>b.indexOf(r.index)-b.indexOf(o.index)).map((r,o)=>{const l=String.fromCharCode(65+r.index).toLowerCase()==j?"answered":"pending";return e.jsxs("div",{className:h(We.wrapper,(l=="pending",""),l=="answered"?"border-green-600 bg-gray-100/50":""),onClick:()=>{_(r.index)},children:[e.jsx("input",{type:"radio",checked:l=="answered"}),r&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"no-tailwindcss-base ck-editor w-full",dangerouslySetInnerHTML:{__html:r.value??""}})})]},o)})]})}function Ge({index:t,isActive:a,subjectIndex:n}){const{examData:c}=y(),i=c.subjects[n].questions[t];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white border-b-2 py-1 items-center px-2 flex justify-between",children:[e.jsxs("p",{className:"block text-sm font-bold w-3/6",children:["Question No. ",t+1,"."]}),e.jsx("div",{className:"flex items-center",children:c.is_option_based_marking=="1"?"":e.jsx(e.Fragment,{children:e.jsxs("p",{className:"text-xs w-full",children:["Marks for correct answer:"," ",e.jsx("span",{className:"text-green-500",children:i.marks_positive})," ","| Negative Marks:"," ",e.jsx("span",{className:"text-red-500",children:i.marks_negative})]})})})]}),e.jsxs("div",{className:h("flex flex-col gap-0 px-0 flex-1 h-full overflow-y-scroll",i.passage_desc.length>0||i.hi_passage_desc.length>0&&c.passage_alignment=="Left"?"md:flex-row":""),children:[(i.passage_desc.length>0||i.hi_passage_desc.length>0)&&e.jsx(Ve,{index:t,isActive:a,subjectIndex:n}),e.jsx(ue,{className:h("w-full border-none",a?"visible":"hidden",i.passage_desc.length>0&&c.passage_alignment=="Left"?"md:w-1/2":""),children:e.jsx(me,{className:"px-3 pt-3 h-full",children:e.jsxs(xe,{children:[i.find_hint&&i.find_hint!="DOCQ"?e.jsx("div",{className:"text-[15px] font-normal pb-3",children:e.jsxs("span",{children:["Hint: ",i.find_hint]})}):"",e.jsxs("div",{className:"flex flex-col gap-3",children:[i.question_type=="MCQ"&&e.jsx(Ye,{subjectIndex:n,index:t}),(i.question_type=="MAQ"||i.question_type=="VMAQ")&&e.jsx(he,{subjectIndex:n,index:t}),i.question_type=="SUBJECTIVE"&&e.jsx(fe,{subjectIndex:n,index:t}),i.question_type=="NAT"&&e.jsx(pe,{subjectIndex:n,index:t}),i.question_type=="TrueFalse"&&e.jsx(be,{subjectIndex:n,index:t}),i.question_type=="SLCT"&&e.jsx(je,{subjectIndex:n,index:t}),i.question_type=="MULTI_SLCT"&&e.jsx(ve,{subjectIndex:n,index:t}),i.question_type=="MCQ_MULTI_OPTIONS"&&e.jsx(ge,{subjectIndex:n,index:t}),i.question_type=="TXT_INPUT"&&e.jsx(we,{subjectIndex:n,index:t}),i.question_type=="FILL_BLANKS"&&e.jsx(ye,{subjectIndex:n,index:t}),i.question_type=="SENTENCE_ARRANGMENT"&&e.jsx(_e,{subjectIndex:n,index:t}),i.question_type=="AUDIO_TYPE"&&e.jsx(Ne,{subjectIndex:n,index:t}),i.question_type=="MTQ"&&e.jsx(Se,{subjectIndex:n,index:t})]})]})})})]})]})}const Xe=({onExpire:t,beforeText:a})=>{const{examData:n,getRemainingTime:c,isLoaded:i}=y(),f=parseInt(n.test_time_limit)*60,s=p.useRef(null),[x,b]=p.useState(f);return p.useEffect(()=>{if(!i)return;const _=()=>{const j=Math.max(0,c(n));j<=0&&s.current&&((n.subject_time!="yes"||n.subject_time=="yes"&&n.studentExamState.activeSubject>=n.subjects.length-1)&&clearInterval(s.current),t&&t()),b(j)};return s.current||(s.current=setInterval(_,1e3)),()=>{s.current&&n.subject_time!="yes"&&clearInterval(s.current)}},[]),e.jsx(e.Fragment,{children:e.jsxs("p",{className:"text-sm font-bold min-w-[140px]",children:[a&&e.jsxs(e.Fragment,{children:[a," "]}),L(x).h!="00"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:L(x).h}),":"]}),e.jsx("span",{children:L(x).m}),":",e.jsx("span",{children:L(x).s})]})})};function tt(){const{examData:t,dispatch:a,setActiveQuestion:n,setActiveSubject:c,isLoaded:i,onTimerExpires:f,saveAndNextQuestion:s,saveAnswer:x,markForReview:b,canSaveAnswer:_,submitExam:j}=y(),[N,g]=p.useState(!0),r=Ee();p.useEffect(()=>{},[r.isVisible]);const o=t.studentExamState.activeSubject,l=t.studentExamState.activeQuestion,[w]=J(),S=Ce(),A=()=>{if(t.subject_time=="yes"&&l>=t.subjects[t.studentExamState.activeSubject].questions.length-1)return P.dismiss(),P.info(t.submit_section_button=="yes"?"Submit this section before moving to the next section":"Please wait for the section to end before moving to the next section"),!1;l<t.subjects[o].questions.length-1?n(l+1):o+1<=t.subjects.length-1&&c(o+1)},u=m=>{t.is_keyboard_allow||m.preventDefault()};p.useEffect(()=>{i?(t.is_proctoring_allow&&r.activate(),t.is_keyboard_allow&&(document.removeEventListener("copy",u),document.removeEventListener("cut",u),document.removeEventListener("paste",u)),t.subject_time=="yes"&&t.studentExamState.subject_times&&Object.values(t.studentExamState.subject_times).every(m=>m.submitted),g(!1),n(l,o)):S({pathname:"/cat-exam/start",search:w.toString()})},[]),p.useEffect(()=>(document.title=`${t.test_name}`,document.addEventListener("copy",u),document.addEventListener("cut",u),document.addEventListener("paste",u),document.addEventListener("contextmenu",m=>m.preventDefault()),()=>{document.removeEventListener("copy",u),document.removeEventListener("cut",u),document.removeEventListener("paste",u)}),[]);const I=m=>{var F,O;const d=t;ze(d);const Q={response:{...d.studentExamState.student_answers},remaining_time:0,test_id:d._id.$oid,submitted:"No",webtesttoken:(F=d.authUser)==null?void 0:F.webtesttoken,start_date:d.studentExamState.start_date,subject_times:d.studentExamState.subject_times,timeSpent:d.studentExamState.timeSpent};d.studentExamState.submission_source&&(Q.submission_source=d.studentExamState.submission_source),navigator.sendBeacon(`${(O=d.authUser)==null?void 0:O.api_url}/save-test-response`,JSON.stringify(Q)),Re(d),m.preventDefault(),m.returnValue="Are you sure you want to leave?"};p.useEffect(()=>{const m=d=>{(d.ctrlKey||d.metaKey)&&d.key==="p"&&(d.preventDefault(),alert("Printing is disabled on this page.")),d.key==="PrintScreen"&&(d.preventDefault(),alert("Screenshot capture is disabled."))};return window.addEventListener("keydown",m),window.addEventListener("beforeunload",I),()=>{window.removeEventListener("keydown",m),window.removeEventListener("beforeunload",I)}},[]);const[M,Y]=p.useState(!0),[G,C]=p.useState(!1),[X,k]=p.useState(!1);return e.jsxs(e.Fragment,{children:[t.subjects.length>0&&!N?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col md:h-screen",onCopy:u,onCut:u,onPaste:u,onContextMenu:m=>m.preventDefault(),children:[e.jsxs("div",{className:"flex w-full justify-between items-center px-2 md:px-5 py-1 shadow z-10 bg-[#363636] text-white",children:[e.jsxs("div",{className:"flex flex-wrap justify-start items-center w-full md:w-full",children:[e.jsx("h5",{className:"scroll-m-20 text-sm font-medium text-muted-foreground tracking-normal text-[#f7f64e] text-start",children:t.test_name}),e.jsx(ke,{setShowQuestionPaper:C,setShowInstructions:k},2),e.jsx("div",{className:"-flex w-full md:w-auto items-end justify-end mt-2 md:mt-0 md:gap-4 hidden",children:t.subjects.length>0&&t.subject_time=="yes"&&t.studentExamState.subject_times?e.jsx(e.Fragment,{children:e.jsx("div",{className:h("flex bg-gray-100 items-center justify-start gap-2"),children:e.jsx(R,{beforeText:"Time Left For Section :",onExpire:()=>{a({type:"submit_section",payload:{}}),!t.studentExamState.submitted&&t.studentExamState.activeSubject>=t.subjects.length-1&&j({submission_source:"timer"})}})})}):e.jsx(e.Fragment,{children:parseInt(t.test_time_limit)>0&&t.studentExamState.start_date>0&&e.jsx(R,{onExpire:f,beforeText:"Time left :"})})})]}),e.jsx("div",{className:"md:w-2/6",children:e.jsxs("div",{className:"flex justify-end gap-6",children:[e.jsxs("button",{type:"button",className:"text-xs flex items-center",onClick:()=>{k(!0),C(!1)},children:[e.jsx(Ue,{className:"w-5 mr-2 text-blue-600"}),"Instructions"]}),e.jsxs("button",{type:"button",className:"text-xs flex items-center",onClick:()=>{k(!1),C(!0)},children:[e.jsx(qe,{className:"w-5 mr-2 text-blue-600"}),"Question Paper"]})]})})]}),e.jsxs("div",{className:"flex md:flex-row max-h-full md:overflow-y-hidden",children:[e.jsxs("main",{className:h("flex flex-col w-full h-full md:gap-0 relative items-stretch bg-white",M?"md:w-full":""),children:[e.jsxs("div",{className:"flex items-center justify-between w-full overflow-y-hidden overflow-x-auto md:overflow-visible gap-2 px-3 pt-2 pb-2 bg-gray-100 border-b-2",children:[e.jsx("p",{className:"text-sm",children:"Sections"}),e.jsxs("div",{className:"flex justify-end items-center",children:[e.jsx(Xe,{beforeText:"Time Left :"}),e.jsx(De,{className:"h-5"}),t.is_keyboard_allow?e.jsx(v,{onClick:()=>{a({type:"showHideKeyboard",payload:!t.studentExamState.showKeyboard})},variant:"ghost",children:e.jsx(Le,{size:20})}):"",parseInt(t.is_calc_allow)?e.jsx(v,{onClick:()=>{a({type:"showHideCalculator",payload:!t.studentExamState.showCalculator})},variant:"ghost",className:"h-5 w-5 p-0 ms-2",children:e.jsx(Te,{size:20})}):""]})]}),e.jsx("div",{className:"flex items-center w-full overflow-y-hidden overflow-x-auto md:overflow-visible gap-2 px-3 pt-2 pb-2 bg-gray-100 border-b-2",children:t.subjects.map((m,d)=>e.jsxs("div",{className:"relative group overflow-visible",children:[e.jsx(v,{size:"sm",disabled:t.subject_time=="yes"&&d!=o,variant:o==d?"default":"outline",onClick:()=>c(d),className:"h-8 font-normal text-xs uppercase",children:m.name},m.sub_id),e.jsx("div",{className:"hidden absolute w-[300px] top-[50px] h-[200px] z-50 left-0 md:group-hover:block",children:e.jsx(Ae,{hideTitle:!0,subject:m})})]}))}),t.subjects.length>0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-1 overflow-auto mb-[70px]",children:e.jsx(Ge,{index:l,subjectIndex:o,isActive:!0,setActive:n},t.subjects[o].questions[l]._id.$oid)})}):"",e.jsxs("div",{className:h("flex justify-between items-center fixed bg-white bottom-0 w-full md:mt-5 border-t-2",M?"md:w-[calc(100%-300px)] left-0 p-2":""),children:[e.jsxs("div",{className:"flex justify-start gap-2",children:[e.jsx(v,{size:"lg",variant:"default",className:"bg-white border border-gray-200 text-dark font-normal hover:bg-blue-500 hover:text-white hover:border-blue-500 px-5",onClick:async()=>{await b({subjectIndex:t.studentExamState.activeSubject,index:t.studentExamState.activeQuestion,ans:t.studentExamState.activeAnswer}),A()},children:"Mark for Review & Next"}),t.subjects.length>0&&o>=0&&e.jsx(v,{size:"lg",variant:"default",className:"bg-white border border-gray-200 text-dark font-normal hover:bg-blue-500 hover:text-white hover:border-blue-500 px-5",onClick:()=>{a({type:"deleteAnswer",payload:t.subjects[o].questions[l]._id.$oid})},children:"Clear Response"})]}),e.jsx("div",{className:"flex justify-between gap-2",children:t.subjects.length>=0&&e.jsx(e.Fragment,{children:t.subject_time=="yes"&&l==t.subjects[t.studentExamState.activeSubject].questions.length-1?e.jsxs(v,{size:"default",onClick:async()=>{_({subjectIndex:t.studentExamState.activeSubject,index:t.studentExamState.activeQuestion})&&(await x({subjectIndex:t.studentExamState.activeSubject,index:t.studentExamState.activeQuestion,ans:t.studentExamState.activeAnswer}),a({type:"removeMarkForReview",payload:{index:l,subjectIndex:o}}))},className:"px-3",children:[e.jsx("span",{className:"hidden md:ps-1 md:block",children:"Save"})," ",e.jsx(Me,{size:15,className:"ms-1 md:hidden"})]}):e.jsx(v,{onClick:()=>{s()},size:"lg",className:"bg-[#0c7cd5] border border-gray-200 text-white font-normal hover:bg-blue-500 hover:text-white hover:border-blue-500 px-5",children:"Save & Next"})})})]}),t.subjects.length>0&&t.studentExamState.activeSubject>=0&&e.jsx(Je,{open:G,setOpen:C}),t.subjects.length>0&&t.studentExamState.activeSubject>=0&&e.jsx(Ke,{open:X,setOpen:k})]}),e.jsx($e,{showSidebar:M,setShowSidebar:Y,setShowQuestionPaper:C,setShowInstructions:k})]})]}),t.is_keyboard_allow?e.jsx(Ie,{}):"",parseInt(t.is_calc_allow)?e.jsx(Qe,{}):""]}):e.jsx(Fe,{visible:!0}),t.is_proctoring_allow?e.jsx(Oe,{}):""]})}export{tt as TakeExam};

(()=>{"use strict";function t(){const t=new Date;return t.getTime(t.toDateString())}function e(t,e){let s;return function(...n){const a=this;clearInterval(s),s=setTimeout((()=>{t.apply(a,n)}),e)}}class s extends n{constructor({title:e,completed:s=!1,id:n}){super({title:e,id:n}),this.completed=s,delete this.tasklist,delete this.description,this.createdAt=t(),this.updatedAt=t()}}class n{constructor({title:t,description:e,id:s}){this.id=s,this.title=t,this.description=e,this.tasklist=[]}addTask(t){const e=Date.now()+1,n=new s({id:e,...t});return this.tasklist.push(n),e}deleteTask(t){this.tasklist=this.tasklist.filter((e=>!(e.id==t)))}updateTask(t,e){this.tasklist=this.tasklist.map((s=>(s.id==t&&s.updateDetails(e),s)))}updateDetails(e){const{task:s}=e;if(s){const{title:s,completed:n,taskImage:a}=e;s&&(this.title=s),n&&(this.completed=n),a&&(this.taskImage=a),this.updatedAt=t()}else{const{title:t,description:s}=e;t&&(this.title=t),s&&(this.description=s)}}clearUntitledTask(){this.tasklist=this.tasklist.filter((t=>""!==t.title))}readTask(){return this.tasklist}}class a extends s{constructor(t){super(t),this.data=t.data}}let i=[];function c(t){return i.find((e=>e.id==t))}function l(){const t=document.querySelector("#task-modal");let e=t.className.split(" ");e[e.length-1]="close";const s=e.join(" ");t.className=s}function o({id:t,completed:e=!1,title:s="",taskImage:n}){const a=document.createElement("li");a.className="task",a.setAttribute("id",t);const i=document.createElement("input");i.setAttribute("type","checkbox"),i.className="task-checkbox",i.checked=e;const c=document.createElement("textarea");c.className="task-title",c.setAttribute("columns","30"),c.setAttribute("rows","3"),c.value=s;const l=document.createElement("div");l.className="task-delete";const o=document.createElement("label"),d=document.createElement("img");d.src="./imageIcon.svg",d.className="image-attach";const u=document.createElement("input");return u.type="file",u.accept="image/*",o.append(d,u),n&&r(t,n),a.append(i,c,l,o),a}function r(t,e){const s=new FileReader;s.readAsDataURL(e),s.addEventListener("load",(e=>{const s=document.getElementById(t),n=document.createElement("img");n.className="image-preview",n.src=e.target.result,s.querySelector(".image-preview")?.remove(),s.append(n),s.style.height="200px"}))}function d(){const t=document.querySelector(".preview-container");t&&t.parentNode.removeChild(t)}function u(t){d(),function(t){const{id:s,title:n,description:a}=t,l=document.createElement("div");l.className="preview-container",l.setAttribute("id",s),l.addEventListener("change",(t=>{t.preventDefault();const e="file"!==t.target.type?t.target.parentNode.id:t.target.parentNode.parentNode.id,n=t.target.checked,a=c(s);if(a.updateTask(e,{completed:n,task:!0}),console.log(e),console.log(i),"file"===t.target.type){const s=t.target.files[0];s&&(a.updateTask(e,{taskImage:s,task:!0}),r(e,s))}})),l.addEventListener("input",e((t=>{if(t.preventDefault(),"TEXTAREA"!==t.target.tagName)return;const e=t.target.parentNode.id,n=t.target.value;c(s).updateTask(e,{title:n,task:!0})}),1e3)),l.addEventListener("click",(t=>{if("task-delete"!==t.target.className)return;t.preventDefault();const e=t.target.parentNode.id;c(s).deleteTask(e),setTimeout((()=>{document.getElementById(e).remove()}),100)}));const d=document.createElement("div");d.className="pre-tasklist-details";const u=document.createElement("div");u.className="pre-tasklist-title",u.innerHTML=n.toUpperCase(),u.setAttribute("title",n);const m=document.createElement("div");m.className="pre-tasklist-description",m.innerHTML="- "+a,m.setAttribute("title",a);const p=document.createElement("div");p.className="create-task-button",p.innerHTML="Add Task",p.addEventListener("click",(()=>{const t=function(t){const e=c(t).addTask({title:""}),s=o({id:e});return document.querySelector(".task-container").append(s),e}(s);document.getElementById(t).querySelector(".task-title").focus()})),d.append(u,m,p);const k=document.createElement("ul");k.className="task-container",l.append(d,k),document.querySelector(".right-container").appendChild(l)}(t),function(t){const e=c(t);e.clearUntitledTask();const s=e.tasklist,n=document.querySelector(".task-container");s.map((t=>{const e=o(t);n.append(e)}))}(t.id)}document.querySelector(".add-tasklist").addEventListener("click",(()=>{console.log("hi"),function(){const t=document.querySelector("#task-modal");let e=t.className.split(" ");e[e.length-1]="open";const s=e.join(" ");t.className=s}()})),document.querySelectorAll(".closemodal").forEach((t=>t.addEventListener("click",l))),document.querySelector(".submit-button").addEventListener("click",(()=>{const t=document.querySelector("#task-title").value,e=document.querySelector("#task-description").value;t&&e?(function(t){const e=function(t){const e=function({title:t,description:e}){const s=Date.now(),c=new n({id:s,title:t,description:e});return console.log(new a({title:t,description:e})),i.push(c),s}(t),s=document.createElement("li");s.setAttribute=s.setAttribute("id",e),s.className="tasklist-li";const c=document.createElement("input");c.value=t.title,c.className="tasklist-names";const l=document.createElement("div");return l.className="tasklist-delete",s.append(c,l),s}(t);document.getElementById("list-of-tasklist").appendChild(e)}({title:t,description:e}),document.querySelector(".tasklist-form").reset(),setTimeout((()=>{l()}),500)):alert("title and description both are required feilds")})),document.querySelector(".list-of-tasklist-container").addEventListener("input",e((t=>{const e=t.target.parentNode.id,s=t.target.value;var n,a;n=e,a={title:s},i=i.map((t=>(t.id==n&&t.updateDetails(a),t))),u(c(e))}),500)),document.querySelector(".list-of-tasklist-container").addEventListener("click",(t=>{const e=t.target.className;if("tasklist-names"===e&&u(c(t.target.parentNode.id)),"tasklist-delete"===e){const e=t.target.parentNode.id;s=e,i=i.filter((t=>!(t.id==s))),setTimeout((()=>{document.getElementById(e).remove(),d()}),1e3)}var s}))})(),(()=>{"use strict";function t(){const t=new Date;return t.getTime(t.toDateString())}function e(t,e){let s;return function(...n){const a=this;clearInterval(s),s=setTimeout((()=>{t.apply(a,n)}),e)}}class s{constructor({title:t,description:e,id:s}){this.id=s,this.title=t,this.description=e,this.tasklist=[]}addTask(t){const e=Date.now()+1,s=new n({id:e,...t});return this.tasklist.push(s),e}deleteTask(t){this.tasklist=this.tasklist.filter((e=>!(e.id==t)))}updateTask(t,e){this.tasklist=this.tasklist.map((s=>(s.id==t&&s.updateDetails(e),s)))}updateDetails(e){const{task:s}=e;if(s){const{title:s,completed:n,taskImage:a}=e;s&&(this.title=s),n&&(this.completed=n),a&&(this.taskImage=a),this.updatedAt=t()}else{const{title:t,description:s}=e;t&&(this.title=t),s&&(this.description=s)}}clearUntitledTask(){this.tasklist=this.tasklist.filter((t=>""!==t.title))}readTask(){return this.tasklist}}class n extends s{constructor({title:e,completed:s=!1,id:n}){super({title:e,id:n}),this.completed=s,delete this.tasklist,delete this.description,this.createdAt=t(),this.updatedAt=t()}}class a extends class{constructor({title:e,completed:s=!1,id:n}){this.id=n,this.title=e,this.completed=s,this.createdAt=t(),this.updatedAt=t()}}{constructor(t){super(t),this.data=t.data}}let i=[];function c(t){return i.find((e=>e.id==t))}function l(){const t=document.querySelector("#task-modal");let e=t.className.split(" ");e[e.length-1]="close";const s=e.join(" ");t.className=s}function o({id:t,completed:e=!1,title:s="",taskImage:n}){const a=document.createElement("li");a.className="task",a.setAttribute("id",t);const i=document.createElement("input");i.setAttribute("type","checkbox"),i.className="task-checkbox",i.checked=e;const c=document.createElement("textarea");c.className="task-title",c.setAttribute("columns","30"),c.setAttribute("rows","3"),c.value=s;const l=document.createElement("div");l.className="task-delete";const o=document.createElement("label"),d=document.createElement("img");d.src="./imageIcon.svg",d.className="image-attach";const u=document.createElement("input");return u.type="file",u.accept="image/*",o.append(d,u),n&&r(t,n),a.append(i,c,l,o),a}function r(t,e){const s=new FileReader;s.readAsDataURL(e),s.addEventListener("load",(e=>{const s=document.getElementById(t),n=document.createElement("img");n.className="image-preview",n.src=e.target.result,s.querySelector(".image-preview")?.remove(),s.append(n),s.style.height="200px"}))}function d(){const t=document.querySelector(".preview-container");t&&t.parentNode.removeChild(t)}function u(t){d(),function(t){const{id:s,title:n,description:a}=t,l=document.createElement("div");l.className="preview-container",l.setAttribute("id",s),l.addEventListener("change",(t=>{t.preventDefault();const e="file"!==t.target.type?t.target.parentNode.id:t.target.parentNode.parentNode.id,n=t.target.checked,a=c(s);if(a.updateTask(e,{completed:n,task:!0}),console.log(e),console.log(i),"file"===t.target.type){const s=t.target.files[0];s&&(a.updateTask(e,{taskImage:s,task:!0}),r(e,s))}})),l.addEventListener("input",e((t=>{if(t.preventDefault(),"TEXTAREA"!==t.target.tagName)return;const e=t.target.parentNode.id,n=t.target.value;c(s).updateTask(e,{title:n,task:!0})}),1e3)),l.addEventListener("click",(t=>{if("task-delete"!==t.target.className)return;t.preventDefault();const e=t.target.parentNode.id;c(s).deleteTask(e),setTimeout((()=>{document.getElementById(e).remove()}),100)}));const d=document.createElement("div");d.className="pre-tasklist-details";const u=document.createElement("div");u.className="pre-tasklist-title",u.innerHTML=n.toUpperCase(),u.setAttribute("title",n);const m=document.createElement("div");m.className="pre-tasklist-description",m.innerHTML="- "+a,m.setAttribute("title",a);const p=document.createElement("div");p.className="create-task-button",p.innerHTML="Add Task",p.addEventListener("click",(()=>{const t=function(t){const e=c(t).addTask({title:""}),s=o({id:e});return document.querySelector(".task-container").append(s),e}(s);document.getElementById(t).querySelector(".task-title").focus()})),d.append(u,m,p);const k=document.createElement("ul");k.className="task-container",l.append(d,k),document.querySelector(".right-container").appendChild(l)}(t),function(t){const e=c(t);e.clearUntitledTask();const s=e.tasklist,n=document.querySelector(".task-container");s.map((t=>{const e=o(t);n.append(e)}))}(t.id)}document.querySelector(".add-tasklist").addEventListener("click",(()=>{console.log("hi"),function(){const t=document.querySelector("#task-modal");let e=t.className.split(" ");e[e.length-1]="open";const s=e.join(" ");t.className=s}()})),document.querySelectorAll(".closemodal").forEach((t=>t.addEventListener("click",l))),document.querySelector(".submit-button").addEventListener("click",(()=>{const t=document.querySelector("#task-title").value,e=document.querySelector("#task-description").value;t&&e?(function(t){const e=function(t){const e=function({title:t,description:e}){const n=Date.now(),c=new s({id:n,title:t,description:e});return console.log(new a({title:t,description:e})),i.push(c),n}(t),n=document.createElement("li");n.setAttribute=n.setAttribute("id",e),n.className="tasklist-li";const c=document.createElement("input");c.value=t.title,c.className="tasklist-names";const l=document.createElement("div");return l.className="tasklist-delete",n.append(c,l),n}(t);document.getElementById("list-of-tasklist").appendChild(e)}({title:t,description:e}),document.querySelector(".tasklist-form").reset(),setTimeout((()=>{l()}),500)):alert("title and description both are required feilds")})),document.querySelector(".list-of-tasklist-container").addEventListener("input",e((t=>{const e=t.target.parentNode.id,s=t.target.value;var n,a;n=e,a={title:s},i=i.map((t=>(t.id==n&&t.updateDetails(a),t))),u(c(e))}),500)),document.querySelector(".list-of-tasklist-container").addEventListener("click",(t=>{const e=t.target.className;if("tasklist-names"===e&&u(c(t.target.parentNode.id)),"tasklist-delete"===e){const e=t.target.parentNode.id;s=e,i=i.filter((t=>!(t.id==s))),setTimeout((()=>{document.getElementById(e).remove(),d()}),1e3)}var s}))})();
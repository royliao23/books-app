(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(20),r=a.n(o),s=(a(73),a(74),a(75),a(76),a(77),a(11)),i=a(12),c=a(13),u=a(14),m=a(28),h=a(10),d=a(6),E=a.n(d),g=a(29),k=a(26),p=(a(95),a(96),a(130)),f=a(131),y=a(132),v=a(133),b=a(134),B=a(135),S=a(136),w=a(137),C=a(138),D=a(139),O=a(140),j=a(62),M=a(148),_=a(141),I=a(142),A=a(143),N=a(144),T=a(145),x=a(146),U=a(147),F=function(e){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h6",{style:{color:"blue"}},e.name)))};a(40);var W=function(){return l.a.createElement("center",null,"---- end of the list ----")};var R=function(e){return l.a.createElement(j.a,{id:"Btn1",onClick:function(){return e.greethandler2("from child")}},"Search ")},L=(n.Component,function(e){var t=e.results.map((function(t){return l.a.createElement("li",{key:t.id,onClick:function(){return e.action(t.title)}},t.title)}));return l.a.createElement("ul",null,t)}),P=(Object({NODE_ENV:"production",PUBLIC_URL:"/books-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,"https://royliao.pythonanywhere.com/api/article/"),Y=(n.Component,"https://royliao.pythonanywhere.com/api/article/"),z=(n.Component,function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={title:"",desc:"",year:"",image:null},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleImageChange=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state);var a=new FormData;a.append("file",e.state.image,e.state.image.name),a.append("title",e.state.title),a.append("desc",e.state.desc),a.append("year",e.state.year);var n="Token "+localStorage.getItem("authcode");E.a.post("https://royliao.pythonanywhere.com/api/article/",a,{headers:{"content-type":"multipart/form-data",Authorization:n}}).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"Title",id:"title",value:this.state.title,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"desc",id:"desc",value:this.state.desc,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"year",id:"year",value:this.state.year,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"file",id:"image",accept:"image/png, image/jpeg",onChange:this.handleImageChange})),l.a.createElement("input",{type:"submit"})))}}]),a}(n.Component)),q="https://royliao.pythonanywhere.com/api/article/",K=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",image:"",books:[],newBookData:{title:"",desc:"",year:"",file:""},headerInfo:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:"",file:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){E.a.get("".concat(q,"?search=").concat(n.state.searchkey)).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleImageChange=function(e){n.setState({image:e.target.files[0]})},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){E.a.get("".concat(q,"?search=").concat(n.state.searchkey)).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;E.a.post("".concat(q),this.state.newBookData,this.state.headerInfo).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n,l){this.setState({editBookData:{id:e,title:t,desc:a,year:n,file:l},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,l=t.desc,o=t.year,r=t.file;E.a.put("".concat(q)+this.state.editBookData.id+"/",{id:a,title:n,desc:l,year:o,file:r},this.state.headerInfo).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;E.a.delete("".concat(q)+e+"/").then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||E.a.get("".concat(q,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?E.a.get("".concat(q,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})})):(window.location.reload(!0),alert("thh"))}},{key:"_refreshBooks",value:function(){var e=this;E.a.get("".concat(q)).then((function(t){e.setState({books:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",{style:{textAlign:"left",color:"blue",hover:"green"},baseFontStyle:{fontFamily:"Roboto"}},l.a.createElement("a",{onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year,t.file)},t.title)),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.desc),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.year),l.a.createElement("td",null,l.a.createElement("img",{width:"50%",src:t.file,alt:""})),l.a.createElement("td",null,l.a.createElement(j.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("div",{class:"row"},l.a.createElement("h4",{style:{marginTop:25}},"List of Suppliers"),"\u2003",l.a.createElement(j.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),l.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),l.a.createElement(j.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",l.a.createElement(F,{name:this.state.mymessage}),l.a.createElement(M.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},l.a.createElement(_.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(T.a,{id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(x.a,null,l.a.createElement(j.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",l.a.createElement(j.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),l.a.createElement(M.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},l.a.createElement(_.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"image"},"Image"),l.a.createElement("div",null,l.a.createElement("img",{width:"50%",src:this.state.editBookData.file,alt:""})),l.a.createElement(T.a,{type:"file",id:"image",accept:"image/png, image/jpeg",onChange:function(t){var a=e.state.editBookData;e.setState({image:t.target.files[0]}),a.file=e.state.image,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(T.a,{id:"desc",value:this.state.editBookData.desc,onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(j.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",l.a.createElement(j.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),l.a.createElement(U.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Desc"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t)),l.a.createElement("center",null,l.a.createElement(W,null)))}}]),a}(n.Component),H=a(43),J="https://royliao.pythonanywhere.com/api/article/",G=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",image:"",books:[],newBookData:{title:"",desc:"",year:""},headerInfo:{Authorization:"Token "+localStorage.getItem("authcode")},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:"",file:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){E.a.get("".concat(J,"?search=").concat(n.state.searchkey),{headers:n.state.headerInfo}).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleImageChange=function(e){n.setState({image:e.target.files[0]})},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){E.a.get("".concat(J,"?search=").concat(n.state.searchkey),{headers:n.state.headerInfo}).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;E.a.post("".concat(J),this.state.newBookData,{headers:this.state.headerInfo}).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n,l){this.setState({editBookData:{id:e,title:t,desc:a,year:n,file:l},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,l=t.desc,o=t.year;E.a.put("".concat(J)+this.state.editBookData.id+"/",{id:a,title:n,desc:l,year:o},{headers:this.state.headerInfo}).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;E.a.delete("".concat(J)+e+"/",{headers:this.state.headerInfo}).then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||E.a.get("".concat(J,"?search=").concat(this.state.searchkey),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?E.a.get("".concat(J,"?search=").concat(this.state.searchkey),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})})):window.location.reload(!1)}},{key:"_refreshBooks",value:function(){var e=this;E.a.get("".concat(J),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",{style:{textAlign:"left",color:"blue",hover:"green"},baseFontStyle:{fontFamily:"Roboto"}},l.a.createElement("a",{onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year,t.file)},t.title)),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.desc),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.year),l.a.createElement("td",null,l.a.createElement("img",{width:"50%",src:t.file,alt:""})),l.a.createElement("td",null,l.a.createElement(j.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("div",{class:"row"},l.a.createElement("h4",{style:{marginTop:25}},"List of Suppliers"),"\u2003",l.a.createElement(j.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),l.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),l.a.createElement(j.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",l.a.createElement(F,{name:this.state.mymessage}),l.a.createElement("hr",null),l.a.createElement(M.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},l.a.createElement(_.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(H.d,{type:"textarea",id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(x.a,null,l.a.createElement(j.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",l.a.createElement(j.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),l.a.createElement(M.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},l.a.createElement(_.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement("div",null,l.a.createElement("img",{width:"50%",src:this.state.editBookData.file,alt:""}))),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(H.d,{type:"textarea",value:this.state.editBookData.desc,rows:"5",onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(j.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",l.a.createElement(j.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),l.a.createElement(U.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Desc"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t)),l.a.createElement("center",null,l.a.createElement(W,null)))}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",email:"",first_name:"",last_name:"",password_confirm:"",users:[],newUserData:{username:"",password:"",email:"",first_name:"",last_name:"",password_confirm:""},mymessage:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleChangef=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleChangef",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;this.setState(Object.assign(this.state.newUserData,{username:this.state.username})),this.setState(Object.assign(this.state.newUserData,{password:this.state.password})),this.setState(Object.assign(this.state.newUserData,{first_name:this.state.first_name})),this.setState(Object.assign(this.state.newUserData,{last_name:this.state.last_name})),this.setState(Object.assign(this.state.newUserData,{email:this.state.email})),this.setState(Object.assign(this.state.newUserData,{password_confirm:this.state.password_confirm})),e.preventDefault(),E.a.post("http://royliao.pythonanywhere.com/accounts/register/",this.state.newUserData).then((function(e){t.state.users.push(e.data),t.setState({mymessage:"User name "+t.state.newUserData.username+" is added!"}),t.setState({username:"",password:"",first_name:"",last_name:"",Password:"",email:"",password_confirm:""})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Username:",l.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"First Name:",l.a.createElement("input",{name:"first_name",type:"text",value:this.state.first_name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Last Name:",l.a.createElement("input",{name:"last_name",type:"text",value:this.state.last_name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Confirm Password:",l.a.createElement("input",{name:"password_confirm",type:"password",value:this.state.password_confirm,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={count:0},n}return Object(i.a)(a,[{key:"increase",value:function(){var e=this;this.setState({count:this.state.count+1},(function(){console.log("count",e.state.count)}))}},{key:"tosignup",value:function(){return l.a.createElement("div",null,l.a.createElement(V,null))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"count - ",this.state.count),l.a.createElement(j.a,{onClick:function(){return e.increase()}},"increase"))}}]),a}(n.Component),X=a(9);l.a.Component;function Z(){""===localStorage.getItem("authcode")?(S.a,X.c):(S.a,X.c);var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],o=t[1];return l.a.createElement(X.a,null,l.a.createElement("div",null,l.a.createElement(p.a,{color:"light",light:!0,expand:"md"},l.a.createElement(f.a,{href:"/books-app"},l.a.createElement("h1",null,"EasyGo")),l.a.createElement(y.a,{onClick:function(){return o(!a)}}),l.a.createElement(v.a,{isOpen:a,navbar:!0},l.a.createElement(b.a,{className:"mr-auto",navbar:!0},l.a.createElement(B.a,null,l.a.createElement(S.a,{className:"inactive",activeClassName:"active",exact:!0,to:"/",tag:X.c},"Home")),l.a.createElement(B.a,null,l.a.createElement(S.a,{tag:X.c,to:"/accounts",className:"inactive",activeClassName:"active"},"Accounts")),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"Sales"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:X.c},"About1")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:X.c},"About2")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/",tag:X.c},"About3")))),l.a.createElement(B.a,null,l.a.createElement(S.a,{exact:!0,to:"/books-app",className:"inactive",activeClassName:"active",tag:X.c},"Suppliers")),l.a.createElement(B.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",className:"inactive",activeClassName:"active",tag:X.c},"Warehouse")),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"Setting"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:X.c},"About1")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:X.c},"About1")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/accounts",tag:X.c},"Report")))),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"User"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/login",tag:X.c},"Sign in")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/signup",tag:X.c},"Sign Up ")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/logout",tag:X.c},"Sign Out"))))),l.a.createElement(S.a,{onClick:function(){localStorage.setItem("accesstoken",{Authorization:"Token "}),localStorage.setItem("authcode",""),window.location.reload(!0)}},"Log out")))),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement(k.d,null,l.a.createElement(k.b,{exact:!0,path:"/"},l.a.createElement($,null)),l.a.createElement(k.b,{path:"/accounts"},l.a.createElement(ee,null)),l.a.createElement(k.b,{path:"/suppliers"},l.a.createElement(te,null)),l.a.createElement(k.b,{path:"/books-app"},l.a.createElement($,null)),l.a.createElement(k.b,{path:"/suppliers"},l.a.createElement(te,null)),l.a.createElement(k.b,{path:"/login2"},l.a.createElement(ne,null)),l.a.createElement(k.b,{path:"/login"},l.a.createElement(le,null)),l.a.createElement(k.b,{path:"/logout"},l.a.createElement(oe,null)),l.a.createElement(k.b,{path:"/signup"},l.a.createElement(ae,null)))))}function $(){return l.a.createElement("div",null,l.a.createElement(G,null))}function ee(){return l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement("h2",null,"About roy"))}function te(){return l.a.createElement("div",null,l.a.createElement(K,null))}function ae(){return l.a.createElement("div",null,l.a.createElement(V,null))}function ne(){return l.a.createElement("div",null,l.a.createElement(re,null))}var le=function(){return l.a.createElement(k.a,{to:"/login2"})};function oe(){return localStorage.setItem("accesstoken",{Authorization:"Token "}),localStorage.setItem("authcode",""),l.a.createElement("div",null,"you have logged out, Login ",l.a.createElement("a",{href:"/books-app"},"here "),"again.",l.a.createElement("div",null,"Thank you to web surf here. This is the logout page content for guests!"))}var re=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={tok:localStorage.getItem("authcode"),signupform:""},n.state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({signupform:l.a.createElement("div",null)})}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("".concat("https://royliao.pythonanywhere.com/api-token-auth/"),this.state).then((function(e){return console.log(e.data.token),localStorage.setItem("accesstoken",{Authorization:"Token "+e.data.token}),localStorage.setItem("authcode",e.data.token),t.setState((function(){return{tok:localStorage.getItem("authcode")}})),t.state.tok})).catch((function(e){e.response?(alert(e.response.data.non_field_errors+" Please try with correct user name and password!"),console.log(e.response.data),console.log(e.response.status)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}},{key:"render",value:function(){var e=this,t=this.state.signupform;return l.a.createElement("div",null,""==localStorage.getItem("authcode")?l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Username:",l.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),l.a.createElement("label",null,"Password:",l.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{style:{marginTop:20}},"not a user? You can ",l.a.createElement("span",{style:{color:"blue"},onClick:function(){e.setState({signupform:l.a.createElement("div",null,"User Register",l.a.createElement(V,null))})}},"click here to sign up"),l.a.createElement("div",{style:{marginTop:20}},t),l.a.createElement(Q,null))):l.a.createElement(Z,null))}}]),a}(n.Component),se=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement(re,null))}}]),a}(n.Component);r.a.render(l.a.createElement(se,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a(125)},77:function(e,t,a){},95:function(e,t,a){},96:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.b335793e.chunk.js.map
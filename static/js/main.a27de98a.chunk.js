(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(24),r=a.n(o),s=(a(75),a(76),a(77),a(78),a(79),a(11)),i=a(12),c=a(13),u=a(14),m=a(29),h=a(9),d=a(5),g=a.n(d),E=a(30),p=a(28),k=(a(97),a(98),a(127)),f=a(128),y=a(129),v=a(130),b=a(131),B=a(132),S=a(133),w=a(134),C=a(135),D=a(136),O=a(137),_=a(62),j=a(145),M=a(138),I=a(139),A=a(140),N=a(141),T=a(142),x=a(143),U=a(144),F=function(e){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h6",{style:{color:"blue"}},e.name)))};a(41);var W=function(){return l.a.createElement("center",null,"---- end of the list ----")};var P=function(e){return l.a.createElement(_.a,{id:"Btn1",onClick:function(){return e.greethandler2("from child")}},"Search ")},R=(n.Component,function(e){var t=e.results.map((function(t){return l.a.createElement("li",{key:t.id,onClick:function(){return e.action(t.title)}},t.title)}));return l.a.createElement("ul",null,t)}),L=(Object({NODE_ENV:"production",PUBLIC_URL:"/books-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,"https://royliao.pythonanywhere.com/api/article/"),Y=(n.Component,"https://royliao.pythonanywhere.com/api/article/"),q=(n.Component,function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={title:"",desc:"",year:"",image:null},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleImageChange=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state);var a=new FormData;a.append("file",e.state.image,e.state.image.name),a.append("title",e.state.title),a.append("desc",e.state.desc),a.append("year",e.state.year);var n="Token "+localStorage.getItem("authcode");g.a.post("https://royliao.pythonanywhere.com/api/article/",a,{headers:{"content-type":"multipart/form-data",Authorization:n}}).then((function(t){console.log(t.data),e.setState({image:""}),e.setState({title:""}),e.setState({desc:""}),e.setState({year:""})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"Title",id:"title",value:this.state.title,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"desc",id:"desc",value:this.state.desc,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"text",placeholder:"year",id:"year",value:this.state.year,onChange:this.handleChange,required:!0})),l.a.createElement("p",null,l.a.createElement("input",{type:"file",id:"image",accept:"image/png, image/jpeg",onChange:this.handleImageChange})),l.a.createElement("input",{type:"submit"})))}}]),a}(n.Component)),z="https://royliao.pythonanywhere.com/api/article/",K=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",image:"",books:[],newBookData:{title:"",desc:"",year:"",file:""},headerInfo:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:"",file:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){g.a.get("".concat(z,"?search=").concat(n.state.searchkey)).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleImageChange=function(e){n.setState({image:e.target.files[0]})},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){g.a.get("".concat(z,"?search=").concat(n.state.searchkey)).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;g.a.post("".concat(z),this.state.newBookData,this.state.headerInfo).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n,l){this.setState({editBookData:{id:e,title:t,desc:a,year:n,file:l},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,l=t.desc,o=t.year,r=t.file;g.a.put("".concat(z)+this.state.editBookData.id+"/",{id:a,title:n,desc:l,year:o,file:r},this.state.headerInfo).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;g.a.delete("".concat(z)+e+"/").then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||g.a.get("".concat(z,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?g.a.get("".concat(z,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})})):(window.location.reload(!0),alert("thh"))}},{key:"_refreshBooks",value:function(){var e=this;g.a.get("".concat(z)).then((function(t){e.setState({books:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",{style:{textAlign:"left",color:"blue",hover:"green"},baseFontStyle:{fontFamily:"Roboto"}},l.a.createElement("a",{onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year,t.file)},t.title)),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.desc),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.year),l.a.createElement("td",null,l.a.createElement("img",{width:"50%",src:t.file,alt:""})),l.a.createElement("td",null,l.a.createElement(_.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("div",{class:"row"},l.a.createElement("h4",{style:{marginTop:25}},"List of Suppliers"),"\u2003",l.a.createElement(_.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),l.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),l.a.createElement(_.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",l.a.createElement(F,{name:this.state.mymessage}),l.a.createElement(j.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},l.a.createElement(M.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(T.a,{id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(x.a,null,l.a.createElement(_.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",l.a.createElement(_.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),l.a.createElement(j.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},l.a.createElement(M.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"image"},"Image"),l.a.createElement("div",null,l.a.createElement("img",{width:"50%",src:this.state.editBookData.file,alt:""})),l.a.createElement(T.a,{type:"file",id:"image",accept:"image/png, image/jpeg",onChange:function(t){var a=e.state.editBookData;e.setState({image:t.target.files[0]}),a.file=e.state.image,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(T.a,{id:"desc",value:this.state.editBookData.desc,onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(_.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",l.a.createElement(_.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),l.a.createElement(U.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Desc"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t)),l.a.createElement("center",null,l.a.createElement(W,null)))}}]),a}(n.Component),H=a(19),J="https://royliao.pythonanywhere.com/api/article/",G=(n.Component,"https://royliao.pythonanywhere.com/api/article/"),V=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",image:"",books:[],newBookData:{title:"",desc:"",year:""},headerInfo:{Authorization:"Token "+localStorage.getItem("authcode")},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:"",file:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){g.a.get("".concat(G,"?search=").concat(n.state.searchkey),{headers:n.state.headerInfo}).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleImageChange=function(e){n.setState({image:e.target.files[0]})},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){g.a.get("".concat(G,"?search=").concat(n.state.searchkey),{headers:n.state.headerInfo}).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;g.a.post("".concat(G),this.state.newBookData,{headers:this.state.headerInfo}).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n,l){this.setState({editBookData:{id:e,title:t,desc:a,year:n,file:l},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,l=t.desc,o=t.year;g.a.put("".concat(G)+this.state.editBookData.id+"/",{id:a,title:n,desc:l,year:o},{headers:this.state.headerInfo}).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;g.a.delete("".concat(G)+e+"/",{headers:this.state.headerInfo}).then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||g.a.get("".concat(G,"?search=").concat(this.state.searchkey),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?g.a.get("".concat(G,"?search=").concat(this.state.searchkey),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})})):window.location.reload(!1)}},{key:"_refreshBooks",value:function(){var e=this;g.a.get("".concat(G),{headers:this.state.headerInfo}).then((function(t){e.setState({books:t.data.reverse()})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",{style:{textAlign:"left",color:"blue",hover:"green"},baseFontStyle:{fontFamily:"Roboto"}},l.a.createElement("a",{onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year,t.file)},t.title)),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.desc),l.a.createElement("td",{style:{textAlign:"left"},baseFontStyle:{fontFamily:"Roboto"}},t.year),l.a.createElement("td",null,l.a.createElement("img",{width:"50%",src:t.file,alt:""})),l.a.createElement("td",null,l.a.createElement(_.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return l.a.createElement("div",{className:"App container"},l.a.createElement("center",null,l.a.createElement("div",{class:"row"},l.a.createElement("h4",{style:{marginTop:25}},"List of Suppliers"),"\u2003",l.a.createElement(_.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),l.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),l.a.createElement(_.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",l.a.createElement(F,{name:this.state.mymessage}),l.a.createElement("hr",null),l.a.createElement(j.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},l.a.createElement(M.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(H.d,{type:"textarea",id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(x.a,null,l.a.createElement(_.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",l.a.createElement(_.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),l.a.createElement(j.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},l.a.createElement(M.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement("div",null,l.a.createElement("img",{width:"50%",src:this.state.editBookData.file,alt:""}))),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"title"},"Title"),l.a.createElement(T.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"desc"},"Description"),l.a.createElement(H.d,{type:"textarea",value:this.state.editBookData.desc,rows:"5",onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),l.a.createElement(A.a,null,l.a.createElement(N.a,{for:"year"},"Year"),l.a.createElement(T.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),l.a.createElement(x.a,null,l.a.createElement(_.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",l.a.createElement(_.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),l.a.createElement(U.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Desc"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t)),l.a.createElement("center",null,l.a.createElement(W,null)))}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",email:"",first_name:"",last_name:"",password_confirm:"",users:[],newUserData:{username:"",password:"",email:"",first_name:"",last_name:"",password_confirm:""},mymessage:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleChangef=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleChangef",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;this.setState(Object.assign(this.state.newUserData,{username:this.state.username})),this.setState(Object.assign(this.state.newUserData,{password:this.state.password})),this.setState(Object.assign(this.state.newUserData,{first_name:this.state.first_name})),this.setState(Object.assign(this.state.newUserData,{last_name:this.state.last_name})),this.setState(Object.assign(this.state.newUserData,{email:this.state.email})),this.setState(Object.assign(this.state.newUserData,{password_confirm:this.state.password_confirm})),e.preventDefault(),g.a.post("http://royliao.pythonanywhere.com/accounts/register/",this.state.newUserData).then((function(e){t.state.users.push(e.data),t.setState({mymessage:"User name "+t.state.newUserData.username+" is added!"}),t.setState({username:"",password:"",first_name:"",last_name:"",Password:"",email:"",password_confirm:""})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Username:",l.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"First Name:",l.a.createElement("input",{name:"first_name",type:"text",value:this.state.first_name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Last Name:",l.a.createElement("input",{name:"last_name",type:"text",value:this.state.last_name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Confirm Password:",l.a.createElement("input",{name:"password_confirm",type:"password",value:this.state.password_confirm,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={count:0},n}return Object(i.a)(a,[{key:"increase",value:function(e){var t=this;this.setState({count:this.state.count+e},(function(){console.log("count",t.state.count)}))}},{key:"tosignup",value:function(){return l.a.createElement("div",null,l.a.createElement(Q,null))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"count - ",this.state.count),l.a.createElement(_.a,{onClick:function(){return e.increase(5)}},"increase"))}}]),a}(n.Component),Z=a(10);l.a.Component;function $(e){""===localStorage.getItem("authcode")?(S.a,Z.c):(S.a,Z.c);var t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],r=a[1];return l.a.createElement(Z.a,null,l.a.createElement("div",null,l.a.createElement(k.a,{color:"light",light:!0,expand:"md"},l.a.createElement(f.a,{href:"/books-app"},l.a.createElement("h1",null,"EasyGo")),l.a.createElement(y.a,{onClick:function(){return r(!o)}}),l.a.createElement(v.a,{isOpen:o,navbar:!0},l.a.createElement(b.a,{className:"mr-auto",navbar:!0},l.a.createElement(B.a,null,l.a.createElement(S.a,{className:"inactive",activeClassName:"active",exact:!0,to:"/",tag:Z.c},"Home")),l.a.createElement(B.a,null,l.a.createElement(S.a,{tag:Z.c,to:"/accounts",className:"inactive",activeClassName:"active"},"Accounts")),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"Sales"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:Z.c},"About1")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:Z.c},"About2")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/",tag:Z.c},"About3")))),l.a.createElement(B.a,null,l.a.createElement(S.a,{exact:!0,to:"/books-app",className:"inactive",activeClassName:"active",tag:Z.c},"Suppliers")),l.a.createElement(B.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",className:"inactive",activeClassName:"active",tag:Z.c},"Warehouse")),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"Setting"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:Z.c},"About1")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/suppliers",tag:Z.c},"About1")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/accounts",tag:Z.c},"Report")))),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(C.a,{nav:!0,caret:!0},"User"),l.a.createElement(D.a,{right:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/login",tag:Z.c},"Sign in")),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/signup",tag:Z.c},"Sign Up ")),l.a.createElement(O.a,{divider:!0}),l.a.createElement(O.a,null,l.a.createElement(S.a,{exact:!0,to:"/logout",tag:Z.c},"Sign Out"))))),l.a.createElement(S.a,{onClick:function(){localStorage.setItem("accesstoken",{Authorization:"Token "}),localStorage.setItem("authcode",""),window.location.reload(!0)}},"Log out    ",e.user)))),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/"},l.a.createElement(ee,null)),l.a.createElement(p.b,{path:"/accounts"},l.a.createElement(te,null)),l.a.createElement(p.b,{path:"/suppliers"},l.a.createElement(ae,null)),l.a.createElement(p.b,{path:"/books-app"},l.a.createElement(ee,null)),l.a.createElement(p.b,{path:"/suppliers"},l.a.createElement(ae,null)),l.a.createElement(p.b,{path:"/login2"},l.a.createElement(le,null)),l.a.createElement(p.b,{path:"/login"},l.a.createElement(oe,null)),l.a.createElement(p.b,{path:"/logout"},l.a.createElement(re,null)),l.a.createElement(p.b,{path:"/signup"},l.a.createElement(ne,null)))))}function ee(){var e=l.a.createElement("div",null,l.a.createElement(V,null));return l.a.createElement("div",null,e)}function te(){return l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement("h2",null,"About roy"))}function ae(){return l.a.createElement("div",null,l.a.createElement(K,null))}function ne(){return l.a.createElement("div",null,l.a.createElement(Q,null))}function le(){return l.a.createElement("div",null,l.a.createElement(se,null))}var oe=function(){return l.a.createElement(p.a,{to:"/login2"})};function re(){return localStorage.setItem("accesstoken",{Authorization:"Token "}),localStorage.setItem("authcode",""),l.a.createElement("div",null,"you have logged out, Login ",l.a.createElement("a",{href:"/books-app"},"here "),"again.",l.a.createElement("div",null,"Thank you to web surf here. This is the logout page content for guests!"))}var se=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={tok:localStorage.getItem("authcode"),signupform:"",permit:[]},n.state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleuser=n.handleuser.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({signupform:l.a.createElement("div",null)})}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://royliao.pythonanywhere.com/api-token-auth/"),this.state).then((function(e){return console.log(e.data.token),localStorage.setItem("accesstoken",{Authorization:"Token "+e.data.token}),localStorage.setItem("authcode",e.data.token),t.setState((function(){return{tok:localStorage.getItem("authcode")}})),t.setState((function(){return{tok:localStorage.getItem("authcode")}})),localStorage.setItem("usern",t.state.username),g.a.get("http://royliao.pythonanywhere.com/users/retrieve/andyliao/"+t.state.username).then((function(e){t.setState({permit:e}),alert(t.state.permit[0])})),t.state.tok})).catch((function(e){e.response?(alert(e.response.data.non_field_errors+" Please try with correct user name and password!"),console.log(e.response.data),console.log(e.response.status)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})),this.setState({password:""}),this.handleuser(this.state.username)}},{key:"handleuser",value:function(e){var t=this;g.a.get("http://royliao.pythonanywhere.com/users/retrieve/"+e).then((function(e){t.setState({permit:e.data}),localStorage.setItem("permito",t.state.permit)})).catch((function(e){e.response?(alert(e.response.data.non_field_errors+" Please try with correct user name and password!"),console.log(e.response.data),console.log(e.response.status)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}},{key:"render",value:function(){var e=this,t=this.state.signupform;return l.a.createElement("div",null,""==localStorage.getItem("authcode")?l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Username:",l.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),l.a.createElement("label",null,"Password:",l.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{style:{marginTop:20}},"not a user? You can ",l.a.createElement("span",{style:{color:"blue"},onClick:function(){e.setState({signupform:l.a.createElement("div",null,"User Register",l.a.createElement(Q,null))})}},"click here to sign up"),l.a.createElement("div",{style:{marginTop:20}},t),l.a.createElement(X,null))):l.a.createElement($,{user:this.state.username,permit:this.state.permit}))}}]),a}(n.Component),ie=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement(se,null))}}]),a}(n.Component);r.a.render(l.a.createElement(ie,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(126)},79:function(e,t,a){},97:function(e,t,a){},98:function(e,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.a27de98a.chunk.js.map
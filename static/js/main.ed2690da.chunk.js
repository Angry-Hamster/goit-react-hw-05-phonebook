(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={main:"alert_main__UWM3s",enter:"alert_enter__1yBkk",enterActive:"alert_enterActive__1MvzK",exit:"alert_exit__67lPq",exitActive:"alert_exitActive__3-hy3"}},14:function(e,t,n){e.exports={main:"animation_main__1qAqo",enter:"animation_enter__2Pf0B",enterActive:"animation_enterActive__3klBf"}},16:function(e,t,n){e.exports={contactList:"contact_contactList__1-H14"}},17:function(e,t,n){e.exports={enter:"animation_enter__jgTSj",enterActive:"animation_enterActive__2rU6m",exit:"animation_exit__10fyg",exitActive:"animation_exitActive__15Xi6"}},19:function(e,t,n){e.exports={form:"form_form__ihEEy"}},20:function(e,t,n){e.exports={filter:"filter_filter__1EaBe"}},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(27),n(21)),s=n(2),l=n(3),u=n(5),m=n(4),d=n(35),h=n(33),f=n(16),j=n.n(f),b=n(17),A=n.n(b),p=n(0),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlefilter=function(e){var t=e.filter,n=e.contacts;return""==t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},e.handleDelete=function(t){e.props.deleteContact(t.target.parentNode.id)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(d.a,{className:j.a.contactList,children:this.handlefilter(this.props.users).map((function(t){var n=t.id,a=t.name,r=t.number;return Object(p.jsx)(h.a,{timeout:250,classNames:A.a,children:Object(p.jsxs)("li",{id:n,children:[Object(p.jsxs)("span",{children:[a,": ",r]}),Object(p.jsxs)("button",{id:n,onClick:e.handleDelete,children:[" ",Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAfAAAAHwBFQ/t5AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE7SURBVDiNjZI/SwNBEEffTLqYiBJrv0IE5cAyxMhhpwjqN0wh1qI5BZtALIKt9lqJEC8JIcmORf64We+C0+0M7+3sj5Xh0f7u1ArXQAnHVemx88KaSmtRFZEmYt8FmZ5LWo+6wN58/omjnidJa1EVJQEq81ZXvQNABSVJa1H1HzBARRUugN46SQ7cU7gUgEE9OnRwC2wux8KXCMc2YYzSAnY8uG9mJ+WH5ydZdDIls80csJUFz+7xKkfi1wr8R7CUGPcIG8FoaGaxDwNoKHCOAcI44/aJFmQQNlcE87RbrL55UWUz7vqN6CBT4MFe2jIU6C+PxnYo0XyYvpmLBRr4/ySQSD78m/a6f6Km3ARwT6Hhp11MOm2FONwER1MFRgEcF5NOO0wwS2IwUufcKfAG9p4HZ0g+gFfn3NkPE8qrzATeYkIAAAAASUVORK5CYII=",alt:"Delete"})," "]})]})},n)}))})}}]),n}(a.Component);O.defaultProps={users:[{id:"id-0",name:"your name",number:"your number"}],filter:""};var v,g=O,x=n(18),_=n(34),y=n(13),C=n.n(y),w=n(19),S=n.n(w),N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).disableAlert=function(){e.props.change(!1)},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){clearTimeout(v)}},{key:"render",value:function(){var e=this;return v=setTimeout((function(){e.disableAlert()}),1700),Object(p.jsx)("h4",{children:"Contact alredy exsist!"})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",alert:!1},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c={name:a,number:r,id:Object(_.a)()};0==e.props.users.filter((function(e){return e.name.toLowerCase()==a.toLowerCase()})).length?e.props.addNewContact(c):e.changeAlert(!0),e.claerForm()},e.changeAlert=function(t){e.setState({alert:t})},e.claerForm=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{className:C.a.main,children:this.state.alert&&Object(p.jsx)(h.a,{timeout:250,classNames:C.a,children:Object(p.jsx)(N,{change:this.changeAlert})})}),Object(p.jsxs)("form",{className:S.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{id:"name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange,required:!0,autocomplete:"off"}),Object(p.jsx)("label",{htmlFor:"number",children:"Phone"}),Object(p.jsx)("input",{id:"number",name:"number",type:"tel",value:this.state.number,onChange:this.handleChange,required:!0,autocomplete:"off"}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component);k.defaultProps={users:[{id:"id-0",name:"your name",number:"your number"}]};var E=k,F=n(20),L=n.n(F),B=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var n=t.target.value;e.props.filter(n)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:L.a.filter,children:[Object(p.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(p.jsx)("input",{name:"filter",id:"filter",onChange:this.handleChange,autocomplete:"off"})]})}}]),n}(a.Component),I=n(14),U=n.n(I),R=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoad:!1},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoad:!0})}),150)}},{key:"render",value:function(){return Object(p.jsx)(d.a,{className:U.a.main,children:this.state.isLoad&&Object(p.jsx)(h.a,{timeout:500,classNames:U.a,children:Object(p.jsx)("h1",{children:"Phonebook"})})})}}]),n}(a.Component),J=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}}))},e.getFilter=function(t){e.setState({filter:t})},e.deleteContact=function(t){var n=e.state.contacts;e.setState({contacts:n.filter((function(e){return e.id!=t}))})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",(function(){localStorage.clear(),e.state.contacts.length&&localStorage.setItem("contacts",JSON.stringify(e.state.contacts))})),window.addEventListener("load",(function(){null!=localStorage.getItem("contacts")?(e.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}),console.log("%c[Sistem call]%c[LocalStorage get key is successful]","color: purple; font-size: 15px;","color: green; font-size: 15px;")):console.log("%c[Sistem call]%c[LocalStorage is null]","color: purple; font-size: 15px;","color: red; font-size: 15px;")}))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(R,{}),Object(p.jsx)(E,{addNewContact:this.addNewContact,users:this.state.contacts}),Object(p.jsx)(B,{filter:this.getFilter}),Object(p.jsx)(g,{users:this.state,deleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ed2690da.chunk.js.map
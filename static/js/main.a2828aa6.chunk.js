(this["webpackJsonpas-sqr-portfolio"]=this["webpackJsonpas-sqr-portfolio"]||[]).push([[0],{11:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),s=(t(16),t(1)),i=t(2),o=t(3),m=t(4),u=(t(7),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.filter((function(e){return""!==e.url})).map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#mottos"},"Mottos")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"As_sqr \u3067\u3059\uff0e"),n.a.createElement("h3",null,"\u4eca\u306f\u6771\u5927\u306e\u5927\u5b66\u9662\u306b\u3044\u307e\u3059\uff0e\u3053\u306e\u30da\u30fc\u30b8\u306f React \u306e\u7df4\u7fd2\u3068\u3057\u3066 https://github.com/CleverProgrammers/react-portfolio \u3092\u5143\u306b\u4f5c\u308a\u307e\u3057\u305f\uff0e\u554f\u984c\u304c\u3042\u3063\u305f\u3089\u6559\u3048\u3066\u304f\u3060\u3055\u3044\uff0e"),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(l.Component)),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e="/as-sqr-portfolio/images/"+this.props.data.image,a=this.props.data.social.filter((function(e){return e.account})).map((function(e,a){return n.a.createElement("span",{key:"account-"+a,dangerouslySetInnerHTML:{__html:e.name+": "+(e.url?"<a href="+e.url+">":"")+e.account+(e.url?"</a>":"")+"<br/>"}})}));return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:e,alt:"Utas"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"\u79c1\u306b\u3064\u3044\u3066"),n.a.createElement("p",null,"\u3086\u30fc\u305f\u3059\u304f\u3093\u304c\u597d\u304d\u306a\u5b66\u751f\u3067\u3059\uff0e\u6570\u5b66\u3068\u304b\u7af6\u30d7\u30ed\u3068\u304b\u958b\u767a\u3068\u304b\uff0e",n.a.createElement("br",null),"\u958b\u767a\u7d4c\u9a13\u3068\u3057\u3066\u306f Spring Boot \u304c\u4e00\u756a\u3042\u308b\u3068\u601d\u3044\u307e\u3059\uff0eJava \u3067\u5de5\u5834\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306e\u65b0\u6a5f\u80fd\u3092\u4e00\u4eba\u3067\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3057\u305f\uff0e\u307e\u305f\uff0cKaiY \u306b\u304a\u3044\u3066\u306f WebRTC / Firebase / Vue.js \u7b49\u3092\u7528\u3044\u3066\u958b\u767a\u3092\u3057\u3066\u3044\u307e\u3057\u305f\uff0eYahoo! JAPAN \u3055\u3093\u306b\u304a\u3044\u3066\u306f Apache Solr \u3092\u7528\u3044\u305f\u6587\u66f8\u691c\u7d22\u306e\u6539\u5584\u3092\u884c\u3063\u3066\u3044\u307e\u3057\u305f\uff0e",n.a.createElement("br",null),"\u4ed6\u306b\u3082\uff0c\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u69d8\u3005\u306a\u3082\u306e\u306e\u53ef\u8996\u5316\u3092\u3057\u3066\u904a\u3093\u3067\u3044\u307e\u3057\u305f\uff0e",n.a.createElement("br",null),"\u4f55\u304b\u3042\u308c\u3070\u4ee5\u4e0b\u306e\u3069\u308c\u304b\u306b\u9023\u7d61\u304f\u3060\u3055\u3044\uff0e",n.a.createElement("br",null),"\u4ee5\u4e0b\u306e\u30ae\u30e3\u30e9\u30ea\u30fc\u306f\u30ea\u30f3\u30af\u306e\u3042\u308b\u3082\u306e\u306f Ctrl+Click \u3067\u98db\u3079\u307e\u3059\uff0e"),n.a.createElement("h2",null,"\u30a2\u30ab\u30a6\u30f3\u30c8"),n.a.createElement("p",{className:"address"},a))))}}]),t}(l.Component),d=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skills.map((function(e,a){var t="bar-expand "+e.name.toLowerCase();return n.a.createElement("li",{key:"skill-"+a},n.a.createElement("span",{style:{width:e.level},className:t}),n.a.createElement("em",null,e.name))}));return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"\u5b66\u6b74"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("div",{key:"\u6771\u4eac\u5927\u5b66\u5de5\u5b66\u90e8"},n.a.createElement("h3",null,"\u6771\u4eac\u5927\u5b66\u5de5\u5b66\u90e8"),n.a.createElement("p",{className:"info"},"\u5b66\u58eb\u53f7\u53d6\u5f97 ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"~2020/03"))),n.a.createElement("div",{key:"\u6771\u4eac\u5927\u5b66\u5927\u5b66\u9662\u60c5\u5831\u7406\u5de5\u5b66\u7cfb\u7814\u7a76\u79d1"},n.a.createElement("h3",null,"\u6771\u4eac\u5927\u5b66\u5927\u5b66\u9662\u60c5\u5831\u7406\u5de5\u5b66\u7cfb\u7814\u7a76\u79d1"),n.a.createElement("p",{className:"info"},"\u4fee\u58eb\u8ab2\u7a0b\u5728\u5b66\u4e2d ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"2020/04~"))))))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"\u8077\u6b74"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("div",{key:"iSTC"},n.a.createElement("h3",null,"i Smart Technologies"),n.a.createElement("p",{className:"info"},"\u30d0\u30a4\u30c8 / \u30a4\u30f3\u30bf\u30fc\u30f3 ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"2018/06~"))),n.a.createElement("div",{key:"KaiY"},n.a.createElement("h3",null,"KaiY"),n.a.createElement("p",{className:"info"},"\u30a4\u30f3\u30bf\u30fc\u30f3 ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"2020/08"))),n.a.createElement("div",{key:"Yahoo"},n.a.createElement("h3",null,"Yahoo! JAPAN"),n.a.createElement("p",{className:"info"},"\u30a4\u30f3\u30bf\u30fc\u30f3 ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"2020/09"))),n.a.createElement("div",{key:"infonerv"},n.a.createElement("h3",null,"infonerv"),n.a.createElement("p",{className:"info"},"\u30d0\u30a4\u30c8 ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},"2020/12~"))))))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"\u53d7\u8cde\u6b74"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("div",{key:"JOI2013"},n.a.createElement("h3",null,"\u60c5\u5831\u30aa\u30ea\u30f3\u30d4\u30c3\u30af 2013-2014 \u672c\u9078\u51fa\u5834")),n.a.createElement("div",{key:"JOI2014"},n.a.createElement("h3",null,"\u60c5\u5831\u30aa\u30ea\u30f3\u30d4\u30c3\u30af 2014-2015 \u672c\u9078\u51fa\u5834")),n.a.createElement("div",{key:"U22"},n.a.createElement("h3",null,"U22 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b3\u30f3\u30c6\u30b9\u30c8 \u30b5\u30a4\u30dc\u30a6\u30ba\u4f01\u696d\u8cde\u53d7\u8cde")),n.a.createElement("div",{key:"JPHACKS"},n.a.createElement("h3",null,"JPHACKS 2020 Finalist Award"),n.a.createElement("h3",null,"JPHACKS 2020 Innovator \u8a8d\u5b9a")))))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,"\u30b9\u30ad\u30eb \u203b100% \u306e\u7d76\u5bfe\u91cf\u306f\u4e0d\u660e\u3067\u3059"),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},e)))))}}]),t}(l.Component),h=t(5),E=t(10),v=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={open:!1,srcImage:""},l.openModal=l.openModal.bind(Object(h.a)(l)),l.closeModal=l.closeModal.bind(Object(h.a)(l)),l}return Object(i.a)(t,[{key:"openModal",value:function(e){this.setState({open:!0,srcImage:e})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;if(this.props.data)var a=this.props.data.products.map((function(a,t){var l="/as-sqr-portfolio/images/portfolio/"+a.image;return a.url.length?n.a.createElement("div",{key:"product-"+t,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap",onClick:function(){return window.open(a.url,"_blank")}},n.a.createElement("div",{className:"hover-item"},n.a.createElement("img",{alt:a.title,src:l}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"}))))):n.a.createElement("div",{key:"product-"+t,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap",onClick:e.openModal.bind(e,l)},n.a.createElement("div",{className:"hover-item"},n.a.createElement("img",{alt:a.title,src:l}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})))))})),t=this.props.data.projects.map((function(a,t){var l="/as-sqr-portfolio/images/portfolio/"+a.image;return a.url.length?n.a.createElement("div",{key:"project-"+t,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap",onClick:function(){return window.open(a.url,"_blank")}},n.a.createElement("div",{className:"hover-item"},n.a.createElement("img",{alt:a.title,src:l}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"}))))):n.a.createElement("div",{key:"project-"+t,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap",onClick:e.openModal.bind(e,l)},n.a.createElement("div",{className:"hover-item"},n.a.createElement("img",{alt:a.title,src:l}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})))))})),l=this.props.data.blogs.map((function(e,a){return n.a.createElement("div",{className:"row item",key:"blog-"+a},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("div",null,n.a.createElement("h3",null,n.a.createElement("a",{href:e.url},e.title)),n.a.createElement("p",{className:"info"},e.description,n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.date)))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"\u624b\u4f1d\u3063\u305f\u3082\u306e"),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf"},a))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"\u3064\u304f\u3063\u305f\u3082\u306e"),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf"},t))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"\u304b\u3044\u305f\u3082\u306e"),l)),this.state.open&&n.a.createElement(E.a,{medium:this.state.srcImage,large:this.state.srcImage,onClose:this.closeModal,hideDownload:!0,hideZoom:!0}))}}]),t}(l.Component),g=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.mottos.map((function(e,a){return n.a.createElement("li",{key:"motto-"+a},n.a.createElement("blockquote",null,n.a.createElement("p",null,e.text),n.a.createElement("cite",null,e.author)))}));return n.a.createElement("section",{id:"mottos"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"\u5ea7\u53f3\u306e\u9298\u7684\u306a"))),n.a.createElement("div",{className:"ten columns flex-container"},n.a.createElement("ul",{className:"slides"},e)))))}}]),t}(l.Component),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e),n.a.createElement("ul",null,n.a.createElement("li",null,"\u30af\u30ec\u30b8\u30c3\u30c8\u306f\u4e00\u5fdc\u5143\u306e\u3084\u3064\u306b\u3057\u3066\u304a\u304d\u307e\u3059")),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 All credit goes to Tim Baker - Copyright 2017 Tim Baker"),n.a.createElement("li",null,"Design by ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(l.Component),y=t(9),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={foo:"bar",resumeData:{}},l}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({resumeData:y})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,{data:this.state.resumeData.main}),n.a.createElement(p,{data:this.state.resumeData.main}),n.a.createElement(d,{data:this.state.resumeData.resume}),n.a.createElement(v,{data:this.state.resumeData.portfolio}),n.a.createElement(g,{data:this.state.resumeData.mottos}),n.a.createElement(f,{data:this.state.resumeData.main}))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){},9:function(e){e.exports=JSON.parse('{"main":{"image":"utas.jpeg","social":[{"name":"Github","url":"https://github.com/asSqr","className":"fa fa-github","account":"asSqr"},{"name":"AtCoder","url":"https://atcoder.jp/users/As_sqr","className":"","account":"As_sqr"},{"name":"Codeforces","url":"https://codeforces.com/profile/As_sqr","className":"","account":"As_sqr"},{"name":"Topcoder","url":"https://www.topcoder.com/members/sqrAs","className":"","account":"sqrAs"},{"name":"Discord","url":"","className":"","account":"As_sqr"}]},"resume":{"skills":[{"name":"C++ (for Competitive Programming)","level":"60%"},{"name":"Spring Boot","level":"70%"},{"name":"Firebase","level":"30%"},{"name":"WebRTC","level":"30%"},{"name":"Vue.js","level":"40%"},{"name":"React","level":"70%"},{"name":"Apache Solr","level":"20%"},{"name":"Haskell","level":"50%"}]},"portfolio":{"products":[{"title":"KaiY","category":"WebRTC / Vue.js / Firebase / Nuxt.js / Stripe (\u30d3\u30c7\u30aa\u30df\u30fc\u30c6\u30a3\u30f3\u30b0\u304c\u3067\u304d\u308b\u30b5\u30a4\u30c8\uff0e\u30c1\u30e3\u30c3\u30c8\u6b04\u306f\u3082\u3061\u308d\u3093\u306e\u3053\u3068\uff0c\u753b\u9762\u5171\u6709\u3084 YouTube \u3092\u4e00\u7dd2\u306b\u898b\u305f\u308a\uff0c\u30d0\u30fc\u30ca\u30fc\u3092\u8f09\u305b\u3066\u304a\u3044\u305f\u308a\uff0c\u30d5\u30ed\u30a2\u7ba1\u7406\u3067\u8272\u306a\u3069\u90e8\u5c4b\u306e\u8a2d\u5b9a\u3092\u3044\u308d\u3044\u308d\u5f04\u308c\u305f\u308a\uff0c\u30a2\u30a4\u30c6\u30e0\u3092\u30a8\u30d5\u30a7\u30af\u30c8\u4ed8\u304d\u3067\u9001\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u308a\uff0e\u3082\u3046\u3059\u3050\u6b63\u5f0f\u30ea\u30ea\u30fc\u30b9)","image":"KaiY.png","url":""},{"title":"Flash Reading","category":"HTML5 / JS / Python (Flask) / Postgres / Docker / Goo \u30e9\u30dc API (JPHACKS \u3067\u30c1\u30fc\u30e0\u3067\u4f5c\u3063\u305f\u4f5c\u54c1\uff0e\u9577\u3044\u6587\u66f8\u3092\u30d1\u30e9\u30d1\u30e9\u6587\u5b57\u3067\u8868\u793a\u3057\u3066\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\uff0e\u5f62\u614b\u7d20\u89e3\u6790\u306f python \u3067 goo \u30e9\u30dc API \u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\uff0e\u30a2\u30d7\u30ea\u81ea\u4f53\u306f\u3053\u3061\u3089: flash-reading.herokuapp.com/)","image":"flash reading.png","url":"https://github.com/jphacks/F_2006"},{"title":"Recipe Hub","category":"Next.js / React / Python / Django REST framework / Postgres / Docker / Vercel / Heroku / AWS S3 (Github for Cooking\uff0e\u30ec\u30b7\u30d4\u3092\u81ea\u7531\u306b\u30d5\u30a9\u30fc\u30af\u3057\u3066\u30a2\u30ec\u30f3\u30b8\u3067\u304d\uff0c\u305d\u306e\u69d8\u5b50\u3092\u6728\u69cb\u9020\u306b\u3088\u3063\u3066\u8868\u793a\u3067\u304d\u308b\uff0e\u67d0\u30cf\u30c3\u30ab\u30bd\u30f3\u3067\u67d0\u8cde\u3092\u53d6\u3063\u305f\uff0e)","image":"Recipe Hub.png","url":"https://recipe-hub.vercel.app/"}],"projects":[{"title":"2013 \u8208\u98a8\u796d Launcher","category":"Win32 API / Visual Studio (\u90e8\u54e1\u306e\u4f5c\u3063\u305f\u30b2\u30fc\u30e0\u3092\u4e00\u89a7\u8868\u793a\u3057\u3066\u8d77\u52d5\u3059\u308b\u305f\u3081\u306e\u30e9\u30f3\u30c1\u30e3\u30fc\uff0eUI \u306f\u5168\u90e8\u81ea\u524d)","image":"2013Kofu.png","url":""},{"title":"2014 \u30c7\u30e2\u30b9\u30c8 Launcher","category":"Win32 API / Visual Studio (\u90e8\u54e1\u306e\u4f5c\u3063\u305f\u30b2\u30fc\u30e0\u3092\u4e00\u89a7\u8868\u793a\u3057\u3066\u8d77\u52d5\u3059\u308b\u305f\u3081\u306e\u30e9\u30f3\u30c1\u30e3\u30fc\uff0eUI \u306f\u5168\u90e8\u81ea\u524d\uff0e3D \u8868\u793a\u306e\u8a08\u7b97\u3082\u81ea\u524d\uff0e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30a4\u30b3\u30f3\u306e\u8272\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u3044\u3044\u611f\u3058\u306b\u8868\u793a\uff0e)","image":"dmst_qroma.png","url":""},{"title":"2014 \u30c7\u30e2\u30b9\u30c8 Launcher \u30bf\u30a4\u30c8\u30eb","category":"Win32 API / Visual Studio (\u91cd\u8907\u3059\u308b\u304c\u3069\u3046\u3057\u3066\u3082\u8f09\u305b\u305f\u304b\u3063\u305f\uff0e\u30de\u30b9\u30b3\u30c3\u30c8\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e Chu \u304f\u3093)","image":"dmst_title.png","url":""},{"title":"Planetarium","category":"Win32 API / Wii \u30ea\u30e2\u30b3\u30f3 / Visual Studio (\u5927\u6614\u306b\u4f5c\u3063\u305f\u661f\u5ea7\u306e 4 \u4eba\u5bfe\u6226\u30b2\u30fc\u30e0\uff0eWii \u30ea\u30e2\u30b3\u30f3\u3067\u64cd\u4f5c\u3067\u304d\u308b\uff0e3D \u5ea7\u6a19\u8a08\u7b97\u3082\u81ea\u524d\uff0e)","image":"Planetarium.png","url":""},{"title":"Fourier","category":"Android App / Java / Canvas (FFT Visualizer \u3092 Android \u3067\u3084\u3063\u305f\u3082\u306e)","image":"Fourier.jpg","url":""},{"title":"Spline","category":"Android App / Java / Canvas (Catmull-Rom Spline \u66f2\u7dda\u3092\u5b9f\u88c5\u3057\u305f\u3082\u306e\uff0e\u30af\u30ea\u30c3\u30af\u3057\u305f\u70b9\u3092\u3064\u306a\u3050\u66f2\u7dda\u3092\u3069\u3093\u3069\u3093\u63cf\u3044\u3066\u304f\u308c\u308b)","image":"Catmull-Rom.jpg","url":""},{"title":"Box2D","category":"Android App / Java / Canvas / jBox2d (\u7269\u7406\u6f14\u7b97\uff0e\u30d5\u30ea\u30c3\u30af\u3067\u529b\u3092\u52a0\u3048\u3066\uff0c\u8ecc\u9053\u4e88\u6e2c\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\uff0e\u6b63\u65b9\u5f62\u304f\u3093\u306e\u76ee\u306f\u3044\u3044\u611f\u3058\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff0e)","image":"Box2D.jpg","url":""},{"title":"GridTbl","category":"Android App / Java / Canvas (\u81ea\u524d\u306e\u6642\u9593\u5272\u30a2\u30d7\u30ea\uff0e)","image":"GridTbl.png","url":""},{"title":"kinetics","category":"Win32 API / C++ / Visual Studio (\u4f53\u306b\u30bb\u30f3\u30b5\u30fc\u3092\u3064\u3051\u3066\u6295\u64f2\u904b\u52d5\u306e\u89e3\u6790\u3092\u3057\u305f\u3068\u304d\u306e\u3084\u3064\uff0e3D Visualizer)","image":"kinetics.png","url":""},{"title":"\u91d1\u661f\u3068\u5730\u7403\u306e\u516c\u8ee2\u8ecc\u9053\u304c\u63cf\u304f\u56f3\u5f62","category":"Desmos","image":"Venus.png","url":"https://www.desmos.com/calculator/ksmybe3rrv?lang=ja"},{"title":"\u30d6\u30ed\u30c3\u30af\u5d29\u3057 (by Haskell)","category":"HTML5 Canvas / Haskell","image":"blockHaskell.png","url":"http://ysmr-ry.hatenablog.com/entry/2017/01/19/094918"},{"title":"Globe","category":"HTML5 Canvas / JS (\u30e1\u30eb\u30ab\u30c8\u30eb\u56f3\u6cd5\u3067\u540c\u5fc3\u5186\u3092\u66f8\u304f\u3068\u5b9f\u969b\u306b\u306f\u3069\u3046\u306a\u308b\u304b\u3068\u3044\u3046\u306e\u304c\u8a71\u984c\u306b\u306a\u3063\u3066\u305f\u306e\u3067\u4f5c\u3063\u305f\uff0e\u4e2d\u5fc3\u306f\u5e73\u58cc\uff0e)","image":"Globe.png","url":"https://codepen.io/As2/full/jmRdoB"},{"title":"Prime Factorization Visualizer","category":"HTML5 Canvas","image":"primeFactorization.png","url":"https://codepen.io/As2/full/QgdWyX"},{"title":"Dijkstra Visualizer","category":"HTML5 Canvas / JS (Dijkstra \u6cd5\u306e Visualizer\uff0e)","image":"Dijkstra.png","url":"https://codepen.io/As2/full/Kvdoxd"},{"title":"Tokyo Metro Visualizer","category":"HTML5 Canvas","image":"Tokyo_Metro.png","url":""},{"title":"Hipplanetarium","category":"HTML5 Canvas","image":"hipplanetarium.png","url":"https://assqr.github.io/Hipplanetarium/"},{"title":"RainbowRing","category":"Shadertoy (RayMarching \u306e\u7df4\u7fd2)","image":"RainbowRing.png","url":"https://www.shadertoy.com/view/4tsczS"},{"title":"RayMarching Kado","category":"Shadertoy (RayMarching \u306e\u7df4\u7fd2\uff0e\u30a2\u30cb\u30e1\u6b63\u89e3\u3059\u308b\u30ab\u30c9\u306b\u30cf\u30de\u3063\u3066\u3044\u305f\u306e\u3067\uff0e)","image":"Kado.png","url":"https://www.shadertoy.com/view/ltfyWB"},{"title":"Ellipse RayMarching","category":"Shadertoy (RayMarching \u6559\u80b2\u7528)","image":"EllipseMarching.png","url":"https://www.shadertoy.com/view/XlScRh"},{"title":"Voronoi Visualizer","category":"HTML5 Canvas","image":"Voronoi.png","url":"https://assqr.github.io/Fortune/"},{"title":"Pytha","category":"HTML5 Canvas / Haskell (Haste \u306e\u7df4\u7fd2\u3068\u3057\u3066\u66f8\u3044\u305f\uff0e\u30d4\u30bf\u30b4\u30e9\u30b9\u306e\u5b9a\u7406\uff0e)","image":"pytha.png","url":"https://codepen.io/As2/full/OxBROm"},{"title":"Fourier Visualizer (FFT blog)","category":"HTML5 Canvas","image":"Fourier_Visualizer.png","url":"https://codepen.io/As2/full/yPaxGw/"},{"title":"Butterfly Diagram Maker (FFT blog)","category":"HTML5 Canvas","image":"Buttefly Diagram Maker.png","url":"https://codepen.io/As2/full/BmLOqY"},{"title":"MemPi","category":"HTML5 Canvas / JS (\u5186\u5468\u7387\u6697\u8a18\u7528)","image":"MemPi.png","url":"https://assqr.github.io/MemPi/"},{"title":"PondyRing","category":"Shadertoy (RayMarching \u306e\u7df4\u7fd2\uff0e\u30dd\u30f3\u30c7\u30ea\u30f3\u30b0\uff0e)","image":"PondyRing.png","url":"https://www.shadertoy.com/view/4l2BWw"},{"title":"\u7acb\u4f53\u5207\u65ad Visualizer","category":"HTML5 Canvas","image":"hexagonCube.png","url":"https://codepen.io/As2/full/zywEyL"},{"title":"Boys Surface","category":"Shadertoy (\u5c04\u5f71\u5e73\u9762\u3092\u53ef\u8996\u5316\u3057\u3088\u3046\u3068\u3057\u305f)","image":"BoysSurface.png","url":"https://www.shadertoy.com/view/tsj3zw"}]},"mottos":{"mottos":[]}}')}},[[11,1,2]]]);
//# sourceMappingURL=main.a2828aa6.chunk.js.map
"undefined"!=typeof console&&console.warn("dist/jquery.linkify.js is deprecated. Use linkify.js and linkify-jquery.js instead."),function(){"use strict";!function(e){function t(e,t){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],r=Object.create(e.prototype);for(var i in n)r[i]=n[i];return r.constructor=t,t.prototype=r,t}function n(e){e=e||{};for(var t=e.newLine||!1,n=e.ignoreTags||[],r=0;r<n.length;r++)n[r]=n[r].toUpperCase();return{attributes:e.linkAttributes||null,defaultProtocol:e.defaultProtocol||"http",events:e.events||null,format:e.format||o,validate:e.validate||a,formatHref:e.formatHref||o,newLine:e.newLine||!1,nl2br:!!t||e.nl2br||!1,tagName:e.tagName||"a",target:e.target||s,linkClass:e.linkClass||"linkified",ignoreTags:n}}function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e}function i(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1}function o(e){return e}function a(){return!0}function s(e,t){return"url"===t?"_blank":null}function u(){return function(e){e&&(this.v=e)}}function c(e){var n=e?{v:e}:{};return t(f,u(),n)}function l(e){return e instanceof m||e instanceof R}function p(){return function(e){this.j=[],this.T=e||null}}function h(e,t,n,r){for(var i=0,o=e.length,a=t,s=[],u=void 0;o>i&&(u=a.next(e[i]));)a=u,i++;if(i>=o)return[];for(;o-1>i;)u=new V(r),s.push(u),a.on(e[i],u),a=u,i++;return u=new V(n),s.push(u),a.on(e[o-1],u),s}var d=Object.freeze({normalize:n,resolve:r,contains:i}),f=u();f.prototype={toString:function(){return this.v+""}};var m=c(),g=c("@"),v=c(":"),y=c("."),b=c(),w=c(),x=c("\n"),C=c(),E=c("+"),_=c("#"),S=c(),k=c("?"),T=c("/"),M=c(),R=c(),A=c(),D=c("{"),O=c("["),I=c("("),N=c("}"),P=c("]"),j=c(")"),L={Base:f,DOMAIN:m,AT:g,COLON:v,DOT:y,PUNCTUATION:b,LOCALHOST:w,NL:x,NUM:C,PLUS:E,POUND:_,QUERY:k,PROTOCOL:S,SLASH:T,SYM:M,TLD:R,WS:A,OPENBRACE:D,OPENBRACKET:O,OPENPAREN:I,CLOSEBRACE:N,CLOSEBRACKET:P,CLOSEPAREN:j},$=u();$.prototype={type:"token",isLink:!1,toString:function(){for(var e=[],t=0;t<this.v.length;t++)e.push(this.v[t].toString());return e.join("")},toHref:function(){return this.toString()},toObject:function(){var e=arguments.length<=0||void 0===arguments[0]?"http":arguments[0];return{type:this.type,value:this.toString(),href:this.toHref(e)}}};var F=t($,u(),{type:"email",isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),B=t($,u(),{type:"text"}),U=t($,u(),{type:"nl"}),H=t($,u(),{type:"url",isLink:!0,toHref:function(){for(var e=arguments.length<=0||void 0===arguments[0]?"http":arguments[0],t=!1,n=!1,r=this.v,i=[],o=0;r[o]instanceof S;)t=!0,i.push(r[o].toString().toLowerCase()),o++;for(;r[o]instanceof T;)n=!0,i.push(r[o].toString()),o++;for(;l(r[o]);)i.push(r[o].toString().toLowerCase()),o++;for(;o<r.length;o++)i.push(r[o].toString());return i=i.join(""),t||n||(i=e+"://"+i),i},hasProtocol:function(){return this.v[0]instanceof S}}),q={Base:$,EMAIL:F,NL:U,TEXT:B,URL:H},z=p();z.prototype={defaultTransition:!1,on:function(e,t){if(e instanceof Array){for(var n=0;n<e.length;n++)this.j.push([e[n],t]);return this}return this.j.push([e,t]),this},next:function(e){for(var t=0;t<this.j.length;t++){var n=this.j[t],r=n[0],i=n[1];if(this.test(e,r))return i}return this.defaultTransition},accepts:function(){return!!this.T},test:function(e,t){return e===t},emit:function(){return this.T}};var V=t(z,p(),{test:function(e,t){return e===t||t instanceof RegExp&&t.test(e)}}),W=t(z,p(),{test:function(e,t){return e instanceof t}}),K="aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|avianca|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcg|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|local|locus|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|passagens|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|store|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telecity|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|viking|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|vuelos|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw".split("|"),Q="0123456789".split(""),Y="0123456789abcdefghijklmnopqrstuvwxyz".split(""),X=[" ","\f","\r","	","\x0B"],G=":",J=[],Z=function(e){return new V(e)},ee=L.DOMAIN,te=L.LOCALHOST,ne=L.NUM,re=L.PROTOCOL,ie=L.TLD,oe=L.WS,ae=Z(),se=Z(ne),ue=Z(ee),ce=Z(),le=Z(oe);ae.on("@",Z(L.AT)).on(".",Z(L.DOT)).on("+",Z(L.PLUS)).on("#",Z(L.POUND)).on("?",Z(L.QUERY)).on("/",Z(L.SLASH)).on(G,Z(L.COLON)).on("{",Z(L.OPENBRACE)).on("[",Z(L.OPENBRACKET)).on("(",Z(L.OPENPAREN)).on("}",Z(L.CLOSEBRACE)).on("]",Z(L.CLOSEBRACKET)).on(")",Z(L.CLOSEPAREN)).on([",",";","!",'"'],Z(L.PUNCTUATION)),ae.on("\n",Z(L.NL)).on(X,le),le.on(X,le);for(var pe=0;pe<K.length;pe++){var he=h(K[pe],ae,ie,ee);J.push.apply(J,he)}var de=h("file",ae,ee,ee),fe=h("ftp",ae,ee,ee),me=h("http",ae,ee,ee);J.push.apply(J,de),J.push.apply(J,fe),J.push.apply(J,me);var ge=de.pop(),ve=fe.pop(),ye=me.pop(),be=Z(ee),we=Z(re);ve.on("s",be).on(G,we),ye.on("s",be).on(G,we),J.push(be),ge.on(G,we),be.on(G,we);var xe=h("localhost",ae,te,ee);J.push.apply(J,xe),ae.on(Q,se),se.on("-",ce).on(Q,se).on(Y,ue),ue.on("-",ce).on(Y,ue);for(var Ce=0;Ce<J.length;Ce++)J[Ce].on("-",ce).on(Y,ue);ce.on("-",ce).on(Q,ue).on(Y,ue),ae.defaultTransition=Z(L.SYM);var Ee=function(e){for(var t=e.replace(/[A-Z]/g,function(e){return e.toLowerCase()}),n=e.length,r=[],i=0;n>i;){for(var o=ae,a=null,s=null,u=0,c=null,l=-1;n>i&&(s=o.next(t[i]));)a=null,o=s,o.accepts()?(l=0,c=o):l>=0&&l++,u++,i++;if(!(0>l)){i-=l,u-=l;var p=c.emit();r.push(new p(e.substr(i-u,u)))}}return r},_e=ae,Se=Object.freeze({State:V,TOKENS:L,run:Ee,start:_e}),ke=function(e){return new W(e)},Te=L.DOMAIN,Me=L.AT,Re=L.COLON,Ae=L.DOT,De=L.PUNCTUATION,Oe=L.LOCALHOST,Ie=L.NL,Ne=L.NUM,Pe=L.PLUS,je=L.POUND,Le=L.PROTOCOL,$e=L.QUERY,Fe=L.SLASH,Be=L.SYM,Ue=L.TLD,He=L.OPENBRACE,qe=L.OPENBRACKET,ze=L.OPENPAREN,Ve=L.CLOSEBRACE,We=L.CLOSEBRACKET,Ke=L.CLOSEPAREN,Qe=q.EMAIL,Ye=q.NL,Xe=q.TEXT,Ge=q.URL,Je=ke(),Ze=ke(),et=ke(),tt=ke(),nt=ke(),rt=ke(),it=ke(Ge),ot=ke(),at=ke(Ge),st=ke(Ge),ut=ke(),ct=ke(),lt=ke(),pt=ke(),ht=ke(Ge),dt=ke(Ge),ft=ke(Ge),mt=ke(),gt=ke(),vt=ke(),yt=ke(),bt=ke(),wt=ke(Qe),xt=ke(),Ct=ke(Qe),Et=ke(),_t=ke(),St=ke(),kt=ke(Ye);Je.on(Ie,kt).on(Le,Ze).on(Fe,et),Ze.on(Fe,et),et.on(Fe,tt),Je.on(Ue,nt).on(Te,nt).on(Oe,it).on(Ne,nt),tt.on(Ue,st).on(Te,st).on(Ne,st).on(Oe,st),nt.on(Ae,rt),yt.on(Ae,bt),rt.on(Ue,it).on(Te,nt).on(Ne,nt).on(Oe,nt),bt.on(Ue,wt).on(Te,yt).on(Ne,yt).on(Oe,yt),it.on(Ae,rt),wt.on(Ae,bt),it.on(Re,ot).on(Fe,st),ot.on(Ne,at),at.on(Fe,st),wt.on(Re,xt),xt.on(Ne,Ct);var Tt=[Te,Me,Oe,Ne,Pe,je,Le,Fe,Ue,Be],Mt=[Re,Ae,$e,De,Ve,We,Ke,He,qe,ze];st.on(He,ct).on(qe,lt).on(ze,pt),ut.on(He,ct).on(qe,lt).on(ze,pt),ct.on(Ve,st),lt.on(We,st),pt.on(Ke,st),ht.on(Ve,st),dt.on(We,st),ft.on(Ke,st),mt.on(Ve,st),gt.on(We,st),vt.on(Ke,st),ct.on(Tt,ht),lt.on(Tt,dt),pt.on(Tt,ft),ct.on(Mt,mt),lt.on(Mt,gt),pt.on(Mt,vt),ht.on(Tt,ht),dt.on(Tt,dt),ft.on(Tt,ft),ht.on(Mt,ht),dt.on(Mt,dt),ft.on(Mt,ft),mt.on(Tt,ht),gt.on(Tt,dt),vt.on(Tt,ft),mt.on(Mt,mt),gt.on(Mt,gt),vt.on(Mt,vt),st.on(Tt,st),ut.on(Tt,st),st.on(Mt,ut),ut.on(Mt,ut);var Rt=[Te,Ne,Pe,je,$e,Be,Ue];nt.on(Rt,Et).on(Me,_t),it.on(Rt,Et).on(Me,_t),rt.on(Rt,Et),Et.on(Rt,Et).on(Me,_t).on(Ae,St),St.on(Rt,Et),_t.on(Ue,yt).on(Te,yt).on(Oe,wt);var At=function(e){for(var t=e.length,n=0,r=[],i=[];t>n;){for(var o=Je,a=null,s=null,u=0,c=null,l=-1;t>n&&!(a=o.next(e[n]));)i.push(e[n++]);for(;t>n&&(s=a||o.next(e[n]));)a=null,o=s,o.accepts()?(l=0,c=o):l>=0&&l++,n++,u++;if(0>l)for(var p=n-u;n>p;p++)i.push(e[p]);else{i.length>0&&(r.push(new Xe(i)),i=[]),n-=l,u-=l;var h=c.emit();r.push(new h(e.slice(n-u,n)))}}return i.length>0&&r.push(new Xe(i)),r},Dt=q,Ot=Je,It=Object.freeze({State:W,TOKENS:Dt,run:At,start:Ot});Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var Nt=function(e){return At(Ee(e))},Pt=function(e){for(var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=Nt(e),r=[],i=0;i<n.length;i++)!n[i].isLink||t&&n[i].type!==t||r.push(n[i].toObject());return r},jt=function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=Nt(e);return 1===n.length&&n[0].isLink&&(!t||n[0].type===t)};e.find=Pt,e.inherits=t,e.options=d,e.parser=It,e.scanner=Se,e.test=jt,e.tokenize=Nt}(window.linkify=window.linkify||{})}(),function(e,t,n){var r=function(t,n){"use strict";function r(e,t,n){var r=n[n.length-1];e.replaceChild(r,t);for(var i=n.length-2;i>=0;i--)e.insertBefore(n[i],r),r=n[i]}function i(e,t,n){for(var r=[],i=0;i<e.length;i++){var o=e[i];if("nl"===o.type&&t.nl2br)r.push(n.createElement("br"));else if(o.isLink&&c.resolve(t.validate,o.toString(),o.type)){var a=o.toHref(t.defaultProtocol),s=c.resolve(t.format,o.toString(),o.type),u=c.resolve(t.formatHref,a,o.type),l=c.resolve(t.attributes,a,o.type),p=c.resolve(t.tagName,a,o.type),h=c.resolve(t.linkClass,a,o.type),d=c.resolve(t.target,a,o.type),f=c.resolve(t.events,a,o.type),m=n.createElement(p);if(m.setAttribute("href",u),m.setAttribute("class",h),d&&m.setAttribute("target",d),l)for(var g in l)m.setAttribute(g,l[g]);if(f)for(var v in f)m.addEventListener?m.addEventListener(v,f[v]):m.attachEvent&&m.attachEvent("on"+v,f[v]);m.appendChild(n.createTextNode(s)),r.push(m)}else r.push(n.createTextNode(o.toString()))}return r}function o(e,t,n){if(!e||e.nodeType!==p)throw new Error("Cannot linkify "+e+" - Invalid DOM Node type");var a=t.ignoreTags;if("A"===e.tagName||c.contains(a,e.tagName))return e;for(var s=e.firstChild;s;){switch(s.nodeType){case p:o(s,t,n);break;case h:var d=s.nodeValue,f=u(d);if(0===f.length||1===f.length&&f[0]instanceof l)break;var m=i(f,t,n);r(e,s,m),s=m[m.length-1]}s=s.nextSibling}return e}function a(t,n){var r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];try{r=r||e&&e.document||global&&global.document}catch(i){}if(!r)throw new Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.");return n=c.normalize(n),o(t,n,r)}function s(t){function n(e){return e=a.normalize(e),this.each(function(){a.helper(this,e,r)})}var r=arguments.length<=1||void 0===arguments[1]?null:arguments[1];t.fn=t.fn||{};try{r=r||e&&e.document||global&&global.document}catch(i){}if(!r)throw new Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the second argument to linkify/jquery");"function"!=typeof t.fn.linkify&&(t.fn.linkify=n,t(r).ready(function(){t("[data-linkify]").each(function(){var e=t(this),n=e.data(),r=n.linkify,i=n.linkifyNlbr,o={linkAttributes:n.linkifyAttributes,defaultProtocol:n.linkifyDefaultProtocol,events:n.linkifyEvents,format:n.linkifyFormat,formatHref:n.linkifyFormatHref,newLine:n.linkifyNewline,nl2br:!!i&&0!==i&&"false"!==i,tagName:n.linkifyTagname,target:n.linkifyTarget,linkClass:n.linkifyLinkclass,validate:n.linkifyValidate,ignoreTags:n.linkifyIgnoreTags},a="this"===r?e:e.find(r);a.linkify(o)})}))}var u=n.tokenize,c=n.options,l=n.parser.TOKENS.TEXT,p=1,h=3;a.helper=o,a.normalize=c.normalize;try{!define&&(e.linkifyElement=a)}catch(d){}return s}(n,t);"function"!=typeof n.fn.linkify&&r(n)}(window,linkify,jQuery);
window.Fever={},Fever.mobileDetect=function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e},Fever.tmpl=function(e,r){return doT.template(e)(r)},Fever.mbStrlen=function(e){for(var r=0,o=0;o<e.length;o++){var n=e.charCodeAt(o);n>=1&&n<=126||65376<=n&&n<=65439?r++:r+=2}return r},Fever.showLoading=function(e){$("#loadingIcon").show()},Fever.hideLoading=function(){$("#loadingIcon").hide()},Fever.checkHTML5Support=function(e){function r(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}return!!function(){try{return localStorage.setItem("feverTest","feverTest"),localStorage.removeItem("feverTest"),!0}catch(e){return!1}}()&&(!(13==e&&!function(){return"geolocation"in navigator}())&&(!(15==e&&!function(){return!(!r()||"function"!=typeof document.createElement("canvas").getContext("2d").fillText)}())&&!(26==e&&!r())))},Fever.wrapUrl=function(e,r){var o=Fever.getQuery(),n=[];o.scenes&&n.push("scenes="+o.scenes),o.test&&n.push("test="+o.test),o.parent&&n.push("parent="+o.parent);var t=n.join("&");return t&&(-1!=e.indexOf("?")?e+="&"+t:e+="?"+t),r&&(e+=r),e},Fever.redirectUrl=function(e,r){Fever.showLoading(),e=$BASEURI+e,window.location.href=Fever.wrapUrl(e,r)},Fever.trackPV=function(e){e&&($.isFunction(window.ga)?(ga("send","pageview",e),"whitecard"==$SITE&&ga("newTracker.send","pageview",e)):(_gaq=window._gaq||[],_gaq.push(["_trackPageview",e])))},Fever.isFBReady=function(){return"object"==typeof window.FB&&window.fbHasInit},Fever.linkify=function(e){var r,o=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;r=e.replace(o,'<a href="$1" target="_blank">$1</a>');var n=/(^|[^\/])(www\.[\S][^<]+(\b|$))/gim;r=r.replace(n,'$1<a href="http://$2" target="_blank">$2</a>');var t=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;return r=r.replace(t,'<a href="mailto:$1">$1</a>')},Fever.stripTags=function(e,r){var o,n;if(!e)return"";if(e=e.replace(/<style([\s\S]*?)style>/gi,""),e=e.replace(/<\w:([\s\S]*?)<\/\w:[^>]+>/gi,""),e=e.replace(/<!--([\s\S]*?)-->/gi,""),r){n=r.split("|");for(var t=0,i=n.length;t<i;t++)n[t]="(/?"+n[t]+"\\b)";r=n.join("|"),o=new RegExp("<(?!("+r+"))[^>]+>","gi")}else o=/<[^>]+>/gi;return e=$.trim(e.replace(o,"")),e=e.replace(/\s+\r/g,"\r"),e=e.replace(/\r\n|\n/g,"<br>"),e=e.replace(/\s+|(&nbsp;)+/g," ")},Fever.getQuery=function(e,r){var o,n=e||window.location.search,t={};if(n){var i=n.indexOf("?");n=n.substr(i+1);for(var a=n.split("&"),c=0,s=a.length;c<s;c++)o=a[c].split("="),t[o[0]]=decodeURIComponent(o[1])}return r?t[r]:t},Fever.ensureCb=function(e,r,o,n){function t(){return i()?(clearTimeout(a),void r()):n&&c++>=n?void clearTimeout(a):void(a=setTimeout(t,o))}n=n||10,o=o||400;var i,a,c=0;if($.isFunction(e))i=e;else{if("string"!==$.type(e))return;i=new Function("return "+e)}a=setTimeout(t,o)},Fever.canUseFB=function(e){Fever.ensureCb(Fever.isFBReady,function(){e()})},Fever.checkLogin=function(e){Fever.ensureCb(Fever.isFBReady,function(){FB.getLoginStatus(function(r){"connected"!==r.status?$(".login-dialog").show():e()},!0)})},Fever.fbLogin=function(e,r){Fever.showLoading(),e=e||$BASE_SCOPE,"plugin"==Fever.getQuery().scenes?window.open(window.location.href.replace(/scenes=plugin&?/,""),"_blank"):"pc"==Fever.getQuery().scenes?window.open(window.location.href.replace(/scenes=pc&?/,""),"_blank"):(localStorage.redirect_uri=r||window.location.href,window.location.href="https://m.facebook.com/v3.1/dialog/oauth?auth_type=rerequest&scope="+e+"&response_type=token&client_id="+$APPID+"&redirect_uri="+$BASEURI+"/m/login")},Fever.fbLogout=function(){function e(){$.ajax({url:"/m/services/loginOut.php",success:function(){r.pclogout?window.location.href=window.location.href.replace("pclogout=1",""):window.location.reload()}})}var r=Fever.getQuery();Fever.showLoading(),Cookies.expire("fb_access_token"),Fever.ensureCb(Fever.isFBReady,function(){FB.getLoginStatus(function(r){r&&"connected"===r.status?FB.logout(function(){e()}):e()})})},Fever.getPrizeRedirect=function(e){switch(e.prize_type){case 2:var r="/m/award?promoid="+e.promoid+"&winnerid="+e.winner_id+"&step=userAward";break;case 3:var r="/m/award?promoid="+e.promoid+"&winnerid="+e.winner_id+"&step=scratchCard";break;default:var r="/m/promotion_join?promoid="+e.promoid+"&step=joinResult";23==e.game1&&(url+="&uidcode="+e.uid_code)}return r},Fever.toShareStep=function(e){e.game1=$GAME1,e.promoid=$PROMOID;var r=e.redirectUrl?e.redirectUrl:Fever.getPrizeRedirect(e);localStorage[e.promoid+"_share_redirect"]=r;var o=1==e.joinPhase?1:0,n="/m/promotion_join?promoid="+e.promoid+"&step=joinShare&serialno="+e.serialno+"&phase="+o;Fever.redirectUrl(n)},Fever.toCheckStep=function(e){var r="/m/promotion_join?promoid="+$PROMOID+"&step=joinCheck";Fever.redirectUrl(r)},Fever.afterJoin=function(e){Fever.toCheckStep(e)},Fever.joinPromotion=function(e,r,o){e.promoid=$PROMOID,e.game1=$GAME1,e.brandurl=$BRANDURL,1!=o&&Fever.showLoading(),$.ajax({url:"/m/services/join.php",type:"POST",dataType:"json",data:e}).done(function(e){Fever.hideLoading(),r(e)})},Fever.customShare=function(e,r){FB.ui({method:"feed",caption:e,link:r},function(e){window.location.reload()})},Fever.trackLikeEvent=function(){Fever.canUseFB(function(){var e=Fever.getQuery();FB.Event.subscribe("edge.create",function(r){var o=e.promoid,n=e.fvref||"ROW-MB";ga("send","event",n,"like",o),"whitecard"==$SITE&&ga("newTracker.send","event",n,"like",o)})})},Fever.initCheckInput=function(){$(".check-input").on(Fever.Click,function(){$(this).toggleClass("checked");var e=$(this).hasClass("checked")?1:0;$(this).data("value",e)})},Fever.initRadioInput=function(){$(".radio-input").on(Fever.Click,function(){var e=$(this);e.hasClass("checked")||(e.siblings(".radio-input").removeClass("checked"),e.addClass("checked"))})},Fever.fetchThumbImage=function(e,r,o){function n(){var r=$.ajax({type:"HEAD",cache:!1,url:"https://s3-ap-southeast-1.amazonaws.com/picture-thumb/"+e});r.always(function(){var o=r.getResponseHeader("content-type");console.log(o),"image/jpeg"!=o?n():t.src="https://s3-ap-southeast-1.amazonaws.com/picture-thumb/"+e})}var t=new Image;t.crossOrigin="Anonymous",n(),t.onload=function(){o(t)}},Fever.scrollToTop=function(){document.body.scrollTop=document.documentElement.scrollTop=0,window.parent.postMessage("feverScroll:0","*")},Fever.initNav=function(){$(".nav-item").on(Fever.Click,function(){var e=$(this).data("target");$(this).data("url")&&(window.location.href=$(this).data("url")),"entryList"==e?window.location.href="/works-"+$PROMOID:Fever.redirectUrl("/m/promotion_detail?pageType="+e+"&promoid="+$PROMOID)})},Fever.topRedirectUrl=function(e){window.top.location.href=$BASEURI+e},Fever.broadcastAPI=function(e){window.parent.postMessage(e,"*")},Fever.receiveAPI=function(){window.addEventListener("message",function(e){if(e.source==window.parent){var r=e.data.split(":");$(window).trigger(r[0],[r[1]])}},!1)},Fever.receiveEvents=function(){$(window).on("feverWorksParentScroll",function(e,r){Fever.worksParentScrollValue=r}.bind(this)),$(window).on("feverWorksFrameOffset",function(e,r){Fever.worksFrameOffsetValue=r}.bind(this)),$(window).on("feverJoinParentScroll",function(e,r){Fever.joinParentScrollValue=r}.bind(this)),$(window).on("feverJoinFrameOffset",function(e,r){Fever.joinFrameOffsetValue=r}.bind(this))},$(function(){if(!Fever.checkHTML5Support())return void $(".no-support-html5").show();Fever.isMobile=Fever.mobileDetect(),Fever.queryParams=Fever.getQuery(),Fever.scenes=Fever.queryParams.scenes,window.self!==window.top?Fever.inFrame=!0:Fever.inFrame=!1,Fever.isMobile?(Fever.Click="tap",Fever.TouchStart="touchstart",Fever.TouchMove="touchmove",Fever.TouchEnd="touchend"):(Fever.Click="click",Fever.TouchStart="mousedown",Fever.TouchMove="mousemove",Fever.TouchEnd="mouseup"),Fever.initCheckInput(),Fever.initRadioInput(),Fever.trackLikeEvent(),Fever.initNav(),Fever.receiveAPI(),Fever.receiveEvents()});
//# sourceMappingURL=common.min.js.map

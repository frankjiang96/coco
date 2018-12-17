function UserAward(){if(this.$wrap=$("#userAward"),!this.$wrap.length)return null;this.promoid=$PROMOID,this.game=this.$wrap.data("game"),this.uid=this.$wrap.data("uid"),this.fever_uid=this.$wrap.data("fever-uid"),this.prizeid=this.$wrap.data("prizeid"),this.winnerid=this.$wrap.data("winnerid"),this.$form=$(".contact-form",this.$wrap),this.needContact=this.$wrap.data("need-contact"),this.uidcode=this.$wrap.data("uidcode"),this.init()}UserAward.prototype={init:function(){this.bindEvent()},bindEvent:function(){this.$wrap.on(Fever.Click,".view-result",{self:this},this.viewResult),this.$wrap.on(Fever.Click,".btn-exchange",{self:this},this.exchange),this.$wrap.on(Fever.Click,".btn-close",this.closeDialog),this.$wrap.on(Fever.Click,".btn-collect",this.showCollectDialog),this.$wrap.on(Fever.Click,".btn-comment",this.showCommentDialog),this.$wrap.on(Fever.Click,".btn-add-contact, .add-code",this.showContactDialog),this.$wrap.on(Fever.Click,".qr-url-wrapper",this.showQrUrl),this.$wrap.on(Fever.Click,".collect-dialog .btn-to-custom-email",{self:this},this.emailToCustom),this.$wrap.on(Fever.Click,".collect-dialog .btn-to-facebook-email",{self:this},this.emailToFB),this.$wrap.on(Fever.Click,".contact-dialog .btn-send",{self:this},this.saveContact),this.$wrap.on(Fever.Click,".contact-dialog .btn-cancel",{self:this},this.cancelContact),this.$wrap.on(Fever.Click,".comment-dialog .btn-send",{self:this},this.saveComment),this.$wrap.on(Fever.Click,".comment-dialog .btn-cancel",{self:this},this.cancelComment),this.$wrap.on(Fever.Click,".btn-exchange-offline",{self:this},this.offlineExchange),this.$wrap.on(Fever.Click,".btn-exchange-online",{self:this},this.onlineExchange)},showQrUrl:function(){$(".qr-url").toggleClass("big")},viewResult:function(e){var i=e.data.self;34==i.game?Fever.redirectUrl("/m/promotion?promoid="+i.promoid):Fever.redirectUrl(i.$wrap.data("result-url"))},exchange:function(e){var i=e.data.self;if(!$(this).hasClass("btn-disabled")){if(1==i.needContact&&""==$(".action-area").data("feat-name"))return void i.showContactDialog();$(".exchange-dialog").show(),Fever.scrollToTop()}},offlineExchange:function(e){var i=e.data.self;if(!$(this).hasClass("btn-disabled"))return 1==i.needContact&&""==$(".action-area").data("feat-name")?void i.showContactDialog():void(confirm(__("common","sureExchange")+"\n"+__("common","sureExchange2"))&&(Fever.showLoading(),$.ajax({url:"/m/services/setAward.php",type:"POST",dataType:"json",data:{param:"is_awarded",promoid:i.promoid,winnerid:i.winnerid}}).done(function(){window.location="www.google.ca"}))&&(window.location="award-done.htm"))},onlineExchange:function(e){var i=e.data.self;if(!$(this).hasClass("btn-disabled")){if(1==i.needContact&&""==$(".action-area").data("feat-name"))return void i.showContactDialog();var a=$(this).data("url");window.open(a,"_blank")}},closeDialog:function(){$(this).parents(".dialog").hide()},showCollectDialog:function(){$(".collect-dialog").show(),Fever.scrollToTop()},emailToCustom:function(e){e.data.self;window.open($(this).data("url"),"_blank")},emailToFB:function(e){var i=e.data.self;Fever.showLoading(),$.ajax({url:"/m/services/emailPrize.php",type:"POST",dataType:"json",data:{promoid:i.promoid,winnerid:i.winnerid}}).done(function(e){Fever.hideLoading(),e.success&&($(".email-ok").show(),setTimeout(function(){$(".email-ok").hide()},2e3))})},showContactDialog:function(){$(this).hasClass("btn-disabled")||($(".contact-dialog").show(),Fever.scrollToTop())},showCommentDialog:function(){$(".comment-dialog").show(),Fever.scrollToTop()},verify:function(){var e={verify:!0},i=this.$form.find('input[name="name"]').val(),a=this.$form.find('input[name="phone"]').val(),t=this.$form.find('input[name="email"]').val(),n=this.$form.find("input[name=zipCode]").val(),o=this.$form.find('textarea[name="address"]').val();if(""==i)return{verify:!1,message:__("common","name")};if(""==a)return{verify:!1,message:__("common","phone")};if(""==t)return{verify:!1,message:__("common","email")};if(!/^[-\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.exec(t))return{verify:!1,message:"Email "+__("common","format")};if(""==o)return{verify:!1,message:__("common","addr")};var s=this.$form.find('input[name="identity"]'),r="";if(s.length>0){if(""==s.val())return{verify:!1,message:__("common","identity")};var d=/^[a-zA-Z]{1}[1-2]{1}[0-9]{8}$/;if("zh_tw"==$LANG&&!d.exec(s.val()))return{verify:!1,message:__("common","identity2")};r=s.val()}e.uname=i,e.tel=a,e.mail=t,e.addr=o,e.zipCode=n,e.identity=r;var l=$(".feat",this.$wrap).val();return e.feat=l,e},saveContact:function(e){var i=e.data.self,a=$(this);if(!a.hasClass("btn-disabled")){var t={promoid:i.promoid,prizeid:i.prizeid,winnerid:i.winnerid,uidcode:i.uidcode},n=i.verify();if(!n.verify)return void alert(n.message);a.addClass("btn-disabled"),t.uname=n.uname||"",t.tel=n.tel||"",t.mail=n.mail||"",t.addr=n.addr||"",t.zipCode=n.zipCode||"",t.feat=n.feat,t.fever_uid=i.fever_uid,t.identity=n.identity||"",Fever.showLoading(),$.ajax({url:"/m/services/feat.php",type:"POST",dataType:"json",data:t}).done(function(e){Fever.hideLoading(),e.success&&($(".send-ok").show(),setTimeout(function(){window.location.reload()},500))})}},cancelContact:function(e){$(".contact-dialog").hide()},saveComment:function(e){var i=e.data.self,a={promoid:i.promoid,prizeid:i.prizeid,winnerid:i.winnerid,feat:$(".comment-dialog .feat").val(),fever_uid:i.fever_uid};Fever.showLoading(),$.ajax({url:"/m/services/feat.php",type:"POST",dataType:"json",data:a}).done(function(e){Fever.hideLoading(),e.success&&($(".send-ok").show(),setTimeout(function(){window.location.reload()},500))})},cancelComment:function(){$(".comment-dialog").hide()}},$(function(){new UserAward});
//# sourceMappingURL=user-award.min.js.map

;(function($){
var Touch = function (id , opt){
	this.fu=$(id)
	this.ul=opt.ul;
	this.title=opt.title;
	this.nums=opt.nums;
	this.async=opt.async;
	this.tian=opt.tian;

	this.offleft=0;
	this.num1=0;
	this.startX=0;
	this.moveX=0;
	
	this.zhu=0;
	this.zongw=this.ul.get(0).clientWidth-this.ul.find(".presice_first").get(0).clientWidth*2

	if(this.async){
		this.zhi=0;
	}
	else{
		this.zhi=1;
	}
	this.init()
	
}

Touch.prototype={
	init : function(){
		this.timer=null;
		this.start()//点击停止
		this.end()
	},
	start : function(){
		var that=this;

		that.fu.on("touchstart",function(e){
			that.startX=e.touches[0].pageX;
			
			that.offleft=that.ul.get(0).offsetLeft;

			that.move()//调用滑动
			
		})
	},
	move : function(){
		var that=this;
		that.fu.on("touchmove",function(e){	
			that.moveX=e.touches[0].pageX;

			var zhi=(that.startX-that.moveX);

			/*if(that.ul.get(0).offsetLeft<=-that.zongw){

				zhi=that.zongw	
			}*/

			if(that.async){
				if(that.shu!=Number(Math.floor(zhi/6))){

					that.shu=Number(Math.floor(zhi/6));				
				}

				var bian=Number(that.zhi)+that.shu*100;
				that.title.val(bian)
			}
			else{
				if(that.shu!=Number(Math.floor(zhi/11))){

					that.shu=Number(Math.floor(zhi/11));				
				}

				var bian=Number(that.zhi)+that.shu*1;

				if(bian>=that.tian){
					bian=that.tian
				}
				that.title.val(bian)
			}

			//移动
			that.dong(bian,zhi)			
		})
	},
	dong : function(bian,zhi){
		//是否需要渲染
		if(this.async){
			if(bian<0){		
				this.title.val("0");	
				this.ul.css("margin-left","0px");
				return false;
			}
			else{
				//需要渲染
				this.ul.css("margin-left",(this.offleft-zhi)+"px");
			}
		}
		else{
			if(bian<0){		
				this.title.val("1");	
				this.ul.css("margin-left","0px");
				return false;
			}
			else{
				//往右		
				if(zhi>0){
					if(this.ul.get(0).offsetLeft<=-this.zongw){

						this.ul.css("margin-left",-this.zongw+"px");	
					}
					else{
						this.ul.css("margin-left",(this.offleft-zhi)+"px");
					}	
				}
				//往左
				else{
					this.ul.css("margin-left",(this.offleft-zhi)+"px");
				}
			}
		}
	},
	big : function(shu){
		var ge=Math.ceil(shu/10);
			//往右滑动
			if(ge>0){
				for(var i=0;i<ge;i++){
					var str="";
					var newli=document.createElement("li");
					str+="<span class='presiceLi_num'>"+this.nums+"</span>";

						for(var j=1;j<9;j++){
							if(j==1){
								str+='<b class="presiceLi_first"></b>'
							}
							else if(j==5){
								str+='<b class="presiceLi_center"></b>'
							}
							str+='<b></b>';
						}	
						this.nums=this.nums+1000;

					$(newli).html(str)
					$(".presiceLi_num").each(function(i,v){
						$(this).css("margin-left","-"+($(this).width()/2)+"px")
					
					})

					$("#presice_nav .precise_ul").append($(newli));
				}
			}
			//往左滑动
			else{
				for(var i=0;i<Math.abs(ge);i++){
					$("#presice_nav .precise_ul li:last-child").remove()
					this.nums=this.nums-1000;
				}
			}
	},
	end : function(){
		var that=this;
		that.fu.on("touchend",function(){
			that.zhi=that.title.val();//设置每次的最终数值

			if(that.zhi<=0){
				that.ul.css("margin-left","0px");
			}
			else{

				if(that.async){

					that.big(that.shu)
					that.ul.css("margin-left",(that.offleft-that.shu*6)+"px");
					
				}
				else{

					if(that.ul.get(0).offsetLeft<=-that.zongw){

						that.ul.css("margin-left",-that.zongw+"px");
						that.shu=that.tian;
					}
					else if(that.zhi<=1){
						that.ul.css("margin-left","0px");
						that.shu=1;
					}
					else{
						that.ul.css("margin-left",(that.offleft-that.shu*11)+"px");
					}	
				}
				
			}
		})
	}
}

$.fn.Touch=function(opt){
	new Touch(this.selector,opt)
}
})(Zepto)

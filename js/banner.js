;(function($){


var Lunbo = function (id , opt){
	this.fu=$(id)
	this.ul=opt.ul;
	this.ol=opt.ol;
	this.len=opt.len;
	this.w=opt.w;
	this.num=opt.num;
	this.init()

	console.log(this.w)
	
}

Lunbo.prototype={
	init : function(){
		this.timer=null;
		this.autoplay()//自动轮播
		//this.start()//点击停止
		//this.end()
		//this.stop()
	},
	autoplay : function(){
		this.auto_ul ()
	},
	auto_ul : function(){
		var that=this;

		that.timer=setInterval(function(){
			that.num++;
			that.auto_dong(that.num)
		},2000)
	},
	auto_dong:function(num){
		var that=this;
			if(num<that.len){
				that.ul.animate({
					"-webkit-transform":"translate(-"+(num*that.w)+"px)"
				},1000,"ease")
				if(that.ol){
					that.ol.find("li").eq(that.num).addClass("on").siblings().removeClass("on")
				}

				
			}
			else{
				that.ul.find("li").eq(0).clone().appendTo(that.ul)

				if(that.ol){
					that.ol.find("li").eq(0).addClass("on").siblings().removeClass("on")
				}

				that.ul.animate({
					"-webkit-transform":"translate(-"+(that.len*that.w)+"px)"
				},1000,"ease",function(){
					that.ul.find("li:last-child").remove()
					that.ul.css({"-webkit-transform":"translate(-0px)"})
					that.num=0;
				})
			}
	},
	start : function(){
		var that=this;
		that.fu.on("touchstart",function(e){
			e.preventDefault();
			clearInterval(that.timer)

			that.move()
		})
	},
	move : function(){
		var that=this;
		that.fu.on("swipeLeft",function(){	
			that.num++;	
			console.log("dff")
			that.auto_dong(that.num)

		})
	},
	end : function(){
		var that=this;
		that.fu.on("touchend",function(){
			that.auto_ul ()
		})
	}
}

$.fn.Lunbo=function(opt){
	new Lunbo(this.selector,opt)
}
})(Zepto)

/*2017-01-10 19:44:41

var num=0;
var width   =  $(".list li")[0].clientWidth;
function play(){
	$(".list").animate({   
		translate:-width+"px"
		}, 2000, 'ease',function(){
		$(".list").animate({
		translate:"0px"
		},0,'ease',function(){
			play();
		});
		$(".list").find("li").eq(0).appendTo(".list");
	})
	num++;
	if (num==$("ol").find("li").length) {
		num=0;
	}
	$("ol").find("li").eq(num).addClass('li').siblings().removeClass("li");
}
setTimeout(function(){
	play();
},2000)*/
var wid=$(".presice_con .cont").get(0).clientWidth;
var len=Math.ceil(wid/55)+5;
var num=0;
var str="<li class='presice_first'></li>";

	for(var i=0;i<len;i++){
		str+="<li><span class='presiceLi_num'>"+num+"</span>";

			for(var j=1;j<9;j++){
				if(j==1){
					str+='<b class="presiceLi_first"></b>'
				}
				else if(j==5){
					str+='<b class="presiceLi_center"></b>'
				}
				
				str+='<b></b>';
			}	
			num=num+1000;


		str+="</li>";
	}
$("#presice_nav .precise_ul").html(str);

$("#presice_nav").Touch({
	ul:$("#presice_nav .precise_ul"),
	title:$("#presiceTh"),
	nums:num,
	async:true
})


//月份  天数

function xuanran(){
	var text=$("#qiehuan").find(".on").text()
	if(text=="天"){
		var tian=31;
		var len1=tian/3;
	}
	else{
		var tian=12;
		var len1=tian/3;
	}
	var num1=1;
	var str1="<li class='presice_first'></li>";

		for(var i=0;i<len1;i++){
			

				if(i<len1-1){
					str1+="<li><span class='presiceLi_num'>"+num1+"</span>";
					for(var j=1;j<3;j++){
						if(j==1){
							str1+='<b class="presiceLi_first"></b>'
						}
						
						str1+='<b></b>';
					}	

					str1+="</li>";
				}
				else{
					str1+="<li class='presice_last'>"+
							"<span class='presiceLi_num'>"+num1+"</span>"+
							'<b class="presiceLi_first"></b></li>'+
						"<li class='presice_first'></li>";	
				}	
				num1=num1+3;	
		}

	$("#presice_navtian .precise_ul").html(str1);
		/**
	 * 每个数值的位置定位
	 */
	$(".presiceLi_num").each(function(i,v){
		$(this).css("margin-left","-"+($(this).width()/2)+"px")

	})

	$(".presice_first").css("width",wid/2+"px")

	$("#presice_navtian").Touch({
		ul:$("#presice_navtian .precise_ul1"),
		title:$("#presiceTh1"),
		nums:num1,
		async:false,
		tian:tian
	})
}

xuanran()




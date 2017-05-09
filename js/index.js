var swiper = new Swiper('#m_banner', {
		pagination: '.swiper-pagination',
        paginationClickable: true,//分页器可以控制图片
        spaceBetween:0,//两张图片之间的距离
        centeredSlides: true,
        autoplay: 3000,//动画间隔时间
        speed:2000,//动画完成时间
        autoplayDisableOnInteraction:false,//手指拖动过后是否 继续执行动画 false继续 ture不执行
        //grabCursor:true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        loop:true//是否自动播放
    });


new Swiper('#huan', {
        slidesPerView:2.5,
        spaceBetween:0,
        freeMode: true
});

new Swiper('#jie', {
        slidesPerView:2.5,
        spaceBetween:0,
        freeMode: true
});



new IScroll('#wrapper', { 
	//scrollbars:false,
		/*mouseWheel:false,
		scrollbars:false,*/
		scrollX:0,
		freeScroll:true,
		fadeScrollbars:false
		//freeScroll: true
	 });
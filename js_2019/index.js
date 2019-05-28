$(function() {
	$('.header .dropdown-menu .dropdown-menu-wrap').width($('.header .dropdown-menu .dropdown-menu-wrap>div').length *
		235 + ($('.header .dropdown-menu .dropdown-menu-wrap>div').length - 1) * 140);
	$('.dropdown-menu').hover(function(e) {
		e.stopPropagation();
		$('.header .dropdown-menu .dropdown-menu-wrap').stop().slideDown(300);
	},function(e){e.stopPropagation();
			$('.header .dropdown-menu .dropdown-menu-wrap').stop().slideUp(300);
	});
	$(document).click(function(event) {
		var _con = $('.header .dropdown-menu'); // 设置目标区域
		if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
			$('.header .dropdown-menu .dropdown-menu-wrap').slideUp(300);
		}
	});

})

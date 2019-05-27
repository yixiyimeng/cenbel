$('.dropdown-menu').hover(function() {
			event.stopPropagation();
			$('.header .dropdown-menu .dropdown-menu-wrap').slideToggle(300);
		});
		$(document).click(function(event) {
			var _con = $('.header .dropdown-menu'); // 设置目标区域
			if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
				$('.header .dropdown-menu .dropdown-menu-wrap').slideUp(300);
			}
		});
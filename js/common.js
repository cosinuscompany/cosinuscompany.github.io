$(document).ready(function() {

	$(".auth_button").click(function() {
		$(this).next().slideToggle();
	});

	$('.main_menu_button').click(function(){
		if ($('.first').is(':visible')) {
			$('.main_menu').css("border-radius", "5px");
			$('.top_contacts').css("border-radius", "0px 5px 5px 0px");

		}
		else {
			$('.main_menu').css("border-radius", "5px 5px 0px 0px");
			$('.top_contacts').css("border-radius", "0px 5px 0px 5px");
			$('.first').css("border-radius", "0px 0px 5px 5px");
			$('li').css("border-radius", "5px");
		}
	});
	$('.main_menu_tel').click(function() {
		if ($('.second').is(':visible')) {
			$('.main_menu').css("border-radius", "5px");
			$('.top_contacts').css("border-radius", "0px 5px 5px 0px");
		}
		else {
			$('.main_menu').css("border-radius", "5px 5px 0px 0px");
			$('.second').css("border-radius", "0px 0px 5px 5px");
			$('.top_contacts').css("border-radius", "0px 5px 0px 5px");
		}
	});
	$('.auth_button').click(function() {
		if ($('.top_links').is(':visible')) {
			$('.top_links').css("border-radius", "0px 0px 5px 5px");

		}
		else {
			$('.main_menu').css("border-radius", "5px 5px 0px 0px");
			$('.second').css("border-radius", "0px 0px 5px 5px");
			$('.top_contacts').css("border-radius", "0px 5px 0px 5px");
		}
	});

	$('.link').click(function(e) {
    	e.preventDefault();
    	var curBlock = $(this).siblings('.splCont');
    	$('.splCont').not(curBlock).hide();
    	curBlock.slideToggle();
	});

	

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
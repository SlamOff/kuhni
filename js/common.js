$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
 	//style
 	$('.style .style_buttons button').on('click', function(){
 		$('.style .style_buttons button').removeClass('active');
 		$(this).addClass('active');
 		$('.style_photo img').attr('src', '12');
 	});
	// toggle_btn
	$('.sandwich').click(function() {
		$('.sandwich').toggleClass('active');
	});
	$('.toggle_btn').click(function(){
		if($('header nav').is(':visible')) {
			$('header nav').fadeOut(300);
		} else {
			$('header nav').fadeIn(300);
		};
	});
	// ScrollTo
	$('.scrollto').mPageScroll2id();

	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});


	$('#tabs').tabs();
	//slick carousel
	$('.classic_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.classic_prev',
		nextArrow: '.classic_next',
		centerMode: true,
		centerPadding: 0,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.modern_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.modern_prev',
		nextArrow: '.modern_next',
		centerMode: true,
		centerPadding: 0,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.review_prev',
		nextArrow: '.review_next',
		centerMode: true,
		centerPadding: 0,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.salon_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.salon_prev',
		nextArrow: '.salon_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	//validation
	$('#mainForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#classicForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#modernForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#planForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#catalogForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#styleForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#uncostForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#certForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/
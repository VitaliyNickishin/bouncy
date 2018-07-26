$(document).ready(function(){

/*стрелка прокрутки вверх*/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 700) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
		});
			$('.go-top').click(function() {
			$('body,html').animate({scrollTop:0},600);
	});
});

/*открываем шторы и скрываем надпись на карте*/
$(function () {
	$('#map-title').click(function(){
		$('#dark-curtains').addClass('hide-curtains');
		$('#text').addClass('backside');
	});
});
/*открываем шторы и скрываем надпись handmade*/
$(function () {
	$('#handmade').click(function(){
		$('#curtains-handmade').addClass('hide-curtains');
		$('#handmade').addClass('backside');
	});
});
/*открываем шторы и скрываем надпись vintage*/
$(function () {
	$('#vintage').click(function(){
		$('#curtains-vintage').addClass('hide-curtains');
		$('#vintage').addClass('backside');
	});
});
/*открываем шторы и скрываем надпись branding*/
$(function () {
	$('#branding').click(function(){
		$('#curtains-branding').addClass('hide-curtains');
		$('#branding').addClass('backside');
	});
});


/*для меню в портфолио*/
$(function () {
	$('.tooggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .'+get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function(){
		$('.post').show(500);
	});
});









/*круговые диаграммы*/
$(".dial_1").knob(
{
 'readOnly': true, //отмена прокрутки
 'thickness': 0.05, //толщина индикатора 5%
 'fgColor': '#10b292', //цвет заполняющей полоски $active-color
 'bgColor': '#047378', //цвет фона
 'angleOffset': '-285', //направление полосы
 'width': '122', //размеры круга
 'height': '122',
 'fontWeight': '400', //вес  шрифта
 'inputColor': '#a3a6ac', //цвет шрифта
 'font': 'Open Sans'
});

$(".dial_2").knob(
{
 'readOnly': true, 
 'thickness': 0.05, 
 'fgColor': '#10b292', 
 'bgColor': '#047378',
 'angleOffset': '-270',
 'width': '122',
 'height': '122',
 'fontWeight': '400', 
 'inputColor': '#a3a6ac',

});

$(".dial_3").knob(
{
 'readOnly': true, 
 'thickness': 0.05, 
 'fgColor': '#10b292',
 'bgColor': '#047378',
 'angleOffset': '-215',
 'width': '122',
 'height': '122',
 'fontWeight': '400', 
 'inputColor': '#a3a6ac',
});

}); 



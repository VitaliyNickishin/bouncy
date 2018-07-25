$(document).ready(function(){

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



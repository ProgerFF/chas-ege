(function() { 'use strict';
/*Исходный текст задачи:
 
На счету "Машиного" мобильного телефона было "53" "рубля", а после разговора с "Леной" осталось "8" "рублей". Сколько минут длился разговор с "Леной", если одна минута разговора стоит "2" "рубля" 50 копеек.
 
*/
 
var chel1=[ 'Машиного','Таниного','Люсиного','Аниного','Надиного','Олиного'].iz();
var chel2=[ 'Леной','Витей','Жорой','Петей','Катей'].iz();

var stalo=sluchch(1,10,1);
var tarif=sluchch(1,5,1);
var min=sluchch(1,40,1);
var bylo=stalo + min*(tarif+0.5);

window.vopr.txt=  
        'На счету ' + chel1 + ' мобильного телефона было ' + chislitlx(bylo,'рубль') + ', а после разговора с '
		+ chel2 + ' осталось ' +  chislitlx(stalo,'рубль') + '. Сколько минут длился разговор с ' + chel2 +
		', если одна минута разговора стоит '+ chislitlx(tarif,'рубль') + ' 50 копеек?';

window.vopr.ver=[min];  
 
window.vopr.kat['log']=0;  //Логарифмы
window.vopr.kat['prz']=0;  //Производная
window.vopr.kat['drs']=0;  //Дробные (нецелые) степени
window.vopr.kat['tri']=0;  //Тригонометрия
 
})();
//Источник задания: открытый банк заданий B1 № 77331
//DjUsagi

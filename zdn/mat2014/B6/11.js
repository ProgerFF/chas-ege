(function(){

var t1=['Стрелок','Солдат','Матрос','Ополченец','Боец','Партизан','Курсант','Десантник'].iz();
var v=sl(0.1,0.9,0.1);
var v1=sl1();

window.vopr.txt=t1+' стреляет по мишени один раз. В случае промаха '+
	t1.toLowerCase()+' делает второй выстрел по той же мишени. Вероятность попасть в мишень '+
	'при одном выстреле равна '+v.ts()+'. Найдите вероятность того, что мишень '+
	['не будет поражена ни первым, ни вторым выстрелом.',
	'будет поражена (либо первым, либо вторым выстрелом).'][v1]
	;
window.vopr.ver=[( v1? 1-(1-v)*(1-v) : (1-v)*(1-v) ).ts()];
window.vopr.rsh='Вероятность того, что мишень будет поражена с первого раза, составляет $'+
	v.ts()+'$. Вероятность того, что мишень с первого раза поражена не будет, составляет $'+
	(1-v).ts()+'$. Вероятность того, что мишень не будет поражена с первого раза, но '+
	'будет поражена со второго, составляет $'+(1-v).ts()+'\\cdot'+v.ts()+'='+(v*(1-v)).ts()+'$.'+
	'Вероятности несовместных событий складываются, значит, мишень будет поражена с вероятностью '+
	'$'+v.ts()+'+'+(1-v).ts()+'\\cdot'+v.ts()+'='+(1-(1-v)*(1-v)).ts()+'$.'+
	(' Вероятность того, что мишень поражена не будет, составляет $1-'+
	((1-v)*(1-v)).ts()+'='+((1-v)*(1-v)).ts()+
	'$').esli(!v1)
	;

})();
//Обзад 501061

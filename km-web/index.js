/**
* author laolang2016
* version 1.0.1
*/
console.log('hello');
var KM={
	_url = 'www.baidu.com';
	function sayHello( name ){
		console.log('hello' + name);
	}
	return {
		url : _url,
		sayHello : function(name){
			sayHello(name);
		}
	};
};
console.log('world');

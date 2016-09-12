
this.onmessage = function(ev){
	var data = ev.data;
	
	data += '你好';
	
	this.postMessage(data);
};
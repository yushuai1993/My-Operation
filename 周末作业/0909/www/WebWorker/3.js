function fn(n){
	if(n==1){
		return 1;
	}else if(n==2){
		return 1;
	}else{
		return fn(n-1)+fn(n-2);
	}
}

this.onmessage = function(ev){
	var result = fn(ev.data);
	this.postMessage(result);
};

















window.onload=function(){
	var mian=document.getElementsByClassName('mian');
	var date =[
		{translateX:'-500px',translateZ:'-400px'},
		{translateX:'-230px',translateZ:'-200px'},
		{translateX:'0',translateZ:'0'},
		{translateX:'230px',translateZ:'-200px'},
		{translateX:'500px',translateZ:'-400px'}
	];
	var draw=function(){
	for(var i=0; i<mian.length; i++){
		mian[i].style.webkitTransform=
			'translate3d('+date[i].translateX+', 0,'+date[i].translateZ+')';
			
		}

		date.unshift(date.pop());
	};

	setInterval(draw,3000);

	var toTop=document.getElementById('toTop');
	console.log(toTop)
	toTop.onclick=function(){
		var top=document.body.scrollTop;
		var k=0;
	 	var fn=function(){
				document.body.scrollTop-=top/30;
				k++;
				if(k==30){
				clearInterval(time);
				}
	 		
		};
		var time=setInterval(fn,1);
}

}
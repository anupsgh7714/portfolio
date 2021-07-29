var hour = document.getElementById('hour');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milsec = document.getElementById('milisec');



var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');



start.addEventListener('click',startit);
stop.addEventListener('click',stopit);
reset.addEventListener('click',resetit);

var hten = 0;
var hone = 0;
var mten = 0;
var mone = 0;
var sten = 0;
var sone = 0;
var msten = 0;
var msone = 0;
var set;

function startit(){

	set = setInterval(startThis,10);
	// document.getElementById('milisec').innerHTML = '01';

	function startThis(){
		msone = msone + 1;
		if(msone != 10)
			milsec.innerHTML = msten.toString() + msone.toString();
		if(msone >= 9){
			msone = 0;
			msten++;
			if(msten != 10)
				milsec.innerHTML = msten.toString() + msone.toString();
		}
		else if(msten>9){
			msten = 0;
			sone++;
			if(sone != 10)
				seconds.innerHTML = sten.toString() + sone.toString();
		}
		else if(sone > 9){
			sone = 0;
			sten++;
			if(sten != 10)
				seconds.innerHTML = sten.toString() + sone.toString();
		}
		else if(sten > 9){
			sten = 0;
			mone++;
			if(mone != 10)
				minutes.innerHTML = mten.toString() + mone.toString();
		}
		else if(mone > 9){
			mone = 0;
			mten++;
			if(mten != 10)
				minutes.innerHTML = mten.toString() + mone.toString();
		}
		else if(mten > 9){
			mten = 0;
			hone++;
			if(hone != 10)
				hour.innerHTML = hten.toString() + hone.toString();
		}
		else if(hone > 9){
			hone = 0;
			hten++;
			if(hten != 10)
				hour.innerHTML = mten.toString() + mone.toString();
		}
	}
};

function stopit(){
	clearInterval(set);
}

function resetit(){
	stopit();
	hten = 0;
	hone = 0;
	mten = 0;
	mone = 0;
	sten = 0;
	sone = 0;
	msten = 0;
	msone = 0;
	milsec.innerHTML = msten.toString() + msone.toString();	
	seconds.innerHTML = sten.toString() + sone.toString();	
	minutes.innerHTML = mten.toString() + mone.toString();	
	hour.innerHTML = hten.toString() + hone.toString();	
}

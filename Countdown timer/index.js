var seconds = document.querySelector('#seconds');
var minutes = document.querySelector('#minutes');
var hour = document.querySelector('#hour');

var hten = +hour.innerHTML[0];
var hone = +hour.innerHTML[1];
var mten = +minutes.innerHTML[0];
var mone = +minutes.innerHTML[1];
var sten = +seconds.innerHTML[0];
var sone = +seconds.innerHTML[1];


var c = setInterval(start,1000);

function start(){
	if(sten == 0 && sone == 0 && mten == 0 && mone == 0 && hten && hone){
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	}

	else if(sten !=0 && sone == 0){ 
		sten--;
		sone = 9;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();

	}
	else if(sten != 0 || sten == 0 && sone != 0){
		sone--;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	} 
	
	else if(mone !=0 && sten == 0){
		mone--;
		sten = 5;
		sone = 9;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	}

	else if(mone != 0 || mone == 0 && sten != 0){
		sten--;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	}

	else if(mten != 0 && mone == 0){
		mten--;
		mone = 9;
		sten = 5;
		sone = 9;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();                   
	}

	else if(mten != 0 || mten == 0 && mone !=0){
		mone--;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	}

	else if(hone != 0 && mten == 0){
		hone--;
		mten = 5;
		mone = 9;
		sten = 5;
		sone = 9;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();                  
	}

	else if(hone != 0 || hone == 0 && mten !=0){
		mten--;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
	}

	else if(hten != 0 && hone == 0){
		hten--;
		hone = 9;
		mten = 5;
		mone = 9;
		sten = 5;
		sone = 9;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();                  
	}

	else if(hten != 0 || hten == 0 && hone != 0){
		hone--;
		hour.innerHTML = hten.toString() + hone.toString();
		minutes.innerHTML = mten.toString() + mone.toString();
		seconds.innerHTML = sten.toString() + sone.toString();
		if(sten == 0 && sone == 0 && mone == 0 && mten == 0 && hten == 0 && hone == 0){
			clearInterval(c);
		}
	}
}


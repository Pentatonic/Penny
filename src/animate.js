var d1_current = -1;
var d2_current = -1;
var h1_current = -1;
var h2_current = -1;
var m1_current = -1;
var m2_current = -1;
var s1_current = -1;
var s2_current = -1;

var oneMinute = 1000*60;
var oneHour = oneMinute*60;
var oneDay = oneHour*24;

var album_release = new Date(2011, 10, 01); //Month is 0-11 in JavaScript

function flip (upperId, lowerId, changeNumber, pathUpper, pathLower){
	var upperBackId = upperId+"Back";
	$(upperId).src = $(upperBackId).src;
	$(upperId).setStyle("height", "13px");
	$(upperId).setStyle("visibility", "visible");
	$(upperBackId).src = pathUpper+parseInt(changeNumber)+".png";
	
	$(lowerId).src = pathLower+parseInt(changeNumber)+".png";
	$(lowerId).setStyle("height", "0px");
	$(lowerId).setStyle("visibility", "visible");
	
	var flipUpper = new Fx.Tween(upperId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
	flipUpper.addEvents({
		'complete': function(){
			var flipLower = new Fx.Tween(lowerId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
				flipLower.addEvents({
					'complete': function(){	
						lowerBackId = lowerId+"Back";
						$(lowerBackId).src = $(lowerId).src;
						$(lowerId).setStyle("visibility", "hidden");
						$(upperId).setStyle("visibility", "hidden");
					}				});					
				flipLower.start('height', 13);
				
		}
						});
	flipUpper.start('height', 0);
	
	
}//flip
			

function retroClock(){
	var today = new Date();
	
	var diffTime = album_release.getTime() - today.getTime();
	if (diffTime <= 0){diffTime = 0;}
	
	var temp = Math.floor(diffTime / oneDay);
	var d1 = Math.floor(temp / 10);
	var d2 = temp % 10;
	temp = Math.floor((diffTime % oneDay) / oneHour);
	var h1 = Math.floor(temp / 10);
	var h2 = temp % 10;
	temp = Math.floor((diffTime % oneHour) / oneMinute);
	var m1 = Math.floor(temp / 10);
	var m2 = temp % 10;
	temp = Math.floor((diffTime % oneMinute) / 1000);
	var s1 = Math.floor(temp / 10);
	var s2 = temp % 10;


	if (d2 != d2_current) {
		flip('daysUpRight', 'daysDownRight', d2, 'Double/Up/Right/', 'Double/Down/Right/');			
		d2_current = d2;
	}
	if (d1 != d1_current) {
		flip('daysUpLeft', 'daysDownLeft', d1, 'Double/Up/Left/', 'Double/Down/Left/');
		d1_current = d1;
	}
	if (h2 != h2_current) {
		flip('hoursUpRight', 'hoursDownRight', h2, 'Double/Up/Right/', 'Double/Down/Right/');			
		h2_current = h2;
	}
	if (h1 != h1_current) {
		flip('hoursUpLeft', 'hoursDownLeft', h1, 'Double/Up/Left/', 'Double/Down/Left/');
		h1_current = h1;
	}
	if (m2 != m2_current) {
		flip('minutesUpRight', 'minutesDownRight', m2, 'Double/Up/Right/', 'Double/Down/Right/');			
		m2_current = m2;
	}
	if (m1 != m1_current) {
		flip('minutesUpLeft', 'minutesDownLeft', m1, 'Double/Up/Left/', 'Double/Down/Left/');
		m1_current = m1;
	}
	if (s2 != s2_current) {
		flip('secondsUpRight', 'secondsDownRight',s2, 'Double/Up/Right/', 'Double/Down/Right/');			
		s2_current = s2;
	}
	if (s1 != s1_current) {
		flip('secondsUpLeft', 'secondsDownLeft', s1, 'Double/Up/Left/', 'Double/Down/Left/');
		s1_current = s1;
	}
	
}

setInterval('retroClock()', 1000);
			
	
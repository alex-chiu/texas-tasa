function recordClick() {
	var numclicks = getCookie("clicks");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24*60*60*1000*365));

	if(!numclicks) {
		numclicks = 1;
	} else {
		numclicks = parseInt(numclicks) + 1;
	}

	document.getElementById("clicks").innerHTML = numclicks;
	setCookie("clicks", numclicks, expdate, "/");
}

function getClicks() {
	var myclicks = getCookie("clicks");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24*60*60*1000*365));

	if(!myclicks) {
		myclicks = 0;
		setCookie("clicks", myclicks, expdate, "/");
	}

	document.write(myclicks);
}

function VisitCounter(){
	var visits = getCookie("counter");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	if (!visits) { 
		visits = 1;
		document.write("This is your first time here.");
	} else {
		visits = parseInt(visits) + 1;
		document.write("You have been here " + visits + " times.");
	}

	setCookie("counter", visits, expdate, "/");
}
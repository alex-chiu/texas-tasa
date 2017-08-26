function recordClick() {
	/* Called on every mouse click with:
	/* document.getElementsByTagName("body")[0].onclick = recordClick;
	/* Updates "clicks" cookie
	/* Updates trackers on achievement.html
	/* Checks for achievement completion & updates accordingly
	*/

	var numclicks = getCookie("clicks");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24*60*60*1000*365));

	if(!numclicks) {
		numclicks = 1;
	} else {
		numclicks = parseInt(numclicks) + 1;
	}

	if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "achievements.html"){
		document.getElementById("clicks10").innerHTML = numclicks;
		document.getElementById("clicks50").innerHTML = numclicks;
		document.getElementById("clicks100").innerHTML = numclicks;
		document.getElementById("clicks500").innerHTML = numclicks;
		document.getElementById("clicks1000").innerHTML = numclicks;

		if(numclicks >= 10){ document.getElementById("1.1").classList.add("complete"); document.getElementById("clickAchievements").innerHTML = 1;}
		if(numclicks >= 50){ document.getElementById("1.2").classList.add("complete"); document.getElementById("clickAchievements").innerHTML = 2;}
		if(numclicks >= 100){ document.getElementById("1.3").classList.add("complete"); document.getElementById("clickAchievements").innerHTML = 3;}
		if(numclicks >= 500){ document.getElementById("1.4").classList.add("complete"); document.getElementById("clickAchievements").innerHTML = 4;}
		if(numclicks >= 1000){ document.getElementById("1.5").classList.add("complete"); document.getElementById("clickAchievements").innerHTML = 5;}

	}
	setCookie("clicks", numclicks, expdate, "/");
}

function getClicks() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getClicks();</script>
	/* On landing, displays trackers on achievement.html
	*/

	var myclicks = getCookie("clicks");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24*60*60*1000*365));

	if(!myclicks) {
		myclicks = 0;
		setCookie("clicks", myclicks, expdate, "/");
	}
	document.write(myclicks);
}

function recordVisit() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordVisits();</script>
	/* On landing, displays trackers on achievement.html
	*/
	var visits = getCookie("counter");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	if (!visits) { 
		visits = 1;
	} else {
		visits = parseInt(visits) + 1;
	}

	setCookie("counter", visits, expdate, "/");
}

function getVisits() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getVisits();</script>
	/* Displays trackers on achievement.html
	*/

	var visits = getCookie("counter");

	if (visits == 1) { 
		document.write("This is your first page visit!");
	} else {
		document.write("You have visited " + visits + " pages.");
	}
}

function checkCompleted(){
	//Clicks
	var cval = getCookie("clicks");
	var checkpoint = 0;
	if(cval >= 10){ document.getElementById("1.1").classList.add("complete"); checkpoint++;}
	if(cval >= 50){ document.getElementById("1.2").classList.add("complete"); checkpoint++;}
	if(cval >= 100){ document.getElementById("1.3").classList.add("complete"); checkpoint++;}
	if(cval >= 500){ document.getElementById("1.4").classList.add("complete"); checkpoint++;}
	if(cval >= 1000){ document.getElementById("1.5").classList.add("complete"); checkpoint++;}
	document.getElementById("clickAchievements").innerHTML = checkpoint;
	
	//Visits
	cval = getCookie("counter");
	checkpoint = 0;
	if(cval >= 10){ document.getElementById("2.1").classList.add("complete"); checkpoint++;}
	if(cval >= 25){ document.getElementById("2.2").classList.add("complete"); checkpoint++;}
	if(cval >= 50){ document.getElementById("2.3").classList.add("complete"); checkpoint++;}
	if(cval >= 100){ document.getElementById("2.4").classList.add("complete"); checkpoint++;}
	if(cval >= 500){ document.getElementById("2.5").classList.add("complete"); checkpoint++;}
	document.getElementById("visitsAchievements").innerHTML = checkpoint;
}
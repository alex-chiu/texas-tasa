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
		if(numclicks >= 1000){ 
			document.getElementById("1.5").classList.add("complete");
			document.getElementById("clickAchievements").innerHTML = 5;
			document.getElementById("1").innerHTML = "&#128504;";
			document.getElementById("1").classList.add("checkmark");
		}
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
	/* On landing (any page), updates visit counter
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

function recordTab() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordTabs();</script>
	/* On landing (any tab), updates corresponding cookie with bool "true"
	*/
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "index.html" || location.pathname == "/") { 
		var home = true;
		setCookie("homeTab", home, expdate, "/");
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "about.html"){
		var about = true;
		setCookie("aboutTab", about, expdate, "/");
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "calendar.html"){
		var calendar = true;
		setCookie("calendarTab", calendar, expdate, "/");
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "events.html"){
		var events = true;
		setCookie("eventsTab", events, expdate, "/");
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "family.html"){
		var family = true;
		setCookie("familyTab", family, expdate, "/");
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "food.html"){
		var food = true;
		setCookie("foodTab", food, expdate, "/");
	}
}

function getTabs() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getTabs();</script>
	/* Displays all trackers on achievement.html
	*/

	var home = getCookie("homeTab");
	var about = getCookie("aboutTab");
	var calendar = getCookie("calendarTab");
	var events = getCookie("eventsTab");
	var family = getCookie("familyTab");
	var food = getCookie("foodTab");

	if (home == "") { 
		document.getElementById("homeTab").innerHTML = "unvisited";
	} else {
		document.getElementById("homeTab").innerHTML = "Complete!";
	}

	if (about == "") { 
		document.getElementById("aboutTab").innerHTML = "unvisited";
	} else {
		document.getElementById("aboutTab").innerHTML = "Complete!";
	}

	if (calendar == "") { 
		document.getElementById("calendarTab").innerHTML = "unvisited";
	} else {
		document.getElementById("calendarTab").innerHTML = "Complete!";
	}

	if (events == "") { 
		document.getElementById("eventsTab").innerHTML = "unvisited";
	} else {
		document.getElementById("eventsTab").innerHTML = "Complete!";
	}

	if (family == "") { 
		document.getElementById("familyTab").innerHTML = "unvisited";
	} else {
		document.getElementById("familyTab").innerHTML = "Complete!";
	}

	if (food == "") { 
		document.getElementById("foodTab").innerHTML = "unvisited";
	} else {
		document.getElementById("foodTab").innerHTML = "Complete!";
	}
}

function recordApply() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordApply();</script>
	/* On landing (apply.html), updates corresponding cookie with string "true"
	*/
	var apply = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("applyTab", apply, expdate, "/");
}

function getApply() {
	var apply = getCookie("applyTab");
	if (apply == "") { 
		document.getElementById("applyTab").innerHTML = "incomplete";
	} else {
		document.getElementById("applyTab").innerHTML = "Done!";
	}
}

function recordOfficer(x) {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordOfficer([Character Input, A-K]);</script>
	/* On hover, triggers update of corresponding cookie with string "true";
	/* Input corresponds to letter assigned to each officer position.
	*/
	var officerx = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("officer" + x, officerx, expdate, "/");
}

function getOfficers() {
	var officers = 0;
	var x = "A";
	var cookie;
	while(x!="L"){
		cookie = getCookie("officer" + x);
		if(cookie != ""){ officers++; }
		x = String.fromCharCode(x.charCodeAt(0) + 1);
	}
	document.getElementById("officerCount").innerHTML = officers;
}

function checkCompleted(){
	/* Called by achievements.html during page load
	/* Sets BG color to Green for each Achievement upon completion:
	/* - (adds class "complete" which contains BG green);
	/* Updates tracker progress for each Achievement Category upon completion
	/* Uses Numerical ID's to find elements (ex. 3.1 corresponds to category 3, element 1)
	*/
	var myID;
	//Clicks
	var checkpoint = 0;
	var cval = getCookie("clicks");
	if(cval >= 10){ document.getElementById("1.1").classList.add("complete"); checkpoint++;}
	if(cval >= 50){ document.getElementById("1.2").classList.add("complete"); checkpoint++;}
	if(cval >= 100){ document.getElementById("1.3").classList.add("complete"); checkpoint++;}
	if(cval >= 500){ document.getElementById("1.4").classList.add("complete"); checkpoint++;}
	if(cval >= 1000){ document.getElementById("1.5").classList.add("complete"); checkpoint++;}
	/* DISPLAY CLICKER HAPPY ACHIEVEMENT IF IT IS INCOMPLETE; INTERACTS WITH COLLAPSIBLE ACCORDION CSS*/
	if(checkpoint < 5){
		myID = document.getElementsByClassName("panel clicks");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("1").innerHTML = "&#128504;";
		document.getElementById("1").classList.add("checkmark");
	}
	document.getElementById("clickAchievements").innerHTML = checkpoint;
	
	//Visits
	checkpoint = 0;
	cval = getCookie("counter");
	if(cval >= 10){ document.getElementById("2.1").classList.add("complete"); checkpoint++;}
	if(cval >= 25){ document.getElementById("2.2").classList.add("complete"); checkpoint++;}
	if(cval >= 50){ document.getElementById("2.3").classList.add("complete"); checkpoint++;}
	if(cval >= 100){ document.getElementById("2.4").classList.add("complete"); checkpoint++;}
	if(cval >= 500){ document.getElementById("2.5").classList.add("complete"); checkpoint++;}
	/* DISPLAY PAGE SURFER ACHIEVEMENT IF IT IS INCOMPLETE; INTERACTS WITH COLLAPSIBLE ACCORDION CSS*/
	if(checkpoint < 5){
		myID = document.getElementsByClassName("panel counts");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("2").innerHTML = "&#128504;";
		document.getElementById("2").classList.add("checkmark");
	}
	document.getElementById("visitsAchievements").innerHTML = checkpoint;

	//Tabs
	checkpoint = 0;
	cval = getCookie("homeTab");
	if(cval != ""){ document.getElementById("3.1").classList.add("complete"); checkpoint++;}
	cval = getCookie("aboutTab");
	if(cval != ""){ document.getElementById("3.2").classList.add("complete"); checkpoint++;}
	cval = getCookie("calendarTab");
	if(cval != ""){ document.getElementById("3.3").classList.add("complete"); checkpoint++;}
	cval = getCookie("eventsTab");
	if(cval != ""){ document.getElementById("3.4").classList.add("complete"); checkpoint++;}
	cval = getCookie("familyTab");
	if(cval != ""){ document.getElementById("3.5").classList.add("complete"); checkpoint++;}
	cval = getCookie("foodTab");
	if(cval != ""){ document.getElementById("3.6").classList.add("complete"); checkpoint++;}
	/* DISPLAY EXPLORER ACHIEVEMENT IF IT IS INCOMPLETE; INTERACTS WITH COLLAPSIBLE ACCORDION CSS*/
	if(checkpoint < 6){
		myID = document.getElementsByClassName("panel explorer");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("3").innerHTML = "&#128504;";
		document.getElementById("3").classList.add("checkmark");
	}
	document.getElementById("tabsAchievements").innerHTML = checkpoint;

	//Aspire
	checkpoint = 0;
	/* Visit Apply Page */
	cval = getCookie("applyTab");
	if(cval != ""){ document.getElementById("4.1").classList.add("complete"); checkpoint++;}
	/* Officer Hovers */
	var officers = 0;
	var x = "A";
	while(x!="L"){
		cval = getCookie("officer" + x);
		if(cval != ""){ officers++; }
		x = String.fromCharCode(x.charCodeAt(0) + 1);
	}
	if(officers == 11){ document.getElementById("4.2").classList.add("complete"); checkpoint++;}
	/* DISPLAY ASPIRING OFFICER ACHIEVEMENT IF IT IS INCOMPLETE; INTERACTS WITH COLLAPSIBLE ACCORDION CSS*/
	if(checkpoint < 2){
		myID = document.getElementsByClassName("panel aspire");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("4").innerHTML = "&#128504;";
		document.getElementById("4").classList.add("checkmark");
	}
	document.getElementById("aspireAchievements").innerHTML = checkpoint;
}
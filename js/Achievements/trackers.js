function recordClick() {
	/* Called on every mouse click with:
	/* document.getElementsByTagName("body")[0].onclick = recordClick;
	/* Updates "clicks" cookie
	/* Updates trackers on achievement.html
	/* Checks for achievement completion & updates accordingly
	/* Updates IDs: current, clicks clicks10 - clicks1000, 1 1.1 - 1.5, clickAchievements, achievements5 - achievements30, 9 9.2 - 9.5
	/* It's honestly a REALLY messy function but I don't want to go back and make sub-functions out of everything :/ (sorry, but it works!)
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

		if(numclicks >= 10){ 
			document.getElementById("1.1").classList.add("complete"); 
			document.getElementById("clickAchievements").innerHTML = 1;
			if(numclicks == 10) {
				document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + 1;

				document.getElementById("achievements5").innerHTML = parseInt(document.getElementById("achievements5").innerHTML) + 1;
				document.getElementById("achievements10").innerHTML = parseInt(document.getElementById("achievements10").innerHTML) + 1;
				document.getElementById("achievements20").innerHTML = parseInt(document.getElementById("achievements20").innerHTML) + 1;
				document.getElementById("achievements30").innerHTML = parseInt(document.getElementById("achievements30").innerHTML) + 1;

				if(document.getElementById("current").innerHTML == 5) { 
					document.getElementById("9.2").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 10) { 
					document.getElementById("9.3").classList.add("complete"); 
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 20) { 
					document.getElementById("9.4").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 30) { 
					document.getElementById("9.5").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
					if(document.getElementById("achieveAchievements").innerHTML == 5) {
						document.getElementById("9").innerHTML = "&#10003;";
						document.getElementById("9").classList.add("checkmark");
					}
				}
			}
		}
		if(numclicks >= 50){ 
			document.getElementById("1.2").classList.add("complete"); 
			document.getElementById("clickAchievements").innerHTML = 2;
			if(numclicks == 50) {
				document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + 1;

				document.getElementById("achievements5").innerHTML = parseInt(document.getElementById("achievements5").innerHTML) + 1;
				document.getElementById("achievements10").innerHTML = parseInt(document.getElementById("achievements10").innerHTML) + 1;
				document.getElementById("achievements20").innerHTML = parseInt(document.getElementById("achievements20").innerHTML) + 1;
				document.getElementById("achievements30").innerHTML = parseInt(document.getElementById("achievements30").innerHTML) + 1;

				if(document.getElementById("current").innerHTML == 5) { 
					document.getElementById("9.2").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 10) { 
					document.getElementById("9.3").classList.add("complete"); 
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 20) { 
					document.getElementById("9.4").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 30) { 
					document.getElementById("9.5").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
					if(document.getElementById("achieveAchievements").innerHTML == 5) {
						document.getElementById("9").innerHTML = "&#10003;";
						document.getElementById("9").classList.add("checkmark");
					}
				}
			}			
		}
		if(numclicks >= 100){ 
			document.getElementById("1.3").classList.add("complete"); 
			document.getElementById("clickAchievements").innerHTML = 3;
			if(numclicks == 100) {
				document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + 1;

				document.getElementById("achievements5").innerHTML = parseInt(document.getElementById("achievements5").innerHTML) + 1;
				document.getElementById("achievements10").innerHTML = parseInt(document.getElementById("achievements10").innerHTML) + 1;
				document.getElementById("achievements20").innerHTML = parseInt(document.getElementById("achievements20").innerHTML) + 1;
				document.getElementById("achievements30").innerHTML = parseInt(document.getElementById("achievements30").innerHTML) + 1;

				if(document.getElementById("current").innerHTML == 5) { 
					document.getElementById("9.2").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 10) { 
					document.getElementById("9.3").classList.add("complete"); 
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 20) { 
					document.getElementById("9.4").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 30) { 
					document.getElementById("9.5").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
					if(document.getElementById("achieveAchievements").innerHTML == 5) {
						document.getElementById("9").innerHTML = "&#10003;";
						document.getElementById("9").classList.add("checkmark");
					}
				}
			}
		}
		if(numclicks >= 500){ 
			document.getElementById("1.4").classList.add("complete"); 
			document.getElementById("clickAchievements").innerHTML = 4;
			if(numclicks == 500) {
				document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + 1;

				document.getElementById("achievements5").innerHTML = parseInt(document.getElementById("achievements5").innerHTML) + 1;
				document.getElementById("achievements10").innerHTML = parseInt(document.getElementById("achievements10").innerHTML) + 1;
				document.getElementById("achievements20").innerHTML = parseInt(document.getElementById("achievements20").innerHTML) + 1;
				document.getElementById("achievements30").innerHTML = parseInt(document.getElementById("achievements30").innerHTML) + 1;

				if(document.getElementById("current").innerHTML == 5) { 
					document.getElementById("9.2").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 10) { 
					document.getElementById("9.3").classList.add("complete"); 
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 20) { 
					document.getElementById("9.4").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 30) { 
					document.getElementById("9.5").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
					if(document.getElementById("achieveAchievements").innerHTML == 5) {
						document.getElementById("9").innerHTML = "&#10003;";
						document.getElementById("9").classList.add("checkmark");
					}
				}
			}
		}
		if(numclicks >= 1000){ 
			document.getElementById("1.5").classList.add("complete");
			document.getElementById("clickAchievements").innerHTML = 5;
			document.getElementById("1").innerHTML = "&#10003;";
			document.getElementById("1").classList.add("checkmark");
			if(numclicks == 50) {
				document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + 1;

				document.getElementById("achievements5").innerHTML = parseInt(document.getElementById("achievements5").innerHTML) + 1;
				document.getElementById("achievements10").innerHTML = parseInt(document.getElementById("achievements10").innerHTML) + 1;
				document.getElementById("achievements20").innerHTML = parseInt(document.getElementById("achievements20").innerHTML) + 1;
				document.getElementById("achievements30").innerHTML = parseInt(document.getElementById("achievements30").innerHTML) + 1;

				if(document.getElementById("current").innerHTML == 5) { 
					document.getElementById("9.2").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 10) { 
					document.getElementById("9.3").classList.add("complete"); 
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 20) { 
					document.getElementById("9.4").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
				}
				if(document.getElementById("current").innerHTML == 30) { 
					document.getElementById("9.5").classList.add("complete");
					document.getElementById("achieveAchievements").innerHTML = parseInt(document.getElementById("achieveAchievements").innerHTML) + 1;
					if(document.getElementById("achieveAchievements").innerHTML == 5) {
						document.getElementById("9").innerHTML = "&#10003;";
						document.getElementById("9").classList.add("checkmark");
					}
				}
			}
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
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getApply();</script>
	/* Displays all trackers on achievement.html
	*/
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
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getOfficers();</script>
	/* Displays tracker for officer count on achievement.html
	*/
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

function recordMedia(x) {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordMedia([two char input - lowercase, for social media type]);</script>
	/* On click, triggers update of corresponding cookie with string "true";
	/* Input corresponds to letter assigned to each officer position.
	/* INSTEAD OF USING <a href=""></a>, the page is redirected using this function to allow for mobile compliance
	*/
	var mediax = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("media" + x, mediax, expdate, "/");
	if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "achievements.html"){
		if(x == "fb"){ window.location.href = "https://www.facebook.com/texastasa"; }
		if(x == "ig"){ window.location.href = "http://instagram.com/uttasa"; }
		if(x == "yt"){ window.location.href = "http://www.youtube.com/channel/UC4tZCO4Es9JZaL4bm9lQPEw"; }
		if(x == "tw"){ window.location.href = "https://twitter.com/uttasa" }
	}
}

function getMedia() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getMedia();</script>
	/* Displays all trackers on achievement.html
	*/
	var fb = getCookie("mediafb");
	var ig = getCookie("mediaig");
	var yt = getCookie("mediayt");
	var tw = getCookie("mediatw");
	if(fb == ""){ document.getElementById("FB").innerHTML = "Connect using the icon below!"; }
	else { document.getElementById("FB").innerHTML = "Nice work!"; }
	if(ig == ""){ document.getElementById("IG").innerHTML = "Connect using the icon below!"; }
	else { document.getElementById("IG").innerHTML = "Nice work!"; }
	if(yt == ""){ document.getElementById("YT").innerHTML = "Connect using the icon below!"; }
	else { document.getElementById("YT").innerHTML = "Nice work!"; }
	if(tw == ""){ document.getElementById("TW").innerHTML = "Connect using the icon below!"; }
	else { document.getElementById("TW").innerHTML = "Nice work!"; }
}

function recordITASA() {
	/* Called within innerHTML upon href click:
	/* <script type="text/javascript">recordITASA();</script>
	/* Creates/Updates itasa cookie with value "true"
	*/
	var status = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("itasa", status, expdate, "/");
}

function getITASA() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getITASA();</script>
	/* Displays tracker for ITASA visit on achievement.html
	*/
	var status = getCookie("itasa");
	if(status == ""){
		document.getElementById("itasa").innerHTML = "not yet...";
	} else {
		document.getElementById("itasa").innerHTML = "Yes!";
	}
}

function recordSponsors() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordSponsors();</script>
	/* Creates/Updates sponsors cookie with value of "true"
	*/
	var status = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("sponsors", status, expdate, "/");
}

function getSponsors() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getSponsors();</script>
	/* Displays tracker for sponsor.html visit on achievement.html
	*/
	var status = getCookie("sponsors");
	if(status == ""){
		document.getElementById("sponsors").innerHTML = "not yet...";
	} else {
		document.getElementById("sponsors").innerHTML = "Yes!";		
	}
}

function recordHome() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">recordHome();</script>
	/* Counts home visits with homeCount cookie
	*/
	var value = getCookie("homeCount");
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	if (!value) { 
		value = 1;
	} else {
		value = parseInt(value) + 1;
	}
	setCookie("homeCount", value, expdate, "/");
}

function getHome() {
	/* Called within innerHTML upon page load:
	/* <script type="text/javascript">getHome();</script>
	/* Displays homeCount cookie on achievement.html
	*/
	var counter = getCookie("homeCount");
	if(counter == ""){
		document.write(0);
	} else {
		document.write(counter);
	}
}

function recordTimes() {
	var status = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	var d = new Date();
	var hour = d.getHours();
	var day = d.getDay();

	if ((hour >= 2) && (hour <= 4)) {
		setCookie("night", status, expdate, "/");
	} else if ((hour >=5) && (hour <= 8)) {
		setCookie("morning", status, expdate, "/");
	} else if ((hour == 18) && (day == 3)) {
		setCookie("gm", status, expdate, "/");
	}
	var streak = getCookie("days");
	var yesterday = getCookie("yesterday");

	var check = day;
	if(check == 0){ check = 7; } //allows for easy check with yesterday in "else if" down below.


	if(!streak || !yesterday) {
		setCookie("days", 1, expdate, "/");
	} else if(yesterday == (check - 1)) {
		streak = parseInt(streak) + 1;
		setCookie("days", streak, expdate, "/");
		if(streak >= 7) { setCookie("streakComplete", status, expdate, "/"); }
	} else if(yesterday != day) {
		setCookie("days", 1, expdate, "/");
	}
	setCookie("yesterday", day, expdate, "/");
}

function getTimes() {
	var d = new Date();
	var hour = d.getHours();
	var day = d.getDay();
	if((hour >= 2) && (hour <= 4)) {
		document.getElementById("night").innerHTML = "It's Late!";
	} else if ((hour >=5) && (hour <= 8)) {
		document.getElementById("morning").innerHTML = "Good Morning!";
	} else if ((hour == 18) && (day == 3)) {
		document.getElementById("gm").innerHTML = "Don't Be Late!";
	}
	var streak = getCookie("days");
	if(!streak){
		document.getElementById("days").innerHTML = 0;
	} else {
		document.getElementById("days").innerHTML = streak;		
	}
}

function recordSecret() {
	var status = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));
	setCookie("secret", status, expdate, "/");
}

function getSecret() {
	var status = getCookie("secret");
	if(status == ""){
		document.write("hidden");
	} else {
		document.write("Discovered!<span style='float: right;'>...Too bad it only works on browser, at ~75% zoom :/</span>");
	}
}

function recordAchievement() {
	var visits = getCookie("achieve");
	var status = true;
	var expdate = new Date ();
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365));

	if (!visits) { 
		visits = 1;
	} else {
		visits = parseInt(visits) + 1;
	}

	setCookie("achieve", visits, expdate, "/");
}

function getAchievement() {
	var count = getCookie("achieve");
	document.write(count);
}

function writeAchievements(x) {
	document.getElementById("achievements5").innerHTML = x;
	document.getElementById("achievements10").innerHTML = x;
	document.getElementById("achievements20").innerHTML = x;	
	document.getElementById("achievements30").innerHTML = x;
}

function checkCompleted(){
	/* Called by achievements.html during page load
	/* Sets BG color to Green for each Achievement upon completion:
	/* - (adds class "complete" which contains BG green);
	/* Updates tracker progress for each Achievement Category upon completion
	/* Uses Numerical ID's to find elements (ex. 3.1 corresponds to category 3, element 1)
	*/
	var myID;
	var totalcount = 0;
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
		document.getElementById("1").innerHTML = "&#10003;";
		document.getElementById("1").classList.add("checkmark");
	}
	document.getElementById("clickAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;
	
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
		document.getElementById("2").innerHTML = "&#10003;";
		document.getElementById("2").classList.add("checkmark");
	}
	document.getElementById("visitsAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

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
		document.getElementById("3").innerHTML = "&#10003;";
		document.getElementById("3").classList.add("checkmark");
	}
	document.getElementById("tabsAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

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
		document.getElementById("4").innerHTML = "&#10003;";
		document.getElementById("4").classList.add("checkmark");
	}
	document.getElementById("aspireAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

	//Social Media
	checkpoint = 0;
	cval = getCookie("mediafb");
	if(cval != ""){ document.getElementById("5.1").classList.add("complete"); checkpoint ++;}
	cval = getCookie("mediaig");
	if(cval != ""){ document.getElementById("5.2").classList.add("complete"); checkpoint ++;}
	cval = getCookie("mediayt");
	if(cval != ""){ document.getElementById("5.3").classList.add("complete"); checkpoint ++;}
	cval = getCookie("mediatw");
	if(cval != ""){ document.getElementById("5.4").classList.add("complete"); checkpoint ++;}
	if(checkpoint < 4) {
		myID = document.getElementsByClassName("panel social");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("5").innerHTML = "&#10003;";
		document.getElementById("5").classList.add("checkmark");
	}
	document.getElementById("socialAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

	//Appreciation
	checkpoint = 0;
	cval = getCookie("itasa");
	if(cval != ""){ document.getElementById("6.1").classList.add("complete"); checkpoint ++;}
	cval = getCookie("sponsors");
	if(cval != ""){ document.getElementById("6.2").classList.add("complete"); checkpoint ++;}
	if(checkpoint < 2) {
		myID = document.getElementsByClassName("panel appreciation");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("6").innerHTML = "&#10003;";
		document.getElementById("6").classList.add("checkmark");
	}
	document.getElementById("appreciationAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

	//Frequent
	checkpoint = 0;
	cval = getCookie("homeCount");
	if(cval >= 50) { document.getElementById("7.1").classList.add("complete"); checkpoint ++;}
	cval = getCookie("morning");
	if(cval != "") { document.getElementById("7.2").classList.add("complete"); checkpoint ++;}
	cval = getCookie("night");
	if(cval != "") { document.getElementById("7.3").classList.add("complete"); checkpoint ++;}
	cval = getCookie("gm");
	if(cval != "") { document.getElementById("7.4").classList.add("complete"); checkpoint ++;}
	cval = getCookie("streakComplete");
	if(cval != "") { document.getElementById("7.5").classList.add("complete"); checkpoint ++;}
	if(checkpoint < 5) {
		myID = document.getElementsByClassName("panel freq");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("7").innerHTML = "&#10003;";
		document.getElementById("7").classList.add("checkmark");
	}
	document.getElementById("freqAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

	//Secret
	checkpoint = 0;
	cval = getCookie("secret");
	if(cval != "") { document.getElementById("8.1").classList.add("complete"); checkpoint ++;}
	if(checkpoint < 1) {
		myID = document.getElementsByClassName("panel secrets");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("8").innerHTML = "&#10003;";
		document.getElementById("8").classList.add("checkmark");
	}
	document.getElementById("secretsAchievements").innerHTML = checkpoint;
	totalcount = totalcount + checkpoint;

	//Achievements (must be last)
	checkpoint = 0;
	cval = getCookie("achieve");
	if(cval >= 50) { document.getElementById("9.1").classList.add("complete"); checkpoint ++; totalcount++;}
	if(totalcount >= 5) { document.getElementById("9.2").classList.add("complete"); checkpoint++; totalcount++;}
	if(totalcount >= 10) { document.getElementById("9.3").classList.add("complete"); checkpoint++; totalcount++;}
	if(totalcount >= 20) { document.getElementById("9.4").classList.add("complete"); checkpoint++; totalcount++;}
	if(totalcount >= 30) { document.getElementById("9.5").classList.add("complete"); checkpoint++; totalcount++;}

	if(checkpoint < 5) {
		myID = document.getElementsByClassName("panel total");
		myID[0].style.display = "block";
		myID[0].style.opacity = "1";
	} else {
		document.getElementById("9").innerHTML = "&#10003;";
		document.getElementById("9").classList.add("checkmark");
	}
	document.getElementById("achieveAchievements").innerHTML = checkpoint;
	document.getElementById("current").innerHTML = totalcount;
	writeAchievements(totalcount);
}
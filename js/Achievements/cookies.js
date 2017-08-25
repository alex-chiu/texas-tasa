function setCookie(name, value, expires, path, domain, secure) {
// Some characters - including spaces - are not allowed in cookies
//so we escape to change the value we have entered into
//a form acceptable to the cookie.
	var thisCookie = name + "=" + escape(value) + 
	((expires)? 
		"; expires=" + expires.toGMTString() : "") + 
	((path)?
		"; path=" + path : "") + 
	((domain) ? "; domain=" + domain : "") + 
	((secure) ? "; secure" : "");

	document.cookie = thisCookie;
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
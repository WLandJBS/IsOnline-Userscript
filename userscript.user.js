// ==UserScript==
// @name         Online/offline script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

const studioid2 = "3540516";

// Here the code that gets if someone is online/offline. var studioid2 should be taken from about me
var xmlHttp = new XMLHttpRequest();
var UTCTimeStamp = new Date().getTime();
xmlHttp.open("GET", 'https://scratch.mit.edu/studios/' + studioid2 + '/activity/', true);
xmlHttp.onreadystatechange = function(){
    var response = xmlHttp.responseText;
    var find = response.indexOf('<a href="/users/isOnline/">isOnline</a>');
		var find2 = (response.substring(find+63,find+72));
		var find3 = find2.replace('.','').toUpperCase();
		

// Result is "HH:MM PM" (pm and am on caps)
  }
xmlHttp.send();


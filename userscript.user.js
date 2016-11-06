// ==UserScript==
// @name         Online/offline script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

// Note: We can decide name and description later.

// Code here that gets the var studioid (studio where the user running the userscript will remove someone)
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + studioid + "/remove/?usernames=abcd"});
//

// Here the code that gets if someone is online/offline. var studioid2 should be taken from about me
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://scratch.mit.edu/studios/' + studioid2 + '/activity/', false );
xmlHttp.send( null );
var response  = xmlHttp.responseText;
var find = response.search('<a href="/users/ABCD/">ABCD</a>');
var find2 = (response.substring(find+55,find+65));
var find3 = find2.replace('.','');
var find4 = find3.replace('a','A');
var find5 = find4.replace('p','P');
var find6 = find5.replace('m','M');

// Result is "HH:MM PM" (pm and am on caps)

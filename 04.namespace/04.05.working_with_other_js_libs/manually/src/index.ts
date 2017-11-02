/// <reference path="../d/jquery.d.ts" />

$(function(){
	const text = "Hello world!";
	$("#my").append(text);
});

// tsc --outFile js/index.js src/index.ts
/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 12/28/2018 */
"use strict";
var request = require("request"), ncp = require("copy-paste");
if (process.argv.length > 2) {
	let url = process.argv.splice(2).join(" ");
	var options = {
		method: "POST",
		url: "https://9m.no/create",
		headers: {"content-type": "application/x-www-form-urlencoded"},
		form: {url: url},
	};
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		var code = decodeURI(response.headers.location.replace(/^\/show\/(.*)$/i, "$1"));
		let link = "https://9m.no/" + code;
		console.log(link);
		ncp.copy(link, function () {});
	});
}

$(document).ready(function() {
	function setCounter(y, d, m, s) {
		$("#years").text(y);
		$("#days").text(d);
		$("#mins").text(m);
		$("#secs").text(s);
	}
	
	/**
	 * Set initial counters from 1 Jan, 2008
	 */
	var startDate = new Date(2008, 0, 1, 0, 0, 0, 0);
	var msSince2008 = (Date.now() - startDate);
	var msToYrFactor = 1000*60*60*24*365;	// Factor to converts milliseconds to years
	
	//years since start in decimal notation = milliseconds-since-start as years
	var yrsSinceStart = msSince2008 / msToYrFactor;
	
	//years since start as an integer = milliseconds-since-start as years, rounded down
	var yrCnt = Math.floor(yrsSinceStart);
	
	//days since start = (number of years * 365) % 365;
	var dayCnt = Math.floor(yrsSinceStart * 365 % 365);
	
	//minutes since start = years-since-start as minutes MODULUS (minutes in 1 day)
	var minCnt = Math.floor(yrsSinceStart * 365 * 24 * 60 % (60 * 24));
	
	//seconds since start = years-since-start as seconds % 60
	var secCnt = Math.floor(yrsSinceStart * 365 * 24 * 60 * 60 % 60);
	
	setCounter(yrCnt, dayCnt, minCnt, secCnt);
});
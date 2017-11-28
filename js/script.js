window.onload = function(e) {
	// Prevent double-tap zoom on mobile
	document.body.addEventListener('touchstart', preventZoom);
	// create mailto link
	var em = document.getElementById('em');
	if (em != null) {
		var temp = "kim4a&#064;cmich&#046;edu";
		em.innerHTML = "<a href=\"mailto:" + temp + "\">" + temp + "</a>";
	}
	// parse twemoji
	twemoji.parse(document.body, {size: 1, folder: 'svg', ext: '.svg'});
	// High five
	document.getElementById('hand').addEventListener("touchstart", hi5);
	document.getElementById('hand').addEventListener("click", hi5);
}
function preventZoom(e) {
	var t2 = e.timeStamp;
	var t1 = e.currentTarget.dataset.lastTouch || t2;
	var dt = t2 - t1;
	var fingers = e.touches.length;
	e.currentTarget.dataset.lastTouch = t2;
	if (!dt || dt > 500 || fingers > 1) return; // not double-tap
	e.preventDefault();
	e.target.click();
}
function hi5() {
	var hand = document.getElementById('hand');
	hand.classList.toggle('spin');
}

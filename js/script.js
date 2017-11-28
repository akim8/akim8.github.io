// create mailto link
var em = document.getElementById('em');
if (em != null) {
	var temp = "kim4a&#064;cmich&#046;edu";
	em.innerHTML = "<a href=\"mailto:" + temp + "\">" + temp + "</a>";
}

// parse twemoji
twemoji.parse(document.body, {size: 1, folder: 'svg', ext: '.svg'});

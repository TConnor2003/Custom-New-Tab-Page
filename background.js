var filename = window.location.pathname.split('/').pop().split('.')[0];
console.log(filename);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}
function isMobile() {
	var isMobile = /(Android|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
	return isMobile;
}

if (isMobile()) {
    console.log("Mobile");
        document.body.style.backgroundImage = "url('/images/" + filename + "/mobile/Mobile (" + getRandomInt(10) + ").jpg')";
} else {
	console.log("Desktop");
        document.body.style.backgroundImage = "url('/images/" + filename + "/desktop/Desktop (" + getRandomInt(10) + ").jpg')";
}
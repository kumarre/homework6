var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var speed = video.playbackRate;

	var n_speed = speed * 0.9;
	console.log("New Speed is " + n_speed);

	video.playbackRate = n_speed;
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	var speed = video.playbackRate;

	var n_speed = speed / 0.9;
	console.log("New Speed is " + n_speed);

	video.playbackRate = n_speed;
});

document.querySelector("#skip").addEventListener("click", function() {
	var skip = video.currentTime + 5;
	var length = video.duration;

	if (skip > length) {
		video.currentTime = 0;
		skip = 0;
	}
	else {
		video.currentTime = skip;
	}

	console.log("Current Location " + skip);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	
	var mute = video.muted;

	if (mute == true) {
		// console.log("UnMuted Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}

	else {
		// console.log("Muted Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {

	var volume = document.querySelector("#volumeSlider").value;

	video.volume = volume / 100;

	console.log(video.volume);

	document.querySelector("#volume").innerHTML = volume + "%";

});

document.querySelector("#old").addEventListener("click", function() {

	var old = document.querySelector("#myVideo");

	if (!old.classList.contains("oldTime")) {
		old.classList.add("oldTime");
	}

});

document.querySelector("#original").addEventListener("click", function() {
	
	var original = document.querySelector("#myVideo");

	if (original.classList.contains("oldTime")) {
		original.classList.remove("oldTime");	
	}
});


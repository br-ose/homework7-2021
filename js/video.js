
var video = document.getElementById("player1");
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

var playback = 1.00;


function mute()
	{
		if (video.muted === false) {    
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
	 	}
		else if (video.muted === true) {    
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
	 	}
	}
	
	slideroutput = document.querySelector('input')
	slideroutput.addEventListener('input', function () {
		video.volume = slideroutput.value/100;
		document.getElementById("volume").innerHTML = slideroutput.value+"%";
	  }, false);


	function oldschool()
	{
		video.classList.add('oldSchool');
	}
	function newschool()
	{
		video.classList.remove('oldSchool');
	}
document.getElementById("slower").addEventListener("click", slowCounter);
document.getElementById("faster").addEventListener("click", fastCounter);

function slowCounter()
{
	playback=playback-.050;
	console.log("playback speed is " + playback)
}
function slow()
{
	video.playbackRate = playback;
}
function fastCounter()
{
	playback=playback+.050;
	console.log("playback speed is "+playback)
}
function fast()
{
	video.playbackRate = playback;
}
console.log(video);
function play() { 
	video.play(); 
  } 
function pause() { 
	video.pause(); 
} 
function skip()
{
	var total = video.duration
	video.currentTime = video.currentTime + 10;
	if (video.currentTime == total)
	{
		video.currentTime=0;
	}

	

	
	
}
document.querySelector("#play").addEventListener("click", function() {
 	play();
});
document.querySelector("#pause").addEventListener("click", function() {
	pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	slow();
});
document.querySelector("#faster").addEventListener("click", function() {
	fast();
});
document.querySelector("#mute").addEventListener("click", function() {
	mute();
});
document.querySelector("#vintage").addEventListener("click", function() {
	oldschool();
});
document.querySelector("#orig").addEventListener("click", function() {
	newschool();
});
document.querySelector("#skip").addEventListener("click", function() {
	skip();
});





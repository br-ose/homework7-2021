
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

	function setvol(vol)
    {
        video.volume = vol / 100;
		document.getElementById("volume").innerHTML = vol+"%";	
    }
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
	console.log(video.currentTime)
	var total = video.duration
	console.log(total)
	video.currentTime = video.currentTime + 10;
	if (video.currentTime == total)
	{
		video.currentTime=0;
	}

	

	
	
}
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


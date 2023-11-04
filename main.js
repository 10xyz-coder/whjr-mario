
var video;
let poses = {"leftWrist": {"x": 100, "y": 100}, "rightWrist": {"x": 100, "y": 100}, "rightHand": {"x": 100, "y": 100}};
let nose

function modelReady() {
  console.log('model ready');
}

function gotResult(results) {
  if (results.length > 0) {
    poses = results[0].pose;
		nose = poses.nose
    console.log(nose)
  }
}

window.addEventListener('resize', function() {
  //let canvasX = (window.innerWidth - 680/1.5) / 4;
  //canvas.position(canvasX, 200)
  let videoX = (window.innerWidth - 680/1.5) / 4*2;
  video.position(videoX, 550)
});

function preload() {
	world_start = loadSound("world_start.wav");
  mariodie_audio = loadSound('mariodie.wav');
  kick_audio = loadSound('kick.wav');
  jump_audio = loadSound('jump.wav');
  coin_audio = loadSound('coin.wav');
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);

	video = createCapture(VIDEO);
  video.size(640/1.5, 480/1.5)
  let videoX = (windowWidth - 680/1.5) / 4*2;
  video.position(videoX, 550);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotResult)
}

function draw() {
	game()
}

$(document).ready(function() {
	$('.ui.modal')
	.modal('attach events', '.ui.icon.red.button', 'show')
	;
});








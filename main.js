noseX ="";
noseY ="";
GameStatus = "";

function startGame()
	{
	GameStatus = "start";
	document.getElementById("status").innerHTML ="Game is Loading";
	}

function game(){
	console.log("noseX = " +noseX +"noseY = "+ noseY);
}

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO) ;
	video.size(800,400);
	video.parent('game_console')

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose, gotPoses');
}

function draw() {
	game()
	if(game_status == "start");
}

function gotPoses(results)
{
if(resultslts.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y
}
}

function startGame()
	{
	GameStatus = "start";
	document.getElementById("status").innerHTML ="Game is Loading";
	}





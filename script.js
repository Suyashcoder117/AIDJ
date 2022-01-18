SG = "";
HP = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
RightWristY = 0;
RightWristX = 0;
LeftWristY = 0;
LeftWristX = 0;

function preload() {
    SG = loadSound("SG.mp3");
    HP = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(640, 420);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet("Video", modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[10].score;
        scoreRightWrist = results[0].pose.keypoints[10].score; 
    }
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 640, 420);
}
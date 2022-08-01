noseY = 0;
noseX = 0;

difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(400, 400);
    canvas.position(600, 230);
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY" + noseY);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;

        difference = floor(leftWristx - rightWristx);
       console.log("leftWristX = " + leftWristx + "rightWristX = " + rightWristx + "Difference = " + difference);
    }

}

function draw() {
    background('#969A97');

    document.getElementById("number").innerHTML = difference + "px";
    fill('#F90093');
    stroke('#F90093');
    text( "SHUBHA",noseX, noseY);
}
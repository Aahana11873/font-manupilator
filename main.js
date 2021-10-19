noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 150)
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
         console.log("leftwristX= "+leftwristX+"rightwristX "+rightwristX);
    }
}
function draw(){
    background('pink');
    //document.getElementById("square_side").innerHTML="width and height of the font will be "+difference+"px";
    textSize(difference)
fill("green");
text("Aahana", 100, 170)

}
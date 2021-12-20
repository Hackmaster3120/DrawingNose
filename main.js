noseX=0;
noseY=0;
RwX=0;
LwX=0;
distance=0;
function setup() {
    canvas=createCanvas(600,400)
    video = createCapture(VIDEO);
    canvas.position(670,130);
    video.size(600,400);
    poseNAT=ml5.poseNet(video,modelLoaded);
    poseNAT.on('pose',gotResults);
}
function draw() {
    background("white")
    fill("skyblue")
    rect(noseX,noseY,distance,distance)
}
function modelLoaded() {
    console.log("dots on your face have been loaded");
}
function gotResults(results) {
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        RwX=results[0].pose.rightWrist.x;
        LwX=results[0].pose.leftWrist.x;
        distance=Math.ceil(RwX-LwX);
        document.getElementById("WHspan").innerHTML=distance+"px";
    }
}
lipX=0;
lipY=0;

function preload(){
  lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
  
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
  }
  
  function gotPoses(){
    console.log(results);

    if(results.length>0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x - 25;
        lipY = results[0].pose.nose.y - 25;
        console.log("lipX = " + results[0].pose.lip.x);
        console.log("lipY = " + results[0].pose.lip.y);
    }
  }


function draw(){
    background('#969A97');
    image(video,0,0,300,300);
}

function take_snapshot(){
save('myFilterImage.png');
}


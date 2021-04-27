var ball;
var database , position

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('ball/position')
    ballposition.on("value", readPosition , showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();

}

function readPosition(data){
    position = data.val()
    ball.x  = position.x
    ball.y  = position.y
}

function showerror(){
    console.log("error")
}

function writeposition(x,y){
    database.ref("ball/position").set({
        x : ball.x + x ,
        y : ball.y + y
    })
}

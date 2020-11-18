var hypnoticBall, database;
var position;
var form, gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
 

}

function draw(){
  background("white");

  if(gameState === 0){
    form = new Form();
    form.display();
  }
  
// if(keyDown("space")){
//   hypnoticBall.velocityX=2;
//   hypnoticBall.velocityY = 2;
// }
   
// writePosition(hypnoticBall.x, hypnoticBall.y)
//     edges = createEdgeSprites();
//     hypnoticBall.bounceOff(edges);
//     drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x':  x ,
    'y':  y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

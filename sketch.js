//Create variables here
var pet, pet2;
var database;
var foodStock, food;


function preload()
{
  //load images here
  dogImg = loadImage("Dog.png");
  dog2Img = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  pet = createSprite(370,300,20,20);
  pet.addImage(dogImg);
  pet.scale = 0.3;
  database = firebase.database();
 foodStock =  database.ref('Food');
  foodStock.on("value",readStock);
 // dog = new Dog(300,200,20,20);
  
  
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    update(foodS);
    pet.addImage(dog2Img);
  }
  drawSprites();
  //add styles here
  fill("black");
  textSize(15);
  text("Press UP to feed the pet",170,50);
  //console.log(count);
}
function readStock(data){
  foodS = data.val();
}
function update(count){
  if(count<=0){
    count=0;
  } else{
    count = count-1;
  }
  database.ref('/').update({
    Food : count
  })
  console.log(count);
}




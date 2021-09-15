drops = [];


function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  
  for(var i = 0; i< 800; i++){
    drop = new Drop(round(random(0, width)), round(random(-200, -500)));
    this.drops.push(drop);
  }
}


function draw() {
  background(230, 230, 250);
  this.drops.forEach(function(drop){
    drop.fall();
    drop.render();
  });

  textSize(height/5)
  stroke(255);
  fill(152, 99, 168);
  text('Julia', 40, height/4);
  textSize(32)
  strokeWeight(1)
  let texto = 'Meus dias mais cinzas, se tornaram coloridos depois que te conheci.'
  text(texto, width/2, height/2, width/3, height);
  textSize(24)
  text('Feliz 2 meses de namoro', width/3, height-60, width, height);
}

function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.z = round(random(0, 20));
  this.speed = map(this.z, 0, 20, 4, 12);
  this.lineLenght = map(this.z, 0, 20, 10, 30);
  this.gravity = map(this.z, 0, 20, 0.02, 0.05);
  this.randomR = random(100, 255);
  this.randomG = random(100, 255);
  this.randomB = random(100, 255);

  this.fall = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + this.gravity;
    if(this.y > height){
      this.y = round(random(-10, -50));
      this.speed = map(this.z, 0, 20, 8, 20);
    }
  }

  this.render = function() {
    strokeWeight(map(this.z, 0, 20, 2, 4));
    stroke(map(this.y, 0, height, 100, this.randomR), map(this.y, 0, height, 100, this.randomG), map(this.y, 0, height, 100, this.randomB));
    line(this.x, this.y, this.x, this.y+this.lineLenght);
  }

}
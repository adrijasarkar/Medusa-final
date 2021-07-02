var medusa,medusaImage
var dragon,dragonImage
var demon,demonImage
var form
var gameState = 1
var bgSelect = 1
var demonkilled = 0
var medusaHealth = 40
var dragonHealth = 20
var level = 1

function preload (){
  medusaImage = loadAnimation("Images/Medusa/Attack1.png","Images/Medusa/Attack2.png",
  "Images/Medusa/Attack3.png","Images/Medusa/Attack5.png","Images/Medusa/Attack6.png");

  medusaDeath = loadAnimation("Images/Medusa/Death5");

  dragonImage = loadAnimation("Images/Dragon/Attack1.png","Images/Dragon/Attack2.png",
  "Images/Dragon/Attack3.png","Images/Dragon/Attack4.png");

  fireImage = loadAnimation("Images/Dragon/Fire_Attack1.png","Images/Dragon/Fire_Attack2.png"
  ,"Images/Dragon/Fire_Attack3.png","Images/Dragon/Fire_Attack4.png","Images/Dragon/Fire_Attack5.png");

  demonImage = loadAnimation("Images/Demon/Attack1.png","Images/Demon/Attack2.png",
  "Images/Demon/Attack3.png","Images/Demon/Attack4.png");

  bg1 = loadImage("Images/bg/deamonbg.jpg")
  bg2 = loadImage("Images/bg/night.jpg")
  bg3 = loadImage("Images/bg/nightsky.jpg")
  bg4 = loadImage("Images/bg/swamp.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  medusa = createSprite(600, 200, 50, 50);
  medusa.addAnimation("mnsakj",medusaImage)
  medusa.scale = 3

  dragon = createSprite(600,400,50,50)
  dragon.addAnimation("kjk",dragonImage)

  form = new Form()
  
  fireGroup = createGroup()
  demonGroup = createGroup()
  laserGroup = createGroup()
}

function draw() {
  //to select the background
  if(bgSelect ===1){
    background(bg1)
  }
  else if(bgSelect ===2){
    background(bg2)
  }

  else if(bgSelect ===3){
    background(bg3)
  }

  else if(bgSelect ===4){
    background(bg4)
  }
  else{
    background(bg1)
  }


  //game Start
  if(gameState === 0){
    form.display();
  } 
  
  //play game
  if(gameState === 1){
    //level 1- kill 20 demon
    textSize(40)
    fill("yellow")
    if(level === 1){
      if(frameCount %4 === 0){
        if(keyDown("space")){
          throwFire();
        }
      }
      dragon.x = 250
      dragon.y = mouseY 
      medusa.visible = false
      spawnDemon();
  
      if(fireGroup.isTouching(demonGroup)){
        fireGroup.destroyEach()
        demonGroup.destroyEach()
        demonkilled +=1
        console.log(demonkilled)
      }
  
      if(demonkilled >= 20){
        level =2
      }
      text("demon killed : " +demonkilled+"/20" ,50,50)
    }

    //level 2 - medusa fight
    else if(level ===  2){
      text("medusa health : " + medusaHealth +"/40",500,50)
      text("dragon Health : "+ dragonHealth+"/20" ,50,50)
      medusa.visible = true
      throwlaser()
      if(frameCount %10 === 0){
        medusa.y = random(100,700)
      }

      if(frameCount %4 === 0){
        if(keyDown("space")){
          throwFire();
        }
      }
      dragon.x = 250
      dragon.y = mouseY 
      
      if(laserGroup.isTouching(dragon)){
        dragonHealth -=2
        laserGroup.destroyEach()
        console.log("dragonHealth"+dragonHealth)
      }
      if(fireGroup.isTouching(medusa)){
        medusaHealth -=5
        fireGroup.destroyEach()
        console.log(medusaHealth+"medusaHealth")
      }
      if(dragonHealth <=0 ||medusaHealth <=0 ){
        level = 3
      }
    }

    //game over/game win
    else if(level === 3){
     
      textSize(60)
      fill("yellow")
      if(dragonHealth <=0 ){
        dragon.scale = 1
        text("Game Over... you lost!!!",200,200)
      }
      if(medusaHealth <=0){
        medusa.addAnimation("kjk",medusaDeath)
        medusa.changeAnimation("kjk",medusaDeath)
        medusa.scale = 3
        dragon.scale = 4
        text("YOU WIN !!!!!... medusa defeted",200,200)
      }
    }

    drawSprites();
  }

  else if(gameState === 2){
    //story
    textSize(55)
    fill("yellow")
    text("Medusa wants to take revenge \non dragon because one day dragon \nstole one of her power stone. \nSo, she send some demons to kill the dragon. \nPlay the game to know what will happen next...",100,200)
    //form.button1.show()
  }

  else if (gameState === 3){
    //how to play
    textSize(55)
    fill("yellow")
    text("If you press Up arrow the dragon will go up\nIf you press down arrow dragon will go down\nIf you press space dragon will shoot fire",100,400)
  }

  else if (gameState === 4){
    //select bg

  }

  else if (gameState === 5){
    //rules
    textSize(45)
    fill("yellow")
    text("RULES: ",600,100)
    text("-1.Dragon should defeat the monster by using dragon breath.\n-2.Dragon will fight Medusa(Boss Fight) after killing 20 monsters.\n-3.Dragon will have 20 health.\n-4.If the monsters attacks the dragon,its health will reduce by 1.\n-5.If Medusa attacks dragon,its health will decrease by 2.\n-6.If dragos health becomes 0 GAME OVER.\n-7.If dragon defeats 20 monsters and Medusa dragon wins.\n-8.Medusa will have 40 health.\n-9.If dragon's breath touches Medusa,her health reduces by 5.",50,160)
  }
  
}

function throwFire(){
  fire = createSprite(dragon.x,dragon.y,30,30)
  fire.addAnimation("jkhjk",fireImage)
  fire.velocityX =6
  fire.lifetime = 400
  fire.debug = true
  fire.setCollider ("rectangle",0,0,50,50)
  fireGroup.add(fire)
 }
function throwlaser(){
  if(frameCount %30 ===0){
    laser = createSprite(medusa.x,medusa.y-20,30,5)
    laser.shapeColor = "purple"
    laser .velocityX = -6
    laser .lifetime = 400
    laserGroup.add(laser)
  }
}


function spawnDemon(){
  if(frameCount %20 ===0){
    demon = createSprite(displayWidth,400,30,30)
    demon.y = Math.round(random(50,800))
    demon.addAnimation("jkhjk",demonImage)
    demon.velocityX = -6
    demon.lifetime = 400
    demon.debug =true
    demon.setCollider ("rectangle",0,0,50,100)
    demonGroup.add(demon)

    }
}
var bg1
var ease, med, dif, levels;
var nemo, nemoimg;
var cup, cupimg;
var screen, screenimg;
var boundary1, boundary2, boundary3, boundary4;
var cb1, cb2, cb3, cb4, cb5;
var back;
var ease1,ease2,ease3,ease4,ease5;
var flag = "start"
var txt = 0;
function preload(){
  //load images
  bg1 = loadImage("back.png");
  level = loadAnimation("easy.png");
  level1 = loadAnimation("medium.png");
  level2 = loadAnimation("difficult.png");

  //easy levels(_5_)
  ease1 = loadImage("1.png");
  ease2 = loadImage("2.png");
  ease3 = loadImage("3.png");
  ease4 = loadImage("4.png");
  ease5 = loadImage("5.png");
  //for every level of easy
  screenimg = loadImage("step14.jpg");
  backimg = loadImage("next level.png")
  //e1 cup, player
  cupimg = loadImage("cup.png");
  nemoimg = loadImage("nemo.png");
  //e2 cup, player
  loraximg = loadImage("e2player.png");
  e2cupimg = loadImage("e2cup.png");
}

function setup(){
  createCanvas(windowWidth-10, windowHeight-10);
  //Difficulties
  ease = createSprite(300, 500, 50 ,50);
  ease.addAnimation("easy.png", level)
  med = createSprite(650, 500, 50 ,50);
  med.addAnimation("medium.png", level1)
  dif = createSprite(1000, 500, 50 ,50);
  dif.addAnimation("difficult.png", level2)

  //levels for easy
  e1 = createSprite(windowWidth/4,200, 50, 50);
  e1.addImage(ease1);
  e1.visible=false;
  e2 = createSprite(windowWidth/4+200,200, 50, 50);
  e2.addImage(ease2);
  e2.visible=false;
  e3 = createSprite(windowWidth/4+400,200, 50, 50);
  e3.addImage(ease3);
  e3.visible=false;
  e4 = createSprite(windowWidth/4+600,200, 50, 50);
  e4.addImage(ease4)
  e4.visible=false;
  e5 = createSprite(windowWidth/4+800,200, 50, 50);
  e5.addImage(ease5);
  e5.visible=false;

 
}

function draw(){
  background(bg1);

  ////////////////////////First screen//////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  if(flag === "start"){
    fill("black")
    textSize(60)
    stroke(0 , 255, 255)
    strokeWeight(10)
    text("WELCOME! To The Maze Runner Game", windowWidth/2-550, 200 )
    textSize(40)
    fill("white")
    stroke(0)
    strokeWeight(10)
    text("Choose Difficulty", windowWidth/2-140, windowHeight/2 ) 
    console.log("flag===start");
  }

  ////////////////////////////////////////////////////////////////////////////
  ////////////////easy level///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if(mousePressedOver(ease) && flag==="start"){
    med.visible = false;
    dif.visible = false;
    ease.visible = false;
    e1.visible=true;
    e2.visible=true;
    e3.visible=true;
    e4.visible=true;
    e5.visible=true;
    flag="easy";
    console.log("flag===easy");
  }

  //////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(e1) && flag ==="easy"){
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e1pressed")
    flag="e1pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="e1pressed"){
    //create sprites only one time when flag is e1pressed and after creating sprites change flag immediately
    //to maze1created so that it exits this block
    console.log("flag===e1pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    nemo = createSprite(450 ,580, 20, 20);//main object
    nemo.addImage(nemoimg);
    nemo.scale = 0.033; 

    cup = createSprite(975,440,50,60);
    cup.addImage(cupimg);
    cup.scale = 0.298;

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(930, 310, 10, 150)
    cb1.shapeColor= "black"
    
    cb2 = createSprite(750, 570, 10, 120)
    cb2.shapeColor= "black"
      
    cb3 = createSprite(730, 510, 320, 10)
    cb3.shapeColor= "black"
    
    cb4 = createSprite(450, 310, 10, 180)
    cb4.shapeColor= "black"
    
    cb5 = createSprite(610, 260, 320, 10)
    cb5.shapeColor= "black"
      
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;


    flag="maze1created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }


  if(flag==="maze1created"){

    if (keyDown("right") && flag === "maze1created") {
      nemo.x = nemo.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze1created") {
      nemo.x = nemo.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze1created") {
      nemo.y = nemo.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze1created") {
      nemo.y = nemo.y + 4;
      console.log("down")
    }

    if ((nemo.isTouching(cb1)||nemo.isTouching(cb2)||nemo.isTouching(cb3)||nemo.isTouching(cb4)||nemo.isTouching(cb5)||nemo.isTouching(boundary1)||nemo.isTouching(boundary2)||nemo.isTouching(boundary3)||nemo.isTouching(boundary4)) && flag==="maze1created" ) {
      nemo.velocityX=0;
      nemo.velocityY=0;
      nemo.x = 450;
      nemo.y = 580;
      console.log("Istouching")
    }
      
  
    if (nemo.isTouching(cup) && flag === "maze1created") {
      nemo.velocityX=0;
      nemo.velocityY=0;
      nemo.scale = 0.020;
      nemo.x =975;
      nemo.y = 500;
      flag = "win1"
      console.log("istouchingcup")
    } 
  }
  
  
  ///////////////////////////////////////////////////////////////////////////////////////
  //level 2
  //////////////////////////////////////////////////////////////////////////////////////////////

  if(mousePressedOver(e2) && flag ==="easy"){   
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e1pressed")
    flag="e2pressed";
  }

  if(flag === "e2pressed"){
    console.log("flag===e2pressed");
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35;

    lorax = createSprite(980 ,180, 20, 20);//main object
    lorax.addImage(loraximg);
    lorax.scale = 0.15;
      
    cup2 = createSprite(975,540,50,60);
    cup2.addImage(e2cupimg);
    cup2.scale = 0.49;

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black"
      
    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
        
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(930, 200, 10, 150)
    cb1.shapeColor= "black"
    
    cb2 = createSprite(750, 590, 10, 60)
    cb2.shapeColor= "black"
      
    cb3 = createSprite(790, 440, 480, 10)
    cb3.shapeColor= "black"
    
    cb4 = createSprite(540, 190, 10, 130)
    cb4.shapeColor= "black"
    
    cb5 = createSprite(775, 280, 320, 10)
    cb5.shapeColor= "black"

    cb6 = createSprite(580, 470, 10, 60)
    cb6.shapeColor= "black"

    back = createSprite(701, 410,100 ,50)
    back.visible = false;
    back.addImage(backimg);
    back.scale = 0.2;


    flag="maze2created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  if(flag==="maze2created"){

    if (keyDown("right") && flag === "maze2created") {
      lorax.x = lorax.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze2created") {
      lorax.x = lorax.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze2created") {
      lorax.y = lorax.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze2created") {
      lorax.y = lorax.y + 4;
      console.log("down")
    }

    if ((lorax.isTouching(cb1)||lorax.isTouching(cb2)||lorax.isTouching(cb3)||lorax.isTouching(cb4)||lorax.isTouching(cb5)||lorax.isTouching(cb6)||lorax.isTouching(boundary1)||lorax.isTouching(boundary2)||lorax.isTouching(boundary3)||lorax.isTouching(boundary4)) && flag==="maze2created" ) {
      lorax.velocityX=0;
      lorax.velocityY=0;
      lorax.x = 980;
      lorax.y = 180;
      console.log("loraxistouching")
    }
      
  
    if (lorax.isTouching(cup2) && flag === "maze2created") {
      lorax.velocityX=0;
      lorax.velocityY=0;
      lorax.scale = 0.15;
      lorax.x =875;
      lorax.y = 500;
      flag = "win2"
      console.log("istouchingcup2")
    } 
  }


    //////////////////////////////////////////////////////////
    //level 3///////////////////////////////////////////////////
    if(mousePressedOver(e3) && flag ==="easy"){  

    }



    ///////////////////////////////////////////////////////////
    //Medium///////////////////////////////////////////////
    if(mousePressedOver(med) && flag==="start"){
        background("blue")
    }



    /////////////////////////////////////////
    ///Difficult////////////////////////////

    if(mousePressedOver(dif) && flag==="start"){

    }


    drawSprites();

    if(flag === "win1"){

      textSize(35);
      fill("green");
      textFont(" italic small-caps bold 12px/30px Georgia, serif");
      text("Congratulations!!!!!!!!!",  500, 330);
      text("You cleared this level!!",  500, 380);
      back.visible = true;

      if (mousePressedOver(back) && flag === "win1"){       
        
        back.destroy();

        screen.destroy();   
        nemo.destroy();    
        cup.destroy();    
        boundary1.destroy()   
        boundary2.destroy();   
        boundary3.destroy()    
        boundary4.destroy();   
        cb1.destroy();
        cb2.destroy();    
        cb3.destroy();    
        cb4.destroy();    
        cb5.destroy();

        e1.visible=true;
        e2.visible=true;
        e3.visible=true;
        e4.visible=true;
        e5.visible=true;       
    
        flag = "easy"
    
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    if(flag === "win2"){

      textSize(35);
      fill("green");
      textFont(" italic small-caps bold 12px/30px Georgia, serif");
      text("Congratulations!!!!!!!!!",  500, 330);
      text("You cleared this level!!",  500, 380);
      back.visible = true;

      if (mousePressedOver(back) && flag === "win2"){       
        
        back.destroy();

        screen.destroy();   
        lorax.destroy();    
        cup2.destroy();    
        boundary1.destroy()   
        boundary2.destroy();   
        boundary3.destroy()    
        boundary4.destroy();   
        cb1.destroy();
        cb2.destroy();    
        cb3.destroy();    
        cb4.destroy();    
        cb5.destroy();
        cb6.destroy();


        e1.visible=true;
        e2.visible=true;
        e3.visible=true;
        e4.visible=true;
        e5.visible=true;       
    
        flag = "easy"
    
      }
    }




   textSize(60)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("MAZE RUNNER", windowWidth/2-250, 100 )
   
}





/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////ROUGH WORK///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


 /* screen = createSprite(701, 380, 50, 50);
   screen.addImage(screenimg);
   screen.scale = 0.35;
   screen.visible = false
   nemo = createSprite(450 ,580, 20, 20);//main object
   nemo.addImage(nemoimg);
   nemo.scale = 0.033;
   nemo.visible=false
   nemo.shapeColor = "black";
   cup = createSprite(975,440,50,60);
   cup.addImage(cupimg);
   cup.scale = 0.298;
   cup.visible = false
   boundary1 = createSprite(701, 125, 674, 10);
   boundary1.shapeColor = "black"
   boundary1.visible=false
   boundary2 = createSprite(369, 380, 10, 505);
   boundary2.shapeColor = "black";
    boundary2.visible = false
   boundary3 = createSprite(701, 628, 674, 10);
   boundary3.shapeColor = "black"
   boundary3.visible = false
   boundary4 = createSprite(1033, 380, 10, 505);
   boundary4.shapeColor = "black"
   boundary4.visible = false
   cb1 = createSprite(930, 310, 10, 150)
   cb1.shapeColor= "black"
   cb1.visible = false
   cb2 = createSprite(750, 570, 10, 120)
   cb2.shapeColor= "black"
   cb2.visible = false
   cb3 = createSprite(730, 510, 320, 10)
   cb3.shapeColor= "black"
   cb3.visible = false
   cb4 = createSprite(450, 310, 10, 180)
   cb4.shapeColor= "black"
   cb4.visible = false
   cb5 = createSprite(610, 260, 320, 10)
   cb5.shapeColor= "black"
   cb5.visible = false
  
   back = createSprite(701, 400,50 ,50)
   back.visible = false;*/
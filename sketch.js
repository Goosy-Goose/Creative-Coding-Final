var CanvWidth, CanvHeight;
var ReadInstructions, InstrucNum;
var glitch
var VisNovel;
var Text_Box;
var Background_Classroom, Background_Player_Home, Background_Kit_Home, Background_Outside_Classroom;
var Kit_Annoyed, Kit_Normal, Kit_Happy, Kit_Crossed_Arms, Kit_Yell, Kit_Sit;
var Flashback1, Flashback1_chr, Flashback1_chr2, Flashback1_chr3, Flashback1_chr4, Flashback2, Flashback3_1, Flashback3_2, Flashback3_3;
var Pencil_Scratching;
var ForcedSquare;
var ScenesCSV;
var CurrentSceneNumber, CurrentChapterNumber;
var Frame;


function preload(){
  Text_Box = loadImage('./resources/images/Text_Box.png');
  Background_Classroom = loadImage('./resources/images/backgrounds/Background_Classroom.png');
  Background_Player_Home = loadImage('./resources/images/backgrounds/Background_Player_Home.png');
  Background_Kit_Home = loadImage('./resources/images/backgrounds/Background_Kit_Home.png');
  Background_Outside_Classroom = loadImage('./resources/images/backgrounds/Background_Outside_Classroom.png');
  Kit_Annoyed = loadImage('./resources/images/characters/Kit_Annoyed.png')
  Kit_Normal = loadImage('./resources/images/characters/Kit_Normal.png')
  Kit_Happy = loadImage('./resources/images/characters/Kit_Happy.png')
  Kit_Crossed_Arms = loadImage('./resources/images/characters/Kit_Crossed_Arms.png')
  Kit_Yell = loadImage('./resources/images/characters/Kit_Yell.png');
  Kit_Sit = loadImage('./resources/images/characters/Kit_Sit.png');
  Flashback1 = loadImage('./resources/images/flashbacks/Flashback1.png');
  Flashback1_chr = loadImage('./resources/images/flashbacks/Flashback1_chroma.png')
  Flashback1_chr2 = loadImage('./resources/images/flashbacks/Flashback1_chroma2.png')
  Flashback1_chr3 = loadImage('./resources/images/flashbacks/Flashback1_chroma3.png')
  Flashback1_chr4 = loadImage('./resources/images/flashbacks/Flashback1_chroma4.png')
  Flashback2 = loadImage('./resources/images/flashbacks/Flashback2.png');
  Flashback3_1 = loadImage('./resources/images/flashbacks/Flashback3_1.png');
  Flashback3_2 = loadImage('./resources/images/flashbacks/Flashback3_2.png');
  Flashback3_3 = loadImage('./resources/images/flashbacks/Flashback3_3.png');
  Pencil_Scratching = loadSound('./resources/sounds/Pencil_Scratching.mp3');
  ScenesCSV = loadTable("./resources/Scenes.csv", "csv", "header");
  ForcedSquare = loadFont("./resources/fonts/FORCED SQUARE.ttf");
}

function setup(){
  ReadInstructions = false;
  InstrucNum = 0;
  getWidthAndHeight();
  print(CanvHeight)
  createCanvas(CanvWidth, CanvHeight);
  glitch = new Glitch();
  VisNovel = new Scenes(ScenesCSV);
  CurrentSceneNumber = 181;
  CurrentChapterNumber = 0;
  Frame = 0;
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(20);
}

function draw(){
  if(!ReadInstructions){
    displayInstructions();
  }else{
    background(220);
    VisNovel.playScene(CurrentSceneNumber, Frame)
  }
  
}

function displayInstructions(){
  textFont(ForcedSquare);
  background(202, 224, 219)
  if(InstrucNum === 0){
    textSize(30);
    text("This is",CanvWidth/2, CanvHeight/2-70, CanvWidth*4/5);
    textSize(40);
    text("\"The Story In Which You May Or May Not Die\"",CanvWidth/2, CanvHeight/2, CanvWidth*4/5 )
    textSize(30);
    text("A visual novel. To proceed through the visual novel, left click anywhere on the screen.",CanvWidth/2, CanvHeight/2+70, CanvWidth*4/5 )
  }else if(InstrucNum ===1){
    textSize(30);
    text("Great! You're doing wonderfully.\bIn this visual novel, the text will scroll. To fast forward this text, simply left click again to show the entire text. Keep in mind that you will not be able to go back, so be careful when fast forwarding.\b (Click to continue)",CanvWidth/2, CanvHeight/2, CanvWidth*4/5)
  }else if(InstrucNum === 2){
    textSize(30);
    text("As a warning, there will be swearing, and there is a small flash warning for this experience. To begin reading, click anywhere on the screen.",CanvWidth/2, CanvHeight/2, CanvWidth*4/5)
  }
 
}


function mousePressed(){
  if(!ReadInstructions){
    if(InstrucNum>=2){
      ReadInstructions=true;
      Frame = frameCount
    }
    InstrucNum++;
  }else{
    if(VisNovel.checkCanGoNextScene()){
      goNextScene();
    }else{
      VisNovel.fastForwardText()
    }
  }
  
  
}



function goNextScene(){
  Frame = frameCount;
    if(CurrentSceneNumber>= ScenesCSV.getRowCount()-1){
      CurrentSceneNumber= CurrentSceneNumber;
    } else{ 
      CurrentSceneNumber++;
    }
}


function getWidthAndHeight(){
  let maxH = window.innerHeight;
  let maxW = window.innerWidth;
  let partH = maxH/7;
  let partW = maxW/10;
  if(partH*10>maxW){
    CanvWidth = maxW;
    CanvHeight = partW*7;
  } else if(partW*7>maxH){
    CanvWidth = partH*10;
    CanvHeight = maxH;
  }else{
    CanvWidth = maxW;
    CanvHeight = maxH;
  }
}



//this is for backgrounds and glitchy flashbacks which I will be incorporating in the future
function makeImgGlitch(imgToGlitch){ //still not getting the glitched image to work
  glitch.loadImage(imgToGlitch, function(im){glitch.loadImage(im)});
  glitch.resetBytes();
  glitch.loadType('png');
  glitch.replaceBytes(100,100);
  glitch.randomBytes(1);
  glitch.buildImage();
  image(SomethingCreepy, innerWidth/2, innerHeight/2, innerWidth, innerHeight)
  image(glitch.image, innerWidth/2, innerHeight/2, innerWidth, innerHeight);
  textSize(36);
  text("ive been trying to get the glitch to work for two hours now and im done", 10, innerHeight/2)
  text("i was obviously unsucessful", 10, innerHeight/2+40);
}



//refs:
//Forced Square font: https://www.dafont.com/forced-square.font?text=It%27s+a+nice+day+for+myurdr%21&back=theme
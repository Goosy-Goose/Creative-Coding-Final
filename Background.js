class Background{
  constructor(bgImg){
    this.bgImg = bgImg;
  }

  displayBackground(){ //unfortunately I was having issues with directly putting this.bgImg into the image() function so I had to resort to if statements
    push();
    imageMode(CORNER);
    if(this.bgImg === "Classroom"){
      image(Background_Classroom, 0, 0, CanvWidth, CanvHeight)
    }
    if(this.bgImg === "Player Home"){
      image(Background_Player_Home, 0, 0, CanvWidth, CanvHeight);
    }
    if(this.bgImg === "Kit Home"){
      image(Background_Kit_Home, 0, 0, CanvWidth, CanvHeight);
    }
    if(this.bgImg === "Outside Classroom"){
      image(Background_Outside_Classroom, 0, 0, CanvWidth, CanvHeight);
    }
    if(this.bgImg ==="Black"){
      push()
      fill(0);
      rect(CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight);
      pop()
    }
    
    pop()

    
  }
}
class Background{
  constructor(bgImg){
    this.bgImg = bgImg;
  }

  displayBackground(){
    push();
    imageMode(CORNER);
    if(this.bgImg === "Classroom"){
      image(Background_Classroom, 0, 0, CanvWidth, CanvHeight)
    }
    if(this.bgImg === "Player Home"){
      image(Background_Player_Home, 0, 0, CanvWidth, CanvHeight);
    }

    
    pop()

    
  }
}
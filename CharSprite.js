class CharSprite{
  constructor(char1, char2, bgImg){
    this.char1 = char1;
    this.char2 = char2;
    this.bgImg = bgImg;
  }

  displayCharSprite(){ //this function is so ugly and i'm infinitely sorry, but i couldn't figure out a way to not use if statements for everything and I hate it
    let char1x = 0;
    let char2x = CanvWidth/5
    if(this.bgImg === "Classroom"){
      char1x = -CanvWidth/5
    }
    this.displayChar1(char1x);
  }

  displayChar1(char1x){
    push();
    imageMode(CORNER);
    if(this.char1 ==="Kit Annoyed"){
      image(Kit_Annoyed, char1x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Normal"){
      image(Kit_Normal, char1x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Happy"){
      image(Kit_Happy, char1x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Crossed Arms"){
      image(Kit_Crossed_Arms, char1x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Yell"){
      image(Kit_Yell, char1x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Sit"){
      image(Kit_Sit, char1x,0, CanvWidth, CanvHeight);
    }
    pop();
  }

  displayChar2(char2x){
    push();
    imageMode(CORNER);
    if(this.char1 ==="Kit Annoyed"){
      image(Kit_Annoyed, char2x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Normal"){
      image(Kit_Normal, char2x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Happy"){
      image(Kit_Happy, char2x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Crossed Arms"){
      image(Kit_Crossed_Arms, char2x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Yell"){
      image(Kit_Yell, char2x,0, CanvWidth, CanvHeight);
    }
    if(this.char1 ==="Kit Sit"){
      image(Kit_Sit, char2x,0, CanvWidth, CanvHeight);
    }
    pop();
  }

}
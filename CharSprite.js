class CharSprite{
  constructor(char1, char2){
    this.char1 = char1;
    this.char2 = char2;
  }

  displayCharSprite(){
    push();
    imageMode(CORNER);
    if(this.char1 ==="Kit Annoyed"){
      image(Kit_Annoyed, 0,0, CanvWidth, CanvHeight);
    }
    pop();
  }
}
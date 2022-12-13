class Dialogue{
  constructor(speakerType, text){
    this.speakerType = speakerType;
    this.text = text;
    this.showFullText = false;
    this.hasBeenFFWd = false;
  }

  displayText(initFrame){ //will have more checks for which type of speaker, also will incorporate an occasional random delete for the classmate (like they're typing their text instead of actually speaking it)
    textSize(CanvHeight*.0357);
    textFont(ForcedSquare);
    textAlign(CENTER);
    rectMode(CENTER);
    this.displayTextBox();
    push()
    textAlign(LEFT);
    text(this.speakerType, CanvWidth/5, CanvHeight-CanvHeight/6 - CanvHeight/11);
    pop();
    if(this.showFullText){ //shows full text
      text(this.text,CanvWidth/2, CanvHeight-CanvHeight/6,CanvWidth*5/7-10)
    } else{ //f full text is not shown, continues to scroll 
      text(this.text.substring(0, frameCount-initFrame),CanvWidth/2, CanvHeight-CanvHeight/6,CanvWidth*5/7-10)
    }
    if(!this.showFullText)
    this.checkFullTextDisplayed(initFrame);
  }

  fastFwdText(){
    this.showFullText = true;
    this.hasBeenFFWd = true;
  }

  checkFullTextDisplayed(initFrame){
    if(frameCount-initFrame<=this.text.length && !this.hasBeenFFWd){
      this.showFullText = false;
    }else{
      this.showFullText = true;
    }
  }


  getShowFullText(){
    return this.showFullText;
  }

  displayTextBox(){
    push()
    image(Text_Box,CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
    pop()
  }

}
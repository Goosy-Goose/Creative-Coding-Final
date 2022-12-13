class Scenes{
  constructor(ScenesCSV){
    this.ScenesCSV = ScenesCSV;
    this.bg;
    this.text;
    this.charsprites;
    this.isSpecialScene = false;
    this.specialSceneDone = false;
    this.sceneTime;
    this.specFrame;
    this.framesToPlay;
    this.canGoNext = false;
  }

  playScene(sceneNum, initFrame){ //retrieves background, text, and character sprite information for cleanliness
    if(this.ScenesCSV.getColumn('Is Special')[sceneNum] != "t"){
      this.isSpecialScene = false;
      if(initFrame === frameCount-1){//ensures this only happens once for each new scene
        this.bg = new Background(this.ScenesCSV.getColumn('Background Img')[sceneNum], this.ScenesCSV.getColumn('Char 1')[sceneNum]);
        this.text = new Dialogue(this.ScenesCSV.getColumn('Speaker')[sceneNum], this.ScenesCSV.getColumn('Text')[sceneNum]);  
        this.charsprites = new CharSprite(this.ScenesCSV.getColumn('Char 1')[sceneNum], this.ScenesCSV.getColumn('Char 2')[sceneNum], this.ScenesCSV.getColumn('Background Img')[sceneNum]);
      }
      this.bg.displayBackground();    
      this.charsprites.displayCharSprite();
      this.text.displayText(initFrame);
    } else{
      this.isSpecialScene = true;
      this.playSpecialScene(sceneNum, initFrame);
    }
    
  }

  fastForwardText(){
    this.text.fastFwdText()
  }

  checkCanGoNextScene(){//checks if the special scene is done (special scenes usually have a set run-time) AND checks if all text is on screen.
    if(this.isSpecialScene){
      if(frameCount > this.specFrame + this.sceneTime*20){//only returns true if this math calculates that the time specified in the csv has passed
        return true;
      }
    }
    if (!this.isSpecialScene){
      if(this.text.getShowFullText()){
        return true;
      }
    }
  }


  playSpecialScene(sceneNum, initFrame){//customized functions for each special scene
    if(initFrame === frameCount-1){//ensures this only happens once for each new scene
      this.specFrame = initFrame;
      this.bg = new Background(this.ScenesCSV.getColumn('Background Img')[sceneNum], this.ScenesCSV.getColumn('Char 1')[sceneNum]);
      this.text = new Dialogue(this.ScenesCSV.getColumn('Speaker')[sceneNum], this.ScenesCSV.getColumn('Text')[sceneNum]);  
      this.charsprites = new CharSprite(this.ScenesCSV.getColumn('Char 1')[sceneNum], this.ScenesCSV.getColumn('Char 2')[sceneNum], this.ScenesCSV.getColumn('Background Img')[sceneNum]);
      this.sceneTime = parseFloat(this.ScenesCSV.getColumn('Time')[sceneNum]);
      this.framesToPlay = this.sceneTime*20;
    }
    if(sceneNum === 45){
      push();
      this.bg.displayBackground()
      if(frameCount < initFrame + this.framesToPlay/2){
        fill(0,0,0, 255*map(frameCount-initFrame, 0, this.framesToPlay/2, 0, 1))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }else if(frameCount >= initFrame + this.framesToPlay/2){
        fill(0,0,0, 255*map(frameCount-initFrame, this.framesToPlay/2, this.framesToPlay, 1, 0))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }
      pop();
    }
    if(sceneNum ===52){
      this.bg.displayBackground()
      push();
      if(frameCount - initFrame < 20){
        fill(0,0,0, 225 * map(frameCount-initFrame, 0, 20, 0, 1))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }else if(frameCount - initFrame > 40){
        fill(0,0,0, 225 * map(frameCount-initFrame, 40, 60, 1, 0))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
        
      }else{
        fill(0)
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
        if(!Pencil_Scratching.isPlaying()){
          Pencil_Scratching.play()
        }
      }
      pop();
    }
    if(sceneNum === 56){
      this.bg.displayBackground();
      push()
      fill(0,0,0, 255*map(frameCount-initFrame, 0, this.framesToPlay, 0, 1))
      rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      pop()
      if(frameCount>initFrame+this.framesToPlay+5){
        image(Text_Box,CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
      }
    }
    if(sceneNum === 71){
      this.bg.displayBackground();
      push()
      fill(0,0,0, 255*map(frameCount-initFrame, 0, this.framesToPlay, 0, 1))
      rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      pop()
      if(frameCount>initFrame+this.framesToPlay+5){
        image(Text_Box,CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
      }
    }
    if(sceneNum === 124){
      this.bg.displayBackground();
      push()
      noStroke();
      fill(floor(random(230, 255)), floor(random(0, 50)), floor(random(0, 50)), floor(random(60,90)))
      rectMode(CENTER);
      rect(random(CanvWidth/6, CanvWidth*5/6), random(CanvHeight/11, CanvHeight/4), CanvWidth, CanvHeight)
      pop()
    }
    if(sceneNum === 125){
      this.bg.displayBackground();
      push();
      noStroke();
      fill(floor(random(230, 255)), floor(random(0, 50)), floor(random(0, 50)), floor(random(60,90)))
      rectMode(CENTER);
      rect(random(CanvWidth/6, CanvWidth*5/6), random(CanvHeight/11, CanvHeight/4), CanvWidth, CanvHeight)
      if(frameCount- initFrame < this.framesToPlay){
        fill(0,0,0, 255*map(frameCount-initFrame, 0, this.framesToPlay, 0, 1))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }else{
        fill(0);
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }
      pop();
    }
    if(sceneNum === 135){
      this.bg.displayBackground();
      push();
      if(frameCount- initFrame < this.framesToPlay){
        fill(0,0,0, 255*map(frameCount-initFrame, 0, this.framesToPlay, 1, 0))
        rect(CanvWidth/2,CanvHeight/2, CanvWidth, CanvHeight);
      }
      pop();
    }
    if(sceneNum === 162){
      push();
      imageMode(CENTER);
      this.bg.displayBackground();
      this.charsprites.displayCharSprite();
      this.text.displayText(initFrame);
      if(frameCount - initFrame >=10){
        let num = floor(random(0,5));
        let txt = "aaaaa aaa aaaaaaaaaa aaaa aaaaa aaaa aaaaaaaa aaa aaaaaaaa aaaaaaaaaaa aa"
        if(num === 0){
          image(Flashback1, CanvWidth/2, CanvHeight/2,CanvWidth, CanvHeight);
        }
        if(num === 1){
          image(Flashback1_chr, CanvWidth/2, CanvHeight/2,CanvWidth, CanvHeight);
        }
        if(num === 2){
          image(Flashback1_chr2, CanvWidth/2, CanvHeight/2,CanvWidth, CanvHeight);
        }
        if(num === 3){
          image(Flashback1_chr3, CanvWidth/2, CanvHeight/2,CanvWidth, CanvHeight);
        }
        if(num === 4){
          image(Flashback1_chr4, CanvWidth/2, CanvHeight/2,CanvWidth, CanvHeight);
        }
        fill(255,0,0)
        textSize(CanvHeight*0.0357);
        textFont(ForcedSquare);
        textAlign(CENTER);
        rectMode(CENTER);
        if(txt.length >=frameCount-initFrame-9){
          text(txt.substring(0, frameCount-initFrame-9), CanvWidth/3, CanvHeight-CanvHeight/11);
        }else{
          text(txt, CanvWidth/3, CanvHeight-CanvHeight/11)
        }
      }
      pop();
    }
    if(sceneNum === 177){
      this.bg.displayBackground();
      this.charsprites.displayCharSprite();
      this.text.displayText(initFrame);
      if(frameCount - initFrame >=24){
        image(Flashback2, CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight);
        push()
        textSize(CanvHeight*0.0357);
        textFont(ForcedSquare);
        fill(255, 111, 28)
        text("Hello JX-273, are you ready to begin?", CanvWidth/3 + random(-5,5), CanvHeight/4 + random(-3,3))
        pop();
      }
    }
    if(sceneNum === 182){
      this.bg.displayBackground();
      this.charsprites.displayCharSprite();
      this.text.displayText(initFrame);
      if(frameCount-initFrame >8){
        if(frameCount%3 === 0){
          image(Flashback3_1, CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
        }
        if(frameCount%3 === 1){
          image(Flashback3_2, CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
        }
        if(frameCount%3 === 2){
          image(Flashback3_3, CanvWidth/2, CanvHeight/2, CanvWidth, CanvHeight)
        }
      }
    }
  }
}
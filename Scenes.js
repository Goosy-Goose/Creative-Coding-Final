class Scenes{
  constructor(ScenesCSV){
    this.ScenesCSV = ScenesCSV;
    this.bg;
    this.text;
    this.charsprites;
    this.newSceneStart = true;
    this.canGoNext = false;
  }

  playScene(sceneNum, initFrame){
    if(this.ScenesCSV.getColumn('Is Special')[sceneNum] != "t"){
      if(initFrame === frameCount-1){//ensures this only happens once for each new scene
        this.bg = new Background(this.ScenesCSV.getColumn('Background Img')[sceneNum], this.ScenesCSV.getColumn('Char 1')[sceneNum]);
        this.text = new Dialogue(this.ScenesCSV.getColumn('Speaker')[sceneNum], this.ScenesCSV.getColumn('Text')[sceneNum]);  
        this.charsprites = new CharSprite(this.ScenesCSV.getColumn('Char 1')[sceneNum], this.ScenesCSV.getColumn('Char 2')[sceneNum]);
      }
      this.bg.displayBackground();    
      this.text.displayText(initFrame);
      this.charsprites.displayCharSprite();
    } else{
      //functions specifically for the special scenes where sumn funky happens
    }
    
  }

  fastForwardText(){
    this.text.fastFwdText()
  }

  checkCanGoNextScene(){
    if(this.text.getShowFullText()){//if the full dialogue is shown AND IF FLASHBACK/SPECIAL IS COMPLETE
      return true;
    }
  }

}
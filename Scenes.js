class Scenes{
  constructor(ScenesCSV){
    this.ScenesCSV = ScenesCSV;
    this.bg;
    this.text;
    this.charsprites;
    this.isSpecialScene = false;
    this.specialSceneDone = false;
    this.canGoNext = false;
  }

  playScene(sceneNum, initFrame){
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

  checkCanGoNextScene(){
    if(this.isSpecialScene){
      if(this.specialSceneDone){
        print("done");
        return true;
      }else{
        print("not done")
        return false;
      }
    }

    if(this.text.getShowFullText()){//if the full dialogue is shown AND IF FLASHBACK/SPECIAL IS COMPLETE
      return true;
    }

    
  }


  playSpecialScene(sceneNum, initFrame){
    let sceneTime;
    if(initFrame === frameCount-1){//ensures this only happens once for each new scene
      //this.specialSceneDone = false;
      this.bg = new Background(this.ScenesCSV.getColumn('Background Img')[sceneNum], this.ScenesCSV.getColumn('Char 1')[sceneNum]);
      this.text = new Dialogue(this.ScenesCSV.getColumn('Speaker')[sceneNum], this.ScenesCSV.getColumn('Text')[sceneNum]);  
      this.charsprites = new CharSprite(this.ScenesCSV.getColumn('Char 1')[sceneNum], this.ScenesCSV.getColumn('Char 2')[sceneNum], this.ScenesCSV.getColumn('Background Img')[sceneNum]);
      sceneTime = this.ScenesCSV.getColumn('Time')[sceneNum];
      //setTimeout(function(){this.specialSceneDone = true; print(this.specialSceneDone)}, parseFloat(sceneTime)*1000);
    }
    //print(parseFloat(sceneTime)*1000)
    setTimeout(function(){this.specialSceneDone = true; print(this.specialSceneDone)}, parseFloat(sceneTime)*1000);
  }
}
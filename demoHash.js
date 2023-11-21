class demoHash{
  constructor(text){
    this.text = text;
    this.array = new Array();
  }
  addSentencer(){
    this.array = this.text.split(" ");
    return this.array;
  }
  CheckSentencer(){
    this.array.forEach(element => {
      if(element.includes("#")){
        return true;
      }
    });
    return false;
  }
}